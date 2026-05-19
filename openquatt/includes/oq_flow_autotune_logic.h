#pragma once

#include <math.h>
#include <stdint.h>
#include <stdio.h>

namespace oq_flow_autotune {

enum StateCode {
  STATE_IDLE = 0,
  STATE_ARM = 1,
  STATE_STEP1 = 2,
  STATE_RECOVER = 3,
  STATE_STEP2 = 4,
  STATE_VALIDATE = 5,
  STATE_ABORT = 6,
};

struct RuntimeConfig {
  int sample_time_s;
  int duration_s;
  float validate_step_frac;
  float validate_step_min_lph;
  float validate_step_max_lph;
  float validate_band_floor_lph;
  float validate_band_frac;
  float validate_overshoot_frac;
  float validate_seed_lambda_frac;
  float validate_seed_ti_frac;
  float validate_seed_min_lambda_s;
  float validate_seed_min_ti_s;
  int validate_duration_s;
  int baseline_pwm;
  int baseline_wait_max_s;
  float step1_frac;
  int step1_min_ipwm;
  int step1_max_ipwm;
  float step2_frac;
  int step2_min_ipwm;
  int step2_max_ipwm;
  float step_consistency_frac;
  int pwm_min;
  int pwm_max;
  int min_step;
  int settle_s;
  float stable_band_lph;
  float tau_fallback_s;
  float kp_min;
  float kp_max;
  float ki_min;
  float ki_max;
};

inline RuntimeConfig make_runtime_config(int sample_time_s,
                                         int pwm_min,
                                         int pwm_max,
                                         int min_step,
                                         int settle_s,
                                         float stable_band_lph,
                                         float tau_fallback_s,
                                         float kp_min,
                                         float kp_max,
                                         float ki_min,
                                         float ki_max) {
  return RuntimeConfig{
      sample_time_s, 120, 0.05f, 15.0f, 40.0f, 8.0f, 0.15f,
      0.25f, 8.0f, 2.0f, 60.0f, 60.0f, 180, 400, 60,
      0.06f, 10, 28, 0.10f, 15, 40, 0.20f,
      pwm_min, pwm_max, min_step, settle_s, stable_band_lph,
      tau_fallback_s, kp_min, kp_max, ki_min, ki_max};
}

inline int clamp_ipwm(int value, int min_ipwm, int max_ipwm) {
  if (value < min_ipwm) return min_ipwm;
  if (value > max_ipwm) return max_ipwm;
  return value;
}

class FlowAutotuneRuntime {
 public:
  bool busy() const { return state_ != STATE_IDLE; }

  void reset() {
    state_ = STATE_IDLE;
    t_s_ = 0;
    pwm0_ = 850;
    pwm_step_ = 850;
    pv0_ = NAN;
    pv_ss_ = NAN;
    pv63_time_s_ = NAN;
    step1_k_ = NAN;
    step1_tau_ = NAN;
    step1_pwm_step_ = 850;
    clear_window();
    ss_confirm_cnt_ = 0;
    saved_kp_ = NAN;
    saved_ki_ = NAN;
    validate_sp0_ = NAN;
    validate_sp1_ = NAN;
    validate_peak_pv_ = NAN;
    validate_confirm_cnt_ = 0;
    validate_settle_ready_ = false;
    validate_pre_overshoot_ = false;
    id(oq_flow_autotune_state) = STATE_IDLE;
  }

  void start(const RuntimeConfig &cfg, uint32_t now_ms) {
    const int cm_code = id(oq_control_mode_code);
    const bool cm100_ready = oq_commissioning::is_cm100(cm_code);
    const bool task_running = oq_commissioning::task_running(
        id(oq_commissioning_active), id(oq_commissioning_task_code));
    if (busy() || id(oq_flow_autotune_active) ||
        id(oq_flow_autotune_req) || task_running) {
      id(oq_flow_autotune_status).publish_state("REFUSED: BUSY");
      return;
    }
    if (!cm100_ready) {
      id(oq_flow_autotune_status).publish_state("REFUSED: not CM100");
      return;
    }

    ESP_LOGI("quatt.cm100.autotune",
             "Autotune requested (cm=%d flow_mode=%s setpoint=%.0fL/h last_good_pwm=%d baseline_pwm=%d active=%d state=%d)",
             cm_code,
             id(oq_flow_control_mode).current_option().c_str(),
             id(oq_flow_setpoint_lph).state,
             (int) id(oq_flow_last_good_pwm),
             cfg.baseline_pwm,
             (int) id(oq_flow_autotune_active),
             (int) state_);

    reset();
    id(oq_commissioning_task_code) = oq_commissioning::TASK_FLOW_AUTOTUNE;
    id(oq_commissioning_request_pending) = false;
    id(oq_commissioning_active) = true;
    id(oq_commissioning_abort_requested) = false;
    id(oq_commissioning_state_code) = oq_commissioning::TASK_STATE_REQUESTED;
    id(oq_commissioning_started_ms) = now_ms;
    id(oq_commissioning_state_since_ms) = now_ms;
    id(oq_flow_autotune_req) = true;
    id(oq_flow_autotune_abort) = false;
    id(oq_flow_autotune_active) = false;
    id(oq_flow_autotune_pwm) = cfg.baseline_pwm;
    id(oq_commissioning_status).publish_state("FLOW AUTOTUNE STARTED");
    id(oq_flow_autotune_status).publish_state("REQUESTED");
  }

  void tick(const RuntimeConfig &cfg, uint32_t now_ms) {
    sync_external_idle();
    if (id(oq_flow_autotune_abort)) {
      id(oq_flow_autotune_abort) = false;
      state_ = STATE_ABORT;
    }

    const float pv = id(flow_rate_selected).state;
    const bool flow_valid = !(isnan(pv) || pv <= 0.0f);
    if (state_ != STATE_IDLE && id(oq_flow_autotune_req)) {
      id(oq_flow_autotune_req) = false;
      id(oq_flow_autotune_status).publish_state("REFUSED: BUSY");
    }

    switch (state_) {
      case STATE_IDLE:
        run_idle(cfg, now_ms, pv, flow_valid);
        break;
      case STATE_ARM:
        run_baseline_wait(cfg, pv, flow_valid, false);
        break;
      case STATE_STEP1:
        run_open_loop_step(cfg, pv, flow_valid, false);
        break;
      case STATE_RECOVER:
        run_baseline_wait(cfg, pv, flow_valid, true);
        break;
      case STATE_STEP2:
        run_open_loop_step(cfg, pv, flow_valid, true);
        break;
      case STATE_VALIDATE:
        run_validation(cfg, pv, flow_valid);
        break;
      case STATE_ABORT:
      default:
        finish_abort(cfg);
        break;
    }
    id(oq_flow_autotune_state) = state_;
  }

 private:
  StateCode state_{STATE_IDLE};
  int t_s_{0};
  int pwm0_{850};
  int pwm_step_{850};
  float pv0_{NAN};
  float pv_ss_{NAN};
  float pv63_time_s_{NAN};
  float step1_k_{NAN};
  float step1_tau_{NAN};
  int step1_pwm_step_{850};
  float w0_{NAN};
  float w1_{NAN};
  float w2_{NAN};
  int ss_confirm_cnt_{0};
  float saved_kp_{NAN};
  float saved_ki_{NAN};
  float validate_sp0_{NAN};
  float validate_sp1_{NAN};
  float validate_peak_pv_{NAN};
  int validate_confirm_cnt_{0};
  bool validate_settle_ready_{false};
  bool validate_pre_overshoot_{false};

  template <typename NumberEntity>
  void set_number_value(NumberEntity &number_entity, float value) {
    auto call = number_entity.make_call();
    call.set_value(value);
    call.perform();
  }

  bool valid_mode() const {
    return oq_commissioning::flow_autotune_mode_valid(
        id(oq_control_mode_code), id(oq_commissioning_task_code));
  }

  int clamp_runtime_ipwm(const RuntimeConfig &cfg, int value) const {
    return clamp_ipwm(value, cfg.pwm_min, cfg.pwm_max);
  }

  void clear_window() {
    w0_ = NAN;
    w1_ = NAN;
    w2_ = NAN;
  }

  void clear_open_loop_memory() {
    t_s_ = 0;
    clear_window();
    ss_confirm_cnt_ = 0;
    pv0_ = NAN;
    pv_ss_ = NAN;
    pv63_time_s_ = NAN;
  }

  void push_window(float sample) {
    w0_ = w1_;
    w1_ = w2_;
    w2_ = sample;
  }

  bool window_ready() const {
    return !isnan(w0_) && !isnan(w1_) && !isnan(w2_);
  }

  float window_mean() const {
    return (w0_ + w1_ + w2_) / 3.0f;
  }

  float window_spread() const {
    return fmaxf(w0_, fmaxf(w1_, w2_)) - fminf(w0_, fminf(w1_, w2_));
  }

  bool steady_window(float spread_limit_lph, float slope_limit_lph) const {
    return window_ready() &&
           window_spread() <= spread_limit_lph &&
           fabsf(w1_ - w0_) <= slope_limit_lph &&
           fabsf(w2_ - w1_) <= slope_limit_lph;
  }

  bool baseline_ready(const RuntimeConfig &cfg) const {
    return window_ready() &&
           t_s_ >= cfg.settle_s &&
           t_s_ <= cfg.baseline_wait_max_s &&
           window_spread() <= cfg.stable_band_lph &&
           window_mean() > 0.0f;
  }

  void publish(const char *status) {
    if (status != nullptr) id(oq_flow_autotune_status).publish_state(status);
  }

  void abort_with(const char *status) {
    publish(status);
    state_ = STATE_ABORT;
  }

  void release_commissioning(bool keep_cm100 = true) {
    id(oq_flow_autotune_active) = false;
    id(oq_flow_autotune_abort) = false;
    id(oq_flow_autotune_req) = false;
    id(oq_commissioning_request_pending) = false;
    id(oq_commissioning_active) = keep_cm100;
    id(oq_commissioning_abort_requested) = false;
    id(oq_commissioning_task_code) = oq_commissioning::TASK_NONE;
    id(oq_commissioning_state_code) = oq_commissioning::TASK_STATE_IDLE;
    id(oq_commissioning_started_ms) = 0;
    id(oq_commissioning_state_since_ms) = 0;
    id(oq_commissioning_status).publish_state(keep_cm100 ? "CM100 READY" : "IDLE");
  }

  void sync_external_idle() {
    if (state_ != STATE_IDLE &&
        id(oq_flow_autotune_state) == STATE_IDLE &&
        !id(oq_flow_autotune_req) &&
        !id(oq_flow_autotune_abort) &&
        !id(oq_flow_autotune_active)) {
      reset();
    }
  }

  void run_idle(const RuntimeConfig &cfg,
                uint32_t now_ms,
                float pv,
                bool flow_valid) {
    if (!id(oq_flow_autotune_req)) return;
    if (!valid_mode()) {
      id(oq_commissioning_request_pending) = true;
      id(oq_commissioning_active) = false;
      publish("WAITING_FOR_CM100");
      ESP_LOGI("quatt.cm100.autotune", "Waiting for CM100 before autotune can start");
      return;
    }

    id(oq_flow_autotune_req) = false;
    clear_open_loop_memory();
    pwm0_ = clamp_runtime_ipwm(cfg, cfg.baseline_pwm);
    id(oq_flow_autotune_pwm) = pwm0_;
    id(oq_flow_autotune_active) = true;
    id(oq_commissioning_request_pending) = false;
    id(oq_commissioning_active) = true;
    id(oq_commissioning_abort_requested) = false;
    id(oq_commissioning_started_ms) = now_ms;
    id(oq_commissioning_state_since_ms) = now_ms;

    ESP_LOGI("quatt.cm100.autotune",
             "Baseline settle started (pwm0=%d pv=%.1f target=%.1f settle=%us stable_band=%.1f)",
             pwm0_, pv, id(oq_flow_setpoint_lph).state,
             (unsigned int) cfg.settle_s,
             cfg.stable_band_lph);
    publish(flow_valid ? "SETTLING" : "WAITING_FOR_FLOW");
    state_ = STATE_ARM;
  }

  int step_size(const RuntimeConfig &cfg, bool second_step, int pwm0) const {
    const float frac = second_step ? cfg.step2_frac : cfg.step1_frac;
    const int step_min = second_step ? cfg.step2_min_ipwm : cfg.step1_min_ipwm;
    const int step_max = second_step ? cfg.step2_max_ipwm : cfg.step1_max_ipwm;
    int u_step = (int) roundf(frac * (float) pwm0);
    if (u_step < step_min) u_step = step_min;
    if (u_step > step_max) u_step = step_max;
    if (second_step) {
      const int step1_u = pwm0 - clamp_runtime_ipwm(cfg, step1_pwm_step_);
      if (u_step <= step1_u) u_step = step1_u + 8;
    }
    const int headroom = pwm0 - cfg.pwm_min;
    if (u_step > headroom) u_step = headroom;
    return u_step;
  }

  void run_baseline_wait(const RuntimeConfig &cfg,
                         float pv,
                         bool flow_valid,
                         bool second_step) {
    const int pwm0 = clamp_runtime_ipwm(cfg, pwm0_);
    const int t = t_s_;
    id(oq_flow_autotune_pwm) = pwm0;
    id(oq_flow_autotune_active) = true;

    if (!valid_mode()) {
      abort_with("ABORT: not CM100");
      return;
    }
    if (!flow_valid) {
      if (t_s_ >= cfg.baseline_wait_max_s) {
        abort_with("ABORT: NO_BASELINE_FLOW");
      } else {
        t_s_ += cfg.sample_time_s;
        publish("WAITING_FOR_FLOW");
      }
      return;
    }

    push_window(pv);
    if (baseline_ready(cfg)) {
      const int u_step = step_size(cfg, second_step, pwm0);
      const int step1_u = pwm0 - clamp_runtime_ipwm(cfg, step1_pwm_step_);
      if (u_step < cfg.min_step || (second_step && u_step <= step1_u)) {
        ESP_LOGW("quatt.cm100.autotune",
                 "Autotune refused: insufficient step headroom (pwm0=%d min=%d headroom=%d required=%d)",
                 pwm0, cfg.pwm_min, pwm0 - cfg.pwm_min, cfg.min_step);
        abort_with("REFUSED: STEP_HEADROOM");
        return;
      }

      pv0_ = window_mean();
      pwm_step_ = clamp_runtime_ipwm(cfg, pwm0 - u_step);
      id(oq_flow_autotune_pwm) = pwm_step_;
      clear_window();
      ss_confirm_cnt_ = 0;
      t_s_ = 0;
      state_ = second_step ? STATE_STEP2 : STATE_STEP1;
      ESP_LOGI("quatt.cm100.autotune",
               "%s stable -> step%d (pwm0=%d pwm_step=%d pv0=%.1f t=%ds)",
               second_step ? "Recovery" : "Baseline",
               second_step ? 2 : 1,
               pwm0, pwm_step_, pv0_, t);
      publish(second_step ? "STEP2" : "STEP");
      return;
    }

    if (t_s_ >= cfg.baseline_wait_max_s) {
      abort_with("ABORT: NO_BASELINE_FLOW");
      return;
    }
    t_s_ += cfg.sample_time_s;
    publish("SETTLING");
  }

  bool update_open_loop_measure(const RuntimeConfig &cfg,
                                float pv,
                                bool flow_valid,
                                int pwm0,
                                int pwm_step,
                                float *gain,
                                float *tau_s) {
    if (!valid_mode()) {
      abort_with("ABORT: not CM100");
      return false;
    }
    if (!flow_valid) {
      abort_with("ABORT: FLOW_INVALID");
      return false;
    }

    push_window(pv);
    if (steady_window(6.0f, 2.0f)) {
      pv_ss_ = window_mean();
      if (ss_confirm_cnt_ < 255) ss_confirm_cnt_++;
    } else {
      ss_confirm_cnt_ = 0;
    }

    if (!isnan(pv_ss_) && isnan(pv63_time_s_)) {
      const float dpv = pv_ss_ - pv0_;
      const float pv63 = pv0_ + 0.632f * dpv;
      if ((dpv >= 0.0f && pv >= pv63) || (dpv < 0.0f && pv <= pv63)) {
        pv63_time_s_ = (float) t_s_;
      }
    }

    const bool early_done =
        !isnan(pv_ss_) && !isnan(pv63_time_s_) && ss_confirm_cnt_ >= 2;
    if (!early_done && t_s_ < cfg.duration_s) {
      t_s_ += cfg.sample_time_s;
      return false;
    }
    if (isnan(pv_ss_)) {
      abort_with("ABORT: NO_STEADY_STATE");
      return false;
    }

    const float du = (float) (pwm0 - pwm_step);
    *gain = (pv_ss_ - pv0_) / du;
    if (!(*gain > 0.0f)) {
      abort_with("FAILED: INVALID_GAIN");
      return false;
    }
    *tau_s = pv63_time_s_;
    if (isnan(*tau_s) || *tau_s < (float) cfg.sample_time_s) {
      *tau_s = cfg.tau_fallback_s;
    }
    return true;
  }

  void run_open_loop_step(const RuntimeConfig &cfg,
                          float pv,
                          bool flow_valid,
                          bool second_step) {
    const int t = t_s_;
    const int pwm0 = clamp_runtime_ipwm(cfg, pwm0_);
    const int pwm_step = clamp_runtime_ipwm(cfg, pwm_step_);
    const float pv0 = pv0_;
    float gain = NAN;
    float tau_s = NAN;
    if (!update_open_loop_measure(cfg, pv, flow_valid, pwm0, pwm_step, &gain, &tau_s)) {
      if (state_ == STATE_ABORT) {
        ESP_LOGW("quatt.cm100.autotune",
                 "Autotune step%d ended in abort/fail (pv=%.1f t=%ds)",
                 second_step ? 2 : 1, pv, t);
      }
      return;
    }

    if (!second_step) {
      step1_k_ = gain;
      step1_tau_ = tau_s;
      step1_pwm_step_ = pwm_step;
      id(oq_flow_autotune_pwm) = pwm0;
      ESP_LOGI("quatt.cm100.autotune",
               "Step1 captured (pwm0=%d step=%d pv0=%.1f pv_ss=%.1f t63=%.1f K1=%.3f tau1=%.0fs) -> recover",
               pwm0, pwm_step, pv0, pv_ss_, pv63_time_s_, gain, tau_s);
      clear_open_loop_memory();
      publish("RECOVERING");
      state_ = STATE_RECOVER;
      return;
    }

    start_validation(cfg, pv0, gain, tau_s, pwm0, pwm_step);
  }

  void start_validation(const RuntimeConfig &cfg,
                        float pv0,
                        float k2,
                        float tau2,
                        int pwm0,
                        int pwm_step2) {
    const float k1 = step1_k_;
    const float tau1 = step1_tau_;
    const float du1 = (float) (pwm0 - clamp_runtime_ipwm(cfg, step1_pwm_step_));
    const float du2 = (float) (pwm0 - pwm_step2);
    const float sp0 = id(oq_flow_setpoint_lph).state;
    if (!(k1 > 0.0f) || !(k2 > 0.0f) || isnan(tau1) || isnan(tau2)) {
      abort_with("FAILED: INVALID_GAIN");
      return;
    }

    const float rel_k = fabsf(k1 - k2) / fmaxf(fmaxf(k1, k2), 1e-3f);
    const float rel_tau = fabsf(tau1 - tau2) / fmaxf(fmaxf(tau1, tau2), (float) cfg.sample_time_s);
    const bool consistent = rel_k <= cfg.step_consistency_frac && rel_tau <= 0.35f;
    const float model_k = consistent ? (k1 * du1 + k2 * du2) / fmaxf(du1 + du2, 1.0f)
                                     : fmaxf(k1, k2);
    float model_tau = fmaxf(tau1, tau2);
    if (isnan(model_tau) || model_tau < (float) cfg.sample_time_s) model_tau = tau2;
    if (isnan(model_tau) || model_tau < (float) cfg.sample_time_s) {
      abort_with("FAILED: INVALID_GAIN");
      return;
    }

    float lambda_seed = fmaxf(cfg.validate_seed_lambda_frac * model_tau, cfg.validate_seed_min_lambda_s);
    float ti_seed = fmaxf(cfg.validate_seed_ti_frac * model_tau, cfg.validate_seed_min_ti_s);
    float kp_seed = model_tau / (model_k * (lambda_seed + (float) cfg.sample_time_s));
    float ki_seed = (ti_seed > 1e-3f) ? (kp_seed / ti_seed) : 0.0f;
    kp_seed = fminf(fmaxf(kp_seed, cfg.kp_min), cfg.kp_max);
    ki_seed = fminf(fmaxf(ki_seed, cfg.ki_min), cfg.ki_max);

    float validate_step_lph = roundf(cfg.validate_step_frac * fmaxf(pv0, sp0));
    validate_step_lph = fminf(fmaxf(validate_step_lph, cfg.validate_step_min_lph), cfg.validate_step_max_lph);
    if (!(sp0 + validate_step_lph > sp0)) {
      abort_with("FAILED: INVALID_VALIDATION_STEP");
      return;
    }

    saved_kp_ = id(oq_flow_kp).state;
    saved_ki_ = id(oq_flow_ki).state;
    validate_sp0_ = sp0;
    validate_sp1_ = sp0 + validate_step_lph;
    validate_peak_pv_ = validate_sp1_;
    validate_confirm_cnt_ = 0;
    validate_settle_ready_ = false;
    validate_pre_overshoot_ = false;
    t_s_ = 0;
    clear_window();

    set_number_value(id(oq_flow_kp), kp_seed);
    set_number_value(id(oq_flow_ki), ki_seed);
    set_number_value(id(oq_flow_setpoint_lph), validate_sp1_);
    id(oq_flow_autotune_active) = false;
    ESP_LOGI("quatt.cm100.autotune",
             "Step2 captured -> validation (%s) step1 K=%.3f tau=%.0fs step2 K=%.3f tau=%.0fs combined K=%.3f tau=%.0fs seed=%.3f/%.4f sp=%.1f->%.1f",
             consistent ? "2STEP" : "2STEP (LIMITED)",
             k1, tau1, k2, tau2, model_k, model_tau, kp_seed, ki_seed, sp0, validate_sp1_);
    publish("VALIDATING_SETTLING");
    state_ = STATE_VALIDATE;
  }

  void run_validation(const RuntimeConfig &cfg, float pv, bool flow_valid) {
    const float sp0 = validate_sp0_;
    const float sp1 = validate_sp1_;
    if (isnan(sp0) || isnan(sp1) || !(sp1 > sp0)) {
      abort_with("FAILED: INVALID_VALIDATION_STATE");
      ESP_LOGW("quatt.cm100.autotune",
               "Autotune failed: invalid validation state (sp0=%.1f sp1=%.1f)",
               sp0, sp1);
      return;
    }
    if (!valid_mode()) {
      abort_with("ABORT: not CM100");
      return;
    }
    if (!flow_valid) {
      abort_with("ABORT: FLOW_INVALID");
      return;
    }

    const float step_lph = sp1 - sp0;
    const float settle_band = fmaxf(cfg.validate_band_floor_lph, cfg.validate_band_frac * step_lph);
    const float overshoot_band = fmaxf(settle_band, cfg.validate_overshoot_frac * step_lph);
    validate_peak_pv_ = fmaxf(validate_peak_pv_, pv);
    push_window(pv);

    if (!validate_settle_ready_) {
      if (pv - sp1 > overshoot_band) {
        validate_pre_overshoot_ = true;
      }
      const bool ready_now =
          t_s_ >= 20 &&
          steady_window(settle_band, settle_band) &&
          fabsf(pv - sp1) <= settle_band;
      validate_confirm_cnt_ = ready_now ? validate_confirm_cnt_ + 1 : 0;
      if (validate_confirm_cnt_ >= 2 || t_s_ >= 60) {
        t_s_ = 0;
        clear_window();
        validate_confirm_cnt_ = 0;
        validate_peak_pv_ = sp1;
        validate_settle_ready_ = true;
        publish("VALIDATING");
      } else {
        t_s_ += cfg.sample_time_s;
        publish("VALIDATING_SETTLING");
      }
      return;
    }

    const bool settled_now =
        steady_window(settle_band, settle_band) &&
        fabsf(pv - sp1) <= settle_band;
    validate_confirm_cnt_ = settled_now ? validate_confirm_cnt_ + 1 : 0;
    const float overshoot = validate_peak_pv_ - sp1;
    const bool overshot = overshoot > overshoot_band;
    const bool settled = validate_confirm_cnt_ >= 2 && !overshot && fabsf(pv - sp1) <= settle_band;
    const bool timed_out = t_s_ >= cfg.validate_duration_s;
    if (!settled && !timed_out) {
      t_s_ += cfg.sample_time_s;
      publish("VALIDATING");
      return;
    }

    finish_validation(cfg, sp1, settle_band, overshoot, settled, timed_out);
  }

  void finish_validation(const RuntimeConfig &cfg,
                         float sp1,
                         float settle_band,
                         float overshoot,
                         bool settled,
                         bool timed_out) {
    const float seed_kp = id(oq_flow_kp).state;
    const float seed_ki = id(oq_flow_ki).state;
    float scale = 1.0f;
    if (overshoot > (2.0f * settle_band)) scale = 0.80f;
    else if (overshoot > settle_band) scale = 0.90f;
    else if (settled && t_s_ <= (cfg.sample_time_s * 3) && overshoot <= (0.5f * settle_band)) scale = 1.05f;
    if (timed_out && !settled && scale > 0.95f) scale = 0.95f;

    const float raw_kp = seed_kp * scale;
    const float raw_ki = seed_ki * scale;
    const float kp = fminf(fmaxf(raw_kp, cfg.kp_min), cfg.kp_max);
    const float ki = fminf(fmaxf(raw_ki, cfg.ki_min), cfg.ki_max);
    const bool clamped = fabsf(kp - raw_kp) > 1.0e-7f || fabsf(ki - raw_ki) > 1.0e-7f;
    const bool limited_validation = validate_pre_overshoot_ || (timed_out && !settled);
    const char *prefix = limited_validation ? "DONE (LIMITED)" :
                         clamped ? "DONE (CLAMPED)" : "DONE (CLOSED-LOOP)";

    set_number_value(id(oq_flow_kp_suggested), kp);
    set_number_value(id(oq_flow_ki_suggested), ki);
    const float peak_pv = validate_peak_pv_;
    restore_live_settings();
    clear_window();
    validate_confirm_cnt_ = 0;
    validate_settle_ready_ = false;
    validate_pre_overshoot_ = false;

    char msg[220];
    snprintf(msg, sizeof(msg),
             "%s: seed=%.3f/%.4f -> Kp=%.3f Ki=%.4f peak=%.1f target=%.1f",
             prefix, seed_kp, seed_ki, kp, ki, peak_pv, sp1);
    publish(msg);
    clear_validation_memory();
    release_commissioning();
    reset();
  }

  void restore_live_settings() {
    if (!isnan(saved_kp_) && !isnan(saved_ki_)) {
      set_number_value(id(oq_flow_kp), saved_kp_);
      set_number_value(id(oq_flow_ki), saved_ki_);
    }
    if (!isnan(validate_sp0_)) {
      set_number_value(id(oq_flow_setpoint_lph), validate_sp0_);
    }
  }

  void clear_validation_memory() {
    saved_kp_ = NAN;
    saved_ki_ = NAN;
    validate_sp0_ = NAN;
    validate_sp1_ = NAN;
    validate_peak_pv_ = NAN;
  }

  void finish_abort(const RuntimeConfig &cfg) {
    id(oq_flow_autotune_active) = false;
    id(oq_flow_autotune_pwm) = clamp_runtime_ipwm(cfg, (int) id(oq_flow_last_pwm));
    restore_live_settings();
    clear_validation_memory();
    clear_window();
    ss_confirm_cnt_ = 0;
    validate_confirm_cnt_ = 0;
    validate_settle_ready_ = false;
    validate_pre_overshoot_ = false;
    ESP_LOGW("quatt.cm100.autotune", "Autotune aborted; restoring last PWM=%d", (int) id(oq_flow_last_pwm));
    release_commissioning();
    publish("ABORTED");
    reset();
  }
};

inline FlowAutotuneRuntime &runtime() {
  static FlowAutotuneRuntime instance;
  return instance;
}

}  // namespace oq_flow_autotune
