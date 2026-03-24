/*
OpenTherm.h - OpenTherm Library for the ESP8266/Arduino platform
https://github.com/ihormelnyk/OpenTherm
http://ihormelnyk.com/pages/OpenTherm
Licensed under MIT license
Copyright 2018, Ihor Melnyk

Frame Structure:
P MGS-TYPE SPARE DATA-ID  DATA-VALUE
0 000      0000  00000000 00000000 00000000
*/

#ifndef OpenTherm_h
#define OpenTherm_h

#include <stdint.h>
#include "driver/gpio.h"
#include "driver/gpio_filter.h"
#include "driver/rmt_common.h"
#include "driver/rmt_encoder.h"
#include "driver/rmt_rx.h"
#include "driver/rmt_tx.h"
#include "esp_cpu.h"
#include "freertos/FreeRTOS.h"
#include "freertos/portmacro.h"

enum OpenThermResponseStatus {
	NONE,
	SUCCESS,
	INVALID,
	INVALID_PARITY,
	INVALID_MESSAGE,
	TIMEOUT
};

enum OpenThermDriverError {
	DRIVER_ERROR_NONE,
	DRIVER_ERROR_GLITCH_REJECT,
	DRIVER_ERROR_EDGE_OVERFLOW,
	DRIVER_ERROR_START_BIT_INVALID,
	DRIVER_ERROR_TIMING_INVALID,
	DRIVER_ERROR_TX_UNAVAILABLE,
	DRIVER_ERROR_TX_QUEUE_FAILED
};

enum OpenThermMessageType {
	/*  Master to Slave */
	READ_DATA       = 0b000,
	READ            = READ_DATA, // for backwared compatibility
	WRITE_DATA      = 0b001,
	WRITE           = WRITE_DATA, // for backwared compatibility
	INVALID_DATA    = 0b010,
	RESERVED        = 0b011,
	/* Slave to Master */
	READ_ACK        = 0b100,
	WRITE_ACK       = 0b101,
	DATA_INVALID    = 0b110,
	UNKNOWN_DATA_ID = 0b111
};

typedef OpenThermMessageType OpenThermRequestType; // for backwared compatibility

enum OpenThermMessageID {
	Status=0, // flag8 / flag8  Master and Slave Status flags.
	TSet, // f8.8  Control setpoint  ie CH  water temperature setpoint (°C)
	MConfigMMemberIDcode, // flag8 / u8  Master Configuration Flags /  Master MemberID Code
	SConfigSMemberIDcode, // flag8 / u8  Slave Configuration Flags /  Slave MemberID Code
	Command, // u8 / u8  Remote Command
	ASFflags, // / OEM-fault-code  flag8 / u8  Application-specific fault flags and OEM fault code
	RBPflags, // flag8 / flag8  Remote boiler parameter transfer-enable & read/write flags
	CoolingControl, // f8.8  Cooling control signal (%)
	TsetCH2, // f8.8  Control setpoint for 2e CH circuit (°C)
	TrOverride, // f8.8  Remote override room setpoint
	
	TSP=10, // u8 / u8  Number of Transparent-Slave-Parameters supported by slave	
	TSPindexTSPvalue, // u8 / u8  Index number / Value of referred-to transparent slave parameter.
	FHBsize, // u8 / u8  Size of Fault-History-Buffer supported by slave
	FHBindexFHBvalue, // u8 / u8  Index number / Value of referred-to fault-history buffer entry.
	MaxRelModLevelSetting, // f8.8  Maximum relative modulation level setting (%)
	MaxCapacityMinModLevel, // u8 / u8  Maximum boiler capacity (kW) / Minimum boiler modulation level(%)
	TrSet, // f8.8  Room Setpoint (°C)
	RelModLevel, // f8.8  Relative Modulation Level (%)
	CHPressure, // f8.8  Water pressure in CH circuit  (bar)
	DHWFlowRate, // f8.8  Water flow rate in DHW circuit. (litres/minute)

	DayTime=20, // special / u8  Day of Week and Time of Day
	Date, // u8 / u8  Calendar date
	Year, // u16  Calendar year
	TrSetCH2, // f8.8  Room Setpoint for 2nd CH circuit (°C)
	Tr, // f8.8  Room temperature (°C)
	Tboiler, // f8.8  Boiler flow water temperature (°C)
	Tdhw, // f8.8  DHW temperature (°C)
	Toutside, // f8.8  Outside temperature (°C)
	Tret, // f8.8  Return water temperature (°C)
	Tstorage, // f8.8  Solar storage temperature (°C)

	Tcollector=30, // f8.8  Solar collector temperature (°C)
	TflowCH2, // f8.8  Flow water temperature CH2 circuit (°C)
	Tdhw2, // f8.8  Domestic hot water temperature 2 (°C)
	Texhaust, // s16  Boiler exhaust temperature (°C)
	
	TdhwSetUBTdhwSetLB = 48, // s8 / s8  DHW setpoint upper & lower bounds for adjustment  (°C)
	MaxTSetUBMaxTSetLB, // s8 / s8  Max CH water setpoint upper & lower bounds for adjustment  (°C)
	HcratioUBHcratioLB, // s8 / s8  OTC heat curve ratio upper & lower bounds for adjustment
	
	TdhwSet = 56, // f8.8  DHW setpoint (°C)    (Remote parameter 1)
	MaxTSet, // f8.8  Max CH water setpoint (°C)  (Remote parameters 2)
	Hcratio, // f8.8  OTC heat curve ratio (°C)  (Remote parameter 3)

	T6CompatProbe70 = 70, // T6 compatibility probe (meaning not implemented in OpenQuatt)
	T6CompatProbe72 = 72, // T6 compatibility probe (meaning not implemented in OpenQuatt)
	T6CompatProbe82 = 82, // T6 compatibility probe (meaning not implemented in OpenQuatt)
	
	Unknown99=99,	

	RemoteOverrideFunction = 100, // flag8 / -  Function of manual and program changes in master and remote room setpoint.
	
	OEMDiagnosticCode = 115, // u16  OEM-specific diagnostic/service code
	BurnerStarts, // u16  Number of starts burner
	CHPumpStarts, // u16  Number of starts CH pump
	DHWPumpValveStarts, // u16  Number of starts DHW pump/valve
	DHWBurnerStarts, // u16  Number of starts burner during DHW mode
	BurnerOperationHours, // u16  Number of hours that burner is in operation (i.e. flame on)
	CHPumpOperationHours, // u16  Number of hours that CH pump has been running
	DHWPumpValveOperationHours, // u16  Number of hours that DHW pump has been running or DHW valve has been opened
	DHWBurnerOperationHours, // u16  Number of hours that burner is in operation during DHW mode
	OpenThermVersionMaster, // f8.8  The implemented version of the OpenTherm Protocol Specification in the master.
	OpenThermVersionSlave, // f8.8  The implemented version of the OpenTherm Protocol Specification in the slave.
	MasterVersion, // u8 / u8  Master product version number and type
	SlaveVersion, // u8 / u8  Slave product version number and type


	Unknown140 = 140,
	Unknown141,
	Unknown142,	
	Unknown143,	
	Unknown144,	
	Unknown145,	
	Unknown146,	
	Unknown147,	
	Unknown148,	
	Unknown149,	
	Unknown150,
	Unknown151,	
	Unknown152,	

	Unknown161 = 161,
	
	Unknown180 = 180
};

enum OpenThermStatus {
	NOT_INITIALIZED,
	READY,
	DELAY,
	REQUEST_SENDING,
	RESPONSE_WAITING,
	RESPONSE_START_BIT,
	RESPONSE_RECEIVING,
	RESPONSE_READY,
	RESPONSE_INVALID
};

class OpenTherm
{
public:
	OpenTherm(int inPin = 4, int outPin = 5, bool isSlave = false);
	volatile OpenThermStatus status;
	void begin(void(*handleInterruptCallback)(void));
	void begin(void(*handleInterruptCallback)(void), void(*processResponseCallback)(unsigned long, OpenThermResponseStatus, void *), void *pCallbackUser);
	bool isReady();
	unsigned long sendRequest(unsigned long request);
	bool sendResponse(unsigned long request);
	bool sendRequestAsync(unsigned long request);

	bool sendRequestTimer(unsigned long request);
	bool sendResponseTimer(unsigned long response);
	
	unsigned long buildRequest(OpenThermMessageType type, OpenThermMessageID id, unsigned int data);
	unsigned long buildResponse(OpenThermMessageType type, OpenThermMessageID id, unsigned int data);
	unsigned long getLastResponse();
	OpenThermResponseStatus getLastResponseStatus();
	OpenThermDriverError getLastDriverError() const;
		const char *getLastDriverErrorString() const;
		const char *getRxBackendString() const;
		uint32_t getGlitchRejectCount() const;
		uint32_t getEdgeOverflowCount() const;
		uint32_t getDecodeResetCount() const;
		uint32_t getIgnoredStartCount() const;
		uint32_t getIgnoredCooldownCount() const;
		uint32_t getIgnoredQuietGapCount() const;
		uint32_t getResyncCount() const;
		uint32_t getMaxConsecutiveBadStartCount() const;
		uint32_t getRmtShortDurationCount() const;
		uint32_t getRmtLongDurationCount() const;
		uint32_t getRmtBadPairCount() const;
		uint32_t getRmtFrameSizeMismatchCount() const;
		uint32_t getRmtLastSymbolCount() const;
		uint32_t getRmtLastHalfBitCount() const;
		uint32_t getRmtLastBadDurationUs() const;
		uint32_t getTxRmtUnavailableCount() const;
		uint32_t getTxQueueFailCount() const;
		const char *statusToString(OpenThermResponseStatus status);
	void handleInterrupt();
	bool process();
	void end();

	void handleTimerInterrupt();

	bool parity(unsigned long frame);
	OpenThermMessageType getMessageType(unsigned long message);
	OpenThermMessageID getDataID(unsigned long frame);
	const char *messageTypeToString(OpenThermMessageType message_type);
	bool isValidParity(unsigned long message);
	bool isValidRequest(unsigned long request);
	bool isValidResponse(unsigned long response);

	//requests
	unsigned long buildSetBoilerStatusRequest(bool enableCentralHeating, bool enableHotWater = false, bool enableCooling = false, bool enableOutsideTemperatureCompensation = false, bool enableCentralHeating2 = false);
	unsigned long buildSetBoilerTemperatureRequest(float temperature);
	unsigned long buildGetBoilerTemperatureRequest();

	//responses
	bool isFault(unsigned long response);
	bool isCentralHeatingActive(unsigned long response);
	bool isHotWaterActive(unsigned long response);
	bool isFlameOn(unsigned long response);
	bool isCoolingActive(unsigned long response);
	bool isDiagnostic(unsigned long response);
	uint16_t getUInt(const unsigned long response) const;
	float getFloat(const unsigned long response) const;	
	unsigned int temperatureToData(float temperature);

	//basic requests
	unsigned long setBoilerStatus(bool enableCentralHeating, bool enableHotWater = false, bool enableCooling = false, bool enableOutsideTemperatureCompensation = false, bool enableCentralHeating2 = false);
	bool setBoilerTemperature(float temperature);
	float getBoilerTemperature();
	float getReturnTemperature();
	bool setDHWSetpoint(float temperature);
	float getDHWTemperature();
	float getModulation();
	float getPressure();
	unsigned char getFault();

private:
	struct EdgeEvent {
		uint32_t timestamp;
		uint8_t level;
	};
	const int inPin;
	const int outPin;
	const bool isSlave;

	volatile unsigned long response;
	volatile OpenThermResponseStatus responseStatus;
	volatile unsigned long responseTimestamp;
	volatile uint8_t responseBitIndex;
	volatile unsigned long lastInterruptTs = 0;
	uint32_t cycles_per_us_ = 240;
	bool rx_rmt_ready_ = false;
	bool isr_registered_ = false;
	portMUX_TYPE mux_ = portMUX_INITIALIZER_UNLOCKED;
	static constexpr uint8_t EDGE_QUEUE_SIZE = 96;
	static constexpr size_t RX_CAPTURE_SYMBOLS = 96;
	static constexpr uint8_t RX_FRAME_QUEUE_SIZE = 4;
	struct RxFrame {
		uint32_t done_ts_cycles;
		uint8_t symbol_count;
		rmt_symbol_word_t symbols[RX_CAPTURE_SYMBOLS];
	};
	EdgeEvent edge_queue_[EDGE_QUEUE_SIZE]{};
	rmt_symbol_word_t rx_symbols_[RX_CAPTURE_SYMBOLS]{};
	RxFrame rx_frame_queue_[RX_FRAME_QUEUE_SIZE]{};
	volatile uint8_t edge_head_ = 0;
	volatile uint8_t edge_tail_ = 0;
	volatile uint8_t rx_frame_head_ = 0;
	volatile uint8_t rx_frame_tail_ = 0;
		volatile bool edge_overflow_ = false;
		volatile uint32_t last_edge_ts_ = 0;
		volatile uint32_t glitch_reject_count_ = 0;
		volatile uint32_t edge_overflow_count_ = 0;
		uint32_t decode_reset_count_ = 0;
		uint32_t ignored_start_count_ = 0;
		uint32_t ignored_cooldown_count_ = 0;
		uint32_t ignored_quiet_gap_count_ = 0;
		uint32_t resync_count_ = 0;
		uint32_t consecutive_bad_start_count_ = 0;
		uint32_t max_consecutive_bad_start_count_ = 0;
		uint32_t rmt_short_duration_count_ = 0;
		uint32_t rmt_long_duration_count_ = 0;
		uint32_t rmt_bad_pair_count_ = 0;
		uint32_t rmt_frame_size_mismatch_count_ = 0;
		uint32_t rmt_last_symbol_count_ = 0;
		uint32_t rmt_last_half_bit_count_ = 0;
		uint32_t rmt_last_bad_duration_us_ = 0;
		uint32_t tx_rmt_unavailable_count_ = 0;
		uint32_t tx_queue_fail_count_ = 0;
		bool invalid_requires_cooldown_ = false;
		volatile OpenThermDriverError last_driver_error_ = OpenThermDriverError::DRIVER_ERROR_NONE;
		uint32_t last_processed_edge_ts_ = 0;
		uint32_t start_accept_not_before_ts_ = 0;
		uint32_t delay_until_ts_ = 0;
		gpio_glitch_filter_handle_t rx_glitch_filter_ = nullptr;
		rmt_channel_handle_t rx_channel_ = nullptr;
		rmt_channel_handle_t tx_channel_ = nullptr;
		rmt_encoder_handle_t tx_encoder_ = nullptr;
		rmt_symbol_word_t tx_symbols_[34]{};
		volatile bool tx_in_progress_ = false;
	volatile bool tx_complete_ = false;
	bool tx_rmt_ready_ = false;
		
		int readState();
		void setActiveState();
		void setIdleState();
		void activateBoiler();
			void reset_receive_state_();
			bool pop_edge_(EdgeEvent &edge);
			void process_edge_(uint32_t timestamp, int state);
			void note_driver_error_(OpenThermDriverError error);
			void note_bad_start_();
			void reset_bad_start_streak_();
			uint32_t current_resync_cooldown_us_() const;
			void arm_resync_cooldown_(uint32_t timestamp);
			void reject_tentative_start_(OpenThermDriverError error, uint32_t timestamp);
			void fail_frame_(OpenThermDriverError error, uint32_t timestamp);
			bool init_rx_glitch_filter_();
			void deinit_rx_glitch_filter_();
			bool init_rx_channel_();
			void deinit_rx_channel_();
			bool queue_edge_(uint32_t timestamp, int state);
			bool queue_rx_frame_(const rmt_symbol_word_t *symbols, size_t num_symbols, uint32_t done_ts_cycles);
			bool pop_rx_frame_(RxFrame &frame);
			bool ingest_rmt_symbols_(const rmt_symbol_word_t *symbols, size_t num_symbols, uint32_t done_ts_cycles);
			bool decode_rmt_frame_(const RxFrame &frame, unsigned long &decoded_frame, OpenThermDriverError &error);
			void process_rmt_frame_(const RxFrame &frame);
			bool arm_rmt_receive_();
			bool init_tx_channel_();
			bool queue_frame_tx_(unsigned long frame);

		void sendBit(bool high);
		static bool IRAM_ATTR rx_done_callback_(rmt_channel_handle_t rx_chan, const rmt_rx_done_event_data_t *edata, void *user_ctx);
		static bool IRAM_ATTR tx_done_callback_(rmt_channel_handle_t tx_chan, const rmt_tx_done_event_data_t *edata, void *user_ctx);
		static void IRAM_ATTR gpio_isr_handler(void *arg);
	void(*handleInterruptCallback)();
	void(*processResponseCallback)(unsigned long, OpenThermResponseStatus, void *);
	void *pCallbackUser;	
};

#endif // OpenTherm_h
