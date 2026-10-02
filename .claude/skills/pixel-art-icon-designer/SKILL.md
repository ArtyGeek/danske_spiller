---
name: pixel-art-icon-designer
description: Design pixel art icons, sprites, badges, favicons and small game assets (8x8 to 64x64) by drawing them as text grids and rendering to crisp PNGs, then checking them visually and iterating. Use whenever the user asks for a pixel art icon, sprite, emoji, item/inventory icon, avatar, badge, favicon, tile, or "8-bit / 16-bit / retro" graphic, or wants to redraw or recolor an existing pixel icon, even if they never say "pixel art".
---

# Pixel Art Icon Designer

You draw pixel art as a character grid (one character = one pixel), render it with the bundled script, look at the PNG, and fix what looks wrong. Looking at the render is the point: grids that seem fine as text often read badly as images.

## Workflow

1. **Pin down the brief** (ask only what's missing, otherwise pick sensible defaults and say so):
   - Subject, and the one feature that makes it recognizable (a key's teeth, a potion's cork).
   - Size: default 16x16 for icons, 32x32 for detailed, 8x8 for tiny/favicon. Use a square canvas unless asked.
   - Palette: default 4-8 colours. Style: outlined (default) or outline-less.
   - Where it will be used (game UI, website, favicon): this sets background and display size.
2. **Plan before drawing**: silhouette first, then 1 outline colour, base colours, and a highlight/shadow per base colour. Decide the light direction (default top-left) and keep it.
3. **Write the spec** to a `.txt` file (format below) in the user's project, usually an `assets/` or `icons/` folder, or next to where it will be used.
4. **Render and look**:
   ```
   python <skill-dir>/scripts/render.py icon.txt /tmp/preview.png --sheet
   ```
   Then Read the PNG. The sheet shows a big version on a checkerboard plus 1x and 2x copies on light and dark backgrounds, which is how the icon will really be seen.
5. **Critique and iterate** (2-4 rounds is normal) using the checklist below. Fix the grid, re-render, look again.
6. **Deliver**: render the final with `--scale 16` (or whatever fits; use 1 for a native-size copy too if the user needs it) and report the file paths. Keep the `.txt` source next to the PNG so it stays editable.

## Spec format

```
# comments allowed
. = transparent
k = #2b1b2e
r = #e63946
---
....kkkk....
...krrrrk...
```

Every row must be the same width, every character must be in the palette. The script errors with the row number if not. Use `.` for transparent and short mnemonic letters for colours (k outline, r red, h highlight, d shadow). See `examples/heart.txt`.

Rendering options: `--scale N` (default 16), `--bg #rrggbb` flatten onto a colour, `--sheet` preview sheet. The script is stdlib-only (no Pillow needed). If the user wants SVG or an inline data-URI/CSS box-shadow version for web use, generate it from the same grid with a small throwaway script.

## Craft rules (what makes small icons read well)

- **Silhouette first.** If the filled shape in one colour isn't recognizable, no shading will rescue it. Squint at the 1x render.
- **Fewer colours.** 4-8 total. Each material gets base + highlight + shadow, no more. Reuse the outline and shadow colours across materials for cohesion.
- **Outline**: 1px, a dark tinted colour (deep purple/navy), not pure black. Leave outlines off where an edge touches a lighter background only if going outline-less on purpose.
- **Light from one direction.** Highlights top-left, shadows bottom-right, consistently.
- **Avoid jaggies and noise**: lines should step in clean runs (2-2-2 or 3-3-3, not 1-3-2-1). No single stray pixels unless they are deliberate sparkles or eyes. Avoid "banding" (shading stripes that mirror the outline) and "pillow shading".
- **Anti-aliasing by hand** only at 32x32+, using one intermediate colour. At 16x16 and below, keep hard edges.
- **Pixel-snapped geometry**: circles are symmetric (use even diameters with 2-pixel centres, or odd with 1-pixel centres, don't mix). Mirror symmetric subjects exactly.
- **Padding**: leave 1px of empty border so the icon doesn't touch the canvas edge, unless it should tile.
- **Contrast against both backgrounds**: check the dark and light tiles on the sheet. Add or thicken an outline if it vanishes on one.
- **Scale by integers only** (2x, 4x, 8x, 16x), with nearest-neighbour. Never smooth when enlarging; mention `image-rendering: pixelated` for web use.

## Critique checklist (run on each render)

1. Can you name the object at 1x without the label?
2. Is the silhouette clean, with no accidental holes, notches or one-pixel spurs?
3. Is the light direction consistent, and is there a visible highlight and shadow?
4. Any colour used only once that could be merged away?
5. Is it symmetric where it should be?
6. Does it read on both the light and dark backgrounds?

State what you found and changed in a sentence or two per round; don't dump the whole grid back into chat each time. Show the final PNG path, the palette (hex) and the size.

## Variants the user may ask for

- **Icon set**: agree on shared size, outline colour, palette and light direction first; draw each as its own spec file; render all, and make a contact sheet if useful (concatenate grids side by side with a 1px gap in a throwaway script).
- **Animation / sprite sheet**: keep frames as separate specs of equal size; build the sheet by concatenating frame grids horizontally. Change as few pixels per frame as possible.
- **Recolor / palette swap**: copy the spec and change only palette lines.
- **Redraw an existing image**: look at the image, decide the target size, and trace its silhouette and 4-6 key colours by hand into a grid; do not attempt automatic downscaling, which gives muddy results.
