---
name: worktree-harness-setup
description: Running tests/smoke.mjs from a task worktree needs a node_modules junction; scratchpad script names and stdin heredoc traps
metadata:
  type: feedback
---

Worktrees have no `tests/node_modules`. Create an absolute junction: `cmd //c mklink //J node_modules 'C:\...\danske_spiller\tests\node_modules'` from `<worktree>/tests` (relative targets fail; it is gitignored). Run with `SHOT_ROOT=<scratchpad>/shots`.

**Why:** smoke fails with ERR_MODULE_NOT_FOUND puppeteer-core otherwise. smoke.mjs only shoots start/play, so write own script (import harness via file:// URL) for correct/wrong/results shots.

**How to apply:** never write `cat > file` without a heredoc (blocks on stdin for 10 min); scratchpad may already hold coder scripts (pm.mjs) - use a unique name. Never `taskkill chrome` (kills other sessions' browsers).
