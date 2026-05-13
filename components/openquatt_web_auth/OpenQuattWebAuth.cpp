#include "OpenQuattWebAuth.h"

#include <array>
#include <algorithm>
#include <cstdio>
#include <cstring>

#include "esp_random.h"
#include "esphome/core/application.h"
#include "esphome/components/api/api_server.h"
#include "esphome/core/helpers.h"
#include "esphome/core/log.h"

namespace esphome {
namespace openquatt_web_auth {

static const char *const TAG = "openquatt.web_auth";
static const uint32_t STORAGE_KEY = fnv1_hash("openquatt_web_auth_store");
static const uint32_t API_SECURITY_STORAGE_KEY = fnv1_hash("openquatt_api_security_store");

static std::string base64_encode_bytes_(const uint8_t *data, size_t length) {
  static constexpr char TABLE[] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
  std::string out;
  out.reserve(((length + 2) / 3) * 4);

  for (size_t i = 0; i < length; i += 3) {
    const uint32_t byte_a = data[i];
    const uint32_t byte_b = i + 1 < length ? data[i + 1] : 0;
    const uint32_t byte_c = i + 2 < length ? data[i + 2] : 0;
    const uint32_t triple = (byte_a << 16) | (byte_b << 8) | byte_c;

    out.push_back(TABLE[(triple >> 18) & 0x3F]);
    out.push_back(TABLE[(triple >> 12) & 0x3F]);
    out.push_back(i + 1 < length ? TABLE[(triple >> 6) & 0x3F] : '=');
    out.push_back(i + 2 < length ? TABLE[triple & 0x3F] : '=');
  }

  return out;
}

static void fill_random_psk_(std::array<uint8_t, 32> *key) {
  if (key == nullptr) {
    return;
  }
  for (size_t i = 0; i < key->size(); i += sizeof(uint32_t)) {
    const uint32_t rnd = esp_random();
    for (size_t byte_index = 0; byte_index < sizeof(uint32_t) && i + byte_index < key->size(); ++byte_index) {
      (*key)[i + byte_index] = static_cast<uint8_t>(rnd >> (byte_index * 8));
    }
  }
}

static bool header_matches_host_(const std::string &header_value, const std::string &host) {
  if (host.empty() || header_value.empty()) {
    return false;
  }

  size_t authority_start = 0;
  const size_t scheme_pos = header_value.find("://");
  if (scheme_pos != std::string::npos) {
    authority_start = scheme_pos + 3;
  }
  const size_t authority_end = header_value.find_first_of("/?#", authority_start);
  const std::string authority = header_value.substr(
      authority_start, authority_end == std::string::npos ? std::string::npos : authority_end - authority_start);
  return authority == host;
}

class OpenQuattWebAuthRequestHandler : public AsyncWebHandler {
 public:
  explicit OpenQuattWebAuthRequestHandler(OpenQuattWebAuth *parent) : parent_(parent) {}

  bool passes_same_origin_(AsyncWebServerRequest *request) const {
    const auto host = request->get_header("Host");
    if (!host.has_value() || host->empty()) {
      return false;
    }

    const auto origin = request->get_header("Origin");
    if (origin.has_value() && !header_matches_host_(origin.value(), host.value())) {
      return false;
    }

    const auto referer = request->get_header("Referer");
    if (referer.has_value() && !header_matches_host_(referer.value(), host.value())) {
      return false;
    }

    return true;
  }

  bool passes_csrf_(AsyncWebServerRequest *request) const {
    const std::string csrf_token = request->arg("csrf_token");
    return !csrf_token.empty() && csrf_token == this->parent_->get_csrf_token();
  }

  bool canHandle(AsyncWebServerRequest *request) const override {
    char url_buf[AsyncWebServerRequest::URL_BUF_SIZE];
    StringRef url = request->url_to(url_buf);
    if (url == "/auth/status" && request->method() == HTTP_GET) {
      return true;
    }
    if (url == "/auth/change" && request->method() == HTTP_POST) {
      return true;
    }
    if (url == "/auth/disable" && request->method() == HTTP_POST) {
      return true;
    }
    if (url == "/api-security/status" && request->method() == HTTP_GET) {
      return true;
    }
    if (url == "/api-security/enable" && request->method() == HTTP_POST) {
      return true;
    }
    if (url == "/api-security/rotate" && request->method() == HTTP_POST) {
      return true;
    }
    if (url == "/api-security/disable" && request->method() == HTTP_POST) {
      return true;
    }
    return false;
  }

  void handleRequest(AsyncWebServerRequest *request) override {
    char url_buf[AsyncWebServerRequest::URL_BUF_SIZE];
    StringRef url = request->url_to(url_buf);

    if (url == "/auth/status" && request->method() == HTTP_GET) {
      auto *stream = request->beginResponseStream("application/json");
      stream->printf(R"({"enabled":%s,"setup_window_active":%s,"username":"%s","source":"%s","csrf_token":"%s"})",
                     this->parent_->is_auth_enabled() ? "true" : "false",
                     this->parent_->is_setup_window_active() ? "true" : "false",
                     this->parent_->get_active_username().c_str(),
                     this->parent_->get_credential_source().c_str(),
                     this->parent_->get_csrf_token().c_str());
      request->send(stream);
      return;
    }

    if (url == "/auth/change" && request->method() == HTTP_POST) {
      if (!this->passes_same_origin_(request) || !this->passes_csrf_(request)) {
        request->send(409, "application/json", R"({"ok":false,"error":"forbidden"})");
        return;
      }

      const std::string current_password = request->arg("current_password");
      const std::string new_username = request->arg("new_username");
      const std::string new_password = request->arg("new_password");

      if (new_username.empty() || new_password.empty()) {
        request->send(409, "application/json", R"({"ok":false,"error":"missing_fields"})");
        return;
      }
      if (this->parent_->is_auth_enabled()) {
        if (!this->parent_->verify_current_password(current_password)) {
          request->send(409, "application/json", R"({"ok":false,"error":"invalid_current_password"})");
          return;
        }
      } else if (!this->parent_->is_setup_window_active()) {
        request->send(409, "application/json", R"({"ok":false,"error":"setup_window_required"})");
        return;
      }
      if (!this->parent_->set_runtime_credentials(new_username, new_password)) {
        request->send(500, "application/json", R"({"ok":false,"error":"persist_failed"})");
        return;
      }

      auto *stream = request->beginResponseStream("application/json");
      stream->printf(R"({"ok":true,"username":"%s","source":"%s"})", this->parent_->get_active_username().c_str(),
                     this->parent_->get_credential_source().c_str());
      request->send(stream);
      return;
    }

    if (url == "/auth/disable" && request->method() == HTTP_POST) {
      if (!this->passes_same_origin_(request) || !this->passes_csrf_(request)) {
        request->send(409, "application/json", R"({"ok":false,"error":"forbidden"})");
        return;
      }

      const std::string current_password = request->arg("current_password");

      if (!this->parent_->is_auth_enabled()) {
        request->send(409, "application/json", R"({"ok":false,"error":"already_disabled"})");
        return;
      }
      if (!this->parent_->verify_current_password(current_password)) {
        request->send(409, "application/json", R"({"ok":false,"error":"invalid_current_password"})");
        return;
      }
      if (!this->parent_->set_open_access()) {
        request->send(500, "application/json", R"({"ok":false,"error":"persist_failed"})");
        return;
      }

      request->send(200, "application/json", R"({"ok":true,"enabled":false})");
      return;
    }

    if (url == "/api-security/status" && request->method() == HTTP_GET) {
      auto *stream = request->beginResponseStream("application/json");
      stream->printf(R"({"enabled":%s,"transport_active":%s,"key":"%s","source":"%s","csrf_token":"%s"})",
                     this->parent_->is_api_security_enabled() ? "true" : "false",
                     this->parent_->is_api_security_transport_active() ? "true" : "false",
                     this->parent_->get_api_security_key().c_str(),
                     this->parent_->get_api_security_source().c_str(),
                     this->parent_->get_csrf_token().c_str());
      request->send(stream);
      return;
    }

    if (url == "/api-security/enable" && request->method() == HTTP_POST) {
      if (!this->passes_same_origin_(request) || !this->passes_csrf_(request)) {
        request->send(409, "application/json", R"({"ok":false,"error":"forbidden"})");
        return;
      }

      if (!this->parent_->set_api_security_enabled(true)) {
        request->send(500, "application/json", R"({"ok":false,"error":"persist_failed"})");
        return;
      }

      auto *stream = request->beginResponseStream("application/json");
      stream->printf(R"({"ok":true,"enabled":true,"key":"%s"})", this->parent_->get_api_security_key().c_str());
      request->send(stream);
      return;
    }

    if (url == "/api-security/rotate" && request->method() == HTTP_POST) {
      if (!this->passes_same_origin_(request) || !this->passes_csrf_(request)) {
        request->send(409, "application/json", R"({"ok":false,"error":"forbidden"})");
        return;
      }

      if (!this->parent_->rotate_api_security_key()) {
        request->send(500, "application/json", R"({"ok":false,"error":"persist_failed"})");
        return;
      }

      auto *stream = request->beginResponseStream("application/json");
      stream->printf(R"({"ok":true,"enabled":true,"key":"%s"})", this->parent_->get_api_security_key().c_str());
      request->send(stream);
      return;
    }

    if (url == "/api-security/disable" && request->method() == HTTP_POST) {
      if (!this->passes_same_origin_(request) || !this->passes_csrf_(request)) {
        request->send(409, "application/json", R"({"ok":false,"error":"forbidden"})");
        return;
      }

      if (!this->parent_->set_api_security_enabled(false)) {
        request->send(500, "application/json", R"({"ok":false,"error":"persist_failed"})");
        return;
      }

      request->send(200, "application/json", R"({"ok":true,"enabled":false})");
      return;
    }

    request->send(404);
  }

 protected:
  OpenQuattWebAuth *parent_;
};

void OpenQuattWebAuth::setup() {
#ifndef USE_WEBSERVER_AUTH
  ESP_LOGE(TAG, "web_server auth support is not enabled; keep a bootstrap web_server.auth block in YAML");
  return;
#else
  if (global_preferences == nullptr) {
    ESP_LOGE(TAG, "Preferences backend is unavailable");
    return;
  }
  if (web_server_base::global_web_server_base == nullptr) {
    ESP_LOGE(TAG, "global_web_server_base is unavailable");
    return;
  }

  this->rotate_csrf_token_();
  this->register_http_handlers_();
  this->pref_ = global_preferences->make_preference<AuthStorage>(STORAGE_KEY, true);
  this->api_security_pref_ = global_preferences->make_preference<ApiSecurityStorage>(API_SECURITY_STORAGE_KEY, true);

  AuthStorage storage{};
  if (this->load_storage_(&storage)) {
    if (!this->apply_storage_(storage, "stored")) {
      ESP_LOGE(TAG, "Stored credentials could not be applied");
    }
  } else if (this->default_auth_enabled_) {
    if (!this->build_storage_(this->bootstrap_username_, this->bootstrap_password_, &storage)) {
      ESP_LOGE(TAG, "Bootstrap credentials could not be prepared");
    } else if (!this->save_storage_(storage) || !this->apply_storage_(storage, "bootstrap")) {
      ESP_LOGE(TAG, "Bootstrap credentials could not be applied");
    }
  } else {
    if (!this->build_storage_("", "", &storage)) {
      ESP_LOGE(TAG, "Open-access bootstrap state could not be prepared");
    } else if (!this->save_storage_(storage) || !this->apply_storage_(storage, "bootstrap-open")) {
      ESP_LOGE(TAG, "Open-access bootstrap state could not be applied");
    }
  }

  if (!this->initialize_api_security_()) {
    ESP_LOGW(TAG, "API security is not initialized yet");
  }
#endif
}

void OpenQuattWebAuth::loop() {
  if (!this->api_security_ready_) {
    this->initialize_api_security_();
  }
#ifdef USE_API_NOISE
  if (api::global_api_server != nullptr) {
    this->api_security_transport_active_ = api::global_api_server->get_noise_ctx().has_psk();
  }
#endif
  if (this->restore_suspended_auth_if_needed_()) {
    ESP_LOGW(TAG, "Recovery setup window expired; restored previous protected credentials");
  }
}

void OpenQuattWebAuth::dump_config() {
  ESP_LOGCONFIG(TAG, "OpenQuatt Web Auth");
  ESP_LOGCONFIG(TAG, "  Active username: %s", this->active_username_.empty() ? "<none>" : this->active_username_.c_str());
  ESP_LOGCONFIG(TAG, "  Credential source: %s",
                this->credential_source_.empty() ? "<unknown>" : this->credential_source_.c_str());
  ESP_LOGCONFIG(TAG, "  Setup window active: %s", YESNO(this->is_setup_window_active()));
  ESP_LOGCONFIG(TAG, "  HTTP handlers registered: %s", YESNO(this->handlers_registered_));
}

float OpenQuattWebAuth::get_setup_priority() const { return setup_priority::WIFI; }

bool OpenQuattWebAuth::set_runtime_credentials(const std::string &username, const std::string &password) {
  AuthStorage storage{};
  if (!this->build_storage_(username, password, &storage)) {
    return false;
  }
  if (!this->save_storage_(storage)) {
    return false;
  }
  this->clear_setup_window_();
  this->has_suspended_storage_ = false;
  return this->apply_storage_(storage, "runtime");
}

bool OpenQuattWebAuth::set_open_access(const char *source) {
  AuthStorage storage{};
  if (!this->build_storage_("", "", &storage)) {
    return false;
  }
  if (!this->save_storage_(storage)) {
    return false;
  }
  ESP_LOGW(TAG, "Runtime web auth disabled; interface is open on the local network");
  this->clear_setup_window_();
  this->has_suspended_storage_ = false;
  return this->apply_storage_(storage, source != nullptr ? source : "runtime-disabled");
}

bool OpenQuattWebAuth::start_recovery_window(uint32_t duration_ms) {
  if (duration_ms == 0) {
    return false;
  }

  this->setup_window_until_ms_ = static_cast<uint32_t>(millis()) + duration_ms;
  this->rotate_csrf_token_();

  if (!this->is_auth_enabled()) {
    ESP_LOGW(TAG, "Armed local setup window for open-access mode");
    return true;
  }

  if (!this->build_storage_(this->active_username_, this->active_password_, &this->suspended_storage_)) {
    return false;
  }
  this->has_suspended_storage_ = true;
  ESP_LOGW(TAG, "Armed recovery window and temporarily suspended protected web auth");
  return this->suspend_auth_runtime_("recovery-open");
}

bool OpenQuattWebAuth::set_api_security_enabled(bool enabled) {
  ApiSecurityStorage storage{};
  if (!this->load_api_security_storage_(&storage)) {
    if (!this->build_api_security_storage_(enabled, "", &storage)) {
      return false;
    }
  } else {
    storage.enabled = enabled ? 1 : 0;
    if (enabled && !storage.key_present) {
      storage.key = this->generate_api_security_key_();
      storage.key_present = 1;
    }
  }
  if (!this->save_api_security_storage_(storage)) {
    return false;
  }
  if (!this->apply_api_security_storage_(storage, enabled ? "runtime-enabled" : "runtime-disabled", false)) {
    return false;
  }
  this->api_security_ready_ = true;
  return true;
}

bool OpenQuattWebAuth::rotate_api_security_key() {
  ApiSecurityStorage storage{};
  if (!this->load_api_security_storage_(&storage)) {
    if (!this->build_api_security_storage_(true, "", &storage)) {
      return false;
    }
  }
  storage.enabled = 1;
  storage.key = this->generate_api_security_key_();
  storage.key_present = 1;
  if (!this->save_api_security_storage_(storage)) {
    return false;
  }
  if (!this->apply_api_security_storage_(storage, "runtime-rotated", false)) {
    return false;
  }
  this->api_security_ready_ = true;
  return true;
}

bool OpenQuattWebAuth::load_storage_(AuthStorage *storage) {
  if (storage == nullptr) {
    return false;
  }
  if (!this->pref_.load(storage)) {
    return false;
  }
  return this->is_valid_storage_(*storage);
}

bool OpenQuattWebAuth::save_storage_(const AuthStorage &storage) {
  if (!this->pref_.save(&storage)) {
    ESP_LOGE(TAG, "Failed to save credentials to preferences");
    return false;
  }
  if (!global_preferences->sync()) {
    ESP_LOGE(TAG, "Failed to sync credentials to preferences");
    return false;
  }
  return true;
}

bool OpenQuattWebAuth::load_api_security_storage_(ApiSecurityStorage *storage) {
  if (storage == nullptr) {
    return false;
  }
  if (!this->api_security_pref_.load(storage)) {
    return false;
  }
  return this->is_valid_api_security_storage_(*storage);
}

bool OpenQuattWebAuth::save_api_security_storage_(const ApiSecurityStorage &storage) {
  if (!this->api_security_pref_.save(&storage)) {
    ESP_LOGE(TAG, "Failed to save API security settings to preferences");
    return false;
  }
  if (!global_preferences->sync()) {
    ESP_LOGE(TAG, "Failed to sync API security settings to preferences");
    return false;
  }
  return true;
}

bool OpenQuattWebAuth::apply_api_security_storage_(const ApiSecurityStorage &storage, const char *source,
                                                   bool apply_transport) {
  if (api::global_api_server == nullptr) {
    return false;
  }

  const bool enabled = storage.enabled != 0;
  const bool key_present = storage.key_present != 0;
  const std::string key = key_present ? encode_api_security_key_(storage.key) : "";

  bool transport_active = false;
#ifdef USE_API_NOISE
  transport_active = api::global_api_server->get_noise_ctx().has_psk();
  if (apply_transport) {
    if (enabled) {
      if (!key_present) {
        return false;
      }
      const bool key_matches = transport_active &&
                               std::equal(storage.key.begin(), storage.key.end(),
                                          api::global_api_server->get_noise_ctx().get_psk().begin());
      if (!key_matches) {
        if (!api::global_api_server->save_noise_psk(storage.key, true)) {
          ESP_LOGE(TAG, "Failed to activate API encryption");
          return false;
        }
        transport_active = true;
      }
    } else if (transport_active) {
      if (!api::global_api_server->clear_noise_psk(true)) {
        ESP_LOGE(TAG, "Failed to clear API encryption");
        return false;
      }
      transport_active = false;
    }
  }
#else
  if (apply_transport && enabled) {
    return false;
  }
#endif

  this->api_security_key_present_ = key_present;
  this->api_security_key_ = key;
  this->api_security_enabled_ = enabled;
  this->api_security_source_ = source != nullptr ? source : "";
  this->api_security_transport_active_ = transport_active;

  return true;
}

bool OpenQuattWebAuth::apply_storage_(const AuthStorage &storage, const char *source) {
  if (web_server_base::global_web_server_base == nullptr) {
    return false;
  }

  this->active_username_ = storage.username;
  this->active_password_ = storage.password;
  this->credential_source_ = source != nullptr ? source : "";

  web_server_base::global_web_server_base->set_auth_username(storage.username);
  web_server_base::global_web_server_base->set_auth_password(storage.password);
  this->publish_state_();

  return true;
}

bool OpenQuattWebAuth::suspend_auth_runtime_(const char *source) {
  if (web_server_base::global_web_server_base == nullptr) {
    return false;
  }

  this->active_username_.clear();
  this->active_password_.clear();
  this->credential_source_ = source != nullptr ? source : "";

  web_server_base::global_web_server_base->set_auth_username("");
  web_server_base::global_web_server_base->set_auth_password("");
  this->publish_state_();
  return true;
}

bool OpenQuattWebAuth::build_api_security_storage_(bool enabled, const std::string &key, ApiSecurityStorage *storage) {
  if (storage == nullptr) {
    return false;
  }

  std::memset(storage, 0, sizeof(*storage));
  storage->magic = API_SECURITY_STORAGE_MAGIC;
  storage->version = API_SECURITY_STORAGE_VERSION;
  storage->enabled = enabled ? 1 : 0;

  if (enabled && key.empty()) {
    storage->key = this->generate_api_security_key_();
    storage->key_present = 1;
  } else if (!key.empty()) {
    ESP_LOGE(TAG, "Manual API security key input is not supported in this build");
    return false;
  }

  return true;
}

bool OpenQuattWebAuth::build_storage_(const std::string &username, const std::string &password, AuthStorage *storage) {
  if (storage == nullptr) {
    return false;
  }
  const bool username_empty = username.empty();
  const bool password_empty = password.empty();
  if (username_empty != password_empty) {
    ESP_LOGE(TAG, "Username/password must either both be set or both be empty");
    return false;
  }
  if (!username_empty && username.size() > USERNAME_MAX_LEN) {
    ESP_LOGE(TAG, "Invalid username length");
    return false;
  }
  if (!password_empty && password.size() > PASSWORD_MAX_LEN) {
    ESP_LOGE(TAG, "Invalid password length");
    return false;
  }

  std::memset(storage, 0, sizeof(*storage));
  storage->magic = STORAGE_MAGIC;
  storage->version = STORAGE_VERSION;
  if (!username_empty) {
    std::strncpy(storage->username, username.c_str(), USERNAME_MAX_LEN);
    std::strncpy(storage->password, password.c_str(), PASSWORD_MAX_LEN);
  }
  return true;
}

bool OpenQuattWebAuth::is_valid_api_security_storage_(const ApiSecurityStorage &storage) const {
  if (storage.magic != API_SECURITY_STORAGE_MAGIC || storage.version != API_SECURITY_STORAGE_VERSION) {
    return false;
  }
  if (storage.key_present > 1) {
    return false;
  }
  if (!storage.key_present) {
    return storage.enabled == 0;
  }
  return true;
}

std::string OpenQuattWebAuth::encode_api_security_key_(const std::array<uint8_t, 32> &key) {
  return base64_encode_bytes_(key.data(), key.size());
}

std::array<uint8_t, 32> OpenQuattWebAuth::generate_api_security_key_() {
  std::array<uint8_t, 32> key{};
  fill_random_psk_(&key);
  return key;
}

bool OpenQuattWebAuth::initialize_api_security_() {
  if (this->api_security_ready_) {
    return true;
  }
  if (api::global_api_server == nullptr) {
    return false;
  }

  ApiSecurityStorage storage{};
  if (!this->load_api_security_storage_(&storage)) {
    if (!this->build_api_security_storage_(false, "", &storage) || !this->save_api_security_storage_(storage)) {
      return false;
    }
  }

  if (!this->apply_api_security_storage_(storage, storage.enabled ? "stored" : "bootstrap-disabled")) {
    return false;
  }

  this->api_security_ready_ = true;
  return true;
}

bool OpenQuattWebAuth::is_api_security_transport_active() const {
  return this->api_security_transport_active_;
}

bool OpenQuattWebAuth::is_valid_storage_(const AuthStorage &storage) const {
  if (storage.magic != STORAGE_MAGIC || storage.version != STORAGE_VERSION) {
    return false;
  }
  const bool username_empty = storage.username[0] == '\0';
  const bool password_empty = storage.password[0] == '\0';
  if (username_empty != password_empty) {
    return false;
  }
  if (username_empty && password_empty) {
    return true;
  }
  if (strnlen(storage.username, USERNAME_MAX_LEN + 1) > USERNAME_MAX_LEN) {
    return false;
  }
  if (strnlen(storage.password, PASSWORD_MAX_LEN + 1) > PASSWORD_MAX_LEN) {
    return false;
  }
  return true;
}

bool OpenQuattWebAuth::is_setup_window_active() const {
  return this->setup_window_until_ms_ != 0 && static_cast<uint32_t>(millis()) < this->setup_window_until_ms_;
}

void OpenQuattWebAuth::clear_setup_window_() { this->setup_window_until_ms_ = 0; }

void OpenQuattWebAuth::rotate_csrf_token_() {
  char token[33];
  const uint32_t part_a = esp_random();
  const uint32_t part_b = esp_random();
  const uint32_t part_c = esp_random();
  const uint32_t part_d = esp_random();
  std::snprintf(token, sizeof(token), "%08x%08x%08x%08x", part_a, part_b, part_c, part_d);
  this->csrf_token_ = token;
}

bool OpenQuattWebAuth::restore_suspended_auth_if_needed_() {
  if (this->setup_window_until_ms_ == 0 || this->is_setup_window_active()) {
    return false;
  }

  this->clear_setup_window_();
  if (!this->has_suspended_storage_) {
    return false;
  }

  this->has_suspended_storage_ = false;
  return this->apply_storage_(this->suspended_storage_, "stored");
}

void OpenQuattWebAuth::publish_state_() {}

void OpenQuattWebAuth::register_http_handlers_() {
  if (this->handlers_registered_) {
    return;
  }
  if (web_server_base::global_web_server_base == nullptr) {
    return;
  }
  web_server_base::global_web_server_base->add_handler(new OpenQuattWebAuthRequestHandler(this));
  this->handlers_registered_ = true;
}

}  // namespace openquatt_web_auth
}  // namespace esphome
