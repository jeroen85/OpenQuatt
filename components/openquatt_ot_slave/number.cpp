#include "number.h"
#include "esphome/core/log.h"
#include "OpenQuattOTSlave.h"

static const char * TAG = "OpenQuattOTSlaveNumber";

namespace esphome {
namespace OpenQuattOTSlave {

void OpenQuattOTSlaveNumber::setup() {
    this->publish_state(0);
}

} // namespace opentherm
} // namespace esphome
