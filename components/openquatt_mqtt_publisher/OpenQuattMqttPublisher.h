#pragma once

#include <string>

#include "esphome/components/binary_sensor/binary_sensor.h"
#include "esphome/components/json/json_util.h"
#include "esphome/components/mqtt/custom_mqtt_device.h"
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
  void publish_schema_();
  void publish_state_();
  void publish_heat_pumps_();
  void clear_topic_(const std::string &base_topic, const char *suffix);
  std::string topic_for_(const std::string &base_topic, const char *suffix) const;
  std::string build_config_signature_() const;
  bool is_fault_active_() const;
  static void set_number_or_null_(JsonObject root, const char *key, const sensor::Sensor *sensor);
  static void set_bool_or_null_(JsonObject root, const char *key, const binary_sensor::BinarySensor *binary_sensor);
  static void set_text_or_null_(JsonObject root, const char *key, const text_sensor::TextSensor *sensor);
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
};

}  // namespace openquatt_mqtt_publisher
}  // namespace esphome
