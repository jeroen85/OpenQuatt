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
  if (state.webServerLogEnabled === false) {
    return "Niet beschikbaar";
  }
  return "Beschikbaar";
}

function formatWebServerLogDateTime(value) {
  const date = value instanceof Date ? value : new Date(Number(value) || Date.now());
  try {
    const timePart = new Intl.DateTimeFormat("nl-NL", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    }).format(date);
    return timePart;
  } catch (_error) {
    return date.toLocaleTimeString("nl-NL", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
  }
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
  }));
}

function openWebServerLogsModal() {
  if (isWebServerLogDemoMode() && state.webServerLogEntries.length === 0) {
    state.webServerLogEntries = seedWebServerLogDemoEntries();
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

function createWebServerLogEntry(raw, options = {}) {
  const text = stripAnsiSequences(raw).trimEnd();
  const receivedAt = Number(options.receivedAt);
  return {
    raw,
    text,
    tone: getWebServerLogTone(raw),
    receivedAt: Number.isFinite(receivedAt) ? receivedAt : Date.now(),
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
  const timestamp = formatWebServerLogDateTime(entry.receivedAt);
  const fullTimestamp = new Date(Number(entry.receivedAt) || Date.now()).toLocaleString("nl-NL", {
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
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
  if (isWebServerLogDemoMode()) {
    return `
      <div class="oq-helper-modal-success oq-helper-modal-success--compact">
        <strong>Voorbeeldlog</strong>
        <span>De lokale preview vult deze lijst met voorbeeldmeldingen en bewaart ze zolang de app open is.</span>
      </div>
    `;
  }

  if (state.webServerLogError) {
    return `<p class="oq-helper-modal-note oq-helper-modal-note--error">${escapeHtml(state.webServerLogError)}</p>`;
  }

  if (state.webServerLogConnected || state.webServerLogSource) {
    return `
      <div class="oq-helper-modal-success oq-helper-modal-success--compact">
        <strong>Recente meldingen</strong>
        <span>Laatste meldingen blijven zichtbaar terwijl OpenQuatt open is.</span>
      </div>
    `;
  }

  return `<p class="oq-helper-modal-note">Open de log om recente meldingen te bekijken.</p>`;
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
