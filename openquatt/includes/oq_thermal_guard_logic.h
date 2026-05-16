#pragma once

#include <stdint.h>

#include <string>

#include "oq_thermal_request_logic.h"

namespace oq_guard {

using oq_request::ExcludedLevels;

struct GuardedLevel {
  int level;
  bool keep_mode_active_on_zero;
};

inline GuardedLevel from_intent_level(int intent_level,
                                      int min_level,
                                      int max_level,
                                      const ExcludedLevels &excluded) {
  return GuardedLevel{
      oq_request::pick_allowed_level(intent_level, min_level, max_level, excluded),
      false,
  };
}

inline GuardedLevel limit_slew_level(GuardedLevel guarded,
                                     uint32_t now_ms,
                                     int previous_applied_level,
                                     uint32_t last_level_change_ms,
                                     int up_hold_s,
                                     int down_hold_s) {
  if (guarded.level == previous_applied_level) return guarded;

  int limited = guarded.level;
  if (limited > previous_applied_level + 1) limited = previous_applied_level + 1;
  if (limited < previous_applied_level - 1) limited = previous_applied_level - 1;
  if (limited == previous_applied_level) {
    guarded.level = limited;
    return guarded;
  }

  const bool moving_up = limited > previous_applied_level;
  const uint32_t hold_ms =
      (uint32_t) ((moving_up ? up_hold_s : down_hold_s) * 1000UL);
  if (last_level_change_ms > 0 && now_ms > last_level_change_ms) {
    const uint32_t dt_change_ms = now_ms - last_level_change_ms;
    if (dt_change_ms < hold_ms) {
      guarded.level = previous_applied_level;
      return guarded;
    }
  }

  guarded.level = limited;
  return guarded;
}

inline void allow_only_one_hp_change(GuardedLevel &hp1_guarded,
                                     GuardedLevel &hp2_guarded,
                                     int previous_hp1_level,
                                     int previous_hp2_level,
                                     bool lead_is_hp1) {
  const int d_hp1 = hp1_guarded.level - previous_hp1_level;
  const int d_hp2 = hp2_guarded.level - previous_hp2_level;
  if (d_hp1 == 0 || d_hp2 == 0) return;

  bool apply_hp1_change = true;
  if (d_hp1 > 0 && d_hp2 > 0) {
    apply_hp1_change = lead_is_hp1;
  } else if (d_hp1 < 0 && d_hp2 < 0) {
    apply_hp1_change = !lead_is_hp1;
  } else {
    apply_hp1_change = (d_hp1 < 0);
  }

  if (apply_hp1_change) {
    hp2_guarded.level = previous_hp2_level;
    hp2_guarded.keep_mode_active_on_zero = false;
  } else {
    hp1_guarded.level = previous_hp1_level;
    hp1_guarded.keep_mode_active_on_zero = false;
  }
}

inline void apply_absolute_zero(GuardedLevel &guarded) {
  guarded.level = 0;
  guarded.keep_mode_active_on_zero = false;
}

inline bool min_runtime_hold_active(uint32_t now_ms,
                                    uint32_t last_real_start_ms,
                                    uint32_t min_runtime_ms,
                                    bool cooling_floor_trip,
                                    int previous_applied_level,
                                    bool measured_thermal_active) {
  if (cooling_floor_trip || min_runtime_ms == 0) return false;
  if (!oq_request::min_runtime_window_active(now_ms, last_real_start_ms,
                                             min_runtime_ms)) {
    return false;
  }
  return previous_applied_level > 0 || measured_thermal_active;
}

inline GuardedLevel apply_min_runtime_floor(
    GuardedLevel guarded,
    uint32_t now_ms,
    uint32_t last_real_start_ms,
    uint32_t min_runtime_ms,
    bool cooling_floor_trip,
    int previous_applied_level,
    bool measured_thermal_active,
    int min_level,
    int max_level,
    const ExcludedLevels &excluded) {
  if (guarded.level != 0) return guarded;
  if (!min_runtime_hold_active(now_ms, last_real_start_ms, min_runtime_ms,
                               cooling_floor_trip, previous_applied_level,
                               measured_thermal_active)) {
    return guarded;
  }

  guarded.level = oq_request::pick_allowed_level(1, min_level, max_level, excluded);
  guarded.keep_mode_active_on_zero = false;
  return guarded;
}

inline int clamp_cap_level(bool silent_active,
                           float silent_cap_state,
                           float day_cap_state,
                           int min_level,
                           int max_level) {
  const float raw_cap = silent_active ? silent_cap_state : day_cap_state;
  const int cap_level = (int) roundf(raw_cap);
  return oq_request::clamp_level(cap_level, min_level, max_level);
}

inline GuardedLevel apply_capped_level(GuardedLevel guarded,
                                       int min_level,
                                       int max_level,
                                       int cap_level,
                                       const ExcludedLevels &excluded) {
  if (guarded.level <= 0) return guarded;

  const int capped_level = oq_request::pick_allowed_capped_level(
      guarded.level, min_level, max_level, cap_level, excluded);
  guarded.keep_mode_active_on_zero =
      (guarded.keep_mode_active_on_zero || (guarded.level > 0 && capped_level == 0));
  guarded.level = capped_level;
  return guarded;
}

inline void force_single_topology_secondary_off(GuardedLevel &secondary_guarded) {
  secondary_guarded.level = 0;
  secondary_guarded.keep_mode_active_on_zero = false;
}

inline bool mode_should_stay_active_on_guarded_request(int mode_code,
                                                       int guarded_level,
                                                       bool keep_mode_active_on_zero) {
  const bool request_thermal_active = (mode_code == 1 || mode_code == 2);
  return request_thermal_active &&
         (guarded_level > 0 || keep_mode_active_on_zero);
}

}  // namespace oq_guard
