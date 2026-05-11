#pragma once

#include <array>
#include <string>

#include "esphome/components/web_server_base/web_server_base.h"
#include "esphome/core/component.h"
#include "esphome/core/preferences.h"

namespace esphome {
namespace openquatt_web_auth {

class OpenQuattWebAuth : public Component {
 public:
  void set_bootstrap_username(const std::string &bootstrap_username) { this->bootstrap_username_ = bootstrap_username; }
  void set_bootstrap_password(const std::string &bootstrap_password) { this->bootstrap_password_ = bootstrap_password; }
  void set_default_auth_enabled(bool default_auth_enabled) { this->default_auth_enabled_ = default_auth_enabled; }

  void setup() override;
  void loop() override;
  void dump_config() override;
  float get_setup_priority() const override;

  bool set_runtime_credentials(const std::string &username, const std::string &password);
  bool set_open_access(const char *source = "runtime-disabled");
  bool start_recovery_window(uint32_t duration_ms = 600000UL);
  bool set_api_security_enabled(bool enabled);
  bool rotate_api_security_key();
  const std::string &get_active_username() const { return this->active_username_; }
  const std::string &get_credential_source() const { return this->credential_source_; }
  bool is_auth_enabled() const { return !this->active_username_.empty(); }
  bool verify_current_password(const std::string &password) const { return password == this->active_password_; }
  bool is_setup_window_active() const;
  const std::string &get_csrf_token() const { return this->csrf_token_; }
  bool is_api_security_enabled() const { return this->api_security_enabled_; }
  bool has_api_security_key() const { return this->api_security_key_present_; }
  const std::string &get_api_security_key() const { return this->api_security_key_; }
  const std::string &get_api_security_source() const { return this->api_security_source_; }
  bool is_api_security_transport_active() const;

 protected:
  static constexpr uint32_t STORAGE_MAGIC = 0x4F514157;
  static constexpr uint16_t STORAGE_VERSION = 1;
  static constexpr size_t USERNAME_MAX_LEN = 32;
  static constexpr size_t PASSWORD_MAX_LEN = 64;
  static constexpr uint32_t API_SECURITY_STORAGE_MAGIC = 0x4F514153;
  static constexpr uint16_t API_SECURITY_STORAGE_VERSION = 1;

  struct AuthStorage {
    uint32_t magic;
    uint16_t version;
    char username[USERNAME_MAX_LEN + 1];
    char password[PASSWORD_MAX_LEN + 1];
  };

  struct ApiSecurityStorage {
    uint32_t magic;
    uint16_t version;
    uint8_t enabled;
    uint8_t key_present;
    std::array<uint8_t, 32> key;
  };

  bool load_storage_(AuthStorage *storage);
  bool save_storage_(const AuthStorage &storage);
  bool apply_storage_(const AuthStorage &storage, const char *source);
  bool build_storage_(const std::string &username, const std::string &password, AuthStorage *storage);
  bool is_valid_storage_(const AuthStorage &storage) const;
  bool load_api_security_storage_(ApiSecurityStorage *storage);
  bool save_api_security_storage_(const ApiSecurityStorage &storage);
  bool apply_api_security_storage_(const ApiSecurityStorage &storage, const char *source);
  bool build_api_security_storage_(bool enabled, const std::string &key, ApiSecurityStorage *storage);
  bool is_valid_api_security_storage_(const ApiSecurityStorage &storage) const;
  static std::string encode_api_security_key_(const std::array<uint8_t, 32> &key);
  static std::array<uint8_t, 32> generate_api_security_key_();
  bool initialize_api_security_();
  void publish_state_();
  void register_http_handlers_();
  bool suspend_auth_runtime_(const char *source);
  void clear_setup_window_();
  void rotate_csrf_token_();
  bool restore_suspended_auth_if_needed_();

  std::string bootstrap_username_;
  std::string bootstrap_password_;
  std::string active_username_;
  std::string active_password_;
  std::string credential_source_;
  std::string csrf_token_;
  std::string api_security_key_;
  std::string api_security_source_;
  bool default_auth_enabled_{true};
  bool api_security_enabled_{false};
  bool api_security_key_present_{false};
  bool api_security_transport_active_{false};
  ESPPreferenceObject pref_;
  ESPPreferenceObject api_security_pref_;
  bool handlers_registered_{false};
  bool api_security_handlers_registered_{false};
  bool api_security_ready_{false};
  uint32_t setup_window_until_ms_{0};
  AuthStorage suspended_storage_{};
  bool has_suspended_storage_{false};
};

}  // namespace openquatt_web_auth
}  // namespace esphome
