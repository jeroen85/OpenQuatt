from typing import Dict, Generic, NotRequired, TypedDict, TypeVar

from esphome.const import (
    DEVICE_CLASS_COLD,
    DEVICE_CLASS_HEAT,
    DEVICE_CLASS_PROBLEM,
    DEVICE_CLASS_TEMPERATURE,
    ENTITY_CATEGORY_CONFIG,
    ENTITY_CATEGORY_DIAGNOSTIC,
    STATE_CLASS_MEASUREMENT,
    STATE_CLASS_TOTAL_INCREASING,
)

T = TypeVar("T")


class Schema(Generic[T], Dict[str, T]):
    pass


class EntitySchema(TypedDict):
    description: str
    message: str
    message_data: str
    init: bool
    update_time: int


class SensorSchema(EntitySchema):
    unit_of_measurement: NotRequired[str]
    accuracy_decimals: int
    device_class: NotRequired[str]
    icon: NotRequired[str]
    state_class: str
    entity_category: NotRequired[str]


SENSORS: Schema[SensorSchema] = Schema(
    {
        "t_set": SensorSchema(
            {
                "description": "Temperature setpoint for the boiler's supply water",
                "unit_of_measurement": "C",
                "accuracy_decimals": 2,
                "device_class": DEVICE_CLASS_TEMPERATURE,
                "state_class": STATE_CLASS_MEASUREMENT,
                "message": "TSet",
                "message_data": "f88",
                "init": False,
                "update_time": -1,
            }
        ),
        "t_roomset": SensorSchema(
            {
                "description": "Current room temperature setpoint",
                "unit_of_measurement": "C",
                "accuracy_decimals": 2,
                "device_class": DEVICE_CLASS_TEMPERATURE,
                "state_class": STATE_CLASS_MEASUREMENT,
                "message": "TrSet",
                "message_data": "f88",
                "init": False,
                "update_time": -1,
            }
        ),
        "t_room": SensorSchema(
            {
                "description": "Room temperature",
                "unit_of_measurement": "C",
                "accuracy_decimals": 2,
                "device_class": DEVICE_CLASS_TEMPERATURE,
                "state_class": STATE_CLASS_MEASUREMENT,
                "message": "Tr",
                "message_data": "f88",
                "init": False,
                "update_time": -1,
            }
        ),
        "t_boiler": SensorSchema(
            {
                "description": "Boiler water temperature",
                "unit_of_measurement": "C",
                "accuracy_decimals": 2,
                "device_class": DEVICE_CLASS_TEMPERATURE,
                "state_class": STATE_CLASS_MEASUREMENT,
                "message": "Tboiler",
                "message_data": "f88",
                "init": True,
                "update_time": 60,
            }
        ),
        "t_outside": SensorSchema(
            {
                "description": "Outside temperature",
                "unit_of_measurement": "C",
                "accuracy_decimals": 2,
                "device_class": DEVICE_CLASS_TEMPERATURE,
                "state_class": STATE_CLASS_MEASUREMENT,
                "message": "Toutside",
                "message_data": "f88",
                "init": True,
                "update_time": 60,
            }
        ),
        "t_ret": SensorSchema(
            {
                "description": "Return water temperature",
                "unit_of_measurement": "C",
                "accuracy_decimals": 2,
                "device_class": DEVICE_CLASS_TEMPERATURE,
                "state_class": STATE_CLASS_MEASUREMENT,
                "message": "Tret",
                "message_data": "f88",
                "init": True,
                "update_time": 60,
            }
        ),
        "max_t_set": SensorSchema(
            {
                "description": "Maximum allowable CH water setpoint",
                "unit_of_measurement": "C",
                "accuracy_decimals": 0,
                "device_class": DEVICE_CLASS_TEMPERATURE,
                "state_class": STATE_CLASS_MEASUREMENT,
                "message": "MaxTSet",
                "message_data": "f88",
                "init": True,
                "update_time": -1,
            }
        ),
        "master_ot_version": SensorSchema(
            {
                "description": "OpenTherm version Master",
                "accuracy_decimals": 1,
                "state_class": "",
                "entity_category": ENTITY_CATEGORY_DIAGNOSTIC,
                "icon": "mdi:tag",
                "message": "OpenThermVersionMaster",
                "message_data": "f88",
                "init": False,
                "update_time": -1,
            }
        ),
        "slave_ot_version": SensorSchema(
            {
                "description": "OpenTherm version Slave",
                "accuracy_decimals": 1,
                "state_class": "",
                "entity_category": ENTITY_CATEGORY_DIAGNOSTIC,
                "icon": "mdi:tag",
                "message": "OpenThermVersionSlave",
                "message_data": "f88",
                "init": True,
                "update_time": -1,
            }
        ),
        "master_memberid": SensorSchema(
            {
                "description": "Master member ID",
                "accuracy_decimals": 0,
                "state_class": "",
                "entity_category": ENTITY_CATEGORY_DIAGNOSTIC,
                "icon": "mdi:identifier",
                "message": "MConfigMMemberIDcode",
                "message_data": "u8_lb",
                "init": False,
                "update_time": -1,
            }
        ),
        "slave_memberid": SensorSchema(
            {
                "description": "Slave member ID",
                "accuracy_decimals": 0,
                "state_class": "",
                "entity_category": ENTITY_CATEGORY_DIAGNOSTIC,
                "icon": "mdi:identifier",
                "message": "SConfigSMemberIDcode",
                "message_data": "u8_lb",
                "init": True,
                "update_time": -1,
            }
        ),
        "rx_success_count": SensorSchema(
            {
                "description": "Number of successfully parsed OT requests",
                "accuracy_decimals": 0,
                "state_class": STATE_CLASS_TOTAL_INCREASING,
                "entity_category": ENTITY_CATEGORY_DIAGNOSTIC,
                "icon": "mdi:counter",
                "message": "Status",
                "message_data": "u16",
                "init": True,
                "update_time": -1,
            }
        ),
        "rx_invalid_count": SensorSchema(
            {
                "description": "Number of invalid OT requests",
                "accuracy_decimals": 0,
                "state_class": STATE_CLASS_TOTAL_INCREASING,
                "entity_category": ENTITY_CATEGORY_DIAGNOSTIC,
                "icon": "mdi:counter",
                "message": "Status",
                "message_data": "u16",
                "init": True,
                "update_time": -1,
            }
        ),
        "rx_timeout_count": SensorSchema(
            {
                "description": "Number of OT request timeouts",
                "accuracy_decimals": 0,
                "state_class": STATE_CLASS_TOTAL_INCREASING,
                "entity_category": ENTITY_CATEGORY_DIAGNOSTIC,
                "icon": "mdi:counter",
                "message": "Status",
                "message_data": "u16",
                "init": True,
                "update_time": -1,
            }
        ),
        "rx_invalid_parity_count": SensorSchema(
            {
                "description": "Number of OT requests rejected due to invalid parity",
                "accuracy_decimals": 0,
                "state_class": STATE_CLASS_TOTAL_INCREASING,
                "entity_category": ENTITY_CATEGORY_DIAGNOSTIC,
                "icon": "mdi:counter",
                "message": "Status",
                "message_data": "u16",
                "init": True,
                "update_time": -1,
            }
        ),
        "rx_invalid_message_count": SensorSchema(
            {
                "description": "Number of OT requests rejected due to invalid message type",
                "accuracy_decimals": 0,
                "state_class": STATE_CLASS_TOTAL_INCREASING,
                "entity_category": ENTITY_CATEGORY_DIAGNOSTIC,
                "icon": "mdi:counter",
                "message": "Status",
                "message_data": "u16",
                "init": True,
                "update_time": -1,
            }
        ),
        "rx_success_rate": SensorSchema(
            {
                "description": "Recent rate of successfully parsed OT requests",
                "unit_of_measurement": "req/s",
                "accuracy_decimals": 2,
                "state_class": STATE_CLASS_MEASUREMENT,
                "entity_category": ENTITY_CATEGORY_DIAGNOSTIC,
                "icon": "mdi:speedometer",
                "message": "Status",
                "message_data": "u16",
                "init": True,
                "update_time": -1,
            }
        ),
        "last_success_age_ms": SensorSchema(
            {
                "description": "Milliseconds since the last successful OT request",
                "unit_of_measurement": "ms",
                "accuracy_decimals": 0,
                "state_class": STATE_CLASS_MEASUREMENT,
                "entity_category": ENTITY_CATEGORY_DIAGNOSTIC,
                "icon": "mdi:timer-outline",
                "message": "Status",
                "message_data": "u16",
                "init": True,
                "update_time": -1,
            }
        ),
        "last_callback_duration_us": SensorSchema(
            {
                "description": "Duration of the most recent OT request callback",
                "unit_of_measurement": "us",
                "accuracy_decimals": 0,
                "state_class": STATE_CLASS_MEASUREMENT,
                "entity_category": ENTITY_CATEGORY_DIAGNOSTIC,
                "icon": "mdi:timer-cog-outline",
                "message": "Status",
                "message_data": "u16",
                "init": True,
                "update_time": -1,
            }
        ),
        "max_callback_duration_us": SensorSchema(
            {
                "description": "Longest OT request callback observed since boot",
                "unit_of_measurement": "us",
                "accuracy_decimals": 0,
                "state_class": STATE_CLASS_MEASUREMENT,
                "entity_category": ENTITY_CATEGORY_DIAGNOSTIC,
                "icon": "mdi:timer-alert-outline",
                "message": "Status",
                "message_data": "u16",
                "init": True,
                "update_time": -1,
            }
        ),
        "last_response_latency_us": SensorSchema(
            {
                "description": "Latency from OT callback start until the response is sent",
                "unit_of_measurement": "us",
                "accuracy_decimals": 0,
                "state_class": STATE_CLASS_MEASUREMENT,
                "entity_category": ENTITY_CATEGORY_DIAGNOSTIC,
                "icon": "mdi:send-clock-outline",
                "message": "Status",
                "message_data": "u16",
                "init": True,
                "update_time": -1,
            }
        ),
        "max_response_latency_us": SensorSchema(
            {
                "description": "Highest OT response latency observed since boot",
                "unit_of_measurement": "us",
                "accuracy_decimals": 0,
                "state_class": STATE_CLASS_MEASUREMENT,
                "entity_category": ENTITY_CATEGORY_DIAGNOSTIC,
                "icon": "mdi:send-alert-outline",
                "message": "Status",
                "message_data": "u16",
                "init": True,
                "update_time": -1,
            }
        ),
        "last_loop_gap_ms": SensorSchema(
            {
                "description": "Time between the two most recent OpenQuatt OT slave loop iterations",
                "unit_of_measurement": "ms",
                "accuracy_decimals": 0,
                "state_class": STATE_CLASS_MEASUREMENT,
                "entity_category": ENTITY_CATEGORY_DIAGNOSTIC,
                "icon": "mdi:timeline-clock-outline",
                "message": "Status",
                "message_data": "u16",
                "init": True,
                "update_time": -1,
            }
        ),
        "max_loop_gap_ms": SensorSchema(
            {
                "description": "Longest gap between OpenQuatt OT slave loop iterations since boot",
                "unit_of_measurement": "ms",
                "accuracy_decimals": 0,
                "state_class": STATE_CLASS_MEASUREMENT,
                "entity_category": ENTITY_CATEGORY_DIAGNOSTIC,
                "icon": "mdi:timeline-alert-outline",
                "message": "Status",
                "message_data": "u16",
                "init": True,
                "update_time": -1,
            }
        ),
        "last_request_id": SensorSchema(
            {
                "description": "Last OT data ID observed on the wire",
                "accuracy_decimals": 0,
                "state_class": "",
                "entity_category": ENTITY_CATEGORY_DIAGNOSTIC,
                "icon": "mdi:identifier",
                "message": "Status",
                "message_data": "u16",
                "init": True,
                "update_time": -1,
            }
        ),
        "last_error_id": SensorSchema(
            {
                "description": "Last OT data ID that produced a non-success status",
                "accuracy_decimals": 0,
                "state_class": "",
                "entity_category": ENTITY_CATEGORY_DIAGNOSTIC,
                "icon": "mdi:identifier",
                "message": "Status",
                "message_data": "u16",
                "init": True,
                "update_time": -1,
            }
        ),
    }
)


class SwitchSchema(EntitySchema):
    icon: NotRequired[str]
    entity_category: NotRequired[str]
    restore_mode: NotRequired[str]


SWITCHES: Schema[SwitchSchema] = Schema(
    {
        "enabled": SwitchSchema(
            {
                "description": "Enable or disable the OpenTherm slave runtime",
                "icon": "mdi:connection",
                "entity_category": ENTITY_CATEGORY_CONFIG,
                "restore_mode": "RESTORE_DEFAULT_OFF",
                "message": "Status",
                "message_data": "flag8_hb_0",
                "init": False,
                "update_time": -1,
            }
        ),
        "debug_enabled": SwitchSchema(
            {
                "description": "Enable OpenTherm debug entities",
                "icon": "mdi:bug-outline",
                "entity_category": ENTITY_CATEGORY_DIAGNOSTIC,
                "restore_mode": "RESTORE_DEFAULT_OFF",
                "message": "Status",
                "message_data": "flag8_hb_0",
                "init": False,
                "update_time": -1,
            }
        ),
    }
)


class BinarySensorSchema(EntitySchema):
    device_class: NotRequired[str]
    icon: NotRequired[str]
    entity_category: NotRequired[str]


BINARY_SENSORS: Schema[BinarySensorSchema] = Schema(
    {
        "master_ch_enable": BinarySensorSchema(
            {
                "description": "Master status: Central Heating enabled",
                "device_class": DEVICE_CLASS_HEAT,
                "icon": "mdi:radiator",
                "message": "Status",
                "message_data": "flag8_hb_0",
                "init": False,
                "update_time": -1,
            }
        ),
        "master_cooling_enable": BinarySensorSchema(
            {
                "description": "Master status: Cooling enabled",
                "device_class": DEVICE_CLASS_COLD,
                "icon": "mdi:snowflake",
                "message": "Status",
                "message_data": "flag8_hb_2",
                "init": False,
                "update_time": -1,
            }
        ),
        "fault_indication": BinarySensorSchema(
            {
                "description": "Status: Fault indication",
                "device_class": DEVICE_CLASS_PROBLEM,
                "icon": "mdi:water-boiler-alert",
                "message": "Status",
                "message_data": "flag8_lb_0",
                "init": True,
                "update_time": -1,
            }
        ),
        "ch_active": BinarySensorSchema(
            {
                "description": "Status: Central Heating active",
                "icon": "mdi:radiator",
                "message": "Status",
                "message_data": "flag8_lb_1",
                "init": True,
                "update_time": -1,
            }
        ),
        "flame_on": BinarySensorSchema(
            {
                "description": "Status: Flame on",
                "icon": "mdi:fire",
                "message": "Status",
                "message_data": "flag8_lb_3",
                "init": True,
                "update_time": -1,
            }
        ),
        "cooling_active": BinarySensorSchema(
            {
                "description": "Status: Cooling active",
                "icon": "mdi:snowflake",
                "message": "Status",
                "message_data": "flag8_lb_4",
                "init": True,
                "update_time": -1,
            }
        ),
        "diagnostic_indication": BinarySensorSchema(
            {
                "description": "Status: Diagnostic event",
                "device_class": DEVICE_CLASS_PROBLEM,
                "message": "Status",
                "message_data": "flag8_lb_6",
                "init": True,
                "update_time": -1,
            }
        ),
    }
)


class TextSensorSchema(EntitySchema):
    icon: NotRequired[str]
    entity_category: NotRequired[str]


TEXT_SENSORS: Schema[TextSensorSchema] = Schema(
    {
        "last_request": TextSensorSchema(
            {
                "description": "Summary of the last OT request",
                "entity_category": ENTITY_CATEGORY_DIAGNOSTIC,
                "icon": "mdi:message-text-outline",
                "message": "Status",
                "message_data": "u16",
                "init": True,
                "update_time": -1,
            }
        ),
        "last_error": TextSensorSchema(
            {
                "description": "Summary of the last OT request with a non-success status",
                "entity_category": ENTITY_CATEGORY_DIAGNOSTIC,
                "icon": "mdi:alert-outline",
                "message": "Status",
                "message_data": "u16",
                "init": True,
                "update_time": -1,
            }
        ),
        "compatibility_mode": TextSensorSchema(
            {
                "description": "Current OT compatibility mode",
                "entity_category": ENTITY_CATEGORY_DIAGNOSTIC,
                "icon": "mdi:tune-variant",
                "message": "Status",
                "message_data": "u16",
                "init": True,
                "update_time": -1,
            }
        ),
    }
)


class InputSchema(EntitySchema):
    unit_of_measurement: str
    range: tuple[float, float]


INPUTS: Schema[InputSchema] = Schema({})
