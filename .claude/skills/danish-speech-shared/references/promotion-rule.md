# Promotion rule: when may a finding change a skill?

First question: **is this a reusable Danish pronunciation rule, or an exception for this sample?**

A finding is **generalizable** only if (a) ≥2 *independent* items show the same root cause (different sentences/speakers/scripts, not the same template or regex hit; a reworded sentence counts once), **or** (b) a cited authority states the rule (one item suffices).
Otherwise it is **sample-specific**: log it, add a regression case tagged `known-case`, and do **not** edit a SKILL.md, reference or scanner.

## Loop: Generate → Check → Diagnose → Correct → Re-test → Learn
1. **Check** by an agent other than the generator.
2. **Diagnose**: write a ledger row first. Default hypothesis is a script/normaliser error, not a skill gap.
3. **Correct** the generation. Max 3 attempts per failing item, each with a different hypothesis; then report Blocked with the last evidence.
4. **Re-test**: `node tests/speech.test.cjs` and `node tests/speech-risk.cjs` (in `danske_spiller/`) and `node regression/run_regression.cjs` (here) must show zero regressions. Audio rows (`--audio-checklist`) need a listener and are never auto-passed.
5. **Learn**: only ledger rows are written automatically. Skill/reference/scanner edits are *proposals*, applied only if generalizable **and** a reviewer other than the proposer (Opus-class or the user) approves. Max one promoted rule per review round. Anything new under "native variation", or any [verify] phonetic claim, needs a native or a cited source.
6. Every promoted rule ships with one positive and one negative regression case plus a CHANGELOG entry.
7. Never loosen a check so new audio passes. Candidates without a second independent item after 3 releases are closed as sample-specific.
