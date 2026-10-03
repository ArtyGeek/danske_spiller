---
name: data-audit-future-passive-time-anchor
description: Where real defects hid in tids-data (Tidsmaskinen): items with a topic context but no time anchor, wrong keyed forms from generator fallback, broken blank adjacency
metadata:
  type: feedback
---

In the 1,260-item tids-data audit the structural script was clean (0 errors) but ~23 content DEFECTs existed. Patterns: (1) future `kommer til at`/`bliver` and passive `Der blev ...` items whose context says only "Du taler om X"/"Du fortæller om X", so past/present is also valid; (2) a verb missing from verbs.js (`vokse`) fell back to the infinitive as the keyed preterite; (3) blank adjacency drops a subject in inverted clauses ("Da jeg kom, ___ sne før"); (4) `accepted_answers` not in `options` that are ungrammatical in the frame ("Der bliver sunget og danses").

**Why:** validators check shape, not whether distractors are also correct; the coder's generator reused one context template per sub-pattern.
**How to apply:** for tense/voice data, (a) fill every option and check each against the *context only*, (b) diff all option/correct tokens against shared/data/verbs.js forms and review anything not found (script: collect forms, list unknown tokens), (c) regex the filled sentence for missing subject after inverted clauses, (d) check notes match the answer pattern (several notes described a sibling pattern). Read every item rather than sampling when the first 30 show a template-level flaw.
