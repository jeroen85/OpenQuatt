#pragma once
// Auto-generated performance maps from hp_performance_data.json, hp_v2_performance_data.json
// and the V2 high-temperature continuation.
// V1/V1.5 and V2 performance maps, kept in dedicated namespaces for dispatching.
// Provides thermisch vermogen (W) en COP als functie van (level, Tamb, Tsup).
#include <cmath>
#include "hp_perf_map_v2_high.h"

namespace oq_perf_v1 {

static constexpr int N_AMB = 5;
static constexpr int N_SUP = 3;
static constexpr int N_LVL = 10; // levels 1..10

static constexpr float T_amb_bp[N_AMB] = {-15.00f, -7.00f, 2.00f, 7.00f, 12.00f};
static constexpr float T_sup_bp[N_SUP] = {35.00f, 45.00f, 55.00f};

static constexpr float P_th_W[N_AMB][N_SUP][N_LVL] = {
  {
    {792.39f, 1054.23f, 1358.42f, 1547.65f, 1741.89f, 1941.17f, 2111.07f, 2354.79f, 2569.14f, 2751.61f},
    {750.50f, 1023.67f, 1340.45f, 1537.22f, 1739.02f, 1945.85f, 2122.04f, 2374.58f, 2596.48f, 2785.24f},
    {285.03f, 569.53f, 898.90f, 1103.22f, 1312.57f, 1526.95f, 1709.44f, 1970.78f, 2200.24f, NAN},
  },
  {
    {1119.63f, 1491.69f, 1918.35f, 2181.05f, 2448.78f, 2721.53f, 2952.66f, 3282.11f, 3569.94f, 3813.64f},
    {998.50f, 1381.88f, 1821.13f, 2091.38f, 2366.66f, 2646.96f, 2884.39f, 3222.65f, 3518.03f, 3768.03f},
    {453.78f, 848.49f, 1300.33f, 1578.13f, 1860.96f, 2148.82f, 2392.54f, 2739.61f, NAN, NAN},
  },
  {
    {1675.91f, 2171.97f, 2736.40f, 3081.76f, 3432.15f, 3787.56f, 4087.58f, 4513.47f, 4883.97f, 5196.55f},
    {1465.62f, 1973.00f, 2550.02f, 2902.94f, 3260.88f, 3623.85f, 3930.16f, 4364.86f, 4742.91f, 5061.78f},
    {831.75f, 1350.46f, 1940.07f, 2300.54f, 2666.03f, 3036.55f, 3349.15f, 3792.67f, NAN, NAN},
  },
  {
    {2071.03f, 2635.97f, 3276.94f, 3668.23f, 4064.54f, 4465.88f, 4804.17f, 5283.63f, 5700.05f, 6050.91f},
    {1811.21f, 2387.48f, 3041.04f, 3439.87f, 3843.74f, 4252.63f, 4597.21f, 5085.49f, 5509.46f, 5866.61f},
    {1127.81f, 1715.41f, 2381.55f, 2787.94f, 3199.36f, 3615.80f, 3966.68f, 4463.77f, NAN, NAN},
  },
  {
    {2527.63f, 3161.45f, 3878.96f, 4316.17f, 4758.41f, 5205.67f, 5582.23f, 6115.28f, NAN, NAN},
    {2218.28f, 2863.43f, 3593.53f, 4038.29f, 4488.08f, 4942.89f, 5325.75f, 5867.60f, NAN, NAN},
    {1485.35f, 2141.83f, 2884.52f, 3336.83f, 3794.17f, 4256.54f, 4645.68f, 5196.35f, NAN, NAN},
  },
};
static constexpr float COP[N_AMB][N_SUP][N_LVL] = {
  {
    {1.78f, 1.98f, 2.15f, 2.22f, 2.28f, 2.30f, 2.31f, 2.30f, 2.26f, 2.21f},
    {1.03f, 1.31f, 1.57f, 1.70f, 1.80f, 1.89f, 1.94f, 1.99f, 2.00f, 2.00f},
    {0.22f, 0.59f, 0.94f, 1.12f, 1.28f, 1.41f, 1.51f, 1.62f, 1.69f, NAN},
  },
  {
    {2.73f, 2.88f, 2.99f, 3.02f, 3.04f, 3.03f, 3.01f, 2.95f, 2.87f, 2.79f},
    {1.80f, 2.03f, 2.23f, 2.31f, 2.38f, 2.43f, 2.45f, 2.45f, 2.43f, 2.40f},
    {0.81f, 1.12f, 1.41f, 1.55f, 1.67f, 1.77f, 1.83f, 1.90f, NAN, NAN},
  },
  {
    {3.96f, 4.04f, 4.08f, 4.07f, 4.04f, 3.99f, 3.94f, 3.83f, 3.71f, 3.60f},
    {2.82f, 2.98f, 3.11f, 3.16f, 3.18f, 3.19f, 3.17f, 3.13f, 3.06f, 2.99f},
    {1.62f, 1.87f, 2.08f, 2.18f, 2.26f, 2.32f, 2.35f, 2.37f, NAN, NAN},
  },
  {
    {4.71f, 4.76f, 4.75f, 4.72f, 4.67f, 4.60f, 4.52f, 4.39f, 4.25f, 4.11f},
    {3.45f, 3.58f, 3.67f, 3.69f, 3.70f, 3.68f, 3.64f, 3.57f, 3.48f, 3.39f},
    {2.14f, 2.35f, 2.53f, 2.61f, 2.66f, 2.69f, 2.71f, 2.70f, NAN, NAN},
  },
  {
    {5.50f, 5.52f, 5.48f, 5.42f, 5.35f, 5.25f, 5.15f, 4.99f, NAN, NAN},
    {4.13f, 4.23f, 4.28f, 4.28f, 4.26f, 4.21f, 4.16f, 4.06f, NAN, NAN},
    {2.71f, 2.89f, 3.02f, 3.08f, 3.11f, 3.12f, 3.11f, 3.07f, NAN, NAN},
  },
};

static inline int find_interval(const float *bp, int n, float x) {
  if (x <= bp[0]) return 0;
  if (x >= bp[n-1]) return n-2;
  for (int i=0;i<n-1;i++) {
    if (x >= bp[i] && x <= bp[i+1]) return i;
  }
  return n-2;
}

static inline float lerp(float a, float b, float t) {
  return a + (b - a) * t;
}

static inline float bilerp(float q11, float q21, float q12, float q22, float tx, float ty) {
  // x: amb, y: sup
  float r1 = lerp(q11, q21, tx);
  float r2 = lerp(q12, q22, tx);
  return lerp(r1, r2, ty);
}

static inline float interp_3d(const float data[N_AMB][N_SUP][N_LVL], int level, float Tamb, float Tsup) {
  if (level <= 0) return 0.0f;           // level 0 => off
  if (level > N_LVL) level = N_LVL;
  const int li = level - 1;

  int ai = find_interval(T_amb_bp, N_AMB, Tamb);
  int si = find_interval(T_sup_bp, N_SUP, Tsup);

  float ax0 = T_amb_bp[ai];
  float ax1 = T_amb_bp[ai+1];
  float sy0 = T_sup_bp[si];
  float sy1 = T_sup_bp[si+1];

  float tx = (ax1 == ax0) ? 0.0f : (Tamb - ax0) / (ax1 - ax0);
  float ty = (sy1 == sy0) ? 0.0f : (Tsup - sy0) / (sy1 - sy0);
  if (tx < 0) tx = 0; if (tx > 1) tx = 1;
  if (ty < 0) ty = 0; if (ty > 1) ty = 1;

  float q11 = data[ai][si][li];
  float q21 = data[ai+1][si][li];
  float q12 = data[ai][si+1][li];
  float q22 = data[ai+1][si+1][li];

  // If any cell is missing (NaN), return NaN so the caller can fallback/skip.
  if (std::isnan(q11) || std::isnan(q21) || std::isnan(q12) || std::isnan(q22)) return NAN;

  return bilerp(q11, q21, q12, q22, tx, ty);
}

static inline float interp_power_th_w(int level, float Tamb, float Tsup) {
  return interp_3d(P_th_W, level, Tamb, Tsup);
}

static inline float interp_cop(int level, float Tamb, float Tsup) {
  return interp_3d(COP, level, Tamb, Tsup);
}

static inline float interp_power_el_w(int level, float Tamb, float Tsup, float cop_fallback=3.0f) {
  float pth = interp_power_th_w(level, Tamb, Tsup);
  if (std::isnan(pth) || pth <= 0.0f) return 0.0f;
  float cop = interp_cop(level, Tamb, Tsup);
  if (std::isnan(cop) || cop <= 0.1f) cop = cop_fallback;
  return pth / cop;
}

} // namespace oq_perf_v1


namespace oq_perf_v2 {

static constexpr int N_AMB = 5;
static constexpr int N_SUP = 9;
static constexpr int N_LVL = 10; // levels 1..10

static constexpr float T_amb_bp[N_AMB] = {-10.00f, 11.00f, 17.00f, 23.00f, 39.99f};
static constexpr float T_sup_bp[N_SUP] = {15.00f, 20.00f, 25.00f, 30.00f, 35.00f, 40.00f, 45.00f, 50.00f, 55.00f};
static constexpr float COMP_FREQ_BP[N_LVL] = {20.00f, 26.00f, 30.00f, 48.00f, 55.00f, 61.00f, 72.00f, 80.00f, 85.00f, 90.00f};
static constexpr float COMP_LEVEL_BP[N_LVL] = {1.00f, 2.00f, 3.00f, 4.00f, 5.00f, 6.00f, 7.00f, 8.00f, 9.00f, 10.00f};
static constexpr float P_hp_bp[20] = {1400.00f, 1900.00f, 2400.00f, 2900.00f, 3400.00f, 3900.00f, 4400.00f, 4900.00f, 5400.00f, 5900.00f, 6400.00f, 6900.00f, 7400.00f, 7900.00f, 8400.00f, 8900.00f, 9400.00f, 9900.00f, 10400.00f, 10900.00f};

static constexpr float P_th_W[N_AMB][N_SUP][N_LVL] = {
  {
    {4789.71f, 5398.26f, 6006.82f, 6412.52f, 6615.37f, 7021.08f, 7426.78f, 7933.91f, 8441.04f, 8948.17f},
    {4401.89f, 4987.62f, 5573.35f, 5963.83f, 6159.08f, 6549.56f, 6940.05f, 7428.15f, 7916.26f, 8404.36f},
    {4014.08f, 4576.98f, 5139.88f, 5515.15f, 5702.78f, 6078.05f, 6453.31f, 6922.40f, 7391.48f, 7860.56f},
    {3626.27f, 4166.34f, 4706.41f, 5066.46f, 5246.48f, 5606.53f, 5966.58f, 6416.64f, 6866.70f, 7316.76f},
    {3238.45f, 3755.70f, 4272.94f, 4617.77f, 4790.19f, 5135.02f, 5479.85f, 5910.88f, 6341.92f, 6772.96f},
    {2850.64f, 3345.06f, 3839.47f, 4169.08f, 4333.89f, 4663.50f, 4993.11f, 5405.13f, 5817.14f, 6229.15f},
    {2462.83f, 2934.41f, 3406.00f, 3720.40f, 3877.59f, 4191.99f, 4506.38f, 4899.37f, 5292.36f, 5685.35f},
    {2075.01f, 2523.77f, 2972.53f, 3271.71f, 3421.30f, 3720.47f, 4019.65f, 4393.61f, 4767.58f, 5141.55f},
    {1687.20f, 2113.13f, 2539.07f, 2823.02f, 2965.00f, 3248.96f, 3532.91f, 3887.86f, 4242.80f, 4597.75f},
  },
  {
    {5649.40f, 6393.29f, 7137.18f, 7633.10f, 7881.06f, 8376.99f, 8872.49f, 9492.36f, 10112.23f, 10732.10f},
    {5273.90f, 5994.95f, 6716.02f, 7196.72f, 7437.07f, 7917.78f, 8398.06f, 8998.91f, 9599.76f, 10200.60f},
    {4898.39f, 5596.62f, 6294.85f, 6760.34f, 6993.08f, 7458.57f, 7923.63f, 8505.45f, 9087.28f, 9669.10f},
    {4522.89f, 5198.28f, 5873.69f, 6323.96f, 6549.09f, 6999.36f, 7449.19f, 8012.00f, 8574.80f, 9137.60f},
    {4147.38f, 4799.95f, 5452.52f, 5887.57f, 6105.10f, 6540.15f, 6974.76f, 7518.54f, 8062.32f, 8606.10f},
    {3771.87f, 4401.61f, 5031.36f, 5451.19f, 5661.11f, 6080.94f, 6500.33f, 7025.09f, 7549.85f, 8074.60f},
    {3396.36f, 4003.28f, 4610.20f, 5014.82f, 5217.12f, 5621.74f, 6025.90f, 6531.64f, 7037.37f, 7543.10f},
    {3020.85f, 3604.95f, 4189.04f, 4578.43f, 4773.13f, 5162.52f, 5551.47f, 6038.18f, 6524.89f, 7011.60f},
    {2645.35f, 3206.61f, 3767.88f, 4142.05f, 4329.14f, 4703.32f, 5077.04f, 5544.73f, 6012.41f, 6480.10f},
  },
  {
    {5953.10f, 6744.79f, 7536.48f, 8063.92f, 8327.80f, 8855.57f, NAN, NAN, NAN, NAN},
    {5581.93f, 6350.80f, 7119.66f, 7631.88f, 7888.15f, 8400.70f, NAN, NAN, NAN, NAN},
    {5210.78f, 5956.81f, 6702.85f, 7199.84f, 7448.51f, 7945.84f, NAN, NAN, NAN, NAN},
    {4839.61f, 5562.83f, 6286.03f, 6767.80f, 7008.86f, 7490.97f, NAN, NAN, NAN, NAN},
    {4468.45f, 5168.84f, 5869.22f, 6335.77f, 6569.21f, 7036.11f, NAN, NAN, NAN, NAN},
    {4097.29f, 4774.85f, 5452.40f, 5903.73f, 6129.57f, 6581.24f, NAN, NAN, NAN, NAN},
    {3726.14f, 4380.86f, 5035.58f, 5471.69f, 5689.92f, 6126.38f, NAN, NAN, NAN, NAN},
    {3354.97f, 3986.87f, 4618.77f, 5039.65f, 5250.27f, 5671.51f, NAN, NAN, NAN, NAN},
    {2983.81f, 3592.89f, 4201.95f, 4607.61f, 4810.62f, 5216.65f, NAN, NAN, NAN, NAN},
  },
  {
    {6256.78f, 7096.28f, 7935.45f, NAN, NAN, NAN, NAN, NAN, NAN, NAN},
    {5889.98f, 6706.65f, 7522.98f, NAN, NAN, NAN, NAN, NAN, NAN, NAN},
    {5523.16f, 6317.00f, 7110.51f, NAN, NAN, NAN, NAN, NAN, NAN, NAN},
    {5156.34f, 5927.36f, 6698.04f, NAN, NAN, NAN, NAN, NAN, NAN, NAN},
    {4789.53f, 5537.72f, 6285.56f, NAN, NAN, NAN, NAN, NAN, NAN, NAN},
    {4422.72f, 5148.08f, 5873.09f, NAN, NAN, NAN, NAN, NAN, NAN, NAN},
    {4055.90f, 4758.43f, 5460.62f, NAN, NAN, NAN, NAN, NAN, NAN, NAN},
    {3689.09f, 4368.80f, 5048.15f, NAN, NAN, NAN, NAN, NAN, NAN, NAN},
    {3322.28f, 3979.16f, 4635.67f, NAN, NAN, NAN, NAN, NAN, NAN, NAN},
  },
  {
    {6813.81f, 7740.99f, NAN, NAN, NAN, NAN, NAN, NAN, NAN, NAN},
    {6454.97f, 7359.32f, NAN, NAN, NAN, NAN, NAN, NAN, NAN, NAN},
    {6096.13f, 6977.66f, NAN, NAN, NAN, NAN, NAN, NAN, NAN, NAN},
    {5737.29f, 6595.99f, NAN, NAN, NAN, NAN, NAN, NAN, NAN, NAN},
    {5378.45f, 6214.32f, NAN, NAN, NAN, NAN, NAN, NAN, NAN, NAN},
    {5019.61f, 5832.65f, NAN, NAN, NAN, NAN, NAN, NAN, NAN, NAN},
    {4660.77f, 5450.98f, NAN, NAN, NAN, NAN, NAN, NAN, NAN, NAN},
    {4301.93f, 5069.32f, NAN, NAN, NAN, NAN, NAN, NAN, NAN, NAN},
    {3943.09f, 4687.65f, NAN, NAN, NAN, NAN, NAN, NAN, NAN, NAN},
  },
};
static constexpr float COP[N_AMB][N_SUP][N_LVL] = {
  {
    {6.76f, 5.88f, 4.99f, 4.40f, 4.10f, 3.51f, 2.92f, 2.19f, 1.45f, 0.71f},
    {6.06f, 5.31f, 4.56f, 4.07f, 3.82f, 3.32f, 2.82f, 2.19f, 1.57f, 0.94f},
    {5.36f, 4.75f, 4.14f, 3.73f, 3.53f, 3.12f, 2.71f, 2.20f, 1.69f, 1.18f},
    {4.67f, 4.19f, 3.71f, 3.40f, 3.24f, 2.92f, 2.60f, 2.21f, 1.81f, 1.42f},
    {3.97f, 3.63f, 3.29f, 3.06f, 2.95f, 2.72f, 2.50f, 2.22f, 1.93f, 1.65f},
    {3.27f, 3.07f, 2.86f, 2.73f, 2.66f, 2.53f, 2.39f, 2.22f, 2.05f, 1.89f},
    {2.57f, 2.50f, 2.44f, 2.40f, 2.37f, 2.33f, 2.29f, 2.23f, 2.18f, 2.12f},
    {1.87f, 1.94f, 2.01f, 2.06f, 2.08f, 2.13f, 2.18f, 2.24f, 2.30f, 2.36f},
    {1.17f, 1.38f, 1.59f, 1.73f, 1.80f, 1.93f, 2.07f, 2.25f, 2.42f, 2.59f},
  },
  {
    {17.91f, 16.63f, 15.34f, 14.48f, 14.05f, 13.20f, 12.34f, 11.27f, 10.19f, 9.12f},
    {16.48f, 15.34f, 14.18f, 13.42f, 13.04f, 12.27f, 11.50f, 10.54f, 9.59f, 8.63f},
    {15.06f, 14.04f, 13.04f, 12.36f, 12.02f, 11.34f, 10.67f, 9.82f, 8.98f, 8.13f},
    {13.63f, 12.75f, 11.88f, 11.29f, 11.00f, 10.42f, 9.83f, 9.10f, 8.37f, 7.64f},
    {12.21f, 11.46f, 10.73f, 10.23f, 9.98f, 9.49f, 9.00f, 8.38f, 7.76f, 7.15f},
    {10.77f, 10.18f, 9.57f, 9.17f, 8.97f, 8.57f, 8.16f, 7.66f, 7.16f, 6.65f},
    {9.35f, 8.88f, 8.41f, 8.11f, 7.95f, 7.64f, 7.33f, 6.94f, 6.55f, 6.16f},
    {7.92f, 7.59f, 7.26f, 7.04f, 6.93f, 6.71f, 6.49f, 6.22f, 5.94f, 5.67f},
    {6.50f, 6.30f, 6.11f, 5.98f, 5.92f, 5.79f, 5.66f, 5.50f, 5.33f, 5.17f},
  },
  {
    {21.86f, 20.43f, 19.00f, 18.04f, 17.57f, 16.62f, NAN, NAN, NAN, NAN},
    {20.17f, 18.88f, 17.59f, 16.72f, 16.29f, 15.43f, NAN, NAN, NAN, NAN},
    {18.48f, 17.33f, 16.18f, 15.40f, 15.02f, 14.25f, NAN, NAN, NAN, NAN},
    {16.80f, 15.78f, 14.77f, 14.08f, 13.74f, 13.06f, NAN, NAN, NAN, NAN},
    {15.11f, 14.23f, 13.35f, 12.76f, 12.47f, 11.88f, NAN, NAN, NAN, NAN},
    {13.43f, 12.68f, 11.94f, 11.44f, 11.19f, 10.70f, NAN, NAN, NAN, NAN},
    {11.75f, 11.14f, 10.53f, 10.12f, 9.92f, 9.51f, NAN, NAN, NAN, NAN},
    {10.06f, 9.59f, 9.11f, 8.80f, 8.64f, 8.33f, NAN, NAN, NAN, NAN},
    {8.38f, 8.04f, 7.71f, 7.48f, 7.37f, 7.15f, NAN, NAN, NAN, NAN},
  },
  {
    {25.80f, 24.23f, 22.65f, NAN, NAN, NAN, NAN, NAN, NAN, NAN},
    {23.86f, 22.42f, 20.98f, NAN, NAN, NAN, NAN, NAN, NAN, NAN},
    {21.91f, 20.62f, 19.31f, NAN, NAN, NAN, NAN, NAN, NAN, NAN},
    {19.96f, 18.80f, 17.65f, NAN, NAN, NAN, NAN, NAN, NAN, NAN},
    {18.02f, 17.00f, 15.98f, NAN, NAN, NAN, NAN, NAN, NAN, NAN},
    {16.08f, 15.20f, 14.31f, NAN, NAN, NAN, NAN, NAN, NAN, NAN},
    {14.14f, 13.39f, 12.64f, NAN, NAN, NAN, NAN, NAN, NAN, NAN},
    {12.20f, 11.59f, 10.97f, NAN, NAN, NAN, NAN, NAN, NAN, NAN},
    {10.25f, 9.78f, 9.30f, NAN, NAN, NAN, NAN, NAN, NAN, NAN},
  },
  {
    {33.02f, 31.19f, NAN, NAN, NAN, NAN, NAN, NAN, NAN, NAN},
    {30.61f, 28.91f, NAN, NAN, NAN, NAN, NAN, NAN, NAN, NAN},
    {28.19f, 26.64f, NAN, NAN, NAN, NAN, NAN, NAN, NAN, NAN},
    {25.78f, 24.36f, NAN, NAN, NAN, NAN, NAN, NAN, NAN, NAN},
    {23.36f, 22.08f, NAN, NAN, NAN, NAN, NAN, NAN, NAN, NAN},
    {20.95f, 19.80f, NAN, NAN, NAN, NAN, NAN, NAN, NAN, NAN},
    {18.53f, 17.52f, NAN, NAN, NAN, NAN, NAN, NAN, NAN, NAN},
    {16.12f, 15.24f, NAN, NAN, NAN, NAN, NAN, NAN, NAN, NAN},
    {13.70f, 12.97f, NAN, NAN, NAN, NAN, NAN, NAN, NAN, NAN},
  },
};

static inline int find_interval(const float *bp, int n, float x) {
  if (x <= bp[0]) return 0;
  if (x >= bp[n-1]) return n-2;
  for (int i=0;i<n-1;i++) {
    if (x >= bp[i] && x <= bp[i+1]) return i;
  }
  return n-2;
}

static inline float lerp(float a, float b, float t) {
  return a + (b - a) * t;
}

static inline float bilerp(float q11, float q21, float q12, float q22, float tx, float ty) {
  // x: amb, y: sup
  float r1 = lerp(q11, q21, tx);
  float r2 = lerp(q12, q22, tx);
  return lerp(r1, r2, ty);
}

static inline float interp_3d(const float data[N_AMB][N_SUP][N_LVL], int level, float Tamb, float Tsup) {
  if (level <= 0) return 0.0f;           // level 0 => off
  if (level > N_LVL) level = N_LVL;
  const int li = level - 1;

  int ai = find_interval(T_amb_bp, N_AMB, Tamb);
  int si = find_interval(T_sup_bp, N_SUP, Tsup);

  float ax0 = T_amb_bp[ai];
  float ax1 = T_amb_bp[ai+1];
  float sy0 = T_sup_bp[si];
  float sy1 = T_sup_bp[si+1];

  float tx = (ax1 == ax0) ? 0.0f : (Tamb - ax0) / (ax1 - ax0);
  float ty = (sy1 == sy0) ? 0.0f : (Tsup - sy0) / (sy1 - sy0);
  if (tx < 0) tx = 0; if (tx > 1) tx = 1;
  if (ty < 0) ty = 0; if (ty > 1) ty = 1;

  float q11 = data[ai][si][li];
  float q21 = data[ai+1][si][li];
  float q12 = data[ai][si+1][li];
  float q22 = data[ai+1][si+1][li];

  // If any cell is missing (NaN), return NaN so the caller can fallback/skip.
  if (std::isnan(q11) || std::isnan(q21) || std::isnan(q12) || std::isnan(q22)) return NAN;

  return bilerp(q11, q21, q12, q22, tx, ty);
}

static inline float interp_power_th_w(int level, float Tamb, float Tsup) {
  return interp_3d(P_th_W, level, Tamb, Tsup);
}

static inline float interp_cop(int level, float Tamb, float Tsup) {
  return interp_3d(COP, level, Tamb, Tsup);
}

static inline float interp_power_el_w(int level, float Tamb, float Tsup, float cop_fallback=3.0f) {
  float pth = interp_power_th_w(level, Tamb, Tsup);
  if (std::isnan(pth) || pth <= 0.0f) return 0.0f;
  float cop = interp_cop(level, Tamb, Tsup);
  if (std::isnan(cop) || cop <= 0.1f) cop = cop_fallback;
  return pth / cop;
}

} // namespace oq_perf_v2

namespace oq_perf {

static inline bool uses_v2_map() {
  if (!id(hp_generation).has_state()) {
    return false;
  }
  return id(hp_generation).current_option() == "V2";
}

static inline float smoothstep(float edge0, float edge1, float x) {
  if (edge0 == edge1) return 1.0f;
  float t = (x - edge0) / (edge1 - edge0);
  if (t < 0.0f) t = 0.0f;
  if (t > 1.0f) t = 1.0f;
  return t * t * (3.0f - 2.0f * t);
}

static inline float lerp(float a, float b, float t) {
  return a + (b - a) * t;
}

static inline float interp_power_th_w(int level, float Tamb, float Tsup) {
  if (uses_v2_map()) {
    if (Tsup < 54.0f) {
      return oq_perf_v2::interp_power_th_w(level, Tamb, Tsup);
    }
    if (Tsup > 56.0f) {
      float p = oq_perf_v2_high::interp_power_th_w(level, Tamb, Tsup);
      if (!std::isnan(p)) return p;
      return oq_perf_v2::interp_power_th_w(level, Tamb, 55.0f);
    }
    float w = smoothstep(54.0f, 56.0f, Tsup);
    float p_base = oq_perf_v2::interp_power_th_w(level, Tamb, Tsup);
    float p_high = oq_perf_v2_high::interp_power_th_w(level, Tamb, Tsup);
    if (std::isnan(p_high)) return p_base;
    if (std::isnan(p_base)) return p_high;
    return lerp(p_base, p_high, w);
  }
  return oq_perf_v1::interp_power_th_w(level, Tamb, Tsup);
}

static inline float interp_cop(int level, float Tamb, float Tsup) {
  if (uses_v2_map()) {
    if (Tsup < 54.0f) {
      return oq_perf_v2::interp_cop(level, Tamb, Tsup);
    }
    if (Tsup > 56.0f) {
      float c = oq_perf_v2_high::interp_cop(level, Tamb, Tsup);
      if (!std::isnan(c)) return c;
      return oq_perf_v2::interp_cop(level, Tamb, 55.0f);
    }
    float w = smoothstep(54.0f, 56.0f, Tsup);
    float c_base = oq_perf_v2::interp_cop(level, Tamb, Tsup);
    float c_high = oq_perf_v2_high::interp_cop(level, Tamb, Tsup);
    if (std::isnan(c_high)) return c_base;
    if (std::isnan(c_base)) return c_high;
    return lerp(c_base, c_high, w);
  }
  return oq_perf_v1::interp_cop(level, Tamb, Tsup);
}

static inline float interp_power_el_w(int level, float Tamb, float Tsup, float cop_fallback=3.0f) {
  if (uses_v2_map()) {
    if (Tsup < 54.0f) {
      return oq_perf_v2::interp_power_el_w(level, Tamb, Tsup, cop_fallback);
    }
    if (Tsup > 56.0f) {
      float p = oq_perf_v2_high::interp_power_el_w(level, Tamb, Tsup, cop_fallback);
      if (!std::isnan(p) && p > 0.0f) return p;
      return oq_perf_v2::interp_power_el_w(level, Tamb, 55.0f, cop_fallback);
    }
    float w = smoothstep(54.0f, 56.0f, Tsup);
    float p_base = oq_perf_v2::interp_power_th_w(level, Tamb, Tsup);
    float p_high = oq_perf_v2_high::interp_power_th_w(level, Tamb, Tsup);
    float c_base = oq_perf_v2::interp_cop(level, Tamb, Tsup);
    float c_high = oq_perf_v2_high::interp_cop(level, Tamb, Tsup);
    if (std::isnan(p_high) || std::isnan(c_high)) {
      return oq_perf_v2::interp_power_el_w(level, Tamb, Tsup, cop_fallback);
    }
    if (std::isnan(p_base) || std::isnan(c_base)) {
      return oq_perf_v2_high::interp_power_el_w(level, Tamb, Tsup, cop_fallback);
    }
    float p = lerp(p_base, p_high, w);
    float c = lerp(c_base, c_high, w);
    if (c <= 0.1f) c = cop_fallback;
    return p / c;
  }
  return oq_perf_v1::interp_power_el_w(level, Tamb, Tsup, cop_fallback);
}

} // namespace oq_perf
