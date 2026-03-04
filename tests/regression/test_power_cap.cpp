#include <math.h>
#include <stdint.h>
#include <stdio.h>
#include <stdlib.h>

#include "openquatt/includes/oq_supervisory_logic.h"

namespace {

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

}  // namespace

int main() {
  test_nan_fail_safe();
  test_peak_trip();
  test_soft_trip();
  test_recovery();
  test_clamps();
  printf("Power-cap regression tests passed.\n");
  return 0;
}
