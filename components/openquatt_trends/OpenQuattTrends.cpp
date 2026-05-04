#include "OpenQuattTrends.h"

#include <algorithm>
#include <cstdarg>
#include <cmath>
#include <cstdio>
#include <cstring>

#include "esphome/core/log.h"

namespace esphome {
namespace openquatt_trends {

static const char *const TAG = "openquatt.trends";

namespace {

constexpr uint32_t kDefaultWindowHours = 24;

uint32_t parse_window_hours_from_url(const char *url) {
  if (url == nullptr) {
    return kDefaultWindowHours;
  }

  const char *query = std::strchr(url, '?');
  if (query == nullptr || *(query + 1) == '\0') {
    return kDefaultWindowHours;
  }
  query++;

  while (*query != '\0') {
    const char *separator = std::strchr(query, '&');
    const size_t length = separator == nullptr ? std::strlen(query) : static_cast<size_t>(separator - query);
    if (length > 6 && std::strncmp(query, "hours=", 6) == 0) {
      char buffer[12];
      const size_t value_length = std::min<size_t>(length - 6, sizeof(buffer) - 1);
      std::memcpy(buffer, query + 6, value_length);
      buffer[value_length] = '\0';
      const unsigned long parsed = std::strtoul(buffer, nullptr, 10);
      if (parsed > 0) {
        return static_cast<uint32_t>(parsed);
      }
    }

    if (separator == nullptr) {
      break;
    }
    query = separator + 1;
  }

  return kDefaultWindowHours;
}

}  // namespace

class ChunkedTextWriter {
 public:
  explicit ChunkedTextWriter(httpd_req_t *req) : req_(req) {}

  bool printf(const char *format, ...) {
    va_list args;
    va_start(args, format);
    const int written = std::vsnprintf(this->scratch_, sizeof(this->scratch_), format, args);
    va_end(args);
    if (written < 0) {
      return false;
    }
    if (static_cast<size_t>(written) < sizeof(this->scratch_)) {
      return this->write_bytes_(this->scratch_, static_cast<size_t>(written));
    }

    // Trend lines are intentionally compact. If this ever grows, truncate the
    // single line instead of allocating a dynamic buffer on the heap.
    return this->write_bytes_(this->scratch_, sizeof(this->scratch_) - 1);
  }

  bool flush() {
    if (this->used_ == 0) {
      return true;
    }
    if (httpd_resp_send_chunk(this->req_, this->buffer_, static_cast<ssize_t>(this->used_)) != ESP_OK) {
      return false;
    }
    this->used_ = 0;
    return true;
  }

 private:
  static constexpr size_t BUFFER_SIZE = 512;
  static constexpr size_t SCRATCH_SIZE = 160;

  bool write_bytes_(const char *data, size_t len) {
    size_t remaining = len;
    const char *cursor = data;
    while (remaining > 0) {
      if (this->used_ == BUFFER_SIZE && !this->flush()) {
        return false;
      }
      const size_t space = BUFFER_SIZE - this->used_;
      const size_t to_copy = std::min(space, remaining);
      std::memcpy(this->buffer_ + this->used_, cursor, to_copy);
      this->used_ += to_copy;
      cursor += to_copy;
      remaining -= to_copy;
    }
    return true;
  }

  httpd_req_t *req_;
  char buffer_[BUFFER_SIZE]{};
  char scratch_[SCRATCH_SIZE]{};
  size_t used_{0};
};

class OpenQuattTrendsRequestHandler : public AsyncWebHandler {
 public:
  explicit OpenQuattTrendsRequestHandler(OpenQuattTrends *parent) : parent_(parent) {}

  bool canHandle(AsyncWebServerRequest *request) const override {
    char url_buf[AsyncWebServerRequest::URL_BUF_SIZE];
    request->url_to(url_buf);
    return std::strncmp(url_buf, "/trends/history", std::strlen("/trends/history")) == 0 &&
           request->method() == HTTP_GET;
  }

  void handleRequest(AsyncWebServerRequest *request) override {
    char url_buf[AsyncWebServerRequest::URL_BUF_SIZE];
    request->url_to(url_buf);
    if (std::strncmp(url_buf, "/trends/history", std::strlen("/trends/history")) != 0 || request->method() != HTTP_GET) {
      request->send(404);
      return;
    }

    const uint32_t window_hours = parse_window_hours_from_url(url_buf);
    httpd_req_t *req = *request;
    httpd_resp_set_status(req, HTTPD_200);
    httpd_resp_set_type(req, "text/plain; charset=utf-8");
    httpd_resp_set_hdr(req, "Cache-Control", "no-store");
    this->parent_->write_history(req, window_hours);
  }

 protected:
  OpenQuattTrends *parent_;
};

void OpenQuattTrends::setup() {
  if (web_server_base::global_web_server_base == nullptr) {
    ESP_LOGE(TAG, "global_web_server_base is unavailable");
    return;
  }

  this->flash_partition_ = esp_partition_find_first(ESP_PARTITION_TYPE_DATA, ESP_PARTITION_SUBTYPE_ANY, "openquatt_data");
  if (this->flash_partition_ == nullptr) {
    ESP_LOGW(TAG, "Trend flash partition 'openquatt_data' not found");
  }

  if (this->flash_switch_ != nullptr) {
    this->flash_enabled_ = this->flash_switch_->state;
  }

  if (this->capture_switch_ != nullptr && this->capture_switch_->state) {
    this->last_capture_ms_ = (uint32_t) millis();
  }

  this->scan_flash_archive_();
  this->sync_time_state_();

  web_server_base::global_web_server_base->add_handler(new OpenQuattTrendsRequestHandler(this));
}

void OpenQuattTrends::loop() {
  this->sync_time_state_();
  if (!this->flash_enabled_ || this->flash_partition_ == nullptr) {
    return;
  }

  if (this->flash_builder_.active && this->flash_builder_.sample_count > 0) {
    const uint32_t now_ms = (uint32_t) millis();
    if ((uint32_t) (now_ms - this->last_flash_flush_ms_) >= SAMPLE_INTERVAL_MS * 12UL) {
      this->flush_flash_builder_(true);
    }
  }
}

void OpenQuattTrends::on_shutdown() {
  this->force_flush();
}

void OpenQuattTrends::dump_config() {
  ESP_LOGCONFIG(TAG, "OpenQuatt Trends");
  ESP_LOGCONFIG(TAG, "  Capture switch: %s", this->capture_switch_ == nullptr ? "<missing>" : "configured");
  ESP_LOGCONFIG(TAG, "  Flash switch: %s", this->flash_switch_ == nullptr ? "<missing>" : "configured");
  ESP_LOGCONFIG(TAG, "  Clock: %s", this->clock_ == nullptr ? "<missing>" : "configured");
  ESP_LOGCONFIG(TAG, "  Flash partition: %s", this->flash_partition_ == nullptr ? "<missing>" : "configured");
  ESP_LOGCONFIG(TAG, "  RAM samples: %u / %u", static_cast<unsigned>(this->ram_count_), static_cast<unsigned>(RAM_CAPACITY));
  ESP_LOGCONFIG(TAG, "  Flash enabled: %s", YESNO(this->flash_enabled_));
  ESP_LOGCONFIG(TAG, "  Flash archive scanned: %s", YESNO(this->flash_archive_scanned_));
}

float OpenQuattTrends::get_setup_priority() const { return setup_priority::WIFI; }

bool OpenQuattTrends::capture_enabled_() const {
  return this->capture_switch_ != nullptr && this->capture_switch_->state;
}

bool OpenQuattTrends::flash_switch_enabled_() const {
  return this->flash_enabled_;
}

bool OpenQuattTrends::time_is_valid_() const {
  return this->clock_ != nullptr && this->clock_->now().is_valid();
}

uint64_t OpenQuattTrends::current_time_ms_() const {
  if (this->time_is_valid_()) {
    const auto now = this->clock_->now();
    return static_cast<uint64_t>(now.timestamp) * 1000ULL;
  }
  return static_cast<uint64_t>(millis());
}

uint64_t OpenQuattTrends::current_epoch_offset_ms_() const {
  if (!this->time_is_valid_()) {
    return 0;
  }
  const uint64_t now_ms = this->current_time_ms_();
  const uint64_t mono_ms = static_cast<uint64_t>(millis());
  return now_ms >= mono_ms ? (now_ms - mono_ms) : 0;
}

int16_t OpenQuattTrends::encode_temp_(float value) {
  if (!std::isfinite(value)) {
    return INT16_MIN;
  }
  const float scaled = std::roundf(value * 10.0f);
  if (scaled < static_cast<float>(INT16_MIN + 1) || scaled > static_cast<float>(INT16_MAX)) {
    return INT16_MIN;
  }
  return static_cast<int16_t>(scaled);
}

uint16_t OpenQuattTrends::encode_unsigned_(float value) {
  if (!std::isfinite(value) || value < 0.0f) {
    return UINT16_MAX;
  }
  const float rounded = std::roundf(value);
  if (rounded > static_cast<float>(UINT16_MAX - 1)) {
    return UINT16_MAX;
  }
  return static_cast<uint16_t>(rounded);
}

float OpenQuattTrends::decode_temp_(int16_t value) {
  return value == INT16_MIN ? NAN : static_cast<float>(value) / 10.0f;
}

float OpenQuattTrends::decode_unsigned_(uint16_t value) {
  return value == UINT16_MAX ? NAN : static_cast<float>(value);
}

uint32_t OpenQuattTrends::crc32_(const uint8_t *data, size_t len) {
  uint32_t hash = 2166136261u;
  for (size_t i = 0; i < len; ++i) {
    hash ^= data[i];
    hash *= 16777619u;
  }
  return hash;
}

OpenQuattTrends::TrendValues OpenQuattTrends::pack_values_(float outside_c, float supply_c, float room_c,
                                                            float room_setpoint_c, float flow_lph, float input_w,
                                                            float output_w) const {
  return TrendValues{
    encode_temp_(outside_c),
    encode_temp_(supply_c),
    encode_temp_(room_c),
    encode_temp_(room_setpoint_c),
    encode_unsigned_(flow_lph),
    encode_unsigned_(input_w),
    encode_unsigned_(output_w),
  };
}

OpenQuattTrends::TrendSample OpenQuattTrends::make_sample_(uint64_t timestamp_ms, const TrendValues &values) const {
  return TrendSample{timestamp_ms, values};
}

void OpenQuattTrends::rebase_ram_history_(uint64_t offset_ms) {
  if (offset_ms == 0) {
    return;
  }

  for (size_t i = 0; i < this->ram_count_; ++i) {
    const size_t index = (this->ram_head_ + i) % RAM_CAPACITY;
    this->ram_history_[index].timestamp_ms += offset_ms;
  }

  if (this->flash_builder_.active) {
    this->flash_builder_.start_timestamp_ms += offset_ms;
    for (size_t i = 0; i < this->flash_builder_.sample_count; ++i) {
      this->flash_builder_.samples[i].timestamp_ms += offset_ms;
    }
  }
}

void OpenQuattTrends::sync_time_state_() {
  const bool valid = this->time_is_valid_();
  if (valid && !this->time_rebased_) {
    const uint64_t offset_ms = this->current_epoch_offset_ms_();
    if (offset_ms > 0) {
      this->rebase_ram_history_(offset_ms);
    }
    this->time_rebased_ = true;
  }

  if (valid) {
    this->load_archive_if_needed_();
  }
}

void OpenQuattTrends::load_archive_if_needed_() {
  if (!this->flash_enabled_ || this->flash_partition_ == nullptr || !this->time_is_valid_()) {
    return;
  }

  if (!this->flash_archive_scanned_) {
    this->scan_flash_archive_();
  }

  if (this->flash_archive_seeded_) {
    return;
  }

  if (this->merge_flash_history_into_ram_()) {
    this->flash_archive_seeded_ = true;
  }
}

void OpenQuattTrends::push_ram_sample_(const TrendSample &sample) {
  if (RAM_CAPACITY == 0) {
    return;
  }

  const size_t insert_index = (this->ram_head_ + this->ram_count_) % RAM_CAPACITY;
  this->ram_history_[insert_index] = sample;
  if (this->ram_count_ < RAM_CAPACITY) {
    ++this->ram_count_;
  } else {
    this->ram_head_ = (this->ram_head_ + 1) % RAM_CAPACITY;
  }
}

bool OpenQuattTrends::get_ram_sample_at_(size_t ordered_index, TrendSample *sample) const {
  if (sample == nullptr || ordered_index >= this->ram_count_) {
    return false;
  }
  const size_t index = (this->ram_head_ + ordered_index) % RAM_CAPACITY;
  *sample = this->ram_history_[index];
  return true;
}

bool OpenQuattTrends::scan_flash_archive_() {
  this->reset_flash_metadata_();
  this->next_flash_sequence_ = 0;

  if (this->flash_partition_ == nullptr) {
    return false;
  }

  bool any_valid = false;
  uint32_t highest_sequence = 0;
  uint32_t lowest_sequence = 0;

  for (size_t slot = 0; slot < FLASH_SLOT_COUNT; ++slot) {
    FlashBlockInfo info{};
    std::array<TrendSample, FLASH_SAMPLES_PER_BLOCK> samples{};
    if (!this->read_flash_block_(static_cast<uint32_t>(slot), UINT32_MAX, &info, &samples)) {
      continue;
    }

    any_valid = true;
    ++this->flash_valid_block_count_;
    if (this->flash_valid_block_count_ == 1 || info.sequence < lowest_sequence) {
      lowest_sequence = info.sequence;
      this->flash_oldest_timestamp_ms_ = info.start_timestamp_ms;
    }
    if (this->flash_valid_block_count_ == 1 || info.sequence >= highest_sequence) {
      highest_sequence = info.sequence;
      this->flash_latest_timestamp_ms_ = info.end_timestamp_ms;
      this->flash_last_flush_timestamp_ms_ = info.flush_timestamp_ms > 0 ? info.flush_timestamp_ms : info.end_timestamp_ms;
    }
  }

  this->next_flash_sequence_ = any_valid ? (highest_sequence + 1U) : 0U;
  this->flash_archive_scanned_ = true;
  return any_valid;
}

bool OpenQuattTrends::merge_flash_history_into_ram_() {
  if (!this->flash_archive_scanned_) {
    if (!this->scan_flash_archive_()) {
      return false;
    }
  }

  const uint64_t cutoff_ms = this->flash_latest_timestamp_ms_ > RAM_WINDOW_MS
    ? this->flash_latest_timestamp_ms_ - RAM_WINDOW_MS
    : 0;

  this->ram_head_ = 0;
  this->ram_count_ = 0;

  const uint32_t first_sequence = this->next_flash_sequence_ > FLASH_SLOT_COUNT
    ? this->next_flash_sequence_ - FLASH_SLOT_COUNT
    : 0;
  for (uint32_t sequence = first_sequence; sequence < this->next_flash_sequence_; ++sequence) {
    FlashBlockInfo info{};
    std::array<TrendSample, FLASH_SAMPLES_PER_BLOCK> block_samples{};
    if (!this->read_flash_block_(sequence % FLASH_SLOT_COUNT, sequence, &info, &block_samples)) {
      continue;
    }
    for (size_t index = 0; index < info.sample_count; ++index) {
      const TrendSample &sample = block_samples[index];
      if (sample.timestamp_ms >= cutoff_ms) {
        this->push_ram_sample_(sample);
      }
    }
  }

  return this->ram_count_ > 0;
}

bool OpenQuattTrends::clear_flash_archive_() {
  if (this->flash_partition_ == nullptr) {
    this->reset_flash_metadata_();
    this->next_flash_sequence_ = 0;
    this->flash_archive_scanned_ = true;
    return true;
  }

  const esp_err_t erase_result = esp_partition_erase_range(this->flash_partition_, 0, FLASH_TOTAL_BYTES);
  if (erase_result != ESP_OK) {
    ESP_LOGW(TAG, "Could not erase trend flash archive: %s", esp_err_to_name(erase_result));
    return false;
  }

  this->reset_flash_metadata_();
  this->next_flash_sequence_ = 0;
  this->flash_archive_scanned_ = true;
  this->flash_archive_seeded_ = false;
  this->reset_flash_builder_();
  return true;
}

void OpenQuattTrends::reset_flash_builder_() {
  this->flash_builder_ = {};
}

bool OpenQuattTrends::append_sample_to_flash_(const TrendSample &sample) {
  if (!this->flash_enabled_ || this->flash_partition_ == nullptr || !this->time_is_valid_()) {
    return false;
  }

  if (!this->flash_builder_.active) {
    this->flash_builder_.active = true;
    this->flash_builder_.start_timestamp_ms = sample.timestamp_ms;
    this->flash_builder_.sample_count = 0;
    this->flash_builder_.sequence = this->next_flash_sequence_;
  }

  if (this->flash_builder_.sample_count >= FLASH_SAMPLES_PER_BLOCK) {
    if (!this->flush_flash_builder_(true)) {
      return false;
    }
    this->flash_builder_.active = true;
    this->flash_builder_.start_timestamp_ms = sample.timestamp_ms;
    this->flash_builder_.sample_count = 0;
    this->flash_builder_.sequence = this->next_flash_sequence_;
  }

  this->flash_builder_.samples[this->flash_builder_.sample_count++] = sample;
  this->flash_dirty_ = true;

  if (this->flash_builder_.sample_count >= FLASH_SAMPLES_PER_BLOCK) {
    return this->flush_flash_builder_(true);
  }
  return true;
}

bool OpenQuattTrends::write_flash_block_(const FlashBlockBuilder &builder) {
  if (this->flash_partition_ == nullptr || builder.sample_count == 0) {
    return false;
  }

  const uint32_t slot_index = builder.sequence % FLASH_SLOT_COUNT;
  const uint32_t slot_offset = slot_index * FLASH_SLOT_SIZE;
  if ((slot_offset % FLASH_SECTOR_SIZE) == 0) {
    const esp_err_t erase_result = esp_partition_erase_range(this->flash_partition_, slot_offset, FLASH_SECTOR_SIZE);
    if (erase_result != ESP_OK) {
      ESP_LOGW(TAG, "Could not erase trend flash sector %u: %s", static_cast<unsigned>(slot_index / FLASH_SLOTS_PER_SECTOR),
               esp_err_to_name(erase_result));
      return false;
    }
  }

  std::array<uint8_t, FLASH_SLOT_SIZE> slot_buffer{};
  TrendBlockHeader header{};
  header.magic = TAG_MAGIC;
  header.version = TAG_VERSION;
  header.sample_count = builder.sample_count;
  header.sequence = builder.sequence;
  header.start_timestamp_ms = builder.start_timestamp_ms;
  header.payload_bytes = static_cast<uint32_t>(builder.sample_count * sizeof(TrendSample));
  header.crc32 = crc32_(reinterpret_cast<const uint8_t *>(builder.samples.data()), header.payload_bytes);
  header.reserved = static_cast<uint32_t>(this->current_time_ms_() / 1000ULL);
  std::memcpy(slot_buffer.data(), &header, sizeof(header));
  std::memcpy(slot_buffer.data() + sizeof(header), builder.samples.data(), header.payload_bytes);

  const esp_err_t write_result = esp_partition_write(this->flash_partition_, slot_offset, slot_buffer.data(), slot_buffer.size());
  if (write_result != ESP_OK) {
    ESP_LOGW(TAG, "Could not write trend flash slot %u: %s", static_cast<unsigned>(slot_index), esp_err_to_name(write_result));
    return false;
  }

  FlashBlockInfo info{};
  info.sequence = builder.sequence;
  info.start_timestamp_ms = builder.start_timestamp_ms;
  const size_t last_sample_index = builder.sample_count > 0 ? static_cast<size_t>(builder.sample_count - 1) : 0;
  info.end_timestamp_ms = builder.samples[last_sample_index].timestamp_ms;
  info.flush_timestamp_ms = static_cast<uint64_t>(header.reserved) * 1000ULL;
  info.sample_count = builder.sample_count;
  info.slot_index = slot_index;

  this->flash_latest_timestamp_ms_ = builder.samples[last_sample_index].timestamp_ms;
  this->flash_last_flush_timestamp_ms_ = info.flush_timestamp_ms;
  if (this->flash_valid_block_count_ < FLASH_SLOT_COUNT) {
    ++this->flash_valid_block_count_;
  }
  if (this->flash_valid_block_count_ <= 1 || this->flash_oldest_timestamp_ms_ == 0) {
    this->flash_oldest_timestamp_ms_ = builder.start_timestamp_ms;
  } else if (this->flash_valid_block_count_ >= FLASH_SLOT_COUNT) {
    const uint32_t oldest_sequence = builder.sequence + 1U - static_cast<uint32_t>(FLASH_SLOT_COUNT);
    FlashBlockInfo oldest{};
    std::array<TrendSample, FLASH_SAMPLES_PER_BLOCK> oldest_samples{};
    if (this->read_flash_block_(oldest_sequence % FLASH_SLOT_COUNT, oldest_sequence, &oldest, &oldest_samples)) {
      this->flash_oldest_timestamp_ms_ = oldest.start_timestamp_ms;
    }
  }
  this->next_flash_sequence_ = builder.sequence + 1U;
  this->flash_dirty_ = false;
  this->last_flash_flush_ms_ = static_cast<uint32_t>(millis());
  return true;
}

bool OpenQuattTrends::flush_flash_builder_(bool force) {
  if (!this->flash_enabled_ || this->flash_partition_ == nullptr || !this->time_is_valid_()) {
    return false;
  }

  if (!this->flash_builder_.active || this->flash_builder_.sample_count == 0) {
    return true;
  }

  if (!force && this->flash_builder_.sample_count < FLASH_SAMPLES_PER_BLOCK) {
    return false;
  }

  const bool ok = this->write_flash_block_(this->flash_builder_);
  if (ok) {
    this->reset_flash_builder_();
  }
  return ok;
}

bool OpenQuattTrends::read_flash_block_(uint32_t slot_index, uint32_t expected_sequence, FlashBlockInfo *info,
                                        std::array<TrendSample, FLASH_SAMPLES_PER_BLOCK> *samples) const {
  if (info == nullptr || samples == nullptr || this->flash_partition_ == nullptr || slot_index >= FLASH_SLOT_COUNT) {
    return false;
  }

  TrendBlockHeader header{};
  const uint32_t slot_offset = slot_index * FLASH_SLOT_SIZE;
  const esp_err_t read_result = esp_partition_read(this->flash_partition_, slot_offset, &header, sizeof(header));
  if (read_result != ESP_OK || header.magic != TAG_MAGIC || header.version != TAG_VERSION ||
      header.sample_count == 0 || header.sample_count > FLASH_SAMPLES_PER_BLOCK ||
      header.payload_bytes != static_cast<uint32_t>(header.sample_count * sizeof(TrendSample))) {
    return false;
  }
  if (expected_sequence != UINT32_MAX && header.sequence != expected_sequence) {
    return false;
  }

  samples->fill(TrendSample{});
  const esp_err_t payload_result = esp_partition_read(
    this->flash_partition_,
    slot_offset + sizeof(header),
    samples->data(),
    header.payload_bytes
  );
  if (payload_result != ESP_OK) {
    return false;
  }

  if (crc32_(reinterpret_cast<const uint8_t *>(samples->data()), header.payload_bytes) != header.crc32) {
    return false;
  }

  info->sequence = header.sequence;
  info->start_timestamp_ms = header.start_timestamp_ms;
  const size_t last_sample_index = header.sample_count > 0 ? static_cast<size_t>(header.sample_count - 1) : 0;
  info->end_timestamp_ms = (*samples)[last_sample_index].timestamp_ms;
  info->flush_timestamp_ms = header.reserved > 0 ? static_cast<uint64_t>(header.reserved) * 1000ULL : 0ULL;
  info->sample_count = header.sample_count;
  info->slot_index = slot_index;
  return true;
}

void OpenQuattTrends::capture_sample(float outside_c, float supply_c, float room_c, float room_setpoint_c, float flow_lph,
                                     float input_w, float output_w) {
  if (!this->capture_enabled_()) {
    return;
  }

  const uint32_t now_monotonic_ms = static_cast<uint32_t>(millis());
  if (this->last_capture_ms_ != 0 &&
      static_cast<uint32_t>(now_monotonic_ms - static_cast<uint32_t>(this->last_capture_ms_)) < SAMPLE_INTERVAL_MS) {
    return;
  }

  const uint64_t now_ms = this->current_time_ms_();
  const TrendValues values = this->pack_values_(outside_c, supply_c, room_c, room_setpoint_c, flow_lph, input_w, output_w);
  const bool any_valid = values.outside_c_x10 != INT16_MIN || values.supply_c_x10 != INT16_MIN ||
                         values.room_c_x10 != INT16_MIN || values.room_setpoint_c_x10 != INT16_MIN ||
                         values.flow_lph != UINT16_MAX || values.input_w != UINT16_MAX || values.output_w != UINT16_MAX;
  if (!any_valid) {
    return;
  }

  const TrendSample sample = this->make_sample_(now_ms, values);
  this->push_ram_sample_(sample);
  this->last_capture_ms_ = now_monotonic_ms;

  if (this->flash_enabled_) {
    this->append_sample_to_flash_(sample);
  }
}

void OpenQuattTrends::set_flash_enabled(bool enabled) {
  if (this->flash_enabled_ == enabled) {
    if (enabled) {
      this->load_archive_if_needed_();
    }
    return;
  }

  this->flash_enabled_ = enabled;
  if (!enabled) {
    this->clear_flash_archive_();
    return;
  }

  this->load_archive_if_needed_();
}

bool OpenQuattTrends::force_flush() {
  if (!this->flash_enabled_) {
    return false;
  }
  return this->flush_flash_builder_(true);
}

void OpenQuattTrends::clear_history() {
  this->ram_head_ = 0;
  this->ram_count_ = 0;
  this->last_capture_ms_ = 0;
  this->flash_dirty_ = false;
  this->flash_archive_seeded_ = false;
  this->reset_flash_builder_();
  this->clear_flash_archive_();
}

uint64_t OpenQuattTrends::get_window_cutoff_ms_(uint32_t window_hours) const {
  const uint64_t window_ms = static_cast<uint64_t>(std::max<uint32_t>(1, window_hours)) * 60ULL * 60ULL * 1000ULL;
  const uint64_t now_ms = this->current_time_ms_();
  return now_ms > window_ms ? (now_ms - window_ms) : 0ULL;
}

uint32_t OpenQuattTrends::get_window_stride_(uint32_t window_hours) const {
  if (window_hours <= 24) {
    return 1;
  }
  if (window_hours <= 72) {
    return 3;
  }
  if (window_hours <= 168) {
    return 6;
  }
  if (window_hours <= 336) {
    return 12;
  }
  return 24;
}

uint64_t OpenQuattTrends::get_latest_archive_timestamp_ms_() const {
  if (this->flash_latest_timestamp_ms_ > 0) {
    return this->flash_latest_timestamp_ms_;
  }
  TrendSample sample{};
  if (this->ram_count_ == 0 || !this->get_ram_sample_at_(this->ram_count_ - 1, &sample)) {
    return 0;
  }
  return sample.timestamp_ms;
}

void OpenQuattTrends::update_flash_metadata_(uint64_t latest_timestamp_ms) {
  this->flash_latest_timestamp_ms_ = latest_timestamp_ms;
}

void OpenQuattTrends::reset_flash_metadata_() {
  this->flash_latest_timestamp_ms_ = 0;
  this->flash_oldest_timestamp_ms_ = 0;
  this->flash_last_flush_timestamp_ms_ = 0;
  this->flash_valid_block_count_ = 0;
}

uint64_t OpenQuattTrends::get_flash_oldest_timestamp_ms_() const {
  return this->flash_oldest_timestamp_ms_;
}

uint64_t OpenQuattTrends::get_flash_newest_timestamp_ms_() const {
  return this->flash_latest_timestamp_ms_;
}

uint64_t OpenQuattTrends::get_flash_last_flush_timestamp_ms_() const {
  return this->flash_last_flush_timestamp_ms_;
}

std::string OpenQuattTrends::format_flash_absolute_time_(uint64_t timestamp_ms) const {
  if (timestamp_ms == 0) {
    return "Nog niet";
  }

  if (!this->time_is_valid_()) {
    return "Wacht op tijdsync";
  }

  auto formatted = ESPTime::from_epoch_local(static_cast<time_t>(timestamp_ms / 1000ULL)).strftime("%d-%m %H:%M");
  return formatted.empty() || formatted == "ERROR" ? "—" : formatted;
}

std::string OpenQuattTrends::format_flash_relative_age_(uint64_t timestamp_ms) const {
  if (timestamp_ms == 0) {
    return "Nog leeg";
  }

  const uint64_t now_ms = this->current_time_ms_();
  if (now_ms <= timestamp_ms) {
    return "Zojuist";
  }

  const uint64_t age_minutes = (now_ms - timestamp_ms) / (60ULL * 1000ULL);
  if (age_minutes < 1) {
    return "Zojuist";
  }
  if (age_minutes < 60) {
    char buffer[32];
    std::snprintf(buffer, sizeof(buffer), "%llu min geleden", static_cast<unsigned long long>(age_minutes));
    return buffer;
  }

  const uint64_t age_hours = age_minutes / 60ULL;
  if (age_hours < 24) {
    char buffer[32];
    std::snprintf(buffer, sizeof(buffer), "%llu u geleden", static_cast<unsigned long long>(age_hours));
    return buffer;
  }

  const uint64_t age_days = age_hours / 24ULL;
  char buffer[32];
  std::snprintf(buffer, sizeof(buffer), "%llu d geleden", static_cast<unsigned long long>(age_days));
  return buffer;
}

std::string OpenQuattTrends::format_flash_available_span_(uint64_t oldest_timestamp_ms, uint64_t newest_timestamp_ms) const {
  if (oldest_timestamp_ms == 0 || newest_timestamp_ms == 0 || newest_timestamp_ms <= oldest_timestamp_ms) {
    return "Nog leeg";
  }

  const float span_days = static_cast<float>(newest_timestamp_ms - oldest_timestamp_ms) / static_cast<float>(24ULL * 60ULL * 60ULL * 1000ULL);
  if (span_days >= 1.0f) {
    char buffer[24];
    std::snprintf(buffer, sizeof(buffer), "%.1f dagen", span_days);
    std::string value(buffer);
    std::replace(value.begin(), value.end(), '.', ',');
    return value;
  }

  const uint64_t span_hours = (newest_timestamp_ms - oldest_timestamp_ms) / (60ULL * 60ULL * 1000ULL);
  if (span_hours >= 1) {
    char buffer[24];
    std::snprintf(buffer, sizeof(buffer), "%llu uur", static_cast<unsigned long long>(span_hours));
    return buffer;
  }

  const uint64_t span_minutes = (newest_timestamp_ms - oldest_timestamp_ms) / (60ULL * 1000ULL);
  char buffer[24];
  std::snprintf(buffer, sizeof(buffer), "%llu min", static_cast<unsigned long long>(span_minutes));
  return buffer;
}

bool OpenQuattTrends::write_sample_line_(ChunkedTextWriter *writer, const TrendSample &sample) const {
  if (writer == nullptr) {
    return false;
  }
  const float outside = decode_temp_(sample.values.outside_c_x10);
  const float supply = decode_temp_(sample.values.supply_c_x10);
  const float room = decode_temp_(sample.values.room_c_x10);
  const float setpoint = decode_temp_(sample.values.room_setpoint_c_x10);
  const float flow = decode_unsigned_(sample.values.flow_lph);
  const float input = decode_unsigned_(sample.values.input_w);
  const float output = decode_unsigned_(sample.values.output_w);
  return writer->printf(
    "%llu|%.2f|%.2f|%.2f|%.2f|%.0f|%.0f|%.0f\n",
    static_cast<unsigned long long>(sample.timestamp_ms),
    outside,
    supply,
    room,
    setpoint,
    flow,
    input,
    output
  );
}

void OpenQuattTrends::write_samples_for_history_(ChunkedTextWriter *writer, uint32_t window_hours) {
  const uint64_t cutoff_ms = this->get_window_cutoff_ms_(window_hours);
  const uint32_t stride = this->get_window_stride_(window_hours);
  uint64_t emitted_flash_latest = 0;
  bool ram_has_window_samples = false;
  for (size_t index = 0; index < this->ram_count_; ++index) {
    TrendSample sample{};
    if (this->get_ram_sample_at_(index, &sample) && sample.timestamp_ms >= cutoff_ms) {
      ram_has_window_samples = true;
      break;
    }
  }

  uint64_t window_index = 0;
  bool has_last_sample = false;
  bool last_sample_emitted = false;
  TrendSample last_sample{};

  auto emit_sample = [&](const TrendSample &sample, bool count_only) {
    if (sample.timestamp_ms < cutoff_ms) {
      return false;
    }

    last_sample = sample;
    has_last_sample = true;
    const bool should_emit = (window_index % stride) == 0;
    ++window_index;
    if (should_emit && !count_only) {
      this->write_sample_line_(writer, sample);
      last_sample_emitted = true;
    }
    return should_emit;
  };

  const bool long_window = window_hours > (RAM_WINDOW_MS / (60UL * 60UL * 1000UL));
  const bool should_read_flash_archive = long_window || !ram_has_window_samples;
  if (should_read_flash_archive && this->flash_enabled_ && this->flash_archive_scanned_) {
    const uint32_t first_sequence = this->next_flash_sequence_ > FLASH_SLOT_COUNT
      ? this->next_flash_sequence_ - FLASH_SLOT_COUNT
      : 0;
    for (uint32_t sequence = first_sequence; sequence < this->next_flash_sequence_; ++sequence) {
      FlashBlockInfo info{};
      std::array<TrendSample, FLASH_SAMPLES_PER_BLOCK> block_samples{};
      if (!this->read_flash_block_(sequence % FLASH_SLOT_COUNT, sequence, &info, &block_samples)) {
        continue;
      }
      if (info.end_timestamp_ms < cutoff_ms) {
        continue;
      }
      for (size_t index = 0; index < info.sample_count; ++index) {
        const TrendSample &sample = block_samples[index];
        emit_sample(sample, false);
        if (sample.timestamp_ms >= cutoff_ms && sample.timestamp_ms > emitted_flash_latest) {
          emitted_flash_latest = sample.timestamp_ms;
        }
      }
    }
  }

  const uint64_t ram_cutoff = emitted_flash_latest > 0 ? std::max(cutoff_ms, emitted_flash_latest + 1ULL) : cutoff_ms;
  for (size_t index = 0; index < this->ram_count_; ++index) {
    TrendSample sample{};
    if (!this->get_ram_sample_at_(index, &sample)) {
      continue;
    }
    if (sample.timestamp_ms < ram_cutoff) {
      continue;
    }
    emit_sample(sample, false);
  }

  if (has_last_sample && !last_sample_emitted) {
    this->write_sample_line_(writer, last_sample);
  }
}

void OpenQuattTrends::write_history(httpd_req_t *req, uint32_t window_hours) {
  if (req == nullptr) {
    return;
  }

  const uint64_t now_ms = this->current_time_ms_();
  ChunkedTextWriter writer(req);
  if (!writer.printf("@now|%llu\n", static_cast<unsigned long long>(now_ms)) || !writer.flush()) {
    ESP_LOGW(TAG, "Failed to start trend history response");
    return;
  }
  this->write_samples_for_history_(&writer, window_hours);
  if (!writer.flush() || httpd_resp_send_chunk(req, nullptr, 0) != ESP_OK) {
    ESP_LOGW(TAG, "Failed to terminate trend history response");
  }
}

std::string OpenQuattTrends::get_flash_available_label() const {
  if (this->flash_partition_ == nullptr) {
    return "Niet beschikbaar";
  }

  const uint64_t oldest_timestamp_ms = this->get_flash_oldest_timestamp_ms_();
  const uint64_t newest_timestamp_ms = this->get_flash_newest_timestamp_ms_();
  return this->format_flash_available_span_(oldest_timestamp_ms, newest_timestamp_ms);
}

std::string OpenQuattTrends::get_flash_oldest_point_label() const {
  if (this->flash_partition_ == nullptr) {
    return "—";
  }
  return this->format_flash_absolute_time_(this->get_flash_oldest_timestamp_ms_());
}

std::string OpenQuattTrends::get_flash_newest_point_label() const {
  if (this->flash_partition_ == nullptr) {
    return "—";
  }
  return this->format_flash_relative_age_(this->get_flash_newest_timestamp_ms_());
}

std::string OpenQuattTrends::get_flash_last_flush_label() const {
  if (this->flash_partition_ == nullptr) {
    return "—";
  }
  return this->format_flash_absolute_time_(this->get_flash_last_flush_timestamp_ms_());
}

float OpenQuattTrends::get_flash_storage_kib() const {
  return static_cast<float>(static_cast<uint32_t>(this->flash_valid_block_count_) * FLASH_SLOT_SIZE) / 1024.0f;
}

uint32_t OpenQuattTrends::get_flash_write_count() const {
  return this->next_flash_sequence_;
}

}  // namespace openquatt_trends
}  // namespace esphome
