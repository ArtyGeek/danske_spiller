---
name: bulk-data-authoring-pattern
description: How to author hundreds of curated Danish items efficiently and avoid the ambiguity traps that recur
metadata:
  type: feedback
---

Author items as pipe-delimited text lines in the scratchpad (level | ctx | sentence | options with `*` on correct | note | gloss | ref) and generate data.js with a small Node build script; a missing/duplicate `*` is caught at build time.

**Why:** In pronomen-data, writing 760 lines freehand produced ~10% junk (placeholder "udgår" lines, ambiguous items). The build script plus a full read-through of the hardest mode caught them.

**How to apply:**
- Never write placeholder lines; filter then re-count and top up.
- Traps found: sentence_da duplicates that differ only in context (validator warns); invariant possessives (vores/jeres/deres) are ambiguous unless the owner is stated in context; plural subjects need `deres` (Danish has no plural sin); nogen/noget before en-ord mass nouns (mælk, hjælp, tid) are both acceptable, and nogle/nogen overlap in positive plural, so tailor distractors; et-nouns with identical plural (forslag, svar, brød) make noget/nogle ambiguous.
- Coordinated "Mette og jeg/mig" subject items need a formal-register context line or both answers are defensible.
- Item `mode` values were used as PRONOMEN_DATA keys (prd example uses reflexive_possessive) rather than the brief's suggested key names; state this in the report.
