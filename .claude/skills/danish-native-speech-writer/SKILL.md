---
name: danish-native-speech-writer
description: Write Danish that sounds native when read aloud — scripts for voice-over, narration, podcasts, videos, presentations, dialogues, role-play, listening exercises and text-to-speech (TTS) — instead of stiff, written-style or translated Danish. Use this whenever the user wants Danish to be spoken, read out, recorded or fed to a TTS voice ("lav et manuskript", "script til speak", "voice-over på dansk", "make this sound like a Dane talking", "natural Danish dialogue", "write what a Danish person would say"), or wants existing Danish or English text rewritten for speaking, even if they don't say "native". Not for validating existing speech (use danish-oral-validator) and not for grammar-game data (use danish-grammar-qa).
---

# Danish native speech writer

Version 1.1.0 (see `../danish-speech-shared/CHANGELOG.md`). Objective: not "Danish text that a TTS can read" but **Danish speech that passes native-Danish pronunciation evaluation**. Text can only control the text layer; the voice controls stød, blødt d, r, vowels and prosody (standard: `../danish-speech-shared/references/pronunciation-standard.md`).

Produce Danish that a native would plausibly say aloud and that a listener hears as native. Danish written for the eye and Danish written for the ear differ more than in English: a faithful translation of English prose, or a clean "textbook" sentence, is exactly what sounds foreign when voiced.

## Limits
You are not a native speaker, and text cannot encode stød, vowel reduction or prosody. Write for the ear, mark uncertain phrasing, and tell the user the final script deserves a native listen before publishing. Never invent idioms you are unsure of; a plain natural sentence beats a risky idiom.

## Workflow

1. **Pin down the brief** (ask only for what you can't infer): who speaks, to whom, setting, formality (*du*/*De*, casual/neutral/formal), length, and the delivery — human reader, TTS engine, or listening-exercise audio. If the source is English or a written Danish text, note that it will be *re-composed*, not translated.
2. **Plan in Danish thinking**, not in the source language: what would a Dane say here? Start from the point, not the English sentence structure. Name the speaker's stance (understated, dry, warm) — Danish speech leans on understatement and mild irony.
3. **Draft for the ear** using the rules below.
4. **Self-check** with the validator's scanner and checklist (see "Self-check"), fix, and report. For failures follow the loop in `../danish-speech-shared/references/promotion-rule.md`: log to the ledger, fix the script, never edit this skill from a single failure.
5. **Deliver** the script plus a short note: register chosen, anything doubtful for a native to confirm, and delivery hints for the reader/TTS.

## Writing for the ear

- **Short turns and clauses.** One idea per breath. Break long subordinate chains into two sentences joined by *og så*, *men*, *altså*.
- **Spoken syntax:** fronting ("I går ringede hun"), *man*, existential *der er*, left dislocation ("Min bror, han bor i Aarhus"), cleft *det er … der/som*. Keep V2 and subordinate order correct; main-clause order after *at/fordi* is acceptable in casual speech but use sparingly.
- **Discourse particles** where they carry meaning: *jo, altså, da, vel, nok, lige, bare, faktisk, egentlig, sgu* (casual only). Place them correctly (after the finite verb in main clauses, before it in subordinate ones). Don't sprinkle: one or two per turn at most, and none in neutral/formal narration beyond *jo/nok/faktisk*.
- **Ellipsis and clipping** in casual dialogue: "Ved ikke.", "Kommer lige.", "Skal du med?" Full sentences in every turn read as a script.
- **Repairs and fillers** (*øh*, *altså*, *nå*, *ja*, a restarted clause) in casual speech and interviews — modestly, and only if the delivery supports it. Skip them in narration, news and instructions.
- **Collocation over translation:** *give mening, træffe en beslutning, have travlt, glæde sig til, det går fint, selv tak/det var så lidt*. See `references/native-markers.md` in the validator skill for the fuller list.
- **Register by setting:** casual chat → *du*, clipped, particles; neutral explainer/podcast → *du*, complete but light sentences; formal talk/news → full sentences, no slang, *De* only if the setting truly demands it. Don't mix layers inside one speaker.
- **Danish culture and understatement:** *ikke så ringe, det var da meget, ikke dårligt*; avoid American-style superlatives and sales enthusiasm unless the brief demands it.
- **Loans:** keep English loans that Danes actually use (*deadline, cool, nice, mail*) and write them as Danes do; don't force a Danish word where a Dane wouldn't.

## Writing for the reader or TTS voice

- **Spell out for the voice:** numbers, dates, times, units, abbreviations and symbols the way they're *said* ("på femogtyve procent", "klokken halv tre", "tyvende maj"). TTS engines guess, and guess wrong on Danish ordinals and counting (*femogtyve*, vigesimal *halvtreds*, *tres*).
- **Don't phonetically respell** reduced forms in TTS scripts (*hva'*, *ik'*): most engines mispronounce apostrophe forms. Write standard spelling and keep casualness in the *words and structure*. For a human actor, reductions are optional notes.
- **Punctuation is the prosody control:** commas for breaths, full stops for falls, dashes or "…" for hesitation, question marks for rising turns. Follow the Danish comma convention the user uses (default: the 2012 "komma efter hjerte" reform allows either; stay consistent).
- **Hard words:** add a bracketed pronunciation hint only for names, English terms and rare loans, e.g. `[udtales: "dedlajn"]`, and mark it as a delivery note, not part of the spoken text.
- **Length:** about 150–170 words per minute for natural Danish; budget time accordingly.

## Pronunciation-safe scripts (TTS)

- **Run the text through the normalizer** (`shared/dansk-speech.js` (repo root), `DanskSpeech.normalize`), then proof-read its output (it follows listed conventions, e.g. `kl. 14.30` → *klokken fjorten tredive*; spoken *halv tre* is your call), or write numbers/times/dates already spelled out. Write neuter-noun numbers in words (*et hus*): the normalizer reads 1 as *en*. Never ship digits, `kl.`, `fx`, `→ + = /`, `…`/`___` blanks to a voice.
- **Pick words the voice can get right.** Prefer ordinary words over rare names/loans; test hard words on the actual voice. Don't respell to fix stød/vowels: it is unstable across voices.
- **Voice choice beats prompt tweaks**: rank neural "Natural/Online" da-DK voices first; if none exists, say so instead of pretending the output is native.
- **Phrase for intonation**: one idea per sentence, commas at breath points; questions need a real question form, not an English-style rising marker.
- **Claims need evidence.** Only text-level checks can be run here; any statement about how it *sounds* needs a native listen or the round-trip protocol in the standard (§4).

## Self-check (do this before delivering)

1. Run the scanner on the spoken text only (strip stage directions and notes):
   `python ../danish-oral-validator/scripts/scan_markers.py <script.txt>`
   Resolve every flag. Low particle/filler density is fine for narration or formal text, not for casual dialogue.
2. Read each line aloud in your head as the speaker: would a Dane say this in this setting, or write it?
3. Check for the validator's tells: textbook openers/closers, perfectly balanced sentences in every turn, bookish words (*hvorledes, således, endvidere*) in casual talk, English-order sentences, calques.
4. If a line feels doubtful, simplify it rather than polish it, and list it under "to confirm with a native".

## Output format

```
<script, speaker-labelled for dialogue; spoken text only>

---
Register: <casual | neutral | formal>, <du|De>   Length: ~<N> words / ~<M> min
Delivery notes: <pace, emphasis, TTS caveats>
To confirm with a native: <doubtful lines, or "none">
```

Keep notes short. If the user supplied a source text, don't paste a line-by-line translation table unless asked — deliver the script.

## Related
- `danish-oral-validator` — run it on the finished script for a second opinion and to catch what the writer missed. Its `references/native-markers.md` and `references/distortion-patterns.md` are the shared standard for "native" vs "distorted".
