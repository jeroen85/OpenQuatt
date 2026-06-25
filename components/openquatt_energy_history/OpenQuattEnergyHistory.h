#pragma once

#include <cstdint>
#include <string>

#include <esp_http_server.h>
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
  static constexpr uint16_t FLAG_PARTIAL = 1U << 0U;
  static constexpr uint32_t BASE_OFFSET = 0x60000;
  static constexpr size_t FLASH_SECTOR_SIZE = 4096;
  static constexpr size_t FLASH_SLOT_SIZE = 64;
  static constexpr size_t MAX_FLASH_SECTOR_COUNT = 256;
  static constexpr uint8_t HOURLY_RETENTION_DAYS = 7;
  static constexpr size_t HOURLY_SLOT_COUNT = static_cast<size_t>(HOURLY_RETENTION_DAYS) * 24U;
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

  static_assert(sizeof(EnergyHistoryValues) == 28, "EnergyHistoryValues must stay packed");
  static_assert(sizeof(EnergyHistoryRecord) == 52, "EnergyHistoryRecord must stay packed");
  static_assert(sizeof(EnergyHistoryRecord) <= FLASH_SLOT_SIZE, "Energy history record must fit in one slot");

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
  static bool record_has_values_(const EnergyHistoryValues &values);
  static uint32_t add_wh_(uint32_t base, uint32_t delta);
  static uint32_t delta_wh_(uint32_t current, uint32_t previous);
  static std::string format_date_key_(uint32_t date_key);

  EnergyHistoryValues pack_values_(float electrical_input_kwh, float heating_input_kwh, float cooling_input_kwh,
                                   float heatpump_heat_output_kwh, float heatpump_cooling_output_kwh,
                                   float boiler_heat_output_kwh, float system_heat_output_kwh) const;
  bool read_record_(uint32_t slot_index, EnergyHistoryRecord *record) const;
  bool record_valid_(const EnergyHistoryRecord &record) const;
  bool scan_archive_();
  bool write_record_(uint32_t date_key, const EnergyHistoryValues &values, bool partial);
  EnergyHistoryValues delta_values_(const EnergyHistoryValues &current, const EnergyHistoryValues &previous) const;
  void capture_hour_delta_(uint32_t date_key, uint8_t hour, const EnergyHistoryValues &values);
  uint32_t get_hour_record_count_() const;
  void clear_hour_records_();

  switch_::Switch *enabled_switch_{nullptr};
  time::RealTimeClock *clock_{nullptr};
  const esp_partition_t *flash_partition_{nullptr};

  bool partition_available_{false};
  size_t flash_sector_count_{0};
  size_t flash_slot_count_{0};
  size_t flash_total_bytes_{0};
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

  uint32_t next_sequence_{0};
  uint32_t record_count_{0};
  uint32_t oldest_date_key_{0};
  uint32_t newest_date_key_{0};
  uint32_t last_write_timestamp_s_{0};
};

}  // namespace openquatt_energy_history
}  // namespace esphome
