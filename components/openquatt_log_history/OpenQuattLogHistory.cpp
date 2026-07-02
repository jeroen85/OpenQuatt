#include "OpenQuattLogHistory.h"

#include <algorithm>
#include <cinttypes>
#include <cstdio>
#include <cstring>

#include "esphome/core/defines.h"
#ifdef USE_ESP32_CRASH_HANDLER
#include <esp_attr.h>

#include "esphome/components/esp32/crash_handler.h"
#endif
#include "esphome/components/logger/logger.h"
#include "esphome/core/log.h"
#include "esphome/core/time.h"

namespace esphome {
namespace openquatt_log_history {

static const char *const TAG = "openquatt.log_history";

namespace {

static constexpr uint32_t MIN_VALID_EPOCH_S = 1704067200UL;  // 2024-01-01 00:00:00 UTC
static constexpr uint32_t MAX_VALID_EPOCH_S = 2082758400UL;  // 2036-01-01 00:00:00 UTC

static bool epoch_is_sane(uint32_t epoch_s) { return epoch_s >= MIN_VALID_EPOCH_S && epoch_s < MAX_VALID_EPOCH_S; }

#ifdef USE_ESP32_CRASH_HANDLER
static constexpr uint32_t CRASH_TIME_BREADCRUMB_MAGIC = 0x4F514348UL;  // OQCH
static constexpr uint16_t CRASH_TIME_BREADCRUMB_VERSION = 1;
static constexpr uint32_t CRASH_TIME_BREADCRUMB_UPDATE_INTERVAL_MS = 15000UL;
static constexpr uint32_t CRASH_REPORT_WAIT_TIMEOUT_MS = 120000UL;

struct CrashTimeBreadcrumb {
  uint32_t magic;
  uint16_t version;
  uint16_t reserved;
  uint32_t epoch_s;
  uint32_t uptime_s;
  uint32_t sequence;
  uint32_t crc;
};

RTC_NOINIT_ATTR static CrashTimeBreadcrumb crash_time_breadcrumb;

static uint32_t fnv1a32(const void *data, size_t len) {
  const auto *bytes = static_cast<const uint8_t *>(data);
  uint32_t hash = 2166136261UL;
  for (size_t index = 0; index < len; ++index) {
    hash ^= bytes[index];
    hash *= 16777619UL;
  }
  return hash;
}

static uint32_t crash_time_breadcrumb_crc(const CrashTimeBreadcrumb &breadcrumb) {
  CrashTimeBreadcrumb copy = breadcrumb;
  copy.crc = 0;
  return fnv1a32(&copy, sizeof(copy));
}

static bool crash_time_breadcrumb_is_valid(const CrashTimeBreadcrumb &breadcrumb) {
  return breadcrumb.magic == CRASH_TIME_BREADCRUMB_MAGIC &&
         breadcrumb.version == CRASH_TIME_BREADCRUMB_VERSION && epoch_is_sane(breadcrumb.epoch_s) &&
         breadcrumb.crc == crash_time_breadcrumb_crc(breadcrumb);
}
#endif

static bool url_path_matches(const char *url, const char *path) {
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

  bool write_uint64(uint64_t value) {
    char buffer[32];
    const int len = std::snprintf(buffer, sizeof(buffer), "%" PRIu64, value);
    return len >= 0 && this->write_bytes_(buffer, static_cast<size_t>(len));
  }

  bool write_uint32(uint32_t value) {
    char buffer[24];
    const int len = std::snprintf(buffer, sizeof(buffer), "%" PRIu32, value);
    return len >= 0 && this->write_bytes_(buffer, static_cast<size_t>(len));
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
          } else {
            if (!this->write_char(static_cast<char>(c))) {
              return false;
            }
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

class OpenQuattLogHistoryRequestHandler : public AsyncWebHandler {
 public:
  explicit OpenQuattLogHistoryRequestHandler(OpenQuattLogHistory *parent) : parent_(parent) {}

  bool canHandle(AsyncWebServerRequest *request) const override {
    char url_buf[AsyncWebServerRequest::URL_BUF_SIZE];
    request->url_to(url_buf);
    return url_path_matches(url_buf, "/openquatt/logs/recent") && request->method() == HTTP_GET;
  }

  void handleRequest(AsyncWebServerRequest *request) override {
    httpd_req_t *req = *request;
    httpd_resp_set_status(req, HTTPD_200);
    httpd_resp_set_type(req, "application/json; charset=utf-8");
    httpd_resp_set_hdr(req, "Cache-Control", "no-store");
    this->parent_->write_recent_logs(req);
  }

 protected:
  OpenQuattLogHistory *parent_;
};

}  // namespace

float OpenQuattLogHistory::get_setup_priority() const { return setup_priority::WIFI; }

bool OpenQuattLogHistory::capture_enabled_() const { return this->enabled_ && this->entries_; }

bool OpenQuattLogHistory::time_is_valid_() const {
  if (this->clock_ == nullptr) {
    return false;
  }
  const auto now = this->clock_->now();
  return now.is_valid() && epoch_is_sane(static_cast<uint32_t>(now.timestamp));
}

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

void OpenQuattLogHistory::push_entry_(const LogEntry &entry) {
  if (!this->entries_) {
    return;
  }
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

void OpenQuattLogHistory::rebase_history_(uint32_t offset_s) {
  if (offset_s == 0) {
    return;
  }

  for (size_t index = 0; index < this->count_; ++index) {
    const size_t entry_index = (this->head_ + index) % ENTRY_CAPACITY;
    this->entries_[entry_index].timestamp_s += offset_s;
  }
}

void OpenQuattLogHistory::sync_time_state_() {
  const bool valid = this->time_is_valid_();
  if (valid && !this->time_rebased_) {
    const uint64_t offset_ms = this->current_epoch_offset_ms_();
    if (offset_ms > 0) {
      this->rebase_history_(static_cast<uint32_t>(offset_ms / 1000ULL));
    }
    this->time_rebased_ = true;
  }
#ifdef USE_ESP32_CRASH_HANDLER
  if (valid) {
    this->update_crash_time_breadcrumb_();
  }
#endif
}

#ifdef USE_ESP32_CRASH_HANDLER
void OpenQuattLogHistory::load_crash_time_breadcrumb_() {
  this->pending_crash_breadcrumb_valid_ = false;
  this->pending_crash_epoch_s_ = 0;
  this->pending_crash_uptime_s_ = 0;

  if (!crash_time_breadcrumb_is_valid(crash_time_breadcrumb)) {
    return;
  }

  this->pending_crash_breadcrumb_valid_ = true;
  this->pending_crash_epoch_s_ = crash_time_breadcrumb.epoch_s;
  this->pending_crash_uptime_s_ = crash_time_breadcrumb.uptime_s;
}

void OpenQuattLogHistory::update_crash_time_breadcrumb_() {
  if (!this->time_is_valid_()) {
    return;
  }

  const uint32_t now_ms = millis();
  if (this->last_crash_breadcrumb_update_ms_ != 0 &&
      (now_ms - this->last_crash_breadcrumb_update_ms_) < CRASH_TIME_BREADCRUMB_UPDATE_INTERVAL_MS) {
    return;
  }

  const auto now = this->clock_->now();
  CrashTimeBreadcrumb next{};
  next.magic = CRASH_TIME_BREADCRUMB_MAGIC;
  next.version = CRASH_TIME_BREADCRUMB_VERSION;
  next.reserved = 0;
  next.epoch_s = static_cast<uint32_t>(now.timestamp);
  next.uptime_s = now_ms / 1000UL;
  next.sequence = crash_time_breadcrumb_is_valid(crash_time_breadcrumb) ? (crash_time_breadcrumb.sequence + 1) : 1;
  next.crc = crash_time_breadcrumb_crc(next);
  crash_time_breadcrumb = next;
  this->last_crash_breadcrumb_update_ms_ = now_ms;
}

void OpenQuattLogHistory::format_epoch_(uint32_t epoch_s, char *out, size_t out_size) {
  if (out == nullptr || out_size == 0) {
    return;
  }

  const auto time = ESPTime::from_epoch_local(static_cast<time_t>(epoch_s));
  if (!time.is_valid()) {
    std::snprintf(out, out_size, "epoch %" PRIu32, epoch_s);
    return;
  }

  std::snprintf(out, out_size, "%04u-%02u-%02u %02u:%02u:%02u", static_cast<unsigned>(time.year),
                static_cast<unsigned>(time.month), static_cast<unsigned>(time.day_of_month),
                static_cast<unsigned>(time.hour), static_cast<unsigned>(time.minute),
                static_cast<unsigned>(time.second));
}

void OpenQuattLogHistory::maybe_log_pending_crash_report_() {
  if (!this->pending_crash_report_) {
    return;
  }

  const bool time_ready = this->time_is_valid_();
  const uint32_t now_ms = millis();
  if (!time_ready && (now_ms - this->pending_crash_report_since_ms_) < CRASH_REPORT_WAIT_TIMEOUT_MS) {
    return;
  }

  if (this->pending_crash_breadcrumb_valid_) {
    char timestamp[32];
    format_epoch_(this->pending_crash_epoch_s_, timestamp, sizeof(timestamp));
    ESP_LOGE(TAG, "Previous boot crashed; last known controller time before reset: %s (uptime %" PRIu32 "s)",
             timestamp, this->pending_crash_uptime_s_);
  } else {
    ESP_LOGE(TAG, "Previous boot crashed; no retained pre-crash timestamp was available");
  }

  if (!time_ready) {
    ESP_LOGW(TAG, "Replaying crash report after waiting without a sane controller clock");
  }
  ESP_LOGE(TAG, "ESPHome crash report follows; log timestamps below are replay timestamps after reboot");
  esp32::crash_handler_log();
  esp32::crash_handler_clear();
  this->pending_crash_report_ = false;
  this->pending_crash_breadcrumb_valid_ = false;
}
#endif

void OpenQuattLogHistory::on_log_(uint8_t level, const char *tag, const char *message, size_t message_len) {
  if (!this->capture_enabled_() || message == nullptr || message_len == 0) {
    return;
  }

  LogEntry entry{};
  // The API uses this compact sequence only for relative ordering; wrapping at
  // uint16_t is intentional.
  entry.seq = static_cast<uint16_t>(this->next_seq_++);
  entry.timestamp_s = static_cast<uint32_t>(this->current_time_ms_() / 1000ULL);
  entry.level = normalize_level_(level);
  copy_sanitized_log_line_(message, message_len, entry.raw, sizeof(entry.raw));
  entry.raw_len = static_cast<uint8_t>(std::strlen(entry.raw));

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

  if (!this->entries_.allocate(ENTRY_CAPACITY)) {
    ESP_LOGE(TAG, "Failed to allocate log history buffer in PSRAM");
  }

  logger::global_logger->add_log_callback(this, [](void *self, uint8_t level, const char *tag, const char *message,
                                                   size_t message_len) {
    static_cast<OpenQuattLogHistory *>(self)->on_log_(level, tag, message, message_len);
  });

#ifdef USE_ESP32_CRASH_HANDLER
  this->load_crash_time_breadcrumb_();
  this->pending_crash_report_ = esp32::crash_handler_has_data();
  this->pending_crash_report_since_ms_ = millis();
#endif

  web_server_base::global_web_server_base->add_handler(new OpenQuattLogHistoryRequestHandler(this));
  this->sync_time_state_();
#ifdef USE_ESP32_CRASH_HANDLER
  this->maybe_log_pending_crash_report_();
#endif
}

void OpenQuattLogHistory::loop() {
  this->sync_time_state_();
#ifdef USE_ESP32_CRASH_HANDLER
  this->maybe_log_pending_crash_report_();
#endif
}

void OpenQuattLogHistory::dump_config() {
  ESP_LOGCONFIG(TAG, "OpenQuatt log history");
  ESP_LOGCONFIG(TAG, "  Enabled switch: %s", this->enabled_switch_ == nullptr ? "<missing>" : "configured");
  ESP_LOGCONFIG(TAG, "  Clock: %s", this->clock_ == nullptr ? "<missing>" : "configured");
  ESP_LOGCONFIG(TAG, "  Enabled: %s", YESNO(this->enabled_));
  ESP_LOGCONFIG(TAG, "  Entries: %u / %u", static_cast<unsigned>(this->count_), static_cast<unsigned>(ENTRY_CAPACITY));
  ESP_LOGCONFIG(TAG, "  History buffer: %s", !this->entries_ ? "missing" : (this->entries_.is_external() ? "PSRAM" : "internal"));
#ifdef USE_ESP32_CRASH_HANDLER
  ESP_LOGCONFIG(TAG, "  Pending crash report: %s", YESNO(this->pending_crash_report_));
#endif
}

void OpenQuattLogHistory::write_recent_logs(httpd_req_t *req) const {
  if (req == nullptr) {
    return;
  }

  ChunkedJsonWriter writer(req);
  if (!writer.write_literal("{\"enabled\":") || !writer.write_literal(this->enabled_ ? "true" : "false") ||
      !writer.write_literal(",\"entries\":[")) {
    ESP_LOGW(TAG, "Failed to start recent log response");
    return;
  }

  auto write_json_entry = [&](const LogEntry &entry) -> bool {
    const char *tag_start = "";
    size_t tag_len = 0;
    const char *message_start = entry.raw;
    size_t message_len = entry.raw_len;
    split_log_fields_(entry.raw, &tag_start, &tag_len, &message_start, &message_len);

    const char *level = level_to_string_(entry.level);

    if (!writer.write_char('{')) {
      return false;
    }
    if (!writer.write_literal("\"ts\":") || !writer.write_uint64(static_cast<uint64_t>(entry.timestamp_s) * 1000ULL) ||
        !writer.write_literal(",\"seq\":") || !writer.write_uint32(static_cast<uint32_t>(entry.seq)) ||
        !writer.write_literal(",\"level\":") || !writer.write_json_string(level, std::strlen(level)) ||
        !writer.write_literal(",\"tag\":") || !writer.write_json_string(tag_start, tag_len) ||
        !writer.write_literal(",\"message\":") || !writer.write_json_string(message_start, message_len) ||
        !writer.write_literal(",\"raw\":") || !writer.write_json_string(entry.raw, entry.raw_len) ||
        !writer.write_char('}')) {
      return false;
    }

    return true;
  };

  for (size_t index = 0; index < this->count_; ++index) {
    if (index > 0) {
      if (!writer.write_char(',')) {
        ESP_LOGW(TAG, "Failed to stream recent log separator");
        return;
      }
    }
    const size_t entry_index = (this->head_ + index) % ENTRY_CAPACITY;
    if (!write_json_entry(this->entries_[entry_index])) {
      ESP_LOGW(TAG, "Failed to stream recent log entry");
      return;
    }
  }

  if (!writer.write_literal("]}")) {
    ESP_LOGW(TAG, "Failed to finish recent log response");
    return;
  }

  if (!writer.flush()) {
    ESP_LOGW(TAG, "Failed to flush recent log response");
    return;
  }

  if (httpd_resp_send_chunk(req, nullptr, 0) != ESP_OK) {
    ESP_LOGW(TAG, "Failed to terminate recent log response");
  }
}

}  // namespace openquatt_log_history
}  // namespace esphome
