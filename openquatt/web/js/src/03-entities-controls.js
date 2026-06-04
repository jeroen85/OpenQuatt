  function getEntityValue(key) {
    if (Object.prototype.hasOwnProperty.call(state.drafts, key)) {
      return state.drafts[key];
    }
    const entity = state.entities[key];
    if (!entity) {
      return "";
    }
    return entity.value ?? entity.state ?? "";
  }

  function getNumberMeta(key) {
    const entity = state.entities[key] || {};
    return {
      min: Number(entity.min_value ?? 0),
      max: Number(entity.max_value ?? 100),
      step: Number(entity.step ?? 1),
      uom: entity.uom || "",
    };
  }

  function getInputDraftValue(key) {
    if (Object.prototype.hasOwnProperty.call(state.inputDrafts, key)) {
      return state.inputDrafts[key];
    }
    return getEntityValue(key);
  }

  function parseLooseNumber(rawValue) {
    if (typeof rawValue === "number") {
      return rawValue;
    }

    const value = String(rawValue ?? "")
      .trim()
      .replace(",", ".");

    if (!value || value === "-" || value === "." || value === "-.") {
      return Number.NaN;
    }

    return Number(value);
  }

  function normalizeTimeValue(rawValue) {
    const value = String(rawValue || "").trim();
    if (!value) {
      return "";
    }

    const compactMatch = value.match(/^(\d{1,2}):?(\d{2})(?::?(\d{2}))?$/);
    if (!compactMatch) {
      return "";
    }

    const hours = Number(compactMatch[1]);
    const minutes = Number(compactMatch[2]);
    const seconds = Number(compactMatch[3] || "0");
    if ([hours, minutes, seconds].some((part) => Number.isNaN(part))) {
      return "";
    }
    if (hours < 0 || hours > 23 || minutes < 0 || minutes > 59 || seconds < 0 || seconds > 59) {
      return "";
    }

    return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  }

  function toTimeInputValue(rawValue) {
    const normalized = normalizeTimeValue(rawValue);
    return normalized ? normalized.slice(0, 5) : "";
  }

  function normalizeDateTimeValue(rawValue) {
    const value = String(rawValue || "").trim();
    if (!value) {
      return "";
    }

    const match = value.match(/^(\d{4})-(\d{2})-(\d{2})(?:[T\s](\d{2}):(\d{2})(?::(\d{2}))?)$/);
    if (!match) {
      return "";
    }

    const year = Number(match[1]);
    const month = Number(match[2]);
    const day = Number(match[3]);
    const hour = Number(match[4]);
    const minute = Number(match[5]);
    const second = Number(match[6] || "0");
    if ([year, month, day, hour, minute, second].some((part) => Number.isNaN(part))) {
      return "";
    }
    if (
      year < 2000
      || month < 1
      || month > 12
      || day < 1
      || day > 31
      || hour < 0
      || hour > 23
      || minute < 0
      || minute > 59
      || second < 0
      || second > 59
    ) {
      return "";
    }

    return `${String(year).padStart(4, "0")}-${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")} ${String(hour).padStart(2, "0")}:${String(minute).padStart(2, "0")}:${String(second).padStart(2, "0")}`;
  }

  function toDateTimeInputValue(rawValue) {
    const normalized = normalizeDateTimeValue(rawValue);
    if (!normalized || normalized === OPENQUATT_RESUME_CLEAR_VALUE) {
      return "";
    }
    return normalized.slice(0, 16).replace(" ", "T");
  }

  function parseDateTimeValue(rawValue) {
    const normalized = normalizeDateTimeValue(rawValue);
    if (!normalized || normalized === OPENQUATT_RESUME_CLEAR_VALUE) {
      return null;
    }

    const match = normalized.match(/^(\d{4})-(\d{2})-(\d{2}) (\d{2}):(\d{2}):(\d{2})$/);
    if (!match) {
      return null;
    }

    const year = Number(match[1]);
    const month = Number(match[2]);
    const day = Number(match[3]);
    const hour = Number(match[4]);
    const minute = Number(match[5]);
    const second = Number(match[6]);
    const date = new Date(year, month - 1, day, hour, minute, second, 0);
    return Number.isNaN(date.getTime()) ? null : date;
  }

  function hasOpenQuattResumeSchedule(rawValue = getEntityValue("openquattResumeAt")) {
    return Boolean(parseDateTimeValue(rawValue));
  }

  function formatOpenQuattResumeDateTime(rawValue, short = false) {
    const date = parseDateTimeValue(rawValue);
    if (!date) {
      return "";
    }
    return new Intl.DateTimeFormat("nl-NL", short
      ? { weekday: "short", day: "numeric", month: "short", hour: "2-digit", minute: "2-digit" }
      : { weekday: "long", day: "numeric", month: "long", hour: "2-digit", minute: "2-digit" }
    ).format(date);
  }

  function formatDateTimeForInput(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const hour = String(date.getHours()).padStart(2, "0");
    const minute = String(date.getMinutes()).padStart(2, "0");
    return `${year}-${month}-${day}T${hour}:${minute}`;
  }

  function roundDateToNextQuarter(date) {
    const rounded = new Date(date.getTime());
    rounded.setSeconds(0, 0);
    const minutes = rounded.getMinutes();
    const remainder = minutes % 15;
    if (remainder !== 0) {
      rounded.setMinutes(minutes + (15 - remainder));
    }
    return rounded;
  }

  function getOpenQuattPausePresetValue(preset) {
    const now = new Date();
    if (preset === "2h" || preset === "8h") {
      const hours = preset === "2h" ? 2 : 8;
      const target = roundDateToNextQuarter(new Date(now.getTime() + (hours * 3600 * 1000)));
      return formatDateTimeForInput(target);
    }
    if (preset === "tomorrow-morning") {
      const target = new Date(now);
      target.setDate(target.getDate() + 1);
      target.setHours(7, 0, 0, 0);
      return formatDateTimeForInput(target);
    }
    return "";
  }

  function getOpenQuattPauseDraftValue() {
    const draftValue = toDateTimeInputValue(state.pauseResumeDraft);
    if (draftValue) {
      return draftValue;
    }
    const scheduledValue = toDateTimeInputValue(getEntityValue("openquattResumeAt"));
    if (scheduledValue) {
      return scheduledValue;
    }

    // Offer a nearby suggestion without committing anything to firmware yet.
    return getOpenQuattPausePresetValue("2h");
  }

  function getSettingsRefreshKeys() {
    return [...new Set(["setupComplete", ...SETTINGS_KEYS])];
  }

  function isSystemSettingsGroupActive() {
    return state.appView === "settings" && state.settingsGroup === "system";
  }

  function isIntegrationsSettingsGroupActive() {
    return state.appView === "settings" && state.settingsGroup === "integrations";
  }

  function getDevInitialLoadDelayMs() {
    const raw = typeof window !== "undefined" ? Number(window.__OQ_DEV_LOAD_DELAY_MS || 0) : 0;
    return Number.isFinite(raw) && raw > 0 ? raw : 0;
  }

  const INITIAL_OVERVIEW_READY_KEYS = [
    "strategy",
    "controlModeLabel",
    "openquattEnabled",
    "installationTopology",
    "hpGeneration",
    "totalPower",
    "flowSelected",
    "totalCop",
    "manualCoolingEnable",
    "silentModeOverride",
    "totalHeat",
    "totalCoolingPower",
  ];
  const INITIAL_OVERVIEW_TEXT_KEYS = ["strategy", "controlModeLabel", "hpGeneration"];
  const INITIAL_OVERVIEW_NUMERIC_KEYS = ["totalPower", "flowSelected"];
  const INITIAL_OVERVIEW_THERMAL_KEYS = ["totalHeat", "totalCoolingPower"];
  const INITIAL_OVERVIEW_READY_TIMEOUT_MS = 2000;
  const INITIAL_OVERVIEW_READY_POLL_MS = 250;
  const INITIAL_SETTINGS_READY_KEY_MAP = {
    installation: [
      "hpGeneration",
      "boilerCvAssistEnabled",
      "boilerRatedHeatPower",
      "flowControlMode",
      "flowSetpoint",
      "manualIpwm",
      "silentStartTime",
      "silentEndTime",
      "maxWater",
      "minRuntime",
    ],
    service: [
      "compressorStarts2hWarningLimit",
      "compressorStarts72hWarningLimit",
      "compressorCyclingWarning2h",
      "compressorCyclingWarning72h",
      "alternatingCompressorStartsWarning",
      "commissioningStatus",
      "cm100Active",
    ],
    heating: ["strategy"],
    cooling: ["manualCoolingEnable", "coolingWithoutDewPointMode"],
    integrations: ["otEnabled", "cicPollingEnabled", "flowSource"],
    system: ["setupComplete", "projectVersionText", "releaseChannelText", "firmwareUpdateChannel"],
  };
  const INITIAL_SETTINGS_READY_TIMEOUT_MS = 5000;
  const INITIAL_SETTINGS_READY_POLL_MS = 250;
  const INITIAL_CORE_UI_KEYS = [
    "installationTopology",
    ...TOPOLOGY_HINT_KEYS,
    "hpGeneration",
    "openquattEnabled",
    "flowControlMode",
    "silentStartTime",
    "silentEndTime",
    "maxWater",
    "minRuntime",
  ];
  const SETTINGS_GROUP_KEY_MAP = {
    installation: [
      "setupComplete",
      "installationTopology",
      "hpGeneration",
      "boilerCvAssistEnabled",
      "boilerRatedHeatPower",
      ...FLOW_SETTING_KEYS,
      ...FLOW_TUNING_KEYS,
      ...SILENT_SETTING_KEYS,
      ...COMPRESSOR_SETTING_KEYS,
      "maxWater",
    ],
    service: [
      ...INSTALLATION_MONITORING_STATE_KEYS,
      ...COMMISSIONING_STATE_KEYS,
      "boilerCvAssistEnabled",
      "boilerRatedHeatPower",
      "flowSelected",
      "flowKp",
      "flowKi",
    ],
    heating: [
      "strategy",
      ...POWER_HOUSE_KEYS,
      ...CURVE_SETTING_KEYS,
      "dayMax",
      "silentMax",
    ],
    cooling: [
      "manualCoolingEnable",
      "coolingWithoutDewPointMode",
      "coolingDewPointSelected",
      "coolingMinimumSafeSupplyTemp",
      "coolingSupplyTarget",
      "coolingSupplyError",
      ...COOLING_SETTING_KEYS,
    ],
    integrations: [
      ...OPENTHERM_SETTING_KEYS,
      ...OPENTHERM_DIAGNOSTIC_KEYS,
      ...CIC_POLLING_SETTING_KEYS,
      ...CIC_POLLING_DIAGNOSTIC_KEYS,
      ...SENSOR_SELECTION_KEYS,
      ...SENSOR_SELECTION_STATE_KEYS,
      ...CIC_COMPATIBILITY_KEYS,
    ],
    system: [
      "setupComplete",
      ...FIRMWARE_ENTITY_KEYS,
      "firmwareUpdateChannel",
      "projectVersionText",
      "releaseChannelText",
      "trendHistoryEnabled",
      "trendHistoryFlashEnabled",
      "webServerLogHistoryEnabled",
      "debugLevel",
      "trendHistoryFlashAvailable",
      "trendHistoryFlashOldest",
      "trendHistoryFlashNewest",
      "trendHistoryFlashLastFlush",
      "trendHistoryFlashSize",
      "trendHistoryFlashWrites",
    ],
  };

  function getSettingsGroupHydrationKeys(groupId = state.settingsGroup) {
    const normalized = SETTINGS_GROUP_IDS.has(groupId) ? groupId : SETTINGS_GROUPS[0].id;
    return [...new Set([
      "setupComplete",
      "strategy",
      ...HEADER_ENTITY_KEYS,
      ...(SETTINGS_GROUP_KEY_MAP[normalized] || []),
    ])];
  }

  function getInitialSettingsReadyKeys() {
    const normalized = SETTINGS_GROUP_IDS.has(state.settingsGroup) ? state.settingsGroup : SETTINGS_GROUPS[0].id;
    return [...new Set(INITIAL_SETTINGS_READY_KEY_MAP[normalized] || INITIAL_SETTINGS_READY_KEY_MAP.installation)];
  }

  function queuePendingEntitySyncOptions(options = {}) {
    const current = state.pendingEntitySyncOptions || {};
    const merged = {
      ...current,
      ...options,
    };
    if (current.forceBulk || options.forceBulk) {
      merged.forceBulk = true;
      merged.forceFast = false;
    } else if (current.forceFast || options.forceFast) {
      merged.forceFast = true;
    }
    state.pendingEntitySyncOptions = merged;
  }

  function hasUsableEntityValue(key) {
    const value = String(getEntityValue(key) ?? "").trim().toLowerCase();
    return value !== "" && value !== "unknown" && value !== "unavailable" && value !== "nan";
  }

  function hasUsableNumericEntityValue(key) {
    return hasUsableEntityValue(key) && Number.isFinite(parseLooseNumber(getEntityValue(key)));
  }

  function isInitialOverviewView() {
    return state.appView === "overview" || state.appView === "trends" || state.appView === "energy";
  }

  function getOverviewMetadataHydrationKeys() {
    return OVERVIEW_METADATA_KEYS.filter((key) => {
      const entity = state.entities[key];
      if (!entity) {
        return !ENTITY_DEFS[key]?.optional;
      }
      const unit = String(entity.uom ?? entity.unit_of_measurement ?? "").trim();
      return !unit;
    });
  }

  async function hydrateOverviewMetadata() {
    if (state.nativeOpen || !isInitialOverviewView() || state.overviewMetadataHydrated || state.overviewMetadataHydrating) {
      return false;
    }

    const keys = getOverviewMetadataHydrationKeys();
    if (!keys.length) {
      state.overviewMetadataHydrated = true;
      return false;
    }

    state.overviewMetadataHydrating = true;
    try {
      await refreshEntities(keys, "all", { concurrency: ENTITY_REFRESH_CONCURRENCY });
      state.overviewMetadataHydrated = true;
      return true;
    } catch (_error) {
      return false;
    } finally {
      state.overviewMetadataHydrating = false;
      if (state.mounted && !state.nativeOpen) {
        render();
      }
    }
  }

  function isInitialOverviewReady() {
    if (!isInitialOverviewView()) {
      return true;
    }

    return INITIAL_OVERVIEW_TEXT_KEYS.every(hasUsableEntityValue)
      && INITIAL_OVERVIEW_NUMERIC_KEYS.every(hasUsableNumericEntityValue)
      && INITIAL_OVERVIEW_THERMAL_KEYS.some(hasUsableNumericEntityValue);
  }

  function isInitialSettingsView() {
    return state.appView === "settings";
  }

  function isInitialSettingsReady() {
    if (!isInitialSettingsView()) {
      return true;
    }

    return getInitialSettingsReadyKeys().every((key) => {
      if (ENTITY_DEFS[key]?.optional && !state.entities[key]) {
        return true;
      }
      return hasUsableEntityValue(key);
    });
  }

  async function waitForInitialOverviewReady() {
    if (isInitialOverviewReady()) {
      return;
    }

    const deadline = Date.now() + INITIAL_OVERVIEW_READY_TIMEOUT_MS;
    while (!state.nativeOpen && !isInitialOverviewReady() && Date.now() < deadline) {
      await new Promise((resolve) => window.setTimeout(resolve, INITIAL_OVERVIEW_READY_POLL_MS));
      try {
        await refreshEntities(INITIAL_OVERVIEW_READY_KEYS, "state");
      } catch (_error) {
        return;
      }
    }
  }

  async function waitForInitialSettingsReady() {
    if (isInitialSettingsReady()) {
      return;
    }

    const deadline = Date.now() + INITIAL_SETTINGS_READY_TIMEOUT_MS;
    while (!state.nativeOpen && !isInitialSettingsReady() && Date.now() < deadline) {
      await new Promise((resolve) => window.setTimeout(resolve, INITIAL_SETTINGS_READY_POLL_MS));
      try {
        await refreshEntities(getInitialSettingsReadyKeys(), "all");
      } catch (_error) {
        return;
      }
    }
  }

  function formatValue(key, value = getEntityValue(key)) {
    if (value === "" || value === null || Number.isNaN(Number(value))) {
      return "—";
    }
    const meta = getNumberMeta(key);
    const decimals = meta.step < 1 ? 1 : 0;
    return `${Number(value).toFixed(decimals)}${meta.uom ? ` ${meta.uom}` : ""}`;
  }

  function normalizeNumber(key, rawValue) {
    const meta = getNumberMeta(key);
    const numeric = parseLooseNumber(rawValue);
    if (Number.isNaN(numeric)) {
      const current = parseLooseNumber(state.entities[key]?.value ?? state.entities[key]?.state ?? "");
      return Number.isNaN(current) ? meta.min : current;
    }
    const clamped = Math.min(meta.max, Math.max(meta.min, numeric));
    const steps = Math.round((clamped - meta.min) / meta.step);
    const snapped = meta.min + steps * meta.step;
    return Number(snapped.toFixed(meta.step < 1 ? 1 : 0));
  }

  function getCurveFallbackSuggestion() {
    const middleLeft = CURVE_POINTS[Math.floor((CURVE_POINTS.length / 2) - 1)];
    const middleRight = CURVE_POINTS[Math.floor(CURVE_POINTS.length / 2)];
    if (!middleLeft || !middleRight || !hasEntity("curveFallbackSupply")) {
      return null;
    }

    const leftValue = normalizeNumber(middleLeft.key, getEntityValue(middleLeft.key));
    const rightValue = normalizeNumber(middleRight.key, getEntityValue(middleRight.key));
    const midpointValue = (leftValue + rightValue) / 2;
    const suggested = normalizeNumber("curveFallbackSupply", midpointValue);

    return {
      value: suggested,
      label: formatValue("curveFallbackSupply", suggested),
      basis: `Afgeleid uit het midden van je stooklijn (${middleLeft.label} en ${middleRight.label}).`,
      isCurrent: normalizeNumber("curveFallbackSupply", getEntityValue("curveFallbackSupply")) === suggested,
    };
  }

  const ENTITY_REQUEST_TIMEOUT_MS = 8000;
  const RECONNECT_ENTITY_REQUEST_TIMEOUT_MS = 3000;

  function getEntityRequestTimeoutMs() {
    return state.deviceReconnectMode || state.busyAction === "restartAction" || state.updateInstallBusy || state.updateInstallPhaseHint
      ? RECONNECT_ENTITY_REQUEST_TIMEOUT_MS
      : ENTITY_REQUEST_TIMEOUT_MS;
  }

  async function fetchEntityPayload(key, detail = "state") {
    const entity = ENTITY_DEFS[key];
    const url = `${buildEntityPath(entity.domain, entity.name)}${detail === "all" ? "?detail=all" : ""}`;
    const timeoutMs = getEntityRequestTimeoutMs();

    if (typeof AbortController === "function") {
      const controller = new AbortController();
      const timeoutId = window.setTimeout(() => controller.abort(), timeoutMs);
      try {
        const response = await fetch(url, { signal: controller.signal });
        if (!response.ok) {
          throw new Error(`${entity.name} HTTP ${response.status}`);
        }
        return response.json();
      } catch (error) {
        if (controller.signal.aborted) {
          throw new Error(`${entity.name} request timed out after ${timeoutMs}ms`);
        }
        throw error;
      } finally {
        window.clearTimeout(timeoutId);
      }
    }

    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`${entity.name} HTTP ${response.status}`);
    }
    return response.json();
  }

  function isLikelyDeviceConnectionError(message) {
    const normalized = String(message || "").toLowerCase();
    return normalized.includes("failed to fetch")
      || normalized.includes("load failed")
      || normalized.includes("networkerror")
      || normalized.includes("network request failed")
      || normalized.includes("connection refused")
      || normalized.includes("connection reset")
      || normalized.includes("err_connection")
      || normalized.includes("timeout");
  }

  function noteEntityRefreshSuccess() {
    const now = Date.now();
    state.lastEntitySyncAt = now;
    state.lastEntitySyncSuccessAt = now;
    state.entitySyncFailureCount = 0;
    const wasReconnectActive = Boolean(state.deviceReconnectMode);
    const reconnectRecovered = wasReconnectActive && typeof markDeviceReconnectRecovered === "function"
      ? markDeviceReconnectRecovered()
      : false;
    if (reconnectRecovered) {
      state.lastFastEntitySyncAt = 0;
      state.lastBulkEntitySyncAt = 0;
      state.lastStaticEntitySyncAt = 0;
      state.trendHistoryRaw = "";
      state.trendHistoryError = "";
      state.trendHistorySignature = "";
      state.trendHistoryNowMs = Number.NaN;
      state.trendHistoryLastFetchAt = 0;
      if (typeof resetWebServerLogRecoveryState === "function") {
        resetWebServerLogRecoveryState();
      } else {
        closeWebServerLogStream();
        clearWebServerLogOutput();
        state.webServerLogEnabled = null;
        state.webServerLogConnected = false;
      }
    }
  }

  function noteEntityRefreshFailure(message) {
    if (!isLikelyDeviceConnectionError(message)) {
      state.entitySyncFailureCount = 0;
      clearDeviceReconnect();
      return;
    }
    state.entitySyncFailureCount = Number(state.entitySyncFailureCount || 0) + 1;
    state.deviceReconnectLastError = String(message || "");
    if (
      state.deviceReconnectMode
      || state.busyAction === "restartAction"
      || state.updateInstallBusy
      || state.updateInstallPhaseHint
      || state.entitySyncFailureCount >= 2
    ) {
      beginDeviceReconnect(
        state.updateInstallBusy || state.updateInstallPhaseHint ? "ota" : state.busyAction === "restartAction" ? "restart" : "reconnect",
        message,
      );
    }
  }

  function shouldRefreshConnectivityProbe(now = Date.now(), options = {}) {
    if (options.forceProbe === true) {
      return true;
    }
    if (
      state.deviceReconnectMode
      || state.busyAction === "restartAction"
      || state.updateInstallBusy
      || state.updateInstallPhaseHint
      || Number(state.entitySyncFailureCount || 0) > 0
    ) {
      return true;
    }

    const lastSuccessAt = Number(state.lastEntitySyncSuccessAt || state.lastEntitySyncAt || state.lastEntityResponseAt || 0);
    if (!lastSuccessAt) {
      return true;
    }

    const ttlMs = document.hidden ? HIDDEN_POLL_INTERVAL_MS : CONNECTIVITY_PROBE_SUCCESS_TTL_MS;
    return (now - lastSuccessAt) >= ttlMs;
  }

  async function refreshConnectivityProbe() {
    const entity = ENTITY_DEFS.status || ENTITY_DEFS.setupComplete;
    if (!entity) {
      return { ok: true, message: "" };
    }
    const timeoutMs = state.deviceReconnectMode ? RECONNECT_ENTITY_REQUEST_TIMEOUT_MS : CONNECTIVITY_PROBE_TIMEOUT_MS;
    const url = buildEntityPath(entity.domain, entity.name);

    if (typeof AbortController === "function") {
      const controller = new AbortController();
      const timeoutId = window.setTimeout(() => controller.abort(), timeoutMs);
      try {
        const response = await fetch(url, { cache: "no-store", signal: controller.signal });
        state.lastEntityResponseAt = Date.now();
        return {
          ok: response.ok || response.status === 404,
          message: response.ok || response.status === 404 ? "" : `${entity.name} HTTP ${response.status}`,
        };
      } catch (error) {
        return {
          ok: false,
          message: controller.signal.aborted
            ? `${entity.name} request timed out after ${timeoutMs}ms`
            : error.message || String(error),
        };
      } finally {
        window.clearTimeout(timeoutId);
      }
    }

    try {
      const response = await fetch(url, { cache: "no-store" });
      state.lastEntityResponseAt = Date.now();
      return {
        ok: response.ok || response.status === 404,
        message: response.ok || response.status === 404 ? "" : `${entity.name} HTTP ${response.status}`,
      };
    } catch (error) {
      return { ok: false, message: error.message || String(error) };
    }
  }

  async function refreshEntities(keys, detail = "state", options = {}) {
    const requestedConcurrency = Number(options.concurrency);
    const concurrency = Number.isFinite(requestedConcurrency) && requestedConcurrency > 0
      ? Math.floor(requestedConcurrency)
      : ENTITY_REFRESH_CONCURRENCY;
    const results = [];
    for (let index = 0; index < keys.length; index += concurrency) {
      const batch = keys.slice(index, index + concurrency);
      const batchResults = await Promise.allSettled(
        batch.map(async (key) => ({ key, payload: await fetchEntityPayload(key, detail) }))
      );
      results.push(...batchResults);
    }

    if (results.some((result) => result.status === "fulfilled")) {
      state.lastEntityResponseAt = Date.now();
    }

    let firstError = "";
    results.forEach((result, index) => {
      const key = keys[index];
      if (result.status === "fulfilled") {
        if (state.optionalMissingEntities) {
          delete state.optionalMissingEntities[key];
        }
        const { payload } = result.value;
        state.entities[key] = mergeEntityPayload(key, state.entities[key], payload);
      } else {
        const message = result.reason.message || String(result.reason);
        if (ENTITY_DEFS[key]?.optional) {
          if (message.includes("HTTP 404")) {
            state.optionalMissingEntities[key] = true;
          }
        } else if (!firstError) {
          firstError = message;
        }
      }
    });

    applyDerivedState();
    syncInstallationMonitoringDetailsState(getInstallationMonitoringModel());
    if (firstError) {
      noteEntityRefreshFailure(firstError);
      if (state.deviceReconnectMode) {
        state.controlError = "";
      } else {
        state.controlError = `Niet alle helpervelden konden worden ververst. ${firstError}`;
      }
    } else if (!state.busyAction) {
      noteEntityRefreshSuccess();
      state.controlError = "";
    }
  }

  function mergeEntityPayload(key, previous = {}, payload = {}) {
    const next = {
      ...(previous || {}),
      ...(payload || {}),
    };
    const isSelect = ENTITY_DEFS[key]?.domain === "select";
    if (!isSelect) {
      return next;
    }

    if (!String(payload.state ?? "").trim() && String(previous?.state ?? "").trim()) {
      next.state = previous.state;
    }
    if (!String(payload.value ?? "").trim() && String(previous?.value ?? "").trim()) {
      next.value = previous.value;
    }
    if (!Array.isArray(payload.option) && Array.isArray(previous?.option)) {
      next.option = previous.option;
    }
    if (!Array.isArray(payload.options) && Array.isArray(previous?.options)) {
      next.options = previous.options;
    }
    return next;
  }

  function getAuthStatusSignature(status = state.authStatus || {}) {
    return [
      status.enabled ? "on" : "off",
      status.setup_window_active ? "armed" : "locked",
      String(status.username || ""),
      String(status.source || ""),
      String(status.csrf_token || ""),
    ].join(":");
  }

  function syncAuthDraftsFromStatus() {
    const status = state.authStatus || {};
    state.authDraftUsername = status.enabled ? String(status.username || "").trim() : "";
    state.authDraftCurrentPassword = "";
    state.authDraftNewPassword = "";
    state.authDraftConfirmPassword = "";
  }

  function getApiSecurityStatusSignature(status = state.apiSecurityStatus || {}) {
    return [
      status.enabled ? "on" : "off",
      status.transport_active ? "active" : "idle",
      status.pending_restart ? "pending" : "settled",
      String(status.key || ""),
      String(status.source || ""),
      String(status.csrf_token || ""),
    ].join(":");
  }

  function getMqttStatusSignature(status = state.mqttStatus || {}) {
    return [
      status.enabled ? "on" : "off",
      status.connected ? "connected" : "disconnected",
      String(status.broker || ""),
      String(status.port || ""),
      String(status.username || ""),
      String(status.base_topic || ""),
      String(status.publish_profile || ""),
      String(status.essential_interval_s || ""),
      String(status.standard_interval_s || ""),
      String(status.diagnostic_interval_s || ""),
      status.retain_snapshots ? "retain" : "volatile",
      status.password_set ? "set" : "empty",
      String(status.source || ""),
      String(status.csrf_token || ""),
    ].join(":");
  }

  function syncMqttDraftsFromStatus() {
    const status = state.mqttStatus || {};
    state.mqttDraftEnabled = status.enabled === true;
    state.mqttDraftBroker = String(status.broker || "");
    state.mqttDraftPort = String(status.port || 1883);
    state.mqttDraftUsername = String(status.username || "");
    state.mqttDraftPassword = "";
    state.mqttDraftBaseTopic = String(status.base_topic || "openquatt");
    state.mqttDraftPublishProfile = String(status.publish_profile || "standard");
    state.mqttDraftEssentialIntervalS = String(status.essential_interval_s ?? 10);
    state.mqttDraftStandardIntervalS = String(status.standard_interval_s ?? 30);
    state.mqttDraftDiagnosticIntervalS = String(status.diagnostic_interval_s ?? 60);
    state.mqttDraftRetainSnapshots = status.retain_snapshots !== false;
    state.mqttNotice = "";
    state.mqttError = "";
  }

  function shouldRefreshSupplementaryStatus(lastRefreshAt, options = {}, intervalMs = SUPPLEMENTARY_STATUS_REFRESH_INTERVAL_MS) {
    if (options.force === true) {
      return true;
    }
    const lastAt = Number(lastRefreshAt || 0);
    return !lastAt || (Date.now() - lastAt) >= intervalMs;
  }

  function shouldRefreshAuthStatusForCurrentSurface() {
    return state.systemModal === "login" || state.systemModal === "api-security" || isSystemSettingsGroupActive();
  }

  function shouldRefreshApiSecurityStatusForCurrentSurface() {
    return state.systemModal === "api-security" || isSystemSettingsGroupActive();
  }

  function shouldRefreshMqttStatusForCurrentSurface() {
    return state.systemModal === "mqtt" || isIntegrationsSettingsGroupActive();
  }

  function formatMqttPublishProfile(profile) {
    const normalized = String(profile || "").trim().toLowerCase();
    if (normalized === "off") {
      return "Uit";
    }
    if (normalized === "essential") {
      return "Essential";
    }
    if (normalized === "diagnostic") {
      return "Diagnostic";
    }
    return "Standard";
  }

  async function refreshAuthStatus(options = {}) {
    if (!shouldRefreshSupplementaryStatus(state.lastAuthStatusRefreshAt, options)) {
      return false;
    }
    state.lastAuthStatusRefreshAt = Date.now();
    try {
      const response = await fetch("/auth/status", { cache: "no-store" });
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }
      const payload = await response.json();
      const nextStatus = {
        enabled: Boolean(payload.enabled),
        setup_window_active: Boolean(payload.setup_window_active),
        username: String(payload.username || ""),
        source: String(payload.source || ""),
        csrf_token: String(payload.csrf_token || ""),
      };
      const previousSignature = getAuthStatusSignature();
      const nextSignature = getAuthStatusSignature(nextStatus);
      state.authStatus = nextStatus;
      if (previousSignature !== nextSignature) {
        syncAuthDraftsFromStatus();
      }
      if (state.systemModal === "login") {
        state.authError = "";
      }
      return previousSignature !== nextSignature;
    } catch (error) {
      if (state.systemModal === "login") {
        state.authError = `Loginstatus kon niet worden geladen. ${error.message}`;
      }
      return false;
    }
  }

  function shouldPollLoginAuthStatus() {
    if (state.nativeOpen || state.systemModal !== "login") {
      return false;
    }
    const status = state.authStatus || {};
    return status.setup_window_active !== true;
  }

  function stopLoginAuthStatusPolling() {
    if (!state.loginAuthStatusPollTimer) {
      return;
    }
    window.clearTimeout(state.loginAuthStatusPollTimer);
    state.loginAuthStatusPollTimer = null;
  }

  function scheduleLoginAuthStatusPolling(delayMs = LOGIN_MODAL_AUTH_STATUS_REFRESH_INTERVAL_MS) {
    if (state.loginAuthStatusPollTimer || !shouldPollLoginAuthStatus()) {
      return;
    }

    state.loginAuthStatusPollTimer = window.setTimeout(async () => {
      state.loginAuthStatusPollTimer = null;
      if (!shouldPollLoginAuthStatus()) {
        return;
      }
      const previousAuthError = state.authError;
      const changed = await refreshAuthStatus({ force: true });
      if ((changed || state.authError !== previousAuthError) && state.systemModal === "login") {
        render();
      }
      if (shouldPollLoginAuthStatus()) {
        scheduleLoginAuthStatusPolling();
      }
    }, Math.max(0, Number(delayMs) || 0));
  }

  async function refreshLoginModalAuthStatus(options = {}) {
    if (state.systemModal !== "login") {
      return false;
    }
    const previousAuthError = state.authError;
    const changed = await refreshAuthStatus({ force: true });
    if ((changed || state.authError !== previousAuthError) && state.systemModal === "login") {
      render();
    }
    if (options.poll !== false && shouldPollLoginAuthStatus()) {
      scheduleLoginAuthStatusPolling();
    }
    return changed;
  }

  async function refreshApiSecurityStatus(options = {}) {
    if (!shouldRefreshSupplementaryStatus(state.lastApiSecurityStatusRefreshAt, options)) {
      return false;
    }
    state.lastApiSecurityStatusRefreshAt = Date.now();
    try {
      const response = await fetch("/api-security/status", { cache: "no-store" });
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }
      const payload = await response.json();
      const nextStatus = {
        enabled: Boolean(payload.enabled),
        transport_active: Boolean(payload.transport_active),
        pending_restart: Boolean(payload.pending_restart),
        key: String(payload.key || ""),
        source: String(payload.source || ""),
        csrf_token: String(payload.csrf_token || ""),
      };
      const previousSignature = getApiSecurityStatusSignature();
      const nextSignature = getApiSecurityStatusSignature(nextStatus);
      state.apiSecurityStatus = nextStatus;
      state.apiSecurityError = "";
      if (previousSignature !== nextSignature) {
        state.apiSecurityNotice = "";
      }
      return previousSignature !== nextSignature;
    } catch (error) {
      state.apiSecurityError = `API-beveiliging kon niet worden geladen. ${error.message}`;
      return false;
    }
  }

  function getMqttStatusLabel() {
    const status = state.mqttStatus;
    if (!status) {
      return "Laden...";
    }
    if (status.enabled !== true) {
      return "Uit";
    }
    if (status.connected === true) {
      return "Verbonden";
    }
    if (!String(status.broker || "").trim()) {
      return "Geen broker";
    }
    return "Verbinding maken";
  }

  function getMqttStatusDetail() {
    const status = state.mqttStatus;
    if (!status) {
      return "MQTT-configuratie wordt geladen.";
    }

    const broker = String(status.broker || "").trim();
    const baseTopic = String(status.base_topic || "").trim();
    const profileLabel = formatMqttPublishProfile(status.publish_profile);
    if (status.enabled !== true) {
      return "MQTT staat uit en maakt geen verbinding.";
    }
    if (status.connected === true) {
      return broker
        ? `Verbonden met ${broker}${baseTopic ? ` en publiceert ${profileLabel.toLowerCase()} telemetry via ${baseTopic}.` : "."}`
        : "MQTT is verbonden en publiceert met de opgeslagen instellingen.";
    }
    if (broker) {
      return baseTopic
        ? `De broker staat ingesteld op ${broker}; het device probeert ${profileLabel.toLowerCase()} telemetry via ${baseTopic} te publiceren.`
        : `De broker staat ingesteld op ${broker}; het device probeert verbinding te maken.`;
    }
    return "Er is nog geen broker opgeslagen.";
  }

  async function refreshMqttStatus(options = {}) {
    if (!shouldRefreshSupplementaryStatus(state.lastMqttStatusRefreshAt, options)) {
      return false;
    }
    state.lastMqttStatusRefreshAt = Date.now();
    try {
      const response = await fetch("/mqtt/status", { cache: "no-store" });
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }
      const payload = await response.json();
      const nextStatus = {
        enabled: Boolean(payload.enabled),
        connected: Boolean(payload.connected),
        broker: String(payload.broker || ""),
        port: Number(payload.port || 0),
        username: String(payload.username || ""),
        base_topic: String(payload.base_topic || ""),
        publish_profile: String(payload.publish_profile || "standard"),
        essential_interval_s: Number(payload.essential_interval_s ?? 10),
        standard_interval_s: Number(payload.standard_interval_s ?? 30),
        retain_snapshots: payload.retain_snapshots !== false,
        password_set: Boolean(payload.password_set),
        source: String(payload.source || ""),
        csrf_token: String(payload.csrf_token || ""),
      };
      const previousSignature = getMqttStatusSignature();
      const nextSignature = getMqttStatusSignature(nextStatus);
      state.mqttStatus = nextStatus;
      if (previousSignature !== nextSignature) {
        syncMqttDraftsFromStatus();
      }
      if (state.systemModal === "mqtt") {
        state.mqttError = "";
      }
      return previousSignature !== nextSignature;
    } catch (error) {
      if (state.systemModal === "mqtt") {
        state.mqttError = `MQTT-status kon niet worden geladen. ${error.message}`;
      }
      return false;
    }
  }

  async function copyTextToClipboard(text) {
    if (!text) {
      return false;
    }
    if (window.navigator?.clipboard?.writeText && window.isSecureContext) {
      await window.navigator.clipboard.writeText(text);
      return true;
    }

    const textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.setAttribute("readonly", "");
    textarea.style.position = "fixed";
    textarea.style.top = "-1000px";
    textarea.style.opacity = "0";
    document.body.appendChild(textarea);
    textarea.focus();
    textarea.select();

    let success = false;
    try {
      success = document.execCommand("copy");
    } finally {
      document.body.removeChild(textarea);
    }
    return success;
  }

  async function restartForApiSecurityChange() {
    await triggerNamedButton("restartAction", {
      successNotice: "OpenQuatt wordt opnieuw opgestart om de API-beveiliging toe te passen.",
      errorPrefix: "Herstart mislukt",
      reconnectMode: "restart",
    });
  }

  async function commitEnableApiSecurity() {
    const status = state.apiSecurityStatus || {};
    if (!status.csrf_token) {
      state.apiSecurityError = "API-beveiliging laden nog. Probeer het zo opnieuw.";
      render();
      return;
    }

    state.apiSecurityBusy = true;
    state.apiSecurityNotice = "";
    state.apiSecurityError = "";
    render();

    try {
      const params = new URLSearchParams();
      params.set("csrf_token", status.csrf_token);

      const response = await fetch("/api-security/enable", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8" },
        body: params.toString(),
      });
      const payload = await response.json().catch(() => ({ ok: false, error: "invalid_response" }));
      if (!response.ok || !payload.ok) {
        throw new Error(payload.error || `HTTP ${response.status}`);
      }
      await refreshApiSecurityStatus({ force: true });
      state.apiSecurityNotice = "API-beveiliging is opgeslagen. Kopieer de sleutel en kies daarna Opslaan en herstarten.";
      state.apiSecurityError = "";
      render();
    } catch (error) {
      state.apiSecurityError = `Inschakelen is mislukt. ${error.message}`;
      render();
    } finally {
      state.apiSecurityBusy = false;
      render();
    }
  }

  async function commitRotateApiSecurity() {
    const status = state.apiSecurityStatus || {};
    if (!status.csrf_token) {
      state.apiSecurityError = "API-beveiliging laden nog. Probeer het zo opnieuw.";
      render();
      return;
    }

    state.apiSecurityBusy = true;
    state.apiSecurityNotice = "";
    state.apiSecurityError = "";
    render();

    try {
      const params = new URLSearchParams();
      params.set("csrf_token", status.csrf_token);

      const response = await fetch("/api-security/rotate", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8" },
        body: params.toString(),
      });
      const payload = await response.json().catch(() => ({ ok: false, error: "invalid_response" }));
      if (!response.ok || !payload.ok) {
        throw new Error(payload.error || `HTTP ${response.status}`);
      }
      await refreshApiSecurityStatus({ force: true });
      state.apiSecurityNotice = "API-sleutel is opgeslagen. Kopieer de nieuwe sleutel en kies daarna Opslaan en herstarten.";
      state.apiSecurityError = "";
      render();
    } catch (error) {
      state.apiSecurityError = `Roteren is mislukt. ${error.message}`;
      render();
    } finally {
      state.apiSecurityBusy = false;
      render();
    }
  }

  async function commitDisableApiSecurity() {
    const status = state.apiSecurityStatus || {};
    if (!status.csrf_token) {
      state.apiSecurityError = "API-beveiliging laden nog. Probeer het zo opnieuw.";
      render();
      return;
    }
    if (!status.enabled) {
      state.apiSecurityNotice = "API-encryptie staat al uit.";
      state.apiSecurityError = "";
      render();
      return;
    }

    state.apiSecurityBusy = true;
    state.apiSecurityNotice = "";
    state.apiSecurityError = "";
    render();

    try {
      const params = new URLSearchParams();
      params.set("csrf_token", status.csrf_token);

      const response = await fetch("/api-security/disable", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8" },
        body: params.toString(),
      });
      const payload = await response.json().catch(() => ({ ok: false, error: "invalid_response" }));
      if (!response.ok || !payload.ok) {
        throw new Error(payload.error || `HTTP ${response.status}`);
      }
      await refreshApiSecurityStatus({ force: true });
      state.apiSecurityNotice = "API-beveiliging is opgeslagen. Kies daarna Opslaan en herstarten om dit toe te passen.";
      state.apiSecurityError = "";
      render();
    } catch (error) {
      state.apiSecurityError = `Uitzetten is mislukt. ${error.message}`;
      render();
    } finally {
      state.apiSecurityBusy = false;
      render();
    }
  }

  async function commitMqttChanges() {
    const status = state.mqttStatus || {};
    const enabled = Boolean(state.mqttDraftEnabled);
    const broker = String(state.mqttDraftBroker || "").trim();
    const port = Number(String(state.mqttDraftPort || "").trim());
    const username = String(state.mqttDraftUsername || "").trim();
    const password = String(state.mqttDraftPassword || "");
    const baseTopic = String(state.mqttDraftBaseTopic || "").trim();
    const publishProfile = String(state.mqttDraftPublishProfile || "standard").trim().toLowerCase();
    const essentialIntervalS = Number(String(state.mqttDraftEssentialIntervalS || "").trim());
    const standardIntervalS = Number(String(state.mqttDraftStandardIntervalS || "").trim());
    const diagnosticIntervalS = Number(String(state.mqttDraftDiagnosticIntervalS || "").trim());
    const retainSnapshots = Boolean(state.mqttDraftRetainSnapshots);

    if (!baseTopic) {
      state.mqttError = "Vul een base topic in.";
      render();
      return;
    }
    if (!Number.isFinite(port) || port < 1 || port > 65535) {
      state.mqttError = "Vul een geldige poort in.";
      render();
      return;
    }
    if (enabled && !broker) {
      state.mqttError = "Vul een broker in als je MQTT inschakelt.";
      render();
      return;
    }
    if (!status.csrf_token) {
      state.mqttError = "MQTT-configuratie laden nog. Probeer het zo opnieuw.";
      render();
      return;
    }
    if (!["off", "essential", "standard", "diagnostic"].includes(publishProfile)) {
      state.mqttError = "Kies een geldig publish-profiel.";
      render();
      return;
    }
    if (!Number.isFinite(essentialIntervalS) || essentialIntervalS < 1 || essentialIntervalS > 3600) {
      state.mqttError = "Vul een geldig essential interval in.";
      render();
      return;
    }
    if (!Number.isFinite(standardIntervalS) || standardIntervalS < 1 || standardIntervalS > 3600) {
      state.mqttError = "Vul een geldig standard interval in.";
      render();
      return;
    }
    if (!Number.isFinite(diagnosticIntervalS) || diagnosticIntervalS < 1 || diagnosticIntervalS > 3600) {
      state.mqttError = "Vul een geldig diagnostic interval in.";
      render();
      return;
    }

    state.mqttBusy = true;
    state.mqttError = "";
    state.mqttNotice = "";
    render();

    try {
      const params = new URLSearchParams();
      params.set("csrf_token", status.csrf_token);
      params.set("enabled", enabled ? "true" : "false");
      params.set("broker", broker);
      params.set("port", String(port));
      params.set("username", username);
      params.set("password", password);
      params.set("base_topic", baseTopic);
      params.set("publish_profile", publishProfile);
      params.set("essential_interval_s", String(essentialIntervalS));
      params.set("standard_interval_s", String(standardIntervalS));
      params.set("diagnostic_interval_s", String(diagnosticIntervalS));
      params.set("retain_snapshots", retainSnapshots ? "true" : "false");

      const response = await fetch("/mqtt/save", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8" },
        body: params.toString(),
      });
      const payload = await response.json().catch(() => ({ ok: false, error: "invalid_response" }));
      if (!response.ok || !payload.ok) {
        throw new Error(payload.error || `HTTP ${response.status}`);
      }
      await refreshMqttStatus({ force: true });
      state.mqttNotice = enabled ? "MQTT staat nu aan." : "MQTT-configuratie opgeslagen.";
      state.mqttError = "";
      render();
    } catch (error) {
      state.mqttError = `Opslaan is mislukt. ${error.message}`;
      render();
    } finally {
      state.mqttBusy = false;
      render();
    }
  }

  async function copyApiSecurityKey() {
    const key = String(state.apiSecurityStatus?.key || "").trim();
    if (!key) {
      state.apiSecurityError = "Er is nog geen API-sleutel om te kopiëren.";
      render();
      return;
    }

    try {
      const copied = await copyTextToClipboard(key);
      if (!copied) {
        throw new Error("Kopiëren naar het klembord is niet gelukt.");
      }
      state.apiSecurityNotice = "API-sleutel gekopieerd.";
      state.apiSecurityError = "";
      render();
    } catch (error) {
      state.apiSecurityError = `Kopiëren is mislukt. ${error.message}`;
      render();
    }
  }

  function clearSettingsBackupDraft() {
    state.settingsBackupDraft = null;
    state.settingsBackupError = "";
    state.settingsBackupBusy = false;
  }

  function getSettingsBackupSourceMeta() {
    return {
      device: getFirmwareDeviceLabel(),
      installation: getInstallationLabel(),
      topology: typeof getInstallationTopology === "function" ? getInstallationTopology() : "",
      firmware_version: getFirmwareCurrentVersion(),
      firmware_channel: String(getEntityValue("firmwareUpdateChannel") || getEntityValue("releaseChannelText") || "").trim(),
    };
  }

  function getSettingsBackupValue(key) {
    const entity = ENTITY_DEFS[key];
    if (!entity) {
      return undefined;
    }

    if (key === "setupComplete") {
      return getSetupCompleteState();
    }

    const value = getEntityValue(key);
    if (value === "" || value === null || value === undefined) {
      return undefined;
    }

    if (entity.domain === "switch" || entity.domain === "binary_sensor") {
      return isEntityActive(key);
    }
    if (entity.domain === "number") {
      const numeric = parseLooseNumber(value);
      return Number.isNaN(numeric) ? undefined : numeric;
    }
    if (entity.domain === "time") {
      const normalized = normalizeTimeValue(value);
      return normalized || undefined;
    }
    if (entity.domain === "datetime") {
      const normalized = normalizeDateTimeValue(value);
      return normalized || undefined;
    }

    const text = String(value || "").trim();
    return text || undefined;
  }

  function buildSettingsBackupSnapshot() {
    const settings = {};
    SETTINGS_BACKUP_SECTIONS.forEach((section) => {
      const values = {};
      section.keys.forEach((key) => {
        const value = getSettingsBackupValue(key);
        if (value !== undefined) {
          values[key] = value;
        }
      });
      settings[section.id] = values;
    });

    return {
      schema_version: SETTINGS_BACKUP_SCHEMA_VERSION,
      exported_at: new Date().toISOString(),
      source: getSettingsBackupSourceMeta(),
      settings,
    };
  }

  function getSettingsBackupFilename(snapshot = buildSettingsBackupSnapshot()) {
    const stamp = String(snapshot.exported_at || new Date().toISOString())
      .replace(/[:.]/g, "-")
      .replace(/T/, "_")
      .replace(/Z$/, "Z");
    const installation = String(snapshot.source?.installation || "OpenQuatt").replace(/\s+/g, "-").toLowerCase();
    return `${installation}-settings-backup-${stamp}.json`;
  }

  function downloadJsonFile(filename, payload) {
    const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = filename;
    anchor.rel = "noreferrer";
    document.body.appendChild(anchor);
    anchor.click();
    anchor.remove();
    window.setTimeout(() => URL.revokeObjectURL(url), 0);
  }

  function getSettingsBackupFieldLabel(key) {
    const entity = ENTITY_DEFS[key];
    if (entity?.name) {
      return entity.name;
    }
    return key
      .replaceAll(/([a-z])([A-Z])/g, "$1 $2")
      .replaceAll(/_/g, " ")
      .trim();
  }

  function formatSettingsBackupFieldValue(key, value) {
    if (value === undefined || value === null || value === "") {
      return "—";
    }

    const entity = ENTITY_DEFS[key];
    if (!entity) {
      return String(value).trim() || "—";
    }

    if (entity.domain === "number") {
      return formatValue(key, value);
    }
    if (entity.domain === "time") {
      return normalizeTimeValue(value)?.slice(0, 5) || "—";
    }
    if (entity.domain === "datetime") {
      return normalizeDateTimeValue(value) || "—";
    }
    if (entity.domain === "switch" || entity.domain === "binary_sensor") {
      return value ? "Aan" : "Uit";
    }

    const text = String(value).trim();
    return text || "—";
  }

  function getSettingsBackupFieldStatusLabel(status) {
    switch (status) {
      case "same":
        return "Gelijk";
      case "different":
        return "Wijkt af";
      case "missing":
        return "Ontbreekt in backup";
      case "current-missing":
        return "Niet op huidige installatie";
      case "optional-missing":
      case "optional-unavailable":
        return "Ontbreekt";
      default:
        return "Onbekend";
    }
  }

  function getSettingsBackupSelectionSummary(snapshot) {
    const settings = snapshot?.settings && typeof snapshot.settings === "object" ? snapshot.settings : {};
    const source = snapshot?.source && typeof snapshot.source === "object" ? snapshot.source : {};
    const backupKeySet = SETTINGS_BACKUP_KEY_SET;
    let requiredPresent = 0;
    let requiredMissing = 0;
    let optionalPresent = 0;
    let optionalMissing = 0;
    let unknown = 0;
    let requiredTotal = 0;
    let differenceCount = 0;
    let currentPresent = 0;
    const sectionSummaries = SETTINGS_BACKUP_SECTIONS.map((section) => {
      const values = settings[section.id] && typeof settings[section.id] === "object" ? settings[section.id] : {};
      let sectionRequiredPresent = 0;
      let sectionRequiredMissing = 0;
      let sectionOptionalPresent = 0;
      let sectionOptionalMissing = 0;
      let sectionOptionalTotal = 0;
      let sectionDifferenceCount = 0;
      let sectionCurrentPresent = 0;
      const rows = section.keys.map((key) => {
        const entity = ENTITY_DEFS[key];
        const optional = Boolean(entity?.optional);
        const hasBackupValue = Object.prototype.hasOwnProperty.call(values, key);
        const backupValue = hasBackupValue ? values[key] : undefined;
        const currentValue = getSettingsBackupValue(key);
        const currentExists = hasEntity(key);
        const backupDisplay = hasBackupValue ? formatSettingsBackupFieldValue(key, backupValue) : (optional ? "Niet op huidige installatie" : "Ontbreekt in backup");
        const currentDisplay = currentExists
          ? formatSettingsBackupFieldValue(key, currentValue)
          : (optional ? "Niet beschikbaar op huidige installatie" : "Ontbreekt op huidige installatie");
        let status = "same";
        if (!hasBackupValue && optional) {
          status = "optional-missing";
        } else if (!hasBackupValue) {
          status = "missing";
        } else if (!currentExists) {
          status = optional ? "optional-unavailable" : "current-missing";
        } else if (JSON.stringify(currentValue) !== JSON.stringify(backupValue)) {
          status = "different";
        }
        if (currentExists) {
          sectionCurrentPresent += 1;
          currentPresent += 1;
        }
        if (status !== "same") {
          sectionDifferenceCount += 1;
          differenceCount += 1;
        }

        if (optional) {
          sectionOptionalTotal += 1;
          if (hasBackupValue) {
            sectionOptionalPresent += 1;
            optionalPresent += 1;
          } else {
            sectionOptionalMissing += 1;
            optionalMissing += 1;
          }
        } else if (hasBackupValue) {
          sectionRequiredPresent += 1;
          requiredPresent += 1;
        } else {
          sectionRequiredMissing += 1;
          requiredMissing += 1;
        }

        return {
          key,
          label: getSettingsBackupFieldLabel(key),
          optional,
          hasBackupValue,
          backupDisplay,
          currentDisplay,
          status,
          statusLabel: getSettingsBackupFieldStatusLabel(status),
        };
      });
      requiredTotal += section.keys.filter((key) => !ENTITY_DEFS[key]?.optional).length;
      return {
        id: section.id,
        label: section.label,
        present: sectionRequiredPresent,
        currentPresent: sectionCurrentPresent,
        requiredTotal: section.keys.filter((key) => !ENTITY_DEFS[key]?.optional).length,
        optionalTotal: sectionOptionalTotal,
        optionalPresent: sectionOptionalPresent,
        optionalMissing: sectionOptionalMissing,
        requiredMissing: sectionRequiredMissing,
        total: section.keys.length,
        differenceCount: sectionDifferenceCount,
        rows,
      };
    });

    Object.entries(settings).forEach(([sectionId, values]) => {
      if (!SETTINGS_BACKUP_SECTIONS.some((section) => section.id === sectionId)) {
        unknown += 1;
        return;
      }
      if (!values || typeof values !== "object") {
        return;
      }
      Object.keys(values).forEach((key) => {
        if (!backupKeySet.has(key)) {
          unknown += 1;
        }
      });
    });

    return {
      source,
      sectionSummaries,
      requiredPresent,
      requiredMissing,
      requiredAvailable: requiredTotal,
      optionalPresent,
      optionalMissing,
      unknown,
      differenceCount,
      currentPresent,
      requiredTotal,
      total: SETTINGS_BACKUP_KEYS.length,
    };
  }

  function parseSettingsBackupPayload(rawText, fileName = "") {
    const parsed = JSON.parse(rawText);
    if (!parsed || typeof parsed !== "object") {
      throw new Error("Backupbestand bevat geen JSON-object.");
    }

    const schemaVersion = Number(parsed.schema_version ?? parsed.schemaVersion ?? 0);
    if (!Number.isInteger(schemaVersion) || schemaVersion < SETTINGS_BACKUP_SCHEMA_VERSION) {
      throw new Error("Onbekende backupversie.");
    }

    const settings = parsed.settings && typeof parsed.settings === "object" ? parsed.settings : {};
    const snapshot = {
      schema_version: schemaVersion,
      exported_at: String(parsed.exported_at || ""),
      source: parsed.source && typeof parsed.source === "object" ? parsed.source : {},
      settings,
      file_name: fileName || "",
    };
    snapshot.summary = getSettingsBackupSelectionSummary(snapshot);
    return snapshot;
  }

  async function prepareSettingsBackupSnapshot() {
    state.settingsBackupBusy = true;
    state.controlError = "";
    state.controlNotice = "";
    render();

    try {
      await refreshEntities(SETTINGS_BACKUP_KEYS, "all");
      return buildSettingsBackupSnapshot();
    } finally {
      state.settingsBackupBusy = false;
      render();
    }
  }

  async function exportSettingsBackup() {
    if (state.settingsBackupBusy) {
      return;
    }

    try {
      const snapshot = await prepareSettingsBackupSnapshot();
      downloadJsonFile(getSettingsBackupFilename(snapshot), snapshot);
      state.controlNotice = "Settings-backup gedownload.";
      render();
    } catch (error) {
      state.controlError = `Backup exporteren mislukt. ${error.message}`;
      render();
    }
  }

  function openSettingsBackupImportPicker() {
    if (!state.root || state.settingsBackupBusy) {
      return;
    }

    const input = state.root.querySelector('[data-oq-backup-file-input]');
    if (input) {
      input.click();
    }
  }

  async function handleSettingsBackupFileSelection(file) {
    if (!file || state.settingsBackupBusy) {
      return;
    }

    state.settingsBackupBusy = true;
    state.settingsBackupDraft = null;
    state.settingsBackupError = "";
    state.controlError = "";
    state.controlNotice = "";
    render();

    try {
      const rawText = await file.text();
      const snapshot = parseSettingsBackupPayload(rawText, file.name || "");
      state.settingsBackupDraft = snapshot;
      state.systemModal = "settings-backup-restore";
    } catch (error) {
      state.settingsBackupDraft = null;
      state.settingsBackupError = `Backupbestand kon niet worden gelezen. ${error.message}`;
    } finally {
      state.settingsBackupBusy = false;
      render();
    }
  }

  async function setEntityBackupValue(key, value) {
    const entity = ENTITY_DEFS[key];
    if (!entity) {
      throw new Error(`Onbekend veld ${key}.`);
    }

    if (entity.domain === "select") {
      const option = String(value || "").trim();
      const response = await fetch(
        `${buildEntityPath(entity.domain, entity.name, "set")}?option=${encodeURIComponent(option)}`,
        { method: "POST" }
      );
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }
      return option;
    }

    if (entity.domain === "number") {
      const normalized = normalizeNumber(key, value);
      const response = await fetch(
        `${buildEntityPath(entity.domain, entity.name, "set")}?value=${encodeURIComponent(normalized)}`,
        { method: "POST" }
      );
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }
      return normalized;
    }

    if (entity.domain === "time") {
      const normalized = normalizeTimeValue(value);
      const response = await fetch(
        `${buildEntityPath(entity.domain, entity.name, "set")}?value=${encodeURIComponent(normalized)}`,
        { method: "POST" }
      );
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }
      return normalized;
    }

    if (entity.domain === "datetime") {
      const normalized = normalizeDateTimeValue(value);
      const response = await fetch(
        `${buildEntityPath(entity.domain, entity.name, "set")}?value=${encodeURIComponent(normalized)}`,
        { method: "POST" }
      );
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }
      return normalized;
    }

    if (entity.domain === "text") {
      const normalized = String(value || "").trim();
      const response = await fetch(
        `${buildEntityPath(entity.domain, entity.name, "set")}?value=${encodeURIComponent(normalized)}`,
        { method: "POST" }
      );
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }
      return normalized;
    }

    if (entity.domain === "switch" || entity.domain === "binary_sensor") {
      const enabled = Boolean(value);
      const action = enabled ? "turn_on" : "turn_off";
      const response = await fetch(buildEntityPath(entity.domain, entity.name, action), { method: "POST" });
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }
      return enabled;
    }

    throw new Error(`${entity.name} kan niet worden hersteld.`);
  }

  async function restoreSettingsBackup() {
    const draft = state.settingsBackupDraft;
    if (!draft || state.settingsBackupBusy) {
      return;
    }

    state.settingsBackupBusy = true;
    state.settingsBackupError = "";
    state.controlError = "";
    state.controlNotice = "";
    render();

    const applied = [];
    const skipped = [];
    let shouldCompleteSetup = false;

    try {
      await refreshEntities(SETTINGS_BACKUP_KEYS, "all");

      for (const section of SETTINGS_BACKUP_SECTIONS) {
        const sectionValues = draft.settings?.[section.id] && typeof draft.settings[section.id] === "object"
          ? draft.settings[section.id]
          : {};

        for (const key of section.keys) {
          if (!Object.prototype.hasOwnProperty.call(sectionValues, key)) {
            skipped.push(key);
            continue;
          }

          const value = sectionValues[key];
          if (key === "setupComplete") {
            shouldCompleteSetup = value === true;
            continue;
          }

          if (key === "openquattEnabled") {
            continue;
          }

          const entity = ENTITY_DEFS[key];
          if (!entity || !hasEntity(key)) {
            skipped.push(key);
            continue;
          }

          try {
            await setEntityBackupValue(key, value);
            applied.push(key);
          } catch (error) {
            skipped.push(key);
          }
        }
      }

      const openquattEnabledValue = draft.settings?.operation?.openquattEnabled;
      if (Object.prototype.hasOwnProperty.call(draft.settings?.operation || {}, "openquattEnabled") && hasEntity("openquattEnabled")) {
        await setEntityBackupValue("openquattEnabled", openquattEnabledValue);
        applied.push("openquattEnabled");
      }

      if (shouldCompleteSetup && ENTITY_DEFS.apply) {
        const response = await fetch(buildEntityPath("button", "Complete setup", "press"), { method: "POST" });
        if (!response.ok) {
          throw new Error(`Setup bevestigen mislukt (HTTP ${response.status}).`);
        }
        applied.push("setupComplete");
      } else if (Object.prototype.hasOwnProperty.call(draft.settings?.installation || {}, "setupComplete")) {
        skipped.push("setupComplete");
      }

      state.systemModal = "settings-backup-success";
      clearSettingsBackupDraft();
      state.controlNotice = `Backup hersteld (${applied.length} toegepast${skipped.length ? `, ${skipped.length} overgeslagen` : ""}).`;
      await syncEntities();
    } catch (error) {
      state.settingsBackupError = `Backup herstellen mislukt. ${error.message}`;
    } finally {
      state.settingsBackupBusy = false;
      render();
    }
  }

  function isDevPreviewEnvironmentForFetches() {
    return Boolean(
      (typeof window !== "undefined" && window.__OQ_DEV_CONTROLS__)
      || (typeof window !== "undefined" && window.__OQ_DEV_META)
    );
  }

  async function refreshTrendHistoryData(options = {}) {
    if (!isTrendHistoryEnabled()) {
      const changed = Boolean(state.trendHistoryRaw || state.trendHistoryError);
      state.trendHistoryRaw = "";
      state.trendHistoryError = "";
      state.trendHistorySignature = "";
      state.trendHistoryNowMs = Number.NaN;
      state.trendHistoryLastFetchAt = 0;
      return changed;
    }
    if (isDevPreviewEnvironmentForFetches()) {
      return false;
    }

    const force = options.force === true;
    const now = Date.now();
    if (!force && state.trendHistoryFetchPromise) {
      return state.trendHistoryFetchPromise;
    }
    if (!force && (state.trendHistoryRaw || state.trendHistoryError) &&
        (now - Number(state.trendHistoryLastFetchAt || 0)) < TREND_HISTORY_REFRESH_INTERVAL_MS) {
      return false;
    }

    state.trendHistoryFetchPromise = (async () => {
      const windowHours = normalizeTrendWindowHours(state.trendWindowHours || DEFAULT_TREND_WINDOW_HOURS);
      if (windowHours !== state.trendWindowHours) {
        setTrendWindowHours(windowHours);
      }
      const response = await fetch(`${getBasePath()}/trends/history?hours=${encodeURIComponent(String(windowHours))}`, { cache: "no-store" });
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }
      const raw = await response.text();
      const lines = raw.split(/\r?\n/);
      let nowMs = Number.NaN;
      let body = raw;
      if (lines.length && lines[0].startsWith("@now|")) {
        nowMs = Number(lines[0].slice(5));
        body = lines.slice(1).join("\n");
      }
      const signature = `${windowHours}|${body.length}|${body.slice(0, 120)}|${body.slice(-120)}`;
      const currentNowValid = Number.isFinite(state.trendHistoryNowMs);
      const nextNowValid = Number.isFinite(nowMs);
      const nowChanged = nextNowValid
        ? !currentNowValid || state.trendHistoryNowMs !== nowMs
        : currentNowValid;
      const changed = body !== state.trendHistoryRaw || state.trendHistoryError !== "" ||
        state.trendHistorySignature !== signature || nowChanged;
      state.trendHistoryRaw = body;
      state.trendHistoryError = "";
      state.trendHistorySignature = signature;
      state.trendHistoryNowMs = Number.isFinite(nowMs) ? nowMs : Number.NaN;
      state.trendHistoryLastFetchAt = Date.now();
      return changed;
    })();

    try {
      return await state.trendHistoryFetchPromise;
    } catch (error) {
      const nextError = `Trendhistorie kon niet worden geladen. ${error.message}`;
      const changed = state.trendHistoryError !== nextError;
      state.trendHistoryError = nextError;
      state.trendHistoryRaw = "";
      state.trendHistorySignature = "";
      state.trendHistoryNowMs = Number.NaN;
      state.trendHistoryLastFetchAt = Date.now();
      return changed;
    } finally {
      state.trendHistoryFetchPromise = null;
    }
  }

  function applyDerivedState() {
    state.complete = getSetupCompleteState();
    state.stage = state.complete === true ? "Gereed" : state.complete === false ? "Quick Start" : "Laden...";
    state.summary = renderAppSummary();
    if (state.appView === "trends" && !isTrendHistoryEnabled()) {
      setAppView(getDefaultAppView(), { syncMode: "replace", forceSync: true });
    }
    if (!state.appView) {
      setAppView(getUrlAppView() || getDefaultAppView(), { syncMode: "replace", forceSync: true });
    }
  }

  function getInitialPrimeKeys() {
    const base = ["setupComplete", "strategy", ...HEADER_ENTITY_KEYS, ...INITIAL_CORE_UI_KEYS];
    if (state.appView === "settings") {
      return [...new Set([...base, ...getSettingsGroupHydrationKeys()])];
    }
    if (state.appView === "overview" || state.appView === "trends" || state.appView === "energy") {
      return [...new Set([...base, ...FAST_OVERVIEW_KEYS])];
    }
    return [...new Set(base)];
  }

  function getDeferredPrimeKeys(initialKeys = []) {
    const initial = new Set(initialKeys);
    const fullKeys = state.appView === "settings"
      ? [...new Set(["setupComplete", "strategy", ...HEADER_ENTITY_KEYS, ...getSettingsRefreshKeys()])]
      : state.appView === "overview" || state.appView === "trends" || state.appView === "energy"
        ? [...new Set(["setupComplete", "strategy", ...HEADER_ENTITY_KEYS, ...OVERVIEW_KEYS, ...FIRMWARE_ENTITY_KEYS])]
        : [...new Set(["setupComplete", "strategy", ...HEADER_ENTITY_KEYS])];
    return fullKeys.filter((key) => !initial.has(key));
  }

  async function primeDeferredEntities(keys, detail = "state") {
    if (!keys.length || state.nativeOpen) {
      return;
    }

    state.entitySyncInFlight = true;
    try {
      await refreshEntities(keys, detail, {
        concurrency: detail === "all" ? ENTITY_REFRESH_CONCURRENCY : FAST_VIEW_ENTITY_REFRESH_CONCURRENCY,
      });
    } finally {
      state.entitySyncInFlight = false;
      const pendingOptions = state.pendingEntitySyncOptions;
      state.pendingEntitySyncOptions = null;
      if (pendingOptions && !state.nativeOpen) {
        window.setTimeout(() => {
          void syncEntities(pendingOptions);
        }, 0);
      }
    }

    if (state.mounted && !state.nativeOpen) {
      render();
    }
  }

  function scheduleOverviewPrefetch() {
    if (state.nativeOpen || state.appView !== "settings") {
      return;
    }

    const run = () => {
      if (state.nativeOpen || state.appView !== "settings") {
        return;
      }
      if (state.loadingEntities || state.focusedField || state.draggingCurveKey || state.busyAction || state.settingsInteractionLock) {
        window.setTimeout(scheduleOverviewPrefetch, 250);
        return;
      }
      void syncEntities({ prefetchView: "overview", forceFast: true });
    };

    if (typeof window.requestIdleCallback === "function") {
      window.requestIdleCallback(run, { timeout: 2000 });
      return;
    }

    window.setTimeout(run, 0);
  }

  function isBulkEntitySyncDue(now = Date.now(), options = {}) {
    if (options.forceBulk === true) {
      return true;
    }
    return (now - Number(state.lastBulkEntitySyncAt || 0)) >= BULK_POLL_INTERVAL_MS;
  }

  async function primeSupplementaryData() {
    if (state.nativeOpen) {
      return;
    }

    try {
      if (isInitialOverviewView()) {
        await hydrateOverviewMetadata();
      }
      if (state.appView === "overview" || state.appView === "trends") {
        await refreshTrendHistoryData({ force: true });
      }
      await refreshAuthStatus({ force: true });
      if (isSystemSettingsGroupActive()) {
        await refreshApiSecurityStatus({ force: true });
      }
      if (isIntegrationsSettingsGroupActive()) {
        await refreshMqttStatus({ force: true });
      }
    } finally {
      if (state.mounted && !state.nativeOpen) {
        render();
      }
      scheduleOverviewPrefetch();
    }
  }

  async function primeEntities() {
    if (state.nativeOpen) {
      return;
    }
    state.loadingEntities = true;
    render();
    const loadDelayMs = getDevInitialLoadDelayMs();
    if (loadDelayMs > 0) {
      await new Promise((resolve) => window.setTimeout(resolve, loadDelayMs));
    }
    const initialKeys = getInitialPrimeKeys();
    const deferredKeys = getDeferredPrimeKeys(initialKeys);
    const initialDetail = state.appView === "settings" ? "all" : "state";
    try {
      await refreshEntities(initialKeys, initialDetail, {
        concurrency: initialDetail === "all" ? ENTITY_REFRESH_CONCURRENCY : FAST_VIEW_ENTITY_REFRESH_CONCURRENCY,
      });
      if (state.appView === "settings") {
        await waitForInitialSettingsReady();
      } else {
        await waitForInitialOverviewReady();
      }
    } finally {
      state.loadingEntities = false;
      render();
    }
    const deferredDetail = state.appView === "settings" ? "all" : "state";
    window.setTimeout(() => {
      void primeDeferredEntities(deferredKeys, deferredDetail);
      void primeSupplementaryData();
    }, 0);
  }

  async function syncEntities(options = {}) {
    if (state.nativeOpen || state.loadingEntities || state.focusedField || state.draggingCurveKey || state.busyAction || state.settingsInteractionLock) {
      return;
    }
    if (state.entitySyncInFlight) {
      queuePendingEntitySyncOptions(options);
      return;
    }

    const now = Date.now();
    if (document.hidden && (now - Number(state.lastEntitySyncAttemptAt || 0)) < HIDDEN_POLL_INTERVAL_MS) {
      return;
    }

    const appView = state.appView;
    const isPrefetchOverview = options.prefetchView === "overview" && !options.forceBulk && appView === "settings";
    const syncView = isPrefetchOverview ? "overview" : appView;
    const isOverviewLike = syncView === "overview" || syncView === "trends" || syncView === "energy";
    const forceFast = options.forceFast === true && !options.forceBulk;
    const isBulkDue = !forceFast && !isPrefetchOverview && isBulkEntitySyncDue(now, options);
    const isStaticDue = (now - Number(state.lastStaticEntitySyncAt || 0)) >= STATIC_POLL_INTERVAL_MS;
    const staticKeys = isStaticDue || state.updateInstallBusy || state.updateInstallPhaseHint
      ? FIRMWARE_ENTITY_KEYS
      : [];
    const keys = isPrefetchOverview
      ? [
          ...FAST_OVERVIEW_KEYS,
          ...HEADER_ENTITY_KEYS,
          "setupComplete",
          ...staticKeys,
        ]
      : isOverviewLike
      ? [
          ...(forceFast ? FAST_OVERVIEW_KEYS : isBulkDue ? OVERVIEW_KEYS : FAST_OVERVIEW_KEYS),
          ...HEADER_ENTITY_KEYS,
          "setupComplete",
          ...staticKeys,
        ]
      : appView === "settings"
        ? [...new Set([...getSettingsGroupHydrationKeys(), ...staticKeys])]
        : isBulkDue
          ? [
              "setupComplete",
              ...staticKeys,
              ...HEADER_ENTITY_KEYS,
              "strategy",
              ...LIMIT_KEYS,
              ...FLOW_SETTING_KEYS,
              ...(isCurveMode() ? CURVE_POINTS.map((point) => point.key) : POWER_HOUSE_KEYS),
            ]
          : ["setupComplete", ...HEADER_ENTITY_KEYS, "strategy", ...staticKeys];

    state.entitySyncInFlight = true;
    state.lastEntitySyncAttemptAt = now;
    try {
      const reconnectModeBefore = state.deviceReconnectMode;
      const probe = shouldRefreshConnectivityProbe(now, options)
        ? await refreshConnectivityProbe()
        : { ok: true, message: "" };
      if (!probe.ok) {
        noteEntityRefreshFailure(probe.message);
        if (!isPrefetchOverview) {
          render();
        }
        return;
      }
      await refreshEntities([...new Set(keys)], isPrefetchOverview ? "state" : appView === "settings" ? "all" : "state", {
        concurrency: forceFast && isOverviewLike ? FAST_VIEW_ENTITY_REFRESH_CONCURRENCY : ENTITY_REFRESH_CONCURRENCY,
      });
      state.lastFastEntitySyncAt = Date.now();
      if (isBulkDue) {
        state.lastBulkEntitySyncAt = state.lastFastEntitySyncAt;
      }
      if (staticKeys.length) {
        state.lastStaticEntitySyncAt = state.lastFastEntitySyncAt;
      }
      if (isPrefetchOverview) {
        return;
      }
      if (isOverviewLike && !state.overviewMetadataHydrated && !state.overviewMetadataHydrating) {
        void hydrateOverviewMetadata();
      }
      const reconnectChanged = reconnectModeBefore !== state.deviceReconnectMode;
      const shouldDeferSupplementary = forceFast && isOverviewLike;
      const trendChanged = shouldDeferSupplementary
        ? false
        : isOverviewLike
          ? await refreshTrendHistoryData()
          : false;
      const authChanged = shouldDeferSupplementary || !shouldRefreshAuthStatusForCurrentSurface() ? false : await refreshAuthStatus();
      const apiSecurityChanged = shouldDeferSupplementary || !shouldRefreshApiSecurityStatusForCurrentSurface() ? false : await refreshApiSecurityStatus();
      const mqttChanged = shouldDeferSupplementary || !shouldRefreshMqttStatusForCurrentSurface() ? false : await refreshMqttStatus();
      const nextHeaderSignature = getHeaderRenderSignature();
      if (reconnectChanged) {
        render();
        return;
      }
      if (trendChanged && state.appView === "trends" && !state.root?.querySelector(".oq-overview-trends")) {
        render();
        return;
      }
      if (authChanged && (state.systemModal === "login" || isSystemSettingsGroupActive())) {
        render();
        return;
      }
      if (apiSecurityChanged && state.appView === "settings") {
        render();
        return;
      }
      if (mqttChanged && state.appView === "settings") {
        render();
        return;
      }
      const hasOpenOverlay = Boolean(state.updateModalOpen || state.systemModal || state.interfacePanelOpen);
      if (nextHeaderSignature !== state.headerRenderSignature) {
        if (hasOpenOverlay && patchHeaderDom()) {
          state.headerRenderSignature = nextHeaderSignature;
        } else {
          render();
          return;
        }
      } else {
        patchHeaderDom();
      }
      if (state.appView === "settings" && String(state.systemModal || "").startsWith("service-task-")) {
        const nextSettingsSignature = getSettingsRenderSignature();
        if (nextSettingsSignature !== state.settingsRenderSignature) {
          render();
        }
        return;
      }
      if (hasOpenOverlay) {
        return;
      }
      if (state.appView === "settings") {
        const nextSettingsSignature = getSettingsRenderSignature();
        if (nextSettingsSignature !== state.settingsRenderSignature) {
          render();
          return;
        }
        if (!patchSettingsDom()) {
          render();
        }
        return;
      }
      if (state.appView === "trends") {
        if (!patchTrendsDom()) {
          render();
        }
        return;
      }
      if (state.appView === "energy") {
        if (!patchEnergyDom()) {
          render();
        }
        return;
      }
      if (!patchOverviewDom()) {
        render();
      }
      if (shouldDeferSupplementary && !state.nativeOpen) {
        window.setTimeout(() => {
          void primeSupplementaryData();
        }, 0);
      }
    } catch (error) {
      if (!isPrefetchOverview) {
        state.controlError = `Helperstatus kon niet worden geladen. ${error.message}`;
        render();
      }
    } finally {
      state.entitySyncInFlight = false;
      const pendingOptions = state.pendingEntitySyncOptions;
      state.pendingEntitySyncOptions = null;
      if (pendingOptions && !state.nativeOpen) {
        window.setTimeout(() => {
          void syncEntities(pendingOptions);
        }, 0);
      }
      if (forceFast && isOverviewLike && !isPrefetchOverview && !state.nativeOpen && !pendingOptions && isBulkEntitySyncDue(Date.now())) {
        window.setTimeout(() => {
          void syncEntities({ forceBulk: true });
        }, 0);
      }
    }
  }

  function handleFocusChange() {
    window.setTimeout(() => {
      const active = document.activeElement;
      state.focusedField = active && active.dataset ? active.dataset.oqField || "" : "";
      state.settingsInteractionLock = Boolean(active && active.closest && active.closest(".oq-ph-concept-hotspot"));
    }, 0);
  }

  function handleSettingsInteractionStart(event) {
    if (event.target.closest(".oq-ph-concept-hotspot")) {
      state.settingsInteractionLock = true;
    }
  }

  function handleSettingsInteractionEnd(event) {
    const hotspot = event.target.closest(".oq-ph-concept-hotspot");
    if (!hotspot) {
      return;
    }

    if (event.relatedTarget && hotspot.contains(event.relatedTarget)) {
      return;
    }

    const hoveredHotspot = state.root && state.root.querySelector(".oq-ph-concept-hotspot:hover");
    const focusedHotspot = document.activeElement && document.activeElement.closest
      ? document.activeElement.closest(".oq-ph-concept-hotspot")
      : null;

    state.settingsInteractionLock = Boolean(hoveredHotspot || focusedHotspot);
  }

  function getEntitySignatureFragment(key) {
    const entity = state.entities[key];
    if (!entity) {
      if (state.optionalMissingEntities?.[key]) {
        return `${key}:__optional_missing__`;
      }
      return `${key}:__missing__`;
    }

    const value = entity.state ?? entity.value ?? "";
    const options = Array.isArray(entity.option)
      ? entity.option.join(",")
      : Array.isArray(entity.options)
        ? entity.options.join(",")
        : "";
    const meta = [
      entity.min_value ?? "",
      entity.max_value ?? "",
      entity.step ?? "",
      entity.uom ?? "",
    ].join(",");
    return `${key}:${value}::${options}::${meta}`;
  }

  function getSettingsRenderSignature() {
    return [
      state.appView,
      state.settingsGroup,
      state.busyAction,
      state.loadingEntities ? "loading" : "ready",
      getApiSecurityStatusSignature(),
      getMqttStatusSignature(),
      getEntitySignatureFragment("setupComplete"),
      ...SETTINGS_KEYS.map((key) => getEntitySignatureFragment(key)),
    ].join("|");
  }

  function getRenderSignature(value) {
    try {
      return JSON.stringify(value);
    } catch (error) {
      return String(value ?? "");
    }
  }

  function getOverviewControlsRenderSignature() {
    return [
      state.appView,
      state.busyAction,
      getEntitySignatureFragment("openquattEnabled"),
      getEntitySignatureFragment("openquattResumeAt"),
      getEntitySignatureFragment("manualCoolingEnable"),
      getEntitySignatureFragment("silentModeOverride"),
      getEntitySignatureFragment("controlModeLabel"),
      getEntitySignatureFragment("coolingPermitted"),
      getEntitySignatureFragment("coolingRequestActive"),
      getEntitySignatureFragment("coolingBlockReason"),
      getEntitySignatureFragment("silentActive"),
    ].join("|");
  }

  function handleInput(event) {
    if (event.target.dataset.oqFirmwareConnectionConfirm) {
      state.firmwareConnectionSwitchConfirmed = Boolean(event.target.checked);
      render();
      return;
    }

    const field = event.target.dataset.oqField;
    if (!field) {
      const authField = event.target.dataset.oqAuthField;
      if (!authField) {
        const mqttField = event.target.dataset.oqMqttField;
        if (!mqttField) {
          return;
        }

        state.mqttNotice = "";
        state.mqttError = "";
        if (mqttField === "enabled") {
          state.mqttDraftEnabled = Boolean(event.target.checked);
        } else if (mqttField === "broker") {
          state.mqttDraftBroker = String(event.target.value || "");
        } else if (mqttField === "port") {
          state.mqttDraftPort = String(event.target.value || "");
        } else if (mqttField === "username") {
          state.mqttDraftUsername = String(event.target.value || "");
        } else if (mqttField === "password") {
          state.mqttDraftPassword = String(event.target.value || "");
        } else if (mqttField === "baseTopic") {
          state.mqttDraftBaseTopic = String(event.target.value || "");
        } else if (mqttField === "publishProfile") {
          state.mqttDraftPublishProfile = String(event.target.value || "");
        } else if (mqttField === "essentialIntervalS") {
          state.mqttDraftEssentialIntervalS = String(event.target.value || "");
        } else if (mqttField === "standardIntervalS") {
          state.mqttDraftStandardIntervalS = String(event.target.value || "");
        } else if (mqttField === "diagnosticIntervalS") {
          state.mqttDraftDiagnosticIntervalS = String(event.target.value || "");
        } else if (mqttField === "retainSnapshots") {
          state.mqttDraftRetainSnapshots = Boolean(event.target.checked);
        }
        return;
      }

      state.authNotice = "";
      state.authError = "";
      if (authField === "username") {
        state.authDraftUsername = String(event.target.value || "");
      } else if (authField === "currentPassword") {
        state.authDraftCurrentPassword = String(event.target.value || "");
      } else if (authField === "newPassword") {
        state.authDraftNewPassword = String(event.target.value || "");
      } else if (authField === "confirmPassword") {
        state.authDraftConfirmPassword = String(event.target.value || "");
      }
      return;
    }

    if (event.target.dataset.oqPauseDraft) {
      state.pauseResumeDraft = String(event.target.value || "");
      return;
    }

    if (ENTITY_DEFS[field]?.domain === "text") {
      state.inputDrafts[field] = String(event.target.value || "");
      return;
    }

    if (event.target.type === "range" || event.target.type === "number") {
      if (event.target.type === "number") {
        state.inputDrafts[field] = event.target.value;
      }

      const numeric = parseLooseNumber(event.target.value);
      if (!Number.isNaN(numeric)) {
        const normalized = normalizeNumber(field, event.target.value);
        state.drafts[field] = normalized;
        if (event.target.type === "range") {
          const sliderValue = event.target.closest(".oq-helper-slider-field")?.querySelector(".oq-helper-slider-meta strong");
          if (sliderValue) {
            sliderValue.textContent = formatValue(field, normalized);
          }
        }
      }
    }
  }

  function handleChange(event) {
    if (event.target.dataset.oqDevControl === "boiler" && typeof window.__OQ_SET_MOCK_BOILER__ === "function") {
      window.__OQ_SET_MOCK_BOILER__(event.target.value);
      return;
    }

    if (event.target.dataset.oqBackupFileInput) {
      const file = event.target.files && event.target.files[0] ? event.target.files[0] : null;
      event.target.value = "";
      void handleSettingsBackupFileSelection(file);
      return;
    }

    if (event.target.dataset.oqFirmwareUploadFileInput) {
      const file = event.target.files && event.target.files[0] ? event.target.files[0] : null;
      event.target.value = "";
      if (file) {
        state.updateManualUploadOpen = true;
        state.updateManualUploadFile = file;
        state.updateManualUploadFileName = file.name || "";
        state.updateManualUploadError = "";
      } else {
        resetFirmwareManualUploadSelection();
      }
      render();
      return;
    }

    const field = event.target.dataset.oqField;
    if (!field) {
      return;
    }

    const entity = ENTITY_DEFS[field];
    if (!entity) {
      return;
    }

    if (entity.domain === "select") {
      commitSelect(field, String(event.target.value));
      return;
    }

    if (entity.domain === "number") {
      commitNumber(field, event.target.value);
      return;
    }

    if (entity.domain === "text") {
      commitText(field, event.target.value);
      return;
    }

    if (entity.domain === "time") {
      const normalized = normalizeTimeValue(event.target.value);
      if (!normalized) {
        state.controlError = `${entity.name} verwacht tijd als HH:MM.`;
        render();
        return;
      }
      commitTime(field, normalized);
      return;
    }

    if (entity.domain === "datetime") {
      const normalized = normalizeDateTimeValue(event.target.value);
      if (!normalized) {
        state.controlError = `${entity.name} verwacht datum en tijd.`;
        render();
        return;
      }
      commitDateTime(field, normalized);
      return;
    }

    const mqttField = event.target.dataset.oqMqttField;
    if (!mqttField) {
      return;
    }

    state.mqttNotice = "";
    state.mqttError = "";
    if (mqttField === "enabled") {
      state.mqttDraftEnabled = Boolean(event.target.checked);
    } else if (mqttField === "broker") {
      state.mqttDraftBroker = String(event.target.value || "");
    } else if (mqttField === "port") {
      state.mqttDraftPort = String(event.target.value || "");
    } else if (mqttField === "username") {
      state.mqttDraftUsername = String(event.target.value || "");
    } else if (mqttField === "password") {
      state.mqttDraftPassword = String(event.target.value || "");
    } else if (mqttField === "baseTopic") {
      state.mqttDraftBaseTopic = String(event.target.value || "");
    } else if (mqttField === "publishProfile") {
      state.mqttDraftPublishProfile = String(event.target.value || "");
    } else if (mqttField === "essentialIntervalS") {
      state.mqttDraftEssentialIntervalS = String(event.target.value || "");
    } else if (mqttField === "standardIntervalS") {
      state.mqttDraftStandardIntervalS = String(event.target.value || "");
    } else if (mqttField === "diagnosticIntervalS") {
      state.mqttDraftDiagnosticIntervalS = String(event.target.value || "");
    } else if (mqttField === "retainSnapshots") {
      state.mqttDraftRetainSnapshots = Boolean(event.target.checked);
    }
  }

  function handleClick(event) {
    const dateTimeControl = event.target.closest(".oq-settings-control--time, .oq-settings-control--datetime");
    if (dateTimeControl) {
      const pickerInput = dateTimeControl.querySelector('input[data-oq-field]');
      if (pickerInput && (pickerInput.type === "time" || pickerInput.type === "datetime-local") && typeof pickerInput.showPicker === "function") {
        try {
          pickerInput.showPicker();
        } catch (_error) {
          // Ignore browsers that block this call.
        }
      }
    }

    const infoButton = event.target.closest('[data-oq-action="toggle-settings-info"]');
    const infoWrap = event.target.closest("[data-oq-settings-info]");
    const helperHub = event.target.closest(".oq-helper-hub");
    const modalBackdrop = event.target.closest("[data-oq-modal]");
    if (infoButton) {
      const infoId = infoButton.dataset.infoId || "";
      state.settingsInfoOpen = state.settingsInfoOpen === infoId ? "" : infoId;
      render();
      return;
    }

    const button = event.target.closest("[data-oq-action]");
    const clickedOutsideInterfacePanel = state.interfacePanelOpen && !helperHub;
    if (!button) {
      let shouldRender = false;
      if (state.settingsInfoOpen && !infoWrap) {
        state.settingsInfoOpen = "";
        shouldRender = true;
      }
      if (clickedOutsideInterfacePanel) {
        setInterfacePanelOpen(false);
        shouldRender = true;
      }
      if (modalBackdrop && event.target === modalBackdrop) {
        if (modalBackdrop.dataset.oqModal === "quickstart-forced") {
          return;
        }
        if (state.updateModalOpen) {
          state.updateModalOpen = false;
          shouldRender = true;
        }
        if (state.systemModal) {
          clearSettingsBackupDraft();
          stopLoginAuthStatusPolling();
          state.systemModal = "";
          shouldRender = true;
        }
      }
      if (shouldRender) {
        render();
      }
      return;
    }
    if (clickedOutsideInterfacePanel && button.dataset.oqAction !== "toggle-interface-panel") {
      setInterfacePanelOpen(false);
    }

    const action = button.dataset.oqAction;
    if (action === "set-mock-boiler" && typeof window.__OQ_SET_MOCK_BOILER__ === "function") {
      window.__OQ_SET_MOCK_BOILER__(button.dataset.boilerMode || "off");
      return;
    }

    if (action === "toggle-interface-panel") {
      setInterfacePanelOpen(!state.interfacePanelOpen);
      render();
      return;
    }

    if (action === "toggle-dev-panel") {
      setDevPanelOpen(!state.devPanelOpen);
      render();
      return;
    }

    if (action === "toggle-installation-monitoring-details") {
      event.preventDefault();
      const details = button.closest(".oq-settings-monitoring-details");
      state.installationMonitoringDetailsOpen = !(details && details.hasAttribute("open"));
      render();
      return;
    }

    if (action === "toggle-integration-diagnostics") {
      event.preventDefault();
      const details = button.closest(".oq-settings-integration-diagnostics");
      state.integrationDiagnosticsOpen = !(details && details.hasAttribute("open"));
      render();
      return;
    }

    if (action === "select-view") {
      if ((button.dataset.viewId || "") === "trends" && !isTrendHistoryEnabled()) {
        return;
      }
      const nextView = button.dataset.viewId || "overview";
      setAppView(nextView, { syncMode: "push" });
      render();
      syncEntities(nextView === "settings" ? { forceBulk: true } : { forceFast: true });
      return;
    }

    if (action === "select-trend-window") {
      if (button.disabled) {
        return;
      }
      setTrendWindowHours(Number(button.dataset.trendHours || 24));
      render();
      void refreshTrendHistoryData({ force: true }).then((changed) => {
        if (changed) {
          render();
        }
      });
      return;
    }

    if (action === "select-settings-group") {
      setSettingsGroup(button.dataset.groupId || SETTINGS_GROUPS[0].id);
      render();
      syncEntities({ forceBulk: true });
      return;
    }

    if (action === "open-update-modal") {
      state.updateModalOpen = true;
      render();
      void hydrateFirmwareUpdateModal().then(() => {
        if (state.updateModalOpen && !hasKnownFirmwareTargetVersion() && !state.updateCheckBusy && !state.updateInstallBusy) {
          void triggerFirmwareUpdateCheck();
        }
      });
      return;
    }

    if (action === "open-webserver-log-modal") {
      openWebServerLogsModal();
      return;
    }

    if (action === "open-login-modal") {
      state.systemModal = "login";
      syncAuthDraftsFromStatus();
      state.authNotice = "";
      state.authError = "";
      render();
      void refreshLoginModalAuthStatus({ poll: true });
      return;
    }

    if (action === "open-api-security-modal") {
      state.systemModal = "api-security";
      state.apiSecurityNotice = "";
      state.apiSecurityError = "";
      render();
      void refreshApiSecurityStatus({ force: true });
      return;
    }

    if (action === "open-mqtt-modal") {
      state.systemModal = "mqtt";
      syncMqttDraftsFromStatus();
      render();
      void refreshMqttStatus({ force: true });
      return;
    }

    if (action === "copy-api-security-key") {
      void copyApiSecurityKey();
      return;
    }

    if (action === "enable-api-security") {
      void commitEnableApiSecurity();
      return;
    }

    if (action === "rotate-api-security") {
      void commitRotateApiSecurity();
      return;
    }

    if (action === "disable-api-security") {
      void commitDisableApiSecurity();
      return;
    }

    if (action === "restart-api-security") {
      void restartForApiSecurityChange();
      return;
    }

    if (action === "save-mqtt-config") {
      void commitMqttChanges();
      return;
    }

    if (action === "flush-trend-history") {
      void triggerNamedButton("trendHistoryFlush", {
        successNotice: "Trendhistorie is opgeslagen in flash.",
        errorPrefix: "Trendhistorie kon niet worden opgeslagen",
      });
      return;
    }

    if (action === "open-connectivity-modal") {
      state.systemModal = "connectivity";
      render();
      return;
    }

    if (action === "open-restart-confirm") {
      state.systemModal = "restart-confirm";
      render();
      return;
    }

    if (action === "download-settings-backup") {
      void exportSettingsBackup();
      return;
    }

    if (action === "open-settings-backup-import") {
      state.systemModal = "settings-backup-import";
      render();
      return;
    }

    if (action === "open-silent-settings-modal") {
      state.systemModal = "silent-settings";
      render();
      return;
    }

    if (action === "open-openquatt-pause-modal") {
      state.pauseResumeDraft = getOpenQuattPauseDraftValue();
      state.systemModal = "openquatt-pause";
      render();
      return;
    }

    if (action === "enable-openquatt-now") {
      commitOpenQuattRegulationResumeNow();
      return;
    }

    if (action === "apply-openquatt-preset") {
      const presetValue = getOpenQuattPausePresetValue(button.dataset.pausePreset || "");
      state.pauseResumeDraft = presetValue;
      commitOpenQuattRegulationPause(presetValue);
      return;
    }

    if (action === "apply-openquatt-indefinite") {
      commitOpenQuattRegulationPause("");
      return;
    }

    if (action === "apply-openquatt-custom-pause") {
      if (!String(state.pauseResumeDraft || "").trim()) {
        state.controlError = "Kies eerst een datum en tijd om automatisch te hervatten.";
        render();
        return;
      }
      commitOpenQuattRegulationPause(state.pauseResumeDraft || "");
      return;
    }

    if (action === "close-update-modal") {
      state.updateModalOpen = false;
      state.updateInstallCompleted = false;
      state.updateInstallCompletedVersion = "";
      state.firmwareConnectionSwitchOpen = false;
      state.updateManualUploadOpen = false;
      state.firmwareConnectionSwitchConfirmed = false;
      resetFirmwareManualUploadSelection();
      render();
      return;
    }

    if (action === "close-quickstart-modal") {
      state.quickStartModalOpen = false;
      render();
      return;
    }

    if (action === "open-quickstart-modal") {
      state.currentStep = "generation";
      state.quickStartModalMode = "wizard";
      state.quickStartModalOpen = true;
      render();
      return;
    }

    if (action === "open-generation-modal") {
      state.currentStep = "generation";
      state.quickStartModalMode = "generation";
      state.quickStartModalOpen = true;
      render();
      return;
    }

    if (action === "open-cm100-commissioning-modal") {
      state.systemModal = "";
      setAppView("settings");
      setSettingsGroup("service");
      render();
      syncEntities({ forceBulk: true });
      return;
    }

    if (action === "open-installation-monitoring") {
      state.systemModal = "";
      setAppView("settings");
      setSettingsGroup("service");
      render();
      syncEntities({ forceBulk: true });
      return;
    }

    if (action === "open-service-task-modal") {
      const taskKey = String(button.dataset.serviceTask || "").trim();
      if (["autotune", "boiler", "purge", "manual-flow", "manual-hp"].includes(taskKey)) {
        state.systemModal = `service-task-${taskKey}`;
        render();
        syncEntities({ forceBulk: true });
      }
      return;
    }

    if (action === "press-named-button") {
      const buttonKey = String(button.dataset.oqButtonKey || button.dataset.buttonKey || button.getAttribute("data-oq-button-key") || "").trim();
      if (buttonKey) {
        if (buttonKey === "commissioningCm100Start") {
          state.pendingCommissioningCm100Start = true;
          state.commissioningTaskLock = "cm100";
          state.commissioningBoilerHeatPowerDisplay = "";
        } else if (buttonKey === "commissioningCm100Stop") {
          state.pendingCommissioningCm100Start = false;
          state.pendingBoilerPowerTestStart = false;
          state.pendingFlowAutotuneStart = false;
          state.pendingAirPurgeStart = false;
          state.pendingManualFlowStart = false;
          state.pendingManualHpStart = false;
          state.commissioningTaskLock = "";
          state.commissioningBoilerHeatPowerDisplay = "";
        } else if (buttonKey === "boilerPowerTestStart") {
          state.pendingBoilerPowerTestStart = true;
          state.pendingFlowAutotuneStart = false;
          state.pendingAirPurgeStart = false;
          state.pendingManualFlowStart = false;
          state.pendingManualHpStart = false;
          state.commissioningTaskLock = "boiler";
          state.commissioningBoilerHeatPowerDisplay = "";
        } else if (buttonKey === "boilerPowerTestAbort" || buttonKey === "boilerPowerTestApply") {
          state.commissioningTaskLock = "boiler";
        } else if (buttonKey === "flowAutotuneStart") {
          state.pendingFlowAutotuneStart = true;
          state.pendingBoilerPowerTestStart = false;
          state.pendingAirPurgeStart = false;
          state.pendingManualFlowStart = false;
          state.pendingManualHpStart = false;
          state.commissioningTaskLock = "autotune";
        } else if (buttonKey === "flowAutotuneAbort" || buttonKey === "flowAutotuneApply") {
          state.commissioningTaskLock = "autotune";
        } else if (buttonKey === "airPurgeStart") {
          state.pendingAirPurgeStart = true;
          state.pendingBoilerPowerTestStart = false;
          state.pendingFlowAutotuneStart = false;
          state.pendingManualFlowStart = false;
          state.pendingManualHpStart = false;
          state.commissioningTaskLock = "purge";
        } else if (buttonKey === "airPurgeAbort") {
          state.commissioningTaskLock = "purge";
        } else if (buttonKey === "manualFlowStart") {
          state.pendingManualFlowStart = true;
          state.pendingBoilerPowerTestStart = false;
          state.pendingFlowAutotuneStart = false;
          state.pendingAirPurgeStart = false;
          state.pendingManualHpStart = false;
          state.commissioningTaskLock = "manual-flow";
        } else if (buttonKey === "manualFlowAbort") {
          state.commissioningTaskLock = "manual-flow";
        } else if (buttonKey === "manualHpStart") {
          state.pendingManualHpStart = true;
          state.pendingBoilerPowerTestStart = false;
          state.pendingFlowAutotuneStart = false;
          state.pendingAirPurgeStart = false;
          state.pendingManualFlowStart = false;
          state.commissioningTaskLock = "manual-hp";
        } else if (buttonKey === "manualHpAbort") {
          state.commissioningTaskLock = "manual-hp";
        }
        const refreshKeys = [];
        if (buttonKey === "acknowledgeCompressorCyclingAlert") {
          refreshKeys.push(...INSTALLATION_MONITORING_STATE_KEYS);
        } else if (buttonKey === "commissioningCm100Start" || buttonKey === "commissioningCm100Stop") {
          refreshKeys.push(
            "commissioningStatus",
            "cm100Active",
            "boilerPowerTestStatus",
            "boilerPowerTestActive",
            "flowAutotuneStatus",
            "airPurgeStatus",
            "airPurgeActive",
            "manualFlowStatus",
            "manualFlowActive",
            "manualHpStatus",
            "manualHpGuardStatus",
            "manualHpActive",
          );
        } else if (buttonKey === "boilerPowerTestStart" || buttonKey === "boilerPowerTestAbort" || buttonKey === "boilerPowerTestApply") {
          refreshKeys.push(
            "commissioningStatus",
            "boilerPowerTestStatus",
            "boilerPowerTestActive",
            "boilerHeatPower",
            "boilerPowerTestResult",
            "boilerRatedHeatPower",
          );
        } else if (buttonKey === "flowAutotuneStart" || buttonKey === "flowAutotuneAbort" || buttonKey === "flowAutotuneApply") {
          refreshKeys.push(
            "commissioningStatus",
            "flowAutotuneStatus",
            "flowKpSuggested",
            "flowKiSuggested",
            "flowKp",
            "flowKi",
          );
        } else if (buttonKey === "airPurgeStart" || buttonKey === "airPurgeAbort") {
          refreshKeys.push(
            "commissioningStatus",
            "airPurgeStatus",
            "airPurgeActive",
            "airPurgeRemaining",
            "airPurgePhase",
            "airPurgeTargetIpwm",
            "flowMode",
          );
        } else if (buttonKey === "manualFlowStart" || buttonKey === "manualFlowAbort" || buttonKey === "manualFlowApplyHeating" || buttonKey === "manualFlowApplyCooling") {
          refreshKeys.push(
            "commissioningStatus",
            "manualFlowStatus",
            "manualFlowActive",
            "manualFlowSetpoint",
            "manualFlowTargetIpwm",
            "flowSelected",
            "flowMode",
            "flowSetpoint",
            "coolingFlowSetpoint",
          );
        } else if (buttonKey === "manualHpStart" || buttonKey === "manualHpAbort") {
          refreshKeys.push(
            "commissioningStatus",
            "manualHpStatus",
            "manualHpGuardStatus",
            "manualHpActive",
            "manualHp1Mode",
            "manualHp2Mode",
            "manualHp1Level",
            "manualHp2Level",
            "flowSelected",
            "hp1Compressor",
            "hp1Freq",
            "hp1Failures",
            "hp2Compressor",
            "hp2Freq",
            "hp2Failures",
            "hp1Mode",
            "hp2Mode",
          );
        }
        void triggerNamedButton(buttonKey, refreshKeys.length ? { refreshKeys } : {});
      }
      return;
    }

    if (action === "close-system-modal") {
      stopLoginAuthStatusPolling();
      state.systemModal = "";
      state.authDraftCurrentPassword = "";
      state.authDraftNewPassword = "";
      state.authDraftConfirmPassword = "";
      state.authNotice = "";
      state.authError = "";
      state.apiSecurityNotice = "";
      state.apiSecurityError = "";
      state.mqttNotice = "";
      state.mqttError = "";
      clearSettingsBackupDraft();
      render();
      return;
    }

    if (action === "clear-webserver-log-output") {
      clearWebServerLogOutput();
      return;
    }

    if (action === "copy-webserver-log-output") {
      void copyWebServerLogOutput();
      return;
    }

    if (action === "confirm-settings-backup-restore") {
      void restoreSettingsBackup();
      return;
    }

    if (action === "confirm-restart") {
      void triggerNamedButton("restartAction", {
        successNotice: "OpenQuatt wordt opnieuw opgestart. Wacht even tot de webinterface weer terugkomt.",
        errorPrefix: "Herstart mislukt",
        reconnectMode: "restart",
      });
      return;
    }

    if (action === "select-surface") {
      const nextNativeOpen = button.dataset.surface === "native";
      if (state.nativeOpen === nextNativeOpen) {
        if (state.nativeOpen) {
          void ensureNativeFrontendLoaded();
        }
        return;
      }

      state.nativeOpen = nextNativeOpen;
      setStoredSurface(state.nativeOpen ? "native" : "app");
      state.controlError = "";
      state.controlNotice = "";
      state.settingsInfoOpen = "";
      state.updateModalOpen = false;
      stopLoginAuthStatusPolling();
      state.systemModal = "";
      if (state.nativeOpen) {
        void ensureNativeFrontendLoaded();
      }
      render();
      syncSurfaceRuntime();
      window.requestAnimationFrame(() => {
        if (state.nativeOpen) {
          if (state.nativeApp) {
            state.nativeApp.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        } else {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      });
      return;
    }

    if (action === "toggle-overview-theme") {
      setOverviewTheme(state.overviewTheme === "light" ? "dark" : "light");
      render();
      return;
    }

    if (action === "select-hp-visual") {
      setHpVisualMode(button.dataset.hpVisual === "compact" ? "compact" : "schematic");
      render();
      return;
    }

    if (action === "select-hp-layout") {
      setHpLayoutMode(button.dataset.hpLayout || "equal");
      render();
      return;
    }

    if (action === "select-step") {
      state.currentStep = button.dataset.stepId || "generation";
      render();
      return;
    }

    if (action === "previous-step") {
      selectQuickStepByOffset(-1);
      render();
      return;
    }

    if (action === "next-step") {
      selectQuickStepByOffset(1);
      render();
      return;
    }

    if (action === "select-settings-option") {
      const key = button.dataset.selectKey || "";
      const option = button.dataset.selectOption || "";
      if (key && option && String(getEntityValue(key) || "") !== option) {
        commitSelect(key, option);
      }
      return;
    }

    if (action === "toggle-overview-control") {
      const key = button.dataset.controlKey || "";
      const nextState = (button.dataset.controlState || "").toLowerCase();
      if (key && (nextState === "on" || nextState === "off")) {
        commitSwitch(key, nextState === "on");
      }
      return;
    }

    if (action === "select-overview-control-option") {
      const key = button.dataset.controlKey || "";
      const option = button.dataset.controlOption || "";
      if (key && option && String(getEntityValue(key) || "") !== option) {
        commitSelect(key, option);
      }
      return;
    }

    if (action === "suggest-curve-fallback") {
      const suggestion = getCurveFallbackSuggestion();
      if (suggestion) {
        commitNumber("curveFallbackSupply", suggestion.value, "Fallback-aanvoertemperatuur uit de stooklijn overgenomen.");
      }
      return;
    }

    if (action === "apply" || action === "reset") {
      triggerButton(action);
      return;
    }

    if (action === "run-firmware-check") {
      triggerFirmwareUpdateCheck();
      return;
    }

    if (action === "install-firmware-update") {
      installFirmwareUpdate();
      return;
    }

    if (action === "install-firmware-connection-switch") {
      void installFirmwareConnectionSwitch();
      return;
    }

    if (action === "toggle-firmware-connection-switch") {
      state.firmwareConnectionSwitchOpen = !state.firmwareConnectionSwitchOpen;
      state.firmwareConnectionSwitchConfirmed = false;
      if (state.firmwareConnectionSwitchOpen) {
        state.updateManualUploadOpen = false;
        resetFirmwareManualUploadSelection();
      }
      render();
      return;
    }

    if (action === "toggle-firmware-upload") {
      if (state.updateManualUploadOpen) {
        state.updateManualUploadOpen = false;
        resetFirmwareManualUploadSelection();
      } else {
        state.updateManualUploadOpen = true;
        state.firmwareConnectionSwitchOpen = false;
        state.firmwareConnectionSwitchConfirmed = false;
        state.updateManualUploadError = "";
      }
      render();
      return;
    }

    if (action === "upload-firmware-file") {
      void uploadFirmwareUpdate();
      return;
    }

    if (action === "save-web-auth") {
      void commitWebAuthChanges();
      return;
    }

    if (action === "disable-web-auth") {
      void commitDisableWebAuth();
      return;
    }

  }

  function handlePointerDown(event) {
    const point = event.target.closest("[data-curve-key]");
    if (!point || !isCurveMode()) {
      return;
    }

    state.draggingCurveKey = point.dataset.curveKey || "";
    updateCurveDraftFromPointer(event.clientY);
  }

  function handlePointerMove(event) {
    if (!state.draggingCurveKey) {
      return;
    }
    updateCurveDraftFromPointer(event.clientY);
  }

  function handlePointerUp() {
    if (!state.draggingCurveKey) {
      return;
    }

    const key = state.draggingCurveKey;
    const value = normalizeNumber(key, getEntityValue(key));
    state.draggingCurveKey = "";
    commitNumber(key, value, "Curvepunt bijgewerkt.");
  }

  async function commitSelect(key, option) {
    const entity = ENTITY_DEFS[key];
    state.busyAction = `save-${key}`;
    state.controlNotice = "";
    state.controlError = "";
    state.entities[key] = {
      ...(state.entities[key] || {}),
      state: option,
      value: option,
    };
    render();

    try {
      const response = await fetch(
        `${buildEntityPath(entity.domain, entity.name, "set")}?option=${encodeURIComponent(option)}`,
        { method: "POST" }
      );
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }
      delete state.drafts[key];
      delete state.inputDrafts[key];
      state.controlNotice = `${entity.name} bijgewerkt.`;
      if (key === "firmwareUpdateChannel") {
        state.updateInstallCompleted = false;
        state.updateInstallCompletedVersion = "";
        state.entities.firmwareUpdateChannel = {
          ...(state.entities.firmwareUpdateChannel || {}),
          state: option,
          value: option,
        };
        primeFirmwareUpdateState(option);
        render();
        await pollFirmwareUpdateState();
        state.controlNotice = "Releasekanaal bijgewerkt.";
      } else if (key === "debugLevel") {
        state.controlNotice = "Logger level bijgewerkt.";
        if (state.systemModal === "webserver-logs") {
          void refreshWebServerLogHistory();
        }
      } else if (key === "webServerLogHistoryEnabled") {
        if (enabled) {
          state.webServerLogHistoryLoaded = false;
          void refreshWebServerLogHistory();
        } else {
          clearWebServerLogOutput();
        }
        if (state.systemModal === "webserver-logs") {
          render();
        }
      } else if (state.appView === "settings") {
        await refreshEntities(getSettingsRefreshKeys(), "all");
      } else {
        await refreshEntities(["setupComplete", "strategy", "openquattEnabled", "manualCoolingEnable", "silentModeOverride", ...FLOW_SETTING_KEYS, ...LIMIT_KEYS], "state");
      }
      if (key === "strategy" && state.appView !== "settings") {
        await refreshEntities(isCurveMode(option) ? CURVE_POINTS.map((point) => point.key) : POWER_HOUSE_KEYS, "state");
      }
    } catch (error) {
      state.controlError = `${entity.name} kon niet worden bijgewerkt. ${error.message}`;
    } finally {
      state.busyAction = "";
      render();
    }
  }

  async function commitSwitch(key, enabled) {
    const entity = ENTITY_DEFS[key];
    if (!entity) {
      return;
    }

    state.busyAction = `switch-${key}`;
    state.controlNotice = "";
    state.controlError = "";
    render();

    try {
      const action = enabled ? "turn_on" : "turn_off";
      const response = await fetch(buildEntityPath(entity.domain, entity.name, action), { method: "POST" });
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }
      state.entities[key] = {
        ...(state.entities[key] || {}),
        value: enabled,
        state: enabled,
      };
      state.controlNotice = `${entity.name} ${enabled ? "ingeschakeld" : "uitgeschakeld"}.`;
      state.busyAction = "";
      if (state.appView === "overview") {
        await refreshEntities([...OVERVIEW_KEYS, ...HEADER_ENTITY_KEYS, "setupComplete", ...FIRMWARE_ENTITY_KEYS], "state");
      } else if (state.appView === "settings") {
        await refreshEntities(getSettingsRefreshKeys(), "all");
      } else {
        await refreshEntities(["setupComplete", "strategy", "openquattEnabled", "manualCoolingEnable", "silentModeOverride", ...FLOW_SETTING_KEYS, ...LIMIT_KEYS], "state");
      }
      render();
    } catch (error) {
      state.controlError = `${entity.name} aanpassen mislukt (${error.message}).`;
      render();
    } finally {
      state.busyAction = "";
      render();
    }
  }

  async function triggerFirmwareUpdateCheck() {
    const entity = ENTITY_DEFS.checkFirmwareUpdates;
    if (!entity) {
      return;
    }

    state.updateInstallCompleted = false;
    state.updateInstallCompletedVersion = "";
    state.updateCheckBusy = true;
    state.controlError = "";
    state.controlNotice = "";
    render();

    try {
      await setFirmwareUpdateTarget("current build", { poll: false });
      primeFirmwareUpdateState();
      const response = await fetch(buildEntityPath(entity.domain, entity.name, "press"), {
        method: "POST",
      });
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }
      await pollFirmwareUpdateState();
      state.controlNotice = "Firmwarecontrole bijgewerkt.";
    } catch (error) {
      state.controlError = `Firmwarecontrole mislukte. ${error.message}`;
    } finally {
      state.updateCheckBusy = false;
      render();
    }
  }

  async function hydrateFirmwareUpdateModal() {
    try {
      await refreshEntities(FIRMWARE_MODAL_KEYS, "all", { concurrency: ENTITY_REFRESH_CONCURRENCY });
      if (state.updateModalOpen) {
        render();
      }
    } catch (_error) {
      // Keep the modal usable with known state; OTA actions still show detailed failures.
    }
  }

  async function setFirmwareUpdateTarget(option, options = {}) {
    const entity = ENTITY_DEFS.firmwareUpdateTarget;
    if (!entity || !hasEntity("firmwareUpdateTarget")) {
      return false;
    }

    const value = String(option || "").trim();
    if (!value) {
      return false;
    }

    state.entities.firmwareUpdateTarget = {
      ...(state.entities.firmwareUpdateTarget || {}),
      state: value,
      value,
    };

    const response = await fetch(
      `${buildEntityPath(entity.domain, entity.name, "set")}?option=${encodeURIComponent(value)}`,
      { method: "POST" }
    );
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    if (options.poll !== false) {
      primeFirmwareUpdateState();
      await pollFirmwareUpdateState();
    }
    return true;
  }

  async function installFirmwareUpdate() {
    const entity = getFirmwareUpdateEntity();
    if (!entity) {
      return;
    }

    state.updateManualUploadOpen = false;
    state.firmwareConnectionSwitchOpen = false;
    state.firmwareConnectionSwitchConfirmed = false;
    resetFirmwareManualUploadSelection();
    state.updateInstallCompleted = false;
    state.updateInstallCompletedVersion = "";
    state.updateInstallBusy = true;
    state.updateInstallTargetVersion = getFirmwareLatestVersion(entity);
    state.updateInstallPhaseHint = "starting";
    state.updateInstallProgressHint = 0;
    state.updateInstallMode = "normal";
    state.updateInstallTargetConnection = "";
    state.controlError = "";
    state.controlNotice = "";
    render();

    try {
      await setFirmwareUpdateTarget("current build");
      state.updateInstallTargetVersion = getFirmwareLatestVersion(getFirmwareUpdateEntity() || {}) || state.updateInstallTargetVersion;
      const response = await fetch(buildEntityPath("update", "Firmware Update", "install"), {
        method: "POST",
      });
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }
      const completed = await pollFirmwareInstallState();
      if (completed) {
        state.updateInstallCompleted = true;
        state.updateInstallCompletedVersion = getFirmwareCurrentVersion() || state.updateInstallTargetVersion;
        state.controlNotice = "";
      } else {
        state.controlNotice = "OTA-update gestart. Wacht tot het device weer online is.";
      }
    } catch (error) {
      state.controlError = `OTA-update kon niet worden gestart. ${error.message}`;
    } finally {
      resetFirmwareInstallUiState();
      render();
    }
  }

  async function installFirmwareConnectionSwitch() {
    const model = getFirmwareConnectionSwitchModel();
    const buttonEntity = ENTITY_DEFS.installFirmwareUpdateTarget;
    if (!model || !model.canSwitch || !buttonEntity) {
      return;
    }
    if (!state.firmwareConnectionSwitchConfirmed) {
      state.controlError = "Bevestig eerst de waarschuwing voor de verbindingswissel.";
      render();
      return;
    }

    state.updateManualUploadOpen = false;
    resetFirmwareManualUploadSelection();
    state.updateInstallCompleted = false;
    state.updateInstallCompletedVersion = "";
    state.updateInstallBusy = true;
    state.updateInstallMode = "connection-switch";
    state.updateInstallTargetConnection = model.targetConnection;
    state.updateInstallTargetVersion = getFirmwareCurrentVersion() || "";
    state.updateInstallPhaseHint = "starting";
    state.updateInstallProgressHint = 0;
    state.controlError = "";
    state.controlNotice = "";
    render();

    try {
      await setFirmwareUpdateTarget("alternate connection");
      state.updateInstallTargetVersion = getFirmwareLatestVersion(getFirmwareUpdateEntity() || {}) || getFirmwareCurrentVersion() || "";
      state.updateInstallPhaseHint = "starting";
      state.updateInstallProgressHint = 0;
      render();

      const response = await fetch(buildEntityPath(buttonEntity.domain, buttonEntity.name, "press"), {
        method: "POST",
      });
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }

      const completed = await pollFirmwareInstallState();
      if (completed) {
        state.updateInstallCompleted = true;
        state.updateInstallCompletedVersion = getFirmwareCurrentVersion() || state.updateInstallTargetVersion || "";
        state.firmwareConnectionSwitchConfirmed = false;
        state.controlNotice = "";
      } else {
        const targetLabel = getFirmwareConnectionLabel(model.targetConnection);
        state.controlNotice = `Verbindingswissel naar ${targetLabel} is gestart. Wacht tot het device via die verbinding terugkomt.`;
      }
    } catch (error) {
      state.controlError = `Verbindingswissel kon niet worden gestart. ${error.message}`;
    } finally {
      resetFirmwareInstallUiState();
      render();
    }
  }

  async function uploadFirmwareUpdate() {
    const file = state.updateManualUploadFile;
    if (!file) {
      state.updateManualUploadError = "Kies eerst een firmwarebestand.";
      render();
      return;
    }

    state.updateInstallCompleted = false;
    state.updateInstallCompletedVersion = "";
    state.updateInstallBusy = true;
    state.updateInstallTargetVersion = getFirmwareCurrentVersion() || "";
    state.updateInstallPhaseHint = "starting";
    state.updateInstallProgressHint = 0;
    state.controlError = "";
    state.controlNotice = "";
    state.updateManualUploadError = "";
    render();

    try {
      const formData = new FormData();
      formData.append("update", file, file.name || "firmware.bin");
      const response = await fetch("/update", {
        method: "POST",
        body: formData,
      });
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }

      state.updateManualUploadOpen = false;
      resetFirmwareManualUploadSelection();
      const completed = await pollFirmwareInstallState();
      if (completed) {
        state.updateInstallCompleted = true;
        state.updateInstallCompletedVersion = getFirmwareCurrentVersion() || state.updateInstallTargetVersion || "";
        state.controlNotice = "";
      } else {
        state.controlNotice = "Handmatige OTA-upload gestart. Wacht tot het device weer online is.";
      }
    } catch (error) {
      state.updateManualUploadError = `Handmatige upload mislukte. ${error.message}`;
    } finally {
      resetFirmwareInstallUiState();
      render();
    }
  }

  async function commitNumber(key, value, successNotice = "") {
    const entity = ENTITY_DEFS[key];
    const normalized = normalizeNumber(key, value);
    state.busyAction = `save-${key}`;
    state.controlNotice = "";
    state.controlError = "";
    state.inputDrafts[key] = String(value ?? "");
    state.drafts[key] = normalized;
    render();

    try {
      const response = await fetch(
        `${buildEntityPath(entity.domain, entity.name, "set")}?value=${encodeURIComponent(normalized)}`,
        { method: "POST" }
      );
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }
      delete state.drafts[key];
      delete state.inputDrafts[key];
      state.controlNotice = successNotice || `${entity.name} bijgewerkt.`;
      await refreshEntities(
        state.appView === "settings"
          ? getSettingsRefreshKeys()
          : [...new Set([key, "setupComplete", "strategy", ...FLOW_SETTING_KEYS, ...LIMIT_KEYS])]
        ,
        "state"
      );
    } catch (error) {
      state.inputDrafts[key] = String(normalized).replace(".", ",");
      state.controlError = `${entity.name} kon niet worden bijgewerkt. ${error.message}`;
    } finally {
      state.busyAction = "";
      render();
    }
  }

  async function commitTime(key, value) {
    const entity = ENTITY_DEFS[key];
    const normalized = normalizeTimeValue(value);
    state.busyAction = `save-${key}`;
    state.controlNotice = "";
    state.controlError = "";
    render();

    try {
      const response = await fetch(
        `${buildEntityPath(entity.domain, entity.name, "set")}?value=${encodeURIComponent(normalized)}`,
        { method: "POST" }
      );
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }
      state.controlNotice = `${entity.name} bijgewerkt.`;
      await refreshEntities(
        state.appView === "settings"
          ? getSettingsRefreshKeys()
          : [key, "setupComplete"],
        "state"
      );
    } catch (error) {
      state.controlError = `${entity.name} kon niet worden bijgewerkt. ${error.message}`;
    } finally {
      state.busyAction = "";
      render();
    }
  }

  async function commitText(key, value) {
    const entity = ENTITY_DEFS[key];
    const normalized = String(value || "").trim();
    state.busyAction = `save-${key}`;
    state.controlNotice = "";
    state.controlError = "";
    state.inputDrafts[key] = String(value ?? "");
    state.drafts[key] = normalized;
    render();

    try {
      const response = await fetch(
        `${buildEntityPath(entity.domain, entity.name, "set")}?value=${encodeURIComponent(normalized)}`,
        { method: "POST" }
      );
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }
      state.entities[key] = {
        ...(state.entities[key] || {}),
        value: normalized,
        state: normalized,
      };
      delete state.drafts[key];
      delete state.inputDrafts[key];
      state.controlNotice = `${entity.name} bijgewerkt.`;
      await refreshEntities(
        state.appView === "settings"
          ? getSettingsRefreshKeys()
          : [key, "setupComplete"],
        "state"
      );
    } catch (error) {
      state.inputDrafts[key] = normalized;
      state.controlError = `${entity.name} kon niet worden bijgewerkt. ${error.message}`;
    } finally {
      state.busyAction = "";
      render();
    }
  }

  async function postDateTimeValue(key, value) {
    const entity = ENTITY_DEFS[key];
    const normalized = normalizeDateTimeValue(value) || OPENQUATT_RESUME_CLEAR_VALUE;
    const response = await fetch(
      `${buildEntityPath(entity.domain, entity.name, "set")}?value=${encodeURIComponent(normalized)}`,
      { method: "POST" }
    );
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }
    state.entities[key] = {
      ...(state.entities[key] || {}),
      value: normalized,
      state: normalized,
    };
    return normalized;
  }

  async function postSwitchState(key, enabled) {
    const entity = ENTITY_DEFS[key];
    const action = enabled ? "turn_on" : "turn_off";
    const response = await fetch(buildEntityPath(entity.domain, entity.name, action), { method: "POST" });
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }
    state.entities[key] = {
      ...(state.entities[key] || {}),
      value: enabled,
      state: enabled,
    };
    return enabled;
  }

  async function refreshOpenQuattControlState() {
    await refreshEntities(
      [...new Set([...OVERVIEW_KEYS, ...HEADER_ENTITY_KEYS, "setupComplete", ...FIRMWARE_ENTITY_KEYS])],
      "state"
    );
  }

  async function commitDateTime(key, value) {
    const entity = ENTITY_DEFS[key];
    const normalized = normalizeDateTimeValue(value);
    state.busyAction = `save-${key}`;
    state.controlNotice = "";
    state.controlError = "";
    render();

    try {
      await postDateTimeValue(key, normalized);
      state.controlNotice = `${entity.name} bijgewerkt.`;
      await refreshEntities(
        state.appView === "settings"
          ? getSettingsRefreshKeys()
          : [key, "setupComplete", "openquattEnabled"],
        "state"
      );
    } catch (error) {
      state.controlError = `${entity.name} kon niet worden bijgewerkt. ${error.message}`;
    } finally {
      state.busyAction = "";
      render();
    }
  }

  async function commitWebAuthChanges() {
    const status = state.authStatus || {};
    const authEnabled = status.enabled === true;
    const setupWindowActive = status.setup_window_active === true;
    const currentPassword = String(state.authDraftCurrentPassword || "");
    const newUsername = String(state.authDraftUsername || "").trim();
    const newPassword = String(state.authDraftNewPassword || "");
    const confirmPassword = String(state.authDraftConfirmPassword || "");

    if (!newUsername || !newPassword) {
      state.authError = "Vul een gebruikersnaam en wachtwoord in.";
      render();
      return;
    }
    if (newPassword !== confirmPassword) {
      state.authError = "De twee wachtwoorden zijn niet gelijk.";
      render();
      return;
    }
    if (authEnabled && !currentPassword) {
      state.authError = "Vul je huidige wachtwoord in.";
      render();
      return;
    }
    if (!authEnabled && !setupWindowActive) {
      state.authError = "Houd de herstelknop 5 seconden vast.";
      render();
      return;
    }
    if (!status.csrf_token) {
      state.authError = "Logingegevens laden nog. Probeer het zo opnieuw.";
      render();
      return;
    }

    state.authBusy = true;
    state.authError = "";
    state.authNotice = "";
    render();

    try {
      const params = new URLSearchParams();
      params.set("csrf_token", status.csrf_token);
      params.set("current_password", currentPassword);
      params.set("new_username", newUsername);
      params.set("new_password", newPassword);

      const response = await fetch("/auth/change", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8" },
        body: params.toString(),
      });
      const payload = await response.json().catch(() => ({ ok: false, error: "invalid_response" }));
      if (!response.ok || !payload.ok) {
        throw new Error(payload.error || `HTTP ${response.status}`);
      }
      await refreshAuthStatus({ force: true });
      state.authDraftCurrentPassword = "";
      state.authDraftNewPassword = "";
      state.authDraftConfirmPassword = "";
      state.authDraftUsername = String(state.authStatus?.username || newUsername).trim();
      state.authNotice = authEnabled
        ? "Login aangepast."
        : "Login staat nu aan.";
      state.authError = "";
      render();
    } catch (error) {
      state.authError = `Opslaan is mislukt. ${error.message}`;
      render();
    } finally {
      state.authBusy = false;
      render();
    }
  }

  async function commitDisableWebAuth() {
    const status = state.authStatus || {};
    if (!status.enabled) {
      state.authNotice = "Login staat al uit.";
      state.authError = "";
      render();
      return;
    }

    const currentPassword = String(state.authDraftCurrentPassword || "");
    if (!currentPassword) {
      state.authError = "Vul je huidige wachtwoord in.";
      render();
      return;
    }
    if (!status.csrf_token) {
      state.authError = "Logingegevens laden nog. Probeer het zo opnieuw.";
      render();
      return;
    }

    state.authBusy = true;
    state.authError = "";
    state.authNotice = "";
    render();

    try {
      const params = new URLSearchParams();
      params.set("csrf_token", status.csrf_token);
      params.set("current_password", currentPassword);

      const response = await fetch("/auth/disable", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8" },
        body: params.toString(),
      });
      const payload = await response.json().catch(() => ({ ok: false, error: "invalid_response" }));
      if (!response.ok || !payload.ok) {
        throw new Error(payload.error || `HTTP ${response.status}`);
      }
      await refreshAuthStatus({ force: true });
      state.authDraftCurrentPassword = "";
      state.authDraftNewPassword = "";
      state.authDraftConfirmPassword = "";
      state.authDraftUsername = "";
      state.authNotice = "Login staat nu uit.";
      state.authError = "";
      render();
    } catch (error) {
      state.authError = `Uitzetten is mislukt. ${error.message}`;
      render();
    } finally {
      state.authBusy = false;
      render();
    }
  }

  async function commitOpenQuattRegulationPause(rawResumeValue) {
    const scheduledValue = normalizeDateTimeValue(rawResumeValue);
    if (rawResumeValue && !scheduledValue) {
      state.controlError = "Kies een geldig hervatmoment om automatisch weer in te schakelen.";
      render();
      return;
    }
    if (scheduledValue && !hasEntity("openquattResumeAt")) {
      state.controlError = "Automatisch hervatten is op deze firmware nog niet beschikbaar.";
      render();
      return;
    }

    state.busyAction = "openquatt-regulation";
    state.controlNotice = "";
    state.controlError = "";
    render();

    let resumeScheduled = false;
    try {
      if (hasEntity("openquattResumeAt")) {
        await postDateTimeValue("openquattResumeAt", scheduledValue || OPENQUATT_RESUME_CLEAR_VALUE);
        resumeScheduled = Boolean(scheduledValue);
      }
      await postSwitchState("openquattEnabled", false);
      state.pauseResumeDraft = scheduledValue ? toDateTimeInputValue(scheduledValue) : "";
      state.systemModal = "";
      state.controlNotice = scheduledValue
        ? `Openquatt regeling is tijdelijk uitgeschakeld tot ${formatOpenQuattResumeDateTime(scheduledValue)}.`
        : "Openquatt regeling is uitgeschakeld zonder eindmoment.";
      await refreshOpenQuattControlState();
    } catch (error) {
      if (resumeScheduled && hasEntity("openquattResumeAt")) {
        try {
          await postDateTimeValue("openquattResumeAt", OPENQUATT_RESUME_CLEAR_VALUE);
        } catch (_rollbackError) {
          // Best effort rollback to avoid leaving a stray resume moment behind.
        }
      }
      state.controlError = `Openquatt regeling kon niet worden bijgewerkt. ${error.message}`;
    } finally {
      state.busyAction = "";
      render();
    }
  }

  async function commitOpenQuattRegulationResumeNow() {
    state.busyAction = "openquatt-regulation";
    state.controlNotice = "";
    state.controlError = "";
    render();

    try {
      await postSwitchState("openquattEnabled", true);
      state.pauseResumeDraft = "";
      state.systemModal = "";
      state.controlNotice = "Openquatt regeling is weer actief.";
      await refreshOpenQuattControlState();
    } catch (error) {
      state.controlError = `Openquatt regeling kon niet worden ingeschakeld. ${error.message}`;
    } finally {
      state.busyAction = "";
      render();
    }
  }

  async function triggerButton(action) {
    const entity = ENTITY_DEFS[action];
    state.busyAction = action;
    state.controlError = "";
    state.controlNotice = "";
    render();

    try {
      const response = await fetch(buildEntityPath(entity.domain, entity.name, "press"), {
        method: "POST",
      });
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }
      state.controlNotice = action === "apply"
        ? "Setup gemarkeerd als afgerond."
        : "Quick Start teruggezet naar het begin. Huidige tuningwaarden blijven voorlopig staan.";
      await refreshEntities(["setupComplete"], "state");
      if (action === "reset") {
        state.currentStep = QUICK_STEPS[0].id;
        state.quickStartModalMode = "wizard";
        state.quickStartModalOpen = true;
      }
      state.quickStartModalOpen = action !== "apply";
      setAppView("overview", { syncMode: "replace" });
      syncEntities({ forceFast: true });
    } catch (error) {
      state.controlError = `Actie mislukt voor "${entity.name}". ${error.message}`;
    } finally {
      state.busyAction = "";
      render();
    }
  }

  async function triggerNamedButton(key, options = {}) {
    const entity = ENTITY_DEFS[key];
    if (!entity) {
      return;
    }
    state.busyAction = key;
    state.controlError = "";
    state.controlNotice = "";
    render();

    try {
      const response = await fetch(buildEntityPath(entity.domain, entity.name, "press"), {
        method: "POST",
      });
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }
      const keepCommissioningModalOpen = [
        "commissioningCm100Start",
        "commissioningCm100Stop",
        "boilerPowerTestStart",
        "boilerPowerTestAbort",
        "boilerPowerTestApply",
        "flowAutotuneStart",
        "flowAutotuneAbort",
        "flowAutotuneApply",
        "airPurgeStart",
        "airPurgeAbort",
        "manualFlowStart",
        "manualFlowAbort",
        "manualFlowApplyHeating",
        "manualFlowApplyCooling",
        "manualHpStart",
        "manualHpAbort",
      ].includes(key);
      if (!keepCommissioningModalOpen) {
        stopLoginAuthStatusPolling();
        state.systemModal = "";
      }
      state.controlNotice = options.successNotice || `${entity.name} gestart.`;
      if (options.reconnectMode) {
        beginDeviceReconnect(options.reconnectMode);
      }
      if (Array.isArray(options.refreshKeys) && options.refreshKeys.length) {
        await refreshEntities(options.refreshKeys, "state");
      }
    } catch (error) {
      if (key === "commissioningCm100Start") {
        state.pendingCommissioningCm100Start = false;
        state.commissioningTaskLock = "";
      } else if (key === "boilerPowerTestStart") {
        state.pendingBoilerPowerTestStart = false;
        state.commissioningTaskLock = "";
      } else if (key === "flowAutotuneStart") {
        state.pendingFlowAutotuneStart = false;
        state.commissioningTaskLock = "";
      } else if (key === "airPurgeStart") {
        state.pendingAirPurgeStart = false;
        state.commissioningTaskLock = "";
      } else if (key === "manualFlowStart") {
        state.pendingManualFlowStart = false;
        state.commissioningTaskLock = "";
      } else if (key === "manualHpStart") {
        state.pendingManualHpStart = false;
        state.commissioningTaskLock = "";
      }
      state.controlError = `${options.errorPrefix || `Actie mislukt voor "${entity.name}"`}. ${error.message}`;
    } finally {
      state.busyAction = "";
      render();
    }
  }

  function updateCurveDraftFromPointer(clientY) {
    const svg = state.root ? state.root.querySelector(".oq-helper-curve-svg") : null;
    if (!svg || !state.draggingCurveKey) {
      return;
    }

    const rect = svg.getBoundingClientRect();
    const plotTop = 22;
    const plotHeight = 180;
    const localY = ((clientY - rect.top) / rect.height) * 240;
    const clampedY = Math.min(plotTop + plotHeight, Math.max(plotTop, localY));
    const value = 70 - ((clampedY - plotTop) / plotHeight) * 50;
    const normalized = normalizeNumber(state.draggingCurveKey, value);

    if (String(getEntityValue(state.draggingCurveKey)) !== String(normalized)) {
      state.drafts[state.draggingCurveKey] = normalized;
      render();
    }
  }

  function renderNumberInputControl({ key, value, meta, controlClass, inputClass = "oq-helper-input", unitMarkup = "" }) {
    return `
      <label class="${controlClass}">
        <input
          class="${inputClass}"
          type="number"
          data-oq-field="${escapeHtml(key)}"
          min="${meta.min}"
          max="${meta.max}"
          step="${meta.step}"
          value="${escapeHtml(value)}"
          ${state.loadingEntities ? "disabled" : ""}
        >
        ${unitMarkup}
      </label>
    `;
  }

  function renderNumberInputField(key, title, copy, options = {}) {
    const meta = getNumberMeta(key);
    const value = getInputDraftValue(key);
    return `
      <article class="oq-helper-control-card">
        <div class="oq-helper-control-copy">
          <h3>${escapeHtml(title)}</h3>
          <p>${escapeHtml(copy)}</p>
        </div>
        ${renderNumberInputControl({ key, value, meta, controlClass: "oq-helper-control oq-helper-control--split", unitMarkup: `<span class="oq-helper-unit">${escapeHtml(meta.uom || "")}</span>` })}
        ${options.footerMarkup || ""}
      </article>
    `;
  }
