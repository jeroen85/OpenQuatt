#pragma once

#include <math.h>

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

struct WindowStats {
  bool ready;
  float mean;
  float spread;
  float slope01;
  float slope12;
};

struct StepModel {
  bool valid_gain;
  float gain;
  float tau_s;
};

struct RollingWindow {
  float w0;
  float w1;
  float w2;
};

struct ValidationAdjustment {
  float kp;
  float ki;
  float scale;
  bool clamped;
  const char *status_prefix;
};

enum StatusReason {
  STATUS_NONE = 0,
  STATUS_WAITING_FOR_CM100,
  STATUS_WAITING_FOR_FLOW,
  STATUS_SETTLING,
  STATUS_STEP,
  STATUS_STEP2,
  STATUS_RECOVERING,
  STATUS_VALIDATING_SETTLING,
  STATUS_VALIDATING,
  STATUS_ABORT_NOT_CM100,
  STATUS_ABORT_NO_BASELINE_FLOW,
  STATUS_ABORT_FLOW_INVALID,
  STATUS_ABORT_NO_STEADY_STATE,
  STATUS_REFUSED_STEP_HEADROOM,
  STATUS_FAILED_INVALID_GAIN,
  STATUS_FAILED_INVALID_VALIDATION_STEP,
  STATUS_FAILED_INVALID_VALIDATION_STATE,
};

struct ArmDecision {
  StateCode next_state;
  StatusReason reason;
  int next_t_s;
  int pwm_step;
  float pv0;
  RollingWindow window;
  int ss_confirm_cnt;
};

struct OpenLoopDecision {
  StateCode next_state;
  StatusReason reason;
  int next_t_s;
  RollingWindow window;
  int ss_confirm_cnt;
  float pv_ss;
  float pv63_time_s;
  StepModel model;
  bool ready;
};

struct RecoveryDecision {
  StateCode next_state;
  StatusReason reason;
  int next_t_s;
  int pwm_step;
  float pv0;
  RollingWindow window;
  int ss_confirm_cnt;
};

struct ValidationSeedPlan {
  bool ready;
  StatusReason reason;
  float kp_seed;
  float ki_seed;
  float validate_sp1;
  float combined_gain;
  float combined_tau_s;
  bool consistent;
};

struct ValidationSettleDecision {
  StateCode next_state;
  StatusReason reason;
  int next_t_s;
  RollingWindow window;
  int confirm_cnt;
  float peak_pv;
  bool settle_ready;
};

struct ValidationMeasureDecision {
  StateCode next_state;
  StatusReason reason;
  int next_t_s;
  RollingWindow window;
  int confirm_cnt;
  float peak_pv;
  bool done;
  bool settled;
  bool timed_out;
  ValidationAdjustment adjustment;
};

inline bool baseline_window_ready(int elapsed_s,
                                  int settle_s,
                                  int wait_max_s,
                                  const WindowStats &stats,
                                  float stable_band_lph);

inline ValidationAdjustment adjust_validation_gains(float seed_kp,
                                                    float seed_ki,
                                                    float overshoot,
                                                    float settle_band,
                                                    bool settled,
                                                    bool timed_out,
                                                    int elapsed_s,
                                                    int sample_time_s,
                                                    float kp_min,
                                                    float kp_max,
                                                    float ki_min,
                                                    float ki_max);

inline int clamp_ipwm(int value, int min_ipwm, int max_ipwm) {
  if (value < min_ipwm) return min_ipwm;
  if (value > max_ipwm) return max_ipwm;
  return value;
}

inline RollingWindow push_window(float w0, float w1, float w2, float sample) {
  return RollingWindow{w1, w2, sample};
}

inline WindowStats analyze_window(float w0, float w1, float w2) {
  if (isnan(w0) || isnan(w1) || isnan(w2)) {
    return WindowStats{false, NAN, NAN, NAN, NAN};
  }
  const float w_min = fminf(w0, fminf(w1, w2));
  const float w_max = fmaxf(w0, fmaxf(w1, w2));
  return WindowStats{
      true,
      (w0 + w1 + w2) / 3.0f,
      w_max - w_min,
      fabsf(w1 - w0),
      fabsf(w2 - w1),
  };
}

inline ArmDecision evaluate_arm_phase(bool valid_mode,
                                      bool flow_valid_now,
                                      int elapsed_s,
                                      int sample_time_s,
                                      float pv,
                                      const RollingWindow &window,
                                      int pwm0,
                                      int pwm_min,
                                      int pwm_max,
                                      int min_step,
                                      int settle_s,
                                      int wait_max_s,
                                      float stable_band_lph,
                                      float step_frac,
                                      int step_min_ipwm,
                                      int step_max_ipwm,
                                      StateCode hold_state,
                                      StateCode success_state,
                                      StatusReason success_reason) {
  if (!valid_mode) {
    return ArmDecision{
        STATE_ABORT, STATUS_ABORT_NOT_CM100, elapsed_s, pwm0, NAN, window, 0};
  }

  const int next_t_s = elapsed_s + sample_time_s;
  if (!flow_valid_now) {
    if (elapsed_s >= wait_max_s) {
      return ArmDecision{
          STATE_ABORT,
          STATUS_ABORT_NO_BASELINE_FLOW,
          next_t_s,
          pwm0,
          NAN,
          window,
          0};
    }
    return ArmDecision{
        hold_state,
        STATUS_WAITING_FOR_FLOW,
        next_t_s,
        pwm0,
        NAN,
        window,
        0};
  }

  const RollingWindow next_window = push_window(window.w0, window.w1, window.w2, pv);
  const WindowStats stats = analyze_window(
      next_window.w0, next_window.w1, next_window.w2);
  if (baseline_window_ready(
          elapsed_s, settle_s, wait_max_s, stats, stable_band_lph)) {
    const int pwm_headroom = pwm0 - pwm_min;
    if (pwm_headroom < min_step) {
      return ArmDecision{
          STATE_ABORT,
          STATUS_REFUSED_STEP_HEADROOM,
          next_t_s,
          pwm0,
          stats.mean,
          next_window,
          0};
    }
    int u_step = (int) roundf(step_frac * (float) pwm0);
    if (u_step < step_min_ipwm) u_step = step_min_ipwm;
    if (u_step > step_max_ipwm) u_step = step_max_ipwm;
    if (u_step > pwm_headroom) u_step = pwm_headroom;
    if (u_step < min_step) u_step = min_step;
    const int pwm_step = clamp_ipwm(pwm0 - u_step, pwm_min, pwm_max);
    return ArmDecision{
        success_state,
        success_reason,
        0,
        pwm_step,
        stats.mean,
        RollingWindow{NAN, NAN, NAN},
        0};
  }

  if (elapsed_s >= wait_max_s) {
    return ArmDecision{
        STATE_ABORT,
        STATUS_ABORT_NO_BASELINE_FLOW,
        next_t_s,
        pwm0,
        NAN,
        next_window,
        0};
  }

  return ArmDecision{
      hold_state,
      STATUS_SETTLING,
      next_t_s,
      pwm0,
      NAN,
      next_window,
      0};
}

inline bool baseline_window_ready(int elapsed_s,
                                  int settle_s,
                                  int wait_max_s,
                                  const WindowStats &stats,
                                  float stable_band_lph) {
  return stats.ready &&
         elapsed_s >= settle_s &&
         elapsed_s <= wait_max_s &&
         stats.spread <= stable_band_lph &&
         stats.mean > 0.0f;
}

inline bool steady_state_window_ready(const WindowStats &stats,
                                      float spread_limit_lph,
                                      float slope_limit_lph) {
  return stats.ready &&
         stats.spread <= spread_limit_lph &&
         stats.slope01 <= slope_limit_lph &&
         stats.slope12 <= slope_limit_lph;
}

inline StepModel build_step_model(float pv0,
                                  float pv_ss,
                                  float t63_s,
                                  float du,
                                  float sample_time_s,
                                  float tau_fallback_s) {
  const float gain = (pv_ss - pv0) / du;
  if (!(gain > 0.0f)) {
    return StepModel{false, gain, NAN};
  }
  float tau_s = t63_s;
  if (isnan(tau_s) || tau_s < sample_time_s) tau_s = tau_fallback_s;
  return StepModel{true, gain, tau_s};
}

inline OpenLoopDecision evaluate_open_loop_measure(bool valid_mode,
                                                   bool flow_valid_now,
                                                   int elapsed_s,
                                                   int sample_time_s,
                                                   float pv,
                                                   float pv0,
                                                   float du,
                                                   const RollingWindow &window,
                                                   float pv_ss,
                                                   float pv63_time_s,
                                                   int ss_confirm_cnt,
                                                   StateCode hold_state,
                                                   int duration_s,
                                                   float spread_limit_lph,
                                                   float slope_limit_lph,
                                                   float tau_fallback_s) {
  if (!valid_mode) {
    return OpenLoopDecision{
        STATE_ABORT,
        STATUS_ABORT_NOT_CM100,
        elapsed_s,
        window,
        ss_confirm_cnt,
        pv_ss,
        pv63_time_s,
        StepModel{false, NAN, NAN},
        false};
  }
  if (!flow_valid_now) {
    return OpenLoopDecision{
        STATE_ABORT,
        STATUS_ABORT_FLOW_INVALID,
        elapsed_s,
        window,
        ss_confirm_cnt,
        pv_ss,
        pv63_time_s,
        StepModel{false, NAN, NAN},
        false};
  }

  const RollingWindow next_window = push_window(window.w0, window.w1, window.w2, pv);
  const WindowStats stats = analyze_window(
      next_window.w0, next_window.w1, next_window.w2);
  float next_pv_ss = pv_ss;
  int next_confirm_cnt = ss_confirm_cnt;
  if (steady_state_window_ready(stats, spread_limit_lph, slope_limit_lph)) {
    next_pv_ss = stats.mean;
    if (next_confirm_cnt < 255) next_confirm_cnt++;
  } else {
    next_confirm_cnt = 0;
  }

  float next_pv63_time_s = pv63_time_s;
  if (!isnan(next_pv_ss) && isnan(next_pv63_time_s)) {
    const float dpv = next_pv_ss - pv0;
    const float pv63 = pv0 + 0.632f * dpv;
    if (dpv >= 0.0f) {
      if (pv >= pv63) next_pv63_time_s = (float) elapsed_s;
    } else {
      if (pv <= pv63) next_pv63_time_s = (float) elapsed_s;
    }
  }

  const bool early_done =
      !isnan(next_pv_ss) &&
      !isnan(next_pv63_time_s) &&
      next_confirm_cnt >= 2;
  const int next_t_s = elapsed_s + sample_time_s;
  if (early_done || elapsed_s >= duration_s) {
    if (isnan(next_pv_ss)) {
      return OpenLoopDecision{
          STATE_ABORT,
          STATUS_ABORT_NO_STEADY_STATE,
          next_t_s,
          next_window,
          next_confirm_cnt,
          next_pv_ss,
          next_pv63_time_s,
          StepModel{false, NAN, NAN},
          false};
    }
    const StepModel model = build_step_model(
        pv0, next_pv_ss, next_pv63_time_s, du, (float) sample_time_s, tau_fallback_s);
    if (!model.valid_gain) {
      return OpenLoopDecision{
          STATE_ABORT,
          STATUS_FAILED_INVALID_GAIN,
          next_t_s,
          next_window,
          next_confirm_cnt,
          next_pv_ss,
          next_pv63_time_s,
          model,
          false};
    }
    return OpenLoopDecision{
        STATE_IDLE,
        STATUS_NONE,
        0,
        RollingWindow{NAN, NAN, NAN},
        0,
        next_pv_ss,
        next_pv63_time_s,
        model,
        true};
  }

  return OpenLoopDecision{
      hold_state,
      STATUS_NONE,
      next_t_s,
      next_window,
      next_confirm_cnt,
      next_pv_ss,
      next_pv63_time_s,
      StepModel{false, NAN, NAN},
      false};
}

inline RecoveryDecision evaluate_recovery_phase(bool valid_mode,
                                                bool flow_valid_now,
                                                int elapsed_s,
                                                int sample_time_s,
                                                float pv,
                                                const RollingWindow &window,
                                                int pwm0,
                                                int pwm_min,
                                                int pwm_max,
                                                int settle_s,
                                                int wait_max_s,
                                                float stable_band_lph,
                                                float step_frac,
                                                int step_min_ipwm,
                                                int step_max_ipwm,
                                                int step1_u,
                                                StateCode hold_state,
                                                StateCode success_state,
                                                StatusReason success_reason) {
  if (!valid_mode) {
    return RecoveryDecision{
        STATE_ABORT, STATUS_ABORT_NOT_CM100, elapsed_s, pwm0, NAN, window, 0};
  }

  const int next_t_s = elapsed_s + sample_time_s;
  if (!flow_valid_now) {
    if (elapsed_s >= wait_max_s) {
      return RecoveryDecision{
          STATE_ABORT,
          STATUS_ABORT_NO_BASELINE_FLOW,
          next_t_s,
          pwm0,
          NAN,
          window,
          0};
    }
    return RecoveryDecision{
        hold_state,
        STATUS_WAITING_FOR_FLOW,
        next_t_s,
        pwm0,
        NAN,
        window,
        0};
  }

  const RollingWindow next_window = push_window(window.w0, window.w1, window.w2, pv);
  const WindowStats stats = analyze_window(
      next_window.w0, next_window.w1, next_window.w2);
  if (baseline_window_ready(
          elapsed_s, settle_s, wait_max_s, stats, stable_band_lph)) {
    int u_step = (int) roundf(step_frac * (float) pwm0);
    if (u_step < step_min_ipwm) u_step = step_min_ipwm;
    if (u_step > step_max_ipwm) u_step = step_max_ipwm;
    if (u_step <= step1_u) u_step = step1_u + 8;
    if (u_step > pwm0 - pwm_min) u_step = pwm0 - pwm_min;
    if (u_step <= step1_u) {
      return RecoveryDecision{
          STATE_ABORT,
          STATUS_REFUSED_STEP_HEADROOM,
          next_t_s,
          pwm0,
          stats.mean,
          next_window,
          0};
    }
    const int pwm_step = clamp_ipwm(pwm0 - u_step, pwm_min, pwm_max);
    return RecoveryDecision{
        success_state,
        success_reason,
        0,
        pwm_step,
        stats.mean,
        RollingWindow{NAN, NAN, NAN},
        0};
  }

  if (elapsed_s >= wait_max_s) {
    return RecoveryDecision{
        STATE_ABORT,
        STATUS_ABORT_NO_BASELINE_FLOW,
        next_t_s,
        pwm0,
        NAN,
        next_window,
        0};
  }

  return RecoveryDecision{
      hold_state,
      STATUS_SETTLING,
      next_t_s,
      pwm0,
      NAN,
      next_window,
      0};
}

inline ValidationSeedPlan build_validation_seed(float K1,
                                                float tau1,
                                                float K2,
                                                float tau2,
                                                float du1,
                                                float du2,
                                                float sample_time_s,
                                                float consistency_frac,
                                                float seed_lambda_frac,
                                                float seed_ti_frac,
                                                float seed_min_lambda_s,
                                                float seed_min_ti_s,
                                                float kp_min,
                                                float kp_max,
                                                float ki_min,
                                                float ki_max,
                                                float sp0,
                                                float validate_step_frac,
                                                float validate_step_min_lph,
                                                float validate_step_max_lph,
                                                float pv0) {
  if (!(K1 > 0.0f) || !(K2 > 0.0f) || isnan(tau1) || isnan(tau2)) {
    return ValidationSeedPlan{
        false,
        STATUS_FAILED_INVALID_GAIN,
        NAN,
        NAN,
        NAN,
        NAN,
        NAN,
        false};
  }

  const float rel_k = fabsf(K1 - K2) / fmaxf(fmaxf(K1, K2), 1e-3f);
  const float rel_tau =
      fabsf(tau1 - tau2) / fmaxf(fmaxf(tau1, tau2), sample_time_s);
  const bool consistent =
      (rel_k <= consistency_frac) && (rel_tau <= 0.35f);

  float K = consistent ? (K1 * du1 + K2 * du2) / fmaxf(du1 + du2, 1.0f)
                       : fmaxf(K1, K2);
  float tau = fmaxf(tau1, tau2);
  if (isnan(tau) || tau < sample_time_s) tau = tau2;
  if (isnan(tau) || tau < sample_time_s) {
    return ValidationSeedPlan{
        false,
        STATUS_FAILED_INVALID_GAIN,
        NAN,
        NAN,
        NAN,
        K,
        tau,
        consistent};
  }

  float lambda_seed = seed_lambda_frac * tau;
  if (lambda_seed < seed_min_lambda_s) lambda_seed = seed_min_lambda_s;
  float Ti_seed = seed_ti_frac * tau;
  if (Ti_seed < seed_min_ti_s) Ti_seed = seed_min_ti_s;

  float kp_seed = tau / (K * (lambda_seed + sample_time_s));
  float ki_seed = (Ti_seed > 1e-3f) ? (kp_seed / Ti_seed) : 0.0f;
  if (kp_seed < kp_min) kp_seed = kp_min;
  if (kp_seed > kp_max) kp_seed = kp_max;
  if (ki_seed < ki_min) ki_seed = ki_min;
  if (ki_seed > ki_max) ki_seed = ki_max;

  float validate_step_lph = roundf(validate_step_frac * fmaxf(pv0, sp0));
  if (validate_step_lph < validate_step_min_lph) validate_step_lph = validate_step_min_lph;
  if (validate_step_lph > validate_step_max_lph) validate_step_lph = validate_step_max_lph;
  const float validate_sp1 = sp0 + validate_step_lph;
  if (!(validate_sp1 > sp0)) {
    return ValidationSeedPlan{
        false,
        STATUS_FAILED_INVALID_VALIDATION_STEP,
        kp_seed,
        ki_seed,
        validate_sp1,
        K,
        tau,
        consistent};
  }

  return ValidationSeedPlan{
      true,
      STATUS_NONE,
      kp_seed,
      ki_seed,
      validate_sp1,
      K,
      tau,
      consistent};
}

inline ValidationSettleDecision evaluate_validation_settle(
    bool valid_mode,
    bool flow_valid_now,
    int elapsed_s,
    int sample_time_s,
    float pv,
    float sp1,
    float settle_band,
    int settle_grace_s,
    int settle_max_s,
    const RollingWindow &window,
    int confirm_cnt,
    float peak_pv) {
  if (!valid_mode) {
    return ValidationSettleDecision{
        STATE_ABORT,
        STATUS_ABORT_NOT_CM100,
        elapsed_s,
        window,
        confirm_cnt,
        peak_pv,
        false};
  }
  if (!flow_valid_now) {
    return ValidationSettleDecision{
        STATE_ABORT,
        STATUS_ABORT_FLOW_INVALID,
        elapsed_s,
        window,
        confirm_cnt,
        peak_pv,
        false};
  }

  const float next_peak_pv = fmaxf(peak_pv, pv);
  const RollingWindow next_window = push_window(window.w0, window.w1, window.w2, pv);
  const WindowStats stats = analyze_window(
      next_window.w0, next_window.w1, next_window.w2);
  int next_confirm_cnt = confirm_cnt;
  if (stats.ready) {
    const bool settle_ready_now =
        elapsed_s >= settle_grace_s &&
        steady_state_window_ready(stats, settle_band, settle_band) &&
        fabsf(pv - sp1) <= settle_band;
    if (settle_ready_now) {
      if (next_confirm_cnt < 255) next_confirm_cnt++;
    } else {
      next_confirm_cnt = 0;
    }
  }

  if (next_confirm_cnt >= 2 || elapsed_s >= settle_max_s) {
    return ValidationSettleDecision{
        STATE_VALIDATE,
        STATUS_VALIDATING,
        0,
        RollingWindow{NAN, NAN, NAN},
        0,
        sp1,
        true};
  }

  return ValidationSettleDecision{
      STATE_VALIDATE,
      STATUS_VALIDATING_SETTLING,
      elapsed_s + sample_time_s,
      next_window,
      next_confirm_cnt,
      next_peak_pv,
      false};
}

inline ValidationMeasureDecision evaluate_validation_measure(
    bool valid_mode,
    bool flow_valid_now,
    int elapsed_s,
    int sample_time_s,
    float pv,
    float sp1,
    float settle_band,
    float overshoot_band,
    int duration_s,
    const RollingWindow &window,
    int confirm_cnt,
    float peak_pv,
    float seed_kp,
    float seed_ki,
    float kp_min,
    float kp_max,
    float ki_min,
    float ki_max) {
  if (!valid_mode) {
    return ValidationMeasureDecision{
        STATE_ABORT,
        STATUS_ABORT_NOT_CM100,
        elapsed_s,
        window,
        confirm_cnt,
        peak_pv,
        false,
        false,
        false,
        ValidationAdjustment{NAN, NAN, NAN, false, ""}};
  }
  if (!flow_valid_now) {
    return ValidationMeasureDecision{
        STATE_ABORT,
        STATUS_ABORT_FLOW_INVALID,
        elapsed_s,
        window,
        confirm_cnt,
        peak_pv,
        false,
        false,
        false,
        ValidationAdjustment{NAN, NAN, NAN, false, ""}};
  }

  const float next_peak_pv = fmaxf(peak_pv, pv);
  const RollingWindow next_window = push_window(window.w0, window.w1, window.w2, pv);
  const WindowStats stats = analyze_window(
      next_window.w0, next_window.w1, next_window.w2);
  int next_confirm_cnt = confirm_cnt;
  if (stats.ready) {
    const bool settled_now =
        steady_state_window_ready(stats, settle_band, settle_band) &&
        fabsf(pv - sp1) <= settle_band;
    if (settled_now) {
      if (next_confirm_cnt < 255) next_confirm_cnt++;
    } else {
      next_confirm_cnt = 0;
    }
  }

  const float overshoot = next_peak_pv - sp1;
  const bool overshot = overshoot > overshoot_band;
  const bool settled =
      next_confirm_cnt >= 2 && !overshot && fabsf(pv - sp1) <= settle_band;
  const bool timed_out = elapsed_s >= duration_s;
  if (settled || timed_out) {
    return ValidationMeasureDecision{
        STATE_VALIDATE,
        STATUS_NONE,
        elapsed_s + sample_time_s,
        next_window,
        next_confirm_cnt,
        next_peak_pv,
        true,
        settled,
        timed_out,
        adjust_validation_gains(seed_kp,
                                seed_ki,
                                overshoot,
                                settle_band,
                                settled,
                                timed_out,
                                elapsed_s,
                                sample_time_s,
                                kp_min,
                                kp_max,
                                ki_min,
                                ki_max)};
  }

  return ValidationMeasureDecision{
      STATE_VALIDATE,
      STATUS_VALIDATING,
      elapsed_s + sample_time_s,
      next_window,
      next_confirm_cnt,
      next_peak_pv,
      false,
      false,
      false,
      ValidationAdjustment{NAN, NAN, NAN, false, ""}};
}

inline ValidationAdjustment adjust_validation_gains(float seed_kp,
                                                    float seed_ki,
                                                    float overshoot,
                                                    float settle_band,
                                                    bool settled,
                                                    bool timed_out,
                                                    int elapsed_s,
                                                    int sample_time_s,
                                                    float kp_min,
                                                    float kp_max,
                                                    float ki_min,
                                                    float ki_max) {
  float scale = 1.0f;
  if (overshoot > (2.0f * settle_band)) {
    scale = 0.80f;
  } else if (overshoot > settle_band) {
    scale = 0.90f;
  } else if (settled &&
             elapsed_s <= (sample_time_s * 3) &&
             overshoot <= (0.5f * settle_band)) {
    scale = 1.05f;
  }
  if (timed_out && !settled) {
    if (scale > 0.95f) scale = 0.95f;
  }

  const float raw_kp = seed_kp * scale;
  const float raw_ki = seed_ki * scale;
  float kp = raw_kp;
  float ki = raw_ki;
  if (kp < kp_min) kp = kp_min;
  if (kp > kp_max) kp = kp_max;
  if (ki < ki_min) ki = ki_min;
  if (ki > ki_max) ki = ki_max;

  const bool clamped =
      fabsf(kp - raw_kp) > 1.0e-7f || fabsf(ki - raw_ki) > 1.0e-7f;
  const char *status_prefix = "DONE (CLOSED-LOOP)";
  if (timed_out && !settled) status_prefix = "DONE (LIMITED)";
  else if (clamped) status_prefix = "DONE (CLAMPED)";

  return ValidationAdjustment{kp, ki, scale, clamped, status_prefix};
}

}  // namespace oq_flow_autotune
