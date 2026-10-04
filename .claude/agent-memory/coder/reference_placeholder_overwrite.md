---
name: placeholder-overwrite-check
description: A later "data" commit can overwrite curated data.js with placeholder items; check git history before rewriting data
metadata:
  type: reference
---

pronomenmysteriet/data.js was clobbered by commit 2d606e5 (760 "Test sentence N"/opt1/opt2 items, same counts as the real set) after real data existed in 0d6abf3..b9abb96.

**Why:** identical item counts hid the overwrite; validators only check structure, so it passed.
**How to apply:** when a game shows placeholders, `grep -c "Test sentence" data.js`, then `git log --follow -- <data.js>` and restore the last real version with `git show <sha>:<path>`. Also grep every data.js for "Test sentence"/"opt1" before reporting a data task done (saetning-data worktree also had it in pronomenmysteriet).
