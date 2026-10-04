# Distortion patterns

What non-native, machine-made or garbled Danish looks like in a transcript. Weight a **pattern** (recurrence, independent signals) far above a single slip — natives slip too. Severity: **H** strong evidence, **M** moderate, **L** weak/check only.

## 1. Grammar and word order
| Pattern | Example (distorted → native) | Sev |
|---|---|---|
| Main-clause V2 broken after a fronted element | "I dag jeg går hjem" → "I dag går jeg hjem" | H |
| Subordinate-clause adverb after the verb | "…fordi han kommer ikke" → "…fordi han ikke kommer" (note: common in native speech after *at/fordi*, so weight low unless frequent) | L–M |
| Wrong en/et | "et dag", "en barn", "mit far", "den hus" | M–H (recurring) |
| Double definiteness | "den store bilen" → "den store bil" | H |
| Missing definiteness suffix where needed | "Jeg købte bil" for a specific car | M |
| Infinitive/participle slips | "Jeg har gå", "Han vil kommer", "Jeg har spise" | H |
| Wrong auxiliary in perfect | "Jeg har kommet" → "Jeg er kommet" | M |
| Reflexive possessive confusion | "Han tog hans bog" (own book) → "Han tog sin bog" | M |
| Preposition errors | "tænke på/om" mixed, "glad for/af", "interesseret i" | M |
| Over-use of *ikke* placement rules from English "do-support" | "Jeg gør ikke vide det" | H |

## 2. Lexis and calques
| Source | Calque → native | Sev |
|---|---|---|
| English | "gøre mening" → *give mening* | M |
| English | "tage en beslutning" → *træffe en beslutning* (increasingly accepted; low) | L |
| English | "have en god tid" → *have det hyggeligt / godt* | M |
| English | "jeg kan ikke vente med at…" → *jeg glæder mig til at…* | M |
| English | "du er velkommen" as reply to thanks → *selv tak / det var så lidt* | M |
| English | "jeg er god" (I'm good) → *jeg har det godt / det går fint* | L–M |
| English | "jeg er varm/kold" → *jeg har det varmt/koldt* | M |
| English | "hvad er din navn" → *hvad hedder du?* | M |
| English | "for to år" (duration) → *i to år*; "for to år siden" is correct | L |
| English | "ringe nogen op" without object clitic patterns, "kalde" for phone → *ringe* | M |
| German | "ich bin gut" → *det går godt*, "jeg har det gut" | M |
| Any | Literal translation of an idiom ("regne katte og hunde") → Danish idiom *det styrtregner* | H |
Also: wrong false friends (*kunne* / *kende* / *vide* mix: "Jeg kender ikke svaret"), *gift* (poison / married), *rolig/stille* confusions.

## 3. Scandinavian-neighbour leakage
- **Swedish**: *inte, och, mycket, jag, bara, någon, också, varför, hur, nu* spelled/pronounced Swedish; Swedish stress/word forms.
- **Norwegian**: *veldig, noe, igjen, ikkje, heter, hva* (unreduced), *å* as infinitive marker in writing, *bli* for Danish *blive*.
Sparse single words may be dialect, a loan or a quote. Systematic substitution is a signature of a Swedish/Norwegian speaker.

## 4. Machine-script / TTS-source tells
Often grammatically fine, which is exactly why they are hard to catch. Look for **absence** more than error:
- No discourse particles over many turns; no ellipsis; no repairs.
- Every turn a complete, polite, balanced sentence ("Det glæder mig at høre. Hvordan har du det i dag?").
- Textbook openers/closers, enumerations spoken like writing, perfectly parallel structures.
- Over-formal vocabulary in casual talk (*hvorledes, således, endvidere, desuden, derfor, således*), or *De* instead of *du*.
- Generic, culture-free content: no Danish-specific references, hedging, understatement or irony.
- Correct but odd collocations: adjective–noun pairs a Dane would not choose though each word is real.

## 5. ASR artefacts (do not blame the speaker)
- Mis-segmentation of reduced forms ("æ ved" for *jeg ved*; *hvad for noget* → *hva for nåt*).
- Homophone confusions (*hvad/hvor*, *været/vært*, *der/dér*, *så/sådan*), dropped fillers, invented punctuation.
- English or Swedish words appearing where Danish was spoken, from a wrong-language model.
- Nonsense tokens clustered in one stretch → recogniser failure, not distortion. Report as "transcript quality", lower confidence, and ask for a better transcript.

## Judging a pattern
1. Same error type ≥ 3 times, or ≥ 3 *different* interference signals in a short sample → pattern → **distorted**.
2. One or two isolated slips, plus clear native signals (particles, repairs, ellipsis) → **native, with notes**.
3. Grammar clean but zero spoken-naturalness signals over a long casual sample → **distorted (machine/scripted or textbook speech)**, medium confidence, say why and recommend a native listen.
4. Mixed or ASR-damaged → **inconclusive**.
