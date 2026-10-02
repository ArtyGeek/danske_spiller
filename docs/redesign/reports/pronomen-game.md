Verdict: PASS WITH ISSUES
Tested: task/pronomen-game@fa8473d3e40a32ed907aa0efa81ff04d35b9aaf2

Spec: tests/pronomenmysteriet.mjs (rerun: `cd <worktree> && SHOT_ROOT=<main>/docs/redesign/screenshots node <main>/tests/pronomenmysteriet.mjs --shots`). Result 63/65 raw; the 2 raw FAILs are (a) a wrong expectation in my "Space toggles chip" test (chip started pressed, Space correctly un-pressed it -> behaviour OK) and (b) the "due-first" check, see CONCERN C1. Smoke matrix (tests/smoke.mjs --shots): 28/28 PASS.

| Check | Result | Evidence |
|---|---|---|
| Scope: diff = index.html, pronomenmysteriet/index.html, shared/themes/pronomenmysteriet.css; data.js untouched | PASS | git diff --stat master...task/pronomen-game: 3 files, +845/-1 |
| Pools 120/120/180/100/140/100 | PASS | window.PRONOMEN_DATA lengths |
| Start screen: title + one Spil + 6 mode buttons + 3 level chips only | PASS | button list; screenshots small-start-light.png |
| All 6 modes playable, 10-item round, round-end | PASS | each mode: 1/10 header, 7/10 after plan c,w,c,c,w,c,c,c,w,c |
| Correct: ~800 ms auto-advance, no congratulatory text | PASS | click->next item 834-964 ms (incl. click latency); no text beyond sr-only announce "Rigtigt." |
| Wrong: correct answer + exactly one note + TTS replay + Videre, waits for input | PASS | 18 wrong slips, 0 malformed; stays on item until Videre |
| TTS replay on every Danish prompt | PASS (button present) | "Afspil igen" button on prompt and on slip; real audio NOT VERIFIED |
| Round-end: score, accuracy, <=3 weak, one primary Spil igen, Gentag fejl, one cross-game chip | PASS | all 6 modes; Gentag fejl restarts with 1/5 (unique missed) |
| SRS keys `pronomenmysteriet:<mode>:<id>` under `srs:pronomenmysteriet`, no indices, survive reload | PASS | 10 keys per mode, boxes 1112222222 identical after reload |
| Items answered correctly not re-served next round | PASS | leaked=0 |
| Due items first / missed items prioritised | CONCERN C1 | see below |
| Level chips filter (A2 only -> all A2), persist, last level can't be deselected | PASS | |
| Mode selection persists | PASS | |
| Mute: label, persisted, no oscillator/buffer nodes created while muted; unmuted creates nodes | PASS | osc=0 vs 4 |
| Keyboard: Tab order (menu, dark, sound, 6 modes, 3 levels, Spil), Enter on Spil, first option focused, number key picks option, Videre focused after wrong + Enter, Escape -> start, Space on chip | PASS | smoke focus-ring check also PASS |
| 360/390/820/1440 x light/dark x start/play/wrong/round-end: no h-scroll, all tap targets >=44 | PASS | 8 combos, all screens |
| Dark (prefers-color-scheme + data-theme=dark), contrast >=4.5 | PASS | smoke dark/light contrast PASS; screenshots viewed |
| Reduced motion still playable | PASS | smoke |
| localStorage throwing: no crash | PASS | smoke (boot+play) |
| Console errors/warnings/failed requests on file:// | PASS | zero over the whole session; no fetch/XHR/CDN (grep) |
| Options shuffled | PASS | source order only 13/60 shown |
| Apostrophes (Anders', Claus', Jens', Jens's) render correctly in prompt, gloss, note, weak list | PASS | no &#39;/&amp; leaks in 7 apostrophe items |
| Reflexive wrong feedback shows owner chain consistent with the answer | PASS | all 3+7+... chains match `reference` and correct option |
| verify:true items (3, all demonstrative `sådan/sådant`) show nothing odd | PASS | no marker shown |
| Root index: new card (title, desc, A2-B2, sprite 'bog' renders, readable light/dark), opens game, other 12 cards unchanged | PASS | mobile-root-card(.png/-dark.png); diff is +3 lines only; link navigates; "Spil ->" contrast 5.62 |
| Head: title, description, canonical https://sjovtdansk.dk/pronomenmysteriet/index.html | PASS | lines 6-13 |

Bugs: none blocking.
- [pre-existing, not this task] root index.html logs `pageerror: Cannot set properties of null (setting 'textContent')` on load; identical on master and branch.

Concerns (do not fail):
- C1 (SRS selection): buildRound treats never-seen items as "due", so a just-missed (box 1) item competes with ~100+ unseen items for the 10 slots and is not prioritised; in my reload test the 3 missed items did not come back in the next round (2 modes, both missed 3/3 absent). Not-due (box>=2) items are correctly excluded. Consider sorting due-with-history before unseen, as spec 10.1 "mix exact missed items with new items".
- C2 UI: owner chain arrows wrap onto their own line at 360 px (small-wrong-dark.png) — cosmetic.
- C3 UI: English gloss is shown before answering and effectively gives away reflexive answers (spec choice, by design?); gloss uses "Jens's" style, fine.
- C4 UI text: "SAGSMAPPE", "REGEL", "DOM" labels come from the shared theme; Danish and fine. "Til start", "Øv disse igen", "Sagen er afsluttet" natural.
- Content (shown items, all 6 modes ~60 + 19 reflexive read): no clear errors. Doubtful -> native check: `nogen_nogle_noget` "Jeg kender ikke ___ i byen" (nogen vs nogle after negation, both acceptable?) and "Hun har ikke ___ sprog tilfælles" (spelling "tilfælles" vs "til fælles"); subject_object "Læreren spørger ___ om vi har lavet lektier" note says "spørger nogen: os er objekt" (odd wording); note "Noget kan stå foran et adjektiv i ukendt betydning" (awkward); demonstrative verify items dm-saadant-arbejde-kraever-taalmodighed, dm-hvem-har-bedt-om-saadant-toej, dm-jeg-vil-ikke-hoere-paa-saadan-snak. rp-hun-spiser-middag-hos-sine-soestre and rp-boernene-og-deres-laerer rely on the context line/gloss to exclude the other options (acceptable).

Not covered: real TTS audio and real sound output (headless; verified only via AudioContext node counts and button presence); real device/touch; full 30-item data audit per mode (data task's job; only items shown in UI were read, 2 full mode-3 rounds + 7 apostrophe items + 1 round per other mode); screen-reader behaviour (aria-live text checked in source only); the dark-mode toggle button itself (dark verified via emulated scheme which sets data-theme=dark).

Screenshots: docs/redesign/screenshots/pronomenmysteriet/ (small/mobile/tablet/desktop start/play/wrong/roundend, light+dark, root-card, apostrophe-wrong); all <80 KB.
