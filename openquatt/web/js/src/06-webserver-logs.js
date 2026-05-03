const WEB_SERVER_LOG_MAX_ENTRIES = 240;

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

function getWebServerLogStatusLabel() {
  if (state.nativeOpen) {
    return "Niet beschikbaar";
  }
  if (isWebServerLogDemoMode()) {
    return "Voorbeeld";
  }
  if (state.webServerLogConnected) {
    return "Live";
  }
  if (state.webServerLogEnabled === false) {
    return "Niet beschikbaar";
  }
  return "Beschikbaar";
}

function openWebServerLogsModal() {
  if (isWebServerLogDemoMode() && state.webServerLogEntries.length === 0) {
    state.webServerLogEntries = getWebServerLogDemoEntries().map((entry) => createWebServerLogEntry(entry));
  }
  state.systemModal = "webserver-logs";
  render();
}

function clearWebServerLogOutput() {
  state.webServerLogEntries = [];
  state.webServerLogError = "";
  if (state.systemModal === "webserver-logs") {
    render();
  }
}

function syncWebServerLogStream() {
  if (isWebServerLogDemoMode()) {
    closeWebServerLogStream();
    return;
  }

  const shouldConnect = state.mounted && !state.nativeOpen;
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

  state.webServerLogEnabled = true;
  state.webServerLogConnected = true;
  state.webServerLogError = "";
  render();
}

function handleWebServerLogPing() {
  if (!state.webServerLogSource || state.nativeOpen) {
    return;
  }

  state.webServerLogEnabled = true;
  if (!state.webServerLogConnected) {
    state.webServerLogConnected = true;
    state.webServerLogError = "";
    render();
  }
}

function handleWebServerLogError() {
  if (!state.webServerLogSource) {
    return;
  }

  state.webServerLogEnabled = false;
  state.webServerLogConnected = false;
  state.webServerLogError = "De live logstream kon niet worden geopend.";
  closeWebServerLogStream();
  render();
}

function handleWebServerLogMessage(event) {
  if (!state.webServerLogSource || !event || typeof event.data !== "string") {
    return;
  }

  const payload = normalizeWebServerLogPayload(event.data);
  if (!payload) {
    return;
  }

  const lines = payload.split(/\r?\n/).filter((line) => line.trim() !== "");
  if (lines.length === 0) {
    return;
  }

  const entries = lines.map((line) => createWebServerLogEntry(line));
  for (const entry of entries) {
    state.webServerLogEntries.push(entry);
  }

  const output = getWebServerLogOutputElement();
  const scroller = getWebServerLogScrollerElement();
  const stickToBottom = isWebServerLogScrollerNearBottom(scroller);

  trimWebServerLogEntries(output);
  appendWebServerLogEntriesToDom(entries, output);

  state.webServerLogEnabled = true;
  if (scroller && stickToBottom) {
    scroller.scrollTop = scroller.scrollHeight;
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

function createWebServerLogEntry(raw) {
  const text = stripAnsiSequences(raw).trimEnd();
  return {
    raw,
    text,
    tone: getWebServerLogTone(raw),
  };
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
  return `
    <div class="oq-webserver-log-entry oq-webserver-log-entry--${escapeHtml(entry.tone)}">
      <span>${escapeHtml(entry.text || entry.raw || " ")}</span>
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
  if (isWebServerLogDemoMode()) {
    return `
      <div class="oq-helper-modal-success oq-helper-modal-success--compact">
        <strong>Voorbeeldlog</strong>
        <span>De lokale preview toont voorbeeldregels. Op de echte firmware loopt de stream al mee terwijl de app open is via <code>/events</code>.</span>
      </div>
    `;
  }

  if (state.webServerLogError) {
    return `<p class="oq-helper-modal-note oq-helper-modal-note--error">${escapeHtml(state.webServerLogError)}</p>`;
  }

  if (state.webServerLogConnected) {
    return `
      <div class="oq-helper-modal-success oq-helper-modal-success--compact">
        <strong>Live verbinding</strong>
        <span>ESPHome web_server v3 streamt logregels via <code>/events</code>.</span>
      </div>
    `;
  }

  if (state.webServerLogSource) {
    return `<p class="oq-helper-modal-note">Verbinding maken met de live logstream via <code>/events</code>...</p>`;
  }

  return `<p class="oq-helper-modal-note">Open de log om een live stream via <code>/events</code> te starten.</p>`;
}

function renderWebServerLogsModal() {
  const demoMode = isWebServerLogDemoMode();
  return `
    <div class="oq-helper-modal-backdrop${state.overviewTheme === "dark" ? " oq-helper-modal-backdrop--dark" : ""}" data-oq-modal="system">
      <section class="oq-helper-modal oq-helper-modal--wide oq-helper-modal--scrollable oq-webserver-log-modal" role="dialog" aria-modal="true" aria-labelledby="oq-webserver-log-modal-title">
        <div class="oq-helper-modal-head">
          <div>
            <p class="oq-helper-modal-kicker">Diagnostiek</p>
            <h2 class="oq-helper-modal-title" id="oq-webserver-log-modal-title">ESPHome debuglog</h2>
          </div>
            <button class="oq-helper-modal-close" type="button" data-oq-action="close-system-modal" aria-label="Sluit logboek">&times;</button>
        </div>
        <p class="oq-helper-modal-copy">${demoMode
          ? "Hier zie je voorbeeldregels voor de lokale preview. Op de echte firmware loopt de logstream al mee zolang de app open is via <code>/events</code>."
          : "Hier zie je de live debuglog van de ESPHome web_server v3 via <code>/events</code>. De kleuren volgen de originele logseverity."
        }</p>
        ${renderWebServerLogStatusBanner()}
        <div class="oq-webserver-log-panel" data-oq-webserver-log-scroller>
          <div class="oq-webserver-log-output" data-oq-webserver-log-output data-web-server-log-empty="${state.webServerLogEntries.length === 0 ? "true" : "false"}">
            ${renderWebServerLogEntries()}
          </div>
        </div>
        <div class="oq-helper-modal-actions">
          <button class="oq-helper-button oq-helper-button--ghost" type="button" data-oq-action="clear-webserver-log-output">Legen</button>
          <button class="oq-helper-button oq-helper-button--primary" type="button" data-oq-action="close-system-modal">Gereed</button>
        </div>
      </section>
    </div>
  `;
}
