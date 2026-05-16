#pragma once

#include <stdint.h>

namespace oq_strategy {

inline void update_lead_hp(int &last_lead_hp, bool lead_is_hp1) {
  const int lead_code = lead_is_hp1 ? 1 : 2;
  if (last_lead_hp != lead_code) last_lead_hp = lead_code;
}

}  // namespace oq_strategy

namespace oq_cooling {

inline void reset_request_state(uint32_t &request_last_loop_ms,
                                int &request_hp1_level,
                                int &request_hp2_level,
                                int &request_owner_hp,
                                int &owner_hp,
                                int &request_reason_code) {
  request_last_loop_ms = 0;
  request_hp1_level = 0;
  request_hp2_level = 0;
  request_owner_hp = 0;
  owner_hp = 0;
  request_reason_code = 0;
}

inline int pick_owner_hp(int stored_owner,
                         bool demand_active,
                         bool prev_hp1_on,
                         bool prev_hp2_on,
                         bool hp1_can_start,
                         bool hp2_can_start,
                         int recent_owner,
                         bool lead_is_hp1) {
  if (!demand_active) return 0;
  if (prev_hp1_on && !prev_hp2_on) return 1;
  if (prev_hp2_on && !prev_hp1_on) return 2;

  const bool owner_ok =
      (stored_owner == 1 && hp1_can_start) ||
      (stored_owner == 2 && hp2_can_start);
  if (owner_ok) return stored_owner;
  if (recent_owner == 1 && hp1_can_start) return 1;
  if (recent_owner == 2 && hp2_can_start) return 2;
  if (lead_is_hp1 && hp1_can_start) return 1;
  if (!lead_is_hp1 && hp2_can_start) return 2;
  if (hp1_can_start && !hp2_can_start) return 1;
  if (hp2_can_start && !hp1_can_start) return 2;
  if (hp1_can_start && hp2_can_start) return lead_is_hp1 ? 1 : 2;
  return 0;
}

}  // namespace oq_cooling

namespace oq_ph {

inline void reset_request_state(uint32_t &request_last_loop_ms,
                                int &request_hp1_level,
                                int &request_hp2_level,
                                int &request_owner_hp,
                                int &request_reason_code) {
  request_last_loop_ms = 0;
  request_hp1_level = 0;
  request_hp2_level = 0;
  request_owner_hp = 0;
  request_reason_code = 0;
}

}  // namespace oq_ph
