#pragma once

#include <initializer_list>
#include <string>
#include <utility>

#include "esphome/components/binary_sensor/binary_sensor.h"
#include "esphome/components/json/json_util.h"
#include "esphome/components/mqtt/custom_mqtt_device.h"
#include "esphome/components/select/select.h"
#include "esphome/components/sensor/sensor.h"
#include "esphome/components/text_sensor/text_sensor.h"
#include "esphome/core/component.h"

namespace esphome {
namespace openquatt_mqtt_config {
class OpenQuattMqttConfig;
enum class PublishProfile : uint8_t;
}  // namespace openquatt_mqtt_config

namespace openquatt_mqtt_publisher {

class OpenQuattMqttPublisher : public Component, public mqtt::CustomMQTTDevice {
 public:
  struct HeatPumpRefs {
    const sensor::Sensor *working_mode{nullptr};
    const text_sensor::TextSensor *working_mode_label{nullptr};
    const sensor::Sensor *compressor_level{nullptr};
    const sensor::Sensor *power_input{nullptr};
    const sensor::Sensor *heat_power{nullptr};
    const sensor::Sensor *flow{nullptr};
    const sensor::Sensor *water_in_temp{nullptr};
    const sensor::Sensor *water_out_temp{nullptr};
    const binary_sensor::BinarySensor *defrost{nullptr};
    const binary_sensor::BinarySensor *fault{nullptr};
  };

  void set_config(openquatt_mqtt_config::OpenQuattMqttConfig *config) { this->config_ = config; }
  void set_has_secondary_hp(bool has_secondary_hp) { this->has_secondary_hp_ = has_secondary_hp; }

  void set_control_mode_text_sensor(text_sensor::TextSensor *sensor) { this->control_mode_text_sensor_ = sensor; }
  void set_strategy_text_sensor(text_sensor::TextSensor *sensor) { this->strategy_text_sensor_ = sensor; }
  void set_heat_request_binary_sensor(binary_sensor::BinarySensor *binary_sensor) {
    this->heat_request_binary_sensor_ = binary_sensor;
  }
  void set_cooling_request_binary_sensor(binary_sensor::BinarySensor *binary_sensor) {
    this->cooling_request_binary_sensor_ = binary_sensor;
  }
  void set_demand_sensor(sensor::Sensor *sensor) { this->demand_sensor_ = sensor; }
  void set_outside_temp_sensor(sensor::Sensor *sensor) { this->outside_temp_sensor_ = sensor; }
  void set_room_temp_sensor(sensor::Sensor *sensor) { this->room_temp_sensor_ = sensor; }
  void set_room_setpoint_sensor(sensor::Sensor *sensor) { this->room_setpoint_sensor_ = sensor; }
  void set_supply_temp_sensor(sensor::Sensor *sensor) { this->supply_temp_sensor_ = sensor; }
  void set_supply_target_sensor(sensor::Sensor *sensor) { this->supply_target_sensor_ = sensor; }
  void set_flow_sensor(sensor::Sensor *sensor) { this->flow_sensor_ = sensor; }
  void set_total_power_input_sensor(sensor::Sensor *sensor) { this->total_power_input_sensor_ = sensor; }
  void set_total_heat_power_sensor(sensor::Sensor *sensor) { this->total_heat_power_sensor_ = sensor; }
  void set_total_cop_sensor(sensor::Sensor *sensor) { this->total_cop_sensor_ = sensor; }
  void set_lowflow_fault_binary_sensor(binary_sensor::BinarySensor *binary_sensor) {
    this->lowflow_fault_binary_sensor_ = binary_sensor;
  }
  void set_strategy_phase_text_sensor(text_sensor::TextSensor *sensor) { this->strategy_phase_text_sensor_ = sensor; }
  void set_strategy_debug_state_text_sensor(text_sensor::TextSensor *sensor) {
    this->strategy_debug_state_text_sensor_ = sensor;
  }
  void set_request_reason_text_sensor(text_sensor::TextSensor *sensor) { this->request_reason_text_sensor_ = sensor; }
  void set_heating_debug_state_text_sensor(text_sensor::TextSensor *sensor) {
    this->heating_debug_state_text_sensor_ = sensor;
  }
  void set_duo_optimizer_reason_text_sensor(text_sensor::TextSensor *sensor) {
    this->duo_optimizer_reason_text_sensor_ = sensor;
  }
  void set_flow_control_mode_select(select::Select *select) {
    this->flow_control_mode_select_ = select;
  }
  void set_flow_mode_text_sensor(text_sensor::TextSensor *sensor) { this->flow_mode_text_sensor_ = sensor; }
  void set_flow_mismatch_binary_sensor(binary_sensor::BinarySensor *binary_sensor) {
    this->flow_mismatch_binary_sensor_ = binary_sensor;
  }
  void set_commissioning_status_text_sensor(text_sensor::TextSensor *sensor) {
    this->commissioning_status_text_sensor_ = sensor;
  }
  void set_flow_autotune_status_text_sensor(text_sensor::TextSensor *sensor) {
    this->flow_autotune_status_text_sensor_ = sensor;
  }
  void set_firmware_update_status_text_sensor(text_sensor::TextSensor *sensor) {
    this->firmware_update_status_text_sensor_ = sensor;
  }
  void set_firmware_update_progress_sensor(sensor::Sensor *sensor) {
    this->firmware_update_progress_sensor_ = sensor;
  }

  void set_hp1_working_mode_sensor(sensor::Sensor *sensor) { this->hp1_working_mode_sensor_ = sensor; }
  void set_hp1_working_mode_label_text_sensor(text_sensor::TextSensor *sensor) {
    this->hp1_working_mode_label_text_sensor_ = sensor;
  }
  void set_hp1_compressor_level_sensor(sensor::Sensor *sensor) { this->hp1_compressor_level_sensor_ = sensor; }
  void set_hp1_power_input_sensor(sensor::Sensor *sensor) { this->hp1_power_input_sensor_ = sensor; }
  void set_hp1_heat_power_sensor(sensor::Sensor *sensor) { this->hp1_heat_power_sensor_ = sensor; }
  void set_hp1_flow_sensor(sensor::Sensor *sensor) { this->hp1_flow_sensor_ = sensor; }
  void set_hp1_water_in_temp_sensor(sensor::Sensor *sensor) { this->hp1_water_in_temp_sensor_ = sensor; }
  void set_hp1_water_out_temp_sensor(sensor::Sensor *sensor) { this->hp1_water_out_temp_sensor_ = sensor; }
  void set_hp1_defrost_binary_sensor(binary_sensor::BinarySensor *binary_sensor) {
    this->hp1_defrost_binary_sensor_ = binary_sensor;
  }
  void set_hp1_fault_binary_sensor(binary_sensor::BinarySensor *binary_sensor) {
    this->hp1_fault_binary_sensor_ = binary_sensor;
  }

  void set_hp2_working_mode_sensor(sensor::Sensor *sensor) { this->hp2_working_mode_sensor_ = sensor; }
  void set_hp2_working_mode_label_text_sensor(text_sensor::TextSensor *sensor) {
    this->hp2_working_mode_label_text_sensor_ = sensor;
  }
  void set_hp2_compressor_level_sensor(sensor::Sensor *sensor) { this->hp2_compressor_level_sensor_ = sensor; }
  void set_hp2_power_input_sensor(sensor::Sensor *sensor) { this->hp2_power_input_sensor_ = sensor; }
  void set_hp2_heat_power_sensor(sensor::Sensor *sensor) { this->hp2_heat_power_sensor_ = sensor; }
  void set_hp2_flow_sensor(sensor::Sensor *sensor) { this->hp2_flow_sensor_ = sensor; }
  void set_hp2_water_in_temp_sensor(sensor::Sensor *sensor) { this->hp2_water_in_temp_sensor_ = sensor; }
  void set_hp2_water_out_temp_sensor(sensor::Sensor *sensor) { this->hp2_water_out_temp_sensor_ = sensor; }
  void set_hp2_defrost_binary_sensor(binary_sensor::BinarySensor *binary_sensor) {
    this->hp2_defrost_binary_sensor_ = binary_sensor;
  }
  void set_hp2_fault_binary_sensor(binary_sensor::BinarySensor *binary_sensor) {
    this->hp2_fault_binary_sensor_ = binary_sensor;
  }

  void setup() override;
  void loop() override;
  void dump_config() override;
  float get_setup_priority() const override;

 protected:
  template<typename Builder>
  void publish_json_if_changed_(const std::string &topic, std::string &last_signature, uint32_t &last_publish_ms,
                                bool force, uint32_t now_ms, uint32_t interval_ms, bool retain,
                                const std::string &signature, Builder &&builder) {
    const bool interval_due = last_publish_ms != 0U &&
                              static_cast<uint32_t>(now_ms - last_publish_ms) >= interval_ms;
    if (!force && signature == last_signature && !interval_due) {
      return;
    }
    this->publish_json(topic, std::forward<Builder>(builder), 0, retain);
    last_signature = signature;
    last_publish_ms = now_ms;
  }

  void publish_schema_();
  void publish_state_(bool force, uint32_t now_ms, uint32_t interval_ms);
  void publish_heat_pumps_(bool force, uint32_t now_ms, uint32_t interval_ms);
  void publish_diagnostics_(bool force, uint32_t now_ms, uint32_t interval_ms);
  void clear_topic_(const std::string &base_topic, const char *suffix);
  std::string topic_for_(const std::string &base_topic, const char *suffix) const;
  void publish_heat_pump_(JsonObject root, const HeatPumpRefs &refs) const;
  std::string build_config_signature_() const;
  std::string build_state_signature_() const;
  std::string build_heat_pumps_signature_() const;
  std::string build_diagnostics_signature_() const;
  bool is_fault_active_() const;
  static void set_text_fields_(
      JsonObject root, std::initializer_list<std::pair<const char *, const text_sensor::TextSensor *>> fields);
  static void set_bool_fields_(
      JsonObject root, std::initializer_list<std::pair<const char *, const binary_sensor::BinarySensor *>> fields);
  static void set_sensor_fields_(
      JsonObject root, std::initializer_list<std::pair<const char *, const sensor::Sensor *>> fields);
  static void set_select_fields_(
      JsonObject root, std::initializer_list<std::pair<const char *, const select::Select *>> fields);
  static void set_int_fields_(
      JsonObject root, std::initializer_list<std::pair<const char *, const sensor::Sensor *>> fields);
  static void set_number_or_null_(JsonObject root, const char *key, const sensor::Sensor *sensor);
  static void set_bool_or_null_(JsonObject root, const char *key, const binary_sensor::BinarySensor *binary_sensor);
  static void set_text_or_null_(JsonObject root, const char *key, const text_sensor::TextSensor *sensor);
  static void set_select_or_null_(JsonObject root, const char *key, const select::Select *select);
  static void set_int_or_null_(JsonObject root, const char *key, const sensor::Sensor *sensor);

  openquatt_mqtt_config::OpenQuattMqttConfig *config_{nullptr};
  bool has_secondary_hp_{false};

  text_sensor::TextSensor *control_mode_text_sensor_{nullptr};
  text_sensor::TextSensor *strategy_text_sensor_{nullptr};
  binary_sensor::BinarySensor *heat_request_binary_sensor_{nullptr};
  binary_sensor::BinarySensor *cooling_request_binary_sensor_{nullptr};
  sensor::Sensor *demand_sensor_{nullptr};
  sensor::Sensor *outside_temp_sensor_{nullptr};
  sensor::Sensor *room_temp_sensor_{nullptr};
  sensor::Sensor *room_setpoint_sensor_{nullptr};
  sensor::Sensor *supply_temp_sensor_{nullptr};
  sensor::Sensor *supply_target_sensor_{nullptr};
  sensor::Sensor *flow_sensor_{nullptr};
  sensor::Sensor *total_power_input_sensor_{nullptr};
  sensor::Sensor *total_heat_power_sensor_{nullptr};
  sensor::Sensor *total_cop_sensor_{nullptr};
  binary_sensor::BinarySensor *lowflow_fault_binary_sensor_{nullptr};
  text_sensor::TextSensor *strategy_phase_text_sensor_{nullptr};
  text_sensor::TextSensor *strategy_debug_state_text_sensor_{nullptr};
  text_sensor::TextSensor *request_reason_text_sensor_{nullptr};
  text_sensor::TextSensor *heating_debug_state_text_sensor_{nullptr};
  text_sensor::TextSensor *duo_optimizer_reason_text_sensor_{nullptr};
  select::Select *flow_control_mode_select_{nullptr};
  text_sensor::TextSensor *flow_mode_text_sensor_{nullptr};
  binary_sensor::BinarySensor *flow_mismatch_binary_sensor_{nullptr};
  text_sensor::TextSensor *commissioning_status_text_sensor_{nullptr};
  text_sensor::TextSensor *flow_autotune_status_text_sensor_{nullptr};
  text_sensor::TextSensor *firmware_update_status_text_sensor_{nullptr};
  sensor::Sensor *firmware_update_progress_sensor_{nullptr};

  sensor::Sensor *hp1_working_mode_sensor_{nullptr};
  text_sensor::TextSensor *hp1_working_mode_label_text_sensor_{nullptr};
  sensor::Sensor *hp1_compressor_level_sensor_{nullptr};
  sensor::Sensor *hp1_power_input_sensor_{nullptr};
  sensor::Sensor *hp1_heat_power_sensor_{nullptr};
  sensor::Sensor *hp1_flow_sensor_{nullptr};
  sensor::Sensor *hp1_water_in_temp_sensor_{nullptr};
  sensor::Sensor *hp1_water_out_temp_sensor_{nullptr};
  binary_sensor::BinarySensor *hp1_defrost_binary_sensor_{nullptr};
  binary_sensor::BinarySensor *hp1_fault_binary_sensor_{nullptr};

  sensor::Sensor *hp2_working_mode_sensor_{nullptr};
  text_sensor::TextSensor *hp2_working_mode_label_text_sensor_{nullptr};
  sensor::Sensor *hp2_compressor_level_sensor_{nullptr};
  sensor::Sensor *hp2_power_input_sensor_{nullptr};
  sensor::Sensor *hp2_heat_power_sensor_{nullptr};
  sensor::Sensor *hp2_flow_sensor_{nullptr};
  sensor::Sensor *hp2_water_in_temp_sensor_{nullptr};
  sensor::Sensor *hp2_water_out_temp_sensor_{nullptr};
  binary_sensor::BinarySensor *hp2_defrost_binary_sensor_{nullptr};
  binary_sensor::BinarySensor *hp2_fault_binary_sensor_{nullptr};

  bool last_connected_{false};
  std::string last_config_signature_{};
  std::string last_base_topic_{};
  uint32_t last_state_publish_ms_{0};
  uint32_t last_heat_pumps_publish_ms_{0};
  uint32_t last_diagnostics_publish_ms_{0};
  std::string last_state_signature_{};
  std::string last_heat_pumps_signature_{};
  std::string last_diagnostics_signature_{};
};

}  // namespace openquatt_mqtt_publisher
}  // namespace esphome
