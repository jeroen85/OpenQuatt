#include "OpenQuattEntities.h"

#include <algorithm>
#include <cstring>
#include <string>
#include <vector>

#include "esphome/core/application.h"
#include "esphome/core/log.h"

namespace esphome {
namespace openquatt_entities {

using openquatt_common::PsramBuffer;
using EntityJsonGenerator = json::SerializationBuffer<> (*)(web_server::WebServer *, void *);

static const char *const TAG = "openquatt.entities";

namespace {

bool url_path_matches(const char *url, const char *path) {
  if (url == nullptr || path == nullptr) {
    return false;
  }
  const size_t path_len = std::strlen(path);
  return std::strncmp(url, path, path_len) == 0 && (url[path_len] == '\0' || url[path_len] == '?');
}

class ChunkedJsonWriter {
 public:
  explicit ChunkedJsonWriter(httpd_req_t *req) : req_(req) { this->buffer_.allocate(BUFFER_SIZE); }

  bool write_char(char c) { return this->write_bytes_(&c, 1); }

  bool write_literal(const char *text) {
    if (text == nullptr) {
      return true;
    }
    return this->write_bytes_(text, std::strlen(text));
  }

  bool write_json_string(const char *value, size_t len) {
    if (!this->write_char('"')) {
      return false;
    }
    for (size_t index = 0; index < len; ++index) {
      const unsigned char c = static_cast<unsigned char>(value[index]);
      switch (c) {
        case '\\':
          if (!this->write_literal("\\\\")) {
            return false;
          }
          break;
        case '"':
          if (!this->write_literal("\\\"")) {
            return false;
          }
          break;
        case '\b':
          if (!this->write_literal("\\b")) {
            return false;
          }
          break;
        case '\f':
          if (!this->write_literal("\\f")) {
            return false;
          }
          break;
        case '\n':
          if (!this->write_literal("\\n")) {
            return false;
          }
          break;
        case '\r':
          if (!this->write_literal("\\r")) {
            return false;
          }
          break;
        case '\t':
          if (!this->write_literal("\\t")) {
            return false;
          }
          break;
        default:
          if (c < 0x20) {
            char buffer[7];
            const int written = std::snprintf(buffer, sizeof(buffer), "\\u%04X", c);
            if (written < 0 || !this->write_bytes_(buffer, static_cast<size_t>(written))) {
              return false;
            }
          } else if (!this->write_char(static_cast<char>(c))) {
            return false;
          }
          break;
      }
    }
    return this->write_char('"');
  }

  bool flush() {
    if (this->used_ == 0) {
      return true;
    }
    if (!this->buffer_ ||
        httpd_resp_send_chunk(this->req_, this->buffer_.data(), static_cast<ssize_t>(this->used_)) != ESP_OK) {
      return false;
    }
    this->used_ = 0;
    return true;
  }

 private:
  static constexpr size_t BUFFER_SIZE = 512;

  bool write_bytes_(const char *data, size_t len) {
    if (!this->buffer_) {
      return false;
    }
    if (data == nullptr || len == 0) {
      return true;
    }

    size_t remaining = len;
    const char *cursor = data;
    while (remaining > 0) {
      if (this->used_ == BUFFER_SIZE && !this->flush()) {
        return false;
      }

      const size_t space = BUFFER_SIZE - this->used_;
      const size_t to_copy = std::min(space, remaining);
      std::memcpy(this->buffer_.data() + this->used_, cursor, to_copy);
      this->used_ += to_copy;
      cursor += to_copy;
      remaining -= to_copy;
    }

    return true;
  }

  httpd_req_t *req_;
  PsramBuffer<char> buffer_{};
  size_t used_{0};
};

struct RequestedEntity {
  std::string key;
  std::string domain;
  std::string name;
};

struct EntityPayload {
  void *source{nullptr};
  EntityJsonGenerator state_generator{nullptr};
  EntityJsonGenerator all_generator{nullptr};
};

bool entity_name_matches(EntityBase *entity, const std::string &name) {
  return entity != nullptr && entity->get_name() == name;
}

template<typename EntitiesT>
EntityPayload find_entity_in(const EntitiesT &entities, const std::string &name, EntityJsonGenerator state_generator,
                             EntityJsonGenerator all_generator, bool include_internal) {
  for (auto *entity : entities) {
    if (entity == nullptr || (!include_internal && entity->is_internal()) || !entity_name_matches(entity, name)) {
      continue;
    }
    return EntityPayload{entity, state_generator, all_generator};
  }
  return EntityPayload{};
}

EntityPayload find_entity_payload(const RequestedEntity &entity, bool include_internal) {
#ifdef USE_SENSOR
  if (entity.domain == "sensor") {
    return find_entity_in(App.get_sensors(), entity.name, web_server::WebServer::sensor_state_json_generator,
                          web_server::WebServer::sensor_all_json_generator, include_internal);
  }
#endif
#ifdef USE_BINARY_SENSOR
  if (entity.domain == "binary_sensor") {
    return find_entity_in(App.get_binary_sensors(), entity.name,
                          web_server::WebServer::binary_sensor_state_json_generator,
                          web_server::WebServer::binary_sensor_all_json_generator, include_internal);
  }
#endif
#ifdef USE_TEXT_SENSOR
  if (entity.domain == "text_sensor") {
    return find_entity_in(App.get_text_sensors(), entity.name, web_server::WebServer::text_sensor_state_json_generator,
                          web_server::WebServer::text_sensor_all_json_generator, include_internal);
  }
#endif
#ifdef USE_SWITCH
  if (entity.domain == "switch") {
    return find_entity_in(App.get_switches(), entity.name, web_server::WebServer::switch_state_json_generator,
                          web_server::WebServer::switch_all_json_generator, include_internal);
  }
#endif
#ifdef USE_SELECT
  if (entity.domain == "select") {
    return find_entity_in(App.get_selects(), entity.name, web_server::WebServer::select_state_json_generator,
                          web_server::WebServer::select_all_json_generator, include_internal);
  }
#endif
#ifdef USE_NUMBER
  if (entity.domain == "number") {
    return find_entity_in(App.get_numbers(), entity.name, web_server::WebServer::number_state_json_generator,
                          web_server::WebServer::number_all_json_generator, include_internal);
  }
#endif
#ifdef USE_TEXT
  if (entity.domain == "text") {
    return find_entity_in(App.get_texts(), entity.name, web_server::WebServer::text_state_json_generator,
                          web_server::WebServer::text_all_json_generator, include_internal);
  }
#endif
#ifdef USE_DATETIME_TIME
  if (entity.domain == "time") {
    return find_entity_in(App.get_times(), entity.name, web_server::WebServer::time_state_json_generator,
                          web_server::WebServer::time_all_json_generator, include_internal);
  }
#endif
#ifdef USE_DATETIME_DATETIME
  if (entity.domain == "datetime") {
    return find_entity_in(App.get_datetimes(), entity.name, web_server::WebServer::datetime_state_json_generator,
                          web_server::WebServer::datetime_all_json_generator, include_internal);
  }
#endif
#ifdef USE_DATETIME_DATE
  if (entity.domain == "date") {
    return find_entity_in(App.get_dates(), entity.name, web_server::WebServer::date_state_json_generator,
                          web_server::WebServer::date_all_json_generator, include_internal);
  }
#endif
#ifdef USE_UPDATE
  if (entity.domain == "update") {
    return find_entity_in(App.get_updates(), entity.name, web_server::WebServer::update_state_json_generator,
                          web_server::WebServer::update_all_json_generator, include_internal);
  }
#endif
#ifdef USE_BUTTON
  if (entity.domain == "button") {
    return find_entity_in(App.get_buttons(), entity.name, web_server::WebServer::button_all_json_generator,
                          web_server::WebServer::button_all_json_generator, include_internal);
  }
#endif
  return EntityPayload{};
}

bool parse_entity_line(const std::string &line, RequestedEntity *entity) {
  if (entity == nullptr || line.empty()) {
    return false;
  }

  const size_t first_tab = line.find('\t');
  if (first_tab == std::string::npos) {
    return false;
  }
  const size_t second_tab = line.find('\t', first_tab + 1);
  if (second_tab == std::string::npos) {
    return false;
  }

  entity->key = line.substr(0, first_tab);
  entity->domain = line.substr(first_tab + 1, second_tab - first_tab - 1);
  entity->name = line.substr(second_tab + 1);
  return !entity->key.empty() && !entity->domain.empty() && !entity->name.empty();
}

std::vector<RequestedEntity> parse_entities(const std::string &raw) {
  std::vector<RequestedEntity> entities;
  size_t start = 0;
  while (start < raw.size()) {
    const size_t end = raw.find('\n', start);
    const size_t length = (end == std::string::npos ? raw.size() : end) - start;
    RequestedEntity entity;
    if (parse_entity_line(raw.substr(start, length), &entity)) {
      entities.push_back(std::move(entity));
    }
    if (end == std::string::npos) {
      break;
    }
    start = end + 1;
  }
  return entities;
}

class OpenQuattEntitiesRequestHandler : public AsyncWebHandler {
 public:
  explicit OpenQuattEntitiesRequestHandler(OpenQuattEntities *parent) : parent_(parent) {}

  bool canHandle(AsyncWebServerRequest *request) const override {
    char url_buf[AsyncWebServerRequest::URL_BUF_SIZE];
    request->url_to(url_buf);
    return url_path_matches(url_buf, "/openquatt/entities") && request->method() == HTTP_POST;
  }

  void handleRequest(AsyncWebServerRequest *request) override {
    const std::string entities = request->arg("entities");
    if (entities.empty()) {
      request->send(409, "application/json", R"({"ok":false,"error":"missing_entities"})");
      return;
    }

    httpd_req_t *req = *request;
    httpd_resp_set_status(req, HTTPD_200);
    httpd_resp_set_type(req, "application/json; charset=utf-8");
    httpd_resp_set_hdr(req, "Cache-Control", "no-store");
    this->parent_->write_entities(req, request->arg("detail"), entities);
  }

 protected:
  OpenQuattEntities *parent_;
};

}  // namespace

float OpenQuattEntities::get_setup_priority() const { return setup_priority::WIFI; }

void OpenQuattEntities::setup() {
  if (web_server_base::global_web_server_base == nullptr) {
    ESP_LOGW(TAG, "web_server_base is not available; bulk entity endpoint disabled");
    return;
  }
  web_server_base::global_web_server_base->add_handler(new OpenQuattEntitiesRequestHandler(this));
}

void OpenQuattEntities::dump_config() {
  ESP_LOGCONFIG(TAG, "OpenQuatt bulk entities endpoint:");
  ESP_LOGCONFIG(TAG, "  Web server: %s", this->web_server_ != nullptr ? "configured" : "missing");
}

void OpenQuattEntities::write_entities(httpd_req_t *req, const std::string &detail, const std::string &entities) const {
  ChunkedJsonWriter writer(req);
  const bool detail_all = detail == "all";
  const bool include_internal = this->web_server_ != nullptr && this->web_server_->include_internal_;
  std::vector<std::string> missing;
  std::vector<std::string> errors;

  if (!writer.write_literal(R"({"ok":true,"detail":)") ||
      !writer.write_json_string(detail_all ? "all" : "state", detail_all ? 3 : 5) ||
      !writer.write_literal(R"(,"entities":{)")) {
    httpd_resp_send_chunk(req, nullptr, 0);
    return;
  }

  bool first_entity = true;
  for (const auto &entity : parse_entities(entities)) {
    const EntityPayload payload = find_entity_payload(entity, include_internal);
    if (payload.source == nullptr || payload.all_generator == nullptr) {
      missing.push_back(entity.key);
      continue;
    }

    const EntityJsonGenerator generator = detail_all || payload.state_generator == nullptr ? payload.all_generator
                                                                                           : payload.state_generator;
    auto data = generator(this->web_server_, payload.source);

    if (!first_entity && !writer.write_char(',')) {
      break;
    }
    first_entity = false;
    if (!writer.write_json_string(entity.key.c_str(), entity.key.size()) || !writer.write_char(':') ||
        !writer.write_literal(data.c_str())) {
      break;
    }
  }

  if (!writer.write_literal(R"(},"missing":[)")) {
    httpd_resp_send_chunk(req, nullptr, 0);
    return;
  }
  for (size_t index = 0; index < missing.size(); ++index) {
    if ((index > 0 && !writer.write_char(',')) ||
        !writer.write_json_string(missing[index].c_str(), missing[index].size())) {
      break;
    }
  }

  if (!writer.write_literal(R"(],"errors":[)")) {
    httpd_resp_send_chunk(req, nullptr, 0);
    return;
  }
  for (size_t index = 0; index < errors.size(); ++index) {
    if ((index > 0 && !writer.write_char(',')) ||
        !writer.write_json_string(errors[index].c_str(), errors[index].size())) {
      break;
    }
  }

  writer.write_literal("]}");
  writer.flush();
  httpd_resp_send_chunk(req, nullptr, 0);
}

}  // namespace openquatt_entities
}  // namespace esphome
