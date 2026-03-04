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

}  // namespace oq_supervisory
