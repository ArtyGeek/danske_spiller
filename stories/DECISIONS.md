# Owner decisions (recorded during the implementation run)

| # | Topic | Story | Decision | Date |
|---|---|---|---|---|
| 1 | Forbindeord distractors are now syntactically impossible for the slot | US-002 | Accept as is. Revisit only if a native speaker wants harder options. | 2026-10-04 |
| 2 | Konjunktioner QA-120: "Det føles, som om…" cannot be a blank on key `at` | US-022 | Keep "Jeg føler, at sommeren aldrig kommer i år." (tests `at`). | 2026-10-04 |
| 3 | Adverbier dataset is 10 entries; Måde and Frekvens zones empty | US-007 | Hide empty zones (or mark as coming soon) and correct the misleading ~500 header comment; word list stays at 10 until a native speaker can help expand it. TODO: implement. | 2026-10-04 |
| 4 | Ordstillingsdetektiven first statement: tiles below the fold | US-013 | Collapse the case story on the 1st statement too, with a clear "read the case" toggle. TODO: implement. | 2026-10-04 |
| 5 | Lynrunde XP | US-044 | Confirmed: 10 XP per hit (same as other modes); speed score still +10 per hit. | 2026-10-04 |
| 6 | Adverbier dialogs use a local focus trap (shared `DanskCore.ui.focusTrap` counts a hidden textarea) | US-031 | Accept the local trap; shared helper bug stays recorded as a follow-up. | 2026-10-04 |
| 7 | En/Et word øl: note says en and et øl are both used but the game scores only en | US-024 | Accept both en and et as correct for øl and keep the note. TODO: implement (one item must accept two answers; check scoring/stats). | 2026-10-04 |
| 8 | En/Et mode icons do not always match their mode | US-032 | Re-pick the closest-fitting sprites from the existing shared library (no frozen file edits). TODO: implement. | 2026-10-04 |
| 9 | Stale Sætningsmaskinen docs (1,020 vs 99 items) | US-051 | Update PROGRESS.md AND both specs files (`specs.md`, `improvement/specs.md`) to match the 99-item reality: the user explicitly approved editing the specs files for this change only. TODO: implement. | 2026-10-04 |
| 10 | Tidsmaskinen: "six planned-future duplicates across modes" (list in `stories/implementation/D-TIDS-duplicates.md`) | US-050 | Keep all six duplicate pairs: no change (no learner-visible harm, no progress lost, no test changes). | 2026-10-04 |
