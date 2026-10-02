#!/usr/bin/env python3
"""Render a text-grid pixel art spec to PNG (pure stdlib, no Pillow needed).

Usage: render.py spec.txt out.png [--scale N] [--bg #rrggbb] [--sheet]

Spec format:
    # comment
    . = transparent
    k = #1b1b2f
    r = #e63946
    ---
    ....kkkk....
    ...krrrrk...
Every grid row must have equal length; every char must be in the palette.
--sheet writes out.png as a preview sheet: scaled, plus 1x and 2x natural-size
copies on light and dark backgrounds, so you can judge legibility at real size.
"""
import re, struct, sys, zlib


def parse(path):
    pal, rows, in_grid = {}, [], False
    for n, line in enumerate(open(path, encoding="utf-8"), 1):
        line = line.rstrip("\n")
        if in_grid:
            if line.strip():
                rows.append(line.strip())
            continue
        if line.strip() == "---":
            in_grid = True
            continue
        if not line.strip() or line.lstrip().startswith("#"):
            continue
        m = re.match(r"^(\S)\s*=\s*(transparent|#[0-9a-fA-F]{6})\s*$", line.strip())
        if not m:
            sys.exit(f"line {n}: bad palette entry: {line!r}")
        c = m.group(2)
        pal[m.group(1)] = None if c == "transparent" else tuple(int(c[i:i+2], 16) for i in (1, 3, 5)) + (255,)
    if not rows:
        sys.exit("no grid rows after '---'")
    w = len(rows[0])
    for i, r in enumerate(rows, 1):
        if len(r) != w:
            sys.exit(f"grid row {i} has width {len(r)}, expected {w}")
        for ch in r:
            if ch not in pal:
                sys.exit(f"grid row {i}: char {ch!r} not in palette")
    return pal, rows


def to_pixels(pal, rows):
    return [[pal[ch] or (0, 0, 0, 0) for ch in r] for r in rows]


def scale(px, k):
    return [[p for p in row for _ in range(k)] for row in px for _ in range(k)]


def over(px, bg):
    out = []
    for row in px:
        out.append([bg + (255,) if p[3] == 0 else p for p in row])
    return out


def write_png(path, px):
    h, w = len(px), len(px[0])
    raw = b"".join(b"\x00" + bytes(c for p in row for c in p) for row in px)
    def chunk(t, d):
        c = struct.pack(">I", len(d)) + t + d
        return c + struct.pack(">I", zlib.crc32(t + d) & 0xFFFFFFFF)
    with open(path, "wb") as f:
        f.write(b"\x89PNG\r\n\x1a\n" + chunk(b"IHDR", struct.pack(">IIBBBBB", w, h, 8, 6, 0, 0, 0))
                + chunk(b"IDAT", zlib.compress(raw, 9)) + chunk(b"IEND", b""))


def sheet(px, k):
    h, w = len(px), len(px[0])
    big = scale(px, k)
    pad = 8
    tiles = []
    for bg in ((245, 245, 245), (30, 30, 40)):
        for s in (1, 2):
            tiles.append(over(scale(px, s), bg))
    right_w = max(len(t[0]) for t in tiles) + 2 * pad
    W = len(big[0]) + right_w + 3 * pad
    H = max(len(big) + 2 * pad, sum(len(t) + pad for t in tiles) + pad)
    canvas = [[(128, 128, 128, 255)] * W for _ in range(H)]
    checker = over(big, (200, 200, 200))
    for y, row in enumerate(big):  # checkerboard behind transparency
        for x, p in enumerate(row):
            if p[3] == 0:
                c = 200 if ((x // k + y // k) % 2) else 225
                p = (c, c, c, 255)
            canvas[pad + y][pad + x] = p
    y0 = pad
    for t in tiles:
        for y, row in enumerate(t):
            for x, p in enumerate(row):
                canvas[y0 + y][len(big[0]) + 2 * pad + x] = p
        y0 += len(t) + pad
    return canvas


if __name__ == "__main__":
    a = sys.argv[1:]
    if len(a) < 2:
        sys.exit(__doc__)
    k = int(a[a.index("--scale") + 1]) if "--scale" in a else 16
    pal, rows = parse(a[0])
    px = to_pixels(pal, rows)
    if "--bg" in a:
        h = a[a.index("--bg") + 1]
        px = over(px, tuple(int(h[i:i+2], 16) for i in (1, 3, 5)))
    write_png(a[1], sheet(px, k) if "--sheet" in a else scale(px, k))
    print(f"{len(rows[0])}x{len(rows)} -> {a[1]}" + (f" (x{k})" if "--sheet" not in a else " (preview sheet)"))
