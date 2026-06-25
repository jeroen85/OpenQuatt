#include "OpenQuattEnergyHistory.h"

#include <algorithm>
#include <cstdarg>
#include <cmath>
#include <cstdio>
#include <cstring>

#include "esphome/core/log.h"

namespace esphome {
namespace openquatt_energy_history {

static const char *const TAG = "openquatt.energy_history";

namespace {

static bool url_path_matches(const char *url, const char *path) {
  if (url == nullptr || path == nullptr) {
    return false;
  }
  const size_t path_len = std::strlen(path);
  return std::strncmp(url, path, path_len) == 0 && (url[path_len] == '\0' || url[path_len] == '?');
}

}  // namespace

class ChunkedTextWriter {
 public:
  explicit ChunkedTextWriter(httpd_req_t *req) : req_(req) {}

  bool printf(const char *format, ...) {
    char scratch[192];
    va_list args;
    va_start(args, format);
    const int written = std::vsnprintf(scratch, sizeof(scratch), format, args);
    va_end(args);
    if (written < 0) {
      return false;
    }
    const size_t length = std::min(static_cast<size_t>(written), sizeof(scratch) - 1U);
    return httpd_resp_send_chunk(this->req_, scratch, static_cast<ssize_t>(length)) == ESP_OK;
  }

 private:
  httpd_req_t *req_;
};

class OpenQuattEnergyHistoryRequestHandler : public AsyncWebHandler {
 public:
  explicit OpenQuattEnergyHistoryRequestHandler(OpenQuattEnergyHistory *parent) : parent_(parent) {}

  bool canHandle(AsyncWebServerRequest *request) const override {
    char url_buf[AsyncWebServerRequest::URL_BUF_SIZE];
    request->url_to(url_buf);
    return url_path_matches(url_buf, "/energy/history") && request->method() == HTTP_GET;
  }

  void handleRequest(AsyncWebServerRequest *request) override {
    httpd_req_t *req = *request;
    httpd_resp_set_status(req, HTTPD_200);
    httpd_resp_set_type(req, "text/plain; charset=utf-8");
    httpd_resp_set_hdr(req, "Cache-Control", "no-store");
    this->parent_->write_history(req);
  }

 protected:
  OpenQuattEnergyHistory *parent_;
};

void OpenQuattEnergyHistory::setup() {
  if (web_server_base::global_web_server_base == nullptr) {
    ESP_LOGE(TAG, "global_web_server_base is unavailable");
    return;
  }

  this->flash_partition_ = esp_partition_find_first(ESP_PARTITION_TYPE_DATA, ESP_PARTITION_SUBTYPE_ANY, "openquatt_data");
  if (this->flash_partition_ == nullptr) {
    ESP_LOGW(TAG, "Energy history flash partition 'openquatt_data' not found");
  } else {
    const size_t available_bytes =
        this->flash_partition_->size > BASE_OFFSET ? this->flash_partition_->size - BASE_OFFSET : 0U;
    const size_t sector_count = std::min(MAX_FLASH_SECTOR_COUNT, available_bytes / FLASH_SECTOR_SIZE);
    if (sector_count == 0U) {
      ESP_LOGW(TAG, "Energy history flash window does not fit in 'openquatt_data' (partition=%u, base=%u)",
               static_cast<unsigned>(this->flash_partition_->size), static_cast<unsigned>(BASE_OFFSET));
    } else {
      this->flash_sector_count_ = sector_count;
      this->flash_slot_count_ = (FLASH_SECTOR_SIZE / FLASH_SLOT_SIZE) * this->flash_sector_count_;
      this->flash_total_bytes_ = FLASH_SECTOR_SIZE * this->flash_sector_count_;
      this->partition_available_ = true;
      this->scan_archive_();
    }
  }

  web_server_base::global_web_server_base->add_handler(new OpenQuattEnergyHistoryRequestHandler(this));
}

void OpenQuattEnergyHistory::loop() {}

void OpenQuattEnergyHistory::on_shutdown() {
  if (this->enabled_() && this->has_current_day_ && record_has_values_(this->current_values_)) {
    this->write_record_(this->active_date_key_, this->current_values_, true);
  }
}

bool OpenQuattEnergyHistory::force_flush() {
  if (!this->enabled_() || !this->has_current_day_ || !record_has_values_(this->current_values_)) {
    return false;
  }
  return this->write_record_(this->active_date_key_, this->current_values_, true);
}

void OpenQuattEnergyHistory::dump_config() {
  ESP_LOGCONFIG(TAG, "OpenQuatt energy history");
  ESP_LOGCONFIG(TAG, "  Clock: %s", this->clock_ == nullptr ? "<missing>" : "configured");
  ESP_LOGCONFIG(TAG, "  Enabled switch: %s", this->enabled_switch_ == nullptr ? "<missing>" : "configured");
  ESP_LOGCONFIG(TAG, "  Flash partition: %s", this->is_partition_ready_() ? "configured" : "<missing>");
  ESP_LOGCONFIG(TAG, "  Flash window: %u KiB / %u slots", static_cast<unsigned>(this->flash_total_bytes_ / 1024U),
                static_cast<unsigned>(this->flash_slot_count_));
  ESP_LOGCONFIG(TAG, "  Records: %u / days: %u", static_cast<unsigned>(this->record_count_),
                static_cast<unsigned>(this->stored_day_count_));
  ESP_LOGCONFIG(TAG, "  Hour records: %u / %u", static_cast<unsigned>(this->get_hour_record_count_()),
                static_cast<unsigned>(HOURLY_SLOT_COUNT));
}

float OpenQuattEnergyHistory::get_setup_priority() const { return setup_priority::WIFI; }

bool OpenQuattEnergyHistory::enabled_() const {
  return this->enabled_switch_ != nullptr && this->enabled_switch_->state;
}

bool OpenQuattEnergyHistory::time_is_valid_() const {
  return this->clock_ != nullptr && this->clock_->now().is_valid();
}

uint64_t OpenQuattEnergyHistory::current_time_ms_() const {
  if (this->time_is_valid_()) {
    const auto now = this->clock_->now();
    return static_cast<uint64_t>(now.timestamp) * 1000ULL;
  }
  return static_cast<uint64_t>(millis());
}

uint32_t OpenQuattEnergyHistory::get_current_date_key_() const {
  if (!this->time_is_valid_()) {
    return 0;
  }
  const auto now = this->clock_->now();
  return (static_cast<uint32_t>(now.year) * 10000U) + (static_cast<uint32_t>(now.month) * 100U) +
         static_cast<uint32_t>(now.day_of_month);
}

uint8_t OpenQuattEnergyHistory::get_current_hour_() const {
  if (!this->time_is_valid_()) {
    return 0;
  }
  return static_cast<uint8_t>(this->clock_->now().hour);
}

bool OpenQuattEnergyHistory::is_partition_ready_() const {
  return this->partition_available_ && this->flash_partition_ != nullptr;
}

uint32_t OpenQuattEnergyHistory::encode_kwh_(float value) {
  if (!std::isfinite(value) || value < 0.0f) {
    return UNKNOWN_WH;
  }
  const float wh = value * 1000.0f;
  if (wh >= static_cast<float>(UNKNOWN_WH - 1U)) {
    return UNKNOWN_WH - 1U;
  }
  return static_cast<uint32_t>(std::round(wh));
}

int32_t OpenQuattEnergyHistory::printable_wh_(uint32_t value) {
  return value == UNKNOWN_WH ? -1 : static_cast<int32_t>(value);
}

uint32_t OpenQuattEnergyHistory::fnv1a_hash_(const uint8_t *data, size_t len) {
  uint32_t hash = 2166136261UL;
  for (size_t index = 0; index < len; ++index) {
    hash ^= data[index];
    hash *= 16777619UL;
  }
  return hash;
}

uint32_t OpenQuattEnergyHistory::record_crc_(const EnergyHistoryRecord &record) {
  return fnv1a_hash_(reinterpret_cast<const uint8_t *>(&record), offsetof(EnergyHistoryRecord, crc32));
}

bool OpenQuattEnergyHistory::record_has_values_(const EnergyHistoryValues &values) {
  return values.electrical_input_wh != UNKNOWN_WH || values.heating_input_wh != UNKNOWN_WH ||
         values.cooling_input_wh != UNKNOWN_WH || values.heatpump_heat_output_wh != UNKNOWN_WH ||
         values.heatpump_cooling_output_wh != UNKNOWN_WH || values.boiler_heat_output_wh != UNKNOWN_WH ||
         values.system_heat_output_wh != UNKNOWN_WH;
}

uint32_t OpenQuattEnergyHistory::add_wh_(uint32_t base, uint32_t delta) {
  if (delta == UNKNOWN_WH) {
    return base;
  }
  if (base == UNKNOWN_WH) {
    return delta;
  }
  if (base >= UNKNOWN_WH - delta) {
    return UNKNOWN_WH - 1U;
  }
  return base + delta;
}

uint32_t OpenQuattEnergyHistory::delta_wh_(uint32_t current, uint32_t previous) {
  if (current == UNKNOWN_WH || previous == UNKNOWN_WH || current < previous) {
    return UNKNOWN_WH;
  }
  return current - previous;
}

std::string OpenQuattEnergyHistory::format_date_key_(uint32_t date_key) {
  if (date_key == 0) {
    return "Geen data";
  }
  const uint32_t year = date_key / 10000U;
  const uint32_t month = (date_key / 100U) % 100U;
  const uint32_t day = date_key % 100U;
  char buffer[16];
  std::snprintf(buffer, sizeof(buffer), "%02u-%02u-%04u", static_cast<unsigned>(day), static_cast<unsigned>(month),
                static_cast<unsigned>(year));
  return buffer;
}

OpenQuattEnergyHistory::EnergyHistoryValues OpenQuattEnergyHistory::pack_values_(
    float electrical_input_kwh, float heating_input_kwh, float cooling_input_kwh, float heatpump_heat_output_kwh,
    float heatpump_cooling_output_kwh, float boiler_heat_output_kwh, float system_heat_output_kwh) const {
  return EnergyHistoryValues{
      encode_kwh_(electrical_input_kwh),        encode_kwh_(heating_input_kwh),
      encode_kwh_(cooling_input_kwh),           encode_kwh_(heatpump_heat_output_kwh),
      encode_kwh_(heatpump_cooling_output_kwh), encode_kwh_(boiler_heat_output_kwh),
      encode_kwh_(system_heat_output_kwh),
  };
}

bool OpenQuattEnergyHistory::read_record_(uint32_t slot_index, EnergyHistoryRecord *record) const {
  if (record == nullptr || !this->is_partition_ready_() || slot_index >= this->flash_slot_count_) {
    return false;
  }
  const uint32_t slot_offset = BASE_OFFSET + (slot_index * FLASH_SLOT_SIZE);
  const esp_err_t result = esp_partition_read(this->flash_partition_, slot_offset, record, sizeof(*record));
  return result == ESP_OK;
}

bool OpenQuattEnergyHistory::record_valid_(const EnergyHistoryRecord &record) const {
  return record.magic == RECORD_MAGIC && record.version == RECORD_VERSION && record.date_key >= 20200101U &&
         record.date_key <= 20991231U && record.crc32 == record_crc_(record);
}

bool OpenQuattEnergyHistory::scan_archive_() {
  if (!this->is_partition_ready_()) {
    this->record_count_ = 0;
    this->stored_day_count_ = 0;
    this->next_sequence_ = 0;
    this->oldest_date_key_ = 0;
    this->newest_date_key_ = 0;
    this->last_write_timestamp_s_ = 0;
    return false;
  }

  bool found = false;
  uint32_t min_sequence = 0;
  uint32_t max_sequence = 0;
  uint32_t count = 0;
  uint32_t stored_day_count = 0;
  uint32_t oldest_date = 0;
  uint32_t newest_date = 0;
  uint32_t newest_write_ts = 0;
  uint8_t seen_dates[DATE_BITMAP_BYTES];
  std::memset(seen_dates, 0, sizeof(seen_dates));

  for (uint32_t slot_index = 0; slot_index < this->flash_slot_count_; ++slot_index) {
    EnergyHistoryRecord record{};
    if (!this->read_record_(slot_index, &record) || !this->record_valid_(record)) {
      continue;
    }
    const uint16_t year = static_cast<uint16_t>(record.date_key / 10000U);
    const uint8_t month = static_cast<uint8_t>((record.date_key / 100U) % 100U);
    const uint8_t day = static_cast<uint8_t>(record.date_key % 100U);
    if (year >= MIN_DATE_YEAR && year <= MAX_DATE_YEAR && month >= 1U && month <= 12U && day >= 1U && day <= 31U) {
      const size_t date_index =
          ((static_cast<size_t>(year - MIN_DATE_YEAR) * 12U) + static_cast<size_t>(month - 1U)) * 31U +
          static_cast<size_t>(day - 1U);
      const size_t byte_index = date_index / 8U;
      const uint8_t bit_mask = static_cast<uint8_t>(1U << (date_index % 8U));
      if ((seen_dates[byte_index] & bit_mask) == 0U) {
        seen_dates[byte_index] |= bit_mask;
        ++stored_day_count;
      }
    }
    if (!found || record.sequence < min_sequence) {
      min_sequence = record.sequence;
    }
    if (!found || record.sequence > max_sequence) {
      max_sequence = record.sequence;
      newest_write_ts = record.write_timestamp_s;
    }
    if (oldest_date == 0 || record.date_key < oldest_date) {
      oldest_date = record.date_key;
    }
    if (newest_date == 0 || record.date_key > newest_date) {
      newest_date = record.date_key;
    }
    found = true;
    ++count;
  }

  this->record_count_ = count;
  this->stored_day_count_ = stored_day_count;
  this->next_sequence_ = found ? max_sequence + 1U : 0U;
  this->oldest_date_key_ = oldest_date;
  this->newest_date_key_ = newest_date;
  this->last_write_timestamp_s_ = newest_write_ts;
  return true;
}

bool OpenQuattEnergyHistory::write_record_(uint32_t date_key, const EnergyHistoryValues &values, bool partial) {
  if (!this->enabled_() || !this->is_partition_ready_() || this->flash_slot_count_ == 0U ||
      !this->time_is_valid_() || date_key == 0 || !record_has_values_(values)) {
    return false;
  }

  const uint32_t sequence = this->next_sequence_;
  const uint32_t slot_index = sequence % static_cast<uint32_t>(this->flash_slot_count_);
  const uint32_t slot_offset = BASE_OFFSET + (slot_index * FLASH_SLOT_SIZE);
  if ((slot_offset - BASE_OFFSET) % FLASH_SECTOR_SIZE == 0) {
    const esp_err_t erase_result = esp_partition_erase_range(this->flash_partition_, slot_offset, FLASH_SECTOR_SIZE);
    if (erase_result != ESP_OK) {
      ESP_LOGW(TAG, "Could not erase energy history sector %u: %s",
               static_cast<unsigned>((slot_offset - BASE_OFFSET) / FLASH_SECTOR_SIZE), esp_err_to_name(erase_result));
      return false;
    }
  }

  EnergyHistoryRecord record{};
  record.magic = RECORD_MAGIC;
  record.version = RECORD_VERSION;
  record.flags = partial ? FLAG_PARTIAL : 0U;
  record.sequence = sequence;
  record.date_key = date_key;
  record.write_timestamp_s = static_cast<uint32_t>(this->current_time_ms_() / 1000ULL);
  record.values = values;
  record.crc32 = record_crc_(record);

  uint8_t slot_buffer[FLASH_SLOT_SIZE];
  std::memset(slot_buffer, 0xFF, sizeof(slot_buffer));
  std::memcpy(slot_buffer, &record, sizeof(record));
  const esp_err_t write_result = esp_partition_write(this->flash_partition_, slot_offset, slot_buffer, sizeof(slot_buffer));
  if (write_result != ESP_OK) {
    ESP_LOGW(TAG, "Could not write energy history slot %u: %s", static_cast<unsigned>(slot_index),
             esp_err_to_name(write_result));
    return false;
  }

  this->scan_archive_();
  return true;
}

OpenQuattEnergyHistory::EnergyHistoryValues OpenQuattEnergyHistory::delta_values_(
    const EnergyHistoryValues &current, const EnergyHistoryValues &previous) const {
  return EnergyHistoryValues{
      delta_wh_(current.electrical_input_wh, previous.electrical_input_wh),
      delta_wh_(current.heating_input_wh, previous.heating_input_wh),
      delta_wh_(current.cooling_input_wh, previous.cooling_input_wh),
      delta_wh_(current.heatpump_heat_output_wh, previous.heatpump_heat_output_wh),
      delta_wh_(current.heatpump_cooling_output_wh, previous.heatpump_cooling_output_wh),
      delta_wh_(current.boiler_heat_output_wh, previous.boiler_heat_output_wh),
      delta_wh_(current.system_heat_output_wh, previous.system_heat_output_wh),
  };
}

void OpenQuattEnergyHistory::capture_hour_delta_(uint32_t date_key, uint8_t hour, const EnergyHistoryValues &values) {
  if (date_key == 0 || hour > 23 || !record_has_values_(values)) {
    return;
  }

  EnergyHistoryHourRecord *record = nullptr;
  for (auto &candidate : this->hour_records_) {
    if (candidate.valid && candidate.date_key == date_key && candidate.hour == hour) {
      record = &candidate;
      break;
    }
  }

  if (record == nullptr) {
    record = &this->hour_records_[this->next_hour_sequence_ % HOURLY_SLOT_COUNT];
    record->sequence = this->next_hour_sequence_++;
    record->date_key = date_key;
    record->hour = hour;
    record->valid = true;
    record->values = EnergyHistoryValues{UNKNOWN_WH, UNKNOWN_WH, UNKNOWN_WH, UNKNOWN_WH,
                                         UNKNOWN_WH, UNKNOWN_WH, UNKNOWN_WH};
  }

  record->values.electrical_input_wh = add_wh_(record->values.electrical_input_wh, values.electrical_input_wh);
  record->values.heating_input_wh = add_wh_(record->values.heating_input_wh, values.heating_input_wh);
  record->values.cooling_input_wh = add_wh_(record->values.cooling_input_wh, values.cooling_input_wh);
  record->values.heatpump_heat_output_wh = add_wh_(record->values.heatpump_heat_output_wh, values.heatpump_heat_output_wh);
  record->values.heatpump_cooling_output_wh =
      add_wh_(record->values.heatpump_cooling_output_wh, values.heatpump_cooling_output_wh);
  record->values.boiler_heat_output_wh = add_wh_(record->values.boiler_heat_output_wh, values.boiler_heat_output_wh);
  record->values.system_heat_output_wh = add_wh_(record->values.system_heat_output_wh, values.system_heat_output_wh);
}

uint32_t OpenQuattEnergyHistory::get_hour_record_count_() const {
  uint32_t count = 0;
  for (const auto &record : this->hour_records_) {
    if (record.valid && record_has_values_(record.values)) {
      ++count;
    }
  }
  return count;
}

void OpenQuattEnergyHistory::clear_hour_records_() {
  std::memset(this->hour_records_, 0, sizeof(this->hour_records_));
  this->next_hour_sequence_ = 0;
  this->has_last_hour_sample_ = false;
  this->last_hour_sample_date_key_ = 0;
  this->last_hour_sample_hour_ = 0;
  this->last_hour_sample_values_ = EnergyHistoryValues{UNKNOWN_WH, UNKNOWN_WH, UNKNOWN_WH, UNKNOWN_WH,
                                                       UNKNOWN_WH, UNKNOWN_WH, UNKNOWN_WH};
}

void OpenQuattEnergyHistory::capture_day_totals(float electrical_input_kwh, float heating_input_kwh,
                                                float cooling_input_kwh, float heatpump_heat_output_kwh,
                                                float heatpump_cooling_output_kwh, float boiler_heat_output_kwh,
                                                float system_heat_output_kwh) {
  if (!this->enabled_() || !this->time_is_valid_()) {
    return;
  }

  const uint32_t date_key = this->get_current_date_key_();
  if (date_key == 0) {
    return;
  }

  const EnergyHistoryValues values = this->pack_values_(electrical_input_kwh, heating_input_kwh, cooling_input_kwh,
                                                        heatpump_heat_output_kwh, heatpump_cooling_output_kwh,
                                                        boiler_heat_output_kwh, system_heat_output_kwh);
  if (!record_has_values_(values)) {
    return;
  }

  const uint8_t hour = this->get_current_hour_();
  if (this->has_last_hour_sample_ && this->last_hour_sample_date_key_ == date_key) {
    this->capture_hour_delta_(date_key, hour, this->delta_values_(values, this->last_hour_sample_values_));
  }

  if (this->has_current_day_ && this->active_date_key_ != date_key) {
    this->write_record_(this->active_date_key_, this->current_values_, false);
  }

  this->active_date_key_ = date_key;
  this->current_values_ = values;
  this->has_current_day_ = true;
  this->last_hour_sample_date_key_ = date_key;
  this->last_hour_sample_hour_ = hour;
  this->last_hour_sample_values_ = values;
  this->has_last_hour_sample_ = true;
}

void OpenQuattEnergyHistory::clear_history() {
  if (!this->is_partition_ready_()) {
    return;
  }
  const esp_err_t erase_result = esp_partition_erase_range(this->flash_partition_, BASE_OFFSET, this->flash_total_bytes_);
  if (erase_result != ESP_OK) {
    ESP_LOGW(TAG, "Could not erase energy history: %s", esp_err_to_name(erase_result));
  }
  this->has_current_day_ = false;
  this->active_date_key_ = 0;
  this->current_values_ = EnergyHistoryValues{UNKNOWN_WH, UNKNOWN_WH, UNKNOWN_WH, UNKNOWN_WH,
                                              UNKNOWN_WH, UNKNOWN_WH, UNKNOWN_WH};
  this->clear_hour_records_();
  this->scan_archive_();
}

void OpenQuattEnergyHistory::write_history(httpd_req_t *req) {
  if (req == nullptr) {
    return;
  }

  ChunkedTextWriter writer(req);
  const uint32_t hour_count = this->get_hour_record_count_();
  if (!writer.printf("@schema|2\n") || !writer.printf("@enabled|%u\n", this->enabled_() ? 1U : 0U) ||
      !writer.printf("@now|%llu\n", static_cast<unsigned long long>(this->current_time_ms_())) ||
      !writer.printf("@records|%u\n", static_cast<unsigned>(this->record_count_)) ||
      !writer.printf("@hours|%u|%u\n", static_cast<unsigned>(hour_count), static_cast<unsigned>(HOURLY_RETENTION_DAYS))) {
    ESP_LOGW(TAG, "Failed to start energy history response");
    return;
  }

  for (uint32_t slot_index = 0; slot_index < this->flash_slot_count_; ++slot_index) {
    EnergyHistoryRecord record{};
    if (!this->read_record_(slot_index, &record) || !this->record_valid_(record)) {
      continue;
    }
    if (!writer.printf("%u|%u|%u|%d|%d|%d|%d|%d|%d|%d\n", static_cast<unsigned>(record.sequence),
                       static_cast<unsigned>(record.date_key), static_cast<unsigned>(record.flags),
                       printable_wh_(record.values.electrical_input_wh),
                       printable_wh_(record.values.heating_input_wh),
                       printable_wh_(record.values.cooling_input_wh),
                       printable_wh_(record.values.heatpump_heat_output_wh),
                       printable_wh_(record.values.heatpump_cooling_output_wh),
                       printable_wh_(record.values.boiler_heat_output_wh),
                       printable_wh_(record.values.system_heat_output_wh))) {
      ESP_LOGW(TAG, "Failed to write energy history response");
      return;
    }
  }

  if (this->has_current_day_ && record_has_values_(this->current_values_)) {
    writer.printf("@current|%u|%d|%d|%d|%d|%d|%d|%d\n", static_cast<unsigned>(this->active_date_key_),
                  printable_wh_(this->current_values_.electrical_input_wh),
                  printable_wh_(this->current_values_.heating_input_wh),
                  printable_wh_(this->current_values_.cooling_input_wh),
                  printable_wh_(this->current_values_.heatpump_heat_output_wh),
                  printable_wh_(this->current_values_.heatpump_cooling_output_wh),
                  printable_wh_(this->current_values_.boiler_heat_output_wh),
                  printable_wh_(this->current_values_.system_heat_output_wh));
  }

  for (const auto &record : this->hour_records_) {
    if (!record.valid || !record_has_values_(record.values)) {
      continue;
    }
    if (!writer.printf("@hour|%u|%u|%u|%d|%d|%d|%d|%d|%d|%d\n", static_cast<unsigned>(record.sequence),
                       static_cast<unsigned>(record.date_key), static_cast<unsigned>(record.hour),
                       printable_wh_(record.values.electrical_input_wh),
                       printable_wh_(record.values.heating_input_wh),
                       printable_wh_(record.values.cooling_input_wh),
                       printable_wh_(record.values.heatpump_heat_output_wh),
                       printable_wh_(record.values.heatpump_cooling_output_wh),
                       printable_wh_(record.values.boiler_heat_output_wh),
                       printable_wh_(record.values.system_heat_output_wh))) {
      ESP_LOGW(TAG, "Failed to write energy hour history response");
      return;
    }
  }

  if (httpd_resp_send_chunk(req, nullptr, 0) != ESP_OK) {
    ESP_LOGW(TAG, "Failed to terminate energy history response");
  }
}

std::string OpenQuattEnergyHistory::get_available_label() const {
  if (!this->is_partition_ready_()) {
    return "Niet beschikbaar";
  }
  if (this->stored_day_count_ == 0) {
    return "Geen data";
  }
  char buffer[48];
  std::snprintf(buffer, sizeof(buffer), "%u %s", static_cast<unsigned>(this->stored_day_count_),
                this->stored_day_count_ == 1U ? "dag" : "dagen");
  return buffer;
}

std::string OpenQuattEnergyHistory::get_oldest_day_label() const { return format_date_key_(this->oldest_date_key_); }

std::string OpenQuattEnergyHistory::get_newest_day_label() const { return format_date_key_(this->newest_date_key_); }

std::string OpenQuattEnergyHistory::get_last_write_label() const {
  if (this->last_write_timestamp_s_ == 0) {
    return "Geen data";
  }
  if (!this->time_is_valid_()) {
    return "Onbekend";
  }
  auto formatted = ESPTime::from_epoch_local(static_cast<time_t>(this->last_write_timestamp_s_)).strftime("%d-%m %H:%M");
  return formatted.empty() ? "Onbekend" : formatted;
}

float OpenQuattEnergyHistory::get_storage_kib() const { return static_cast<float>(this->flash_total_bytes_) / 1024.0f; }

uint32_t OpenQuattEnergyHistory::get_write_count() const { return this->next_sequence_; }

}  // namespace openquatt_energy_history
}  // namespace esphome
