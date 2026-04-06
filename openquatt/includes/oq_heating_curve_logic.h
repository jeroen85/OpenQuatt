#pragma once

#include <math.h>
#include <stdint.h>
#include <string>

namespace oq_curve {

struct ControlProfileTuning {
  float start_delta_c = 0.45f;
  float stop_delta_c = 0.90f;
  int off_pid_max_f = 1;
  uint32_t off_confirm_ms = 360000UL;
  float room_overheat_off_c = 0.30f;
  float room_resume_heat_c = 0.05f;
  float restart_delta_c = 0.80f;
  float restart_bypass_extra_c = 0.45f;
  uint32_t off_reentry_min_ms = 480000UL;
  float recovery_enter_c = 0.75f;
  float recovery_exit_c = 0.25f;
  float outside_tau_s = 1800.0f;
  float trim_start_c = 0.10f;
  float trim_gain = 1.50f;
  float trim_max_c = 2.00f;
  float quant_step_c = 0.5f;
  int steady_up_hold_s = 180;
  int steady_down_hold_s = 15;
  int recovery_up_hold_s = 45;
  int dual_startup_grace_s = 480;
  int dual_emergency_hold_min = 6;
  float dual_emergency_temp_err_c = 1.50f;
  float dual_disable_temp_err_max_c = 0.50f;
};

inline ControlProfileTuning control_profile(const std::string &profile_option) {
  ControlProfileTuning tuning;
  if (profile_option == "Comfort") {
    tuning.start_delta_c = 0.30f;
    tuning.stop_delta_c = 0.70f;
    tuning.off_confirm_ms = 240000UL;
    tuning.room_overheat_off_c = 0.20f;
    tuning.room_resume_heat_c = 0.03f;
    tuning.restart_delta_c = 0.60f;
    tuning.restart_bypass_extra_c = 0.35f;
    tuning.off_reentry_min_ms = 300000UL;
    tuning.recovery_enter_c = 0.55f;
    tuning.recovery_exit_c = 0.15f;
    tuning.outside_tau_s = 900.0f;
    tuning.trim_start_c = 0.05f;
    tuning.trim_gain = 2.00f;
    tuning.quant_step_c = 0.25f;
    tuning.steady_up_hold_s = 90;
    tuning.steady_down_hold_s = 10;
    tuning.recovery_up_hold_s = 30;
    tuning.dual_startup_grace_s = 300;
    tuning.dual_emergency_hold_min = 4;
    tuning.dual_emergency_temp_err_c = 1.20f;
    tuning.dual_disable_temp_err_max_c = 0.70f;
  } else if (profile_option == "Stable") {
    tuning.start_delta_c = 0.65f;
    tuning.stop_delta_c = 1.10f;
    tuning.off_confirm_ms = 420000UL;
    tuning.room_overheat_off_c = 0.35f;
    tuning.room_resume_heat_c = 0.08f;
    tuning.restart_delta_c = 1.00f;
    tuning.restart_bypass_extra_c = 0.55f;
    tuning.off_reentry_min_ms = 600000UL;
    tuning.recovery_enter_c = 1.00f;
    tuning.recovery_exit_c = 0.35f;
    tuning.outside_tau_s = 3600.0f;
    tuning.trim_start_c = 0.15f;
    tuning.trim_gain = 1.00f;
    tuning.trim_max_c = 2.50f;
    tuning.quant_step_c = 1.0f;
    tuning.steady_up_hold_s = 300;
    tuning.steady_down_hold_s = 30;
    tuning.recovery_up_hold_s = 75;
    tuning.dual_startup_grace_s = 600;
    tuning.dual_emergency_hold_min = 8;
    tuning.dual_emergency_temp_err_c = 1.80f;
    tuning.dual_disable_temp_err_max_c = 0.40f;
  }

  return tuning;
}

inline void reset_control_state(float &demand_continuous,
                                int &demand_curve,
                                int &demand_pre_guardrail,
                                bool &heat_request_active,
                                uint32_t &stop_arm_ms,
                                uint32_t &off_since_ms,
                                bool &restart_inhibit_active,
                                int &regime_code) {
  demand_continuous = NAN;
  demand_curve = 0;
  demand_pre_guardrail = 0;
  heat_request_active = false;
  stop_arm_ms = 0;
  off_since_ms = 0;
  restart_inhibit_active = false;
  regime_code = 0;
}

inline void reset_outside_ema_state(float &outside_ema_c,
                                    bool &outside_ema_initialized,
                                    uint32_t &outside_ema_last_ms) {
  outside_ema_c = 0.0f;
  outside_ema_initialized = false;
  outside_ema_last_ms = 0;
}

inline void reset_request_state(uint32_t &request_last_loop_ms,
                                int &request_total_level,
                                int &request_owner_hp,
                                int &dispatch_hp1_level,
                                int &dispatch_hp2_level,
                                int &capacity_mode_code) {
  request_last_loop_ms = 0;
  request_total_level = 0;
  request_owner_hp = 0;
  dispatch_hp1_level = 0;
  dispatch_hp2_level = 0;
  capacity_mode_code = 0;
}

inline const char *regime_name(int regime_code) {
  switch (regime_code) {
    case 1: return "recovery";
    case 2: return "maintain";
    default: return "off";
  }
}

inline const char *capacity_mode_name(int capacity_mode_code) {
  switch (capacity_mode_code) {
    case 1: return "single";
    case 2: return "duo";
    default: return "off";
  }
}

}  // namespace oq_curve
