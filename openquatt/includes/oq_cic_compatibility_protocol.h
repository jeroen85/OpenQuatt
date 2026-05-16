#pragma once

#include <cmath>
#include <cstdint>

namespace oq_cic_compat_protocol {

constexpr uint16_t kPumpModeOnMask = 0x1000u;
constexpr uint16_t kUnavailableWord = 0xFFFFu;
constexpr uint16_t kFallbackPcbFirmwareRaw = 0x011Eu;
constexpr float kDeciScale = 10.0f;
constexpr float kCentiScale = 100.0f;
constexpr float kTempOffset = 3000.0f;
constexpr float kFlowLphToCompatUnits = (1.0f / 0.618f);

inline uint16_t encode_deci(float value) {
  return std::isnan(value) ? 0u : static_cast<uint16_t>(lroundf(value * kDeciScale));
}

inline uint16_t encode_offset_centi_c(float value) {
  return std::isnan(value)
      ? 0u
      : static_cast<uint16_t>(lroundf((value * kCentiScale) + kTempOffset));
}

inline uint16_t encode_flow_lph(float value) {
  return std::isnan(value)
      ? 0u
      : static_cast<uint16_t>(lroundf(value * kFlowLphToCompatUnits));
}

}  // namespace oq_cic_compat_protocol
