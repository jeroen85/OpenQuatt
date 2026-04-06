#!/usr/bin/env python3
"""Replay heating-curve history exports and compare dispatch policies.

This is a first-order dispatch simulator, not a full thermal plant model.
It replays a Home Assistant history CSV, reconstructs the relevant curve-mode
state, and compares the observed HP1/HP2 level combination against a simulated
policy that selects level combinations using the performance map.
"""

from __future__ import annotations

import argparse
import csv
import math
import re
from dataclasses import dataclass, replace
from datetime import datetime, timedelta, timezone
from pathlib import Path
from typing import Dict, Iterable, List, Optional, Sequence, Tuple


CURVE_MODE_LABEL = "Water Temperature Control (heating curve)"
TRACKED_ENTITIES = {
    "select.openquatt_heating_control_mode": "heating_mode",
    "sensor.openquatt_control_mode_label": "control_mode",
    "sensor.openquatt_curve_phase": "curve_phase",
    "sensor.openquatt_demand_curve_post_guardrail": "curve_post",
    "sensor.openquatt_heating_curve_supply_target": "supply_target",
    "sensor.openquatt_water_supply_temp_selected": "supply_actual",
    "sensor.openquatt_outside_temperature_selected": "outside_temp",
    "sensor.openquatt_flow_average_selected": "flow_lph",
    "sensor.openquatt_hp1_compressor_level": "hp1_level",
    "sensor.openquatt_hp2_compressor_level": "hp2_level",
}


@dataclass
class PerfMap:
    t_amb_bp: List[float]
    t_sup_bp: List[float]
    p_th_w: List[List[List[float]]]

    def interp_power_th_w(self, level: int, tamb: float, tsup: float) -> float:
        if level <= 0:
            return 0.0
        level = min(level, 10)
        li = level - 1
        ai = self._find_interval(self.t_amb_bp, tamb)
        si = self._find_interval(self.t_sup_bp, tsup)
        ax0, ax1 = self.t_amb_bp[ai], self.t_amb_bp[ai + 1]
        sy0, sy1 = self.t_sup_bp[si], self.t_sup_bp[si + 1]
        tx = 0.0 if ax1 == ax0 else (tamb - ax0) / (ax1 - ax0)
        ty = 0.0 if sy1 == sy0 else (tsup - sy0) / (sy1 - sy0)
        tx = max(0.0, min(1.0, tx))
        ty = max(0.0, min(1.0, ty))

        q11 = self.p_th_w[ai][si][li]
        q21 = self.p_th_w[ai + 1][si][li]
        q12 = self.p_th_w[ai][si + 1][li]
        q22 = self.p_th_w[ai + 1][si + 1][li]
        if any(math.isnan(v) for v in (q11, q21, q12, q22)):
            return math.nan

        r1 = q11 + (q21 - q11) * tx
        r2 = q12 + (q22 - q12) * tx
        return r1 + (r2 - r1) * ty

    @staticmethod
    def _find_interval(bp: Sequence[float], x: float) -> int:
        if x <= bp[0]:
            return 0
        if x >= bp[-1]:
            return len(bp) - 2
        for i in range(len(bp) - 1):
            if bp[i] <= x <= bp[i + 1]:
                return i
        return len(bp) - 2


@dataclass
class Snapshot:
    timestamp: datetime
    heating_mode: str
    control_mode: str
    curve_phase: str
    curve_post: int
    supply_target: float
    supply_actual: float
    outside_temp: float
    flow_lph: float
    hp1_level: int
    hp2_level: int


@dataclass
class Candidate:
    hp1_level: int
    hp2_level: int
    p_th_w: float

    @property
    def active_hp_count(self) -> int:
        return int(self.hp1_level > 0) + int(self.hp2_level > 0)

    @property
    def topology(self) -> str:
        if self.active_hp_count == 0:
            return "off"
        if self.active_hp_count == 1:
            return "single"
        return "duo"


@dataclass
class SimSettings:
    min_single_dwell_s: int = 900
    min_duo_dwell_s: int = 900
    start_penalty_w: float = 1200.0
    stop_penalty_w: float = 350.0
    topology_switch_penalty_w: float = 700.0
    level_step_penalty_w: float = 120.0
    balance_penalty_w: float = 80.0
    duo_penalty_w: float = 250.0
    single_preference_margin_w: float = 500.0
    max_duo_gap: int = 1
    duo_enable_margin_w: float = 1200.0
    duo_disable_margin_w: float = 300.0
    duo_enable_min_post: int = 16
    duo_disable_max_post: int = 12
    only_allow_duo_in_heat: bool = True
    dual_startup_grace_s: int = 480
    dual_emergency_hold_min: int = 6
    dual_emergency_temp_err_c: float = 1.5
    dual_disable_temp_err_max_c: float = 0.5
    lead_is_hp1_default: bool = False


@dataclass(frozen=True)
class Policy:
    name: str
    description: str
    target_model: str
    settings: SimSettings
    flow_gain: float = 0.0
    heat_phase_multiplier: float = 1.0
    coast_phase_multiplier: float = 1.0


@dataclass
class BranchState:
    previous: Candidate
    previous_timestamp: datetime
    previous_curve_post: int
    previous_topology_change: datetime
    stored_owner_hp: int
    dual_enabled: bool
    dual_enable_hold_min_accum: float
    dual_disable_hold_min_accum: float
    dual_emergency_hold_min_accum: float
    hp1_last_start_ts: Optional[datetime]
    hp2_last_start_ts: Optional[datetime]
    lead_is_hp1: bool


@dataclass
class SimulationResult:
    policy: Policy
    snapshots: int
    start_ts: datetime
    end_ts: datetime
    actual_hp1_starts: int
    actual_hp1_stops: int
    sim_hp1_starts: int
    sim_hp1_stops: int
    actual_duo_entries: int
    sim_duo_entries: int
    avg_abs_power_error_w: float
    empirical_target_map: Dict[int, float]
    differences: List[str]


def load_perf_map(path: Path) -> PerfMap:
    text = path.read_text()
    t_amb = _parse_1d_array(text, "T_amb_bp")
    t_sup = _parse_1d_array(text, "T_sup_bp")
    p_th = _parse_3d_array(text, "P_th_W", dims=(5, 3, 10))
    return PerfMap(t_amb_bp=t_amb, t_sup_bp=t_sup, p_th_w=p_th)


def _parse_1d_array(text: str, name: str) -> List[float]:
    m = re.search(rf"{name}\[[^]]+\]\s*=\s*\{{([^}}]*)\}}", text)
    if not m:
        raise ValueError(f"Could not parse array {name}")
    return [float(v.replace("f", "")) for v in m.group(1).split(",")]


def _parse_3d_array(text: str, name: str, dims: Tuple[int, int, int]) -> List[List[List[float]]]:
    start = text.index(f"static constexpr float {name}")
    if name == "P_th_W":
        end = text.index("static constexpr float COP")
    else:
        end = text.index("static inline int find_interval")
    block = text[start:end]
    nums = re.findall(r"(-?\d+\.\d+f|NAN)", block)
    vals = [math.nan if n == "NAN" else float(n[:-1]) for n in nums]
    it = iter(vals)
    return [[[next(it) for _ in range(dims[2])] for _ in range(dims[1])] for _ in range(dims[0])]


def parse_history_csv(path: Path) -> List[Snapshot]:
    rows: List[Tuple[datetime, str, str]] = []
    with path.open() as handle:
        reader = csv.DictReader(handle)
        for row in reader:
            entity_id = row["entity_id"]
            if entity_id not in TRACKED_ENTITIES:
                continue
            timestamp = datetime.fromisoformat(row["last_changed"].replace("Z", "+00:00"))
            rows.append((timestamp, entity_id, row["state"]))
    rows.sort()

    current: Dict[str, object] = {}
    snapshots: List[Snapshot] = []
    last_key: Optional[Tuple] = None

    for timestamp, entity_id, state in rows:
        key = TRACKED_ENTITIES[entity_id]
        current[key] = _normalize_state(key, state)
        if not _snapshot_ready(current):
            continue
        if current["heating_mode"] != CURVE_MODE_LABEL:
            continue

        snapshot = Snapshot(
            timestamp=timestamp,
            heating_mode=str(current["heating_mode"]),
            control_mode=str(current["control_mode"]),
            curve_phase=str(current["curve_phase"]),
            curve_post=int(current["curve_post"]),
            supply_target=float(current["supply_target"]),
            supply_actual=float(current["supply_actual"]),
            outside_temp=float(current["outside_temp"]),
            flow_lph=float(current["flow_lph"]),
            hp1_level=int(current["hp1_level"]),
            hp2_level=int(current["hp2_level"]),
        )
        dedupe_key = (
            snapshot.heating_mode,
            snapshot.control_mode,
            snapshot.curve_phase,
            snapshot.curve_post,
            round(snapshot.supply_target, 3),
            round(snapshot.supply_actual, 3),
            round(snapshot.outside_temp, 3),
            round(snapshot.flow_lph, 3),
            snapshot.hp1_level,
            snapshot.hp2_level,
        )
        if dedupe_key != last_key:
            snapshots.append(snapshot)
            last_key = dedupe_key
    return snapshots


def _normalize_state(key: str, value: str) -> object:
    if value in {"unknown", "unavailable", ""}:
        return value
    if key in {"curve_post", "hp1_level", "hp2_level"}:
        return int(round(float(value)))
    if key in {"supply_target", "supply_actual", "outside_temp", "flow_lph"}:
        return float(value)
    return value


def _snapshot_ready(current: Dict[str, object]) -> bool:
    required = {
        "heating_mode",
        "control_mode",
        "curve_phase",
        "curve_post",
        "supply_target",
        "supply_actual",
        "outside_temp",
        "flow_lph",
        "hp1_level",
        "hp2_level",
    }
    if not required.issubset(current):
        return False
    for key in required:
        if current[key] in {"unknown", "unavailable", ""}:
            return False
    return True


def build_candidates(snapshot: Snapshot, perf_map: PerfMap, settings: SimSettings) -> List[Candidate]:
    candidates: List[Candidate] = []
    for hp1 in range(0, 11):
        for hp2 in range(0, 11):
            if hp1 > 0 and hp2 > 0 and abs(hp1 - hp2) > settings.max_duo_gap:
                continue
            p1 = perf_map.interp_power_th_w(hp1, snapshot.outside_temp, snapshot.supply_target)
            p2 = perf_map.interp_power_th_w(hp2, snapshot.outside_temp, snapshot.supply_target)
            if math.isnan(p1) or math.isnan(p2):
                continue
            candidates.append(Candidate(hp1_level=hp1, hp2_level=hp2, p_th_w=p1 + p2))
    candidates.sort(key=lambda c: (c.p_th_w, c.active_hp_count, abs(c.hp1_level - c.hp2_level)))
    return candidates


def target_power_fractional(snapshot: Snapshot, candidates: Sequence[Candidate]) -> float:
    if not candidates:
        return 0.0
    max_power = max(c.p_th_w for c in candidates)
    return max(0.0, min(1.0, snapshot.curve_post / 20.0)) * max_power


def build_empirical_target_map(snapshots: Sequence[Snapshot], perf_map: PerfMap) -> Dict[int, float]:
    grouped: Dict[int, List[float]] = {}
    for index in range(1, len(snapshots) - 1):
        snapshot = snapshots[index]
        previous = snapshots[index - 1]
        following = snapshots[index + 1]
        if snapshot.hp1_level != previous.hp1_level or snapshot.hp2_level != previous.hp2_level:
            continue
        if snapshot.hp1_level != following.hp1_level or snapshot.hp2_level != following.hp2_level:
            continue
        p_th_w = perf_map.interp_power_th_w(snapshot.hp1_level, snapshot.outside_temp, snapshot.supply_target)
        p_th_w += perf_map.interp_power_th_w(snapshot.hp2_level, snapshot.outside_temp, snapshot.supply_target)
        if math.isnan(p_th_w):
            continue
        grouped.setdefault(snapshot.curve_post, []).append(p_th_w)

    empirical: Dict[int, float] = {post: _quantile(values, 0.25) for post, values in grouped.items()}
    if 0 not in empirical:
        empirical[0] = 0.0

    available = sorted(empirical)
    for post in range(0, 21):
        if post in empirical:
            continue
        lower = max((x for x in available if x < post), default=None)
        upper = min((x for x in available if x > post), default=None)
        if lower is None and upper is None:
            empirical[post] = 0.0
        elif lower is None:
            empirical[post] = empirical[upper]
        elif upper is None:
            empirical[post] = empirical[lower]
        else:
            weight = (post - lower) / float(upper - lower)
            empirical[post] = empirical[lower] + (empirical[upper] - empirical[lower]) * weight

    monotone: Dict[int, float] = {}
    running = 0.0
    for post in range(0, 21):
        running = max(running, empirical[post])
        monotone[post] = running
    return monotone


def _quantile(values: Sequence[float], q: float) -> float:
    ordered = sorted(values)
    if not ordered:
        return 0.0
    idx = int(round((len(ordered) - 1) * q))
    idx = max(0, min(len(ordered) - 1, idx))
    return ordered[idx]


def target_power_empirical(snapshot: Snapshot, empirical_map: Dict[int, float]) -> float:
    post = max(0, min(20, snapshot.curve_post))
    return empirical_map.get(post, 0.0)


def target_power_flow(snapshot: Snapshot, candidates: Sequence[Candidate], policy: Policy) -> float:
    if not candidates:
        return 0.0
    dt_c = max(0.0, snapshot.supply_target - snapshot.supply_actual)
    flow_kg_s = max(0.0, snapshot.flow_lph) / 3600.0
    target_w = flow_kg_s * 4180.0 * dt_c * policy.flow_gain
    if snapshot.curve_phase == "HEAT":
        target_w *= policy.heat_phase_multiplier
    elif snapshot.curve_phase == "COAST":
        target_w *= policy.coast_phase_multiplier
    max_power = max(c.p_th_w for c in candidates)
    return max(0.0, min(max_power, target_w))


def target_power_for_policy(
    snapshot: Snapshot,
    candidates: Sequence[Candidate],
    empirical_map: Dict[int, float],
    policy: Policy,
) -> float:
    if policy.target_model == "empirical":
        return target_power_empirical(snapshot, empirical_map)
    if policy.target_model == "flow":
        return target_power_flow(snapshot, candidates, policy)
    if policy.target_model == "hybrid_max":
        return max(
            target_power_empirical(snapshot, empirical_map),
            target_power_flow(snapshot, candidates, policy),
        )
    raise ValueError(f"Unsupported target model: {policy.target_model}")


def choose_levelcombination(
    snapshot: Snapshot,
    candidates: Sequence[Candidate],
    target_power_w: float,
    previous: Candidate,
    previous_topology_change: datetime,
    settings: SimSettings,
) -> Candidate:
    current_topology = previous.topology
    elapsed_s = max(0.0, (snapshot.timestamp - previous_topology_change).total_seconds())
    single_candidates = [candidate for candidate in candidates if candidate.topology == "single"]
    duo_candidates = [candidate for candidate in candidates if candidate.topology == "duo"]
    off_candidates = [candidate for candidate in candidates if candidate.topology == "off"]

    best_single = _best_candidate_for_topology(single_candidates, target_power_w, previous, settings)
    best_duo = _best_candidate_for_topology(duo_candidates, target_power_w, previous, settings)
    best_off = _best_candidate_for_topology(off_candidates, target_power_w, previous, settings)

    if target_power_w <= 1.0:
        return best_off or Candidate(0, 0, 0.0)

    single_allowed = best_single is not None
    duo_allowed = best_duo is not None
    if settings.only_allow_duo_in_heat and snapshot.curve_phase != "HEAT":
        duo_allowed = False
    if snapshot.curve_post < settings.duo_enable_min_post:
        duo_allowed = False

    single_err = abs(best_single.p_th_w - target_power_w) if best_single else math.inf
    duo_err = abs(best_duo.p_th_w - target_power_w) if best_duo else math.inf

    if current_topology == "duo":
        if elapsed_s < settings.min_duo_dwell_s:
            return best_duo or best_single or previous
        if snapshot.curve_post <= settings.duo_disable_max_post and single_allowed:
            if single_err <= (duo_err + settings.duo_disable_margin_w):
                return best_single
        return best_duo or best_single or previous

    if current_topology == "single":
        if elapsed_s < settings.min_single_dwell_s:
            return best_single or best_duo or previous
        if duo_allowed and best_single is not None:
            if duo_err + settings.duo_enable_margin_w < single_err:
                return best_duo
        return best_single or best_duo or previous

    if duo_allowed and best_single is not None:
        if duo_err + settings.duo_enable_margin_w < single_err:
            return best_duo
    return best_single or best_duo or previous


def choose_branch_strategy_levelcombination(
    snapshot: Snapshot,
    perf_map: PerfMap,
    previous: Candidate,
    state: BranchState,
    settings: SimSettings,
) -> Tuple[Candidate, BranchState, float]:
    demand_active = snapshot.curve_post > 0
    heat_phase = snapshot.curve_phase == "HEAT" and demand_active
    demand_rundown = snapshot.curve_post <= state.previous_curve_post
    temp_err_c = snapshot.supply_target - snapshot.supply_actual

    prev_hp1_on = previous.hp1_level > 0
    prev_hp2_on = previous.hp2_level > 0
    if not demand_active:
        single_owner = 0
    elif prev_hp1_on != prev_hp2_on:
        single_owner = 1 if prev_hp1_on else 2
    elif state.stored_owner_hp in {1, 2}:
        single_owner = state.stored_owner_hp
    else:
        single_owner = 1 if state.lead_is_hp1 else 2

    hp1_max_single = 10
    hp2_max_single = 10
    owner_max_single = hp1_max_single if single_owner == 1 else hp2_max_single
    owner_cap_w = perf_map.interp_power_th_w(owner_max_single, snapshot.outside_temp, snapshot.supply_target)

    duo_cap_w = 0.0
    best_duo = Candidate(0, 0, 0.0)
    duo_candidates: List[Candidate] = []
    for hp1_level in range(1, hp1_max_single + 1):
        for hp2_level in range(1, hp2_max_single + 1):
            if abs(hp1_level - hp2_level) > settings.max_duo_gap:
                continue
            p_th_w = perf_map.interp_power_th_w(hp1_level, snapshot.outside_temp, snapshot.supply_target)
            p_th_w += perf_map.interp_power_th_w(hp2_level, snapshot.outside_temp, snapshot.supply_target)
            candidate = Candidate(hp1_level=hp1_level, hp2_level=hp2_level, p_th_w=p_th_w)
            duo_candidates.append(candidate)
            duo_cap_w = max(duo_cap_w, p_th_w)

    demand_u = max(0.0, min(1.0, snapshot.curve_post / 20.0))
    target_power_w = (owner_cap_w if heat_phase else duo_cap_w) * demand_u if demand_active else 0.0

    def better_branch_candidate(candidate: Candidate, best: Optional[Candidate]) -> bool:
        if best is None:
            return True
        candidate_error = abs(candidate.p_th_w - target_power_w)
        best_error = abs(best.p_th_w - target_power_w)
        if abs(candidate_error - best_error) > 50.0:
            return candidate_error < best_error
        candidate_starts = int(previous.hp1_level == 0 and candidate.hp1_level > 0) + int(
            previous.hp2_level == 0 and candidate.hp2_level > 0
        )
        best_starts = int(previous.hp1_level == 0 and best.hp1_level > 0) + int(
            previous.hp2_level == 0 and best.hp2_level > 0
        )
        if candidate_starts != best_starts:
            return candidate_starts < best_starts
        candidate_moves = abs(candidate.hp1_level - previous.hp1_level) + abs(candidate.hp2_level - previous.hp2_level)
        best_moves = abs(best.hp1_level - previous.hp1_level) + abs(best.hp2_level - previous.hp2_level)
        if candidate_moves != best_moves:
            return candidate_moves < best_moves
        candidate_active = candidate.active_hp_count
        best_active = best.active_hp_count
        if candidate_active != best_active:
            return candidate_active < best_active
        candidate_gap = abs(candidate.hp1_level - candidate.hp2_level)
        best_gap = abs(best.hp1_level - best.hp2_level)
        if candidate_gap != best_gap:
            return candidate_gap < best_gap
        return candidate.p_th_w < best.p_th_w

    best_single: Optional[Candidate] = None
    if demand_active and single_owner == 1:
        for hp1_level in range(1, hp1_max_single + 1):
            candidate = Candidate(
                hp1_level=hp1_level,
                hp2_level=0,
                p_th_w=perf_map.interp_power_th_w(hp1_level, snapshot.outside_temp, snapshot.supply_target),
            )
            if better_branch_candidate(candidate, best_single):
                best_single = candidate
    elif demand_active and single_owner == 2:
        for hp2_level in range(1, hp2_max_single + 1):
            candidate = Candidate(
                hp1_level=0,
                hp2_level=hp2_level,
                p_th_w=perf_map.interp_power_th_w(hp2_level, snapshot.outside_temp, snapshot.supply_target),
            )
            if better_branch_candidate(candidate, best_single):
                best_single = candidate

    best_duo_opt: Optional[Candidate] = None
    if demand_active:
        for candidate in duo_candidates:
            if better_branch_candidate(candidate, best_duo_opt):
                best_duo_opt = candidate
    if best_duo_opt is not None:
        best_duo = best_duo_opt

    lead_last_start = state.hp1_last_start_ts if state.lead_is_hp1 else state.hp2_last_start_ts
    startup_grace_active = (
        lead_last_start is not None
        and (snapshot.timestamp - lead_last_start).total_seconds() < settings.dual_startup_grace_s
    )
    duo_enable_margin_w = 700.0 if heat_phase else 450.0
    duo_disable_margin_w = 250.0
    duo_enable_min_post = 18 if heat_phase else 16
    duo_disable_max_post = 14 if heat_phase else 11
    single_saturated = best_single is not None and (
        best_single.hp1_level >= max(6, hp1_max_single - 1)
        or best_single.hp2_level >= max(6, hp2_max_single - 1)
    )
    duo_clearly_better = (
        best_single is not None
        and best_duo_opt is not None
        and (abs(best_duo_opt.p_th_w - target_power_w) + duo_enable_margin_w < abs(best_single.p_th_w - target_power_w))
    )
    single_good_enough = (
        best_single is not None
        and (
            best_duo_opt is None
            or abs(best_single.p_th_w - target_power_w) <= abs(best_duo_opt.p_th_w - target_power_w) + duo_disable_margin_w
        )
    )
    emergency_dual_condition = (
        demand_active
        and best_duo_opt is not None
        and heat_phase
        and not startup_grace_active
        and temp_err_c >= settings.dual_emergency_temp_err_c
        and snapshot.curve_post >= 19
    )

    dt_min = max(0.0, (snapshot.timestamp - state.previous_timestamp).total_seconds()) / 60.0
    dual_emergency_accum = state.dual_emergency_hold_min_accum + dt_min if emergency_dual_condition else 0.0
    force_dual_capacity = dual_emergency_accum >= settings.dual_emergency_hold_min
    dual_on_condition = (
        demand_active
        and best_duo_opt is not None
        and not startup_grace_active
        and not demand_rundown
        and (
            force_dual_capacity
            or (
                duo_clearly_better
                and snapshot.curve_post >= duo_enable_min_post
                and (single_saturated if heat_phase else not single_good_enough)
                and temp_err_c >= -0.05
            )
        )
    )
    dual_off_condition = (
        (not demand_active)
        or (best_duo_opt is None)
        or ((not state.dual_enabled) and (not dual_on_condition))
        or (
            single_good_enough
            and snapshot.curve_post <= duo_disable_max_post
            and temp_err_c <= settings.dual_disable_temp_err_max_c
        )
    )

    if not demand_active:
        dual_enabled = False
        dual_enable_accum = 0.0
        dual_disable_accum = 0.0
        dual_emergency_accum = 0.0
    else:
        dual_enable_accum = state.dual_enable_hold_min_accum + dt_min if dual_on_condition else 0.0
        dual_disable_accum = state.dual_disable_hold_min_accum + dt_min if dual_off_condition else 0.0
        dual_enabled = state.dual_enabled
        if (not dual_enabled) and dual_enable_accum >= 3.0:
            dual_enabled = True
            dual_disable_accum = 0.0
        elif dual_enabled and dual_disable_accum >= 5.0:
            dual_enabled = False
            dual_enable_accum = 0.0

    if not demand_active:
        choice = Candidate(0, 0, 0.0)
        stored_owner_hp = 0
    elif dual_enabled and best_duo_opt is not None:
        choice = best_duo_opt
        stored_owner_hp = 0
    else:
        choice = best_single or Candidate(0, 0, 0.0)
        stored_owner_hp = single_owner if choice.active_hp_count == 1 else 0

    hp1_last_start_ts = state.hp1_last_start_ts
    hp2_last_start_ts = state.hp2_last_start_ts
    if previous.hp1_level == 0 and choice.hp1_level > 0:
        hp1_last_start_ts = snapshot.timestamp
    if previous.hp2_level == 0 and choice.hp2_level > 0:
        hp2_last_start_ts = snapshot.timestamp

    new_topology_change = state.previous_topology_change
    if choice.topology != previous.topology:
        new_topology_change = snapshot.timestamp

    new_state = BranchState(
        previous=choice,
        previous_timestamp=snapshot.timestamp,
        previous_curve_post=snapshot.curve_post,
        previous_topology_change=new_topology_change,
        stored_owner_hp=stored_owner_hp,
        dual_enabled=dual_enabled,
        dual_enable_hold_min_accum=dual_enable_accum,
        dual_disable_hold_min_accum=dual_disable_accum,
        dual_emergency_hold_min_accum=dual_emergency_accum,
        hp1_last_start_ts=hp1_last_start_ts,
        hp2_last_start_ts=hp2_last_start_ts,
        lead_is_hp1=state.lead_is_hp1,
    )
    return choice, new_state, target_power_w


def _best_candidate_for_topology(
    candidates: Sequence[Candidate],
    target_power_w: float,
    previous: Candidate,
    settings: SimSettings,
) -> Optional[Candidate]:
    best: Optional[Candidate] = None
    best_score = math.inf
    for candidate in candidates:
        score = abs(candidate.p_th_w - target_power_w)

        starts = int(previous.hp1_level == 0 and candidate.hp1_level > 0) + int(
            previous.hp2_level == 0 and candidate.hp2_level > 0
        )
        stops = int(previous.hp1_level > 0 and candidate.hp1_level == 0) + int(
            previous.hp2_level > 0 and candidate.hp2_level == 0
        )
        score += starts * settings.start_penalty_w
        score += stops * settings.stop_penalty_w
        score += (
            abs(candidate.hp1_level - previous.hp1_level)
            + abs(candidate.hp2_level - previous.hp2_level)
        ) * settings.level_step_penalty_w
        if candidate.active_hp_count == 2:
            score += settings.duo_penalty_w
            score += abs(candidate.hp1_level - candidate.hp2_level) * settings.balance_penalty_w
        if score < best_score:
            best = candidate
            best_score = score
    return best


def count_hp1_starts_stops(levels: Iterable[Tuple[int, int]]) -> Tuple[int, int]:
    starts = 0
    stops = 0
    previous: Optional[int] = None
    for hp1, _ in levels:
        if previous is not None:
            if previous == 0 and hp1 > 0:
                starts += 1
            elif previous > 0 and hp1 == 0:
                stops += 1
        previous = hp1
    return starts, stops


def run_policy(
    snapshots: Sequence[Snapshot],
    perf_map: PerfMap,
    empirical_target_map: Dict[int, float],
    policy: Policy,
) -> SimulationResult:
    simulated: List[Tuple[Snapshot, Candidate, float]] = []
    first = snapshots[0]
    previous = Candidate(first.hp1_level, first.hp2_level, 0.0)
    previous_topology_change = first.timestamp
    branch_state = BranchState(
        previous=previous,
        previous_timestamp=first.timestamp,
        previous_curve_post=first.curve_post,
        previous_topology_change=first.timestamp,
        stored_owner_hp=1 if first.hp1_level > 0 else (2 if first.hp2_level > 0 else 0),
        dual_enabled=previous.topology == "duo",
        dual_enable_hold_min_accum=0.0,
        dual_disable_hold_min_accum=0.0,
        dual_emergency_hold_min_accum=0.0,
        hp1_last_start_ts=first.timestamp if first.hp1_level > 0 else None,
        hp2_last_start_ts=first.timestamp if first.hp2_level > 0 else None,
        lead_is_hp1=(first.hp1_level > 0 and first.hp2_level == 0) or policy.settings.lead_is_hp1_default,
    )

    for snapshot in snapshots:
        candidates = build_candidates(snapshot, perf_map, policy.settings)
        if policy.target_model == "branch_strategy":
            choice, branch_state, target_power = choose_branch_strategy_levelcombination(
                snapshot=snapshot,
                perf_map=perf_map,
                previous=previous,
                state=branch_state,
                settings=policy.settings,
            )
            previous_topology_change = branch_state.previous_topology_change
        else:
            target_power = target_power_for_policy(snapshot, candidates, empirical_target_map, policy)
            choice = choose_levelcombination(
                snapshot=snapshot,
                candidates=candidates,
                target_power_w=target_power,
                previous=previous,
                previous_topology_change=previous_topology_change,
                settings=policy.settings,
            )
            if choice.topology != previous.topology:
                previous_topology_change = snapshot.timestamp
        if math.isnan(target_power):
            target_power = 0.0
        previous = choice
        simulated.append((snapshot, choice, target_power))

    actual_levels = [(s.hp1_level, s.hp2_level) for s in snapshots]
    sim_levels = [(c.hp1_level, c.hp2_level) for _, c, _ in simulated]
    actual_starts, actual_stops = count_hp1_starts_stops(actual_levels)
    sim_starts, sim_stops = count_hp1_starts_stops(sim_levels)
    actual_duo = _count_topology_entries(actual_levels, "duo")
    sim_duo = _count_topology_entries(sim_levels, "duo")

    power_errors: List[float] = []
    differences: List[str] = []
    for snapshot, choice, target_power in simulated:
        actual_power = perf_map.interp_power_th_w(snapshot.hp1_level, snapshot.outside_temp, snapshot.supply_target)
        actual_power += perf_map.interp_power_th_w(snapshot.hp2_level, snapshot.outside_temp, snapshot.supply_target)
        if not math.isnan(choice.p_th_w):
            power_errors.append(abs(choice.p_th_w - target_power))
        if (snapshot.hp1_level, snapshot.hp2_level) != (choice.hp1_level, choice.hp2_level) and len(differences) < 20:
            differences.append(
                f"- {snapshot.timestamp.isoformat()} "
                f"post={snapshot.curve_post:2d} phase={snapshot.curve_phase.lower():8s} "
                f"sp={snapshot.supply_target:5.2f} pv={snapshot.supply_actual:5.2f} "
                f"actual={snapshot.hp1_level}+{snapshot.hp2_level} ({round(actual_power):4d}W) "
                f"sim={choice.hp1_level}+{choice.hp2_level} ({round(choice.p_th_w):4d}W) "
                f"target~{round(target_power):4d}W"
            )

    avg_abs_power_error = sum(power_errors) / len(power_errors) if power_errors else 0.0
    return SimulationResult(
        policy=policy,
        snapshots=len(snapshots),
        start_ts=snapshots[0].timestamp,
        end_ts=snapshots[-1].timestamp,
        actual_hp1_starts=actual_starts,
        actual_hp1_stops=actual_stops,
        sim_hp1_starts=sim_starts,
        sim_hp1_stops=sim_stops,
        actual_duo_entries=actual_duo,
        sim_duo_entries=sim_duo,
        avg_abs_power_error_w=avg_abs_power_error,
        empirical_target_map=empirical_target_map,
        differences=differences,
    )


def build_policies() -> List[Policy]:
    base = SimSettings()
    return [
        Policy(
            name="branch_strategy_dispatch",
            description="Replay the current branch strategy more literally: single-first in HEAT, balanced duo only with held curve-side gating.",
            target_model="branch_strategy",
            settings=replace(
                base,
                min_single_dwell_s=0,
                min_duo_dwell_s=0,
                duo_enable_margin_w=700.0,
                duo_disable_margin_w=250.0,
                duo_enable_min_post=16,
                duo_disable_max_post=11,
                start_penalty_w=1200.0,
                duo_penalty_w=250.0,
                max_duo_gap=1,
                only_allow_duo_in_heat=False,
                lead_is_hp1_default=False,
            ),
        ),
        Policy(
            name="single_first_empirical",
            description="Empirical post_guardrail target, strong single preference, duo only for clear sustained deficits.",
            target_model="empirical",
            settings=replace(
                base,
                min_single_dwell_s=900,
                min_duo_dwell_s=1200,
                duo_enable_margin_w=1400.0,
                duo_disable_margin_w=250.0,
                duo_enable_min_post=17,
                duo_disable_max_post=11,
                start_penalty_w=1400.0,
                duo_penalty_w=350.0,
                max_duo_gap=1,
            ),
        ),
        Policy(
            name="flow_delta_stateful",
            description="Flow*dT target with topology hysteresis; should react more physically to supply error.",
            target_model="flow",
            settings=replace(
                base,
                min_single_dwell_s=900,
                min_duo_dwell_s=900,
                duo_enable_margin_w=1000.0,
                duo_disable_margin_w=300.0,
                duo_enable_min_post=15,
                duo_disable_max_post=10,
                start_penalty_w=1100.0,
                duo_penalty_w=220.0,
                max_duo_gap=1,
            ),
            flow_gain=2.2,
            heat_phase_multiplier=1.0,
            coast_phase_multiplier=0.9,
        ),
        Policy(
            name="hybrid_curve_dispatch",
            description="Max of empirical intent and flow*dT, with conservative duo gating and balanced-duo preference.",
            target_model="hybrid_max",
            settings=replace(
                base,
                min_single_dwell_s=900,
                min_duo_dwell_s=1200,
                duo_enable_margin_w=1250.0,
                duo_disable_margin_w=250.0,
                duo_enable_min_post=16,
                duo_disable_max_post=11,
                start_penalty_w=1250.0,
                duo_penalty_w=260.0,
                max_duo_gap=1,
            ),
            flow_gain=1.8,
            heat_phase_multiplier=1.0,
            coast_phase_multiplier=0.85,
        ),
    ]


def run_simulations(snapshots: Sequence[Snapshot], perf_map: PerfMap) -> List[SimulationResult]:
    if not snapshots:
        raise SystemExit("No usable heating-curve snapshots found in CSV.")
    empirical_target_map = build_empirical_target_map(snapshots, perf_map)
    return [run_policy(snapshots, perf_map, empirical_target_map, policy) for policy in build_policies()]


def print_results(results: Sequence[SimulationResult]) -> None:
    first = results[0]
    print("Heating-curve dispatch replay")
    print(f"- snapshots: {first.snapshots}")
    print(f"- period: {first.start_ts.isoformat()} -> {first.end_ts.isoformat()}")
    print(f"- actual HP1 starts/stops: {first.actual_hp1_starts}/{first.actual_hp1_stops}")
    print(f"- actual duo entries: {first.actual_duo_entries}")
    print("- empirical target power by post_guardrail:")
    print("  " + ", ".join(f"{post}:{round(first.empirical_target_map[post])}" for post in range(0, 21)))
    print()
    print("Policy comparison")
    for result in sorted(results, key=lambda item: (item.sim_hp1_starts, item.sim_duo_entries, item.avg_abs_power_error_w)):
        print(
            f"- {result.policy.name}: HP1 starts/stops {result.sim_hp1_starts}/{result.sim_hp1_stops}, "
            f"duo entries {result.sim_duo_entries}, avg |P_target-P_sim| {round(result.avg_abs_power_error_w)} W"
        )
        print(f"  {result.policy.description}")
    print()
    best = sorted(results, key=lambda item: (item.sim_hp1_starts, item.sim_duo_entries, item.avg_abs_power_error_w))[0]
    print(f"Best current candidate: {best.policy.name}")
    print("First 20 meaningful differences")
    for line in best.differences:
        print(line)


def _count_topology_entries(levels: Sequence[Tuple[int, int]], topology: str) -> int:
    count = 0
    previous = "off"
    for hp1, hp2 in levels:
        current = _topology_for_levels(hp1, hp2)
        if current == topology and previous != topology:
            count += 1
        previous = current
    return count


def _topology_for_levels(hp1: int, hp2: int) -> str:
    active = int(hp1 > 0) + int(hp2 > 0)
    if active == 0:
        return "off"
    if active == 1:
        return "single"
    return "duo"


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("history_csv", type=Path, help="Home Assistant history export CSV")
    parser.add_argument(
        "--perf-map",
        type=Path,
        default=Path("openquatt/includes/hp_perf_map.h"),
        help="Path to hp_perf_map.h",
    )
    parser.add_argument("--min-single-dwell-s", type=int, default=900)
    parser.add_argument("--min-duo-dwell-s", type=int, default=900)
    parser.add_argument("--max-duo-gap", type=int, default=1)
    parser.add_argument(
        "--last-hours",
        type=float,
        default=0.0,
        help="Only simulate the trailing N hours of the export (0 = full file)",
    )
    return parser.parse_args()


def main() -> None:
    args = parse_args()
    perf_map = load_perf_map(args.perf_map)
    snapshots = parse_history_csv(args.history_csv)
    if args.last_hours and snapshots:
        cutoff = snapshots[-1].timestamp - timedelta(hours=args.last_hours)
        snapshots = [snapshot for snapshot in snapshots if snapshot.timestamp >= cutoff]
    results = run_simulations(snapshots, perf_map)
    if args.max_duo_gap != 1 or args.min_single_dwell_s != 900 or args.min_duo_dwell_s != 900:
        print("Note: CLI dwell/max-gap overrides are not yet wired into the named policy presets.")
        print()
    print_results(results)


if __name__ == "__main__":
    main()
