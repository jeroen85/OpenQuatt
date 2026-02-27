#!/usr/bin/env python3
"""Non-blocking documentation consistency checks for CI.

The script emits GitHub warning annotations and exits non-zero when findings
are detected. The workflow should run this step with `continue-on-error: true`.
"""

from __future__ import annotations

import argparse
import os
import re
import subprocess
import sys
from dataclasses import dataclass
from pathlib import Path
from typing import Iterable


REPO_ROOT = Path(__file__).resolve().parents[1]


@dataclass
class Finding:
    file: str
    line: int
    message: str


def run_git(args: list[str]) -> str:
    result = subprocess.run(
        ["git", *args],
        cwd=REPO_ROOT,
        stdout=subprocess.PIPE,
        stderr=subprocess.PIPE,
        text=True,
        check=False,
    )
    if result.returncode != 0:
        raise RuntimeError(result.stderr.strip() or "git command failed")
    return result.stdout


def changed_files_for_ci() -> set[str]:
    event = os.getenv("GITHUB_EVENT_NAME", "")
    if event == "pull_request":
        base_ref = os.getenv("GITHUB_BASE_REF", "").strip()
        if not base_ref:
            return set()
        # Best effort fetch of base branch for a stable diff range.
        subprocess.run(
            ["git", "fetch", "--no-tags", "origin", base_ref],
            cwd=REPO_ROOT,
            stdout=subprocess.DEVNULL,
            stderr=subprocess.DEVNULL,
            check=False,
            text=True,
        )
        diff = run_git(["diff", "--name-only", f"origin/{base_ref}...HEAD"])
        return {line.strip() for line in diff.splitlines() if line.strip()}

    if event == "push":
        try:
            diff = run_git(["diff", "--name-only", "HEAD~1...HEAD"])
            return {line.strip() for line in diff.splitlines() if line.strip()}
        except RuntimeError:
            return set()

    return set()


def read_text(path: Path) -> str:
    return path.read_text(encoding="utf-8")


def lines_with_phrase(path: Path, phrase: str) -> Iterable[int]:
    needle = phrase.lower()
    for idx, line in enumerate(read_text(path).splitlines(), start=1):
        if needle in line.lower():
            yield idx


def parse_dashboard_titles(path: Path) -> list[str]:
    titles: list[str] = []
    rx = re.compile(r"^\s*-\s+title:\s*(.+?)\s*$")
    for line in read_text(path).splitlines():
        m = rx.match(line)
        if not m:
            continue
        title = m.group(1).strip().strip("'").strip('"')
        titles.append(title)
    return titles


def parse_package_keys(path: Path) -> list[str]:
    keys: list[str] = []
    rx = re.compile(r"^([A-Za-z0-9_]+):\s*!include\b")
    for line in read_text(path).splitlines():
        m = rx.match(line)
        if m:
            keys.append(m.group(1))
    return keys


def parse_doc_package_order(path: Path) -> list[str]:
    lines = read_text(path).splitlines()
    start = None
    for idx, line in enumerate(lines):
        if line.strip() == "Package include order is intentional:":
            start = idx + 1
            break
    if start is None:
        return []

    order: list[str] = []
    rx = re.compile(r"^\d+\.\s+`([^`]+)`")
    for line in lines[start:]:
        line = line.strip()
        if not line:
            if order:
                break
            continue
        m = rx.match(line)
        if not m:
            if order:
                break
            continue
        order.append(m.group(1))
    return order


def add(findings: list[Finding], file: str, line: int, message: str) -> None:
    findings.append(Finding(file=file, line=line, message=message))


def any_changed(changed: set[str], candidates: set[str]) -> bool:
    return bool(changed.intersection(candidates))


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument(
        "--changed-only",
        action="store_true",
        help="Only evaluate checks relevant to files changed in this CI run.",
    )
    args = parser.parse_args()

    findings: list[Finding] = []
    changed = changed_files_for_ci() if args.changed_only else set()

    docs_home = REPO_ROOT / "docs/home-assistant-dashboard.md"
    docs_settings = REPO_ROOT / "docs/settings-reference.md"
    docs_tuning = REPO_ROOT / "docs/tuning-and-troubleshooting.md"
    docs_system = REPO_ROOT / "docs/system-overview.md"
    pkg_file = REPO_ROOT / "openquatt/oq_packages.yaml"
    dash_en = REPO_ROOT / "docs/dashboard/openquatt_ha_dashboard_en.yaml"
    dash_nl = REPO_ROOT / "docs/dashboard/openquatt_ha_dashboard_nl.yaml"

    # 1) Known drift guard: flow mismatch threshold is compile-time, not runtime.
    flow_related = {
        "openquatt/oq_flow_control.yaml",
        "openquatt/oq_substitutions_common.yaml",
        "docs/settings-reference.md",
        "docs/tuning-and-troubleshooting.md",
        "docs/home-assistant-dashboard.md",
        "docs/dashboard/openquatt_ha_dashboard_en.yaml",
        "docs/dashboard/openquatt_ha_dashboard_nl.yaml",
    }
    if not args.changed_only or any_changed(changed, flow_related):
        for rel in [
            "README.md",
            "docs/settings-reference.md",
            "docs/tuning-and-troubleshooting.md",
            "docs/home-assistant-dashboard.md",
        ]:
            path = REPO_ROOT / rel
            for ln in lines_with_phrase(path, "Flow mismatch threshold"):
                add(
                    findings,
                    rel,
                    ln,
                    "Use compile-time constants "
                    "`oq_flow_mismatch_threshold_lph` / `oq_flow_mismatch_hyst_lph` "
                    "instead of a runtime 'Flow mismatch threshold' entity.",
                )

        settings_text = read_text(docs_settings)
        if "oq_flow_mismatch_threshold_lph" not in settings_text:
            add(findings, "docs/settings-reference.md", 1, "Missing `oq_flow_mismatch_threshold_lph` reference.")
        if "oq_flow_mismatch_hyst_lph" not in settings_text:
            add(findings, "docs/settings-reference.md", 1, "Missing `oq_flow_mismatch_hyst_lph` reference.")
        if "oq_flow_mismatch_fallback_lph" in settings_text:
            add(findings, "docs/settings-reference.md", 1, "Obsolete `oq_flow_mismatch_fallback_lph` found.")

    # 2) Dashboard docs should stay aligned with dashboard YAML view sets.
    dashboard_related = {
        "docs/home-assistant-dashboard.md",
        "docs/dashboard/openquatt_ha_dashboard_en.yaml",
        "docs/dashboard/openquatt_ha_dashboard_nl.yaml",
    }
    if not args.changed_only or any_changed(changed, dashboard_related):
        en_expected = [
            "Overview",
            "Energy",
            "Flow",
            "Heat control",
            "HPs",
            "Sensor Configuration",
            "Advanced settings",
            "Debug & Testing",
            "Diagnostics",
        ]
        nl_expected = [
            "Overzicht",
            "Energy",
            "Flow",
            "Warmtecontrol",
            "HPs",
            "Sensorconfiguratie",
            "Advanced settings",
            "Debug & Testing",
            "Diagnostics",
        ]
        en_actual = parse_dashboard_titles(dash_en)
        nl_actual = parse_dashboard_titles(dash_nl)

        if en_actual != en_expected:
            add(findings, "docs/dashboard/openquatt_ha_dashboard_en.yaml", 1, f"View titles differ from expected: {en_actual}")
        if nl_actual != nl_expected:
            add(findings, "docs/dashboard/openquatt_ha_dashboard_nl.yaml", 1, f"View titles differ from expected: {nl_actual}")

        home_text = read_text(docs_home)
        required_phrases = [
            "Debug & Testing View",
            "`debug-testing`",
            "Diagnostics View",
            "Advanced Settings View",
        ]
        for phrase in required_phrases:
            if phrase not in home_text:
                add(findings, "docs/home-assistant-dashboard.md", 1, f"Missing dashboard docs phrase: {phrase}")

    # 3) Package order in docs should mirror oq_packages.yaml.
    package_related = {
        "openquatt/oq_packages.yaml",
        "docs/system-overview.md",
    }
    if not args.changed_only or any_changed(changed, package_related):
        package_keys = parse_package_keys(pkg_file)
        doc_order = parse_doc_package_order(docs_system)
        expected_doc_order: list[str] = []
        for key in package_keys:
            if key in {"heatpump1", "heatpump2"}:
                continue
            expected_doc_order.append(key)
        if "heatpump1" in package_keys and "heatpump2" in package_keys:
            expected_doc_order.append("oq_HP_io")

        if doc_order != expected_doc_order:
            add(
                findings,
                "docs/system-overview.md",
                1,
                f"Package order drift: docs={doc_order}, expected={expected_doc_order}",
            )

    # 4) Advisory changed-file guards for likely doc drift.
    if args.changed_only and changed:
        if any_changed(changed, {"openquatt/oq_packages.yaml"}) and not any_changed(changed, {"docs/system-overview.md"}):
            add(
                findings,
                "docs/system-overview.md",
                1,
                "oq_packages changed; consider updating package include order in docs/system-overview.md.",
            )
        if any_changed(changed, {"docs/dashboard/openquatt_ha_dashboard_en.yaml", "docs/dashboard/openquatt_ha_dashboard_nl.yaml"}) and not any_changed(changed, {"docs/home-assistant-dashboard.md"}):
            add(
                findings,
                "docs/home-assistant-dashboard.md",
                1,
                "Dashboard YAML changed; consider updating docs/home-assistant-dashboard.md.",
            )
        if any_changed(changed, {"openquatt/oq_debug_testing.yaml", "openquatt/oq_common.yaml"}) and not any_changed(changed, {"docs/home-assistant-dashboard.md", "docs/settings-reference.md", "docs/system-overview.md"}):
            add(
                findings,
                "docs/home-assistant-dashboard.md",
                1,
                "Service/debug entities changed; consider updating dashboard/settings/system docs.",
            )

    if not findings:
        print("Docs consistency checks passed.")
        return 0

    print(f"Docs consistency checks found {len(findings)} issue(s):")
    for f in findings:
        print(f"::warning file={f.file},line={f.line}::{f.message}")
        print(f"- {f.file}:{f.line} {f.message}")
    return 1


if __name__ == "__main__":
    sys.exit(main())
