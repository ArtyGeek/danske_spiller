---
name: smoke-passes-on-placeholder-data
description: smoke.mjs passes on placeholder datasets; always grep data.js for "Test sentence"/mode-key mismatch and compare with git history
metadata:
  type: feedback
---

smoke.mjs went 28/28 green on Pronomenmysteriet while data.js was 760 placeholder items ("Test sentence N", opt1/opt2) whose mode keys (anaphoric_agreement) did not match the game's (den_det_de). A later commit had overwritten the real dataset.

**Why:** smoke only checks layout/console, not content, and a stale "data" commit can clobber a QA'd file after merge.
**How to apply:** for any game, first run a node check of data keys vs MODES keys and grep for placeholders; if wrong, `git log -- <game>/data.js` and compare sizes per commit to find the last good version. Run the game spec from the repo root (`node tests/<game>.mjs`), not from tests/.
