# US-037 — Antonymer slice (W-ANT)

1. **Summary.** `shared/themes/antonyms.css` (end of file): headings (`.brand` text, `.mode-btn .t`, `.section-title`, `.summary .score`) get `overflow-wrap:normal; hyphens:manual; min-width:0` so they no longer break mid-word under the body-wide `overflow-wrap:anywhere`. `html.sd-page .sd-conf{z-index:0}` plus `.summary{position:relative;z-index:1}` paints confetti (fixed, z-index 9990 in frozen sjovt.css) behind the results card. No change to `sjovt.js`/`sjovt.css`.
2. **Status:** IMPLEMENTED
3. **Tests.** Puppeteer at 360x740: scrollWidth 360 = clientWidth; all heading/title elements scrollWidth===clientWidth; brand "Modsat" one line (82 px); `.sd-conf` computed z-index 0. `smoke.mjs`: no-h-scroll rows PASS at all viewports; only known artefact rows fail.
4. **Manual.** Screenshots dash.png / sum.png (scratchpad, 360x740) generated.
5. **Files.** `shared/themes/antonyms.css` (last 7 lines).
6. **Risks.** Confetti is hidden behind the card where they overlap (visible around it). Same z-index also applies to level-up confetti during play. The mid-word break may not have reproduced at HEAD in my environment (not compared visually).
7. **Newly discovered.** None.
8. **Needs native review.** None.
9. **Acceptance.**
- 360x740 Dansk Mester scrollWidth: other owner (Antonymer: PASS)
- Listed headings break only at compound points or fit: PASS for Antonymer (MODSAT fits, no mid-word break)
- SPIL visible (Bøjningsværkstedet, Pronomenmysteriet): other owner
- Confetti behind results text: PASS for Antonymer (theme CSS only)
- Glosekort chip row: other owner
