#pragma once

#include <cstdint>

namespace oq_cic_compat {

inline void touch(uint32_t &last_request_ms, uint32_t now_ms) { last_request_ms = now_ms; }

inline bool touch_and_enabled(uint32_t &last_request_ms, bool enabled, uint32_t now_ms) {
  touch(last_request_ms, now_ms);
  return enabled;
}

}  // namespace oq_cic_compat
