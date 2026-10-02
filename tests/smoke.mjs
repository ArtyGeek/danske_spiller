// Generic smoke + a11y matrix for any game file.
// Usage: node smoke.mjs <path/to/index.html> [playSelector=#btn-play] [--shots]
// Exit 1 if any hard check fails. Re-run a failing game once before trusting a FAIL (flakiness rule).
import path from 'node:path';
import { launch, openGame, sleep, VIEWPORTS, hasHorizontalOverflow, smallTapTargets, unlabelledButtons, focusRingProblems, lowContrast, shot } from './lib/harness.mjs';

const [file, playSel = '#btn-play'] = process.argv.slice(2).filter(a => !a.startsWith('--'));
if (!file) { console.error('usage: node smoke.mjs <game.html> [playSelector] [--shots]'); process.exit(2); }
const shots = process.argv.includes('--shots');
const dir = path.dirname(path.resolve(file));
const game = path.basename(file) === 'index.html' ? path.basename(dir) : path.basename(file, '.html'); // root-level games use the file name
const rows = [];
let failed = false;
const rec = (check, ok, detail = '') => { rows.push({ check, result: ok ? 'PASS' : 'FAIL', detail }); if (!ok) failed = true; };

const browser = await launch();
try {
  for (const vp of Object.keys(VIEWPORTS)) {
    const { page, issues } = await openGame(browser, file, { viewport: vp });
    rec(`${vp}: start screen console clean`, issues.length === 0, issues.join(' | '));
    rec(`${vp}: start screen no h-scroll`, !(await hasHorizontalOverflow(page)));
    if (shots) await shot(page, game, vp, 'start');
    const play = await page.$(playSel);
    if (play) {
      await play.click(); await sleep(600);
      rec(`${vp}: after Spil console clean`, issues.length === 0, issues.join(' | '));
      rec(`${vp}: play screen no h-scroll`, !(await hasHorizontalOverflow(page)));
      const small = await smallTapTargets(page);
      rec(`${vp}: tap targets >=44px`, small.length === 0, small.slice(0, 5).join('; '));
      if (shots) await shot(page, game, vp, 'play');
    } else rec(`${vp}: play button "${playSel}" found`, false, 'pass the right selector as 2nd arg');
    if (vp === 'mobile') {
      const unl = await unlabelledButtons(page);
      rec('icon buttons labelled', unl.length === 0, unl.join('; '));
      const ring = await focusRingProblems(page);
      rec('keyboard focus ring visible', ring.length === 0, ring.join(', '));
    }
    await page.close();
  }
  for (const [label, opts] of [['dark', { colorScheme: 'dark' }], ['light', { colorScheme: 'light' }], ['reduced-motion', { reducedMotion: true }]]) {
    const { page, issues } = await openGame(browser, file, { viewport: 'mobile', ...opts });
    const play = await page.$(playSel);
    if (play) { await play.click(); await sleep(600); }
    rec(`${label}: console clean + still playable`, issues.length === 0 && !!play, issues.join(' | '));
    if (label !== 'reduced-motion') {
      const lc = await lowContrast(page);
      rec(`${label}: text contrast >=4.5`, lc.length === 0, lc.slice(0, 4).join('; '));
    }
    await page.close();
  }
  const { page, issues } = await openGame(browser, file, {
    init: () => { Object.defineProperty(window, 'localStorage', { get() { throw new Error('blocked'); } }); },
  });
  rec('localStorage blocked: no crash', !issues.some(i => i.startsWith('pageerror')), issues.join(' | '));
  await page.close();
} finally { await browser.close(); }

console.log(`\n${game}: smoke matrix`);
for (const r of rows) console.log(`${r.result.padEnd(5)} ${r.check}${r.detail ? '  — ' + r.detail : ''}`);
console.log(failed ? '\nVerdict: FAIL (re-run once to rule out flakiness)' : '\nVerdict: PASS (smoke only — functional/content checks still required)');
process.exit(failed ? 1 : 0);
