  function buildEntityPath(domain, name, action = "") {
    const suffix = action ? `/${action}` : "";
    return `${getBasePath()}/${domain}/${encodeURIComponent(name)}${suffix}`;
  }

  function isCurveMode(value = getEntityValue("strategy")) {
    return String(value || "").includes("Water Temperature Control");
  }

  function isManualFlowMode(value = getEntityValue("flowControlMode")) {
    return String(value || "").toLowerCase().includes("manual");
  }

  function isCustomPowerHouseProfile(value = getEntityValue("phResponseProfile")) {
    return String(value || "").toLowerCase().includes("custom");
  }

  function getDeviceMeta() {
    const meta = typeof window !== "undefined" && window.__OQ_DEV_META && typeof window.__OQ_DEV_META === "object"
      ? window.__OQ_DEV_META
      : {};
    return meta;
  }

  function getHybridGenerationLabel() {
    const generation = String(getEntityValue("hpGeneration") || "").trim();
    if (generation) {
      return generation;
    }
    return "";
  }

  function getInstallationLabel() {
    const installation = String(getDeviceMeta().installation || "").toLowerCase();
    if (installation === "single") {
      return "Quatt Single";
    }
    const generation = getHybridGenerationLabel();
    if (installation === "duo") {
      return generation ? `Quatt Duo ${generation}` : "Quatt Duo";
    }
    return hasEntity("hp2Power") ? (generation ? `Quatt Duo ${generation}` : "Quatt Duo") : "Quatt Single";
  }

  function getFirmwareDeviceLabel() {
    return "OpenQuatt";
  }

  function formatDeviceClock() {
    const timeValid = isEntityActive("timeValid");
    const deviceClock = String(getEntityValue("timeNowHhmm") || "").trim();
    if (deviceClock && deviceClock !== "invalid") {
      return deviceClock;
    }
    if (hasEntity("timeValid") && !timeValid) {
      return "Geen tijdsync";
    }
    try {
      return new Intl.DateTimeFormat("nl-NL", {
        hour: "2-digit",
        minute: "2-digit",
      }).format(new Date());
    } catch (_error) {
      return new Date().toLocaleTimeString("nl-NL", { hour: "2-digit", minute: "2-digit" });
    }
  }

  function formatDiagnosticsDateTime() {
    if (hasEntity("timeValid") && !isEntityActive("timeValid")) {
      return "Geen tijdsync";
    }

    const datePart = new Intl.DateTimeFormat("nl-NL", {
      day: "numeric",
      month: "short",
      year: "numeric",
    }).format(new Date());
    return `${datePart} · ${formatDeviceClock()}`;
  }

  function formatDurationFromMinutes(totalMinutes) {
    if (!Number.isFinite(totalMinutes) || totalMinutes < 0) {
      return "—";
    }
    const wholeMinutes = Math.floor(totalMinutes);
    const days = Math.floor(wholeMinutes / 1440);
    const hours = Math.floor((wholeMinutes % 1440) / 60);
    const minutes = wholeMinutes % 60;
    if (days > 0) {
      return `${days}d ${hours}u`;
    }
    if (hours > 0) {
      return `${hours}u ${minutes}m`;
    }
    return `${minutes}m`;
  }

  function getNumericEntityUnit(entity) {
    return String(entity?.uom ?? entity?.unit_of_measurement ?? "").trim().toLowerCase();
  }

  function getNumericEntityValue(entity) {
    const rawState = entity?.state;
    if (rawState !== "" && rawState !== null && rawState !== undefined) {
      const numericState = Number(rawState);
      if (Number.isFinite(numericState)) {
        return numericState;
      }
    }
    const rawValue = entity?.value;
    const numericValue = Number(rawValue);
    return Number.isFinite(numericValue) ? numericValue : NaN;
  }

  function formatUptimeFromMeta() {
    const uptimeValue = getNumericEntityValue(state.entities.uptime);
    if (Number.isFinite(uptimeValue) && uptimeValue >= 0) {
      const uptimeUnit = getNumericEntityUnit(state.entities.uptime);
      if (uptimeUnit === "d") {
        return formatDurationFromMinutes(uptimeValue * 1440);
      }
      if (uptimeUnit === "h") {
        return formatDurationFromMinutes(uptimeValue * 60);
      }
      if (uptimeUnit === "s") {
        return formatDurationFromMinutes(uptimeValue / 60);
      }
    }
    const uptimeText = String(
      state.entities.uptimeReadable?.state
      ?? state.entities.uptimeReadable?.value
      ?? state.entities.uptimeReadableLegacy?.state
      ?? state.entities.uptimeReadableLegacy?.value
      ?? ""
    ).trim();
    if (uptimeText && uptimeText.toLowerCase() !== "unknown") {
      return uptimeText;
    }
    const bootedAt = Number(getDeviceMeta().bootedAt);
    if (!Number.isFinite(bootedAt) || bootedAt <= 0) {
      return "—";
    }
    return formatDurationFromMinutes((Date.now() - bootedAt) / 60000);
  }

  function getDeviceIpAddress() {
    const entityText = String(state.entities.ipAddress?.state ?? state.entities.ipAddress?.value ?? "").trim();
    if (entityText) {
      return entityText;
    }
    const explicit = String(getDeviceMeta().ipAddress || "").trim();
    if (explicit) {
      return explicit;
    }
    const host = typeof window !== "undefined" ? String(window.location.hostname || "").trim() : "";
    return host || "—";
  }

  function getUpdateStatus() {
    if (isFirmwareUpdateChecking()) {
      return "Controleren";
    }
    const progress = getFirmwareProgressModel();
    if (progress) {
      return progress.phaseLabel;
    }
    if (isFirmwareUpdateJustCompleted()) {
      return "Bijgewerkt";
    }
    if (isFirmwareUpdateInstalling()) {
      return "Bezig";
    }
    if (isFirmwareUpdateAvailable()) {
      return "Beschikbaar";
    }
    const relation = getFirmwareVersionRelation();
    if (relation !== null && relation <= 0) {
      return "Actueel";
    }
    const meta = getDeviceMeta();
    if (typeof meta.updateLabel === "string" && meta.updateLabel.trim()) {
      return meta.updateLabel.trim();
    }
    if (meta.updateAvailable === true) {
      return "Beschikbaar";
    }
    if (meta.updateAvailable === false) {
      return "Actueel";
    }
    if (isFirmwareEffectivelyCurrent()) {
      return "Actueel";
    }
    if (getFirmwareUpdateEntity()) {
      return "Nog niet gecontroleerd";
    }
    return "—";
  }

  function getFirmwareUpdateEntity() {
    return state.entities.firmwareUpdate || null;
  }

  function getFirmwareUpdateState() {
    const entity = getFirmwareUpdateEntity();
    if (!entity) {
      return "";
    }
    return String(entity.state ?? entity.value ?? "").trim().toLowerCase();
  }

  function getFirmwareProgressPhaseRaw() {
    const entity = state.entities.firmwareUpdateStatus;
    if (!entity) {
      return "";
    }
    return String(entity.state ?? entity.value ?? "").trim();
  }

  function getFirmwareProgressPhase() {
    return getFirmwareProgressPhaseRaw().toLowerCase();
  }

  function getFirmwareProgressPercent() {
    const entity = state.entities.firmwareUpdateProgress;
    if (!entity) {
      return Number.NaN;
    }
    const numeric = Number(entity.value ?? entity.state);
    if (Number.isNaN(numeric)) {
      return Number.NaN;
    }
    return Math.max(0, Math.min(100, numeric));
  }

  function hasInstalledFirmwareTargetVersion() {
    const target = String(state.updateInstallTargetVersion || "").trim();
    const current = getFirmwareCurrentVersion();
    if (!target || !current) {
      return false;
    }
    return compareFirmwareVersions(current, target) >= 0;
  }

  function hasInstalledFirmwareLatestVersion(entity = getFirmwareUpdateEntity() || {}) {
    const latest = getFirmwareLatestVersion(entity);
    const current = getFirmwareCurrentVersion(entity);
    if (!latest || !current) {
      return false;
    }
    return compareFirmwareVersions(current, latest) >= 0;
  }

  function isFirmwareInstallSettled() {
    return (hasInstalledFirmwareTargetVersion() || hasInstalledFirmwareLatestVersion())
      && !isFirmwareUpdateChecking()
      && !isFirmwareProgressActive()
      && !isFirmwareUpdateAvailable();
  }

  function isFirmwareUpdateJustCompleted() {
    return (state.updateInstallCompleted || isFirmwareInstallSettled())
      && !isFirmwareUpdateChecking()
      && !getFirmwareProgressModel()
      && !isFirmwareUpdateAvailable();
  }

  function resetFirmwareInstallUiState() {
    state.updateInstallBusy = false;
    state.updateInstallTargetVersion = "";
    state.updateInstallPhaseHint = "";
    state.updateInstallProgressHint = Number.NaN;
  }

  function syncFirmwareInstallHints() {
    const phase = getFirmwareProgressPhase();
    const percent = getFirmwareProgressPercent();

    if (phase === "starting" || phase === "uploading" || phase === "rebooting") {
      state.updateInstallPhaseHint = phase;
      if (!Number.isNaN(percent)) {
        state.updateInstallProgressHint = phase === "rebooting"
          ? Math.max(percent, 100)
          : percent;
      }
      return;
    }

    if (!state.updateInstallBusy) {
      return;
    }

    if (hasInstalledFirmwareTargetVersion()) {
      state.updateInstallPhaseHint = "rebooting";
      state.updateInstallProgressHint = 100;
      return;
    }

    if (state.controlNotice.includes("opnieuw is opgestart")) {
      state.updateInstallPhaseHint = "rebooting";
      state.updateInstallProgressHint = 100;
    }
  }

  function isFirmwareProgressActive() {
    const phase = getFirmwareProgressPhase();
    return phase === "starting" || phase === "uploading" || phase === "rebooting";
  }

  function getFirmwareProgressModel() {
    syncFirmwareInstallHints();

    const livePhase = getFirmwareProgressPhase();
    const hasLivePhase = livePhase === "starting" || livePhase === "uploading" || livePhase === "rebooting";
    const phase = hasLivePhase ? livePhase : state.updateInstallPhaseHint;
    const rawPercent = getFirmwareProgressPercent();
    const hintedPercent = Number.isNaN(state.updateInstallProgressHint) ? 0 : Math.round(state.updateInstallProgressHint);
    const basePercent = hasLivePhase && !Number.isNaN(rawPercent) ? Math.round(rawPercent) : hintedPercent;

    if (!isFirmwareProgressActive() && !state.updateInstallBusy) {
      return null;
    }

    if (phase === "rebooting") {
      return {
        phaseLabel: "Herstarten",
        percent: Math.max(basePercent, 100),
        copy: "Firmware is geplaatst. Het device start nu opnieuw op en komt daarna vanzelf terug.",
      };
    }

    if (phase === "uploading") {
      return {
        phaseLabel: "Uploaden",
        percent: basePercent,
        copy: `Firmware wordt nu naar ${getFirmwareDeviceLabel()} verzonden.`,
      };
    }

    return {
      phaseLabel: "Installeren",
      percent: basePercent,
      copy: `OTA-update is gestart voor ${getFirmwareDeviceLabel()}.`,
    };
  }

  function getFirmwareLatestVersion(entity = getFirmwareUpdateEntity() || {}) {
    const latest = String(entity.latest_version || "").trim();
    if (latest) {
      return latest;
    }
    const value = String(entity.value || "").trim();
    const current = String(entity.current_version || "").trim();
    if (value && value !== current && /^v/i.test(value)) {
      return value;
    }
    return "";
  }

  function getFirmwareCurrentVersion(entity = getFirmwareUpdateEntity() || {}) {
    const runningVersion = String(
      state.entities.projectVersionText?.state
      || state.entities.projectVersionText?.value
      || ""
    ).trim();
    if (runningVersion) {
      return runningVersion;
    }
    return String(entity.current_version || "").trim();
  }

  function hasFirmwareBootedIntoNewerVersion(entity = getFirmwareUpdateEntity() || {}) {
    const runningVersion = getFirmwareCurrentVersion(entity);
    const recordedVersion = String(entity.current_version || "").trim();
    if (!runningVersion || !recordedVersion || runningVersion === recordedVersion) {
      return false;
    }
    return compareFirmwareVersions(runningVersion, recordedVersion) > 0;
  }

  function isFirmwareEntityAlignedWithChannel(entity = getFirmwareUpdateEntity() || {}, channel = getFirmwareChannelLabel()) {
    const normalizedChannel = String(channel || "").trim().toLowerCase();
    const releaseUrl = String(entity.release_url || "").trim().toLowerCase();
    const latest = getFirmwareLatestVersion(entity).toLowerCase();

    if (!normalizedChannel || normalizedChannel === "—") {
      return true;
    }

    if (normalizedChannel === "dev") {
      if (releaseUrl) {
        if (releaseUrl.includes("/dev-latest")) {
          return true;
        }
        if (latest) {
          return latest.includes("-dev");
        }
      }
      return latest ? latest.includes("-dev") : false;
    }

    if (normalizedChannel === "main") {
      if (releaseUrl) {
        if (releaseUrl.includes("/dev-latest")) {
          return false;
        }
        if (latest) {
          return !latest.includes("-dev");
        }
      }
      return latest ? !latest.includes("-dev") : false;
    }

    return true;
  }

  function parseFirmwareVersion(version) {
    const raw = String(version || "").trim();
    const match = raw.match(/^v?(\d+)\.(\d+)\.(\d+)(?:-([A-Za-z]+)(?:\.(\d+))?)?/);
    if (!match) {
      return null;
    }
    return {
      major: Number(match[1]),
      minor: Number(match[2]),
      patch: Number(match[3]),
      prereleaseTag: match[4] || "",
      prereleaseNumber: match[5] ? Number(match[5]) : null,
    };
  }

  function compareFirmwareVersions(left, right) {
    const a = parseFirmwareVersion(left);
    const b = parseFirmwareVersion(right);
    if (!a || !b) {
      return 0;
    }
    if (a.major !== b.major) {
      return a.major > b.major ? 1 : -1;
    }
    if (a.minor !== b.minor) {
      return a.minor > b.minor ? 1 : -1;
    }
    if (a.patch !== b.patch) {
      return a.patch > b.patch ? 1 : -1;
    }
    const aStable = !a.prereleaseTag;
    const bStable = !b.prereleaseTag;
    if (aStable !== bStable) {
      return aStable ? 1 : -1;
    }
    if (a.prereleaseTag !== b.prereleaseTag) {
      return a.prereleaseTag > b.prereleaseTag ? 1 : -1;
    }
    if (a.prereleaseNumber !== b.prereleaseNumber) {
      return (a.prereleaseNumber || 0) > (b.prereleaseNumber || 0) ? 1 : -1;
    }
    return 0;
  }

  function isFirmwareUpdateInstalling() {
    if (isFirmwareInstallSettled()) {
      return false;
    }
    const raw = getFirmwareUpdateState();
    return state.updateInstallBusy
      || raw === "installing"
      || raw === "in_progress"
      || raw === "updating"
      || raw.includes("install");
  }

  function isFirmwareUpdateChecking() {
    const raw = getFirmwareUpdateState();
    return state.updateCheckBusy
      || raw === "checking"
      || raw === "check"
      || raw === "checking_for_update"
      || raw.includes("checking");
  }

  function isFirmwareUpdateAvailable() {
    const raw = getFirmwareUpdateState();
    if (!isFirmwareEntityAlignedWithChannel()) {
      return false;
    }
    const relation = getFirmwareVersionRelation();
    if (relation !== null) {
      return relation > 0;
    }
    if (
      raw === "installed"
      || raw === "current"
      || raw === "up_to_date"
      || raw === "none"
      || raw.includes("up to date")
      || raw.includes("no update")
    ) {
      return false;
    }
    if (raw === "available" || raw === "pending" || raw.includes("available")) {
      return true;
    }
    return getDeviceMeta().updateAvailable === true;
  }

  function isFirmwareEffectivelyCurrent() {
    const raw = getFirmwareUpdateState();
    return raw === "installed"
      || raw === "current"
      || raw === "up_to_date"
      || raw === "none"
      || raw.includes("up to date")
      || raw.includes("no update")
      || hasFirmwareBootedIntoNewerVersion();
  }

  function getFirmwareUpdateVersions() {
    const entity = getFirmwareUpdateEntity() || {};
    const current = getFirmwareCurrentVersion(entity) || "—";
    let latest = isFirmwareEntityAlignedWithChannel(entity) ? getFirmwareLatestVersion(entity) : "";
    const relation = latest ? compareFirmwareVersions(latest, current) : null;
    if (!isFirmwareUpdateChecking() && relation !== null && relation <= 0) {
      latest = "";
    }
    return {
      current,
      latest: latest || "—",
    };
  }

  function getFirmwareVersionRelation() {
    const { current, latest } = getFirmwareUpdateVersions();
    if (current === "—" || latest === "—") {
      return null;
    }
    return compareFirmwareVersions(latest, current);
  }

  function getFirmwareReleaseUrlFallback(channel = getFirmwareChannelLabel()) {
    const normalizedChannel = String(channel || "")
      .trim()
      .toLowerCase();
    return FIRMWARE_RELEASE_URLS[normalizedChannel] || FIRMWARE_RELEASE_URLS.main;
  }

  function getFirmwareReleaseUrl() {
    const entityUrl = String((getFirmwareUpdateEntity() || {}).release_url || "").trim();
    const fallbackUrl = getFirmwareReleaseUrlFallback();
    if (!entityUrl) {
      return fallbackUrl;
    }
    if (fallbackUrl.includes("/dev-latest") && !entityUrl.includes("/dev-latest")) {
      return fallbackUrl;
    }
    if (!fallbackUrl.includes("/dev-latest") && entityUrl.includes("/dev-latest")) {
      return fallbackUrl;
    }
    return entityUrl;
  }

  function getFirmwareTitle() {
    return getFirmwareDeviceLabel();
  }

  function getFirmwareChannelLabel() {
    return String(
      getEntityValue("firmwareUpdateChannel")
      || state.entities.releaseChannelText?.state
      || state.entities.releaseChannelText?.value
      || "—"
    ).trim() || "—";
  }

  function hasKnownFirmwareTargetVersion() {
    return getFirmwareUpdateVersions().latest !== "—";
  }

  function wait(ms) {
    return new Promise((resolve) => window.setTimeout(resolve, ms));
  }

  function primeFirmwareUpdateState(channel = getFirmwareChannelLabel()) {
    const entity = getFirmwareUpdateEntity() || {};
    const current = getFirmwareCurrentVersion(entity);
    state.entities.firmwareUpdate = {
      ...entity,
      state: "CHECKING",
      value: "",
      latest_version: "",
      latestVersion: "",
      summary: "",
      release_url: getFirmwareReleaseUrlFallback(channel),
      current_version: current,
    };
  }

  async function pollFirmwareUpdateState() {
    for (let attempt = 0; attempt < 6; attempt += 1) {
      await wait(attempt === 0 ? 900 : 1200);
      await refreshEntities(FIRMWARE_MODAL_KEYS, "all");
      const entityAligned = isFirmwareEntityAlignedWithChannel();
      const knownTarget = hasKnownFirmwareTargetVersion();
      const checking = isFirmwareUpdateChecking();
      const status = getUpdateStatus();
      if (entityAligned && (knownTarget || (!checking && status !== "Nog niet gecontroleerd"))) {
        return;
      }
    }
  }

  async function pollFirmwareInstallState() {
    let waitingForReconnect = false;

    for (let attempt = 0; attempt < 45; attempt += 1) {
      await wait(attempt === 0 ? 700 : 1000);
      try {
        await refreshEntities(FIRMWARE_MODAL_KEYS, "all");
        render();

        if (
          hasInstalledFirmwareTargetVersion()
          || isFirmwareInstallSettled()
          || (isFirmwareEffectivelyCurrent() && !isFirmwareProgressActive() && !isFirmwareUpdateInstalling())
        ) {
          return true;
        }
      } catch (error) {
        if (!waitingForReconnect) {
          state.controlNotice = "Wachten tot het device opnieuw is opgestart...";
          render();
          waitingForReconnect = true;
        }
      }
    }

    return false;
  }

  function getFirmwareModalCopy() {
    const channel = getFirmwareChannelLabel();
    const progress = getFirmwareProgressModel();

    if (progress) {
      return progress.copy;
    }
    if (isFirmwareUpdateJustCompleted()) {
      const version = state.updateInstallCompletedVersion || getFirmwareCurrentVersion() || getFirmwareChannelLabel();
      return `${getFirmwareDeviceLabel()} draait nu op ${version}.`;
    }
    if (isFirmwareUpdateInstalling()) {
      return `OTA-update wordt voorbereid voor ${getFirmwareDeviceLabel()}. Het device kan kort herstarten.`;
    }
    if (isFirmwareUpdateChecking()) {
      return `We controleren of er op kanaal ${channel} een nieuwe firmware beschikbaar is.`;
    }
    if (isFirmwareUpdateAvailable()) {
      return "Er staat een nieuwere firmware klaar.";
    }
    if (isFirmwareEffectivelyCurrent()) {
      return `Je draait al de nieuwste firmware op kanaal ${channel}.`;
    }
    return "Kies een kanaal en controleer of er een nieuwere firmware klaarstaat.";
  }

  function getHeaderRenderSignature() {
    return [
      state.interfacePanelOpen ? "open" : "closed",
      state.nativeOpen ? "native" : "app",
      state.appView,
      state.complete ? "complete" : "incomplete",
      state.overviewTheme,
      state.hpVisualMode,
      getInstallationLabel(),
      state.authStatus ? `auth:${state.authStatus.enabled ? "on" : "off"}:${state.authStatus.setup_window_active ? "armed" : "locked"}:${state.authStatus.username || ""}:${state.authStatus.source || ""}` : "auth:loading",
      ...HEADER_ENTITY_KEYS.map((key) => getEntitySignatureFragment(key)),
      getEntitySignatureFragment("firmwareUpdate"),
      getEntitySignatureFragment("firmwareUpdateChannel"),
      getEntitySignatureFragment("firmwareUpdateProgress"),
      getEntitySignatureFragment("firmwareUpdateStatus"),
    ].join("|");
  }

  function getConnectivityStatus() {
    if (state.entities.status && !isEntityActive("status")) {
      return "Offline";
    }
    const ip = getDeviceIpAddress();
    if (ip && ip !== "—") {
      return "Verbonden";
    }
    return "Bezig";
  }

  function getDeviceVersionLabel() {
    const version = String(getEntityValue("projectVersionText") || "").trim();
    return version || "—";
  }

  function getFirmwareVersionChipValue() {
    const version = getDeviceVersionLabel();
    if (version && version !== "—") {
      return version;
    }
    return getUpdateStatus();
  }

  function getEspTemperatureLabel() {
    const entity = state.entities.espInternalTemp;
    if (!entity) {
      return "—";
    }
    const numeric = getEntityNumericValue("espInternalTemp");
    if (!Number.isNaN(numeric)) {
      return formatNumericState(numeric, 1, entity.uom || " °C");
    }
    return getEntityStateText("espInternalTemp");
  }

  function getWebAuthStatusLabel() {
    const authStatus = state.authStatus;
    if (!authStatus) {
      return "Laden...";
    }
    if (authStatus.enabled) {
      return authStatus.setup_window_active ? "Instelvenster" : "Beveiligd";
    }
    return "Onbeveiligd";
  }

  function getWebAuthModalTitle() {
    return "Login";
  }

  function getWebAuthModalCopy() {
    const authStatus = state.authStatus;
    if (!authStatus) {
      return "We halen de huidige loginstatus op.";
    }
    if (authStatus.enabled) {
      return "De web-app vraagt nu een login voordat beheer beschikbaar is. Je kunt die hier aanpassen of uitzetten.";
    }
    return "De web-app staat open op je netwerk. Houd de herstelknop 5 seconden vast om een login toe te voegen.";
  }

  function getWebAuthStatusDetail() {
    const authStatus = state.authStatus;
    if (!authStatus) {
      return "Logingegevens laden...";
    }
    if (authStatus.enabled) {
      return authStatus.setup_window_active
        ? "Login actief. Tijdelijk instelvenster is open."
        : `Login actief${authStatus.source ? ` via ${authStatus.source}` : ""}.`;
    }
    return authStatus.setup_window_active
      ? "Login uit. Tijdelijk instelvenster is open."
      : "Login uit. Webtoegang is open / onbeveiligd op het netwerk.";
  }

  function renderLoginStatusRow(label, value, copy = "") {
    return `
      <div class="oq-helper-modal-row">
        <span class="oq-helper-modal-label">${escapeHtml(label)}</span>
        <strong class="oq-helper-modal-value">${escapeHtml(value)}</strong>
        ${copy ? `<span class="oq-helper-modal-subvalue">${escapeHtml(copy)}</span>` : ""}
      </div>
    `;
  }

  function getConnectivityModalRows() {
    const rows = [
      ["Netwerkstatus", getConnectivityStatus()],
      ["IP-adres", getDeviceIpAddress()],
    ];
    const ssid = String(getEntityValue("wifiSsid") || "").trim();
    if (ssid) {
      rows.push(["WiFi SSID", ssid]);
    }
    const signalEntity = state.entities.wifiSignal;
    if (signalEntity) {
      const signal = getEntityNumericValue("wifiSignal");
      if (!Number.isNaN(signal)) {
        rows.push(["WiFi signaal", formatNumericState(signal, 0, signalEntity.uom || " dBm")]);
      }
    }
    return rows;
  }

  function getHeaderStatusAction(key) {
    if (key === "version") {
      return "open-update-modal";
    }
    if (key === "connectivity") {
      return "open-connectivity-modal";
    }
    if (key === "login") {
      return "open-login-modal";
    }
    return "";
  }

  function getHeaderStatusItems() {
    return [
      ["installation", "Installatie", getInstallationLabel()],
      ["uptime", "Uptime", formatUptimeFromMeta()],
      ["connectivity", "Connectiviteit", getConnectivityStatus()],
      ["time", "Tijd", formatDeviceClock()],
      ["version", "Versie", getFirmwareVersionChipValue(), Boolean(getFirmwareUpdateEntity())],
    ];
  }

  function hasFirmwareUpdateAttention() {
    return isFirmwareUpdateAvailable();
  }

  function hasHeaderStatusBadge(key) {
    return key === "version" && hasFirmwareUpdateAttention();
  }

  function renderHeaderStatusGrid() {
    const statusItems = getHeaderStatusItems();

    return `
      <div class="oq-helper-status-grid">
        ${statusItems.map(([key, label, value, interactive]) => {
          const action = getHeaderStatusAction(key);
          const isInteractive = Boolean(interactive || action);
          const hasBadge = hasHeaderStatusBadge(key);
          return `
          <${isInteractive ? "button" : "div"}
            class="oq-helper-status-item${isInteractive ? " oq-helper-status-item--button" : ""}${hasBadge ? " oq-helper-status-item--attention" : ""}"
            data-oq-header-status="${escapeHtml(key)}"
            ${isInteractive ? `type="button" data-oq-action="${escapeHtml(action)}"` : ""}
          >
            <span class="oq-helper-status-label">${escapeHtml(label)}</span>
            <strong class="oq-helper-status-value">${hasBadge ? `<span class="oq-helper-status-value-text">${escapeHtml(value)}</span><span class="oq-helper-status-badge" aria-label="Update beschikbaar" title="Update beschikbaar"></span>` : escapeHtml(value)}</strong>
          </${isInteractive ? "button" : "div"}>
        `;
        }).join("")}
      </div>
    `;
  }

  function patchHeaderDom() {
    if (!state.root) {
      return false;
    }

    const statusGrid = state.root.querySelector(".oq-helper-status-grid");
    if (!statusGrid) {
      return Boolean(state.root.querySelector(".oq-helper-hub"));
    }

    const statusItems = getHeaderStatusItems();
    const renderedItems = statusGrid.querySelectorAll("[data-oq-header-status]");
    if (renderedItems.length !== statusItems.length) {
      statusGrid.outerHTML = renderHeaderStatusGrid();
      return true;
    }

    for (const [key, label, value, interactive] of statusItems) {
      const item = statusGrid.querySelector(`[data-oq-header-status="${key}"]`);
      if (!item) {
        statusGrid.outerHTML = renderHeaderStatusGrid();
        return true;
      }
      const action = getHeaderStatusAction(key);
      const isInteractive = Boolean(interactive || action);
      if (item.tagName.toLowerCase() !== (isInteractive ? "button" : "div")) {
        statusGrid.outerHTML = renderHeaderStatusGrid();
        return true;
      }

      const labelNode = item.querySelector(".oq-helper-status-label");
      const valueNode = item.querySelector(".oq-helper-status-value");
      if (!labelNode || !valueNode) {
        statusGrid.outerHTML = renderHeaderStatusGrid();
        return true;
      }

      if (labelNode.textContent !== label) {
        labelNode.textContent = label;
      }
      const badgeLabel = hasBadge ? `<span class="oq-helper-status-value-text">${escapeHtml(value)}</span><span class="oq-helper-status-badge" aria-label="Update beschikbaar" title="Update beschikbaar"></span>` : escapeHtml(value);
      const desiredValueMarkup = badgeLabel;
      if (valueNode.innerHTML !== desiredValueMarkup) {
        valueNode.innerHTML = desiredValueMarkup;
      }
      if (isInteractive) {
        item.setAttribute("data-oq-action", action);
      } else {
        item.removeAttribute("data-oq-action");
      }
      item.classList.toggle("oq-helper-status-item--button", isInteractive);
      item.classList.toggle("oq-helper-status-item--attention", hasBadge);
    }

    return true;
  }

  function renderHeaderDevControls() {
    const controls = typeof window !== "undefined" ? window.__OQ_DEV_CONTROLS__ : null;
    if (!controls || typeof controls.render !== "function") {
      return "";
    }
    return controls.render();
  }

  function renderDevPanel() {
    const controlsMarkup = renderHeaderDevControls();
    if (!controlsMarkup) {
      return "";
    }

    if (!state.devPanelOpen) {
      return `
        <aside class="oq-helper-devdock oq-helper-devdock--collapsed" aria-label="Preview en test">
          <button
            class="oq-helper-devdock-toggle"
            type="button"
            data-oq-action="toggle-dev-panel"
            aria-expanded="false"
            aria-label="Open previewpaneel"
          >Preview</button>
        </aside>
      `;
    }

    return `
      <aside class="oq-helper-devdock" aria-label="Preview en test">
        <div class="oq-helper-devdock-head">
          <div>
            <p class="oq-helper-devdock-kicker">Preview en test</p>
            <h2 class="oq-helper-devdock-title">Mockbediening</h2>
          </div>
          <button
            class="oq-helper-devdock-toggle oq-helper-devdock-toggle--close"
            type="button"
            data-oq-action="toggle-dev-panel"
            aria-expanded="true"
            aria-label="Sluit previewpaneel"
          >×</button>
        </div>
        ${controlsMarkup}
      </aside>
    `;
  }

  function renderHeaderStatus() {
    const surface = state.nativeOpen ? "native" : "app";
    const hasUpdateAttention = hasFirmwareUpdateAttention();
    if (!state.interfacePanelOpen) {
      return `
        <aside class="oq-helper-hub oq-helper-hub--collapsed" aria-label="Weergave en systeem">
          <div class="oq-helper-hub-head-actions">
            <button
              class="oq-helper-hub-toggle${hasUpdateAttention ? " oq-helper-hub-toggle--attention" : ""}"
              type="button"
              data-oq-action="toggle-interface-panel"
              aria-expanded="false"
              aria-label="Open interfacepaneel"
              title="Open interfacepaneel"
            >⚙${hasUpdateAttention ? '<span class="oq-helper-hub-toggle-dot" aria-hidden="true"></span>' : ""}</button>
          </div>
        </aside>
      `;
    }

    return `
      <aside class="oq-helper-hub" aria-label="Weergave en systeem">
        <div class="oq-helper-hub-head">
          <h2 class="oq-helper-hub-title">Weergave en systeem</h2>
          <div class="oq-helper-hub-head-actions">
            <button
              class="oq-helper-hub-toggle oq-helper-hub-toggle--close"
              type="button"
              data-oq-action="toggle-interface-panel"
              aria-expanded="true"
              aria-label="Sluit interfacepaneel"
              title="Sluit interfacepaneel"
            >×</button>
          </div>
        </div>
        <div class="oq-helper-hub-block">
          <p class="oq-helper-hub-kicker">Weergave</p>
          <div class="oq-helper-hub-switches">
            <button class="oq-helper-hub-chip${surface === "app" ? " is-active" : ""}" type="button" data-oq-action="select-surface" data-surface="app">OpenQuatt-app</button>
            <button class="oq-helper-hub-chip${surface === "native" ? " is-active" : ""}" type="button" data-oq-action="select-surface" data-surface="native">ESPHome fallback</button>
          </div>
        </div>
        <div class="oq-helper-hub-block">
          <p class="oq-helper-hub-kicker">Uiterlijk en overzicht</p>
          <div class="oq-helper-hub-actions">
            <button class="oq-helper-button oq-helper-button--ghost oq-helper-hub-action" type="button" data-oq-action="toggle-overview-theme">
              ${state.overviewTheme === "light" ? "Donkere modus" : "Lichte modus"}
            </button>
          </div>
        </div>
        <div class="oq-helper-hub-block">
          <p class="oq-helper-hub-kicker">Systeem</p>
          ${renderHeaderStatusGrid()}
          <div class="oq-helper-hub-actions oq-helper-hub-actions--single">
            <button class="oq-helper-hub-action oq-helper-hub-action--warning" type="button" data-oq-action="open-restart-confirm">
              Herstart OpenQuatt
            </button>
          </div>
        </div>
      </aside>
    `;
  }

  function renderNativeSurfaceShell() {
    const surface = state.nativeOpen ? "native" : "app";
    const statusCopy = state.nativeFrontendLoading
      ? "ESPHome fallback wordt geladen. Daarna blijft alleen de native webinterface actief."
      : "De OpenQuatt-app is tijdelijk uitgeschakeld, zodat de ESPHome fallback zelfstandig en zonder extra interfacebelasting kan draaien.";
    const errorMarkup = state.controlError
      ? `<p class="oq-native-surface-note oq-native-surface-note--error">${escapeHtml(state.controlError)}</p>`
      : "";

    return `
      <div class="oq-helper-shell${state.overviewTheme === "dark" ? " oq-helper-shell--dark" : ""} oq-native-surface-shell">
        <div class="oq-helper-card oq-native-surface-card">
          <div class="oq-native-surface-head">
            <div class="oq-native-surface-copy">
              <p class="oq-helper-kicker">Weergave</p>
              <h1>ESPHome fallback actief</h1>
              <p>${escapeHtml(statusCopy)}</p>
            </div>
            <div class="oq-native-surface-controls">
              <div class="oq-helper-hub-switches">
                <button class="oq-helper-hub-chip${surface === "app" ? " is-active" : ""}" type="button" data-oq-action="select-surface" data-surface="app">OpenQuatt-app</button>
                <button class="oq-helper-hub-chip${surface === "native" ? " is-active" : ""}" type="button" data-oq-action="select-surface" data-surface="native">ESPHome fallback</button>
              </div>
            </div>
          </div>
          <p class="oq-native-surface-note">Schakel terug naar OpenQuatt-app om tuning, live overzicht en instellingen weer te activeren.</p>
          ${errorMarkup}
        </div>
      </div>
    `;
  }

  function renderLoginModal() {
    const authStatus = state.authStatus || {};
    const authEnabled = authStatus.enabled === true;
    const setupWindowActive = authStatus.setup_window_active === true;
    const canEdit = authEnabled || setupWindowActive;
    const usernameValue = authEnabled ? String(authStatus.username || "").trim() : "";
    const noticeMarkup = state.authNotice
      ? `<div class="oq-helper-modal-success oq-helper-modal-success--compact" aria-live="polite"><strong>Opgeslagen</strong><span>${escapeHtml(state.authNotice)}</span></div>`
      : "";
    const errorMarkup = state.authError
      ? `<div class="oq-helper-modal-note oq-helper-modal-note--error" aria-live="assertive">${escapeHtml(state.authError)}</div>`
      : "";
    const authFormIntro = canEdit
      ? `<p class="oq-helper-modal-intro">${authEnabled ? "Pas hier je login aan." : "Vul hier je nieuwe login in."}</p>`
      : "";
    const authFormMarkup = canEdit
      ? `
        ${authFormIntro}
        <div class="oq-helper-modal-auth-stack">
          ${authEnabled
            ? `
              <label class="oq-helper-modal-auth-field">
                <span>Huidig wachtwoord</span>
                <input
                  class="oq-helper-input"
                  type="password"
                  autocomplete="current-password"
                  data-oq-auth-field="currentPassword"
                  value="${escapeHtml(state.authDraftCurrentPassword)}"
                  ${state.authBusy ? "disabled" : ""}
                >
              </label>
            `
            : ""}
          <label class="oq-helper-modal-auth-field">
            <span>Nieuwe gebruikersnaam</span>
            <input
              class="oq-helper-input"
              type="text"
              autocomplete="username"
              maxlength="32"
              data-oq-auth-field="username"
              value="${escapeHtml(state.authDraftUsername)}"
              ${state.authBusy ? "disabled" : ""}
            >
          </label>
          <label class="oq-helper-modal-auth-field">
            <span>Nieuw wachtwoord</span>
            <input
              class="oq-helper-input"
              type="password"
              autocomplete="new-password"
              maxlength="64"
              data-oq-auth-field="newPassword"
              value="${escapeHtml(state.authDraftNewPassword)}"
              ${state.authBusy ? "disabled" : ""}
            >
          </label>
          <label class="oq-helper-modal-auth-field">
            <span>Herhaal nieuw wachtwoord</span>
            <input
              class="oq-helper-input"
              type="password"
              autocomplete="new-password"
              maxlength="64"
              data-oq-auth-field="confirmPassword"
              value="${escapeHtml(state.authDraftConfirmPassword)}"
              ${state.authBusy ? "disabled" : ""}
            >
          </label>
        </div>
      `
      : `
        <div class="oq-helper-modal-callout oq-helper-modal-callout--subtle">
          <strong>Login toevoegen</strong>
          <span>Houd de herstelknop 5 seconden vast om het instelvenster te openen.</span>
        </div>
      `;

    return `
      <div class="oq-helper-modal-backdrop${state.overviewTheme === "dark" ? " oq-helper-modal-backdrop--dark" : ""}" data-oq-modal="system">
        <section class="oq-helper-modal" role="dialog" aria-modal="true" aria-labelledby="oq-login-modal-title">
          <div class="oq-helper-modal-head">
            <div>
              <p class="oq-helper-modal-kicker">Systeem</p>
              <h2 class="oq-helper-modal-title" id="oq-login-modal-title">${escapeHtml(getWebAuthModalTitle())}</h2>
            </div>
            <button class="oq-helper-modal-close" type="button" data-oq-action="close-system-modal" aria-label="Sluit login-popup">×</button>
          </div>
          <p class="oq-helper-modal-copy">${escapeHtml(getWebAuthModalCopy())}</p>
          ${noticeMarkup}
          ${errorMarkup}
          <div class="oq-helper-modal-grid">
            ${renderLoginStatusRow("Beveiligingsstatus", getWebAuthStatusLabel(), getWebAuthStatusDetail())}
            ${renderLoginStatusRow("Gebruiker", authEnabled ? (usernameValue || "Geen naam") : "Geen login", authEnabled ? "Deze naam gebruik je om in te loggen." : "Er staat nog geen login op het device.")}
          </div>
          ${authFormMarkup}
          <div class="oq-helper-modal-actions">
            <button class="oq-helper-button oq-helper-button--ghost" type="button" data-oq-action="close-system-modal" ${state.authBusy ? "disabled" : ""}>Gereed</button>
            ${authEnabled
              ? `<button class="oq-helper-button oq-helper-button--ghost" type="button" data-oq-action="disable-web-auth" ${state.authBusy ? "disabled" : ""}>Uitzetten</button>`
              : ""}
            ${canEdit
              ? `<button class="oq-helper-button oq-helper-button--primary" type="button" data-oq-action="save-web-auth" ${state.authBusy ? "disabled" : ""}>${authEnabled ? "Opslaan" : "Login opslaan"}</button>`
              : ""}
          </div>
        </section>
      </div>
    `;
  }

  function renderUpdateModal() {
    if (!state.updateModalOpen) {
      return "";
    }

    const entity = getFirmwareUpdateEntity();
    const channelEntity = state.entities.firmwareUpdateChannel || null;
    const { current, latest } = getFirmwareUpdateVersions();
    const checking = isFirmwareUpdateChecking();
    const installing = isFirmwareUpdateInstalling();
    const available = isFirmwareUpdateAvailable();
    const summary = getFirmwareModalCopy();
    const progress = getFirmwareProgressModel();
    const justCompleted = isFirmwareUpdateJustCompleted();
    const releaseUrl = getFirmwareReleaseUrl();
    const title = justCompleted
      ? "Firmware-update afgerond"
      : progress
      ? "Firmware-update bezig"
      : installing
      ? "Firmware-update bezig"
      : checking
        ? "Controleren op firmware-update"
        : getFirmwareTitle();
    const channelOptions = channelEntity
      ? (Array.isArray(channelEntity.option) ? channelEntity.option : Array.isArray(channelEntity.options) ? channelEntity.options : [])
      : [];

    return `
      <div class="oq-helper-modal-backdrop${checking || installing || progress ? " is-busy" : ""}${state.overviewTheme === "dark" ? " oq-helper-modal-backdrop--dark" : ""}" data-oq-modal="firmware-update">
        <section class="oq-helper-modal" role="dialog" aria-modal="true" aria-labelledby="oq-update-modal-title">
          <div class="oq-helper-modal-head">
            <div>
              <p class="oq-helper-modal-kicker">OTA-update</p>
              <h2 class="oq-helper-modal-title" id="oq-update-modal-title">${escapeHtml(title)}</h2>
            </div>
            <button class="oq-helper-modal-close" type="button" data-oq-action="close-update-modal" aria-label="Sluit update-popup">×</button>
          </div>
          <p class="oq-helper-modal-copy">${escapeHtml(summary)}</p>
          ${justCompleted ? `
            <div class="oq-helper-modal-success" aria-live="polite">
              <strong>Bijgewerkt</strong>
              <span>De nieuwe firmware draait nu op het device.</span>
            </div>
          ` : ""}
          ${progress ? `
            <div class="oq-helper-modal-progress" aria-live="polite">
              <div class="oq-helper-modal-progress-head">
                <strong>${escapeHtml(progress.phaseLabel)}</strong>
                <span>${escapeHtml(`${progress.percent}%`)}</span>
              </div>
              <div class="oq-helper-modal-progress-track" aria-hidden="true">
                <span class="oq-helper-modal-progress-fill" style="width:${Math.max(0, Math.min(100, progress.percent))}%"></span>
              </div>
            </div>
          ` : ""}
          <div class="oq-helper-modal-grid">
            <div class="oq-helper-modal-row">
              <span class="oq-helper-modal-label">Status</span>
              <strong class="oq-helper-modal-value">${escapeHtml(getUpdateStatus())}</strong>
            </div>
            <div class="oq-helper-modal-row">
              <span class="oq-helper-modal-label">Huidige versie</span>
              <strong class="oq-helper-modal-value">${escapeHtml(current)}</strong>
            </div>
            <div class="oq-helper-modal-row">
              <span class="oq-helper-modal-label">Beschikbare versie</span>
              <strong class="oq-helper-modal-value">${escapeHtml(latest)}</strong>
            </div>
            <div class="oq-helper-modal-row">
              <span class="oq-helper-modal-label">Kanaal</span>
              <strong class="oq-helper-modal-value">${escapeHtml(getFirmwareChannelLabel())}</strong>
            </div>
          </div>
          ${channelOptions.length ? `
            <label class="oq-helper-modal-channel">
              <span class="oq-helper-modal-label">Releasekanaal</span>
              <select data-oq-field="firmwareUpdateChannel">
                ${channelOptions.map((option) => `
                  <option value="${escapeHtml(option)}" ${String(getEntityValue("firmwareUpdateChannel") || "") === option ? "selected" : ""}>${escapeHtml(option)}</option>
                `).join("")}
              </select>
            </label>
          ` : ""}
          <p class="oq-helper-modal-note">Laat deze pagina open tijdens de OTA-update. Het device kan na installatie kort herstarten en daarna vanzelf weer terugkomen.</p>
          <div class="oq-helper-modal-actions">
            <button class="oq-helper-button oq-helper-button--ghost" type="button" data-oq-action="run-firmware-check" ${checking || installing || progress ? "disabled" : ""}>
              ${checking ? "Controleren..." : "Controleer opnieuw"}
            </button>
            ${justCompleted
              ? '<button class="oq-helper-button oq-helper-button--primary" type="button" data-oq-action="close-update-modal">Gereed</button>'
              : `<button class="oq-helper-button" type="button" data-oq-action="install-firmware-update" ${!available || installing || checking || progress || !entity ? "disabled" : ""}>
              ${installing ? "Bijwerken..." : "Nu bijwerken"}
            </button>`}
            ${releaseUrl ? `<a class="oq-helper-button oq-helper-button--ghost oq-helper-modal-link" href="${escapeHtml(releaseUrl)}" target="_blank" rel="noreferrer">Release notes</a>` : ""}
          </div>
        </section>
      </div>
    `;
  }

  function renderSystemModal() {
    if (state.systemModal === "login") {
      return renderLoginModal();
    }

    if (state.systemModal === "connectivity") {
      const rows = getConnectivityModalRows();
      return `
        <div class="oq-helper-modal-backdrop${state.overviewTheme === "dark" ? " oq-helper-modal-backdrop--dark" : ""}" data-oq-modal="system">
          <section class="oq-helper-modal" role="dialog" aria-modal="true" aria-labelledby="oq-system-modal-title">
            <div class="oq-helper-modal-head">
              <div>
                <p class="oq-helper-modal-kicker">Systeem</p>
                <h2 class="oq-helper-modal-title" id="oq-system-modal-title">Connectiviteit</h2>
              </div>
              <button class="oq-helper-modal-close" type="button" data-oq-action="close-system-modal" aria-label="Sluit systeem-popup">×</button>
            </div>
            <p class="oq-helper-modal-copy">Status en details van de actieve netwerkverbinding van OpenQuatt.</p>
            <div class="oq-helper-modal-grid">
              ${rows.map(([label, value]) => `
                <div class="oq-helper-modal-row">
                  <span class="oq-helper-modal-label">${escapeHtml(label)}</span>
                  <strong class="oq-helper-modal-value">${escapeHtml(value)}</strong>
                </div>
              `).join("")}
            </div>
            <div class="oq-helper-modal-actions">
              <button class="oq-helper-button oq-helper-button--primary" type="button" data-oq-action="close-system-modal">Gereed</button>
            </div>
          </section>
        </div>
      `;
    }

    if (state.systemModal === "restart-confirm") {
      const busy = state.busyAction === "restartAction";
      return `
        <div class="oq-helper-modal-backdrop${state.overviewTheme === "dark" ? " oq-helper-modal-backdrop--dark" : ""}" data-oq-modal="system">
          <section class="oq-helper-modal" role="dialog" aria-modal="true" aria-labelledby="oq-restart-modal-title">
            <div class="oq-helper-modal-head">
              <div>
                <p class="oq-helper-modal-kicker">Systeem</p>
                <h2 class="oq-helper-modal-title" id="oq-restart-modal-title">OpenQuatt herstarten?</h2>
              </div>
              <button class="oq-helper-modal-close" type="button" data-oq-action="close-system-modal" aria-label="Sluit herstart-popup">×</button>
            </div>
            <p class="oq-helper-modal-copy">De webinterface en regeling zijn tijdens de herstart kort niet bereikbaar. Daarna komt OpenQuatt vanzelf terug.</p>
            <div class="oq-helper-modal-actions">
              <button class="oq-helper-button oq-helper-button--ghost" type="button" data-oq-action="close-system-modal" ${busy ? "disabled" : ""}>Annuleren</button>
              <button class="oq-helper-button oq-helper-button--primary" type="button" data-oq-action="confirm-restart" ${busy ? "disabled" : ""}>${busy ? "Herstarten..." : "Herstarten"}</button>
            </div>
          </section>
        </div>
      `;
    }

    if (state.systemModal === "silent-settings") {
      return `
        <div class="oq-helper-modal-backdrop${state.overviewTheme === "dark" ? " oq-helper-modal-backdrop--dark" : ""}" data-oq-modal="system">
          <section class="oq-helper-modal oq-helper-modal--wide" role="dialog" aria-modal="true" aria-labelledby="oq-silent-settings-modal-title">
            <div class="oq-helper-modal-head">
              <div>
                <p class="oq-helper-modal-kicker">Stille uren</p>
                <h2 class="oq-helper-modal-title" id="oq-silent-settings-modal-title">Stille uren instellen</h2>
              </div>
              <button class="oq-helper-modal-close" type="button" data-oq-action="close-system-modal" aria-label="Sluit stille-uren-popup">×</button>
            </div>
            <p class="oq-helper-modal-copy">Kies wanneer het systeem stiller moet werken, en hoe ver het dan nog mag opschalen. Wijzigingen worden direct toegepast.</p>
            <div class="oq-helper-modal-body">
              ${renderSilentSettingsFields()}
            </div>
            <div class="oq-helper-modal-actions">
              <button class="oq-helper-button oq-helper-button--primary" type="button" data-oq-action="close-system-modal">Gereed</button>
            </div>
          </section>
        </div>
      `;
    }

    if (state.systemModal === "openquatt-pause") {
      const enabled = isEntityActive("openquattEnabled");
      const busy = state.busyAction === "openquatt-regulation";
      const hasResumeEntity = hasEntity("openquattResumeAt");
      const resumeScheduled = hasOpenQuattResumeSchedule();
      const resumeLabel = formatOpenQuattResumeDateTime(getEntityValue("openquattResumeAt"));
      const draftValue = getOpenQuattPauseDraftValue();
      return `
        <div class="oq-helper-modal-backdrop${state.overviewTheme === "dark" ? " oq-helper-modal-backdrop--dark" : ""}" data-oq-modal="system">
          <section class="oq-helper-modal oq-helper-modal--wide" role="dialog" aria-modal="true" aria-labelledby="oq-openquatt-pause-modal-title">
            <div class="oq-helper-modal-head">
              <div>
                <p class="oq-helper-modal-kicker">Bediening</p>
                <h2 class="oq-helper-modal-title" id="oq-openquatt-pause-modal-title">Openquatt regeling</h2>
              </div>
              <button class="oq-helper-modal-close" type="button" data-oq-action="close-system-modal" aria-label="Sluit regeling-popup">×</button>
            </div>
            <p class="oq-helper-modal-copy">${enabled
              ? "Kies hoe lang de regeling uit moet blijven. Verwarmen en koelen stoppen dan, maar beveiligingen blijven actief."
              : "De regeling staat nu tijdelijk uit. Je kunt meteen weer inschakelen of een nieuw hervatmoment plannen."
            }</p>
            ${resumeScheduled
              ? `<div class="oq-helper-modal-success oq-helper-modal-success--compact">
                  <strong>Hervat nu automatisch</strong>
                  <span>${escapeHtml(resumeLabel)}</span>
                </div>`
              : ""
            }
            ${hasResumeEntity
              ? `
                <div class="oq-helper-modal-presets">
                  <button class="oq-helper-button" type="button" data-oq-action="apply-openquatt-preset" data-pause-preset="2h" ${busy ? "disabled" : ""}>2 uur</button>
                  <button class="oq-helper-button" type="button" data-oq-action="apply-openquatt-preset" data-pause-preset="8h" ${busy ? "disabled" : ""}>8 uur</button>
                  <button class="oq-helper-button" type="button" data-oq-action="apply-openquatt-preset" data-pause-preset="tomorrow-morning" ${busy ? "disabled" : ""}>Tot morgenochtend</button>
                </div>
                <div class="oq-helper-modal-channel oq-helper-modal-channel--datetime">
                  <span class="oq-helper-modal-label">Hervatten op</span>
                  <div class="oq-helper-modal-inline">
                    <label class="oq-settings-control oq-settings-control--datetime">
                      <input
                        class="oq-helper-input"
                        type="datetime-local"
                        step="60"
                        lang="nl-NL"
                        data-oq-field="openquattPauseDraft"
                        data-oq-pause-draft="resume"
                        value="${escapeHtml(draftValue)}"
                        ${busy ? "disabled" : ""}
                      >
                      <span class="oq-settings-time-icon" aria-hidden="true">
                        <svg viewBox="0 0 20 20" focusable="false">
                          <rect x="3.2" y="4.2" width="13.6" height="12.6" rx="2.4" fill="none" stroke="currentColor" stroke-width="1.5" />
                          <path d="M6.2 2.9V5.4M13.8 2.9V5.4M3.8 8.1H16.2M10 10.3V13.1L12.3 14.4" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                      </span>
                    </label>
                    <button class="oq-helper-button oq-helper-button--primary" type="button" data-oq-action="apply-openquatt-custom-pause" ${busy ? "disabled" : ""}>Plan moment</button>
                  </div>
                </div>
              `
              : `<p class="oq-helper-modal-note">Automatisch hervatten is nog niet beschikbaar op deze firmware. Je kunt de regeling wel zonder eindtijd uitschakelen.</p>`
            }
            <div class="oq-helper-modal-actions">
              <button class="oq-helper-button oq-helper-button--ghost" type="button" data-oq-action="close-system-modal" ${busy ? "disabled" : ""}>Annuleren</button>
              ${!enabled
                ? `<button class="oq-helper-button" type="button" data-oq-action="enable-openquatt-now" ${busy ? "disabled" : ""}>Nu inschakelen</button>`
                : ""
              }
              <button class="oq-helper-button" type="button" data-oq-action="apply-openquatt-indefinite" ${busy ? "disabled" : ""}>${enabled ? "Zonder eindtijd uitschakelen" : "Zonder eindtijd"}</button>
            </div>
          </section>
        </div>
      `;
    }

    return "";
  }
