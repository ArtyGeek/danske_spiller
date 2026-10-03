Verdict: PASS (no DEFECT remains; concerns below)
Tested: task/tids-game@953e2d673ef554e62fd5ff9afecc18e174e4faee

Re-run: `cd .worktrees/tids-game && SHOT_ROOT=<main>/docs/redesign/screenshots OUT=<dir> node <main>/tests/tidsmaskinen.mjs [--shots] [--only=boot,rounds,build,cond,content,unlock,persist,kbd,layout,theme,extras]`. Run sections sequentially; in parallel the timing checks false-fail.

## Round 3 (final) checks
- `git diff 7ef2f06..953e2d6 --stat`: only tidsmaskinen/index.html, +2 lines.
- Mode 9, all 80 derived captions read. 64 lit "Aktivt: bydeform" are all imperative verb forms (incl. "Lad være", "Hold op", negative and "venligst/tak" ones). 16 neutral "Konstruktion: <svar>": `Vil du ikke nok`, `Vil du` (polite questions) and the 14 particle/preposition/"tak" answers (på, af, ned, op, for, ind, ud, med, tak). `luk-doeren-tak-2` ("Luk døren, ___" => "tak") neutral is sensible. No imperative item is wrongly neutral and no non-imperative item is still captioned bydeform.
- Before/after comparison of the real derivation (zone + caption) for all 1,260 items vs round 2: 16 items changed, all in mode 9; modes 1-8 identical. Lit/neutral mode 9 = 64/16.
- smoke.mjs 28/28. Full spec, run sequentially: boot 8/8, rounds 46/46 (incl. a full mode-9 round with SRS keys, missed items back, round-end focus on Spil igen), build 6/6, cond 6/6, content 2/2, unlock/timed 13/13, persist 9/9, kbd 31/31, theme 3/3, extras 5/5, layout 24/24 (4 viewports x light/dark). 0 console errors.

## Round history
- e20a18c FAIL: B1-B5 about 100 items with a wrong zone/caption derived from regex/verb form; B6 focus lost after round end; B7 Spil below the fold.
- 7ef2f06: B1-B7 fixed (conservative note-driven derivation, neutral "Konstruktion: <svar>"); new minor B8 (mode 9 "Vil du…" captioned bydeform), 2 items.
- 953e2d6: B8 fixed. Root pageerror gone since the master merge (verified in round 2).

## Concerns (not failing)
Correct answer shown red with ✗ in the blank after wrong/timeout; first-option focus scrolls the timeline under the sticky bar at 360 px; mode 6 blanks look alike; small caption fonts; "Aktivt:" prefix; "fast forbindelse" caption is vague; mode 3 timeline labels inconsistent; wrong-build slip restates the chosen verb phrase; clock icon in game vs star on the root card; mode 2 timeline cards reveal the answer before answering; C1 data thin (18 items). Content flags for a native check: `han-vil-vaere-pilot`, `jeg-ville-elske-at-bo-ved-havet` (note mentions a condition that is not there); the 124 `verify:true` items were not reviewed here.

## NOT VERIFIED
Real TTS audio, screen reader, real touch device; the 17 multi-accepted conditional slots (equivalents are not selectable in the UI; equivalents verified on patched data for modes 3,4,5,8: 34/34).
