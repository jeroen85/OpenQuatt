#pragma once
// Auto-generated from hp_performance_data.json
// V1/V1.5 performance map, kept in a dedicated namespace for dispatching.
// Provides thermisch vermogen (W) en COP als functie van (level, Tamb, Tsup).
#include <cmath>

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
static constexpr float COMP_FREQ_BP[N_LVL] = {30.00f, 39.00f, 49.00f, 55.00f, 61.00f, 67.00f, 72.00f, 79.00f, 85.00f, 90.00f};
static constexpr float COMP_LEVEL_BP[N_LVL] = {1.00f, 2.00f, 3.00f, 4.00f, 5.00f, 6.00f, 7.00f, 8.00f, 9.00f, 10.00f};
static constexpr float P_hp_bp[20] = {1400.00f, 1900.00f, 2400.00f, 2900.00f, 3400.00f, 3900.00f, 4400.00f, 4900.00f, 5400.00f, 5900.00f, 6400.00f, 6900.00f, 7400.00f, 7900.00f, 8400.00f, 8900.00f, 9400.00f, 9900.00f, 10400.00f, 10900.00f};

static constexpr float P_th_W[N_AMB][N_SUP][N_LVL] = {
  {
    {4082.42f, 4579.67f, 5076.93f, 5491.31f, 5905.69f, 6237.20f, 6651.58f, 7065.96f, 7480.34f, 7728.97f},
    {4360.02f, 4936.60f, 5513.18f, 5993.67f, 6474.15f, 6858.55f, 7338.83f, 7819.29f, 8299.76f, 8588.04f},
    {4458.08f, 5062.68f, 5667.29f, 6170.98f, 6674.80f, 7077.85f, NAN, NAN, NAN, NAN},
    {4556.15f, 5188.77f, 5821.27f, NAN, NAN, NAN, NAN, NAN, NAN, NAN},
    {4736.01f, 5420.03f, NAN, NAN, NAN, NAN, NAN, NAN, NAN, NAN},
    {3651.99f, 4141.98f, 4631.98f, 5030.14f, 5408.01f, 5734.67f, 6132.84f, 6541.16f, 6949.49f, 7214.79f},
    {4095.23f, 4670.37f, 5245.51f, 5712.29f, 6154.08f, 6537.51f, 7004.04f, 7483.30f, 7962.56f, 8275.11f},
    {4251.81f, 4857.02f, 5462.24f, 5953.06f, 6417.41f, 6820.87f, NAN, NAN, NAN, NAN},
    {4408.39f, 5043.68f, 5678.80f, NAN, NAN, NAN, NAN, NAN, NAN, NAN},
  },
  {
    {4695.57f, 5386.04f, NAN, NAN, NAN, NAN, NAN, NAN, NAN, NAN},
    {3387.73f, 3884.27f, 4380.81f, 4761.58f, 5076.29f, 5407.32f, 5788.08f, 6201.86f, 6615.65f, 6929.97f},
    {4029.06f, 4624.64f, 5220.22f, 5675.58f, 6049.01f, 6446.06f, 6901.09f, 7397.38f, 7893.68f, 8273.37f},
    {4255.62f, 4886.18f, 5516.75f, 5998.18f, 6392.33f, 6812.70f, NAN, NAN, NAN, NAN},
    {4482.16f, 5147.71f, 5813.03f, NAN, NAN, NAN, NAN, NAN, NAN, NAN},
    {4897.70f, 5627.42f, NAN, NAN, NAN, NAN, NAN, NAN, NAN, NAN},
    {3240.39f, 3745.98f, 4251.57f, 4614.57f, 4860.91f, 5197.97f, 5560.97f, 5982.30f, 6403.62f, 6773.07f},
    {4041.47f, 4662.68f, 5283.89f, 5728.62f, 6027.46f, 6441.60f, 6885.94f, 7403.59f, 7921.23f, 8377.69f},
    {4324.46f, 4986.51f, 5648.56f, 6121.83f, 6439.20f, 6880.55f, NAN, NAN, NAN, NAN},
  },
  {
    {4607.44f, 5310.33f, 6012.92f, NAN, NAN, NAN, NAN, NAN, NAN, NAN},
    {5126.48f, 5904.29f, NAN, NAN, NAN, NAN, NAN, NAN, NAN, NAN},
    {3110.96f, 3618.48f, 4126.00f, 4471.69f, 4662.90f, 5001.25f, 5346.94f, 5769.86f, 6192.80f, 6601.05f},
    {4002.43f, 4639.45f, 5276.48f, 5709.88f, 5948.39f, 6373.07f, 6806.04f, 7336.86f, 7867.69f, 8381.07f},
    {4317.34f, 5000.11f, 5682.89f, 6146.92f, 6402.10f, 6857.27f, NAN, NAN, NAN, NAN},
    {4632.25f, 5360.77f, 6088.96f, NAN, NAN, NAN, NAN, NAN, NAN, NAN},
    {5209.86f, 6022.29f, NAN, NAN, NAN, NAN, NAN, NAN, NAN, NAN},
    {2850.64f, 3345.06f, 3839.47f, 4169.08f, 4333.89f, 4663.50f, 4993.11f, 5405.13f, 5817.14f, 6229.15f},
    {3771.87f, 4401.61f, 5031.36f, 5451.19f, 5661.11f, 6080.94f, 6500.33f, 7025.09f, 7549.85f, 8074.60f},
  },
  {
    {4097.29f, 4774.85f, 5452.40f, 5903.73f, 6129.57f, 6581.24f, NAN, NAN, NAN, NAN},
    {4422.72f, 5148.08f, 5873.09f, NAN, NAN, NAN, NAN, NAN, NAN, NAN},
    {5019.61f, 5832.65f, NAN, NAN, NAN, NAN, NAN, NAN, NAN, NAN},
    {2462.83f, 2934.41f, 3406.00f, 3720.40f, 3877.59f, 4191.99f, 4506.38f, 4899.37f, 5292.36f, 5685.35f},
    {3396.36f, 4003.28f, 4610.20f, 5014.82f, 5217.12f, 5621.74f, 6025.90f, 6531.64f, 7037.37f, 7543.10f},
    {3726.14f, 4380.86f, 5035.58f, 5471.69f, 5689.92f, 6126.38f, NAN, NAN, NAN, NAN},
    {4055.90f, 4758.43f, 5460.62f, NAN, NAN, NAN, NAN, NAN, NAN, NAN},
    {4660.77f, 5450.98f, NAN, NAN, NAN, NAN, NAN, NAN, NAN, NAN},
    {2075.01f, 2523.77f, 2972.53f, 3271.71f, 3421.30f, 3720.47f, 4019.65f, 4393.61f, 4767.58f, 5141.55f},
  },
  {
    {3020.85f, 3604.95f, 4189.04f, 4578.43f, 4773.13f, 5162.52f, 5551.47f, 6038.18f, 6524.89f, 7011.60f},
    {3354.97f, 3986.87f, 4618.77f, 5039.65f, 5250.27f, 5671.51f, NAN, NAN, NAN, NAN},
    {3689.09f, 4368.80f, 5048.15f, NAN, NAN, NAN, NAN, NAN, NAN, NAN},
    {4301.93f, 5069.32f, NAN, NAN, NAN, NAN, NAN, NAN, NAN, NAN},
    {1687.20f, 2113.13f, 2539.07f, 2823.02f, 2965.00f, 3248.96f, 3532.91f, 3887.86f, 4242.80f, 4597.75f},
    {2645.35f, 3206.61f, 3767.88f, 4142.05f, 4329.14f, 4703.32f, 5077.04f, 5544.73f, 6012.41f, 6480.10f},
    {2983.81f, 3592.89f, 4201.95f, 4607.61f, 4810.62f, 5216.65f, NAN, NAN, NAN, NAN},
    {3322.28f, 3979.16f, 4635.67f, NAN, NAN, NAN, NAN, NAN, NAN, NAN},
    {3943.09f, 4687.65f, NAN, NAN, NAN, NAN, NAN, NAN, NAN, NAN},
  },
};
static constexpr float COP[N_AMB][N_SUP][N_LVL] = {
  {
    {10.91f, 9.87f, 8.82f, 7.95f, 7.08f, 6.38f, 5.51f, 4.64f, 3.77f, 3.24f},
    {20.61f, 18.94f, 17.27f, 15.87f, 14.48f, 13.37f, 11.98f, 10.58f, 9.19f, 8.36f},
    {24.02f, 22.13f, 20.24f, 18.67f, 17.09f, 15.83f, NAN, NAN, NAN, NAN},
    {27.45f, 25.34f, 23.23f, NAN, NAN, NAN, NAN, NAN, NAN, NAN},
    {33.73f, 31.21f, NAN, NAN, NAN, NAN, NAN, NAN, NAN, NAN},
    {8.65f, 7.88f, 7.11f, 6.49f, 5.89f, 5.38f, 4.76f, 4.12f, 3.48f, 3.06f},
    {17.85f, 16.49f, 15.12f, 14.00f, 12.92f, 12.01f, 10.89f, 9.75f, 8.61f, 7.90f},
    {21.11f, 19.53f, 17.95f, 16.66f, 15.40f, 14.35f, NAN, NAN, NAN, NAN},
    {24.36f, 22.57f, 20.77f, NAN, NAN, NAN, NAN, NAN, NAN, NAN},
  },
  {
    {30.32f, 28.15f, NAN, NAN, NAN, NAN, NAN, NAN, NAN, NAN},
    {6.41f, 5.88f, 5.35f, 4.94f, 4.60f, 4.25f, 3.84f, 3.39f, 2.95f, 2.61f},
    {15.29f, 14.22f, 13.14f, 12.30f, 11.58f, 10.86f, 10.02f, 9.12f, 8.22f, 7.56f},
    {18.43f, 17.16f, 15.89f, 14.89f, 14.04f, 13.19f, NAN, NAN, NAN, NAN},
    {21.57f, 20.11f, 18.64f, NAN, NAN, NAN, NAN, NAN, NAN, NAN},
    {27.33f, 25.51f, NAN, NAN, NAN, NAN, NAN, NAN, NAN, NAN},
    {4.79f, 4.40f, 4.02f, 3.76f, 3.59f, 3.33f, 3.06f, 2.75f, 2.43f, 2.14f},
    {13.35f, 12.49f, 11.63f, 11.00f, 10.57f, 9.99f, 9.37f, 8.65f, 7.93f, 7.31f},
    {16.38f, 15.34f, 14.31f, 13.56f, 13.03f, 12.34f, NAN, NAN, NAN, NAN},
  },
  {
    {19.40f, 18.20f, 17.00f, NAN, NAN, NAN, NAN, NAN, NAN, NAN},
    {24.95f, 23.44f, NAN, NAN, NAN, NAN, NAN, NAN, NAN, NAN},
    {3.87f, 3.58f, 3.28f, 3.08f, 2.99f, 2.78f, 2.59f, 2.35f, 2.09f, 1.85f},
    {12.00f, 11.28f, 10.56f, 10.07f, 9.80f, 9.32f, 8.83f, 8.23f, 7.62f, 7.05f},
    {14.87f, 14.00f, 13.13f, 12.53f, 12.21f, 11.62f, NAN, NAN, NAN, NAN},
    {17.74f, 16.72f, 15.70f, NAN, NAN, NAN, NAN, NAN, NAN, NAN},
    {23.01f, 21.72f, NAN, NAN, NAN, NAN, NAN, NAN, NAN, NAN},
    {3.27f, 3.07f, 2.86f, 2.73f, 2.66f, 2.53f, 2.39f, 2.22f, 2.05f, 1.89f},
    {10.77f, 10.18f, 9.57f, 9.17f, 8.97f, 8.57f, 8.16f, 7.66f, 7.16f, 6.65f},
  },
  {
    {13.43f, 12.68f, 11.94f, 11.44f, 11.19f, 10.70f, NAN, NAN, NAN, NAN},
    {16.08f, 15.20f, 14.31f, NAN, NAN, NAN, NAN, NAN, NAN, NAN},
    {20.95f, 19.80f, NAN, NAN, NAN, NAN, NAN, NAN, NAN, NAN},
    {2.57f, 2.50f, 2.44f, 2.40f, 2.37f, 2.33f, 2.29f, 2.23f, 2.18f, 2.12f},
    {9.35f, 8.88f, 8.41f, 8.11f, 7.95f, 7.64f, 7.33f, 6.94f, 6.55f, 6.16f},
    {11.75f, 11.14f, 10.53f, 10.12f, 9.92f, 9.51f, NAN, NAN, NAN, NAN},
    {14.14f, 13.39f, 12.64f, NAN, NAN, NAN, NAN, NAN, NAN, NAN},
    {18.53f, 17.52f, NAN, NAN, NAN, NAN, NAN, NAN, NAN, NAN},
    {1.87f, 1.94f, 2.01f, 2.06f, 2.08f, 2.13f, 2.18f, 2.24f, 2.30f, 2.36f},
  },
  {
    {7.92f, 7.59f, 7.26f, 7.04f, 6.93f, 6.71f, 6.49f, 6.22f, 5.94f, 5.67f},
    {10.06f, 9.59f, 9.11f, 8.80f, 8.64f, 8.33f, NAN, NAN, NAN, NAN},
    {12.20f, 11.59f, 10.97f, NAN, NAN, NAN, NAN, NAN, NAN, NAN},
    {16.12f, 15.24f, NAN, NAN, NAN, NAN, NAN, NAN, NAN, NAN},
    {1.17f, 1.38f, 1.59f, 1.73f, 1.80f, 1.93f, 2.07f, 2.25f, 2.42f, 2.59f},
    {6.50f, 6.30f, 6.11f, 5.98f, 5.92f, 5.79f, 5.66f, 5.50f, 5.33f, 5.17f},
    {8.38f, 8.04f, 7.71f, 7.48f, 7.37f, 7.15f, NAN, NAN, NAN, NAN},
    {10.25f, 9.78f, 9.30f, NAN, NAN, NAN, NAN, NAN, NAN, NAN},
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

static inline float interp_power_th_w(int level, float Tamb, float Tsup) {
  if (uses_v2_map()) {
    return oq_perf_v2::interp_power_th_w(level, Tamb, Tsup);
  }
  return oq_perf_v1::interp_power_th_w(level, Tamb, Tsup);
}

static inline float interp_cop(int level, float Tamb, float Tsup) {
  if (uses_v2_map()) {
    return oq_perf_v2::interp_cop(level, Tamb, Tsup);
  }
  return oq_perf_v1::interp_cop(level, Tamb, Tsup);
}

static inline float interp_power_el_w(int level, float Tamb, float Tsup, float cop_fallback=3.0f) {
  if (uses_v2_map()) {
    return oq_perf_v2::interp_power_el_w(level, Tamb, Tsup, cop_fallback);
  }
  return oq_perf_v1::interp_power_el_w(level, Tamb, Tsup, cop_fallback);
}

} // namespace oq_perf
