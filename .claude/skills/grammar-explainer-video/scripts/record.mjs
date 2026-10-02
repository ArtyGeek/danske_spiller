// Record a grammar explainer HTML page to WebM.
// Usage: node record.mjs <explainer.html> <out.webm> [--width 720 --height 540 --loops 1 --fps 15 --timeout 90]
//
// Contract with the page: it autoplays when opened with ?autoplay=1 and sets
// window.__explainerDone = true after one full loop (set to true again after each further loop if --loops > 1;
// this script resets it to false between loops).
//
// Note: recording starts after the page's load event (first ~100-300 ms of autoplay is not captured).
// Strategy:
//   1. ffmpeg found (FFMPEG_PATH env or PATH) -> puppeteer page.screencast() writes the .webm directly.
//   2. no ffmpeg -> PNG frames via page.screenshot into <out>_frames/ and the exact ffmpeg command is printed
//      (exit 0; the .webm is NOT produced until you run that command).
// Browser: CHROME_PATH env, else Chrome/Edge/Chromium at standard locations (same idea as tests/lib/harness.mjs).
// puppeteer-core: resolved from this script's ancestors (tests/node_modules), cwd, or PUPPETEER_CORE_PATH.
//
// Exit codes: 0 ok | 2 usage | 3 browser/puppeteer setup problem | 4 timeout waiting for __explainerDone | 5 other failure
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { createRequire } from 'node:module';
import { spawnSync } from 'node:child_process';

const die = (code, msg) => { console.error(`record.mjs: ${msg}`); process.exit(code); };
const sleep = ms => new Promise(r => setTimeout(r, ms));

// ---- args ----
const argv = process.argv.slice(2);
const pos = [];
const opt = { width: 720, height: 540, loops: 1, fps: 15, timeout: 90 };
for (let i = 0; i < argv.length; i++) {
  const a = argv[i];
  if (a.startsWith('--')) {
    const k = a.slice(2);
    if (!(k in opt)) die(2, `unknown option ${a}`);
    const v = Number(argv[++i]);
    if (!Number.isFinite(v) || v <= 0) die(2, `option ${a} needs a positive number`);
    opt[k] = v;
  } else pos.push(a);
}
if (pos.length !== 2) die(2, 'usage: node record.mjs <explainer.html> <out.webm> [--width 720 --height 540 --loops 1 --fps 15 --timeout 90]');
const [inFile, outFile] = [path.resolve(pos[0]), path.resolve(pos[1])];
if (!fs.existsSync(inFile)) die(2, `input not found: ${inFile}`);
if (!outFile.toLowerCase().endsWith('.webm')) die(2, 'output must end in .webm');
fs.mkdirSync(path.dirname(outFile), { recursive: true });
opt.loops = Math.floor(opt.loops);

// ---- puppeteer-core ----
async function loadPuppeteer() {
  const tried = [];
  const bases = [];
  if (process.env.PUPPETEER_CORE_PATH) bases.push(process.env.PUPPETEER_CORE_PATH);
  let d = path.dirname(fileURLToPath(import.meta.url));
  for (let i = 0; i < 8; i++) {
    bases.push(path.join(d, 'tests', 'node_modules', 'puppeteer-core'), path.join(d, 'node_modules', 'puppeteer-core'));
    d = path.dirname(d);
  }
  bases.push(path.join(process.cwd(), 'node_modules', 'puppeteer-core'), path.join(process.cwd(), 'tests', 'node_modules', 'puppeteer-core'));
  for (const b of bases) {
    if (!fs.existsSync(path.join(b, 'package.json'))) continue;
    try {
      const entry = createRequire(path.join(b, 'package.json')).resolve(b);
      const mod = await import(pathToFileURL(entry).href);
      return mod.default || mod;
    } catch (e) { tried.push(`${b}: ${e.message}`); }
  }
  try { const mod = await import('puppeteer-core'); return mod.default || mod; } catch (e) { tried.push(`bare import: ${e.message}`); }
  die(3, `puppeteer-core not found. Run: cd tests && npm install   (or set PUPPETEER_CORE_PATH)\n${tried.join('\n')}`);
}

// ---- browser / ffmpeg detection ----
function findBrowser() {
  const c = [process.env.CHROME_PATH,
    'C:/Program Files/Google/Chrome/Application/chrome.exe',
    'C:/Program Files (x86)/Google/Chrome/Application/chrome.exe',
    'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
    'C:/Program Files/Microsoft/Edge/Application/msedge.exe',
    '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    '/Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge',
    '/usr/bin/google-chrome', '/usr/bin/chromium', '/usr/bin/chromium-browser', '/usr/bin/microsoft-edge'].filter(Boolean);
  return c.find(p => fs.existsSync(p));
}
function findFfmpeg() {
  const cand = process.env.FFMPEG_PATH || 'ffmpeg';
  const r = spawnSync(cand, ['-version'], { stdio: 'ignore' });
  return r.error || r.status !== 0 ? null : cand;
}

const puppeteer = await loadPuppeteer();
const exe = findBrowser();
if (!exe) die(3, 'no Chrome/Edge found. Set CHROME_PATH to a chrome.exe/msedge.exe.');
const ffmpeg = findFfmpeg();
const canScreencast = !!ffmpeg;

const url = pathToFileURL(inFile).href + '?autoplay=1';
const deadline = Date.now() + opt.timeout * 1000;
const framesDir = outFile.replace(/\.webm$/i, '') + '_frames';
const warnings = [];

let capErr = null;
let browser, capturing = false, capLoop;
const cleanup = async () => { try { await browser?.close(); } catch { /* ignore */ } };
process.on('SIGINT', async () => { await cleanup(); process.exit(5); });

try {
  browser = await puppeteer.launch({ executablePath: exe, headless: 'new', args: ['--allow-file-access-from-files', '--autoplay-policy=no-user-gesture-required'] });
  const page = await browser.newPage();
  page.on('pageerror', e => warnings.push(`pageerror: ${e.message}`));
  page.on('console', m => { if (m.type() === 'error') warnings.push(`console.error: ${m.text()}`); });
  page.on('requestfailed', r => warnings.push(`requestfailed: ${r.url()}`));
  await page.setViewport({ width: opt.width, height: opt.height, deviceScaleFactor: 1 });

  const remaining = () => Math.max(1, deadline - Date.now());
  const waitDone = async () => {
    try { await page.waitForFunction('window.__explainerDone === true', { timeout: remaining(), polling: 100 }); }
    catch (e) {
      if (e.name === 'TimeoutError') throw Object.assign(new Error(`timeout: window.__explainerDone not true within ${opt.timeout}s`), { code: 4 });
      throw e;
    }
  };

  // Navigate first, then record: screenshots issued while a navigation is in flight hang puppeteer's capture queue.
  // Cost: the first ~100-300 ms of autoplay (page load time) is not recorded.
  await page.goto(url, { waitUntil: 'load', timeout: remaining() });
  let recorder, frames = 0, t0 = 0, tEnd = 0;
  if (canScreencast) {
    recorder = await page.screencast({ path: outFile, fps: opt.fps, ffmpegPath: ffmpeg, format: 'webm', overwrite: true });
  } else {
    fs.rmSync(framesDir, { recursive: true, force: true });
    fs.mkdirSync(framesDir, { recursive: true });
    capturing = true; t0 = Date.now();
    capLoop = (async () => {
      const step = 1000 / opt.fps;
      while (capturing) {
        const s = Date.now();
        let buf;
        try { buf = await page.screenshot({ type: 'png', optimizeForSpeed: true }); } catch (e) { if (capturing) capErr = e; return; }
        fs.writeFileSync(path.join(framesDir, `f${String(frames++).padStart(5, '0')}.png`), buf);
        const w = step - (Date.now() - s);
        if (w > 0) await sleep(w);
      }
    })();
  }

  for (let l = 1; l <= opt.loops; l++) {
    await waitDone();
    if (l < opt.loops) await page.evaluate('window.__explainerDone = false');
  }
  await sleep(300); // hold the final frame briefly

  if (canScreencast) await recorder.stop();
  else { capturing = false; await capLoop; tEnd = Date.now(); }

  if (warnings.length) console.warn(`warnings (${warnings.length}):\n  ` + [...new Set(warnings)].slice(0, 10).join('\n  '));

  if (canScreencast) {
    const size = fs.existsSync(outFile) ? fs.statSync(outFile).size : 0;
    if (!size) throw new Error('screencast finished but output file is empty/missing');
    console.log(`OK: ${outFile} (${size} bytes, ${opt.width}x${opt.height}, ${opt.loops} loop(s), via page.screencast + ffmpeg)`);
  } else {
    const realFps = Math.max(1, Math.round(frames / ((tEnd - t0) / 1000) * 100) / 100);
    console.log(`ffmpeg not found (set FFMPEG_PATH or install it) -> saved ${frames} PNG frames to ${framesDir}`);
    console.log(`Measured capture rate: ${realFps} fps. Encode with:`);
    console.log(`ffmpeg -y -framerate ${realFps} -i "${path.join(framesDir, 'f%05d.png')}" -c:v libvpx-vp9 -crf 32 -b:v 0 -pix_fmt yuv420p "${outFile}"`);
  }
} catch (e) {
  await capturingStop();
  await cleanup();
  console.error(`record.mjs: ${e.message}`);
  if (warnings.length) console.error('page issues:\n  ' + [...new Set(warnings)].slice(0, 10).join('\n  '));
  process.exit(e.code === 4 ? 4 : 5);
}
await cleanup();
process.exit(0);

async function capturingStop() { capturing = false; try { await capLoop; } catch { /* ignore */ } }
