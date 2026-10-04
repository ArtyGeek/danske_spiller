---
name: danish-oral-validator
description: Validate whether spoken Danish (a transcript of speech, or ASR output from audio) sounds like native Danish or like distorted, non-native, machine-generated or translated Danish. Produces a verdict, per-dimension scores and quoted evidence. Use this whenever the user wants to check, grade, screen or compare spoken Danish — "does this sound native", "is this natural Danish", "check this transcript/dialogue/voice script", TTS or AI-generated Danish dialogue, language-learner speaking samples, call or interview transcripts in Danish, "dansk mundtligt", "taler han/hun som en dansker" — even if the user never says "validate". Not for checking written grammar rules in game data (use danish-grammar-qa) and not a substitute for a native-speaker listen.
---

# Danish oral-language validator

Version 1.1.0 (see `../danish-speech-shared/CHANGELOG.md`). Pass criterion: **would a native Danish speaker immediately notice a foreign accent or wrong pronunciation or phrasing?** Understandable is not a pass.

Decide whether a piece of spoken Danish is **native** or **distorted** — meaning non-native interference, calqued/machine-translated phrasing, textbook-stiff speech, or garbled output — and show the evidence.

## What this skill can and cannot judge

You work from **text**. That sets hard limits, and the report must say so:

- A transcript can reveal grammar, word choice, idiom, word order, register and discourse habits. This is the main evidence.
- Pronunciation (stød, vowel reduction, soft *d*, uvular *r*, prosody) is **not observable in text**. Only judge it if the user supplies phonetic input (audio-derived scores, ASR round-trip diff, a native listener's notes) and then use the rubric below. Otherwise write "pronunciation: not assessed" — never infer it from spelling.
- ASR transcripts add their own errors and also *normalise* speech (they tend to spell out reduced forms and drop fillers). A clean-looking transcript is therefore weak evidence of stiff speech, and a weird word may be the recogniser's fault, not the speaker's. Treat suspected ASR damage as its own category, not as a speaker error.
- If given audio you cannot process, say so and ask for a transcript (verbatim, with fillers and false starts kept — they are signal).

You are not a native speaker. Classify every finding as **clear** (violates a rule you are sure of), **doubtful** (needs a native check), or **ok**. Never "correct" doubtful Danish by guess.

## Workflow

1. **Get the material.** Need a transcript; note the speaker(s), the setting (casual chat, interview, call, scripted dialogue) and whether it is verbatim ASR, human-transcribed, or generated. Setting changes what "native" sounds like — a news reader is rightly formal, a friend chat is not. If the source is unknown, say the verdict is conditional on it.
2. **Run the first-pass scan** (optional but cheap, and it counts things you would otherwise eyeball):
   `python <skill-dir>/scripts/scan_markers.py <transcript.txt>` (or pipe text on stdin). It prints JSON: token/utterance counts, native-marker density, formal-register hits, and regex flags for known calques, gender slips, double definiteness and Swedish/Norwegian/German/English leaks. Its flags are **leads, not findings** — every one needs a look at context, because regexes cannot tell a slip from a quote or a joke.
3. **Read the transcript yourself**, utterance by utterance, against `references/native-markers.md` (what native speech has) and `references/distortion-patterns.md` (what distorted speech has). The scan misses most of what matters: unnatural-but-grammatical phrasing, wrong collocations, tone.
4. **Score the four dimensions** below, then give the verdict and report.

## Dimensions (score each 0–3 or "n/a")

| Dimension | 3 = clearly native | 0 = clearly distorted |
|---|---|---|
| **Grammar & word order** | V2, subordinate-clause order, en/et, definiteness, tenses all right; deviations are the ordinary spoken kind | Systematic errors in V2, gender, definiteness, verb forms |
| **Lexis & idiom** | Natural collocations, idioms and fixed phrases; no word-for-word borrowing | English/German/Swedish/Norwegian calques, wrong verbs in set phrases, invented words |
| **Spoken naturalness** | Discourse particles, ellipsis, fillers, repairs, tag questions, short clipped turns | Fully formed written-style sentences, no particles, no repairs, every turn complete and symmetrical |
| **Register fit** | Level of formality matches the setting; slang/dialect used consistently | Bookish words in casual talk, or random mixing of registers |

Pronunciation is a fifth dimension **only** with phonetic input (audio-derived scores, ASR round-trip diff, or a native listener's notes). Score it with the rubric below using `../danish-speech-shared/references/pronunciation-standard.md` (§2 phenomena, §4 evidence rules, §5 native variation). No input, no score: write "pronunciation: not assessed", and still run the text-level TTS checks.

### Pronunciation rubric (only with phonetic input; 0–3, "n/a" if not observable)
| Level | Check | 0 = clearly foreign |
|---|---|---|
| Word | phonemes & vowel quality (y ø å æ), consonants (blødt d, g/v weakening, sk/sj/kj, aspiration), vowel length, **stød**, word stress | plosive d, English/trilled r, [ʃ] in sk-, wrong vowels |
| Sentence | reductions, connected speech/linking, rhythm, sentence stress, intonation (statement vs question) | every word equally stressed, no reduction, metronomic rhythm, English-style question rise |
| Overall | naturalness; **native would notice an accent?** | yes → **Distorted**, however clear the words are |

Scale: **0** clearly foreign/wrong · **1** noticeably non-native · **2** acceptable, slightly marked · **3** native-like. Any level ≤1 → Distorted. Respect §5 of the standard (regional stød-lessness etc. is native). Separate **TTS defect**, **ASR defect** and **script defect**: they have different fixes. Text-level TTS risks (digits, `kl.`, abbreviations, symbols, blanks) are checkable from the script alone (`DanskSpeech.risks()` in `shared/dansk-speech.js` (repo root), or `node ../danish-speech-shared/regression/run_regression.cjs`): flag them even when audio is absent.

### Self-improvement
Log each finding in `../danish-speech-shared/ledger/findings-ledger.md`. Edit this skill, its references or the scanner only per `../danish-speech-shared/references/promotion-rule.md` (≥2 independent items or a cited rule, plus a reviewer other than you). Never loosen a threshold to make a sample pass.

## Verdict

- **Native** — all assessed dimensions ≥ 2, no clear errors beyond ordinary spoken slips.
- **Native, with notes** — natural overall; a few doubtful items to confirm.
- **Distorted** — any dimension ≤ 1, *or* a pattern (the same error type recurring, or several independent interference signals). One error is a slip; a pattern is a signature.
- **Inconclusive** — under ~5 substantive utterances, heavy ASR damage, or too little to see a pattern. Say what more material would settle it.

Say which *kind* of distortion it looks like when you can (learner with English L1 interference; Scandinavian-neighbour leakage; machine translation/TTS script; over-formal textbook speech; ASR garble). The kind matters more to the user than the label, because it tells them what to fix.

## Do not penalise native variation

Wrongly failing real Danes is the worst error this skill can make. The following are native, not distorted:

- Regional and social speech: Jutlandic (*æ*, *jæ*, *ve'*), Funen, Bornholmsk, Copenhagen, *Københavnsk/multietnolekt* ("wallah", "mashallah", *det er sgu da*), youth slang, older speakers' forms.
- Heavy reduction and ellipsis ("ved ikke", "hva' sker der", "kommer lige").
- Main-clause word order after *at*/*fordi*/*så* in speech, and *sådan* / *ligesom* as filler — attested and common; flag as low-severity at most.
- Danes' own code-switching with English loans ("cool", "deadline", "sgu nice"), when sparse and phonologically integrated.
- Real disfluencies: false starts, self-repairs, trailing off. Their *absence* across a long casual stretch is more suspicious than their presence.
- Prescriptive-vs-usage splits (*Mette og mig/jeg*, *flere/mere*, *nogen/nogle*, *-ene/-erne* variants). Report as register notes, not errors.

## Report format

```
## Verdict: <Native | Native, with notes | Distorted | Inconclusive>
Confidence: <low | medium | high> — <one line why>
Material: <N utterances, setting, source type; pronunciation: not assessed>
Distortion type (if any): <…>

| Dimension | Score | Basis |
|---|---|---|

### Findings
1. "<exact quote>" — <category> — <clear | doubtful> — <why, one line>
   Native would more likely say: "<…>" (omit if unsure)

### Native signals observed
- <quoted particles, ellipsis, repairs that support "native">

### To confirm with a native speaker
- <doubtful items>
```

Quote the transcript exactly; no finding without a quote. Include native signals as well as errors — a verdict built only on faults is biased. Keep it short: the findings the user can act on, ranked by severity, not every nit.

## Reference files

- `references/native-markers.md` — particles, reductions, ellipsis, repair patterns, and how native speech differs from written Danish. Read in step 3.
- `references/distortion-patterns.md` — interference by source language, grammar slips, calque list, machine-script tells, ASR artefacts. Read in step 3.
- `scripts/scan_markers.py` — the first-pass scanner. Edit its pattern lists when you confirm a new recurring error type.
