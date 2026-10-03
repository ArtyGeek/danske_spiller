---
name: danish-tense-absolute-rules-risk
description: Spec-endorsed absolute tense rules (hvornår→datid, bestemt tidspunkt→datid, backshift in reported speech, vil gerne + hvis-datid) are likely second-valid-answer traps; route to native check
metadata:
  type: feedback
---

Tidsmaskinen notes state absolute rules ("kræver datid", "Spørgsmål med hvornår bruger datid", pluperfect in reported speech, `ville gerne` only after `hvis ... havde`). Danish tolerates `har + pp` with hvornår, present tense retained in reported speech, and `vil gerne ... hvis jeg havde råd`. A MC set that lists the tolerated form as a distractor therefore has two defensible answers.

**Why:** tester is not a native speaker, so these end up NATIVE-ONLY rather than DEFECT, but they cluster (11 hvornår items, 12 reported-speech items) and a FAIL verdict should name the cluster.
**How to apply:** when auditing tense/mood data, grep notes for "kræver"/"altid"/"bruger datid"; flag the whole cluster for native review and ask for `verify: true`; never present your own guess as authoritative.
