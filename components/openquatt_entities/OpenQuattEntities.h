#pragma once

#include <esp_http_server.h>

#include "PsramBuffer.h"
#include "esphome/components/web_server/web_server.h"
#include "esphome/components/web_server_base/web_server_base.h"
#include "esphome/core/component.h"

namespace esphome {
namespace openquatt_entities {

class OpenQuattEntities : public Component {
 public:
  void set_web_server(web_server::WebServer *web_server) { this->web_server_ = web_server; }

  void setup() override;
  void dump_config() override;
  float get_setup_priority() const override;

  void write_entities(httpd_req_t *req, const std::string &detail, const std::string &entities) const;

 protected:
  web_server::WebServer *web_server_{nullptr};
};

}  // namespace openquatt_entities
}  // namespace esphome
