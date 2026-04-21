#!/usr/bin/env python3
from __future__ import annotations

import argparse
import json
import sys
from dataclasses import asdict, dataclass
from typing import Sequence


@dataclass(frozen=True)
class ScenarioResult:
    name: str
    passed: bool
    details: str


def hold_request_mode_code(
    hp1_hold: int,
    hp2_hold: int,
    hp1_cooling_hold: bool,
    hp2_cooling_hold: bool,
) -> int:
    if hp1_hold <= 0 and hp2_hold <= 0:
        return 0
    if hp1_cooling_hold or hp2_cooling_hold:
        return 1
    return 2


def curve_active(control_mode_code: int, heat_mode_code: int) -> bool:
    return (control_mode_code != 5) and (heat_mode_code == 1)


def supervisory_heating_request_active(
    strategy_active_code: int,
    strategy_heat_request_active: bool,
) -> bool:
    return (strategy_active_code in (2, 3)) and strategy_heat_request_active


def supervisory_power_house_active(strategy_active_code: int) -> bool:
    return strategy_active_code == 3


def ph_low_load_latch(
    prev_latch: bool,
    requested_power_w: float | None,
    on_threshold_w: float,
    off_threshold_w: float,
    heating_request_raw: bool,
    openquatt_enabled: bool = True,
) -> tuple[bool, bool]:
    latch = prev_latch
    if requested_power_w is None:
        latch = heating_request_raw
    else:
        if (not latch) and requested_power_w >= on_threshold_w:
            latch = True
        elif latch and requested_power_w <= off_threshold_w:
            latch = False
    return heating_request_raw and latch and openquatt_enabled, latch


def ph_reentry_block_active(
    reentry_block_active: bool,
    requested_power_w: float | None,
    on_threshold_w: float,
) -> bool:
    if reentry_block_active and requested_power_w is not None and requested_power_w >= on_threshold_w:
        return False
    return reentry_block_active


def cm1_expiry_resume(
    cm1_next_after: int,
    cooling_request_active: bool,
    heating_request_active: bool,
    base_target: int,
    strategy_active_code: int,
) -> int:
    if cm1_next_after == 2:
        if heating_request_active and base_target == 2:
            return 2
        if base_target == 98:
            return 98
        return 0
    if cm1_next_after == 5:
        if cooling_request_active and base_target == 5:
            return 5
        if base_target == 98:
            return 98
        return 0
    if cm1_next_after == 0:
        if cooling_request_active and base_target == 5:
            return 5
        if strategy_active_code == 2 and heating_request_active and base_target == 2:
            return 2
        if base_target == 98:
            return 98
        return 0
    if cm1_next_after == 98:
        return 98
    if base_target == 5:
        return 5
    if base_target == 2:
        return 2
    if base_target == 98:
        return 98
    return 0


def apply_request_guards(
    hp1_request: int,
    hp2_request: int,
    *,
    hard_trip_active: bool,
    startup_inhibit_active: bool,
) -> tuple[int, int]:
    if hard_trip_active or startup_inhibit_active:
        return 0, 0
    return hp1_request, hp2_request


def runtime_floor_request(
    current_request: int,
    *,
    min_runtime_active: bool,
    cooling_floor_trip: bool,
    measured_or_previously_active: bool,
) -> int:
    if (
        current_request == 0
        and min_runtime_active
        and not cooling_floor_trip
        and measured_or_previously_active
    ):
        return 1
    return current_request


def actuator_mode_and_level(
    request_level: int,
    *,
    request_mode_code: int,
    previous_applied_level: int,
    min_off_blocked: bool,
    measured_mode_matches: bool,
    target_mode_matches: bool,
    retained_level: int = 0,
    silent_cap: int = 10,
    level_allowed: bool = True,
) -> tuple[str, int]:
    request_mode_name = {0: "Standby", 1: "Cooling", 2: "Heating"}[request_mode_code]
    request_thermal_active = request_mode_code in (1, 2)

    if request_level == 0 and retained_level > 0:
        return request_mode_name if request_thermal_active else "Hold", retained_level

    if request_level > 0 and previous_applied_level == 0 and min_off_blocked:
        request_level = 0

    mode_command = request_mode_name if (request_level > 0 and request_thermal_active) else "Standby"
    applied_level = min(request_level, silent_cap)
    if applied_level > 0 and not level_allowed:
        applied_level = 0
    if request_level > 0 and not measured_mode_matches and not target_mode_matches:
        applied_level = 0
    if applied_level == 0 and retained_level > 0:
        return mode_command, retained_level
    return mode_command, applied_level


def topology_hold_arms(previous_topology_count: int, new_topology_count: int) -> bool:
    return (
        previous_topology_count > 0
        and new_topology_count > 0
        and previous_topology_count != new_topology_count
    )


def run_scenarios() -> list[ScenarioResult]:
    results: list[ScenarioResult] = []

    def add(name: str, passed: bool, details: str) -> None:
        results.append(ScenarioResult(name=name, passed=passed, details=details))

    cooling_hold_mode = hold_request_mode_code(1, 0, True, False)
    add(
        "CM5 cooling hold stays cooling on inactive-CM exit",
        cooling_hold_mode == 1,
        f"hold_request_mode_code -> {cooling_hold_mode}",
    )

    heating_hold_mode = hold_request_mode_code(1, 0, False, False)
    add(
        "Heating hold stays heating on inactive-CM exit",
        heating_hold_mode == 2,
        f"hold_request_mode_code -> {heating_hold_mode}",
    )

    add(
        "Curve producer inactive during CM5",
        curve_active(5, 1) is False,
        f"curve_active(cm=5, heat_mode=1) -> {curve_active(5, 1)}",
    )
    add(
        "Curve producer active in CM2 when selected",
        curve_active(2, 1) is True,
        f"curve_active(cm=2, heat_mode=1) -> {curve_active(2, 1)}",
    )

    add(
        "Cooling contract never counts as heating demand",
        supervisory_heating_request_active(1, True) is False,
        f"supervisory_heating_request_active(1, True) -> {supervisory_heating_request_active(1, True)}",
    )
    add(
        "Curve contract counts as heating demand",
        supervisory_heating_request_active(2, True) is True,
        f"supervisory_heating_request_active(2, True) -> {supervisory_heating_request_active(2, True)}",
    )
    add(
        "Power House contract counts as heating demand",
        supervisory_heating_request_active(3, True) is True,
        f"supervisory_heating_request_active(3, True) -> {supervisory_heating_request_active(3, True)}",
    )
    add(
        "Power House detection only on strategy code 3",
        supervisory_power_house_active(3) and not supervisory_power_house_active(2),
        (
            "supervisory_power_house_active(3) -> "
            f"{supervisory_power_house_active(3)}, "
            "supervisory_power_house_active(2) -> "
            f"{supervisory_power_house_active(2)}"
        ),
    )

    heating_request_active, latch = ph_low_load_latch(False, 1500.0, 1300.0, 900.0, True)
    add(
        "PH latch turns on above on-threshold",
        heating_request_active and latch,
        f"heating_request_active={heating_request_active}, latch={latch}",
    )

    heating_request_active, latch = ph_low_load_latch(True, 850.0, 1300.0, 900.0, True)
    add(
        "PH latch turns off below off-threshold",
        (not heating_request_active) and (not latch),
        f"heating_request_active={heating_request_active}, latch={latch}",
    )

    heating_request_active, latch = ph_low_load_latch(True, 1500.0, 1300.0, 900.0, True, False)
    add(
        "PH latch cannot bypass paused OpenQuatt",
        (not heating_request_active) and latch,
        f"heating_request_active={heating_request_active}, latch={latch}",
    )

    add(
        "PH re-entry block clears on strong recovery",
        ph_reentry_block_active(True, 1400.0, 1300.0) is False,
        f"ph_reentry_block_active(True, 1400, 1300) -> {ph_reentry_block_active(True, 1400.0, 1300.0)}",
    )
    add(
        "PH re-entry block persists below recovery threshold",
        ph_reentry_block_active(True, 1200.0, 1300.0) is True,
        f"ph_reentry_block_active(True, 1200, 1300) -> {ph_reentry_block_active(True, 1200.0, 1300.0)}",
    )

    add(
        "CM1 postflow can resume CM2 directly for curve",
        cm1_expiry_resume(0, False, True, 2, 2) == 2,
        f"cm1_expiry_resume(...) -> {cm1_expiry_resume(0, False, True, 2, 2)}",
    )
    add(
        "CM1 postflow does not auto-resume CM2 for Power House",
        cm1_expiry_resume(0, False, True, 2, 3) == 0,
        f"cm1_expiry_resume(...) -> {cm1_expiry_resume(0, False, True, 2, 3)}",
    )
    add(
        "CM1 expiry resumes CM5 when cooling demand recovered",
        cm1_expiry_resume(0, True, False, 5, 1) == 5,
        f"cm1_expiry_resume(...) -> {cm1_expiry_resume(0, True, False, 5, 1)}",
    )

    add(
        "Hard trip zeros both requests",
        apply_request_guards(4, 3, hard_trip_active=True, startup_inhibit_active=False) == (0, 0),
        f"apply_request_guards(...) -> {apply_request_guards(4, 3, hard_trip_active=True, startup_inhibit_active=False)}",
    )
    add(
        "Startup inhibit zeros both requests",
        apply_request_guards(4, 3, hard_trip_active=False, startup_inhibit_active=True) == (0, 0),
        f"apply_request_guards(...) -> {apply_request_guards(4, 3, hard_trip_active=False, startup_inhibit_active=True)}",
    )

    add(
        "Runtime floor can keep HP alive at level 1",
        runtime_floor_request(
            0,
            min_runtime_active=True,
            cooling_floor_trip=False,
            measured_or_previously_active=True,
        )
        == 1,
        (
            "runtime_floor_request(...) -> "
            f"{runtime_floor_request(0, min_runtime_active=True, cooling_floor_trip=False, measured_or_previously_active=True)}"
        ),
    )
    add(
        "Cooling floor trip blocks runtime floor re-arm",
        runtime_floor_request(
            0,
            min_runtime_active=True,
            cooling_floor_trip=True,
            measured_or_previously_active=True,
        )
        == 0,
        (
            "runtime_floor_request(...) -> "
            f"{runtime_floor_request(0, min_runtime_active=True, cooling_floor_trip=True, measured_or_previously_active=True)}"
        ),
    )

    mode_command, applied_level = actuator_mode_and_level(
        3,
        request_mode_code=2,
        previous_applied_level=0,
        min_off_blocked=False,
        measured_mode_matches=False,
        target_mode_matches=True,
    )
    add(
        "Actuator may apply level during mode-transition if target mode already matches",
        (mode_command == "Heating") and (applied_level == 3),
        f"mode_command={mode_command}, applied_level={applied_level}",
    )

    mode_command, applied_level = actuator_mode_and_level(
        3,
        request_mode_code=2,
        previous_applied_level=0,
        min_off_blocked=True,
        measured_mode_matches=False,
        target_mode_matches=False,
    )
    add(
        "Min-off guard blocks restart from zero",
        (mode_command == "Standby") and (applied_level == 0),
        f"mode_command={mode_command}, applied_level={applied_level}",
    )

    mode_command, applied_level = actuator_mode_and_level(
        0,
        request_mode_code=2,
        previous_applied_level=5,
        min_off_blocked=False,
        measured_mode_matches=True,
        target_mode_matches=True,
        retained_level=5,
    )
    add(
        "Defrost retain keeps last non-zero level on zero request",
        applied_level == 5,
        f"mode_command={mode_command}, applied_level={applied_level}",
    )

    add(
        "Topology hold arms on single-dual transition",
        topology_hold_arms(1, 2) is True,
        f"topology_hold_arms(1, 2) -> {topology_hold_arms(1, 2)}",
    )
    add(
        "Topology hold does not arm on idle transition",
        topology_hold_arms(0, 1) is False,
        f"topology_hold_arms(0, 1) -> {topology_hold_arms(0, 1)}",
    )
    add(
        "Topology hold does not arm when topology count is unchanged",
        topology_hold_arms(2, 2) is False,
        f"topology_hold_arms(2, 2) -> {topology_hold_arms(2, 2)}",
    )

    return results


def parse_args(argv: Sequence[str]) -> argparse.Namespace:
    parser = argparse.ArgumentParser(
        description="Run targeted logic simulations for the thermal-control refactor."
    )
    parser.add_argument(
        "--json",
        action="store_true",
        help="Emit machine-readable JSON instead of text output.",
    )
    return parser.parse_args(argv)


def main(argv: Sequence[str]) -> int:
    args = parse_args(argv)
    results = run_scenarios()
    passed_count = sum(1 for result in results if result.passed)

    if args.json:
        print(
            json.dumps(
                {
                    "passed": passed_count,
                    "total": len(results),
                    "results": [asdict(result) for result in results],
                },
                indent=2,
            )
        )
    else:
        print("Thermal Refactor Regression Simulation")
        print("====================================")
        for index, result in enumerate(results, start=1):
            status = "OK  " if result.passed else "FAIL"
            print(f"{index:02d}. {status} {result.name}")
            print(f"    {result.details}")
        print()
        print("Summary")
        print("-------")
        print(f"Passed {passed_count}/{len(results)} scenarios")

    return 0 if passed_count == len(results) else 1


if __name__ == "__main__":
    raise SystemExit(main(sys.argv[1:]))
