---
name: verbs-js-pitfalls
description: verbs.js imperative bug (fixed on task/fix-verbs-imperative, may not be merged) and 'er' aux for gå/løbe in the walk/run-distance sense; do not generate forms blindly from it
metadata:
  type: reference
---

`DANSK_VERBS` imperative was built mechanically (stem), so doubled-consonant weak verbs got wrong forms (lukk, snakk ... plus danne->dann). Fixed in branch task/fix-verbs-imperative (18 verbs; regex reduces final doubled consonant in weak1e). Check master has the merge before trusting. Aux is single-string `er` for gå/løbe/falde/flyve etc. (schema has no second value), wrong for "har gået i skole", "havde gået i to timer".

**Why:** In tids-data, token expansion `{verb.M}`/`verb:F` would have produced "lukk" and "er gået i skole". No other code consumes `.imperative`.

**How to apply:** For perfect/pluperfect of gå, løbe, flyve, springe, ride, køre, rejse, flytte check the meaning (state vs activity) and use literal forms.
