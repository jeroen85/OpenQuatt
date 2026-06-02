#pragma once

#include <algorithm>
#include <array>
#include <cstddef>
#include <cstdint>

namespace oq_diagnostics {

class InstallationMonitor {
 public:
  static constexpr uint32_t kHourMs = 60U * 60U * 1000U;
  static constexpr uint32_t kSixHoursMs = 6U * kHourMs;
  static constexpr uint32_t kDayMs = 24U * kHourMs;

  bool observe_compressor_frequency(int hp_index, float frequency_hz, uint32_t now_ms) {
    UnitState &unit = unit_for(hp_index);
    const bool active = frequency_hz > 0.0f;

    if (!unit.initialized) {
      unit.initialized = true;
      unit.running = active;
      return false;
    }

    if (active) {
      unit.stop_candidate_active = false;
      if (unit.running) {
        return false;
      }

      unit.running = true;
      record_start(hp_index, unit, now_ms);
      return true;
    }

    if (!unit.running) {
      unit.stop_candidate_active = false;
      return false;
    }

    if (!unit.stop_candidate_active) {
      unit.stop_candidate_active = true;
      unit.stop_candidate_ms = now_ms;
      return false;
    }

    if (elapsed_ms(now_ms, unit.stop_candidate_ms) >= kStopConfirmMs) {
      unit.running = false;
      unit.stop_candidate_active = false;
    }
    return false;
  }

  size_t start_count(int hp_index, uint32_t now_ms, uint32_t window_ms) const {
    const UnitState &unit = unit_for(hp_index);
    size_t count = 0;
    for (size_t index = 0; index < unit.starts_count; ++index) {
      if (elapsed_ms(now_ms, unit.starts_ms[index]) <= window_ms) {
        ++count;
      }
    }
    return count;
  }

  float last_start_age_minutes(int hp_index, uint32_t now_ms) const {
    const UnitState &unit = unit_for(hp_index);
    if (!unit.has_last_start) {
      return -1.0f;
    }
    return static_cast<float>(elapsed_ms(now_ms, unit.last_start_ms)) / 60000.0f;
  }

  bool compressor_cycling_warning(uint32_t now_ms, size_t warning_limit) const {
    return start_count(1, now_ms, kHourMs) > warning_limit ||
           start_count(2, now_ms, kHourMs) > warning_limit;
  }

  bool alternating_cycling_warning(uint32_t now_ms, size_t warning_limit) const {
    const size_t required_events = std::max<size_t>(warning_limit + 1U, 4U);
    if (events_count_ < required_events) {
      return false;
    }

    uint8_t previous_hp = 0;
    for (size_t offset = 0; offset < required_events; ++offset) {
      const StartEvent &event = events_[reverse_event_index(offset)];
      if (elapsed_ms(now_ms, event.at_ms) > kHourMs) {
        return false;
      }
      if (previous_hp != 0 && previous_hp == event.hp_index) {
        return false;
      }
      previous_hp = event.hp_index;
    }
    return true;
  }

 private:
  static constexpr uint32_t kStopConfirmMs = 20U * 1000U;
  // A confirmed stop takes at least kStopConfirmMs. Keep enough timestamps for
  // every physically possible start in a rolling day without truncating counts.
  static constexpr size_t kStartsCapacity = (kDayMs / kStopConfirmMs) + 1U;
  static constexpr size_t kEventsCapacity = 32;

  struct UnitState {
    bool initialized = false;
    bool running = false;
    bool stop_candidate_active = false;
    bool has_last_start = false;
    uint32_t stop_candidate_ms = 0;
    uint32_t last_start_ms = 0;
    size_t starts_count = 0;
    size_t starts_next = 0;
    std::array<uint32_t, kStartsCapacity> starts_ms{};
  };

  struct StartEvent {
    uint32_t at_ms = 0;
    uint8_t hp_index = 0;
  };

  static uint32_t elapsed_ms(uint32_t now_ms, uint32_t then_ms) {
    return static_cast<uint32_t>(now_ms - then_ms);
  }

  UnitState &unit_for(int hp_index) {
    return hp_index == 2 ? hp2_ : hp1_;
  }

  const UnitState &unit_for(int hp_index) const {
    return hp_index == 2 ? hp2_ : hp1_;
  }

  size_t reverse_event_index(size_t offset) const {
    return (events_next_ + kEventsCapacity - 1U - offset) % kEventsCapacity;
  }

  void record_start(int hp_index, UnitState &unit, uint32_t now_ms) {
    unit.starts_ms[unit.starts_next_] = now_ms;
    unit.starts_next = (unit.starts_next + 1U) % kStartsCapacity;
    if (unit.starts_count < kStartsCapacity) {
      ++unit.starts_count;
    }
    unit.has_last_start = true;
    unit.last_start_ms = now_ms;

    events_[events_next_] = StartEvent{now_ms, static_cast<uint8_t>(hp_index == 2 ? 2 : 1)};
    events_next_ = (events_next_ + 1U) % kEventsCapacity;
    if (events_count_ < kEventsCapacity) {
      ++events_count_;
    }
  }

  UnitState hp1_;
  UnitState hp2_;
  size_t events_count_ = 0;
  size_t events_next_ = 0;
  std::array<StartEvent, kEventsCapacity> events_{};
};

inline InstallationMonitor &installation_monitor() {
  static InstallationMonitor monitor;
  return monitor;
}

}  // namespace oq_diagnostics
