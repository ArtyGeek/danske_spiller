---
name: theme-token-specificity
description: How to override Sjovt tokens per game so light and dark both work (specificity of sjovt.css dark blocks)
metadata:
  type: reference
---

sjovt.css sets dark tokens with `:root[data-theme=dark]` and `@media dark :root:not([data-theme=light])` (specificity 0,2,0), beating `html.sd-page` (0,1,1).

**Why:** a per-game `--sd-primary`/`--sd-line` set only on `html.sd-page` silently reverts to orange/mustard in dark mode.

**How to apply:** light tokens on `html.sd-page`; dark tokens on `html.sd-page:root[data-theme="dark"]` and `@media (prefers-color-scheme: dark){html.sd-page:root:not([data-theme="light"])}`. `--sd-orange` is not redefined in dark, so overriding it once recolours bar, preloader, buttons everywhere. Ink-on-accent needs accent luminance >= ~0.2.
