---
name: bash-tool-quirks
description: On this Windows Bash tool, heredocs with quotes/backslashes/! sometimes fail or lose backslashes; write source files with the Write tool, and avoid random-sample loops
metadata:
  type: reference
---

Heredocs (`cat <<'EOF'`) containing apostrophes, `!` or regex backslashes intermittently gave "unexpected EOF" or silently dropped backslashes (a regex with `\]` broke). A `while (set.size < n)` sampler with a weak LCG hung for 120 s and needed `taskkill //F //IM node.exe`.

**Why:** lost time in tids-data; the Write tool never had the problem.

**How to apply:** create every script/data file with the Write tool (scratchpad dir) and run with `node file.js`; use short `sed -i` only for simple literal substitutions; give samplers an iteration cap. Node `shuffle` with `h % n` must use `>>> 0` (a negative modulus produced `null` options).
