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


@dataclass(frozen=True)
class CurveDispatchCandidate:
    valid: bool = False
    hp1_level: int = 0
    hp2_level: int = 0
    power_w: float = 0.0
    error_w: float = 1.0e9
    active_hp_count: int = 0
    balance_gap: int = 0


@dataclass(frozen=True)
class PhDuoCandidate:
    valid: bool = False
    l1: int = 0
    l2: int = 0
    p_th_w: float = 0.0
    p_el_w: float = 0.0
    err_w: float = 1.0e9
    over_soft_w: float = 0.0
    level_moves: int = 0
    active_hp_count: int = 0
    balance_steps: int = 0
    single_on_lead: bool = False


@dataclass(frozen=True)
class CommissioningActionResult:
    status: str
    accepted: bool = False
    task_code: int = 0
    request_pending: bool = False
    active: bool = False
    abort_requested: bool = False
    state_code: int = 0
    flow_autotune_req: bool = False
    flow_autotune_abort: bool = False
    flow_autotune_active: bool = False
    flow_autotune_state: int = 0


@dataclass(frozen=True)
class FlowAutotuneValidationResult:
    status_family: str
    kp: float
    ki: float
    scale: float
    clamped: bool


@dataclass(frozen=True)
class BoilerMeasureState:
    sample_count: int = 0
    sum_w: float = 0.0
    min_w: float | None = None
    max_w: float | None = None
    peak_w: float | None = None
    plateau_count: int = 0


@dataclass(frozen=True)
class BoilerMeasureResult:
    ready: bool
    avg_w: float | None
    confidence: float
    min_w: float | None
    max_w: float | None
    spread_w: float | None


@dataclass(frozen=True)
class FlowArmResult:
    state: str
    status: str
    pwm_step: int | None = None
    pv0: float | None = None


@dataclass(frozen=True)
class FlowValidationSettleResult:
    settle_ready: bool
    status: str
    confirm_cnt: int
    peak_pv: float


def commissioning_cm100_start_result(
    *,
    override_auto: bool,
    active: bool,
    task_code: int,
) -> CommissioningActionResult:
    if not override_auto:
        return CommissioningActionResult("REFUSED: CM Override must be Auto")
    if active and task_code != 0:
        return CommissioningActionResult("REFUSED: BUSY")
    return CommissioningActionResult(
        "CM100 REQUESTED",
        accepted=True,
        task_code=0,
        request_pending=True,
    )


def commissioning_stop_result(
    *,
    active: bool,
    task_code: int,
    flow_autotune_req: bool,
) -> CommissioningActionResult:
    if active and task_code != 0:
        return CommissioningActionResult(
            "ABORT REQUESTED",
            task_code=task_code,
            active=active,
            abort_requested=task_code != 2,
            flow_autotune_abort=task_code == 2,
        )
    if task_code == 2 or flow_autotune_req:
        return CommissioningActionResult(
            "ABORT REQUESTED",
            task_code=task_code,
            abort_requested=True,
            flow_autotune_req=flow_autotune_req,
            flow_autotune_abort=True,
        )
    return CommissioningActionResult("IDLE")


def flow_autotune_start_result(
    *,
    cm_code: int,
    task_running: bool,
    autotune_state: int,
    autotune_active: bool,
    autotune_req: bool,
) -> CommissioningActionResult:
    if autotune_state != 0 or autotune_active or autotune_req or task_running:
        return CommissioningActionResult("REFUSED: BUSY")
    if cm_code != 100:
        return CommissioningActionResult("REFUSED: not CM100")
    return CommissioningActionResult(
        "REQUESTED",
        accepted=True,
        task_code=2,
        active=True,
        state_code=1,
        flow_autotune_req=True,
    )


def flow_autotune_idle_tick_result(
    *,
    cm_code: int,
    task_code: int,
    autotune_req: bool,
    flow_valid: bool,
) -> CommissioningActionResult:
    if task_code != 2 or not autotune_req:
        return CommissioningActionResult("IDLE")
    if cm_code != 100:
        return CommissioningActionResult(
            "WAITING_FOR_CM100",
            task_code=2,
            request_pending=True,
        )
    return CommissioningActionResult(
        "SETTLING" if flow_valid else "WAITING_FOR_FLOW",
        accepted=True,
        task_code=2,
        active=True,
        state_code=1,
        flow_autotune_active=True,
        flow_autotune_state=1,
    )


def flow_autotune_release_result(*, keep_cm100: bool = True) -> CommissioningActionResult:
    return CommissioningActionResult(
        "CM100 READY" if keep_cm100 else "IDLE",
        active=keep_cm100,
    )


def flow_autotune_abort_result(
    *,
    saved_kp: float | None,
    saved_ki: float | None,
    saved_sp: float | None,
    current_kp: float,
    current_ki: float,
    current_sp: float,
) -> tuple[CommissioningActionResult, float, float, float]:
    restored_kp = current_kp if saved_kp is None or saved_ki is None else saved_kp
    restored_ki = current_ki if saved_kp is None or saved_ki is None else saved_ki
    restored_sp = current_sp if saved_sp is None else saved_sp
    return (
        flow_autotune_release_result(keep_cm100=True),
        restored_kp,
        restored_ki,
        restored_sp,
    )


def flow_autotune_step_gain_status(pv0: float, pv_ss: float, du: float) -> str:
    gain = (pv_ss - pv0) / du
    return "OK" if gain > 0.0 else "FAILED: INVALID_GAIN"


def flow_autotune_validation_result(
    *,
    seed_kp: float,
    seed_ki: float,
    overshoot: float,
    settle_band: float,
    settled: bool,
    timed_out: bool,
    elapsed_s: int,
    sample_time_s: int,
    kp_min: float,
    kp_max: float,
    ki_min: float,
    ki_max: float,
) -> FlowAutotuneValidationResult:
    scale = 1.0
    if overshoot > (2.0 * settle_band):
        scale = 0.80
    elif overshoot > settle_band:
        scale = 0.90
    elif settled and elapsed_s <= (sample_time_s * 3) and overshoot <= (0.5 * settle_band):
        scale = 1.05
    if timed_out and not settled:
        scale = min(scale, 0.95)

    raw_kp = seed_kp * scale
    raw_ki = seed_ki * scale
    kp = max(kp_min, min(kp_max, raw_kp))
    ki = max(ki_min, min(ki_max, raw_ki))
    clamped = abs(kp - raw_kp) > 1.0e-7 or abs(ki - raw_ki) > 1.0e-7
    if timed_out and not settled:
        status_family = "DONE (LIMITED)"
    elif clamped:
        status_family = "DONE (CLAMPED)"
    else:
        status_family = "DONE (CLOSED-LOOP)"
    return FlowAutotuneValidationResult(status_family, kp, ki, scale, clamped)


def boiler_flow_valid(flow_lph: float | None) -> bool:
    return flow_lph is not None and flow_lph > 0.0


def boiler_flow_on_target(
    flow_lph: float | None, target_flow_lph: float, band_lph: float
) -> bool:
    return boiler_flow_valid(flow_lph) and abs(flow_lph - target_flow_lph) <= band_lph


def boiler_next_stable_count(stable_now: bool, stable_count: int) -> int:
    return stable_count + 1 if stable_now else 0


def boiler_settle_window_ready(
    stable_count: int,
    required_stable_samples: int,
    state_age_ms: int,
    settle_min_ms: int,
) -> bool:
    return stable_count >= required_stable_samples and state_age_ms >= settle_min_ms


def boiler_reset_measurement() -> BoilerMeasureState:
    return BoilerMeasureState()


def boiler_step_measurement(
    state: BoilerMeasureState,
    *,
    flow_stable_now: bool,
    heat_valid: bool,
    heat_w: float,
    plateau_ratio: float,
    plateau_confirm_samples: int,
) -> BoilerMeasureState:
    if not flow_stable_now or not heat_valid or not (heat_w > 0.0):
        return state

    peak_w = state.peak_w
    plateau_count = state.plateau_count
    if peak_w is None or heat_w > peak_w:
        peak_w = heat_w
        plateau_count = 0

    plateau_floor = heat_w if peak_w is None else peak_w * plateau_ratio
    plateau_count = min(1000, plateau_count + 1) if heat_w >= plateau_floor else 0
    if plateau_count < plateau_confirm_samples:
        return BoilerMeasureState(
            sample_count=state.sample_count,
            sum_w=state.sum_w,
            min_w=state.min_w,
            max_w=state.max_w,
            peak_w=peak_w,
            plateau_count=plateau_count,
        )

    min_w = heat_w if state.min_w is None else min(state.min_w, heat_w)
    max_w = heat_w if state.max_w is None else max(state.max_w, heat_w)
    return BoilerMeasureState(
        sample_count=state.sample_count + 1,
        sum_w=state.sum_w + heat_w,
        min_w=min_w,
        max_w=max_w,
        peak_w=peak_w,
        plateau_count=plateau_count,
    )


def boiler_measurement_window_complete(
    sample_count: int,
    min_samples: int,
    state_age_ms: int,
    measure_min_ms: int,
) -> bool:
    return sample_count >= min_samples and state_age_ms >= measure_min_ms


def boiler_finalize_measurement(state: BoilerMeasureState) -> BoilerMeasureResult:
    if state.sample_count <= 0 or state.min_w is None or state.max_w is None:
        return BoilerMeasureResult(False, None, 0.0, None, None, None)

    avg_w = state.sum_w / state.sample_count
    spread_w = state.max_w - state.min_w
    confidence = 100.0
    if state.sample_count < 10:
        confidence -= (10 - state.sample_count) * 4.0
    if spread_w > avg_w * 0.05:
        confidence -= 15.0
    if spread_w > avg_w * 0.10:
        confidence -= 20.0
    confidence = max(0.0, min(100.0, confidence))
    return BoilerMeasureResult(True, avg_w, confidence, state.min_w, state.max_w, spread_w)


def flow_autotune_arm_result(
    *,
    valid_mode: bool,
    flow_valid: bool,
    elapsed_s: int,
    pwm0: int,
    pwm_min: int,
    min_step: int,
    baseline_ready: bool,
) -> FlowArmResult:
    if not valid_mode:
        return FlowArmResult("ABORT", "ABORT: not CM100")
    if not flow_valid:
        return FlowArmResult(
            "ABORT" if elapsed_s >= 60 else "ARM",
            "ABORT: NO_BASELINE_FLOW" if elapsed_s >= 60 else "WAITING_FOR_FLOW",
        )
    if not baseline_ready:
        return FlowArmResult(
            "ABORT" if elapsed_s >= 60 else "ARM",
            "ABORT: NO_BASELINE_FLOW" if elapsed_s >= 60 else "SETTLING",
        )
    pwm_headroom = pwm0 - pwm_min
    if pwm_headroom < min_step:
        return FlowArmResult("ABORT", "REFUSED: STEP_HEADROOM")
    u_step = max(10, min(28, round(0.06 * pwm0)))
    u_step = max(min_step, min(u_step, pwm_headroom))
    return FlowArmResult("STEP1", "STEP", pwm0 - u_step, 500.0)


def flow_autotune_validation_settle_result(
    *,
    valid_mode: bool,
    flow_valid: bool,
    elapsed_s: int,
    confirm_cnt: int,
    peak_pv: float,
    pv: float,
    sp1: float,
    settle_band: float,
    window_ready: bool,
    settled_now: bool,
) -> FlowValidationSettleResult:
    if not valid_mode:
        return FlowValidationSettleResult(False, "ABORT: not CM100", confirm_cnt, peak_pv)
    if not flow_valid:
        return FlowValidationSettleResult(False, "ABORT: FLOW_INVALID", confirm_cnt, peak_pv)
    peak_pv = max(peak_pv, pv)
    if window_ready and elapsed_s >= 20 and settled_now:
        confirm_cnt = min(255, confirm_cnt + 1)
    else:
        confirm_cnt = 0
    if confirm_cnt >= 2 or elapsed_s >= 60:
        return FlowValidationSettleResult(True, "VALIDATING", 0, sp1)
    return FlowValidationSettleResult(False, "VALIDATING_SETTLING", confirm_cnt, peak_pv)


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
    keep_mode_active_on_zero: bool = False,
    retained_level: int = 0,
) -> tuple[str, int]:
    request_mode_name = {0: "Standby", 1: "Cooling", 2: "Heating"}[request_mode_code]
    request_thermal_active = request_mode_code in (1, 2)

    if request_level == 0 and retained_level > 0:
        return request_mode_name if request_thermal_active else "Hold", retained_level

    mode_request_active = request_thermal_active and (
        request_level > 0 or keep_mode_active_on_zero
    )
    if request_level > 0 and previous_applied_level == 0 and min_off_blocked:
        request_level = 0
        mode_request_active = False

    mode_command = request_mode_name if mode_request_active else "Standby"
    applied_level = request_level
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


def apply_guard_cap(
    request_level: int,
    *,
    min_level: int,
    max_level: int,
    cap_level: int,
    excluded: tuple[str, str],
) -> tuple[int, bool]:
    if request_level <= 0:
        return request_level, False
    capped_level = pick_allowed_capped_level(
        request_level, min_level, max_level, cap_level, excluded
    )
    return capped_level, capped_level == 0 and request_level > 0


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


def cooling_owner_choice(
    *,
    stored_owner: int,
    demand_active: bool,
    prev_hp1_on: bool,
    prev_hp2_on: bool,
    hp1_can_start: bool,
    hp2_can_start: bool,
    recent_owner: int,
    lead_is_hp1: bool,
) -> int:
    owner = stored_owner
    if not demand_active:
        return 0
    if prev_hp1_on and not prev_hp2_on:
        return 1
    if prev_hp2_on and not prev_hp1_on:
        return 2

    owner_ok = (owner == 1 and hp1_can_start) or (owner == 2 and hp2_can_start)
    if owner_ok:
        return owner
    if recent_owner == 1 and hp1_can_start:
        return 1
    if recent_owner == 2 and hp2_can_start:
        return 2
    if lead_is_hp1 and hp1_can_start:
        return 1
    if (not lead_is_hp1) and hp2_can_start:
        return 2
    if hp1_can_start and not hp2_can_start:
        return 1
    if hp2_can_start and not hp1_can_start:
        return 2
    if hp1_can_start and hp2_can_start:
        return 1 if lead_is_hp1 else 2
    return 0


def curve_pick_single_owner(
    demand_active: bool,
    stored_owner_hp: int,
    prev_hp1_on: bool,
    prev_hp2_on: bool,
    lead_is_hp1: bool,
) -> int:
    if not demand_active:
        return 0
    if prev_hp1_on != prev_hp2_on:
        return 1 if prev_hp1_on else 2
    if stored_owner_hp in (1, 2):
        return stored_owner_hp
    return 1 if lead_is_hp1 else 2


def curve_better_dispatch_candidate(
    candidate: CurveDispatchCandidate,
    best: CurveDispatchCandidate,
    prev_hp1_level: int,
    prev_hp2_level: int,
) -> bool:
    if not candidate.valid:
        return False
    if not best.valid:
        return True
    if abs(candidate.error_w - best.error_w) > 50.0:
        return candidate.error_w < best.error_w

    candidate_starts = (
        (1 if prev_hp1_level == 0 and candidate.hp1_level > 0 else 0)
        + (1 if prev_hp2_level == 0 and candidate.hp2_level > 0 else 0)
    )
    best_starts = (
        (1 if prev_hp1_level == 0 and best.hp1_level > 0 else 0)
        + (1 if prev_hp2_level == 0 and best.hp2_level > 0 else 0)
    )
    if candidate_starts != best_starts:
        return candidate_starts < best_starts

    candidate_moves = abs(candidate.hp1_level - prev_hp1_level) + abs(
        candidate.hp2_level - prev_hp2_level
    )
    best_moves = abs(best.hp1_level - prev_hp1_level) + abs(
        best.hp2_level - prev_hp2_level
    )
    if candidate_moves != best_moves:
        return candidate_moves < best_moves

    if candidate.active_hp_count != best.active_hp_count:
        return candidate.active_hp_count < best.active_hp_count
    if candidate.balance_gap != best.balance_gap:
        return candidate.balance_gap < best.balance_gap
    return candidate.power_w < best.power_w


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


def ph_better_duo_candidate(a: PhDuoCandidate, b: PhDuoCandidate) -> bool:
    soft_eps_w = 1.0
    pel_eps_w = 1.0
    err_eps_w = 1.0
    if abs(a.over_soft_w - b.over_soft_w) > soft_eps_w:
        return a.over_soft_w < b.over_soft_w
    if abs(a.p_el_w - b.p_el_w) > pel_eps_w:
        return a.p_el_w < b.p_el_w
    if abs(a.err_w - b.err_w) > err_eps_w:
        return a.err_w < b.err_w
    if a.level_moves != b.level_moves:
        return a.level_moves < b.level_moves
    if a.active_hp_count == 2 and b.active_hp_count == 2 and a.balance_steps != b.balance_steps:
        return a.balance_steps < b.balance_steps
    if a.active_hp_count == 1 and b.active_hp_count == 1:
        a_single = a.l1 if a.l1 > 0 else a.l2
        b_single = b.l1 if b.l1 > 0 else b.l2
        if a_single == b_single and a.single_on_lead != b.single_on_lead:
            return a.single_on_lead
    if a.l1 != b.l1:
        return a.l1 < b.l1
    return a.l2 < b.l2


def ph_choose_preferred_candidate(
    best_single: PhDuoCandidate,
    have_best_single: bool,
    best_duo: PhDuoCandidate,
    have_best_duo: bool,
    topology_heat_advantage_w: float,
) -> tuple[bool, PhDuoCandidate]:
    if have_best_single and have_best_duo:
        preferred = best_single
        alternate = best_duo
        if best_duo.p_el_w < best_single.p_el_w:
            preferred = best_duo
            alternate = best_single
        best_candidate = preferred
        if alternate.err_w + topology_heat_advantage_w < preferred.err_w:
            best_candidate = alternate
        return True, best_candidate
    if have_best_single:
        return True, best_single
    if have_best_duo:
        return True, best_duo
    return False, PhDuoCandidate()


def ph_request_owner_hp(hp1_req: int, hp2_req: int) -> int:
    if hp1_req > 0 and hp2_req == 0:
        return 1
    if hp2_req > 0 and hp1_req == 0:
        return 2
    return 0


def ph_runtime_lead_override_allowed(
    *,
    single_req: bool,
    both_idle_prev: bool,
    hp1_def: bool,
    hp2_def: bool,
    hp1_valve_def: bool,
    hp2_valve_def: bool,
    lead_can: bool,
    lag_can: bool,
) -> bool:
    return (
        single_req
        and both_idle_prev
        and not hp1_def
        and not hp2_def
        and not hp1_valve_def
        and not hp2_valve_def
        and lead_can
        and lag_can
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
    guarded_level, keep_mode = apply_guard_cap(
        4,
        min_level=0,
        max_level=10,
        cap_level=0,
        excluded=("None", "None"),
    )
    add(
        "Guard cap may soft-zero a request while preserving thermal mode intent",
        guarded_level == 0 and keep_mode,
        f"guarded_level={guarded_level}, keep_mode={keep_mode}",
    )
    add(
        "Cooling request reason maps owner code 2 consistently",
        cooling_request_reason(2) == "cooling_owner_hp2",
        f"cooling_request_reason(2) -> {cooling_request_reason(2)}",
    )
    add(
        "Cooling owner keeps HP1 while it is already active",
        cooling_owner_choice(
            stored_owner=2,
            demand_active=True,
            prev_hp1_on=True,
            prev_hp2_on=False,
            hp1_can_start=True,
            hp2_can_start=True,
            recent_owner=2,
            lead_is_hp1=False,
        )
        == 1,
        (
            "cooling_owner_choice(...) -> "
            f"{cooling_owner_choice(stored_owner=2, demand_active=True, prev_hp1_on=True, prev_hp2_on=False, hp1_can_start=True, hp2_can_start=True, recent_owner=2, lead_is_hp1=False)}"
        ),
    )
    add(
        "Cooling owner prefers recent owner when stored owner is blocked",
        cooling_owner_choice(
            stored_owner=1,
            demand_active=True,
            prev_hp1_on=False,
            prev_hp2_on=False,
            hp1_can_start=False,
            hp2_can_start=True,
            recent_owner=2,
            lead_is_hp1=True,
        )
        == 2,
        (
            "cooling_owner_choice(...) -> "
            f"{cooling_owner_choice(stored_owner=1, demand_active=True, prev_hp1_on=False, prev_hp2_on=False, hp1_can_start=False, hp2_can_start=True, recent_owner=2, lead_is_hp1=True)}"
        ),
    )
    add(
        "Cooling owner falls back to lead HP when neither owner nor recent owner applies",
        cooling_owner_choice(
            stored_owner=0,
            demand_active=True,
            prev_hp1_on=False,
            prev_hp2_on=False,
            hp1_can_start=True,
            hp2_can_start=True,
            recent_owner=0,
            lead_is_hp1=False,
        )
        == 2,
        (
            "cooling_owner_choice(...) -> "
            f"{cooling_owner_choice(stored_owner=0, demand_active=True, prev_hp1_on=False, prev_hp2_on=False, hp1_can_start=True, hp2_can_start=True, recent_owner=0, lead_is_hp1=False)}"
        ),
    )
    add(
        "Cooling owner drops to idle when both HP starts are blocked",
        cooling_owner_choice(
            stored_owner=1,
            demand_active=True,
            prev_hp1_on=False,
            prev_hp2_on=False,
            hp1_can_start=False,
            hp2_can_start=False,
            recent_owner=1,
            lead_is_hp1=True,
        )
        == 0,
        (
            "cooling_owner_choice(...) -> "
            f"{cooling_owner_choice(stored_owner=1, demand_active=True, prev_hp1_on=False, prev_hp2_on=False, hp1_can_start=False, hp2_can_start=False, recent_owner=1, lead_is_hp1=True)}"
        ),
    )
    add(
        "Curve owner keeps previous active HP over lead preference",
        curve_pick_single_owner(
            demand_active=True,
            stored_owner_hp=1,
            prev_hp1_on=False,
            prev_hp2_on=True,
            lead_is_hp1=True,
        )
        == 2,
        (
            "curve_pick_single_owner(...) -> "
            f"{curve_pick_single_owner(demand_active=True, stored_owner_hp=1, prev_hp1_on=False, prev_hp2_on=True, lead_is_hp1=True)}"
        ),
    )
    add(
        "Curve dispatch tie-break prefers fewer starts before lower power",
        curve_better_dispatch_candidate(
            CurveDispatchCandidate(
                valid=True,
                hp1_level=3,
                hp2_level=0,
                power_w=3200.0,
                error_w=30.0,
                active_hp_count=1,
                balance_gap=3,
            ),
            CurveDispatchCandidate(
                valid=True,
                hp1_level=2,
                hp2_level=2,
                power_w=3100.0,
                error_w=30.0,
                active_hp_count=2,
                balance_gap=0,
            ),
            prev_hp1_level=3,
            prev_hp2_level=0,
        ),
        "curve_better_dispatch_candidate(...) -> True",
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
    for code, expected in {
        0: "ph_idle",
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
    }.items():
        actual = power_house_request_reason(code, duo_topology=True)
        add(
            f"Duo Power House request reason code {code} stays stable",
            actual == expected,
            f"power_house_request_reason({code}, duo_topology=True) -> {actual}",
        )
    add(
        "Power House optimizer reason maps code 15 consistently",
        power_house_optimizer_reason(15) == "oil_return_hold",
        f"power_house_optimizer_reason(15) -> {power_house_optimizer_reason(15)}",
    )
    add(
        "Power House candidate tie-break prefers lower soft-limit overshoot first",
        ph_better_duo_candidate(
            PhDuoCandidate(
                valid=True,
                l1=3,
                l2=3,
                p_el_w=2500.0,
                err_w=40.0,
                over_soft_w=10.0,
                level_moves=2,
                active_hp_count=2,
                balance_steps=0,
            ),
            PhDuoCandidate(
                valid=True,
                l1=4,
                l2=2,
                p_el_w=2300.0,
                err_w=20.0,
                over_soft_w=30.0,
                level_moves=2,
                active_hp_count=2,
                balance_steps=2,
            ),
        ),
        "ph_better_duo_candidate(...) -> True",
    )
    have_best_candidate, best_candidate = ph_choose_preferred_candidate(
        PhDuoCandidate(valid=True, l1=4, l2=0, p_el_w=1800.0, err_w=600.0, active_hp_count=1),
        True,
        PhDuoCandidate(valid=True, l1=2, l2=2, p_el_w=2000.0, err_w=60.0, active_hp_count=2),
        True,
        450.0,
    )
    add(
        "Power House topology chooser may prefer better heat when advantage beats margin",
        have_best_candidate and best_candidate.active_hp_count == 2,
        (
            "ph_choose_preferred_candidate(...) -> "
            f"have_best_candidate={have_best_candidate}, active_hp_count={best_candidate.active_hp_count}"
        ),
    )
    add(
        "Power House runtime-lead override requires both sides to be startable and no defrost",
        ph_runtime_lead_override_allowed(
            single_req=True,
            both_idle_prev=True,
            hp1_def=False,
            hp2_def=False,
            hp1_valve_def=False,
            hp2_valve_def=False,
            lead_can=True,
            lag_can=True,
        )
        and not ph_runtime_lead_override_allowed(
            single_req=True,
            both_idle_prev=True,
            hp1_def=False,
            hp2_def=False,
            hp1_valve_def=True,
            hp2_valve_def=False,
            lead_can=True,
            lag_can=True,
        ),
        "ph_runtime_lead_override_allowed(...) -> True/False as expected",
    )
    add(
        "Power House request owner stays zero for duo requests",
        ph_request_owner_hp(3, 3) == 0 and ph_request_owner_hp(4, 0) == 1,
        (
            "ph_request_owner_hp(...) -> "
            f"{ph_request_owner_hp(3, 3)}, {ph_request_owner_hp(4, 0)}"
        ),
    )
    for code, expected in {
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
    }.items():
        actual = power_house_optimizer_reason(code)
        add(
            f"Power House optimizer reason code {code} stays stable",
            actual == expected,
            f"power_house_optimizer_reason({code}) -> {actual}",
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
        0,
        request_mode_code=2,
        previous_applied_level=2,
        min_off_blocked=False,
        measured_mode_matches=True,
        target_mode_matches=True,
        keep_mode_active_on_zero=True,
    )
    add(
        "Actuator preserves heating mode command on guarded soft-zero request",
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
    cm100_start = commissioning_cm100_start_result(
        override_auto=True,
        active=False,
        task_code=0,
    )
    add(
        "Commissioning CM100 start only arms the neutral service container",
        cm100_start.accepted
        and cm100_start.request_pending
        and not cm100_start.active
        and cm100_start.task_code == 0
        and cm100_start.status == "CM100 REQUESTED",
        f"commissioning_cm100_start_result(...) -> {cm100_start}",
    )
    add(
        "Commissioning CM100 start refuses while override is not Auto",
        commissioning_cm100_start_result(
            override_auto=False,
            active=False,
            task_code=0,
        ).status
        == "REFUSED: CM Override must be Auto",
        (
            "commissioning_cm100_start_result(...) -> "
            f"{commissioning_cm100_start_result(override_auto=False, active=False, task_code=0).status}"
        ),
    )
    active_autotune_stop = commissioning_stop_result(
        active=True,
        task_code=2,
        flow_autotune_req=False,
    )
    add(
        "Commissioning stop delegates active flow-autotune abort to the task",
        active_autotune_stop.status == "ABORT REQUESTED"
        and active_autotune_stop.flow_autotune_abort
        and not active_autotune_stop.abort_requested,
        f"commissioning_stop_result(...) -> {active_autotune_stop}",
    )
    pending_autotune_stop = commissioning_stop_result(
        active=False,
        task_code=2,
        flow_autotune_req=True,
    )
    add(
        "Commissioning stop marks both abort flags for a pending flow-autotune request",
        pending_autotune_stop.status == "ABORT REQUESTED"
        and pending_autotune_stop.flow_autotune_abort
        and pending_autotune_stop.abort_requested,
        f"commissioning_stop_result(...) -> {pending_autotune_stop}",
    )
    autotune_start = flow_autotune_start_result(
        cm_code=100,
        task_running=False,
        autotune_state=0,
        autotune_active=False,
        autotune_req=False,
    )
    add(
        "Flow autotune start claims commissioning task 2 only when CM100 is ready",
        autotune_start.accepted
        and autotune_start.task_code == 2
        and autotune_start.active
        and autotune_start.state_code == 1
        and autotune_start.flow_autotune_req,
        f"flow_autotune_start_result(...) -> {autotune_start}",
    )
    add(
        "Flow autotune start refuses outside CM100",
        flow_autotune_start_result(
            cm_code=2,
            task_running=False,
            autotune_state=0,
            autotune_active=False,
            autotune_req=False,
        ).status
        == "REFUSED: not CM100",
        (
            "flow_autotune_start_result(...) -> "
            f"{flow_autotune_start_result(cm_code=2, task_running=False, autotune_state=0, autotune_active=False, autotune_req=False).status}"
        ),
    )
    autotune_idle = flow_autotune_idle_tick_result(
        cm_code=100,
        task_code=2,
        autotune_req=True,
        flow_valid=True,
    )
    add(
        "Flow autotune idle tick turns a queued task into baseline settling",
        autotune_idle.status == "SETTLING"
        and autotune_idle.active
        and autotune_idle.flow_autotune_active
        and autotune_idle.flow_autotune_state == 1,
        f"flow_autotune_idle_tick_result(...) -> {autotune_idle}",
    )
    add(
        "Flow autotune release keeps CM100 ready and clears the selected task",
        flow_autotune_release_result(keep_cm100=True).status == "CM100 READY"
        and flow_autotune_release_result(keep_cm100=True).active
        and flow_autotune_release_result(keep_cm100=True).task_code == 0,
        f"flow_autotune_release_result(...) -> {flow_autotune_release_result(keep_cm100=True)}",
    )
    abort_result, restored_kp, restored_ki, restored_sp = flow_autotune_abort_result(
        saved_kp=0.03,
        saved_ki=0.0008,
        saved_sp=650.0,
        current_kp=0.05,
        current_ki=0.0012,
        current_sp=690.0,
    )
    add(
        "Flow autotune abort restores saved PI gains and setpoint before releasing CM100",
        abort_result.status == "CM100 READY"
        and restored_kp == 0.03
        and restored_ki == 0.0008
        and restored_sp == 650.0,
        (
            "flow_autotune_abort_result(...) -> "
            f"{abort_result}, kp={restored_kp}, ki={restored_ki}, sp={restored_sp}"
        ),
    )
    add(
        "Flow autotune invalid step gain is a FAILED path, not an ABORT path",
        flow_autotune_step_gain_status(500.0, 490.0, 20.0) == "FAILED: INVALID_GAIN",
        (
            "flow_autotune_step_gain_status(...) -> "
            f"{flow_autotune_step_gain_status(500.0, 490.0, 20.0)}"
        ),
    )
    validation_fast = flow_autotune_validation_result(
        seed_kp=0.03,
        seed_ki=0.0008,
        overshoot=2.0,
        settle_band=8.0,
        settled=True,
        timed_out=False,
        elapsed_s=5,
        sample_time_s=5,
        kp_min=0.001,
        kp_max=0.2,
        ki_min=0.0,
        ki_max=0.01,
    )
    add(
        "Flow autotune successful validation may gently increase fast stable gains",
        validation_fast.status_family == "DONE (CLOSED-LOOP)"
        and validation_fast.scale == 1.05
        and round(validation_fast.kp, 5) == 0.0315
        and round(validation_fast.ki, 6) == 0.00084,
        f"flow_autotune_validation_result(...) -> {validation_fast}",
    )
    validation_timeout = flow_autotune_validation_result(
        seed_kp=0.03,
        seed_ki=0.0008,
        overshoot=4.0,
        settle_band=8.0,
        settled=False,
        timed_out=True,
        elapsed_s=180,
        sample_time_s=5,
        kp_min=0.001,
        kp_max=0.2,
        ki_min=0.0,
        ki_max=0.01,
    )
    add(
        "Flow autotune validation timeout publishes a limited DONE result",
        validation_timeout.status_family == "DONE (LIMITED)"
        and validation_timeout.scale == 0.95,
        f"flow_autotune_validation_result(...) -> {validation_timeout}",
    )
    arm_ready = flow_autotune_arm_result(
        valid_mode=True,
        flow_valid=True,
        elapsed_s=30,
        pwm0=400,
        pwm_min=50,
        min_step=5,
        baseline_ready=True,
    )
    add(
        "Flow autotune arm helper turns a stable baseline into the first step request",
        arm_ready.state == "STEP1"
        and arm_ready.status == "STEP"
        and arm_ready.pwm_step == 376,
        f"flow_autotune_arm_result(...) -> {arm_ready}",
    )
    arm_wait = flow_autotune_arm_result(
        valid_mode=True,
        flow_valid=False,
        elapsed_s=25,
        pwm0=400,
        pwm_min=50,
        min_step=5,
        baseline_ready=False,
    )
    add(
        "Flow autotune arm helper stays in waiting-for-flow before the baseline timeout",
        arm_wait.state == "ARM" and arm_wait.status == "WAITING_FOR_FLOW",
        f"flow_autotune_arm_result(...) -> {arm_wait}",
    )
    validation_settle = flow_autotune_validation_settle_result(
        valid_mode=True,
        flow_valid=True,
        elapsed_s=25,
        confirm_cnt=1,
        peak_pv=710.0,
        pv=705.0,
        sp1=700.0,
        settle_band=8.0,
        window_ready=True,
        settled_now=True,
    )
    add(
        "Flow autotune validation-settle helper releases into measurement after two confirmations",
        validation_settle.settle_ready
        and validation_settle.status == "VALIDATING"
        and validation_settle.confirm_cnt == 0
        and validation_settle.peak_pv == 700.0,
        f"flow_autotune_validation_settle_result(...) -> {validation_settle}",
    )
    add(
        "Boiler task flow-on-target helper accepts stable flow inside the commissioning band",
        boiler_flow_on_target(782.0, 800.0, 40.0)
        and not boiler_flow_on_target(855.0, 800.0, 40.0),
        (
            "boiler_flow_on_target(...) -> "
            f"{boiler_flow_on_target(782.0, 800.0, 40.0)}, "
            f"{boiler_flow_on_target(855.0, 800.0, 40.0)}"
        ),
    )
    add(
        "Boiler task settle helper keeps only consecutive stable samples",
        boiler_next_stable_count(True, 3) == 4
        and boiler_next_stable_count(False, 3) == 0,
        (
            "boiler_next_stable_count(...) -> "
            f"{boiler_next_stable_count(True, 3)}, {boiler_next_stable_count(False, 3)}"
        ),
    )
    add(
        "Boiler task settle gate requires both enough stable samples and minimum dwell time",
        boiler_settle_window_ready(4, 4, 120000, 120000)
        and not boiler_settle_window_ready(3, 4, 120000, 120000)
        and not boiler_settle_window_ready(4, 4, 119000, 120000),
        (
            "boiler_settle_window_ready(...) -> "
            f"{boiler_settle_window_ready(4, 4, 120000, 120000)}, "
            f"{boiler_settle_window_ready(3, 4, 120000, 120000)}, "
            f"{boiler_settle_window_ready(4, 4, 119000, 120000)}"
        ),
    )
    boiler_measure_state = boiler_reset_measurement()
    for heat_w in (4000.0, 4100.0, 4300.0, 4300.0, 4300.0, 4300.0, 4250.0, 4250.0):
        boiler_measure_state = boiler_step_measurement(
            boiler_measure_state,
            flow_stable_now=True,
            heat_valid=True,
            heat_w=heat_w,
            plateau_ratio=0.95,
            plateau_confirm_samples=4,
        )
    add(
        "Boiler task measurement helper waits for plateau confirmation before counting samples",
        boiler_measure_state.sample_count == 3
        and round(boiler_measure_state.sum_w, 1) == 12800.0
        and boiler_measure_state.min_w == 4250.0
        and boiler_measure_state.max_w == 4300.0,
        f"boiler_step_measurement(...) -> {boiler_measure_state}",
    )
    add(
        "Boiler task measurement window closes only after both sample and runtime thresholds",
        boiler_measurement_window_complete(8, 8, 180000, 180000)
        and not boiler_measurement_window_complete(7, 8, 180000, 180000)
        and not boiler_measurement_window_complete(8, 8, 179000, 180000),
        (
            "boiler_measurement_window_complete(...) -> "
            f"{boiler_measurement_window_complete(8, 8, 180000, 180000)}, "
            f"{boiler_measurement_window_complete(7, 8, 180000, 180000)}, "
            f"{boiler_measurement_window_complete(8, 8, 179000, 180000)}"
        ),
    )
    boiler_result = boiler_finalize_measurement(
        BoilerMeasureState(
            sample_count=8,
            sum_w=34000.0,
            min_w=4200.0,
            max_w=4300.0,
            peak_w=4300.0,
            plateau_count=6,
        )
    )
    add(
        "Boiler task finalize helper computes average and confidence from the measurement spread",
        boiler_result.ready
        and boiler_result.avg_w == 4250.0
        and boiler_result.spread_w == 100.0
        and boiler_result.confidence == 92.0,
        f"boiler_finalize_measurement(...) -> {boiler_result}",
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
