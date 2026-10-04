# Danish pronunciation standard (shared by the writer and validator skills)

Target: **contemporary standard Danish (rigsdansk) as spoken in Denmark**. Understandable is not enough: a sample passes only if a native would not immediately notice a foreign accent or wrong pronunciation.

Status labels: **[rule]** stable, textbook-level · **[conv]** project convention · **[verify]** from memory, confirm against ordnet.dk (DDO pronunciation field), Retskrivningsordbogen, Grønnum *Fonetik og Fonologi*, Basbøll *The Phonology of Danish* before relying on it. Never promote a [verify] item into a pass/fail check without that source or a native.

## 1. What can be fixed where
| Layer | Phenomena | Lever |
|---|---|---|
| Text (we control) | numbers, years, times, dates, ordinals, abbreviations, symbols, blanks, loan/name spelling, punctuation/phrasing | `shared/dansk-speech.js` normalizer, script wording |
| Voice/engine (we only choose) | stød, blødt d, r-colouring, schwa/reduction, vowel quality, g/v weakening, stress, intonation | rank voices (neural "Natural/Online" da-DK first); pre-recorded audio or a cloud engine with phoneme control |

Web Speech API takes plain text only; SSML/IPA are ignored in practice. Respelling words to coax stød/vowels is unstable across voices: do not do it except for proven lexicon entries (e.g. Aarhus→Århus), re-tested per voice.

## 2. Phonetic phenomena (checklist for audio review)
1. **Reduction** [rule]: silent/weak letters are not pronounced (d in *land, godt*; g in *pige*; v in *tolv, selv*; -ld/-nd d silent). Schwa merges: -en [n̩], -er [ɐ]. Full vowels on unstressed syllables = foreign.
2. **Blødt d** [rule]: after a vowel d = [ð̞], a very weak approximant (*mad, rød*). A plosive [d] or English [ð] is a tell.
3. **r** [rule]: syllable-initial uvular [ʁ]; after a vowel a vowel-like [ɐ̯]/[ɐ]; adjacent vowels lowered/backed (a→[ɑ]). Trilled/tapped/English r = foreign.
4. **Vowels** [rule]: ~10 short / 11 long qualities; y, ø, å, æ must not be replaced by English-like vowels; long vs short matters (*tak/tag*). Short i/u lower before some consonants (*ikke* ≈ [eɡ̊ə]) [verify exact conditions].
5. **Stød** [rule that it is lexical; exact placement per word = look it up]: distinguishes *hun/hund*, *anden* (duck) / *anden* (second); not predictable from spelling. Absence is regional (some southern dialects), not foreign; wrong placement is noticed.
6. **g, v** after vowels [rule]: g→[j]/[w]/∅ (*bage, pige*); v→[w] (*hav*); hv-→[v], hj-→[j].
7. **sk, sj, kj, tj** [rule]: sk=[sk], never [ʃ]; sj≈[ɕ]; kj=[kʰj], not Norwegian/Swedish [ç].
8. **Aspiration** [rule]: initial stressed p t k aspirated (t affricated); b d g unaspirated voiceless.
9. **Stress** [rule]: first syllable by default; compounds stressed on the first element; verbs deaccent before object/particle; function words reduce (*det, jeg, har*). Equal stress on every word = reading aloud.
10. **Intonation** [conv/verify]: statements fall; most questions, including inverted yes/no, have only a small rise. An English-style big rise is foreign. Flat delivery over long unpunctuated sentences is a text/phrasing defect.
11. **Rhythm / connected speech** [rule]: stress-timed, heavy reduction and elision in fast speech, linking across words. Metronomic syllable timing = foreign.

## 3. Text-normalisation rules (unit-testable)
- Tens 50–90 count in twenties: *halvtreds, tres, halvfjerds, firs, halvfems*; units before tens: *enogtyve*, *syvoghalvfems* [rule].
- Years 1100–1999 in hundreds: *nitten hundrede og halvfems*; 2000+ in thousands: *totusind og treogtyve* [conv; short spoken forms vary].
- Ordinals before months / after *den*: *første, anden, tredje … tyvende, enogtyvende, tredivte* [rule].
- Times: *kl. 17.30* → *klokken sytten tredive* [conv]; *halv tre* = 2:30.
- Abbreviations spelled out: fx/f.eks., osv., dvs., m.m., bl.a., ca., nr., pga., evt., tlf., jf., hhv. Acronyms by letter name (EU, SMS) [verify rendering per voice].
- "1" is *en* or *et* by noun gender; the normalizer defaults to *en*. For neuter nouns write the number in words.
- Gap-fill blanks (`___`, `…`) become a pause, never voiced.
- Symbols (→ + = / –) become words or pauses.
- Names/loans: keep as Danes say them; respell only after listening on the target voice.

## 4. Evidence rules (what may be concluded from what)
| Input | May conclude |
|---|---|
| Text only | normalisation correctness, TTS-hostile tokens, script nativeness. **Never** stød/vowel/prosody |
| TTS→ASR round trip (diff vs source) | gross mispronunciation or skipped words. An ASR error is ambiguous (recogniser vs voice): use two ASR engines or a human |
| Phoneme / forced-alignment scores | segment-level deviation, against a threshold set from a native baseline |
| Native listener | final word on every audio-level item |

Honest default when only text exists: "pronunciation: not assessed" plus the text-level checks.

## 5. Native variation (do not fail real Danes)
Regional stød-lessness, Jutlandic/Funen/Bornholm speech, Copenhagen vowel shifts, multiethnolect prosody, heavy reduction/elision and youth speech are native. Fail only on features foreign to *all* these varieties (English r, plosive blødt d, [ʃ] in sk-, wrong tens, digit-by-digit numbers).

## 6. Open questions (need a native or source)
Letter-name rendering of acronyms per voice; exact short-vowel lowering conditions; spoken 2000s year forms; stød in specific inflected forms; question-intonation baselines per voice.
