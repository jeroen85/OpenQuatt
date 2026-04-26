#include "OpenQuattTrends.h"

#include "esphome/core/log.h"

namespace esphome {
namespace openquatt_trends {

static const char *const TAG = "openquatt.trends";
static const std::string EMPTY_HISTORY;

class OpenQuattTrendsRequestHandler : public AsyncWebHandler {
 public:
  explicit OpenQuattTrendsRequestHandler(OpenQuattTrends *parent) : parent_(parent) {}

  bool canHandle(AsyncWebServerRequest *request) const override {
    char url_buf[AsyncWebServerRequest::URL_BUF_SIZE];
    StringRef url = request->url_to(url_buf);
    return url == "/trends/history" && request->method() == HTTP_GET;
  }

  void handleRequest(AsyncWebServerRequest *request) override {
    char url_buf[AsyncWebServerRequest::URL_BUF_SIZE];
    StringRef url = request->url_to(url_buf);
    if (url != "/trends/history" || request->method() != HTTP_GET) {
      request->send(404);
      return;
    }

    auto *stream = request->beginResponseStream("text/plain; charset=utf-8");
    stream->addHeader("Cache-Control", "no-store");
    stream->print(this->parent_->history().c_str());
    request->send(stream);
  }

 protected:
  OpenQuattTrends *parent_;
};

void OpenQuattTrends::setup() {
  if (web_server_base::global_web_server_base == nullptr) {
    ESP_LOGE(TAG, "global_web_server_base is unavailable");
    return;
  }
  this->register_http_handlers_();
}

void OpenQuattTrends::dump_config() {
  ESP_LOGCONFIG(TAG, "OpenQuatt Trends");
  ESP_LOGCONFIG(TAG, "  History buffer: %s", this->history_ == nullptr ? "<missing>" : "configured");
  ESP_LOGCONFIG(TAG, "  HTTP handlers registered: %s", YESNO(this->handlers_registered_));
}

float OpenQuattTrends::get_setup_priority() const { return setup_priority::WIFI; }

const std::string &OpenQuattTrends::history() const {
  if (this->history_ == nullptr) {
    return EMPTY_HISTORY;
  }
  return *this->history_;
}

void OpenQuattTrends::register_http_handlers_() {
  if (this->handlers_registered_ || web_server_base::global_web_server_base == nullptr) {
    return;
  }
  web_server_base::global_web_server_base->add_handler(new OpenQuattTrendsRequestHandler(this));
  this->handlers_registered_ = true;
}

}  // namespace openquatt_trends
}  // namespace esphome
