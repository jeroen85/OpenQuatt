function getDebugRecordingSampleCount() {
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
  if (!state.debugRecordingStartedAt) {
    return 0;
  }
  const endAt = state.debugRecordingActive ? Date.now() : Number(state.debugRecordingLastSampleAt || Date.now());
  return Math.max(0, endAt - Number(state.debugRecordingStartedAt || endAt));
}

function getDebugRecordingStatusLabel() {
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
    return "De opname loopt in browsergeheugen. Download het supportbestand na afloop.";
  }
  if (getDebugRecordingSampleCount() > 0) {
    return "De opname is klaar. Download het supportbestand en voeg dit toe aan je supportverzoek.";
  }
  return "Neem tijdelijk supportgegevens op voor analyse. Alleen gewijzigde waarden worden lokaal in de browser opgeslagen. Er wordt niets automatisch verzonden.";
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
  if (!state.debugRecordingActive) {
    return 0;
  }
  return Math.max(0, Number(state.debugRecordingEndsAt || 0) - Date.now());
}

function getDebugRecordingProgressPercent() {
  if (!state.debugRecordingActive || !state.debugRecordingStartedAt || !state.debugRecordingEndsAt) {
    return getDebugRecordingSampleCount() > 0 ? 100 : 0;
  }
  const totalMs = Math.max(1, Number(state.debugRecordingEndsAt) - Number(state.debugRecordingStartedAt));
  const elapsedMs = Math.max(0, Date.now() - Number(state.debugRecordingStartedAt));
  return Math.max(0, Math.min(100, (elapsedMs / totalMs) * 100));
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
  if (!state.debugRecordingActive || state.debugRecordingBusy) {
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
      stopDebugRecording({ completed: true });
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

function startDebugRecording(durationMinutes) {
  const minutes = Math.max(1, Number(durationMinutes) || 15);
  const now = Date.now();
  clearDebugRecordingTimer();
  state.debugRecordingActive = true;
  state.debugRecordingStartedAt = now;
  state.debugRecordingEndsAt = now + minutes * 60 * 1000;
  state.debugRecordingSamples = [];
  state.debugRecordingEvents = [];
  state.debugRecordingInitialValues = null;
  state.debugRecordingLastValues = null;
  state.debugRecordingError = "";
  state.debugRecordingNotice = "";
  state.debugRecordingLastSampleAt = 0;
  state.debugRecordingSequence = 0;
  render();
  scheduleDebugRecordingSample(0);
}

function stopDebugRecording(options = {}) {
  clearDebugRecordingTimer();
  const wasActive = state.debugRecordingActive;
  state.debugRecordingActive = false;
  state.debugRecordingEndsAt = 0;
  if (wasActive || options.completed) {
    state.debugRecordingNotice = options.completed
      ? "Debugopname is afgerond."
      : "Debugopname is gestopt.";
  }
  render();
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
  const logs = await fetchDebugRecordingLogs();
  const source = typeof getSettingsBackupSourceMeta === "function"
    ? getSettingsBackupSourceMeta()
    : {
      device: getFirmwareDeviceLabel(),
      installation: getInstallationLabel(),
      topology: typeof getInstallationTopology === "function" ? getInstallationTopology() : "",
      firmware_version: getFirmwareCurrentVersion(),
    };

  return buildDebugRecordingCorePayload({ source, logs });
}

function getDebugRecordingCompactJson(payload) {
  return JSON.stringify(payload);
}

function getDebugRecordingEstimatedBytes() {
  try {
    return new Blob([getDebugRecordingCompactJson(buildDebugRecordingCorePayload())]).size;
  } catch (_error) {
    return getDebugRecordingCompactJson(buildDebugRecordingCorePayload()).length;
  }
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
  const stamp = String(bundle?.exported_at || new Date().toISOString())
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
    const bundle = await buildDebugRecordingBundle();
    downloadDebugRecordingTextFile(getDebugRecordingFilename(bundle), getDebugRecordingCompactJson(bundle));
    state.debugRecordingNotice = "Supportbestand gedownload.";
  } catch (error) {
    state.debugRecordingError = `Download mislukt. ${error.message || String(error)}`;
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
    const bundle = await buildDebugRecordingBundle();
    const copied = await copyTextToClipboard(getDebugRecordingCompactJson(bundle));
    if (!copied) {
      throw new Error("Kopiëren naar het klembord is niet gelukt.");
    }
    state.debugRecordingNotice = "Supportbestand gekopieerd.";
  } catch (error) {
    state.debugRecordingError = `Kopiëren mislukt. ${error.message || String(error)}`;
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
  const eventCount = Array.isArray(state.debugRecordingEvents) ? state.debugRecordingEvents.length : 0;
  const selectedMinutes = getDebugRecordingSelectedMinutes();
  const remainingMs = getDebugRecordingRemainingMs();
  const progressPercent = getDebugRecordingProgressPercent();
  const hasRecording = sampleCount > 0;
  const progressWidth = `${progressPercent.toFixed(1)}%`;
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
            <span class="oq-debug-recording-pulse" aria-hidden="true"></span>
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
            <div class="oq-debug-recording-stat">
              <dt><span class="oq-debug-recording-icon" aria-hidden="true">•</span>Status</dt>
              <dd>${escapeHtml(getDebugRecordingStatusLabel())}</dd>
            </div>
            <div class="oq-debug-recording-stat">
              <dt><span class="oq-debug-recording-icon" aria-hidden="true">T</span>Duur</dt>
              <dd>${escapeHtml(formatDebugRecordingDuration(getDebugRecordingDurationMs()))}</dd>
            </div>
            <div class="oq-debug-recording-stat">
              <dt><span class="oq-debug-recording-icon" aria-hidden="true">S</span>Samples</dt>
              <dd>${escapeHtml(String(sampleCount))}</dd>
            </div>
            <div class="oq-debug-recording-stat">
              <dt><span class="oq-debug-recording-icon" aria-hidden="true">Δ</span>Statuswijzigingen</dt>
              <dd>${escapeHtml(String(eventCount))}</dd>
            </div>
            <div class="oq-debug-recording-stat">
              <dt><span class="oq-debug-recording-icon" aria-hidden="true">B</span>Geschatte grootte</dt>
              <dd>${escapeHtml(`± ${estimatedSize}`)}</dd>
            </div>
            <div class="oq-debug-recording-stat">
              <dt><span class="oq-debug-recording-icon" aria-hidden="true">O</span>Opslag</dt>
              <dd>Browser</dd>
            </div>
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
            <button class="oq-helper-button oq-helper-button--warning oq-debug-recording-primary" type="button" data-oq-action="stop-debug-recording" ${busy ? "disabled" : ""}>Stop opname</button>
          ` : `
            <button class="oq-helper-button oq-helper-button--primary oq-debug-recording-primary" type="button" data-oq-action="start-debug-recording" data-debug-minutes="${selectedMinutes}" ${busy ? "disabled" : ""}>Start opname</button>
          `}
          <button class="oq-helper-button oq-helper-button--ghost" type="button" data-oq-action="download-debug-recording" ${!hasRecording || busy ? "disabled" : ""}>Download supportbestand</button>
          <button class="oq-helper-button oq-helper-button--ghost" type="button" data-oq-action="copy-debug-recording" ${!hasRecording || busy ? "disabled" : ""}>Kopieer data</button>
        </div>
        ${state.debugRecordingError ? `<p class="oq-settings-action-note oq-settings-action-note--warning">${escapeHtml(state.debugRecordingError)}</p>` : ""}
        ${state.debugRecordingNotice ? `<p class="oq-settings-action-note">${escapeHtml(state.debugRecordingNotice)}</p>` : ""}
      </section>
    </div>
  `;
}
