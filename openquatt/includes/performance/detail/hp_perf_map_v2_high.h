#pragma once
// Native V2 high-temperature continuation from cic_controller.elf.
//
// The continuation is kept separate from the rectangular base V2 map.
// Ambient axes below are the cold-side subsets inferred from the ragged row
// counts and row ordering in the firmware continuation.

#include <cstddef>
#include <cmath>

namespace oq_perf_v2_high {

static constexpr int N_LVL = 10; // levels 1..10

static constexpr float T_amb_bp_w55[6] = {
  -15.00f, -5.000001f, -5.00f, -0.000001f, 0.00f, 4.999999f,
};

static constexpr float T_amb_bp_w65[13] = {
  -15.00f, -5.000001f, -5.00f, -0.000001f, 0.00f, 4.999999f,
  5.00f, 10.999999f, 11.00f, 13.999999f, 14.00f, 18.999999f, 19.00f,
};

static constexpr float T_amb_bp_w70[13] = {
  -15.00f, -5.000001f, -5.00f, -0.000001f, 0.00f, 4.999999f,
  5.00f, 10.999999f, 11.00f, 13.999999f, 14.00f, 18.999999f, 19.00f,
};

static constexpr float P_TH_W55[6][N_LVL] = {
  {NAN, NAN, 771.53f, 1470.16f, 1741.84f, 1974.72f, 2401.66f, NAN, NAN, NAN},
  {NAN, NAN, 1442.87f, 2514.09f, 2930.67f, 3287.74f, 3942.38f, NAN, NAN, NAN},
  {NAN, NAN, 1778.54f, 3036.05f, 3525.09f, 3944.26f, 4712.74f, NAN, NAN, NAN},
  {NAN, NAN, 2114.21f, 3558.02f, 4119.50f, 4600.77f, 5483.10f, NAN, NAN, NAN},
  {NAN, NAN, 2517.01f, 4184.38f, 4832.80f, 5388.59f, 6407.53f, NAN, NAN, NAN},
  {NAN, NAN, 2517.01f, 4184.38f, 4832.80f, NAN, NAN, NAN, NAN, NAN},
};

static constexpr float P_TH_W65[13][N_LVL] = {
  {NAN, NAN, 641.94f, 1224.46f, 1451.00f, 1645.17f, 2001.15f, NAN, NAN, NAN},
  {NAN, NAN, 1179.93f, 2135.05f, 2506.48f, 2824.85f, 3408.53f, NAN, NAN, NAN},
  {NAN, NAN, 1448.93f, 2590.34f, 3034.22f, 3414.69f, 4112.22f, NAN, NAN, NAN},
  {NAN, NAN, 1717.93f, 3045.64f, 3561.97f, 4004.53f, 4815.91f, NAN, NAN, NAN},
  {NAN, NAN, 2040.73f, 3591.99f, 4195.26f, 4712.34f, 5660.34f, NAN, NAN, NAN},
  {NAN, NAN, 2040.73f, 3591.99f, 4195.26f, NAN, NAN, NAN, NAN, NAN},
  {NAN, NAN, 2202.12f, 3865.16f, 4511.90f, NAN, NAN, NAN, NAN, NAN},
  {NAN, NAN, 2471.12f, 4320.46f, 5039.64f, NAN, NAN, NAN, NAN, NAN},
  {NAN, NAN, 2471.12f, 4320.46f, NAN, NAN, NAN, NAN, NAN, NAN},
  {NAN, NAN, 2686.32f, 4684.69f, NAN, NAN, NAN, NAN, NAN, NAN},
  {NAN, NAN, 2901.52f, 5048.93f, NAN, NAN, NAN, NAN, NAN, NAN},
  {NAN, NAN, 2901.52f, NAN, NAN, NAN, NAN, NAN, NAN, NAN},
  {NAN, NAN, 3869.37f, NAN, NAN, NAN, NAN, NAN, NAN, NAN},
};

static constexpr float P_TH_W70[13][N_LVL] = {
  {NAN, NAN, 577.14f, 1101.61f, 1305.57f, 1480.39f, 1800.90f, NAN, NAN, NAN},
  {NAN, NAN, 1048.47f, 1945.53f, 2294.38f, 2593.41f, 3141.61f, NAN, NAN, NAN},
  {NAN, NAN, 1284.13f, 2367.49f, 2788.79f, 3149.91f, 3811.96f, NAN, NAN, NAN},
  {NAN, NAN, 1519.79f, 2789.44f, 3283.20f, 3706.42f, 4482.32f, NAN, NAN, NAN},
  {NAN, NAN, 1802.58f, 3295.79f, 3876.49f, 4374.22f, 5286.74f, NAN, NAN, NAN},
  {NAN, NAN, 1802.58f, 3295.79f, 3876.49f, NAN, NAN, NAN, NAN, NAN},
  {NAN, NAN, 1943.98f, 3548.97f, 4173.13f, NAN, NAN, NAN, NAN, NAN},
  {NAN, NAN, 2179.64f, 3970.93f, 4667.54f, NAN, NAN, NAN, NAN, NAN},
  {NAN, NAN, 2179.64f, 3970.93f, NAN, NAN, NAN, NAN, NAN, NAN},
  {NAN, NAN, 2368.17f, 4308.49f, NAN, NAN, NAN, NAN, NAN, NAN},
  {NAN, NAN, 2556.70f, 4646.06f, NAN, NAN, NAN, NAN, NAN, NAN},
  {NAN, NAN, 2556.70f, NAN, NAN, NAN, NAN, NAN, NAN, NAN},
  {NAN, NAN, 3404.61f, NAN, NAN, NAN, NAN, NAN, NAN, NAN},
};

static constexpr float COP_W55[6][N_LVL] = {
  {NAN, NAN, 1.08f, 1.15f, 1.18f, 1.20f, 1.25f, NAN, NAN, NAN},
  {NAN, NAN, 1.89f, 1.96f, 1.99f, 2.01f, 2.05f, NAN, NAN, NAN},
  {NAN, NAN, 2.30f, 2.37f, 2.39f, 2.41f, 2.45f, NAN, NAN, NAN},
  {NAN, NAN, 2.70f, 2.77f, 2.80f, 2.82f, 2.86f, NAN, NAN, NAN},
  {NAN, NAN, 3.19f, 3.26f, 3.28f, 3.30f, 3.34f, NAN, NAN, NAN},
  {NAN, NAN, 3.19f, 3.26f, 3.28f, NAN, NAN, NAN, NAN, NAN},
};

static constexpr float COP_W65[13][N_LVL] = {
  {NAN, NAN, 0.68f, 0.82f, 0.87f, 0.92f, 1.01f, NAN, NAN, NAN},
  {NAN, NAN, 1.23f, 1.37f, 1.42f, 1.47f, 1.55f, NAN, NAN, NAN},
  {NAN, NAN, 1.50f, 1.64f, 1.69f, 1.74f, 1.82f, NAN, NAN, NAN},
  {NAN, NAN, 1.78f, 1.92f, 1.97f, 2.01f, 2.10f, NAN, NAN, NAN},
  {NAN, NAN, 2.11f, 2.24f, 2.30f, 2.34f, 2.42f, NAN, NAN, NAN},
  {NAN, NAN, 2.11f, 2.24f, 2.30f, NAN, NAN, NAN, NAN, NAN},
  {NAN, NAN, 2.28f, 2.41f, 2.46f, NAN, NAN, NAN, NAN, NAN},
  {NAN, NAN, 2.55f, 2.68f, 2.73f, NAN, NAN, NAN, NAN, NAN},
  {NAN, NAN, 2.55f, 2.68f, NAN, NAN, NAN, NAN, NAN, NAN},
  {NAN, NAN, 2.77f, 2.90f, NAN, NAN, NAN, NAN, NAN, NAN},
  {NAN, NAN, 2.99f, 3.12f, NAN, NAN, NAN, NAN, NAN, NAN},
  {NAN, NAN, 2.99f, NAN, NAN, NAN, NAN, NAN, NAN, NAN},
  {NAN, NAN, 3.99f, NAN, NAN, NAN, NAN, NAN, NAN, NAN},
};

static constexpr float COP_W70[13][N_LVL] = {
  {NAN, NAN, 0.48f, 0.65f, 0.72f, 0.78f, 0.89f, NAN, NAN, NAN},
  {NAN, NAN, 0.90f, 1.07f, 1.14f, 1.20f, 1.30f, NAN, NAN, NAN},
  {NAN, NAN, 1.11f, 1.28f, 1.35f, 1.40f, 1.51f, NAN, NAN, NAN},
  {NAN, NAN, 1.32f, 1.49f, 1.55f, 1.61f, 1.72f, NAN, NAN, NAN},
  {NAN, NAN, 1.57f, 1.74f, 1.80f, 1.86f, 1.96f, NAN, NAN, NAN},
  {NAN, NAN, 1.57f, 1.74f, 1.80f, NAN, NAN, NAN, NAN, NAN},
  {NAN, NAN, 1.70f, 1.86f, 1.93f, NAN, NAN, NAN, NAN, NAN},
  {NAN, NAN, 1.91f, 2.07f, 2.14f, NAN, NAN, NAN, NAN, NAN},
  {NAN, NAN, 1.91f, 2.07f, NAN, NAN, NAN, NAN, NAN, NAN},
  {NAN, NAN, 2.08f, 2.24f, NAN, NAN, NAN, NAN, NAN, NAN},
  {NAN, NAN, 2.24f, 2.41f, NAN, NAN, NAN, NAN, NAN, NAN},
  {NAN, NAN, 2.24f, NAN, NAN, NAN, NAN, NAN, NAN, NAN},
  {NAN, NAN, 3.00f, NAN, NAN, NAN, NAN, NAN, NAN, NAN},
};

static inline int find_interval(const float *bp, int n, float x) {
  if (x <= bp[0]) return 0;
  if (x >= bp[n - 1]) return n - 2;
  for (int i = 0; i < n - 1; i++) {
    if (x >= bp[i] && x <= bp[i + 1]) return i;
  }
  return n - 2;
}

static inline float lerp(float a, float b, float t) {
  return a + (b - a) * t;
}

template <std::size_t N>
static inline float interp_ambient_level(const float (&data)[N][N_LVL], const float (&amb_bp)[N], int level, float Tamb) {
  if (level <= 0) return 0.0f;
  if (level > N_LVL) level = N_LVL;
  const int li = level - 1;

  int ai = find_interval(amb_bp, static_cast<int>(N), Tamb);
  float a0 = amb_bp[ai];
  float a1 = amb_bp[ai + 1];
  float t = (a1 == a0) ? 0.0f : (Tamb - a0) / (a1 - a0);
  if (t < 0.0f) t = 0.0f;
  if (t > 1.0f) t = 1.0f;

  float q0 = data[ai][li];
  float q1 = data[ai + 1][li];
  if (std::isnan(q0) || std::isnan(q1)) return NAN;
  return lerp(q0, q1, t);
}

static inline int select_band(float Tsup) {
  if (Tsup < 60.0f) return 55;
  if (Tsup < 67.5f) return 65;
  return 70;
}

static inline float interp_power_th_w(int level, float Tamb, float Tsup) {
  switch (select_band(Tsup)) {
    case 55: return interp_ambient_level(P_TH_W55, T_amb_bp_w55, level, Tamb);
    case 65: return interp_ambient_level(P_TH_W65, T_amb_bp_w65, level, Tamb);
    default:  return interp_ambient_level(P_TH_W70, T_amb_bp_w70, level, Tamb);
  }
}

static inline float interp_cop(int level, float Tamb, float Tsup) {
  switch (select_band(Tsup)) {
    case 55: return interp_ambient_level(COP_W55, T_amb_bp_w55, level, Tamb);
    case 65: return interp_ambient_level(COP_W65, T_amb_bp_w65, level, Tamb);
    default:  return interp_ambient_level(COP_W70, T_amb_bp_w70, level, Tamb);
  }
}

static inline float interp_power_el_w(int level, float Tamb, float Tsup, float cop_fallback = 3.0f) {
  float pth = interp_power_th_w(level, Tamb, Tsup);
  if (std::isnan(pth) || pth <= 0.0f) return 0.0f;
  float cop = interp_cop(level, Tamb, Tsup);
  if (std::isnan(cop) || cop <= 0.1f) cop = cop_fallback;
  return pth / cop;
}

} // namespace oq_perf_v2_high
