---
name: validate-js-scope
description: shared/validate.js only validates shared/data/*; game-level data files (e.g. pronomenmysteriet/data.js) are not covered
metadata:
  type: feedback
---

`node shared/validate.js` reports 0/0 even when a game's own data.js is broken, because it only loads shared/data/*.js.

**Why:** In the pronomen-data task, "validator 0/0" was an acceptance item but says nothing about the 760 new items.
**How to apply:** For game data tasks, write a Node script with `global.window=global`, require `shared/dansk-core.js` then the game data.js, and check ids, levels, correct in options, normalized-duplicate sentences, blank count. Also scan for items whose option set contains two valid answers (e.g. nogen+nogle in questions, Det vs De with a plural-noun context, Hun vs Det with an et-word context): that is where real defects hid, not in structure.
