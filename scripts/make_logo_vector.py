from __future__ import annotations

import argparse
from pathlib import Path

import cv2
import numpy as np
from PIL import Image


def contour_to_path(contour: np.ndarray) -> str:
    pts = contour.reshape(-1, 2)
    if len(pts) < 3:
        return ""
    start = pts[0]
    parts = [f"M {int(start[0])} {int(start[1])}"]
    for p in pts[1:]:
        parts.append(f"L {int(p[0])} {int(p[1])}")
    parts.append("Z")
    return " ".join(parts)


def rgb_hex(color: np.ndarray) -> str:
    r, g, b = [int(c) for c in color]
    return f"#{r:02x}{g:02x}{b:02x}"


def main() -> None:
    parser = argparse.ArgumentParser(description="Vectorize a PNG logo into SVG paths.")
    parser.add_argument("input_png", type=Path)
    parser.add_argument("output_svg", type=Path)
    parser.add_argument("--colors", type=int, default=18)
    parser.add_argument("--min-area", type=float, default=14.0)
    parser.add_argument("--epsilon", type=float, default=1.0)
    args = parser.parse_args()

    img_rgba = np.array(Image.open(args.input_png).convert("RGBA"))
    h, w = img_rgba.shape[:2]

    alpha = img_rgba[:, :, 3]
    opaque = alpha > 8

    rgb = img_rgba[:, :, :3]
    pixels = rgb[opaque].astype(np.float32)
    if len(pixels) == 0:
        raise ValueError("Input has no visible pixels.")

    k = min(args.colors, len(pixels))
    criteria = (cv2.TERM_CRITERIA_EPS + cv2.TERM_CRITERIA_MAX_ITER, 30, 0.8)
    _ret, labels, centers = cv2.kmeans(
        pixels,
        k,
        None,
        criteria,
        5,
        cv2.KMEANS_PP_CENTERS,
    )

    label_map = np.full((h, w), -1, dtype=np.int32)
    label_map[opaque] = labels.reshape(-1)

    areas: list[tuple[int, int]] = []
    for i in range(k):
        cnt = int(np.count_nonzero(label_map == i))
        if cnt:
            areas.append((i, cnt))
    areas.sort(key=lambda x: x[1], reverse=True)

    svg_parts: list[str] = []
    svg_parts.append(
        f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {w} {h}" width="{w}" height="{h}">'
    )

    for idx, _area in areas:
        mask = (label_map == idx).astype(np.uint8) * 255
        if np.count_nonzero(mask) == 0:
            continue

        contours, hierarchy = cv2.findContours(mask, cv2.RETR_CCOMP, cv2.CHAIN_APPROX_SIMPLE)
        if hierarchy is None:
            continue

        hier = hierarchy[0]
        color = centers[idx]

        for ci, c in enumerate(contours):
            if hier[ci][3] != -1:
                continue
            if cv2.contourArea(c) < args.min_area:
                continue

            c_main = cv2.approxPolyDP(c, args.epsilon, True)
            path_data = contour_to_path(c_main)
            if not path_data:
                continue

            child = hier[ci][2]
            while child != -1:
                hole = contours[child]
                if cv2.contourArea(hole) >= args.min_area:
                    hole_s = cv2.approxPolyDP(hole, args.epsilon, True)
                    hole_path = contour_to_path(hole_s)
                    if hole_path:
                        path_data += " " + hole_path
                child = hier[child][0]

            svg_parts.append(
                f'<path d="{path_data}" fill="{rgb_hex(color)}" fill-rule="evenodd"/>'
            )

    svg_parts.append("</svg>")
    args.output_svg.write_text("\n".join(svg_parts), encoding="utf-8")


if __name__ == "__main__":
    main()
