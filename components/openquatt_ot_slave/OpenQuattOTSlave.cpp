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
	static constexpr unsigned long MASTER_STATUS_TIMEOUT_MS = 5000;
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

		void OpenQuattOTSlave::start_opentherm_()
		{
			if (m_otThermostat == NULL || m_otStarted || m_otaActive || !m_enabled) {
				return;
			}
			m_otThermostat->begin(handleInterruptThermostat, processRequestThermostat, this);
			m_otStarted = true;
		}

		void OpenQuattOTSlave::stop_opentherm_()
		{
			if (m_otThermostat == NULL || !m_otStarted) {
				return;
			}
			m_otThermostat->end();
			m_otStarted = false;
		}

		void OpenQuattOTSlave::set_enabled_(bool enabled)
		{
			if (m_enabled == enabled) {
				return;
			}
			m_enabled = enabled;
			if (m_enabled) {
				m_updatePrepareActive = false;
				start_opentherm_();
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
#ifdef USE_OTA_STATE_LISTENER
		        ota::get_global_ota_callback()->add_global_state_listener(this);
#endif
#ifdef OPENQUATT_OT_SLAVE_HAS_SWITCH_enabled
			if (this->enabled_switch != nullptr) {
				this->enabled_switch->set_write_callback([this](bool state) { this->set_enabled_(state); });
				this->m_enabled = this->enabled_switch->state;
			}
#endif
#ifdef OPENQUATT_OT_SLAVE_HAS_SWITCH_debug_enabled
			if (this->debug_enabled_switch != nullptr) {
				this->debug_enabled_switch->set_write_callback([this](bool state) { this->set_debug_enabled_(state); });
				this->m_debug_enabled = this->debug_enabled_switch->state;
			}
#endif
			m_msLastLoop=now_millis();
			refresh_slave_runtime_state_();
			publish_master_runtime_state_();
			publish_slave_runtime_state_();
			if (m_enabled) {
				start_opentherm_();
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
		
		OpenThermMessageType requestType=m_otThermostat->getMessageType(request);
		OpenThermMessageID requestDataID=m_otThermostat->getDataID(request);
		uint16_t requestData=(uint16_t)request;

		if (m_debug_enabled) {
			auto request_summary = format_ot_frame_("REQ", request, requestType, requestDataID, requestData,
			                                       m_otThermostat->statusToString(status));
			ESP_LOGD(TAG, "%s", request_summary.c_str());
		}

			if(status==OpenThermResponseStatus::SUCCESS)
			{			
				parseRequest(requestType, requestDataID, requestData);
				unsigned long response = build_slave_response_(requestType, requestDataID, requestData);
				if(response != 0)
				{
						OpenThermMessageType responseType=m_otThermostat->getMessageType(response);
						if (m_debug_enabled) {
							auto response_summary = format_ot_frame_("RSP", response, responseType, requestDataID, static_cast<uint16_t>(response), "READY");
							ESP_LOGD(TAG, "%s", response_summary.c_str());
						}
						m_otThermostat->sendResponse(response);
				}
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
				break;

			default:
				break;
			}
		}

		void OpenQuattOTSlave::refresh_master_runtime_state_()
		{
			if (!m_enabled) {
				m_master_state.ch_enable = false;
				m_master_state.dhw_enable = false;
				m_master_state.cooling_enable = false;
				m_master_state.otc_active = false;
				m_master_state.ch2_enable = false;
				return;
			}

			if (m_lastMasterStatusMs == 0) {
				m_master_state.ch_enable = false;
				m_master_state.dhw_enable = false;
				m_master_state.cooling_enable = false;
				m_master_state.otc_active = false;
				m_master_state.ch2_enable = false;
				return;
			}

			const unsigned long age_ms = now_millis() - m_lastMasterStatusMs;
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
					responseData = 0x0101;
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
	        	m_msLastLoop=now_millis();
	        	if (!m_otaActive && !m_updatePrepareActive && m_enabled && !m_otStarted && m_otThermostat != NULL)
	        		start_opentherm_();
	        	if(m_otStarted && m_otThermostat!=NULL)
	        		m_otThermostat->process();
	        }

	void OpenQuattOTSlave::update()
	{
		refresh_master_runtime_state_();
		publish_master_runtime_state_();
		refresh_slave_runtime_state_();
		publish_slave_runtime_state_();
	}
	
	    } // namespace OpenQuattOTSlave
	} // namespace esphome
