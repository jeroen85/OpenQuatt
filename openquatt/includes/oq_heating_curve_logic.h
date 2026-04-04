#pragma once

#include <math.h>
#include <stdint.h>

namespace oq_curve {

inline void reset_control_state(float &demand_continuous,
                                int &demand_curve,
                                int &demand_pre_guardrail,
                                bool &heat_request_active,
                                uint32_t &stop_arm_ms,
                                uint32_t &off_since_ms,
                                bool &restart_inhibit_active,
                                int &phase_code,
                                int &regime_code,
                                uint32_t &regime_since_ms,
                                int &maintain_level,
                                uint32_t &maintain_raise_arm_ms,
                                uint32_t &maintain_lower_arm_ms,
                                uint32_t &assist_enter_arm_ms,
                                uint32_t &assist_exit_arm_ms) {
  demand_continuous = NAN;
  demand_curve = 0;
  demand_pre_guardrail = 0;
  heat_request_active = false;
  stop_arm_ms = 0;
  off_since_ms = 0;
  restart_inhibit_active = false;
  phase_code = 0;
  regime_code = 0;
  regime_since_ms = 0;
  maintain_level = 0;
  maintain_raise_arm_ms = 0;
  maintain_lower_arm_ms = 0;
  assist_enter_arm_ms = 0;
  assist_exit_arm_ms = 0;
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
                                int &request_reason_code) {
  request_last_loop_ms = 0;
  request_total_level = 0;
  request_owner_hp = 0;
  request_reason_code = 0;
}

inline const char *phase_name(int phase_code) {
  switch (phase_code) {
    case 1: return "heat";
    case 2: return "coast";
    default: return "off";
  }
}

inline const char *regime_name(int regime_code) {
  switch (regime_code) {
    case 1: return "recovery";
    case 2: return "maintain";
    case 3: return "assist";
    default: return "off";
  }
}

inline const char *strategy_phase_name(int phase_code, int regime_code) {
  if (regime_code > 0) return regime_name(regime_code);
  return phase_name(phase_code);
}

}  // namespace oq_curve
