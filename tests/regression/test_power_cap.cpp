#include <math.h>
#include <stdint.h>
#include <stdio.h>
#include <stdlib.h>

#include "openquatt/includes/oq_supervisory_logic.h"

namespace {

using oq_heat::DualHoldResult;
using oq_heat::DualHoldState;
using oq_supervisory::FrostConfig;
using oq_supervisory::PowerCapConfig;
using oq_supervisory::PowerCapState;

PowerCapConfig default_config() {
  return PowerCapConfig{
      .dt_s = 5,
      .p_soft_w = 3400.0f,
      .p_peak_w = 3650.0f,
      .p_recover_w = 3300.0f,
      .peak_trip_s = 15,
      .soft_trip_s = 300,
      .recover_s = 60,
      .cap_max_f = 20,
      .cap_nan_f = 16,
  };
}

void expect_state(const char *name, const PowerCapState &actual, const PowerCapState &expected) {
  const bool ok = actual.cap_f == expected.cap_f &&
                  actual.over_soft_s == expected.over_soft_s &&
                  actual.over_peak_s == expected.over_peak_s &&
                  actual.under_ok_s == expected.under_ok_s;
  if (!ok) {
    fprintf(stderr,
            "FAILED: %s expected={cap=%d,soft=%d,peak=%d,under=%d} actual={cap=%d,soft=%d,peak=%d,under=%d}\n",
            name,
            expected.cap_f, expected.over_soft_s, expected.over_peak_s, expected.under_ok_s,
            actual.cap_f, actual.over_soft_s, actual.over_peak_s, actual.under_ok_s);
    exit(1);
  }
}

void expect_bool(const char *name, bool actual, bool expected) {
  if (actual != expected) {
    fprintf(stderr, "FAILED: %s expected=%s actual=%s\n", name, expected ? "true" : "false", actual ? "true" : "false");
    exit(1);
  }
}

void expect_dual_hold(const char *name,
                      const DualHoldResult &actual,
                      bool enabled,
                      float enable_elapsed_accum_min,
                      float disable_elapsed_accum_min,
                      int enable_elapsed_min,
                      int disable_elapsed_min) {
  const float tol = 1e-6f;
  const bool ok = actual.state.enabled == enabled &&
                  fabsf(actual.state.enable_elapsed_accum_min - enable_elapsed_accum_min) <= tol &&
                  fabsf(actual.state.disable_elapsed_accum_min - disable_elapsed_accum_min) <= tol &&
                  actual.enable_elapsed_min == enable_elapsed_min &&
                  actual.disable_elapsed_min == disable_elapsed_min;
  if (!ok) {
    fprintf(stderr,
            "FAILED: %s expected={enabled=%d,on=%.3f,off=%.3f,on_min=%d,off_min=%d} "
            "actual={enabled=%d,on=%.3f,off=%.3f,on_min=%d,off_min=%d}\n",
            name,
            enabled ? 1 : 0, enable_elapsed_accum_min, disable_elapsed_accum_min, enable_elapsed_min, disable_elapsed_min,
            actual.state.enabled ? 1 : 0, actual.state.enable_elapsed_accum_min, actual.state.disable_elapsed_accum_min,
            actual.enable_elapsed_min, actual.disable_elapsed_min);
    exit(1);
  }
}

void test_nan_fail_safe() {
  const auto cfg = default_config();
  PowerCapState state{.cap_f = 20, .over_soft_s = 35, .over_peak_s = 20, .under_ok_s = 15};
  state = oq_supervisory::step_power_cap(state, NAN, cfg);
  expect_state("nan_fail_safe", state, PowerCapState{.cap_f = 16, .over_soft_s = 0, .over_peak_s = 0, .under_ok_s = 0});
}

void test_peak_trip() {
  const auto cfg = default_config();
  PowerCapState state{.cap_f = 20, .over_soft_s = 0, .over_peak_s = 0, .under_ok_s = 0};
  state = oq_supervisory::step_power_cap(state, 3700.0f, cfg);
  expect_state("peak_step_1", state, PowerCapState{.cap_f = 20, .over_soft_s = 5, .over_peak_s = 5, .under_ok_s = 0});
  state = oq_supervisory::step_power_cap(state, 3700.0f, cfg);
  expect_state("peak_step_2", state, PowerCapState{.cap_f = 20, .over_soft_s = 10, .over_peak_s = 10, .under_ok_s = 0});
  state = oq_supervisory::step_power_cap(state, 3700.0f, cfg);
  expect_state("peak_step_3_trip", state, PowerCapState{.cap_f = 18, .over_soft_s = 0, .over_peak_s = 0, .under_ok_s = 0});
}

void test_soft_trip() {
  const auto cfg = default_config();
  PowerCapState state{.cap_f = 20, .over_soft_s = 0, .over_peak_s = 0, .under_ok_s = 0};
  for (int i = 0; i < 59; ++i) {
    state = oq_supervisory::step_power_cap(state, 3500.0f, cfg);
  }
  expect_state("soft_before_trip", state, PowerCapState{.cap_f = 20, .over_soft_s = 295, .over_peak_s = 0, .under_ok_s = 0});
  state = oq_supervisory::step_power_cap(state, 3500.0f, cfg);
  expect_state("soft_trip", state, PowerCapState{.cap_f = 19, .over_soft_s = 0, .over_peak_s = 0, .under_ok_s = 0});
}

void test_recovery() {
  const auto cfg = default_config();
  PowerCapState state{.cap_f = 15, .over_soft_s = 0, .over_peak_s = 0, .under_ok_s = 55};
  state = oq_supervisory::step_power_cap(state, 3200.0f, cfg);
  expect_state("recovery_increment", state, PowerCapState{.cap_f = 16, .over_soft_s = 0, .over_peak_s = 0, .under_ok_s = 0});
}

void test_clamps() {
  const auto cfg = default_config();
  PowerCapState low{.cap_f = 0, .over_soft_s = 10, .over_peak_s = 10, .under_ok_s = 0};
  low = oq_supervisory::step_power_cap(low, 3700.0f, cfg);
  expect_state("clamp_low", low, PowerCapState{.cap_f = 0, .over_soft_s = 0, .over_peak_s = 0, .under_ok_s = 0});

  PowerCapState high{.cap_f = 20, .over_soft_s = 0, .over_peak_s = 0, .under_ok_s = 55};
  high = oq_supervisory::step_power_cap(high, 3000.0f, cfg);
  expect_state("clamp_high", high, PowerCapState{.cap_f = 20, .over_soft_s = 0, .over_peak_s = 0, .under_ok_s = 0});
}

void test_frost_logic() {
  const FrostConfig cfg{.on_c = 5.0f, .off_c = 6.0f};

  expect_bool("frost_heating_req_blocks",
              oq_supervisory::compute_frost(true, -20.0f, false, false, cfg),
              false);

  expect_bool("frost_nan_grace_active",
              oq_supervisory::compute_frost(false, NAN, false, true, cfg),
              false);
  expect_bool("frost_nan_grace_expired",
              oq_supervisory::compute_frost(false, NAN, false, false, cfg),
              true);

  expect_bool("frost_on_threshold",
              oq_supervisory::compute_frost(false, 4.9f, false, false, cfg),
              true);
  expect_bool("frost_on_boundary",
              oq_supervisory::compute_frost(false, 5.0f, false, false, cfg),
              false);

  expect_bool("frost_off_threshold_prev_true",
              oq_supervisory::compute_frost(false, 5.9f, true, false, cfg),
              true);
  expect_bool("frost_off_boundary_prev_true",
              oq_supervisory::compute_frost(false, 6.0f, true, false, cfg),
              false);
}

void test_dual_hold_enable_disable() {
  DualHoldState state{.enabled = false, .enable_elapsed_accum_min = 0.0f, .disable_elapsed_accum_min = 0.0f};

  auto res = oq_heat::step_dual_hold(state, false, true, false, 30.0f, 2, 1);
  expect_dual_hold("dual_enable_step_1", res, false, 0.5f, 0.0f, 0, 0);
  state = res.state;

  res = oq_heat::step_dual_hold(state, false, true, false, 30.0f, 2, 1);
  expect_dual_hold("dual_enable_step_2", res, false, 1.0f, 0.0f, 1, 0);
  state = res.state;

  res = oq_heat::step_dual_hold(state, false, true, false, 30.0f, 2, 1);
  expect_dual_hold("dual_enable_step_3", res, false, 1.5f, 0.0f, 1, 0);
  state = res.state;

  res = oq_heat::step_dual_hold(state, false, true, false, 30.0f, 2, 1);
  expect_dual_hold("dual_enable_step_4_trip", res, true, 2.0f, 0.0f, 2, 0);
  state = res.state;

  res = oq_heat::step_dual_hold(state, false, false, true, 30.0f, 2, 1);
  expect_dual_hold("dual_disable_step_1", res, true, 0.0f, 0.5f, 0, 0);
  state = res.state;

  res = oq_heat::step_dual_hold(state, false, false, true, 30.0f, 2, 1);
  expect_dual_hold("dual_disable_step_2_trip", res, false, 0.0f, 1.0f, 0, 1);
}

void test_dual_hold_reset_and_clamp() {
  DualHoldState state{.enabled = true, .enable_elapsed_accum_min = 1.25f, .disable_elapsed_accum_min = 0.25f};
  auto res = oq_heat::step_dual_hold(state, true, true, true, 30.0f, 2, 2);
  expect_dual_hold("dual_reset", res, false, 0.0f, 0.0f, 0, 0);

  state = DualHoldState{.enabled = false, .enable_elapsed_accum_min = 0.0f, .disable_elapsed_accum_min = 0.0f};
  res = oq_heat::step_dual_hold(state, false, true, false, 60.0f, 0, 0);
  expect_dual_hold("dual_clamp_hold_min", res, true, 1.0f, 0.0f, 1, 0);
}

}  // namespace

int main() {
  test_nan_fail_safe();
  test_peak_trip();
  test_soft_trip();
  test_recovery();
  test_clamps();
  test_frost_logic();
  test_dual_hold_enable_disable();
  test_dual_hold_reset_and_clamp();
  printf("Control-logic regression tests passed.\n");
  return 0;
}
