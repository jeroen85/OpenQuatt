#include "OpenQuattOTSlave.h"
#include "esphome/core/log.h"
#include "esp_timer.h"
#include <cstdio>
#include <cmath>
 
namespace esphome { 
namespace message_data {
    uint16_t encode_f88(float value) { return static_cast<uint16_t>(value * 256.0f); }
    bool parse_flag8_lb_0(const unsigned long response) { return response & 0b0000000000000001; }
    bool parse_flag8_lb_1(const unsigned long response) { return response & 0b0000000000000010; }
    bool parse_flag8_lb_2(const unsigned long response) { return response & 0b0000000000000100; }
    bool parse_flag8_lb_3(const unsigned long response) { return response & 0b0000000000001000; }
    bool parse_flag8_lb_4(const unsigned long response) { return response & 0b0000000000010000; }
    bool parse_flag8_lb_5(const unsigned long response) { return response & 0b0000000000100000; }
    bool parse_flag8_lb_6(const unsigned long response) { return response & 0b0000000001000000; }
    bool parse_flag8_lb_7(const unsigned long response) { return response & 0b0000000010000000; }
    bool parse_flag8_hb_0(const unsigned long response) { return response & 0b0000000100000000; }
    bool parse_flag8_hb_1(const unsigned long response) { return response & 0b0000001000000000; }
    bool parse_flag8_hb_2(const unsigned long response) { return response & 0b0000010000000000; }
    bool parse_flag8_hb_3(const unsigned long response) { return response & 0b0000100000000000; }
    bool parse_flag8_hb_4(const unsigned long response) { return response & 0b0001000000000000; }
    bool parse_flag8_hb_5(const unsigned long response) { return response & 0b0010000000000000; }
    bool parse_flag8_hb_6(const unsigned long response) { return response & 0b0100000000000000; }
    bool parse_flag8_hb_7(const unsigned long response) { return response & 0b1000000000000000; }

    std::string get_flag_str_value(esphome::text_sensor::TextSensor* sensor, bool bActive)
    {
    	if(bActive)
    		return "ON";
	else
    		return "OFF";
    }
    std::string parse_flag8_lb_0_str(esphome::text_sensor::TextSensor* sensor, const unsigned long response) { return get_flag_str_value(sensor, parse_flag8_lb_0(response)); }
    std::string parse_flag8_lb_1_str(esphome::text_sensor::TextSensor* sensor, const unsigned long response) { return get_flag_str_value(sensor, parse_flag8_lb_1(response)); }
    std::string parse_flag8_lb_2_str(esphome::text_sensor::TextSensor* sensor, const unsigned long response) { return get_flag_str_value(sensor, parse_flag8_lb_2(response)); }
    std::string parse_flag8_lb_3_str(esphome::text_sensor::TextSensor* sensor, const unsigned long response) { return get_flag_str_value(sensor, parse_flag8_lb_3(response)); }
    std::string parse_flag8_lb_4_str(esphome::text_sensor::TextSensor* sensor, const unsigned long response) { return get_flag_str_value(sensor, parse_flag8_lb_4(response)); }
    std::string parse_flag8_lb_5_str(esphome::text_sensor::TextSensor* sensor, const unsigned long response) { return get_flag_str_value(sensor, parse_flag8_lb_5(response)); }
    std::string parse_flag8_lb_6_str(esphome::text_sensor::TextSensor* sensor, const unsigned long response) { return get_flag_str_value(sensor, parse_flag8_lb_6(response)); }
    std::string parse_flag8_lb_7_str(esphome::text_sensor::TextSensor* sensor, const unsigned long response) { return get_flag_str_value(sensor, parse_flag8_lb_7(response)); }
    std::string parse_flag8_hb_0_str(esphome::text_sensor::TextSensor* sensor, const unsigned long response) { return get_flag_str_value(sensor, parse_flag8_hb_0(response)); }
    std::string parse_flag8_hb_1_str(esphome::text_sensor::TextSensor* sensor, const unsigned long response) { return get_flag_str_value(sensor, parse_flag8_hb_1(response)); }
    std::string parse_flag8_hb_2_str(esphome::text_sensor::TextSensor* sensor, const unsigned long response) { return get_flag_str_value(sensor, parse_flag8_hb_2(response)); }
    std::string parse_flag8_hb_3_str(esphome::text_sensor::TextSensor* sensor, const unsigned long response) { return get_flag_str_value(sensor, parse_flag8_hb_3(response)); }
    std::string parse_flag8_hb_4_str(esphome::text_sensor::TextSensor* sensor, const unsigned long response) { return get_flag_str_value(sensor, parse_flag8_hb_4(response)); }
    std::string parse_flag8_hb_5_str(esphome::text_sensor::TextSensor* sensor, const unsigned long response) { return get_flag_str_value(sensor, parse_flag8_hb_5(response)); }
    std::string parse_flag8_hb_6_str(esphome::text_sensor::TextSensor* sensor, const unsigned long response) { return get_flag_str_value(sensor, parse_flag8_hb_6(response)); }
    std::string parse_flag8_hb_7_str(esphome::text_sensor::TextSensor* sensor, const unsigned long response) { return get_flag_str_value(sensor, parse_flag8_hb_7(response)); }

    uint8_t parse_u8_lb(const unsigned long response) { return (uint8_t) (response & 0xff); }
    uint8_t parse_u8_hb(const unsigned long response) { return (uint8_t) ((response >> 8) & 0xff); }
    int8_t parse_s8_lb(const unsigned long response) { return (int8_t) (response & 0xff); }
    int8_t parse_s8_hb(const unsigned long response) { return (int8_t) ((response >> 8) & 0xff); }
    uint16_t parse_u16(const unsigned long response) { return (uint16_t) (response & 0xffff); }
    int16_t parse_s16(const unsigned long response) { return (int16_t) (response & 0xffff); }
    float parse_f88(const unsigned long response) {
        unsigned int data = response & 0xffff;
        return (data & 0x8000) ? -(0x10000L - data) / 256.0f : data / 256.0f; 
    }

    unsigned int write_flag8_lb_0(const bool value, const unsigned int data) { return value ? data | 0b0000000000000001 : data & 0b1111111111111110; }
    unsigned int write_flag8_lb_1(const bool value, const unsigned int data) { return value ? data | 0b0000000000000010 : data & 0b1111111111111101; }
    unsigned int write_flag8_lb_2(const bool value, const unsigned int data) { return value ? data | 0b0000000000000100 : data & 0b1111111111111011; }
    unsigned int write_flag8_lb_3(const bool value, const unsigned int data) { return value ? data | 0b0000000000001000 : data & 0b1111111111110111; }
    unsigned int write_flag8_lb_4(const bool value, const unsigned int data) { return value ? data | 0b0000000000010000 : data & 0b1111111111101111; }
    unsigned int write_flag8_lb_5(const bool value, const unsigned int data) { return value ? data | 0b0000000000100000 : data & 0b1111111111011111; }
    unsigned int write_flag8_lb_6(const bool value, const unsigned int data) { return value ? data | 0b0000000001000000 : data & 0b1111111110111111; }
    unsigned int write_flag8_lb_7(const bool value, const unsigned int data) { return value ? data | 0b0000000010000000 : data & 0b1111111101111111; }
    unsigned int write_flag8_hb_0(const bool value, const unsigned int data) { return value ? data | 0b0000000100000000 : data & 0b1111111011111111; }
    unsigned int write_flag8_hb_1(const bool value, const unsigned int data) { return value ? data | 0b0000001000000000 : data & 0b1111110111111111; }
    unsigned int write_flag8_hb_2(const bool value, const unsigned int data) { return value ? data | 0b0000010000000000 : data & 0b1111101111111111; }
    unsigned int write_flag8_hb_3(const bool value, const unsigned int data) { return value ? data | 0b0000100000000000 : data & 0b1111011111111111; }
    unsigned int write_flag8_hb_4(const bool value, const unsigned int data) { return value ? data | 0b0001000000000000 : data & 0b1110111111111111; }
    unsigned int write_flag8_hb_5(const bool value, const unsigned int data) { return value ? data | 0b0010000000000000 : data & 0b1101111111111111; }
    unsigned int write_flag8_hb_6(const bool value, const unsigned int data) { return value ? data | 0b0100000000000000 : data & 0b1011111111111111; }
    unsigned int write_flag8_hb_7(const bool value, const unsigned int data) { return value ? data | 0b1000000000000000 : data & 0b0111111111111111; }
    unsigned int write_u8_lb(const uint8_t value, const unsigned int data) { return (data & 0xff00) | value; }
    unsigned int write_u8_hb(const uint8_t value, const unsigned int data) { return (data & 0x00ff) | (value << 8); }
    unsigned int write_s8_lb(const int8_t value, const unsigned int data) { return (data & 0xff00) | value; }
    unsigned int write_s8_hb(const int8_t value, const unsigned int data) { return (data & 0x00ff) | (value << 8); }
    unsigned int write_u16(const uint16_t value, const unsigned int data) { return value; }
    unsigned int write_s16(const int16_t value, const unsigned int data) { return value; }
    unsigned int write_f88(const float value, const unsigned int data) { return (unsigned int) (value * 256.0f); }    
    
} // namespace message_data
}
#define OPENQUATT_OT_SLAVE_IGNORE_1(x)
#define OPENQUATT_OT_SLAVE_IGNORE_2(x, y)

namespace esphome {
	namespace OpenQuattOTSlave {
		static const char * TAG = "OpenQuattOTSlave";
	// The T6 can go several seconds without polling ID 0 while it cycles through
	// other IDs. Keep the last known master status long enough to avoid a spurious
	// CH-enable "blinking" effect in Home Assistant.
	static constexpr unsigned long MASTER_STATUS_TIMEOUT_MS = 30000;
	static constexpr unsigned long T6_COMPAT_WINDOW_MS = 300000;
	static constexpr unsigned long PROTOCOL_DEBUG_PUBLISH_INTERVAL_MS = 2000;
	static constexpr unsigned long OT_STARTUP_SETTLE_MS = 1000;
	static constexpr unsigned long OT_BUS_IDLE_MIN_MS = 100;
	static constexpr unsigned long OT_STARTUP_FORCE_MS = 5000;
	static constexpr float SUPPORTED_OPENTHERM_VERSION = 2.2f;
	static const char *message_type_to_string_(OpenThermMessageType type) {
		switch (type) {
			case OpenThermMessageType::READ_DATA: return "READ_DATA";
			case OpenThermMessageType::WRITE_DATA: return "WRITE_DATA";
			case OpenThermMessageType::INVALID_DATA: return "INVALID_DATA";
			case OpenThermMessageType::RESERVED: return "RESERVED";
			case OpenThermMessageType::READ_ACK: return "READ_ACK";
			case OpenThermMessageType::WRITE_ACK: return "WRITE_ACK";
			case OpenThermMessageType::DATA_INVALID: return "DATA_INVALID";
			case OpenThermMessageType::UNKNOWN_DATA_ID: return "UNKNOWN_DATA_ID";
			default: return "UNKNOWN";
		}
	}
	static std::string format_ot_frame_(const char *direction, unsigned long frame, OpenThermMessageType type,
	                                    OpenThermMessageID data_id, uint16_t data,
	                                    const char *status_or_label) {
		char buffer[160];
		std::snprintf(buffer, sizeof(buffer), "%s %s id=%d data=0x%04X frame=0x%08lX %s",
		              direction, message_type_to_string_(type), static_cast<int>(data_id), data, frame,
		              status_or_label);
		return std::string(buffer);
	}
	static unsigned long now_millis() {
		return static_cast<unsigned long>(esp_timer_get_time() / 1000ULL);
	}
		OpenTherm *OpenQuattOTSlave::m_otThermostat=NULL;

		OpenQuattOTSlave::OpenQuattOTSlave() : PollingComponent(500)
	{
	}

		void OpenQuattOTSlave::schedule_opentherm_start_()
		{
			if (m_otThermostat == NULL || m_otStarted || m_otaActive || !m_enabled) {
				return;
			}
			m_otStartPending = true;
			m_otStartNotBeforeMs = now_millis() + OT_STARTUP_SETTLE_MS;
			m_otBusIdleSinceMs = 0;
		}

		void OpenQuattOTSlave::start_opentherm_()
		{
			if (m_otThermostat == NULL || m_otStarted || m_otaActive || !m_enabled) {
				return;
			}
			m_otThermostat->begin(handleInterruptThermostat, processRequestThermostat, this);
			m_otStarted = true;
			m_otStartPending = false;
			m_otBusIdleSinceMs = 0;
			m_runtimeGraceUntilMs = now_millis() + MASTER_STATUS_TIMEOUT_MS;
		}

		void OpenQuattOTSlave::stop_opentherm_()
		{
			m_otStartPending = false;
			m_otBusIdleSinceMs = 0;
			m_runtimeGraceUntilMs = 0;
			if (m_otThermostat == NULL || !m_otStarted) {
				return;
			}
			m_otThermostat->end();
			m_otStarted = false;
		}

		void OpenQuattOTSlave::try_start_opentherm_()
		{
			if (!m_otStartPending || m_otThermostat == NULL || m_otStarted || m_otaActive || !m_enabled) {
				return;
			}

			const unsigned long now_ms = now_millis();
			if (now_ms < m_otStartNotBeforeMs) {
				return;
			}

			if ((now_ms - m_otStartNotBeforeMs) >= OT_STARTUP_FORCE_MS) {
				ESP_LOGW(TAG, "Starting OpenTherm after settle timeout");
				start_opentherm_();
				return;
			}

			const bool bus_idle = gpio_get_level(static_cast<gpio_num_t>(m_pinThermostatIn)) != 0;
			if (!bus_idle) {
				m_otBusIdleSinceMs = 0;
				return;
			}

			if (m_otBusIdleSinceMs == 0) {
				m_otBusIdleSinceMs = now_ms;
				return;
			}

			if ((now_ms - m_otBusIdleSinceMs) < OT_BUS_IDLE_MIN_MS) {
				return;
			}

			ESP_LOGI(TAG, "Starting OpenTherm after bus settle");
			start_opentherm_();
		}

		void OpenQuattOTSlave::set_enabled_(bool enabled)
		{
			if (m_enabled == enabled) {
				return;
			}
			m_enabled = enabled;
			if (m_enabled) {
				m_updatePrepareActive = false;
				schedule_opentherm_start_();
			} else {
				stop_opentherm_();
				m_master_state = MasterState{};
				m_slave_state = SlaveState{};
			}
		}

		void OpenQuattOTSlave::prepare_for_firmware_update()
		{
			if (!m_enabled || m_updatePrepareActive) {
				return;
			}
			ESP_LOGI(TAG, "Preparing OpenTherm for firmware update");
			m_updatePrepareActive = true;
			stop_opentherm_();
		}

	        OpenQuattOTSlave::~OpenQuattOTSlave()
		{
			if(m_otThermostat!=NULL)
			{
				delete m_otThermostat;
				m_otThermostat=NULL;
			}
		}

		void OpenQuattOTSlave::dump_config() 
		{
		#define ID(x) x
		#define SHOW2(x) #x
		#define SHOW(x) SHOW2(x)
	
			ESP_LOGCONFIG(TAG, "OpenQuatt OT Slave:");
			ESP_LOGCONFIG(TAG, "  Thermostat In: GPIO%d", m_pinThermostatIn);
			ESP_LOGCONFIG(TAG, "  Thermostat Out: GPIO%d", m_pinThermostatOut);
			ESP_LOGCONFIG(TAG, "  Default Tboiler: %.1f C", m_slave_state.t_boiler);
			ESP_LOGCONFIG(TAG, "  Default Tret: %.1f C", m_slave_state.t_ret);
			ESP_LOGCONFIG(TAG, "  Default MaxTSet: %.1f C", m_slave_state.max_t_set);
			ESP_LOGCONFIG(TAG, "  Sensors: %s", SHOW(OPENQUATT_OT_SLAVE_SENSOR_LIST(ID, )));
			ESP_LOGCONFIG(TAG, "  Binary sensors: %s", SHOW(OPENQUATT_OT_SLAVE_BINARY_SENSOR_LIST(ID, )));
		ESP_LOGCONFIG(TAG, "  Text sensors: %s", SHOW(OPENQUATT_OT_SLAVE_TEXT_SENSOR_LIST(ID, )));
		ESP_LOGCONFIG(TAG, "  Switches: %s", SHOW(OPENQUATT_OT_SLAVE_SWITCH_LIST(ID, )));
		ESP_LOGCONFIG(TAG, "  Input sensors: %s", SHOW(OPENQUATT_OT_SLAVE_INPUT_SENSOR_LIST(ID, )));
		ESP_LOGCONFIG(TAG, "  Outputs: %s", SHOW(OPENQUATT_OT_SLAVE_OUTPUT_LIST(ID, )));
		ESP_LOGCONFIG(TAG, "  Numbers: %s", SHOW(OPENQUATT_OT_SLAVE_NUMBER_LIST(ID, )));
	}

	        void OpenQuattOTSlave::setup() 
	        {
		        m_otThermostat=new OpenTherm(m_pinThermostatIn, m_pinThermostatOut, true);
		        m_otStarted = false;
		        m_lastRuntimeMetricsSnapshotMs = now_millis();
#ifdef USE_OTA_STATE_LISTENER
		        ota::get_global_ota_callback()->add_global_state_listener(this);
#endif
#ifdef OPENQUATT_OT_SLAVE_HAS_SWITCH_enabled
			if (this->enabled_switch != nullptr) {
				this->enabled_switch->set_write_callback([this](bool state) { this->set_enabled_(state); });
			}
#endif
#ifdef OPENQUATT_OT_SLAVE_HAS_SWITCH_debug_enabled
			if (this->debug_enabled_switch != nullptr) {
				this->debug_enabled_switch->set_write_callback([this](bool state) { this->set_debug_enabled_(state); });
			}
#endif
			sync_switch_states_();
			m_msLastLoop=now_millis();
			refresh_slave_runtime_state_();
			publish_master_runtime_state_();
			publish_slave_runtime_state_();
			publish_protocol_debug_state_();
			if (m_enabled) {
				schedule_opentherm_start_();
			}
	        }
 
		void OpenQuattOTSlave::on_shutdown() 
		{
			if(m_otThermostat!=NULL)
				stop_opentherm_();
		}

#ifdef USE_OTA_STATE_LISTENER
		void OpenQuattOTSlave::on_ota_global_state(ota::OTAState state, float progress, uint8_t error, ota::OTAComponent *component)
		{
			if (state == ota::OTA_STARTED) {
				if (!m_otaActive) {
					ESP_LOGI(TAG, "Pausing OpenTherm during OTA");
					m_otaActive = true;
					stop_opentherm_();
				}
			} else if (state == ota::OTA_ABORT || state == ota::OTA_ERROR || state == ota::OTA_COMPLETED) {
				if (m_otaActive) {
					ESP_LOGI(TAG, "OpenTherm OTA state ended");
					m_otaActive = false;
					if (m_enabled && !m_updatePrepareActive) {
						schedule_opentherm_start_();
					}
				}
				if (m_updatePrepareActive) {
					ESP_LOGI(TAG, "Clearing OpenTherm firmware update prepare state");
					m_updatePrepareActive = false;
				}
			}
		}
#endif

	void IRAM_ATTR OpenQuattOTSlave::handleInterruptThermostat()
	{
		if(m_otThermostat!=NULL)
			m_otThermostat->handleInterrupt();
	}

		void OpenQuattOTSlave::processRequestThermostat(unsigned long request, OpenThermResponseStatus status)
		{
		if(request==0)
			return;				

		const uint64_t callback_started_us = esp_timer_get_time();
		OpenThermMessageType requestType=m_otThermostat->getMessageType(request);
		OpenThermMessageID requestDataID=m_otThermostat->getDataID(request);
		uint16_t requestData=(uint16_t)request;
		unsigned long response = 0;
		OpenThermMessageType responseType = OpenThermMessageType::UNKNOWN_DATA_ID;
		bool response_sent = false;
		if(status==OpenThermResponseStatus::SUCCESS)
		{			
			parseRequest(requestType, requestDataID, requestData);
			response = build_slave_response_(requestType, requestDataID, requestData);
			if(response != 0)
			{
				// Send the OT response as soon as possible; extra formatting/logging here can
				// add enough latency for picky thermostats to briefly report comms loss.
				responseType = m_otThermostat->getMessageType(response);
				const uint32_t response_latency_us = static_cast<uint32_t>(esp_timer_get_time() - callback_started_us);
				m_runtime_metrics_state.last_response_latency_us = response_latency_us;
				if (response_latency_us > m_runtime_metrics_state.max_response_latency_us) {
					m_runtime_metrics_state.max_response_latency_us = response_latency_us;
				}
				m_otThermostat->sendResponse(response);
				response_sent = true;
			}
		}

		record_protocol_event_(request, status, requestType, requestDataID, requestData);

		if (m_debug_enabled) {
			auto request_summary = format_ot_frame_("REQ", request, requestType, requestDataID, requestData,
			                                       m_otThermostat->statusToString(status));
			ESP_LOGD(TAG, "%s", request_summary.c_str());
			if (status == OpenThermResponseStatus::SUCCESS && response != 0) {
				auto response_summary = format_ot_frame_("RSP", response, responseType, requestDataID, static_cast<uint16_t>(response), "READY");
				ESP_LOGD(TAG, "%s", response_summary.c_str());
			}
		}

		const uint32_t callback_duration_us = static_cast<uint32_t>(esp_timer_get_time() - callback_started_us);
		m_runtime_metrics_state.last_callback_duration_us = callback_duration_us;
		if (callback_duration_us > m_runtime_metrics_state.max_callback_duration_us) {
			m_runtime_metrics_state.max_callback_duration_us = callback_duration_us;
		}
		if (response_sent || status != OpenThermResponseStatus::SUCCESS) {
			m_protocolDebugDirty = true;
		}
		}

		void OpenQuattOTSlave::parseRequest(OpenThermMessageType type, OpenThermMessageID dataID, uint16_t data)
	{
			if (!m_enabled) {
				return;
			}
			if(dataID==OpenThermMessageID::Status)
			{
				m_master_state.ch_enable = message_data::parse_flag8_hb_0(data);
				m_master_state.dhw_enable = message_data::parse_flag8_hb_1(data);
				m_master_state.cooling_enable = message_data::parse_flag8_hb_2(data);
				m_master_state.otc_active = message_data::parse_flag8_hb_3(data);
				m_master_state.ch2_enable = message_data::parse_flag8_hb_4(data);
				m_lastMasterStatusMs = now_millis();
		}

		if(type != OpenThermMessageType::WRITE_DATA)
			return;

		switch(dataID)
		{
				case OpenThermMessageID::TSet:
					m_master_state.t_set = message_data::parse_f88(data);
					break;

			case OpenThermMessageID::MaxRelModLevelSetting:
				m_master_state.max_rel_mod_level_setting = message_data::parse_f88(data);
				break;

			case OpenThermMessageID::TsetCH2:
				break;

			case OpenThermMessageID::TrOverride:
				break;

				case OpenThermMessageID::TrSet:
					m_master_state.t_room_set = message_data::parse_f88(data);
					break;

				case OpenThermMessageID::Tr:
					m_master_state.t_room = message_data::parse_f88(data);
					break;

			case OpenThermMessageID::MConfigMMemberIDcode:
				m_master_state.member_id = message_data::parse_u8_lb(data);
				break;

				case OpenThermMessageID::MaxTSet:
					// Treat thermostat writes as intent only; OpenQuatt owns the actual limit value.
					break;

			case OpenThermMessageID::OpenThermVersionMaster:
				m_master_state.ot_version = message_data::parse_f88(data);
				note_t6_compat_handshake_(dataID, data);
				break;

			case OpenThermMessageID::MasterVersion:
				m_master_state.product_version = message_data::parse_u8_hb(data);
				m_master_state.product_type = message_data::parse_u8_lb(data);
				note_t6_compat_handshake_(dataID, data);
				break;

			default:
				break;
			}
		}

		void OpenQuattOTSlave::refresh_master_runtime_state_()
		{
			const unsigned long now_ms = now_millis();
			if (!m_enabled) {
				m_master_state.ch_enable = false;
				m_master_state.dhw_enable = false;
				m_master_state.cooling_enable = false;
				m_master_state.otc_active = false;
				m_master_state.ch2_enable = false;
				return;
			}

			if (m_lastMasterStatusMs == 0) {
				if (m_runtimeGraceUntilMs != 0 && now_ms <= m_runtimeGraceUntilMs) {
					return;
				}
				m_master_state.ch_enable = false;
				m_master_state.dhw_enable = false;
				m_master_state.cooling_enable = false;
				m_master_state.otc_active = false;
				m_master_state.ch2_enable = false;
				return;
			}

			const unsigned long age_ms = now_ms - m_lastMasterStatusMs;
			if (age_ms > MASTER_STATUS_TIMEOUT_MS) {
				m_master_state.ch_enable = false;
				m_master_state.dhw_enable = false;
				m_master_state.cooling_enable = false;
				m_master_state.otc_active = false;
				m_master_state.ch2_enable = false;
			}
		}

		void OpenQuattOTSlave::publish_master_runtime_state_()
		{
			auto publish_switch_if_changed = [](OpenQuattOTSlaveSwitch *sw, bool value, int8_t &last_value) {
				if (sw == nullptr || last_value == static_cast<int8_t>(value)) {
					return;
				}
				sw->publish_state(value);
				last_value = static_cast<int8_t>(value);
			};

			auto publish_binary_if_changed = [](binary_sensor::BinarySensor *sensor, bool value, int8_t &last_value) {
				if (sensor == nullptr || last_value == static_cast<int8_t>(value)) {
					return;
				}
				sensor->publish_state(value);
				last_value = static_cast<int8_t>(value);
			};

			auto publish_float_if_changed = [](sensor::Sensor *sensor, float value, float &last_value) {
				if (sensor == nullptr) {
					return;
				}
				if (std::isnan(value)) {
					return;
				}
				if (std::isnan(last_value) || std::fabs(last_value - value) > 0.001f) {
					sensor->publish_state(value);
					last_value = value;
				}
			};

			auto publish_int_if_changed = [](sensor::Sensor *sensor, int value, int &last_value) {
				if (sensor == nullptr || value < 0 || last_value == value) {
					return;
				}
				sensor->publish_state(value);
				last_value = value;
			};

			#ifdef OPENQUATT_OT_SLAVE_HAS_SWITCH_enabled
			publish_switch_if_changed(this->enabled_switch, m_enabled, m_lastPublishedEnabled);
			#endif
			#ifdef OPENQUATT_OT_SLAVE_HAS_SWITCH_debug_enabled
			publish_switch_if_changed(this->debug_enabled_switch, m_debug_enabled, m_lastPublishedDebugEnabled);
			#endif
			#ifdef OPENQUATT_OT_SLAVE_HAS_BINARY_SENSOR_master_ch_enable
			publish_binary_if_changed(this->master_ch_enable_binary_sensor, m_master_state.ch_enable, m_lastPublishedMasterCHEnableBinary);
			#endif
			#ifdef OPENQUATT_OT_SLAVE_HAS_BINARY_SENSOR_master_cooling_enable
			publish_binary_if_changed(this->master_cooling_enable_binary_sensor, m_master_state.cooling_enable, m_lastPublishedMasterCoolingEnableBinary);
			#endif
			#ifdef OPENQUATT_OT_SLAVE_HAS_SENSOR_master_memberid
			publish_int_if_changed(this->master_memberid_sensor, m_master_state.member_id, m_lastPublishedMasterMemberID);
			#endif
			#ifdef OPENQUATT_OT_SLAVE_HAS_SENSOR_master_ot_version
			publish_float_if_changed(this->master_ot_version_sensor, m_master_state.ot_version, m_lastPublishedMasterOTVersion);
			#endif
			#ifdef OPENQUATT_OT_SLAVE_HAS_SENSOR_t_set
			publish_float_if_changed(this->t_set_sensor, m_master_state.t_set, m_lastPublishedTSet);
			#endif
			#ifdef OPENQUATT_OT_SLAVE_HAS_SENSOR_t_roomset
			publish_float_if_changed(this->t_roomset_sensor, m_master_state.t_room_set, m_lastPublishedTRoomSet);
			#endif
			#ifdef OPENQUATT_OT_SLAVE_HAS_SENSOR_t_room
			publish_float_if_changed(this->t_room_sensor, m_master_state.t_room, m_lastPublishedTRoom);
			#endif
		}

		uint16_t OpenQuattOTSlave::build_slave_status_(uint16_t master_status) const
		{
			uint16_t status = master_status & 0xFF00;
			status = message_data::write_flag8_lb_0(m_slave_state.fault, status);
			status = message_data::write_flag8_lb_1(m_slave_state.ch_active, status);
			status = message_data::write_flag8_lb_2(false, status);  // DHW mode
			status = message_data::write_flag8_lb_3(m_slave_state.flame_on, status);
			status = message_data::write_flag8_lb_4(m_slave_state.cooling_active, status);
			status = message_data::write_flag8_lb_5(false, status);  // CH2 mode
			status = message_data::write_flag8_lb_6(m_slave_state.diagnostic, status);
			return status;
		}

		uint16_t OpenQuattOTSlave::build_slave_config_() const
		{
			// OpenQuatt currently presents itself as a modulating CH-only slave:
			// no DHW, no cooling support, no CH2, and no extra low-off/pump-control contract.
			uint16_t config = 0x0001;  // Member ID 1 in the low byte.
			config = message_data::write_flag8_hb_0(false, config);  // DHW present
			config = message_data::write_flag8_hb_1(true, config);   // Control type: modulating
			config = message_data::write_flag8_hb_2(false, config);  // Cooling supported
			config = message_data::write_flag8_hb_3(false, config);  // DHW storage / config
			config = message_data::write_flag8_hb_4(false, config);  // Low-off & pump control allowed
			config = message_data::write_flag8_hb_5(false, config);  // CH2 present
			return config;
		}

		uint16_t OpenQuattOTSlave::build_remote_boiler_parameter_flags_() const
		{
			// RBPflags (ID 6):
			// - HB bits advertise which remote boiler parameters exist.
			// - LB bits advertise whether the matching parameter is writable.
			//
			// OpenQuatt exposes only remote parameter 2 (Max CH water setpoint),
			// and keeps that value owned by OpenQuatt itself, so it is read-only.
			uint16_t flags = 0x0000;
			flags = message_data::write_flag8_hb_1(true, flags);   // Remote parameter 2 available
			flags = message_data::write_flag8_lb_1(false, flags);  // Read-only for the thermostat
			return flags;
		}

		void OpenQuattOTSlave::sync_switch_states_()
		{
#ifdef OPENQUATT_OT_SLAVE_HAS_SWITCH_enabled
			if (this->enabled_switch != nullptr && this->enabled_switch->state != m_enabled) {
				set_enabled_(this->enabled_switch->state);
			}
#endif
#ifdef OPENQUATT_OT_SLAVE_HAS_SWITCH_debug_enabled
			if (this->debug_enabled_switch != nullptr && this->debug_enabled_switch->state != m_debug_enabled) {
				set_debug_enabled_(this->debug_enabled_switch->state);
			}
#endif
		}

		void OpenQuattOTSlave::refresh_slave_runtime_state_()
		{
			if (m_enabled) {
				return;
			}
			m_slave_state.ch_active = false;
			m_slave_state.cooling_active = false;
			m_slave_state.flame_on = false;
		}

		void OpenQuattOTSlave::publish_slave_runtime_state_()
		{
			auto publish_binary_if_changed = [](binary_sensor::BinarySensor *sensor, bool value, int8_t &last_value) {
				if (sensor == nullptr || last_value == static_cast<int8_t>(value)) {
					return;
				}
				sensor->publish_state(value);
				last_value = static_cast<int8_t>(value);
			};

			auto publish_float_if_changed = [](sensor::Sensor *sensor, float value, float &last_value) {
				if (sensor == nullptr) {
					return;
				}
				if (std::isnan(value)) {
					return;
				}
				if (std::isnan(last_value) || std::fabs(last_value - value) > 0.001f) {
					sensor->publish_state(value);
					last_value = value;
				}
			};

			auto publish_int_if_changed = [](sensor::Sensor *sensor, int value, int &last_value) {
				if (sensor == nullptr || last_value == value) {
					return;
				}
				sensor->publish_state(value);
				last_value = value;
			};

			#ifdef OPENQUATT_OT_SLAVE_HAS_BINARY_SENSOR_fault_indication
			publish_binary_if_changed(this->fault_indication_binary_sensor, m_slave_state.fault, m_lastPublishedSlaveFault);
			#endif
			#ifdef OPENQUATT_OT_SLAVE_HAS_BINARY_SENSOR_ch_active
			publish_binary_if_changed(this->ch_active_binary_sensor, m_slave_state.ch_active, m_lastPublishedSlaveCHActive);
			#endif
			#ifdef OPENQUATT_OT_SLAVE_HAS_BINARY_SENSOR_flame_on
			publish_binary_if_changed(this->flame_on_binary_sensor, m_slave_state.flame_on, m_lastPublishedSlaveFlameOn);
			#endif
			#ifdef OPENQUATT_OT_SLAVE_HAS_BINARY_SENSOR_cooling_active
			publish_binary_if_changed(this->cooling_active_binary_sensor, m_slave_state.cooling_active, m_lastPublishedSlaveCoolingActive);
			#endif
			#ifdef OPENQUATT_OT_SLAVE_HAS_BINARY_SENSOR_diagnostic_indication
			publish_binary_if_changed(this->diagnostic_indication_binary_sensor, m_slave_state.diagnostic, m_lastPublishedSlaveDiagnostic);
			#endif
			#ifdef OPENQUATT_OT_SLAVE_HAS_SENSOR_t_boiler
			publish_float_if_changed(this->t_boiler_sensor, m_slave_state.t_boiler, m_lastPublishedTBoiler);
			#endif
			#ifdef OPENQUATT_OT_SLAVE_HAS_SENSOR_t_ret
			publish_float_if_changed(this->t_ret_sensor, m_slave_state.t_ret, m_lastPublishedTRet);
			#endif
			#ifdef OPENQUATT_OT_SLAVE_HAS_SENSOR_max_t_set
			publish_float_if_changed(this->max_t_set_sensor, m_slave_state.max_t_set, m_lastPublishedMaxTSet);
			#endif
			#ifdef OPENQUATT_OT_SLAVE_HAS_SENSOR_slave_ot_version
			publish_float_if_changed(this->slave_ot_version_sensor, SUPPORTED_OPENTHERM_VERSION, m_lastPublishedSlaveOTVersion);
			#endif
			#ifdef OPENQUATT_OT_SLAVE_HAS_SENSOR_slave_memberid
			publish_int_if_changed(this->slave_memberid_sensor, 1, m_lastPublishedSlaveMemberID);
			#endif
		}

		void OpenQuattOTSlave::publish_protocol_debug_state_()
		{
			const unsigned long now_ms = now_millis();
			if (m_lastProtocolDebugPublishMs != 0 &&
			    (now_ms - m_lastProtocolDebugPublishMs) < PROTOCOL_DEBUG_PUBLISH_INTERVAL_MS) {
				return;
			}

			auto publish_float_if_changed = [](sensor::Sensor *sensor, float value, float &last_value) {
				if (sensor == nullptr) {
					return;
				}
				if (std::isnan(last_value) || std::fabs(last_value - value) > 0.001f) {
					sensor->publish_state(value);
					last_value = value;
				}
			};

			auto publish_text_if_changed = [](text_sensor::TextSensor *sensor, const std::string &value, std::string &last_value) {
				if (sensor == nullptr || last_value == value) {
					return;
				}
				sensor->publish_state(value);
				last_value = value;
			};

			float rx_success_rate = 0.0f;
			if (m_lastRuntimeMetricsSnapshotMs != 0 && now_ms > m_lastRuntimeMetricsSnapshotMs) {
				const unsigned long elapsed_ms = now_ms - m_lastRuntimeMetricsSnapshotMs;
				if (elapsed_ms > 0) {
					const uint32_t delta_success = m_protocol_debug_state.rx_success_count - m_lastRuntimeMetricsSnapshotSuccessCount;
					rx_success_rate = (static_cast<float>(delta_success) * 1000.0f) / static_cast<float>(elapsed_ms);
				}
			}

			float last_success_age_ms = NAN;
			if (m_runtime_metrics_state.last_success_ms != 0 && now_ms >= m_runtime_metrics_state.last_success_ms) {
				last_success_age_ms = static_cast<float>(now_ms - m_runtime_metrics_state.last_success_ms);
			}

			#ifdef OPENQUATT_OT_SLAVE_HAS_SENSOR_rx_success_count
			publish_float_if_changed(this->rx_success_count_sensor, static_cast<float>(m_protocol_debug_state.rx_success_count), m_lastPublishedRXSuccessCount);
			#endif
			#ifdef OPENQUATT_OT_SLAVE_HAS_SENSOR_rx_invalid_count
			publish_float_if_changed(this->rx_invalid_count_sensor, static_cast<float>(m_protocol_debug_state.rx_invalid_count), m_lastPublishedRXInvalidCount);
			#endif
			#ifdef OPENQUATT_OT_SLAVE_HAS_SENSOR_rx_timeout_count
			publish_float_if_changed(this->rx_timeout_count_sensor, static_cast<float>(m_protocol_debug_state.rx_timeout_count), m_lastPublishedRXTimeoutCount);
			#endif
			#ifdef OPENQUATT_OT_SLAVE_HAS_SENSOR_rx_invalid_parity_count
			publish_float_if_changed(this->rx_invalid_parity_count_sensor, static_cast<float>(m_protocol_debug_state.rx_invalid_parity_count), m_lastPublishedRXInvalidParityCount);
			#endif
			#ifdef OPENQUATT_OT_SLAVE_HAS_SENSOR_rx_invalid_message_count
			publish_float_if_changed(this->rx_invalid_message_count_sensor, static_cast<float>(m_protocol_debug_state.rx_invalid_message_count), m_lastPublishedRXInvalidMessageCount);
			#endif
			#ifdef OPENQUATT_OT_SLAVE_HAS_SENSOR_rx_success_rate
			publish_float_if_changed(this->rx_success_rate_sensor, rx_success_rate, m_lastPublishedRXSuccessRate);
			#endif
			#ifdef OPENQUATT_OT_SLAVE_HAS_SENSOR_last_success_age_ms
			if (!std::isnan(last_success_age_ms)) {
				publish_float_if_changed(this->last_success_age_ms_sensor, last_success_age_ms, m_lastPublishedLastSuccessAgeMs);
			}
			#endif
			#ifdef OPENQUATT_OT_SLAVE_HAS_SENSOR_last_callback_duration_us
			publish_float_if_changed(this->last_callback_duration_us_sensor, static_cast<float>(m_runtime_metrics_state.last_callback_duration_us), m_lastPublishedLastCallbackDurationUs);
			#endif
			#ifdef OPENQUATT_OT_SLAVE_HAS_SENSOR_max_callback_duration_us
			publish_float_if_changed(this->max_callback_duration_us_sensor, static_cast<float>(m_runtime_metrics_state.max_callback_duration_us), m_lastPublishedMaxCallbackDurationUs);
			#endif
			#ifdef OPENQUATT_OT_SLAVE_HAS_SENSOR_last_response_latency_us
			publish_float_if_changed(this->last_response_latency_us_sensor, static_cast<float>(m_runtime_metrics_state.last_response_latency_us), m_lastPublishedLastResponseLatencyUs);
			#endif
			#ifdef OPENQUATT_OT_SLAVE_HAS_SENSOR_max_response_latency_us
			publish_float_if_changed(this->max_response_latency_us_sensor, static_cast<float>(m_runtime_metrics_state.max_response_latency_us), m_lastPublishedMaxResponseLatencyUs);
			#endif
			#ifdef OPENQUATT_OT_SLAVE_HAS_SENSOR_last_loop_gap_ms
			publish_float_if_changed(this->last_loop_gap_ms_sensor, static_cast<float>(m_runtime_metrics_state.last_loop_gap_ms), m_lastPublishedLastLoopGapMs);
			#endif
			#ifdef OPENQUATT_OT_SLAVE_HAS_SENSOR_max_loop_gap_ms
			publish_float_if_changed(this->max_loop_gap_ms_sensor, static_cast<float>(m_runtime_metrics_state.max_loop_gap_ms), m_lastPublishedMaxLoopGapMs);
			#endif
			#ifdef OPENQUATT_OT_SLAVE_HAS_SENSOR_last_request_id
			if (m_protocol_debug_state.last_request_id >= 0) {
				publish_float_if_changed(this->last_request_id_sensor, static_cast<float>(m_protocol_debug_state.last_request_id), m_lastPublishedLastRequestID);
			}
			#endif
			#ifdef OPENQUATT_OT_SLAVE_HAS_SENSOR_last_error_id
			if (m_protocol_debug_state.last_error_id >= 0) {
				publish_float_if_changed(this->last_error_id_sensor, static_cast<float>(m_protocol_debug_state.last_error_id), m_lastPublishedLastErrorID);
			}
			#endif
			#ifdef OPENQUATT_OT_SLAVE_HAS_TEXT_SENSOR_last_request
			if (m_debug_enabled || m_protocol_debug_state.rx_invalid_count > 0) {
				publish_text_if_changed(this->last_request_text_sensor, m_protocol_debug_state.last_request, m_lastPublishedLastRequest);
			}
			#endif
			#ifdef OPENQUATT_OT_SLAVE_HAS_TEXT_SENSOR_last_error
			publish_text_if_changed(this->last_error_text_sensor, m_protocol_debug_state.last_error, m_lastPublishedLastError);
			#endif
			#ifdef OPENQUATT_OT_SLAVE_HAS_TEXT_SENSOR_compatibility_mode
			publish_text_if_changed(this->compatibility_mode_text_sensor, m_protocol_debug_state.compatibility_mode, m_lastPublishedCompatibilityMode);
			#endif

			m_lastRuntimeMetricsSnapshotMs = now_ms;
			m_lastRuntimeMetricsSnapshotSuccessCount = m_protocol_debug_state.rx_success_count;
			m_lastProtocolDebugPublishMs = now_ms;
			m_protocolDebugDirty = false;
		}

		void OpenQuattOTSlave::record_protocol_event_(unsigned long request, OpenThermResponseStatus status,
		                                             OpenThermMessageType requestType, OpenThermMessageID requestDataID,
		                                             uint16_t requestData)
		{
			m_protocol_debug_state.last_request_id = static_cast<int>(requestDataID);
			const bool keep_request_summary = m_debug_enabled || status != OpenThermResponseStatus::SUCCESS;
			std::string request_summary;
			if (keep_request_summary) {
				request_summary = format_ot_frame_("REQ", request, requestType, requestDataID, requestData,
				                                  m_otThermostat->statusToString(status));
				m_protocol_debug_state.last_request = request_summary;
			}
			m_protocolDebugDirty = true;

			switch (status) {
				case OpenThermResponseStatus::SUCCESS:
					m_protocol_debug_state.rx_success_count++;
					m_runtime_metrics_state.last_success_ms = now_millis();
					break;
				case OpenThermResponseStatus::TIMEOUT:
					m_protocol_debug_state.rx_timeout_count++;
					m_protocol_debug_state.rx_invalid_count++;
					m_protocol_debug_state.last_error_id = static_cast<int>(requestDataID);
					m_protocol_debug_state.last_error = request_summary;
					break;
				case OpenThermResponseStatus::INVALID:
					m_protocol_debug_state.rx_invalid_count++;
					m_protocol_debug_state.last_error_id = static_cast<int>(requestDataID);
					m_protocol_debug_state.last_error = request_summary;
					break;
				case OpenThermResponseStatus::INVALID_PARITY:
					m_protocol_debug_state.rx_invalid_count++;
					m_protocol_debug_state.rx_invalid_parity_count++;
					m_protocol_debug_state.last_error_id = static_cast<int>(requestDataID);
					m_protocol_debug_state.last_error = request_summary;
					break;
				case OpenThermResponseStatus::INVALID_MESSAGE:
					m_protocol_debug_state.rx_invalid_count++;
					m_protocol_debug_state.rx_invalid_message_count++;
					m_protocol_debug_state.last_error_id = static_cast<int>(requestDataID);
					m_protocol_debug_state.last_error = request_summary;
					break;
				case OpenThermResponseStatus::NONE:
				default:
					break;
			}

			if (status == OpenThermResponseStatus::SUCCESS) {
				if (requestDataID == OpenThermMessageID::OpenThermVersionSlave) {
					m_t6CompatUntilMs = now_millis() + T6_COMPAT_WINDOW_MS;
					m_protocol_debug_state.compatibility_mode = "t6-handshake";
				} else if (requestDataID == OpenThermMessageID::OpenThermVersionMaster ||
				           requestDataID == OpenThermMessageID::MasterVersion) {
					note_t6_compat_handshake_(requestDataID, requestData);
				}
			}
		}

		void OpenQuattOTSlave::note_t6_compat_handshake_(OpenThermMessageID dataID, uint16_t data)
		{
			if (dataID == OpenThermMessageID::OpenThermVersionMaster) {
				const float version = message_data::parse_f88(data);
				if (version >= 2.0f) {
					m_t6CompatUntilMs = now_millis() + T6_COMPAT_WINDOW_MS;
				}
			} else if (dataID == OpenThermMessageID::MasterVersion) {
				const uint8_t product_version = message_data::parse_u8_hb(data);
				const uint8_t product_type = message_data::parse_u8_lb(data);
				if (product_version > 0 || product_type > 0) {
					m_t6CompatUntilMs = now_millis() + T6_COMPAT_WINDOW_MS;
				}
			}
			m_protocol_debug_state.compatibility_mode = is_t6_compat_active_() ? "t6-handshake" : "standard";
		}

		bool OpenQuattOTSlave::is_t6_compat_active_() const
		{
			return m_t6CompatUntilMs != 0 && now_millis() <= m_t6CompatUntilMs;
		}

		unsigned long OpenQuattOTSlave::build_slave_response_(OpenThermMessageType type, OpenThermMessageID dataID, uint16_t data)
		{
			if (!m_enabled) {
				return 0;
			}
			OpenThermMessageType responseType = type == OpenThermMessageType::WRITE_DATA ? OpenThermMessageType::WRITE_ACK : OpenThermMessageType::READ_ACK;
			uint16_t responseData = data;
			refresh_slave_runtime_state_();

			if(type == OpenThermMessageType::READ_DATA)
			{
				switch(dataID)
				{
					case OpenThermMessageID::Status:
						responseData = build_slave_status_(data);
						break;
					case OpenThermMessageID::SConfigSMemberIDcode:
						responseData = build_slave_config_();
						break;
					case OpenThermMessageID::ASFflags:
					case OpenThermMessageID::TflowCH2:
						responseData = 0x0000;
						break;
					case OpenThermMessageID::RBPflags:
						responseData = build_remote_boiler_parameter_flags_();
						break;
					case OpenThermMessageID::Tdhw:
					case OpenThermMessageID::Tdhw2:
						// Some thermostats probe DHW values even on CH-only systems.
						// Return a conservative compatibility temperature rather than DATA_INVALID.
						responseData = message_data::encode_f88(m_slave_state.t_dhw);
						break;
					case OpenThermMessageID::TrOverride:
						// OpenQuatt does not drive a remote room-setpoint override, but some
						// thermostats keep polling the ID and treat UNKNOWN_DATA_ID poorly.
						// Respond with a neutral "no override" value instead.
						responseData = message_data::encode_f88(0.0f);
						break;
					case OpenThermMessageID::RelModLevel:
						responseData = message_data::encode_f88(m_slave_state.rel_mod_level);
						break;
					case OpenThermMessageID::Texhaust:
						responseType = OpenThermMessageType::DATA_INVALID;
						responseData = 0x0000;
						break;
					case OpenThermMessageID::TdhwSetUBTdhwSetLB:
						// Some thermostats keep probing this DHW bounds ID even when the slave
						// does not advertise DHW support. Return conservative bounds as a
						// compatibility response instead of DATA_INVALID.
						responseData = 0x3C0A;
						break;
					case OpenThermMessageID::TdhwSet:
						responseData = message_data::encode_f88(m_slave_state.t_dhw_set);
						break;
					case OpenThermMessageID::RemoteOverrideFunction:
						// OpenQuatt does not actively drive thermostat-side remote override
						// priorities or operating modes. Return a neutral "no override
						// function active" response instead of UNKNOWN_DATA_ID.
						responseData = 0x0000;
						break;
					case OpenThermMessageID::T6CompatProbe70:
					case OpenThermMessageID::T6CompatProbe72:
					case OpenThermMessageID::T6CompatProbe82:
						// These IDs are probed by the Honeywell T6, but we do not have a
						// verified semantic mapping for them. DATA_INVALID is a softer and
						// more protocol-friendly response than UNKNOWN_DATA_ID.
						responseType = OpenThermMessageType::DATA_INVALID;
						responseData = 0x0000;
						break;
					case OpenThermMessageID::MaxCapacityMinModLevel:
						responseData = 0x1400;
						break;
					case OpenThermMessageID::CHPressure:
						// OpenQuatt does not measure hydronic CH pressure, but a conservative
						// fixed value is more compatible than DATA_INVALID for some thermostats.
						responseData = message_data::encode_f88(m_slave_state.ch_pressure);
						break;
					case OpenThermMessageID::Tboiler:
						responseData = message_data::encode_f88(m_slave_state.t_boiler);
						break;
					case OpenThermMessageID::Tret:
						responseData = message_data::encode_f88(m_slave_state.t_ret);
						break;
					case OpenThermMessageID::Toutside:
						if (std::isnan(m_slave_state.t_outside)) {
							responseType = OpenThermMessageType::DATA_INVALID;
							responseData = 0x0000;
						} else {
							responseData = message_data::encode_f88(m_slave_state.t_outside);
						}
						break;
					case OpenThermMessageID::MaxTSetUBMaxTSetLB:
						responseData = 0x500A;
						break;
					case OpenThermMessageID::MaxTSet:
						responseData = message_data::encode_f88(m_slave_state.max_t_set);
						break;
				case OpenThermMessageID::OpenThermVersionSlave:
						responseData = message_data::encode_f88(SUPPORTED_OPENTHERM_VERSION);
					break;
				case OpenThermMessageID::SlaveVersion:
					if (is_t6_compat_active_() && m_master_state.product_version >= 0 && m_master_state.product_type >= 0) {
						responseData = (static_cast<uint16_t>(m_master_state.product_version) << 8)
						             | static_cast<uint8_t>(m_master_state.product_type);
					} else {
						responseData = 0x0101;
					}
					break;
				default:
					responseType = OpenThermMessageType::UNKNOWN_DATA_ID;
					responseData = 0x0000;
					break;
				}
			}

			return m_otThermostat->buildResponse(responseType, dataID, responseData);
		}
	
/*        void OpenQuattOTSlave::control(const climate::ClimateCall & call) 
        {
        }

        climate::ClimateTraits OpenQuattOTSlave::traits() 
        {
            auto traits = climate::ClimateTraits();
            return traits;
        }*/

	        void OpenQuattOTSlave::loop() 
	        {        	
	        	const unsigned long now_ms = now_millis();
	        	if (m_msLastLoop != 0) {
	        		const uint32_t loop_gap_ms = static_cast<uint32_t>(now_ms - m_msLastLoop);
	        		m_runtime_metrics_state.last_loop_gap_ms = loop_gap_ms;
	        		if (loop_gap_ms > m_runtime_metrics_state.max_loop_gap_ms) {
	        			m_runtime_metrics_state.max_loop_gap_ms = loop_gap_ms;
	        		}
	        	}
	        	sync_switch_states_();
	        	m_msLastLoop = now_ms;
	        	if (!m_otaActive && !m_updatePrepareActive && m_enabled && !m_otStarted && m_otThermostat != NULL) {
	        		if (!m_otStartPending) {
	        			schedule_opentherm_start_();
	        		}
	        		try_start_opentherm_();
	        	}
	        	if(m_otStarted && m_otThermostat!=NULL)
	        		m_otThermostat->process();
	        }

	void OpenQuattOTSlave::update()
	{
		refresh_master_runtime_state_();
		m_protocol_debug_state.compatibility_mode = is_t6_compat_active_() ? "t6-handshake" : "standard";
		publish_master_runtime_state_();
		refresh_slave_runtime_state_();
		publish_slave_runtime_state_();
		publish_protocol_debug_state_();
	}
	
	    } // namespace OpenQuattOTSlave
	} // namespace esphome
