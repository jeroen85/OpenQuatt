#include "OpenQuattMqttPublisher.h"

#include <cmath>

#include "../openquatt_mqtt_config/OpenQuattMqttConfig.h"
#include "esphome/components/json/json_util.h"
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
  this->last_diagnostics_publish_ms_ = 0;
  this->last_state_signature_.clear();
  this->last_heat_pumps_signature_.clear();
  this->last_diagnostics_signature_.clear();
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
  const bool force_publish = config_changed || just_connected;

  if (force_publish) {
    if (profile == PublishProfile::OFF) {
      this->clear_topic_(base_topic, "state");
      this->clear_topic_(base_topic, "heat_pumps");
    } else if (profile == PublishProfile::ESSENTIAL) {
      this->clear_topic_(base_topic, "heat_pumps");
    }
    this->publish_schema_();
    this->last_state_publish_ms_ = 0;
    this->last_heat_pumps_publish_ms_ = 0;
    this->last_diagnostics_publish_ms_ = 0;
  }

  const uint32_t now_ms = millis();

  if (profile == PublishProfile::ESSENTIAL || profile == PublishProfile::STANDARD) {
    const uint32_t state_interval_ms = this->config_->get_essential_interval_s() * 1000UL;
    this->publish_state_(force_publish, now_ms, state_interval_ms);
  }

  if (profile == PublishProfile::STANDARD) {
    const uint32_t heat_pumps_interval_ms = this->config_->get_standard_interval_s() * 1000UL;
    this->publish_heat_pumps_(force_publish, now_ms, heat_pumps_interval_ms);
  }

  if (profile == PublishProfile::DIAGNOSTIC) {
    const uint32_t diagnostics_interval_ms = this->config_->get_diagnostic_interval_s() * 1000UL;
    this->publish_diagnostics_(force_publish, now_ms, diagnostics_interval_ms);
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

void OpenQuattMqttPublisher::publish_state_(bool force, uint32_t now_ms, uint32_t interval_ms) {
  if (this->config_ == nullptr) {
    return;
  }
  const std::string topic = this->topic_for_(this->config_->get_base_topic(), "state");
  const bool retain = this->config_->get_retain_snapshots();
  const bool fault_active = this->is_fault_active_();
  const std::string signature = this->build_state_signature_();
  this->publish_json_if_changed_(
      topic, this->last_state_signature_, this->last_state_publish_ms_, force, now_ms, interval_ms, retain, signature,
      [this, fault_active](JsonObject root) {
    root["schema"] = "openquatt.state.v1";
    set_text_fields_(root, {{"control_mode", this->control_mode_text_sensor_},
                            {"strategy", this->strategy_text_sensor_}});
    set_bool_fields_(root, {{"heat_request", this->heat_request_binary_sensor_},
                            {"cool_request", this->cooling_request_binary_sensor_}});
    set_sensor_fields_(root, {{"demand_f", this->demand_sensor_},
                               {"outside_temp_c", this->outside_temp_sensor_},
                               {"room_temp_c", this->room_temp_sensor_},
                               {"room_setpoint_c", this->room_setpoint_sensor_},
                               {"supply_temp_c", this->supply_temp_sensor_},
                               {"supply_target_c", this->supply_target_sensor_},
                               {"flow_lph", this->flow_sensor_},
                               {"total_power_input_w", this->total_power_input_sensor_},
                               {"total_heat_power_w", this->total_heat_power_sensor_},
                               {"cop", this->total_cop_sensor_}});
    root["fault_active"] = fault_active;
  });

  (void) now_ms;
}

void OpenQuattMqttPublisher::publish_heat_pumps_(bool force, uint32_t now_ms, uint32_t interval_ms) {
  if (this->config_ == nullptr) {
    return;
  }
  const std::string topic = this->topic_for_(this->config_->get_base_topic(), "heat_pumps");
  const bool retain = this->config_->get_retain_snapshots();
  const std::string signature = this->build_heat_pumps_signature_();
  this->publish_json_if_changed_(
      topic, this->last_heat_pumps_signature_, this->last_heat_pumps_publish_ms_, force, now_ms, interval_ms, retain,
      signature, [this](JsonObject root) {
    root["schema"] = "openquatt.heat_pumps.v1";
    this->publish_heat_pump_(root["hp1"].to<JsonObject>(),
                             {this->hp1_working_mode_sensor_, this->hp1_working_mode_label_text_sensor_,
                              this->hp1_compressor_level_sensor_, this->hp1_power_input_sensor_,
                              this->hp1_heat_power_sensor_, this->hp1_flow_sensor_,
                              this->hp1_water_in_temp_sensor_, this->hp1_water_out_temp_sensor_,
                              this->hp1_defrost_binary_sensor_, this->hp1_fault_binary_sensor_});

    if (this->has_secondary_hp_) {
      this->publish_heat_pump_(root["hp2"].to<JsonObject>(),
                               {this->hp2_working_mode_sensor_, this->hp2_working_mode_label_text_sensor_,
                                this->hp2_compressor_level_sensor_, this->hp2_power_input_sensor_,
                                this->hp2_heat_power_sensor_, this->hp2_flow_sensor_,
                                this->hp2_water_in_temp_sensor_, this->hp2_water_out_temp_sensor_,
                                this->hp2_defrost_binary_sensor_, this->hp2_fault_binary_sensor_});
    }
  });

  (void) now_ms;
}

void OpenQuattMqttPublisher::publish_diagnostics_(bool force, uint32_t now_ms, uint32_t interval_ms) {
  if (this->config_ == nullptr) {
    return;
  }
  const std::string topic = this->topic_for_(this->config_->get_base_topic(), "diagnostics");
  const std::string signature = this->build_diagnostics_signature_();
  this->publish_json_if_changed_(
      topic, this->last_diagnostics_signature_, this->last_diagnostics_publish_ms_, force, now_ms, interval_ms, false,
      signature, [this](JsonObject root) {
    root["schema"] = "openquatt.diagnostics.v1";
    set_text_fields_(root, {{"strategy_phase", this->strategy_phase_text_sensor_},
                            {"strategy_debug_state", this->strategy_debug_state_text_sensor_},
                            {"request_reason", this->request_reason_text_sensor_},
                            {"heating_debug_state", this->heating_debug_state_text_sensor_},
                            {"duo_optimizer_reason", this->duo_optimizer_reason_text_sensor_},
                            {"flow_mode", this->flow_mode_text_sensor_},
                            {"commissioning_status", this->commissioning_status_text_sensor_},
                            {"flow_autotune_status", this->flow_autotune_status_text_sensor_},
                            {"firmware_update_status", this->firmware_update_status_text_sensor_}});
    set_select_fields_(root, {{"flow_control_mode", this->flow_control_mode_select_}});
    set_bool_fields_(root, {{"flow_mismatch", this->flow_mismatch_binary_sensor_}});
    set_sensor_fields_(root, {{"firmware_update_progress", this->firmware_update_progress_sensor_}});
  });

  (void) now_ms;
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

void OpenQuattMqttPublisher::publish_heat_pump_(JsonObject root, const HeatPumpRefs &refs) const {
  set_int_fields_(root, {{"working_mode", refs.working_mode}, {"compressor_level", refs.compressor_level}});
  set_text_fields_(root, {{"working_mode_text", refs.working_mode_label}});
  set_sensor_fields_(root, {{"power_input_w", refs.power_input},
                            {"heat_power_w", refs.heat_power},
                            {"flow_lph", refs.flow},
                            {"water_in_c", refs.water_in_temp},
                            {"water_out_c", refs.water_out_temp}});
  set_bool_fields_(root, {{"defrost", refs.defrost}, {"fault_active", refs.fault}});
}

void OpenQuattMqttPublisher::set_text_fields_(
    JsonObject root, std::initializer_list<std::pair<const char *, const text_sensor::TextSensor *>> fields) {
  for (const auto &field : fields) {
    set_text_or_null_(root, field.first, field.second);
  }
}

void OpenQuattMqttPublisher::set_bool_fields_(
    JsonObject root, std::initializer_list<std::pair<const char *, const binary_sensor::BinarySensor *>> fields) {
  for (const auto &field : fields) {
    set_bool_or_null_(root, field.first, field.second);
  }
}

void OpenQuattMqttPublisher::set_sensor_fields_(
    JsonObject root, std::initializer_list<std::pair<const char *, const sensor::Sensor *>> fields) {
  for (const auto &field : fields) {
    set_number_or_null_(root, field.first, field.second);
  }
}

void OpenQuattMqttPublisher::set_select_fields_(
    JsonObject root, std::initializer_list<std::pair<const char *, const select::Select *>> fields) {
  for (const auto &field : fields) {
    set_select_or_null_(root, field.first, field.second);
  }
}

void OpenQuattMqttPublisher::set_int_fields_(
    JsonObject root, std::initializer_list<std::pair<const char *, const sensor::Sensor *>> fields) {
  for (const auto &field : fields) {
    set_int_or_null_(root, field.first, field.second);
  }
}

std::string OpenQuattMqttPublisher::build_config_signature_() const {
  if (this->config_ == nullptr) {
    return std::string();
  }
  return this->config_->get_base_topic() + "|" + this->config_->get_publish_profile_name() + "|" +
         std::to_string(this->config_->get_essential_interval_s()) + "|" +
         std::to_string(this->config_->get_standard_interval_s()) + "|" +
         std::to_string(this->config_->get_diagnostic_interval_s()) + "|" +
         (this->config_->get_retain_snapshots() ? "retain" : "volatile") + "|" +
         (this->config_->is_enabled() ? "enabled" : "disabled");
}

static inline void append_sensor_signature_(std::string &out, const sensor::Sensor *sensor) {
  if (sensor == nullptr || !sensor->has_state() || std::isnan(sensor->state)) {
    out += "|n";
    return;
  }
  out += "|";
  out += std::to_string(sensor->state);
}

static inline void append_int_signature_(std::string &out, const sensor::Sensor *sensor) {
  if (sensor == nullptr || !sensor->has_state() || std::isnan(sensor->state)) {
    out += "|n";
    return;
  }
  out += "|";
  out += std::to_string(static_cast<int>(std::lround(sensor->state)));
}

static inline void append_bool_signature_(std::string &out, const binary_sensor::BinarySensor *binary_sensor) {
  if (binary_sensor == nullptr || !binary_sensor->has_state()) {
    out += "|n";
    return;
  }
  out += binary_sensor->state ? "|1" : "|0";
}

static inline void append_text_signature_(std::string &out, const text_sensor::TextSensor *sensor) {
  if (sensor == nullptr || !sensor->has_state()) {
    out += "|n";
    return;
  }
  out += "|";
  out += sensor->state;
}

static inline void append_select_signature_(std::string &out, const select::Select *select) {
  if (select == nullptr || !select->has_state()) {
    out += "|n";
    return;
  }
  out += "|";
  out += std::string(select->current_option().c_str());
}

std::string OpenQuattMqttPublisher::build_state_signature_() const {
  std::string out;
  out.reserve(192);
  append_text_signature_(out, this->control_mode_text_sensor_);
  append_text_signature_(out, this->strategy_text_sensor_);
  append_bool_signature_(out, this->heat_request_binary_sensor_);
  append_bool_signature_(out, this->cooling_request_binary_sensor_);
  append_sensor_signature_(out, this->demand_sensor_);
  append_sensor_signature_(out, this->outside_temp_sensor_);
  append_sensor_signature_(out, this->room_temp_sensor_);
  append_sensor_signature_(out, this->room_setpoint_sensor_);
  append_sensor_signature_(out, this->supply_temp_sensor_);
  append_sensor_signature_(out, this->supply_target_sensor_);
  append_sensor_signature_(out, this->flow_sensor_);
  append_sensor_signature_(out, this->total_power_input_sensor_);
  append_sensor_signature_(out, this->total_heat_power_sensor_);
  append_sensor_signature_(out, this->total_cop_sensor_);
  append_bool_signature_(out, this->lowflow_fault_binary_sensor_);
  return out;
}

std::string OpenQuattMqttPublisher::build_heat_pumps_signature_() const {
  std::string out;
  out.reserve(256);
  append_int_signature_(out, this->hp1_working_mode_sensor_);
  append_text_signature_(out, this->hp1_working_mode_label_text_sensor_);
  append_int_signature_(out, this->hp1_compressor_level_sensor_);
  append_sensor_signature_(out, this->hp1_power_input_sensor_);
  append_sensor_signature_(out, this->hp1_heat_power_sensor_);
  append_sensor_signature_(out, this->hp1_flow_sensor_);
  append_sensor_signature_(out, this->hp1_water_in_temp_sensor_);
  append_sensor_signature_(out, this->hp1_water_out_temp_sensor_);
  append_bool_signature_(out, this->hp1_defrost_binary_sensor_);
  append_bool_signature_(out, this->hp1_fault_binary_sensor_);
  if (this->has_secondary_hp_) {
    append_int_signature_(out, this->hp2_working_mode_sensor_);
    append_text_signature_(out, this->hp2_working_mode_label_text_sensor_);
    append_int_signature_(out, this->hp2_compressor_level_sensor_);
    append_sensor_signature_(out, this->hp2_power_input_sensor_);
    append_sensor_signature_(out, this->hp2_heat_power_sensor_);
    append_sensor_signature_(out, this->hp2_flow_sensor_);
    append_sensor_signature_(out, this->hp2_water_in_temp_sensor_);
    append_sensor_signature_(out, this->hp2_water_out_temp_sensor_);
    append_bool_signature_(out, this->hp2_defrost_binary_sensor_);
    append_bool_signature_(out, this->hp2_fault_binary_sensor_);
  }
  return out;
}

std::string OpenQuattMqttPublisher::build_diagnostics_signature_() const {
  std::string out;
  out.reserve(256);
  append_text_signature_(out, this->strategy_phase_text_sensor_);
  append_text_signature_(out, this->strategy_debug_state_text_sensor_);
  append_text_signature_(out, this->request_reason_text_sensor_);
  append_text_signature_(out, this->heating_debug_state_text_sensor_);
  append_text_signature_(out, this->duo_optimizer_reason_text_sensor_);
  append_select_signature_(out, this->flow_control_mode_select_);
  append_text_signature_(out, this->flow_mode_text_sensor_);
  append_bool_signature_(out, this->flow_mismatch_binary_sensor_);
  append_text_signature_(out, this->commissioning_status_text_sensor_);
  append_text_signature_(out, this->flow_autotune_status_text_sensor_);
  append_text_signature_(out, this->firmware_update_status_text_sensor_);
  append_sensor_signature_(out, this->firmware_update_progress_sensor_);
  return out;
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

void OpenQuattMqttPublisher::set_select_or_null_(JsonObject root, const char *key, const select::Select *select) {
  if (select == nullptr || !select->has_state()) {
    root[key] = nullptr;
    return;
  }
  root[key] = select->current_option().c_str();
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
