#pragma once

#include <cmath>
#include <cstdint>
#include <string>

#include "esphome.h"
#include "OpenTherm.h"
#include "esphome/components/sensor/sensor.h"
#include "esphome/components/binary_sensor/binary_sensor.h"
#include "esphome/components/text_sensor/text_sensor.h"
#ifdef USE_OTA_STATE_LISTENER
#include "esphome/components/ota/ota_backend.h"
#endif
#include "switch.h"
#include "number.h"

// Ensure that all component macros are defined, even if the component is not used
#ifndef OPENQUATT_OT_SLAVE_SENSOR_LIST
#define OPENQUATT_OT_SLAVE_SENSOR_LIST(F, sep)
#endif
#ifndef OPENQUATT_OT_SLAVE_BINARY_SENSOR_LIST
#define OPENQUATT_OT_SLAVE_BINARY_SENSOR_LIST(F, sep)
#endif
#ifndef OPENQUATT_OT_SLAVE_TEXT_SENSOR_LIST
#define OPENQUATT_OT_SLAVE_TEXT_SENSOR_LIST(F, sep)
#endif
#ifndef OPENQUATT_OT_SLAVE_SWITCH_LIST
#define OPENQUATT_OT_SLAVE_SWITCH_LIST(F, sep)
#endif
#ifndef OPENQUATT_OT_SLAVE_NUMBER_LIST
#define OPENQUATT_OT_SLAVE_NUMBER_LIST(F, sep)
#endif
#ifndef OPENQUATT_OT_SLAVE_OUTPUT_LIST
#define OPENQUATT_OT_SLAVE_OUTPUT_LIST(F, sep)
#endif
#ifndef OPENQUATT_OT_SLAVE_INPUT_SENSOR_LIST
#define OPENQUATT_OT_SLAVE_INPUT_SENSOR_LIST(F, sep)
#endif

namespace esphome {
    namespace OpenQuattOTSlave {    
        class OpenQuattOTSlave: public PollingComponent
#ifdef USE_OTA_STATE_LISTENER
        , public ota::OTAGlobalStateListener
#endif
        {
        	public: 
			OpenQuattOTSlave();
			virtual ~OpenQuattOTSlave();
			
			void set_pin_thermostat_in(uint8_t pin) { m_pinThermostatIn=pin; }
			void set_pin_thermostat_out(uint8_t pin) { m_pinThermostatOut=pin; }
			
			void set_enabled(bool enabled) { set_enabled_(enabled); }
			void set_ch_enable(bool bCHEnable) { m_master_state.ch_enable = bCHEnable; }
			void set_cooling_enable(bool bCoolingEnable) { m_master_state.cooling_enable = bCoolingEnable; }
			void set_slave_fault(bool value) { m_slave_state.fault = value; }
			void set_slave_ch_active(bool value) { m_slave_state.ch_active = value; }
			void set_slave_flame_on(bool value) { m_slave_state.flame_on = value; }
			void set_slave_cooling_active(bool value) { m_slave_state.cooling_active = value; }
			void set_slave_diagnostic(bool value) { m_slave_state.diagnostic = value; }
			void set_slave_t_boiler(float value) { m_slave_state.t_boiler = value; }
			void set_slave_t_ret(float value) { m_slave_state.t_ret = value; }
			void set_slave_t_outside(float value) { m_slave_state.t_outside = value; }
			void set_slave_max_t_set(float value) { m_slave_state.max_t_set = value; }
			void set_slave_rel_mod_level(float value) { m_slave_state.rel_mod_level = value; }
			void set_slave_ch_pressure(float value) { m_slave_state.ch_pressure = value; }
			void set_slave_t_dhw(float value) { m_slave_state.t_dhw = value; }
			void set_slave_t_dhw_set(float value) { m_slave_state.t_dhw_set = value; }
			void prepare_for_firmware_update();
			
			#define OPENQUATT_OT_SLAVE_SET_SENSOR(entity) void set_ ## entity(sensor::Sensor* sensor) { this->entity = sensor; }
			OPENQUATT_OT_SLAVE_SENSOR_LIST(OPENQUATT_OT_SLAVE_SET_SENSOR, )

			#define OPENQUATT_OT_SLAVE_SET_BINARY_SENSOR(entity) void set_ ## entity(binary_sensor::BinarySensor* binary_sensor) { this->entity = binary_sensor; }
			OPENQUATT_OT_SLAVE_BINARY_SENSOR_LIST(OPENQUATT_OT_SLAVE_SET_BINARY_SENSOR, )

			#define OPENQUATT_OT_SLAVE_SET_TEXT_SENSOR(entity) void set_ ## entity(text_sensor::TextSensor* text_sensor) { this->entity = text_sensor; }
			OPENQUATT_OT_SLAVE_TEXT_SENSOR_LIST(OPENQUATT_OT_SLAVE_SET_TEXT_SENSOR, )

			#define OPENQUATT_OT_SLAVE_SET_SWITCH(entity) void set_ ## entity(OpenQuattOTSlaveSwitch* sw) { this->entity = sw; }
			OPENQUATT_OT_SLAVE_SWITCH_LIST(OPENQUATT_OT_SLAVE_SET_SWITCH, )

			#define OPENQUATT_OT_SLAVE_SET_NUMBER(entity) void set_ ## entity(OpenQuattOTSlaveNumber* number) { this->entity = number; }
			OPENQUATT_OT_SLAVE_NUMBER_LIST(OPENQUATT_OT_SLAVE_SET_NUMBER, )

			#define OPENQUATT_OT_SLAVE_SET_OUTPUT(entity) void set_ ## entity(OpenthermOutput* output) { this->entity = output; }
			OPENQUATT_OT_SLAVE_OUTPUT_LIST(OPENQUATT_OT_SLAVE_SET_OUTPUT, )

			#define OPENQUATT_OT_SLAVE_SET_INPUT_SENSOR(entity) void set_ ## entity(sensor::Sensor* sensor) { this->entity = sensor; }
			OPENQUATT_OT_SLAVE_INPUT_SENSOR_LIST(OPENQUATT_OT_SLAVE_SET_INPUT_SENSOR, )
			
			void setup() override;
			void on_shutdown() override;			
			void dump_config() override;
//			void control(const climate::ClimateCall & call) override;
//		 	climate::ClimateTraits traits() override;
			
			void loop() override;
			void update() override;
#ifdef USE_OTA_STATE_LISTENER
			void on_ota_global_state(ota::OTAState state, float progress, uint8_t error, ota::OTAComponent *component) override;
#endif
        	
			static void processRequestThermostat(unsigned long request, OpenThermResponseStatus status, void *pCallbackUser)
			{
				if(pCallbackUser!=NULL)
					((OpenQuattOTSlave *)pCallbackUser)->processRequestThermostat(request, status);
			}


			private:
				struct MasterState {
					bool ch_enable = false;
					bool dhw_enable = false;
					bool cooling_enable = false;
					bool otc_active = false;
					bool ch2_enable = false;
					int member_id = -1;
					int product_type = -1;
					int product_version = -1;
					float ot_version = NAN;
					float t_set = 0.0f;
					float max_rel_mod_level_setting = NAN;
					float t_room_set = 0.0f;
					float t_room = 0.0f;
				};

				struct SlaveState {
					bool fault = false;
					bool ch_active = false;
					bool flame_on = false;
					bool cooling_active = false;
					bool diagnostic = false;
					float t_boiler = 20.0f;
					float t_ret = 20.0f;
					float t_outside = NAN;
					float max_t_set = 60.0f;
					float rel_mod_level = 0.0f;
					float ch_pressure = 1.5f;
					float t_dhw = 40.0f;
					float t_dhw_set = 40.0f;
				};

				struct ProtocolDebugState {
					uint32_t rx_success_count = 0;
					uint32_t rx_invalid_count = 0;
					uint32_t rx_timeout_count = 0;
					uint32_t rx_invalid_parity_count = 0;
					uint32_t rx_invalid_message_count = 0;
					int last_request_id = -1;
					int last_error_id = -1;
					std::string last_request = "none";
					std::string last_error = "none";
					std::string compatibility_mode = "standard";
				};

				struct RuntimeMetricsState {
					unsigned long last_success_ms = 0;
					uint32_t last_callback_duration_us = 0;
					uint32_t max_callback_duration_us = 0;
					uint32_t last_response_latency_us = 0;
					uint32_t max_response_latency_us = 0;
					uint32_t last_loop_gap_ms = 0;
					uint32_t max_loop_gap_ms = 0;
				};

				uint8_t m_pinThermostatIn = 0;
				uint8_t m_pinThermostatOut = 0;

				bool m_enabled = true;
				bool m_debug_enabled = false;
				bool m_updatePrepareActive = false;
				unsigned long m_lastMasterStatusMs = 0;
				unsigned long m_t6CompatUntilMs = 0;
				unsigned long m_lastProtocolDebugPublishMs = 0;
				unsigned long m_lastRuntimeMetricsSnapshotMs = 0;
				unsigned long m_otStartNotBeforeMs = 0;
				unsigned long m_otBusIdleSinceMs = 0;
				unsigned long m_runtimeGraceUntilMs = 0;
				uint32_t m_lastRuntimeMetricsSnapshotSuccessCount = 0;
				MasterState m_master_state{};
				SlaveState m_slave_state{};
				ProtocolDebugState m_protocol_debug_state{};
				RuntimeMetricsState m_runtime_metrics_state{};
				bool m_protocolDebugDirty = true;
				float m_lastPublishedTBoiler = NAN;
				float m_lastPublishedTRet = NAN;
				float m_lastPublishedMaxTSet = NAN;
				float m_lastPublishedSlaveOTVersion = NAN;
				float m_lastPublishedMasterOTVersion = NAN;
				float m_lastPublishedTSet = NAN;
				float m_lastPublishedTRoomSet = NAN;
				float m_lastPublishedTRoom = NAN;
				float m_lastPublishedRXSuccessCount = NAN;
				float m_lastPublishedRXInvalidCount = NAN;
				float m_lastPublishedRXTimeoutCount = NAN;
				float m_lastPublishedRXInvalidParityCount = NAN;
				float m_lastPublishedRXInvalidMessageCount = NAN;
				float m_lastPublishedRXSuccessRate = NAN;
				float m_lastPublishedLastSuccessAgeMs = NAN;
				float m_lastPublishedLastCallbackDurationUs = NAN;
				float m_lastPublishedMaxCallbackDurationUs = NAN;
				float m_lastPublishedLastResponseLatencyUs = NAN;
				float m_lastPublishedMaxResponseLatencyUs = NAN;
				float m_lastPublishedLastLoopGapMs = NAN;
				float m_lastPublishedMaxLoopGapMs = NAN;
				float m_lastPublishedLastRequestID = NAN;
				float m_lastPublishedLastErrorID = NAN;
				int m_lastPublishedSlaveMemberID = -1;
				int m_lastPublishedMasterMemberID = -1;
				int8_t m_lastPublishedMasterCHEnableBinary = -1;
				int8_t m_lastPublishedMasterCoolingEnableBinary = -1;
				int8_t m_lastPublishedSlaveFault = -1;
				int8_t m_lastPublishedSlaveCHActive = -1;
				int8_t m_lastPublishedSlaveFlameOn = -1;
				int8_t m_lastPublishedSlaveCoolingActive = -1;
				int8_t m_lastPublishedSlaveDiagnostic = -1;
				int8_t m_lastPublishedEnabled = -1;
				int8_t m_lastPublishedDebugEnabled = -1;
				std::string m_lastPublishedLastRequest = "";
				std::string m_lastPublishedLastError = "";
				std::string m_lastPublishedCompatibilityMode = "";
				bool m_otStarted = false;
				bool m_otStartPending = false;
				bool m_otaActive = false;

				unsigned long m_msLastLoop=0;
					
					// Use macros to create fields for every entity specified in the ESPHome configuration
			#define OPENQUATT_OT_SLAVE_DECLARE_SENSOR(entity) sensor::Sensor* entity = nullptr;
			OPENQUATT_OT_SLAVE_SENSOR_LIST(OPENQUATT_OT_SLAVE_DECLARE_SENSOR, )

			#define OPENQUATT_OT_SLAVE_DECLARE_BINARY_SENSOR(entity) binary_sensor::BinarySensor* entity = nullptr;
			OPENQUATT_OT_SLAVE_BINARY_SENSOR_LIST(OPENQUATT_OT_SLAVE_DECLARE_BINARY_SENSOR, )

			#define OPENQUATT_OT_SLAVE_DECLARE_TEXT_SENSOR(entity) text_sensor::TextSensor* entity = nullptr;
			OPENQUATT_OT_SLAVE_TEXT_SENSOR_LIST(OPENQUATT_OT_SLAVE_DECLARE_TEXT_SENSOR, )

			#define OPENQUATT_OT_SLAVE_DECLARE_SWITCH(entity) OpenQuattOTSlaveSwitch* entity = nullptr;
			OPENQUATT_OT_SLAVE_SWITCH_LIST(OPENQUATT_OT_SLAVE_DECLARE_SWITCH, )

			#define OPENQUATT_OT_SLAVE_DECLARE_NUMBER(entity) OpenQuattOTSlaveNumber* entity = nullptr;
			OPENQUATT_OT_SLAVE_NUMBER_LIST(OPENQUATT_OT_SLAVE_DECLARE_NUMBER, )

			#define OPENQUATT_OT_SLAVE_DECLARE_OUTPUT(entity) OpenthermOutput* entity = nullptr;
			OPENQUATT_OT_SLAVE_OUTPUT_LIST(OPENQUATT_OT_SLAVE_DECLARE_OUTPUT, )

			#define OPENQUATT_OT_SLAVE_DECLARE_INPUT_SENSOR(entity) sensor::Sensor* entity = nullptr;
			OPENQUATT_OT_SLAVE_INPUT_SENSOR_LIST(OPENQUATT_OT_SLAVE_DECLARE_INPUT_SENSOR, )
			    
				static OpenTherm *m_otThermostat;

				static void IRAM_ATTR handleInterruptThermostat();
				unsigned long build_slave_response_(OpenThermMessageType type, OpenThermMessageID dataID, uint16_t data);
				uint16_t build_slave_status_(uint16_t master_status) const;
				uint16_t build_slave_config_() const;
				uint16_t build_remote_boiler_parameter_flags_() const;
				void publish_master_runtime_state_();
				void refresh_master_runtime_state_();
				void refresh_slave_runtime_state_();
				void publish_slave_runtime_state_();
				void publish_protocol_debug_state_();
				void record_protocol_event_(unsigned long request, OpenThermResponseStatus status, OpenThermMessageType requestType,
				                           OpenThermMessageID requestDataID, uint16_t requestData);
				void note_t6_compat_handshake_(OpenThermMessageID dataID, uint16_t data);
				bool is_t6_compat_active_() const;
				void sync_switch_states_();
				void schedule_opentherm_start_();
				void start_opentherm_();
				void stop_opentherm_();
				void try_start_opentherm_();
				void set_enabled_(bool enabled);
				void set_debug_enabled_(bool enabled) {
					m_debug_enabled = enabled;
					m_protocolDebugDirty = true;
				}
				
				void processRequestThermostat(unsigned long request, OpenThermResponseStatus status);		
				
				void parseRequest(OpenThermMessageType type, OpenThermMessageID dataID, uint16_t data);
        };

    } // namespace OpenQuattOTSlave
} // namespace esphome
