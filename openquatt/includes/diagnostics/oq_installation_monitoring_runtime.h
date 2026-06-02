#pragma once

#include <algorithm>
#include <cmath>
#include <cstddef>
#include <cstdint>

#include "oq_installation_monitoring.h"

namespace oq_diagnostics {

inline size_t compressor_starts_warning_limit() {
  return static_cast<size_t>(lroundf(id(oq_compressor_starts_warning_limit).state));
}

inline bool compressor_cycling_warning(uint32_t now_ms, size_t warning_limit) {
  auto &monitor = installation_monitor();
  return monitor.compressor_cycling_warning(now_ms, warning_limit) ||
         monitor.alternating_cycling_warning(now_ms, warning_limit);
}

inline void publish_compressor_cycling_alert_metadata() {
  id(oq_compressor_cycling_alert_latched_sensor)
      .publish_state(id(oq_compressor_cycling_alert_latched));
  id(oq_compressor_cycling_alert_alternating_sensor)
      .publish_state(id(oq_compressor_cycling_alert_alternating));
  id(oq_compressor_cycling_alert_first_seen)
      .publish_state(id(oq_compressor_cycling_alert_first_seen_epoch) > 0U
                         ? id(oq_compressor_cycling_alert_first_seen_epoch)
                         : NAN);
  id(oq_compressor_cycling_alert_last_seen)
      .publish_state(id(oq_compressor_cycling_alert_last_seen_epoch) > 0U
                         ? id(oq_compressor_cycling_alert_last_seen_epoch)
                         : NAN);
  id(oq_compressor_cycling_alert_hp1_peak)
      .publish_state(id(oq_compressor_cycling_alert_hp1_peak_1h));
  id(oq_compressor_cycling_alert_hp2_peak)
      .publish_state(id(oq_compressor_cycling_alert_hp2_peak_1h));
}

inline void capture_compressor_cycling_alert() {
  const uint32_t now_ms = millis();
  const size_t warning_limit = compressor_starts_warning_limit();
  auto &monitor = installation_monitor();
  const int hp1_starts = monitor.start_count(1, now_ms, InstallationMonitor::kHourMs);
  const int hp2_starts = monitor.start_count(2, now_ms, InstallationMonitor::kHourMs);
  const bool alternating = monitor.alternating_cycling_warning(now_ms, warning_limit);
  if (hp1_starts <= warning_limit && hp2_starts <= warning_limit && !alternating) {
    return;
  }

  const auto now = id(oq_time).now();
  const uint32_t now_epoch = now.is_valid() ? static_cast<uint32_t>(now.timestamp) : 0U;
  const bool first_occurrence = !id(oq_compressor_cycling_alert_latched);
  id(oq_compressor_cycling_alert_latched) = true;
  if (first_occurrence) {
    id(oq_compressor_cycling_alert_first_seen_epoch) = now_epoch;
    id(oq_compressor_cycling_alert_hp1_peak_1h) = 0;
    id(oq_compressor_cycling_alert_hp2_peak_1h) = 0;
    id(oq_compressor_cycling_alert_alternating) = false;
  } else if (id(oq_compressor_cycling_alert_first_seen_epoch) == 0U && now_epoch > 0U) {
    id(oq_compressor_cycling_alert_first_seen_epoch) = now_epoch;
  }
  if (now_epoch > 0U) {
    id(oq_compressor_cycling_alert_last_seen_epoch) = now_epoch;
  }
  id(oq_compressor_cycling_alert_hp1_peak_1h) =
      std::max(id(oq_compressor_cycling_alert_hp1_peak_1h), hp1_starts);
  id(oq_compressor_cycling_alert_hp2_peak_1h) =
      std::max(id(oq_compressor_cycling_alert_hp2_peak_1h), hp2_starts);
  id(oq_compressor_cycling_alert_alternating) =
      id(oq_compressor_cycling_alert_alternating) || alternating;
  publish_compressor_cycling_alert_metadata();
  ESP_LOGW(
      "oq_diag",
      "Compressor cycling incident recorded: HP1=%d starts/h, HP2=%d starts/h.",
      hp1_starts,
      hp2_starts);
}

inline void acknowledge_compressor_cycling_alert() {
  const uint32_t now_ms = millis();
  if (compressor_cycling_warning(now_ms, compressor_starts_warning_limit())) {
    ESP_LOGW("oq_diag", "Active compressor cycling incident cannot be acknowledged.");
    return;
  }

  id(oq_compressor_cycling_alert_latched) = false;
  id(oq_compressor_cycling_alert_first_seen_epoch) = 0U;
  id(oq_compressor_cycling_alert_last_seen_epoch) = 0U;
  id(oq_compressor_cycling_alert_hp1_peak_1h) = 0;
  id(oq_compressor_cycling_alert_hp2_peak_1h) = 0;
  id(oq_compressor_cycling_alert_alternating) = false;
  publish_compressor_cycling_alert_metadata();
  ESP_LOGI("oq_diag", "Compressor cycling incident acknowledged.");
}

inline bool logged_compressor_cycling_warning(uint32_t now_ms) {
  const bool active = installation_monitor().compressor_cycling_warning(
      now_ms, compressor_starts_warning_limit());
  static bool previous = false;
  if (active != previous) {
    ESP_LOGW("oq_diag", "Compressor cycling warning %s.", active ? "active" : "cleared");
    previous = active;
  }
  return active;
}

inline bool logged_alternating_cycling_warning(uint32_t now_ms) {
  const bool active = installation_monitor().alternating_cycling_warning(
      now_ms, compressor_starts_warning_limit());
  static bool previous = false;
  if (active != previous) {
    ESP_LOGW("oq_diag", "Alternating compressor starts warning %s.", active ? "active" : "cleared");
    previous = active;
  }
  return active;
}

}  // namespace oq_diagnostics
