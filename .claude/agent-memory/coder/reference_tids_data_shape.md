---
name: tids-data-shape
description: Facts about tidsmaskinen/data.js that shape the game code (no C1 items, accepted-only equivalents, timeline semantics, capitalised modal answers)
metadata:
  type: reference
---

TIDS_DATA levels are only A2/B1/B2 (zero C1), so a C1 level chip must be disabled per mode. Future items have no `options`/`correct` (first accepted answer + `distractors` form the options; other accepted answers are equivalents). Modal/pluperfect items have accepted equivalents not in `options`. Modal answers can be capitalised ("Kan", "Må") when the blank starts the sentence, so compare via `DC.diff.normalize`. Mode 2 `timeline.ongoing === true` exactly when the correct answer is a perfect (har/er + participle); pluperfect `timeline.start/end` are event labels (earlier/later), not dates. Perfect answers include `har ikke/aldrig + participle`, so a tense classifier must not treat har+adverb as present.

**Why:** found while building tids-game slice 1; a naive classifier mis-classified 24 mode-2 items and C1 chip led to an empty pool.

**How to apply:** when adding modes 6-9 (conditional uses `slots`, no `options`), re-inspect shapes with a node script before writing renderers; reuse `prep()`-style normalisation (accepted vs displayed).
