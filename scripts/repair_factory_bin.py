#!/usr/bin/env python3
from __future__ import annotations

import argparse
import json
from pathlib import Path
from typing import Iterable

ESP_IMAGE_MAGIC = 0xE9
PARTITION_TABLE_MAGIC = b"\xaa\x50"

ROLE_KEYS = (
    ("bootloader", ("bootloader",)),
    ("partition-table", ("partition-table", "partition_table")),
    ("otadata", ("otadata",)),
    ("app", ("app",)),
)


class FactoryBinError(RuntimeError):
    pass


def parse_offset(value: str) -> int:
    try:
        return int(str(value).strip(), 0)
    except ValueError as exc:
        raise FactoryBinError(f"Invalid flash offset: {value!r}") from exc


def load_flasher_args(build_dir: Path) -> dict:
    path = build_dir / "flasher_args.json"
    if not path.is_file():
        raise FactoryBinError(f"flasher_args.json not found: {path}")
    try:
        return json.loads(path.read_text(encoding="utf-8"))
    except json.JSONDecodeError as exc:
        raise FactoryBinError(f"Invalid flasher_args.json: {path}") from exc


def first_existing(candidates: Iterable[Path]) -> Path | None:
    for candidate in candidates:
        if candidate.is_file():
            return candidate
    return None


def fallback_candidates(raw_path: str, build_dir: Path, role: str, offset: int) -> list[Path]:
    raw_name = Path(str(raw_path)).name
    candidates = [
        build_dir / raw_name,
        build_dir / str(raw_path),
    ]

    if role == "bootloader" or offset in (0x0, 0x1000, 0x2000):
        candidates.extend(
            (
                build_dir / "bootloader.bin",
                build_dir / "bootloader" / "bootloader.bin",
            )
        )
    if role == "partition-table" or offset == 0x8000:
        candidates.extend(
            (
                build_dir / "partitions.bin",
                build_dir / "partition_table" / "partition-table.bin",
            )
        )
    if role == "otadata":
        candidates.append(build_dir / "ota_data_initial.bin")
    if role == "app" or (not role and is_app_image_name(raw_name)):
        candidates.append(build_dir / "firmware.bin")

    return candidates


def infer_role(offset: int, path: Path) -> str:
    name = path.name.lower()
    if offset in (0x0, 0x1000, 0x2000) or "bootloader" in name:
        return "bootloader"
    if offset == 0x8000 or "partition" in name or name == "partitions.bin":
        return "partition-table"
    if offset in (0xE000, 0xF000) or "ota_data" in name:
        return "otadata"
    if offset >= 0x10000 and has_esp_image_magic(path):
        return "app"
    return ""


def has_esp_image_magic(path: Path) -> bool:
    try:
        with path.open("rb") as handle:
            return handle.read(1) == bytes([ESP_IMAGE_MAGIC])
    except OSError:
        return False


def is_app_image_name(name: str) -> bool:
    normalized = name.lower()
    return normalized == "firmware.bin" or normalized.startswith("openquatt_")


def resolve_flash_file(raw_path: str, build_dir: Path, role: str, offset: int) -> Path:
    path = Path(str(raw_path))
    candidates = [path] if path.is_absolute() else [build_dir / path]
    candidates.extend(fallback_candidates(str(raw_path), build_dir, role, offset))

    resolved = first_existing(candidates)
    if resolved is None:
        tried = ", ".join(str(candidate) for candidate in candidates)
        raise FactoryBinError(f"Flash file for {role or hex(offset)} not found. Tried: {tried}")
    return resolved.resolve()


def collect_sections(build_dir: Path, flasher_args: dict) -> tuple[list[tuple[int, Path]], dict[str, int]]:
    sections: dict[int, Path] = {}
    role_offsets: dict[str, int] = {}

    for role, metadata_keys in ROLE_KEYS:
        entry = next(
            (flasher_args[key] for key in metadata_keys if isinstance(flasher_args.get(key), dict)),
            None,
        )
        if entry is None:
            continue
        offset = parse_offset(entry.get("offset", ""))
        raw_file = str(entry.get("file", "")).strip()
        if not raw_file:
            continue
        sections[offset] = resolve_flash_file(raw_file, build_dir, role, offset)
        role_offsets[role] = offset

    for raw_offset, raw_file in flasher_args.get("flash_files", {}).items():
        offset = parse_offset(raw_offset)
        if offset in sections:
            role = infer_role(offset, sections[offset])
            if role and role not in role_offsets:
                role_offsets[role] = offset
            continue
        path = resolve_flash_file(str(raw_file), build_dir, "", offset)
        sections[offset] = path
        role = infer_role(offset, path)
        if role and role not in role_offsets:
            role_offsets[role] = offset

    if not sections:
        raise FactoryBinError(f"No flash sections found in {build_dir / 'flasher_args.json'}")
    if "bootloader" not in role_offsets:
        raise FactoryBinError("flasher_args.json does not describe a bootloader section")
    if "app" not in role_offsets:
        raise FactoryBinError("flasher_args.json does not describe an app section")

    return sorted(sections.items()), role_offsets


def merge_sections(sections: list[tuple[int, Path]], output_path: Path) -> None:
    image_size = max(offset + path.stat().st_size for offset, path in sections)
    output_path.parent.mkdir(parents=True, exist_ok=True)

    with output_path.open("wb") as output:
        output.truncate(image_size)
        output.seek(0)
        output.write(b"\xff" * image_size)
        for offset, path in sections:
            output.seek(offset)
            output.write(path.read_bytes())


def read_bytes(path: Path, offset: int, size: int) -> bytes:
    with path.open("rb") as handle:
        handle.seek(offset)
        data = handle.read(size)
    if len(data) != size:
        raise FactoryBinError(f"{path} is too short to read {size} byte(s) at {hex(offset)}")
    return data


def validate_factory_bin(output_path: Path, role_offsets: dict[str, int]) -> None:
    bootloader_offset = role_offsets["bootloader"]
    app_offset = role_offsets["app"]

    bootloader_magic = read_bytes(output_path, bootloader_offset, 1)[0]
    if bootloader_magic != ESP_IMAGE_MAGIC:
        raise FactoryBinError(
            f"{output_path.name} has no ESP bootloader magic at {hex(bootloader_offset)} "
            f"(got 0x{bootloader_magic:02x})"
        )

    app_magic = read_bytes(output_path, app_offset, 1)[0]
    if app_magic != ESP_IMAGE_MAGIC:
        raise FactoryBinError(
            f"{output_path.name} has no ESP app magic at {hex(app_offset)} "
            f"(got 0x{app_magic:02x})"
        )

    partition_offset = role_offsets.get("partition-table")
    if partition_offset is not None:
        partition_magic = read_bytes(output_path, partition_offset, 2)
        if partition_magic != PARTITION_TABLE_MAGIC:
            raise FactoryBinError(
                f"{output_path.name} has no partition table magic at {hex(partition_offset)} "
                f"(got {partition_magic.hex()})"
            )


def repair_factory_bin(build_dir: Path, output_name: str = "firmware.factory.bin") -> Path:
    build_dir = build_dir.resolve()
    flasher_args = load_flasher_args(build_dir)
    sections, role_offsets = collect_sections(build_dir, flasher_args)
    output_path = build_dir / output_name
    merge_sections(sections, output_path)
    validate_factory_bin(output_path, role_offsets)
    return output_path


def main() -> int:
    parser = argparse.ArgumentParser(description="Repair and validate an ESPHome ESP-IDF factory binary.")
    parser.add_argument("build_dir", help="Path to the .pioenvs/openquatt build directory.")
    parser.add_argument("--output-name", default="firmware.factory.bin", help="Factory binary filename to write.")
    args = parser.parse_args()

    try:
        output_path = repair_factory_bin(Path(args.build_dir), args.output_name)
    except FactoryBinError as exc:
        raise SystemExit(str(exc)) from exc

    print(f"[ok] repaired factory binary: {output_path}")
    return 0


def _register_platformio_action() -> None:
    try:
        Import("env")  # type: ignore[name-defined]  # noqa: F821
    except NameError:
        return

    def repair_factory_bin_action(source, target, env):  # noqa: ANN001
        build_dir = Path(env.subst("$BUILD_DIR"))
        try:
            output_path = repair_factory_bin(build_dir)
        except FactoryBinError as exc:
            print(f"Error repairing factory binary: {exc}")
            env.Exit(1)
            return
        print(f"Repaired and validated factory binary: {output_path}")

    env.AddPostAction("$BUILD_DIR/${PROGNAME}.bin", repair_factory_bin_action)  # noqa: F821


_register_platformio_action()


if __name__ == "__main__":
    raise SystemExit(main())
