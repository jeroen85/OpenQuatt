#include "OpenQuattTrends.h"

#include <algorithm>
#include <cmath>
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

    auto *stream = request->beginResponseStream("text/plain; charset=utf-8");
    stream->addHeader("Cache-Control", "no-store");
    const uint32_t window_hours = parse_window_hours_from_url(url_buf);
    this->parent_->write_history(stream, window_hours);
    request->send(stream);
  }

 protected:
  OpenQuattTrends *parent_;
};

void OpenQuattTrends::setup() {
  if (web_server_base::global_web_server_base == nullptr) {
    ESP_LOGE(TAG, "global_web_server_base is unavailable");
    return;
  }

  this->flash_partition_ = esp_partition_find_first(ESP_PARTITION_TYPE_DATA, ESP_PARTITION_SUBTYPE_ANY, "trenddata");
  if (this->flash_partition_ == nullptr) {
    ESP_LOGW(TAG, "Trend flash partition 'trenddata' not found");
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

  this->flash_latest_timestamp_ms_ += offset_ms;
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

std::vector<OpenQuattTrends::TrendSample> OpenQuattTrends::collect_ram_samples_() const {
  std::vector<TrendSample> samples;
  samples.reserve(this->ram_count_);
  for (size_t i = 0; i < this->ram_count_; ++i) {
    const size_t index = (this->ram_head_ + i) % RAM_CAPACITY;
    samples.push_back(this->ram_history_[index]);
  }
  return samples;
}

void OpenQuattTrends::replace_ram_samples_(const std::vector<TrendSample> &samples) {
  this->ram_head_ = 0;
  this->ram_count_ = 0;
  if (samples.empty()) {
    return;
  }

  const size_t start_index = samples.size() > RAM_CAPACITY ? samples.size() - RAM_CAPACITY : 0;
  for (size_t i = start_index; i < samples.size(); ++i) {
    this->push_ram_sample_(samples[i]);
  }
}

bool OpenQuattTrends::scan_flash_archive_() {
  this->flash_blocks_.clear();
  this->flash_latest_timestamp_ms_ = 0;
  this->next_flash_sequence_ = 0;

  if (this->flash_partition_ == nullptr) {
    return false;
  }

  bool any_valid = false;
  uint32_t highest_sequence = 0;

  for (size_t slot = 0; slot < FLASH_SLOT_COUNT; ++slot) {
    TrendBlockHeader header{};
    const esp_err_t read_result = esp_partition_read(
      this->flash_partition_,
      static_cast<uint32_t>(slot * FLASH_SLOT_SIZE),
      &header,
      sizeof(header)
    );
    if (read_result != ESP_OK) {
      continue;
    }

    if (header.magic != TAG_MAGIC || header.version != TAG_VERSION || header.sample_count == 0 ||
        header.sample_count > FLASH_SAMPLES_PER_BLOCK) {
      continue;
    }

    const uint32_t payload_bytes = static_cast<uint32_t>(header.sample_count * sizeof(TrendSample));
    if (header.payload_bytes != payload_bytes) {
      continue;
    }

    std::array<TrendSample, FLASH_SAMPLES_PER_BLOCK> samples{};
    const esp_err_t payload_result = esp_partition_read(
      this->flash_partition_,
      static_cast<uint32_t>(slot * FLASH_SLOT_SIZE + sizeof(header)),
      samples.data(),
      payload_bytes
    );
    if (payload_result != ESP_OK) {
      continue;
    }

    if (crc32_(reinterpret_cast<const uint8_t *>(samples.data()), payload_bytes) != header.crc32) {
      continue;
    }

    FlashBlockInfo info{};
    info.sequence = header.sequence;
    info.start_timestamp_ms = header.start_timestamp_ms;
    info.sample_count = header.sample_count;
    info.slot_index = static_cast<uint32_t>(slot);
    this->flash_blocks_.push_back(info);

    any_valid = true;
    if (header.sequence >= highest_sequence) {
      highest_sequence = header.sequence;
      const size_t last_sample_index = header.sample_count > 0 ? static_cast<size_t>(header.sample_count - 1) : 0;
      this->flash_latest_timestamp_ms_ = samples[last_sample_index].timestamp_ms;
    }
  }

  std::stable_sort(this->flash_blocks_.begin(), this->flash_blocks_.end(), [](const FlashBlockInfo &a, const FlashBlockInfo &b) {
    if (a.sequence != b.sequence) {
      return a.sequence < b.sequence;
    }
    return a.slot_index < b.slot_index;
  });

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

  std::vector<TrendSample> combined = this->collect_ram_samples_();
  std::vector<TrendSample> flash_samples;
  const uint64_t cutoff_ms = this->flash_latest_timestamp_ms_ > RAM_WINDOW_MS
    ? this->flash_latest_timestamp_ms_ - RAM_WINDOW_MS
    : 0;

  for (const auto &info : this->flash_blocks_) {
    std::vector<TrendSample> block_samples;
    if (!this->read_flash_block_(info, &block_samples)) {
      continue;
    }
    for (const auto &sample : block_samples) {
      if (sample.timestamp_ms >= cutoff_ms) {
        flash_samples.push_back(sample);
      }
    }
  }

  combined.insert(combined.end(), flash_samples.begin(), flash_samples.end());
  std::stable_sort(combined.begin(), combined.end(), [](const TrendSample &a, const TrendSample &b) {
    return a.timestamp_ms < b.timestamp_ms;
  });

  std::vector<TrendSample> merged;
  merged.reserve(combined.size());
  for (const auto &sample : combined) {
    if (!merged.empty() && merged.back().timestamp_ms == sample.timestamp_ms) {
      merged.back() = sample;
    } else {
      merged.push_back(sample);
    }
  }

  this->replace_ram_samples_(merged);
  return !merged.empty();
}

bool OpenQuattTrends::clear_flash_archive_() {
  if (this->flash_partition_ == nullptr) {
    this->flash_blocks_.clear();
    this->flash_latest_timestamp_ms_ = 0;
    this->next_flash_sequence_ = 0;
    this->flash_archive_scanned_ = true;
    return true;
  }

  const esp_err_t erase_result = esp_partition_erase_range(this->flash_partition_, 0, FLASH_TOTAL_BYTES);
  if (erase_result != ESP_OK) {
    ESP_LOGW(TAG, "Could not erase trend flash archive: %s", esp_err_to_name(erase_result));
    return false;
  }

  this->flash_blocks_.clear();
  this->flash_latest_timestamp_ms_ = 0;
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
  info.sample_count = builder.sample_count;
  info.slot_index = slot_index;

  this->flash_blocks_.erase(
    std::remove_if(this->flash_blocks_.begin(), this->flash_blocks_.end(), [slot_index](const FlashBlockInfo &existing) {
      return existing.slot_index == slot_index;
    }),
    this->flash_blocks_.end()
  );
  this->flash_blocks_.push_back(info);
  std::stable_sort(this->flash_blocks_.begin(), this->flash_blocks_.end(), [](const FlashBlockInfo &a, const FlashBlockInfo &b) {
    if (a.sequence != b.sequence) {
      return a.sequence < b.sequence;
    }
    return a.slot_index < b.slot_index;
  });

  const size_t last_sample_index = builder.sample_count > 0 ? static_cast<size_t>(builder.sample_count - 1) : 0;
  this->flash_latest_timestamp_ms_ = builder.samples[last_sample_index].timestamp_ms;
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

bool OpenQuattTrends::read_flash_block_(const FlashBlockInfo &info, std::vector<TrendSample> *samples) const {
  if (samples == nullptr || this->flash_partition_ == nullptr) {
    return false;
  }

  TrendBlockHeader header{};
  const uint32_t slot_offset = info.slot_index * FLASH_SLOT_SIZE;
  const esp_err_t read_result = esp_partition_read(this->flash_partition_, slot_offset, &header, sizeof(header));
  if (read_result != ESP_OK || header.magic != TAG_MAGIC || header.version != TAG_VERSION ||
      header.sample_count == 0 || header.sample_count > FLASH_SAMPLES_PER_BLOCK ||
      header.payload_bytes != static_cast<uint32_t>(header.sample_count * sizeof(TrendSample))) {
    return false;
  }

  std::vector<TrendSample> block_samples(header.sample_count);
  const esp_err_t payload_result = esp_partition_read(
    this->flash_partition_,
    slot_offset + sizeof(header),
    block_samples.data(),
    header.payload_bytes
  );
  if (payload_result != ESP_OK) {
    return false;
  }

  if (crc32_(reinterpret_cast<const uint8_t *>(block_samples.data()), header.payload_bytes) != header.crc32) {
    return false;
  }

  samples->swap(block_samples);
  return true;
}

void OpenQuattTrends::capture_sample(float outside_c, float supply_c, float room_c, float room_setpoint_c, float flow_lph,
                                     float input_w, float output_w) {
  if (!this->capture_enabled_()) {
    return;
  }

  const uint64_t now_ms = this->current_time_ms_();
  if (this->last_capture_ms_ != 0 && static_cast<uint64_t>(now_ms - this->last_capture_ms_) < SAMPLE_INTERVAL_MS) {
    return;
  }

  const TrendValues values = this->pack_values_(outside_c, supply_c, room_c, room_setpoint_c, flow_lph, input_w, output_w);
  const bool any_valid = values.outside_c_x10 != INT16_MIN || values.supply_c_x10 != INT16_MIN ||
                         values.room_c_x10 != INT16_MIN || values.room_setpoint_c_x10 != INT16_MIN ||
                         values.flow_lph != UINT16_MAX || values.input_w != UINT16_MAX || values.output_w != UINT16_MAX;
  if (!any_valid) {
    return;
  }

  const TrendSample sample = this->make_sample_(now_ms, values);
  this->push_ram_sample_(sample);
  this->last_capture_ms_ = static_cast<uint32_t>(millis());

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
  return this->collect_ram_samples_().empty() ? 0 : this->collect_ram_samples_().back().timestamp_ms;
}

void OpenQuattTrends::update_flash_metadata_(uint64_t latest_timestamp_ms) {
  this->flash_latest_timestamp_ms_ = latest_timestamp_ms;
}

void OpenQuattTrends::write_sample_line_(AsyncResponseStream *stream, const TrendSample &sample) const {
  const float outside = decode_temp_(sample.values.outside_c_x10);
  const float supply = decode_temp_(sample.values.supply_c_x10);
  const float room = decode_temp_(sample.values.room_c_x10);
  const float setpoint = decode_temp_(sample.values.room_setpoint_c_x10);
  const float flow = decode_unsigned_(sample.values.flow_lph);
  const float input = decode_unsigned_(sample.values.input_w);
  const float output = decode_unsigned_(sample.values.output_w);
  stream->printf(
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

void OpenQuattTrends::write_samples_for_history_(AsyncResponseStream *stream, uint32_t window_hours) {
  const uint64_t cutoff_ms = this->get_window_cutoff_ms_(window_hours);
  const uint32_t stride = this->get_window_stride_(window_hours);
  const uint64_t flash_latest = this->get_latest_archive_timestamp_ms_();
  const uint64_t ram_cutoff = flash_latest > 0 ? std::max(cutoff_ms, flash_latest + 1ULL) : cutoff_ms;

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
      this->write_sample_line_(stream, sample);
      last_sample_emitted = true;
    }
    return should_emit;
  };

  if (this->flash_enabled_ && this->flash_archive_scanned_) {
    for (const auto &info : this->flash_blocks_) {
      std::vector<TrendSample> block_samples;
      if (!this->read_flash_block_(info, &block_samples)) {
        continue;
      }
      for (const auto &sample : block_samples) {
        emit_sample(sample, false);
      }
    }
  }

  const auto ram_samples = this->collect_ram_samples_();
  for (const auto &sample : ram_samples) {
    if (sample.timestamp_ms < ram_cutoff) {
      continue;
    }
    emit_sample(sample, false);
  }

  if (has_last_sample && !last_sample_emitted) {
    this->write_sample_line_(stream, last_sample);
  }
}

void OpenQuattTrends::write_history(AsyncResponseStream *stream, uint32_t window_hours) {
  if (stream == nullptr) {
    return;
  }

  const uint64_t now_ms = this->current_time_ms_();
  stream->printf("@now|%llu\n", static_cast<unsigned long long>(now_ms));
  this->write_samples_for_history_(stream, window_hours);
}

}  // namespace openquatt_trends
}  // namespace esphome
