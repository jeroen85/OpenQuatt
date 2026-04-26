#pragma once

#include <string>

#include "esphome/components/web_server_base/web_server_base.h"
#include "esphome/core/component.h"

namespace esphome {
namespace openquatt_trends {

class OpenQuattTrends : public Component {
 public:
  void set_history(std::string *history) { this->history_ = history; }

  void setup() override;
  void dump_config() override;
  float get_setup_priority() const override;

  const std::string &history() const;

 protected:
  void register_http_handlers_();

  std::string *history_{nullptr};
  bool handlers_registered_{false};
};

}  // namespace openquatt_trends
}  // namespace esphome
