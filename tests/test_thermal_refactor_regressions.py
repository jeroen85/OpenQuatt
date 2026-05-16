#!/usr/bin/env python3
from __future__ import annotations

import importlib.util
import sys
import unittest
from pathlib import Path


def _load_simulation_module():
    root_dir = Path(__file__).resolve().parents[1]
    script_path = root_dir / "scripts" / "simulate_thermal_refactor_regressions.py"
    spec = importlib.util.spec_from_file_location("thermal_refactor_simulation", script_path)
    if spec is None or spec.loader is None:
        raise RuntimeError(f"Unable to load simulation module from {script_path}")
    module = importlib.util.module_from_spec(spec)
    sys.modules[spec.name] = module
    spec.loader.exec_module(module)
    return module


SIM = _load_simulation_module()


class ThermalRefactorRegressionTests(unittest.TestCase):
    def test_all_scenarios_pass(self):
        results = SIM.run_scenarios()
        failed = [result for result in results if not result.passed]
        self.assertFalse(
            failed,
            "\n".join(f"{result.name}: {result.details}" for result in failed),
        )

    def test_scenario_coverage_floor(self):
        results = SIM.run_scenarios()
        self.assertGreaterEqual(
            len(results),
            120,
            "Regression scenario count unexpectedly dropped below the current coverage floor.",
        )


if __name__ == "__main__":
    unittest.main()
