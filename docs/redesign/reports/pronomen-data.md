Verdict: PASS
Tested: task/pronomen-data@b9abb96a5fcf6b740411c1e67f38af948dd1a7a0

# pronomen-data - final QA (round 3)

| Check | Result | Evidence |
|---|---|---|
| Only data.js changed | PASS | `git diff --stat master...task/pronomen-data`: 1 file |
| Structure | PASS | 760 items; 120/120/180/100/140/100; ids unique; correct in options; no duplicate normalized sentences; one `___` each; bad=[] |
| ddd-de-traeder-i-kraft-i-januar | PASS | context "Der er kommet nogle nye regler." -> De; Det/Den no longer plausible |
| ddd-den-smager-godt-om-morgenen | PASS | "Jeg har lavet kaffe. ___ er meget stærk." -> Den; the common-gender adjective `stærk` rules out Det |
| Siblings (ddd-de-gaelder-fra-foerste-januar) | PASS | same context, De; unambiguous. Cosmetic: the two regler items are near-duplicates |
| DEFECTs remaining | none | |

## NOT VERIFIED (native-speaker only, not issues)
rp-de-* plural `deres` rule (22 items); `nogle` as distractor after negation (nnn-vi-har-ikke-nogen-penge, nnn-der-er-ikke-nogen-stole-i-lokalet, nnn-jeg-kan-ikke-finde-nogen-steder-at, nnn-jeg-har-ikke-nogen-lektier-i-dag); rp-i-dag-koerer-jens-paa-hendes-cykel (borrowed bike); the 3 verify:true items (dm-saadant-arbejde-kraever-taalmodighed, dm-hvem-har-bedt-om-saadant-toej, dm-jeg-vil-ikke-hoere-paa-saadan-snak); ids of three reworked ddd items no longer match content (cosmetic). Game page/SRS/layout/themes not applicable (data-only).

# History
## Round 2 (855e0d7, PASS WITH ISSUES)
All 6 round-1 DEFECTs verified fixed; borderline ddd-de-traeder-i-kraft-i-januar (De/Det) raised and kaffe item judged odd; both fixed in b9abb96.

# pronomen-data - QA round 2 (re-test after rework round 1)

Tester is not a native speaker; all Danish judgements need native confirmation where marked.

## Round 1 (0d6abf3, FAIL)
6 DEFECTs (rp-pia-laeser-hans-brev-hoejt-for-sin, rp-min-kone-ser-ofte-hans-hund-i, rp-christian-betaler-for-hendes-hotelvaerelse, ddd-det-vil-faa-stor-betydning, ddd-hun-starter-paa-mandag, nnn-har-du-nogen-ledige-timer-i-naeste); all fixed by 855e0d7. All 760 items were read in round 1.
