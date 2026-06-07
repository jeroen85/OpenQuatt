#include "OpenQuattDebugRecorder.h"

#include <algorithm>
#include <cstdlib>
#include <cstring>

#include <esp_heap_caps.h>

#include "esphome/core/log.h"

namespace esphome {
namespace openquatt_debug_recorder {

static const char *const TAG = "openquatt.debug_recorder";

namespace {

bool url_path_matches(const char *url, const char *path) {
  if (url == nullptr || path == nullptr) {
    return false;
  }
  const size_t path_len = std::strlen(path);
  return std::strncmp(url, path, path_len) == 0 && (url[path_len] == '\0' || url[path_len] == '?');
}

uint32_t parse_uint_arg(AsyncWebServerRequest *request, const char *name, uint32_t fallback) {
  if (request == nullptr || name == nullptr) {
    return fallback;
  }
  const std::string raw = request->arg(name);
  if (raw.empty()) {
    return fallback;
  }
  char *end = nullptr;
  const unsigned long value = std::strtoul(raw.c_str(), &end, 10);
  if (end == raw.c_str()) {
    return fallback;
  }
  return static_cast<uint32_t>(value);
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

  bool write_uint32(uint32_t value) {
    char buffer[16];
    const int written = std::snprintf(buffer, sizeof(buffer), "%u", static_cast<unsigned>(value));
    return written > 0 && this->write_bytes_(buffer, static_cast<size_t>(written));
  }

  bool write_uint64(uint64_t value) {
    char buffer[24];
    const int written = std::snprintf(buffer, sizeof(buffer), "%llu", static_cast<unsigned long long>(value));
    return written > 0 && this->write_bytes_(buffer, static_cast<size_t>(written));
  }

  bool write_bool(bool value) { return this->write_literal(value ? "true" : "false"); }

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

class OpenQuattDebugRecorderRequestHandler : public AsyncWebHandler {
 public:
  explicit OpenQuattDebugRecorderRequestHandler(OpenQuattDebugRecorder *parent) : parent_(parent) {}

  bool canHandle(AsyncWebServerRequest *request) const override {
    char url_buf[AsyncWebServerRequest::URL_BUF_SIZE];
    request->url_to(url_buf);
    if (url_path_matches(url_buf, "/openquatt/debug-recording/status")) {
      return request->method() == HTTP_GET;
    }
    if (url_path_matches(url_buf, "/openquatt/debug-recording/start") ||
        url_path_matches(url_buf, "/openquatt/debug-recording/stop")) {
      return request->method() == HTTP_POST;
    }
    if (url_path_matches(url_buf, "/openquatt/debug-recording/download")) {
      return request->method() == HTTP_GET;
    }
    return false;
  }

  void handleRequest(AsyncWebServerRequest *request) override {
    char url_buf[AsyncWebServerRequest::URL_BUF_SIZE];
    request->url_to(url_buf);

    if (url_path_matches(url_buf, "/openquatt/debug-recording/start")) {
      uint32_t duration_s = parse_uint_arg(request, "duration_s", 0);
      if (duration_s == 0) {
        duration_s = parse_uint_arg(request, "minutes", 15) * 60U;
      }
      this->parent_->start(duration_s);
      this->send_status_(request);
      return;
    }

    if (url_path_matches(url_buf, "/openquatt/debug-recording/stop")) {
      this->parent_->stop();
      this->send_status_(request);
      return;
    }

    httpd_req_t *req = *request;
    httpd_resp_set_status(req, HTTPD_200);
    httpd_resp_set_type(req, "application/json; charset=utf-8");
    httpd_resp_set_hdr(req, "Cache-Control", "no-store");

    if (url_path_matches(url_buf, "/openquatt/debug-recording/download")) {
      this->parent_->write_recording(req);
    } else {
      this->parent_->write_status(req);
    }
  }

 protected:
  void send_status_(AsyncWebServerRequest *request) const {
    httpd_req_t *req = *request;
    httpd_resp_set_status(req, HTTPD_200);
    httpd_resp_set_type(req, "application/json; charset=utf-8");
    httpd_resp_set_hdr(req, "Cache-Control", "no-store");
    this->parent_->write_status(req);
  }

  OpenQuattDebugRecorder *parent_;
};

}  // namespace

float OpenQuattDebugRecorder::get_setup_priority() const { return setup_priority::WIFI; }

bool OpenQuattDebugRecorder::time_is_valid_() const {
  return this->clock_ != nullptr && this->clock_->now().is_valid();
}

uint64_t OpenQuattDebugRecorder::current_time_ms_() const {
  if (this->time_is_valid_()) {
    const auto now = this->clock_->now();
    return static_cast<uint64_t>(now.timestamp) * 1000ULL;
  }
  return static_cast<uint64_t>(millis());
}

uint64_t OpenQuattDebugRecorder::started_time_ms_() const {
  if (this->started_ms_ == 0) {
    return 0;
  }
  const uint32_t now_ms = millis();
  const uint64_t now_time_ms = this->current_time_ms_();
  return now_time_ms >= static_cast<uint64_t>(now_ms - this->started_ms_)
             ? now_time_ms - static_cast<uint64_t>(now_ms - this->started_ms_)
             : 0;
}

uint64_t OpenQuattDebugRecorder::ended_time_ms_() const {
  if (this->started_ms_ == 0) {
    return 0;
  }
  if (this->active_) {
    return this->current_time_ms_();
  }
  const uint64_t start_time_ms = this->started_time_ms_();
  return start_time_ms + static_cast<uint64_t>(this->stopped_ms_ - this->started_ms_);
}

uint32_t OpenQuattDebugRecorder::elapsed_s_() const {
  if (this->started_ms_ == 0) {
    return 0;
  }
  const uint32_t end_ms = this->active_ ? millis() : this->stopped_ms_;
  return (end_ms - this->started_ms_) / 1000U;
}

uint32_t OpenQuattDebugRecorder::remaining_s_() const {
  if (!this->active_) {
    return 0;
  }
  const uint32_t elapsed = this->elapsed_s_();
  return elapsed >= this->duration_s_ ? 0 : this->duration_s_ - elapsed;
}

uint32_t OpenQuattDebugRecorder::sanitize_duration_s_(uint32_t duration_s) const {
  if (duration_s == 0) {
    duration_s = DEFAULT_DURATION_S;
  }
  return std::max(MIN_DURATION_S, std::min(MAX_DURATION_S, duration_s));
}

void OpenQuattDebugRecorder::clear_() {
  this->count_ = 0;
  this->last_sample_ms_ = 0;
}

const OpenQuattDebugRecorder::DebugSample *OpenQuattDebugRecorder::sample_at_(size_t index) const {
  if (!this->samples_ || index >= this->count_) {
    return nullptr;
  }
  return &this->samples_[index];
}

void OpenQuattDebugRecorder::capture_sample_() {
  if (!this->active_ || !this->samples_) {
    return;
  }

  const uint32_t now_ms = millis();
  if (this->count_ >= SAMPLE_CAPACITY || this->elapsed_s_() >= this->duration_s_) {
    this->stop();
    return;
  }

  DebugSample sample;
  sample.offset_s = (now_ms - this->started_ms_) / 1000U;
  sample.uptime_ms = now_ms;
  sample.free_heap = heap_caps_get_free_size(MALLOC_CAP_8BIT);
  sample.free_psram = heap_caps_get_free_size(MALLOC_CAP_SPIRAM);
  sample.min_free_heap = heap_caps_get_minimum_free_size(MALLOC_CAP_8BIT);

  this->samples_[this->count_++] = sample;
  this->last_sample_ms_ = now_ms;
}

void OpenQuattDebugRecorder::start(uint32_t duration_s) {
  if (!this->available_()) {
    ESP_LOGW(TAG, "Debug recording unavailable; PSRAM buffer missing");
    return;
  }

  this->active_ = true;
  this->duration_s_ = this->sanitize_duration_s_(duration_s);
  this->started_ms_ = millis();
  this->stopped_ms_ = 0;
  this->clear_();
  this->capture_sample_();
}

void OpenQuattDebugRecorder::stop() {
  if (!this->active_) {
    return;
  }
  this->active_ = false;
  this->stopped_ms_ = millis();
}

void OpenQuattDebugRecorder::setup() {
  if (web_server_base::global_web_server_base == nullptr) {
    ESP_LOGE(TAG, "global_web_server_base is unavailable");
    return;
  }

  if (!this->samples_.allocate(SAMPLE_CAPACITY)) {
    ESP_LOGE(TAG, "Failed to allocate debug recording buffer in PSRAM");
  } else if (!this->samples_.is_external()) {
    this->samples_.release();
    ESP_LOGE(TAG, "Debug recording requires PSRAM; internal RAM fallback rejected");
  }

  web_server_base::global_web_server_base->add_handler(new OpenQuattDebugRecorderRequestHandler(this));
}

void OpenQuattDebugRecorder::loop() {
  if (!this->active_) {
    return;
  }

  const uint32_t now_ms = millis();
  if (now_ms - this->started_ms_ >= this->duration_s_ * 1000U) {
    this->stop();
    return;
  }
  if (this->last_sample_ms_ == 0 || now_ms - this->last_sample_ms_ >= SAMPLE_INTERVAL_MS) {
    this->capture_sample_();
  }
}

void OpenQuattDebugRecorder::dump_config() {
  ESP_LOGCONFIG(TAG, "OpenQuatt debug recorder");
  ESP_LOGCONFIG(TAG, "  Clock: %s", this->clock_ == nullptr ? "<missing>" : "configured");
  ESP_LOGCONFIG(TAG, "  Samples: %u / %u", static_cast<unsigned>(this->count_), static_cast<unsigned>(SAMPLE_CAPACITY));
  ESP_LOGCONFIG(TAG, "  Buffer: %s", this->available_() ? "PSRAM" : "unavailable");
}

void OpenQuattDebugRecorder::write_status(httpd_req_t *req) const {
  ChunkedJsonWriter writer(req);
  const uint32_t elapsed = this->elapsed_s_();
  const uint32_t remaining = this->remaining_s_();
  const uint32_t estimated_size = 520U + static_cast<uint32_t>(this->count_) * 48U;

  if (!writer.write_literal(R"({"ok":true,"available":)") || !writer.write_bool(this->available_()) ||
      !writer.write_literal(R"(,"active":)") || !writer.write_bool(this->active_) ||
      !writer.write_literal(R"(,"storage":")") || !writer.write_literal(this->available_() ? "psram" : "unavailable") ||
      !writer.write_literal(R"(","interval_s":)") || !writer.write_uint32(SAMPLE_INTERVAL_MS / 1000U) ||
      !writer.write_literal(R"(,"duration_s":)") ||
      !writer.write_uint32(this->duration_s_) || !writer.write_literal(R"(,"elapsed_s":)") ||
      !writer.write_uint32(elapsed) || !writer.write_literal(R"(,"remaining_s":)") || !writer.write_uint32(remaining) ||
      !writer.write_literal(R"(,"sample_count":)") || !writer.write_uint32(static_cast<uint32_t>(this->count_)) ||
      !writer.write_literal(R"(,"sample_capacity":)") || !writer.write_uint32(static_cast<uint32_t>(SAMPLE_CAPACITY)) ||
      !writer.write_literal(R"(,"estimated_size":)") || !writer.write_uint32(estimated_size) ||
      !writer.write_literal(R"(,"buffer":")")) {
    httpd_resp_send_chunk(req, nullptr, 0);
    return;
  }

  if (!writer.write_literal(this->available_() ? "psram" : "unavailable") || !writer.write_literal(R"("})") ||
      !writer.flush()) {
    httpd_resp_send_chunk(req, nullptr, 0);
    return;
  }

  httpd_resp_send_chunk(req, nullptr, 0);
}

void OpenQuattDebugRecorder::write_recording(httpd_req_t *req) const {
  ChunkedJsonWriter writer(req);
  const uint64_t started_time_ms = this->started_time_ms_();
  const uint64_t ended_time_ms = this->ended_time_ms_();

  if (!writer.write_literal(R"({"format":"openquatt-debug-device-v1","schema_version":1)") ||
      !writer.write_literal(R"(,"kind":"openquatt_debug_recording","encoding":"device-psram-delta-json-v1")") ||
      !writer.write_literal(R"(,"exported_at_ms":)") || !writer.write_uint64(this->current_time_ms_()) ||
      !writer.write_literal(R"(,"source":{"device":"OpenQuatt","storage":")") ||
      !writer.write_literal(this->available_() ? "psram" : "unavailable") || !writer.write_literal(R"("})") ||
      !writer.write_literal(R"(,"recording":{"started_at_ms":)") || !writer.write_uint64(started_time_ms) ||
      !writer.write_literal(R"(,"ended_at_ms":)") || !writer.write_uint64(ended_time_ms) ||
      !writer.write_literal(R"(,"active":)") || !writer.write_bool(this->active_) ||
      !writer.write_literal(R"(,"duration_s":)") || !writer.write_uint32(this->elapsed_s_()) ||
      !writer.write_literal(R"(,"interval_s":)") || !writer.write_uint32(SAMPLE_INTERVAL_MS / 1000U) ||
      !writer.write_literal(R"(,"sample_count":)") || !writer.write_uint32(static_cast<uint32_t>(this->count_)) ||
      !writer.write_literal(R"(,"column_count":4,"storage":")") ||
      !writer.write_literal(this->available_() ? "psram" : "unavailable") || !writer.write_literal(R"("})") ||
      !writer.write_literal(R"(,"columns":["uptimeMs","freeHeap","freePsram","minFreeHeap"])") ||
      !writer.write_literal(R"(,"units":[[0,"ms"],[1,"B"],[2,"B"],[3,"B"]])")) {
    httpd_resp_send_chunk(req, nullptr, 0);
    return;
  }

  const DebugSample *initial = this->sample_at_(0);
  if (!writer.write_literal(R"(,"initial":[)")) {
    httpd_resp_send_chunk(req, nullptr, 0);
    return;
  }
  if (initial != nullptr) {
    if (!writer.write_literal("[0,") || !writer.write_uint32(initial->uptime_ms) || !writer.write_literal("],[1,") ||
        !writer.write_uint32(initial->free_heap) || !writer.write_literal("],[2,") ||
        !writer.write_uint32(initial->free_psram) || !writer.write_literal("],[3,") ||
        !writer.write_uint32(initial->min_free_heap) || !writer.write_char(']')) {
      httpd_resp_send_chunk(req, nullptr, 0);
      return;
    }
  }
  if (!writer.write_literal(R"(],"samples":[)")) {
    httpd_resp_send_chunk(req, nullptr, 0);
    return;
  }

  for (size_t index = 0; index < this->count_; ++index) {
    const DebugSample *sample = this->sample_at_(index);
    if (sample == nullptr) {
      break;
    }
    const DebugSample *previous = index > 0 ? this->sample_at_(index - 1) : initial;
    if (index > 0 && !writer.write_char(',')) {
      break;
    }
    if (!writer.write_char('[') || !writer.write_uint32(sample->offset_s) || !writer.write_literal(",[")) {
      break;
    }

    bool first_delta = true;
    auto write_delta = [&](uint8_t column, uint32_t value, uint32_t previous_value) -> bool {
      if (value == previous_value) {
        return true;
      }
      if (!first_delta && !writer.write_char(',')) {
        return false;
      }
      first_delta = false;
      return writer.write_char('[') && writer.write_uint32(column) && writer.write_char(',') && writer.write_uint32(value) &&
             writer.write_char(']');
    };

    if (previous != nullptr &&
        (!write_delta(0, sample->uptime_ms, previous->uptime_ms) ||
         !write_delta(1, sample->free_heap, previous->free_heap) ||
         !write_delta(2, sample->free_psram, previous->free_psram) ||
         !write_delta(3, sample->min_free_heap, previous->min_free_heap))) {
      break;
    }
    if (!writer.write_literal("]]")) {
      break;
    }
  }

  if (!writer.write_literal(R"(],"events":[]})") || !writer.flush()) {
    httpd_resp_send_chunk(req, nullptr, 0);
    return;
  }

  httpd_resp_send_chunk(req, nullptr, 0);
}

}  // namespace openquatt_debug_recorder
}  // namespace esphome
