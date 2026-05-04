#include "OpenQuattLogHistory.h"

#include <algorithm>
#include <cinttypes>
#include <cstdio>
#include <cstring>

#include "esphome/components/logger/logger.h"
#include "esphome/core/log.h"

namespace esphome {
namespace openquatt_log_history {

static const char *const TAG = "openquatt.log_history";

namespace {

class OpenQuattLogHistoryRequestHandler : public AsyncWebHandler {
 public:
  explicit OpenQuattLogHistoryRequestHandler(OpenQuattLogHistory *parent) : parent_(parent) {}

  bool canHandle(AsyncWebServerRequest *request) const override {
    char url_buf[AsyncWebServerRequest::URL_BUF_SIZE];
    request->url_to(url_buf);
    return std::strncmp(url_buf, "/openquatt/logs/recent", std::strlen("/openquatt/logs/recent")) == 0 &&
           request->method() == HTTP_GET;
  }

  void handleRequest(AsyncWebServerRequest *request) override {
    char url_buf[AsyncWebServerRequest::URL_BUF_SIZE];
    request->url_to(url_buf);
    if (std::strncmp(url_buf, "/openquatt/logs/recent", std::strlen("/openquatt/logs/recent")) != 0 ||
        request->method() != HTTP_GET) {
      request->send(404);
      return;
    }

    auto *stream = request->beginResponseStream("application/json; charset=utf-8");
    stream->addHeader("Cache-Control", "no-store");
    this->parent_->write_recent_logs(stream);
    request->send(stream);
  }

 protected:
  OpenQuattLogHistory *parent_;
};

}  // namespace

float OpenQuattLogHistory::get_setup_priority() const { return setup_priority::WIFI; }

bool OpenQuattLogHistory::capture_enabled_() const { return this->enabled_; }

bool OpenQuattLogHistory::time_is_valid_() const { return this->clock_ != nullptr && this->clock_->now().is_valid(); }

uint64_t OpenQuattLogHistory::current_time_ms_() const {
  if (this->time_is_valid_()) {
    const auto now = this->clock_->now();
    return static_cast<uint64_t>(now.timestamp) * 1000ULL;
  }
  return static_cast<uint64_t>(millis());
}

uint64_t OpenQuattLogHistory::current_epoch_offset_ms_() const {
  if (!this->time_is_valid_()) {
    return 0;
  }

  const uint64_t now_ms = this->current_time_ms_();
  const uint64_t mono_ms = static_cast<uint64_t>(millis());
  return now_ms >= mono_ms ? (now_ms - mono_ms) : 0;
}

uint8_t OpenQuattLogHistory::normalize_level_(uint8_t level) {
  if (level > 7) {
    return 7;
  }
  return level;
}

const char *OpenQuattLogHistory::level_to_string_(uint8_t level) {
  switch (normalize_level_(level)) {
    case 1:
      return "E";
    case 2:
      return "W";
    case 3:
      return "I";
    case 4:
      return "C";
    case 5:
      return "D";
    case 6:
      return "V";
    case 7:
      return "VV";
    default:
      return "N";
  }
}

void OpenQuattLogHistory::copy_sanitized_log_line_(const char *message, size_t message_len, char *out, size_t out_size) {
  if (out == nullptr || out_size == 0) {
    return;
  }

  size_t write_pos = 0;
  bool truncated = false;
  for (size_t index = 0; index < message_len; ++index) {
    const char c = message[index];
    if (c == '\r' || c == '\n') {
      continue;
    }

    if (c == '\033' && (index + 1) < message_len && message[index + 1] == '[') {
      index += 2;
      while (index < message_len && message[index] != 'm') {
        ++index;
      }
      continue;
    }

    if ((write_pos + 1) >= out_size) {
      truncated = true;
      break;
    }

    out[write_pos++] = c;
  }

  if (truncated && out_size > 4 && write_pos <= (out_size - 4)) {
    out[write_pos++] = '.';
    out[write_pos++] = '.';
    out[write_pos++] = '.';
  }

  out[write_pos] = '\0';
}

void OpenQuattLogHistory::split_log_fields_(const char *raw, const char **tag_start, size_t *tag_len,
                                            const char **message_start, size_t *message_len) {
  if (tag_start != nullptr) {
    *tag_start = raw;
  }
  if (tag_len != nullptr) {
    *tag_len = 0;
  }
  if (message_start != nullptr) {
    *message_start = raw;
  }
  if (message_len != nullptr) {
    *message_len = raw != nullptr ? std::strlen(raw) : 0;
  }

  if (raw == nullptr || raw[0] == '\0') {
    return;
  }

  const char *first_close = std::strchr(raw, ']');
  if (first_close == nullptr) {
    return;
  }

  const char *tag_open = std::strchr(first_close + 1, '[');
  if (tag_open == nullptr) {
    return;
  }

  const char *tag_close = std::strchr(tag_open + 1, ']');
  if (tag_close == nullptr) {
    return;
  }

  const char *resolved_message_start = std::strstr(tag_close + 1, ": ");
  if (resolved_message_start != nullptr) {
    resolved_message_start += 2;
  } else {
    resolved_message_start = tag_close + 1;
  }

  const char *resolved_tag_end = std::strchr(tag_open + 1, ':');
  if (resolved_tag_end == nullptr || resolved_tag_end > tag_close) {
    resolved_tag_end = tag_close;
  }

  if (tag_start != nullptr) {
    *tag_start = tag_open + 1;
  }
  if (tag_len != nullptr) {
    *tag_len = static_cast<size_t>(resolved_tag_end - (tag_open + 1));
  }
  if (message_start != nullptr) {
    *message_start = resolved_message_start;
  }
  if (message_len != nullptr) {
    *message_len = std::strlen(resolved_message_start);
  }
}

void OpenQuattLogHistory::write_json_string_(AsyncResponseStream *stream, const char *value, size_t len) {
  if (stream == nullptr) {
    return;
  }

  stream->write('"');
  for (size_t index = 0; index < len; ++index) {
    const unsigned char c = static_cast<unsigned char>(value[index]);
    switch (c) {
      case '\\':
        stream->print("\\\\");
        break;
      case '"':
        stream->print("\\\"");
        break;
      case '\b':
        stream->print("\\b");
        break;
      case '\f':
        stream->print("\\f");
        break;
      case '\n':
        stream->print("\\n");
        break;
      case '\r':
        stream->print("\\r");
        break;
      case '\t':
        stream->print("\\t");
        break;
      default:
        if (c < 0x20) {
          char buffer[7];
          std::snprintf(buffer, sizeof(buffer), "\\u%04X", c);
          stream->print(buffer);
        } else {
          stream->write(c);
        }
        break;
    }
  }
  stream->write('"');
}

void OpenQuattLogHistory::write_json_entry_(AsyncResponseStream *stream, const LogEntry &entry) {
  const char *tag_start = "";
  size_t tag_len = 0;
  const char *message_start = entry.raw;
  size_t message_len = entry.raw_len;
  split_log_fields_(entry.raw, &tag_start, &tag_len, &message_start, &message_len);

  stream->write('{');
  stream->print("\"ts\":");
  stream->printf("%" PRIu64, static_cast<uint64_t>(entry.timestamp_ms));
  stream->print(",\"seq\":");
  stream->printf("%" PRIu32, static_cast<uint32_t>(entry.seq));
  stream->print(",\"level\":");
  write_json_string_(stream, level_to_string_(entry.level), std::strlen(level_to_string_(entry.level)));
  stream->print(",\"tag\":");
  write_json_string_(stream, tag_start, tag_len);
  stream->print(",\"message\":");
  write_json_string_(stream, message_start, message_len);
  stream->print(",\"raw\":");
  write_json_string_(stream, entry.raw, entry.raw_len);
  stream->write('}');
}

void OpenQuattLogHistory::push_entry_(const LogEntry &entry) {
  if (ENTRY_CAPACITY == 0) {
    return;
  }

  const size_t insert_index = (this->head_ + this->count_) % ENTRY_CAPACITY;
  this->entries_[insert_index] = entry;
  if (this->count_ < ENTRY_CAPACITY) {
    ++this->count_;
  } else {
    this->head_ = (this->head_ + 1) % ENTRY_CAPACITY;
  }
}

void OpenQuattLogHistory::rebase_history_(uint64_t offset_ms) {
  if (offset_ms == 0) {
    return;
  }

  for (size_t index = 0; index < this->count_; ++index) {
    const size_t entry_index = (this->head_ + index) % ENTRY_CAPACITY;
    this->entries_[entry_index].timestamp_ms += offset_ms;
  }
}

void OpenQuattLogHistory::sync_time_state_() {
  const bool valid = this->time_is_valid_();
  if (valid && !this->time_rebased_) {
    const uint64_t offset_ms = this->current_epoch_offset_ms_();
    if (offset_ms > 0) {
      this->rebase_history_(offset_ms);
    }
    this->time_rebased_ = true;
  }
}

void OpenQuattLogHistory::on_log_(uint8_t level, const char *tag, const char *message, size_t message_len) {
  if (!this->capture_enabled_() || message == nullptr || message_len == 0) {
    return;
  }

  LogEntry entry{};
  entry.seq = this->next_seq_++;
  entry.timestamp_ms = this->current_time_ms_();
  entry.level = normalize_level_(level);
  copy_sanitized_log_line_(message, message_len, entry.raw, sizeof(entry.raw));
  entry.raw_len = static_cast<uint16_t>(std::strlen(entry.raw));

  if (entry.raw_len == 0) {
    return;
  }

  (void) tag;
  this->push_entry_(entry);
}

void OpenQuattLogHistory::set_enabled(bool enabled) { this->enabled_ = enabled; }

void OpenQuattLogHistory::clear_history() {
  this->head_ = 0;
  this->count_ = 0;
  this->next_seq_ = 1;
}

void OpenQuattLogHistory::setup() {
  if (logger::global_logger == nullptr) {
    ESP_LOGE(TAG, "global_logger is unavailable");
    return;
  }
  if (web_server_base::global_web_server_base == nullptr) {
    ESP_LOGE(TAG, "global_web_server_base is unavailable");
    return;
  }

  if (this->enabled_switch_ != nullptr) {
    this->enabled_ = this->enabled_switch_->state;
  }

  logger::global_logger->add_log_callback(this, [](void *self, uint8_t level, const char *tag, const char *message,
                                                   size_t message_len) {
    static_cast<OpenQuattLogHistory *>(self)->on_log_(level, tag, message, message_len);
  });

  web_server_base::global_web_server_base->add_handler(new OpenQuattLogHistoryRequestHandler(this));
  this->sync_time_state_();
}

void OpenQuattLogHistory::loop() { this->sync_time_state_(); }

void OpenQuattLogHistory::dump_config() {
  ESP_LOGCONFIG(TAG, "OpenQuatt log history");
  ESP_LOGCONFIG(TAG, "  Enabled switch: %s", this->enabled_switch_ == nullptr ? "<missing>" : "configured");
  ESP_LOGCONFIG(TAG, "  Clock: %s", this->clock_ == nullptr ? "<missing>" : "configured");
  ESP_LOGCONFIG(TAG, "  Enabled: %s", YESNO(this->enabled_));
  ESP_LOGCONFIG(TAG, "  Entries: %u / %u", static_cast<unsigned>(this->count_), static_cast<unsigned>(ENTRY_CAPACITY));
}

void OpenQuattLogHistory::write_recent_logs(AsyncResponseStream *stream) const {
  if (stream == nullptr) {
    return;
  }

  stream->print("{\"enabled\":");
  stream->print(this->enabled_ ? "true" : "false");
  stream->print(",\"entries\":[");

  for (size_t index = 0; index < this->count_; ++index) {
    if (index > 0) {
      stream->write(',');
    }
    const size_t entry_index = (this->head_ + index) % ENTRY_CAPACITY;
    write_json_entry_(stream, this->entries_[entry_index]);
  }

  stream->print("]}");
}

}  // namespace openquatt_log_history
}  // namespace esphome
