function getDebugRecordingSampleCount() {
  if (state.debugRecordingDeviceStatus) {
    return Math.max(0, Number(state.debugRecordingDeviceStatus.sample_count || 0));
  }
  return Array.isArray(state.debugRecordingSamples) ? state.debugRecordingSamples.length : 0;
}

function formatDebugRecordingDuration(valueMs) {
  const totalSeconds = Math.max(0, Math.round(Number(valueMs || 0) / 1000));
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  if (hours > 0) {
    return `${hours}u ${String(minutes).padStart(2, "0")}m`;
  }
  if (minutes > 0) {
    return `${minutes}m ${String(seconds).padStart(2, "0")}s`;
  }
  return `${seconds}s`;
}

function getDebugRecordingDurationMs() {
  if (state.debugRecordingDeviceStatus) {
    return Math.max(0, Number(state.debugRecordingDeviceStatus.elapsed_s || 0) * 1000);
  }
  if (!state.debugRecordingStartedAt) {
    return 0;
  }
  const endAt = state.debugRecordingActive ? Date.now() : Number(state.debugRecordingLastSampleAt || Date.now());
  return Math.max(0, endAt - Number(state.debugRecordingStartedAt || endAt));
}

function getDebugRecordingStatusLabel() {
  if (state.debugRecordingDeviceStatus && state.debugRecordingDeviceStatus.available === false) {
    return "Niet beschikbaar";
  }
  if (state.debugRecordingActive) {
    return "Bezig met opnemen";
  }
  const count = getDebugRecordingSampleCount();
  if (count > 0) {
    return "Voltooid";
  }
  return "Niet gestart";
}

function getDebugRecordingStatusCopy() {
  if (state.debugRecordingActive) {
    return "De opname loopt in apparaatgeheugen. Je kunt deze pagina sluiten en later het bestand downloaden.";
  }
  if (getDebugRecordingSampleCount() > 0) {
    return "De opname is klaar. Download het supportbestand en voeg dit toe aan je supportverzoek.";
  }
  if (state.debugRecordingDeviceStatus && state.debugRecordingDeviceStatus.available === false) {
    return "Debugopname in apparaatgeheugen is niet beschikbaar op deze firmware.";
  }
  return "Neem tijdelijk supportgegevens op voor analyse. De opname wordt lokaal in het apparaatgeheugen opgeslagen. Er wordt niets automatisch verzonden.";
}

function getDebugRecordingSelectedMinutes() {
  const selected = Number(state.debugRecordingSelectedMinutes || 15);
  const allowed = DEBUG_RECORDING_DURATION_OPTIONS.map((option) => Number(option.minutes));
  return allowed.includes(selected) ? selected : Number(DEBUG_RECORDING_DURATION_OPTIONS[0]?.minutes || 15);
}

function setDebugRecordingSelectedMinutes(minutes) {
  if (state.debugRecordingActive) {
    return;
  }
  state.debugRecordingSelectedMinutes = Math.max(1, Number(minutes) || 15);
  state.debugRecordingNotice = "";
  state.debugRecordingError = "";
  render();
}

function getDebugRecordingRemainingMs() {
  if (state.debugRecordingDeviceStatus) {
    return Math.max(0, Number(state.debugRecordingDeviceStatus.remaining_s || 0) * 1000);
  }
  if (!state.debugRecordingActive) {
    return 0;
  }
  return Math.max(0, Number(state.debugRecordingEndsAt || 0) - Date.now());
}

function getDebugRecordingProgressPercent() {
  if (state.debugRecordingDeviceStatus) {
    const duration = Math.max(1, Number(state.debugRecordingDeviceStatus.duration_s || 0));
    const elapsed = Math.max(0, Number(state.debugRecordingDeviceStatus.elapsed_s || 0));
    if (!state.debugRecordingActive && getDebugRecordingSampleCount() > 0) {
      return 100;
    }
    return Math.max(0, Math.min(100, (elapsed / duration) * 100));
  }
  if (!state.debugRecordingActive || !state.debugRecordingStartedAt || !state.debugRecordingEndsAt) {
    return getDebugRecordingSampleCount() > 0 ? 100 : 0;
  }
  const totalMs = Math.max(1, Number(state.debugRecordingEndsAt) - Number(state.debugRecordingStartedAt));
  const elapsedMs = Math.max(0, Date.now() - Number(state.debugRecordingStartedAt));
  return Math.max(0, Math.min(100, (elapsedMs / totalMs) * 100));
}

function getDebugRecordingId(source = state.debugRecordingDeviceStatus) {
  return String(source?.recording_id ?? source?.recording?.recording_id ?? "").trim();
}

function getStoredDebugRecordingAcknowledgedId() {
  try {
    return String(window.localStorage.getItem("oq-debug-recording-acknowledged-id") || "");
  } catch (_error) {
    return "";
  }
}

function acknowledgeDebugRecording(bundle) {
  if (bundle?.recording?.active) {
    return;
  }
  const recordingId = getDebugRecordingId(bundle);
  if (!recordingId) {
    return;
  }
  state.debugRecordingAcknowledgedId = recordingId;
  try {
    window.localStorage.setItem("oq-debug-recording-acknowledged-id", recordingId);
  } catch (_error) {
    // The acknowledgement still applies for the current browser session.
  }
}

function renderDebugRecordingHeaderStatus() {
  const status = state.debugRecordingDeviceStatus;
  const sampleCount = Math.max(0, Number(status?.sample_count || 0));
  if (!status || status.available === false || (!status.active && sampleCount === 0)) {
    return "";
  }

  const active = Boolean(status.active);
  if (!active && getDebugRecordingId(status) === state.debugRecordingAcknowledgedId) {
    return "";
  }
  const remaining = formatDebugRecordingDuration(Math.max(0, Number(status.remaining_s || 0)) * 1000);
  const label = active ? `Debug loopt · ${remaining}` : "Debug klaar";
  const title = active ? `Debugopname loopt, nog ${remaining}` : "Debugopname klaar om te downloaden";
  return `
    <button
      class="oq-debug-recording-header-status${active ? " oq-debug-recording-header-status--active" : " oq-debug-recording-header-status--ready"}"
      type="button"
      data-oq-action="open-debug-recording-modal"
      aria-label="${escapeHtml(title)}"
      title="${escapeHtml(title)}"
    >
      <span class="oq-debug-recording-header-status-dot" aria-hidden="true"></span>
      <span>${escapeHtml(label)}</span>
    </button>
  `;
}

function patchDebugRecordingSettingsStatus() {
  if (!state.root) {
    return;
  }
  const row = state.root.querySelector('[data-oq-diagnostics-row="debugRecording"]');
  if (!row) {
    return;
  }
  const value = row.querySelector(".oq-settings-system-row-value");
  const note = row.querySelector(".oq-settings-system-row-note");
  if (value) {
    value.textContent = getDebugRecordingStatusLabel();
  }
  if (note) {
    note.textContent = getDebugRecordingStatusCopy();
  }
}

function renderDebugRecordingSvgIcon(name) {
  const icons = {
    activity: '<svg viewBox="0 0 24 24" focusable="false"><path d="M3 12h4l2-7 4 14 2-7h6"/></svg>',
    status: '<svg viewBox="0 0 24 24" focusable="false"><circle cx="12" cy="12" r="4"/></svg>',
    clock: '<svg viewBox="0 0 24 24" focusable="false"><circle cx="12" cy="12" r="8"/><path d="M12 7v5l3 2"/></svg>',
    samples: '<svg viewBox="0 0 24 24" focusable="false"><path d="M4 16h3l2-7 4 9 2-5h5"/></svg>',
    changes: '<svg viewBox="0 0 24 24" focusable="false"><path d="M18 8a7 7 0 1 0 1 7"/><path d="M18 4v4h-4"/></svg>',
    file: '<svg viewBox="0 0 24 24" focusable="false"><path d="M7 3h7l4 4v14H7z"/><path d="M14 3v5h5"/></svg>',
    storage: '<svg viewBox="0 0 24 24" focusable="false"><ellipse cx="12" cy="6" rx="7" ry="3"/><path d="M5 6v6c0 1.7 3.1 3 7 3s7-1.3 7-3V6"/><path d="M5 12v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6"/></svg>',
    play: '<svg viewBox="0 0 24 24" focusable="false"><path d="M8 5v14l11-7z"/></svg>',
    stop: '<svg viewBox="0 0 24 24" focusable="false"><path d="M7 7h10v10H7z"/></svg>',
    download: '<svg viewBox="0 0 24 24" focusable="false"><path d="M12 4v10"/><path d="m8 10 4 4 4-4"/><path d="M5 19h14"/></svg>',
    copy: '<svg viewBox="0 0 24 24" focusable="false"><rect x="8" y="8" width="10" height="10" rx="2"/><path d="M6 14H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1"/></svg>',
    check: '<svg viewBox="0 0 24 24" focusable="false"><path d="m5 13 4 4L19 7"/></svg>',
    alert: '<svg viewBox="0 0 24 24" focusable="false"><path d="M12 8v5"/><path d="M12 17h.01"/><path d="M10.3 4.7 2.8 18a2 2 0 0 0 1.7 3h15a2 2 0 0 0 1.7-3L13.7 4.7a2 2 0 0 0-3.4 0z"/></svg>',
  };
  return icons[name] || icons.status;
}

function renderDebugRecordingIcon(name) {
  return `<span class="oq-debug-recording-icon" aria-hidden="true">${renderDebugRecordingSvgIcon(name)}</span>`;
}

function renderDebugRecordingButtonIcon(name) {
  return `<span class="oq-debug-recording-button-icon" aria-hidden="true">${renderDebugRecordingSvgIcon(name)}</span>`;
}

function getDebugRecordingColumnSchema() {
  return [...DEBUG_RECORDING_KEYS];
}

function getDebugRecordingUnits() {
  const units = [];
  DEBUG_RECORDING_KEYS.forEach((key, index) => {
    const payload = state.entities?.[key] || {};
    const uom = String(payload.uom ?? payload.unit_of_measurement ?? "").trim();
    if (uom) {
      units.push([index, uom]);
    }
  });
  return units;
}

function encodeDebugRecordingInitialValues(values) {
  if (!Array.isArray(values)) {
    return [];
  }
  return values
    .map((value, index) => (value === null ? null : [index, value]))
    .filter(Boolean);
}

function isDebugRecordingMissingValue(rawValue) {
  const value = String(rawValue ?? "").trim().toLowerCase();
  return !value || value === "unknown" || value === "unavailable" || value === "nan" || value === "invalid";
}

function roundDebugRecordingNumber(value, unit) {
  const normalizedUnit = String(unit || "").trim().toLowerCase();
  let decimals = 3;
  if (normalizedUnit === "w" || normalizedUnit === "l/h" || normalizedUnit === "s") {
    decimals = 0;
  } else if (normalizedUnit === "hz" || normalizedUnit === "%") {
    decimals = 1;
  } else if (normalizedUnit === "°c" || normalizedUnit === "c" || normalizedUnit === "k") {
    decimals = 2;
  }
  return Number(Number(value).toFixed(decimals));
}

function normalizeDebugRecordingValue(key) {
  const entity = ENTITY_DEFS[key];
  const payload = state.entities?.[key] || null;
  if (!entity || !payload) {
    return null;
  }

  if (entity.domain === "switch" || entity.domain === "binary_sensor") {
    return isEntityActive(key);
  }

  const rawValue = getEntityValue(key);
  if (isDebugRecordingMissingValue(rawValue)) {
    return null;
  }

  if (entity.domain === "sensor" || entity.domain === "number") {
    const numeric = parseLooseNumber(rawValue);
    if (Number.isFinite(numeric)) {
      const uom = String(payload.uom ?? payload.unit_of_measurement ?? "").trim();
      return roundDebugRecordingNumber(numeric, uom);
    }
  }

  return String(rawValue).trim();
}

function areDebugRecordingValuesEqual(left, right) {
  return Object.is(left, right);
}

function isDebugRecordingEventValue(key, value) {
  const domain = ENTITY_DEFS[key]?.domain || "";
  return domain === "switch" || domain === "binary_sensor" || domain === "select" || domain === "text_sensor" || typeof value === "string";
}

function addDebugRecordingEvents(elapsedSeconds, changes, previousValues, nextValues) {
  const events = Array.isArray(state.debugRecordingEvents) ? [...state.debugRecordingEvents] : [];
  changes.forEach(([index]) => {
    const key = DEBUG_RECORDING_KEYS[index];
    const nextValue = nextValues[index];
    if (!isDebugRecordingEventValue(key, nextValue)) {
      return;
    }
    events.push([elapsedSeconds, index, previousValues[index] ?? null, nextValue ?? null]);
  });
  state.debugRecordingEvents = events.slice(-DEBUG_RECORDING_EVENT_LIMIT);
}

function buildDebugRecordingSample() {
  const now = Date.now();
  const elapsedMs = state.debugRecordingStartedAt ? Math.max(0, now - Number(state.debugRecordingStartedAt)) : 0;
  const elapsedSeconds = Math.round(elapsedMs / 1000);
  const values = DEBUG_RECORDING_KEYS.map((key) => normalizeDebugRecordingValue(key));
  const hasInitial = Array.isArray(state.debugRecordingInitialValues);
  const previousValues = Array.isArray(state.debugRecordingLastValues)
    ? state.debugRecordingLastValues
    : values.map(() => null);
  const changes = [];

  values.forEach((value, index) => {
    if (!hasInitial) {
      return;
    }
    if (!areDebugRecordingValuesEqual(value, previousValues[index])) {
      changes.push([index, value]);
    }
  });

  if (!hasInitial) {
    state.debugRecordingInitialValues = values;
  } else if (changes.length > 0) {
    addDebugRecordingEvents(elapsedSeconds, changes, previousValues, values);
  }
  state.debugRecordingLastValues = values;

  return {
    seq: Number(state.debugRecordingSequence || 0) + 1,
    ts: now,
    sample: [elapsedSeconds, changes],
  };
}

function clearDebugRecordingTimer() {
  if (state.debugRecordingTimer) {
    window.clearTimeout(state.debugRecordingTimer);
    state.debugRecordingTimer = null;
  }
}

function clearDebugRecordingDevicePollTimer() {
  if (state.debugRecordingDevicePollTimer) {
    window.clearTimeout(state.debugRecordingDevicePollTimer);
    state.debugRecordingDevicePollTimer = null;
  }
}

function getDebugRecordingEndpoint(path) {
  return `${getBasePath()}/openquatt/debug-recording/${path}`;
}

function applyDebugRecordingDeviceStatus(payload) {
  const status = payload && typeof payload === "object" ? payload : {};
  state.debugRecordingDeviceStatus = status;
  state.debugRecordingActive = Boolean(status.active);
  state.debugRecordingStartedAt = status.active || Number(status.sample_count || 0) > 0
    ? Date.now() - Math.max(0, Number(status.elapsed_s || 0) * 1000)
    : 0;
  state.debugRecordingEndsAt = status.active
    ? Date.now() + Math.max(0, Number(status.remaining_s || 0) * 1000)
    : 0;
  state.debugRecordingLastSampleAt = Number(status.sample_count || 0) > 0 ? Date.now() : 0;
}

function applyDebugRecordingDeviceUnavailableStatus() {
  applyDebugRecordingDeviceStatus({
    ok: false,
    available: false,
    active: false,
    storage: "unavailable",
    interval_s: 0,
    duration_s: 0,
    elapsed_s: 0,
    remaining_s: 0,
    sample_count: 0,
    sample_capacity: 0,
    estimated_size: 0,
    buffer: "unavailable",
  });
}

async function fetchDebugRecordingDeviceStatus() {
  const response = await window.fetch(getDebugRecordingEndpoint("status"), {
    cache: "no-store",
    headers: { "Cache-Control": "no-store" },
  });
  if (!response.ok) {
    throw new Error(`HTTP ${response.status}`);
  }
  const payload = await response.json();
  applyDebugRecordingDeviceStatus(payload);
  return payload;
}

function scheduleDebugRecordingDeviceStatusPoll(delayMs = 2000) {
  clearDebugRecordingDevicePollTimer();
  if (!state.debugRecordingActive) {
    return;
  }
  state.debugRecordingDevicePollTimer = window.setTimeout(() => {
    void refreshDebugRecordingDeviceStatus({ silent: true });
  }, Math.max(0, Number(state.systemModal === "debug-recording" ? delayMs : 5000) || 0));
}

async function refreshDebugRecordingDeviceStatus(options = {}) {
  if (!options.silent) {
    state.debugRecordingBusy = true;
    state.debugRecordingError = "";
    render();
  }
  try {
    await fetchDebugRecordingDeviceStatus();
    if (!state.debugRecordingActive && options.silent) {
      state.debugRecordingNotice = "Debugopname is afgerond.";
    }
    scheduleDebugRecordingDeviceStatusPoll();
  } catch (error) {
    applyDebugRecordingDeviceUnavailableStatus();
    state.debugRecordingError = `Status kon niet worden opgehaald. ${error.message || String(error)}`;
  } finally {
    if (!options.silent) {
      state.debugRecordingBusy = false;
    }
    if (!options.silent || state.systemModal === "debug-recording") {
      render();
    } else {
      patchDebugRecordingHeaderStatus();
      patchDebugRecordingSettingsStatus();
    }
  }
}

function scheduleDebugRecordingSample(delayMs = DEBUG_RECORDING_SAMPLE_INTERVAL_MS) {
  clearDebugRecordingTimer();
  if (!state.debugRecordingActive) {
    return;
  }
  state.debugRecordingTimer = window.setTimeout(() => {
    void captureDebugRecordingSample();
  }, Math.max(0, Number(delayMs) || 0));
}

async function captureDebugRecordingSample() {
  if (!state.debugRecordingActive) {
    return;
  }
  if (state.debugRecordingBusy) {
    scheduleDebugRecordingSample(DEBUG_RECORDING_BUSY_RETRY_MS);
    return;
  }

  state.debugRecordingBusy = true;
  state.debugRecordingError = "";
  render();

  try {
    await refreshEntities(DEBUG_RECORDING_KEYS, "all", { concurrency: FAST_VIEW_ENTITY_REFRESH_CONCURRENCY });
    const sample = buildDebugRecordingSample();
    state.debugRecordingSequence = sample.seq;
    state.debugRecordingLastSampleAt = sample.ts;
    state.debugRecordingSamples = [...(state.debugRecordingSamples || []), sample.sample];
    if (Date.now() >= Number(state.debugRecordingEndsAt || 0)) {
      void stopDebugRecording({ completed: true });
      return;
    }
    scheduleDebugRecordingSample();
  } catch (error) {
    state.debugRecordingError = `Meting kon niet worden opgehaald. ${error.message || String(error)}`;
    scheduleDebugRecordingSample(DEBUG_RECORDING_SAMPLE_INTERVAL_MS);
  } finally {
    state.debugRecordingBusy = false;
    render();
  }
}

async function configureDebugRecordingDevice() {
  const chunks = buildBulkEntityChunks(DEBUG_RECORDING_KEYS, "state");
  let status = null;
  for (let index = 0; index < chunks.length; index += 1) {
    const response = await window.fetch(
      getDebugRecordingEndpoint(`configure?reset=${index === 0 ? "1" : "0"}`),
      {
        method: "POST",
        cache: "no-store",
        headers: {
          "Cache-Control": "no-store",
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: chunks[index].body,
      }
    );
    if (!response.ok) {
      throw new Error(`configuratie HTTP ${response.status}`);
    }
    status = await response.json();
  }

  if (Number(status?.entity_field_count || 0) !== DEBUG_RECORDING_KEYS.length) {
    throw new Error(`onvolledige debugset (${Number(status?.entity_field_count || 0)}/${DEBUG_RECORDING_KEYS.length})`);
  }
  return status;
}

async function startDebugRecording(durationMinutes) {
  const minutes = Math.max(1, Number(durationMinutes) || 15);
  clearDebugRecordingTimer();
  clearDebugRecordingDevicePollTimer();
  state.debugRecordingBusy = true;
  state.debugRecordingError = "";
  state.debugRecordingNotice = "";
  state.debugRecordingSamples = [];
  state.debugRecordingEvents = [];
  state.debugRecordingInitialValues = null;
  state.debugRecordingLastValues = null;
  state.debugRecordingDeviceBundle = null;
  state.debugRecordingLastSampleAt = 0;
  state.debugRecordingSequence = 0;
  render();
  try {
    await configureDebugRecordingDevice();
    const response = await window.fetch(getDebugRecordingEndpoint(`start?duration_s=${encodeURIComponent(minutes * 60)}`), {
      method: "POST",
      cache: "no-store",
      headers: { "Cache-Control": "no-store" },
    });
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }
    const payload = await response.json();
    applyDebugRecordingDeviceStatus(payload);
    scheduleDebugRecordingDeviceStatusPoll();
  } catch (error) {
    applyDebugRecordingDeviceUnavailableStatus();
    state.debugRecordingError = `Debugopname kon niet worden gestart. ${error.message || String(error)}`;
  } finally {
    state.debugRecordingBusy = false;
    render();
  }
}

async function stopDebugRecording(options = {}) {
  clearDebugRecordingTimer();
  clearDebugRecordingDevicePollTimer();
  state.debugRecordingBusy = true;
  state.debugRecordingError = "";
  render();
  try {
    const response = await window.fetch(getDebugRecordingEndpoint("stop"), {
      method: "POST",
      cache: "no-store",
      headers: { "Cache-Control": "no-store" },
    });
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }
    const payload = await response.json();
    applyDebugRecordingDeviceStatus(payload);
    state.debugRecordingNotice = options.completed ? "Debugopname is afgerond." : "Debugopname is gestopt.";
  } catch (error) {
    state.debugRecordingError = `Debugopname kon niet worden gestopt. ${error.message || String(error)}`;
  } finally {
    state.debugRecordingBusy = false;
    render();
  }
}

function trimDebugRecordingLogs(payload) {
  const entries = Array.isArray(payload?.entries) ? payload.entries : [];
  const enabled = typeof payload?.enabled === "boolean" ? payload.enabled : null;
  return {
    available: payload?.available === true,
    enabled,
    limit: DEBUG_RECORDING_LOG_LIMIT,
    truncated: entries.length > DEBUG_RECORDING_LOG_LIMIT,
    entries: entries.slice(-DEBUG_RECORDING_LOG_LIMIT),
    ...(payload?.error ? { error: payload.error } : {}),
  };
}

async function fetchDebugRecordingLogs() {
  if (typeof window.fetch !== "function") {
    return { available: false, entries: [], error: "fetch unavailable" };
  }
  try {
    await refreshEntities(["webServerLogHistoryEnabled"], "all", { concurrency: FAST_VIEW_ENTITY_REFRESH_CONCURRENCY });
  } catch (_error) {
    // Log history is optional; the recording itself should still export cleanly.
  }
  if (hasEntity("webServerLogHistoryEnabled") && !isEntityActive("webServerLogHistoryEnabled")) {
    return trimDebugRecordingLogs({
      available: false,
      enabled: false,
      entries: [],
    });
  }
  try {
    const response = await window.fetch(`${getBasePath()}/openquatt/logs/recent`, {
      cache: "no-store",
      headers: { "Cache-Control": "no-store" },
    });
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }
    const payload = await response.json();
    return trimDebugRecordingLogs({
      available: true,
      enabled: payload?.enabled !== false,
      entries: Array.isArray(payload?.entries) ? payload.entries : [],
    });
  } catch (error) {
    return trimDebugRecordingLogs({
      available: false,
      enabled: null,
      entries: [],
      error: error.message || String(error),
    });
  }
}

function buildDebugRecordingCorePayload(extra = {}) {
  const endedAt = state.debugRecordingActive ? Date.now() : Number(state.debugRecordingLastSampleAt || Date.now());
  return {
    format: "openquatt-debug-v2",
    schema_version: 2,
    kind: "openquatt_debug_recording",
    encoding: "column-delta-json-v2",
    exported_at: new Date().toISOString(),
    source: extra.source || {},
    recording: {
      started_at: state.debugRecordingStartedAt ? new Date(Number(state.debugRecordingStartedAt)).toISOString() : "",
      ended_at: endedAt ? new Date(endedAt).toISOString() : "",
      active: Boolean(state.debugRecordingActive),
      duration_s: state.debugRecordingStartedAt ? Math.round(Math.max(0, endedAt - Number(state.debugRecordingStartedAt)) / 1000) : 0,
      interval_s: Math.round(DEBUG_RECORDING_SAMPLE_INTERVAL_MS / 1000),
      sample_count: getDebugRecordingSampleCount(),
      column_count: DEBUG_RECORDING_KEYS.length,
      storage: "browser",
    },
    columns: getDebugRecordingColumnSchema(),
    units: getDebugRecordingUnits(),
    initial: encodeDebugRecordingInitialValues(state.debugRecordingInitialValues),
    samples: state.debugRecordingSamples || [],
    events: state.debugRecordingEvents || [],
    ...(extra.logs ? { logs: extra.logs } : {}),
  };
}

async function buildDebugRecordingBundle() {
  if (state.debugRecordingDeviceBundle) {
    return state.debugRecordingDeviceBundle;
  }
  const logs = await fetchDebugRecordingLogs();
  const source = getDebugRecordingSourceMeta();

  return buildDebugRecordingCorePayload({ source, logs });
}

function getDebugRecordingCompactJson(payload) {
  return JSON.stringify(payload);
}

function getDebugRecordingEstimatedBytes() {
  const estimated = Number(state.debugRecordingDeviceStatus?.estimated_size || 0);
  if (estimated > 0) {
    return estimated;
  }
  try {
    return new Blob([getDebugRecordingCompactJson(buildDebugRecordingCorePayload())]).size;
  } catch (_error) {
    return getDebugRecordingCompactJson(buildDebugRecordingCorePayload()).length;
  }
}

function getDebugRecordingSourceMeta() {
  const releaseChannel = String(getEntityValue("releaseChannelText") || "").trim();
  const updateChannel = String(getEntityValue("firmwareUpdateChannel") || "").trim();
  return {
    device: getFirmwareDeviceLabel(),
    installation: getInstallationLabel(),
    topology: typeof getInstallationTopology === "function" ? getInstallationTopology() : "",
    firmware_version: getFirmwareCurrentVersion(),
    firmware_channel: releaseChannel || updateChannel,
    firmware_update_channel: updateChannel || releaseChannel,
  };
}

function formatDebugRecordingBytes(bytes) {
  const value = Math.max(0, Number(bytes) || 0);
  if (value >= 1024 * 1024) {
    return `${(value / 1024 / 1024).toFixed(1)} MB`;
  }
  if (value >= 1024) {
    return `${(value / 1024).toFixed(1)} kB`;
  }
  return `${Math.round(value)} B`;
}

function downloadDebugRecordingTextFile(filename, text) {
  const blob = new Blob([text], { type: "application/json" });
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

function getDebugRecordingFilename(bundle) {
  const exportedAt = bundle?.exported_at || (bundle?.exported_at_ms ? new Date(Number(bundle.exported_at_ms)).toISOString() : new Date().toISOString());
  const stamp = String(exportedAt)
    .replace(/[:.]/g, "-")
    .replace(/T/, "_")
    .replace(/Z$/, "Z");
  const installation = String(bundle?.source?.installation || "OpenQuatt").replace(/\s+/g, "-").toLowerCase();
  return `${installation}-debug-recording-${stamp}.oqdebug.json`;
}

async function downloadDebugRecordingBundle() {
  if (getDebugRecordingSampleCount() === 0) {
    state.debugRecordingError = "Er is nog geen debugopname om te downloaden.";
    render();
    return;
  }
  state.debugRecordingBusy = true;
  state.debugRecordingError = "";
  render();
  try {
    const response = await window.fetch(getDebugRecordingEndpoint("download"), {
      cache: "no-store",
      headers: { "Cache-Control": "no-store" },
    });
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }
    const bundle = await response.json();
    state.debugRecordingDeviceBundle = bundle;
    downloadDebugRecordingTextFile(getDebugRecordingFilename(bundle), getDebugRecordingCompactJson(bundle));
    acknowledgeDebugRecording(bundle);
    state.debugRecordingNotice = "Supportbestand gedownload.";
  } catch (error) {
    state.debugRecordingError = "Download mislukt. Probeer opnieuw of kopieer de data.";
  } finally {
    state.debugRecordingBusy = false;
    render();
  }
}

async function copyDebugRecordingBundle() {
  if (getDebugRecordingSampleCount() === 0) {
    state.debugRecordingError = "Er is nog geen debugopname om te kopiëren.";
    render();
    return;
  }
  state.debugRecordingBusy = true;
  state.debugRecordingError = "";
  render();
  try {
    const response = await window.fetch(getDebugRecordingEndpoint("download"), {
      cache: "no-store",
      headers: { "Cache-Control": "no-store" },
    });
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }
    const bundle = await response.json();
    state.debugRecordingDeviceBundle = bundle;
    const copied = await copyTextToClipboard(getDebugRecordingCompactJson(bundle));
    if (!copied) {
      throw new Error("Kopiëren naar het klembord is niet gelukt.");
    }
    acknowledgeDebugRecording(bundle);
    state.debugRecordingNotice = "Supportbestand gekopieerd.";
  } catch (error) {
    state.debugRecordingError = "Kopiëren mislukt. Probeer opnieuw of download het supportbestand.";
  } finally {
    state.debugRecordingBusy = false;
    render();
  }
}

function renderDebugRecordingModal() {
  const active = state.debugRecordingActive;
  const sampleCount = getDebugRecordingSampleCount();
  const busy = state.debugRecordingBusy;
  const estimatedSize = formatDebugRecordingBytes(getDebugRecordingEstimatedBytes());
  const eventCount = Array.isArray(state.debugRecordingDeviceBundle?.events)
    ? state.debugRecordingDeviceBundle.events.length
    : Array.isArray(state.debugRecordingEvents) ? state.debugRecordingEvents.length : 0;
  const selectedMinutes = getDebugRecordingSelectedMinutes();
  const remainingMs = getDebugRecordingRemainingMs();
  const progressPercent = getDebugRecordingProgressPercent();
  const hasRecording = sampleCount > 0;
  const progressWidth = `${progressPercent.toFixed(1)}%`;
  const stats = [
    { icon: "status", label: "Status", value: getDebugRecordingStatusLabel() },
    { icon: "clock", label: "Duur", value: formatDebugRecordingDuration(getDebugRecordingDurationMs()) },
    { icon: "samples", label: "Samples", value: String(sampleCount) },
    { icon: "changes", label: "Statuswijzigingen", value: String(eventCount) },
    { icon: "file", label: "Geschatte grootte", value: `± ${estimatedSize}` },
    { icon: "storage", label: "Opslag", value: state.debugRecordingDeviceStatus?.available === false ? "Niet beschikbaar" : "Apparaatgeheugen" },
  ];
  const feedback = state.debugRecordingError
    ? { kind: "error", icon: "alert", text: state.debugRecordingError }
    : state.debugRecordingNotice
      ? { kind: "success", icon: "check", text: state.debugRecordingNotice }
      : null;
  return `
    <div class="oq-helper-modal-backdrop${state.overviewTheme === "dark" ? " oq-helper-modal-backdrop--dark" : ""}" data-oq-modal="system">
      <section class="oq-helper-modal oq-debug-recording-modal" role="dialog" aria-modal="true" aria-labelledby="oq-debug-recording-modal-title">
        <div class="oq-helper-modal-head">
          <div>
            <p class="oq-helper-modal-kicker">Diagnostiek</p>
            <h2 class="oq-helper-modal-title" id="oq-debug-recording-modal-title">Debugopname</h2>
          </div>
          <button class="oq-helper-modal-close" type="button" data-oq-action="close-system-modal" aria-label="Sluit debugopname">×</button>
        </div>
        <p class="oq-helper-modal-copy">${escapeHtml(getDebugRecordingStatusCopy())}</p>
        <section class="oq-debug-recording-card" aria-label="Opname">
          <div class="oq-debug-recording-card-head">
            <span class="oq-debug-recording-heading-icon" aria-hidden="true">${renderDebugRecordingSvgIcon("activity")}</span>
            <h3>Opname</h3>
          </div>
          ${active ? `
            <div class="oq-debug-recording-progress">
              <div class="oq-debug-recording-progress-head">
                <span>Nog ${escapeHtml(formatDebugRecordingDuration(remainingMs))}</span>
                <strong>${escapeHtml(Math.round(progressPercent).toString())}%</strong>
              </div>
              <div class="oq-debug-recording-progress-track" aria-hidden="true">
                <span class="oq-debug-recording-progress-fill" style="width: ${escapeHtml(progressWidth)}"></span>
              </div>
            </div>
          ` : ""}
          <dl class="oq-debug-recording-stats">
            ${stats.map((item) => `
              <div class="oq-debug-recording-stat">
                <dt>${renderDebugRecordingIcon(item.icon)}${escapeHtml(item.label)}</dt>
                <dd>${escapeHtml(item.value)}</dd>
              </div>
            `).join("")}
          </dl>
        </section>
        <section class="oq-debug-recording-duration" aria-label="Duur">
          <h3>Duur</h3>
          <div class="oq-debug-recording-segments" role="group" aria-label="Kies opnameduur">
            ${DEBUG_RECORDING_DURATION_OPTIONS.map((option) => {
              const selected = Number(option.minutes) === selectedMinutes;
              return `
                <button
                  class="oq-debug-recording-segment${selected ? " oq-debug-recording-segment--selected" : ""}"
                  type="button"
                  data-oq-action="select-debug-recording-duration"
                  data-debug-minutes="${option.minutes}"
                  aria-pressed="${selected ? "true" : "false"}"
                  ${active || busy ? "disabled" : ""}
                >
                  ${escapeHtml(option.label)}
                </button>
              `;
            }).join("")}
          </div>
        </section>
        <div class="oq-debug-recording-actions">
          ${active ? `
            <button class="oq-helper-button oq-helper-button--warning oq-debug-recording-primary" type="button" data-oq-action="stop-debug-recording" ${busy ? "disabled" : ""}>${renderDebugRecordingButtonIcon("stop")}Stop opname</button>
          ` : `
            <button class="oq-helper-button oq-helper-button--primary oq-debug-recording-primary" type="button" data-oq-action="start-debug-recording" data-debug-minutes="${selectedMinutes}" ${busy || state.debugRecordingDeviceStatus?.available === false ? "disabled" : ""}>${renderDebugRecordingButtonIcon("play")}Start opname</button>
          `}
          <button class="oq-helper-button oq-helper-button--ghost" type="button" data-oq-action="download-debug-recording" ${!hasRecording || busy ? "disabled" : ""}>${renderDebugRecordingButtonIcon("download")}Download supportbestand</button>
          <button class="oq-helper-button oq-helper-button--ghost" type="button" data-oq-action="copy-debug-recording" ${!hasRecording || busy ? "disabled" : ""}>${renderDebugRecordingButtonIcon("copy")}Kopieer data</button>
          ${feedback ? `
            <p class="oq-debug-recording-feedback oq-debug-recording-feedback--${feedback.kind}" role="status">
              ${renderDebugRecordingButtonIcon(feedback.icon)}
              <span>${escapeHtml(feedback.text)}</span>
            </p>
          ` : ""}
        </div>
      </section>
    </div>
  `;
}
