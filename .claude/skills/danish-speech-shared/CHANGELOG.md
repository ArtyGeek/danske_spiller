# Changelog: danish-speech skills, shared standard, normalizer

Entry: version · date · ledger ids · files · regression result · reviewer

## 1.0.0 · 2026-10-03 (initial baseline; exempt from the one-rule-per-round cap, every row is `adopted-pending-review` until a native/second reviewer signs off)
- Added shared pronunciation standard, promotion rule, findings ledger, regression suite and runner.
- `shared/dansk-speech.js` (repo root) v1.0.0 (normalizer + voice ranking). Patched: `DanskCore.tts`, 10 per-game `speak()` copies, explainer `say()` (2 copies) + `modal.js`. `ttsButton` shows a no-Danish-voice state.
- Skills 1.1.0: writer gains pronunciation-safe-script rules; validator gains a pronunciation rubric (0-3), evidence rules and the self-improvement pointer.
- Independent Opus review (2026-10-03) found 3 P1 + several P2 defects (kl. 1, fractions read as dates, og/eller, phone zero, 2000-tallet, ordinal misfire, silent no-voice behaviour, modal.js load race); all fixed with regression cases (F012-F017).
- Evidence (text layer only):
  - `regression/cases.json`: 100 rows; 34 are expansion checks, 66 are unchanged-text identity checks (audio rows are additional listening items, not scored). Text-level gate 100/100 after. Raw text ("before", `RAW=1`) passes 66 and fails all 34 expansion rows (see `snapshot-before-raw.json`, `snapshot-after-v1.0.0.json`).
  - `tests/speech.test.cjs` 63/63 (incl. negative cases); `tests/speech-risk.cjs`: TTS-hostile tokens in 28 hand-picked real game strings 44 -> 0. This only detects leftover digits/symbols, not wrong words, so it is not a quality score.
  - Number spacing ("ethundrede" vs "et hundrede") is [conv]; the runner compares whitespace-insensitively.
- NOT measured: how any of this sounds. No Danish voice or ASR on the dev machine; 73 audio rows are an unscored listening checklist. Android Chrome behaviour of the silent-no-voice rule is untested.
- Reviewer: Opus review done for this version; native/audio sign-off pending.
