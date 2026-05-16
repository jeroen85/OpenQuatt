#pragma once

#include <math.h>
#include <string.h>

namespace oq_supervisory {

enum ControlModeCode {
  CONTROL_MODE_CM0 = 0,
  CONTROL_MODE_CM1 = 1,
  CONTROL_MODE_CM2 = 2,
  CONTROL_MODE_CM3 = 3,
  CONTROL_MODE_CM5 = 5,
  CONTROL_MODE_CM98 = 98,
  CONTROL_MODE_CM100 = 100,
};

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

struct NormalTransitionInput {
  int current_mode;
  bool cooling_request_active;
  bool heating_request_active;
  int base_target;
};

struct NormalTransitionResult {
  int desired_mode;
  int start_cm1_next_after;
};

struct Cm3TransitionInput {
  int current_mode;
  bool power_house_active;
  bool boiler_assist_enabled;
  bool heating_request_active;
  int base_target;
  bool need_on;
  bool ok_off;
  bool min_cm2_elapsed;
  bool min_cm3_elapsed;
  bool promote_elapsed;
  bool demote_elapsed;
};

inline int normalize_override_mode(int override_mode) {
  if (override_mode < 0 || override_mode > 3) return 0;
  return override_mode;
}

inline int control_mode_id_to_code(const char *cm_id) {
  if (cm_id == nullptr) return CONTROL_MODE_CM0;
  if (strcmp(cm_id, "CM100") == 0) return CONTROL_MODE_CM100;
  if (strcmp(cm_id, "CM98") == 0) return CONTROL_MODE_CM98;
  if (strcmp(cm_id, "CM5") == 0) return CONTROL_MODE_CM5;
  if (strcmp(cm_id, "CM3") == 0) return CONTROL_MODE_CM3;
  if (strcmp(cm_id, "CM2") == 0) return CONTROL_MODE_CM2;
  if (strcmp(cm_id, "CM1") == 0) return CONTROL_MODE_CM1;
  return CONTROL_MODE_CM0;
}

inline const char *control_mode_code_to_id(int cm) {
  if (cm == CONTROL_MODE_CM100) return "CM100";
  if (cm == CONTROL_MODE_CM98) return "CM98";
  if (cm == CONTROL_MODE_CM5) return "CM5";
  if (cm == CONTROL_MODE_CM3) return "CM3";
  if (cm == CONTROL_MODE_CM2) return "CM2";
  if (cm == CONTROL_MODE_CM1) return "CM1";
  return "CM0";
}

inline const char *control_mode_code_to_label(int cm) {
  if (cm == CONTROL_MODE_CM100) return "CM100 - Commissioning";
  if (cm == CONTROL_MODE_CM98) return "CM98 - Anti-Freeze Protection - Water Circulation";
  if (cm == CONTROL_MODE_CM5) return "CM5 - Cooling";
  if (cm == CONTROL_MODE_CM3) return "CM3 - Heating - Heat Pump + Boiler";
  if (cm == CONTROL_MODE_CM2) return "CM2 - Heating - Heat Pump Only";
  if (cm == CONTROL_MODE_CM1) return "CM1 - Preflow/Postflow";
  return "CM0 - Standby";
}

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

inline int compute_base_target(bool cooling_request_active,
                               bool heating_request_active,
                               bool frost_active,
                               bool lowflow_fault_active,
                               bool flow_low) {
  const bool thermal_request_active = cooling_request_active || heating_request_active;
  int base_target = CONTROL_MODE_CM0;
  if (cooling_request_active) base_target = CONTROL_MODE_CM5;
  else if (heating_request_active) base_target = CONTROL_MODE_CM2;
  else if (frost_active) base_target = CONTROL_MODE_CM98;

  if (thermal_request_active && (lowflow_fault_active || flow_low)) {
    return CONTROL_MODE_CM1;
  }
  return base_target;
}

inline int resolve_override_or_commissioning(int override_mode, bool commissioning_in_progress) {
  if (override_mode == 1) return CONTROL_MODE_CM0;
  if (override_mode == 2) return CONTROL_MODE_CM1;
  if (override_mode == 3) return CONTROL_MODE_CM98;
  if (commissioning_in_progress) return CONTROL_MODE_CM100;
  return -1;
}

inline int resolve_cm1_expiry_target(int cm1_next_after,
                                     bool cooling_request_active,
                                     bool heating_request_active,
                                     int base_target,
                                     int strategy_active_code) {
  if (cm1_next_after == CONTROL_MODE_CM2) {
    if (heating_request_active && base_target == CONTROL_MODE_CM2) return CONTROL_MODE_CM2;
    if (base_target == CONTROL_MODE_CM98) return CONTROL_MODE_CM98;
    return CONTROL_MODE_CM0;
  }
  if (cm1_next_after == CONTROL_MODE_CM5) {
    if (cooling_request_active && base_target == CONTROL_MODE_CM5) return CONTROL_MODE_CM5;
    if (base_target == CONTROL_MODE_CM98) return CONTROL_MODE_CM98;
    return CONTROL_MODE_CM0;
  }
  if (cm1_next_after == CONTROL_MODE_CM0) {
    if (cooling_request_active && base_target == CONTROL_MODE_CM5) return CONTROL_MODE_CM5;
    if (strategy_active_code == 2 && heating_request_active && base_target == CONTROL_MODE_CM2) {
      return CONTROL_MODE_CM2;
    }
    if (base_target == CONTROL_MODE_CM98) return CONTROL_MODE_CM98;
    return CONTROL_MODE_CM0;
  }
  if (cm1_next_after == CONTROL_MODE_CM98) return CONTROL_MODE_CM98;
  if (base_target == CONTROL_MODE_CM5) return CONTROL_MODE_CM5;
  if (base_target == CONTROL_MODE_CM2) return CONTROL_MODE_CM2;
  if (base_target == CONTROL_MODE_CM98) return CONTROL_MODE_CM98;
  return CONTROL_MODE_CM0;
}

inline NormalTransitionResult resolve_normal_transition(const NormalTransitionInput &input) {
  if (input.cooling_request_active) {
    if (input.base_target == CONTROL_MODE_CM5) {
      if (input.current_mode == CONTROL_MODE_CM5) {
        return NormalTransitionResult{CONTROL_MODE_CM5, -1};
      }
      return NormalTransitionResult{CONTROL_MODE_CM1, CONTROL_MODE_CM5};
    }
    return NormalTransitionResult{CONTROL_MODE_CM1, -1};
  }

  if (input.heating_request_active) {
    if (input.base_target == CONTROL_MODE_CM2) {
      if (input.current_mode == CONTROL_MODE_CM2 || input.current_mode == CONTROL_MODE_CM3) {
        return NormalTransitionResult{CONTROL_MODE_CM2, -1};
      }
      return NormalTransitionResult{CONTROL_MODE_CM1, CONTROL_MODE_CM2};
    }
    return NormalTransitionResult{CONTROL_MODE_CM1, -1};
  }

  if (input.current_mode == CONTROL_MODE_CM2 || input.current_mode == CONTROL_MODE_CM5) {
    return NormalTransitionResult{CONTROL_MODE_CM1, CONTROL_MODE_CM0};
  }
  if (input.base_target == CONTROL_MODE_CM98) {
    return NormalTransitionResult{CONTROL_MODE_CM98, -1};
  }
  return NormalTransitionResult{CONTROL_MODE_CM0, -1};
}

inline int apply_standby_hold_guard(int current_mode,
                                    bool thermal_request_active,
                                    int base_target,
                                    bool any_hp_active_guard,
                                    int desired_mode) {
  if (current_mode == CONTROL_MODE_CM1 &&
      !thermal_request_active &&
      base_target == CONTROL_MODE_CM0 &&
      any_hp_active_guard) {
    return CONTROL_MODE_CM1;
  }
  return desired_mode;
}

inline int resolve_cm3_transition(const Cm3TransitionInput &input) {
  int desired_mode = input.current_mode;
  if (input.power_house_active && input.boiler_assist_enabled) {
    if (input.current_mode == CONTROL_MODE_CM2 &&
        input.min_cm2_elapsed &&
        input.need_on &&
        input.promote_elapsed) {
      desired_mode = CONTROL_MODE_CM3;
    } else if (input.current_mode == CONTROL_MODE_CM3 &&
               input.min_cm3_elapsed &&
               input.ok_off &&
               input.demote_elapsed) {
      desired_mode = CONTROL_MODE_CM2;
    }
  } else if (input.current_mode == CONTROL_MODE_CM3 &&
             input.heating_request_active &&
             input.base_target == CONTROL_MODE_CM2) {
    desired_mode = CONTROL_MODE_CM2;
  }
  return desired_mode;
}

inline bool pump_should_run(int desired_cm,
                            bool commissioning_task_active,
                            bool sticky_active,
                            bool any_hp_active_guard) {
  return (desired_cm != CONTROL_MODE_CM0 && desired_cm != CONTROL_MODE_CM100) ||
         commissioning_task_active ||
         sticky_active ||
         any_hp_active_guard;
}

inline float cm0_pump_target_pwm(bool sticky_active, float stop_pwm, float sticky_pwm) {
  return sticky_active ? sticky_pwm : stop_pwm;
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
