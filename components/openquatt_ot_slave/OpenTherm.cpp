/*
OpenTherm.cpp - OpenTherm Communication Library For Arduino, ESP8266
Copyright 2018, Ihor Melnyk
*/

#include "OpenTherm.h"
#include "esphome/core/log.h"
#include "esp_err.h"
#include "esp_rom_sys.h"
#include "esp_timer.h"
static const char * TAG = "OpenTherm";
using namespace esphome;

namespace {
unsigned long now_micros() {
	return static_cast<unsigned long>(esp_timer_get_time());
}

bool read_bit(unsigned long value, int index) {
	return ((value >> index) & 0x1U) != 0;
}

constexpr unsigned long OT_HALF_BIT_MIN_US = 200;
constexpr unsigned long OT_HALF_BIT_MAX_US = 800;
constexpr unsigned long OT_FULL_BIT_MIN_US = 700;
constexpr unsigned long OT_FULL_BIT_MAX_US = 1300;
}  // namespace

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
	input_config.intr_type = GPIO_INTR_ANYEDGE;
	ESP_ERROR_CHECK(gpio_config(&input_config));

	gpio_config_t output_config{};
	output_config.pin_bit_mask = 1ULL << outPin;
	output_config.mode = GPIO_MODE_OUTPUT;
	output_config.pull_up_en = GPIO_PULLUP_DISABLE;
	output_config.pull_down_en = GPIO_PULLDOWN_DISABLE;
	output_config.intr_type = GPIO_INTR_DISABLE;
	ESP_ERROR_CHECK(gpio_config(&output_config));

	if (handleInterruptCallback != NULL) {
		this->handleInterruptCallback = handleInterruptCallback;
		this->pCallbackUser=pCallbackUser;
		esp_err_t err = gpio_install_isr_service(ESP_INTR_FLAG_IRAM);
		if (err != ESP_OK && err != ESP_ERR_INVALID_STATE) {
			ESP_LOGE(TAG, "Failed to install ISR service: %s", esp_err_to_name(err));
		}
		err = gpio_isr_handler_add(static_cast<gpio_num_t>(inPin), gpio_isr_handler, this);
		if (err != ESP_OK) {
			ESP_LOGE(TAG, "Failed to add ISR handler for GPIO%d: %s", inPin, esp_err_to_name(err));
		} else {
			isr_registered_ = true;
		}
	}
	activateBoiler();
	status = OpenThermStatus::READY;
	responseTimestamp = now_micros();
	this->processResponseCallback = processResponseCallback;
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
	return gpio_get_level(static_cast<gpio_num_t>(inPin));
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
	responseTimestamp = now_micros();
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

	sendBit(true); //start bit
	for (int i = 31; i >= 0; i--) {
		sendBit(read_bit(request, i));
	}
	sendBit(true); //stop bit
	setIdleState();
	status = OpenThermStatus::READY;
	responseTimestamp = now_micros();
	return true;
}

unsigned long OpenTherm::getLastResponse()
{
	return response;
}

OpenThermResponseStatus OpenTherm::getLastResponseStatus()
{
	return responseStatus;
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
	unsigned long newTs = now_micros();
		
	unsigned long deltaTs = newTs - responseTimestamp;

	// Wait 30us before read state to make sure digitalRead() will return the "correct" value
	// I don't understand why but sometimes the interrupt is called but the input level is still in transition
	esp_rom_delay_us(30);
		
	int state=readState();

	lastInterruptTs=newTs;
	
	if (isReady())
	{
		if (isSlave && state != 0) {
		   status = OpenThermStatus::RESPONSE_WAITING;
		}
		else {
			return;
		}
	}					
	
	if (status == OpenThermStatus::RESPONSE_WAITING) {
		if (state != 0) {
			status = OpenThermStatus::RESPONSE_START_BIT;
			responseTimestamp = newTs;
		}
		else {
			status = OpenThermStatus::RESPONSE_INVALID;
			responseTimestamp = newTs;
		}
	}
	else if (status == OpenThermStatus::RESPONSE_START_BIT) {
		if ((deltaTs >= OT_HALF_BIT_MIN_US) && (deltaTs <= OT_HALF_BIT_MAX_US) && state == 0) {
			status = OpenThermStatus::RESPONSE_RECEIVING;
			responseTimestamp = newTs;
			responseBitIndex = 0;
		}
		else {
			status = OpenThermStatus::RESPONSE_INVALID;
			responseTimestamp = newTs;
		}
	}
	else if (status == OpenThermStatus::RESPONSE_RECEIVING) {
		if (deltaTs >= OT_FULL_BIT_MIN_US && deltaTs <= OT_FULL_BIT_MAX_US) {
			if (responseBitIndex < 32) {
				response = (response << 1) | !state;
				responseTimestamp = newTs;
				responseBitIndex++;
			}
			else { //stop bit
				status = OpenThermStatus::RESPONSE_READY;
				responseTimestamp = newTs;
				}
		} else if (deltaTs >= OT_HALF_BIT_MIN_US && deltaTs < OT_FULL_BIT_MIN_US) {
			// Manchester coding can legitimately produce a half-bit transition here.
			// Ignore it, but keep the timestamp of the last full-bit edge so the next
			// full-bit transition is still measured against a ~1000 us interval.
		} else if (deltaTs > OT_FULL_BIT_MAX_US) {
			status = OpenThermStatus::RESPONSE_INVALID;
			responseTimestamp = newTs;
		} else if (deltaTs < OT_HALF_BIT_MIN_US) {
			status = OpenThermStatus::RESPONSE_INVALID;
			responseTimestamp = newTs;
		}		
	}
}

bool OpenTherm::process()
{
	OpenThermStatus st = status;
	unsigned long ts = responseTimestamp;
	unsigned long current_response = response;
	
	bool bDidProcessMessage=false;
	
	if (st == OpenThermStatus::READY) 
		return bDidProcessMessage;
		
	unsigned long newTs = now_micros();		
	if (st != OpenThermStatus::NOT_INITIALIZED && st != OpenThermStatus::DELAY && (newTs - ts) > 1000000) {
		status = OpenThermStatus::READY;
		responseStatus = OpenThermResponseStatus::TIMEOUT;
		if (processResponseCallback != NULL) {
			processResponseCallback(current_response, OpenThermResponseStatus::TIMEOUT, pCallbackUser);
			bDidProcessMessage=true;
		}
	}
	else if (st == OpenThermStatus::RESPONSE_INVALID) {
		status = OpenThermStatus::DELAY;
		responseStatus = OpenThermResponseStatus::INVALID;
		if (processResponseCallback != NULL) {
			processResponseCallback(current_response, OpenThermResponseStatus::INVALID, pCallbackUser);
			bDidProcessMessage=true;
		}
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

		if (processResponseCallback != NULL) {
			processResponseCallback(current_response, current_status, pCallbackUser);
			bDidProcessMessage=true;
		}
	}
	else if (st == OpenThermStatus::DELAY) {
		if ((newTs - ts) > 100000) {
			status = OpenThermStatus::READY;
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
