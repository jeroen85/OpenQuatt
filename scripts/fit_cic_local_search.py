#!/usr/bin/env python3
"""Local parameter search around an existing best fit."""

from __future__ import annotations

import argparse
import json
import random
from dataclasses import asdict
from pathlib import Path

from replay_cic_simulation import SimConfig, ShadowSimulator, load_events_from_csv


def fit_score(summary: dict) -> float:
    mae = summary.get("total_level_mae")
    bias = summary.get("total_level_mean_signed_error_sim_minus_obs")
    pair_ratio = summary.get("hp_pair_exact_match_ratio")
    if mae is None:
        return 1e9
    if bias is None:
        bias = 0.0
    if pair_ratio is None:
        pair_ratio = 0.0
    pair_mismatch = 1.0 - float(pair_ratio)
    return float(mae) + 0.15 * abs(float(bias)) + 0.6 * pair_mismatch


def clamp(v: float, lo: float, hi: float) -> float:
    return max(lo, min(hi, v))


def eval_cfg(events, cfg: SimConfig, input_csv: Path) -> dict:
    sim = ShadowSimulator(cfg)
    sim.set_events(events)
    sim.run()
    summary = sim.build_summary(input_csv)
    summary["fit_score"] = fit_score(summary)
    return summary


def main() -> None:
    parser = argparse.ArgumentParser(description="Local search around previous best parameters.")
    parser.add_argument("--input", required=True, type=Path)
    parser.add_argument("--base-fit", required=True, type=Path, help="fit_results.json to use as center point.")
    parser.add_argument("--out", type=Path, default=Path("output/sim/fit_local_search.json"))
    parser.add_argument("--samples", type=int, default=30)
    parser.add_argument("--seed", type=int, default=123)
    args = parser.parse_args()

    random.seed(args.seed)
    events = load_events_from_csv(args.input)
    base = json.loads(args.base_fit.read_text(encoding="utf-8"))
    bcfg = base["best"]["config"]

    center = SimConfig(
        gate_by_thermostat_heating=bool(bcfg["gate_by_thermostat_heating"]),
        collect_rows=False,
        house_rated_power_w=float(bcfg["house_rated_power_w"]),
        ph_kp_w_per_k=float(bcfg["ph_kp_w_per_k"]),
        ph_deadband_k=float(bcfg["ph_deadband_k"]),
        ph_ramp_up_w_per_min=float(bcfg["ph_ramp_up_w_per_min"]),
        ph_ramp_down_w_per_min=float(bcfg["ph_ramp_down_w_per_min"]),
    )

    candidates = [center]
    for _ in range(args.samples):
        candidates.append(
            SimConfig(
                gate_by_thermostat_heating=center.gate_by_thermostat_heating if random.random() < 0.8 else (not center.gate_by_thermostat_heating),
                collect_rows=False,
                house_rated_power_w=clamp(center.house_rated_power_w * random.uniform(0.90, 1.10), 3500.0, 11000.0),
                ph_kp_w_per_k=clamp(center.ph_kp_w_per_k * random.uniform(0.75, 1.30), 100.0, 3500.0),
                ph_deadband_k=clamp(center.ph_deadband_k + random.uniform(-0.05, 0.05), 0.0, 0.6),
                ph_ramp_up_w_per_min=clamp(center.ph_ramp_up_w_per_min * random.uniform(0.70, 1.35), 50.0, 3000.0),
                ph_ramp_down_w_per_min=clamp(center.ph_ramp_down_w_per_min * random.uniform(0.70, 1.35), 50.0, 4000.0),
            )
        )

    results = []
    for idx, cfg in enumerate(candidates, 1):
        summary = eval_cfg(events, cfg, args.input)
        results.append({"candidate": idx, "config": asdict(cfg), "summary": summary})
        print(
            f"[{idx}/{len(candidates)}] "
            f"score={summary['fit_score']:.4f} "
            f"mae={summary.get('total_level_mae'):.4f} "
            f"bias={summary.get('total_level_mean_signed_error_sim_minus_obs'):.4f}"
        )

    results.sort(key=lambda x: x["summary"]["fit_score"])
    report = {
        "input_csv": str(args.input),
        "base_fit": str(args.base_fit),
        "samples": len(candidates),
        "best": results[0],
        "top5": results[:5],
    }
    args.out.parent.mkdir(parents=True, exist_ok=True)
    args.out.write_text(json.dumps(report, indent=2), encoding="utf-8")
    print(f"written: {args.out}")
    print(json.dumps(results[0], indent=2))


if __name__ == "__main__":
    main()
