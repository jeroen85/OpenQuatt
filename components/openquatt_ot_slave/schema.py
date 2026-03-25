from typing import Dict, Generic, NotRequired, TypedDict, TypeVar

from esphome.const import (
    DEVICE_CLASS_COLD,
    DEVICE_CLASS_HEAT,
    DEVICE_CLASS_PROBLEM,
    DEVICE_CLASS_TEMPERATURE,
    ENTITY_CATEGORY_DIAGNOSTIC,
    ENTITY_CATEGORY_CONFIG,
    STATE_CLASS_MEASUREMENT,
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
        "link_problem": BinarySensorSchema(
            {
                "description": "Signals when the OT link has not seen a successful request for too long",
                "device_class": DEVICE_CLASS_PROBLEM,
                "icon": "mdi:alert-circle-outline",
                "entity_category": ENTITY_CATEGORY_DIAGNOSTIC,
                "message": "Status",
                "message_data": "flag8_lb_0",
                "init": False,
                "update_time": -1,
            }
        ),
    }
)


class TextSensorSchema(EntitySchema):
    icon: NotRequired[str]
    entity_category: NotRequired[str]


TEXT_SENSORS: Schema[TextSensorSchema] = Schema({})


class InputSchema(EntitySchema):
    unit_of_measurement: str
    range: tuple[float, float]


INPUTS: Schema[InputSchema] = Schema({})
