/*
OpenTherm.cpp - OpenTherm Communication Library For Arduino, ESP8266
Copyright 2018, Ihor Melnyk
*/

#include "OpenTherm.h"
#include "esphome/core/log.h"
#include "esp_err.h"
#include "esp_private/esp_clk.h"
#include "esp_rom_sys.h"
#include "hal/gpio_ll.h"
static const char * TAG = "OpenThermV2";
using namespace esphome;

namespace {
uint32_t IRAM_ATTR now_cycles() {
	return static_cast<uint32_t>(esp_cpu_get_cycle_count());
}

bool read_bit(unsigned long value, int index) {
	return ((value >> index) & 0x1U) != 0;
}

static constexpr uint32_t OT_ISR_GLITCH_REJECT_US = 120;
static constexpr uint32_t OT_START_QUIET_US = 1500;
static constexpr uint32_t OT_HALF_BIT_MIN_US = 250;
static constexpr uint32_t OT_HALF_BIT_MAX_US = 700;
static constexpr uint32_t OT_FULL_BIT_MIN_US = 750;
static constexpr uint32_t OT_FULL_BIT_MAX_US = 1250;
}  // namespace

static constexpr uint32_t OT_TX_RESOLUTION_HZ = 1000000;
static constexpr uint32_t OT_RX_RESOLUTION_HZ = 1000000;
static constexpr uint16_t OT_HALF_BIT_US = 500;
static constexpr uint32_t OT_RMT_CLK_FREQ_HZ = 80000000;
static constexpr uint32_t OT_RMT_GLITCH_REJECT_US = 180;
static constexpr uint32_t OT_RMT_HALF_BIT_MIN_US = 380;
static constexpr uint32_t OT_RMT_HALF_BIT_MAX_US = 620;
static constexpr uint32_t OT_RMT_FULL_BIT_MIN_US = 880;
static constexpr uint32_t OT_RMT_FULL_BIT_MAX_US = 1120;
static constexpr uint32_t OT_RX_SIGNAL_MAX_US = 2500;
static constexpr uint32_t OT_RESYNC_COOLDOWN_SHORT_US = 750;
static constexpr uint32_t OT_RESYNC_COOLDOWN_MEDIUM_US = 1500;
static constexpr uint32_t OT_RESYNC_COOLDOWN_LONG_US = 2500;
static constexpr uint32_t OT_RESYNC_COOLDOWN_MAX_US = 4000;
static constexpr uint32_t OT_FRAME_DELAY_US = 100000;

OpenTherm::OpenTherm(int inPin, int outPin, bool isSlave):
	status(OpenThermStatus::NOT_INITIALIZED),
	inPin(inPin),
	outPin(outPin),
	isSlave(isSlave),
	response(0),
	responseStatus(OpenThermResponseStatus::NONE),
	responseTimestamp(0),
	handleInterruptCallback(NULL),
	processResponseCallback(NULL),
	pCallbackUser(NULL)
{
}

void OpenTherm::begin(void(*handleInterruptCallback)(void), void(*processResponseCallback)(unsigned long, OpenThermResponseStatus, void *), void *pCallbackUser)
{
	gpio_config_t input_config{};
	input_config.pin_bit_mask = 1ULL << inPin;
	input_config.mode = GPIO_MODE_INPUT;
	input_config.pull_up_en = GPIO_PULLUP_DISABLE;
	input_config.pull_down_en = GPIO_PULLDOWN_DISABLE;
	input_config.intr_type = GPIO_INTR_DISABLE;
	ESP_ERROR_CHECK(gpio_config(&input_config));

	gpio_config_t output_config{};
	output_config.pin_bit_mask = 1ULL << outPin;
	output_config.mode = GPIO_MODE_OUTPUT;
	output_config.pull_up_en = GPIO_PULLUP_DISABLE;
	output_config.pull_down_en = GPIO_PULLDOWN_DISABLE;
	output_config.intr_type = GPIO_INTR_DISABLE;
	ESP_ERROR_CHECK(gpio_config(&output_config));

	const bool wants_rx = handleInterruptCallback != NULL;
	if (wants_rx) {
		this->handleInterruptCallback = handleInterruptCallback;
		this->pCallbackUser=pCallbackUser;
	}
	activateBoiler();
	status = OpenThermStatus::READY;
	cycles_per_us_ = static_cast<uint32_t>(esp_clk_cpu_freq() / 1000000ULL);
	if (cycles_per_us_ == 0) {
		cycles_per_us_ = 240;
	}
	reset_receive_state_();
	responseTimestamp = now_cycles();
	this->processResponseCallback = processResponseCallback;
	init_rx_glitch_filter_();
	if (wants_rx && !init_rx_channel_()) {
		esp_err_t err = gpio_set_intr_type(static_cast<gpio_num_t>(inPin), GPIO_INTR_ANYEDGE);
		if (err != ESP_OK) {
			ESP_LOGE(TAG, "Failed to set GPIO%d interrupt type: %s", inPin, esp_err_to_name(err));
		}
		err = gpio_install_isr_service(ESP_INTR_FLAG_IRAM);
		if (err != ESP_OK && err != ESP_ERR_INVALID_STATE) {
			ESP_LOGE(TAG, "Failed to install ISR service: %s", esp_err_to_name(err));
		}
		err = gpio_isr_handler_add(static_cast<gpio_num_t>(inPin), gpio_isr_handler, this);
		if (err != ESP_OK) {
			ESP_LOGE(TAG, "Failed to add ISR handler for GPIO%d: %s", inPin, esp_err_to_name(err));
		} else {
			isr_registered_ = true;
			ESP_LOGW(TAG, "Falling back to GPIO ISR RX on GPIO%d", inPin);
		}
	}
	if (!init_tx_channel_()) {
		ESP_LOGW(TAG, "Falling back to blocking TX on GPIO%d", outPin);
	}
}

void OpenTherm::begin(void(*handleInterruptCallback)(void))
{
	begin(handleInterruptCallback, NULL, NULL);
}

bool IRAM_ATTR OpenTherm::isReady()
{
	return status == OpenThermStatus::READY;
}

int IRAM_ATTR OpenTherm::readState() {
	return gpio_ll_get_level(&GPIO, static_cast<uint32_t>(inPin));
}

void OpenTherm::setActiveState() {
	gpio_set_level(static_cast<gpio_num_t>(outPin), 0);
}

void OpenTherm::setIdleState() {
	gpio_set_level(static_cast<gpio_num_t>(outPin), 1);
}

void OpenTherm::activateBoiler() {
	setIdleState();
	// As an OT slave we should not block the main loop for a full second when the
	// runtime starts; that can make the thermostat report a temporary comms loss.
	if (!isSlave) {
		vTaskDelay(pdMS_TO_TICKS(1000));
	}
}

void OpenTherm::reset_receive_state_() {
	portENTER_CRITICAL(&mux_);
	edge_head_ = 0;
	edge_tail_ = 0;
	rx_frame_head_ = 0;
	rx_frame_tail_ = 0;
	edge_overflow_ = false;
	last_edge_ts_ = 0;
	portEXIT_CRITICAL(&mux_);
	response = 0;
	responseStatus = OpenThermResponseStatus::NONE;
	responseBitIndex = 0;
	lastInterruptTs = 0;
	last_processed_edge_ts_ = 0;
	last_driver_error_ = OpenThermDriverError::DRIVER_ERROR_NONE;
	start_accept_not_before_ts_ = 0;
	delay_until_ts_ = 0;
	invalid_requires_cooldown_ = false;
	consecutive_bad_start_count_ = 0;
	ignored_cooldown_count_ = 0;
	ignored_quiet_gap_count_ = 0;
}

void OpenTherm::note_driver_error_(OpenThermDriverError error) {
	last_driver_error_ = error;
	if (error == OpenThermDriverError::DRIVER_ERROR_START_BIT_INVALID ||
	    error == OpenThermDriverError::DRIVER_ERROR_TIMING_INVALID) {
		decode_reset_count_++;
	}
}

void OpenTherm::note_bad_start_() {
	consecutive_bad_start_count_++;
	if (consecutive_bad_start_count_ > max_consecutive_bad_start_count_) {
		max_consecutive_bad_start_count_ = consecutive_bad_start_count_;
	}
}

void OpenTherm::reset_bad_start_streak_() {
	consecutive_bad_start_count_ = 0;
}

uint32_t OpenTherm::current_resync_cooldown_us_() const {
	if (consecutive_bad_start_count_ >= 4) {
		return OT_RESYNC_COOLDOWN_MAX_US;
	}
	if (consecutive_bad_start_count_ == 3) {
		return OT_RESYNC_COOLDOWN_LONG_US;
	}
	if (consecutive_bad_start_count_ == 2) {
		return OT_RESYNC_COOLDOWN_MEDIUM_US;
	}
	return OT_RESYNC_COOLDOWN_SHORT_US;
}

void OpenTherm::arm_resync_cooldown_(uint32_t timestamp) {
	start_accept_not_before_ts_ = timestamp + (current_resync_cooldown_us_() * cycles_per_us_);
	resync_count_++;
}

void OpenTherm::reject_tentative_start_(OpenThermDriverError error, uint32_t timestamp) {
	note_driver_error_(error);
	note_bad_start_();
	response = 0;
	responseBitIndex = 0;
	responseTimestamp = timestamp;
	invalid_requires_cooldown_ = false;
	delay_until_ts_ = 0;
	if (isSlave) {
		status = OpenThermStatus::READY;
	} else {
		status = OpenThermStatus::RESPONSE_WAITING;
	}
}

void OpenTherm::fail_frame_(OpenThermDriverError error, uint32_t timestamp) {
	note_driver_error_(error);
	note_bad_start_();
	invalid_requires_cooldown_ = consecutive_bad_start_count_ >= 3;
	if (invalid_requires_cooldown_) {
		arm_resync_cooldown_(timestamp);
	} else {
		start_accept_not_before_ts_ = 0;
		delay_until_ts_ = 0;
	}
	response = 0;
	responseBitIndex = 0;
	responseTimestamp = timestamp;
	status = OpenThermStatus::RESPONSE_INVALID;
	if (invalid_requires_cooldown_) {
		delay_until_ts_ = start_accept_not_before_ts_;
	}
}

bool OpenTherm::init_tx_channel_() {
	if (tx_rmt_ready_) {
		return true;
	}

	rmt_tx_channel_config_t tx_config{};
	tx_config.gpio_num = static_cast<gpio_num_t>(outPin);
	tx_config.clk_src = RMT_CLK_SRC_DEFAULT;
	tx_config.resolution_hz = OT_TX_RESOLUTION_HZ;
	tx_config.mem_block_symbols = 64;
	tx_config.trans_queue_depth = 2;
	tx_config.intr_priority = 0;
	tx_config.flags.invert_out = false;
	tx_config.flags.with_dma = false;
	tx_config.flags.io_loop_back = false;
	tx_config.flags.io_od_mode = false;
	tx_config.flags.allow_pd = false;
	tx_config.flags.init_level = 1;

	esp_err_t err = rmt_new_tx_channel(&tx_config, &tx_channel_);
	if (err != ESP_OK) {
		ESP_LOGW(TAG, "Failed to create TX channel on GPIO%d: %s", outPin, esp_err_to_name(err));
		tx_channel_ = nullptr;
		return false;
	}

	rmt_copy_encoder_config_t encoder_config{};
	err = rmt_new_copy_encoder(&encoder_config, &tx_encoder_);
	if (err != ESP_OK) {
		ESP_LOGW(TAG, "Failed to create TX encoder: %s", esp_err_to_name(err));
		rmt_del_channel(tx_channel_);
		tx_channel_ = nullptr;
		return false;
	}

	rmt_tx_event_callbacks_t callbacks{};
	callbacks.on_trans_done = tx_done_callback_;
	err = rmt_tx_register_event_callbacks(tx_channel_, &callbacks, this);
	if (err != ESP_OK) {
		ESP_LOGW(TAG, "Failed to register TX callbacks: %s", esp_err_to_name(err));
		rmt_del_encoder(tx_encoder_);
		tx_encoder_ = nullptr;
		rmt_del_channel(tx_channel_);
		tx_channel_ = nullptr;
		return false;
	}

	err = rmt_enable(tx_channel_);
	if (err != ESP_OK) {
		ESP_LOGW(TAG, "Failed to enable TX channel: %s", esp_err_to_name(err));
		rmt_del_encoder(tx_encoder_);
		tx_encoder_ = nullptr;
		rmt_del_channel(tx_channel_);
		tx_channel_ = nullptr;
		return false;
	}

	tx_complete_ = false;
	tx_in_progress_ = false;
	tx_rmt_ready_ = true;
	return true;
}

bool OpenTherm::init_rx_glitch_filter_() {
	if (rx_glitch_filter_ != nullptr) {
		return true;
	}

	gpio_pin_glitch_filter_config_t config{};
	config.clk_src = GLITCH_FILTER_CLK_SRC_DEFAULT;
	config.gpio_num = static_cast<gpio_num_t>(inPin);

	esp_err_t err = gpio_new_pin_glitch_filter(&config, &rx_glitch_filter_);
	if (err != ESP_OK) {
		ESP_LOGW(TAG, "Failed to create RX pin glitch filter on GPIO%d: %s", inPin, esp_err_to_name(err));
		rx_glitch_filter_ = nullptr;
		return false;
	}

	err = gpio_glitch_filter_enable(rx_glitch_filter_);
	if (err != ESP_OK) {
		ESP_LOGW(TAG, "Failed to enable RX pin glitch filter on GPIO%d: %s", inPin, esp_err_to_name(err));
		gpio_del_glitch_filter(rx_glitch_filter_);
		rx_glitch_filter_ = nullptr;
		return false;
	}

	ESP_LOGI(TAG, "Enabled RX pin glitch filter on GPIO%d", inPin);
	return true;
}

void OpenTherm::deinit_rx_glitch_filter_() {
	if (rx_glitch_filter_ == nullptr) {
		return;
	}
	gpio_glitch_filter_disable(rx_glitch_filter_);
	gpio_del_glitch_filter(rx_glitch_filter_);
	rx_glitch_filter_ = nullptr;
}

bool OpenTherm::init_rx_channel_() {
	if (rx_rmt_ready_) {
		return true;
	}

	rmt_rx_channel_config_t rx_config{};
	rx_config.gpio_num = static_cast<gpio_num_t>(inPin);
	rx_config.clk_src = RMT_CLK_SRC_DEFAULT;
	rx_config.resolution_hz = OT_RX_RESOLUTION_HZ;
	rx_config.mem_block_symbols = RX_CAPTURE_SYMBOLS;
	rx_config.intr_priority = 0;
	rx_config.flags.invert_in = false;
	rx_config.flags.with_dma = false;
	rx_config.flags.io_loop_back = false;
	rx_config.flags.allow_pd = false;

	esp_err_t err = rmt_new_rx_channel(&rx_config, &rx_channel_);
	if (err != ESP_OK) {
		ESP_LOGW(TAG, "Failed to create RX channel on GPIO%d: %s", inPin, esp_err_to_name(err));
		rx_channel_ = nullptr;
		return false;
	}

	rmt_rx_event_callbacks_t callbacks{};
	callbacks.on_recv_done = rx_done_callback_;
	err = rmt_rx_register_event_callbacks(rx_channel_, &callbacks, this);
	if (err != ESP_OK) {
		ESP_LOGW(TAG, "Failed to register RX callbacks: %s", esp_err_to_name(err));
		rmt_del_channel(rx_channel_);
		rx_channel_ = nullptr;
		return false;
	}

	err = rmt_enable(rx_channel_);
	if (err != ESP_OK) {
		ESP_LOGW(TAG, "Failed to enable RX channel: %s", esp_err_to_name(err));
		rmt_del_channel(rx_channel_);
		rx_channel_ = nullptr;
		return false;
	}

	rx_rmt_ready_ = true;
	if (!arm_rmt_receive_()) {
		ESP_LOGW(TAG, "Failed to start initial RMT RX receive");
		deinit_rx_channel_();
		return false;
	}

	ESP_LOGI(TAG, "Enabled RMT RX capture on GPIO%d", inPin);
	return true;
}

void OpenTherm::deinit_rx_channel_() {
	if (rx_channel_ == nullptr) {
		rx_rmt_ready_ = false;
		return;
	}
	rmt_disable(rx_channel_);
	rmt_del_channel(rx_channel_);
	rx_channel_ = nullptr;
	rx_rmt_ready_ = false;
}

bool IRAM_ATTR OpenTherm::queue_edge_(uint32_t timestamp, int state) {
	portENTER_CRITICAL_ISR(&mux_);
	const uint8_t next_head = static_cast<uint8_t>((edge_head_ + 1U) % EDGE_QUEUE_SIZE);
	if (next_head == edge_tail_) {
		edge_overflow_ = true;
		edge_overflow_count_++;
		last_driver_error_ = OpenThermDriverError::DRIVER_ERROR_EDGE_OVERFLOW;
		portEXIT_CRITICAL_ISR(&mux_);
		return false;
	}
	edge_queue_[edge_head_].timestamp = timestamp;
	edge_queue_[edge_head_].level = static_cast<uint8_t>(state != 0);
	edge_head_ = next_head;
	portEXIT_CRITICAL_ISR(&mux_);
	return true;
}

bool IRAM_ATTR OpenTherm::queue_rx_frame_(const rmt_symbol_word_t *symbols, size_t num_symbols, uint32_t done_ts_cycles) {
	if (symbols == nullptr || num_symbols == 0) {
		return true;
	}
	if (num_symbols > RX_CAPTURE_SYMBOLS) {
		num_symbols = RX_CAPTURE_SYMBOLS;
	}

	portENTER_CRITICAL_ISR(&mux_);
	const uint8_t next_head = static_cast<uint8_t>((rx_frame_head_ + 1U) % RX_FRAME_QUEUE_SIZE);
	if (next_head == rx_frame_tail_) {
		edge_overflow_ = true;
		edge_overflow_count_++;
		last_driver_error_ = OpenThermDriverError::DRIVER_ERROR_EDGE_OVERFLOW;
		portEXIT_CRITICAL_ISR(&mux_);
		return false;
	}
	RxFrame &frame = rx_frame_queue_[rx_frame_head_];
	frame.done_ts_cycles = done_ts_cycles;
	frame.symbol_count = static_cast<uint8_t>(num_symbols);
	for (size_t i = 0; i < num_symbols; ++i) {
		frame.symbols[i] = symbols[i];
	}
	rx_frame_head_ = next_head;
	portEXIT_CRITICAL_ISR(&mux_);
	return true;
}

bool OpenTherm::pop_rx_frame_(RxFrame &frame) {
	bool has_frame = false;
	portENTER_CRITICAL(&mux_);
	if (rx_frame_tail_ != rx_frame_head_) {
		frame = rx_frame_queue_[rx_frame_tail_];
		rx_frame_tail_ = static_cast<uint8_t>((rx_frame_tail_ + 1U) % RX_FRAME_QUEUE_SIZE);
		has_frame = true;
	}
	portEXIT_CRITICAL(&mux_);
	return has_frame;
}

bool IRAM_ATTR OpenTherm::ingest_rmt_symbols_(const rmt_symbol_word_t *symbols, size_t num_symbols, uint32_t done_ts_cycles) {
	if (symbols == nullptr || num_symbols == 0) {
		return true;
	}

	uint32_t total_us = 0;
	for (size_t i = 0; i < num_symbols; ++i) {
		total_us += symbols[i].duration0;
		total_us += symbols[i].duration1;
	}
	uint32_t current_ts = done_ts_cycles - (total_us * cycles_per_us_);
	bool have_level = false;
	int previous_level = 1;

	for (size_t i = 0; i < num_symbols; ++i) {
		const uint32_t durations[2] = {symbols[i].duration0, symbols[i].duration1};
		const int levels[2] = {static_cast<int>(symbols[i].level0), static_cast<int>(symbols[i].level1)};
		for (int part = 0; part < 2; ++part) {
			if (durations[part] == 0) {
				continue;
			}
			const int level = levels[part];
			if (!have_level || level != previous_level) {
				if (!queue_edge_(current_ts, level)) {
					return false;
				}
				have_level = true;
				previous_level = level;
			}
			current_ts += durations[part] * cycles_per_us_;
		}
	}
	return true;
}

bool OpenTherm::decode_rmt_frame_(const RxFrame &frame, unsigned long &decoded_frame, OpenThermDriverError &error) {
	static constexpr size_t OT_FRAME_BITS = 34;
	static constexpr size_t OT_HALF_BITS = OT_FRAME_BITS * 2;
	uint8_t half_bits[OT_HALF_BITS]{};
	uint8_t inverted_shifted_forward[OT_HALF_BITS]{};
	size_t half_bit_count = 0;
	rmt_last_symbol_count_ = frame.symbol_count;
	rmt_last_half_bit_count_ = 0;
	rmt_last_bad_duration_us_ = 0;

	for (size_t i = 0; i < frame.symbol_count; ++i) {
		const uint32_t durations[2] = {frame.symbols[i].duration0, frame.symbols[i].duration1};
		const uint8_t levels[2] = {static_cast<uint8_t>(frame.symbols[i].level0), static_cast<uint8_t>(frame.symbols[i].level1)};
		for (int part = 0; part < 2; ++part) {
			const uint32_t duration = durations[part];
			if (duration == 0) {
				continue;
			}

			uint8_t repeats = 0;
			if (duration >= OT_RMT_HALF_BIT_MIN_US && duration <= OT_RMT_HALF_BIT_MAX_US) {
				repeats = 1;
			} else if (duration >= OT_RMT_FULL_BIT_MIN_US && duration <= OT_RMT_FULL_BIT_MAX_US) {
				repeats = 2;
			} else if (duration < OT_RMT_HALF_BIT_MIN_US) {
				rmt_short_duration_count_++;
				rmt_last_bad_duration_us_ = duration;
				rmt_last_half_bit_count_ = half_bit_count;
				error = OpenThermDriverError::DRIVER_ERROR_GLITCH_REJECT;
				return false;
			} else {
				rmt_long_duration_count_++;
				rmt_last_bad_duration_us_ = duration;
				rmt_last_half_bit_count_ = half_bit_count;
				error = OpenThermDriverError::DRIVER_ERROR_TIMING_INVALID;
				return false;
			}

			if (half_bit_count + repeats > OT_HALF_BITS) {
				rmt_frame_size_mismatch_count_++;
				rmt_last_half_bit_count_ = half_bit_count;
				error = OpenThermDriverError::DRIVER_ERROR_TIMING_INVALID;
				return false;
			}

			for (uint8_t repeat = 0; repeat < repeats; ++repeat) {
				half_bits[half_bit_count++] = levels[part];
			}
		}
	}
	rmt_last_half_bit_count_ = half_bit_count;

	// RMT captures can be short by exactly one half-bit at the frame boundary.
	// In practice we see either the leading low half of the start bit or the
	// trailing high half of the stop bit dropped when the receiver arms/tears
	// down around the idle gap. Salvage those two specific 67-half-bit cases.
	if (half_bit_count == (OT_HALF_BITS - 1U) && half_bit_count > 0) {
		if (half_bits[0] == 1) {
			for (size_t i = half_bit_count; i > 0; --i) {
				half_bits[i] = half_bits[i - 1U];
			}
			half_bits[0] = 0;
			half_bit_count++;
			rmt_last_half_bit_count_ = half_bit_count;
		} else if (half_bits[half_bit_count - 1U] == 0) {
			half_bits[half_bit_count++] = 1;
			rmt_last_half_bit_count_ = half_bit_count;
		}
	}

	if (half_bit_count != OT_HALF_BITS) {
		rmt_frame_size_mismatch_count_++;
		error = OpenThermDriverError::DRIVER_ERROR_TIMING_INVALID;
		return false;
	}

	auto try_decode_pairs = [&](const uint8_t *bits, unsigned long &frame_out, OpenThermDriverError &err) -> bool {
		frame_out = 0;
		for (size_t bit_index = 0; bit_index < OT_FRAME_BITS; ++bit_index) {
			const uint8_t first = bits[bit_index * 2U];
			const uint8_t second = bits[(bit_index * 2U) + 1U];
			bool bit_value = false;
			if (first == 0 && second == 1) {
				bit_value = true;
			} else if (first == 1 && second == 0) {
				bit_value = false;
			} else {
				err = (bit_index == 0) ? OpenThermDriverError::DRIVER_ERROR_START_BIT_INVALID
				                       : OpenThermDriverError::DRIVER_ERROR_TIMING_INVALID;
				return false;
			}

			if (bit_index == 0 || bit_index == (OT_FRAME_BITS - 1U)) {
				if (!bit_value) {
					err = (bit_index == 0) ? OpenThermDriverError::DRIVER_ERROR_START_BIT_INVALID
					                       : OpenThermDriverError::DRIVER_ERROR_TIMING_INVALID;
					return false;
				}
				continue;
			}

			frame_out = (frame_out << 1U) | static_cast<unsigned long>(bit_value);
		}
		err = OpenThermDriverError::DRIVER_ERROR_NONE;
		return true;
	};

	uint8_t shifted_forward[OT_HALF_BITS]{};
	for (size_t i = 0; i < (OT_HALF_BITS - 1U); ++i) {
		shifted_forward[i] = half_bits[i + 1U];
	}
	shifted_forward[OT_HALF_BITS - 1U] = shifted_forward[OT_HALF_BITS - 2U] ^ 0x1U;
	for (size_t i = 0; i < OT_HALF_BITS; ++i) {
		inverted_shifted_forward[i] = shifted_forward[i] ^ 0x1U;
	}

	// Long-run telemetry showed that all successful RMT frames consistently decode
	// through the inverted, one-half-bit-forward interpretation. Keep only that
	// explicit path now that the search phase is complete.
	OpenThermDriverError candidate_error = OpenThermDriverError::DRIVER_ERROR_NONE;
	if (try_decode_pairs(inverted_shifted_forward, decoded_frame, candidate_error)) {
		error = candidate_error;
		return true;
	}

	rmt_bad_pair_count_++;
	error = candidate_error;
	return false;
}

void OpenTherm::process_rmt_frame_(const RxFrame &frame) {
	if (frame.symbol_count == 0) {
		return;
	}
	lastInterruptTs = frame.done_ts_cycles;
	unsigned long decoded_frame = 0;
	OpenThermDriverError error = OpenThermDriverError::DRIVER_ERROR_NONE;
	if (!decode_rmt_frame_(frame, decoded_frame, error)) {
		last_driver_error_ = error;
		response = 0;
		responseTimestamp = frame.done_ts_cycles;
		responseStatus = OpenThermResponseStatus::INVALID;
		invalid_requires_cooldown_ = false;
		if (error == OpenThermDriverError::DRIVER_ERROR_GLITCH_REJECT) {
			glitch_reject_count_++;
			return;
		}
		if (error == OpenThermDriverError::DRIVER_ERROR_START_BIT_INVALID) {
			ignored_start_count_++;
			ignored_quiet_gap_count_++;
			return;
		}
		decode_reset_count_++;
		status = OpenThermStatus::RESPONSE_INVALID;
		return;
	}

	last_driver_error_ = OpenThermDriverError::DRIVER_ERROR_NONE;
	response = decoded_frame;
	responseTimestamp = frame.done_ts_cycles;
	responseBitIndex = 32;
	status = OpenThermStatus::RESPONSE_READY;
	responseStatus = OpenThermResponseStatus::NONE;
	invalid_requires_cooldown_ = false;
	reset_bad_start_streak_();
}

bool IRAM_ATTR OpenTherm::arm_rmt_receive_() {
	if (!rx_rmt_ready_ || rx_channel_ == nullptr) {
		return false;
	}

	rmt_receive_config_t rx_receive_config{};
	// ESP-IDF/ESPHome caps the hardware min-range filter to a very small value.
	// Larger values make rmt_receive() fail on ESP32-S3, so keep hardware filtering
	// minimal here and classify OT glitches in the duration decoder instead.
	const uint32_t hw_filter_max_ns = 255U * 1000U / (OT_RMT_CLK_FREQ_HZ / 1000000U);
	rx_receive_config.signal_range_min_ns = hw_filter_max_ns;
	rx_receive_config.signal_range_max_ns = OT_RX_SIGNAL_MAX_US * 1000U;
	rx_receive_config.flags.en_partial_rx = false;
	return rmt_receive(rx_channel_, rx_symbols_, sizeof(rx_symbols_), &rx_receive_config) == ESP_OK;
}

bool IRAM_ATTR OpenTherm::rx_done_callback_(rmt_channel_handle_t, const rmt_rx_done_event_data_t *edata, void *user_ctx) {
	auto *instance = static_cast<OpenTherm *>(user_ctx);
	if (instance == nullptr || edata == nullptr) {
		return false;
	}
	instance->queue_rx_frame_(edata->received_symbols, edata->num_symbols, now_cycles());
	instance->arm_rmt_receive_();
	return false;
}

bool IRAM_ATTR OpenTherm::tx_done_callback_(rmt_channel_handle_t, const rmt_tx_done_event_data_t *, void *user_ctx) {
	auto *instance = static_cast<OpenTherm *>(user_ctx);
	if (instance != nullptr) {
		instance->tx_complete_ = true;
	}
	return false;
}

bool OpenTherm::queue_frame_tx_(unsigned long frame) {
	if (!tx_rmt_ready_ || tx_channel_ == nullptr || tx_encoder_ == nullptr) {
		tx_rmt_unavailable_count_++;
		last_driver_error_ = OpenThermDriverError::DRIVER_ERROR_TX_UNAVAILABLE;
		return false;
	}

	tx_symbols_[0] = {
		.duration0 = OT_HALF_BIT_US,
		.level0 = 0,
		.duration1 = OT_HALF_BIT_US,
		.level1 = 1,
	};

	for (int i = 31; i >= 0; i--) {
		const bool bit = read_bit(frame, i);
		const size_t symbol_index = 1U + static_cast<size_t>(31 - i);
		tx_symbols_[symbol_index] = bit
			? rmt_symbol_word_t{.duration0 = OT_HALF_BIT_US, .level0 = 0, .duration1 = OT_HALF_BIT_US, .level1 = 1}
			: rmt_symbol_word_t{.duration0 = OT_HALF_BIT_US, .level0 = 1, .duration1 = OT_HALF_BIT_US, .level1 = 0};
	}

	tx_symbols_[33] = {
		.duration0 = OT_HALF_BIT_US,
		.level0 = 0,
		.duration1 = OT_HALF_BIT_US,
		.level1 = 1,
	};

	rmt_transmit_config_t tx_config{};
	tx_config.loop_count = 0;
	tx_config.flags.eot_level = 1;
	tx_config.flags.queue_nonblocking = 1;

	tx_complete_ = false;
	tx_in_progress_ = true;
	const esp_err_t err = rmt_transmit(tx_channel_, tx_encoder_, tx_symbols_, sizeof(tx_symbols_), &tx_config);
	if (err != ESP_OK) {
		tx_in_progress_ = false;
		tx_complete_ = false;
		tx_queue_fail_count_++;
		last_driver_error_ = OpenThermDriverError::DRIVER_ERROR_TX_QUEUE_FAILED;
		ESP_LOGW(TAG, "Failed to queue TX frame: %s", esp_err_to_name(err));
		return false;
	}
	return true;
}

void OpenTherm::sendBit(bool high) {
	if (high) setActiveState(); else setIdleState();
	esp_rom_delay_us(500);
	if (high) setIdleState(); else setActiveState();
	esp_rom_delay_us(500);
}

bool OpenTherm::sendRequestAsync(unsigned long request)
{
	if (!isReady())
		return false;

	status = OpenThermStatus::REQUEST_SENDING;
	response = 0;
	responseStatus = OpenThermResponseStatus::NONE;

	sendBit(true); //start bit
	for (int i = 31; i >= 0; i--) {
		sendBit(read_bit(request, i));
	}
	sendBit(true); //stop bit
	setIdleState();

	status = OpenThermStatus::RESPONSE_WAITING;
	responseTimestamp = now_cycles();
	return true;
}

unsigned long OpenTherm::sendRequest(unsigned long request)
{
	while (!isReady()) {
		process();
		vTaskDelay(1);
	}
	if (!sendRequestAsync(request)) {
		return 0;
	}
	while (!isReady()) {
		process();
		vTaskDelay(1);
	}

	return response;
}

bool OpenTherm::sendResponse(unsigned long request)
{
	status = OpenThermStatus::REQUEST_SENDING;
	response = 0;
	responseStatus = OpenThermResponseStatus::NONE;
	if (queue_frame_tx_(request)) {
		responseTimestamp = now_cycles();
		return true;
	}
	status = OpenThermStatus::READY;
	responseTimestamp = now_cycles();
	return false;
}

unsigned long OpenTherm::getLastResponse()
{
	return response;
}

OpenThermResponseStatus OpenTherm::getLastResponseStatus()
{
	return responseStatus;
}

OpenThermDriverError OpenTherm::getLastDriverError() const
{
	return last_driver_error_;
}

const char *OpenTherm::getLastDriverErrorString() const
{
	switch (last_driver_error_) {
		case OpenThermDriverError::DRIVER_ERROR_NONE:
			return "none";
		case OpenThermDriverError::DRIVER_ERROR_GLITCH_REJECT:
			return "glitch_reject";
		case OpenThermDriverError::DRIVER_ERROR_EDGE_OVERFLOW:
			return "edge_overflow";
		case OpenThermDriverError::DRIVER_ERROR_START_BIT_INVALID:
			return "start_bit_invalid";
			case OpenThermDriverError::DRIVER_ERROR_TIMING_INVALID:
				return "timing_invalid";
			case OpenThermDriverError::DRIVER_ERROR_TX_UNAVAILABLE:
				return "tx_unavailable";
			case OpenThermDriverError::DRIVER_ERROR_TX_QUEUE_FAILED:
				return "tx_queue_failed";
			default:
				return "unknown";
		}
}

const char *OpenTherm::getRxBackendString() const
{
	return rx_rmt_ready_ ? "rmt" : "gpio_isr";
}

uint32_t OpenTherm::getGlitchRejectCount() const
{
	return glitch_reject_count_;
}

uint32_t OpenTherm::getEdgeOverflowCount() const
{
	return edge_overflow_count_;
}

uint32_t OpenTherm::getDecodeResetCount() const
{
	return decode_reset_count_;
}

uint32_t OpenTherm::getIgnoredStartCount() const
{
	return ignored_start_count_;
}

uint32_t OpenTherm::getIgnoredCooldownCount() const
{
	return ignored_cooldown_count_;
}

uint32_t OpenTherm::getIgnoredQuietGapCount() const
{
	return ignored_quiet_gap_count_;
}

uint32_t OpenTherm::getResyncCount() const
{
	return resync_count_;
}

uint32_t OpenTherm::getMaxConsecutiveBadStartCount() const
{
	return max_consecutive_bad_start_count_;
}

uint32_t OpenTherm::getRmtShortDurationCount() const
{
	return rmt_short_duration_count_;
}

uint32_t OpenTherm::getRmtLongDurationCount() const
{
	return rmt_long_duration_count_;
}

uint32_t OpenTherm::getRmtBadPairCount() const
{
	return rmt_bad_pair_count_;
}

uint32_t OpenTherm::getRmtFrameSizeMismatchCount() const
{
	return rmt_frame_size_mismatch_count_;
}

uint32_t OpenTherm::getRmtLastSymbolCount() const
{
	return rmt_last_symbol_count_;
}

uint32_t OpenTherm::getRmtLastHalfBitCount() const
{
	return rmt_last_half_bit_count_;
}

uint32_t OpenTherm::getRmtLastBadDurationUs() const
{
	return rmt_last_bad_duration_us_;
}

uint32_t OpenTherm::getTxRmtUnavailableCount() const
{
	return tx_rmt_unavailable_count_;
}

uint32_t OpenTherm::getTxQueueFailCount() const
{
	return tx_queue_fail_count_;
}

void IRAM_ATTR OpenTherm::gpio_isr_handler(void *arg)
{
	auto *instance = static_cast<OpenTherm *>(arg);
	if (instance != nullptr) {
		instance->handleInterrupt();
	}
}

void IRAM_ATTR OpenTherm::handleInterrupt()
{
	const uint32_t new_ts = now_cycles();
	const int state = readState();
	lastInterruptTs = new_ts;

	// Ignore obviously impossible edge spacing; valid OT half-bit spacing is ~500 us.
	const uint32_t glitch_cycles = OT_ISR_GLITCH_REJECT_US * cycles_per_us_;
	const uint32_t last_edge = last_edge_ts_;
	if (last_edge != 0 && (new_ts - last_edge) < glitch_cycles) {
		glitch_reject_count_++;
		last_driver_error_ = OpenThermDriverError::DRIVER_ERROR_GLITCH_REJECT;
		return;
	}
	last_edge_ts_ = new_ts;

	portENTER_CRITICAL_ISR(&mux_);
	const uint8_t next_head = static_cast<uint8_t>((edge_head_ + 1U) % EDGE_QUEUE_SIZE);
	if (next_head == edge_tail_) {
		edge_overflow_ = true;
		edge_overflow_count_++;
		last_driver_error_ = OpenThermDriverError::DRIVER_ERROR_EDGE_OVERFLOW;
	} else {
		edge_queue_[edge_head_].timestamp = new_ts;
		edge_queue_[edge_head_].level = static_cast<uint8_t>(state != 0);
		edge_head_ = next_head;
	}
	portEXIT_CRITICAL_ISR(&mux_);
}

bool OpenTherm::pop_edge_(EdgeEvent &edge) {
	bool has_edge = false;
	portENTER_CRITICAL(&mux_);
	if (edge_tail_ != edge_head_) {
		edge = edge_queue_[edge_tail_];
		edge_tail_ = static_cast<uint8_t>((edge_tail_ + 1U) % EDGE_QUEUE_SIZE);
		has_edge = true;
	}
	portEXIT_CRITICAL(&mux_);
	return has_edge;
}

void OpenTherm::process_edge_(uint32_t timestamp, int state) {
	const uint32_t half_bit_min_cycles = OT_HALF_BIT_MIN_US * cycles_per_us_;
	const uint32_t half_bit_max_cycles = OT_HALF_BIT_MAX_US * cycles_per_us_;
	const uint32_t full_bit_min_cycles = OT_FULL_BIT_MIN_US * cycles_per_us_;
	const uint32_t full_bit_max_cycles = OT_FULL_BIT_MAX_US * cycles_per_us_;
	const uint32_t start_quiet_min_cycles = OT_START_QUIET_US * cycles_per_us_;
	const uint32_t edge_gap_cycles = last_processed_edge_ts_ == 0
		? UINT32_MAX
		: (timestamp - last_processed_edge_ts_);
	last_processed_edge_ts_ = timestamp;

	if (status == OpenThermStatus::READY) {
		if (!isSlave || state == 0) {
			return;
		}
		if (timestamp < start_accept_not_before_ts_) {
			ignored_start_count_++;
			ignored_cooldown_count_++;
			last_driver_error_ = OpenThermDriverError::DRIVER_ERROR_START_BIT_INVALID;
			return;
		}
		if (edge_gap_cycles < start_quiet_min_cycles) {
			ignored_start_count_++;
			ignored_quiet_gap_count_++;
			last_driver_error_ = OpenThermDriverError::DRIVER_ERROR_START_BIT_INVALID;
			return;
		}
		status = OpenThermStatus::RESPONSE_START_BIT;
		response = 0;
		responseBitIndex = 0;
		responseTimestamp = timestamp;
		return;
	}

	if (status == OpenThermStatus::DELAY || status == OpenThermStatus::REQUEST_SENDING ||
	    status == OpenThermStatus::RESPONSE_READY || status == OpenThermStatus::RESPONSE_INVALID) {
		return;
	}

	const uint32_t delta_cycles = timestamp - static_cast<uint32_t>(responseTimestamp);

	if (status == OpenThermStatus::RESPONSE_WAITING) {
		if (state != 0) {
				if (timestamp < start_accept_not_before_ts_) {
					ignored_start_count_++;
					ignored_cooldown_count_++;
					last_driver_error_ = OpenThermDriverError::DRIVER_ERROR_START_BIT_INVALID;
					return;
				}
			if (edge_gap_cycles < start_quiet_min_cycles) {
				ignored_start_count_++;
				ignored_quiet_gap_count_++;
				last_driver_error_ = OpenThermDriverError::DRIVER_ERROR_START_BIT_INVALID;
				return;
			}
			status = OpenThermStatus::RESPONSE_START_BIT;
			responseTimestamp = timestamp;
		} else {
			reject_tentative_start_(OpenThermDriverError::DRIVER_ERROR_START_BIT_INVALID, timestamp);
		}
		return;
	}

	if (status == OpenThermStatus::RESPONSE_START_BIT) {
		if (delta_cycles >= half_bit_min_cycles && delta_cycles <= half_bit_max_cycles && state == 0) {
			status = OpenThermStatus::RESPONSE_RECEIVING;
			responseTimestamp = timestamp;
			responseBitIndex = 0;
			response = 0;
			reset_bad_start_streak_();
		} else {
			reject_tentative_start_(OpenThermDriverError::DRIVER_ERROR_START_BIT_INVALID, timestamp);
		}
		return;
	}

	if (status != OpenThermStatus::RESPONSE_RECEIVING) {
		return;
	}

	if (delta_cycles >= full_bit_min_cycles && delta_cycles <= full_bit_max_cycles) {
		if (responseBitIndex < 32) {
			response = (response << 1) | !state;
			responseTimestamp = timestamp;
			responseBitIndex++;
		} else {
			status = OpenThermStatus::RESPONSE_READY;
			responseTimestamp = timestamp;
		}
		return;
	}

	if (delta_cycles >= half_bit_min_cycles && delta_cycles < full_bit_min_cycles) {
		// Valid Manchester half-bit transition; keep waiting for the full-bit edge.
		return;
	}

	if (delta_cycles > full_bit_max_cycles || delta_cycles < half_bit_min_cycles) {
		fail_frame_(OpenThermDriverError::DRIVER_ERROR_TIMING_INVALID, timestamp);
	}
}

bool OpenTherm::process()
{
	RxFrame frame{};
	while (pop_rx_frame_(frame)) {
		process_rmt_frame_(frame);
	}

	EdgeEvent edge{};
	while (pop_edge_(edge)) {
		process_edge_(edge.timestamp, edge.level);
	}

	if (edge_overflow_) {
		portENTER_CRITICAL(&mux_);
		edge_overflow_ = false;
		portEXIT_CRITICAL(&mux_);
		status = OpenThermStatus::RESPONSE_INVALID;
		responseTimestamp = now_cycles();
		invalid_requires_cooldown_ = true;
		delay_until_ts_ = now_cycles() + (current_resync_cooldown_us_() * cycles_per_us_);
	}

	OpenThermStatus st = status;
	unsigned long ts = responseTimestamp;
	unsigned long current_response = response;
	
	bool bDidProcessMessage=false;

	if (st == OpenThermStatus::REQUEST_SENDING && tx_in_progress_ && tx_complete_) {
		tx_in_progress_ = false;
		tx_complete_ = false;
		setIdleState();
		status = OpenThermStatus::READY;
		responseTimestamp = now_cycles();
		st = status;
		ts = responseTimestamp;
	}
	
	if (st == OpenThermStatus::READY) 
		return bDidProcessMessage;
		
	const uint32_t newTs = now_cycles();
	const uint32_t timeout_cycles = 1000000U * cycles_per_us_;
	if (st != OpenThermStatus::NOT_INITIALIZED && st != OpenThermStatus::DELAY && (newTs - static_cast<uint32_t>(ts)) > timeout_cycles) {
		status = OpenThermStatus::READY;
		responseStatus = OpenThermResponseStatus::TIMEOUT;
		delay_until_ts_ = 0;
		if (processResponseCallback != NULL) {
			processResponseCallback(current_response, OpenThermResponseStatus::TIMEOUT, pCallbackUser);
			bDidProcessMessage=true;
		}
	}
	else if (st == OpenThermStatus::RESPONSE_INVALID) {
		responseStatus = OpenThermResponseStatus::INVALID;
		if (processResponseCallback != NULL) {
			processResponseCallback(current_response, OpenThermResponseStatus::INVALID, pCallbackUser);
			bDidProcessMessage=true;
		}
		if (invalid_requires_cooldown_) {
			status = OpenThermStatus::DELAY;
			if (delay_until_ts_ == 0) {
				delay_until_ts_ = now_cycles() + (current_resync_cooldown_us_() * cycles_per_us_);
			}
		} else {
			status = OpenThermStatus::READY;
			delay_until_ts_ = 0;
		}
		invalid_requires_cooldown_ = false;
	}
	else if (st == OpenThermStatus::RESPONSE_READY) {
		OpenThermResponseStatus current_status = OpenThermResponseStatus::INVALID_MESSAGE;
		if(!isValidParity(current_response)) {
			current_status = OpenThermResponseStatus::INVALID_PARITY;
		} else {
			current_status = (isSlave ? isValidRequest(current_response) : isValidResponse(current_response))
				? OpenThermResponseStatus::SUCCESS
				: OpenThermResponseStatus::INVALID_MESSAGE;
			}
		status = OpenThermStatus::DELAY;
		responseStatus = current_status;
		delay_until_ts_ = now_cycles() + (OT_FRAME_DELAY_US * cycles_per_us_);
		invalid_requires_cooldown_ = false;

		if (processResponseCallback != NULL) {
			processResponseCallback(current_response, current_status, pCallbackUser);
			bDidProcessMessage=true;
		}
	}
	else if (st == OpenThermStatus::DELAY) {
		if (delay_until_ts_ == 0) {
			delay_until_ts_ = static_cast<uint32_t>(ts) + (OT_FRAME_DELAY_US * cycles_per_us_);
		}
		if (newTs > delay_until_ts_) {
			status = OpenThermStatus::READY;
			delay_until_ts_ = 0;
		}
	}
	return bDidProcessMessage;
}

bool OpenTherm::parity(unsigned long frame) //odd parity
{
	uint8_t p = 0;
	unsigned long tmp=frame;
	while (tmp > 0)
	{
		if (tmp & 1) p++;
		tmp = tmp >> 1;
	}
	return (p & 1);
}

OpenThermMessageType OpenTherm::getMessageType(unsigned long message)
{
	OpenThermMessageType msg_type = static_cast<OpenThermMessageType>((message >> 28) & 7);
	return msg_type;
}

OpenThermMessageID OpenTherm::getDataID(unsigned long frame)
{
	return (OpenThermMessageID)((frame >> 16) & 0xFF);
}

unsigned long OpenTherm::buildRequest(OpenThermMessageType type, OpenThermMessageID id, unsigned int data)
{
	unsigned long request = data;
	if (type == OpenThermMessageType::WRITE_DATA) {
		request |= 1ul << 28;
	}
	request |= ((unsigned long)id) << 16;
	if (parity(request)) request |= (1ul << 31);
	return request;
}

unsigned long OpenTherm::buildResponse(OpenThermMessageType type, OpenThermMessageID id, unsigned int data)
{
	unsigned long response = data;
	response |= ((unsigned long)type) << 28;
	response |= ((unsigned long)id) << 16;
	if (parity(response)) response |= (1ul << 31);
	return response;
}

bool OpenTherm::isValidParity(unsigned long message)
{
	return (parity(message)==0);
}

bool OpenTherm::isValidResponse(unsigned long response)
{
	uint8_t msgType = (response << 1) >> 29;
	return msgType == READ_ACK || msgType == WRITE_ACK;
}

bool OpenTherm::isValidRequest(unsigned long request)
{
	uint8_t msgType = (request << 1) >> 29;
	return msgType == READ_DATA || msgType == WRITE_DATA;
}

void OpenTherm::end() {
	if (this->handleInterruptCallback != NULL && isr_registered_) {
		gpio_isr_handler_remove(static_cast<gpio_num_t>(inPin));
		isr_registered_ = false;
	}
	deinit_rx_channel_();
	if (tx_channel_ != nullptr) {
		if (tx_in_progress_) {
			rmt_tx_wait_all_done(tx_channel_, 50);
			tx_in_progress_ = false;
			tx_complete_ = false;
		}
		rmt_disable(tx_channel_);
	}
	if (tx_encoder_ != nullptr) {
		rmt_del_encoder(tx_encoder_);
		tx_encoder_ = nullptr;
	}
	if (tx_channel_ != nullptr) {
		rmt_del_channel(tx_channel_);
		tx_channel_ = nullptr;
	}
	deinit_rx_glitch_filter_();
	tx_rmt_ready_ = false;
	reset_receive_state_();
	status = OpenThermStatus::NOT_INITIALIZED;
}

const char *OpenTherm::statusToString(OpenThermResponseStatus status)
{
	switch (status) {
		case NONE:	return "NONE";
		case SUCCESS: return "SUCCESS";
		case INVALID: return "INVALID";
		case INVALID_PARITY: return "INVALID_PARITY";
		case INVALID_MESSAGE: return "INVALID_MESSAGE";
		case TIMEOUT: return "TIMEOUT";
		default:	  return "UNKNOWN";
	}
}

const char *OpenTherm::messageTypeToString(OpenThermMessageType message_type)
{
	switch (message_type) {
		case READ_DATA:	   return "(M->S) READ_DATA";
		case WRITE_DATA:	  return "(M->S) WRITE_DATA";
		case INVALID_DATA:	return "(M->S) INVALID_DATA";
		case RESERVED:		return "(M->S) RESERVED";
		case READ_ACK:		return "(S->M) READ_ACK";
		case WRITE_ACK:	   return "(S->M) WRITE_ACK";
		case DATA_INVALID:	return "(S->M) DATA_INVALID";
		case UNKNOWN_DATA_ID: return "(S->M) UNKNOWN_DATA_ID";
		default:			  return "UNKNOWN";
	}
}

//building requests

unsigned long OpenTherm::buildSetBoilerStatusRequest(bool enableCentralHeating, bool enableHotWater, bool enableCooling, bool enableOutsideTemperatureCompensation, bool enableCentralHeating2) {
	unsigned int data = enableCentralHeating | (enableHotWater << 1) | (enableCooling << 2) | (enableOutsideTemperatureCompensation << 3) | (enableCentralHeating2 << 4);
	data <<= 8;
	return buildRequest(OpenThermMessageType::READ_DATA, OpenThermMessageID::Status, data);
}

unsigned long OpenTherm::buildSetBoilerTemperatureRequest(float temperature) {
	unsigned int data = temperatureToData(temperature);
	return buildRequest(OpenThermMessageType::WRITE_DATA, OpenThermMessageID::TSet, data);
}

unsigned long OpenTherm::buildGetBoilerTemperatureRequest() {
	return buildRequest(OpenThermMessageType::READ_DATA, OpenThermMessageID::Tboiler, 0);
}

//parsing responses
bool OpenTherm::isFault(unsigned long response) {
	return response & 0x1;
}

bool OpenTherm::isCentralHeatingActive(unsigned long response) {
	return response & 0x2;
}

bool OpenTherm::isHotWaterActive(unsigned long response) {
	return response & 0x4;
}

bool OpenTherm::isFlameOn(unsigned long response) {
	return response & 0x8;
}

bool OpenTherm::isCoolingActive(unsigned long response) {
	return response & 0x10;
}

bool OpenTherm::isDiagnostic(unsigned long response) {
	return response & 0x40;
}

uint16_t OpenTherm::getUInt(const unsigned long response) const {
	const uint16_t u88 = response & 0xffff;
	return u88;
}

float OpenTherm::getFloat(const unsigned long response) const {
	const uint16_t u88 = getUInt(response);
	const float f = (u88 & 0x8000) ? -(0x10000L - u88) / 256.0f : u88 / 256.0f;
	return f;
}

unsigned int OpenTherm::temperatureToData(float temperature) {
	if (temperature < 0) temperature = 0;
	if (temperature > 100) temperature = 100;
	unsigned int data = (unsigned int)(temperature * 256);
	return data;
}

//basic requests

unsigned long OpenTherm::setBoilerStatus(bool enableCentralHeating, bool enableHotWater, bool enableCooling, bool enableOutsideTemperatureCompensation, bool enableCentralHeating2) {
	return sendRequest(buildSetBoilerStatusRequest(enableCentralHeating, enableHotWater, enableCooling, enableOutsideTemperatureCompensation, enableCentralHeating2));
}

bool OpenTherm::setBoilerTemperature(float temperature) {
	unsigned long response = sendRequest(buildSetBoilerTemperatureRequest(temperature));
	return isValidResponse(response);
}

float OpenTherm::getBoilerTemperature() {
	unsigned long response = sendRequest(buildGetBoilerTemperatureRequest());
	return isValidResponse(response) ? getFloat(response) : 0;
}

float OpenTherm::getReturnTemperature() {
    unsigned long response = sendRequest(buildRequest(OpenThermRequestType::READ, OpenThermMessageID::Tret, 0));
    return isValidResponse(response) ? getFloat(response) : 0;
}

bool OpenTherm::setDHWSetpoint(float temperature) {
    unsigned int data = temperatureToData(temperature);
    unsigned long response = sendRequest(buildRequest(OpenThermMessageType::WRITE_DATA, OpenThermMessageID::TdhwSet, data));
    return isValidResponse(response);
}
    
float OpenTherm::getDHWTemperature() {
    unsigned long response = sendRequest(buildRequest(OpenThermMessageType::READ_DATA, OpenThermMessageID::Tdhw, 0));
    return isValidResponse(response) ? getFloat(response) : 0;
}

float OpenTherm::getModulation() {
    unsigned long response = sendRequest(buildRequest(OpenThermRequestType::READ, OpenThermMessageID::RelModLevel, 0));
    return isValidResponse(response) ? getFloat(response) : 0;
}

float OpenTherm::getPressure() {
    unsigned long response = sendRequest(buildRequest(OpenThermRequestType::READ, OpenThermMessageID::CHPressure, 0));
    return isValidResponse(response) ? getFloat(response) : 0;
}

unsigned char OpenTherm::getFault() {
    return ((sendRequest(buildRequest(OpenThermRequestType::READ, OpenThermMessageID::ASFflags, 0)) >> 8) & 0xff);
}
