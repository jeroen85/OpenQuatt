#pragma once

#include <cstdint>
#include <string>

#include <esp_http_server.h>
#include "esphome/components/select/select.h"
#include "esp_partition.h"
#include "esphome/components/switch/switch.h"
#include "esphome/components/time/real_time_clock.h"
#include "esphome/components/web_server_base/web_server_base.h"
#include "esphome/core/component.h"

namespace esphome {
namespace openquatt_energy_history {

class ChunkedTextWriter;

class OpenQuattEnergyHistory : public Component {
 public:
  void set_enabled_switch(switch_::Switch *enabled_switch) { this->enabled_switch_ = enabled_switch; }
  void set_clock(time::RealTimeClock *clock) { this->clock_ = clock; }
  void set_hourly_retention_select(select::Select *hourly_retention_select) {
    this->hourly_retention_select_ = hourly_retention_select;
  }

  void setup() override;
  void loop() override;
  void on_shutdown() override;
  void dump_config() override;
  float get_setup_priority() const override;

  void capture_day_totals(float electrical_input_kwh, float heating_input_kwh, float cooling_input_kwh,
                          float heatpump_heat_output_kwh, float heatpump_cooling_output_kwh,
                          float boiler_heat_output_kwh, float system_heat_output_kwh);
  bool force_flush();
  void clear_history();
  void refresh_hourly_retention();
  void write_history(httpd_req_t *req);
  std::string get_available_label() const;
  std::string get_oldest_day_label() const;
  std::string get_newest_day_label() const;
  std::string get_last_write_label() const;
  float get_storage_kib() const;
  uint32_t get_write_count() const;

 protected:
  static constexpr uint32_t RECORD_MAGIC = 0x3148454F;  // "OEH1"
  static constexpr uint16_t RECORD_VERSION = 1;
  static constexpr uint32_t HOUR_DAY_RECORD_MAGIC = 0x3248454F;  // "OEH2"
  static constexpr uint16_t HOUR_DAY_RECORD_VERSION = 1;
  static constexpr uint16_t FLAG_PARTIAL = 1U << 0U;
  static constexpr size_t FLASH_SECTOR_SIZE = 4096;
  static constexpr size_t FLASH_SLOT_SIZE = 64;
  static constexpr size_t HOUR_FLASH_SLOT_SIZE = 1024;
  static constexpr size_t TREND_FLASH_RESERVED_SECTOR_COUNT = 90;
  static constexpr uint32_t BASE_OFFSET = TREND_FLASH_RESERVED_SECTOR_COUNT * FLASH_SECTOR_SIZE;
  static constexpr size_t MAX_FLASH_SECTOR_COUNT = 256;
  static constexpr uint32_t HOUR_FLASH_BASE_OFFSET = BASE_OFFSET + (MAX_FLASH_SECTOR_COUNT * FLASH_SECTOR_SIZE);
  static constexpr uint16_t MIN_DATE_YEAR = 2020;
  static constexpr uint16_t MAX_DATE_YEAR = 2099;
  static constexpr size_t DATE_BITMAP_YEAR_COUNT = (MAX_DATE_YEAR - MIN_DATE_YEAR) + 1U;
  static constexpr size_t DATE_BITMAP_BITS = DATE_BITMAP_YEAR_COUNT * 12U * 31U;
  static constexpr size_t DATE_BITMAP_BYTES = (DATE_BITMAP_BITS + 7U) / 8U;
  static constexpr uint8_t HOURLY_RETENTION_DAYS = 7;
  static constexpr size_t HOURLY_SLOT_COUNT = static_cast<size_t>(HOURLY_RETENTION_DAYS) * 24U;
  static constexpr uint16_t DEFAULT_FLASH_HOURLY_RETENTION_DAYS = 180;
  static constexpr uint16_t MAX_FLASH_HOURLY_RETENTION_DAYS = 365;
  static constexpr uint32_t UNKNOWN_WH = 0xFFFFFFFFU;

  struct __attribute__((packed)) EnergyHistoryValues {
    uint32_t electrical_input_wh;
    uint32_t heating_input_wh;
    uint32_t cooling_input_wh;
    uint32_t heatpump_heat_output_wh;
    uint32_t heatpump_cooling_output_wh;
    uint32_t boiler_heat_output_wh;
    uint32_t system_heat_output_wh;
  };

  struct __attribute__((packed)) EnergyHistoryRecord {
    uint32_t magic;
    uint16_t version;
    uint16_t flags;
    uint32_t sequence;
    uint32_t date_key;
    uint32_t write_timestamp_s;
    EnergyHistoryValues values;
    uint32_t crc32;
  };

  struct EnergyHistoryHourRecord {
    uint32_t sequence;
    uint32_t date_key;
    uint8_t hour;
    bool valid;
    EnergyHistoryValues values;
  };

  struct __attribute__((packed)) EnergyHistoryHourDayRecord {
    uint32_t magic;
    uint16_t version;
    uint16_t flags;
    uint32_t sequence;
    uint32_t date_key;
    uint32_t write_timestamp_s;
    uint32_t hour_mask;
    EnergyHistoryValues hours[24];
    uint32_t crc32;
  };

  static_assert(sizeof(EnergyHistoryValues) == 28, "EnergyHistoryValues must stay packed");
  static_assert(sizeof(EnergyHistoryRecord) == 52, "EnergyHistoryRecord must stay packed");
  static_assert(sizeof(EnergyHistoryRecord) <= FLASH_SLOT_SIZE, "Energy history record must fit in one slot");
  static_assert(sizeof(EnergyHistoryHourDayRecord) <= HOUR_FLASH_SLOT_SIZE,
                "Energy history hour day record must fit in one slot");

  bool enabled_() const;
  bool time_is_valid_() const;
  uint64_t current_time_ms_() const;
  uint32_t get_current_date_key_() const;
  uint8_t get_current_hour_() const;
  bool is_partition_ready_() const;
  static uint32_t encode_kwh_(float value);
  static int32_t printable_wh_(uint32_t value);
  static uint32_t fnv1a_hash_(const uint8_t *data, size_t len);
  static uint32_t record_crc_(const EnergyHistoryRecord &record);
  static uint32_t hour_day_record_crc_(const EnergyHistoryHourDayRecord &record);
  static bool record_has_values_(const EnergyHistoryValues &values);
  static uint32_t add_wh_(uint32_t base, uint32_t delta);
  static uint32_t delta_wh_(uint32_t current, uint32_t previous);
  static std::string format_date_key_(uint32_t date_key);
  static bool date_key_in_range_(uint32_t date_key, uint32_t from_date_key, uint32_t to_date_key);
  static uint16_t parse_hourly_retention_days_(const std::string &option);

  EnergyHistoryValues pack_values_(float electrical_input_kwh, float heating_input_kwh, float cooling_input_kwh,
                                   float heatpump_heat_output_kwh, float heatpump_cooling_output_kwh,
                                   float boiler_heat_output_kwh, float system_heat_output_kwh) const;
  bool read_record_(uint32_t slot_index, EnergyHistoryRecord *record) const;
  bool record_valid_(const EnergyHistoryRecord &record) const;
  bool read_hour_day_record_(uint32_t slot_index, EnergyHistoryHourDayRecord *record) const;
  bool hour_day_record_valid_(const EnergyHistoryHourDayRecord &record) const;
  bool scan_archive_();
  bool scan_hour_archive_();
  bool write_record_(uint32_t date_key, const EnergyHistoryValues &values, bool partial);
  bool write_hour_day_record_(uint32_t date_key, bool partial);
  EnergyHistoryValues delta_values_(const EnergyHistoryValues &current, const EnergyHistoryValues &previous) const;
  void capture_hour_delta_(uint32_t date_key, uint8_t hour, const EnergyHistoryValues &values);
  uint16_t requested_flash_hourly_retention_days_() const;
  size_t max_hour_flash_total_bytes_() const;
  void configure_hour_flash_window_();
  bool is_hour_partition_ready_() const;
  bool snapshot_hour_day_values_(uint32_t date_key, EnergyHistoryValues hours[24], uint32_t *hour_mask) const;
  uint32_t get_hour_record_count_() const;
  void clear_hour_records_();

  switch_::Switch *enabled_switch_{nullptr};
  select::Select *hourly_retention_select_{nullptr};
  time::RealTimeClock *clock_{nullptr};
  const esp_partition_t *flash_partition_{nullptr};

  bool partition_available_{false};
  size_t flash_sector_count_{0};
  size_t flash_slot_count_{0};
  size_t flash_total_bytes_{0};
  bool hour_partition_available_{false};
  size_t hour_flash_sector_count_{0};
  size_t hour_flash_slot_count_{0};
  size_t hour_flash_total_bytes_{0};
  uint16_t hour_flash_requested_retention_days_{DEFAULT_FLASH_HOURLY_RETENTION_DAYS};
  bool has_current_day_{false};
  uint32_t active_date_key_{0};
  EnergyHistoryValues current_values_{UNKNOWN_WH, UNKNOWN_WH, UNKNOWN_WH, UNKNOWN_WH,
                                      UNKNOWN_WH, UNKNOWN_WH, UNKNOWN_WH};

  bool has_last_hour_sample_{false};
  uint32_t last_hour_sample_date_key_{0};
  uint8_t last_hour_sample_hour_{0};
  EnergyHistoryValues last_hour_sample_values_{UNKNOWN_WH, UNKNOWN_WH, UNKNOWN_WH, UNKNOWN_WH,
                                               UNKNOWN_WH, UNKNOWN_WH, UNKNOWN_WH};
  EnergyHistoryHourRecord hour_records_[HOURLY_SLOT_COUNT]{};
  uint32_t next_hour_sequence_{0};
  uint32_t next_hour_flash_sequence_{0};
  uint32_t hour_flash_record_count_{0};
  uint32_t hour_flash_stored_day_count_{0};
  uint32_t hour_flash_oldest_date_key_{0};
  uint32_t hour_flash_newest_date_key_{0};
  uint32_t hour_flash_last_write_timestamp_s_{0};
  EnergyHistoryValues hour_snapshot_values_[24]{};
  EnergyHistoryHourDayRecord hour_flash_record_buffer_{};
  uint8_t hour_flash_slot_buffer_[HOUR_FLASH_SLOT_SIZE]{};

  uint32_t next_sequence_{0};
  uint32_t record_count_{0};
  uint32_t stored_day_count_{0};
  uint32_t oldest_date_key_{0};
  uint32_t newest_date_key_{0};
  uint32_t last_write_timestamp_s_{0};
};

}  // namespace openquatt_energy_history
}  // namespace esphome
