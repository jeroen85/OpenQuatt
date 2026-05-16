#pragma once

#include <math.h>
#include <stdlib.h>

namespace oq_flow_control {

enum RouteKind {
  ROUTE_CM0 = 0,
  ROUTE_AUTOTUNE = 1,
  ROUTE_FROST = 2,
  ROUTE_MANUAL = 3,
  ROUTE_AUTO = 4,
};

enum ExecMode {
  EXEC_MODE_CM0 = 0,
  EXEC_MODE_AUTOTUNE = 1,
  EXEC_MODE_MANUAL = 2,
  EXEC_MODE_FROST = 3,
  EXEC_MODE_AUTO_STARTING = 4,
  EXEC_MODE_AUTO = 5,
  EXEC_MODE_AUTO_FAILSAFE = 6,
};

enum RuntimeModeStateCode {
  RUNTIME_MODE_NORMAL = 0,
  RUNTIME_MODE_FROST = 2,
};

struct RoutePlan {
  RouteKind route_kind;
  int runtime_mode_state_code;
  bool early_return;
  const char *mode_text;
};

struct AutoStartPlan {
  int start_pwm;
  int fallback_pwm;
  bool commissioning_start;
};

struct AutoPiState {
  float integral;
  float setpoint_filtered;
  float last_error;
  int startup_hold;
  int stable_count;
};

struct AutoPiConfig {
  float dt_s;
  int min_ipwm;
  int max_ipwm;
  int failsafe_ipwm;
  float sp_ramp_up_lph_s;
  float sp_ramp_down_lph_s;
  float deadband_lph;
  float i_active_band_lph;
  float i_cross_keep;
  float i_deadband_keep;
  float i_large_err_keep;
  float i_min;
  float i_max;
  float u_up_per_s;
  float u_down_per_s;
  float stable_err_lph;
  int stable_time_ticks;
  int good_pwm_step;
};

struct AutoPiInput {
  int pwm_seed;
  float setpoint_lph;
  float flow_lph;
  float kp;
  float ki;
  int last_good_pwm;
};

struct AutoPiResult {
  int pwm;
  AutoPiState state;
  bool failsafe;
  int last_good_pwm;
};

inline int clamp_ipwm(int value, int min_ipwm = 50, int max_ipwm = 850) {
  if (value < min_ipwm) return min_ipwm;
  if (value > max_ipwm) return max_ipwm;
  return value;
}

inline int runtime_mode_state_code(int control_mode_code) {
  return (control_mode_code == 98) ? RUNTIME_MODE_FROST : RUNTIME_MODE_NORMAL;
}

inline bool autotune_override_active(bool autotune_active,
                                     int control_mode_code,
                                     int commissioning_task_code) {
  return autotune_active && control_mode_code == 100 && commissioning_task_code == 2;
}

inline RoutePlan select_route(int control_mode_code,
                              bool want_manual,
                              bool autotune_active,
                              int commissioning_task_code) {
  if (control_mode_code == 0) {
    return RoutePlan{
        ROUTE_CM0,
        runtime_mode_state_code(control_mode_code),
        true,
        "CM0",
    };
  }

  const bool is_frost = control_mode_code == 98;
  if (autotune_override_active(
          autotune_active, control_mode_code, commissioning_task_code) &&
      !is_frost) {
    return RoutePlan{
        ROUTE_AUTOTUNE,
        runtime_mode_state_code(control_mode_code),
        false,
        "AUTOTUNE",
    };
  }

  if (is_frost) {
    return RoutePlan{
        ROUTE_FROST,
        runtime_mode_state_code(control_mode_code),
        false,
        "CM98",
    };
  }

  if (want_manual) {
    return RoutePlan{
        ROUTE_MANUAL,
        runtime_mode_state_code(control_mode_code),
        false,
        "MANUAL",
    };
  }

  return RoutePlan{
      ROUTE_AUTO,
      runtime_mode_state_code(control_mode_code),
      false,
      "AUTO",
  };
}

inline ExecMode finalize_exec_mode(const RoutePlan &route,
                                   bool pi_failsafe,
                                   int startup_hold_after_tick) {
  if (route.route_kind == ROUTE_CM0) return EXEC_MODE_CM0;
  if (route.route_kind == ROUTE_AUTOTUNE) return EXEC_MODE_AUTOTUNE;
  if (route.route_kind == ROUTE_MANUAL) return EXEC_MODE_MANUAL;
  if (route.route_kind == ROUTE_FROST) return EXEC_MODE_FROST;
  if (pi_failsafe) return EXEC_MODE_AUTO_FAILSAFE;
  if (startup_hold_after_tick > 0) return EXEC_MODE_AUTO_STARTING;
  return EXEC_MODE_AUTO;
}

inline const char *exec_mode_text(ExecMode exec_mode) {
  if (exec_mode == EXEC_MODE_CM0) return "CM0";
  if (exec_mode == EXEC_MODE_AUTOTUNE) return "AUTOTUNE";
  if (exec_mode == EXEC_MODE_MANUAL) return "MANUAL";
  if (exec_mode == EXEC_MODE_FROST) return "CM98";
  if (exec_mode == EXEC_MODE_AUTO_FAILSAFE) return "AUTO (failsafe)";
  if (exec_mode == EXEC_MODE_AUTO_STARTING) return "AUTO (starting)";
  return "AUTO";
}

inline AutoStartPlan compute_auto_start_plan(int control_mode_code,
                                             int commissioning_task_code,
                                             int commissioning_start_pwm,
                                             int last_good_pwm,
                                             int fallback_pwm,
                                             int min_ipwm = 50,
                                             int max_ipwm = 850) {
  const int clamped_fallback = clamp_ipwm(fallback_pwm, min_ipwm, max_ipwm);
  const bool commissioning_start =
      control_mode_code == 100 && commissioning_task_code != 0;

  int start_pwm = commissioning_start
                      ? clamp_ipwm(commissioning_start_pwm, min_ipwm, max_ipwm)
                      : last_good_pwm;
  if (!commissioning_start && (start_pwm < min_ipwm || start_pwm > max_ipwm)) {
    start_pwm = clamped_fallback;
  }

  return AutoStartPlan{
      start_pwm,
      clamped_fallback,
      commissioning_start,
  };
}

inline AutoPiState reset_pi_tracking_keep_hold(const AutoPiState &state) {
  return AutoPiState{
      0.0f,
      NAN,
      0.0f,
      state.startup_hold,
      0,
  };
}

inline AutoPiState enter_auto_transition(int startup_hold_ticks) {
  return AutoPiState{
      0.0f,
      NAN,
      0.0f,
      startup_hold_ticks,
      0,
  };
}

inline AutoPiResult step_auto_pi(AutoPiState state,
                                 const AutoPiInput &input,
                                 const AutoPiConfig &cfg) {
  int pwm_local = input.pwm_seed;
  const bool flow_signal_valid = !isnan(input.flow_lph);
  const bool failsafe =
      isnan(input.setpoint_lph) || input.setpoint_lph <= 0.0f || !flow_signal_valid;

  if (failsafe) {
    return AutoPiResult{
        cfg.failsafe_ipwm,
        reset_pi_tracking_keep_hold(state),
        true,
        input.last_good_pwm,
    };
  }

  if (state.startup_hold > 0) {
    state.setpoint_filtered = input.flow_lph;
    state.startup_hold--;
    state.stable_count = 0;
    return AutoPiResult{
        clamp_ipwm(pwm_local, cfg.min_ipwm, cfg.max_ipwm),
        state,
        false,
        input.last_good_pwm,
    };
  }

  if (isnan(state.setpoint_filtered)) state.setpoint_filtered = input.flow_lph;

  float d = input.setpoint_lph - state.setpoint_filtered;
  float max_step =
      ((d >= 0.0f) ? cfg.sp_ramp_up_lph_s : cfg.sp_ramp_down_lph_s) * cfg.dt_s;
  if (d > max_step) d = max_step;
  if (d < -max_step) d = -max_step;
  state.setpoint_filtered += d;

  float e = state.setpoint_filtered - input.flow_lph;
  if (fabsf(e) < cfg.deadband_lph) e = 0.0f;

  const bool have_e = e > 0.0f || e < 0.0f;
  const bool have_last_e = state.last_error > 0.0f || state.last_error < 0.0f;
  const bool sign_flip =
      have_e && have_last_e && ((e > 0.0f) != (state.last_error > 0.0f));

  if (sign_flip) {
    state.integral *= cfg.i_cross_keep;
  }

  if (!have_e) {
    state.integral *= cfg.i_deadband_keep;
  } else if (fabsf(e) <= cfg.i_active_band_lph) {
    state.integral += e * cfg.dt_s;
  } else {
    state.integral *= cfg.i_large_err_keep;
  }

  if (state.integral < cfg.i_min) state.integral = cfg.i_min;
  if (state.integral > cfg.i_max) state.integral = cfg.i_max;
  state.last_error = e;

  float u = input.kp * e + input.ki * state.integral;
  const float u_limit =
      ((e >= 0.0f) ? cfg.u_up_per_s : cfg.u_down_per_s) * cfg.dt_s;
  if (u < -u_limit) u = -u_limit;
  if (u > u_limit) u = u_limit;

  pwm_local = (int) roundf((float) pwm_local - u);
  pwm_local = clamp_ipwm(pwm_local, cfg.min_ipwm, cfg.max_ipwm);

  int next_last_good_pwm = input.last_good_pwm;
  const float target_error = input.setpoint_lph - input.flow_lph;
  if (fabsf(target_error) < cfg.stable_err_lph) {
    state.stable_count++;
  } else {
    state.stable_count = 0;
  }

  if (state.stable_count >= cfg.stable_time_ticks) {
    if (abs(next_last_good_pwm - pwm_local) >= cfg.good_pwm_step) {
      next_last_good_pwm = pwm_local;
    }
    state.stable_count = cfg.stable_time_ticks;
  }

  return AutoPiResult{
      pwm_local,
      state,
      false,
      next_last_good_pwm,
  };
}

}  // namespace oq_flow_control
