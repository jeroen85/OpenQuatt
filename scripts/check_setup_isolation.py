#!/usr/bin/env python3
"""Guardrail: keep hp2-only identifiers inside duo/profile files."""

from __future__ import annotations

import re
import sys
from pathlib import Path


REPO_ROOT = Path(__file__).resolve().parents[1]
OPENQUATT_DIR = REPO_ROOT / "openquatt"

# Files that are allowed to contain explicit hp2 identifiers.
ALLOWED_HP2_FILES = {
    "oq_cic.yaml",
    "oq_HP_io.yaml",
    "oq_packages.yaml",
    "oq_packages_duo.yaml",
    "oq_topology_duo.yaml",
    "oq_heat_control_duo_policy.yaml",
    "oq_debug_testing_duo.yaml",
}

# Match direct HP2 entity definition/use (not local variable names).
HP2_DEF_PATTERN = re.compile(r"\bid:\s*hp2_[A-Za-z0-9_]+\b")
HP2_REF_PATTERN = re.compile(r"\bid\s*\(\s*hp2(?:_|\))")


def main() -> int:
    violations: list[tuple[str, int, str]] = []

    for path in sorted(OPENQUATT_DIR.glob("*.yaml")):
        if path.name in ALLOWED_HP2_FILES:
            continue

        text = path.read_text(encoding="utf-8")
        for idx, line in enumerate(text.splitlines(), start=1):
            if HP2_DEF_PATTERN.search(line) or HP2_REF_PATTERN.search(line):
                violations.append((str(path.relative_to(REPO_ROOT)), idx, line.strip()))

    if not violations:
        print("Setup isolation check passed.")
        return 0

    print(f"Setup isolation check found {len(violations)} violation(s):")
    for rel, line_no, line in violations:
        print(f"- {rel}:{line_no}: {line}")
    print()
    print("Move hp2 references into topology/duo policy files or extend this guard with intent.")
    return 1


if __name__ == "__main__":
    sys.exit(main())
