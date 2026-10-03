---
name: windows-scratch-script-imports
description: Scratchpad .mjs scripts must import tests/lib/harness.mjs via file:///C:/... URL; /c/... paths fail in node on Windows
metadata:
  type: feedback
---

In a node ESM script under the scratchpad, `import ... from '/c/Users/...'` resolves to `C:\c\Users\...` and fails.

**Why:** Git Bash paths are not node paths; hit ERR_MODULE_NOT_FOUND.
**How to apply:** import `file:///C:/Users/taras/Downloads/danske_spiller/tests/lib/harness.mjs`; `SHOT_ROOT` env can stay a /c/ path (it is used by fs in Git Bash node? verified working). Also: Leitner `srsIsDue` treats never-seen items as due, so "missed items come first" cannot be asserted from the pool alone; assert "box>=2 items excluded" and report prioritisation as a concern.
