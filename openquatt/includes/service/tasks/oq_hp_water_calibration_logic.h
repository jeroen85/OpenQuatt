#pragma once

#include <math.h>
#include <stdint.h>
#include <stdio.h>
#include <string>

#include "../oq_service_runtime.h"

namespace oq_hp_water_calibration {

static constexpr int TASK_HP_WATER_CALIBRATION = oq_commissioning::TASK_HP_WATER_CALIBRATION;

static constexpr int STATE_IDLE = oq_commissioning::TASK_STATE_IDLE;
static constexpr int STATE_FLOW_SETTLE = oq_commissioning::TASK_STATE_FLOW_SETTLE;
static constexpr int STATE_MEASURE = oq_commissioning::TASK_STATE_MEASURE;
static constexpr int STATE_DONE = oq_commissioning::TASK_STATE_DONE;
static constexpr int STATE_ABORT = oq_commissioning::TASK_STATE_ABORT;
static constexpr int STATE_FAILED = oq_commissioning::TASK_STATE_FAILED;

enum PhaseCode {
  PHASE_IDLE = 0,
  PHASE_MIXING = 1,
  PHASE_MEASURING = 2,
  PHASE_DONE = 3,
};

struct RuntimeConfig {
  int sample_time_s;
  int mixing_s;
  int measure_s;
  int no_flow_fail_s;
  int target_ipwm;
  int pwm_min;
  int pwm_max;
  float min_flow_lph;
  float stable_spread_c;
  float max_offset_c;
};

inline RuntimeConfig make_runtime_config(int sample_time_s) {
  return RuntimeConfig{
      sample_time_s,
      300,
      120,
      120,
      650,
      50,
      850,
      20.0f,
      0.20f,
      2.0f};
}

inline int clamp_ipwm(int value, int min_ipwm, int max_ipwm) {
  if (value < min_ipwm) return min_ipwm;
  if (value > max_ipwm) return max_ipwm;
  return value;
}

class HpWaterCalibrationRuntime {
 public:
  void reset() {
    phase_ = PHASE_IDLE;
    last_status_.clear();
    sample_count_ = 0;
    sum_hp1_in_ = 0.0f;
    sum_hp1_out_ = 0.0f;
    sum_hp2_in_ = 0.0f;
    sum_hp2_out_ = 0.0f;
    id(oq_hp_water_calibration_active) = false;
    id(oq_hp_water_calibration_abort) = false;
    id(oq_hp_water_calibration_phase) = PHASE_IDLE;
    id(oq_hp_water_calibration_target_ipwm) = 1000;
    id(oq_hp_water_calibration_started_ms) = 0;
    id(oq_hp_water_calibration_remaining_s) = 0;
    id(oq_hp_water_calibration_spread_c) = NAN;
    id(oq_hp_water_calibration_supply_delta_c) = NAN;
  }

  void start(const RuntimeConfig &cfg, uint32_t now_ms) {
    const bool task_running = oq_commissioning::task_running(
        id(oq_commissioning_active), id(oq_commissioning_task_code));

    if (id(oq_hp_water_calibration_active) || task_running || id(oq_commissioning_request_pending)) {
      publish("REFUSED: BUSY");
      return;
    }
    if (!oq_commissioning::is_cm100(id(oq_control_mode_code))) {
      publish("REFUSED: CM100 required");
      return;
    }
    if (id(oq_water_temp_hard_trip_active)) {
      publish("REFUSED: water temperature hard trip");
      return;
    }
    if (id(boiler_active).state) {
      publish("REFUSED: boiler active");
      return;
    }
    if (!heat_pumps_idle()) {
      publish("REFUSED: heat pump active");
      return;
    }

    ESP_LOGI("quatt.cm100.hpcal",
             "HP water sensor calibration requested (mix=%ds measure=%ds iPWM=%d spread<=%.2fC max_offset=%.2fC)",
             cfg.mixing_s, cfg.measure_s, cfg.target_ipwm, cfg.stable_spread_c, cfg.max_offset_c);

    sample_count_ = 0;
    sum_hp1_in_ = 0.0f;
    sum_hp1_out_ = 0.0f;
    sum_hp2_in_ = 0.0f;
    sum_hp2_out_ = 0.0f;

    id(oq_commissioning_task_code) = TASK_HP_WATER_CALIBRATION;
    id(oq_commissioning_request_pending) = false;
    id(oq_commissioning_active) = true;
    id(oq_commissioning_abort_requested) = false;
    id(oq_commissioning_state_code) = STATE_FLOW_SETTLE;
    id(oq_commissioning_started_ms) = now_ms;
    id(oq_commissioning_state_since_ms) = now_ms;

    id(oq_hp_water_calibration_active) = true;
    id(oq_hp_water_calibration_abort) = false;
    id(oq_hp_water_calibration_phase) = PHASE_MIXING;
    id(oq_hp_water_calibration_target_ipwm) = clamp_ipwm(cfg.target_ipwm, cfg.pwm_min, cfg.pwm_max);
    id(oq_hp_water_calibration_started_ms) = now_ms;
    id(oq_hp_water_calibration_remaining_s) = cfg.mixing_s + cfg.measure_s;
    id(oq_hp_water_calibration_spread_c) = NAN;
    id(oq_hp_water_calibration_supply_delta_c) = NAN;

    phase_ = PHASE_MIXING;
    id(oq_commissioning_status).publish_state("HP WATER CALIBRATION STARTED");
    publish("MIXING");
  }

  void abort_or_clear() {
    if (id(oq_hp_water_calibration_active) ||
        oq_commissioning::task_selected(id(oq_commissioning_task_code),
                                        oq_commissioning::TASK_HP_WATER_CALIBRATION)) {
      id(oq_hp_water_calibration_abort) = true;
      id(oq_commissioning_abort_requested) = true;
      publish("ABORT REQUESTED");
      id(oq_commissioning_status).publish_state("ABORT REQUESTED");
      return;
    }
    reset();
    publish("IDLE");
  }

  void apply(const RuntimeConfig &cfg) {
    const float hp1_in = id(oq_hp_calibration_hp1_water_in_offset_suggested).state;
    const float hp1_out = id(oq_hp_calibration_hp1_water_out_offset_suggested).state;
    const float hp2_in = id(oq_hp_calibration_hp2_water_in_offset_suggested).state;
    const float hp2_out = id(oq_hp_calibration_hp2_water_out_offset_suggested).state;

    if (!valid_offset(hp1_in, cfg.max_offset_c) || !valid_offset(hp1_out, cfg.max_offset_c)) {
      publish("APPLY_FAILED");
      return;
    }
    #if OQ_TOPOLOGY_DUO
    if (!valid_offset(hp2_in, cfg.max_offset_c) || !valid_offset(hp2_out, cfg.max_offset_c)) {
      publish("APPLY_FAILED");
      return;
    }
    #endif

    set_number_value(id(hp1_water_in_temp_offset), hp1_in);
    set_number_value(id(hp1_water_out_temp_offset), hp1_out);

    #if OQ_TOPOLOGY_DUO
    set_number_value(id(hp2_water_in_temp_offset), hp2_in);
    set_number_value(id(hp2_water_out_temp_offset), hp2_out);
    #endif

    publish("APPLIED");
  }

  void tick(const RuntimeConfig &cfg, uint32_t now_ms) {
    if (!id(oq_hp_water_calibration_active)) return;

    if (!oq_commissioning::hp_water_calibration_mode_valid(id(oq_control_mode_code),
                                                           id(oq_commissioning_task_code))) {
      finish("ABORT: not CM100", STATE_ABORT);
      return;
    }
    if (id(oq_hp_water_calibration_abort) || id(oq_commissioning_abort_requested)) {
      finish("ABORTED", STATE_ABORT);
      return;
    }
    if (id(oq_water_temp_hard_trip_active)) {
      finish("FAILED: water temperature hard trip", STATE_FAILED);
      return;
    }
    if (id(boiler_active).state) {
      finish("FAILED: boiler active", STATE_FAILED);
      return;
    }
    if (!heat_pumps_idle()) {
      finish("FAILED: heat pump active", STATE_FAILED);
      return;
    }

    const uint32_t started_ms = id(oq_hp_water_calibration_started_ms);
    if (started_ms == 0) {
      finish("FAILED: missing start time", STATE_FAILED);
      return;
    }

    const int total_s = cfg.mixing_s + cfg.measure_s;
    const int elapsed_s = (int) ((uint32_t)(now_ms - started_ms) / 1000UL);
    id(oq_hp_water_calibration_remaining_s) = (elapsed_s >= total_s) ? 0 : (total_s - elapsed_s);

    const float flow_lph = id(flow_rate_selected).state;
    const bool flow_seen = !isnan(flow_lph) && flow_lph >= cfg.min_flow_lph;
    if (elapsed_s >= cfg.no_flow_fail_s && !flow_seen) {
      finish("FAILED: no flow detected", STATE_FAILED);
      return;
    }

    if (elapsed_s < cfg.mixing_s) {
      set_phase(PHASE_MIXING, STATE_FLOW_SETTLE, now_ms);
      publish("MIXING");
      return;
    }

    set_phase(PHASE_MEASURING, STATE_MEASURE, now_ms);
    if (!capture_sample()) {
      finish("FAILED: invalid temperature sample", STATE_FAILED);
      return;
    }

    publish("MEASURING");

    if (elapsed_s < total_s) return;

    compute_result(cfg);
  }

 private:
  int phase_ = PHASE_IDLE;
  std::string last_status_;
  int sample_count_ = 0;
  float sum_hp1_in_ = 0.0f;
  float sum_hp1_out_ = 0.0f;
  float sum_hp2_in_ = 0.0f;
  float sum_hp2_out_ = 0.0f;

  template <typename NumberEntity>
  void set_number_value(NumberEntity &number_entity, float value) {
    auto call = number_entity.make_call();
    call.set_value(value);
    call.perform();
  }

  bool valid_offset(float value, float max_offset_c) const {
    return !isnan(value) && fabsf(value) <= max_offset_c;
  }

  void set_phase(int phase, int state_code, uint32_t now_ms) {
    if (phase != phase_) {
      id(oq_commissioning_state_since_ms) = now_ms;
      phase_ = phase;
    }
    id(oq_hp_water_calibration_phase) = phase;
    id(oq_commissioning_state_code) = state_code;
  }

  bool capture_sample() {
    const float hp1_in = id(hp1_water_in_temp).state;
    const float hp1_out = id(hp1_water_out_temp).state;
    if (isnan(hp1_in) || isnan(hp1_out)) return false;

    float hp2_in = NAN;
    float hp2_out = NAN;
    #if OQ_TOPOLOGY_DUO
    hp2_in = id(hp2_water_in_temp).state;
    hp2_out = id(hp2_water_out_temp).state;
    if (isnan(hp2_in) || isnan(hp2_out)) return false;
    #endif

    sample_count_++;
    sum_hp1_in_ += hp1_in;
    sum_hp1_out_ += hp1_out;
    #if OQ_TOPOLOGY_DUO
    sum_hp2_in_ += hp2_in;
    sum_hp2_out_ += hp2_out;
    #endif
    return true;
  }

  void compute_result(const RuntimeConfig &cfg) {
    if (sample_count_ <= 0) {
      finish("FAILED: no samples", STATE_FAILED);
      return;
    }

    const float hp1_in = sum_hp1_in_ / sample_count_;
    const float hp1_out = sum_hp1_out_ / sample_count_;
    float reference = (hp1_in + hp1_out) * 0.5f;
    float min_avg = fminf(hp1_in, hp1_out);
    float max_avg = fmaxf(hp1_in, hp1_out);

    #if OQ_TOPOLOGY_DUO
    const float hp2_in = sum_hp2_in_ / sample_count_;
    const float hp2_out = sum_hp2_out_ / sample_count_;
    reference = (hp1_in + hp1_out + hp2_in + hp2_out) * 0.25f;
    min_avg = fminf(fminf(hp1_in, hp1_out), fminf(hp2_in, hp2_out));
    max_avg = fmaxf(fmaxf(hp1_in, hp1_out), fmaxf(hp2_in, hp2_out));
    #endif

    const float spread = max_avg - min_avg;
    id(oq_hp_water_calibration_spread_c) = spread;
    const float supply_c = id(water_supply_temp_selected).state;
    id(oq_hp_water_calibration_supply_delta_c) = isnan(supply_c) ? NAN : (reference - supply_c);
    if (spread > cfg.stable_spread_c) {
      finish("FAILED: temperatures not equalized", STATE_FAILED);
      return;
    }

    const float hp1_in_offset = reference - hp1_in;
    const float hp1_out_offset = reference - hp1_out;
    if (fabsf(hp1_in_offset) > cfg.max_offset_c || fabsf(hp1_out_offset) > cfg.max_offset_c) {
      finish("FAILED: offset too large", STATE_FAILED);
      return;
    }

    set_number_value(id(oq_hp_calibration_hp1_water_in_offset_suggested), hp1_in_offset);
    set_number_value(id(oq_hp_calibration_hp1_water_out_offset_suggested), hp1_out_offset);

    #if OQ_TOPOLOGY_DUO
    const float hp2_in_offset = reference - hp2_in;
    const float hp2_out_offset = reference - hp2_out;
    if (fabsf(hp2_in_offset) > cfg.max_offset_c || fabsf(hp2_out_offset) > cfg.max_offset_c) {
      finish("FAILED: offset too large", STATE_FAILED);
      return;
    }
    set_number_value(id(oq_hp_calibration_hp2_water_in_offset_suggested), hp2_in_offset);
    set_number_value(id(oq_hp_calibration_hp2_water_out_offset_suggested), hp2_out_offset);
    #endif

    char status[96];
    snprintf(status, sizeof(status), "DONE: spread %.2fC", spread);
    finish(status, STATE_DONE);
  }

  bool hp_active(bool hp1) {
    int level = 0;
    int last_applied = 0;
    float working_mode = NAN;
    float freq = NAN;
    bool defrost = false;
    bool fault = false;

    if (hp1) {
      if (id(hp1_compressor_level).has_state()) {
        auto idx = id(hp1_compressor_level).active_index();
        level = idx.has_value() ? (int) idx.value() : 0;
      }
      last_applied = id(hp1_last_applied_level);
      working_mode = id(hp1_working_mode).state;
      freq = id(hp1_compressor_frequency).state;
      defrost = id(hp1_defrost).state;
      fault = id(hp1_ot_fault_active).state;
    } else {
      #if OQ_TOPOLOGY_DUO
      if (id(hp2_compressor_level).has_state()) {
        auto idx = id(hp2_compressor_level).active_index();
        level = idx.has_value() ? (int) idx.value() : 0;
      }
      last_applied = id(hp2_last_applied_level);
      working_mode = id(hp2_working_mode).state;
      freq = id(hp2_compressor_frequency).state;
      defrost = id(hp2_defrost).state;
      fault = id(hp2_ot_fault_active).state;
      #endif
    }

    const int mode = isnan(working_mode) ? 0 : (int) roundf(working_mode);
    const bool thermal_mode = (mode == 1 || mode == 2);
    const bool compressor_running = !isnan(freq) && freq > 0.5f;
    return level > 0 || last_applied > 0 || thermal_mode || compressor_running || defrost || fault;
  }

  bool heat_pumps_idle() {
    if (hp_active(true)) return false;
    #if OQ_TOPOLOGY_DUO
    if (hp_active(false)) return false;
    #endif
    return true;
  }

  void finish(const char *status, int next_state) {
    id(oq_hp_water_calibration_active) = false;
    id(oq_hp_water_calibration_abort) = false;
    id(oq_hp_water_calibration_phase) = next_state == STATE_DONE ? PHASE_DONE : PHASE_IDLE;
    id(oq_hp_water_calibration_target_ipwm) = 1000;
    id(oq_hp_water_calibration_remaining_s) = 0;

    const bool still_cm100 = oq_commissioning::is_cm100(id(oq_control_mode_code));
    oq_commissioning::clear_container(still_cm100, next_state);

    publish(status);
    phase_ = PHASE_IDLE;
  }

  void publish(const char *status) {
    const std::string s(status ? status : "");
    if (s != last_status_) {
      id(oq_hp_water_calibration_status).publish_state(s.c_str());
      ESP_LOGI("quatt.cm100.hpcal", "status=%s phase=%d target_iPWM=%d remaining=%ds flow=%.0fL/h spread=%.2fC",
               s.c_str(),
               id(oq_hp_water_calibration_phase),
               id(oq_hp_water_calibration_target_ipwm),
               id(oq_hp_water_calibration_remaining_s),
               id(flow_rate_selected).state,
               id(oq_hp_water_calibration_spread_c));
      last_status_ = s;
    }
  }
};

inline HpWaterCalibrationRuntime &runtime() {
  static HpWaterCalibrationRuntime instance;
  return instance;
}

}  // namespace oq_hp_water_calibration
