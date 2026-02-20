#!/usr/bin/env python3
"""Parameter fitting for OpenQuatt shadow replay on CiC CSV."""

from __future__ import annotations

import argparse
import json
import random
from dataclasses import asdict
from pathlib import Path

from replay_cic_simulation import SimConfig, ShadowSimulator, load_events_from_csv


def score(summary: dict) -> float:
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


def evaluate(events, cfg: SimConfig, input_csv: Path) -> dict:
    sim = ShadowSimulator(cfg)
    sim.set_events(events)
    sim.run()
    summary = sim.build_summary(input_csv)
    summary["fit_score"] = score(summary)
    return summary


def main() -> None:
    parser = argparse.ArgumentParser(description="Fit key Power House parameters against observed compressor levels.")
    parser.add_argument("--input", required=True, type=Path)
    parser.add_argument("--out", type=Path, default=Path("output/sim/fit_results.json"))
    parser.add_argument("--seed", type=int, default=42)
    parser.add_argument("--samples", type=int, default=20)
    args = parser.parse_args()

    random.seed(args.seed)
    events = load_events_from_csv(args.input)

    candidates: list[SimConfig] = []
    candidates.append(SimConfig(gate_by_thermostat_heating=False, collect_rows=False))
    candidates.append(SimConfig(gate_by_thermostat_heating=True, collect_rows=False))

    for _ in range(args.samples):
        candidates.append(
            SimConfig(
                gate_by_thermostat_heating=random.choice([False, True]),
                collect_rows=False,
                house_rated_power_w=random.uniform(4500.0, 9500.0),
                ph_kp_w_per_k=random.uniform(300.0, 2500.0),
                ph_deadband_k=random.uniform(0.0, 0.40),
                ph_ramp_up_w_per_min=random.uniform(100.0, 1400.0),
                ph_ramp_down_w_per_min=random.uniform(200.0, 2200.0),
            )
        )

    results = []
    for idx, cfg in enumerate(candidates, 1):
        summary = evaluate(events, cfg, args.input)
        results.append({"candidate": idx, "config": asdict(cfg), "summary": summary})
        print(
            f"[{idx}/{len(candidates)}] "
            f"score={summary['fit_score']:.4f} "
            f"mae={summary.get('total_level_mae')} "
            f"bias={summary.get('total_level_mean_signed_error_sim_minus_obs')}"
        )

    results.sort(key=lambda r: r["summary"]["fit_score"])
    best = results[0]
    report = {
        "input_csv": str(args.input),
        "samples": len(candidates),
        "best": best,
        "top5": results[:5],
    }
    args.out.parent.mkdir(parents=True, exist_ok=True)
    args.out.write_text(json.dumps(report, indent=2), encoding="utf-8")
    print(f"written: {args.out}")
    print(json.dumps(best, indent=2))


if __name__ == "__main__":
    main()
