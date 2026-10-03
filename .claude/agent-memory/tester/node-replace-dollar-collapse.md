---
name: node-replace-dollar-collapse
description: Splicing spec code with String.replace(marker, text) turns `$$` into `$` and silently breaks page.$$ calls
metadata:
  type: feedback
---

When inserting a code block into tests/*.mjs with `s.replace(marker, blockText)`, `$$` in blockText becomes `$` (`page.$$('.opt')` → `page.$('.opt')`), giving a runtime "Cannot read properties of undefined" much later. Shell `node -e` quoting also mangles regex backslashes (`\D` became `D`).

**Why:** Hit twice while extending tests/tidsmaskinen.mjs; wasted two runs.
**How to apply:** insert with a function replacer `s.replace(marker, () => block)` or slice/concat; write blocks via the Write tool into a file and splice with a .cjs script, not `node -e`; grep the result for `page.\$(` afterwards and `node --check`.
