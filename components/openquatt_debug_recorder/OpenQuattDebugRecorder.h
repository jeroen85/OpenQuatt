#pragma once

#include <cstddef>
#include <cstdint>

#include <esp_http_server.h>

#include "PsramBuffer.h"
#include "esphome/components/time/real_time_clock.h"
#include "esphome/components/web_server_base/web_server_base.h"
#include "esphome/core/component.h"

namespace esphome {
namespace openquatt_debug_recorder {

using openquatt_common::PsramBuffer;

class OpenQuattDebugRecorder : public Component {
 public:
  void set_clock(time::RealTimeClock *clock) { this->clock_ = clock; }

  void setup() override;
  void loop() override;
  void dump_config() override;
  float get_setup_priority() const override;

  void start(uint32_t duration_s);
  void stop();
  void write_status(httpd_req_t *req) const;
  void write_recording(httpd_req_t *req) const;

 protected:
  static constexpr uint32_t SAMPLE_INTERVAL_MS = 10000;
  static constexpr uint32_t DEFAULT_DURATION_S = 15 * 60;
  static constexpr uint32_t MIN_DURATION_S = 60;
  static constexpr uint32_t MAX_DURATION_S = 60 * 60;
  static constexpr size_t SAMPLE_CAPACITY = MAX_DURATION_S / (SAMPLE_INTERVAL_MS / 1000) + 1;

  struct DebugSample {
    uint32_t offset_s{0};
    uint32_t uptime_ms{0};
    uint32_t free_heap{0};
    uint32_t free_psram{0};
    uint32_t min_free_heap{0};
  };

  time::RealTimeClock *clock_{nullptr};
  PsramBuffer<DebugSample> samples_{};
  bool active_{false};
  uint32_t started_ms_{0};
  uint32_t stopped_ms_{0};
  uint32_t duration_s_{DEFAULT_DURATION_S};
  uint32_t last_sample_ms_{0};
  size_t count_{0};

  bool available_() const { return static_cast<bool>(this->samples_) && this->samples_.is_external(); }
  bool time_is_valid_() const;
  uint64_t current_time_ms_() const;
  uint64_t started_time_ms_() const;
  uint64_t ended_time_ms_() const;
  uint32_t elapsed_s_() const;
  uint32_t remaining_s_() const;
  uint32_t sanitize_duration_s_(uint32_t duration_s) const;
  void clear_();
  void capture_sample_();
  const DebugSample *sample_at_(size_t index) const;
};

}  // namespace openquatt_debug_recorder
}  // namespace esphome
