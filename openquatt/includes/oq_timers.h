#pragma once

#include <cstdint>

namespace oq_timers {

inline bool elapsed(uint32_t now_ms, uint32_t since_ms, uint32_t duration_ms) {
  return since_ms > 0 && static_cast<uint32_t>(now_ms - since_ms) >= duration_ms;
}

inline bool not_elapsed(uint32_t now_ms, uint32_t since_ms, uint32_t duration_ms) {
  return since_ms > 0 && static_cast<uint32_t>(now_ms - since_ms) < duration_ms;
}

inline uint32_t remaining_ms(uint32_t now_ms, uint32_t since_ms, uint32_t duration_ms) {
  if (since_ms == 0) return 0;
  const uint32_t age_ms = static_cast<uint32_t>(now_ms - since_ms);
  return age_ms >= duration_ms ? 0 : duration_ms - age_ms;
}

}  // namespace oq_timers
