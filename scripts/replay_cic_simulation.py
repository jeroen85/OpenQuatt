#!/usr/bin/env python3
"""Offline shadow simulation for OpenQuatt using CiC event CSV data."""

from __future__ import annotations

import argparse
import csv
import json
import math
from dataclasses import dataclass
from datetime import datetime, timedelta, timezone
from pathlib import Path
from typing import Any


ENTITY_OUTSIDE = "sensor.modbus_quatt_hp1_outside_temperature"
ENTITY_ROOM_TEMP = "sensor.heatpump_thermostat_room_temperature"
ENTITY_ROOM_SETPOINT = "sensor.heatpump_thermostat_room_setpoint"
ENTITY_CTRL_SETPOINT = "sensor.heatpump_thermostat_control_setpoint"
ENTITY_HP1_LEVEL = "sensor.modbus_quatt_hp1_cmd_compressorlevel"
ENTITY_HP2_LEVEL = "sensor.modbus_quatt_hp2_cmd_compressorlevel"
ENTITY_HP1_DEFROST = "binary_sensor.modbus_quatt_hp1_defrost"
ENTITY_HP2_DEFROST = "binary_sensor.modbus_quatt_hp2_defrost"
ENTITY_THERM_HEATING = "binary_sensor.heatpump_thermostat_heating"
ENTITY_HEAT_POWER = "sensor.heatpump_heat_power"
ENTITY_FLOW_TEMP = "sensor.heatpump_flowmeter_temperature"

TRACKED_ENTITIES = {
    ENTITY_OUTSIDE,
    ENTITY_ROOM_TEMP,
    ENTITY_ROOM_SETPOINT,
    ENTITY_CTRL_SETPOINT,
    ENTITY_HP1_LEVEL,
    ENTITY_HP2_LEVEL,
    ENTITY_HP1_DEFROST,
    ENTITY_HP2_DEFROST,
    ENTITY_THERM_HEATING,
    ENTITY_HEAT_POWER,
    ENTITY_FLOW_TEMP,
}

CM_NAMES = {0: "CM0", 1: "CM1", 2: "CM2", 3: "CM3", 98: "CM98"}

# OpenQuatt hp_perf_map.h
T_AMB_BP = [-15.0, -7.0, 2.0, 7.0, 12.0]
T_SUP_BP = [35.0, 45.0, 55.0]
P_TH_W = [
    [
        [792.39, 1054.23, 1358.42, 1547.65, 1741.89, 1941.17, 2111.07, 2354.79, 2569.14, 2751.61],
        [750.50, 1023.67, 1340.45, 1537.22, 1739.02, 1945.85, 2122.04, 2374.58, 2596.48, 2785.24],
        [285.03, 569.53, 898.90, 1103.22, 1312.57, 1526.95, 1709.44, 1970.78, 2200.24, math.nan],
    ],
    [
        [1119.63, 1491.69, 1918.35, 2181.05, 2448.78, 2721.53, 2952.66, 3282.11, 3569.94, 3813.64],
        [998.50, 1381.88, 1821.13, 2091.38, 2366.66, 2646.96, 2884.39, 3222.65, 3518.03, 3768.03],
        [453.78, 848.49, 1300.33, 1578.13, 1860.96, 2148.82, 2392.54, 2739.61, math.nan, math.nan],
    ],
    [
        [1675.91, 2171.97, 2736.40, 3081.76, 3432.15, 3787.56, 4087.58, 4513.47, 4883.97, 5196.55],
        [1465.62, 1973.00, 2550.02, 2902.94, 3260.88, 3623.85, 3930.16, 4364.86, 4742.91, 5061.78],
        [831.75, 1350.46, 1940.07, 2300.54, 2666.03, 3036.55, 3349.15, 3792.67, math.nan, math.nan],
    ],
    [
        [2071.03, 2635.97, 3276.94, 3668.23, 4064.54, 4465.88, 4804.17, 5283.63, 5700.05, 6050.91],
        [1811.21, 2387.48, 3041.04, 3439.87, 3843.74, 4252.63, 4597.21, 5085.49, 5509.46, 5866.61],
        [1127.81, 1715.41, 2381.55, 2787.94, 3199.36, 3615.80, 3966.68, 4463.77, math.nan, math.nan],
    ],
    [
        [2527.63, 3161.45, 3878.96, 4316.17, 4758.41, 5205.67, 5582.23, 6115.28, math.nan, math.nan],
        [2218.28, 2863.43, 3593.53, 4038.29, 4488.08, 4942.89, 5325.75, 5867.60, math.nan, math.nan],
        [1485.35, 2141.83, 2884.52, 3336.83, 3794.17, 4256.54, 4645.68, 5196.35, math.nan, math.nan],
    ],
]
COP = [
    [
        [1.78, 1.98, 2.15, 2.22, 2.28, 2.30, 2.31, 2.30, 2.26, 2.21],
        [1.03, 1.31, 1.57, 1.70, 1.80, 1.89, 1.94, 1.99, 2.00, 2.00],
        [0.22, 0.59, 0.94, 1.12, 1.28, 1.41, 1.51, 1.62, 1.69, math.nan],
    ],
    [
        [2.73, 2.88, 2.99, 3.02, 3.04, 3.03, 3.01, 2.95, 2.87, 2.79],
        [1.80, 2.03, 2.23, 2.31, 2.38, 2.43, 2.45, 2.45, 2.43, 2.40],
        [0.81, 1.12, 1.41, 1.55, 1.67, 1.77, 1.83, 1.90, math.nan, math.nan],
    ],
    [
        [3.96, 4.04, 4.08, 4.07, 4.04, 3.99, 3.94, 3.83, 3.71, 3.60],
        [2.82, 2.98, 3.11, 3.16, 3.18, 3.19, 3.17, 3.13, 3.06, 2.99],
        [1.62, 1.87, 2.08, 2.18, 2.26, 2.32, 2.35, 2.37, math.nan, math.nan],
    ],
    [
        [4.71, 4.76, 4.75, 4.72, 4.67, 4.60, 4.52, 4.39, 4.25, 4.11],
        [3.45, 3.58, 3.67, 3.69, 3.70, 3.68, 3.64, 3.57, 3.48, 3.39],
        [2.14, 2.35, 2.53, 2.61, 2.66, 2.69, 2.71, 2.70, math.nan, math.nan],
    ],
    [
        [5.50, 5.52, 5.48, 5.42, 5.35, 5.25, 5.15, 4.99, math.nan, math.nan],
        [4.13, 4.23, 4.28, 4.28, 4.26, 4.21, 4.16, 4.06, math.nan, math.nan],
        [2.71, 2.89, 3.02, 3.08, 3.11, 3.12, 3.11, 3.07, math.nan, math.nan],
    ],
]


@dataclass
class SimConfig:
    tick_s: int = 5
    heat_loop_s: int = 60
    demand_max_f: int = 20

    # Power House defaults from OpenQuatt v0.12.
    house_cold_temp_c: float = -10.0
    house_zero_power_temp_c: float = 16.0
    house_rated_power_w: float = 7020.0
    ph_kp_w_per_k: float = 1000.0
    ph_deadband_k: float = 0.10
    ph_ramp_up_w_per_min: float = 400.0
    ph_ramp_down_w_per_min: float = 800.0

    # Supervisory defaults from OpenQuatt v0.12.
    cm_prepost_s: int = 60
    cm_frost_on_c: float = 5.0
    cm_frost_off_c: float = 6.0

    # Simplified heat split defaults.
    single_hp_max_minutes_at_5: int = 15
    min_runtime_min: int = 30
    gate_by_thermostat_heating: bool = False
    use_perf_optimizer: bool = True
    optimizer_soft_w: float = 3400.0
    optimizer_peak_w: float = 3650.0
    optimizer_penalty_per_w: float = 5.0
    optimizer_twohp_penalty: float = 10.0
    optimizer_balance_penalty_per_step: float = 40.0
    # Defrost handling for command-level replay:
    # keep unit commandable, but reduce its effective thermal contribution in optimizer.
    defrost_power_factor: float = 0.55
    defrost_comp_min_f: int = 6
    defrost_comp_boost_steps: int = 1
    collect_rows: bool = True


@dataclass
class Event:
    ts: datetime
    entity_id: str
    value: Any


@dataclass
class Metrics:
    rows_total: int = 0
    rows_with_obs_levels: int = 0
    exact_hp_pair_matches: int = 0
    total_level_abs_error_sum: float = 0.0
    total_level_signed_error_sum: float = 0.0


def parse_ts(ts: str) -> datetime:
    return datetime.fromisoformat(ts.replace("Z", "+00:00")).astimezone(timezone.utc)


def parse_state(entity_id: str, raw: str) -> Any:
    val = raw.strip().lower()
    if val in {"", "unknown", "unavailable", "none", "null"}:
        return None

    if entity_id.startswith("binary_sensor."):
        if val in {"on", "true", "1"}:
            return True
        if val in {"off", "false", "0"}:
            return False
        return None

    try:
        f = float(raw)
    except ValueError:
        return None
    if math.isnan(f) or math.isinf(f):
        return None
    return f


def clamp(v: float, lo: float, hi: float) -> float:
    return max(lo, min(hi, v))


def round_level(v: Any) -> int | None:
    if v is None:
        return None
    try:
        return int(round(float(v)))
    except (TypeError, ValueError):
        return None


def find_interval(bp: list[float], x: float) -> int:
    if x <= bp[0]:
        return 0
    if x >= bp[-1]:
        return len(bp) - 2
    for i in range(len(bp) - 1):
        if bp[i] <= x <= bp[i + 1]:
            return i
    return len(bp) - 2


def lerp(a: float, b: float, t: float) -> float:
    return a + (b - a) * t


def interp_3d(data: list[list[list[float]]], level: int, tamb: float, tsup: float) -> float:
    if level <= 0:
        return 0.0
    if level > 10:
        level = 10
    li = level - 1

    ai = find_interval(T_AMB_BP, tamb)
    si = find_interval(T_SUP_BP, tsup)
    ax0, ax1 = T_AMB_BP[ai], T_AMB_BP[ai + 1]
    sy0, sy1 = T_SUP_BP[si], T_SUP_BP[si + 1]
    tx = 0.0 if ax1 == ax0 else (tamb - ax0) / (ax1 - ax0)
    ty = 0.0 if sy1 == sy0 else (tsup - sy0) / (sy1 - sy0)
    tx = clamp(tx, 0.0, 1.0)
    ty = clamp(ty, 0.0, 1.0)

    q11 = data[ai][si][li]
    q21 = data[ai + 1][si][li]
    q12 = data[ai][si + 1][li]
    q22 = data[ai + 1][si + 1][li]
    if any(math.isnan(v) for v in (q11, q21, q12, q22)):
        return math.nan
    r1 = lerp(q11, q21, tx)
    r2 = lerp(q12, q22, tx)
    return lerp(r1, r2, ty)


def interp_power_th_w(level: int, tamb: float, tsup: float) -> float:
    return interp_3d(P_TH_W, level, tamb, tsup)


def interp_cop(level: int, tamb: float, tsup: float) -> float:
    return interp_3d(COP, level, tamb, tsup)


def interp_power_el_w(level: int, tamb: float, tsup: float, cop_fallback: float = 3.0) -> float:
    pth = interp_power_th_w(level, tamb, tsup)
    if math.isnan(pth) or pth <= 0.0:
        return 0.0
    cop = interp_cop(level, tamb, tsup)
    if math.isnan(cop) or cop <= 0.1:
        cop = cop_fallback
    return pth / cop


class ShadowSimulator:
    def __init__(self, cfg: SimConfig) -> None:
        self.cfg = cfg
        self.events: list[Event] = []
        self.state: dict[str, Any] = {}
        self.rows: list[dict[str, Any]] = []
        self.cm_counts: dict[str, int] = {}
        self.metrics = Metrics()
        self.assumption_counters = {
            "missing_outside": 0,
            "missing_room_temp": 0,
            "missing_room_setpoint": 0,
        }

        # Strategy / heat state.
        self.demand_raw = 0
        self.demand_filtered = 0
        self.ph_last_w: float | None = None
        self.last_tick: datetime | None = None

        # Supervisory CM state.
        self.cm_code = 0
        self.cm_frost_prev = False
        self.cm1_until: datetime | None = None
        self.cm1_next_after = 0

        # Simplified HP split state.
        self.hp1_level = 0
        self.hp2_level = 0
        self.hp1_minutes = 0
        self.hp2_minutes = 0
        self.single_hp_hold_min = 0

    def load_events(self, csv_path: Path) -> None:
        self.events = load_events_from_csv(csv_path)
        if not self.events:
            raise RuntimeError("No usable events found in CSV for tracked entities.")

    def set_events(self, events: list[Event]) -> None:
        self.events = events
        if not self.events:
            raise RuntimeError("No events supplied.")

    def _load_events_legacy(self, csv_path: Path) -> None:
        with csv_path.open(newline="", encoding="utf-8") as fh:
            reader = csv.DictReader(fh)
            for row in reader:
                entity = row["entity_id"]
                if entity not in TRACKED_ENTITIES:
                    continue
                value = parse_state(entity, row["state"])
                if value is None:
                    # Keep last known valid state instead of invalidating.
                    continue
                self.events.append(Event(ts=parse_ts(row["last_changed"]), entity_id=entity, value=value))
        self.events.sort(key=lambda e: e.ts)
        if not self.events:
            raise RuntimeError("No usable events found in CSV for tracked entities.")

    def _power_house_demand(self, now: datetime) -> int:
        if self.cfg.gate_by_thermostat_heating:
            heating_call = self.state.get(ENTITY_THERM_HEATING)
            if heating_call is False:
                self.ph_last_w = 0.0
                return 0

        outside = self.state.get(ENTITY_OUTSIDE)
        room = self.state.get(ENTITY_ROOM_TEMP)
        room_sp = self.state.get(ENTITY_ROOM_SETPOINT)

        if outside is None:
            self.assumption_counters["missing_outside"] += 1
        if room is None:
            self.assumption_counters["missing_room_temp"] += 1
        if room_sp is None:
            self.assumption_counters["missing_room_setpoint"] += 1

        if outside is None or room is None or room_sp is None:
            self.ph_last_w = 0.0
            return 0

        tc = self.cfg.house_cold_temp_c
        t0 = self.cfg.house_zero_power_temp_c
        pr = self.cfg.house_rated_power_w
        if t0 <= tc + 0.5:
            self.ph_last_w = 0.0
            return 0

        x = clamp((t0 - outside) / (t0 - tc), 0.0, 1.0)
        p_house = pr * x
        e = room_sp - room
        if abs(e) < self.cfg.ph_deadband_k:
            e = 0.0
        p_raw = clamp(p_house + self.cfg.ph_kp_w_per_k * e, 0.0, pr)

        dt_s = self.cfg.tick_s
        if self.last_tick is not None:
            dt_s = max(0.0, (now - self.last_tick).total_seconds())
        up = self.cfg.ph_ramp_up_w_per_min / 60.0
        down = self.cfg.ph_ramp_down_w_per_min / 60.0

        if self.ph_last_w is None:
            p_limited = p_raw
        elif p_raw > self.ph_last_w and up > 0:
            p_limited = min(p_raw, self.ph_last_w + up * dt_s)
        elif p_raw < self.ph_last_w and down > 0:
            p_limited = max(p_raw, self.ph_last_w - down * dt_s)
        else:
            p_limited = p_raw

        self.ph_last_w = p_limited
        d = round(self.cfg.demand_max_f * (p_limited / pr))
        return int(clamp(d, 0, self.cfg.demand_max_f))

    def _update_supervisory(self, now: datetime) -> None:
        heating_req = self.demand_filtered > 0
        outside = self.state.get(ENTITY_OUTSIDE)

        # Simplifying assumption: flow path is healthy in replay (flow meter not available).
        flow_low = False

        frost = False
        if not heating_req:
            if outside is None:
                frost = True
            elif self.cm_frost_prev:
                frost = outside < self.cfg.cm_frost_off_c
            else:
                frost = outside < self.cfg.cm_frost_on_c
        self.cm_frost_prev = frost

        base_target = 2 if heating_req else (98 if frost else 0)
        if heating_req and flow_low:
            base_target = 1

        cur_cm = self.cm_code
        cm1_running = self.cm1_until is not None and now < self.cm1_until
        cm1_expired = self.cm1_until is not None and not cm1_running

        desired = 0
        if cm1_running and cur_cm == 1:
            desired = 1
        elif cm1_expired and cur_cm == 1:
            if self.cm1_next_after == 2:
                if heating_req and base_target == 2:
                    desired = 2
                elif base_target == 98:
                    desired = 98
                else:
                    desired = 0
            elif self.cm1_next_after == 0:
                desired = 98 if base_target == 98 else 0
            elif self.cm1_next_after == 98:
                desired = 98
            else:
                desired = 2 if base_target == 2 else (98 if base_target == 98 else 0)
            self.cm1_until = None
            self.cm1_next_after = 0
        else:
            if heating_req:
                if base_target == 2:
                    if cur_cm == 2:
                        desired = 2
                    else:
                        self.cm1_until = now + timedelta(seconds=self.cfg.cm_prepost_s)
                        self.cm1_next_after = 2
                        desired = 1
                else:
                    desired = 1
            else:
                if cur_cm == 2:
                    self.cm1_until = now + timedelta(seconds=self.cfg.cm_prepost_s)
                    self.cm1_next_after = 0
                    desired = 1
                else:
                    desired = 98 if base_target == 98 else 0
        self.cm_code = desired

    def _allocate_levels(self) -> None:
        cm_allows_hp = self.cm_code in (2, 3)
        if not cm_allows_hp:
            self.hp1_level = 0
            self.hp2_level = 0
            return

        f = int(clamp(self.demand_filtered, 0, self.cfg.demand_max_f))
        hp1_defrost = bool(self.state.get(ENTITY_HP1_DEFROST, False))
        hp2_defrost = bool(self.state.get(ENTITY_HP2_DEFROST, False))
        tamb = self.state.get(ENTITY_OUTSIDE)
        tsup = self.state.get(ENTITY_FLOW_TEMP)
        is_power_house = True

        lead_is_hp1 = self.hp1_minutes <= self.hp2_minutes
        hp1_req = 0
        hp2_req = 0

        if self.cfg.use_perf_optimizer and is_power_house and tamb is not None and tsup is not None:
            # For cmd_compressorlevel replay, a defrosting HP can still carry a non-zero command.
            # We therefore keep both HPs commandable and model defrost as thermal derating.
            hp1_available = True
            hp2_available = True
            level_cap = 10
            d1_fac = self.cfg.defrost_power_factor if hp1_defrost else 1.0
            d2_fac = self.cfg.defrost_power_factor if hp2_defrost else 1.0

            def max_cap_hp(is_hp1: bool) -> float:
                if (is_hp1 and not hp1_available) or ((not is_hp1) and not hp2_available):
                    return 0.0
                best = 0.0
                for lvl in range(1, level_cap + 1):
                    p = interp_power_th_w(lvl, tamb, tsup)
                    if not math.isnan(p) and p > best:
                        best = p * (d1_fac if is_hp1 else d2_fac)
                return best

            cap_total = max_cap_hp(True) + max_cap_hp(False)

            p_req_total = 0.0 if self.ph_last_w is None else self.ph_last_w
            pr = self.cfg.house_rated_power_w
            p_cap = pr * (f / float(self.cfg.demand_max_f))
            p_req_total = min(p_req_total, p_cap)
            p_target = clamp(min(p_req_total, cap_total), 0.0, cap_total)

            last1 = self.hp1_level
            last2 = self.hp2_level
            best_cost = 1e12
            best_l1 = 0
            best_l2 = 0
            w_change_penalty_per_step = 50.0
            w_twohp_penalty = self.cfg.optimizer_twohp_penalty
            w_balance_penalty = self.cfg.optimizer_balance_penalty_per_step
            p_el_soft = self.cfg.optimizer_soft_w
            p_el_peak = self.cfg.optimizer_peak_w
            w_el_penalty = self.cfg.optimizer_penalty_per_w

            for l1 in range(0, level_cap + 1):
                if l1 > 0 and not hp1_available:
                    continue
                p1 = 0.0 if l1 == 0 else interp_power_th_w(l1, tamb, tsup)
                if l1 > 0 and math.isnan(p1):
                    continue
                p1 *= d1_fac
                pel1 = 0.0 if l1 == 0 else interp_power_el_w(l1, tamb, tsup)

                for l2 in range(0, level_cap + 1):
                    if l2 > 0 and not hp2_available:
                        continue
                    p2 = 0.0 if l2 == 0 else interp_power_th_w(l2, tamb, tsup)
                    if l2 > 0 and math.isnan(p2):
                        continue
                    p2 *= d2_fac
                    pel2 = 0.0 if l2 == 0 else interp_power_el_w(l2, tamb, tsup)

                    psum = p1 + p2
                    err = abs(psum - p_target)
                    cost = err
                    cost += w_change_penalty_per_step * (abs(l1 - last1) + abs(l2 - last2))
                    # Preserve single-HP preference only at low load; do not force it at medium/high load.
                    if l1 > 0 and l2 > 0 and f <= 5 and not (hp1_defrost or hp2_defrost):
                        cost += w_twohp_penalty
                    # At medium/high load without defrost, observed behavior is usually balanced split.
                    if f >= 6 and not (hp1_defrost or hp2_defrost):
                        cost += w_balance_penalty * abs(l1 - l2)

                    pel_sum = pel1 + pel2
                    if pel_sum > p_el_peak:
                        continue
                    if pel_sum > p_el_soft:
                        cost += (pel_sum - p_el_soft) * w_el_penalty

                    if cost < best_cost:
                        best_cost = cost
                        best_l1 = l1
                        best_l2 = l2

            hp1_req = best_l1
            hp2_req = best_l2

            if cap_total > 0.0 and p_target <= cap_total * 0.35:
                lead = hp1_req if lead_is_hp1 else hp2_req
                lag = hp2_req if lead_is_hp1 else hp1_req
                # Only bias to single-HP when both were active.
                # If optimizer already picked (0, x), keep it; forcing lead-only can collapse to 0.
                if lag > 0 and lead > 0:
                    best_single_cost = best_cost
                    best_single_level = lead
                    for l in range(1, level_cap + 1):
                        p = interp_power_th_w(l, tamb, tsup)
                        if math.isnan(p):
                            continue
                        prev = last1 if lead_is_hp1 else last2
                        cost = abs(p - p_target) + w_change_penalty_per_step * abs(l - prev)
                        if cost < best_single_cost:
                            best_single_cost = cost
                            best_single_level = l
                    if lead_is_hp1:
                        hp1_req, hp2_req = best_single_level, 0
                    else:
                        hp2_req, hp1_req = best_single_level, 0

            # Single-defrost compensation: boost non-defrost HP at medium/high demand.
            def_comp_min_f = int(clamp(self.cfg.defrost_comp_min_f, 0, self.cfg.demand_max_f))
            def_comp_boost = int(clamp(self.cfg.defrost_comp_boost_steps, 0, 3))
            if def_comp_boost > 0 and f >= def_comp_min_f:
                if hp1_defrost and not hp2_defrost and hp2_req > 0:
                    hp2_req = int(clamp(hp2_req + def_comp_boost, 0, 10))
                if hp2_defrost and not hp1_defrost and hp1_req > 0:
                    hp1_req = int(clamp(hp1_req + def_comp_boost, 0, 10))
        else:
            want_single = (f > 0 and f <= 5 and not (hp1_defrost and hp2_defrost))
            if want_single and f == 5:
                self.single_hp_hold_min += 1
            else:
                self.single_hp_hold_min = 0

            need_assist = (f > 5) or (
                want_single and f == 5 and self.single_hp_hold_min >= self.cfg.single_hp_max_minutes_at_5
            )

            if want_single and not need_assist:
                if lead_is_hp1:
                    hp1_req = f
                else:
                    hp2_req = f
            else:
                hp1_req = f // 2
                hp2_req = f // 2
                if f % 2 == 1:
                    if lead_is_hp1:
                        hp1_req += 1
                    else:
                        hp2_req += 1

        self.hp1_level = int(clamp(hp1_req, 0, 10))
        self.hp2_level = int(clamp(hp2_req, 0, 10))

    def _record_row(self, now: datetime) -> None:
        hp1_obs = round_level(self.state.get(ENTITY_HP1_LEVEL))
        hp2_obs = round_level(self.state.get(ENTITY_HP2_LEVEL))
        total_sim = self.hp1_level + self.hp2_level
        total_obs = None if hp1_obs is None or hp2_obs is None else (hp1_obs + hp2_obs)

        row = {
            "ts_utc": now.isoformat().replace("+00:00", "Z"),
            "outside_c_obs": self.state.get(ENTITY_OUTSIDE),
            "room_temp_c_obs": self.state.get(ENTITY_ROOM_TEMP),
            "room_setpoint_c_obs": self.state.get(ENTITY_ROOM_SETPOINT),
            "thermostat_control_setpoint_obs": self.state.get(ENTITY_CTRL_SETPOINT),
            "thermostat_heating_obs": self.state.get(ENTITY_THERM_HEATING),
            "flowmeter_temp_obs": self.state.get(ENTITY_FLOW_TEMP),
            "heat_power_w_obs": self.state.get(ENTITY_HEAT_POWER),
            "demand_raw_sim_f": self.demand_raw,
            "demand_filtered_sim_f": self.demand_filtered,
            "cm_sim": CM_NAMES.get(self.cm_code, f"CM{self.cm_code}"),
            "hp1_level_sim": self.hp1_level,
            "hp2_level_sim": self.hp2_level,
            "hp1_level_obs": hp1_obs,
            "hp2_level_obs": hp2_obs,
            "total_level_sim": total_sim,
            "total_level_obs": total_obs,
        }
        if self.cfg.collect_rows:
            self.rows.append(row)
        cm = row["cm_sim"]
        self.cm_counts[cm] = self.cm_counts.get(cm, 0) + 1

        self.metrics.rows_total += 1
        if hp1_obs is not None and hp2_obs is not None:
            self.metrics.rows_with_obs_levels += 1
            if hp1_obs == self.hp1_level and hp2_obs == self.hp2_level:
                self.metrics.exact_hp_pair_matches += 1
            err = total_sim - (hp1_obs + hp2_obs)
            self.metrics.total_level_abs_error_sum += abs(err)
            self.metrics.total_level_signed_error_sum += err

    def run(self) -> None:
        start = self.events[0].ts
        end = self.events[-1].ts
        tick = start
        event_idx = 0

        while tick <= end:
            while event_idx < len(self.events) and self.events[event_idx].ts <= tick:
                evt = self.events[event_idx]
                self.state[evt.entity_id] = evt.value
                event_idx += 1

            self.demand_raw = self._power_house_demand(tick)
            elapsed_s = int((tick - start).total_seconds())
            if elapsed_s % self.cfg.heat_loop_s == 0:
                raw = int(clamp(self.demand_raw, 0, self.cfg.demand_max_f))
                f = self.demand_filtered
                if raw > f:
                    f = min(f + 1, raw)
                elif raw <= (f - 2):
                    f = raw
                self.demand_filtered = int(clamp(f, 0, self.cfg.demand_max_f))
                self._allocate_levels()
                if self.hp1_level > 0:
                    self.hp1_minutes += 1
                if self.hp2_level > 0:
                    self.hp2_minutes += 1

            self._update_supervisory(tick)
            self._record_row(tick)
            self.last_tick = tick
            tick += timedelta(seconds=self.cfg.tick_s)

    def build_summary(self, source_csv: Path) -> dict[str, Any]:
        exact_ratio = 0.0
        mae = None
        mean_signed_error = None
        if self.metrics.rows_with_obs_levels > 0:
            exact_ratio = self.metrics.exact_hp_pair_matches / self.metrics.rows_with_obs_levels
            mae = self.metrics.total_level_abs_error_sum / self.metrics.rows_with_obs_levels
            mean_signed_error = self.metrics.total_level_signed_error_sum / self.metrics.rows_with_obs_levels

        return {
            "source_csv": str(source_csv),
            "sim_rows": self.metrics.rows_total,
            "tick_seconds": self.cfg.tick_s,
            "observation_rows_with_hp_levels": self.metrics.rows_with_obs_levels,
            "hp_pair_exact_match_ratio": exact_ratio,
            "total_level_mae": mae,
            "total_level_mean_signed_error_sim_minus_obs": mean_signed_error,
            "cm_distribution_sim": self.cm_counts,
            "assumptions": {
                "mode": "Power House only",
                "flow_interlock": "assumed healthy due to missing flow measurements",
                "hp_perf_optimizer": self.cfg.use_perf_optimizer,
                "outside_temp_source": "hp1 outside temp used for frost logic",
                "supply_temp_proxy": "flowmeter temperature used as Tsup for perf-map interpolation",
                "defrost_power_factor": self.cfg.defrost_power_factor,
                "defrost_comp_min_f": self.cfg.defrost_comp_min_f,
                "defrost_comp_boost_steps": self.cfg.defrost_comp_boost_steps,
                "thermostat_heating_gate": self.cfg.gate_by_thermostat_heating,
            },
            "missing_input_counts": self.assumption_counters,
        }


def write_csv(path: Path, rows: list[dict[str, Any]]) -> None:
    if not rows:
        return
    path.parent.mkdir(parents=True, exist_ok=True)
    with path.open("w", newline="", encoding="utf-8") as fh:
        writer = csv.DictWriter(fh, fieldnames=list(rows[0].keys()))
        writer.writeheader()
        writer.writerows(rows)


def load_events_from_csv(csv_path: Path) -> list[Event]:
    events: list[Event] = []
    with csv_path.open(newline="", encoding="utf-8") as fh:
        reader = csv.DictReader(fh)
        for row in reader:
            entity = row["entity_id"]
            if entity not in TRACKED_ENTITIES:
                continue
            value = parse_state(entity, row["state"])
            if value is None:
                continue
            events.append(Event(ts=parse_ts(row["last_changed"]), entity_id=entity, value=value))
    events.sort(key=lambda e: e.ts)
    return events


def main() -> None:
    parser = argparse.ArgumentParser(description="Replay CiC CSV data through a simplified OpenQuatt shadow simulator.")
    parser.add_argument("--input", required=True, type=Path, help="Path to event CSV (entity_id,state,last_changed).")
    parser.add_argument("--out-dir", type=Path, default=Path("output/sim"), help="Output directory for timeline and summary.")
    parser.add_argument("--tick-s", type=int, default=5, help="Replay timestep in seconds.")
    parser.add_argument(
        "--gate-by-thermostat-heating",
        action="store_true",
        help="Force demand to zero when thermostat_heating is explicitly off.",
    )
    parser.add_argument(
        "--no-perf-optimizer",
        action="store_true",
        help="Disable perf-map optimizer and use simplified demand split.",
    )
    parser.add_argument("--summary-only", action="store_true", help="Skip timeline CSV and write only summary JSON.")
    parser.add_argument("--house-rated-power-w", type=float, default=7020.0)
    parser.add_argument("--ph-kp-w-per-k", type=float, default=1000.0)
    parser.add_argument("--ph-deadband-k", type=float, default=0.10)
    parser.add_argument("--ph-ramp-up-w-per-min", type=float, default=400.0)
    parser.add_argument("--ph-ramp-down-w-per-min", type=float, default=800.0)
    parser.add_argument("--defrost-power-factor", type=float, default=0.55)
    parser.add_argument("--defrost-comp-min-f", type=int, default=6)
    parser.add_argument("--defrost-comp-boost-steps", type=int, default=1)
    parser.add_argument("--optimizer-twohp-penalty", type=float, default=10.0)
    parser.add_argument("--optimizer-balance-penalty-per-step", type=float, default=40.0)
    args = parser.parse_args()

    cfg = SimConfig(
        tick_s=args.tick_s,
        gate_by_thermostat_heating=args.gate_by_thermostat_heating,
        use_perf_optimizer=not args.no_perf_optimizer,
        collect_rows=not args.summary_only,
        house_rated_power_w=args.house_rated_power_w,
        ph_kp_w_per_k=args.ph_kp_w_per_k,
        ph_deadband_k=args.ph_deadband_k,
        ph_ramp_up_w_per_min=args.ph_ramp_up_w_per_min,
        ph_ramp_down_w_per_min=args.ph_ramp_down_w_per_min,
        defrost_power_factor=args.defrost_power_factor,
        defrost_comp_min_f=args.defrost_comp_min_f,
        defrost_comp_boost_steps=args.defrost_comp_boost_steps,
        optimizer_twohp_penalty=args.optimizer_twohp_penalty,
        optimizer_balance_penalty_per_step=args.optimizer_balance_penalty_per_step,
    )
    sim = ShadowSimulator(cfg)
    sim.load_events(args.input)
    sim.run()

    out_dir = args.out_dir
    timeline_path = out_dir / "cic_shadow_timeline.csv"
    summary_path = out_dir / "cic_shadow_summary.json"
    if not args.summary_only:
        write_csv(timeline_path, sim.rows)
    summary = sim.build_summary(args.input)
    out_dir.mkdir(parents=True, exist_ok=True)
    summary_path.write_text(json.dumps(summary, indent=2), encoding="utf-8")

    if not args.summary_only:
        print(f"timeline: {timeline_path}")
    print(f"summary : {summary_path}")
    print(json.dumps(summary, indent=2))


if __name__ == "__main__":
    main()
