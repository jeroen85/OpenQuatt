#pragma once

#include <cmath>

#include "oq_setup_mode.h"

// Setup interface entry-point for shared YAML lambdas.
// Keeps shared YAML topology-agnostic via compile-time setup selection.
namespace oq_setup {

namespace detail {

template<typename T>
inline float state_or_nan(T *entity) {
  return entity == nullptr ? NAN : entity->state;
}

template<typename T>
inline float value_or_nan(T *entity) {
  return entity == nullptr ? NAN : static_cast<float>(entity->value());
}

template<typename T>
inline void apply_option_if_changed(T *entity, const char *option) {
  if (entity == nullptr || option == nullptr) return;
  if (!entity->has_state() || entity->current_option() != option) {
    auto call = entity->make_call();
    call.set_option(option);
    call.perform();
  }
}

template<typename T>
inline void apply_value_if_changed(T *entity, float value, float epsilon) {
  if (entity == nullptr) return;
  const float current = entity->state;
  if (std::isnan(current) || std::fabs(current - value) > epsilon) {
    auto call = entity->make_call();
    call.set_value(value);
    call.perform();
  }
}

#if OQ_SETUP_DUO
inline float hp2_outside_temp_c() { return state_or_nan(hp2_outside_temp); }
inline float hp2_flow_lph() { return state_or_nan(hp2_flow); }
inline float supply_fallback_outlet_c() { return state_or_nan(hp2_water_out_temp); }
inline float hp2_working_mode_state() { return state_or_nan(hp2_working_mode); }
inline float hp2_applied_level() { return value_or_nan(hp2_last_applied_level); }
inline float hp2_power_input_w() { return state_or_nan(hp2_power_input); }
inline float hp2_heat_power_w() { return state_or_nan(hp2_heat_power); }
inline float hp2_runtime_minutes() { return value_or_nan(hp2_minutes); }
inline void reset_hp2_runtime_minutes() {
  if (hp2_minutes != nullptr) hp2_minutes->value() = 0;
}
inline void apply_hp2_low_noise_option(const char *option) {
  apply_option_if_changed(hp2_low_noise_mode, option);
}
inline void apply_hp2_pump_mode_option(const char *option) {
  apply_option_if_changed(hp2_set_pump_mode, option);
}
inline void apply_hp2_pump_pwm(float pwm) {
  apply_value_if_changed(hp2_pump_speed, pwm, 1.0f);
}
#else
inline float hp2_outside_temp_c() { return NAN; }
inline float hp2_flow_lph() { return NAN; }
inline float supply_fallback_outlet_c() { return state_or_nan(hp1_water_out_temp); }
inline float hp2_working_mode_state() { return NAN; }
inline float hp2_applied_level() { return NAN; }
inline float hp2_power_input_w() { return NAN; }
inline float hp2_heat_power_w() { return NAN; }
inline float hp2_runtime_minutes() { return NAN; }
inline void reset_hp2_runtime_minutes() {}
inline void apply_hp2_low_noise_option(const char *) {}
inline void apply_hp2_pump_mode_option(const char *) {}
inline void apply_hp2_pump_pwm(float) {}
#endif

}  // namespace detail

inline constexpr bool is_valid_hp_index(std::uint8_t hp_idx) {
  return hp_idx < hp_count();
}

inline float hp2_outside_temp_c() { return detail::hp2_outside_temp_c(); }
inline float hp2_flow_lph() { return detail::hp2_flow_lph(); }
inline float supply_fallback_outlet_c() { return detail::supply_fallback_outlet_c(); }
inline float boiler_upstream_outlet_c() { return supply_fallback_outlet_c(); }
inline float hp2_working_mode_state() { return detail::hp2_working_mode_state(); }
inline float hp2_applied_level() { return detail::hp2_applied_level(); }
inline float hp2_power_input_w() { return detail::hp2_power_input_w(); }
inline float hp2_heat_power_w() { return detail::hp2_heat_power_w(); }
inline float hp2_runtime_minutes() { return detail::hp2_runtime_minutes(); }
inline void reset_hp2_runtime_minutes() { detail::reset_hp2_runtime_minutes(); }
inline void apply_hp2_low_noise_option(const char *option) {
  detail::apply_hp2_low_noise_option(option);
}
inline void apply_hp2_pump_mode_option(const char *option) {
  detail::apply_hp2_pump_mode_option(option);
}
inline void apply_hp2_pump_pwm(float pwm) { detail::apply_hp2_pump_pwm(pwm); }

}  // namespace oq_setup
