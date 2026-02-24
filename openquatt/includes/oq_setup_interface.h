#pragma once

#include <cmath>

#include "oq_setup_mode.h"

// Setup interface entry-point for shared YAML lambdas.
// Keeps shared YAML topology-agnostic via compile-time setup selection.
namespace oq_setup {

inline constexpr bool is_valid_hp_index(std::uint8_t hp_idx) {
  return hp_idx < hp_count();
}

inline float hp2_outside_temp_c() {
#if OQ_SETUP_DUO
  return hp2_outside_temp == nullptr ? NAN : hp2_outside_temp->state;
#else
  return NAN;
#endif
}

inline float hp2_flow_lph() {
#if OQ_SETUP_DUO
  return hp2_flow == nullptr ? NAN : hp2_flow->state;
#else
  return NAN;
#endif
}

inline float supply_fallback_outlet_c() {
#if OQ_SETUP_DUO
  return hp2_water_out_temp == nullptr ? NAN : hp2_water_out_temp->state;
#else
  return hp1_water_out_temp == nullptr ? NAN : hp1_water_out_temp->state;
#endif
}

inline float boiler_upstream_outlet_c() {
  return supply_fallback_outlet_c();
}

inline float hp2_working_mode_state() {
#if OQ_SETUP_DUO
  return hp2_working_mode == nullptr ? NAN : hp2_working_mode->state;
#else
  return NAN;
#endif
}

inline float hp2_applied_level() {
#if OQ_SETUP_DUO
  return hp2_last_applied_level == nullptr ? NAN : static_cast<float>(hp2_last_applied_level->value());
#else
  return NAN;
#endif
}

inline float hp2_power_input_w() {
#if OQ_SETUP_DUO
  return hp2_power_input == nullptr ? NAN : hp2_power_input->state;
#else
  return NAN;
#endif
}

inline float hp2_heat_power_w() {
#if OQ_SETUP_DUO
  return hp2_heat_power == nullptr ? NAN : hp2_heat_power->state;
#else
  return NAN;
#endif
}

inline float hp2_runtime_minutes() {
#if OQ_SETUP_DUO
  return hp2_minutes == nullptr ? NAN : static_cast<float>(hp2_minutes->value());
#else
  return NAN;
#endif
}

inline void reset_hp2_runtime_minutes() {
#if OQ_SETUP_DUO
  if (hp2_minutes != nullptr) hp2_minutes->value() = 0;
#endif
}

inline void apply_hp2_low_noise_option(const char *option) {
#if OQ_SETUP_DUO
  if (hp2_low_noise_mode == nullptr) return;
  if (!hp2_low_noise_mode->has_state() || hp2_low_noise_mode->current_option() != option) {
    auto call = hp2_low_noise_mode->make_call();
    call.set_option(option);
    call.perform();
  }
#else
  (void) option;
#endif
}

inline void apply_hp2_pump_mode_option(const char *option) {
#if OQ_SETUP_DUO
  if (hp2_set_pump_mode == nullptr) return;
  if (!hp2_set_pump_mode->has_state() || hp2_set_pump_mode->current_option() != option) {
    auto call = hp2_set_pump_mode->make_call();
    call.set_option(option);
    call.perform();
  }
#else
  (void) option;
#endif
}

inline void apply_hp2_pump_pwm(float pwm) {
#if OQ_SETUP_DUO
  if (hp2_pump_speed == nullptr) return;
  const float cur = hp2_pump_speed->state;
  if (std::isnan(cur) || std::fabs(cur - pwm) > 1.0f) {
    auto call = hp2_pump_speed->make_call();
    call.set_value(pwm);
    call.perform();
  }
#else
  (void) pwm;
#endif
}

}  // namespace oq_setup
