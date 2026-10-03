---
name: derived-captions-audit-whole-dataset
description: Regex-derived UI captions/highlights (timeline zones) must be audited by re-running the classifier over ALL items, not by sampling rounds
metadata:
  type: feedback
---

Tidsmaskinen derives timeline zone + caption from regexes over the answer (tenseClass, condClass, infClass, voiceClass, FUTURE_CUE). Sampled rounds looked fine; copying the classifier functions into a scratch script and running them over every item exposed ~100 wrong captions (e.g. modal "kunne/burde/ville" polite/advice/hypothetical shown as "Datid", counterfactual second halves shown as "Nu", `ved at` "er ved at" shown as "måde").

**Why:** The learner sees the wrong grammar info even when the answer key is right; a round-sampling review misses pattern-level generator errors.
**How to apply:** for any game with derived captions/highlights, extract the classifier, dump `class | context | sentence => answer` for all items, group by class and read each group; report by cluster with counts. Also compare classification inputs (answer only vs full sentence) – single-slot items lose context.
