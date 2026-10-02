// Shared headless-browser helpers. Games are always opened via file:// (that is the deployment target).
import puppeteer from 'puppeteer-core';
import { pathToFileURL } from 'node:url';
import path from 'node:path';
import fs from 'node:fs';

export const CHROME = process.env.CHROME_PATH || 'C:/Program Files/Google/Chrome/Application/chrome.exe';
export const VIEWPORTS = {
  small:   { width: 360,  height: 740,  isMobile: true,  hasTouch: true },
  mobile:  { width: 390,  height: 844,  isMobile: true,  hasTouch: true },
  tablet:  { width: 820,  height: 1180 },
  desktop: { width: 1440, height: 900 },
};

export const sleep = ms => new Promise(r => setTimeout(r, ms));

export async function launch() {
  return puppeteer.launch({ executablePath: CHROME, headless: 'new', args: ['--allow-file-access-from-files'] });
}

/** Open a game file. Returns { page, issues }; issues collects console errors/warnings, page errors, failed requests. */
export async function openGame(browser, file, { viewport = 'mobile', colorScheme, reducedMotion, init } = {}) {
  const page = await browser.newPage();
  const issues = [];
  page.on('console', m => { if (['error', 'warning'].includes(m.type())) issues.push(`console.${m.type()}: ${m.text()}`); });
  page.on('pageerror', e => issues.push(`pageerror: ${e.message}`));
  page.on('requestfailed', r => issues.push(`requestfailed: ${r.url()} ${r.failure()?.errorText}`));
  await page.setViewport(VIEWPORTS[viewport]);
  const feats = [];
  if (colorScheme) feats.push({ name: 'prefers-color-scheme', value: colorScheme });
  if (reducedMotion) feats.push({ name: 'prefers-reduced-motion', value: 'reduce' });
  if (feats.length) await page.emulateMediaFeatures(feats);
  if (init) await page.evaluateOnNewDocument(init); // e.g. make localStorage throw
  await page.goto(pathToFileURL(path.resolve(file)).href, { waitUntil: 'load' });
  await sleep(1500); // let the Sjovt preloader curtain finish
  return { page, issues };
}

/** True if the page scrolls horizontally. */
export const hasHorizontalOverflow = page =>
  page.evaluate(() => document.documentElement.scrollWidth > document.documentElement.clientWidth);

/** Visible interactive elements smaller than 44x44 css px. */
export const smallTapTargets = page => page.evaluate(() => {
  const sel = 'button, a[href], input, select, textarea, [role=button], [tabindex]:not([tabindex="-1"])';
  return [...document.querySelectorAll(sel)].filter(el => {
    const r = el.getBoundingClientRect(), cs = getComputedStyle(el);
    return r.width && r.height && cs.visibility !== 'hidden' && cs.display !== 'none' && (r.width < 44 || r.height < 44);
  }).map(el => {
    const r = el.getBoundingClientRect();
    return `${el.tagName.toLowerCase()}#${el.id} "${(el.textContent || el.ariaLabel || '').trim().slice(0, 20)}" ${Math.round(r.width)}x${Math.round(r.height)}`;
  });
});

/** Icon-only buttons without an accessible name. */
export const unlabelledButtons = page => page.evaluate(() =>
  [...document.querySelectorAll('button, [role=button]')].filter(b => {
    const r = b.getBoundingClientRect();
    return r.width && !(b.textContent || '').trim() && !b.getAttribute('aria-label') && !b.getAttribute('title');
  }).map(b => b.outerHTML.slice(0, 80)));

/** Tab through the page; returns elements that received focus without a visible outline/ring. */
export async function focusRingProblems(page, max = 25) {
  const bad = [];
  for (let i = 0; i < max; i++) {
    await page.keyboard.press('Tab');
    const r = await page.evaluate(() => {
      const el = document.activeElement;
      if (!el || el === document.body) return null;
      const cs = getComputedStyle(el);
      const ring = (cs.outlineStyle !== 'none' && parseFloat(cs.outlineWidth) > 0) || cs.boxShadow !== 'none';
      return { ring, id: `${el.tagName.toLowerCase()}#${el.id}` };
    });
    if (r && !r.ring) bad.push(r.id);
  }
  return [...new Set(bad)];
}

/** WCAG contrast for elements with direct text vs their effective opaque background; returns failing samples (<4.5). */
export const lowContrast = page => page.evaluate(() => {
  const lum = ([r, g, b]) => { const f = v => (v /= 255) <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4; return 0.2126 * f(r) + 0.7152 * f(g) + 0.0722 * f(b); };
  const parse = c => (c.match(/[\d.]+/g) || []).map(Number);
  const bgOf = el => { for (; el; el = el.parentElement) { const c = parse(getComputedStyle(el).backgroundColor); if (c.length >= 3 && (c[3] ?? 1) > 0.9) return c; } return [255, 255, 255]; };
  const out = [];
  for (const el of document.querySelectorAll('body *')) {
    if (![...el.childNodes].some(n => n.nodeType === 3 && n.textContent.trim())) continue;
    const r = el.getBoundingClientRect();
    if (!r.width || !r.height) continue;
    const cs = getComputedStyle(el);
    if (cs.visibility === 'hidden' || cs.display === 'none' || +cs.opacity === 0) continue;
    const L1 = lum(parse(cs.color)), L2 = lum(bgOf(el));
    const ratio = (Math.max(L1, L2) + 0.05) / (Math.min(L1, L2) + 0.05);
    if (ratio < 4.5) out.push(`${ratio.toFixed(2)} ${el.tagName.toLowerCase()}#${el.id} "${el.textContent.trim().slice(0, 24)}"`);
  }
  return [...new Set(out)].slice(0, 15);
});

export async function shot(page, game, viewport, name) {
  const dir = path.join('docs/redesign/screenshots', game);
  fs.mkdirSync(dir, { recursive: true });
  const file = path.join(dir, `${viewport}-${name}.png`);
  await page.screenshot({ path: file });
  return file;
}
