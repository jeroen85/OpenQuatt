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

int randi(int min_v, int max_v) {
  if (max_v <= min_v) return min_v;
  const int span = max_v - min_v + 1;
  return min_v + (rand() % span);
}

float randf(float min_v, float max_v) {
  const float u = ((float) rand()) / ((float) RAND_MAX);
  return min_v + (max_v - min_v) * u;
}

bool randb() {
  return (rand() & 1) != 0;
}

PowerCapState ref_step_power_cap(PowerCapState state, float power_w, const PowerCapConfig &cfg) {
  if (isnan(power_w)) {
    state.cap_f = cfg.cap_nan_f;
    state.over_soft_s = 0;
    state.over_peak_s = 0;
    state.under_ok_s = 0;
    return state;
  }

  if (power_w > cfg.p_peak_w) state.over_peak_s += cfg.dt_s;
  else state.over_peak_s = 0;

  if (power_w > cfg.p_soft_w) state.over_soft_s += cfg.dt_s;
  else state.over_soft_s = 0;

  if (power_w < cfg.p_recover_w) state.under_ok_s += cfg.dt_s;
  else state.under_ok_s = 0;

  if (state.over_peak_s >= cfg.peak_trip_s) {
    if (state.cap_f > 0) state.cap_f -= 2;
    state.over_peak_s = 0;
    state.over_soft_s = 0;
    state.under_ok_s = 0;
  } else if (state.over_soft_s >= cfg.soft_trip_s) {
    if (state.cap_f > 0) state.cap_f -= 1;
    state.over_soft_s = 0;
    state.under_ok_s = 0;
  }

  if (state.under_ok_s >= cfg.recover_s) {
    if (state.cap_f < cfg.cap_max_f) state.cap_f += 1;
    state.under_ok_s = 0;
  }

  if (state.cap_f < 0) state.cap_f = 0;
  if (state.cap_f > cfg.cap_max_f) state.cap_f = cfg.cap_max_f;
  return state;
}

bool ref_compute_frost(bool heating_req, float outside_c, bool prev_frost, bool frost_nan_grace_active, const FrostConfig &cfg) {
  if (heating_req) return false;
  if (isnan(outside_c)) return !frost_nan_grace_active;
  if (prev_frost) return outside_c < cfg.off_c;
  return outside_c < cfg.on_c;
}

DualHoldResult ref_step_dual_hold(DualHoldState state,
                                  bool reset,
                                  bool enable_condition,
                                  bool disable_condition,
                                  float dt_s,
                                  int enable_hold_min,
                                  int disable_hold_min) {
  if (enable_hold_min < 1) enable_hold_min = 1;
  if (disable_hold_min < 1) disable_hold_min = 1;

  if (reset) {
    state.enabled = false;
    state.enable_elapsed_accum_min = 0.0f;
    state.disable_elapsed_accum_min = 0.0f;
  } else {
    if (enable_condition) state.enable_elapsed_accum_min += dt_s / 60.0f;
    else state.enable_elapsed_accum_min = 0.0f;

    if (disable_condition) state.disable_elapsed_accum_min += dt_s / 60.0f;
    else state.disable_elapsed_accum_min = 0.0f;

    if (!state.enabled && state.enable_elapsed_accum_min >= (float) enable_hold_min) {
      state.enabled = true;
      state.disable_elapsed_accum_min = 0.0f;
    } else if (state.enabled && state.disable_elapsed_accum_min >= (float) disable_hold_min) {
      state.enabled = false;
      state.enable_elapsed_accum_min = 0.0f;
    }
  }

  return DualHoldResult{
      .state = state,
      .enable_elapsed_min = (int) floorf(state.enable_elapsed_accum_min + 1e-3f),
      .disable_elapsed_min = (int) floorf(state.disable_elapsed_accum_min + 1e-3f),
  };
}

void fail_power_cap(int i, const PowerCapState &ref, const PowerCapState &cur) {
  fprintf(stderr,
          "FAILED power-cap equivalence at iter=%d ref={cap=%d,soft=%d,peak=%d,under=%d} cur={cap=%d,soft=%d,peak=%d,under=%d}\n",
          i,
          ref.cap_f, ref.over_soft_s, ref.over_peak_s, ref.under_ok_s,
          cur.cap_f, cur.over_soft_s, cur.over_peak_s, cur.under_ok_s);
  exit(1);
}

void fail_dual_hold(int i, const DualHoldResult &ref, const DualHoldResult &cur) {
  fprintf(stderr,
          "FAILED dual-hold equivalence at iter=%d ref={en=%d,a_on=%.4f,a_off=%.4f,on=%d,off=%d} "
          "cur={en=%d,a_on=%.4f,a_off=%.4f,on=%d,off=%d}\n",
          i,
          ref.state.enabled ? 1 : 0,
          ref.state.enable_elapsed_accum_min,
          ref.state.disable_elapsed_accum_min,
          ref.enable_elapsed_min,
          ref.disable_elapsed_min,
          cur.state.enabled ? 1 : 0,
          cur.state.enable_elapsed_accum_min,
          cur.state.disable_elapsed_accum_min,
          cur.enable_elapsed_min,
          cur.disable_elapsed_min);
  exit(1);
}

void test_power_cap_equivalence() {
  srand(42);

  const PowerCapConfig cfg{
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

  for (int i = 0; i < 10000; ++i) {
    PowerCapState s{
        .cap_f = randi(0, 20),
        .over_soft_s = randi(0, 600),
        .over_peak_s = randi(0, 600),
        .under_ok_s = randi(0, 600),
    };
    const float power_w = (randf(0.0f, 1.0f) < 0.05f) ? NAN : randf(0.0f, 5000.0f);

    const auto ref = ref_step_power_cap(s, power_w, cfg);
    const auto cur = oq_supervisory::step_power_cap(s, power_w, cfg);
    if (ref.cap_f != cur.cap_f ||
        ref.over_soft_s != cur.over_soft_s ||
        ref.over_peak_s != cur.over_peak_s ||
        ref.under_ok_s != cur.under_ok_s) {
      fail_power_cap(i, ref, cur);
    }
  }
}

void test_frost_equivalence() {
  srand(1337);

  const FrostConfig cfg{.on_c = 5.0f, .off_c = 6.0f};

  for (int i = 0; i < 10000; ++i) {
    const bool heating_req = randb();
    const bool prev_frost = randb();
    const bool frost_nan_grace_active = randb();
    const float outside_c = (randf(0.0f, 1.0f) < 0.1f) ? NAN : randf(-30.0f, 25.0f);

    const bool ref = ref_compute_frost(heating_req, outside_c, prev_frost, frost_nan_grace_active, cfg);
    const bool cur = oq_supervisory::compute_frost(heating_req, outside_c, prev_frost, frost_nan_grace_active, cfg);
    if (ref != cur) {
      fprintf(stderr, "FAILED frost equivalence at iter=%d\n", i);
      exit(1);
    }
  }
}

void test_dual_hold_equivalence() {
  srand(7);

  for (int i = 0; i < 10000; ++i) {
    DualHoldState s{
        .enabled = randb(),
        .enable_elapsed_accum_min = randf(0.0f, 10.0f),
        .disable_elapsed_accum_min = randf(0.0f, 10.0f),
    };
    const bool reset = randb();
    const bool enable_condition = randb();
    const bool disable_condition = randb();
    const float dt_s = randf(1.0f, 90.0f);
    const int enable_hold_min = randi(0, 10);
    const int disable_hold_min = randi(0, 10);

    const auto ref = ref_step_dual_hold(
        s, reset, enable_condition, disable_condition, dt_s, enable_hold_min, disable_hold_min);
    const auto cur = oq_heat::step_dual_hold(
        s, reset, enable_condition, disable_condition, dt_s, enable_hold_min, disable_hold_min);

    const float tol = 1e-6f;
    const bool equal =
        (ref.state.enabled == cur.state.enabled) &&
        fabsf(ref.state.enable_elapsed_accum_min - cur.state.enable_elapsed_accum_min) <= tol &&
        fabsf(ref.state.disable_elapsed_accum_min - cur.state.disable_elapsed_accum_min) <= tol &&
        (ref.enable_elapsed_min == cur.enable_elapsed_min) &&
        (ref.disable_elapsed_min == cur.disable_elapsed_min);

    if (!equal) fail_dual_hold(i, ref, cur);
  }
}

}  // namespace

int main() {
  test_power_cap_equivalence();
  test_frost_equivalence();
  test_dual_hold_equivalence();
  printf("Supervisory equivalence regression passed.\n");
  return 0;
}
