#pragma once

#include <math.h>
#include <stdint.h>

namespace oq_boiler_task {

struct MeasureState {
  int sample_count;
  float sum_w;
  float min_w;
  float max_w;
  float peak_w;
  int plateau_count;
};

struct MeasureResult {
  bool ready;
  float avg_w;
  float confidence;
  float min_w;
  float max_w;
  float spread_w;
};

struct SettleDecision {
  int stable_count;
  bool ready;
};

struct BoilerSettleDecision {
  int stable_count;
  bool ready;
  bool boiler_timeout;
};

struct MeasureDecision {
  MeasureState state;
  bool window_complete;
  MeasureResult result;
};

inline bool flow_valid(float flow_lph) {
  return !isnan(flow_lph) && flow_lph > 0.0f;
}

inline bool flow_on_target(float flow_lph, float target_flow_lph, float band_lph) {
  return flow_valid(flow_lph) && fabsf(flow_lph - target_flow_lph) <= band_lph;
}

inline int next_stable_count(bool stable_now, int stable_count) {
  if (!stable_now) return 0;
  return stable_count + 1;
}

inline SettleDecision evaluate_flow_settle(bool stable_now,
                                           int stable_count,
                                           int required_stable_samples,
                                           uint32_t state_age_ms,
                                           uint32_t settle_min_ms) {
  const int next_count = next_stable_count(stable_now, stable_count);
  return SettleDecision{
      next_count,
      next_count >= required_stable_samples && state_age_ms >= settle_min_ms,
  };
}

inline bool settle_window_ready(int stable_count,
                                int required_stable_samples,
                                uint32_t state_age_ms,
                                uint32_t settle_min_ms) {
  return stable_count >= required_stable_samples && state_age_ms >= settle_min_ms;
}

inline BoilerSettleDecision evaluate_boiler_settle(bool stable_now,
                                                   int stable_count,
                                                   bool boiler_active,
                                                   int required_stable_samples,
                                                   uint32_t state_age_ms,
                                                   uint32_t settle_min_ms) {
  const int next_count = next_stable_count(stable_now, stable_count);
  if (!boiler_active) {
    return BoilerSettleDecision{
        next_count,
        false,
        state_age_ms >= settle_min_ms,
    };
  }
  return BoilerSettleDecision{
      next_count,
      next_count >= required_stable_samples && state_age_ms >= settle_min_ms,
      false,
  };
}

inline MeasureState reset_measurement() {
  return MeasureState{0, 0.0f, NAN, NAN, NAN, 0};
}

inline MeasureState step_measurement(MeasureState state,
                                     bool flow_stable_now,
                                     bool heat_valid,
                                     float heat_w,
                                     float plateau_ratio,
                                     int plateau_confirm_samples) {
  if (!flow_stable_now || !heat_valid || !(heat_w > 0.0f)) {
    return state;
  }

  if (isnan(state.peak_w) || heat_w > state.peak_w) {
    state.peak_w = heat_w;
    state.plateau_count = 0;
  }

  const float plateau_floor = isnan(state.peak_w) ? heat_w : state.peak_w * plateau_ratio;
  if (heat_w >= plateau_floor) {
    if (state.plateau_count < 1000) state.plateau_count++;
  } else {
    state.plateau_count = 0;
  }

  if (state.plateau_count < plateau_confirm_samples) {
    return state;
  }

  state.sample_count++;
  state.sum_w += heat_w;
  if (isnan(state.min_w) || heat_w < state.min_w) state.min_w = heat_w;
  if (isnan(state.max_w) || heat_w > state.max_w) state.max_w = heat_w;
  return state;
}

inline bool measurement_window_complete(int sample_count,
                                        int min_samples,
                                        uint32_t state_age_ms,
                                        uint32_t measure_min_ms) {
  return sample_count >= min_samples && state_age_ms >= measure_min_ms;
}

inline MeasureResult finalize_measurement(const MeasureState &state) {
  if (state.sample_count <= 0 || isnan(state.min_w) || isnan(state.max_w)) {
    return MeasureResult{false, NAN, 0.0f, NAN, NAN, NAN};
  }

  const float sample_count_f = (float) state.sample_count;
  const float avg_w = state.sum_w / sample_count_f;
  const float spread_w = state.max_w - state.min_w;
  float confidence = 100.0f;
  if (sample_count_f < 10.0f) confidence -= (10.0f - sample_count_f) * 4.0f;
  if (spread_w > avg_w * 0.05f) confidence -= 15.0f;
  if (spread_w > avg_w * 0.10f) confidence -= 20.0f;
  if (confidence < 0.0f) confidence = 0.0f;
  if (confidence > 100.0f) confidence = 100.0f;

  return MeasureResult{true, avg_w, confidence, state.min_w, state.max_w, spread_w};
}

inline MeasureDecision evaluate_measure_phase(MeasureState state,
                                              bool flow_stable_now,
                                              bool heat_valid,
                                              float heat_w,
                                              float plateau_ratio,
                                              int plateau_confirm_samples,
                                              int min_samples,
                                              uint32_t state_age_ms,
                                              uint32_t measure_min_ms) {
  const MeasureState next_state = step_measurement(
      state,
      flow_stable_now,
      heat_valid,
      heat_w,
      plateau_ratio,
      plateau_confirm_samples);
  const bool complete = measurement_window_complete(
      next_state.sample_count, min_samples, state_age_ms, measure_min_ms);
  const MeasureResult result = complete ? finalize_measurement(next_state)
                                        : MeasureResult{false, NAN, 0.0f, NAN, NAN, NAN};
  return MeasureDecision{next_state, complete, result};
}

}  // namespace oq_boiler_task
