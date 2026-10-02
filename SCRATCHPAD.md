# SCRATCHPAD — event log for agents

Append-only chronological log of everything that happens in this repo's build runs.
Purpose: a fresh agent (zero memory) reads **§1 Resume Here** first, then skims **§3 Event Log**
to learn exactly where the last run stopped and why.

**Not a task queue.** `PROGRESS.md` owns the queue; `prd.md` > `specs.md` > `PROGRESS.md` precedence still applies.
This file is run *history + hand-off*. Never edit `prd.md` / `specs.md` because of something written here.

---

## 1. Resume Here  (OVERWRITE this block at the end of every run)

- **Last updated:** 2026-10-02 (initial seed, reconstructed from git log + PROGRESS.md)
- **Active task:** `boejning-data` (status: in-progress) — Bøjningsværkstedet `data.js`
- **Last completed step:** Mode 6 (`maengdevaerkstedet`) grown to 221 items (commit 252f0c3). Shared data done: nouns 325, adjectives 220, verbs 201.
- **Where it stopped:** Mode 5 (`bestemt_ubestemt`) is the big gap — 37 of ~250 hand-written contextual items. Mode 4 (`sammenligningspressen`) 151 of 180 target. Mode 1 auto-scales from nouns (now 325 nouns → ~1300 items, above 900 target).
- **Exact next action:** Hand-author more Mode 5 items (2–3 sentence context, 2 options, one correct, grammar note; no two plausible answers) in `boejningsvaerkstedet/data.js`; run `shared/validate.js`; commit `data(boejningsvaerkstedet): ...`.
- **Open problems / do not repeat:**
  - Latent bug: `shared/data/nouns.js` `lærer` is a REGULAR entry that yields `lærerene`; should be MANUAL `lærerne`. Not yet fixed.
  - 28 adjectives + ~10 nouns flagged `verify: true` (need native-speaker check).
  - Untracked `shared/fonts/` in working tree (not part of any task; ask owner before committing).
  - Stray `tmp_*.js` files in repo root are debug harnesses (`tmp_boot_boejning.js` = headless DOM shim for booting the game). Don't ship them in games.
- **Queue after this:** pronomen-data → pronomen-game → saetning-* → tids-* → skrive-* → qa-pass (see PROGRESS.md).

---

## 2. Entry format (copy for each new event)

```
### YYYY-MM-DD HH:MM · <type> · <task-id or area>
- What: one line, what happened
- Result: ok | partial | failed | blocked  (+ commit sha if any)
- State left behind: files touched, counts, anything half-done
- Next: exactly what the next agent should do
- Gotchas: surprises, bugs found, things not to redo (optional)
```

`type` ∈ `start` · `commit` · `verify` · `bug` · `block` · `stop` · `decision` · `manual` · `infra` · `compact` (auto, written by the PreCompact hook) · `release`

**Rules**
1. Append new events at the **bottom** of §3. Never rewrite or delete old events (only §1 is overwritten).
2. Log at: run start, each commit, each bug found, each block, and run end (with *why* it stopped: done / budget / blocked / error).
3. Always write the `Next:` line as if the reader has no memory — file path, function/array name, target count.
4. After logging the final event of a run, refresh §1 so it matches.

---

## 3. Event Log  (oldest → newest; seeded from git history)

### 2026-06-30 → 2026-07-01 · manual · pre-loop game improvements
- What: Phases 4–7 of `improvements.md` — antonym import, CEFR leveling + why-notes, weak-item/review modes across 5 games, UX cleanup (c70ec2b, d46bb67, e95f65e, cba941b).
- Result: ok
- Next: n/a (legacy games; new platform work starts with the build loop).

### 2026-07-15 21:20 · infra · build loop created
- What: Unattended loop added (`build-loop.sh`, `.claude/prompts/build-increment.md`); ntfy push on stop; adverbs game + detailed spec tracked (0cc798c, 24e58c4, e58ba7a, e52c6b3).
- Result: ok
- Gotchas: ntfy topic lives in gitignored `.build-env`; agent commits are pushed by the script.

### 2026-07-15 21:23 · commit · shared-core-1
- What: `DanskCore.store/tts/srs/diff` (5534b28). Completed.
- Result: ok

### 2026-07-15 23:04 · commit · shared-core-2
- What: `DanskCore.level/ui/quiz` (e5fe18c). Completed.
- Result: ok

### 2026-07-16 03:16 · commit · shared-data-nouns
- What: nouns.js first pass, 188/300 (6e7455f).
- Result: partial → finished 2026-09-23.

### 2026-07-16 07:10 · commit · shared-data-adj-verbs
- What: adjectives.js first pass, 183/220 (ae86313).
- Result: partial → finished 2026-09-24.

### 2026-07-16 11:08 · commit · shared-data-pronouns-clauses
- What: pronouns.js + clause-patterns.js (87 items) + validate.js (9c4afe0, landed via an "Auto-build: uncommitted leftovers" commit).
- Result: ok

### 2026-07-25 22:34 · commit · boejning-data
- What: `boejningsvaerkstedet/data.js` created, Mode 1 `fire_former` generated at load from `DANSK_NOUNS` (752 items) (87c398a).
- Result: partial (Modes 2–6 empty)
- Next: generate Modes 2–4 from shared data; hand-author Modes 5–6.

### 2026-09-06 23:06 · commit · boejning-shell
- What: Bøjningsværkstedet `index.html` shell: parchment/brass theme, start screen, routing, SRS, round-end; Mode 1 playable (21286c2). Completed.
- Result: ok
- Gotchas: `RENDERERS` registry is the extension point; mode buttons auto-enable when `DATA[key]` non-empty. Root `index.html` GAMES registration deliberately deferred to modes-4-6 task.

### 2026-09-07 03:10 · commit · boejning-data
- What: Mode 2 `byg_navneordet` (570) + Mode 3 `adjektivvaerkstedet` (606) generated from shared datasets (f04152f); renderers for Modes 1–3 landed in 605b801 (mislabelled "Auto-build: uncommitted leftovers", also removed stray tmp_gen_test.js).
- Result: ok

### 2026-09-21 03:03 · verify · boejning-modes-1-3
- What: Verified renderers in headless DOM shim; 0 console errors; validate.js 0 errors. Marked task complete (765a631).
- Result: ok
- Gotchas: task had stayed `todo` for two weeks because work was committed under an "Auto-build leftovers" message and PROGRESS.md was never updated. **Always update PROGRESS.md in the same run.**

### 2026-09-21 07:07 · commit · boejning-data
- What: Modes 4–6 data added: sammenligning 151 (generated), bestemt/ubestemt 37, maengde 35 (99cf564).
- Result: partial (counts under prd § 2.4 targets: 180 / 250 / 220)

### 2026-09-22 19:24 · bug · boejning-modes-4-6
- What: Mode 5/6 items have no `mode` field per prd schema → `renderItem` fell through to the empty-state fallback. Fixed with `item.mode || state.mode` (1e61f14). Task marked complete (c039982).
- Result: ok
- Gotchas: Mode 5/6 items intentionally lack `mode`; a round is single-mode so `state.mode` is the discriminator.

### 2026-09-23 03:10 · commit · shared-data-nouns
- What: +137 nouns → 325 (7318872). Completed.
- Result: ok
- Gotchas: noun() builder cannot derive doubling / schwa-elision / agent `-er` plurals → those go in MANUAL entries. Latent bug: `lærer` REGULAR → `lærerene` (should be `lærerne`).

### 2026-09-24 11:07 · commit · shared-data-adj-verbs
- What: `shared/data/verbs.js` 201 verbs (17a49fd).
- Result: partial (adjectives still 183)

### 2026-09-24 15:02 · commit · shared-data-adj-verbs
- What: adjectives.js 183 → 220 (b2c7dc7). Task completed (0482e55). validate.js 0 errors / 0 warnings across all datasets.
- Result: ok

### 2026-09-24 19:07 · commit · boejning-data
- What: Mode 6 `maengdevaerkstedet` grown to 221 items (252f0c3).
- Result: partial
- Next: Mode 5 (37/250) is the largest remaining gap; then Mode 4 (151/180).

### 2026-09-25 09:03 · commit · housekeeping
- What: "Auto-build: uncommitted leftovers 2026-09-24T22-15-04Z" (f4719fa) — sweep commit by build-loop.
- Result: ok

### 2026-10-02 · infra · scratchpad created
- What: Created this SCRATCHPAD.md and seeded it from git history + PROGRESS.md. Added a pointer in `.claude/prompts/build-increment.md` so unattended runs read/append it.
- Result: ok
- Next: next build run should read §1, append its own events below, and refresh §1 at the end.

<!-- APPEND NEW EVENTS BELOW THIS LINE -->
