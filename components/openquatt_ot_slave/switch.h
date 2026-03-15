#pragma once

#include <functional>

#include "esphome/core/component.h"
#include "esphome/components/switch/switch.h"

namespace esphome {
namespace OpenQuattOTSlave {

/*enum OpenthermGWSwitchMode {
    OPENTHERM_SWITCH_RESTORE_DEFAULT_ON,
    OPENTHERM_SWITCH_RESTORE_DEFAULT_OFF,
    OPENTHERM_SWITCH_START_ON,
    OPENTHERM_SWITCH_START_OFF
};*/

class OpenQuattOTSlaveSwitch : public switch_::Switch, public Component {
protected:
    std::function<void(bool)> write_callback_{};

    void write_state(bool state) override;

public:
//    void set_mode(OpenthermSwitchMode mode) { this->mode = mode; }
    void set_write_callback(std::function<void(bool)> callback) { this->write_callback_ = std::move(callback); }

    void setup() override;
};

} // namespace opentherm
} // namespace esphome
