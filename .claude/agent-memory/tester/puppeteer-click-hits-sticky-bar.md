---
name: puppeteer-click-hits-sticky-bar
description: Headless clicks on header/mode buttons silently miss after a game scrolls; scrollTo(0,0) first
metadata:
  type: feedback
---

In these games the Sjovt sticky bar (`.sd-bar`) overlays the top of the page. After a round, `focus()` on Spil/first option scrolls the page, so `page.click('#btn-sound')` or a mode button lands on the nav bar instead and does nothing (no error). Looks like a game bug (mode "doesn't switch", mute "doesn't toggle") but is a harness artefact.

**Why:** Cost two false FAILs on tids-game (mode 3 round actually played mode 2 items; mute test).
**How to apply:** `await page.evaluate(() => scrollTo(0,0))` before clicking anything in the header or mode/level lists; if a click "has no effect", check `document.elementFromPoint` at the element centre before filing a bug.
