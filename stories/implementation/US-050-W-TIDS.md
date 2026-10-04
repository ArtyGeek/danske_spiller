# US-050 - Tidsmaskinen slice (W-TIDS)

## 1. Summary
All edits in `tidsmaskinen/data.js`; item ids, modes, correct answers unchanged except the one noted; the 23 US-003 adverb sentences and US-014 changes untouched.
- Gender/countability: "en 12-tal" -> "et 12-tal"; "en billetsalg" -> "et billetsalg"; "Alle bagagerne ___" -> "Al bagagen ___" (all options still fit).
- Calques: removed "indtil nu" from the 10 "aldrig ... indtil nu" sentences (context still says "indtil nu"; e.g. "Vi ___ en kat."); "Jeg ___ til Island" -> "Jeg ___ på Island."; "Vi ___ hele ugen travlt" -> "Vi ___ travlt hele ugen."; "Den gang ___ man" -> "Dengang ___ man"; "Julen 2022 ___ vi" -> "I julen 2022 ___ vi"; "I sommeren fandt hun" -> "I sommer fandt hun"; "så du missede festen" -> "så du gik glip af festen"; "___ nu med at skrige!" -> "___ nu være med at skrige!" (blank now only "Lad"; options Ladet/Lader/Lade/Lad, correct + accepted = "Lad").
- Context vs sentence: ringede contexts now state "to gange"/"tre gange mellem kl. 10 og 10.30"; "Vi har kendt hinanden..." context -> "Du fortæller om to gamle venner."; auction context "Din læge har sat det på." -> "Datoen er fastsat.".
- Note: "Skal ikke udtrykker et forbud eller en pligt til at lade være." (3 items) -> "Skal ikke udtrykker en pligt til at lade være; et egentligt forbud udtrykkes oftest med "må ikke"."
- Invented distractors replaced by real wrong forms: "har flyttet" -> "er flyttet" (5), "havde flyttet" -> "var flyttet", "forberedede" -> "forberedte", "er boet" -> "ville bo" (2), "er cyklet" -> "ville cykle", "er regnet" -> "ville regne", "blev fået" -> "fik" (2), "er fået" -> "har fået" (2).
Status: IMPLEMENTED (content pending native review)

## 3. Tests
- data.js loads (window.TIDS_DATA, 1260 items, same count as before); 47 changed lines diffed against the pre-edit copy.
- `node tests/smoke.mjs tidsmaskinen/index.html`: Verdict PASS.
- `node tests/tidsmaskinen.mjs` (repo root, OUT=scratchpad): TIDSRESULT
## 4. Manual verification: every changed item re-read in context (options/correct/accepted still consistent); counts of each replacement asserted by script.
## 5. Files: `tidsmaskinen/data.js` (lines ~1342, 1873, 3106-3107, 3377, 3425, 3787-4225 sentences, 4920, 5555, 5849, 6156-, 6477, 6824, 7079, 7153, 8985/9002/9181 notes, 9096, 9292, 12217, 15027-15471, 16199, 20384, 21087, 22164-22165, 22951-22952, 24372).
## 6. Remaining risks
- "er flyttet" / "var flyttet" as wrong options for "for to år siden ... " items: "Hun er flyttet til København for to år siden" may be acceptable in colloquial Danish, so the distractor could be arguably correct.
- "Jeg ___ på Island." / "Vi ___ en kat." lose the explicit "indtil nu" cue (the context line still gives it).
## 7. Newly discovered issues (recorded again, not fixed - not named in US-050)
- Ungrammatical passive items: "Der bliver spist ikke i klassen", "Der bliver betalt kun med kort her", "Maden bliver serveret kun mellem klokken 11 og 13" (also noted in US-014; US-003 adverb placement left them).
- tests/tidsmaskinen.mjs must be run from repo root.
## 8. Needs native review (left unchanged)
- "har vokset" distractor (valid but odd) and "havde vokset"; "ville have forsvundet" (real form, kept).
- "Jeg spørger, om du nogensinde ___ sushi" x7 (QA wants a direct question; needs item restructuring).
- "misser jeg bussen" / "misser du toget" (QA lists "missede" only; "når jeg ikke bussen" suggested).
- Six planned-future duplicates across present_vs_preterite and future (1616/8549 area): not removed (ids/counts).
- "Lad nu være med at skrige" word order choice; "I sommer" vs "Om sommeren"; new "Skal ikke" note wording; new contexts ("Datoen er fastsat.", "Du fortæller om to gamle venner.").
- Previously open U-01 (skal/skulle hearsay) and U-02 (kommer til at) still untouched.
## 9. Acceptance criteria
- Each listed correction is applied, per game, in separate PRs: PASS for the Tidsmaskinen items above; duplicates and "nogensinde" frame NOT applied (listed under 8)
- UNCONFIRMED sub-items change only after native confirmation: PASS (none changed)
- Idiomjaeger regex: other owner
- Boejningsvaerkstedet verify:true filter: other owner
- Portal text/labels (owner approval): other owner / blocked
- `node shared/validate.js` 0 errors; smoke per game: smoke PASS; validate.js not applicable (no shared/data change)
