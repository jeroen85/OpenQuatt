#pragma once

#include <array>
#include <cmath>
#include <cstdio>
#include <vector>

#include "esphome/components/modbus_controller/modbus_controller.h"
#include "esphome/components/number/number.h"
#include "esphome/components/switch/switch.h"
#include "esphome/components/text_sensor/text_sensor.h"
#include "esphome/core/log.h"

namespace oq_odu_runtime_frequency {

static const char *const TAG = "oq_odu_eeprom";
static constexpr uint16_t RUNTIME_TABLE_START_ADDRESS = 3000;
static constexpr uint16_t RUNTIME_TABLE_REGISTER_COUNT = 22;
static constexpr float MIN_FREQUENCY_HZ = 0.0f;
static constexpr float MAX_FREQUENCY_HZ = 120.0f;

struct RuntimeFrequencyTableRefs {
  esphome::modbus_controller::ModbusController *controller;
  esphome::switch_::Switch *enable_switch;
  esphome::text_sensor::TextSensor *status;
  const char *prefix;
  std::array<esphome::number::Number *, 11> cooling_desired;
  std::array<esphome::number::Number *, 11> heating_desired;
  std::array<esphome::number::Number *, 11> cooling_writers;
  std::array<esphome::number::Number *, 11> heating_writers;
};

inline void publish_status(const RuntimeFrequencyTableRefs &refs, const char *message) {
  refs.status->publish_state(message);
  ESP_LOGW(TAG, "%s%s", refs.prefix, message);
}

inline bool valid_frequency(float value) {
  return !std::isnan(value) && value >= MIN_FREQUENCY_HZ && value <= MAX_FREQUENCY_HZ;
}

inline bool validate_monotonic_table(const std::array<float, 11> &values) {
  for (size_t i = 0; i < values.size(); i++) {
    if (!valid_frequency(values[i])) return false;
    if (i > 0 && values[i] < values[i - 1]) return false;
  }
  return true;
}

inline bool read_word_as_frequency(const std::vector<uint8_t> &data, size_t index, float &value) {
  const size_t offset = index * 2U;
  if (data.size() < offset + 2U) return false;
  value = float((uint16_t(data[offset]) << 8) | uint16_t(data[offset + 1U]));
  return valid_frequency(value);
}

inline void publish_loaded_value(esphome::number::Number *target, float value) { target->publish_state(value); }

inline void write_runtime_value(esphome::number::Number *writer, float value) {
  auto call = writer->make_call();
  call.set_value(value);
  call.perform();
}

inline void load_runtime_table(RuntimeFrequencyTableRefs refs) {
  publish_status(refs, "LOAD_REQUESTED");
  auto cmd = esphome::modbus_controller::ModbusCommandItem::create_read_command(
      refs.controller, esphome::modbus::ModbusRegisterType::HOLDING, RUNTIME_TABLE_START_ADDRESS,
      RUNTIME_TABLE_REGISTER_COUNT,
      [refs](esphome::modbus::ModbusRegisterType register_type, uint16_t start_address,
             const std::vector<uint8_t> &data) {
        int loaded = 0;
        float value = NAN;
        for (size_t i = 0; i < refs.cooling_desired.size(); i++) {
          if (read_word_as_frequency(data, i, value)) {
            publish_loaded_value(refs.cooling_desired[i], value);
            loaded++;
          }
        }
        for (size_t i = 0; i < refs.heating_desired.size(); i++) {
          if (read_word_as_frequency(data, i + refs.cooling_desired.size(), value)) {
            publish_loaded_value(refs.heating_desired[i], value);
            loaded++;
          }
        }

        char status[48];
        snprintf(status, sizeof(status), "LOADED: %d/22 runtime registers", loaded);
        publish_status(refs, status);
      });
  refs.controller->queue_command(cmd);
}

inline bool read_desired_values(const std::array<esphome::number::Number *, 11> &entities,
                                std::array<float, 11> &values) {
  for (size_t i = 0; i < entities.size(); i++) values[i] = entities[i]->state;
  return validate_monotonic_table(values);
}

inline void apply_runtime_table(RuntimeFrequencyTableRefs refs, bool enabled, bool hp_online, float working_mode,
                                float compressor_hz) {
  if (!enabled) {
    publish_status(refs, "BLOCKED: enable switch is off");
    return;
  }
  if (!hp_online) {
    publish_status(refs, "BLOCKED: ODU offline");
    return;
  }
  if (!std::isnan(working_mode) && lroundf(working_mode) != 0) {
    publish_status(refs, "BLOCKED: ODU is not in standby");
    return;
  }
  if (!std::isnan(compressor_hz) && compressor_hz > 0.5f) {
    publish_status(refs, "BLOCKED: compressor is running");
    return;
  }

  std::array<float, 11> cooling{};
  std::array<float, 11> heating{};
  if (!read_desired_values(refs.cooling_desired, cooling)) {
    publish_status(refs, "BLOCKED: invalid cooling table");
    return;
  }
  if (!read_desired_values(refs.heating_desired, heating)) {
    publish_status(refs, "BLOCKED: invalid heating table");
    return;
  }

  for (size_t i = 0; i < refs.cooling_writers.size(); i++) write_runtime_value(refs.cooling_writers[i], cooling[i]);
  for (size_t i = 0; i < refs.heating_writers.size(); i++) write_runtime_value(refs.heating_writers[i], heating[i]);

  refs.enable_switch->turn_off();
  publish_status(refs, "APPLIED: runtime table written, not persisted");
}

}  // namespace oq_odu_runtime_frequency
