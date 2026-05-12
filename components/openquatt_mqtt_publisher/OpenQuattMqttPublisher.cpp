#include "OpenQuattMqttPublisher.h"

#include <cmath>

#include "../openquatt_mqtt_config/OpenQuattMqttConfig.h"
#include "esphome/core/log.h"

namespace esphome {
namespace openquatt_mqtt_publisher {

using openquatt_mqtt_config::OpenQuattMqttConfig;
using openquatt_mqtt_config::PublishProfile;

static const char *const TAG = "openquatt.mqtt.pub";

void OpenQuattMqttPublisher::setup() {
  this->last_connected_ = false;
  this->last_config_signature_.clear();
  this->last_base_topic_.clear();
  this->last_state_publish_ms_ = 0;
  this->last_heat_pumps_publish_ms_ = 0;
}

void OpenQuattMqttPublisher::loop() {
  if (this->config_ == nullptr) {
    return;
  }

  const bool connected = this->config_->is_enabled() && this->is_connected();
  const std::string config_signature = this->build_config_signature_();
  const bool config_changed = config_signature != this->last_config_signature_;
  const std::string base_topic = this->config_->get_base_topic();
  const PublishProfile profile = this->config_->get_publish_profile();

  if (config_changed && !this->last_base_topic_.empty() && this->last_base_topic_ != base_topic) {
    this->clear_topic_(this->last_base_topic_, "schema");
    this->clear_topic_(this->last_base_topic_, "state");
    this->clear_topic_(this->last_base_topic_, "heat_pumps");
  }

  if (!connected) {
    this->last_connected_ = false;
    this->last_config_signature_ = config_signature;
    this->last_base_topic_ = base_topic;
    return;
  }

  const bool just_connected = !this->last_connected_;
  this->last_connected_ = true;

  if (config_changed || just_connected) {
    if (profile != PublishProfile::STANDARD) {
      this->clear_topic_(base_topic, "heat_pumps");
    }
    if (profile == PublishProfile::OFF) {
      this->clear_topic_(base_topic, "state");
    }
    this->publish_schema_();
    this->last_state_publish_ms_ = 0;
    this->last_heat_pumps_publish_ms_ = 0;
  }

  const uint32_t now_ms = millis();
  const uint32_t state_interval_ms =
      (profile == PublishProfile::ESSENTIAL ? this->config_->get_essential_interval_s()
                                            : this->config_->get_standard_interval_s()) *
      1000UL;

  if (profile == PublishProfile::ESSENTIAL || profile == PublishProfile::STANDARD) {
    if (this->last_state_publish_ms_ == 0 || now_ms - this->last_state_publish_ms_ >= state_interval_ms) {
      this->publish_state_();
      this->last_state_publish_ms_ = now_ms;
    }
  }

  if (profile == PublishProfile::STANDARD) {
    const uint32_t heat_pumps_interval_ms = this->config_->get_standard_interval_s() * 1000UL;
    if (this->last_heat_pumps_publish_ms_ == 0 || now_ms - this->last_heat_pumps_publish_ms_ >= heat_pumps_interval_ms) {
      this->publish_heat_pumps_();
      this->last_heat_pumps_publish_ms_ = now_ms;
    }
  }

  this->last_config_signature_ = config_signature;
  this->last_base_topic_ = base_topic;
}

void OpenQuattMqttPublisher::dump_config() {
  ESP_LOGCONFIG(TAG, "OpenQuatt MQTT Publisher");
  ESP_LOGCONFIG(TAG, "  Secondary heat pump: %s", YESNO(this->has_secondary_hp_));
}

float OpenQuattMqttPublisher::get_setup_priority() const { return setup_priority::LATE; }

void OpenQuattMqttPublisher::publish_schema_() {
  if (this->config_ == nullptr) {
    return;
  }
  const std::string topic = this->topic_for_(this->config_->get_base_topic(), "schema");
  const std::string profile_name = this->config_->get_publish_profile_name();
  const std::string base_topic = this->config_->get_base_topic();
  this->publish_json(topic, [base_topic, profile_name](JsonObject root) {
    root["schema"] = "openquatt.schema.v1";
    root["mqtt_api_version"] = 1;
    root["base_topic"] = base_topic;
    root["publish_profile"] = profile_name;
    root["publish_format"] = "json";
  }, 0, true);
}

void OpenQuattMqttPublisher::publish_state_() {
  if (this->config_ == nullptr) {
    return;
  }
  const std::string topic = this->topic_for_(this->config_->get_base_topic(), "state");
  const bool retain = this->config_->get_retain_snapshots();
  const bool fault_active = this->is_fault_active_();

  this->publish_json(topic, [this, fault_active](JsonObject root) {
    root["schema"] = "openquatt.state.v1";
    set_text_or_null_(root, "control_mode", this->control_mode_text_sensor_);
    set_text_or_null_(root, "strategy", this->strategy_text_sensor_);
    set_bool_or_null_(root, "heat_request", this->heat_request_binary_sensor_);
    set_bool_or_null_(root, "cool_request", this->cooling_request_binary_sensor_);
    set_number_or_null_(root, "demand_f", this->demand_sensor_);
    set_number_or_null_(root, "outside_temp_c", this->outside_temp_sensor_);
    set_number_or_null_(root, "room_temp_c", this->room_temp_sensor_);
    set_number_or_null_(root, "room_setpoint_c", this->room_setpoint_sensor_);
    set_number_or_null_(root, "supply_temp_c", this->supply_temp_sensor_);
    set_number_or_null_(root, "supply_target_c", this->supply_target_sensor_);
    set_number_or_null_(root, "flow_lph", this->flow_sensor_);
    set_number_or_null_(root, "total_power_input_w", this->total_power_input_sensor_);
    set_number_or_null_(root, "total_heat_power_w", this->total_heat_power_sensor_);
    set_number_or_null_(root, "cop", this->total_cop_sensor_);
    root["fault_active"] = fault_active;
  }, 0, retain);
}

void OpenQuattMqttPublisher::publish_heat_pumps_() {
  if (this->config_ == nullptr) {
    return;
  }
  const std::string topic = this->topic_for_(this->config_->get_base_topic(), "heat_pumps");
  const bool retain = this->config_->get_retain_snapshots();

  this->publish_json(topic, [this](JsonObject root) {
    root["schema"] = "openquatt.heat_pumps.v1";

    JsonObject hp1 = root["hp1"].to<JsonObject>();
    set_int_or_null_(hp1, "working_mode", this->hp1_working_mode_sensor_);
    set_text_or_null_(hp1, "working_mode_text", this->hp1_working_mode_label_text_sensor_);
    set_int_or_null_(hp1, "compressor_level", this->hp1_compressor_level_sensor_);
    set_number_or_null_(hp1, "power_input_w", this->hp1_power_input_sensor_);
    set_number_or_null_(hp1, "heat_power_w", this->hp1_heat_power_sensor_);
    set_number_or_null_(hp1, "flow_lph", this->hp1_flow_sensor_);
    set_number_or_null_(hp1, "water_in_c", this->hp1_water_in_temp_sensor_);
    set_number_or_null_(hp1, "water_out_c", this->hp1_water_out_temp_sensor_);
    set_bool_or_null_(hp1, "defrost", this->hp1_defrost_binary_sensor_);
    set_bool_or_null_(hp1, "fault_active", this->hp1_fault_binary_sensor_);

    if (this->has_secondary_hp_) {
      JsonObject hp2 = root["hp2"].to<JsonObject>();
      set_int_or_null_(hp2, "working_mode", this->hp2_working_mode_sensor_);
      set_text_or_null_(hp2, "working_mode_text", this->hp2_working_mode_label_text_sensor_);
      set_int_or_null_(hp2, "compressor_level", this->hp2_compressor_level_sensor_);
      set_number_or_null_(hp2, "power_input_w", this->hp2_power_input_sensor_);
      set_number_or_null_(hp2, "heat_power_w", this->hp2_heat_power_sensor_);
      set_number_or_null_(hp2, "flow_lph", this->hp2_flow_sensor_);
      set_number_or_null_(hp2, "water_in_c", this->hp2_water_in_temp_sensor_);
      set_number_or_null_(hp2, "water_out_c", this->hp2_water_out_temp_sensor_);
      set_bool_or_null_(hp2, "defrost", this->hp2_defrost_binary_sensor_);
      set_bool_or_null_(hp2, "fault_active", this->hp2_fault_binary_sensor_);
    }
  }, 0, retain);
}

void OpenQuattMqttPublisher::clear_topic_(const std::string &base_topic, const char *suffix) {
  if (base_topic.empty() || suffix == nullptr || suffix[0] == '\0') {
    return;
  }
  this->publish(this->topic_for_(base_topic, suffix), "", 0, true);
}

std::string OpenQuattMqttPublisher::topic_for_(const std::string &base_topic, const char *suffix) const {
  if (base_topic.empty()) {
    return std::string();
  }
  return base_topic + "/" + suffix;
}

std::string OpenQuattMqttPublisher::build_config_signature_() const {
  if (this->config_ == nullptr) {
    return std::string();
  }
  return this->config_->get_base_topic() + "|" + this->config_->get_publish_profile_name() + "|" +
         std::to_string(this->config_->get_essential_interval_s()) + "|" +
         std::to_string(this->config_->get_standard_interval_s()) + "|" +
         (this->config_->get_retain_snapshots() ? "retain" : "volatile") + "|" +
         (this->config_->is_enabled() ? "enabled" : "disabled");
}

bool OpenQuattMqttPublisher::is_fault_active_() const {
  const bool hp1_fault = this->hp1_fault_binary_sensor_ != nullptr && this->hp1_fault_binary_sensor_->has_state() &&
                         this->hp1_fault_binary_sensor_->state;
  const bool hp2_fault = this->has_secondary_hp_ && this->hp2_fault_binary_sensor_ != nullptr &&
                         this->hp2_fault_binary_sensor_->has_state() && this->hp2_fault_binary_sensor_->state;
  const bool lowflow_fault = this->lowflow_fault_binary_sensor_ != nullptr &&
                             this->lowflow_fault_binary_sensor_->has_state() &&
                             this->lowflow_fault_binary_sensor_->state;
  return hp1_fault || hp2_fault || lowflow_fault;
}

void OpenQuattMqttPublisher::set_number_or_null_(JsonObject root, const char *key, const sensor::Sensor *sensor) {
  if (sensor == nullptr || !sensor->has_state() || std::isnan(sensor->state)) {
    root[key] = nullptr;
    return;
  }
  root[key] = sensor->state;
}

void OpenQuattMqttPublisher::set_bool_or_null_(JsonObject root, const char *key,
                                               const binary_sensor::BinarySensor *binary_sensor) {
  if (binary_sensor == nullptr || !binary_sensor->has_state()) {
    root[key] = nullptr;
    return;
  }
  root[key] = binary_sensor->state;
}

void OpenQuattMqttPublisher::set_text_or_null_(JsonObject root, const char *key,
                                               const text_sensor::TextSensor *sensor) {
  if (sensor == nullptr || !sensor->has_state()) {
    root[key] = nullptr;
    return;
  }
  root[key] = sensor->state.c_str();
}

void OpenQuattMqttPublisher::set_int_or_null_(JsonObject root, const char *key, const sensor::Sensor *sensor) {
  if (sensor == nullptr || !sensor->has_state() || std::isnan(sensor->state)) {
    root[key] = nullptr;
    return;
  }
  root[key] = static_cast<int>(std::lround(sensor->state));
}

}  // namespace openquatt_mqtt_publisher
}  // namespace esphome
