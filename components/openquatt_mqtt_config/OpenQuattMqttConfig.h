#pragma once

#include <cstdint>
#include <string>

#include "esphome/components/mqtt/mqtt_client.h"
#include "esphome/components/web_server_base/web_server_base.h"
#include "esphome/core/component.h"
#include "esphome/core/preferences.h"

namespace esphome {
namespace openquatt_mqtt_config {

enum class PublishProfile : uint8_t {
  OFF = 0,
  ESSENTIAL = 1,
  STANDARD = 2,
  DIAGNOSTIC = 3,
};

inline constexpr PublishProfile OFF = PublishProfile::OFF;
inline constexpr PublishProfile ESSENTIAL = PublishProfile::ESSENTIAL;
inline constexpr PublishProfile STANDARD = PublishProfile::STANDARD;
inline constexpr PublishProfile DIAGNOSTIC = PublishProfile::DIAGNOSTIC;

class OpenQuattMqttConfig : public Component {
 public:
  void set_mqtt_client(mqtt::MQTTClientComponent *mqtt_client) { this->mqtt_client_ = mqtt_client; }
  void set_bootstrap_broker(const std::string &bootstrap_broker) { this->bootstrap_broker_ = bootstrap_broker; }
  void set_bootstrap_port(uint16_t bootstrap_port) { this->bootstrap_port_ = bootstrap_port; }
  void set_bootstrap_username(const std::string &bootstrap_username) { this->bootstrap_username_ = bootstrap_username; }
  void set_bootstrap_password(const std::string &bootstrap_password) { this->bootstrap_password_ = bootstrap_password; }
  void set_bootstrap_base_topic(const std::string &bootstrap_base_topic) { this->bootstrap_base_topic_ = bootstrap_base_topic; }
  void set_default_enabled(bool default_enabled) { this->default_enabled_ = default_enabled; }
  void set_default_publish_profile(PublishProfile default_publish_profile) {
    this->default_publish_profile_ = default_publish_profile;
  }
  void set_default_essential_interval_s(uint16_t default_essential_interval_s) {
    this->default_essential_interval_s_ = default_essential_interval_s;
  }
  void set_default_standard_interval_s(uint16_t default_standard_interval_s) {
    this->default_standard_interval_s_ = default_standard_interval_s;
  }
  void set_default_diagnostic_interval_s(uint16_t default_diagnostic_interval_s) {
    this->default_diagnostic_interval_s_ = default_diagnostic_interval_s;
  }
  void set_default_retain_snapshots(bool default_retain_snapshots) {
    this->default_retain_snapshots_ = default_retain_snapshots;
  }

  void setup() override;
  void dump_config() override;
  float get_setup_priority() const override;

  bool is_enabled() const { return this->enabled_; }
  bool is_connected() const { return this->mqtt_client_ != nullptr && this->mqtt_client_->is_connected(); }
  const std::string &get_broker() const { return this->broker_; }
  uint16_t get_port() const { return this->port_; }
  const std::string &get_username() const { return this->username_; }
  const std::string &get_base_topic() const { return this->base_topic_; }
  bool has_password() const { return !this->password_.empty(); }
  const std::string &get_config_source() const { return this->config_source_; }
  const std::string &get_csrf_token() const { return this->csrf_token_; }
  PublishProfile get_publish_profile() const { return this->publish_profile_; }
  const char *get_publish_profile_name() const;
  uint16_t get_essential_interval_s() const { return this->essential_interval_s_; }
  uint16_t get_standard_interval_s() const { return this->standard_interval_s_; }
  uint16_t get_diagnostic_interval_s() const { return this->diagnostic_interval_s_; }
  bool get_retain_snapshots() const { return this->retain_snapshots_; }

  bool set_runtime_config(const std::string &broker, uint16_t port, const std::string &username,
                          const std::string &password, const std::string &base_topic, bool enabled,
                          PublishProfile publish_profile, uint16_t essential_interval_s, uint16_t standard_interval_s,
                          uint16_t diagnostic_interval_s, bool retain_snapshots);

 protected:
  static constexpr uint32_t STORAGE_MAGIC = 0x4F514D54;
  static constexpr uint16_t STORAGE_VERSION = 2;
  static constexpr uint32_t DIAGNOSTIC_INTERVAL_KEY = 0x6f716d74;
  static constexpr size_t BROKER_MAX_LEN = 64;
  static constexpr size_t USERNAME_MAX_LEN = 64;
  static constexpr size_t PASSWORD_MAX_LEN = 128;
  static constexpr size_t BASE_TOPIC_MAX_LEN = 64;

  struct Storage {
    uint32_t magic;
    uint16_t version;
    uint16_t port;
    uint16_t essential_interval_s;
    uint16_t standard_interval_s;
    uint8_t enabled;
    uint8_t retain_snapshots;
    uint8_t publish_profile;
    char broker[BROKER_MAX_LEN + 1];
    char username[USERNAME_MAX_LEN + 1];
    char password[PASSWORD_MAX_LEN + 1];
    char base_topic[BASE_TOPIC_MAX_LEN + 1];
  };

  bool load_storage_(Storage *storage);
  bool save_storage_(const Storage &storage);
  bool load_diagnostic_interval_();
  bool save_diagnostic_interval_(uint16_t diagnostic_interval_s);
  bool apply_storage_(const Storage &storage, const char *source);
  bool build_storage_(const std::string &broker, uint16_t port, const std::string &username,
                      const std::string &password, const std::string &base_topic, bool enabled,
                      PublishProfile publish_profile, uint16_t essential_interval_s, uint16_t standard_interval_s,
                      bool retain_snapshots, Storage *storage);
  bool is_valid_storage_(const Storage &storage) const;
  bool register_http_handlers_();
  void rotate_csrf_token_();
  static void copy_string_field_(char *destination, size_t max_len, const std::string &value);
  static const char *publish_profile_to_string_(PublishProfile profile);
  static bool parse_publish_profile_(const std::string &value, PublishProfile *profile);

  mqtt::MQTTClientComponent *mqtt_client_{nullptr};
  std::string bootstrap_broker_;
  uint16_t bootstrap_port_{1883};
  std::string bootstrap_username_;
  std::string bootstrap_password_;
  std::string bootstrap_base_topic_{"openquatt"};
  bool default_enabled_{false};
  PublishProfile default_publish_profile_{PublishProfile::STANDARD};
  uint16_t default_essential_interval_s_{10};
  uint16_t default_standard_interval_s_{30};
  uint16_t default_diagnostic_interval_s_{60};
  bool default_retain_snapshots_{true};

  std::string broker_;
  uint16_t port_{1883};
  std::string username_;
  std::string password_;
  std::string base_topic_{"openquatt"};
  bool enabled_{false};
  PublishProfile publish_profile_{PublishProfile::STANDARD};
  uint16_t essential_interval_s_{10};
  uint16_t standard_interval_s_{30};
  uint16_t diagnostic_interval_s_{60};
  bool retain_snapshots_{true};
  std::string config_source_;
  std::string csrf_token_;
  ESPPreferenceObject pref_;
  ESPPreferenceObject diagnostic_interval_pref_;
  bool handlers_registered_{false};
};

}  // namespace openquatt_mqtt_config
}  // namespace esphome
