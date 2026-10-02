---
name: danish-grammar-qa
description: Content-quality rubric for Danish grammar game data — the "one defensible answer" test plus per-game QA rules distilled from improvement/specs.md (Bøjningsværkstedet, Pronomenmysteriet, Sætningsmaskinen, Tidsmaskinen, Skrivekontrollen). Use when authoring data.js items and when auditing a dataset sample. Not a substitute for a native-speaker check.
---

# Danish grammar data QA

The specs in `improvement/specs.md` (§4.8, §5.8, §6.8, §7.8, §8.8) are authoritative; this is the working checklist. If this file and the spec disagree, the spec wins — report the discrepancy.

## Limits of this skill
You are not a native speaker. Classify every audited item as **ok**, **clear error** (violates a rule below), or **doubtful → needs native check** (set/keep `verify: true`). Never "correct" doubtful Danish by guess, and never present an uncertain form as authoritative.

## Universal tests (every item)
1. **One defensible answer.** Given only the shown context, could a careful native pick a different option? If yes → invalid. Check each distractor: it must be wrong *for the reason the note states*.
2. **No accidental second error** in prompts, contexts, or distractors-that-are-meant-to-be-correct text.
3. **Note is accurate and specific** — describes this item's actual pattern, in Danish, one line, no motivation/jokes, doesn't just restate the answer. No absolute rule where the pattern is lexical (e.g. plural endings).
4. **Natural contemporary Danish**; no literal English calques; plausible adjective–noun/sentence content. Level fits vocabulary and length.
5. **Accepted answers complete**: all valid variants listed (`accept`/`accepted_answers`/`accepted_orders`), optional final punctuation, optional relative pronoun only where grammatical.
6. **No overlap** with excluded existing games' core interaction (see spec §1 boundary rules).
7. **Shared forms come from `shared/data/*`**, not retyped. Stable kebab-case id, unique, level in A1–C1.

## Bøjningsværkstedet (nouns, adjectives, articles)
- Verify every irregular plural and each noun's gender against ≥2 references; `verify: true` otherwise.
- Never double definiteness (`den store bilen`); never possessive + definite suffix (`min bilen`).
- Check adjective forms ending `-sk`, `-t`, `-d`, doubled consonants, vowel-final; `lille/små`, `anden/andet/andre`; indeclinables.
- `mere/mest` comparison only where natural; don't claim one productive pattern.
- Definiteness-in-context items need short real contexts (first vs later mention, professions, generic plural).

## Pronomenmysteriet (reference)
- Reflexive possessive (`sin/hans/hendes/deres`): each item needs a clear grammatical subject, a clear owner, the possessed noun, no second reading, a gloss matching exactly one option. Two plausible options ⇒ invalid.
- `min/mit/mine…` note must name the **possessed noun**, not the owner.
- Coordinated pronouns (`Mette og jeg` / `Mette og mig`): don't reduce to a "drop the other person" trick; add a register note where usage and prescriptive rule differ.
- `nogen/nogle/noget`: account for questions, negation, hypotheticals, countable vs uncountable, register — no absolute claims.
- `den/det/de`: don't overuse `den` for people.

## Sætningsmaskinen (clauses)
- Not basic V2 as the main target. Finite vs non-finite verbs distinguished correctly.
- Sentence adverbs (`ikke`, `aldrig`, `jo`…) precede the finite verb in subordinate clauses, follow it in main clauses.
- Indirect questions keep **no** inversion; `om` for yes/no; `hvem der` as subject.
- Relative pronoun omission accepted only when it is not the subject.
- `der/det`: avoid ambiguous contexts; don't teach as "there/it".
- Commas follow the configured comma convention; transformations preserve meaning; sentence length fits level.

## Tidsmaskinen (tense, mood, voice)
- Never test tense without sufficient temporal context; never map English tense usage onto Danish.
- Distinguish ongoing state vs completed period; audit every `siden`/`i`/`for … siden` item.
- Modal meaning must be determined by the full situation. Equivalent future forms accepted only if meaning and register match.
- Passive: event vs resulting state; check `-s` passive is natural for the verb; never claim `-s` and `blive` are always interchangeable.
- Imperatives verified manually. Conditionals semantically coherent; don't impose English first/second/third schemes.

## Skrivekontrollen (editing)
- Every sentence has a documented target error and **no other**; list all reasonable corrections or use constrained options.
- Don't mark stylistic preference as grammatical error; separate ambiguity from ungrammaticality.
- Both comma systems (start-komma / no start-komma) supported consistently; never mark both valid systems wrong.
- Register items: grammar-and-formality only; natural, not bureaucratically exaggerated. No leaked/copied exam content.

## Audit procedure
1. Run `node shared/validate.js` first (structure); this skill covers meaning.
2. Sample ≥30 random items per mode plus all `verify: true` items; read each against the universal tests and the game's rules.
3. Report per mode: sampled N, ok / clear errors (id + rule violated) / doubtful (id + why). Error rate > ~3% in a sample ⇒ audit the whole mode, not just the sample.
4. Any pattern in errors (e.g. a template generating bad combos) is more valuable than the individual items — name the generator.
