---
name: game-test-harness-from-worktree
description: How to run smoke and custom puppeteer checks against a worktree game on this Windows setup
metadata:
  type: reference
---

Worktrees have no tests/node_modules. Run from the MAIN repo `tests/` dir: `node smoke.mjs "../.worktrees/<task>/<game>/index.html"`. Custom scripts live in the scratchpad and import `file:///C:/Users/taras/Downloads/danske_spiller/tests/lib/harness.mjs` (launch/openGame/sleep); run with cwd = main `tests/`.

**Why:** the harness resolves puppeteer-core from its own dir; scratchpad scripts cannot resolve it otherwise.

**How to apply:** file:// localStorage is shared by all pages in one browser, so `localStorage.clear()` then `page.reload()` at the start of each scenario (a first scripted click once appeared to be swallowed without the reload). Root `index.html` pageerror "Cannot set properties of null (setting 'textContent')" is pre-existing on master; smoke.mjs on the root page is not meaningful. SRS state is in localStorage `srs:<game-id>` (items/patterns). Sjovt CSS uppercases button text, so `innerText` regexes for "Spil igen" must be case-insensitive. A per-game theme must keep light-mode `--sd-bg` light, or smoke's contrast check fails on the dark `--sd-text` brand text.
