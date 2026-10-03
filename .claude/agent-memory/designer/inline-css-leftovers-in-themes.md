---
name: inline-css-leftovers-in-themes
description: Game inline <style> rules (transforms, animations, rgba tints) leak through theme overrides; shot scripts must scrollTo(0,0)
metadata:
  type: feedback
---

When a theme restyles a game-owned animated pseudo-element (e.g. tidsmaskinen `.tl-seg.sweep::after`), also reset the inline CSS's leftover `transform`/`animation`, not just background.

**Why:** the inline `transform:translateX(-100%)` stayed, so the sweep bar rendered as a cream stripe outside the card; only a screenshot revealed it.

**How to apply:** grep the game's inline `<style>` for the class before overriding; set `transform:none` and own keyframes (clip-path inset steps works with overflow visible). In shot scripts call `window.scrollTo(0,0)` before each screenshot - option `.focus()` after answering scrolls the page and hides the timeline hero. Use `.tl-zone.lit` inset box-shadow (not margin/outer ring) so lit zones keep their width in 3-col mobile cells. Sjovt confetti (sdFx) overlays the sentence briefly; shared, not themeable.
