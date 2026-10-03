Verdict: PASS (native-only items NOT VERIFIED)
Tested: task/tids-data@25fddf6884671eff632990fa322e7459333b372f   (round 2 re-test; round 1 was @89eb9e998fdae1c9cfb969a7d4c67734cd74fe80)

## Round 2 (this report)
| Check | Result | Evidence |
|---|---|---|
| Diff vs 89eb9e9 | PASS | only tidsmaskinen/data.js (+303/-280) |
| Counts 120/180/100/140/180/140/140/180/80 = 1,260; verify:true = 124 | PASS | structure script |
| Unique ids, levels, one blank (conditional slots = blanks), correct in options, no duplicate sentence after normalize (all modes) | PASS | script: 0 dupes, 0 space-before-punctuation (was 35), no repeated words; only the known `ikke … ikke` (legit, subordinate clause) and the accepted 114 accepted_answers-outside-options |
| Re-read of all 184 changed items as filled sentences | PASS | 0 DEFECT remaining |
| Round-1 DEFECTs resolved | PASS | `voksede` fixed; `flyttede de sig` removed (both); `vi-har-haft-allerede-tre-moeder` now `har`/`har haft` no longer both valid (context "Tre møder er allerede afholdt", `har` replaced by `fik`); pluperfect subject restored ("Jeg ___ sne før, da jeg kom til Danmark"); all 7 future and 8 passive time-anchor items now carry an explicit cue and their distractors are wrong for it; `bliver sunget` removed from accepted; `talte` added; modal `skynde mig` context "ingen anden mulighed"; `stå op` now keyed `var` |
| 12 reported-speech items | PASS | `har + pp` replaced by `ville have + pp`; each has one valid answer |
| hvornår cluster (11) | NOT VERIFIED | notes softened ("oftest datid"), items marked verify:true, but distractors `har set` / `er kommet` / `har købt` may still be natural Danish; native check needed |
| `vil gerne … hvis jeg havde` cluster | PASS | `vil` distractor replaced by `må`; each set now has one valid answer (modal 159/164/166/167, conditional 61) |
| New modal #59/#60, new imperatives `tag-en-pause`, `skynd-dig-ikke` | PASS | one defensible answer each; `skru ned` set no longer offers `af` |
| Notes fixed (passive er blevet, modal `Må jeg`, `ville ikke`, infinitive stolt/sikker/begejstret) | PASS | match the answer pattern |

New defects introduced: none.

Remaining CONCERN / NATIVE-ONLY (do not block):
- NOT VERIFIED (native): hvornår items (see above); `bekymr-dig-ikke`; modal `jeg-kan-have-flere-aarsager`-type epistemic `må`; `hun-fortalte-at-hun-allerede-havde-forberedet-alt-til` keeps distractor `forberedede` ("hun forberedede alt" is arguably valid progressive); delimited-period `har boet fra 2019 til 2021` items (spec-endorsed); `Boghandlen` spelling.
- Context leaks the answer in 12 items (e.g. `han-har-ikke-drukket-noget-endnu-i-dag`, `de-har-kendt-hinanden-siden-de-var-boern`, and the eight `…-da-…` duration items in pluperfect #88–97 whose context already states "Hun havde skrevet i en time"). Teaches nothing but does not make a wrong answer valid.
- `auktionen-finder-sted-den-3-marts` (present_vs_preterite) kept the context "Din læge har sat det på." from the operation item; context no longer fits.
- `jeg-vil-spise-mere-sundt-fra-i-dag` still lists `kommer til at spise` as a distractor; grammatical in context, weak.
- Accepted/known: two open-condition main clauses accept only present; 114 accepted_answers outside options; imperative A2 recognition set.

## Round 1 history (@89eb9e9): FAIL
23 firm DEFECTs: future 7 and passive 9 (topic-only context, no time anchor so past/present also valid), preterite_vs_perfect 4 (`vokse` keyed as preterite, `flyttede sig` x2, `har` second answer), pluperfect 1 (missing subject), conditional 1 (`talte` not accepted), modal 1 (`vil skynde mig`). Plus clusters sent to native check (hvornår, reported speech, `vil gerne … hvis`), wrong notes, nonsense contexts, 35 space-before-punctuation sentences. All addressed in round 2 except the native-only items above.

## Not covered
UI, persistence, a11y, themes (data-only task); no native-speaker verification.
