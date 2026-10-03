---
name: filled-sentence-checks
description: Cloze data where the blank holds a verb phrase needs an automated filled-sentence audit; typical bugs are doubled adverbs, duplicated infinitives and wrong word order around the blank
metadata:
  type: feedback
---

When the blank covers a whole verb phrase (Danish V2 + negation), authoring mistakes recur: sentence also contains `ikke`/`aldrig`/`endnu` that the option already includes ("har ikke set ikke"), the infinitive stays after the blank ("kommer til at få få"), inversion makes the phrase non-contiguous ("ville jeg ___ kommet"), and perfect distractors in `hvis`-clauses are themselves valid.

**Why:** tids-data (1,260 items): a dump of every item as `sentence with [correct]` plus a script flagging repeated adverbs found ~35 real errors that validate.js cannot see.

**How to apply:** (1) Put subject before the blank; blank = finite verb group incl. `ikke/aldrig`, rest of sentence has no verb. (2) After building, run a script that fills each option/accepted answer and flags repeated adverbs and repeated last-word; read the dump of the hardest modes. (3) For every distractor ask "could a native say this here?" — perfect in `hvis`-clauses, `kunne` for `ville`, `blev` vs `er pp` with 'allerede' are the usual second-correct traps. (4) Do not write placeholder/DROP lines while drafting; they signal an unthought item.
