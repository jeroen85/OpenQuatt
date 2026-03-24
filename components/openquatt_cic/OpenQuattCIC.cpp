#include "OpenQuattCIC.h"

#include <algorithm>
#include <cmath>

#include "esphome/core/application.h"
#include "esphome/core/log.h"

namespace esphome {
namespace openquatt_cic {

static const char *const TAG = "openquatt.cic";

static bool deadline_reached(uint32_t now_ms, uint32_t deadline_ms) {
  return static_cast<int32_t>(now_ms - deadline_ms) >= 0;
}

void OpenQuattCIC::setup() {
  this->backoff_ms_ = this->backoff_start_ms_;
  this->next_ms_ = millis() + this->backoff_start_ms_;
  this->response_buffer_.assign(this->response_buffer_size_, 0U);
  this->publish_float_if_changed_(this->backoff_sensor_, this->backoff_start_ms_ / 1000.0f);
  this->publish_float_if_changed_(this->last_success_age_sensor_, NAN);
  this->publish_binary_if_changed_(this->feed_ok_, false);
  this->publish_binary_if_changed_(this->data_stale_, true);
  this->invalidate_feed_signals_();
  this->publish_diagnostics_if_due_(millis(), true);
}

void OpenQuattCIC::update() {
  const uint32_t now_ms = millis();

  if (this->enabled_switch_ == nullptr || !this->enabled_switch_->state) {
    this->handle_disabled_();
    this->publish_diagnostics_if_due_(now_ms, false);
    return;
  }

  this->update_runtime_state_(now_ms);

  if (this->url_text_ == nullptr || this->url_text_->state.size() <= this->min_url_len_) {
    this->publish_diagnostics_if_due_(now_ms, false);
    return;
  }

  if (!deadline_reached(now_ms, this->next_ms_)) {
    this->publish_diagnostics_if_due_(now_ms, false);
    return;
  }

  (void) this->fetch_and_parse_(this->url_text_->state, now_ms);
  this->update_runtime_state_(millis());
  this->publish_diagnostics_if_due_(millis(), false);
}

void OpenQuattCIC::dump_config() {
  ESP_LOGCONFIG(TAG, "OpenQuatt CIC");
  LOG_UPDATE_INTERVAL(this);
  ESP_LOGCONFIG(TAG, "  Timeout: %u ms", this->timeout_ms_);
  ESP_LOGCONFIG(TAG, "  Response buffer size: %u B", static_cast<unsigned>(this->response_buffer_size_));
  ESP_LOGCONFIG(TAG, "  Backoff start/max: %u / %u ms", this->backoff_start_ms_, this->backoff_max_ms_);
  ESP_LOGCONFIG(TAG, "  Stale after: %u ms", this->stale_after_ms_);
  ESP_LOGCONFIG(TAG, "  Feed error trip: %u", this->feed_error_trip_n_);
}

bool OpenQuattCIC::fetch_and_parse_(const std::string &url, uint32_t now_ms) {
  this->request_count_++;

  if (!network::is_connected()) {
    this->last_duration_ms_ = 0;
    this->last_status_code_ = -1;
    this->status_momentary_error("network", 1000);
    this->mark_failure_(now_ms);
    return false;
  }

  esp_http_client_config_t config = {};
  config.url = url.c_str();
  config.method = HTTP_METHOD_GET;
  config.timeout_ms = this->timeout_ms_;
  config.disable_auto_redirect = true;
  config.buffer_size = 512;
  config.buffer_size_tx = 256;

  const uint32_t start_ms = millis();
  esp_http_client_handle_t client = esp_http_client_init(&config);
  if (client == nullptr) {
    this->last_duration_ms_ = millis() - start_ms;
    this->last_status_code_ = -1;
    this->status_momentary_error("http_init", 1000);
    this->mark_failure_(now_ms);
    return false;
  }

  bool ok = false;
  bool client_open = false;

  do {
    esp_err_t err = esp_http_client_open(client, 0);
    if (err != ESP_OK) {
      ESP_LOGW(TAG, "HTTP open failed: %s", esp_err_to_name(err));
      this->status_momentary_error("http_open", 1000);
      break;
    }
    client_open = true;

    App.feed_wdt();
    const int content_length = esp_http_client_fetch_headers(client);
    App.feed_wdt();

    this->last_status_code_ = esp_http_client_get_status_code(client);
    if (this->last_status_code_ != 200) {
      ESP_LOGW(TAG, "CIC HTTP status %d", this->last_status_code_);
      this->status_momentary_error("http_status", 1000);
      break;
    }

    if (content_length > 0 && static_cast<size_t>(content_length) >= this->response_buffer_.size()) {
      ESP_LOGW(TAG, "CIC payload %d exceeds buffer %u", content_length, static_cast<unsigned>(this->response_buffer_.size()));
      this->last_status_code_ = -2;
      this->status_momentary_error("http_size", 1000);
      break;
    }

    size_t total = 0;
    while (total < this->response_buffer_.size()) {
      App.feed_wdt();
      const int read_len = esp_http_client_read(
          client, reinterpret_cast<char *>(this->response_buffer_.data() + total), this->response_buffer_.size() - total);
      App.feed_wdt();

      if (read_len < 0) {
        ESP_LOGW(TAG, "CIC HTTP read failed");
        this->last_status_code_ = -3;
        this->status_momentary_error("http_read", 1000);
        total = 0;
        break;
      }

      if (read_len == 0) {
        break;
      }
      total += static_cast<size_t>(read_len);
    }

    if (total == 0) {
      break;
    }
    if (total == this->response_buffer_.size()) {
      ESP_LOGW(TAG, "CIC payload filled the entire buffer");
      this->last_status_code_ = -4;
      this->status_momentary_error("http_trunc", 1000);
      break;
    }

    ok = this->parse_payload_(this->response_buffer_.data(), total);
    if (!ok) {
      this->status_momentary_error("json_parse", 1000);
    }
  } while (false);

  this->last_duration_ms_ = millis() - start_ms;
  if (this->last_duration_ms_ > this->max_duration_ms_) {
    this->max_duration_ms_ = this->last_duration_ms_;
  }

  if (client_open) {
    esp_http_client_close(client);
  }
  esp_http_client_cleanup(client);

  if (ok) {
    this->mark_success_(now_ms);
  } else {
    this->mark_failure_(now_ms);
  }
  return ok;
}

bool OpenQuattCIC::parse_payload_(const uint8_t *data, size_t len) {
  JsonDocument doc = json::parse_json(data, len);
  if (doc.overflowed() || doc.isNull()) {
    return false;
  }

  JsonObject root = doc.as<JsonObject>();

  auto maybe_publish_float = [&](JsonVariantConst value, float lo, float hi, sensor::Sensor *sensor) {
    if (value.isNull()) {
      return;
    }
    if (!value.is<float>() && !value.is<int>()) {
      return;
    }
    const float x = value.as<float>();
    if (std::isnan(x) || x < lo || x > hi) {
      return;
    }
    this->publish_float_if_changed_(sensor, x);
  };
  auto maybe_publish_bool = [&](JsonVariantConst value, binary_sensor::BinarySensor *binary_sensor) {
    if (value.isNull() || !value.is<bool>()) {
      return;
    }
    this->publish_binary_if_changed_(binary_sensor, value.as<bool>());
  };

  if (root["flowMeter"]) {
    JsonObject flow_meter = root["flowMeter"];
    maybe_publish_float(flow_meter["waterSupplyTemperature"], -20.0f, 90.0f, this->water_supply_temp_);
  }

  if (root["qc"]) {
    JsonObject qc = root["qc"];
    maybe_publish_float(qc["flowRateFiltered"], 0.0f, 5000.0f, this->flow_rate_);
  }

  if (root["thermostat"]) {
    JsonObject thermostat = root["thermostat"];
    maybe_publish_bool(thermostat["otFtChEnabled"], this->cic_ch_enabled_);
    maybe_publish_bool(thermostat["otFtCoolingEnabled"], this->cic_cooling_enabled_);
    maybe_publish_float(thermostat["otFtControlSetpoint"], 5.0f, 80.0f, this->cic_control_setpoint_);
    maybe_publish_float(thermostat["otFtRoomSetpoint"], 5.0f, 35.0f, this->cic_room_setpoint_);
    maybe_publish_float(thermostat["otFtRoomTemperature"], -20.0f, 50.0f, this->cic_room_temp_);
  }

  return true;
}

void OpenQuattCIC::mark_success_(uint32_t now_ms) {
  this->success_count_++;
  this->consecutive_errors_ = 0;
  this->last_success_ms_ = now_ms;
  this->backoff_ms_ = this->backoff_start_ms_;
  this->next_ms_ = now_ms + this->backoff_ms_;
  this->publish_binary_if_changed_(this->feed_ok_, true);
  this->publish_binary_if_changed_(this->data_stale_, false);
  this->publish_float_if_changed_(this->backoff_sensor_, this->backoff_ms_ / 1000.0f);
  this->publish_float_if_changed_(this->last_success_age_sensor_, 0.0f);
}

void OpenQuattCIC::mark_failure_(uint32_t now_ms) {
  this->failure_count_++;
  this->consecutive_errors_++;
  if (this->consecutive_errors_ >= this->feed_error_trip_n_) {
    this->publish_binary_if_changed_(this->feed_ok_, false);
  }

  uint32_t next_backoff_ms = this->backoff_ms_;
  if (next_backoff_ms < this->backoff_max_ms_) {
    next_backoff_ms = std::min(next_backoff_ms * 2U, this->backoff_max_ms_);
  }
  this->backoff_ms_ = next_backoff_ms;
  this->next_ms_ = now_ms + next_backoff_ms;
  this->publish_float_if_changed_(this->backoff_sensor_, next_backoff_ms / 1000.0f);
}

void OpenQuattCIC::update_runtime_state_(uint32_t now_ms) {
  const bool has_success = this->last_success_ms_ != 0;
  const bool stale = !has_success || static_cast<int32_t>(now_ms - this->last_success_ms_) >= static_cast<int32_t>(this->stale_after_ms_);

  if (has_success) {
    this->publish_float_if_changed_(this->last_success_age_sensor_, (now_ms - this->last_success_ms_) / 1000.0f);
  } else {
    this->publish_float_if_changed_(this->last_success_age_sensor_, NAN);
  }

  this->publish_binary_if_changed_(this->data_stale_, stale);
  if (stale) {
    this->invalidate_feed_signals_();
  }
}

void OpenQuattCIC::handle_disabled_() {
  this->publish_binary_if_changed_(this->data_stale_, true);
  this->publish_float_if_changed_(this->last_success_age_sensor_, NAN);
  this->invalidate_feed_signals_();
}

void OpenQuattCIC::invalidate_feed_signals_() {
  this->publish_binary_if_changed_(this->feed_ok_, false);
  this->publish_float_if_changed_(this->water_supply_temp_, NAN);
  this->publish_float_if_changed_(this->flow_rate_, NAN);
  this->publish_float_if_changed_(this->cic_control_setpoint_, NAN);
  this->publish_float_if_changed_(this->cic_room_setpoint_, NAN);
  this->publish_float_if_changed_(this->cic_room_temp_, NAN);
  this->publish_binary_if_changed_(this->cic_ch_enabled_, false);
  this->publish_binary_if_changed_(this->cic_cooling_enabled_, false);
}

void OpenQuattCIC::publish_diagnostics_if_due_(uint32_t now_ms, bool force) {
  if (!force && this->diagnostic_publish_interval_ms_ > 0 &&
      !deadline_reached(now_ms, this->last_diag_publish_ms_ + this->diagnostic_publish_interval_ms_)) {
    return;
  }
  this->last_diag_publish_ms_ = now_ms;
  this->publish_float_if_changed_(this->request_count_sensor_, static_cast<float>(this->request_count_));
  this->publish_float_if_changed_(this->success_count_sensor_, static_cast<float>(this->success_count_));
  this->publish_float_if_changed_(this->failure_count_sensor_, static_cast<float>(this->failure_count_));
  this->publish_float_if_changed_(this->last_duration_sensor_, static_cast<float>(this->last_duration_ms_));
  this->publish_float_if_changed_(this->max_duration_sensor_, static_cast<float>(this->max_duration_ms_));
  this->publish_float_if_changed_(this->last_status_code_sensor_, static_cast<float>(this->last_status_code_));
}

void OpenQuattCIC::publish_float_if_changed_(sensor::Sensor *sensor, float value) {
  if (sensor == nullptr) {
    return;
  }
  const float current = sensor->state;
  const bool current_nan = std::isnan(current);
  const bool value_nan = std::isnan(value);
  if (current_nan != value_nan || (!value_nan && std::fabs(current - value) > 0.001f)) {
    sensor->publish_state(value);
  }
}

void OpenQuattCIC::publish_binary_if_changed_(binary_sensor::BinarySensor *binary_sensor, bool value) {
  if (binary_sensor == nullptr) {
    return;
  }
  if (binary_sensor->state != value) {
    binary_sensor->publish_state(value);
  }
}

}  // namespace openquatt_cic
}  // namespace esphome
