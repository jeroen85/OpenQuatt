#include "OpenQuattMqttConfig.h"

#include <algorithm>
#include <cstdlib>
#include <array>
#include <cstdio>
#include <cstring>

#include "esp_random.h"
#include "esphome/core/application.h"
#include "esphome/core/helpers.h"
#include "esphome/core/log.h"

namespace esphome {
namespace openquatt_mqtt_config {

static const char *const TAG = "openquatt.mqtt";
static const uint32_t STORAGE_KEY = fnv1_hash("openquatt_mqtt_config_store");
static constexpr size_t MQTT_TOPIC_PREFIX_MAX_LEN = 64;

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

static void fill_random_token_(std::array<uint8_t, 32> *key) {
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

class OpenQuattMqttConfigRequestHandler : public AsyncWebHandler {
 public:
  explicit OpenQuattMqttConfigRequestHandler(OpenQuattMqttConfig *parent) : parent_(parent) {}

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
    if (url == "/mqtt/status" && request->method() == HTTP_GET) {
      return true;
    }
    if (url == "/mqtt/save" && request->method() == HTTP_POST) {
      return true;
    }
    return false;
  }

  void handleRequest(AsyncWebServerRequest *request) override {
    char url_buf[AsyncWebServerRequest::URL_BUF_SIZE];
    StringRef url = request->url_to(url_buf);

    if (url == "/mqtt/status" && request->method() == HTTP_GET) {
      auto *stream = request->beginResponseStream("application/json");
      stream->printf(
          R"({"enabled":%s,"connected":%s,"broker":"%s","port":%u,"username":"%s","topic_prefix":"%s","password_set":%s,"source":"%s","csrf_token":"%s"})",
          this->parent_->is_enabled() ? "true" : "false", this->parent_->is_connected() ? "true" : "false",
          this->parent_->get_broker().c_str(), this->parent_->get_port(), this->parent_->get_username().c_str(),
          this->parent_->get_topic_prefix().c_str(), this->parent_->has_password() ? "true" : "false",
          this->parent_->get_config_source().c_str(), this->parent_->get_csrf_token().c_str());
      request->send(stream);
      return;
    }

    if (url == "/mqtt/save" && request->method() == HTTP_POST) {
      if (!this->passes_same_origin_(request) || !this->passes_csrf_(request)) {
        request->send(409, "application/json", R"({"ok":false,"error":"forbidden"})");
        return;
      }

      const std::string broker = request->arg("broker");
      const std::string port_arg = request->arg("port");
      const std::string username = request->arg("username");
      const std::string password = request->arg("password");
      const std::string topic_prefix = request->arg("topic_prefix");
      const std::string enabled_arg = request->arg("enabled");
      const bool enabled = enabled_arg == "true" || enabled_arg == "1" || enabled_arg == "on";

      const auto parse_port = [&]() -> uint16_t {
        if (port_arg.empty()) {
          return 0;
        }
        const long parsed = std::strtol(port_arg.c_str(), nullptr, 10);
        if (parsed < 1 || parsed > 65535) {
          return 0;
        }
        return static_cast<uint16_t>(parsed);
      };

      const uint16_t port = parse_port();
      if (enabled && broker.empty()) {
        request->send(409, "application/json", R"({"ok":false,"error":"missing_broker"})");
        return;
      }
      if (!topic_prefix.empty() && topic_prefix.size() > MQTT_TOPIC_PREFIX_MAX_LEN) {
        request->send(409, "application/json", R"({"ok":false,"error":"invalid_topic_prefix"})");
        return;
      }
      if (port == 0) {
        request->send(409, "application/json", R"({"ok":false,"error":"invalid_port"})");
        return;
      }
      if (!this->parent_->set_runtime_config(broker, port, username, password, topic_prefix, enabled)) {
        request->send(500, "application/json", R"({"ok":false,"error":"persist_failed"})");
        return;
      }

      auto *stream = request->beginResponseStream("application/json");
      stream->printf(R"({"ok":true,"enabled":%s,"connected":%s})", this->parent_->is_enabled() ? "true" : "false",
                     this->parent_->is_connected() ? "true" : "false");
      request->send(stream);
      return;
    }

    request->send(404);
  }

 protected:
  OpenQuattMqttConfig *parent_;
};

void OpenQuattMqttConfig::setup() {
  if (global_preferences == nullptr) {
    ESP_LOGE(TAG, "Preferences backend is unavailable");
    return;
  }
  if (web_server_base::global_web_server_base == nullptr) {
    ESP_LOGE(TAG, "global_web_server_base is unavailable");
    return;
  }
  if (this->mqtt_client_ == nullptr) {
    ESP_LOGE(TAG, "MQTT client component is unavailable");
    return;
  }

  this->rotate_csrf_token_();
  this->register_http_handlers_();
  this->pref_ = global_preferences->make_preference<Storage>(STORAGE_KEY, true);

  Storage storage{};
  if (!this->load_storage_(&storage)) {
    if (!this->build_storage_(this->bootstrap_broker_, this->bootstrap_port_, this->bootstrap_username_,
                              this->bootstrap_password_, this->bootstrap_topic_prefix_, this->default_enabled_,
                              &storage) ||
        !this->save_storage_(storage)) {
      ESP_LOGE(TAG, "MQTT bootstrap configuration could not be prepared");
      return;
    }
    this->apply_storage_(storage, "bootstrap");
    return;
  }

  if (!this->apply_storage_(storage, "stored")) {
    ESP_LOGE(TAG, "Stored MQTT configuration could not be applied");
  }
}

void OpenQuattMqttConfig::dump_config() {
  ESP_LOGCONFIG(TAG, "OpenQuatt MQTT Config");
  ESP_LOGCONFIG(TAG, "  Enabled: %s", YESNO(this->enabled_));
  ESP_LOGCONFIG(TAG, "  Broker: %s:%u", this->broker_.empty() ? "<none>" : this->broker_.c_str(), this->port_);
  ESP_LOGCONFIG(TAG, "  Username: %s", this->username_.empty() ? "<none>" : this->username_.c_str());
  ESP_LOGCONFIG(TAG, "  Topic prefix: %s", this->topic_prefix_.empty() ? "<none>" : this->topic_prefix_.c_str());
  ESP_LOGCONFIG(TAG, "  Runtime source: %s", this->config_source_.empty() ? "<unknown>" : this->config_source_.c_str());
  ESP_LOGCONFIG(TAG, "  HTTP handlers registered: %s", YESNO(this->handlers_registered_));
}

float OpenQuattMqttConfig::get_setup_priority() const { return setup_priority::LATE; }

bool OpenQuattMqttConfig::set_runtime_config(const std::string &broker, uint16_t port, const std::string &username,
                                             const std::string &password, const std::string &topic_prefix,
                                             bool enabled) {
  Storage storage{};
  if (!this->load_storage_(&storage)) {
    if (!this->build_storage_(this->bootstrap_broker_, this->bootstrap_port_, this->bootstrap_username_,
                              this->bootstrap_password_, this->bootstrap_topic_prefix_, this->default_enabled_,
                              &storage)) {
      return false;
    }
  }

  const std::string next_password = password.empty() ? this->password_ : password;
  if (!this->build_storage_(broker, port, username, next_password, topic_prefix, enabled, &storage)) {
    return false;
  }
  if (!this->save_storage_(storage)) {
    return false;
  }
  return this->apply_storage_(storage, "runtime");
}

bool OpenQuattMqttConfig::load_storage_(Storage *storage) {
  if (storage == nullptr) {
    return false;
  }
  if (!this->pref_.load(storage)) {
    return false;
  }
  return this->is_valid_storage_(*storage);
}

bool OpenQuattMqttConfig::save_storage_(const Storage &storage) {
  if (!this->pref_.save(&storage)) {
    ESP_LOGE(TAG, "Failed to save MQTT configuration to preferences");
    return false;
  }
  if (!global_preferences->sync()) {
    ESP_LOGE(TAG, "Failed to sync MQTT configuration to preferences");
    return false;
  }
  return true;
}

bool OpenQuattMqttConfig::apply_storage_(const Storage &storage, const char *source) {
  if (this->mqtt_client_ == nullptr) {
    return false;
  }

  const bool enabled = storage.enabled != 0;
  const std::string broker = storage.broker;
  const std::string username = storage.username;
  const std::string password = storage.password;
  const std::string topic_prefix = storage.topic_prefix;

  this->mqtt_client_->set_broker_address(broker);
  this->mqtt_client_->set_broker_port(storage.port);
  this->mqtt_client_->set_username(username);
  this->mqtt_client_->set_password(password);
  this->mqtt_client_->set_topic_prefix(topic_prefix, App.get_name());

  this->mqtt_client_->disable();
  if (enabled && broker.empty()) {
    ESP_LOGW(TAG, "MQTT is enabled but no broker is configured; disabling runtime connection");
  } else if (enabled) {
    this->mqtt_client_->enable();
  }

  this->broker_ = broker;
  this->port_ = storage.port;
  this->username_ = username;
  this->password_ = password;
  this->topic_prefix_ = topic_prefix;
  this->enabled_ = enabled;
  this->config_source_ = source != nullptr ? source : "";
  return true;
}

bool OpenQuattMqttConfig::build_storage_(const std::string &broker, uint16_t port, const std::string &username,
                                         const std::string &password, const std::string &topic_prefix, bool enabled,
                                         Storage *storage) {
  if (storage == nullptr) {
    return false;
  }
  if (broker.size() > BROKER_MAX_LEN) {
    ESP_LOGE(TAG, "Invalid broker length");
    return false;
  }
  if (username.size() > USERNAME_MAX_LEN) {
    ESP_LOGE(TAG, "Invalid username length");
    return false;
  }
  if (password.size() > PASSWORD_MAX_LEN) {
    ESP_LOGE(TAG, "Invalid password length");
    return false;
  }
  if (topic_prefix.empty() || topic_prefix.size() > TOPIC_PREFIX_MAX_LEN) {
    ESP_LOGE(TAG, "Invalid topic prefix length");
    return false;
  }
  if (port == 0) {
    ESP_LOGE(TAG, "Invalid MQTT port");
    return false;
  }

  std::memset(storage, 0, sizeof(*storage));
  storage->magic = STORAGE_MAGIC;
  storage->version = STORAGE_VERSION;
  storage->port = port;
  storage->enabled = enabled ? 1 : 0;
  if (!broker.empty()) {
    copy_string_field_(storage->broker, BROKER_MAX_LEN, broker);
  }
  if (!username.empty()) {
    copy_string_field_(storage->username, USERNAME_MAX_LEN, username);
  }
  if (!password.empty()) {
    copy_string_field_(storage->password, PASSWORD_MAX_LEN, password);
  }
  copy_string_field_(storage->topic_prefix, TOPIC_PREFIX_MAX_LEN, topic_prefix);
  return true;
}

bool OpenQuattMqttConfig::is_valid_storage_(const Storage &storage) const {
  if (storage.magic != STORAGE_MAGIC || storage.version != STORAGE_VERSION) {
    return false;
  }
  if (storage.enabled > 1) {
    return false;
  }
  if (storage.port == 0) {
    return false;
  }
  if (strnlen(storage.broker, BROKER_MAX_LEN + 1) > BROKER_MAX_LEN) {
    return false;
  }
  if (strnlen(storage.username, USERNAME_MAX_LEN + 1) > USERNAME_MAX_LEN) {
    return false;
  }
  if (strnlen(storage.password, PASSWORD_MAX_LEN + 1) > PASSWORD_MAX_LEN) {
    return false;
  }
  if (strnlen(storage.topic_prefix, TOPIC_PREFIX_MAX_LEN + 1) > TOPIC_PREFIX_MAX_LEN) {
    return false;
  }
  return true;
}

bool OpenQuattMqttConfig::register_http_handlers_() {
  if (this->handlers_registered_) {
    return true;
  }
  if (web_server_base::global_web_server_base == nullptr) {
    return false;
  }
  web_server_base::global_web_server_base->add_handler(new OpenQuattMqttConfigRequestHandler(this));
  this->handlers_registered_ = true;
  return true;
}

void OpenQuattMqttConfig::rotate_csrf_token_() {
  std::array<uint8_t, 32> token_bytes{};
  fill_random_token_(&token_bytes);
  this->csrf_token_ = base64_encode_bytes_(token_bytes.data(), token_bytes.size());
}

void OpenQuattMqttConfig::copy_string_field_(char *destination, size_t max_len, const std::string &value) {
  if (destination == nullptr) {
    return;
  }
  std::memset(destination, 0, max_len + 1);
  std::strncpy(destination, value.c_str(), max_len);
}

}  // namespace openquatt_mqtt_config
}  // namespace esphome
