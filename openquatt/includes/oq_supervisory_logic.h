#pragma once

#include <math.h>

namespace oq_supervisory {

struct PowerCapState {
  int cap_f;
  int over_soft_s;
  int over_peak_s;
  int under_ok_s;
};

struct PowerCapConfig {
  int dt_s;
  float p_soft_w;
  float p_peak_w;
  float p_recover_w;
  int peak_trip_s;
  int soft_trip_s;
  int recover_s;
  int cap_max_f;
  int cap_nan_f;
};

struct FrostConfig {
  float on_c;
  float off_c;
};

inline PowerCapState step_power_cap(PowerCapState state, float power_w, const PowerCapConfig &cfg) {
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

inline bool compute_frost(bool heating_req, float outside_c, bool prev_frost, bool frost_nan_grace_active, const FrostConfig &cfg) {
  if (heating_req) return false;
  if (isnan(outside_c)) return !frost_nan_grace_active;
  if (prev_frost) return outside_c < cfg.off_c;
  return outside_c < cfg.on_c;
}

}  // namespace oq_supervisory

namespace oq_heat {

struct DualHoldState {
  bool enabled;
  float enable_elapsed_accum_min;
  float disable_elapsed_accum_min;
};

struct DualHoldResult {
  DualHoldState state;
  int enable_elapsed_min;
  int disable_elapsed_min;
};

inline DualHoldResult step_dual_hold(DualHoldState state,
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

}  // namespace oq_heat
