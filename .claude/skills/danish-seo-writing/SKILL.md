---
name: danish-seo-writing
description: Use when writing or editing any visible text, title, meta description, heading, alt text, structured data, sitemap or robots file on Sjovt Dansk (sjovtdansk.dk) — new game pages, homepage copy, or when asked about Google ranking, keywords, "SEO", "søgemaskineoptimering", or being found by Danish learners.
---

# Danish SEO writing for Sjovt Dansk

Goal: rank for how people actually search for Danish learning (`lær dansk`, `dansk grammatik øvelser`, `en eller et`). **Nobody can guarantee position #1** — Google decides. This skill maximises the factors we control: relevance, crawlability, snippet quality, speed, and genuine usefulness. Never use keyword stuffing, hidden text or fake reviews; they cause penalties.

Keyword lists and per-game targets: [keywords.md](keywords.md). Read it before choosing a keyword.

## Project constraints (read first)
- Static vanilla JS, must work from `file://`. No build step, no server rendering.
- **Googlebot indexes JS-rendered text, but slower and less reliably.** Anything that must rank (H1, intro paragraph, FAQ, game description) goes in the **static HTML**, not injected by `shared/sjovt.js`.
- `lang="da"` stays on `<html>`. Copy is Danish; target audience is adult learners (A1–B2), often searching in Danish *and* English.
- Frozen design system: SEO text must fit existing components. Hand visual changes to the designer; hand logic to the coder.

## Per-page recipe (every game page + homepage)
One primary keyword per page, 2–4 secondary. Never the same primary on two pages (cannibalisation).

| Element | Rule |
|---|---|
| `<title>` | 50–60 chars. Primary keyword first, brand last: `En eller et? Øv køn på dansk \| Sjovt Dansk` |
| meta description | 140–155 chars, primary keyword once, benefit + level + call to action ("Gratis", "A1–A2", "Spil nu") |
| `<h1>` | Exactly one, contains primary keyword, in static HTML |
| `<h2>`/`<h3>` | Secondary keywords as natural questions/phrases; logical order, no skipped levels |
| Intro text | 100–200 words static, keyword in first 100 words, explains who it is for, what is trained, level (CEFR) |
| FAQ block | 3–5 real learner questions, answered in 1–3 sentences (feeds featured snippets) |
| Internal links | Each page links to 2–3 related games with descriptive anchors ("øv præpositioner"), never "klik her" |
| Images/sprites | `alt` describes content in Danish; decorative → `alt=""`; keep filenames descriptive |
| `<link rel="canonical">` | Absolute `https://sjovtdansk.dk/...`, one per page |
| Open Graph + Twitter | `og:title`, `og:description`, `og:type`, `og:url`, `og:image` (1200×630), `og:locale=da_DK` |
| JSON-LD | Homepage: `WebSite` + `Organization` + `EducationalOrganization`. Game pages: `LearningResource` (`educationalLevel`, `teaches`, `inLanguage: da`, `isAccessibleForFree: true`) + `BreadcrumbList`. Add `FAQPage` only if the FAQ is visible on the page |

## Site-level files (create once, keep current)
- `robots.txt` — allow all, `Sitemap: https://sjovtdansk.dk/sitemap.xml`
- `sitemap.xml` — every public page, `lastmod` updated when content changes
- `favicon`, `manifest`, `theme-color` — already part of design; verify present
- URLs: lowercase, hyphenated, no spaces (`en og et/` → `en-og-et/`). **Renaming a path needs a 301 redirect plan** — flag to PM, do not rename silently.

## Writing rules
1. Write for the learner first; keywords must read naturally aloud. Density ~1–2 %, use synonyms and inflections (`øvelse/øvelser`, `lære/lær`).
2. Match search intent: informational ("hvad er forskellen på...") → explain + game; practice ("øvelser", "test", "quiz") → game above the fold.
3. Unique text per page — no copy-paste intros across games.
4. Grammar claims must be correct; content passes the `danish-grammar-qa` skill. Wrong grammar destroys trust and links.
5. Danish typography: `æ ø å`, correct quotes, `og`/`at` (not "og" confused with "å").

## Ranking among Danish educational sites — realistic levers
- **Long-tail first**: `en eller et øvelser`, `præpositioner i på til af øvelse` are winnable; `lær dansk` alone is dominated by sprogcenter/gov sites. Win long-tail, then broaden.
- **Topical authority**: one cluster page per grammar topic (explainer + game + FAQ) linked to the hub (homepage).
- **Performance**: Core Web Vitals — LCP < 2.5 s, no layout shift, fonts `font-display: swap`, images compressed/WebP, no render-blocking scripts beyond what exists.
- **Mobile-first**: 360 px layout is already a tester gate; keep it.
- **Backlinks** (outside code, report to the user): Danish teacher forums, sprogcentre, folkeskole/`dansk som andetsprog` resources, Reddit r/Denmark/r/learndanish, listing in directories.
- **Measurement**: Google Search Console (verify domain, submit sitemap), then track queries/impressions/CTR monthly and rewrite titles with low CTR.

## Workflow
1. Pick primary/secondary keywords from keywords.md; check no other page owns the primary.
2. Draft title, description, H1, intro, FAQ, JSON-LD.
3. Edit **static HTML only**; touch no game logic or storage keys.
4. Verify (see checklist) and report with evidence.

## Verification checklist (report each as VERIFIED / NOT VERIFIED)
- [ ] Title 50–60 chars, description 140–155 chars (count them with a command, don't eyeball)
- [ ] Exactly one `<h1>`; heading order valid
- [ ] Canonical, OG tags present; JSON-LD parses (`JSON.parse` of each script block)
- [ ] Primary keyword in title, H1, first 100 words, description
- [ ] No duplicate title/description across pages (grep all html)
- [ ] sitemap lists every page; robots.txt references it
- [ ] Page still works from `file://`; no console errors; game tests still pass
- [ ] Rich Results Test / PageSpeed / Search Console checks → **NOT VERIFIED** unless actually run (needs a deployed URL)

## Common mistakes
| Mistake | Fix |
|---|---|
| Keyword stuffing in footer or hidden text | Remove; write one useful paragraph |
| Putting ranking text in JS-injected DOM | Move into static HTML |
| Same title on all games | Unique per page, keyword first |
| FAQPage JSON-LD for questions not visible on page | Show the FAQ or drop the schema |
| Promising "#1 on Google" | State realistic levers; results take weeks–months |
| Renaming folders for pretty URLs without redirects | Escalate to PM first |
