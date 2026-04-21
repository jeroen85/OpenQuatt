#!/usr/bin/env python3
from __future__ import annotations

import argparse
import concurrent.futures
import fnmatch
import json
import os
import shutil
import subprocess
import sys
import tempfile
import time
from pathlib import Path
from typing import Iterable, Sequence

DEFAULT_CONFIGS = (
    "openquatt_duo_waveshare.yaml",
    "openquatt_duo_heatpump_listener.yaml",
    "openquatt_single_waveshare.yaml",
    "openquatt_single_heatpump_listener.yaml",
)

FACTORY_FILES = (
    "openquatt-duo-waveshare.firmware.factory.bin",
    "openquatt-duo-heatpump-listener.firmware.factory.bin",
    "openquatt-single-waveshare.firmware.factory.bin",
    "openquatt-single-heatpump-listener.firmware.factory.bin",
)

STAGE_EXCLUDE_DIRS = {
    ".git",
    ".venv",
    ".cache",
    ".tmp",
    "build",
    ".esphome",
    "__pycache__",
}

STAGE_EXCLUDE_FILES = ("*.pyc", "*.pyo")

EFUSE_DUPLICATE_SOURCE = '"src/esp_efuse_fields.c"'
EFUSE_PATCH_MARKER = (
    "# OpenQuatt validate patch: target-specific sources.cmake already provides "
    "esp_efuse_fields.c.\n"
)


def repo_root() -> Path:
    return Path(__file__).resolve().parent.parent


def is_windows() -> bool:
    return os.name == "nt"


def resolve_path(path_value: str) -> Path:
    path = Path(path_value)
    if path.is_absolute():
        return path
    return repo_root() / path


def venv_bin_dir(venv_dir: Path) -> Path:
    return venv_dir / ("Scripts" if is_windows() else "bin")


def _existing_path(paths: Iterable[Path]) -> Path | None:
    for path in paths:
        if path.exists():
            return path
    return None


def venv_python_path(venv_dir: Path) -> Path | None:
    return _existing_path(
        (
            venv_bin_dir(venv_dir) / "python.exe",
            venv_bin_dir(venv_dir) / "python",
            venv_bin_dir(venv_dir) / "python3",
        )
    )


def resolve_helper_python(venv_dir: Path) -> list[str]:
    candidate = venv_python_path(venv_dir)
    if candidate is not None:
        return [str(candidate)]
    return [sys.executable]


def resolve_esphome_command(venv_dir: Path) -> list[str]:
    candidate = _existing_path(
        (
            venv_bin_dir(venv_dir) / "esphome.exe",
            venv_bin_dir(venv_dir) / "esphome",
        )
    )
    if candidate is not None:
        return [str(candidate)]

    in_path = shutil.which("esphome")
    if in_path:
        return [in_path]

    raise SystemExit(
        "ESPHome executable not found. Run the bootstrap command first or install "
        "'esphome' in PATH."
    )


def bootstrap_python_candidates(explicit_python: str) -> list[str]:
    if explicit_python:
        return [explicit_python]

    candidates: list[str] = []
    seen: set[str] = set()

    def add(candidate: str | None) -> None:
        if not candidate:
            return
        path = Path(candidate).expanduser()
        try:
            resolved = str(path.resolve())
        except OSError:
            resolved = str(path)
        if resolved in seen or not Path(resolved).exists():
            return
        seen.add(resolved)
        candidates.append(resolved)

    if sys.platform == "darwin":
        for candidate in (
            "/opt/homebrew/bin/python3",
            "/usr/local/bin/python3",
            "/Library/Frameworks/Python.framework/Versions/3.13/bin/python3",
            "/Library/Frameworks/Python.framework/Versions/3.12/bin/python3",
            "/Library/Frameworks/Python.framework/Versions/3.11/bin/python3",
            "/usr/bin/python3",
        ):
            add(candidate)

    add(sys.executable)
    add(shutil.which("python3"))
    add(shutil.which("python"))

    return candidates


def can_create_bootstrap_venv(python_exe: str, root_dir: Path) -> tuple[bool, str]:
    with tempfile.TemporaryDirectory(prefix="openquatt-bootstrap-check-") as tmp_dir:
        probe_venv = Path(tmp_dir) / "venv"
        completed = subprocess.run(
            [python_exe, "-m", "venv", str(probe_venv)],
            cwd=root_dir,
            capture_output=True,
            text=True,
            check=False,
        )
        if completed.returncode != 0:
            detail = completed.stderr.strip() or completed.stdout.strip() or "venv creation failed"
            return False, detail

        probe_python = venv_python_path(probe_venv)
        if probe_python is None:
            return False, "venv created without a Python executable"

        pip_check = subprocess.run(
            [str(probe_python), "-m", "pip", "--version"],
            cwd=root_dir,
            capture_output=True,
            text=True,
            check=False,
        )
        if pip_check.returncode != 0:
            detail = pip_check.stderr.strip() or pip_check.stdout.strip() or "pip is unavailable inside the venv"
            return False, detail

    return True, ""


def resolve_bootstrap_python(explicit_python: str, root_dir: Path) -> str:
    failures: list[str] = []
    for candidate in bootstrap_python_candidates(explicit_python):
        ok, detail = can_create_bootstrap_venv(candidate, root_dir)
        if ok:
            return candidate
        failures.append(f"{candidate}: {detail}")

    if failures:
        joined = "\n".join(f"  - {failure}" for failure in failures)
        raise SystemExit(
            "No usable Python executable found for bootstrap.\n"
            "Tried:\n"
            f"{joined}\n"
            "Pass --python-exe /path/to/python3 to override."
        )

    raise SystemExit("No Python executable found for bootstrap.")


def ensure_factory_dir(factory_dir: Path) -> None:
    if not factory_dir.is_dir():
        raise SystemExit(f"Factory firmware directory does not exist: {factory_dir}")

    missing = [file_name for file_name in FACTORY_FILES if not (factory_dir / file_name).is_file()]
    if missing:
        missing_list = ", ".join(missing)
        raise SystemExit(f"Factory firmware directory is missing files: {missing_list}")


def tail_lines(path: Path, limit: int = 80) -> str:
    if not path.exists():
        return ""
    with path.open("r", encoding="utf-8", errors="replace") as handle:
        lines = handle.readlines()
    return "".join(lines[-limit:])


def format_duration(total_seconds: float) -> str:
    seconds = int(total_seconds)
    minutes, seconds = divmod(seconds, 60)
    hours, minutes = divmod(minutes, 60)
    if hours > 0:
        return f"{hours}h{minutes:02d}m{seconds:02d}s"
    if minutes > 0:
        return f"{minutes}m{seconds:02d}s"
    return f"{seconds}s"


def framework_espidf_package_dirs(pio_core_dir: Path) -> list[Path]:
    candidates = [
        pio_core_dir / "packages" / "framework-espidf",
        Path.home() / ".platformio" / "packages" / "framework-espidf",
    ]
    seen: set[Path] = set()
    dirs: list[Path] = []
    for candidate in candidates:
        resolved = candidate.expanduser()
        if resolved in seen:
            continue
        seen.add(resolved)
        dirs.append(resolved)
    return dirs


def patch_framework_espidf_efuse(package_dir: Path) -> bool:
    cmake_path = package_dir / "components" / "efuse" / "CMakeLists.txt"
    if not cmake_path.is_file():
        return False

    text = cmake_path.read_text(encoding="utf-8")
    if EFUSE_PATCH_MARKER in text:
        return False
    if EFUSE_DUPLICATE_SOURCE not in text:
        return False

    old = (
        'list(APPEND srcs "src/esp_efuse_api.c"\n'
        '                 "src/esp_efuse_fields.c"\n'
        '                 "src/esp_efuse_utility.c"\n'
        '                 "src/efuse_controller/keys/${type}/esp_efuse_api_key.c")'
    )
    new = (
        EFUSE_PATCH_MARKER
        +
        'list(APPEND srcs "src/esp_efuse_api.c"\n'
        '                 "src/esp_efuse_utility.c"\n'
        '                 "src/efuse_controller/keys/${type}/esp_efuse_api_key.c")'
    )
    if old not in text:
        raise SystemExit(
            "framework-espidf efuse workaround could not be applied because the expected "
            f"source block was not found in {cmake_path}"
        )

    cmake_path.write_text(text.replace(old, new, 1), encoding="utf-8")
    return True


def apply_framework_espidf_efuse_workaround(pio_core_dir: Path) -> list[Path]:
    patched: list[Path] = []
    for package_dir in framework_espidf_package_dirs(pio_core_dir):
        if patch_framework_espidf_efuse(package_dir):
            patched.append(package_dir)
    return patched


def has_framework_espidf_efuse_workaround(pio_core_dir: Path) -> bool:
    for package_dir in framework_espidf_package_dirs(pio_core_dir):
        cmake_path = package_dir / "components" / "efuse" / "CMakeLists.txt"
        if not cmake_path.is_file():
            continue
        text = cmake_path.read_text(encoding="utf-8")
        if EFUSE_PATCH_MARKER in text:
            return True
    return False


def run_command(
    command: Sequence[str],
    *,
    cwd: Path,
    env: dict[str, str] | None = None,
    log_path: Path | None = None,
    check: bool = True,
    heartbeat_label: str | None = None,
    heartbeat_interval_s: float = 20.0,
) -> int:
    if log_path is None:
        completed = subprocess.run(command, cwd=cwd, env=env, check=False)
        if check and completed.returncode != 0:
            raise subprocess.CalledProcessError(completed.returncode, command)
        return completed.returncode

    log_path.parent.mkdir(parents=True, exist_ok=True)
    with log_path.open("w", encoding="utf-8", errors="replace") as handle:
        started_at = time.monotonic()
        next_heartbeat_at = started_at + heartbeat_interval_s
        process = subprocess.Popen(
            command,
            cwd=cwd,
            env=env,
            stdout=handle,
            stderr=subprocess.STDOUT,
            text=True,
        )
        while True:
            exit_code = process.poll()
            if exit_code is not None:
                break
            if heartbeat_label is not None:
                now = time.monotonic()
                if now >= next_heartbeat_at:
                    print(f"[wait] {heartbeat_label} ({format_duration(now - started_at)})", flush=True)
                    next_heartbeat_at = now + heartbeat_interval_s
            time.sleep(1.0)

    if check and exit_code != 0:
        raise subprocess.CalledProcessError(exit_code, command)

    return exit_code


def run_logged(
    command: Sequence[str],
    *,
    cwd: Path,
    env: dict[str, str] | None,
    log_path: Path,
    label: str,
) -> None:
    print(f"[run] {label}", flush=True)
    exit_code = run_command(
        command,
        cwd=cwd,
        env=env,
        log_path=log_path,
        check=False,
        heartbeat_label=label,
    )
    if exit_code != 0:
        print(f"[FAIL] {label}", file=sys.stderr)
        tail = tail_lines(log_path)
        if tail:
            print(tail, file=sys.stderr, end="" if tail.endswith("\n") else "\n")
        raise SystemExit(f"{label} failed. Full log: {log_path}")

    print(f"[ok] {label}")


def stage_ignore(directory: str, entries: list[str]) -> set[str]:
    ignored: set[str] = set()
    current_dir = Path(directory)
    for entry in entries:
        candidate = current_dir / entry
        if candidate.is_dir() and entry in STAGE_EXCLUDE_DIRS:
            ignored.add(entry)
            continue
        if any(fnmatch.fnmatch(entry, pattern) for pattern in STAGE_EXCLUDE_FILES):
            ignored.add(entry)
    return ignored


def sync_staged_workspace(source_dir: Path, stage_dir: Path) -> None:
    if is_windows():
        stage_dir.parent.mkdir(parents=True, exist_ok=True)
        log_path = stage_dir.parent / "workspace-sync.log"
        arguments = [
            str(source_dir),
            str(stage_dir),
            "/MIR",
            "/R:1",
            "/W:1",
            "/XD",
            *sorted(STAGE_EXCLUDE_DIRS),
            "/XF",
            *STAGE_EXCLUDE_FILES,
            f"/LOG:{log_path}",
        ]
        completed = subprocess.run(
            ["robocopy.exe", *arguments],
            cwd=source_dir,
            check=False,
            stdout=subprocess.DEVNULL,
            stderr=subprocess.STDOUT,
        )
        if completed.returncode > 7:
            tail = tail_lines(log_path)
            if tail:
                print(tail, file=sys.stderr, end="" if tail.endswith("\n") else "\n")
            raise SystemExit(f"workspace sync failed. Full log: {log_path}")
        return

    if stage_dir.exists():
        shutil.rmtree(stage_dir)
    stage_dir.parent.mkdir(parents=True, exist_ok=True)
    shutil.copytree(source_dir, stage_dir, ignore=stage_ignore)


def resolve_command_root(root_dir: Path) -> tuple[Path, Path, Path | None]:
    command_root = root_dir
    pio_core_dir = root_dir / ".cache" / "platformio"
    cleanup_dir: Path | None = None

    if is_windows() and " " in str(root_dir):
        local_app_data = Path(os.environ.get("LOCALAPPDATA", tempfile.gettempdir()))
        stage_base_dir = local_app_data / "OpenQuattBuild"
        sessions_dir = stage_base_dir / "sessions"
        sessions_dir.mkdir(parents=True, exist_ok=True)

        cleanup_dir = Path(tempfile.mkdtemp(prefix="workspace-", dir=sessions_dir))
        command_root = cleanup_dir / "workspace"
        pio_core_dir = stage_base_dir / "platformio"
        print(f"Workspace path contains spaces; mirroring into {command_root}")
        sync_staged_workspace(root_dir, command_root)
        print("[ok] workspace sync")

    pio_core_dir.mkdir(parents=True, exist_ok=True)
    return command_root, pio_core_dir, cleanup_dir


def build_pages_site(site_dir: Path, factory_dir: Path, helper_python: Sequence[str]) -> None:
    root_dir = repo_root()
    ensure_factory_dir(factory_dir)

    if site_dir.exists():
        shutil.rmtree(site_dir)

    (site_dir / "firmware" / "main").mkdir(parents=True, exist_ok=True)
    shutil.copytree(root_dir / "docs", site_dir, dirs_exist_ok=True)

    for stale_file in ("onderhoudsgids.md", "releaseproces.md"):
        stale_path = site_dir / stale_file
        if stale_path.exists():
            stale_path.unlink()

    run_command(
        [*helper_python, str(root_dir / "scripts" / "build_pages_docs.py"), str(site_dir)],
        cwd=root_dir,
    )

    (site_dir / ".nojekyll").touch()

    for file_name in FACTORY_FILES:
        shutil.copy2(factory_dir / file_name, site_dir / "firmware" / "main" / file_name)


def describe_version(root_dir: Path) -> str:
    result = subprocess.run(
        ["git", "-C", str(root_dir), "describe", "--tags", "--always", "--dirty"],
        capture_output=True,
        text=True,
        check=False,
    )
    label = result.stdout.strip()
    return label or "local-preview"


def default_jobs() -> int:
    raw_jobs = os.environ.get("JOBS", "2")
    try:
        value = int(raw_jobs)
    except ValueError as exc:
        raise SystemExit("JOBS must be a positive integer.") from exc
    if value < 1:
        raise SystemExit("JOBS must be a positive integer.")
    return value


def ensure_supported_parallelism(args: argparse.Namespace) -> None:
    if is_windows() and args.jobs > 1:
        raise SystemExit(
            "Parallel compile jobs are not supported on native Windows in this repo yet. "
            "Use '--jobs 1' on native Windows, or run the same command in WSL/macOS/Linux "
            "for reliable parallel builds."
        )


def bootstrap_command(args: argparse.Namespace) -> int:
    root_dir = repo_root()
    venv_dir = resolve_path(args.venv_dir)
    requirements_file = root_dir / ".github" / "requirements-esphome.txt"
    python_exe = resolve_bootstrap_python(args.python_exe, root_dir)

    print(f"Using Python: {python_exe}")
    print(f"Virtual environment: {venv_dir}")

    run_command([python_exe, "-m", "venv", "--clear", str(venv_dir)], cwd=root_dir)

    venv_python = venv_python_path(venv_dir)
    if venv_python is None:
        raise SystemExit(f"Virtual environment Python not found under {venv_dir}")

    run_command([str(venv_python), "-m", "pip", "install", "--upgrade", "pip"], cwd=root_dir)
    run_command(
        [str(venv_python), "-m", "pip", "install", "-r", str(requirements_file)],
        cwd=root_dir,
    )
    run_command([str(venv_python), "-m", "esphome", "version"], cwd=root_dir)

    print()
    print("Local ESPHome environment is ready.")
    print("Bootstrap again: python3 scripts/dev.py bootstrap")
    print("Validate/compile: python3 scripts/dev.py validate")
    return 0


def validate_command(args: argparse.Namespace) -> int:
    ensure_supported_parallelism(args)
    root_dir = repo_root()
    venv_dir = resolve_path(args.venv_dir)
    command_root, pio_core_dir, cleanup_dir = resolve_command_root(root_dir)
    log_dir = root_dir / ".tmp" / "validate_local_logs"
    helper_python = resolve_helper_python(venv_dir)
    esphome_command = resolve_esphome_command(venv_dir)

    log_dir.mkdir(parents=True, exist_ok=True)

    env = os.environ.copy()
    env["PLATFORMIO_CORE_DIR"] = str(pio_core_dir)

    print(f"Workspace root: {root_dir}")
    if command_root != root_dir:
        print(f"Command root: {command_root}")
    print(f"PlatformIO core dir: {pio_core_dir}")
    print(f"Log dir: {log_dir}")
    print(f"Parallel compile jobs: {args.jobs}")

    try:
        command_scripts_dir = command_root / "scripts"
        run_logged(
            [*helper_python, str(command_scripts_dir / "check_style_consistency.py")],
            cwd=command_root,
            env=env,
            log_path=log_dir / "style-consistency.log",
            label="style consistency",
        )
        run_logged(
            [*helper_python, str(command_scripts_dir / "check_docs_consistency.py")],
            cwd=command_root,
            env=env,
            log_path=log_dir / "docs-consistency.log",
            label="docs consistency",
        )

        for config in args.configs:
            stem = Path(config).stem
            run_logged(
                [*esphome_command, "config", config],
                cwd=command_root,
                env=env,
                log_path=log_dir / f"{stem}.config.log",
                label=f"config {config}",
            )

        if args.config_only:
            print()
            print("Validation complete.")
            return 0

        patched_packages = apply_framework_espidf_efuse_workaround(pio_core_dir)
        for package_dir in patched_packages:
            print(f"[fix] patched framework-espidf efuse sources in {package_dir}")
        if patched_packages:
            shutil.rmtree(command_root / ".esphome" / "build", ignore_errors=True)

        compile_queue = list(args.configs)
        packages_dir = pio_core_dir / "packages"
        espressif_cache_dir = command_root / ".esphome" / ".espressif"
        cold_platformio_cache = not packages_dir.exists() or not any(packages_dir.iterdir())
        cold_espressif_cache = not espressif_cache_dir.exists() or not any(espressif_cache_dir.iterdir())
        force_serial_compile = args.jobs > 1 and (cold_platformio_cache or cold_espressif_cache)
        if force_serial_compile:
            print(
                "Cold compile cache detected; running this validation sequentially once "
                "to avoid ESP-IDF component-cache races."
            )
            shutil.rmtree(espressif_cache_dir, ignore_errors=True)

        def compile_one(config: str) -> tuple[str, int, Path]:
            log_path = log_dir / f"{Path(config).stem}.compile.log"
            label = f"compile {config}"
            print(f"[run] {label}", flush=True)
            exit_code = run_command(
                [*esphome_command, "compile", config],
                cwd=command_root,
                env=env,
                log_path=log_path,
                check=False,
                heartbeat_label=label,
            )
            if exit_code != 0:
                tail = tail_lines(log_path, limit=160)
                efuse_duplicate = (
                    "Multiple ways to build the same target were specified for:" in tail
                    and "esp_efuse_fields.c.o" in tail
                )
                cache_race = (
                    ".esphome/.espressif/service_" in tail
                    and ("ArduinoJson" in tail or "idf_component_manager" in tail)
                )
                if efuse_duplicate:
                    patched = apply_framework_espidf_efuse_workaround(pio_core_dir)
                    if patched or has_framework_espidf_efuse_workaround(pio_core_dir):
                        print(
                            f"[retry] compile {config}: resetting build cache after framework-espidf "
                            "efuse duplicate-target failure."
                        )
                        shutil.rmtree(command_root / ".esphome" / "build" / Path(config).stem, ignore_errors=True)
                        exit_code = run_command(
                            [*esphome_command, "compile", config],
                            cwd=command_root,
                            env=env,
                            log_path=log_path,
                            check=False,
                            heartbeat_label=label,
                        )
                        if exit_code == 0:
                            return config, exit_code, log_path
                        tail = tail_lines(log_path, limit=160)

                if cache_race:
                    print(
                        f"[retry] compile {config}: resetting ESP-IDF component cache after a generated-cache race."
                    )
                    shutil.rmtree(espressif_cache_dir, ignore_errors=True)
                    exit_code = run_command(
                        [*esphome_command, "compile", config],
                        cwd=command_root,
                        env=env,
                        log_path=log_path,
                        check=False,
                        heartbeat_label=label,
                    )
            return config, exit_code, log_path

        results: list[tuple[str, int, Path]] = []
        if compile_queue:
            if args.jobs == 1 or force_serial_compile:
                results = [compile_one(config) for config in compile_queue]
            else:
                with concurrent.futures.ThreadPoolExecutor(max_workers=args.jobs) as executor:
                    futures = [executor.submit(compile_one, config) for config in compile_queue]
                    for future in concurrent.futures.as_completed(futures):
                        results.append(future.result())

                order = {config: index for index, config in enumerate(compile_queue)}
                results.sort(key=lambda item: order[item[0]])

        failures = 0
        for config, exit_code, log_path in results:
            if exit_code != 0:
                failures += 1
                print(f"[FAIL] compile {config}", file=sys.stderr)
                tail = tail_lines(log_path)
                if tail:
                    print(tail, file=sys.stderr, end="" if tail.endswith("\n") else "\n")
                continue
            print(f"[ok] compile {config}")

        if failures:
            raise SystemExit(f"Validation finished with {failures} compile failure(s).")

        print()
        print("Validation complete.")
        return 0
    finally:
        if cleanup_dir is not None:
            shutil.rmtree(cleanup_dir, ignore_errors=True)


def prepare_pages_site_command(args: argparse.Namespace) -> int:
    venv_dir = resolve_path(args.venv_dir)
    helper_python = resolve_helper_python(venv_dir)
    build_pages_site(Path(args.site_dir).resolve(), Path(args.factory_bin_dir).resolve(), helper_python)
    return 0


def preview_pages_command(args: argparse.Namespace) -> int:
    root_dir = repo_root()
    venv_dir = resolve_path(args.venv_dir)
    helper_python = resolve_helper_python(venv_dir)

    temp_dir = Path(tempfile.mkdtemp(prefix="openquatt-pages-preview."))
    site_dir = temp_dir / "site"
    work_firmware_dir = temp_dir / "firmware"
    work_firmware_dir.mkdir(parents=True, exist_ok=True)

    try:
        if args.firmware_dir:
            source_dir = Path(args.firmware_dir).resolve()
            ensure_factory_dir(source_dir)
            for file_name in FACTORY_FILES:
                shutil.copy2(source_dir / file_name, work_firmware_dir / file_name)
        else:
            for file_name in FACTORY_FILES:
                (work_firmware_dir / file_name).touch()

        build_pages_site(site_dir, work_firmware_dir, helper_python)
        version_path = site_dir / "firmware" / "main" / "version.json"
        version_path.write_text(
            json.dumps(
                {
                    "version": describe_version(root_dir),
                    "release_url": "https://github.com/jeroen85/OpenQuatt/releases/latest",
                },
                indent=2,
            )
            + "\n",
            encoding="utf-8",
        )

        print("Local Pages preview ready.")
        print(f"Preview directory: {site_dir}")
        print("Open:")
        print(f"  http://{args.host}:{args.port}/")
        print(f"  http://{args.host}:{args.port}/verwarmen-en-koelen.html")
        print(f"  http://{args.host}:{args.port}/install/index.html")

        if not args.firmware_dir:
            print()
            print("Using placeholder firmware binaries.")
            print("Use --firmware-dir <dir> if you want to test with real factory images.")

        if args.no_serve:
            print()
            print("Build completed without starting the HTTP server because --no-serve was used.")
            if not args.keep:
                print("Use --keep if you want to inspect the generated preview directory after the command exits.")
            return 0

        print()
        print("Stop with Ctrl+C.")
        run_command(
            [
                *helper_python,
                "-m",
                "http.server",
                str(args.port),
                "--bind",
                args.host,
                "--directory",
                str(site_dir),
            ],
            cwd=root_dir,
            check=False,
        )
        return 0
    finally:
        if args.keep:
            print(f"Preview directory kept at: {temp_dir}")
        else:
            shutil.rmtree(temp_dir, ignore_errors=True)


def create_parser() -> argparse.ArgumentParser:
    parser = argparse.ArgumentParser(description="Unified local developer commands for OpenQuatt.")
    subparsers = parser.add_subparsers(dest="command", required=True)

    bootstrap_parser = subparsers.add_parser(
        "bootstrap",
        help="Create or update the local ESPHome virtual environment.",
    )
    bootstrap_parser.add_argument("--python-exe", default="", help="Python executable to use for venv creation.")
    bootstrap_parser.add_argument("--venv-dir", default=".venv", help="Virtual environment directory.")
    bootstrap_parser.set_defaults(func=bootstrap_command)

    validate_parser = subparsers.add_parser(
        "validate",
        help="Run style/docs validation and validate or compile all firmware profiles.",
    )
    validate_parser.add_argument(
        "--config",
        dest="configs",
        action="append",
        default=[],
        help="Validate only the given config file. May be passed multiple times.",
    )
    validate_parser.add_argument(
        "--config-only",
        action="store_true",
        help="Skip firmware compilation after config validation.",
    )
    validate_parser.add_argument("--venv-dir", default=".venv", help="Virtual environment directory.")
    validate_parser.add_argument(
        "--jobs",
        type=int,
        default=default_jobs(),
        help="Maximum number of concurrent compile jobs.",
    )
    validate_parser.set_defaults(func=validate_command)

    prepare_parser = subparsers.add_parser(
        "prepare-pages-site",
        help="Assemble the local Pages site from docs and factory binaries.",
    )
    prepare_parser.add_argument("site_dir", help="Output site directory.")
    prepare_parser.add_argument("factory_bin_dir", help="Directory containing factory firmware binaries.")
    prepare_parser.add_argument("--venv-dir", default=".venv", help="Virtual environment directory.")
    prepare_parser.set_defaults(func=prepare_pages_site_command)

    preview_parser = subparsers.add_parser(
        "preview-pages",
        help="Build and optionally serve a local Pages preview.",
    )
    preview_parser.add_argument("--port", type=int, default=8000, help="HTTP port to use.")
    preview_parser.add_argument("--host", default="127.0.0.1", help="Bind host for the preview server.")
    preview_parser.add_argument(
        "--firmware-dir",
        default="",
        help="Directory containing real *.firmware.factory.bin files.",
    )
    preview_parser.add_argument("--keep", action="store_true", help="Keep the temporary preview directory.")
    preview_parser.add_argument(
        "--no-serve",
        action="store_true",
        help="Build the preview but do not start the HTTP server.",
    )
    preview_parser.add_argument("--venv-dir", default=".venv", help="Virtual environment directory.")
    preview_parser.set_defaults(func=preview_pages_command)

    return parser


def main(argv: Sequence[str] | None = None) -> int:
    parser = create_parser()
    args = parser.parse_args(argv)
    if getattr(args, "command", None) == "validate" and not args.configs:
        args.configs = list(DEFAULT_CONFIGS)
    if getattr(args, "command", None) == "validate" and args.jobs < 1:
        parser.error("--jobs must be a positive integer")
    return args.func(args)


if __name__ == "__main__":
    raise SystemExit(main())
