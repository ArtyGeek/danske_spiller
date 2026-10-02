---
name: harness-color-mix-contrast
description: tests/lib/harness.mjs lowContrast mis-parses CSS color-mix() computed colours (reports 1.10); use precomputed hex in themes
metadata:
  type: feedback
---

Use precomputed hex values (not `color-mix()`) for theme tokens that end up as text/background colours.

**Why:** Chrome computes color-mix() to `color(srgb 0.9 0.8 0.1)`; harness `lowContrast` reads the 0-1 numbers as 0-255 and reports ~1.10 on every element, so smoke fails falsely.

**How to apply:** compute tints in a script (python) and write hex. Also run smoke with `cd tests` => shots land in `tests/docs/...` (untracked); delete it after, or set SHOT_ROOT. Play selectors per game: probe with a puppeteer script listing buttons/.card/[onclick]; antonyms/praepositioner `.mode-btn`, magiske `.game-card`, dansk-mester `.path-card`, en-og-et `.mode-card`, ordstilling `.casebtn`, forbindeord `.opt`, idiomjaeger `.btn.primary`, konjunktioner `#startBtn`, boejning `#btn-play`.
