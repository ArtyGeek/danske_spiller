Verdict: PASS
Tested: task/fix-verbs-imperative@3b05b77e0497e92f55476613f603fc890985a2bf

| Check | Result | Evidence |
|---|---|---|
| Diff scope | PASS | `git diff --stat master...`: only shared/data/verbs.js, 4 insertions, 1 deletion (regex in weak1e builder) |
| Field diff, 201 verbs master vs branch | PASS | 201 vs 201 items; 18 imperative diffs, 0 other-field diffs |
| 18 changed imperatives correct | PASS | kigge kig, snakke snak, spille spil, lytte lyt, lukke luk, hoppe hop, slutte slut, danne dan, pakke pak, passe pas, rette ret, nikke nik, kramme kram, kysse kys, bygge byg, stoppe stop, flytte flyt, rulle rul; exactly the expected set |
| No over-reduction | PASS | regex reduces only a final doubled consonant (not vowels or l/r/s clusters). fylde fyld, hjælpe hjælp, ændre ændr, cykle cykl, handle handl, samle saml, kaste kast and similar are unchanged |
| Read all 201 imperatives | PASS | No incorrect forms found; irregulars vær, hav, bliv, gør, sig, vid, lig, sid, tag, kom, giv, hed, lad, bring fine. Modals and ske have null (intentional) |
| validate.js | PASS | TOTAL 0 errors, 0 warnings |

Remaining DEFECTs: none found (pre-existing or otherwise).
CONCERNs: none. Not a native speaker; all forms are standard textbook imperatives.
Not covered: no browser or UI run (data-only change); other games consuming verbs.js were not run, and only the imperative field changed.
