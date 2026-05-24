const WEB_SERVER_LOG_MAX_ENTRIES = 250;

function getWebServerLogDemoEntries() {
  if (typeof window === "undefined") {
    return [];
  }

  const source = window.__OQ_DEV_WEBSERVER_LOGS__;
  const values = typeof source === "function"
    ? source()
    : source;

  if (!Array.isArray(values)) {
    return [];
  }

  return values
    .map((entry) => String(entry || ""))
    .filter((entry) => entry.trim() !== "");
}

function isWebServerLogDemoMode() {
  if (typeof window === "undefined") {
    return false;
  }

  return window.location.protocol === "file:" && getWebServerLogDemoEntries().length > 0;
}

function getWebServerLogUrl() {
  return `${getBasePath()}/events`;
}

function getWebServerLogHistoryUrl() {
  return `${getBasePath()}/openquatt/logs/recent`;
}

function isWebServerLogHistoryEnabled() {
  const entity = state.entities?.webServerLogHistoryEnabled;
  if (!entity) {
    return true;
  }
  if (typeof entity.value === "boolean") {
    return entity.value;
  }
  const raw = String(entity.state ?? entity.value ?? "").toLowerCase();
  return raw === "on" || raw === "true" || raw === "1";
}

function getWebServerLogStatusLabel() {
  if (state.nativeOpen) {
    return "Niet beschikbaar";
  }
  if (isWebServerLogDemoMode()) {
    return "Voorbeeld";
  }
  if (state.webServerLogEnabled === false) {
    return "Niet beschikbaar";
  }
  return "Beschikbaar";
}

function formatWebServerLogDuration(value) {
  const totalSeconds = Math.max(0, Math.floor(Number(value) / 1000));
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

function formatWebServerLogDateTime(value) {
  const numeric = Number(value) || 0;
  if (numeric > 946684800000) {
    const date = value instanceof Date ? value : new Date(numeric);
    const options = {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    };
    try {
      return new Intl.DateTimeFormat("nl-NL", options).format(date);
    } catch (_error) {
      return date.toLocaleString("nl-NL", options);
    }
  }

  return formatWebServerLogDuration(numeric);
}

function getWebServerLogTimeTooltip(value) {
  const numeric = Number(value) || 0;
  if (numeric > 946684800000) {
    return new Date(numeric).toLocaleString("nl-NL", {
      day: "numeric",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
  }

  const totalSeconds = Math.max(0, Math.floor(numeric / 1000));
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  return `Sinds opstart: ${hours}u ${minutes}m ${seconds}s`;
}

function getWebServerLogHistoryStatusLabel() {
  if (state.nativeOpen) {
    return "Niet beschikbaar";
  }
  if (isWebServerLogDemoMode()) {
    return isWebServerLogHistoryEnabled() ? "Voorbeeld buffer aan" : "Voorbeeld buffer uit";
  }
  return isWebServerLogHistoryEnabled() ? "Buffer aan" : "Buffer uit";
}

function getWebServerLogHistoryInfoCopy() {
  if (!isWebServerLogHistoryEnabled()) {
    return "Geen tijdelijke buffer in RAM. De viewer toont alleen live /events.";
  }

  return "Slaat de laatste firmwarelogs tijdelijk op in RAM. De viewer leest die buffer bij openen en blijft daarna live /events volgen.";
}

function getWebServerLoggerLevelEntity() {
  return state.entities?.debugLevel || null;
}

function getWebServerLoggerLevelOptions(entity = getWebServerLoggerLevelEntity()) {
  const options = Array.isArray(entity?.option)
    ? entity.option
    : Array.isArray(entity?.options)
      ? entity.options
      : [];
  return options.length ? options : ["NONE", "ERROR", "WARN", "INFO", "CONFIG", "DEBUG"];
}

function getWebServerLoggerLevelValue(entity = getWebServerLoggerLevelEntity()) {
  const value = String(entity?.value ?? entity?.state ?? "").trim();
  const options = getWebServerLoggerLevelOptions(entity);
  return options.includes(value) ? value : (options.includes("INFO") ? "INFO" : options[0] || "");
}

function getWebServerLogEntryKey(entry) {
  if (!entry || typeof entry !== "object") {
    return "";
  }
  if (Number.isFinite(Number(entry.seq))) {
    return `seq:${Number(entry.seq)}`;
  }
  const raw = String(entry.raw ?? entry.text ?? "").trim();
  const receivedAt = Number(entry.receivedAt ?? entry.ts ?? 0);
  return raw ? `raw:${raw}:${Math.round(receivedAt / 1000)}` : "";
}

function isDuplicateWebServerLogEntry(candidate, existingEntry = null) {
  if (!candidate || !existingEntry) {
    return false;
  }

  const candidateSeq = Number(candidate.seq);
  const existingSeq = Number(existingEntry.seq);
  if (Number.isFinite(candidateSeq) && Number.isFinite(existingSeq) && candidateSeq === existingSeq) {
    return true;
  }

  const candidateRaw = String(candidate.raw ?? candidate.text ?? "").trim();
  const existingRaw = String(existingEntry.raw ?? existingEntry.text ?? "").trim();
  if (!candidateRaw || candidateRaw !== existingRaw) {
    return false;
  }

  const candidateReceivedAt = Number(candidate.receivedAt ?? candidate.ts ?? 0);
  const existingReceivedAt = Number(existingEntry.receivedAt ?? existingEntry.ts ?? 0);
  return Math.abs(candidateReceivedAt - existingReceivedAt) <= 2000;
}

function compareWebServerLogEntries(left, right) {
  const leftTime = Number(left.receivedAt ?? left.ts ?? 0);
  const rightTime = Number(right.receivedAt ?? right.ts ?? 0);
  if (leftTime !== rightTime) {
    return leftTime - rightTime;
  }

  const leftSeq = Number(left.seq ?? 0);
  const rightSeq = Number(right.seq ?? 0);
  if (leftSeq !== rightSeq) {
    return leftSeq - rightSeq;
  }

  return String(left.raw ?? "").localeCompare(String(right.raw ?? ""));
}

function mergeWebServerLogEntries(entries, { prepend = false } = {}) {
  if (!Array.isArray(entries) || entries.length === 0) {
    return;
  }

  const merged = prepend
    ? [...entries, ...state.webServerLogEntries]
    : [...state.webServerLogEntries, ...entries];
  merged.sort(compareWebServerLogEntries);

  const deduped = [];
  for (const entry of merged) {
    const previous = deduped[deduped.length - 1] || null;
    if (!isDuplicateWebServerLogEntry(entry, previous)) {
      deduped.push(entry);
    }
  }

  state.webServerLogEntries = deduped.slice(-WEB_SERVER_LOG_MAX_ENTRIES);
}

function createWebServerLogEntry(raw, options = {}) {
  const text = stripAnsiSequences(raw).trimEnd();
  const receivedAt = Number(options.receivedAt);
  const seq = Number(options.seq);
  return {
    raw,
    text,
    tone: getWebServerLogTone(raw),
    receivedAt: Number.isFinite(receivedAt) ? receivedAt : Date.now(),
    seq: Number.isFinite(seq) ? seq : undefined,
  };
}

function getDemoLogReceivedAt(index, total) {
  const spacingMs = 90 * 1000;
  const offset = Math.max(0, total - index - 1) * spacingMs;
  return Date.now() - offset;
}

function seedWebServerLogDemoEntries() {
  const entries = getWebServerLogDemoEntries();
  const total = entries.length;
  return entries.map((entry, index) => createWebServerLogEntry(entry, {
    receivedAt: getDemoLogReceivedAt(index, total),
    seq: index + 1,
  }));
}

function scrollWebServerLogToBottom() {
  const scroller = getWebServerLogScrollerElement();
  if (!scroller) {
    return;
  }
  scroller.scrollTop = scroller.scrollHeight;
}

function captureWebServerLogScrollState() {
  const scroller = getWebServerLogScrollerElement();
  if (!scroller) {
    return null;
  }

  return {
    scrollHeight: scroller.scrollHeight,
    scrollTop: scroller.scrollTop,
    stickToBottom: isWebServerLogScrollerNearBottom(scroller),
  };
}

function restoreWebServerLogScrollState(scrollState) {
  if (!scrollState) {
    return;
  }

  const scroller = getWebServerLogScrollerElement();
  if (!scroller) {
    return;
  }

  if (scrollState.stickToBottom) {
    scroller.scrollTop = scroller.scrollHeight;
    return;
  }

  const restoredScrollTop = scrollState.scrollTop + (scroller.scrollHeight - scrollState.scrollHeight);
  scroller.scrollTop = Math.max(0, restoredScrollTop);
}

function queueWebServerLogScrollRestore(scrollState, defer = true) {
  if (!scrollState) {
    return;
  }

  const restoreToken = Number(state.webServerLogScrollRestoreToken || 0) + 1;
  state.webServerLogScrollRestoreToken = restoreToken;
  const applyScrollState = () => {
    if (state.webServerLogScrollRestoreToken !== restoreToken || state.systemModal !== "webserver-logs") {
      return;
    }
    restoreWebServerLogScrollState(scrollState);
  };

  if (defer) {
    window.requestAnimationFrame(applyScrollState);
    return;
  }

  applyScrollState();
}

function getCm100CommissioningModalScrollerElement() {
  if (!state.root) {
    return null;
  }
  return state.root.querySelector("[data-oq-cm100-commissioning-scroller]");
}

function captureCm100CommissioningScrollState() {
  const scroller = getCm100CommissioningModalScrollerElement();
  if (!scroller) {
    return null;
  }

  return {
    scrollHeight: scroller.scrollHeight,
    scrollTop: scroller.scrollTop,
    stickToBottom: isWebServerLogScrollerNearBottom(scroller),
  };
}

function restoreCm100CommissioningScrollState(scrollState) {
  if (!scrollState) {
    return;
  }

  const scroller = getCm100CommissioningModalScrollerElement();
  if (!scroller) {
    return;
  }

  if (scrollState.stickToBottom) {
    scroller.scrollTop = scroller.scrollHeight;
    return;
  }

  const restoredScrollTop = scrollState.scrollTop + (scroller.scrollHeight - scrollState.scrollHeight);
  scroller.scrollTop = Math.max(0, restoredScrollTop);
}

function queueCm100CommissioningScrollRestore(scrollState, defer = true) {
  if (!scrollState) {
    return;
  }

  const restoreToken = Number(state.cm100CommissioningScrollRestoreToken || 0) + 1;
  state.cm100CommissioningScrollRestoreToken = restoreToken;
  const applyScrollState = () => {
    if (state.cm100CommissioningScrollRestoreToken !== restoreToken || state.systemModal !== "cm100-commissioning") {
      return;
    }
    restoreCm100CommissioningScrollState(scrollState);
  };

  if (defer) {
    window.requestAnimationFrame(applyScrollState);
    return;
  }

  applyScrollState();
}

async function refreshWebServerLogHistory(options = {}) {
  if (state.nativeOpen || typeof window.fetch !== "function") {
    return;
  }

  const scrollState = options.scrollState || captureWebServerLogScrollState();
  const requestToken = Number(state.webServerLogHistoryRequestToken || 0) + 1;
  state.webServerLogHistoryRequestToken = requestToken;
  state.webServerLogHistoryLoading = true;
  state.webServerLogHistoryError = "";

  try {
    const response = await window.fetch(getWebServerLogHistoryUrl(), {
      headers: {
        "Cache-Control": "no-store",
      },
    });
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    const payload = await response.json();
    if (state.systemModal !== "webserver-logs" || state.webServerLogHistoryRequestToken !== requestToken) {
      return;
    }

    const recentEntries = normalizeRecentWebServerLogPayload(payload);
    state.webServerLogHistoryLoaded = true;
    if (recentEntries.length > 0) {
      mergeWebServerLogEntries(recentEntries, { prepend: true });
      state.webServerLogRecentTail = recentEntries.slice(-4).map((entry) => String(entry.raw ?? entry.text ?? ""));
      state.webServerLogRecentAnchorAt = Date.now();
    }
  } catch (error) {
    if (state.systemModal === "webserver-logs" && state.webServerLogHistoryRequestToken === requestToken) {
      state.webServerLogHistoryError = error instanceof Error ? error.message : "Recente logs konden niet worden opgehaald.";
    }
  } finally {
    if (state.webServerLogHistoryRequestToken === requestToken) {
      state.webServerLogHistoryLoading = false;
    }
    if (state.systemModal === "webserver-logs" && state.webServerLogHistoryRequestToken === requestToken) {
      render();
      queueWebServerLogScrollRestore(scrollState);
    }
  }
}

function normalizeRecentWebServerLogEntry(entry, fallbackSeq = 0) {
  if (!entry || typeof entry !== "object") {
    return null;
  }

  const raw = String(entry.raw ?? "").trim() || String(entry.message ?? "").trim();
  if (!raw) {
    return null;
  }

  return createWebServerLogEntry(raw, {
    receivedAt: Number(entry.ts ?? entry.timestamp_ms ?? entry.receivedAt ?? Date.now()),
    seq: Number(entry.seq ?? fallbackSeq),
  });
}

function normalizeRecentWebServerLogPayload(payload) {
  if (!payload || typeof payload !== "object") {
    return [];
  }

  if (payload.enabled === false) {
    return [];
  }

  const entries = Array.isArray(payload.entries) ? payload.entries : [];
  return entries
    .map((entry, index) => normalizeRecentWebServerLogEntry(entry, index + 1))
    .filter((entry) => entry !== null);
}

function shouldIgnoreLiveWebServerLogEntry(entry) {
  if (!entry || !Array.isArray(state.webServerLogRecentTail) || state.webServerLogRecentTail.length === 0) {
    return false;
  }

  const recentAgeMs = Date.now() - Number(state.webServerLogRecentAnchorAt || 0);
  if (recentAgeMs > 2500) {
    return false;
  }

  const raw = String(entry.raw ?? entry.text ?? "").trim();
  if (!raw) {
    return false;
  }

  return state.webServerLogRecentTail.includes(raw);
}

function hasWebServerLogEntry(candidate, entries = state.webServerLogEntries) {
  if (!candidate || !Array.isArray(entries) || entries.length === 0) {
    return false;
  }

  return entries.some((existing) => isDuplicateWebServerLogEntry(candidate, existing));
}

function openWebServerLogsModal() {
  if (isWebServerLogDemoMode() && state.webServerLogEntries.length === 0) {
    state.webServerLogEntries = seedWebServerLogDemoEntries();
  }
  state.webServerLogCopyMessage = "";
  state.webServerLogCopyError = "";
  state.systemModal = "webserver-logs";
  render();
  void refreshEntities(["webServerLogHistoryEnabled", "debugLevel"], "all", { forceFast: true }).then(() => {
    if (state.systemModal !== "webserver-logs") {
      return;
    }
    const scrollState = captureWebServerLogScrollState();
    render();
    queueWebServerLogScrollRestore(scrollState);
  });
  scrollWebServerLogToBottom();
  if (!state.webServerLogHistoryLoaded || state.webServerLogEntries.length === 0) {
    void refreshWebServerLogHistory();
  }
}

function clearWebServerLogOutput() {
  state.webServerLogEntries = [];
  state.webServerLogError = "";
  state.webServerLogHistoryError = "";
  state.webServerLogHistoryLoading = false;
  state.webServerLogHistoryLoaded = false;
  state.webServerLogScrollRestoreToken = Number(state.webServerLogScrollRestoreToken || 0) + 1;
  state.webServerLogCopyMessage = "";
  state.webServerLogCopyError = "";
  state.webServerLogHistoryRequestToken += 1;
  state.webServerLogRecentTail = [];
  state.webServerLogRecentAnchorAt = 0;
  if (state.systemModal === "webserver-logs") {
    render();
  }
}

function resetWebServerLogRecoveryState() {
  const scrollState = captureWebServerLogScrollState();
  closeWebServerLogStream();
  state.webServerLogEnabled = null;
  state.webServerLogConnected = false;
  clearWebServerLogOutput();
  if (state.systemModal === "webserver-logs") {
    void refreshWebServerLogHistory({ scrollState });
  }
}

function syncWebServerLogStream() {
  if (isWebServerLogDemoMode()) {
    closeWebServerLogStream();
    return;
  }

  const shouldConnect = state.mounted && !state.nativeOpen && state.systemModal === "webserver-logs";
  if (!shouldConnect) {
    closeWebServerLogStream();
    return;
  }

  if (state.webServerLogEnabled === false) {
    closeWebServerLogStream();
    return;
  }

  if (state.webServerLogSource) {
    return;
  }

  openWebServerLogStream();
}

function openWebServerLogStream() {
  if (isWebServerLogDemoMode()) {
    state.webServerLogEnabled = true;
    state.webServerLogConnected = false;
    state.webServerLogError = "";
    render();
    return;
  }

  if (typeof window.EventSource !== "function") {
    state.webServerLogEnabled = false;
    state.webServerLogConnected = false;
    state.webServerLogError = "Deze browser ondersteunt geen live logstream.";
    render();
    return;
  }

  try {
    const source = new window.EventSource(getWebServerLogUrl());
    state.webServerLogSource = source;
    source.addEventListener("open", handleWebServerLogOpen);
    source.addEventListener("ping", handleWebServerLogPing);
    source.addEventListener("log", handleWebServerLogMessage);
    source.onerror = handleWebServerLogError;
  } catch (error) {
    state.webServerLogEnabled = false;
    state.webServerLogConnected = false;
    state.webServerLogError = error instanceof Error ? error.message : "De live logstream kon niet worden geopend.";
    closeWebServerLogStream();
    render();
  }
}

function closeWebServerLogStream() {
  const source = state.webServerLogSource;
  if (source) {
    try {
      source.close();
    } catch (_error) {
      // Ignore close failures when the stream already stopped.
    }
  }
  state.webServerLogSource = null;
  state.webServerLogConnected = false;
}

function handleWebServerLogOpen() {
  if (!state.webServerLogSource || state.nativeOpen) {
    return;
  }

  const scrollState = state.systemModal === "webserver-logs"
    ? captureWebServerLogScrollState()
    : null;
  state.webServerLogEnabled = true;
  state.webServerLogConnected = true;
  state.webServerLogError = "";
  render();
  queueWebServerLogScrollRestore(scrollState);
}

function handleWebServerLogPing() {
  if (!state.webServerLogSource || state.nativeOpen) {
    return;
  }

  const scrollState = state.systemModal === "webserver-logs"
    ? captureWebServerLogScrollState()
    : null;
  state.webServerLogEnabled = true;
  if (!state.webServerLogConnected) {
    state.webServerLogConnected = true;
    state.webServerLogError = "";
    render();
    queueWebServerLogScrollRestore(scrollState);
  }
}

function handleWebServerLogError() {
  if (!state.webServerLogSource) {
    return;
  }

  const scrollState = state.systemModal === "webserver-logs"
    ? captureWebServerLogScrollState()
    : null;
  state.webServerLogEnabled = false;
  state.webServerLogConnected = false;
  state.webServerLogError = "De live logstream kon niet worden geopend.";
  closeWebServerLogStream();
  render();
  queueWebServerLogScrollRestore(scrollState);
}

function handleWebServerLogMessage(event) {
  if (!state.webServerLogSource || !event || typeof event.data !== "string") {
    return;
  }

  const scrollState = captureWebServerLogScrollState();
  const payload = normalizeWebServerLogPayload(event.data);
  if (!payload) {
    return;
  }

  const lines = payload.split(/\r?\n/).filter((line) => line.trim() !== "");
  if (lines.length === 0) {
    return;
  }

  const entries = lines.map((line) => createWebServerLogEntry(line));
  const filteredEntries = entries.filter((entry) => !shouldIgnoreLiveWebServerLogEntry(entry) && !hasWebServerLogEntry(entry));
  if (filteredEntries.length === 0) {
    return;
  }

  mergeWebServerLogEntries(filteredEntries);

  const output = getWebServerLogOutputElement();
  const scroller = getWebServerLogScrollerElement();

  trimWebServerLogEntries(output);
  appendWebServerLogEntriesToDom(filteredEntries, output);

  state.webServerLogEnabled = true;
  if (scroller && scrollState) {
    queueWebServerLogScrollRestore(scrollState, false);
  }
}

function normalizeWebServerLogPayload(raw) {
  const text = String(raw ?? "").replace(/\r\n/g, "\n").replace(/\r/g, "\n").trimEnd();
  if (!text) {
    return "";
  }

  const trimmed = text.trim();
  if ((trimmed.startsWith("{") && trimmed.endsWith("}")) || (trimmed.startsWith("[") && trimmed.endsWith("]"))) {
    try {
      const parsed = JSON.parse(trimmed);
      const candidate = typeof parsed === "string"
        ? parsed
        : parsed?.message
        ?? parsed?.msg
        ?? parsed?.text
        ?? parsed?.data
        ?? parsed?.payload
        ?? "";
      if (typeof candidate === "string" && candidate.trim()) {
        return candidate.replace(/\r\n/g, "\n").replace(/\r/g, "\n").trimEnd();
      }
    } catch (_error) {
      // Ignore JSON parse failures and fall back to the raw text payload.
    }
  }

  return text;
}

function stripAnsiSequences(value) {
  return String(value ?? "").replace(/\x1b\[[0-9;]*m/g, "");
}

function getWebServerLogTone(value) {
  const raw = String(value ?? "");
  const ansiMatches = Array.from(raw.matchAll(/\x1b\[([0-9;]*)m/g));
  for (let index = ansiMatches.length - 1; index >= 0; index -= 1) {
    const codes = ansiMatches[index][1]
      .split(";")
      .map((item) => Number(item))
      .filter((item) => Number.isFinite(item));
    for (let codeIndex = codes.length - 1; codeIndex >= 0; codeIndex -= 1) {
      const code = codes[codeIndex];
      if (code === 31 || code === 91) {
        return "error";
      }
      if (code === 33 || code === 93) {
        return "warning";
      }
      if (code === 32 || code === 92) {
        return "info";
      }
      if (code === 36 || code === 96 || code === 34 || code === 35) {
        return "debug";
      }
      if (code === 37 || code === 90 || code === 38 || code === 97) {
        return "verbose";
      }
    }
  }

  const severityMatch = raw.match(/\[(E|W|I|D|V|VV)\]/i);
  if (!severityMatch) {
    return "plain";
  }

  const severity = severityMatch[1].toUpperCase();
  if (severity === "E") {
    return "error";
  }
  if (severity === "W") {
    return "warning";
  }
  if (severity === "I") {
    return "info";
  }
  if (severity === "D") {
    return "debug";
  }
  return "verbose";
}

function trimWebServerLogEntries(output) {
  while (state.webServerLogEntries.length > WEB_SERVER_LOG_MAX_ENTRIES) {
    state.webServerLogEntries.shift();
    if (output && output.firstElementChild) {
      output.removeChild(output.firstElementChild);
    }
  }
}

function getWebServerLogOutputElement() {
  if (!state.root) {
    return null;
  }
  return state.root.querySelector("[data-oq-webserver-log-output]");
}

function getWebServerLogScrollerElement() {
  if (!state.root) {
    return null;
  }
  return state.root.querySelector("[data-oq-webserver-log-scroller]");
}

function isWebServerLogScrollerNearBottom(scroller) {
  if (!scroller) {
    return false;
  }
  const remaining = scroller.scrollHeight - scroller.scrollTop - scroller.clientHeight;
  return remaining < 48;
}

function appendWebServerLogEntriesToDom(entries, output) {
  if (!output || entries.length === 0) {
    return;
  }

  if (output.dataset.webServerLogEmpty === "true") {
    output.dataset.webServerLogEmpty = "false";
    output.innerHTML = "";
  }

  for (const entry of entries) {
    output.insertAdjacentHTML("beforeend", renderWebServerLogEntry(entry));
  }
}

function renderWebServerLogEntry(entry) {
  const timestamp = formatWebServerLogDateTime(entry.receivedAt);
  const fullTimestamp = getWebServerLogTimeTooltip(entry.receivedAt);
  return `
    <div class="oq-webserver-log-entry oq-webserver-log-entry--${escapeHtml(entry.tone)}">
      <time class="oq-webserver-log-entry-time" datetime="${escapeHtml(new Date(Number(entry.receivedAt) || Date.now()).toISOString())}" title="${escapeHtml(fullTimestamp)}">${escapeHtml(timestamp)}</time>
      <span class="oq-webserver-log-entry-text">${escapeHtml(entry.text || entry.raw || " ")}</span>
    </div>
  `;
}

function renderWebServerLogEntries(entries = state.webServerLogEntries) {
  if (!entries.length) {
    return `
      <p class="oq-webserver-log-empty">Nog geen logregels ontvangen. Open de log en wacht op een nieuwe melding.</p>
    `;
  }

  return entries.map((entry) => renderWebServerLogEntry(entry)).join("");
}

function renderWebServerLogStatusBanner() {
  const rows = [];
  if (state.webServerLogHistoryLoading) {
    rows.push(`<p class="oq-helper-modal-note">Recente firmwarelogs worden opgehaald...</p>`);
  }
  if (state.webServerLogCopyMessage) {
    rows.push(`
      <div class="oq-helper-modal-success oq-helper-modal-success--compact" aria-live="polite">
        <strong>Kopiëren</strong>
        <span>${escapeHtml(state.webServerLogCopyMessage)}</span>
      </div>
    `);
  }
  if (state.webServerLogCopyError) {
    rows.push(`<p class="oq-helper-modal-note oq-helper-modal-note--error">${escapeHtml(state.webServerLogCopyError)}</p>`);
  }
  if (state.webServerLogHistoryError) {
    rows.push(`<p class="oq-helper-modal-note oq-helper-modal-note--error">${escapeHtml(state.webServerLogHistoryError)}</p>`);
  }
  if (state.webServerLogError) {
    rows.push(`<p class="oq-helper-modal-note oq-helper-modal-note--error">${escapeHtml(state.webServerLogError)}</p>`);
  }

  if (!rows.length) {
    return "";
  }

  return rows.join("");
}

function renderWebServerLogHistoryControls() {
  const enabled = isWebServerLogHistoryEnabled();
  const busy = state.loadingEntities || state.busyAction === "switch-webServerLogHistoryEnabled";
  const label = getWebServerLogHistoryStatusLabel();
  const copy = getWebServerLogHistoryInfoCopy();
  const loggerLevelControl = renderWebServerLoggerLevelControl();

  return `
    <div class="oq-webserver-log-history-shell">
      <div class="oq-settings-system-row oq-settings-system-row--with-action" data-oq-diagnostics-row="webserverLogHistory">
        <div class="oq-settings-system-row-copy">
          <p class="oq-settings-system-row-label">RAM log history</p>
          <strong class="oq-settings-system-row-value">${escapeHtml(label)}</strong>
          <p class="oq-settings-system-row-note">${escapeHtml(copy)}</p>
        </div>
        <button
          class="oq-helper-button oq-helper-button--ghost"
          type="button"
          data-oq-action="toggle-overview-control"
          data-control-key="webServerLogHistoryEnabled"
          data-control-state="${enabled ? "off" : "on"}"
          aria-pressed="${enabled ? "true" : "false"}"
          ${busy ? "disabled" : ""}
        >
          ${enabled ? "Uitschakelen" : "Inschakelen"}
        </button>
      </div>
      ${loggerLevelControl}
    </div>
  `;
}

function renderWebServerLoggerLevelControl() {
  const entity = getWebServerLoggerLevelEntity();
  if (!entity) {
    return "";
  }

  const options = getWebServerLoggerLevelOptions(entity);
  const value = getWebServerLoggerLevelValue(entity);
  const busy = state.loadingEntities || state.busyAction === "save-debugLevel";

  return `
    <div class="oq-settings-system-row oq-settings-system-row--with-action" data-oq-diagnostics-row="debugLevel">
      <div class="oq-settings-system-row-copy">
        <p class="oq-settings-system-row-label">Logger level</p>
        <strong class="oq-settings-system-row-value">${escapeHtml(value || "Onbekend")}</strong>
        <p class="oq-settings-system-row-note">Past het runtime logniveau aan voor nieuwe firmwaremeldingen.</p>
      </div>
      <label class="oq-webserver-log-level-control" aria-label="Logger level">
        <select class="oq-helper-select" data-oq-field="debugLevel" ${busy ? "disabled" : ""}>
          ${options.map((option) => `<option value="${escapeHtml(option)}" ${option === value ? "selected" : ""}>${escapeHtml(option)}</option>`).join("")}
        </select>
        <span class="oq-settings-select-caret" aria-hidden="true"></span>
      </label>
    </div>
  `;
}

function buildWebServerLogCopyText() {
  return state.webServerLogEntries
    .map((entry) => {
      const line = String(entry.raw ?? entry.text ?? "").trimEnd();
      if (!line.trim()) {
        return "";
      }
      return `${formatWebServerLogDateTime(entry.receivedAt)} ${line}`;
    })
    .filter((entry) => entry.trim() !== "")
    .join("\n");
}

async function writeTextToClipboard(text) {
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

async function copyWebServerLogOutput() {
  const text = buildWebServerLogCopyText();
  state.webServerLogCopyMessage = "";
  state.webServerLogCopyError = "";

  if (!text) {
    state.webServerLogCopyError = "Er zijn nog geen logregels om te kopiëren.";
    render();
    return;
  }

  try {
    const copied = await writeTextToClipboard(text);
    if (!copied) {
      throw new Error("Kopiëren naar het klembord is niet gelukt.");
    }
    state.webServerLogCopyMessage = `${state.webServerLogEntries.length} logregel${state.webServerLogEntries.length === 1 ? "" : "s"} gekopieerd.`;
  } catch (error) {
    state.webServerLogCopyError = error instanceof Error ? error.message : "Kopiëren naar het klembord is niet gelukt.";
  }

  if (state.systemModal === "webserver-logs") {
    render();
  }
}

function renderWebServerLogsModal() {
  const demoMode = isWebServerLogDemoMode();
  return `
    <div class="oq-helper-modal-backdrop${state.overviewTheme === "dark" ? " oq-helper-modal-backdrop--dark" : ""}" data-oq-modal="system">
      <section class="oq-helper-modal oq-helper-modal--wide oq-helper-modal--scrollable oq-webserver-log-modal" role="dialog" aria-modal="true" aria-labelledby="oq-webserver-log-modal-title">
        <div class="oq-helper-modal-head">
          <div>
            <p class="oq-helper-modal-kicker">Diagnostiek</p>
            <h2 class="oq-helper-modal-title" id="oq-webserver-log-modal-title">OpenQuatt log</h2>
          </div>
            <button class="oq-helper-modal-close" type="button" data-oq-action="close-system-modal" aria-label="Sluit logboek">&times;</button>
        </div>
        <p class="oq-helper-modal-copy">${demoMode
          ? "Hier zie je voorbeeldmeldingen uit de lokale preview."
          : "Hier zie je recente meldingen van OpenQuatt. Handig als je wilt terugzoeken wat er net gebeurde."
        }</p>
        ${renderWebServerLogHistoryControls()}
        ${renderWebServerLogStatusBanner()}
        <div class="oq-webserver-log-panel" data-oq-webserver-log-scroller>
          <div class="oq-webserver-log-output" data-oq-webserver-log-output data-web-server-log-empty="${state.webServerLogEntries.length === 0 ? "true" : "false"}">
            ${renderWebServerLogEntries()}
          </div>
        </div>
        <div class="oq-helper-modal-actions">
          <button class="oq-helper-button oq-helper-button--ghost" type="button" data-oq-action="copy-webserver-log-output" ${state.webServerLogEntries.length === 0 ? "disabled" : ""}>Kopieer log</button>
          <button class="oq-helper-button oq-helper-button--ghost" type="button" data-oq-action="clear-webserver-log-output">Legen</button>
          <button class="oq-helper-button oq-helper-button--primary" type="button" data-oq-action="close-system-modal">Gereed</button>
        </div>
      </section>
    </div>
  `;
}
