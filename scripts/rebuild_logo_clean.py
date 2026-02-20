from __future__ import annotations

from pathlib import Path
import cv2
import numpy as np
from PIL import Image

SRC = Path('docs/assets/OpenQuatt_logo.png')
OUT = Path('docs/assets/openquatt_logo_clean_rebuild.svg')


def find_paths(mask: np.ndarray, min_area: float = 80.0, epsilon: float = 1.2) -> list[str]:
    contours, hier = cv2.findContours(mask, cv2.RETR_CCOMP, cv2.CHAIN_APPROX_NONE)
    if hier is None:
        return []
    h = hier[0]
    out: list[str] = []
    for i, c in enumerate(contours):
        if h[i][3] != -1:
            continue
        if cv2.contourArea(c) < min_area:
            continue
        p = cv2.approxPolyDP(c, epsilon, True).reshape(-1, 2)
        if len(p) < 3:
            continue
        d = [f"M {int(p[0][0])} {int(p[0][1])}"]
        for pt in p[1:]:
            d.append(f"L {int(pt[0])} {int(pt[1])}")
        d.append('Z')

        child = h[i][2]
        while child != -1:
            hc = contours[child]
            if cv2.contourArea(hc) >= min_area:
                hp = cv2.approxPolyDP(hc, epsilon, True).reshape(-1, 2)
                if len(hp) >= 3:
                    d.append(f"M {int(hp[0][0])} {int(hp[0][1])}")
                    for pt in hp[1:]:
                        d.append(f"L {int(pt[0])} {int(pt[1])}")
                    d.append('Z')
            child = h[child][0]
        out.append(' '.join(d))
    return out


img = np.array(Image.open(SRC).convert('RGBA'))
rgb = img[:, :, :3]
a = img[:, :, 3]

hsv = cv2.cvtColor(rgb, cv2.COLOR_RGB2HSV)
H, S, V = hsv[:, :, 0], hsv[:, :, 1], hsv[:, :, 2]
opaque = a > 8

# Color region masks (OpenCV hue range 0..179)
mask_orange = opaque & (H >= 4) & (H <= 22) & (S >= 70) & (V >= 70)
mask_dark = opaque & (H >= 95) & (H <= 128) & (S >= 35) & (V >= 20)
mask_fan = opaque & (H >= 86) & (H <= 108) & (S >= 25) & (V >= 115)
mask_white = opaque & (S <= 38) & (V >= 180)

# Clean masks
kernel = np.ones((3, 3), np.uint8)

def clean(m: np.ndarray, close_iter: int = 1, open_iter: int = 1) -> np.ndarray:
    x = (m.astype(np.uint8) * 255)
    if close_iter:
        x = cv2.morphologyEx(x, cv2.MORPH_CLOSE, kernel, iterations=close_iter)
    if open_iter:
        x = cv2.morphologyEx(x, cv2.MORPH_OPEN, kernel, iterations=open_iter)
    return x

mask_orange_c = clean(mask_orange, close_iter=2, open_iter=1)
mask_dark_c = clean(mask_dark, close_iter=2, open_iter=1)
mask_fan_c = clean(mask_fan, close_iter=2, open_iter=1)
mask_white_c = clean(mask_white, close_iter=1, open_iter=1)

orange_paths = find_paths(mask_orange_c, min_area=60, epsilon=1.0)
dark_paths = find_paths(mask_dark_c, min_area=60, epsilon=1.0)
fan_paths = find_paths(mask_fan_c, min_area=35, epsilon=0.9)
white_paths = find_paths(mask_white_c, min_area=35, epsilon=0.9)

h, w = img.shape[:2]

svg: list[str] = []
svg.append(f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {w} {h}" width="{w}" height="{h}" role="img" aria-label="OpenQuatt clean rebuild">')
svg.append('<defs>')
svg.append('<linearGradient id="gOrange" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ff950f"/><stop offset="0.55" stop-color="#ef671a"/><stop offset="1" stop-color="#b52a1d"/></linearGradient>')
svg.append('<linearGradient id="gDark" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#4a5d90"/><stop offset="0.45" stop-color="#25375f"/><stop offset="1" stop-color="#101f3f"/></linearGradient>')
svg.append('<linearGradient id="gFan" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#c3edff"/><stop offset="1" stop-color="#67b2e6"/></linearGradient>')
svg.append('</defs>')

for d in dark_paths:
    svg.append(f'<path d="{d}" fill="url(#gDark)" fill-rule="evenodd"/>')
for d in orange_paths:
    svg.append(f'<path d="{d}" fill="url(#gOrange)" fill-rule="evenodd"/>')
for d in fan_paths:
    svg.append(f'<path d="{d}" fill="url(#gFan)" fill-rule="evenodd"/>')
for d in white_paths:
    svg.append(f'<path d="{d}" fill="#ffffff" fill-rule="evenodd"/>')

svg.append('</svg>')
OUT.write_text('\n'.join(svg), encoding='utf-8')
print(f'Wrote {OUT}')
