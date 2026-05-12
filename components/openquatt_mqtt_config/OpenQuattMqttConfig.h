#pragma once

#include <string>

#include "esphome/components/mqtt/mqtt_client.h"
#include "esphome/components/web_server_base/web_server_base.h"
#include "esphome/core/component.h"
#include "esphome/core/preferences.h"

namespace esphome {
namespace openquatt_mqtt_config {

class OpenQuattMqttConfig : public Component {
 public:
  void set_mqtt_client(mqtt::MQTTClientComponent *mqtt_client) { this->mqtt_client_ = mqtt_client; }
  void set_bootstrap_broker(const std::string &bootstrap_broker) { this->bootstrap_broker_ = bootstrap_broker; }
  void set_bootstrap_port(uint16_t bootstrap_port) { this->bootstrap_port_ = bootstrap_port; }
  void set_bootstrap_username(const std::string &bootstrap_username) { this->bootstrap_username_ = bootstrap_username; }
  void set_bootstrap_password(const std::string &bootstrap_password) { this->bootstrap_password_ = bootstrap_password; }
  void set_bootstrap_topic_prefix(const std::string &bootstrap_topic_prefix) {
    this->bootstrap_topic_prefix_ = bootstrap_topic_prefix;
  }
  void set_default_enabled(bool default_enabled) { this->default_enabled_ = default_enabled; }

  void setup() override;
  void dump_config() override;
  float get_setup_priority() const override;

  bool is_enabled() const { return this->enabled_; }
  bool is_connected() const { return this->mqtt_client_ != nullptr && this->mqtt_client_->is_connected(); }
  const std::string &get_broker() const { return this->broker_; }
  uint16_t get_port() const { return this->port_; }
  const std::string &get_username() const { return this->username_; }
  const std::string &get_topic_prefix() const { return this->topic_prefix_; }
  bool has_password() const { return !this->password_.empty(); }
  const std::string &get_config_source() const { return this->config_source_; }
  const std::string &get_csrf_token() const { return this->csrf_token_; }

  bool set_runtime_config(const std::string &broker, uint16_t port, const std::string &username,
                          const std::string &password, const std::string &topic_prefix, bool enabled);

 protected:
  static constexpr uint32_t STORAGE_MAGIC = 0x4F514D54;
  static constexpr uint16_t STORAGE_VERSION = 1;
  static constexpr size_t BROKER_MAX_LEN = 64;
  static constexpr size_t USERNAME_MAX_LEN = 64;
  static constexpr size_t PASSWORD_MAX_LEN = 128;
  static constexpr size_t TOPIC_PREFIX_MAX_LEN = 64;

  struct Storage {
    uint32_t magic;
    uint16_t version;
    uint16_t port;
    uint8_t enabled;
    char broker[BROKER_MAX_LEN + 1];
    char username[USERNAME_MAX_LEN + 1];
    char password[PASSWORD_MAX_LEN + 1];
    char topic_prefix[TOPIC_PREFIX_MAX_LEN + 1];
  };

  bool load_storage_(Storage *storage);
  bool save_storage_(const Storage &storage);
  bool apply_storage_(const Storage &storage, const char *source);
  bool build_storage_(const std::string &broker, uint16_t port, const std::string &username,
                      const std::string &password, const std::string &topic_prefix, bool enabled, Storage *storage);
  bool is_valid_storage_(const Storage &storage) const;
  bool register_http_handlers_();
  void rotate_csrf_token_();
  static void copy_string_field_(char *destination, size_t max_len, const std::string &value);

  mqtt::MQTTClientComponent *mqtt_client_{nullptr};
  std::string bootstrap_broker_;
  uint16_t bootstrap_port_{1883};
  std::string bootstrap_username_;
  std::string bootstrap_password_;
  std::string bootstrap_topic_prefix_{"openquatt"};
  bool default_enabled_{false};
  std::string broker_;
  uint16_t port_{1883};
  std::string username_;
  std::string password_;
  std::string topic_prefix_{"openquatt"};
  bool enabled_{false};
  std::string config_source_;
  std::string csrf_token_;
  ESPPreferenceObject pref_;
  bool handlers_registered_{false};
};

}  // namespace openquatt_mqtt_config
}  // namespace esphome
