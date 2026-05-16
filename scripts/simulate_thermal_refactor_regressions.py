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


def supervisory_cm1_timer_transition(
    current_mode: int,
    *,
    cm1_timer_running: bool,
    cm1_timer_expired: bool,
    cm1_next_after: int,
    cooling_request_active: bool,
    heating_request_active: bool,
    base_target: int,
    strategy_active_code: int,
) -> int | None:
    if current_mode != 1:
        return None
    if cm1_timer_running:
        return 1
    if cm1_timer_expired:
        return cm1_expiry_resume(
            cm1_next_after,
            cooling_request_active,
            heating_request_active,
            base_target,
            strategy_active_code,
        )
    return None


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


def clamp_level(level: int, min_level: int, max_level: int) -> int:
    return max(min_level, min(max_level, level))


def excluded_option_matches_level(option: str, level: int) -> bool:
    return {
        1: "L1 (H30/C30)",
        2: "L2 (H39/C36)",
        3: "L3 (H49/C42)",
        4: "L4 (H55/C47)",
        5: "L5 (H61/C52)",
        6: "L6 (H67/C56)",
        7: "L7 (H72/C61)",
        8: "L8 (H79/C66)",
        9: "L9 (H85/C71)",
        10: "L10 (H90/C74)",
    }.get(level) == option


def level_allowed_for_excluded_levels(excluded: tuple[str, str], level: int) -> bool:
    if level <= 0 or level > 10:
        return True
    return (
        not excluded_option_matches_level(excluded[0], level)
        and not excluded_option_matches_level(excluded[1], level)
    )


def pick_allowed_level(
    request_level: int,
    min_level: int,
    max_level: int,
    excluded: tuple[str, str],
) -> int:
    if request_level <= 0:
        return 0
    request_level = clamp_level(request_level, min_level, max_level)
    if request_level <= 0:
        return 0
    if level_allowed_for_excluded_levels(excluded, request_level):
        return request_level

    for level in range(request_level - 1, min_level - 1, -1):
        if level > 0 and level_allowed_for_excluded_levels(excluded, level):
            return level
    for level in range(request_level + 1, max_level + 1):
        if level > 0 and level_allowed_for_excluded_levels(excluded, level):
            return level
    return 0


def pick_allowed_capped_level(
    request_level: int,
    min_level: int,
    max_level: int,
    cap_level: int,
    excluded: tuple[str, str],
) -> int:
    if request_level <= 0:
        return 0
    cap_level = clamp_level(cap_level, min_level, max_level)
    if cap_level <= 0:
        return 0
    request_level = clamp_level(request_level, min_level, cap_level)
    if request_level <= 0:
        return 0
    if level_allowed_for_excluded_levels(excluded, request_level):
        return request_level

    for level in range(request_level - 1, min_level - 1, -1):
        if level > 0 and level_allowed_for_excluded_levels(excluded, level):
            return level
    for level in range(request_level + 1, cap_level + 1):
        if level > 0 and level_allowed_for_excluded_levels(excluded, level):
            return level
    return 0


def guarded_request_after_runtime_floor(
    request_level: int,
    *,
    hard_trip_active: bool,
    startup_inhibit_active: bool,
    min_runtime_active: bool,
    cooling_floor_trip: bool,
    measured_or_previously_active: bool,
) -> int:
    guarded_hp1_level, _ = apply_request_guards(
        request_level,
        0,
        hard_trip_active=hard_trip_active,
        startup_inhibit_active=startup_inhibit_active,
    )
    if not hard_trip_active:
        guarded_hp1_level = runtime_floor_request(
            guarded_hp1_level,
            min_runtime_active=min_runtime_active,
            cooling_floor_trip=cooling_floor_trip,
            measured_or_previously_active=measured_or_previously_active,
        )
    return guarded_hp1_level


def topology_guarded_requests(
    hp1_request: int,
    hp2_request: int,
    *,
    duo_topology: bool,
) -> tuple[int, int]:
    return hp1_request, hp2_request if duo_topology else 0


def supervisory_base_target(
    *,
    cooling_request_active: bool,
    heating_request_active: bool,
    frost_active: bool,
    lowflow_fault_active: bool,
    flow_low: bool,
) -> int:
    thermal_request_active = cooling_request_active or heating_request_active
    if cooling_request_active:
        base_target = 5
    elif heating_request_active:
        base_target = 2
    elif frost_active:
        base_target = 98
    else:
        base_target = 0

    if thermal_request_active and (lowflow_fault_active or flow_low):
        return 1
    return base_target


def supervisory_override_or_commissioning(
    *,
    override_mode: int,
    commissioning_in_progress: bool,
) -> int | None:
    if override_mode == 1:
        return 0
    if override_mode == 2:
        return 1
    if override_mode == 3:
        return 98
    if commissioning_in_progress:
        return 100
    return None


def supervisory_normal_transition(
    current_mode: int,
    *,
    cooling_request_active: bool,
    heating_request_active: bool,
    base_target: int,
) -> int:
    if cooling_request_active:
        if base_target == 5:
            return 5 if current_mode == 5 else 1
        return 1
    if heating_request_active:
        if base_target == 2:
            return 2 if current_mode in (2, 3) else 1
        return 1
    if current_mode in (2, 5):
        return 1
    return 98 if base_target == 98 else 0


def supervisory_cm1_standby_guard(
    current_mode: int,
    *,
    thermal_request_active: bool,
    base_target: int,
    any_hp_active_guard: bool,
    desired_mode: int,
) -> int:
    if current_mode == 1 and not thermal_request_active and base_target == 0 and any_hp_active_guard:
        return 1
    return desired_mode


def supervisory_cm3_transition(
    current_mode: int,
    *,
    power_house_active: bool,
    boiler_assist_enabled: bool,
    heating_request_active: bool,
    base_target: int,
    need_on: bool = False,
    ok_off: bool = False,
    min_cm2_elapsed: bool = False,
    min_cm3_elapsed: bool = False,
    promote_elapsed: bool = False,
    demote_elapsed: bool = False,
) -> int:
    desired_mode = current_mode
    if power_house_active and boiler_assist_enabled:
        if current_mode == 2 and min_cm2_elapsed and need_on and promote_elapsed:
            desired_mode = 3
        elif current_mode == 3 and min_cm3_elapsed and ok_off and demote_elapsed:
            desired_mode = 2
    elif current_mode == 3 and heating_request_active and base_target == 2:
        desired_mode = 2
    return desired_mode


def supervisory_frost_active(
    *,
    thermal_request_active: bool,
    outside_temp_c: float | None,
    prev_frost: bool,
    frost_nan_grace_active: bool,
    frost_on_c: float = 5.0,
    frost_off_c: float = 6.0,
) -> bool:
    if thermal_request_active:
        return False
    if outside_temp_c is None:
        return not frost_nan_grace_active
    if prev_frost:
        return outside_temp_c < frost_off_c
    return outside_temp_c < frost_on_c


def supervisory_cm2_idle_exit_heating_request(
    *,
    in_cm2: bool,
    heating_request_active: bool,
    curve_mode_active: bool,
    both_levels_off: bool,
    both_units_idle: bool,
    startup_grace_active: bool,
    ph_high_load_idle_exit_block: bool,
    idle_exit_elapsed: bool,
    power_house_active: bool,
    reentry_block_active: bool,
) -> bool:
    cm2_idle_exit_trip = (
        in_cm2
        and heating_request_active
        and not curve_mode_active
        and both_levels_off
        and both_units_idle
        and not startup_grace_active
        and not ph_high_load_idle_exit_block
        and idle_exit_elapsed
    )
    next_heating_request = heating_request_active and not cm2_idle_exit_trip
    if power_house_active and not in_cm2 and reentry_block_active:
        return False
    return next_heating_request


def supervisory_pump_on(
    desired_mode: int,
    *,
    commissioning_task_active: bool,
    sticky_active: bool,
    any_hp_active_guard: bool,
) -> bool:
    return desired_mode not in (0, 100) or commissioning_task_active or sticky_active or any_hp_active_guard


def supervisory_cm0_pump_pwm(
    desired_mode: int,
    *,
    sticky_active: bool,
    stop_pwm: float,
    sticky_pwm: float,
) -> float | None:
    if desired_mode != 0:
        return None
    return sticky_pwm if sticky_active else stop_pwm


def cooling_request_reason(reason_code: int) -> str:
    return {
        1: "cooling_owner_hp1",
        2: "cooling_owner_hp2",
    }.get(reason_code, "cooling_idle")


def optimizer_reason_inactive() -> str:
    return "inactive"


def optimizer_reason_curve_mode() -> str:
    return "curve_mode"


def optimizer_reason_single_topology() -> str:
    return "single_topology"


def optimizer_reason_defrost_protect_hold() -> str:
    return "defrost_protect_hold"


def curve_request_reason(
    hp1_level: int,
    hp2_level: int,
    owner_hp: int,
    capacity_mode_code: int,
) -> str:
    if (hp1_level + hp2_level) <= 0:
        return "curve_idle"
    if capacity_mode_code == 2:
        return "curve_dual"
    if owner_hp == 1:
        return "curve_single_hp1"
    if owner_hp == 2:
        return "curve_single_hp2"
    return "curve_single"


def power_house_request_reason(reason_code: int, *, duo_topology: bool) -> str:
    if duo_topology:
        return {
            1: "ph_fallback_idle",
            2: "ph_fallback_single_hp1",
            3: "ph_fallback_single_hp2",
            4: "ph_fallback_duo",
            5: "keep_current",
            6: "hold_active",
            7: "defrost_hold",
            8: "better_heat",
            9: "soft_guard",
            10: "less_power",
            11: "no_candidate",
            12: "defrost_boost",
            13: "runtime_lead",
        }.get(reason_code, "ph_idle")

    return {
        1: "ph_fallback_idle",
        2: "ph_fallback_single_hp1",
        14: "ph_single_topology",
    }.get(reason_code, "ph_idle")


def power_house_optimizer_reason(reason_code: int) -> str | None:
    return {
        5: "keep_current",
        6: "hold_active",
        7: "defrost_hold",
        8: "better_heat",
        9: "soft_guard",
        10: "less_power",
        11: "no_candidate",
        12: "defrost_boost",
        13: "runtime_lead",
        15: "oil_return_hold",
    }.get(reason_code)


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
        "CM1 timer running keeps CM1 active",
        supervisory_cm1_timer_transition(
            1,
            cm1_timer_running=True,
            cm1_timer_expired=False,
            cm1_next_after=2,
            cooling_request_active=False,
            heating_request_active=True,
            base_target=2,
            strategy_active_code=2,
        )
        == 1,
        (
            "supervisory_cm1_timer_transition(...) -> "
            f"{supervisory_cm1_timer_transition(1, cm1_timer_running=True, cm1_timer_expired=False, cm1_next_after=2, cooling_request_active=False, heating_request_active=True, base_target=2, strategy_active_code=2)}"
        ),
    )
    add(
        "CM1 timer expiry may resolve directly to frost",
        supervisory_cm1_timer_transition(
            1,
            cm1_timer_running=False,
            cm1_timer_expired=True,
            cm1_next_after=2,
            cooling_request_active=False,
            heating_request_active=False,
            base_target=98,
            strategy_active_code=2,
        )
        == 98,
        (
            "supervisory_cm1_timer_transition(...) -> "
            f"{supervisory_cm1_timer_transition(1, cm1_timer_running=False, cm1_timer_expired=True, cm1_next_after=2, cooling_request_active=False, heating_request_active=False, base_target=98, strategy_active_code=2)}"
        ),
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
        "Startup inhibit still allows runtime floor re-arm in current order",
        guarded_request_after_runtime_floor(
            4,
            hard_trip_active=False,
            startup_inhibit_active=True,
            min_runtime_active=True,
            cooling_floor_trip=False,
            measured_or_previously_active=True,
        )
        == 1,
        (
            "guarded_request_after_runtime_floor(...) -> "
            f"{guarded_request_after_runtime_floor(4, hard_trip_active=False, startup_inhibit_active=True, min_runtime_active=True, cooling_floor_trip=False, measured_or_previously_active=True)}"
        ),
    )
    add(
        "Hard trip suppresses runtime floor re-arm",
        guarded_request_after_runtime_floor(
            4,
            hard_trip_active=True,
            startup_inhibit_active=False,
            min_runtime_active=True,
            cooling_floor_trip=False,
            measured_or_previously_active=True,
        )
        == 0,
        (
            "guarded_request_after_runtime_floor(...) -> "
            f"{guarded_request_after_runtime_floor(4, hard_trip_active=True, startup_inhibit_active=False, min_runtime_active=True, cooling_floor_trip=False, measured_or_previously_active=True)}"
        ),
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
    add(
        "Excluded level search prefers lower allowed level first",
        pick_allowed_level(5, 1, 10, ("L5 (H61/C52)", "None")) == 4,
        f"pick_allowed_level(...) -> {pick_allowed_level(5, 1, 10, ('L5 (H61/C52)', 'None'))}",
    )
    add(
        "Excluded level search falls upward when no lower level exists",
        pick_allowed_level(1, 1, 10, ("L1 (H30/C30)", "None")) == 2,
        f"pick_allowed_level(...) -> {pick_allowed_level(1, 1, 10, ('L1 (H30/C30)', 'None'))}",
    )
    add(
        "Silent or day cap may reduce a guarded request to zero",
        pick_allowed_capped_level(4, 0, 10, 0, ("None", "None")) == 0,
        f"pick_allowed_capped_level(...) -> {pick_allowed_capped_level(4, 0, 10, 0, ('None', 'None'))}",
    )
    add(
        "Cooling request reason maps owner code 2 consistently",
        cooling_request_reason(2) == "cooling_owner_hp2",
        f"cooling_request_reason(2) -> {cooling_request_reason(2)}",
    )
    add(
        "Curve request reason maps dual-capacity path consistently",
        curve_request_reason(3, 3, 0, 2) == "curve_dual",
        f"curve_request_reason(...) -> {curve_request_reason(3, 3, 0, 2)}",
    )
    add(
        "Single-topology Power House request reason maps code 14 consistently",
        power_house_request_reason(14, duo_topology=False) == "ph_single_topology",
        (
            "power_house_request_reason(...) -> "
            f"{power_house_request_reason(14, duo_topology=False)}"
        ),
    )
    add(
        "Power House optimizer reason maps code 15 consistently",
        power_house_optimizer_reason(15) == "oil_return_hold",
        f"power_house_optimizer_reason(15) -> {power_house_optimizer_reason(15)}",
    )
    add(
        "Shared inactive optimizer reason stays stable",
        optimizer_reason_inactive() == "inactive",
        f"optimizer_reason_inactive() -> {optimizer_reason_inactive()}",
    )
    add(
        "Shared curve-mode optimizer reason stays stable",
        optimizer_reason_curve_mode() == "curve_mode",
        f"optimizer_reason_curve_mode() -> {optimizer_reason_curve_mode()}",
    )
    add(
        "Shared defrost-protect optimizer reason stays stable",
        optimizer_reason_defrost_protect_hold() == "defrost_protect_hold",
        (
            "optimizer_reason_defrost_protect_hold() -> "
            f"{optimizer_reason_defrost_protect_hold()}"
        ),
    )
    add(
        "Shared single-topology optimizer reason stays stable",
        optimizer_reason_single_topology() == "single_topology",
        f"optimizer_reason_single_topology() -> {optimizer_reason_single_topology()}",
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
    mode_command, applied_level = actuator_mode_and_level(
        4,
        request_mode_code=2,
        previous_applied_level=2,
        min_off_blocked=False,
        measured_mode_matches=True,
        target_mode_matches=True,
        silent_cap=0,
    )
    add(
        "Actuator may keep heating mode command while cap drops applied level to zero",
        (mode_command == "Heating") and (applied_level == 0),
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
    add(
        "Single topology always forces HP2 guarded request to zero",
        topology_guarded_requests(4, 3, duo_topology=False) == (4, 0),
        f"topology_guarded_requests(...) -> {topology_guarded_requests(4, 3, duo_topology=False)}",
    )
    add(
        "Duo topology preserves both guarded requests",
        topology_guarded_requests(4, 3, duo_topology=True) == (4, 3),
        f"topology_guarded_requests(...) -> {topology_guarded_requests(4, 3, duo_topology=True)}",
    )
    add(
        "Cooling demand wins base target priority over heating demand",
        supervisory_base_target(
            cooling_request_active=True,
            heating_request_active=True,
            frost_active=False,
            lowflow_fault_active=False,
            flow_low=False,
        )
        == 5,
        (
            "supervisory_base_target(...) -> "
            f"{supervisory_base_target(cooling_request_active=True, heating_request_active=True, frost_active=False, lowflow_fault_active=False, flow_low=False)}"
        ),
    )
    add(
        "Frost becomes base target when there is no thermal demand",
        supervisory_base_target(
            cooling_request_active=False,
            heating_request_active=False,
            frost_active=True,
            lowflow_fault_active=False,
            flow_low=False,
        )
        == 98,
        (
            "supervisory_base_target(...) -> "
            f"{supervisory_base_target(cooling_request_active=False, heating_request_active=False, frost_active=True, lowflow_fault_active=False, flow_low=False)}"
        ),
    )
    add(
        "Flow interlock forces CM1 even when heating demand exists",
        supervisory_base_target(
            cooling_request_active=False,
            heating_request_active=True,
            frost_active=False,
            lowflow_fault_active=True,
            flow_low=False,
        )
        == 1,
        (
            "supervisory_base_target(...) -> "
            f"{supervisory_base_target(cooling_request_active=False, heating_request_active=True, frost_active=False, lowflow_fault_active=True, flow_low=False)}"
        ),
    )
    add(
        "Supervisory override beats commissioning when both are present",
        supervisory_override_or_commissioning(override_mode=3, commissioning_in_progress=True) == 98,
        (
            "supervisory_override_or_commissioning(...) -> "
            f"{supervisory_override_or_commissioning(override_mode=3, commissioning_in_progress=True)}"
        ),
    )
    add(
        "Commissioning selects CM100 when override is Auto",
        supervisory_override_or_commissioning(override_mode=0, commissioning_in_progress=True) == 100,
        (
            "supervisory_override_or_commissioning(...) -> "
            f"{supervisory_override_or_commissioning(override_mode=0, commissioning_in_progress=True)}"
        ),
    )
    add(
        "Heating request from standby waits in CM1 preflow first",
        supervisory_normal_transition(
            0,
            cooling_request_active=False,
            heating_request_active=True,
            base_target=2,
        )
        == 1,
        (
            "supervisory_normal_transition(...) -> "
            f"{supervisory_normal_transition(0, cooling_request_active=False, heating_request_active=True, base_target=2)}"
        ),
    )
    add(
        "Active heating can move from CM3 back to CM2 without CM1 detour",
        supervisory_normal_transition(
            3,
            cooling_request_active=False,
            heating_request_active=True,
            base_target=2,
        )
        == 2,
        (
            "supervisory_normal_transition(...) -> "
            f"{supervisory_normal_transition(3, cooling_request_active=False, heating_request_active=True, base_target=2)}"
        ),
    )
    add(
        "Cooling request from standby waits in CM1 preflow first",
        supervisory_normal_transition(
            0,
            cooling_request_active=True,
            heating_request_active=False,
            base_target=5,
        )
        == 1,
        (
            "supervisory_normal_transition(...) -> "
            f"{supervisory_normal_transition(0, cooling_request_active=True, heating_request_active=False, base_target=5)}"
        ),
    )
    add(
        "No thermal demand from CM2 enters CM1 postflow before standby",
        supervisory_normal_transition(
            2,
            cooling_request_active=False,
            heating_request_active=False,
            base_target=0,
        )
        == 1,
        (
            "supervisory_normal_transition(...) -> "
            f"{supervisory_normal_transition(2, cooling_request_active=False, heating_request_active=False, base_target=0)}"
        ),
    )
    add(
        "No thermal demand from standby can resolve directly to frost",
        supervisory_normal_transition(
            0,
            cooling_request_active=False,
            heating_request_active=False,
            base_target=98,
        )
        == 98,
        (
            "supervisory_normal_transition(...) -> "
            f"{supervisory_normal_transition(0, cooling_request_active=False, heating_request_active=False, base_target=98)}"
        ),
    )
    add(
        "CM1 stays active before standby while any HP still reports activity",
        supervisory_cm1_standby_guard(
            1,
            thermal_request_active=False,
            base_target=0,
            any_hp_active_guard=True,
            desired_mode=0,
        )
        == 1,
        (
            "supervisory_cm1_standby_guard(...) -> "
            f"{supervisory_cm1_standby_guard(1, thermal_request_active=False, base_target=0, any_hp_active_guard=True, desired_mode=0)}"
        ),
    )
    add(
        "Power House deficit may promote CM2 to CM3 after timers elapse",
        supervisory_cm3_transition(
            2,
            power_house_active=True,
            boiler_assist_enabled=True,
            heating_request_active=True,
            base_target=2,
            need_on=True,
            min_cm2_elapsed=True,
            promote_elapsed=True,
        )
        == 3,
        (
            "supervisory_cm3_transition(...) -> "
            f"{supervisory_cm3_transition(2, power_house_active=True, boiler_assist_enabled=True, heating_request_active=True, base_target=2, need_on=True, min_cm2_elapsed=True, promote_elapsed=True)}"
        ),
    )
    add(
        "Power House deficit clear may demote CM3 to CM2 after timers elapse",
        supervisory_cm3_transition(
            3,
            power_house_active=True,
            boiler_assist_enabled=True,
            heating_request_active=True,
            base_target=2,
            ok_off=True,
            min_cm3_elapsed=True,
            demote_elapsed=True,
        )
        == 2,
        (
            "supervisory_cm3_transition(...) -> "
            f"{supervisory_cm3_transition(3, power_house_active=True, boiler_assist_enabled=True, heating_request_active=True, base_target=2, ok_off=True, min_cm3_elapsed=True, demote_elapsed=True)}"
        ),
    )
    add(
        "Disabled boiler assist collapses CM3 back to CM2 during heating",
        supervisory_cm3_transition(
            3,
            power_house_active=False,
            boiler_assist_enabled=False,
            heating_request_active=True,
            base_target=2,
        )
        == 2,
        (
            "supervisory_cm3_transition(...) -> "
            f"{supervisory_cm3_transition(3, power_house_active=False, boiler_assist_enabled=False, heating_request_active=True, base_target=2)}"
        ),
    )
    add(
        "Frost stays off during startup NaN grace and turns on after grace",
        supervisory_frost_active(
            thermal_request_active=False,
            outside_temp_c=None,
            prev_frost=False,
            frost_nan_grace_active=True,
        )
        is False
        and supervisory_frost_active(
            thermal_request_active=False,
            outside_temp_c=None,
            prev_frost=False,
            frost_nan_grace_active=False,
        )
        is True,
        (
            "supervisory_frost_active(...) -> "
            f"{supervisory_frost_active(thermal_request_active=False, outside_temp_c=None, prev_frost=False, frost_nan_grace_active=False)}"
        ),
    )
    add(
        "Frost hysteresis holds CM98 until outside temperature reaches the off threshold",
        supervisory_frost_active(
            thermal_request_active=False,
            outside_temp_c=5.5,
            prev_frost=True,
            frost_nan_grace_active=False,
        )
        is True
        and supervisory_frost_active(
            thermal_request_active=False,
            outside_temp_c=6.1,
            prev_frost=True,
            frost_nan_grace_active=False,
        )
        is False,
        (
            "supervisory_frost_active(...) -> "
            f"{supervisory_frost_active(thermal_request_active=False, outside_temp_c=5.5, prev_frost=True, frost_nan_grace_active=False)}"
        ),
    )
    add(
        "CM2 idle-exit can drop heating demand and re-entry block keeps it suppressed outside CM2",
        supervisory_cm2_idle_exit_heating_request(
            in_cm2=True,
            heating_request_active=True,
            curve_mode_active=False,
            both_levels_off=True,
            both_units_idle=True,
            startup_grace_active=False,
            ph_high_load_idle_exit_block=False,
            idle_exit_elapsed=True,
            power_house_active=True,
            reentry_block_active=False,
        )
        is False
        and supervisory_cm2_idle_exit_heating_request(
            in_cm2=False,
            heating_request_active=True,
            curve_mode_active=False,
            both_levels_off=True,
            both_units_idle=True,
            startup_grace_active=False,
            ph_high_load_idle_exit_block=False,
            idle_exit_elapsed=False,
            power_house_active=True,
            reentry_block_active=True,
        )
        is False,
        (
            "supervisory_cm2_idle_exit_heating_request(...) -> "
            f"{supervisory_cm2_idle_exit_heating_request(in_cm2=False, heating_request_active=True, curve_mode_active=False, both_levels_off=True, both_units_idle=True, startup_grace_active=False, ph_high_load_idle_exit_block=False, idle_exit_elapsed=False, power_house_active=True, reentry_block_active=True)}"
        ),
    )
    add(
        "CM0 sticky run keeps pump on and uses sticky PWM",
        supervisory_pump_on(
            0,
            commissioning_task_active=False,
            sticky_active=True,
            any_hp_active_guard=False,
        )
        is True
        and supervisory_cm0_pump_pwm(
            0,
            sticky_active=True,
            stop_pwm=1000.0,
            sticky_pwm=850.0,
        )
        == 850.0,
        (
            "supervisory_pump_on/supervisory_cm0_pump_pwm -> "
            f"{supervisory_pump_on(0, commissioning_task_active=False, sticky_active=True, any_hp_active_guard=False)}, "
            f"{supervisory_cm0_pump_pwm(0, sticky_active=True, stop_pwm=1000.0, sticky_pwm=850.0)}"
        ),
    )
    add(
        "CM100 idle may stop the pump while a CM100 task keeps it on",
        supervisory_pump_on(
            100,
            commissioning_task_active=False,
            sticky_active=False,
            any_hp_active_guard=False,
        )
        is False
        and supervisory_pump_on(
            100,
            commissioning_task_active=True,
            sticky_active=False,
            any_hp_active_guard=False,
        )
        is True,
        (
            "supervisory_pump_on(...) -> "
            f"{supervisory_pump_on(100, commissioning_task_active=False, sticky_active=False, any_hp_active_guard=False)}, "
            f"{supervisory_pump_on(100, commissioning_task_active=True, sticky_active=False, any_hp_active_guard=False)}"
        ),
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
