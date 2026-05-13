#include "OpenQuattMqttConfig.h"

#include <algorithm>
#include <array>
#include <cctype>
#include <cinttypes>
#include <cstdio>
#include <cstdlib>
#include <cstring>

#include "esp_random.h"
#include "esphome/core/application.h"
#include "esphome/core/helpers.h"
#include "esphome/core/log.h"

namespace esphome {
namespace openquatt_mqtt_config {

static const char *const TAG = "openquatt.mqtt";
static const uint32_t STORAGE_KEY = fnv1_hash("openquatt_mqtt_config_store");

static std::string base64_encode_bytes_(const uint8_t *data, size_t length) {
  static constexpr char TABLE[] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
  std::string out;
  out.reserve(((length + 2U) / 3U) * 4U);

  for (size_t i = 0; i < length; i += 3U) {
    const uint32_t byte_a = data[i];
    const uint32_t byte_b = i + 1U < length ? data[i + 1U] : 0U;
    const uint32_t byte_c = i + 2U < length ? data[i + 2U] : 0U;
    const uint32_t triple = (byte_a << 16U) | (byte_b << 8U) | byte_c;

    out.push_back(TABLE[(triple >> 18U) & 0x3FU]);
    out.push_back(TABLE[(triple >> 12U) & 0x3FU]);
    out.push_back(i + 1U < length ? TABLE[(triple >> 6U) & 0x3FU] : '=');
    out.push_back(i + 2U < length ? TABLE[triple & 0x3FU] : '=');
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
      (*key)[i + byte_index] = static_cast<uint8_t>(rnd >> (byte_index * 8U));
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
    authority_start = scheme_pos + 3U;
  }
  const size_t authority_end = header_value.find_first_of("/?#", authority_start);
  const std::string authority = header_value.substr(
      authority_start, authority_end == std::string::npos ? std::string::npos : authority_end - authority_start);
  return authority == host;
}

static std::string json_escape_(const std::string &value) {
  std::string escaped;
  escaped.reserve(value.size() + 8U);
  for (char ch : value) {
    switch (ch) {
      case '\\':
        escaped += "\\\\";
        break;
      case '"':
        escaped += "\\\"";
        break;
      case '\b':
        escaped += "\\b";
        break;
      case '\f':
        escaped += "\\f";
        break;
      case '\n':
        escaped += "\\n";
        break;
      case '\r':
        escaped += "\\r";
        break;
      case '\t':
        escaped += "\\t";
        break;
      default:
        if (static_cast<unsigned char>(ch) < 0x20U) {
          char buf[8];
          std::snprintf(buf, sizeof(buf), "\\u%04x", static_cast<unsigned char>(ch));
          escaped += buf;
        } else {
          escaped.push_back(ch);
        }
        break;
    }
  }
  return escaped;
}

static bool parse_publish_profile_value_(const std::string &value, PublishProfile *profile) {
  if (profile == nullptr) {
    return false;
  }
  std::string normalized = value;
  std::transform(normalized.begin(), normalized.end(), normalized.begin(),
                 [](unsigned char ch) { return static_cast<char>(std::tolower(ch)); });
  if (normalized == "off") {
    *profile = PublishProfile::OFF;
    return true;
  }
  if (normalized == "essential") {
    *profile = PublishProfile::ESSENTIAL;
    return true;
  }
  if (normalized == "standard") {
    *profile = PublishProfile::STANDARD;
    return true;
  }
  if (normalized == "diagnostic") {
    *profile = PublishProfile::DIAGNOSTIC;
    return true;
  }
  return false;
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
      const std::string broker = json_escape_(this->parent_->get_broker());
      const std::string username = json_escape_(this->parent_->get_username());
      const std::string base_topic = json_escape_(this->parent_->get_base_topic());
      const std::string source = json_escape_(this->parent_->get_config_source());
      const std::string csrf_token = json_escape_(this->parent_->get_csrf_token());
      stream->printf(
          R"({"enabled":%s,"connected":%s,"broker":"%s","port":%u,"username":"%s","base_topic":"%s","publish_profile":"%s","essential_interval_s":%u,"standard_interval_s":%u,"diagnostic_interval_s":%u,"retain_snapshots":%s,"password_set":%s,"source":"%s","csrf_token":"%s"})",
          this->parent_->is_enabled() ? "true" : "false", this->parent_->is_connected() ? "true" : "false",
          broker.c_str(), this->parent_->get_port(), username.c_str(), base_topic.c_str(),
          this->parent_->get_publish_profile_name(), this->parent_->get_essential_interval_s(),
          this->parent_->get_standard_interval_s(), this->parent_->get_diagnostic_interval_s(),
          this->parent_->get_retain_snapshots() ? "true" : "false", this->parent_->has_password() ? "true" : "false",
          source.c_str(), csrf_token.c_str());
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
      const std::string base_topic = request->arg("base_topic");
      const std::string profile_arg = request->arg("publish_profile");
      const std::string essential_interval_arg = request->arg("essential_interval_s");
      const std::string standard_interval_arg = request->arg("standard_interval_s");
      const std::string diagnostic_interval_arg = request->arg("diagnostic_interval_s");
      const std::string retain_snapshots_arg = request->arg("retain_snapshots");
      const std::string enabled_arg = request->arg("enabled");

      const bool enabled = enabled_arg == "true" || enabled_arg == "1" || enabled_arg == "on";
      const bool retain_snapshots =
          retain_snapshots_arg == "true" || retain_snapshots_arg == "1" || retain_snapshots_arg == "on";

      const auto parse_port = [&]() -> uint16_t {
        if (port_arg.empty()) {
          return 0;
        }
        const long parsed = std::strtol(port_arg.c_str(), nullptr, 10);
        if (parsed < 1L || parsed > 65535L) {
          return 0;
        }
        return static_cast<uint16_t>(parsed);
      };
      const auto parse_interval = [](const std::string &arg) -> uint16_t {
        if (arg.empty()) {
          return 0;
        }
        const long parsed = std::strtol(arg.c_str(), nullptr, 10);
        if (parsed < 1L || parsed > 3600L) {
          return 0;
        }
        return static_cast<uint16_t>(parsed);
      };

      PublishProfile publish_profile = PublishProfile::STANDARD;
      if (!parse_publish_profile_value_(profile_arg, &publish_profile)) {
        request->send(409, "application/json", R"({"ok":false,"error":"invalid_publish_profile"})");
        return;
      }

      const uint16_t port = parse_port();
      const uint16_t essential_interval_s = parse_interval(essential_interval_arg);
      const uint16_t standard_interval_s = parse_interval(standard_interval_arg);
      const uint16_t diagnostic_interval_s = parse_interval(diagnostic_interval_arg);
      if (enabled && broker.empty()) {
        request->send(409, "application/json", R"({"ok":false,"error":"missing_broker"})");
        return;
      }
      if (base_topic.empty() || base_topic.size() > 64U) {
        request->send(409, "application/json", R"({"ok":false,"error":"invalid_base_topic"})");
        return;
      }
      if (port == 0U) {
        request->send(409, "application/json", R"({"ok":false,"error":"invalid_port"})");
        return;
      }
      if (essential_interval_s == 0U || standard_interval_s == 0U) {
        request->send(409, "application/json", R"({"ok":false,"error":"invalid_publish_interval"})");
        return;
      }
      if (!this->parent_->set_runtime_config(broker, port, username, password, base_topic, enabled, publish_profile,
                                             essential_interval_s, standard_interval_s, diagnostic_interval_s,
                                             retain_snapshots)) {
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
  this->diagnostic_interval_pref_ =
      global_preferences->make_preference<uint16_t>(DIAGNOSTIC_INTERVAL_KEY, true);

  Storage storage{};
  if (!this->load_storage_(&storage)) {
    if (!this->build_storage_(this->bootstrap_broker_, this->bootstrap_port_, this->bootstrap_username_,
                              this->bootstrap_password_, this->bootstrap_base_topic_, this->default_enabled_,
                              this->default_publish_profile_, this->default_essential_interval_s_,
                              this->default_standard_interval_s_, this->default_retain_snapshots_, &storage) ||
        !this->save_storage_(storage)) {
      ESP_LOGE(TAG, "MQTT bootstrap configuration could not be prepared");
      return;
    }
    this->apply_storage_(storage, "bootstrap");
  } else if (!this->apply_storage_(storage, "stored")) {
    ESP_LOGE(TAG, "Stored MQTT configuration could not be applied");
  }

  if (!this->load_diagnostic_interval_()) {
    this->diagnostic_interval_s_ = this->default_diagnostic_interval_s_;
    if (!this->save_diagnostic_interval_(this->diagnostic_interval_s_)) {
      ESP_LOGW(TAG, "Diagnostic interval could not be initialized; using default in-memory value");
    }
  }
}

void OpenQuattMqttConfig::dump_config() {
  ESP_LOGCONFIG(TAG, "OpenQuatt MQTT Config");
  ESP_LOGCONFIG(TAG, "  Enabled: %s", YESNO(this->enabled_));
  ESP_LOGCONFIG(TAG, "  Broker: %s:%u", this->broker_.empty() ? "<none>" : this->broker_.c_str(), this->port_);
  ESP_LOGCONFIG(TAG, "  Username: %s", this->username_.empty() ? "<none>" : this->username_.c_str());
  ESP_LOGCONFIG(TAG, "  Base topic: %s", this->base_topic_.empty() ? "<none>" : this->base_topic_.c_str());
  ESP_LOGCONFIG(TAG, "  Publish profile: %s", this->get_publish_profile_name());
  ESP_LOGCONFIG(TAG, "  Essential interval: %" PRIu16 "s", this->essential_interval_s_);
  ESP_LOGCONFIG(TAG, "  Standard interval: %" PRIu16 "s", this->standard_interval_s_);
  ESP_LOGCONFIG(TAG, "  Diagnostic interval: %" PRIu16 "s", this->diagnostic_interval_s_);
  ESP_LOGCONFIG(TAG, "  Retain snapshots: %s", YESNO(this->retain_snapshots_));
  ESP_LOGCONFIG(TAG, "  Runtime source: %s", this->config_source_.empty() ? "<unknown>" : this->config_source_.c_str());
  ESP_LOGCONFIG(TAG, "  HTTP handlers registered: %s", YESNO(this->handlers_registered_));
}

float OpenQuattMqttConfig::get_setup_priority() const { return setup_priority::LATE; }

const char *OpenQuattMqttConfig::get_publish_profile_name() const {
  return publish_profile_to_string_(this->publish_profile_);
}

bool OpenQuattMqttConfig::set_runtime_config(const std::string &broker, uint16_t port, const std::string &username,
                                             const std::string &password, const std::string &base_topic, bool enabled,
                                             PublishProfile publish_profile, uint16_t essential_interval_s,
                                             uint16_t standard_interval_s, uint16_t diagnostic_interval_s,
                                             bool retain_snapshots) {
  Storage storage{};
  if (!this->load_storage_(&storage)) {
    if (!this->build_storage_(this->bootstrap_broker_, this->bootstrap_port_, this->bootstrap_username_,
                              this->bootstrap_password_, this->bootstrap_base_topic_, this->default_enabled_,
                              this->default_publish_profile_, this->default_essential_interval_s_,
                              this->default_standard_interval_s_, this->default_retain_snapshots_, &storage)) {
      return false;
    }
  }

  const std::string next_password = password.empty() ? this->password_ : password;
  if (!this->build_storage_(broker, port, username, next_password, base_topic, enabled, publish_profile,
                            essential_interval_s, standard_interval_s, retain_snapshots, &storage)) {
    return false;
  }
  if (!this->save_storage_(storage)) {
    return false;
  }
  if (!this->save_diagnostic_interval_(diagnostic_interval_s)) {
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

bool OpenQuattMqttConfig::load_diagnostic_interval_() {
  uint16_t diagnostic_interval_s = this->default_diagnostic_interval_s_;
  if (!this->diagnostic_interval_pref_.load(&diagnostic_interval_s)) {
    return false;
  }
  if (diagnostic_interval_s == 0U || diagnostic_interval_s > 3600U) {
    diagnostic_interval_s = this->default_diagnostic_interval_s_;
  }
  this->diagnostic_interval_s_ = diagnostic_interval_s;
  return true;
}

bool OpenQuattMqttConfig::save_diagnostic_interval_(uint16_t diagnostic_interval_s) {
  if (diagnostic_interval_s == 0U || diagnostic_interval_s > 3600U) {
    ESP_LOGE(TAG, "Invalid diagnostic interval");
    return false;
  }
  this->diagnostic_interval_s_ = diagnostic_interval_s;
  if (!this->diagnostic_interval_pref_.save(&this->diagnostic_interval_s_)) {
    ESP_LOGE(TAG, "Failed to save MQTT diagnostic interval to preferences");
    return false;
  }
  if (!global_preferences->sync()) {
    ESP_LOGE(TAG, "Failed to sync MQTT diagnostic interval to preferences");
    return false;
  }
  return true;
}

bool OpenQuattMqttConfig::apply_storage_(const Storage &storage, const char *source) {
  if (this->mqtt_client_ == nullptr) {
    return false;
  }

  const bool enabled = storage.enabled != 0U;
  const bool retain_snapshots = storage.retain_snapshots != 0U;
  const PublishProfile publish_profile = static_cast<PublishProfile>(storage.publish_profile);
  const std::string broker = storage.broker;
  const std::string username = storage.username;
  const std::string password = storage.password;
  const std::string base_topic = storage.base_topic;
  const std::string status_topic = base_topic + "/status";

  this->mqtt_client_->set_broker_address(broker);
  this->mqtt_client_->set_broker_port(storage.port);
  this->mqtt_client_->set_username(username);
  this->mqtt_client_->set_password(password);
  this->mqtt_client_->set_topic_prefix("", App.get_name());
  this->mqtt_client_->disable_discovery();
  this->mqtt_client_->set_birth_message(mqtt::MQTTMessage{status_topic, "online", 0, true});
  this->mqtt_client_->set_last_will(mqtt::MQTTMessage{status_topic, "offline", 0, true});

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
  this->base_topic_ = base_topic;
  this->enabled_ = enabled;
  this->publish_profile_ = publish_profile;
  this->essential_interval_s_ = storage.essential_interval_s;
  this->standard_interval_s_ = storage.standard_interval_s;
  this->retain_snapshots_ = retain_snapshots;
  this->config_source_ = source != nullptr ? source : "";
  return true;
}

bool OpenQuattMqttConfig::build_storage_(const std::string &broker, uint16_t port, const std::string &username,
                                         const std::string &password, const std::string &base_topic, bool enabled,
                                         PublishProfile publish_profile, uint16_t essential_interval_s,
                                         uint16_t standard_interval_s, bool retain_snapshots, Storage *storage) {
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
  if (base_topic.empty() || base_topic.size() > BASE_TOPIC_MAX_LEN) {
    ESP_LOGE(TAG, "Invalid base topic length");
    return false;
  }
  if (port == 0U) {
    ESP_LOGE(TAG, "Invalid MQTT port");
    return false;
  }
  if (essential_interval_s == 0U || standard_interval_s == 0U) {
    ESP_LOGE(TAG, "Invalid MQTT telemetry interval");
    return false;
  }

  std::memset(storage, 0, sizeof(*storage));
  storage->magic = STORAGE_MAGIC;
  storage->version = STORAGE_VERSION;
  storage->port = port;
  storage->essential_interval_s = essential_interval_s;
  storage->standard_interval_s = standard_interval_s;
  storage->enabled = enabled ? 1U : 0U;
  storage->retain_snapshots = retain_snapshots ? 1U : 0U;
  storage->publish_profile = static_cast<uint8_t>(publish_profile);

  if (!broker.empty()) {
    copy_string_field_(storage->broker, BROKER_MAX_LEN, broker);
  }
  if (!username.empty()) {
    copy_string_field_(storage->username, USERNAME_MAX_LEN, username);
  }
  if (!password.empty()) {
    copy_string_field_(storage->password, PASSWORD_MAX_LEN, password);
  }
  copy_string_field_(storage->base_topic, BASE_TOPIC_MAX_LEN, base_topic);
  return true;
}

bool OpenQuattMqttConfig::is_valid_storage_(const Storage &storage) const {
  if (storage.magic != STORAGE_MAGIC || storage.version != STORAGE_VERSION) {
    return false;
  }
  if (storage.enabled > 1U || storage.retain_snapshots > 1U) {
    return false;
  }
  if (storage.publish_profile > static_cast<uint8_t>(PublishProfile::DIAGNOSTIC)) {
    return false;
  }
  if (storage.port == 0U || storage.essential_interval_s == 0U || storage.standard_interval_s == 0U) {
    return false;
  }
  if (strnlen(storage.broker, BROKER_MAX_LEN + 1U) > BROKER_MAX_LEN) {
    return false;
  }
  if (strnlen(storage.username, USERNAME_MAX_LEN + 1U) > USERNAME_MAX_LEN) {
    return false;
  }
  if (strnlen(storage.password, PASSWORD_MAX_LEN + 1U) > PASSWORD_MAX_LEN) {
    return false;
  }
  const size_t base_topic_len = strnlen(storage.base_topic, BASE_TOPIC_MAX_LEN + 1U);
  if (base_topic_len == 0U || base_topic_len > BASE_TOPIC_MAX_LEN) {
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
  std::memset(destination, 0, max_len + 1U);
  std::strncpy(destination, value.c_str(), max_len);
}

const char *OpenQuattMqttConfig::publish_profile_to_string_(PublishProfile profile) {
  switch (profile) {
    case PublishProfile::OFF:
      return "off";
    case PublishProfile::ESSENTIAL:
      return "essential";
    case PublishProfile::DIAGNOSTIC:
      return "diagnostic";
    case PublishProfile::STANDARD:
    default:
      return "standard";
  }
}

bool OpenQuattMqttConfig::parse_publish_profile_(const std::string &value, PublishProfile *profile) {
  return parse_publish_profile_value_(value, profile);
}

}  // namespace openquatt_mqtt_config
}  // namespace esphome
