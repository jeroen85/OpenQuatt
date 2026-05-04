#pragma once

#include <array>
#include <cstddef>
#include <cstdint>

#include <esp_http_server.h>

#include "PsramBuffer.h"
#include "esphome/components/switch/switch.h"
#include "esphome/components/time/real_time_clock.h"
#include "esphome/components/web_server_base/web_server_base.h"
#include "esphome/core/component.h"

namespace esphome {
namespace openquatt_log_history {

class OpenQuattLogHistory : public Component {
 public:
  void set_enabled_switch(switch_::Switch *enabled_switch) { this->enabled_switch_ = enabled_switch; }
  void set_clock(time::RealTimeClock *clock) { this->clock_ = clock; }

  void setup() override;
  void loop() override;
  void dump_config() override;
  float get_setup_priority() const override;

  void set_enabled(bool enabled);
  void clear_history();
  void write_recent_logs(httpd_req_t *req) const;

 protected:
  static constexpr size_t ENTRY_CAPACITY = 250;
  static constexpr size_t RAW_MAX_LEN = 96;

  struct LogEntry {
    uint16_t seq{0};
    uint32_t timestamp_s{0};
    uint8_t raw_len{0};
    uint8_t level{0};
    char raw[RAW_MAX_LEN]{};
  };

  bool enabled_{true};
  bool time_rebased_{false};
  switch_::Switch *enabled_switch_{nullptr};
  time::RealTimeClock *clock_{nullptr};
  PsramBuffer<LogEntry> entries_{};
  size_t head_{0};
  size_t count_{0};
  uint32_t next_seq_{1};

  bool capture_enabled_() const;
  bool time_is_valid_() const;
  uint64_t current_time_ms_() const;
  uint64_t current_epoch_offset_ms_() const;
  void sync_time_state_();
  void rebase_history_(uint32_t offset_s);

  void on_log_(uint8_t level, const char *tag, const char *message, size_t message_len);
  void push_entry_(const LogEntry &entry);
  static uint8_t normalize_level_(uint8_t level);
  static const char *level_to_string_(uint8_t level);
  static void copy_sanitized_log_line_(const char *message, size_t message_len, char *out, size_t out_size);
  static void split_log_fields_(const char *raw, const char **tag_start, size_t *tag_len, const char **message_start,
                                size_t *message_len);
};

}  // namespace openquatt_log_history
}  // namespace esphome
