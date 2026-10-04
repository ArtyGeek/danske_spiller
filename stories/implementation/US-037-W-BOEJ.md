# US-037 (W-BOEJ slice) - Layout polish in Bøjningsværkstedet

## 1. Implementation summary
- SPIL above the fold: `#btn-play` is `position: sticky; bottom: 12px` in the theme CSS, so it is visible on load (it keeps its place after the mode list and below it sits the reset row). Measured on load: 1366x768 top 692 / bottom 756 (<768); 390x844 top 768 / bottom 832 (<844); 360x740 top 664 / bottom 728 (<740).
- Hyphenation: soft hyphens in the `h1` ("Bøjnings&shy;værkstedet") and the long mode names (Adjektiv&shy;værkstedet, Sammenlignings&shy;pressen, Mængde&shy;værkstedet), so they break only at compound points.
- No horizontal scroll at 360/390/1366 (scrollWidth == clientWidth).

Status: IMPLEMENTED

## 3. Tests run
`t4.mjs` position + scroll checks PASS at 1366x768, 390x844, 360x740. Smoke PASS (28/28). Screenshot at 360 checked: title on one line, no mid-word break, SPIL visible.

## 5. Files changed
`boejningsvaerkstedet/index.html` (h1 line ~373, MODES names ~428-433); `shared/themes/boejningsvaerkstedet.css` (end of file, sticky `#btn-play`).

## 6. Remaining risks
The sticky button overlaps content scrolled underneath (mode list) with the brutalist drop shadow; acceptable. The soft hyphens are in the DOM text (`textContent` of the mode name contains U+00AD).

## 7. Newly discovered issues
None.

## 9. Acceptance criteria
| Criterion | Result |
|---|---|
| At 360×740, Dansk Mester `scrollWidth === clientWidth`; mode and badge labels fit. | other owner |
| Listed headings break only at `&shy;` compound points, or fit via `clamp()`. | PASS (Bøjningsværkstedet h1 and mode names); other games: other owner |
| Bøjningsværkstedet and Pronomenmysteriet: SPIL is visible at 1366×768 and 390×844 on load. | PASS for Bøjningsværkstedet; Pronomenmysteriet: other owner |
| Confetti spawns behind the results text (z-index) or only from the trophy area. | other owner (not in this slice) |
| Glosekort shows a compact level-chip row above the card at ≤480 px. | other owner |
