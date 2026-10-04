# US-037 — W-PREP slice (Præpositioner)

1. Summary: h1 is now `Præpositions&shy;mester`, and the mode tile title is `Forvekslings&shy;par`. In shared/themes/praepositioner.css the h1 and `.mode-btn` now use `overflow-wrap: break-word; hyphens: manual` instead of `overflow-wrap: anywhere` / `hyphens: auto`. The h1 therefore breaks only at the soft hyphen, with a visible hyphen, and not mid-word.
2. Status: IMPLEMENTED
3. Tests: own puppeteer script at 360x740: scrollWidth 360 = clientWidth 360; h1 wraps in 2 lines (48 px); 0 mode titles overflow; 0 console errors. At 320 px scrollWidth is 352 (below the PRD minimum; not investigated, probably pre-existing). smoke.mjs result: see the line appended below (if empty, it was still running).
4. Manual: DOM measurements only; no visual screenshot review.
5. Files: dansk-praepositioner.html (h1 line ~266; MODES `pairs` entry ~858); shared/themes/praepositioner.css lines 45, 82.
6. Risks: `hyphens: manual` on `.mode-btn` also disables auto-hyphenation of the `.d` descriptions (short; no overflow seen).
7. Newly discovered: at 320 px the page scrolls horizontally (352).
8. Native review: none.
9. Criteria (slice):
- At 360x740 Dansk Mester scrollWidth === clientWidth: other owner (Præpositioner at 360: PASS)
- Listed headings break only at &shy; compound points, or fit via clamp(): PASS for "PRÆPOSITIONSMESTER"
- SPIL visible (Bøjningsværkstedet, Pronomenmysteriet): other owner
- Confetti behind results text: other owner
- Glosekort level-chip row: other owner
