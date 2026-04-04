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
                                int &request_reason_code) {
  request_last_loop_ms = 0;
  request_total_level = 0;
  request_owner_hp = 0;
  request_reason_code = 0;
}

inline const char *regime_name(int regime_code) {
  switch (regime_code) {
    case 1: return "recovery";
    case 2: return "maintain";
    default: return "off";
  }
}

}  // namespace oq_curve
