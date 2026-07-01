  function renderSettingsInfoToggle(infoId, title, copy) {
    if (!copy) {
      return "";
    }

    return `
      <div class="oq-settings-info${state.settingsInfoOpen === infoId ? " is-open" : ""}" data-oq-settings-info="${escapeHtml(infoId)}">
        <button
          class="oq-settings-info-button"
          type="button"
          data-oq-action="toggle-settings-info"
          data-info-id="${escapeHtml(infoId)}"
          aria-label="${escapeHtml(`Uitleg bij ${title}`)}"
          aria-expanded="${state.settingsInfoOpen === infoId ? "true" : "false"}"
        >i</button>
        <div class="oq-settings-info-popover" ${state.settingsInfoOpen === infoId ? "" : "hidden"}>
          <p>${escapeHtml(copy)}</p>
        </div>
      </div>
    `;
  }

  function renderSettingsFieldCard(fieldKey, title, copy, controlMarkup, className = "", footerMarkup = "") {
    return `<article class="oq-settings-field${className ? ` ${className}` : ""}" data-oq-settings-field="${escapeHtml(fieldKey)}"><div class="oq-settings-field-head"><h3>${escapeHtml(title)}</h3>${renderSettingsInfoToggle(fieldKey, title, copy)}</div><div class="oq-settings-field-control">${controlMarkup}</div>${footerMarkup}</article>`;
  }

  function renderSettingsStaticField(fieldKey, title, copy, value, className = "") {
    return renderSettingsFieldCard(fieldKey, title, copy, `<div class="oq-settings-static-value">${escapeHtml(value)}</div>`, className);
  }

  function getSettingsStatValue(key, options = {}) {
    const config = typeof options === "number"
      ? { decimals: options }
      : (options || {});
    const entity = state.entities[key];
    if (!entity) {
      return "—";
    }

    const numeric = Number(entity.value);
    if (!Number.isNaN(numeric)) {
      const decimals = Number.isInteger(numeric)
        ? 0
        : Number.isFinite(config.decimals) ? config.decimals : 1;
      let formatted = numeric.toFixed(Math.max(0, decimals));
      if (config.trimTrailingZeros && formatted.includes(".")) {
        formatted = formatted.replace(/\.?0+$/, "");
      }
      return `${formatted}${entity.uom ? ` ${entity.uom}` : ""}`;
    }

    const text = String(entity.state ?? entity.value ?? "").trim();
    return text || "—";
  }

  function getSettingsTextStatValue(key, fallback = "—") {
    const entity = state.entities[key];
    if (!entity) {
      return fallback;
    }

    const text = String(entity.state ?? entity.value ?? "").trim();
    if (!text || text === "0" || text === "—") {
      return fallback;
    }

    return text;
  }

  function formatSettingsNumberValue(value, unit = "", decimals = 2) {
    const numeric = Number(value);
    if (!Number.isFinite(numeric)) {
      return "—";
    }
    return `${numeric.toFixed(Math.max(0, decimals))}${unit ? ` ${unit}` : ""}`;
  }

  function getSettingsTemperatureValue(key, decimals = 2) {
    return getSettingsStatValue(key, { decimals });
  }

  function getHpWaterRawValue(rawKey, finalKey, offsetKey) {
    const finalValue = getEntityNumericValue(finalKey);
    const offset = getEntityNumericValue(offsetKey);
    if (Number.isFinite(finalValue) && Number.isFinite(offset)) {
      return finalValue - offset;
    }
    const raw = getEntityNumericValue(rawKey);
    return Number.isFinite(raw) ? raw : NaN;
  }

  function getManualHpActualValue(levelKey, frequencyKey) {
    const level = getEntityNumericValue(levelKey);
    const frequency = getEntityNumericValue(frequencyKey);
    const levelText = Number.isNaN(level) ? "Lvl —" : `Lvl ${Math.round(level)}`;
    const frequencyText = Number.isNaN(frequency) ? "— Hz" : `${Math.round(frequency)} Hz`;
    return `${levelText} (${frequencyText})`;
  }

  function isCommissioningTaskStatusBusy(status) {
    const normalized = String(status || "").trim().toUpperCase();
    if (!normalized || normalized === "0" || normalized === "IDLE" || normalized === "CM100 READY" || normalized === "CM100 STOPPED") {
      return false;
    }
    if (normalized.includes("DONE") || normalized.includes("FAILED") || normalized.includes("ABORT") || normalized.includes("APPLIED") || normalized.includes("REFUSED")) {
      return false;
    }
    return normalized.includes("REQUESTED")
      || normalized.includes("WAITING")
      || normalized.includes("WACHTEN")
      || normalized.includes("SETTLING")
      || normalized.includes("MEASUR")
      || normalized.includes("COOLDOWN")
      || normalized.includes("RUNNING")
      || normalized.includes("VALIDATING")
      || normalized.includes("STARTED")
      || normalized.includes("RECOVER")
      || normalized.includes("PHASE")
      || normalized.includes("STEADY")
      || normalized.includes("PULSE")
      || normalized.includes("STABILIZE")
      || normalized.includes("STEP");
  }

  function isCommissioningTaskStatusTerminal(status) {
    const normalized = String(status || "").trim().toUpperCase();
    if (!normalized) {
      return false;
    }
    return normalized.includes("DONE")
      || normalized.includes("FAILED")
      || normalized.includes("ABORT")
      || normalized.includes("APPLIED")
      || normalized.includes("REFUSED");
  }

  function isCommissioningTaskStatusWaitingForCm100(status) {
    const normalized = String(status || "").trim().toUpperCase();
    return normalized.includes("WAITING_FOR_CM100")
      || normalized.includes("CM100 REQUESTED")
      || normalized.includes("WACHTEN OP CM100")
      || normalized === "WACHTEN";
  }

  function isCommissioningTaskStatusActive(status) {
    return isCommissioningTaskStatusBusy(status) && !isCommissioningTaskStatusWaitingForCm100(status);
  }

  function getStatusTextValue(key, fallback = "IDLE") {
    const rawValue = getSettingsTextStatValue(key, fallback);
    const normalized = String(rawValue ?? "").trim();
    if (!normalized || normalized === "0" || normalized === "UNKNOWN" || normalized === "UNAVAILABLE" || normalized === "NAN") {
      return fallback;
    }
    return normalized;
  }

  function getCommissioningStatusValue() {
    const rawStatus = getSettingsTextStatValue("commissioningStatus", "");
    const cm100Active = isEntityActive("cm100Active");
    const normalizedRawStatus = String(rawStatus || "").trim().toUpperCase();
    if (
      cm100Active
      || normalizedRawStatus === "CM100 READY"
      || normalizedRawStatus === "CM100 STOPPED"
      || normalizedRawStatus.includes("DONE")
      || normalizedRawStatus.includes("FAILED")
      || normalizedRawStatus.includes("ABORT")
      || normalizedRawStatus.includes("APPLIED")
      || normalizedRawStatus.includes("REFUSED")
    ) {
      state.pendingCommissioningCm100Start = false;
    }
    if (normalizedRawStatus && normalizedRawStatus !== "0") {
      if (normalizedRawStatus === "IDLE" && state.pendingCommissioningCm100Start) {
        return "CM100 REQUESTED";
      }
      return normalizedRawStatus;
    }
    if (state.pendingCommissioningCm100Start) {
      return "CM100 REQUESTED";
    }
    return cm100Active ? "CM100 READY" : "IDLE";
  }

  function renderSettingsTrendStatsField() {
    if (!isEntityActive("trendHistoryEnabled") || !hasEntity("trendHistoryFlashAvailable")) {
      return "";
    }

    const detailStats = [
      { key: "trendHistoryFlashOldest", label: "Eerste meting" },
      { key: "trendHistoryFlashNewest", label: "Laatste meting" },
      { key: "trendHistoryFlashLastFlush", label: "Laatst opgeslagen" },
    ];
    const availableValue = getSettingsStatValue("trendHistoryFlashAvailable");
    const newestValue = getSettingsStatValue("trendHistoryFlashNewest");
    const storageValue = getSettingsStatValue("trendHistoryFlashSize");
    const writesValue = getSettingsStatValue("trendHistoryFlashWrites");

    const controlMarkup = `
        <div class="oq-settings-trend-stats-shell">
        <div class="oq-settings-trend-stats-summary">
          <div class="oq-settings-trend-stats-summary-copy">
            <span class="oq-settings-trend-stats-summary-label">Diagnosegeschiedenis</span>
            <strong class="oq-settings-trend-stats-summary-value">${escapeHtml(availableValue)}</strong>
            <p class="oq-settings-trend-stats-summary-note">Laatste meting in permanent geheugen: ${escapeHtml(newestValue)}.</p>
          </div>
          <div class="oq-settings-trend-stats-badges" aria-label="Diagnosegeschiedenis statistieken">
            <div class="oq-settings-trend-stats-badge">
              <span class="oq-settings-trend-stats-badge-label">Opslagruimte</span>
              <strong class="oq-settings-trend-stats-badge-value">${escapeHtml(storageValue)}</strong>
            </div>
            <div class="oq-settings-trend-stats-badge">
              <span class="oq-settings-trend-stats-badge-label">Opslagacties</span>
              <strong class="oq-settings-trend-stats-badge-value">${escapeHtml(writesValue)}</strong>
            </div>
          </div>
        </div>
        <div class="oq-settings-trend-stats-grid">
          ${detailStats.map((stat) => `
            <div class="oq-settings-trend-stat">
              <span class="oq-settings-trend-stat-label">${escapeHtml(stat.label)}</span>
              <strong class="oq-settings-trend-stat-value">${escapeHtml(getSettingsStatValue(stat.key))}</strong>
            </div>
          `).join("")}
        </div>
      </div>
    `;

    return renderSettingsFieldCard(
      "trendHistoryFlashStats",
      "Diagnosegeschiedenis",
      "Overzicht van wat er nu in permanent geheugen is opgeslagen.",
      controlMarkup,
      "oq-settings-field--span-2",
      isEntityActive("trendHistoryFlashEnabled")
        ? `<p class="oq-settings-action-note">Wordt ongeveer elk uur opgeslagen en ook bij herstart of update.</p>`
        : `<p class="oq-settings-action-note">Nieuwe opslag staat uit; bestaande diagnosegeschiedenis blijft beschikbaar.</p>`,
    );
  }

  function renderSettingsEnergyHistoryStatsField() {
    if (!hasEntity("lifetimeEnergyHistoryAvailable")) {
      return "";
    }

    const detailStats = [
      { key: "lifetimeEnergyHistoryOldest", label: "Eerste dag" },
      { key: "lifetimeEnergyHistoryNewest", label: "Laatste dag" },
      { key: "lifetimeEnergyHistoryLastWrite", label: "Laatst opgeslagen" },
    ];
    const availableValue = getSettingsStatValue("lifetimeEnergyHistoryAvailable");
    const newestValue = getSettingsStatValue("lifetimeEnergyHistoryNewest");
    const storageValue = getSettingsStatValue("lifetimeEnergyHistorySize");
    const writesValue = getSettingsStatValue("lifetimeEnergyHistoryWrites");

    const controlMarkup = `
      <div class="oq-settings-trend-stats-shell">
        <div class="oq-settings-trend-stats-summary">
          <div class="oq-settings-trend-stats-summary-copy">
            <span class="oq-settings-trend-stats-summary-label">Energiehistorie</span>
            <strong class="oq-settings-trend-stats-summary-value">${escapeHtml(formatSettingsStoredDaysLabel(availableValue))}</strong>
            <p class="oq-settings-trend-stats-summary-note">Laatste dag in permanent geheugen: ${escapeHtml(newestValue)}.</p>
          </div>
          <div class="oq-settings-trend-stats-badges" aria-label="Energiehistorie statistieken">
            <div class="oq-settings-trend-stats-badge">
              <span class="oq-settings-trend-stats-badge-label">Opslagruimte</span>
              <strong class="oq-settings-trend-stats-badge-value">${escapeHtml(storageValue)}</strong>
            </div>
            <div class="oq-settings-trend-stats-badge">
              <span class="oq-settings-trend-stats-badge-label">Opslagacties</span>
              <strong class="oq-settings-trend-stats-badge-value">${escapeHtml(writesValue)}</strong>
            </div>
          </div>
        </div>
        <div class="oq-settings-trend-stats-grid">
          ${detailStats.map((stat) => `
            <div class="oq-settings-trend-stat">
              <span class="oq-settings-trend-stat-label">${escapeHtml(stat.label)}</span>
              <strong class="oq-settings-trend-stat-value">${escapeHtml(getSettingsStatValue(stat.key))}</strong>
            </div>
          `).join("")}
        </div>
      </div>
    `;

    return renderSettingsFieldCard(
      "lifetimeEnergyHistoryStats",
      "Energiehistorie",
      "Dagtotalen voor langere energiegrafieken in de lokale web-app.",
      controlMarkup,
      "oq-settings-field--span-2",
      isEntityActive("lifetimeEnergyHistoryEnabled")
        ? `<p class="oq-settings-action-note">Wordt alleen bij dagwissel en normale afsluiting opgeslagen; geen continue opslag.</p>`
        : `<p class="oq-settings-action-note">Nieuwe dagtotalen worden niet bewaard; bestaande historie blijft beschikbaar.</p>`,
    );
  }

  function renderSettingsStorageSummaryMetric(label, value, meta = "", enabled = false) {
    return `
      <div class="oq-settings-storage-summary-metric${enabled ? " is-on" : ""}">
        <span>${escapeHtml(label)}</span>
        <strong>${escapeHtml(value)}</strong>
        ${meta ? `<em>${escapeHtml(meta)}</em>` : ""}
      </div>
    `;
  }

  function formatSettingsStoredDaysLabel(value) {
    const text = String(value || "").trim();
    const match = text.match(/^(\d+(?:[.,]\d+)?)\s+records?$/i);
    if (!match) {
      return text;
    }
    return `${match[1]} ${match[1] === "1" ? "dag" : "dagen"}`;
  }

  function renderSettingsStorageSwitchRow(key, title, copy, enabledCopy = "", disabledCopy = "", meta = "") {
    if (!hasEntity(key)) {
      return "";
    }

    const enabled = Boolean(getEntityValue(key));
    const busy = state.loadingEntities || state.busyAction === `switch-${key}`;
    return `
      <article class="oq-settings-storage-row" data-oq-settings-field="${escapeHtml(key)}">
        <div class="oq-settings-storage-row-copy">
          <div class="oq-settings-storage-row-title">
            <h4>${escapeHtml(title)}</h4>
            ${meta ? `<span>${escapeHtml(meta)}</span>` : ""}
          </div>
          <p>${escapeHtml(copy)}</p>
          ${renderSettingsSwitchCopy(key, enabled, enabledCopy, disabledCopy)}
        </div>
        ${renderSettingsCompactSwitchControl(key, title, enabled, busy)}
      </article>
    `;
  }

  function renderSettingsStorageSelectRow(key, title, copy, meta = "") {
    if (!hasEntity(key)) {
      return "";
    }

    const entity = state.entities[key];
    const options = Array.isArray(entity?.option) ? entity.option : [];
    const value = String(getEntityValue(key) || "");
    if (!options.length) {
      return "";
    }

    return `
      <article class="oq-settings-storage-row oq-settings-storage-row--select" data-oq-settings-field="${escapeHtml(key)}">
        <div class="oq-settings-storage-row-copy">
          <div class="oq-settings-storage-row-title">
            <h4>${escapeHtml(title)}</h4>
            ${meta ? `<span>${escapeHtml(meta)}</span>` : ""}
          </div>
          <p>${escapeHtml(copy)}</p>
        </div>
        <label class="oq-settings-storage-select">
          <select class="oq-helper-select" data-oq-field="${escapeHtml(key)}" ${state.loadingEntities ? "disabled" : ""}>
            ${options.map((option) => `<option value="${escapeHtml(option)}" ${option === value ? "selected" : ""}>${escapeHtml(formatSettingsOptionLabel(option))}</option>`).join("")}
          </select>
          <span class="oq-settings-select-caret" aria-hidden="true"></span>
        </label>
      </article>
    `;
  }

  function shouldRenderSettingsStorageActionButton(key) {
    return hasEntity(key) || (Boolean(ENTITY_DEFS[key]) && !state.optionalMissingEntities?.[key]);
  }

  function renderSettingsStorageActionButton(key, buttonLabel, action, options = {}) {
    if (!shouldRenderSettingsStorageActionButton(key)) {
      return "";
    }

    const entityAvailable = hasEntity(key);
    const busy = entityAvailable && (state.loadingEntities || state.busyAction === key);
    const disabled = options.disabled === true || !entityAvailable;
    const buttonClass = options.buttonClass || "oq-helper-button oq-helper-button--ghost";
    return `
      <button
        class="${escapeHtml(buttonClass)}"
        type="button"
        data-oq-action="${escapeHtml(action)}"
        ${busy || disabled ? "disabled" : ""}
      >
        ${escapeHtml(busy ? (options.busyLabel || buttonLabel) : buttonLabel)}
      </button>
    `;
  }

  function renderSettingsStorageStatGrid(stats) {
    const visibleStats = stats.filter((stat) => stat.value || hasEntity(stat.key));
    if (!visibleStats.length) {
      return "";
    }

    return `
      <div class="oq-settings-storage-stat-grid">
        ${visibleStats.map((stat) => {
          const value = stat.value || getSettingsStatValue(stat.key);
          return `
            <div>
              <span>${escapeHtml(stat.label)}</span>
              <strong>${escapeHtml(value)}</strong>
              ${stat.note ? `<em>${escapeHtml(stat.note)}</em>` : ""}
            </div>
          `;
        }).join("")}
      </div>
    `;
  }

  function getSettingsStorageStatOrFallback(key, fallback = "—") {
    return hasEntity(key) ? getSettingsStatValue(key) : fallback;
  }

  function formatSettingsStorageDayCount(value, fallback = "Geen data") {
    const count = Number(value);
    if (!Number.isFinite(count) || count <= 0) {
      return fallback;
    }
    return `${Math.round(count)} ${Math.round(count) === 1 ? "dag" : "dagen"}`;
  }

  function formatSettingsStorageKb(value, fallback = "—") {
    const amount = Number(value);
    if (!Number.isFinite(amount) || amount <= 0) {
      return fallback;
    }
    return `${Math.round(amount)} kB`;
  }

  function formatSettingsStorageCount(value, fallback = "0") {
    const count = Number(value);
    if (!Number.isFinite(count) || count <= 0) {
      return fallback;
    }
    return String(Math.round(count));
  }

  function formatSettingsStorageDateKey(dateKey) {
    const parsed = typeof parseEnergyHistoryDateKey === "function" ? parseEnergyHistoryDateKey(dateKey) : null;
    if (!parsed) {
      return "Geen data";
    }
    return parsed.date.toLocaleDateString("nl-NL", { day: "2-digit", month: "2-digit", year: "numeric" });
  }

  function formatSettingsStorageTimestamp(seconds, fallback = "Geen data") {
    const timestamp = Number(seconds);
    if (!Number.isFinite(timestamp) || timestamp <= 0) {
      return fallback;
    }
    const date = new Date(timestamp * 1000);
    const day = date.toLocaleDateString("nl-NL", { day: "2-digit", month: "2-digit" });
    const time = date.toLocaleTimeString("nl-NL", { hour: "2-digit", minute: "2-digit" });
    return `${day} ${time}`;
  }

  function getSettingsEnergyHistoryMetadata() {
    if (typeof getEnergyHistoryMetadataFromRaw !== "function") {
      return {};
    }
    return getEnergyHistoryMetadataFromRaw();
  }

  function renderSettingsStorageTechnicalRow(row) {
    const items = Array.isArray(row.items) ? row.items : [];
    return `
      <article class="oq-settings-storage-technical-row">
        <div class="oq-settings-storage-technical-row-head">
          <span>${escapeHtml(row.meta || "")}</span>
          <strong>${escapeHtml(row.title)}</strong>
          ${row.note ? `<em>${escapeHtml(row.note)}</em>` : ""}
        </div>
        <div class="oq-settings-storage-technical-metrics">
          ${items.map((item) => `
            <div>
              <span>${escapeHtml(item.label)}</span>
              <strong>${escapeHtml(item.value)}</strong>
            </div>
          `).join("")}
        </div>
      </article>
    `;
  }

  function renderSettingsStorageTechnicalDetails(rows) {
    const visibleRows = rows.filter(Boolean);
    if (!visibleRows.length) {
      return "";
    }

    return `
      <details class="oq-settings-storage-technical"${state.settingsStorageDetailsOpen ? " open" : ""}>
        <summary data-oq-action="toggle-storage-technical-details">
          <span>
            <strong>Opslagdetails</strong>
            <em>Diagnose, dagtotalen en uurdetail</em>
          </span>
          <span class="oq-settings-storage-technical-summary">${escapeHtml(visibleRows.map((row) => `${row.shortLabel}: ${row.primary}`).join(" · "))}</span>
        </summary>
        <div class="oq-settings-storage-technical-list">
          ${visibleRows.map(renderSettingsStorageTechnicalRow).join("")}
        </div>
      </details>
    `;
  }

  function formatSettingsOptionLabel(option) {
    const value = String(option || "").trim();
    if (!value) {
      return "";
    }

    const labels = {
      None: "Geen",
      Manual: "Handmatig",
      Balanced: "Gebalanceerd",
      Stable: "Stabiel",
      Responsive: "Direct",
      Calm: "Rustig",
      Custom: "Aangepast",
      [STRATEGY_OPTION_CURVE]: "Stooklijn",
      [STRATEGY_OPTION_POWER_HOUSE]: "Power House",
      "Dew point required": "Dauwpuntmeting vereist",
      "Allow without dew point": "Dauwpuntsbenadering",
      "Allow without dew point, use fallback": "Dauwpuntsbenadering",
      "Allow without dew point, use dew point approximation": "Dauwpuntsbenadering",
      "Allow without dew point, user responsibility": "Expliciet toestaan",
      Local: "Lokaal",
      CIC: "CIC",
      "HA input": "HA-invoer",
      "CIC + HA input": "CIC + HA-invoer",
      "OT thermostat": "OT-thermostaat",
      "Outdoor unit": "Buitenunit",
      Auto: "Auto",
      "CIC or HA input": "CIC of HA-invoer",
      "Flowmeter HP1": "Flowmeter HP1",
      "Flowmeter HP2": "Flowmeter HP2",
      "Local aggregate HP1/HP2": "Gecombineerde flow HP1/HP2",
    };

    return labels[value] || value;
  }

  function formatCoolingBlockReason(reason) {
    const value = String(reason || "").trim();
    if (!value) {
      return "";
    }

    const labels = {
      Ready: "Gereed",
      "Waiting for room request": "Wacht op kamervraag",
      "No dew point source": "Geen dauwpuntbron",
      "OpenQuatt paused": "OpenQuatt gepauzeerd",
      "Cooling disabled": "Koeling uitgeschakeld",
      "Cooling minimum unavailable": "Minimale koel-aanvoer onbekend",
      "Flow too low": "Flow te laag",
      "Fallback active": "Dauwpuntsbenadering actief",
      "Fallback active (+0.5°C warm night)": "Dauwpuntsbenadering actief (+0,5°C warme nacht)",
      "Fallback active (+1.0°C very warm night)": "Dauwpuntsbenadering actief (+1,0°C zeer warme nacht)",
      "Fallback active (+1.5°C tropical night)": "Dauwpuntsbenadering actief (+1,5°C tropische nacht)",
      "User responsibility (no dew point or fallback)": "Expliciet toegestaan (geen dauwpunt of benadering)",
      "Fallback cooling active": "Dauwpuntsbenadering actief",
      "Fallback corrected by warm night": "Dauwpuntsbenadering gecorrigeerd door warme nacht",
      "Fallback blocked by tropical night": "Dauwpuntsbenadering geblokkeerd door tropische nacht",
    };

    return labels[value] || value;
  }

  function renderSettingsChoiceOption({ key, option, currentValue, busy, copy = "", meta = "", image = "", imageAlt = "", infoTitle = "", infoCopy = "", infoId = "" }) {
    const active = option === currentValue;
    const cardBody = `
      <button
        class="oq-settings-choice-card${active ? " is-active" : ""}${image ? " oq-settings-choice-card--with-image" : ""}${infoCopy ? " oq-settings-choice-card--has-info" : ""}"
        type="button"
        data-oq-action="select-settings-option"
        data-select-key="${escapeHtml(key)}"
        data-select-option="${escapeHtml(option)}"
        aria-pressed="${active ? "true" : "false"}"
        ${busy ? "disabled" : ""}
      >
        <span class="oq-settings-choice-head">
          <span class="oq-settings-choice-title">${escapeHtml(formatSettingsOptionLabel(option))}</span>
          ${meta ? `<span class="oq-settings-choice-meta"><span class="oq-settings-choice-meta-text">${escapeHtml(meta)}</span></span>` : ""}
        </span>
        ${image ? `<span class="oq-settings-choice-media"><img src="${escapeHtml(image)}" alt="${escapeHtml(imageAlt || formatSettingsOptionLabel(option))}" loading="lazy" decoding="async"></span>` : ""}
        ${copy ? `<span class="oq-settings-choice-copy">${escapeHtml(copy)}</span>` : ""}
      </button>
    `;
    if (!infoCopy) {
      return cardBody;
    }

    const toggleTitle = infoTitle || formatSettingsOptionLabel(option);
    const toggleId = infoId || `${key}-${option}`;
    return `
      <article class="oq-settings-choice-card-shell${active ? " is-active" : ""}${image ? " oq-settings-choice-card-shell--with-image" : ""}">
        ${cardBody}
        ${renderSettingsInfoToggle(toggleId, toggleTitle, infoCopy)}
      </article>
    `;
  }

  function getSelectEntityOptions(entity = {}) {
    if (Array.isArray(entity.option)) {
      return entity.option;
    }
    if (Array.isArray(entity.options)) {
      return entity.options;
    }
    return [];
  }

  function renderSettingsSelectField(key, title, copy, className = "") {
    if (!hasEntity(key)) {
      return "";
    }
    const entity = state.entities[key] || {};
    const value = String(getEntityValue(key) || "");
    const options = getSelectEntityOptions(entity);
    return renderSettingsFieldCard(key, title, copy, `<label class="oq-settings-control oq-settings-control--select"><select class="oq-helper-select" data-oq-field="${escapeHtml(key)}" ${state.loadingEntities ? "disabled" : ""}>${options.map((option) => `<option value="${escapeHtml(option)}" ${option === value ? "selected" : ""}>${escapeHtml(formatSettingsOptionLabel(option))}</option>`).join("")}</select><span class="oq-settings-select-caret" aria-hidden="true"></span></label>`, className);
  }

  function renderSettingsSwitchPill(key, enabled, onLabel = "Aan", offLabel = "Uit") {
    return `<span class="oq-settings-toggle-state${enabled ? " is-on" : ""}" data-oq-switch-pill="${escapeHtml(key)}" data-on-label="${escapeHtml(onLabel)}" data-off-label="${escapeHtml(offLabel)}">${escapeHtml(enabled ? onLabel : offLabel)}</span>`;
  }

  function renderSettingsCompactSwitchControl(key, title, enabled, busy, onLabel = "Aan", offLabel = "Uit", showStatus = true) {
    const stateLabel = enabled ? onLabel : offLabel;
    const nextState = enabled ? "off" : "on";
    return `
      <div class="oq-settings-compact-switch-row">
        ${showStatus ? renderSettingsSwitchPill(key, enabled, onLabel, offLabel) : ""}
        <button
          class="oq-settings-toggle-switch${enabled ? " is-on" : ""}"
          type="button"
          role="switch"
          data-oq-action="toggle-overview-control"
          data-control-key="${escapeHtml(key)}"
          data-control-state="${escapeHtml(nextState)}"
          data-switch-title="${escapeHtml(title)}"
          data-on-label="${escapeHtml(onLabel)}"
          data-off-label="${escapeHtml(offLabel)}"
          aria-checked="${enabled ? "true" : "false"}"
          aria-label="${escapeHtml(`${title}: ${stateLabel}`)}"
          ${busy ? "disabled" : ""}
        >
          <span class="oq-settings-toggle-switch-track" aria-hidden="true">
            <span class="oq-settings-toggle-switch-knob"></span>
          </span>
        </button>
      </div>
    `;
  }

  function renderSettingsSwitchCopy(key, enabled, enabledCopy = "", disabledCopy = "") {
    const copy = enabled ? enabledCopy : disabledCopy;
    if (!copy) {
      return "";
    }
    return `<p data-oq-switch-copy="${escapeHtml(key)}" data-on-copy="${escapeHtml(enabledCopy)}" data-off-copy="${escapeHtml(disabledCopy)}">${escapeHtml(copy)}</p>`;
  }

  function renderSettingsSwitchField(key, title, copy, enabledCopy = "", disabledCopy = "", className = "") {
    if (!hasEntity(key)) {
      return "";
    }

    const enabled = Boolean(getEntityValue(key));
    const busy = state.loadingEntities || state.busyAction === `switch-${key}`;
    return renderSettingsFieldCard(
      key,
      title,
      copy,
      `
        <div class="oq-settings-compact-switch-field">
          ${renderSettingsCompactSwitchControl(key, title, enabled, busy)}
          ${renderSettingsSwitchCopy(key, enabled, enabledCopy, disabledCopy)}
        </div>
      `,
      className,
    );
  }

  function renderSettingsCheckboxSwitchField(key, title, copy, label, className = "") {
    if (!hasEntity(key)) {
      return "";
    }

    const enabled = Boolean(getEntityValue(key));
    const busy = state.loadingEntities || state.busyAction === `switch-${key}`;
    return renderSettingsFieldCard(
      key,
      title,
      copy,
      `
        <div class="oq-settings-compact-switch-field">
          ${renderSettingsCompactSwitchControl(key, title, enabled, busy)}
          ${label ? `<p>${escapeHtml(label)}</p>` : ""}
        </div>
      `,
      className,
    );
  }

  function renderSettingsIntegrationSwitchCard(key, title, copy) {
    if (!hasEntity(key)) {
      return "";
    }

    const enabled = Boolean(getEntityValue(key));
    const busy = state.loadingEntities || state.busyAction === `switch-${key}`;
    return `
      <article class="oq-settings-integration-card" data-oq-settings-field="${escapeHtml(key)}">
        <div class="oq-settings-integration-card-head">
          <h4>${escapeHtml(title)}</h4>
        </div>
        <p>${escapeHtml(copy)}</p>
        ${renderSettingsCompactSwitchControl(key, title, enabled, busy)}
      </article>
    `;
  }

  function renderSettingsButtonField(key, title, copy, buttonLabel, action, className = "", options = {}) {
    const busy = state.loadingEntities || state.busyAction === key;
    const disabled = options.disabled === true;
    const buttonClass = options.buttonClass || "oq-helper-button oq-helper-button--ghost";
    const note = options.note || "";
    return renderSettingsFieldCard(
      key,
      title,
      copy,
      `
        <div class="oq-settings-action-field">
          <button
            class="${buttonClass}"
            type="button"
            data-oq-action="${escapeHtml(action)}"
            ${options.buttonKey ? `data-oq-button-key="${escapeHtml(options.buttonKey)}"` : ""}
            ${busy || disabled ? "disabled" : ""}
          >
            ${escapeHtml(buttonLabel)}
          </button>
          ${note ? `<p class="oq-settings-action-note">${escapeHtml(note)}</p>` : ""}
        </div>
      `,
      className,
    );
  }

  function renderSettingsNamedButtonField(key, title, copy, buttonLabel, className = "", options = {}) {
    return renderSettingsButtonField(
      key,
      title,
      copy,
      buttonLabel,
      "press-named-button",
      className,
      {
        ...options,
        buttonKey: options.buttonKey || key,
      },
    );
  }

  function renderNamedActionButton(buttonKey, label, buttonClass = "oq-helper-button oq-helper-button--ghost", disabled = false) {
    return `
      <button
        class="${buttonClass}"
        type="button"
        data-oq-action="press-named-button"
        data-oq-button-key="${escapeHtml(buttonKey)}"
        ${disabled ? "disabled" : ""}
      >
        ${escapeHtml(label)}
      </button>
    `;
  }

  function renderNamedToggleActionButton({
    active,
    startKey,
    stopKey,
    startLabel,
    stopLabel,
    startClass = "oq-helper-button oq-helper-button--primary",
    stopClass = "oq-helper-button oq-helper-button--ghost",
    startDisabled = false,
    stopDisabled = false,
  }) {
    const key = active ? stopKey : startKey;
    const label = active ? stopLabel : startLabel;
    const buttonClass = active ? stopClass : startClass;
    const disabled = active ? stopDisabled : startDisabled;
    return renderNamedActionButton(key, label, buttonClass, disabled);
  }

  function renderSettingsOptionCardsField(key, title, copy, descriptions, className = "") {
    if (!hasEntity(key)) {
      return "";
    }

    const entity = state.entities[key] || {};
    const currentValue = String(getEntityValue(key) || "");
    const options = getSelectEntityOptions(entity);
    const busy = state.loadingEntities || state.busyAction === `save-${key}`;
    const controlMarkup = `
      <div class="oq-settings-choice-grid">
        ${options.map((option) => {
          const description = descriptions[option] || "";
          const optionCopy = typeof description === "string" ? description : (description.copy || "");
          const optionImage = typeof description === "string" ? "" : (description.image || "");
          const optionImageAlt = typeof description === "string" ? "" : (description.alt || "");
          return renderSettingsChoiceOption({ key, option, currentValue, busy, copy: optionCopy, image: optionImage, imageAlt: optionImageAlt });
        }).join("")}
      </div>
    `;

    return renderSettingsFieldCard(key, title, copy, controlMarkup, className);
  }

  function renderSettingsNumberField(key, title, copy, className = "", options = {}) {
    if (!hasEntity(key)) {
      return "";
    }

    const meta = getNumberMeta(key);
    const value = getInputDraftValue(key);
    const unit = options.unitOverride || meta.uom || "";
    const showUnit = options.showUnit !== false && Boolean(unit);
    const useInlineUnit = showUnit && options.unitMode !== "outside";
    const controlMarkup = renderNumberInputControl({
      key,
      value,
      meta,
      controlClass: `oq-helper-control${showUnit && !useInlineUnit ? " oq-helper-control--split" : ""}${useInlineUnit ? " oq-helper-control--suffix" : ""}`,
      unitMarkup: showUnit
        ? useInlineUnit
          ? `<span class="oq-helper-unit-chip">${escapeHtml(unit)}</span>`
          : `<span class="oq-helper-unit">${escapeHtml(unit)}</span>`
        : "",
    });

    return renderSettingsFieldCard(key, title, copy, controlMarkup, className, options.footerMarkup || "");
  }

  function renderSettingsSliderField(key, title, copy, className = "", options = {}) {
    if (!hasEntity(key)) {
      return "";
    }
    const meta = getNumberMeta(key);
    const value = normalizeNumber(key, getEntityValue(key));
    const minLabel = options.minLabel || `${meta.min}${meta.uom || ""}`;
    const maxLabel = options.maxLabel || `${meta.max}${meta.uom || ""}`;
    const valueLabel = options.valueLabel || formatValue(key, value);
    return renderSettingsFieldCard(key, title, copy, `<label class="oq-helper-slider-field"><div class="oq-helper-slider-meta"><span>${escapeHtml(minLabel)}</span><strong>${escapeHtml(valueLabel)}</strong><span>${escapeHtml(maxLabel)}</span></div><input class="oq-helper-range" type="range" data-oq-field="${escapeHtml(key)}" min="${meta.min}" max="${meta.max}" step="${meta.step}" value="${value}" ${state.loadingEntities ? "disabled" : ""}></label>`, className);
  }

  function renderSettingsMiniNumberField(key, title, copy, options = {}) {
    if (!hasEntity(key)) {
      return "";
    }

    const meta = getNumberMeta(key);
    const value = getInputDraftValue(key);
    const compact = options.compact === true;
    const embedded = options.embedded === true;
    const infoId = options.infoId || key;
    const showCopy = options.showCopy !== false;
    return `
      <article class="oq-settings-mini-field${compact ? " oq-settings-mini-field--compact" : ""}${embedded ? " oq-settings-mini-field--embedded" : ""}">
        <div class="oq-settings-mini-copy">
          <div class="oq-settings-mini-copy-head">
            <h5>${escapeHtml(title)}</h5>
            ${copy ? renderSettingsInfoToggle(infoId, title, copy) : ""}
          </div>
          ${copy && showCopy ? `<p>${escapeHtml(copy)}</p>` : ""}
        </div>
        ${renderNumberInputControl({
          key,
          value,
          meta,
          controlClass: "oq-helper-control oq-helper-control--suffix",
          inputClass: "oq-helper-input oq-helper-input--compact-number",
          unitMarkup: meta.uom ? `<span class="oq-helper-unit-chip">${escapeHtml(meta.uom)}</span>` : "",
        })}
      </article>
    `;
  }

  function renderSettingsTimeField(key, title, copy, className = "") {
    if (!hasEntity(key)) {
      return "";
    }
    const value = toTimeInputValue(getEntityValue(key));
    return renderSettingsFieldCard(key, title, copy, `<label class="oq-settings-control oq-settings-control--time"><input class="oq-helper-input oq-helper-input--time" type="time" step="60" lang="nl-NL" inputmode="numeric" data-oq-field="${escapeHtml(key)}" value="${escapeHtml(value)}" ${state.loadingEntities ? "disabled" : ""}><span class="oq-settings-time-icon" aria-hidden="true"><svg viewBox="0 0 20 20" focusable="false"><circle cx="10" cy="10" r="6.5" fill="none" stroke="currentColor" stroke-width="1.6" /><path d="M10 6.2 V10 L12.9 11.8" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" /></svg></span></label>`, className || "oq-settings-field--time");
  }

  function renderSettingsSection(kicker, title, copy, body, badgeMarkup = "") {
    return `<section class="oq-settings-section"><div class="oq-settings-section-head"><div class="oq-settings-section-head-meta"><p class="oq-helper-label">${escapeHtml(kicker)}</p>${badgeMarkup ? `<div class="oq-settings-section-head-meta-badge">${badgeMarkup}</div>` : ""}</div><h3>${escapeHtml(title)}</h3><p>${escapeHtml(copy)}</p></div>${body}</section>`;
  }

  function renderSettingsGroupNav() {
    const activeGroup = SETTINGS_GROUP_IDS.has(state.settingsGroup) ? state.settingsGroup : SETTINGS_GROUPS[0].id;
    return `
      <nav class="oq-settings-group-nav" aria-label="Instellingen groepen">
        ${SETTINGS_GROUPS.map((group) => `
          <button
            class="oq-settings-group-button${group.id === activeGroup ? " is-active" : ""}"
            type="button"
            data-oq-action="select-settings-group"
            data-group-id="${escapeHtml(group.id)}"
            aria-pressed="${group.id === activeGroup ? "true" : "false"}"
          >
            ${renderOqIcon(group.icon, "oq-settings-group-button-icon")}
            <span class="oq-settings-group-button-label">${escapeHtml(group.label)}</span>
          </button>
        `).join("")}
      </nav>
    `;
  }

  function renderSettingsGroupContent() {
    const activeGroup = SETTINGS_GROUP_IDS.has(state.settingsGroup) ? state.settingsGroup : SETTINGS_GROUPS[0].id;
    const sections = activeGroup === "installation"
      ? [
          renderSettingsGenerationSection(),
          renderSettingsBoilerCvSection(),
          renderSettingsFlowSection(),
          renderSettingsSilentSection(),
          renderSettingsWaterSection(),
          renderSettingsCompressorSection(),
          renderSettingsOduRuntimeFrequencySection(),
        ]
      : activeGroup === "service"
        ? [
            renderSettingsInstallationMonitoringSection(),
            renderSettingsServiceSection(),
          ]
      : activeGroup === "heating"
        ? [renderSettingsHeatingSection()]
      : activeGroup === "cooling"
        ? [renderSettingsCoolingSection()]
        : activeGroup === "integrations"
            ? [
                renderSettingsOpenThermCicSection(),
                renderSettingsSensorSelectionSection(),
                renderSettingsMqttSection(),
              ]
            : [
                renderSettingsQuickStartSection(),
                renderSettingsTrendSection(),
                renderSettingsAccessSecuritySection(),
                renderSettingsBackupSection(),
                renderSettingsDiagnosticsSection(),
              ];

    return `
      <div class="oq-settings-group-stack">
        ${sections.filter(Boolean).join("")}
      </div>
    `;
  }

  function patchSettingsDom() {
    if (!state.root || state.appView !== "settings") {
      return false;
    }

    const nav = state.root.querySelector(".oq-settings-group-nav");
    const stack = state.root.querySelector(".oq-settings-group-stack");
    if (!nav || !stack) {
      return false;
    }

    const activeGroup = SETTINGS_GROUP_IDS.has(state.settingsGroup) ? state.settingsGroup : SETTINGS_GROUPS[0].id;
    if (activeGroup === "service") {
      return false;
    }

    const navButtons = nav.querySelectorAll(".oq-settings-group-button");
    if (navButtons.length !== SETTINGS_GROUPS.length) {
      return false;
    }

    navButtons.forEach((button) => {
      const groupId = String(button.dataset.groupId || "");
      const active = groupId === activeGroup;
      button.classList.toggle("is-active", active);
      button.setAttribute("aria-pressed", active ? "true" : "false");
    });

    stack.querySelectorAll(".oq-settings-info").forEach((info) => {
      const infoId = String(info.dataset.oqSettingsInfo || "");
      const open = state.settingsInfoOpen === infoId;
      info.classList.toggle("is-open", open);
      const popover = info.querySelector(".oq-settings-info-popover");
      if (popover) {
        popover.hidden = !open;
      }
      const button = info.querySelector(".oq-settings-info-button");
      if (button) {
        button.setAttribute("aria-expanded", open ? "true" : "false");
      }
    });

    stack.querySelectorAll("[data-oq-settings-field]").forEach((card) => {
      const key = String(card.dataset.oqSettingsField || "");
      if (!key) {
        return;
      }

      const staticValue = card.querySelector(".oq-settings-static-value");
      if (staticValue) {
        const text = getEntityStateText(key);
        if (staticValue.textContent !== text) {
          staticValue.textContent = text;
        }
      }

      card.querySelectorAll('select[data-oq-field]').forEach((select) => {
        const fieldKey = String(select.dataset.oqField || key);
        const value = String(getEntityValue(fieldKey) || "");
        if (select.value !== value) {
          select.value = value;
        }
      });

      card.querySelectorAll('input[data-oq-field]').forEach((input) => {
        const fieldKey = String(input.dataset.oqField || key);
        const value = String(getInputDraftValue(fieldKey) || "");
        if (input.value !== value) {
          input.value = value;
        }
      });

      const sliderValue = card.querySelector(".oq-helper-slider-meta strong");
      const rangeInput = card.querySelector('input[type="range"][data-oq-field]');
      if (sliderValue && rangeInput) {
        const text = formatValue(key, normalizeNumber(key, getEntityValue(key)));
        if (sliderValue.textContent !== text) {
          sliderValue.textContent = text;
        }
      }
    });

    stack.querySelectorAll('[data-select-key]').forEach((button) => {
      const key = String(button.dataset.selectKey || "");
      const option = String(button.dataset.selectOption || "");
      const currentValue = String(getEntityValue(key) || "");
      const active = option === currentValue;
      button.classList.toggle("is-active", active);
      button.setAttribute("aria-pressed", active ? "true" : "false");
      if (key === "strategy") {
        button.disabled = state.loadingEntities || state.busyAction === "save-strategy";
      } else if (key === "hpGeneration") {
        button.disabled = state.loadingEntities || state.busyAction === "save-hpGeneration";
      } else if (key === "curveControlProfile") {
        button.disabled = state.loadingEntities || state.busyAction === "save-curveControlProfile";
      } else if (key === "phResponseProfile") {
        button.disabled = state.loadingEntities || state.busyAction === "save-phResponseProfile";
      }

      const shell = button.closest(".oq-settings-choice-card-shell");
      if (shell) {
        shell.classList.toggle("is-active", active);
      }
    });

    const customProfileCard = stack.querySelector(".oq-settings-choice-card--static.oq-settings-choice-card--custom");
    if (customProfileCard) {
      const customActive = String(getEntityValue("phResponseProfile") || "") === "Custom";
      customProfileCard.classList.toggle("is-active", customActive);
      const numberInputs = customProfileCard.querySelectorAll("input[data-oq-field]");
      numberInputs.forEach((input) => {
        const key = String(input.dataset.oqField || "");
        const value = String(getInputDraftValue(key) || "");
        if (input.value !== value) {
          input.value = value;
        }
      });
    }

    stack.querySelectorAll('[data-oq-action="toggle-overview-control"][data-control-key]').forEach((button) => {
      const key = String(button.dataset.controlKey || "");
      const current = Boolean(getEntityValue(key));
      const onLabel = String(button.dataset.onLabel || "Aan");
      const offLabel = String(button.dataset.offLabel || "Uit");
      const title = String(button.dataset.switchTitle || key);
      const stateLabel = current ? onLabel : offLabel;
      button.dataset.controlState = current ? "off" : "on";
      button.classList.toggle("is-on", current);
      button.setAttribute("aria-checked", current ? "true" : "false");
      button.setAttribute("aria-label", `${title}: ${stateLabel}`);
      button.disabled = state.loadingEntities || state.busyAction === `switch-${key}`;
    });

    stack.querySelectorAll("[data-oq-switch-pill]").forEach((pill) => {
      const key = String(pill.dataset.oqSwitchPill || "");
      const enabled = Boolean(getEntityValue(key));
      const onLabel = String(pill.dataset.onLabel || "Aan");
      const offLabel = String(pill.dataset.offLabel || "Uit");
      const label = enabled ? onLabel : offLabel;
      pill.classList.toggle("is-on", enabled);
      if (pill.textContent !== label) {
        pill.textContent = label;
      }
    });

    stack.querySelectorAll("[data-oq-switch-copy]").forEach((copyNode) => {
      const key = String(copyNode.dataset.oqSwitchCopy || "");
      const enabled = Boolean(getEntityValue(key));
      const onCopy = String(copyNode.dataset.onCopy || "");
      const offCopy = String(copyNode.dataset.offCopy || "");
      const copy = enabled ? onCopy : offCopy;
      copyNode.hidden = !copy;
      if (copyNode.textContent !== copy) {
        copyNode.textContent = copy;
      }
    });

    const generationStatus = stack.querySelector('button[data-oq-action="open-generation-modal"]')?.closest(".oq-settings-quickstart-status");
    if (generationStatus) {
      const valueNode = generationStatus.querySelector(".oq-settings-quickstart-status-value");
      const copyNode = generationStatus.querySelector(".oq-settings-quickstart-status-copy");
      const button = generationStatus.querySelector('button[data-oq-action="open-generation-modal"]');
      const currentLabel = getInstallationLabel();
      const entity = state.entities.hpGeneration || {};
      const canEdit = hasEntity("hpGeneration") && getSelectEntityOptions(entity).length > 0;
      if (valueNode) {
        const value = currentLabel || "Onbekend";
        if (valueNode.textContent !== value) {
          valueNode.textContent = value;
        }
      }
      if (copyNode) {
        const copy = "Pas dit aan als je een andere Quatt Hybrid hebt.";
        if (copyNode.textContent !== copy) {
          copyNode.textContent = copy;
        }
      }
      if (button) {
        button.disabled = !canEdit || state.loadingEntities || state.busyAction === "save-hpGeneration";
      }
    }

    const commissioningTeaser = stack.querySelector('button[data-oq-action="open-cm100-commissioning-modal"]')?.closest(".oq-settings-quickstart-status");
    if (commissioningTeaser) {
      const valueNode = commissioningTeaser.querySelector(".oq-settings-quickstart-status-value");
      const copyNode = commissioningTeaser.querySelector(".oq-settings-quickstart-status-copy");
      const button = commissioningTeaser.querySelector('button[data-oq-action="open-cm100-commissioning-modal"]');
      const cm100Status = getCommissioningStatusValue();
      const cm100Active = isEntityActive("cm100Active");
      if (valueNode && valueNode.textContent !== cm100Status) {
        valueNode.textContent = cm100Status;
      }
      const copy = cm100Active
        ? "CM100 is actief en klaar voor commissioning."
        : "Open de modal om CM100 te starten en de taken hieronder te ontgrendelen.";
      if (copyNode && copyNode.textContent !== copy) {
        copyNode.textContent = copy;
      }
      if (button) {
        button.disabled = state.loadingEntities;
      }
    }

    const quickStartStatus = stack.querySelector('button[data-oq-action="reset"]')?.closest(".oq-settings-quickstart-status");
    if (quickStartStatus) {
      const valueNode = quickStartStatus.querySelector(".oq-settings-quickstart-status-value");
      const copyNode = quickStartStatus.querySelector(".oq-settings-quickstart-status-copy");
      const button = quickStartStatus.querySelector('button[data-oq-action="reset"]');
      const statusLabel = state.complete === true ? "Afgerond" : state.complete === false ? "Open" : "Laden...";
      const statusCopy = state.complete === true
        ? "Quick Start is afgerond. Je kunt de status hier altijd weer openen met een reset."
        : state.complete === false
          ? "Quick Start staat nog open. Gebruik de resetknop om opnieuw te beginnen."
          : "De status van Quick Start wordt nog geladen.";
      if (valueNode && valueNode.textContent !== statusLabel) {
        valueNode.textContent = statusLabel;
      }
      if (copyNode && copyNode.textContent !== statusCopy) {
        copyNode.textContent = statusCopy;
      }
      if (button) {
        button.disabled = state.busyAction === "reset";
      }
    }

    const accessRows = stack.querySelectorAll('[data-oq-access-security-item]');
    if (accessRows.length) {
      accessRows.forEach((row) => {
        const item = String(row.dataset.oqAccessSecurityItem || "");
        const valueNode = row.querySelector(".oq-settings-quickstart-status-value");
        const copyNode = row.querySelector(".oq-settings-quickstart-status-copy");
        const button = row.querySelector("button[data-oq-action]");
        if (item === "login") {
          const statusLabel = getWebAuthStatusLabel();
          const statusCopy = getWebAuthStatusDetail();
          if (valueNode && valueNode.textContent !== statusLabel) {
            valueNode.textContent = statusLabel;
          }
          if (copyNode && copyNode.textContent !== statusCopy) {
            copyNode.textContent = statusCopy;
          }
        } else if (item === "api") {
          const statusLabel = getApiSecurityStatusLabel();
          const statusCopy = getApiSecurityStatusDetail();
          if (valueNode && valueNode.textContent !== statusLabel) {
            valueNode.textContent = statusLabel;
          }
          if (copyNode && copyNode.textContent !== statusCopy) {
            copyNode.textContent = statusCopy;
          }
        }
        if (button) {
          button.disabled = false;
        }
      });
    }

    const mqttRows = stack.querySelectorAll('[data-oq-mqtt-item]');
    if (mqttRows.length) {
      mqttRows.forEach((row) => {
        const valueNode = row.querySelector(".oq-settings-quickstart-status-value");
        const copyNode = row.querySelector(".oq-settings-quickstart-status-copy");
        const button = row.querySelector('button[data-oq-action="open-mqtt-modal"]');
        const statusLabel = getMqttStatusLabel();
        const statusCopy = getMqttStatusDetail();
        if (valueNode && valueNode.textContent !== statusLabel) {
          valueNode.textContent = statusLabel;
        }
        if (copyNode && copyNode.textContent !== statusCopy) {
          copyNode.textContent = statusCopy;
        }
        if (button) {
          button.disabled = false;
        }
      });
    }

    const systemSummary = stack.querySelector(".oq-settings-system-summary");
    if (systemSummary) {
      const rows = systemSummary.querySelectorAll(".oq-settings-system-row");
      const values = {
        uptime: formatUptimeFromMeta(),
        ip: getDeviceIpAddress(),
        updates: getUpdateStatus(),
        datetime: formatDiagnosticsDateTime(),
        espTemp: getEspTemperatureLabel(),
        restart: "Opnieuw opstarten",
      };

      rows.forEach((row) => {
        const valueNode = row.querySelector(".oq-settings-system-row-value");
        const key = row.dataset.oqDiagnosticsRow || "";
        if (!valueNode) {
          return;
        }
        if (Object.prototype.hasOwnProperty.call(values, key)) {
          const nextValue = values[key];
          if (valueNode.textContent !== nextValue) {
            valueNode.textContent = nextValue;
          }
        }
      });

      const updateButton = systemSummary.querySelector('button[data-oq-action="open-update-modal"]');
      if (updateButton) {
        updateButton.disabled = false;
      }
      const restartButton = systemSummary.querySelector('button[data-oq-action="open-restart-confirm"]');
      if (restartButton) {
        const busyRestart = state.busyAction === "restartAction";
        restartButton.disabled = busyRestart;
        restartButton.textContent = busyRestart ? "Herstarten..." : "Herstarten";
      }
    }

    stack.querySelectorAll(".oq-settings-hp-offset-row").forEach((row) => {
      const offsetKey = String(row.dataset.oqSettingsField || "");
      const rawKey = String(row.dataset.oqHpOffsetRawKey || "");
      const finalKey = String(row.dataset.oqHpOffsetFinalKey || "");
      if (!offsetKey || !rawKey || !finalKey) {
        return;
      }
      const meta = getNumberMeta(offsetKey);
      const raw = getHpWaterRawValue(rawKey, finalKey, offsetKey);
      const offsetDraft = parseLooseNumber(getInputDraftValue(offsetKey));
      const finalFromDraft = Number.isFinite(raw) && Number.isFinite(offsetDraft)
        ? formatSettingsNumberValue(raw + offsetDraft, meta.uom || "°C", 2)
        : getSettingsTemperatureValue(finalKey, 2);
      const activeNode = row.querySelector("[data-oq-hp-offset-active]");
      if (activeNode) {
        const activeText = `${getSettingsTemperatureValue(finalKey, 2)} actief`;
        if (activeNode.textContent !== activeText) {
          activeNode.textContent = activeText;
        }
      }
      const rawNode = row.querySelector("[data-oq-hp-offset-raw]");
      if (rawNode) {
        const rawText = Number.isFinite(raw)
          ? formatSettingsNumberValue(raw, meta.uom || "°C", 2)
          : getSettingsTemperatureValue(rawKey, 2);
        if (rawNode.textContent !== rawText) {
          rawNode.textContent = rawText;
        }
      }
      const finalNode = row.querySelector("[data-oq-hp-offset-final]");
      if (finalNode && finalNode.textContent !== finalFromDraft) {
        finalNode.textContent = finalFromDraft;
      }
    });

    const curveShell = stack.querySelector(".oq-settings-curve-shell");
    const currentCurveMode = isCurveMode();
    if (Boolean(curveShell) !== currentCurveMode) {
      return false;
    }

    const customCardExists = Boolean(customProfileCard);
    const customProfileActive = String(getEntityValue("phResponseProfile") || "") === "Custom";
    if (customCardExists !== customProfileActive) {
      return false;
    }

    return true;
  }

  function renderCurveFallbackSuggestionMarkup(helper = false) {
    const suggestion = getCurveFallbackSuggestion();
    if (!suggestion) {
      return "";
    }
    return `
      <div class="oq-curve-fallback-suggest oq-curve-fallback-suggest--inside${helper ? " oq-curve-fallback-suggest--helper" : ""}">
        <div class="oq-curve-fallback-suggest-copy">
          <strong>Suggestie: ${escapeHtml(suggestion.label)}</strong>
          <span>${escapeHtml(suggestion.basis)}</span>
        </div>
        <button
          class="oq-helper-button oq-helper-button--ghost"
          type="button"
          data-oq-action="suggest-curve-fallback"
          ${state.loadingEntities || state.busyAction === "save-curveFallbackSupply" || suggestion.isCurrent ? "disabled" : ""}
        >
          ${suggestion.isCurrent ? "Actief" : "Gebruik suggestie"}
        </button>
      </div>
    `;
  }

  function renderSettingsCurveInputs() {
    return `
      <div class="oq-settings-curve-grid">
        ${CURVE_POINTS.map((point) => renderSettingsNumberField(point.key, `Aanvoertemp. bij ${point.label}`, `Doelaanvoertemperatuur bij ${point.label} buitentemperatuur.`)).join("")}
        ${renderSettingsNumberField("curveFallbackSupply", "Fallback-aanvoertemperatuur zonder buitentemperatuur", "Aanvoertemperatuur die gebruikt wordt als de buitentemperatuursensor niet beschikbaar is.", "oq-settings-field--curve-fallback-card", { footerMarkup: renderCurveFallbackSuggestionMarkup() })}
      </div>
    `;
  }

  function renderStrategySelectionFields(className = "oq-settings-grid") {
    return `
      <div class="${escapeHtml(className)}">
        ${renderSettingsSelectField("strategy", "Verwarmingsstrategie", "Kies tussen automatisch regelen met Power House of regelen met een stooklijn.")}
      </div>
    `;
  }

  function renderFlowSettingsFields(className = "oq-settings-grid") {
    const autoFields = [
      renderSettingsNumberField("flowSetpoint", "Gewenste flow verwarmen", "De flow die OpenQuatt zoveel mogelijk probeert vast te houden buiten koeling."),
      renderSettingsNumberField("coolingFlowSetpoint", "Gewenste flow koelen", "De flow die OpenQuatt gebruikt tijdens actieve koeling."),
    ].filter(Boolean).join("");
    return `
      <div class="${escapeHtml(className)}">
        ${renderSettingsSelectField("flowControlMode", "Regelmodus", "Kies tussen automatische flowregeling en een vaste pompstand.")}
        ${isManualFlowMode()
          ? renderSettingsNumberField("manualIpwm", "Vaste pompstand", "Deze pompstand wordt gebruikt zolang de regeling op handmatig staat.")
          : autoFields}
      </div>
    `;
  }

  function renderFlowTuningFields(className = "oq-settings-grid") {
    const fields = [
      renderSettingsNumberField("flowKp", "Flow PI Kp", "Hoe sterk de regeling direct reageert op een afwijking."),
      renderSettingsNumberField("flowKi", "Flow PI Ki", "Hoe snel de regeling kleine restfouten wegwerkt."),
    ].filter(Boolean);
    if (!fields.length) {
      return "";
    }
    return `
      <div class="${escapeHtml(className)}">
        ${fields.join("")}
      </div>
    `;
  }

  function getCommissioningProgressModel(statusText = "", task = "") {
    const value = String(statusText || "").trim().toUpperCase();
    const taskType = String(task || "").trim().toLowerCase();
    const tokens = value.split(/[^A-Z0-9]+/).filter(Boolean);
    const matchesStatus = (needle) => {
      const normalizedNeedle = String(needle || "").trim().toUpperCase();
      if (!normalizedNeedle) {
        return false;
      }
      return value === normalizedNeedle
        || value.startsWith(`${normalizedNeedle}:`)
        || value.startsWith(`${normalizedNeedle} `)
        || tokens.includes(normalizedNeedle);
    };

    const progressMaps = {
      boiler: [
        { match: ["REQUESTED", "WAITING_FOR_CM100", "REFUSED"], phase: "Voorbereiden", percent: 12 },
        { match: ["FLOW_SETTLING"], phase: "Flow stabiliseren", percent: 28 },
        { match: ["BOILER_SETTLING"], phase: "Boiler stabiliseren", percent: 48 },
        { match: ["MEASURING"], phase: "Meten", percent: 72 },
        { match: ["COOLDOWN"], phase: "Afronden", percent: 90 },
        { match: ["DONE", "APPLIED"], phase: "Klaar", percent: 100 },
        { match: ["ABORTED", "FAILED", "ABORT"], phase: "Afgebroken", percent: 100 },
      ],
      autotune: [
        { match: ["REQUESTED", "WAITING_FOR_CM100", "REFUSED"], phase: "Voorbereiden", percent: 10 },
        { match: ["WAITING_FOR_FLOW", "SETTLING"], phase: "Flow stabiliseren", percent: 26 },
        { match: ["STEP2"], phase: "Staptest 2", percent: 56 },
        { match: ["STEP", "STEP1"], phase: "Staptest 1", percent: 42 },
        { match: ["VALIDATING_SETTLING"], phase: "Flow valideren", percent: 70 },
        { match: ["VALIDATING"], phase: "Flow valideren", percent: 84 },
        { match: ["RECOVERING"], phase: "Herstellen", percent: 92 },
        { match: ["DONE", "APPLIED"], phase: "Klaar", percent: 100 },
        { match: ["ABORTED", "FAILED", "ABORT"], phase: "Afgebroken", percent: 100 },
      ],
      purge: [
        { match: ["REQUESTED", "STARTED", "REFUSED"], phase: "Voorbereiden", percent: 8 },
        { match: ["PHASE1", "STEADY"], phase: "Rustige doorstroming", percent: 22 },
        { match: ["PHASE2", "PULSE"], phase: "Pulsen", percent: 62 },
        { match: ["PHASE3", "STABILIZE"], phase: "Stabiliseren", percent: 90 },
        { match: ["DONE"], phase: "Klaar", percent: 100 },
        { match: ["ABORTED", "FAILED", "ABORT"], phase: "Afgebroken", percent: 100 },
      ],
      "hp-water-calibration": [
        { match: ["REQUESTED", "STARTED", "REFUSED"], phase: "Voorbereiden", percent: 8 },
        { match: ["MIXING"], phase: "Water mengen", percent: 42 },
        { match: ["MEASURING"], phase: "Sensoren meten", percent: 78 },
        { match: ["DONE", "APPLIED"], phase: "Klaar", percent: 100 },
        { match: ["ABORTED", "FAILED", "ABORT"], phase: "Afgebroken", percent: 100 },
      ],
      cm100: [
        { match: ["REQUESTED"], phase: "Wachten op CM100", percent: 0 },
        { match: ["WAITING_FOR_CM100"], phase: "Wachten op CM100", percent: 0 },
        { match: ["CM100 READY"], phase: "Klaar", percent: 100 },
        { match: ["IDLE"], phase: "Klaar", percent: 100 },
      ],
    };

    if (!value || value === "—" || value === "UNKNOWN" || value === "UNAVAILABLE" || value === "NAN") {
      return { phase: "Wachten", percent: 0 };
    }

    if (value.includes("WAITING") || value.includes("WACHTEN")) {
      return { phase: "Wachten", percent: 0 };
    }

    if (taskType !== "cm100" && (
      value === "IDLE"
      || value === "CM0 - STANDBY"
      || value === "CM100 READY"
      || value === "CM100 STOPPED"
      || value === "GEPAUZEERD"
    )) {
      return { phase: "Wachten", percent: 0 };
    }

    const selected = progressMaps[taskType] || [];
    const match = selected.find((item) => item.match.some((needle) => matchesStatus(needle)));
    if (match) {
      return match;
    }

    if (value.includes("DONE") || value.includes("APPLIED")) {
      return { phase: "Klaar", percent: 100 };
    }
    if (value.includes("ABORT") || value.includes("FAILED") || value.includes("REFUSED")) {
      return { phase: "Afgebroken", percent: 100 };
    }
    if (taskType === "cm100" && value.includes("CM100")) {
      return { phase: "Klaar", percent: 100 };
    }
    return { phase: statusText, percent: 0 };
  }

  function renderCommissioningTaskCard({
    taskKey,
    title,
    copy,
    subcopy = "",
    status,
    statusCopy,
    progressTask,
    actions = "",
    controls = "",
    metrics = "",
    className = "",
  }) {
    return `
      <article class="oq-settings-commissioning-card${className ? ` ${escapeHtml(className)}` : ""}" data-oq-commissioning-task="${escapeHtml(taskKey)}">
        <div class="oq-settings-commissioning-card-head">
          <div class="oq-settings-commissioning-card-copy">
            <h3>${escapeHtml(title)}</h3>
            <p>${escapeHtml(copy)}</p>
            ${subcopy ? `<p class="oq-settings-commissioning-card-subcopy">${escapeHtml(subcopy)}</p>` : ""}
          </div>
        </div>
        ${actions ? `<div class="oq-settings-commissioning-card-actions">${actions}</div>` : ""}
        ${controls}
        <div class="oq-settings-quickstart-status oq-settings-quickstart-status--compact oq-settings-commissioning-card-status">
          <div class="oq-settings-quickstart-status-row">
            <div>
              <p class="oq-settings-quickstart-status-label">Huidige status</p>
              <strong class="oq-settings-quickstart-status-value">${escapeHtml(status)}</strong>
              <p class="oq-settings-quickstart-status-copy">${escapeHtml(statusCopy)}</p>
            </div>
          </div>
        </div>
        ${metrics ? `<div class="oq-settings-grid oq-settings-commissioning-metrics">${metrics}</div>` : ""}
      </article>
    `;
  }

  function getOduRuntimeFrequencyHpIndexes() {
    return ODU_RUNTIME_FREQUENCY_HP_IDS.filter((hpIndex) => (
      hasEntity(getOduRuntimeFrequencyControlKey(hpIndex, "Status"))
      || hasEntity(getOduRuntimeFrequencyControlKey(hpIndex, "Load"))
      || hasEntity(getOduRuntimeFrequencyValueKey(hpIndex, "cooling", 0))
    ));
  }

  function getOduRuntimeFrequencyNumberValue(key) {
    return parseLooseNumber(getInputDraftValue(key));
  }

  function getOduRuntimeFrequencyTableValidation(hpIndex) {
    const invalid = [];
    ODU_RUNTIME_FREQUENCY_MODES.forEach((mode) => {
      let previous = -Infinity;
      ODU_RUNTIME_FREQUENCY_LEVELS.forEach((level) => {
        const key = getOduRuntimeFrequencyValueKey(hpIndex, mode, level);
        const value = getOduRuntimeFrequencyNumberValue(key);
        if (!Number.isFinite(value) || value < 0 || value > 120 || value < previous) {
          invalid.push(`${mode === "cooling" ? "C" : "H"}F${level}`);
        }
        if (Number.isFinite(value)) {
          previous = value;
        }
      });
    });
    return {
      valid: invalid.length === 0,
      invalid,
    };
  }

  function getOduRuntimeFrequencyOperationState(hpIndex) {
    const mode = String(getEntityValue(`hp${hpIndex}Mode`) || "").trim();
    const freq = parseLooseNumber(getEntityValue(`hp${hpIndex}Freq`));
    const modeKnown = mode && mode !== "Onbekend" && mode !== "Unknown";
    const freqKnown = Number.isFinite(freq);
    const standby = modeKnown && /standby|stand-by/i.test(mode);
    const stopped = freqKnown && freq <= 0.5;
    const reason = !modeKnown
      ? "ODU status is onbekend."
      : !standby
        ? `ODU staat in ${mode}.`
        : !freqKnown
          ? "Compressorfrequentie is onbekend."
          : !stopped
            ? `Compressor draait op ${freq.toFixed(0)} Hz.`
            : "Standby en compressor uit.";
    return {
      mode: modeKnown ? mode : "Onbekend",
      freq: Number.isFinite(freq) ? `${freq.toFixed(0)} Hz` : "Onbekend",
      safe: standby && stopped,
      reason,
    };
  }

  function getOduRuntimeFrequencyStatusCopy(status) {
    const normalized = String(status || "").toUpperCase();
    if (!status || normalized === "UNKNOWN" || normalized === "UNAVAILABLE") {
      return "Nog geen readback of apply-status ontvangen.";
    }
    if (normalized.includes("APPLIED")) {
      return "Runtime registers zijn geschreven en via readback bevestigd. Een ODU powercycle zet de originele tabel terug.";
    }
    if (normalized.includes("GUARD_READ_REQUESTED")) {
      return "Firmware leest actuele ODU mode en compressorfrequentie voordat er geschreven wordt.";
    }
    if (normalized.includes("WRITE_QUEUED") || normalized.includes("WRITE_CONFIRMED")) {
      return "Runtime write loopt; wacht op bevestigde readback voordat je de waarden vertrouwt.";
    }
    if (normalized.includes("FAILED")) {
      return "Firmware kon de runtime tabel niet volledig bevestigen. Laad opnieuw voordat je verder test.";
    }
    if (normalized.includes("LOADED")) {
      return "Readback is in de velden geladen. Controleer de waarden voordat je schrijft.";
    }
    if (normalized.includes("BLOCKED")) {
      return "Firmware heeft de actie geblokkeerd; controleer enable, standby en compressorstatus.";
    }
    if (normalized.includes("LOAD_REQUESTED")) {
      return "Readback is aangevraagd bij de ODU.";
    }
    return "Laatste status van de experimentele runtime tabel.";
  }

  function renderOduRuntimeFrequencyNumberInput(key, tabIndex) {
    if (!hasEntity(key)) {
      return `<span class="oq-settings-odu-runtime-missing">-</span>`;
    }
    return renderNumberInputControl({
      key,
      value: getInputDraftValue(key),
      meta: getNumberMeta(key),
      controlClass: "oq-helper-control oq-helper-control--suffix oq-settings-odu-runtime-control",
      inputClass: "oq-helper-input oq-helper-input--compact-number oq-settings-odu-runtime-input",
      inputAttributes: `data-oq-odu-runtime-tab-index="${tabIndex}"`,
      unitMarkup: '<span class="oq-helper-unit-chip">Hz</span>',
    });
  }

  function renderOduRuntimeFrequencyTable(hpIndex) {
    const levelCount = ODU_RUNTIME_FREQUENCY_LEVELS.length;
    return `
      <div class="oq-settings-odu-runtime-table" role="table" aria-label="${escapeHtml(`HP${hpIndex} ODU runtime frequentietabel`)}">
        <div class="oq-settings-odu-runtime-row oq-settings-odu-runtime-row--head" role="row">
          <span role="columnheader">Level</span>
          <span role="columnheader">Cooling</span>
          <span role="columnheader">Heating</span>
        </div>
        ${ODU_RUNTIME_FREQUENCY_LEVELS.map((level) => `
          <div class="oq-settings-odu-runtime-row" role="row">
            <span class="oq-settings-odu-runtime-level" role="cell">F${level}</span>
            <div role="cell">${renderOduRuntimeFrequencyNumberInput(getOduRuntimeFrequencyValueKey(hpIndex, "cooling", level), level)}</div>
            <div role="cell">${renderOduRuntimeFrequencyNumberInput(getOduRuntimeFrequencyValueKey(hpIndex, "heating", level), levelCount + level)}</div>
          </div>
        `).join("")}
      </div>
    `;
  }

  function handleOduRuntimeFrequencyInputKeyDown(event) {
    if (event.key !== "Tab" || event.altKey || event.ctrlKey || event.metaKey) {
      return;
    }

    const input = event.target && event.target.closest
      ? event.target.closest("input[data-oq-odu-runtime-tab-index]")
      : null;
    const table = input ? input.closest(".oq-settings-odu-runtime-table") : null;
    if (!input || !table) {
      return;
    }

    const inputs = Array.from(table.querySelectorAll("input[data-oq-odu-runtime-tab-index]:not(:disabled)"))
      .sort((left, right) => Number(left.dataset.oqOduRuntimeTabIndex || 0) - Number(right.dataset.oqOduRuntimeTabIndex || 0));
    const currentIndex = inputs.indexOf(input);
    const nextInput = inputs[currentIndex + (event.shiftKey ? -1 : 1)];
    if (currentIndex < 0 || !nextInput) {
      return;
    }

    event.preventDefault();
    nextInput.focus();
    if (typeof nextInput.select === "function") {
      nextInput.select();
    }
  }

  function renderOduRuntimeFrequencyHpPanel(hpIndex) {
    const enableKey = getOduRuntimeFrequencyControlKey(hpIndex, "Enable");
    const loadKey = getOduRuntimeFrequencyControlKey(hpIndex, "Load");
    const applyKey = getOduRuntimeFrequencyControlKey(hpIndex, "Apply");
    const statusKey = getOduRuntimeFrequencyControlKey(hpIndex, "Status");
    const status = String(getEntityValue(statusKey) || "").trim() || "Nog niet geladen";
    const validation = getOduRuntimeFrequencyTableValidation(hpIndex);
    const operation = getOduRuntimeFrequencyOperationState(hpIndex);
    const enabled = Boolean(getEntityValue(enableKey));
    const busy = state.loadingEntities || state.busyAction === loadKey || state.busyAction === applyKey;
    const applyDisabled = busy || !enabled || !validation.valid || !operation.safe || !hasEntity(applyKey);
    const validationText = validation.valid
      ? "Waarden zijn 0-120 Hz en per tabel oplopend."
      : `Controleer ${validation.invalid.slice(0, 5).join(", ")}${validation.invalid.length > 5 ? "..." : ""}.`;

    return `
      <article class="oq-settings-odu-runtime-panel">
        <div class="oq-settings-odu-runtime-panel-head">
          <div>
            <p class="oq-helper-label">HP${hpIndex}</p>
            <h4>Runtime frequentietabel</h4>
            <p>${escapeHtml(operation.reason)} Laatste compressorfrequentie: ${escapeHtml(operation.freq)}.</p>
          </div>
          <div class="oq-settings-odu-runtime-actions">
            ${hasEntity(loadKey) ? renderNamedActionButton(loadKey, state.busyAction === loadKey ? "Lezen..." : "Uit ODU laden", "oq-helper-button oq-helper-button--ghost", busy) : ""}
      ${hasEntity(enableKey) ? renderSettingsCompactSwitchControl(enableKey, `HP${hpIndex} writes vrijgeven`, enabled, busy, "Enable", "Locked") : ""}
            ${hasEntity(applyKey) ? renderNamedActionButton(applyKey, state.busyAction === applyKey ? "Schrijven..." : "Runtime toepassen", "oq-helper-button oq-helper-button--warning", applyDisabled) : ""}
          </div>
        </div>
        <div class="oq-settings-odu-runtime-status${status.toUpperCase().includes("BLOCKED") ? " is-warning" : status.toUpperCase().includes("APPLIED") || status.toUpperCase().includes("LOADED") ? " is-success" : ""}">
          <div>
            <span>Status</span>
            <strong>${escapeHtml(status)}</strong>
          </div>
          <p>${escapeHtml(getOduRuntimeFrequencyStatusCopy(status))}</p>
        </div>
        ${renderOduRuntimeFrequencyTable(hpIndex)}
        <p class="oq-settings-odu-runtime-validation${validation.valid && operation.safe ? " is-ok" : " is-warning"}">${escapeHtml(validationText)} ${escapeHtml(operation.safe ? "" : operation.reason)}</p>
      </article>
    `;
  }

  function renderSettingsOduRuntimeFrequencySection() {
    const hpIndexes = getOduRuntimeFrequencyHpIndexes();
    if (!hpIndexes.length) {
      return "";
    }

    return `
      <details class="oq-settings-section oq-settings-section--collapsible oq-settings-odu-runtime-details"${state.oduRuntimeFrequencyDetailsOpen ? " open" : ""}>
        <summary class="oq-settings-section-summary" data-oq-action="toggle-odu-runtime-frequency-details">
          <div class="oq-settings-section-head">
            <div class="oq-settings-section-head-meta">
              <p class="oq-helper-label">Experimenteel</p>
              <div class="oq-settings-section-head-meta-badge">
                <span class="oq-settings-section-badge oq-settings-section-badge--experimental">Runtime only</span>
              </div>
            </div>
            <h3>ODU runtime frequentietabel</h3>
            <p>Lees en schrijf de ODU frequentietabel alleen runtime; waarden worden niet opgeslagen in EEPROM.</p>
          </div>
          <span class="oq-settings-section-summary-toggle" aria-hidden="true"></span>
        </summary>
        <div class="oq-settings-section-collapsible-body oq-settings-odu-runtime">
          <div class="oq-settings-odu-runtime-warning" role="alert">
            <strong>Schrijft direct naar ODU runtime registers.</strong>
            <p>Gebruik dit alleen voor gecontroleerde tests. Apply werkt alleen wanneer de HP in standby staat, de compressor uit is en de enable-schakelaar bewust aan staat.</p>
          </div>
          <div class="oq-settings-odu-runtime-panels">
            ${hpIndexes.map((hpIndex) => renderOduRuntimeFrequencyHpPanel(hpIndex)).join("")}
          </div>
        </div>
      </details>
    `;
  }

  function renderPowerHouseBaseFields(className = "oq-settings-grid") {
    return `
      <div class="${escapeHtml(className)}">
        ${renderSettingsNumberField("houseOutdoorMax", "Maximum heating outdoor temperature", "Bij deze buitentemperatuur is verwarmen meestal niet meer nodig.")}
        ${renderSettingsNumberField("housePower", "Rated maximum house power", "Hoeveel warmte je woning ongeveer nodig heeft wanneer het -10°C buiten is.")}
        ${renderPowerHouseResponseProfilesField()}
      </div>
    `;
  }

  function renderWaterSettingsFields(className = "oq-settings-grid") {
    const offsetMarkup = renderHpWaterSensorOffsetSettings();
    return `
      <div class="${escapeHtml(className)}">
        ${renderSettingsNumberField("maxWater", "Maximale watertemperatuur", "Normale bovengrens voor de watertemperatuur tijdens bedrijf. OpenQuatt begint enkele graden eerder al terug te regelen en bewaakt een harde trip op 5°C boven deze grens.")}
      </div>
      ${offsetMarkup}
    `;
  }

  function renderHpWaterSensorOffsetSettings() {
    const rows = [
      { label: "HP1 water in", rawKey: "hp1WaterInRaw", offsetKey: "hp1WaterInOffset", finalKey: "hp1WaterIn" },
      { label: "HP1 water uit", rawKey: "hp1WaterOutRaw", offsetKey: "hp1WaterOutOffset", finalKey: "hp1WaterOut" },
      { label: "HP2 water in", rawKey: "hp2WaterInRaw", offsetKey: "hp2WaterInOffset", finalKey: "hp2WaterIn" },
      { label: "HP2 water uit", rawKey: "hp2WaterOutRaw", offsetKey: "hp2WaterOutOffset", finalKey: "hp2WaterOut" },
    ].filter((row) => hasEntity(row.offsetKey) && hasEntity(row.finalKey));

    if (!rows.length) {
      return "";
    }

    const renderRow = (row) => {
      const meta = getNumberMeta(row.offsetKey);
      const raw = getHpWaterRawValue(row.rawKey, row.finalKey, row.offsetKey);
      const offsetDraft = parseLooseNumber(getInputDraftValue(row.offsetKey));
      const finalFromDraft = Number.isFinite(raw) && Number.isFinite(offsetDraft)
        ? formatSettingsNumberValue(raw + offsetDraft, meta.uom || "°C", 2)
        : getSettingsTemperatureValue(row.finalKey, 2);

      return `
        <article class="oq-settings-hp-offset-row" data-oq-settings-field="${escapeHtml(row.offsetKey)}" data-oq-hp-offset-raw-key="${escapeHtml(row.rawKey)}" data-oq-hp-offset-final-key="${escapeHtml(row.finalKey)}">
          <div class="oq-settings-hp-offset-copy">
            <strong>${escapeHtml(row.label)}</strong>
            <span data-oq-hp-offset-active>${escapeHtml(getSettingsTemperatureValue(row.finalKey, 2))} actief</span>
          </div>
          <div class="oq-settings-hp-offset-equation" aria-label="${escapeHtml(`${row.label} correctie`)}">
            <div class="oq-settings-hp-offset-readout">
              <span>Raw</span>
              <strong data-oq-hp-offset-raw>${escapeHtml(Number.isFinite(raw) ? formatSettingsNumberValue(raw, meta.uom || "°C", 2) : getSettingsTemperatureValue(row.rawKey, 2))}</strong>
            </div>
            <span class="oq-settings-hp-offset-operator">+</span>
            <label class="oq-settings-hp-offset-input">
              <span>Correctie</span>
              ${renderNumberInputControl({
                key: row.offsetKey,
                value: getInputDraftValue(row.offsetKey),
                meta,
                controlClass: "oq-helper-control oq-helper-control--suffix",
                inputClass: "oq-helper-input oq-helper-input--compact-number",
                unitMarkup: meta.uom ? `<span class="oq-helper-unit-chip">${escapeHtml(meta.uom)}</span>` : "",
              })}
            </label>
            <span class="oq-settings-hp-offset-operator">=</span>
            <div class="oq-settings-hp-offset-readout oq-settings-hp-offset-final">
              <span>Na wijziging</span>
              <strong data-oq-hp-offset-final>${escapeHtml(finalFromDraft)}</strong>
            </div>
          </div>
        </article>
      `;
    };

    return `
      <div class="oq-settings-subpanel oq-settings-hp-offset-panel">
        <div class="oq-settings-subpanel-head">
          <p class="oq-helper-label">Sensorcorrecties</p>
          <h4>Water in/out offsets</h4>
          <p>Raw is de ongecorrigeerde sensorwaarde. Actief is de temperatuur die OpenQuatt nu gebruikt: raw plus correctie.</p>
        </div>
        <div class="oq-settings-hp-offset-list">
          ${rows.map(renderRow).join("")}
        </div>
      </div>
    `;
  }

  function renderSilentSettingsGrid(className = "oq-settings-grid") {
    return `
      <div class="${escapeHtml(className)}">
        ${renderSettingsTimeField("silentStartTime", "Start stille uren", "Vanaf dit tijdstip werkt het systeem in stille modus.")}
        ${renderSettingsTimeField("silentEndTime", "Einde stille uren", "Vanaf dit tijdstip stopt de stille modus weer.")}
        ${renderSettingsSliderField("silentMax", "Maximaal niveau tijdens stille uren", "Zo ver mag het systeem nog opschalen tijdens stille uren.")}
        ${renderSettingsSliderField("dayMax", "Maximaal niveau overdag", "Zo ver mag het systeem overdag opschalen.")}
      </div>
    `;
  }

  function renderHeatingStrategyExplainCards() {
    const curveActive = isCurveMode();
    return `
      <div class="oq-settings-strategy-grid">
        <button
          class="oq-settings-strategy-card${curveActive ? "" : " is-active"}"
          type="button"
          data-oq-action="select-settings-option"
          data-select-key="strategy"
          data-select-option="${escapeHtml(STRATEGY_OPTION_POWER_HOUSE)}"
          aria-pressed="${curveActive ? "false" : "true"}"
          ${state.loadingEntities || state.busyAction === "save-strategy" ? "disabled" : ""}
        >
          <p class="oq-helper-label">Power House</p>
          <h4>Automatisch op basis van je woning</h4>
          <p>Power House schat hoeveel warmte je woning nodig heeft. Dit is meestal de beste keuze als je zonder veel finetuning wilt starten.</p>
          <ul class="oq-settings-strategy-points">
            <li>Gebruikt vooral het geschatte warmteverlies van je woning en de buitentemperatuur waarbij verwarmen meestal niet meer nodig is.</li>
            <li>Reageert meer op het gedrag van je woning dan op een vaste temperatuurcurve.</li>
            <li>Handig als je vooral comfort wilt en zo min mogelijk handmatig wilt instellen.</li>
          </ul>
        </button>
        <button
          class="oq-settings-strategy-card${curveActive ? " is-active" : ""}"
          type="button"
          data-oq-action="select-settings-option"
          data-select-key="strategy"
          data-select-option="${escapeHtml(STRATEGY_OPTION_CURVE)}"
          aria-pressed="${curveActive ? "true" : "false"}"
          ${state.loadingEntities || state.busyAction === "save-strategy" ? "disabled" : ""}
        >
          <p class="oq-helper-label">Stooklijn</p>
          <h4>Regelen met een stooklijn</h4>
          <p>Met een stooklijn kies je per buitentemperatuur welke aanvoertemperatuur nodig is. Handig als je dit bewust zelf wilt instellen.</p>
          <ul class="oq-settings-strategy-points">
            <li>Gebruikt de curvepunten van <strong>-20°C t/m 15°C</strong> als basis.</li>
            <li>Voelt herkenbaar voor wie gewend is aan een klassieke stooklijn.</li>
            <li>Handig als je de aanvoertemperatuur per buitentemperatuur zelf wilt finetunen.</li>
          </ul>
        </button>
      </div>
    `;
  }

  function renderPowerHouseResponseProfilesField() {
    if (!hasEntity("phResponseProfile")) {
      return "";
    }

    const currentValue = String(getEntityValue("phResponseProfile") || "");
    const busy = state.loadingEntities || state.busyAction === "save-phResponseProfile";
    const options = [
      {
        value: "Calm",
        label: "Rustig",
        rise: "12 min",
        fall: "5 min",
        meta: "Opbouw 12 min · Afbouw 5 min",
        copy: "Reageert minder snel op schommelingen. Fijn voor vloerverwarming of een woning die traag opwarmt en afkoelt.",
      },
      {
        value: "Balanced",
        label: "Gebalanceerd",
        rise: "8 min",
        fall: "3 min",
        meta: "Opbouw 8 min · Afbouw 3 min",
        copy: "Goede middenweg tussen comfort en rust. Meestal het beste startpunt voor dagelijks gebruik.",
      },
      {
        value: "Responsive",
        label: "Direct",
        rise: "5 min",
        fall: "2 min",
        meta: "Opbouw 5 min · Afbouw 2 min",
        copy: "Reageert sneller op veranderende warmtevraag. Handig als je woning snel afkoelt of je sneller effect wilt zien.",
      },
      {
        value: "Custom",
        label: "Aangepast",
        rise: "Vrij",
        fall: "Instelbaar",
        meta: "Opbouw en afbouw instelbaar",
        copy: "Stel zelf in hoe snel de regeling op- en afbouwt. Handig als de standaardprofielen net niet goed passen.",
      },
    ];
    const controlMarkup = `
      <div class="oq-settings-choice-grid oq-settings-choice-grid--response">
        ${options.map((option) => {
          const isActive = option.value === currentValue;
          if (option.value === "Custom" && isActive) {
            return `
              <div class="oq-settings-choice-card oq-settings-choice-card--static oq-settings-choice-card--custom is-active">
                <span class="oq-settings-choice-title">${escapeHtml(option.label)}</span>
                <div class="oq-settings-choice-meta">
                  <span class="oq-settings-choice-meta-text">${escapeHtml(option.meta)}</span>
                </div>
                <span class="oq-settings-choice-copy">${escapeHtml(option.copy)}</span>
                <div class="oq-settings-choice-inline-grid oq-settings-choice-inline-grid--inside-card">
                  ${renderSettingsMiniNumberField("phDemandRiseTime", "Opbouwtijd", "Tijd waarmee de warmtevraag bij oplopende vraag naar het nieuwe niveau toeloopt.", { compact: true, showCopy: false, infoId: "phDemandRiseTime-inline", embedded: true })}
                  ${renderSettingsMiniNumberField("phDemandFallTime", "Afbouwtijd", "Tijd waarmee de warmtevraag bij afnemende vraag weer terugzakt.", { compact: true, showCopy: false, infoId: "phDemandFallTime-inline", embedded: true })}
                </div>
              </div>
            `;
          }
          return renderSettingsChoiceOption({ key: "phResponseProfile", option: option.value, currentValue, busy, copy: option.copy, meta: option.meta });
        }).join("")}
      </div>
    `;

    return renderSettingsFieldCard(
      "phResponseProfile",
      "Power House responsprofiel",
      "Kies hoe rustig of direct Power House mag reageren op veranderingen in je woning.",
      controlMarkup,
      "oq-settings-field--span-2",
    );
  }

  function renderHeatingCurveProfileField() {
    if (!hasEntity("curveControlProfile")) {
      return "";
    }

    const currentValue = String(getEntityValue("curveControlProfile") || "");
    const busy = state.loadingEntities || state.busyAction === "save-curveControlProfile";
    const options = [
      {
        value: "Comfort",
        label: "Comfort",
        meta: "Eerder starten · Fijner trimmen",
        copy: "Reageert wat actiever en laat de aanvoertemperatuur eerder oplopen. Fijn als je vooral comfort wilt.",
      },
      {
        value: "Balanced",
        label: "Gebalanceerd",
        meta: "Middenweg · Voorspelbaar gedrag",
        copy: "De standaard middenweg voor dagelijks gebruik. Voorspelbaar en tegelijk vlot genoeg.",
      },
      {
        value: "Stable",
        label: "Stabiel",
        meta: "Meer filtering · Rustigere stappen",
        copy: "Reageert rustiger en stuurt minder snel bij. Fijn als je zo min mogelijk schommelingen wilt.",
      },
    ];

    const controlMarkup = `
      <div class="oq-settings-choice-grid oq-settings-choice-grid--curve">
        ${options.map((option) => renderSettingsChoiceOption({ key: "curveControlProfile", option: option.value, currentValue, busy, copy: option.copy, meta: option.meta })).join("")}
      </div>
    `;

    return renderSettingsFieldCard(
      "curveControlProfile",
      "Regelprofiel",
      "Kies of de stooklijn vooral comfortabel, gebalanceerd of rustig moet reageren.",
      controlMarkup,
      "oq-settings-field--span-2",
    );
  }

  function renderPowerHouseConceptGraphic() {
    const safe = (key, fallback = 0) => {
      const numeric = getEntityNumericValue(key);
      return Number.isNaN(numeric) ? fallback : Math.max(0, numeric);
    };
    const exampleSetpoint = 20;
    const comfortBelow = safe("phComfortBelow", 0.1);
    const comfortAbove = safe("phComfortAbove", 0.3);
    const temperatureReaction = safe("phKp", 3000);

    const quietMin = exampleSetpoint - comfortBelow;
    const quietMax = exampleSetpoint + comfortAbove;

    const width = 620;
    const height = 184;
    const left = 46;
    const right = 24;
    const top = 18;
    const bottom = 40;
    const axisY = 96;
    const plotWidth = width - left - right;
    const minTemp = Math.min(exampleSetpoint - 1.2, quietMin - 0.35);
    const maxTemp = Math.max(exampleSetpoint + 1.2, quietMax + 0.35);
    const toX = (temp) => left + ((temp - minTemp) / Math.max(0.01, maxTemp - minTemp)) * plotWidth;

    const leftX = toX(minTemp);
    const rightX = toX(maxTemp);
    const quietMinX = toX(quietMin);
    const setpointX = toX(exampleSetpoint);
    const quietMaxX = toX(quietMax);
    const showQuietMinTick = Math.abs(quietMin - exampleSetpoint) > 0.001;
    const showQuietMaxTick = Math.abs(quietMax - exampleSetpoint) > 0.001;
    const curveTopY = top + 24;
    const curveBottomY = height - bottom;
    const tooltipY = axisY - 44;
    const renderConceptTooltip = (x, kicker, detail, modifier = "") => {
      const width = 110;
      const height = 36;
      const tooltipX = Math.max(leftX + 4, Math.min(rightX - width - 4, x - width / 2));
      const hitX = x - 14;
      const hitY = tooltipY;
      const hitWidth = 28;
      const hitHeight = axisY - tooltipY + 16;
      return `
        <g class="oq-ph-concept-hotspot" tabindex="0" role="img" aria-label="${escapeHtml(`${kicker} ${detail}`)}">
          <rect class="oq-ph-concept-hit" x="${hitX}" y="${hitY}" width="${hitWidth}" height="${hitHeight}" rx="10"></rect>
          <circle class="oq-ph-concept-hit" cx="${x}" cy="${axisY}" r="14"></circle>
          <g class="oq-ph-concept-tooltip${modifier ? ` oq-ph-concept-tooltip--${modifier}` : ""}" transform="translate(${tooltipX} ${tooltipY})">
            <rect class="oq-ph-concept-tooltip-panel" width="${width}" height="${height}" rx="10"></rect>
            <text x="${width / 2}" y="14" text-anchor="middle" class="oq-ph-concept-tooltip-kicker">${escapeHtml(kicker)}</text>
            <text x="${width / 2}" y="27" text-anchor="middle" class="oq-ph-concept-tooltip-detail">${escapeHtml(detail)}</text>
          </g>
        </g>
      `;
    };
    const linePath = [
      `M ${leftX.toFixed(1)} ${curveTopY.toFixed(1)}`,
      `L ${quietMinX.toFixed(1)} ${axisY.toFixed(1)}`,
      `L ${quietMaxX.toFixed(1)} ${axisY.toFixed(1)}`,
      `L ${rightX.toFixed(1)} ${curveBottomY.toFixed(1)}`,
    ].join(" ");

    return `
      <div class="oq-ph-concept-card">
        <div class="oq-ph-concept-visual">
          <p class="oq-ph-concept-kicker">Kamercorrectie op Power House-huisvraag</p>
          <div class="oq-ph-concept-caption">
            Conceptueel: deze grafiek toont de kamercorrectie boven op de berekende Power House-huisvraag. Onder de comfortgrens loopt die correctie op, binnen de comfortband blijft de directe reactie vlak terwijl opgebouwde comfort memory nog kan doorwerken, en boven de bovengrens start warme tegensturing.
          </div>
          <div class="oq-ph-concept-meta">
            <span class="oq-ph-concept-meta-pill">Setpoint <strong>${escapeHtml(formatNumericState(exampleSetpoint, 1, "°C"))}</strong></span>
            <span class="oq-ph-concept-meta-pill">Comfortband <strong>${escapeHtml(formatNumericState(quietMin, 1, "°C"))} – ${escapeHtml(formatNumericState(quietMax, 1, "°C"))}</strong></span>
            <span class="oq-ph-concept-meta-pill">Temperatuurreactie <strong>${escapeHtml(formatNumericState(temperatureReaction, 0, " W/K"))}</strong></span>
          </div>
          <svg class="oq-ph-concept-svg" viewBox="0 0 ${width} ${height}" role="img" aria-label="Grafiek voor Power House tuning">
            <rect x="${leftX.toFixed(1)}" y="${top}" width="${Math.max(20, quietMinX - leftX).toFixed(1)}" height="${(height - top - bottom).toFixed(1)}" rx="18" class="oq-ph-concept-band oq-ph-concept-band--below"></rect>
            <rect x="${quietMinX.toFixed(1)}" y="${top}" width="${Math.max(20, quietMaxX - quietMinX).toFixed(1)}" height="${(height - top - bottom).toFixed(1)}" rx="18" class="oq-ph-concept-band oq-ph-concept-band--calm"></rect>
            <rect x="${quietMaxX.toFixed(1)}" y="${top}" width="${Math.max(20, rightX - quietMaxX).toFixed(1)}" height="${(height - top - bottom).toFixed(1)}" rx="18" class="oq-ph-concept-band oq-ph-concept-band--above"></rect>

            <line x1="${leftX}" y1="${top}" x2="${leftX}" y2="${height - bottom}" class="oq-ph-concept-axis"></line>
            <line x1="${leftX}" y1="${axisY}" x2="${rightX}" y2="${axisY}" class="oq-ph-concept-axis"></line>
            <line x1="${setpointX}" y1="${top}" x2="${setpointX}" y2="${height - bottom}" class="oq-ph-concept-axis oq-ph-concept-axis--vertical"></line>

            <path d="${linePath}" class="oq-ph-concept-curve"></path>

            ${showQuietMinTick ? `<line x1="${quietMinX}" y1="${axisY - 12}" x2="${quietMinX}" y2="${axisY + 12}" class="oq-ph-concept-marker oq-ph-concept-marker--below"></line>` : ""}
            <line x1="${setpointX}" y1="${axisY - 14}" x2="${setpointX}" y2="${axisY + 14}" class="oq-ph-concept-marker oq-ph-concept-marker--setpoint"></line>
            ${showQuietMaxTick ? `<line x1="${quietMaxX}" y1="${axisY - 12}" x2="${quietMaxX}" y2="${axisY + 12}" class="oq-ph-concept-marker oq-ph-concept-marker--above"></line>` : ""}
            ${showQuietMinTick ? `<circle cx="${quietMinX}" cy="${axisY}" r="5" class="oq-ph-concept-point oq-ph-concept-point--below"></circle>` : ""}
            <circle cx="${setpointX}" cy="${axisY}" r="6" class="oq-ph-concept-point oq-ph-concept-point--setpoint"></circle>
            ${showQuietMaxTick ? `<circle cx="${quietMaxX}" cy="${axisY}" r="5" class="oq-ph-concept-point oq-ph-concept-point--above"></circle>` : ""}
            ${showQuietMinTick ? renderConceptTooltip(quietMinX, "Comfort onder setpoint", formatNumericState(quietMin, 1, "°C"), "below") : ""}
            ${renderConceptTooltip(setpointX, "Setpoint", formatNumericState(exampleSetpoint, 1, "°C"), "setpoint")}
            ${showQuietMaxTick ? renderConceptTooltip(quietMaxX, "Comfort boven setpoint", formatNumericState(quietMax, 1, "°C"), "above") : ""}

            <text x="${leftX + 8}" y="${top + 18}" text-anchor="start" class="oq-ph-concept-label oq-ph-concept-label--heat">meer warmte</text>
            <text x="${leftX + 8}" y="${height - bottom - 8}" text-anchor="start" class="oq-ph-concept-label">minder warmte</text>
            <text x="${leftX}" y="${height - 26}" text-anchor="start" class="oq-ph-concept-label">kouder</text>
            <text x="${rightX}" y="${height - 26}" text-anchor="end" class="oq-ph-concept-label">warmer</text>

            ${showQuietMinTick ? `<text x="${quietMinX - 5}" y="${height - 14}" text-anchor="end" class="oq-ph-concept-tick-value">${escapeHtml(formatNumericState(quietMin, 1, "°C"))}</text>` : ""}
            <text x="${setpointX}" y="${height - 14}" text-anchor="middle" class="oq-ph-concept-tick-value oq-ph-concept-tick-value--setpoint">${escapeHtml(formatNumericState(exampleSetpoint, 1, "°C"))}</text>
            ${showQuietMaxTick ? `<text x="${quietMaxX + 5}" y="${height - 14}" text-anchor="start" class="oq-ph-concept-tick-value">${escapeHtml(formatNumericState(quietMax, 1, "°C"))}</text>` : ""}
          </svg>
        </div>
        <div class="oq-ph-concept-zones">
          <span class="oq-ph-concept-zone-chip oq-ph-concept-zone-chip--below">
            <span class="oq-ph-concept-zone-chip-label">extra opwarming</span>
            <span class="oq-ph-concept-zone-chip-meta">onder ${escapeHtml(formatNumericState(quietMin, 1, "°C"))}</span>
          </span>
          <span class="oq-ph-concept-zone-chip oq-ph-concept-zone-chip--calm">
            <span class="oq-ph-concept-zone-chip-label">comfortband</span>
            <span class="oq-ph-concept-zone-chip-meta">${escapeHtml(formatNumericState(quietMin, 1, "°C"))} – ${escapeHtml(formatNumericState(quietMax, 1, "°C"))}</span>
          </span>
          <span class="oq-ph-concept-zone-chip oq-ph-concept-zone-chip--above">
            <span class="oq-ph-concept-zone-chip-label">warme tegensturing</span>
            <span class="oq-ph-concept-zone-chip-meta">boven ${escapeHtml(formatNumericState(quietMax, 1, "°C"))}</span>
          </span>
        </div>
        <div class="oq-ph-concept-notes">
          <article class="oq-ph-concept-note">
            <span class="oq-ph-concept-note-title">Comfort onder</span>
            <p>Bepaalt wanneer extra opwarming begint onder het setpoint.</p>
          </article>
          <article class="oq-ph-concept-note">
            <span class="oq-ph-concept-note-title">Comfortband</span>
            <p>Binnen deze band blijft de directe temperatuurreactie vlak. Een opgebouwde comfort memory kan hier nog wel even doorwerken en loopt daarna rustig af.</p>
          </article>
          <article class="oq-ph-concept-note">
            <span class="oq-ph-concept-note-title">Temperatuurreactie</span>
            <p>Bepaalt hoe sterk Power House buiten de comfortband extra of minder warmtevraag als kamercorrectie toevoegt boven op de berekende huisvraag.</p>
          </article>
        </div>
      </div>
    `;
  }

  function renderPowerHouseAdvancedField() {
    const fields = [
      renderSettingsNumberField("phKp", "Temperatuurreactie", "Bepaalt hoe sterk Power House kamertemperatuurafwijking vertaalt naar extra of minder warmtevraag in W/K. Hogere waarden reageren steviger, lagere waarden rustiger.", "", { unitOverride: "W/K" }),
      renderSettingsNumberField("phComfortBelow", "Comfort onder setpoint", "Extra comfortmarge onder het setpoint. Hiermee kan Power House iets sneller warmte vragen als de kamertemperatuur merkbaar onder het doel zakt."),
      renderSettingsNumberField("phComfortAbove", "Comfort boven setpoint", "Bovenmarge rond het setpoint. Hiermee bepaal je hoeveel ruimte er boven het setpoint mag ontstaan voordat warme tegensturing begint."),
    ].filter(Boolean);

    if (!fields.length) {
      return "";
    }

    return `
      <div class="oq-settings-subpanel oq-settings-subpanel--nested">
        <div class="oq-settings-subpanel-head">
          <p class="oq-helper-label">Power House tuning</p>
          <h4>Geavanceerde Power House tuning</h4>
          <p>Met deze instellingen verfijn je hoe Power House reageert rond het kamersetpoint. De grafiek hierboven laat meteen zien wat dat betekent.</p>
        </div>
        ${renderPowerHouseConceptGraphic()}
        <div class="oq-settings-grid">
          ${fields.join("")}
        </div>
      </div>
    `;
  }

  function renderSettingsHeatPumpLimiterCard(title, keyA, keyB) {
    const fields = [
      renderSettingsSelectField(keyA, "Stand A", "Kies hier welke compressorstand je wilt uitsluiten."),
      renderSettingsSelectField(keyB, "Stand B", "Kies hier nog een compressorstand die je wilt overslaan."),
    ]
      .filter(Boolean)
      .join("");

    if (!fields) {
      return "";
    }

    return `
      <article class="oq-settings-hp-group">
        <header>
          <p class="oq-helper-label">Warmtepomp</p>
          <h4>${escapeHtml(title)}</h4>
          <p>Stel hier de standen in die OpenQuatt niet hoeft te gebruiken.</p>
        </header>
        <div class="oq-settings-hp-group-grid">
          ${fields}
        </div>
      </article>
    `;
  }

  function renderSettingsFlowSection() {
    const flowTuning = renderFlowTuningFields();
    return renderSettingsSection(
      "Installatie",
      "Flowregeling",
      "Kies hoe de pomp wordt geregeld en stel de flow-instellingen direct als installatieparameter in. De autotune vind je later bij Service & commissioning.",
      `
        ${renderFlowSettingsFields()}
        ${flowTuning ? `
          <div class="oq-settings-subpanel oq-settings-subpanel--nested">
            <div class="oq-settings-subpanel-head">
              <p class="oq-helper-label">Flow afstelling</p>
              <h4>Flow Kp en Ki</h4>
              <p>Deze waarden bepalen hoe stevig de flowregeling corrigeert op afwijkingen. Autotune vult hier later een voorstel voor in.</p>
            </div>
            ${flowTuning}
          </div>
        ` : ""}
      `,
    );
  }

  function isInstallationMonitoringBinaryActive(key) {
    return hasEntity(key) && isEntityActive(key);
  }

  function isInstallationMonitoringIntegrationEnabled(key) {
    return !hasEntity(key) || isEntityActive(key);
  }

  function getInstallationMonitoringFailureText(key) {
    if (!hasEntity(key)) {
      return "";
    }
    return formatFailures(getEntityStateText(key, "None"));
  }

  const NON_WARNING_FAILURE_NAMES = new Set([
    "compressor oil return",
  ]);

  function getWarningFailureItems(value) {
    const formatted = formatFailures(value);
    if (formatted === "Geen actieve storingen") {
      return [];
    }
    return formatted
      .split(",")
      .map((item) => item.trim())
      .filter((item) => item && !NON_WARNING_FAILURE_NAMES.has(item.toLowerCase()));
  }

  function formatWarningFailures(value) {
    const warningItems = getWarningFailureItems(value);
    return warningItems.length > 0 ? warningItems.join(", ") : "Geen actieve storingen";
  }

  function getInstallationMonitoringWarningFailureText(key) {
    if (!hasEntity(key)) {
      return "";
    }
    return formatWarningFailures(getEntityStateText(key, "None"));
  }

  function isInstallationMonitoringFailureActive(key) {
    const normalized = getInstallationMonitoringWarningFailureText(key).trim().toLowerCase();
    return Boolean(normalized) && normalized !== "geen actieve storingen";
  }

  function getInstallationMonitoringModel() {
    const problems = [];
    const cyclingActive = isInstallationMonitoringBinaryActive("compressorCyclingWarning2h")
      || isInstallationMonitoringBinaryActive("compressorCyclingWarning72h")
      || isInstallationMonitoringBinaryActive("alternatingCompressorStartsWarning");
    const cyclingAlertLatched = isInstallationMonitoringBinaryActive("compressorCyclingAlertLatched");
    const cicPollingEnabled = isInstallationMonitoringIntegrationEnabled("cicPollingEnabled");
    const otEnabled = isInstallationMonitoringIntegrationEnabled("otEnabled");
    const addBinaryProblem = (key, label) => {
      if (isInstallationMonitoringBinaryActive(key)) {
        problems.push({ key, label });
      }
    };
    addBinaryProblem("compressorCyclingWarning2h", "Te veel compressorstarts in 2 uur");
    addBinaryProblem("compressorCyclingWarning72h", "Te veel compressorstarts in 72 uur");
    addBinaryProblem("alternatingCompressorStartsWarning", "Warmtepompen starten opvallend vaak om en om");
    addBinaryProblem("lowflowFaultActive", "Te lage flow");
    addBinaryProblem("flowMismatch", "Flowverschil tussen warmtepomp 1 en 2");
    if (cicPollingEnabled) {
      addBinaryProblem("cicDataStale", "CIC-data is verouderd");
    }
    if (otEnabled) {
      addBinaryProblem("otLinkProblem", "OpenTherm-verbinding meldt een probleem");
    }
    if (isInstallationMonitoringFailureActive("hp1Failures")) {
      problems.push({ key: "hp1Failures", label: `Warmtepomp 1: ${getInstallationMonitoringWarningFailureText("hp1Failures")}` });
    }
    if (isInstallationMonitoringFailureActive("hp2Failures")) {
      problems.push({ key: "hp2Failures", label: `Warmtepomp 2: ${getInstallationMonitoringWarningFailureText("hp2Failures")}` });
    }
    const activeProblemCount = problems.length;
    if (cyclingAlertLatched && !cyclingActive) {
      problems.unshift({
        key: "compressorCyclingAlertLatched",
        label: "Pendelen eerder gedetecteerd; melding nog niet bevestigd",
      });
    }

    return {
      problems,
      active: problems.length > 0,
      cyclingAlertLatched,
      cyclingAlertActive: cyclingActive,
      cyclingAlertRecovered: cyclingAlertLatched && !cyclingActive,
      title: activeProblemCount > 0
        ? "Aandacht nodig"
        : cyclingAlertLatched ? "Eerdere waarschuwing nog niet bevestigd" : "Geen bijzonderheden",
      copy: activeProblemCount > 0
        ? `${problems.length} aandachtspunt${problems.length === 1 ? "" : "en"} zichtbaar. Bekijk hieronder de details.`
        : cyclingAlertLatched
          ? "Het pendelen is hersteld. De melding blijft zichtbaar totdat je haar bevestigt."
          : "OpenQuatt ziet op dit moment geen actieve aandachtspunten in de bewaakte signalen.",
    };
  }

  function renderInstallationMonitoringBadge(active, activeLabel = "Aandacht", clearLabel = "OK") {
    return `<span class="oq-settings-monitoring-badge${active ? " is-warning" : " is-clear"}">${escapeHtml(active ? activeLabel : clearLabel)}</span>`;
  }

  function renderInstallationMonitoringStatusRow({ label, value, note = "", active = false }) {
    return `
      <div class="oq-settings-monitoring-row${active ? " is-warning" : ""}">
        <div>
          <p>${escapeHtml(label)}</p>
          <strong>${escapeHtml(value)}</strong>
          ${note ? `<span>${escapeHtml(note)}</span>` : ""}
        </div>
        ${renderInstallationMonitoringBadge(active)}
      </div>
    `;
  }

  function getInstallationMonitoringCount(key) {
    const value = getEntityNumericValue(key);
    return Number.isNaN(value) ? "—" : String(Math.max(0, Math.round(value)));
  }

  function formatInstallationMonitoringLastStart(key) {
    const ageMinutes = getEntityNumericValue(key);
    if (Number.isNaN(ageMinutes)) {
      return "Nog niet gemeten";
    }
    if (ageMinutes < 1) {
      return "Zojuist";
    }
    if (ageMinutes < 60) {
      return `${Math.round(ageMinutes)} min geleden`;
    }
    const hours = Math.floor(ageMinutes / 60);
    const minutes = Math.round(ageMinutes % 60);
    return `${hours}u ${minutes}m geleden`;
  }

  function formatInstallationMonitoringEpoch(key) {
    const epoch = getEntityNumericValue(key);
    if (Number.isNaN(epoch) || epoch <= 0) {
      return "Tijdstip onbekend";
    }
    return new Intl.DateTimeFormat("nl-NL", {
      day: "2-digit",
      month: "short",
      hour: "2-digit",
      minute: "2-digit",
    }).format(new Date(epoch * 1000));
  }

  function renderInstallationMonitoringCyclingIncident(monitoring) {
    if (!monitoring.cyclingAlertLatched) {
      return "";
    }
    const alternating = isInstallationMonitoringBinaryActive("compressorCyclingAlertAlternating");
    const hp1Peak2h = getInstallationMonitoringCount("compressorCyclingAlertHp1Peak2h");
    const hp1Peak72h = getInstallationMonitoringCount("compressorCyclingAlertHp1Peak72h");
    const hp2Peak2h = hasEntity("compressorCyclingAlertHp2Peak2h")
      ? getInstallationMonitoringCount("compressorCyclingAlertHp2Peak2h")
      : "";
    const hp2Peak72h = hasEntity("compressorCyclingAlertHp2Peak72h")
      ? getInstallationMonitoringCount("compressorCyclingAlertHp2Peak72h")
      : "";
    return `
      <div class="oq-settings-monitoring-incident${monitoring.cyclingAlertActive ? " is-active" : " is-recovered"}">
        <div class="oq-settings-monitoring-incident-head">
          <div>
            <p>Pendelmelding</p>
            <strong>${monitoring.cyclingAlertActive ? "Pendelen is nu actief" : "Pendelen is niet meer actief"}</strong>
          </div>
          ${renderInstallationMonitoringBadge(monitoring.cyclingAlertActive, "Actief", "Hersteld")}
        </div>
        <span>${monitoring.cyclingAlertActive
          ? "De melding blijft staan nadat de starts weer rustig zijn geworden. Hier zie je de vastgelegde aantallen."
          : "OpenQuatt bewaart deze melding totdat je haar hieronder bevestigt."}</span>
        <dl>
          <div><dt>Eerste melding</dt><dd>${escapeHtml(formatInstallationMonitoringEpoch("compressorCyclingAlertFirstSeen"))}</dd></div>
          <div><dt>Laatste melding</dt><dd>${escapeHtml(formatInstallationMonitoringEpoch("compressorCyclingAlertLastSeen"))}</dd></div>
          <div><dt>HP1 2 uur</dt><dd>${escapeHtml(hp1Peak2h)} starts</dd></div>
          <div><dt>HP1 72 uur</dt><dd>${escapeHtml(hp1Peak72h)} starts</dd></div>
          ${hp2Peak2h ? `<div><dt>HP2 2 uur</dt><dd>${escapeHtml(hp2Peak2h)} starts</dd></div>` : ""}
          ${hp2Peak72h ? `<div><dt>HP2 72 uur</dt><dd>${escapeHtml(hp2Peak72h)} starts</dd></div>` : ""}
          ${alternating ? "<div><dt>Patroon</dt><dd>Opvallend vaak om en om</dd></div>" : ""}
        </dl>
        <div class="oq-settings-monitoring-incident-action">
          ${state.entities.acknowledgeCompressorCyclingAlert
            ? renderNamedActionButton(
              "acknowledgeCompressorCyclingAlert",
              "Melding bevestigen",
              "oq-helper-button oq-helper-button--ghost",
              monitoring.cyclingAlertActive,
            )
            : ""}
          <span>${monitoring.cyclingAlertActive
            ? "Bevestigen wordt beschikbaar zodra het pendelen is gestopt."
            : "Na bevestigen verdwijnt de herinnering uit het overzicht."}</span>
        </div>
      </div>
    `;
  }

  function renderInstallationMonitoringCompressorUnit(title, prefix) {
    if (!hasEntity(`${prefix}CompressorStarts2h`)) {
      return "";
    }
    return `
      <div class="oq-settings-monitoring-compressor-unit">
        <div>
          <p>${escapeHtml(title)}</p>
          <span>Laatste start: ${escapeHtml(formatInstallationMonitoringLastStart(`${prefix}CompressorLastStartAge`))}</span>
        </div>
        <dl>
          <div><dt>2 uur</dt><dd>${escapeHtml(getInstallationMonitoringCount(`${prefix}CompressorStarts2h`))}</dd></div>
          <div><dt>6 uur</dt><dd>${escapeHtml(getInstallationMonitoringCount(`${prefix}CompressorStarts6h`))}</dd></div>
          <div><dt>24 uur</dt><dd>${escapeHtml(getInstallationMonitoringCount(`${prefix}CompressorStarts24h`))}</dd></div>
          <div><dt>72 uur</dt><dd>${escapeHtml(getInstallationMonitoringCount(`${prefix}CompressorStarts72h`))}</dd></div>
        </dl>
      </div>
    `;
  }

  function syncInstallationMonitoringDetailsState(monitoring) {
    const problemSignature = monitoring.active
      ? monitoring.problems.map((problem) => problem.key).sort().join("|")
      : "";
    if (!problemSignature) {
      state.installationMonitoringProblemSignature = "";
      return;
    }
    if (problemSignature !== state.installationMonitoringProblemSignature) {
      state.installationMonitoringProblemSignature = problemSignature;
      state.installationMonitoringDetailsOpen = true;
    }
  }

  function renderSettingsInstallationMonitoringSection() {
    const monitoring = getInstallationMonitoringModel();
    syncInstallationMonitoringDetailsState(monitoring);
    const cicPollingEnabled = isInstallationMonitoringIntegrationEnabled("cicPollingEnabled");
    const otEnabled = isInstallationMonitoringIntegrationEnabled("otEnabled");
    const hydraulicRows = [
      hasEntity("lowflowFaultActive") ? renderInstallationMonitoringStatusRow({
        label: "Flow",
        value: isInstallationMonitoringBinaryActive("lowflowFaultActive") ? "Te lage flow gemeld" : "Geen lage-flowmelding",
        active: isInstallationMonitoringBinaryActive("lowflowFaultActive"),
      }) : "",
      hasEntity("flowMismatch") ? renderInstallationMonitoringStatusRow({
        label: "Flowvergelijking duo",
        value: isInstallationMonitoringBinaryActive("flowMismatch") ? "Afwijking tussen warmtepompen" : "Geen afwijking gemeld",
        active: isInstallationMonitoringBinaryActive("flowMismatch"),
      }) : "",
    ].filter(Boolean).join("");
    const connectionRows = [
      hasEntity("cicDataStale") ? renderInstallationMonitoringStatusRow({
        label: "CIC-data",
        value: !cicPollingEnabled
          ? "Polling uitgeschakeld"
          : isInstallationMonitoringBinaryActive("cicDataStale") ? "Verouderd" : "Geen probleem gemeld",
        active: cicPollingEnabled && isInstallationMonitoringBinaryActive("cicDataStale"),
      }) : "",
      hasEntity("otLinkProblem") ? renderInstallationMonitoringStatusRow({
        label: "OpenTherm",
        value: !otEnabled
          ? "Uitgeschakeld"
          : isInstallationMonitoringBinaryActive("otLinkProblem") ? "Verbindingsprobleem" : "Geen probleem gemeld",
        active: otEnabled && isInstallationMonitoringBinaryActive("otLinkProblem"),
      }) : "",
    ].filter(Boolean).join("");
    const hpRows = [
      hasEntity("hp1Failures") ? renderInstallationMonitoringStatusRow({
        label: "Warmtepomp 1",
        value: getInstallationMonitoringFailureText("hp1Failures"),
        active: isInstallationMonitoringFailureActive("hp1Failures"),
      }) : "",
      hasEntity("hp2Failures") ? renderInstallationMonitoringStatusRow({
        label: "Warmtepomp 2",
        value: getInstallationMonitoringFailureText("hp2Failures"),
        active: isInstallationMonitoringFailureActive("hp2Failures"),
      }) : "",
    ].filter(Boolean).join("");
    const compressorLimit2h = getEntityNumericValue("compressorStarts2hWarningLimit");
    const compressorLimit72h = getEntityNumericValue("compressorStarts72hWarningLimit");
    const compressorWarningActive = isInstallationMonitoringBinaryActive("compressorCyclingWarning2h")
      || isInstallationMonitoringBinaryActive("compressorCyclingWarning72h")
      || isInstallationMonitoringBinaryActive("alternatingCompressorStartsWarning")
      || monitoring.cyclingAlertLatched;
    const hydraulicPanel = hydraulicRows ? `
      <article class="oq-settings-monitoring-card">
        <header><p>Hydrauliek</p></header>
        <div class="oq-settings-monitoring-rows">${hydraulicRows}</div>
      </article>
    ` : "";
    const hpPanel = hpRows ? `
      <article class="oq-settings-monitoring-card">
        <header><p>Warmtepompen</p></header>
        <div class="oq-settings-monitoring-rows">${hpRows}</div>
      </article>
    ` : "";
    const connectionPanel = connectionRows ? `
      <article class="oq-settings-monitoring-card">
        <header><p>Verbindingen</p></header>
        <div class="oq-settings-monitoring-rows">${connectionRows}</div>
      </article>
    ` : "";

    return renderSettingsSection(
      "Bewaking",
      "Installatiebewaking",
      "Lokale diagnose voor compressorstarts, hydrauliek en verbindingen. Hiervoor is geen Home Assistant nodig.",
      `
        <div class="oq-settings-monitoring-summary${monitoring.active ? " is-warning" : " is-clear"}">
          <div>
            <p>Huidige status</p>
            <strong>${escapeHtml(monitoring.title)}</strong>
            <span>${escapeHtml(monitoring.copy)}</span>
          </div>
          ${renderInstallationMonitoringBadge(monitoring.active, "Aandacht nodig", "Alles rustig")}
        </div>
        <details class="oq-settings-monitoring-details"${state.installationMonitoringDetailsOpen ? " open" : ""}>
          <summary data-oq-action="toggle-installation-monitoring-details">
            <strong>Geef details weer</strong>
          </summary>
        ${monitoring.active ? `
          <div class="oq-settings-monitoring-active-list">
            ${monitoring.problems.map((problem) => `<span>${escapeHtml(problem.label)}</span>`).join("")}
          </div>
        ` : ""}
        <div class="oq-settings-monitoring-grid">
          <div class="oq-settings-monitoring-column">
          <article class="oq-settings-monitoring-card">
            <header>
              <p>Compressorstarts</p>
              ${renderInstallationMonitoringBadge(
                compressorWarningActive,
              )}
            </header>
            <span>Gemeten starts sinds de laatste controllerherstart. 6 uur en 24 uur geven extra context; de waarschuwingen zelf gelden op 2 uur en 72 uur.</span>
            ${renderInstallationMonitoringCyclingIncident(monitoring)}
            <div class="oq-settings-monitoring-compressor-list">
              ${renderInstallationMonitoringCompressorUnit("Warmtepomp 1", "hp1")}
              ${renderInstallationMonitoringCompressorUnit("Warmtepomp 2", "hp2")}
            </div>
            ${renderSettingsSliderField(
              "compressorStarts2hWarningLimit",
              "Alarmwaarde voor aantal starts per 2 uur",
              "Aantal starts per warmtepomp binnen 2 uur.",
              "oq-settings-field--compact",
              { minLabel: "1", maxLabel: "20", valueLabel: Number.isNaN(compressorLimit2h) ? "—" : `${Math.round(compressorLimit2h)} starts / 2 uur` },
            )}
            ${renderSettingsSliderField(
              "compressorStarts72hWarningLimit",
              "Alarmwaarde voor aantal starts per 72 uur",
              "Aantal starts per warmtepomp binnen 72 uur.",
              "oq-settings-field--compact",
              { minLabel: "1", maxLabel: "120", valueLabel: Number.isNaN(compressorLimit72h) ? "—" : `${Math.round(compressorLimit72h)} starts / 72 uur` },
            )}
          </article>
          ${hpPanel}
          </div>
          <div class="oq-settings-monitoring-column">
            ${hydraulicPanel}
            ${connectionPanel}
          </div>
        </div>
        </details>
      `,
    );
  }

  function renderHpWaterCalibrationWizard({
    status,
    running,
    resultReady,
    startDisabled,
    abortDisabled,
    applyDisabled,
    busy,
    controlsAvailable,
  }) {
    const normalizedStatus = String(status || "").toUpperCase();
    const failed = normalizedStatus.includes("FAILED") || normalizedStatus.includes("REFUSED") || normalizedStatus.includes("ABORT");
    const applied = normalizedStatus.includes("APPLIED");
    const hasHp2 = hasEntity("hp2WaterIn") || hasEntity("hp2WaterOut") || hasEntity("hp2WaterInRaw") || hasEntity("hp2WaterOutRaw");
    const stableProgress = getEntityNumericValue("hpWaterCalibrationStableProgress");
    const stableRequired = getEntityNumericValue("hpWaterCalibrationStableRequired");
    const remaining = getEntityNumericValue("hpWaterCalibrationRemaining");
    const phaseCode = Math.round(getEntityNumericValue("hpWaterCalibrationPhase"));
    const mixing = running && (phaseCode === 1 || normalizedStatus.includes("MIXING"));
    const measuring = running && !mixing;
    const maxDurationS = 300;
    const minMixingS = 60;
    const elapsed = Number.isFinite(remaining) ? Math.max(0, maxDurationS - remaining) : NaN;
    const mixingRemaining = Number.isFinite(elapsed) ? Math.max(0, minMixingS - elapsed) : NaN;
    const progressValue = mixing && Number.isFinite(elapsed)
      ? Math.max(0, Math.min(100, (elapsed / minMixingS) * 100))
      : measuring && Number.isFinite(stableProgress) && Number.isFinite(stableRequired) && stableRequired > 0
        ? Math.max(0, Math.min(100, (stableProgress / stableRequired) * 100))
        : running && Number.isFinite(remaining)
          ? Math.max(0, Math.min(100, 100 - ((remaining / maxDurationS) * 100)))
          : resultReady
            ? 100
            : 0;
    const spreadValue = resultReady && hasEntity("hpWaterCalibrationResultSpreadBefore")
      ? getSettingsTemperatureValue("hpWaterCalibrationResultSpreadBefore", 2)
      : getSettingsTemperatureValue("hpWaterCalibrationSpread", 2);
    const stableCopy = mixing
      ? "Water mengen"
      : Number.isFinite(stableProgress) && Number.isFinite(stableRequired) && stableRequired > 0
        ? (stableProgress > 0
        ? `${Math.round(Math.max(0, stableProgress))} / ${Math.round(stableRequired)} s binnen grenzen`
        : "Nog niet binnen grenzen")
        : "Wachten op stabiel venster";
    const stepIndex = resultReady ? 3 : running ? 2 : 1;
    const statusTitle = applied
      ? "Offsets toegepast"
      : resultReady
      ? `Meting klaar - spreiding ${spreadValue}`
      : running
        ? (mixing
          ? `Water mengen${Number.isFinite(mixingRemaining) && mixingRemaining > 0 ? ` - meting start over ${Math.round(mixingRemaining)} s` : ""}`
          : `Meting bezig - ${Number.isFinite(remaining) && remaining > 0 ? `max. ${Math.round(remaining)} s resterend` : stableCopy}`)
        : failed
          ? "Meting niet voltooid"
          : "Voorbereiding";
    const statusCopy = applied
      ? "De voorgestelde offsets zijn opgeslagen."
      : resultReady
      ? "Controleer de voorgestelde offsets en pas ze toe."
      : running
        ? (mixing
          ? "De waterpomp circuleert zonder compressor zodat de watertemperaturen eerst kunnen mengen."
          : "De firmware stopt zodra het laatste meetvenster binnen de spreiding- en driftgrenzen valt.")
        : failed
          ? getSettingsTextStatValue("hpWaterCalibrationStatus", "Controleer de voorwaarden en start opnieuw.")
          : (hasHp2
            ? "Start alleen wanneer compressor en boiler uit zijn. HP1 en HP2 water in/out worden samen naar een relatieve referentie gebracht."
            : "Start alleen wanneer compressor en boiler uit zijn. Bij single setup wordt HP1 water in/out onderling gelijkgetrokken; supply blijft diagnose.");
    const sensorRows = [
      { label: "HP1 water in", rawKey: "hp1WaterInRaw", liveKey: "hp1WaterIn", resultRawKey: "hpWaterCalibrationResultHp1InRawAvg", offsetKey: "hp1WaterInOffset", suggestedKey: "hp1WaterInOffsetSuggested" },
      { label: "HP1 water uit", rawKey: "hp1WaterOutRaw", liveKey: "hp1WaterOut", resultRawKey: "hpWaterCalibrationResultHp1OutRawAvg", offsetKey: "hp1WaterOutOffset", suggestedKey: "hp1WaterOutOffsetSuggested" },
      { label: "HP2 water in", rawKey: "hp2WaterInRaw", liveKey: "hp2WaterIn", resultRawKey: "hpWaterCalibrationResultHp2InRawAvg", offsetKey: "hp2WaterInOffset", suggestedKey: "hp2WaterInOffsetSuggested" },
      { label: "HP2 water uit", rawKey: "hp2WaterOutRaw", liveKey: "hp2WaterOut", resultRawKey: "hpWaterCalibrationResultHp2OutRawAvg", offsetKey: "hp2WaterOutOffset", suggestedKey: "hp2WaterOutOffsetSuggested" },
    ].filter((row) => hasEntity(row.liveKey) || hasEntity(row.rawKey) || hasEntity(row.offsetKey));

    const renderStep = (index, label) => {
      const done = stepIndex > index;
      const active = stepIndex === index;
      return `
        <div class="oq-settings-hp-calibration-step${done ? " is-done" : ""}${active ? " is-active" : ""}">
          <span>${done ? "✓" : index}</span>
          <strong>${escapeHtml(label)}</strong>
        </div>
      `;
    };

    const renderLiveCard = (row) => {
      return `
        <article class="oq-settings-hp-calibration-live-card">
          <span>${escapeHtml(row.label)}</span>
          <strong>${escapeHtml(getSettingsTemperatureValue(row.liveKey, 2))}</strong>
        </article>
      `;
    };

    const renderResultRow = (row) => {
      const rawAverage = getEntityNumericValue(row.resultRawKey);
      const rawValue = Number.isFinite(rawAverage)
        ? rawAverage
        : getHpWaterRawValue(row.rawKey, row.liveKey, row.offsetKey);
      const suggestion = getEntityNumericValue(row.suggestedKey);
      const finalValue = Number.isFinite(rawValue) && Number.isFinite(suggestion)
        ? formatSettingsNumberValue(rawValue + suggestion, state.entities[row.suggestedKey]?.uom || "°C", 2)
        : "—";

      return `
        <tr>
          <th scope="row">${escapeHtml(row.label)}</th>
          <td>${escapeHtml(Number.isFinite(rawValue) ? formatSettingsNumberValue(rawValue, state.entities[row.liveKey]?.uom || "°C", 2) : "—")}</td>
          <td>${escapeHtml(getSettingsTemperatureValue(row.offsetKey, 2))}</td>
          <td><span class="oq-settings-hp-calibration-offset-pill">${escapeHtml(getSettingsTemperatureValue(row.suggestedKey, 2))}</span></td>
          <td>${escapeHtml(finalValue)}</td>
        </tr>
      `;
    };

    return `
      <div class="oq-settings-hp-calibration">
        <div class="oq-settings-hp-calibration-steps">
          ${renderStep(1, "Voorbereiding")}
          ${renderStep(2, "Meting")}
          ${renderStep(3, "Offsets toepassen")}
        </div>

        <div class="oq-settings-hp-calibration-status${resultReady ? " is-success" : running ? " is-active" : failed ? " is-warning" : ""}">
          <div>
            <strong>${escapeHtml(statusTitle)}</strong>
            <p>${escapeHtml(statusCopy)}</p>
          </div>
          ${running || resultReady ? `<span>${escapeHtml(running ? stableCopy : "Resultaat beschikbaar")}</span>` : ""}
          ${running ? `<div class="oq-settings-hp-calibration-progress"><i style="width: ${progressValue.toFixed(0)}%"></i></div>` : ""}
        </div>

        ${running ? `
          <div class="oq-settings-hp-calibration-live-grid">
            ${sensorRows.map(renderLiveCard).join("")}
            <article class="oq-settings-hp-calibration-live-card is-highlight">
              <span>Spreiding</span>
              <strong>${escapeHtml(getSettingsTemperatureValue("hpWaterCalibrationSpread", 2))}</strong>
            </article>
            <article class="oq-settings-hp-calibration-live-card">
              <span>Supply verschil</span>
              <strong>${escapeHtml(getSettingsTemperatureValue("hpWaterCalibrationSupplyDelta", 2))}</strong>
            </article>
          </div>
          <p class="oq-settings-hp-calibration-note">Supply wordt alleen als diagnose getoond en niet automatisch gecorrigeerd.</p>
        ` : ""}

        ${resultReady ? `
          <div class="oq-settings-hp-calibration-results">
            <div class="oq-settings-hp-calibration-result-summary">
              <span>Referentie ${escapeHtml(getSettingsTemperatureValue("hpWaterCalibrationResultReference", 2))}</span>
              <span>Supply verschil ${escapeHtml(getSettingsTemperatureValue("hpWaterCalibrationSupplyDelta", 2))}</span>
            </div>
            <div class="oq-settings-hp-calibration-table-wrap">
              <table class="oq-settings-hp-calibration-table">
                <thead>
                  <tr>
                    <th scope="col">Sensor</th>
                    <th scope="col">Raw gemiddelde</th>
                    <th scope="col">Huidig actief</th>
                    <th scope="col">Voorstel</th>
                    <th scope="col">Na toepassen</th>
                  </tr>
                </thead>
                <tbody>
                  ${sensorRows.map(renderResultRow).join("")}
                </tbody>
              </table>
            </div>
          </div>
        ` : ""}

        ${controlsAvailable ? `
          <div class="oq-settings-hp-calibration-actions" data-oq-hp-water-calibration-actions>
            ${renderNamedToggleActionButton({
              active: running,
              startKey: "hpWaterCalibrationStart",
              stopKey: "hpWaterCalibrationAbort",
              startLabel: "Kalibratie starten",
              stopLabel: "Meting stoppen",
              startDisabled: busy || startDisabled,
              stopDisabled: busy || abortDisabled,
            })}
            ${state.entities.hpWaterCalibrationApply ? renderNamedActionButton("hpWaterCalibrationApply", "Offsets toepassen", "oq-helper-button oq-helper-button--primary", busy || applyDisabled) : ""}
          </div>
        ` : ""}
      </div>
    `;
  }

  function getSettingsServiceModel() {
    const hasBoilerAssist = hasEntity("boilerCvAssistEnabled") && isEntityActive("boilerCvAssistEnabled");
    const cm100Status = getCommissioningStatusValue();
    const cm100Active = isEntityActive("cm100Active");
    const cm100StatusUpper = String(cm100Status || "").trim().toUpperCase();
    const cm100WaitingForCm100 = isCommissioningTaskStatusWaitingForCm100(cm100Status);
    const cm100Ready = !cm100WaitingForCm100 && (cm100Active || cm100StatusUpper === "CM100 READY");
    const cm100TaskLocked = state.commissioningTaskLock === "cm100";
    const cm100Busy = state.loadingEntities || state.busyAction === "commissioningCm100Start" || state.busyAction === "commissioningCm100Stop" || cm100TaskLocked;
    const cm100Pending = Boolean(state.pendingCommissioningCm100Start);
    const cm100StartDisabled = cm100Busy || cm100Ready || cm100WaitingForCm100;
    const cm100StopDisabled = cm100Busy || !cm100Ready;
    const boilerStatus = getStatusTextValue("boilerPowerTestStatus", "IDLE");
    const boilerProgress = getCommissioningProgressModel(boilerStatus, "boiler");
    const boilerActive = isEntityActive("boilerPowerTestActive");
    const boilerBusy = state.loadingEntities || state.busyAction === "boilerPowerTestStart" || state.busyAction === "boilerPowerTestAbort" || state.busyAction === "boilerPowerTestApply";
    const boilerControls = Boolean(state.entities.boilerPowerTestStart || state.entities.boilerPowerTestAbort || state.entities.boilerPowerTestApply);
    const boilerPending = Boolean(state.pendingBoilerPowerTestStart);
    const boilerTaskLocked = state.commissioningTaskLock === "boiler";
    const boilerTaskWaitingForCm100 = isCommissioningTaskStatusWaitingForCm100(boilerStatus);
    const boilerTaskTerminal = isCommissioningTaskStatusTerminal(boilerStatus);
    const boilerTaskRunning = !boilerTaskTerminal &&
      (boilerActive || boilerPending || boilerTaskLocked || isCommissioningTaskStatusActive(boilerStatus)) &&
      !boilerTaskWaitingForCm100;
    const boilerRatedPower = getSettingsStatValue("boilerRatedHeatPower");
    const boilerHeatPowerRaw = getSettingsStatValue("boilerHeatPower");
    const boilerHeatPowerNumeric = getEntityNumericValue("boilerHeatPower");
    const boilerHeatPower = boilerHeatPowerNumeric > 0
      ? boilerHeatPowerRaw
      : (boilerTaskRunning && state.commissioningBoilerHeatPowerDisplay ? state.commissioningBoilerHeatPowerDisplay : boilerHeatPowerRaw);
    if (boilerHeatPowerNumeric > 0) {
      state.commissioningBoilerHeatPowerDisplay = boilerHeatPowerRaw;
    }
    const autotuneStatus = getStatusTextValue("flowAutotuneStatus", "IDLE");
    const autotuneProgress = getCommissioningProgressModel(autotuneStatus, "autotune");
    const autotuneBusy = state.loadingEntities || state.busyAction === "flowAutotuneStart" || state.busyAction === "flowAutotuneAbort" || state.busyAction === "flowAutotuneApply";
    const autotuneControls = Boolean(state.entities.flowAutotuneStart || state.entities.flowAutotuneAbort || state.entities.flowAutotuneApply);
    const autotunePending = Boolean(state.pendingFlowAutotuneStart);
    const autotuneTaskLocked = state.commissioningTaskLock === "autotune";
    const autotuneTaskWaitingForCm100 = isCommissioningTaskStatusWaitingForCm100(autotuneStatus);
    const autotuneTaskTerminal = isCommissioningTaskStatusTerminal(autotuneStatus);
    const autotuneTaskRunning = !autotuneTaskTerminal &&
      (autotunePending || autotuneTaskLocked || isCommissioningTaskStatusActive(autotuneStatus)) &&
      !autotuneTaskWaitingForCm100;
    const airPurgeStatus = getStatusTextValue("airPurgeStatus", "IDLE");
    const airPurgeProgress = getCommissioningProgressModel(airPurgeStatus, "purge");
    const airPurgeActive = isEntityActive("airPurgeActive");
    const airPurgeBusy = state.loadingEntities || state.busyAction === "airPurgeStart" || state.busyAction === "airPurgeAbort";
    const airPurgeControls = Boolean(state.entities.airPurgeStart || state.entities.airPurgeAbort);
    const airPurgePending = Boolean(state.pendingAirPurgeStart);
    const airPurgeTaskLocked = state.commissioningTaskLock === "purge";
    const airPurgeTaskTerminal = isCommissioningTaskStatusTerminal(airPurgeStatus);
    const airPurgeTaskRunning = !airPurgeTaskTerminal &&
      (airPurgeActive || airPurgePending || airPurgeTaskLocked || isCommissioningTaskStatusActive(airPurgeStatus));
    const airPurgeResultReady = /DONE/.test(String(airPurgeStatus || "").toUpperCase());
    const airPurgeAvailable = Boolean(airPurgeControls || state.entities.airPurgeStatus || state.entities.airPurgeReturnToAuto);
    const airPurgeRemaining = getSettingsStatValue("airPurgeRemaining", { decimals: 0 });
    const airPurgePhaseCode = getEntityNumericValue("airPurgePhase");
    const airPurgePhase = airPurgePhaseCode === 1
      ? "Rustig"
      : airPurgePhaseCode === 2
        ? "Pulsen"
        : airPurgePhaseCode === 3
          ? "Stabiliseren"
          : airPurgeProgress.phase;
    const manualFlowStatus = getStatusTextValue("manualFlowStatus", "IDLE");
    const manualFlowActive = isEntityActive("manualFlowActive");
    const manualFlowBusy = state.loadingEntities || state.busyAction === "manualFlowStart" || state.busyAction === "manualFlowAbort";
    const manualFlowControls = Boolean(state.entities.manualFlowStart || state.entities.manualFlowAbort);
    const manualFlowPending = Boolean(state.pendingManualFlowStart);
    const manualFlowTaskLocked = state.commissioningTaskLock === "manual-flow";
    const manualFlowTaskTerminal = isCommissioningTaskStatusTerminal(manualFlowStatus);
    const manualFlowTaskRunning = !manualFlowTaskTerminal &&
      (manualFlowActive || manualFlowPending || manualFlowTaskLocked || isCommissioningTaskStatusActive(manualFlowStatus));
    const manualHpStatus = getStatusTextValue("manualHpStatus", "IDLE");
    const manualHpActive = isEntityActive("manualHpActive");
    const manualHpBusy = state.loadingEntities || state.busyAction === "manualHpStart" || state.busyAction === "manualHpAbort";
    const manualHpControls = Boolean(state.entities.manualHpStart || state.entities.manualHpAbort);
    const manualHpPending = Boolean(state.pendingManualHpStart);
    const manualHpTaskLocked = state.commissioningTaskLock === "manual-hp";
    const manualHpTaskTerminal = isCommissioningTaskStatusTerminal(manualHpStatus);
    const manualHpTaskRunning = !manualHpTaskTerminal &&
      (manualHpActive || manualHpPending || manualHpTaskLocked || isCommissioningTaskStatusActive(manualHpStatus));
    const manualHpSafetyStopped = /SAFETY STOP/.test(String(manualHpStatus || "").toUpperCase());
    const manualHpStopping = /STOPPING/.test(String(manualHpStatus || "").toUpperCase());
    const hpWaterCalibrationStatus = getStatusTextValue("hpWaterCalibrationStatus", "IDLE");
    const hpWaterCalibrationProgress = getCommissioningProgressModel(hpWaterCalibrationStatus, "hp-water-calibration");
    const hpWaterCalibrationActive = isEntityActive("hpWaterCalibrationActive");
    const hpWaterCalibrationBusy = state.loadingEntities || state.busyAction === "hpWaterCalibrationStart" || state.busyAction === "hpWaterCalibrationAbort" || state.busyAction === "hpWaterCalibrationApply";
    const hpWaterCalibrationControls = Boolean(state.entities.hpWaterCalibrationStart || state.entities.hpWaterCalibrationAbort || state.entities.hpWaterCalibrationApply);
    const hpWaterCalibrationPending = Boolean(state.pendingHpWaterCalibrationStart);
    const hpWaterCalibrationTaskLocked = state.commissioningTaskLock === "hp-water-calibration";
    const hpWaterCalibrationTaskTerminal = isCommissioningTaskStatusTerminal(hpWaterCalibrationStatus);
    const hpWaterCalibrationTaskRunning = !hpWaterCalibrationTaskTerminal &&
      (hpWaterCalibrationActive || hpWaterCalibrationPending || hpWaterCalibrationTaskLocked || isCommissioningTaskStatusActive(hpWaterCalibrationStatus));
    const hpWaterCalibrationResultReady = /DONE|APPLIED/.test(String(hpWaterCalibrationStatus || "").toUpperCase());
    const hpWaterCalibrationApplied = /APPLIED/.test(String(hpWaterCalibrationStatus || "").toUpperCase());
    const flowKpSuggested = getSettingsStatValue("flowKpSuggested", { decimals: 5, trimTrailingZeros: true });
    const flowKiSuggested = getSettingsStatValue("flowKiSuggested", { decimals: 5, trimTrailingZeros: true });
    const boilerResultReady = /DONE|APPLIED/.test(String(boilerStatus || "").toUpperCase());
    const autotuneResultReady = /DONE|APPLIED/.test(String(autotuneStatus || "").toUpperCase());
    const boilerStatusDisplay = cm100Ready
      ? (boilerTaskWaitingForCm100
        ? "Wachten op CM100"
        : (boilerTaskRunning
          ? boilerProgress.phase
          : (boilerResultReady ? "Klaar om toe te passen" : "Klaar om te starten")))
      : "Wachten op CM100";
    const autotuneStatusDisplay = cm100Ready
      ? (autotuneTaskWaitingForCm100
        ? "Wachten op CM100"
        : (autotuneTaskRunning
          ? autotuneProgress.phase
          : (autotuneResultReady ? "Klaar om toe te passen" : "Klaar om te starten")))
      : "Wachten op CM100";
    const airPurgeStatusDisplay = cm100Ready
      ? (airPurgeTaskRunning
        ? airPurgeProgress.phase
        : (airPurgeResultReady ? "Klaar" : "Klaar om te starten"))
      : "Wachten op CM100";
    const manualFlowStatusDisplay = cm100Ready
      ? (manualFlowTaskRunning ? "Actief" : "Klaar om te starten")
      : "Wachten op CM100";
    const manualHpStatusDisplay = cm100Ready
      ? (manualHpTaskRunning ? (manualHpStopping ? "Bezig met stoppen" : (manualHpSafetyStopped ? "Veiligheidsstop" : "Actief")) : "Klaar om te starten")
      : "Wachten op CM100";
    const hpWaterCalibrationStatusDisplay = cm100Ready
      ? (hpWaterCalibrationTaskRunning
        ? hpWaterCalibrationProgress.phase
        : (hpWaterCalibrationApplied ? "Offsets toegepast" : (hpWaterCalibrationResultReady ? "Klaar om toe te passen" : "Klaar om te starten")))
      : "Wachten op CM100";
    const boilerStartDisabled = !cm100Ready || boilerBusy || !boilerControls || autotuneTaskRunning || airPurgeTaskRunning || manualFlowTaskRunning || manualHpTaskRunning || hpWaterCalibrationTaskRunning || boilerTaskRunning || autotuneTaskLocked || airPurgeTaskLocked || manualFlowTaskLocked || manualHpTaskLocked || hpWaterCalibrationTaskLocked || boilerPending;
    const boilerAbortDisabled = boilerBusy || !(boilerTaskRunning || boilerTaskLocked || boilerPending);
    const boilerApplyDisabled = boilerBusy || boilerStartDisabled || !boilerResultReady || autotuneTaskRunning || airPurgeTaskRunning || hpWaterCalibrationTaskRunning;
    const autotuneStartDisabled = !cm100Ready || autotuneBusy || !autotuneControls || boilerTaskRunning || airPurgeTaskRunning || manualFlowTaskRunning || manualHpTaskRunning || hpWaterCalibrationTaskRunning || autotuneTaskRunning || boilerTaskLocked || airPurgeTaskLocked || manualFlowTaskLocked || manualHpTaskLocked || hpWaterCalibrationTaskLocked || autotunePending;
    const autotuneAbortDisabled = autotuneBusy || !(autotuneTaskRunning || autotuneTaskLocked || autotunePending);
    const autotuneApplyDisabled = autotuneBusy || autotuneStartDisabled || !autotuneResultReady || boilerTaskRunning || airPurgeTaskRunning || hpWaterCalibrationTaskRunning;
    const airPurgeStartDisabled = !cm100Ready || airPurgeBusy || !airPurgeControls || boilerTaskRunning || autotuneTaskRunning || manualFlowTaskRunning || manualHpTaskRunning || hpWaterCalibrationTaskRunning || airPurgeTaskRunning || boilerTaskLocked || autotuneTaskLocked || manualFlowTaskLocked || manualHpTaskLocked || hpWaterCalibrationTaskLocked || airPurgePending;
    const airPurgeAbortDisabled = airPurgeBusy || !(airPurgeTaskRunning || airPurgeTaskLocked || airPurgePending);
    const manualFlowStartDisabled = !cm100Ready || manualFlowBusy || !manualFlowControls || boilerTaskRunning || autotuneTaskRunning || airPurgeTaskRunning || manualHpTaskRunning || hpWaterCalibrationTaskRunning || manualFlowTaskRunning || boilerTaskLocked || autotuneTaskLocked || airPurgeTaskLocked || manualHpTaskLocked || hpWaterCalibrationTaskLocked || manualFlowPending;
    const manualFlowAbortDisabled = manualFlowBusy || !(manualFlowTaskRunning || manualFlowTaskLocked || manualFlowPending);
    const manualHpStartDisabled = !cm100Ready || manualHpBusy || !manualHpControls || boilerTaskRunning || autotuneTaskRunning || airPurgeTaskRunning || manualFlowTaskRunning || hpWaterCalibrationTaskRunning || manualHpTaskRunning || boilerTaskLocked || autotuneTaskLocked || airPurgeTaskLocked || manualFlowTaskLocked || hpWaterCalibrationTaskLocked || manualHpPending;
    const manualHpAbortDisabled = manualHpBusy || !(manualHpTaskRunning || manualHpTaskLocked || manualHpPending);
    const hpWaterCalibrationStartDisabled = !cm100Ready || hpWaterCalibrationBusy || !hpWaterCalibrationControls || boilerTaskRunning || autotuneTaskRunning || airPurgeTaskRunning || manualFlowTaskRunning || manualHpTaskRunning || hpWaterCalibrationTaskRunning || boilerTaskLocked || autotuneTaskLocked || airPurgeTaskLocked || manualFlowTaskLocked || manualHpTaskLocked || hpWaterCalibrationPending;
    const hpWaterCalibrationAbortDisabled = hpWaterCalibrationBusy || !(hpWaterCalibrationTaskRunning || hpWaterCalibrationTaskLocked || hpWaterCalibrationPending);
    const hpWaterCalibrationApplyDisabled = hpWaterCalibrationBusy || hpWaterCalibrationTaskRunning || !hpWaterCalibrationResultReady || hpWaterCalibrationApplied;

    if (cm100Pending && cm100Ready) {
      state.pendingCommissioningCm100Start = false;
    }
    if (cm100TaskLocked && (cm100Ready || /READY|STOPPED|DONE|FAILED|ABORT|APPLIED|REFUSED/.test(cm100StatusUpper))) {
      state.commissioningTaskLock = "";
    }
    if (boilerPending && (boilerActive || isCommissioningTaskStatusTerminal(boilerStatus))) {
      state.pendingBoilerPowerTestStart = false;
    }
    if (boilerTaskLocked && isCommissioningTaskStatusTerminal(boilerStatus)) {
      state.commissioningTaskLock = "";
    }
    if (autotunePending && isCommissioningTaskStatusTerminal(autotuneStatus)) {
      state.pendingFlowAutotuneStart = false;
    }
    if (autotuneTaskLocked && isCommissioningTaskStatusTerminal(autotuneStatus)) {
      state.commissioningTaskLock = "";
    }
    if (airPurgePending && (airPurgeActive || isCommissioningTaskStatusTerminal(airPurgeStatus))) {
      state.pendingAirPurgeStart = false;
    }
    if (airPurgeTaskLocked && isCommissioningTaskStatusTerminal(airPurgeStatus)) {
      state.commissioningTaskLock = "";
    }
    if (manualFlowPending && (manualFlowActive || isCommissioningTaskStatusTerminal(manualFlowStatus))) {
      state.pendingManualFlowStart = false;
    }
    if (manualFlowTaskLocked && (manualFlowActive || isCommissioningTaskStatusTerminal(manualFlowStatus))) {
      state.commissioningTaskLock = "";
    }
    if (manualHpPending && (manualHpActive || isCommissioningTaskStatusTerminal(manualHpStatus))) {
      state.pendingManualHpStart = false;
    }
    if (manualHpTaskLocked && (manualHpActive || isCommissioningTaskStatusTerminal(manualHpStatus))) {
      state.commissioningTaskLock = "";
    }
    if (hpWaterCalibrationPending && (hpWaterCalibrationActive || isCommissioningTaskStatusTerminal(hpWaterCalibrationStatus))) {
      state.pendingHpWaterCalibrationStart = false;
    }
    if (hpWaterCalibrationTaskLocked && isCommissioningTaskStatusTerminal(hpWaterCalibrationStatus)) {
      state.commissioningTaskLock = "";
    }

    const cm100StatusDisplay = cm100WaitingForCm100 ? "Wachten op CM100" : cm100Status;
    const serviceStatusCopy = cm100WaitingForCm100
      ? "Service-stand wordt geopend. Wacht tot CM100 klaar staat."
      : (cm100Ready ? "CM100 is actief en klaar voor service-taken." : "Start de service-stand voordat je een taak uitvoert.");

    const tasks = [
      {
        key: "hp-water-calibration",
        title: "Temperatuursensoren kalibreren",
        label: "Sensor kalibratie",
        summary: "Laat de waterpomp draaien zonder compressor en bepaal offsets voor HP1/HP2 water in/out.",
        status: hpWaterCalibrationStatusDisplay,
        available: Boolean(hpWaterCalibrationControls || state.entities.hpWaterCalibrationStatus),
        openDisabled: !cm100Ready,
        cardMarkup: renderCommissioningTaskCard({
          taskKey: "hp-water-calibration",
          title: "Temperatuursensoren kalibreren",
          copy: "Doorloop voorbereiding, meting en toepassen in vaste volgorde. De meting stopt eerder zodra de sensoren stabiel genoeg zijn.",
          subcopy: "De voorgestelde waarden worden pas actief wanneer je ze toepast; supply blijft een diagnosewaarde.",
          status: hpWaterCalibrationStatusDisplay,
          statusCopy: hpWaterCalibrationTaskRunning
            ? "De pomp draait en de firmware wacht op een stabiel temperatuurbeeld."
            : (hpWaterCalibrationResultReady ? "Controleer de voorgestelde offsets voordat je ze toepast." : (cm100Ready ? "CM100 staat klaar. Start de meting wanneer compressor en boiler uit zijn." : "Start CM100 eerst.")),
          progressTask: "hp-water-calibration",
          controls: renderHpWaterCalibrationWizard({
            status: hpWaterCalibrationStatus,
            running: hpWaterCalibrationTaskRunning,
            resultReady: hpWaterCalibrationResultReady,
            startDisabled: hpWaterCalibrationStartDisabled,
            abortDisabled: hpWaterCalibrationAbortDisabled,
            applyDisabled: hpWaterCalibrationApplyDisabled,
            busy: hpWaterCalibrationBusy,
            controlsAvailable: Boolean(state.entities.hpWaterCalibrationStart || state.entities.hpWaterCalibrationAbort),
          }),
          className: "oq-settings-commissioning-card--hp-water-calibration",
        }),
      },
      {
        key: "manual-flow",
        title: "Handmatige flowregeling",
        label: "Handmatige flow",
        summary: "Laat de waterpomp draaien op een tijdelijk flow-setpoint en luister naar het leidingwerk.",
        status: manualFlowStatusDisplay,
        available: Boolean(manualFlowControls || state.entities.manualFlowStatus),
        openDisabled: !cm100Ready,
        cardMarkup: renderCommissioningTaskCard({
          taskKey: "manual-flow",
          title: "Handmatige flowregeling",
          copy: "Gebruik een tijdelijk flow-setpoint om het leidingwerk rustig te controleren. De normale instellingen wijzigen pas wanneer je een waarde bewust overneemt.",
          subcopy: "De bestaande PI-regeling blijft de pomp aansturen.",
          status: manualFlowStatusDisplay,
          statusCopy: manualFlowTaskRunning
            ? "De waterpomp draait. Pas het tijdelijke setpoint aan en controleer de gemeten flow."
            : (cm100Ready ? "CM100 staat klaar. Kies een tijdelijk setpoint en start de waterpomp." : "Start CM100 eerst."),
          progressTask: "",
          controls: `
            <div class="oq-settings-manual-flow-control">
              ${renderSettingsSliderField("manualFlowSetpoint", "Tijdelijke gewenste flow", "Pas deze waarde aan terwijl de waterpomp draait.", "oq-settings-field--compact")}
              ${state.entities.manualFlowStart || state.entities.manualFlowAbort ? renderNamedToggleActionButton({
                active: manualFlowTaskRunning,
                startKey: "manualFlowStart",
                stopKey: "manualFlowAbort",
                startLabel: "Waterpomp starten",
                stopLabel: "Waterpomp stoppen",
                startDisabled: manualFlowBusy || manualFlowStartDisabled,
                stopDisabled: manualFlowBusy || manualFlowAbortDisabled,
              }) : ""}
            </div>
          `,
          metrics: `
            <p class="oq-settings-manual-flow-results-title">Resultaten</p>
            ${renderSettingsStaticField("flowSelected", "Gemeten flow", "Actuele doorstroming in het watercircuit.", getSettingsStatValue("flowSelected"), "oq-settings-field--compact")}
            ${renderSettingsStaticField("manualFlowTargetIpwm", "Actuele pompstand", "Door de PI-regeling aangevraagde pompstand.", getSettingsStatValue("manualFlowTargetIpwm"), "oq-settings-field--compact")}
          `,
        }),
        modalActions: `
          ${state.entities.manualFlowApplyHeating ? renderNamedActionButton("manualFlowApplyHeating", "Overnemen voor verwarmen", "oq-helper-button oq-helper-button--ghost", manualFlowBusy) : ""}
          ${state.entities.manualFlowApplyCooling ? renderNamedActionButton("manualFlowApplyCooling", "Overnemen voor koelen", "oq-helper-button oq-helper-button--ghost", manualFlowBusy) : ""}
        `,
      },
      {
        key: "manual-hp",
        title: "Handmatige warmtepompbediening",
        label: "Handmatige warmtepomp",
        summary: "Selecteer een werkmodus en vraag per warmtepomp een compressorstand aan binnen de bestaande bewaking.",
        status: manualHpStatusDisplay,
        available: Boolean(manualHpControls || state.entities.manualHpStatus),
        openDisabled: !cm100Ready,
        cardMarkup: renderCommissioningTaskCard({
          taskKey: "manual-hp",
          title: "Handmatige warmtepompbediening",
          copy: "Start eerst de service-taak zodat de waterpomp draait. Zodra voldoende flow is gemeten kun je per warmtepomp vanuit Standby naar verwarmen of koelen schakelen en daarna een compressorstand aanvragen.",
          subcopy: "Low-flow, maximale watertemperatuur, minimum draaitijd, minimum uit-tijd en veilige modusovergangen blijven actief. De koelvloer, silent-modus, dag/nacht-cap en normaal uitgesloten compressorstanden worden voor deze handmatige test bewust genegeerd.",
          status: manualHpStatusDisplay,
          statusCopy: manualHpTaskRunning
            ? (manualHpStopping
              ? "De compressorvraag staat op 0. De waterpomp blijft draaien totdat de minimale draaitijd veilig is afgerond."
              : manualHpSafetyStopped
              ? "De bewaking heeft de aangevraagde standen teruggezet naar 0. Controleer de oorzaak voordat je opnieuw opschaalt."
              : "De service-taak is actief. Een veiligheidsstop zet de aangevraagde standen terug naar 0; opnieuw opschalen vereist een bewuste handeling.")
            : (cm100Ready ? "CM100 staat klaar. Start de taak om handmatige warmtepompbediening vrij te geven." : "Start CM100 eerst."),
          progressTask: "",
          actions: `
            ${state.entities.manualHpStart || state.entities.manualHpAbort ? renderNamedToggleActionButton({
              active: manualHpTaskRunning,
              startKey: "manualHpStart",
              stopKey: "manualHpAbort",
              startLabel: "Bediening starten",
              stopLabel: "Bediening stoppen",
              startDisabled: manualHpBusy || manualHpStartDisabled,
              stopDisabled: manualHpBusy || manualHpAbortDisabled,
            }) : ""}
          `,
          controls: `
            <div class="oq-settings-manual-hp-controls">
              <div class="oq-settings-manual-hp-unit">
                ${renderSettingsSelectField("manualHp1Mode", "Warmtepomp 1 werkmodus", "Start in Standby. Verwarmen of koelen kan pas worden gekozen zodra voldoende flow is gemeten.", "oq-settings-field--compact")}
                ${renderSettingsSliderField("manualHp1Level", "Warmtepomp 1 compressorstand", "Aangevraagde stand 0 tot en met 10. Kies eerst een werkmodus. Normaal uitgesloten standen mogen tijdens deze handmatige test bewust worden gekozen.", "oq-settings-field--compact")}
              </div>
              ${hasEntity("hp2ExcludedA") ? `
                <div class="oq-settings-manual-hp-unit">
                  ${renderSettingsSelectField("manualHp2Mode", "Warmtepomp 2 werkmodus", "Start in Standby. Verwarmen of koelen kan pas worden gekozen zodra voldoende flow is gemeten.", "oq-settings-field--compact")}
                  ${renderSettingsSliderField("manualHp2Level", "Warmtepomp 2 compressorstand", "Aangevraagde stand 0 tot en met 10. Kies eerst een werkmodus. Normaal uitgesloten standen mogen tijdens deze handmatige test bewust worden gekozen.", "oq-settings-field--compact")}
                </div>
              ` : ""}
            </div>
          `,
          metrics: `
            <p class="oq-settings-manual-flow-results-title">Resultaten</p>
            <div class="oq-settings-manual-hp-results">
              ${renderSettingsStaticField("flowSelected", "Gemeten flow", "Actuele doorstroming in het watercircuit.", getSettingsStatValue("flowSelected"), "oq-settings-field--compact")}
              ${renderSettingsStaticField("hp1Compressor", "Warmtepomp 1 actueel", "Door de actuator werkelijk toegepaste compressorstand en gemeten compressorfrequentie.", getManualHpActualValue("hp1Compressor", "hp1Freq"), "oq-settings-field--compact")}
              ${hasEntity("hp2Compressor") ? renderSettingsStaticField("hp2Compressor", "Warmtepomp 2 actueel", "Door de actuator werkelijk toegepaste compressorstand en gemeten compressorfrequentie.", getManualHpActualValue("hp2Compressor", "hp2Freq"), "oq-settings-field--compact") : ""}
            </div>
            ${renderSettingsStaticField("manualHpGuardStatus", "Bewaking", "Toont waarom een handmatig verzoek tijdelijk niet of nog niet volledig wordt toegepast.", getEntityValue("manualHpGuardStatus") || "Vrijgegeven", "oq-settings-field--compact oq-settings-field--full")}
            <div class="oq-settings-manual-hp-statuses">
              ${renderSettingsStaticField("hp1Failures", "Warmtepomp 1 statusmelding", "Actuele melding die de warmtepomp zelf rapporteert.", formatFailures(getEntityStateText("hp1Failures", "None")), "oq-settings-field--compact")}
              ${hasEntity("hp2Failures") ? renderSettingsStaticField("hp2Failures", "Warmtepomp 2 statusmelding", "Actuele melding die de warmtepomp zelf rapporteert.", formatFailures(getEntityStateText("hp2Failures", "None")), "oq-settings-field--compact") : ""}
            </div>
          `,
        }),
      },
      {
        key: "autotune",
        title: "Flow autotune",
        label: "Autotune",
        summary: "Berekent een voorstel voor de flowregeling en kan Kp/Ki daarna toepassen.",
        status: autotuneStatusDisplay,
        available: true,
        openDisabled: isCommissioningTaskStatusWaitingForCm100(autotuneStatusDisplay),
        cardMarkup: renderCommissioningTaskCard({
          taskKey: "autotune",
          title: "Flow autotune",
          copy: "Bereken een voorstel voor de flowregeling en pas dat daarna toe in de installatie-instellingen. Autotune duurt meestal ongeveer 5 tot 10 minuten.",
          subcopy: "Na toepassen worden de flow-instellingen bijgewerkt.",
          status: autotuneStatusDisplay,
          statusCopy: autotuneTaskWaitingForCm100
            ? "Wacht totdat CM100 actief is voordat je autotune start."
            : (autotuneTaskRunning
              ? "Autotune draait op dit moment."
              : (cm100Ready ? "CM100 staat klaar. Start de autotune wanneer je wilt." : "Start CM100 eerst en voer daarna autotune uit.")),
          progressTask: "autotune",
          actions: `
            ${state.entities.flowAutotuneStart || state.entities.flowAutotuneAbort ? renderNamedToggleActionButton({
              active: autotuneTaskRunning,
              startKey: "flowAutotuneStart",
              stopKey: "flowAutotuneAbort",
              startLabel: "Autotune starten",
              stopLabel: "Autotune stoppen",
              startDisabled: autotuneBusy || autotuneStartDisabled,
              stopDisabled: autotuneBusy || autotuneAbortDisabled,
            }) : ""}
            ${state.entities.flowAutotuneApply ? renderNamedActionButton("flowAutotuneApply", "Toepassen", "oq-helper-button oq-helper-button--ghost", autotuneBusy || autotuneApplyDisabled) : ""}
          `,
          metrics: `
            ${renderSettingsStaticField("flowKpSuggested", "Voorgestelde Kp", "Kp bepaalt hoe sterk de regeling meteen corrigeert.", flowKpSuggested, "oq-settings-field--compact")}
            ${renderSettingsStaticField("flowKiSuggested", "Voorgestelde Ki", "Ki corrigeert kleine afwijkingen langzaam weg.", flowKiSuggested, "oq-settings-field--compact")}
          `,
        }),
      },
      {
        key: "boiler",
        title: "Boiler power test",
        label: "Boiler test",
        summary: "Meet het effectieve boilervermogen bij stabiele flow en kan het resultaat toepassen.",
        status: boilerStatusDisplay,
        available: hasBoilerAssist,
        openDisabled: isCommissioningTaskStatusWaitingForCm100(boilerStatusDisplay),
        cardMarkup: renderCommissioningTaskCard({
          taskKey: "boiler",
          title: "Boiler power test",
          copy: "Meet het effectieve boilervermogen bij stabiele flow en schrijf daarna een afgerond voorstel weg naar de boilerinstelling. Boilertest duurt meestal ongeveer 5 tot 10 minuten.",
          subcopy: `Ingesteld boilervermogen: ${escapeHtml(boilerRatedPower)}`,
          status: boilerStatusDisplay,
          statusCopy: boilerTaskWaitingForCm100
            ? "Wacht totdat CM100 actief is voordat je de boiler-test start."
            : (boilerTaskRunning
              ? "De boiler-test draait op dit moment."
              : (cm100Ready ? "CM100 staat klaar. Start de boiler-test wanneer je wilt." : "Start CM100 eerst en voer daarna de boilervermogentest uit.")),
          progressTask: "boiler",
          actions: `
            ${state.entities.boilerPowerTestStart || state.entities.boilerPowerTestAbort ? renderNamedToggleActionButton({
              active: boilerTaskRunning,
              startKey: "boilerPowerTestStart",
              stopKey: "boilerPowerTestAbort",
              startLabel: "Boiler test starten",
              stopLabel: "Boiler test stoppen",
              startDisabled: boilerBusy || boilerStartDisabled,
              stopDisabled: boilerBusy || boilerAbortDisabled,
            }) : ""}
            ${state.entities.boilerPowerTestApply ? renderNamedActionButton("boilerPowerTestApply", "Toepassen", "oq-helper-button oq-helper-button--ghost", boilerBusy || boilerApplyDisabled) : ""}
          `,
          metrics: `
            ${renderSettingsStaticField("boilerHeatPower", "Actueel vermogen", "Live meting tijdens de boiler-test.", boilerHeatPower)}
            ${renderSettingsStaticField("boilerPowerTestResult", "Gemeten testresultaat", "Afgerond resultaat van de laatste boiler-test.", getSettingsStatValue("boilerPowerTestResult"))}
          `,
        }),
      },
      {
        key: "purge",
        title: "Ontluchten",
        label: "Ontluchten",
        summary: "Draait een vaste ontluchtingsrun van 5 minuten met rustige flow, pomp-pulsen en stabilisatie.",
        status: airPurgeStatusDisplay,
        available: airPurgeAvailable,
        openDisabled: isCommissioningTaskStatusWaitingForCm100(airPurgeStatusDisplay),
        cardMarkup: renderCommissioningTaskCard({
          taskKey: "purge",
          title: "Ontluchten",
          copy: "Draait 5 minuten met rustige doorstroming, korte pomp-pulsen en een stabilisatiefase.",
          subcopy: "Na afloop kan OpenQuatt de service mode (CM100) afsluiten of actief laten.",
          status: airPurgeStatusDisplay,
          statusCopy: airPurgeTaskRunning
            ? "Ontluchten loopt vast 5 minuten door en stopt daarna automatisch."
            : (cm100Ready ? "CM100 staat klaar. Start ontluchten wanneer het circuit open staat." : "Start CM100 eerst en voer daarna ontluchten uit."),
          progressTask: "purge",
          className: "oq-settings-commissioning-card--air-purge",
          actions: `
            ${state.entities.airPurgeStart || state.entities.airPurgeAbort ? renderNamedToggleActionButton({
              active: airPurgeTaskRunning,
              startKey: "airPurgeStart",
              stopKey: "airPurgeAbort",
              startLabel: "Ontluchten starten",
              stopLabel: "Ontluchten stoppen",
              startDisabled: airPurgeBusy || airPurgeStartDisabled,
              stopDisabled: airPurgeBusy || airPurgeAbortDisabled,
            }) : ""}
          `,
          metrics: `
            ${renderSettingsStaticField("airPurgeRemaining", "Resterende tijd", "Ontluchten loopt maximaal 5 minuten.", airPurgeRemaining, "oq-settings-field--compact")}
            ${renderSettingsStaticField("airPurgePhase", "Fase", "Laat zien welk deel van het ontluchten nu actief is.", airPurgePhase, "oq-settings-field--compact")}
            ${renderSettingsStaticField("flowSelected", "Actuele flow", "Gemeten flow tijdens het ontluchten.", getSettingsStatValue("flowSelected"), "oq-settings-field--compact")}
            ${renderSettingsCheckboxSwitchField(
              "airPurgeReturnToAuto",
              "Na afloop",
              "",
              "Service mode (CM100) afsluiten",
              "oq-settings-field--span-2 oq-settings-field--compact"
            )}
          `,
        }),
      },
    ].filter((task) => task.available);

    return {
      cm100Status: cm100StatusDisplay,
      cm100StartDisabled,
      cm100StopDisabled,
      serviceStatusCopy,
      tasks,
    };
  }

  function renderSettingsServiceTaskRow(task) {
    return `
      <div class="oq-settings-system-row oq-settings-system-row--with-action oq-settings-service-row" data-oq-service-task="${escapeHtml(task.key)}">
        <div class="oq-settings-system-row-copy">
          <p class="oq-settings-system-row-label">${escapeHtml(task.label)}</p>
          <strong class="oq-settings-system-row-value">${escapeHtml(task.status)}</strong>
          <p class="oq-settings-system-row-note">${escapeHtml(task.summary)}</p>
        </div>
        <button
          class="oq-helper-button oq-helper-button--ghost"
          type="button"
          data-oq-action="open-service-task-modal"
          data-service-task="${escapeHtml(task.key)}"
          ${task.openDisabled ? "disabled" : ""}
        >
          ${task.openDisabled ? "Wachten op CM100" : "Openen"}
        </button>
      </div>
    `;
  }

  function renderSettingsServiceSection() {
    const service = getSettingsServiceModel();

    return renderSettingsSection(
      "Service",
      "Service & commissioning",
      "Gebruik de service-stand (controlmode CM100) voor testen, afstelling en onderhoudstaken.",
      `
        <div class="oq-settings-service-shell">
          <div class="oq-settings-service-toolbar">
            <div class="oq-settings-commissioning-teaser-status">
              <span class="oq-settings-commissioning-teaser-status-label">Huidige status</span>
              <strong>${escapeHtml(service.cm100Status)}</strong>
              <p>${escapeHtml(service.serviceStatusCopy)}</p>
            </div>
            <div class="oq-settings-commissioning-hero-actions oq-settings-service-toolbar-actions">
              ${state.entities.commissioningCm100Start ? renderNamedActionButton("commissioningCm100Start", "Service starten", "oq-helper-button oq-helper-button--primary", service.cm100StartDisabled) : ""}
              ${state.entities.commissioningCm100Stop ? renderNamedActionButton("commissioningCm100Stop", "Service stoppen", "oq-helper-button oq-helper-button--ghost", service.cm100StopDisabled) : ""}
            </div>
          </div>

          <div class="oq-settings-system-summary oq-settings-service-task-list">
            ${service.tasks.map((task) => renderSettingsServiceTaskRow(task)).join("")}
          </div>
        </div>
      `,
    );
  }

  function renderSettingsServiceTaskModal() {
    const taskKey = String(state.systemModal || "").replace(/^service-task-/, "");
    const service = getSettingsServiceModel();
    const task = service.tasks.find((item) => item.key === taskKey);
    if (!task) {
      return "";
    }

    return `
      <div class="oq-helper-modal-backdrop${state.overviewTheme === "dark" ? " oq-helper-modal-backdrop--dark" : ""}" data-oq-modal="system">
        <section class="oq-helper-modal oq-helper-modal--wide oq-helper-modal--scrollable oq-helper-modal--service-task" data-oq-service-task-scroller role="dialog" aria-modal="true" aria-labelledby="oq-service-task-modal-title">
          <div class="oq-helper-modal-head">
            <div>
              <p class="oq-helper-modal-kicker">Service</p>
              <h2 class="oq-helper-modal-title" id="oq-service-task-modal-title">${escapeHtml(task.title)}</h2>
            </div>
            <button class="oq-helper-modal-close" type="button" data-oq-action="close-system-modal" aria-label="Sluit ${escapeHtml(task.title)}">×</button>
          </div>
          <p class="oq-helper-modal-copy">${escapeHtml(task.summary)}</p>
          <div class="oq-settings-service-task-modal-body">
            ${task.cardMarkup}
          </div>
          <div class="oq-helper-modal-actions">
            ${task.modalActions || ""}
            <button class="oq-helper-button oq-helper-button--ghost" type="button" data-oq-action="close-system-modal">Sluiten</button>
          </div>
        </section>
      </div>
    `;
  }

  function renderHpGenerationField() {
    if (!hasEntity("hpGeneration")) {
      return "";
    }

    const descriptions = {
      V1: {
        copy: "Voor Quatt V1 en Quatt V1 + V1.5 combinaties.",
        image: HP_GENERATION_IMAGE_V1,
        alt: "Quatt Hybrid V1 en V1.5",
        infoTitle: "V1",
        infoCopy: "Model: AMM4\nKenmerken: Flowmeter bij CV-ketel en vorstbeveiligingsklep buiten de buitenunit. Ook geschikt voor gemengde V1/V1.5 duo's.",
      },
      "V1.5": {
        copy: "Voor Quatt V1.5-installaties.",
        image: HP_GENERATION_IMAGE_V1,
        alt: "Quatt Hybrid V1 en V1.5",
        infoTitle: "V1.5",
        infoCopy: "Model: AMM4-V1.5\nKenmerken: Flowmeter in de buitenunit geïntegreerd. Onder CV-ketel enkel een kleine clip-on temperatuursensor.",
      },
      V2: {
        copy: "Voor Quatt V2.",
        image: HP_GENERATION_IMAGE_V2,
        alt: "Quatt Hybrid V2",
        infoTitle: "V2",
        infoCopy: "Model: AMH6 of AMH6-2\nKenmerken: Flowmeter in de buitenunit geïntegreerd. Onder CV-ketel enkel een kleine clip-on temperatuursensor.",
      },
    };

    const entity = state.entities.hpGeneration || {};
    const currentValue = String(getEntityValue("hpGeneration") || "");
    const options = getSelectEntityOptions(entity);
    const busy = state.loadingEntities || state.busyAction === "save-hpGeneration";

    return `
      <div class="oq-settings-generation-field oq-settings-field--span-2">
        <div class="oq-settings-generation-grid">
          ${options.map((option) => {
            const description = descriptions[option] || {};
            return renderSettingsChoiceOption({
              key: "hpGeneration",
              option,
              currentValue,
              busy,
              copy: description.copy || "",
              image: description.image || "",
              imageAlt: description.alt || "",
              infoTitle: description.infoTitle || "",
              infoCopy: description.infoCopy || "",
              infoId: `hp-generation-${String(option).toLowerCase().replace(/[^a-z0-9]+/g, "-")}`,
            });
          }).join("")}
        </div>
      </div>
    `;
  }

  function renderSettingsGenerationSection() {
    const currentLabel = getInstallationLabel();
    const entity = state.entities.hpGeneration || {};
    const canEdit = hasEntity("hpGeneration") && getSelectEntityOptions(entity).length > 0;

    if (!currentLabel && !canEdit) {
      return "";
    }

    return renderSettingsSection(
      "Basis",
      "Quatt Hybrid-versie",
      "Kies hier welke Quatt Hybrid je hebt. Deze keuze bepaalt de basis van de regeling.",
      `
        <div class="oq-settings-quickstart-status">
          <div class="oq-settings-quickstart-status-row">
            <div>
              <p class="oq-settings-quickstart-status-label">Huidige versie</p>
              <strong class="oq-settings-quickstart-status-value">${escapeHtml(currentLabel || "Onbekend")}</strong>
            </div>
          <button
            class="oq-helper-button oq-helper-button--ghost"
            type="button"
            data-oq-action="open-generation-modal"
            ${!canEdit || state.loadingEntities || state.busyAction === "save-hpGeneration" ? "disabled" : ""}
          >
            Aanpassen
          </button>
          </div>
        </div>
      `,
    );
  }

  function renderBoilerCvFields(className = "oq-settings-grid oq-settings-boiler-simple-grid") {
    if (!hasEntity("boilerCvAssistEnabled")) {
      return "";
    }

    const boilerPresent = isEntityActive("boilerCvAssistEnabled");
    const boilerPowerEntityAvailable = hasEntity("boilerRatedHeatPower");
    const boilerMeta = getNumberMeta("boilerRatedHeatPower");
    const boilerValue = getInputDraftValue("boilerRatedHeatPower");
    const boilerBusy = state.loadingEntities || state.busyAction === "switch-boilerCvAssistEnabled";
    const boilerPowerMissingHint = "Deze firmware levert nog geen bewerkbare boilervermogensinstelling.";
    const boilerPowerControl = boilerPowerEntityAvailable
      ? renderNumberInputControl({
          key: "boilerRatedHeatPower",
          value: boilerValue,
          meta: boilerMeta,
          controlClass: "oq-helper-control oq-helper-control--suffix oq-settings-boiler-power-control",
          unitMarkup: `<span class="oq-helper-unit-chip">W</span>`,
        })
      : `
        <div class="oq-settings-boiler-power-empty">
          <strong>Niet beschikbaar</strong>
          <p>${escapeHtml(boilerPowerMissingHint)}</p>
        </div>
      `;
    const boilerPowerFooter = boilerPresent && boilerPowerEntityAvailable
      ? `<p class="oq-settings-boiler-power-note">Je kunt deze waarde altijd handmatig aanpassen.</p>`
      : "";

    return `
        <div class="${escapeHtml(className)}">
          ${renderSettingsFieldCard(
            "boilerCvAssistEnabled",
            "CV-ketel / boiler aanwezig",
            "Geef aan of OpenQuatt deze installatie als ondersteuning mag gebruiken.",
            `
              <div class="oq-settings-compact-switch-field">
                ${renderSettingsCompactSwitchControl("boilerCvAssistEnabled", "CV-ketel / boiler aanwezig", boilerPresent, boilerBusy)}
              </div>
            `,
            "oq-settings-field--compact",
          )}

          ${boilerPresent ? renderSettingsFieldCard(
            "boilerRatedHeatPower",
            "Ingesteld boilervermogen",
            "Vul hier het vermogen in dat OpenQuatt mag meerekenen.",
            `
              <div class="oq-settings-boiler-power-inline">
                ${boilerPowerControl}
              </div>
            `,
            boilerPresent && boilerPowerEntityAvailable ? "oq-settings-field--compact" : "oq-settings-field--compact is-disabled",
            boilerPowerFooter,
          ) : ""}
        </div>
      `;
  }

  function renderSettingsBoilerCvSection() {
    if (!hasEntity("boilerCvAssistEnabled")) {
      return "";
    }

    const boilerPresent = isEntityActive("boilerCvAssistEnabled");
    return renderSettingsSection(
      "Basis",
      "CV-ketel of boiler",
      boilerPresent
        ? "Geef aan of OpenQuatt een CV-ketel of boiler als ondersteuning mag gebruiken en hoeveel effectief vermogen die functie heeft."
        : "Geef aan of OpenQuatt een CV-ketel of boiler als ondersteuning mag gebruiken.",
      renderBoilerCvFields(),
    );
  }

  function renderSettingsQuickStartSection() {
    const statusLabel = state.complete === true ? "Afgerond" : state.complete === false ? "Open" : "Laden...";
    const statusCopy = state.complete === true
      ? "Quick Start is afgerond. Je kunt de status hier altijd weer openen met een reset."
      : state.complete === false
        ? "Quick Start staat nog open. Gebruik de resetknop om opnieuw te beginnen."
        : "De status van Quick Start wordt nog geladen.";

    return renderSettingsSection(
      "Setup",
      "Quick Start",
      "Bekijk of de Quick Start nog open staat of al is afgerond.",
      `
        <div class="oq-settings-quickstart-status">
          <div class="oq-settings-quickstart-status-row">
            <div>
              <p class="oq-settings-quickstart-status-label">Huidige status</p>
              <strong class="oq-settings-quickstart-status-value">${escapeHtml(statusLabel)}</strong>
            </div>
            <button
              class="oq-helper-button oq-helper-button--ghost"
              type="button"
              data-oq-action="reset"
              ${state.busyAction === "reset" ? "disabled" : ""}
            >
              Reset status
            </button>
          </div>
          <p class="oq-settings-quickstart-status-copy">${escapeHtml(statusCopy)}</p>
        </div>
      `,
    );
  }

  function renderSettingsTrendSection() {
    if (!hasEntity("trendHistoryEnabled") && !hasEntity("lifetimeEnergyHistoryEnabled")) {
      return "";
    }

    const trendHistoryEnabled = isEntityActive("trendHistoryEnabled");
    const trendHistoryFlashEnabled = trendHistoryEnabled && isEntityActive("trendHistoryFlashEnabled");
    const showTrendHistoryFlashStats = trendHistoryEnabled && hasEntity("trendHistoryFlashAvailable");
    const lifetimeEnergyHistoryAvailable = hasEntity("lifetimeEnergyHistoryEnabled");
    const lifetimeEnergyHistoryEnabled = lifetimeEnergyHistoryAvailable && isEntityActive("lifetimeEnergyHistoryEnabled");
    const showLifetimeEnergyHistoryStats = hasEntity("lifetimeEnergyHistoryAvailable");
    const trendAvailableValue = showTrendHistoryFlashStats ? getSettingsStatValue("trendHistoryFlashAvailable") : "Alleen live";
    const lifetimeAvailableValue = showLifetimeEnergyHistoryStats ? formatSettingsStoredDaysLabel(getSettingsStatValue("lifetimeEnergyHistoryAvailable")) : "Geen data";
    return renderSettingsSection(
      "Diagnose",
      "Gegevens bewaren",
      "Bepaal welke gegevens OpenQuatt bewaart voor grafieken, resultaten en hulp bij problemen.",
      `
        <article class="oq-settings-storage-summary">
          <div class="oq-settings-storage-summary-copy">
            <h3>Wat wordt bewaard?</h3>
            <p>Kies welke gegevens tijdelijk beschikbaar blijven en wat in permanent geheugen wordt bewaard.</p>
          </div>
          <div class="oq-settings-storage-summary-metrics" aria-label="Opslagstatus">
            ${hasEntity("trendHistoryEnabled") ? renderSettingsStorageSummaryMetric("Live diagnose", trendHistoryEnabled ? "Aan" : "Uit", "Live", trendHistoryEnabled) : ""}
            ${hasEntity("trendHistoryFlashEnabled") ? renderSettingsStorageSummaryMetric("Diagnosehistorie", trendAvailableValue, trendHistoryFlashEnabled ? "Permanent geheugen" : "Uit", trendHistoryFlashEnabled) : ""}
            ${lifetimeEnergyHistoryAvailable ? renderSettingsStorageSummaryMetric("Energiehistorie", lifetimeAvailableValue, lifetimeEnergyHistoryEnabled ? "Permanent geheugen" : "Uit", lifetimeEnergyHistoryEnabled) : ""}
          </div>
          <button class="oq-helper-button oq-helper-button--ghost oq-settings-storage-summary-action" type="button" data-oq-action="open-history-storage-modal">
            Beheren
          </button>
        </article>
      `,
    );
  }

  function renderSettingsEnergyHistoryImportPanel() {
    if (!hasEntity("lifetimeEnergyHistoryEnabled")) {
      return "";
    }

    const dailyCount = state.energyHistoryImportRecords.length;
    const hourDayCount = new Set(state.energyHistoryImportHourRecords.map((record) => record.dateKey)).size;
    const recordParts = [];
    if (dailyCount > 0) {
      recordParts.push(`${dailyCount} dagrecords`);
    }
    if (hourDayCount > 0) {
      recordParts.push(`${hourDayCount} uurdagen`);
    }
    if (state.energyHistoryImportRange) {
      recordParts.push(state.energyHistoryImportRange);
    }
    if (state.energyHistoryImportSource) {
      recordParts.push(state.energyHistoryImportSource);
    }
    if (state.energyHistoryImportInvalidCount > 0) {
      recordParts.push(`${state.energyHistoryImportInvalidCount} regels niet gebruikt`);
    }

    const hasFile = Boolean(state.energyHistoryImportFileName);
    const hasRecords = dailyCount > 0 || hourDayCount > 0;
    const progress = Number(state.energyHistoryImportProgressPercent || 0);
    const importLabel = state.energyHistoryImportBusy
      ? `Importeren...${progress > 0 ? ` (${progress}%)` : ""}`
      : "Importeren";

    return `
      <div class="oq-settings-storage-import">
        <div class="oq-settings-storage-import-head">
          <div>
            <h4>Historie importeren</h4>
            <p>Vul ontbrekende dagtotalen en uurdetail aan vanuit een OpenQuatt- of Quatt-exportbestand.</p>
          </div>
          ${!hasFile ? `
            <button class="oq-helper-button oq-helper-button--ghost" type="button" data-oq-action="select-energy-history-import-file">
              Bestand kiezen
            </button>
          ` : ""}
        </div>
        ${hasFile ? `
          <div class="oq-settings-storage-import-card">
            <div class="oq-settings-storage-import-file">
              <strong>${escapeHtml(state.energyHistoryImportFileName)}</strong>
              ${recordParts.length ? `<p>${escapeHtml(recordParts.join(" · "))}</p>` : ""}
              ${state.energyHistoryImportNotice ? `<p class="oq-settings-storage-import-notice">${escapeHtml(state.energyHistoryImportNotice)}</p>` : ""}
              ${state.energyHistoryImportError ? `<p class="oq-settings-storage-import-error">${escapeHtml(state.energyHistoryImportError)}</p>` : ""}
            </div>
            <div class="oq-settings-storage-import-actions">
              <button class="oq-helper-button oq-helper-button--ghost" type="button" data-oq-action="clear-energy-history-import-file" ${state.energyHistoryImportBusy ? "disabled" : ""}>
                Wissen
              </button>
              <button class="oq-helper-button oq-helper-button--primary" type="button" data-oq-action="import-energy-history-file" ${state.energyHistoryImportBusy || !hasRecords ? "disabled" : ""}>
                ${escapeHtml(importLabel)}
              </button>
            </div>
          </div>
        ` : `
          ${state.energyHistoryImportNotice ? `<p class="oq-settings-storage-import-notice">${escapeHtml(state.energyHistoryImportNotice)}</p>` : ""}
          ${state.energyHistoryImportError ? `<p class="oq-settings-storage-import-error">${escapeHtml(state.energyHistoryImportError)}</p>` : ""}
        `}
      </div>
    `;
  }

  function renderSettingsHistoryStorageModal() {
    const trendHistoryEnabled = hasEntity("trendHistoryEnabled") && isEntityActive("trendHistoryEnabled");
    const trendHistoryFlashEnabled = trendHistoryEnabled && hasEntity("trendHistoryFlashEnabled") && isEntityActive("trendHistoryFlashEnabled");
    const lifetimeEnergyHistoryAvailable = hasEntity("lifetimeEnergyHistoryEnabled");
    const lifetimeEnergyHistoryEnabled = lifetimeEnergyHistoryAvailable && isEntityActive("lifetimeEnergyHistoryEnabled");
    const lifetimeAvailableLabel = hasEntity("lifetimeEnergyHistoryAvailable")
      ? getSettingsStatValue("lifetimeEnergyHistoryAvailable")
      : "Geen data";
    const canClearLifetime = hasEntity("lifetimeEnergyHistoryClear")
      && lifetimeAvailableLabel !== "Geen data"
      && lifetimeAvailableLabel !== "—";
    const lifetimeAvailableDaysLabel = formatSettingsStoredDaysLabel(lifetimeAvailableLabel);
    const canFlushTrend = trendHistoryEnabled && hasEntity("trendHistoryFlush");
    const canCaptureLifetime = hasEntity("lifetimeEnergyHistoryCapture");
    const showLifetimeActions = canCaptureLifetime || hasEntity("lifetimeEnergyHistoryClear");
    const energyMetadata = getSettingsEnergyHistoryMetadata();
    const hasHourMetadata = String(state.energyHistoryRaw || "").includes("@hour_retention|");
    const hourFlashUnavailable = hasHourMetadata && !energyMetadata.hourPartitionAvailable;
    const hourStoredLabel = hasHourMetadata
      ? hourFlashUnavailable
        ? "Alleen live"
        : formatSettingsStorageDayCount(energyMetadata.hourStoredDayCount, "Geen uurdata")
      : "Laden...";
    const hourStorageLabel = hasHourMetadata
      ? hourFlashUnavailable
        ? "Niet beschikbaar"
        : formatSettingsStorageKb(energyMetadata.hourStorageKb)
      : "Laden...";
    const hourWriteLabel = hasHourMetadata
      ? hourFlashUnavailable
        ? "Niet beschikbaar"
        : formatSettingsStorageCount(energyMetadata.hourWriteCount)
      : "Laden...";
    const hourLastWriteLabel = hasHourMetadata
      ? hourFlashUnavailable
        ? "Niet beschikbaar"
        : formatSettingsStorageTimestamp(energyMetadata.hourLastWriteTimestampS)
      : "Laden...";
    const hourOldestLabel = formatSettingsStorageDateKey(energyMetadata.hourOldestDateKey);
    const hourNewestLabel = formatSettingsStorageDateKey(energyMetadata.hourNewestDateKey);
    const hourNote = hasHourMetadata
      ? energyMetadata.hourPartitionAvailable
        ? `${hourOldestLabel} t/m ${hourNewestLabel}`
        : "Live beschikbaar; bewaren in Flash vraagt een nieuwere Flash-indeling."
      : "Uurdetailstatus wordt opgehaald.";
    const storageDetails = [
      {
        title: "Diagnosegeschiedenis",
        meta: "Diagnose",
        shortLabel: "Diagnose",
        primary: getSettingsStorageStatOrFallback("trendHistoryFlashAvailable", "Alleen live"),
        note: `Laatste meting: ${getSettingsStorageStatOrFallback("trendHistoryFlashNewest", "Geen data")}`,
        items: [
          { label: "Bewaarperiode", value: getSettingsStorageStatOrFallback("trendHistoryFlashAvailable", "Alleen live") },
          { label: "Opslagruimte", value: getSettingsStorageStatOrFallback("trendHistoryFlashSize") },
          { label: "Opslagacties", value: getSettingsStorageStatOrFallback("trendHistoryFlashWrites", "0") },
          { label: "Laatst opgeslagen", value: getSettingsStorageStatOrFallback("trendHistoryFlashLastFlush", "Geen data") },
        ],
      },
      {
        title: "Dagtotalen",
        meta: "Resultaten",
        shortLabel: "Dag",
        primary: lifetimeAvailableDaysLabel,
        note: `${getSettingsStorageStatOrFallback("lifetimeEnergyHistoryOldest", "Geen data")} t/m ${getSettingsStorageStatOrFallback("lifetimeEnergyHistoryNewest", "Geen data")}`,
        items: [
          { label: "Dagen bewaard", value: lifetimeAvailableDaysLabel },
          { label: "Opslagruimte", value: getSettingsStorageStatOrFallback("lifetimeEnergyHistorySize") },
          { label: "Opslagacties", value: getSettingsStorageStatOrFallback("lifetimeEnergyHistoryWrites", "0") },
          { label: "Laatst opgeslagen", value: getSettingsStorageStatOrFallback("lifetimeEnergyHistoryLastWrite", "Geen data") },
        ],
      },
      hasEntity("lifetimeEnergyHourRetention") ? {
        title: "Uurdetail",
        meta: "Resultaten",
        shortLabel: "Uur",
        primary: hourStoredLabel,
        note: hourNote,
        items: [
          { label: "Dagen bewaard", value: hourStoredLabel },
          { label: "Opslagruimte", value: hourStorageLabel },
          { label: "Opslagacties", value: hourWriteLabel },
          { label: "Laatst opgeslagen", value: hourLastWriteLabel },
        ],
      } : null,
    ];

    return `
      <div class="oq-helper-modal-backdrop${state.overviewTheme === "dark" ? " oq-helper-modal-backdrop--dark" : ""}" data-oq-modal="system">
        <section class="oq-helper-modal oq-helper-modal--wide oq-helper-modal--scrollable oq-settings-storage-modal" data-oq-history-storage-scroller role="dialog" aria-modal="true" aria-labelledby="oq-history-storage-modal-title">
          <div class="oq-helper-modal-head">
            <div>
              <p class="oq-helper-modal-kicker">Gegevens</p>
              <h2 class="oq-helper-modal-title" id="oq-history-storage-modal-title">Gegevens bewaren</h2>
            </div>
            <button class="oq-helper-modal-close" type="button" data-oq-action="close-system-modal" aria-label="Sluit gegevens bewaren">×</button>
          </div>
          <p class="oq-helper-modal-copy">Bepaal welke gegevens OpenQuatt bewaart voor grafieken, resultaten en hulp bij problemen. Dit scherm verandert niets aan de werking of aansturing van je warmtepomp.</p>
          <div class="oq-settings-storage-domain-grid">
            <section class="oq-settings-storage-domain oq-settings-storage-domain--trend">
              <div class="oq-settings-storage-domain-head">
                <p class="oq-helper-label">Diagnose</p>
                <h3>Diagnosegegevens</h3>
                <p>Technische metingen zoals temperatuur, doorstroming en vermogen. Deze gegevens zijn vooral bedoeld voor diagnosegrafieken en hulp bij problemen.</p>
              </div>
              <div class="oq-settings-storage-domain-rows">
                ${renderSettingsStorageSwitchRow(
                  "trendHistoryEnabled",
                  "Recente diagnosegegevens",
                  "Bewaar de laatste meetpunten zolang de controller online is.",
                  "Na een herstart of update zijn deze tijdelijke gegevens niet meer beschikbaar.",
                  "Nieuwe tijdelijke diagnosegegevens worden niet bijgehouden.",
                  "Tijdelijk"
                )}
                ${renderSettingsStorageSwitchRow(
                  "trendHistoryFlashEnabled",
                  "Diagnosegeschiedenis bewaren",
                  "Bewaar recente diagnosegegevens ook na een herstart of update.",
                  "OpenQuatt slaat deze gegevens ongeveer elk uur op.",
                  "Alleen recente diagnosegegevens; bestaande geschiedenis blijft staan.",
                  "Permanent geheugen"
                )}
                ${canFlushTrend ? `
                  <div class="oq-settings-storage-inline-action">
                    <div>
                      <h4>Diagnose nu opslaan</h4>
                      <p>Sla de huidige diagnosegegevens direct op, bijvoorbeeld vóór een update of herstart.</p>
                    </div>
                    ${renderSettingsStorageActionButton(
                      "trendHistoryFlush",
                      "Nu opslaan",
                      "flush-trend-history",
                      {
                        disabled: !trendHistoryFlashEnabled,
                        busyLabel: "Opslaan...",
                      }
                    )}
                  </div>
                ` : ""}
              </div>
            </section>
            <section class="oq-settings-storage-domain oq-settings-storage-domain--energy">
              <div class="oq-settings-storage-domain-head">
                <p class="oq-helper-label">Resultaten</p>
                <h3>Energiehistorie</h3>
                <p>Dagtotalen voor de Resultatenpagina, zoals opbrengst, verbruik, rendement en besparing. Hiermee kun je prestaties over langere tijd terugkijken.</p>
              </div>
              <div class="oq-settings-storage-domain-rows">
                ${renderSettingsStorageSwitchRow(
                  "lifetimeEnergyHistoryEnabled",
                  "Dagtotalen bewaren",
                  "Bewaar elke dag een samenvatting van je energiegegevens.",
                  "Zo blijven je resultaten ook na een herstart of update beschikbaar. OpenQuatt slaat dit op aan het einde van de dag en bij een normale afsluiting.",
                  "Nieuwe dagtotalen worden niet bewaard; bestaande historie blijft staan.",
                  "Permanent geheugen"
                )}
                ${renderSettingsStorageSelectRow(
                  "lifetimeEnergyHourRetention",
                  "Uurdetail bewaren",
                  "Kies hoelang OpenQuatt detail per uur mag bewaren voor de daggrafiek.",
                  "Geavanceerd"
                )}
                ${renderSettingsEnergyHistoryImportPanel()}
                ${showLifetimeActions ? `
                  <div class="oq-settings-storage-inline-action oq-settings-storage-inline-action--split">
                    <div>
                      <h4>Vandaag alvast opslaan</h4>
                      <p>Sla de gegevens van vandaag nu op, bijvoorbeeld vóór een update of herstart.</p>
                    </div>
                    <div class="oq-settings-storage-action-stack">
                      ${renderSettingsStorageActionButton(
                        "lifetimeEnergyHistoryCapture",
                        "Vandaag opslaan",
                        "save-lifetime-energy-history",
                        {
                          disabled: !lifetimeEnergyHistoryEnabled,
                          busyLabel: "Opslaan...",
                        }
                      )}
                    </div>
                  </div>
                  <div class="oq-settings-storage-inline-action oq-settings-storage-inline-action--danger">
                    <div>
                      <h4>Energiehistorie wissen</h4>
                      <p>Verwijder alle bewaarde dagtotalen. Je begint daarna opnieuw met het opbouwen van je energiehistorie.</p>
                    </div>
                    <div class="oq-settings-storage-action-stack">
                      ${renderSettingsStorageActionButton(
                        "lifetimeEnergyHistoryClear",
                        "Historie wissen",
                        "clear-lifetime-energy-history",
                        {
                          disabled: !canClearLifetime,
                          buttonClass: "oq-helper-button oq-helper-button--warning",
                          busyLabel: "Wissen...",
                        }
                      )}
                    </div>
                  </div>
                ` : ""}
              </div>
            </section>
          </div>
          ${renderSettingsStorageTechnicalDetails(storageDetails)}
          <p class="oq-settings-storage-footnote"><strong>Goed om te weten:</strong> OpenQuatt schrijft deze gegevens niet continu weg, maar alleen op vaste momenten. Zo blijft duidelijk wat er wordt bewaard en hoeveel geheugen daarvoor wordt gebruikt.</p>
          <div class="oq-helper-modal-actions">
            <button class="oq-helper-button oq-helper-button--primary" type="button" data-oq-action="close-system-modal">Gereed</button>
          </div>
        </section>
      </div>
    `;
  }

  function renderSettingsHeatingSection() {
    const strategyContent = isCurveMode()
      ? `
        <div class="oq-settings-subpanel">
          <div class="oq-settings-subpanel-head">
            <p class="oq-helper-label">Stooklijn</p>
            <h4>Stooklijn</h4>
            <p>Stel hier je stooklijn in en kies wat OpenQuatt moet doen als er geen buitentemperatuur beschikbaar is.</p>
          </div>
          <div class="oq-settings-grid">
            ${renderHeatingCurveProfileField()}
          </div>
          <div class="oq-settings-curve-shell">
            ${renderCurveGraph()}
          </div>
          ${renderSettingsCurveInputs()}
        </div>
      `
      : `
        <div class="oq-settings-subpanel">
          <div class="oq-settings-subpanel-head">
            <p class="oq-helper-label">Power House</p>
            <h4>Power House</h4>
            <p>Met deze waarden schat OpenQuatt hoeveel warmte je woning nodig heeft. Heb je deze gegevens van Quatt, dan kun je ze hier als startpunt gebruiken.</p>
          </div>
          ${renderPowerHouseBaseFields()}
          ${renderPowerHouseAdvancedField()}
        </div>
      `;

    return renderSettingsSection(
      "Regeling",
      "Verwarmingsstrategie",
      "Kies hier hoe OpenQuatt je verwarming regelt. De instellingen hieronder passen zich automatisch aan.",
      `
        ${renderStrategySelectionFields()}
        ${renderHeatingStrategyExplainCards()}
        ${strategyContent}
      `,
    );
  }

  function renderSettingsWaterSection() {
    return renderSettingsSection(
      "Beveiliging",
      "Watertemperatuur",
      "Beschermt het systeem tegen te hoge aanvoertemperaturen. OpenQuatt regelt richting deze grens terug en grijpt 5°C erboven hard in.",
      renderWaterSettingsFields(),
    );
  }

  function renderSettingsOpenThermCicSection() {
    const hasOpenThermConfig = hasEntity("otEnabled");
    const hasCicConfig = hasEntity("cicPollingEnabled") || hasEntity("cicFeedUrl");
    const hasCicCompatibilityConfig = hasEntity("cicCompatibilityMode");
    const hasStatus = hasEntity("otLinkProblem") || hasEntity("cicDataStale") || hasEntity("cicJsonFeedOk");
    if (!hasOpenThermConfig && !hasCicConfig && !hasCicCompatibilityConfig && !hasStatus) {
      return "";
    }

    const cicPollingEnabled = isInstallationMonitoringIntegrationEnabled("cicPollingEnabled");
    const otEnabled = isInstallationMonitoringIntegrationEnabled("otEnabled");
    const renderDiagnosticItem = ({ label, value, active = false }) => `
      <div class="oq-settings-integration-diagnostic-item${active ? " is-warning" : ""}">
        <dt>${escapeHtml(label)}</dt>
        <dd>${escapeHtml(value)}</dd>
      </div>
    `;

    const renderBinaryDiagnosticItem = (key, label, activeLabel = "Actief", inactiveLabel = "Normaal", options = {}) => {
      if (!hasEntity(key)) {
        return "";
      }
      const active = isInstallationMonitoringBinaryActive(key);
      return renderDiagnosticItem({
        label,
        value: active ? activeLabel : inactiveLabel,
        active: options.warningWhenActive ? active : false,
      });
    };

    const renderValueDiagnosticItem = (key, label, options = {}) => {
      const fallbackKey = options.fallbackKey || "";
      if (!hasEntity(key) && !(fallbackKey && hasEntity(fallbackKey))) {
        return "";
      }
      return renderDiagnosticItem({
        label,
        value: getSettingsStatValue(hasEntity(key) ? key : fallbackKey, options),
      });
    };

    const renderDiagnosticGroup = (title, rows) => {
      const content = rows.filter(Boolean).join("");
      if (!content) {
        return "";
      }
      return `
        <article class="oq-settings-integration-diagnostic-group">
          <h4>${escapeHtml(title)}</h4>
          <dl>${content}</dl>
        </article>
      `;
    };

    const urlField = hasEntity("cicFeedUrl") ? `
      <article class="oq-settings-integration-card oq-settings-integration-card--wide" data-oq-settings-field="cicFeedUrl">
        <div class="oq-settings-integration-card-head">
          <h4>CIC feed URL</h4>
          <span class="oq-settings-integration-pill">Lokaal</span>
        </div>
        <label class="oq-settings-control oq-settings-control--text">
          <input
            class="oq-helper-input oq-settings-integration-url-input"
            type="url"
            data-oq-field="cicFeedUrl"
            value="${escapeHtml(String(getInputDraftValue("cicFeedUrl") || ""))}"
            placeholder="http://<host>:<poort>/beta/feed/data.json"
            autocomplete="off"
            spellcheck="false"
            ${state.loadingEntities ? "disabled" : ""}
          >
        </label>
        <p>Gebruik de lokale JSON-feed van de CiC.</p>
      </article>
    ` : "";

    const otDiagnosticPanel = renderDiagnosticGroup("OpenTherm", [
      hasEntity("otLinkProblem") ? renderDiagnosticItem({
        label: "OT-link",
        value: !otEnabled
          ? "Uitgeschakeld"
          : isInstallationMonitoringBinaryActive("otLinkProblem") ? "Probleem" : "OK",
        active: otEnabled && isInstallationMonitoringBinaryActive("otLinkProblem"),
      }) : "",
      renderBinaryDiagnosticItem("otThermostatChEnable", "Thermostaat CH", "Actief", "Normaal"),
      renderBinaryDiagnosticItem("otThermostatCoolingEnable", "Thermostaat koeling", "Actief", "Normaal"),
      renderValueDiagnosticItem("otControlSetpoint", "Control setpoint"),
      renderValueDiagnosticItem("otRoomSetpoint", "Room setpoint", { fallbackKey: "roomSetpoint" }),
      renderValueDiagnosticItem("otRoomTemp", "Room temperature", { fallbackKey: "roomTemp" }),
    ]);

    const cicDiagnosticPanel = renderDiagnosticGroup("CIC-feed", [
      hasEntity("cicJsonFeedOk") ? renderDiagnosticItem({
        label: "JSON-feed",
        value: !cicPollingEnabled
          ? "Polling uit"
          : isInstallationMonitoringBinaryActive("cicJsonFeedOk") ? "OK" : "Probleem",
        active: cicPollingEnabled && !isInstallationMonitoringBinaryActive("cicJsonFeedOk"),
      }) : "",
      hasEntity("cicDataStale") ? renderDiagnosticItem({
        label: "Data",
        value: !cicPollingEnabled
          ? "Polling uit"
          : isInstallationMonitoringBinaryActive("cicDataStale") ? "Verouderd" : "Actueel",
        active: cicPollingEnabled && isInstallationMonitoringBinaryActive("cicDataStale"),
      }) : "",
      renderBinaryDiagnosticItem("cicChEnabled", "CH-vraag", "Actief", "Normaal"),
      renderBinaryDiagnosticItem("cicCoolingEnabled", "Koeling", "Actief", "Normaal"),
      renderValueDiagnosticItem("cicControlSetpoint", "Control setpoint"),
      renderValueDiagnosticItem("cicRoomSetpoint", "Room setpoint"),
      renderValueDiagnosticItem("cicRoomTemp", "Room temperature"),
      renderValueDiagnosticItem("cicFlowrate", "Flow"),
      renderValueDiagnosticItem("cicLastSuccessAge", "Laatste succes"),
    ]);

    const diagnosticsPanel = otDiagnosticPanel || cicDiagnosticPanel ? `
      <details class="oq-settings-integration-diagnostics"${state.integrationDiagnosticsOpen ? " open" : ""}>
        <summary data-oq-action="toggle-integration-diagnostics">
          <strong>Diagnostiek</strong>
          <span>OpenTherm- en CIC-signalen</span>
        </summary>
        <div class="oq-settings-integration-diagnostic-grid">
          ${otDiagnosticPanel}
          ${cicDiagnosticPanel}
        </div>
      </details>
    ` : "";

    return renderSettingsSection(
      "Integratie",
      "OpenTherm & CIC-polling",
      "Configureer de directe thermostaatbus, externe CIC-feed en Quatt app-compatibiliteit.",
      `
        <div class="oq-settings-integration-grid">
          ${renderSettingsIntegrationSwitchCard("otEnabled", "OpenTherm", "Thermostaatbus voor warmtevraag en kamerwaarden.")}
          ${renderSettingsIntegrationSwitchCard("cicPollingEnabled", "CIC-polling", "JSON-feed uitlezen voor setpoint, kamerwaarden en flow.")}
          ${renderSettingsIntegrationSwitchCard("cicCompatibilityMode", "CiC-compatibiliteit", "Gegevens doorgeven zodat de Quatt app kan blijven meekijken.")}
          ${urlField}
        </div>
        ${diagnosticsPanel}
      `,
    );
  }

  function renderSettingsSensorSelectionSection() {
    const hasSelectors = SENSOR_SELECTION_KEYS.some((key) => hasEntity(key));
    if (!hasSelectors) {
      return "";
    }

    const cicAvailable = isInstallationMonitoringIntegrationEnabled("cicPollingEnabled");
    const otAvailable = isInstallationMonitoringIntegrationEnabled("otEnabled");
    const getHaValueKey = (config = {}) => config.haValueKey || (config.haKeys || []).find((key) => !/valid$/i.test(key)) || "";
    const getHaValidKey = (config = {}) => config.haValidKey || (config.haKeys || []).find((key) => /valid$/i.test(key)) || "";
    const hasValidHaSource = (valueKey = "", validKey = "") => (
      Boolean(valueKey)
      && Boolean(validKey)
      && hasEntity(valueKey)
      && hasEntity(validKey)
      && isInstallationMonitoringBinaryActive(validKey)
    );
    const hasHaSource = (config = {}) => hasValidHaSource(getHaValueKey(config), getHaValidKey(config));
    const isSourceAvailable = (option, config = {}) => {
      if (option === "CIC") {
        return cicAvailable;
      }
      if (option === "OT thermostat") {
        return otAvailable;
      }
      if (option === "HA input") {
        return hasHaSource(config);
      }
      if (option === "CIC or HA input") {
        return cicAvailable || hasHaSource(config);
      }
      if (option === "Flowmeter HP2") {
        return hasEntity("hp2Flow");
      }
      if (option === "Local aggregate HP1/HP2") {
        return hasEntity("flowLocal") || hasEntity("hp2Flow");
      }
      return true;
    };
    const getUnavailableSourceReason = (option, config = {}) => {
      if (option === "CIC" && !cicAvailable) {
        return "CIC-polling staat uit";
      }
      if (option === "OT thermostat" && !otAvailable) {
        return "OpenTherm staat uit";
      }
      if (option === "HA input" && !hasHaSource(config)) {
        return "HA-bron ongeldig";
      }
      if (option === "CIC or HA input" && !cicAvailable && !hasHaSource(config)) {
        return "CIC en HA ontbreken";
      }
      if (option === "Flowmeter HP2" && !hasEntity("hp2Flow")) {
        return "HP2-flow ontbreekt";
      }
      if (option === "Local aggregate HP1/HP2" && !hasEntity("flowLocal") && !hasEntity("hp2Flow")) {
        return "Lokale flow ontbreekt";
      }
      return "";
    };
    const sourceStateText = (key, activeLabel = "Actief", inactiveLabel = "Normaal") => {
      if (!hasEntity(key)) {
        return "";
      }
      return isInstallationMonitoringBinaryActive(key) ? activeLabel : inactiveLabel;
    };
    const formatSourceOptionLabel = (option, config = {}) => {
      const value = String(option || "").trim();
      if (!value) {
        return "";
      }
      return config.optionLabels?.[value] || formatSettingsOptionLabel(value);
    };
    const formattedSourceValue = (key, config = {}) => {
      const value = String(getEntityValue(key) || "").trim();
      return value ? formatSourceOptionLabel(value, config) : "";
    };
    const formattedTextSourceValue = (key) => {
      const value = getSettingsTextStatValue(key, "");
      return value ? formatSettingsOptionLabel(value) : "";
    };
    const firstAvailableSourceLabel = (...values) => values.find((value) => String(value || "").trim()) || "";
    const getWaterSupplyUsedSource = () => {
      const source = formattedSourceValue("waterSupplySource");
      if (String(getEntityValue("waterSupplySource") || "") === "Local" && hasEntity("localWaterSupplyTempSource")) {
        const local = formattedSourceValue("localWaterSupplyTempSource");
        return local ? `${source} - ${local}` : source;
      }
      return source;
    };
    const getFlowUsedSource = () => {
      const source = String(getEntityValue("flowSource") || "").trim();
      if (source === "Outdoor unit") {
        if (hasEntity("qFlowSource")) {
          const qSource = String(getEntityValue("qFlowSource") || "").trim();
          const hpGeneration = String(getEntityValue("hpGeneration") || "").trim();
          if (qSource === "Local" || (qSource === "Auto" && hpGeneration === "V1")) {
            return qSource === "Auto" ? "Lokaal (auto)" : "Lokaal";
          }
          return firstAvailableSourceLabel(formattedSourceValue("outdoorUnitFlowMode"), qSource === "Auto" ? "Buitenunit (auto)" : "Buitenunit");
        }
        return firstAvailableSourceLabel(formattedSourceValue("outdoorUnitFlowMode"), "Quatt-flow");
      }
      return formatSettingsOptionLabel(source);
    };
    const getOutsideTempUsedSource = () => {
      const source = String(getEntityValue("outsideTempSource") || "").trim();
      if (source !== "Auto") {
        return formatSettingsOptionLabel(source);
      }
      const unitTemp = getEntityNumericValue("outsideTempLocalAggregated");
      const haTemp = getEntityNumericValue("outsideTempHa");
      const unitValid = !Number.isNaN(unitTemp);
      const haValid = hasEntity("outsideTempHaValid")
        ? isInstallationMonitoringBinaryActive("outsideTempHaValid") && !Number.isNaN(haTemp)
        : !Number.isNaN(haTemp);
      if (unitValid && haValid) {
        return haTemp <= unitTemp ? "HA-invoer" : "Buitenunit";
      }
      if (haValid) {
        return "HA-invoer";
      }
      if (unitValid) {
        return "Buitenunit";
      }
      return "Auto";
    };
    const renderSourceRow = ({ label, value = "", key = "", active = false }) => {
      const text = value || (key ? getSettingsStatValue(key) : "");
      if (!text) {
        return "";
      }
      return `
        <div class="oq-settings-source-row${active ? " is-warning" : ""}">
          <span>${escapeHtml(label)}</span>
          <strong>${escapeHtml(text)}</strong>
        </div>
      `;
    };
    const renderHaSourceRows = ({ label = "HA input", valueKey = "", validKey = "", value = "" }) => {
      if (!hasValidHaSource(valueKey, validKey)) {
        return [];
      }
      return [
        renderSourceRow({ label, key: valueKey, value }),
        renderSourceRow({ label: "HA status", value: "Geldig" }),
      ];
    };
    const renderSourceSelect = (key, config = {}) => {
      if (!hasEntity(key)) {
        return { markup: "", warning: "" };
      }
      const entity = state.entities[key] || {};
      const current = String(getEntityValue(key) || "");
      const allOptions = getSelectEntityOptions(entity);
      const availableOptions = allOptions.filter((option) => isSourceAvailable(option, config));
      const currentUnavailable = current && !isSourceAvailable(current, config);
      const hideUnavailableCurrent = current === "HA input" && config.keepUnavailableCurrent !== true;
      const renderOptions = currentUnavailable && !hideUnavailableCurrent && !availableOptions.includes(current)
        ? [current, ...availableOptions]
        : availableOptions;
      const optionMarkup = renderOptions.map((option) => {
        const unavailable = !isSourceAvailable(option, config);
        const displayLabel = formatSourceOptionLabel(option, config);
        const label = unavailable
          ? `${displayLabel} (${getUnavailableSourceReason(option, config) || "niet beschikbaar"})`
          : displayLabel;
        return `<option value="${escapeHtml(option)}" ${option === current ? "selected" : ""}>${escapeHtml(label)}</option>`;
      }).join("");
      return {
        markup: `
          <label class="oq-settings-source-select">
            <span class="oq-settings-source-select-head">
              <span>${escapeHtml(config.label || "Bron")}</span>
              ${config.infoCopy ? renderSettingsInfoToggle(config.infoId || key, config.infoTitle || config.label || "Bron", config.infoCopy) : ""}
            </span>
            <select class="oq-helper-select" data-oq-field="${escapeHtml(key)}" ${state.loadingEntities ? "disabled" : ""}>
              ${optionMarkup}
            </select>
          </label>
        `,
        warning: currentUnavailable ? `Huidige bron niet beschikbaar: ${getUnavailableSourceReason(current, config)}` : "",
      };
    };
    const renderSourceCard = ({ key, title, select, secondarySelect = null, secondarySelects = null, rows = [] }) => {
      const mainSelect = select && select.when !== false
        ? renderSourceSelect(select.key, select)
        : { markup: "", warning: "" };
      const secondaryConfigs = Array.isArray(secondarySelects)
        ? secondarySelects
        : secondarySelect ? [secondarySelect] : [];
      const secondaries = secondaryConfigs
        .filter((config) => config && config.when !== false)
        .map((config) => renderSourceSelect(config.key, config))
        .filter((item) => item.markup);
      const secondaryMarkup = secondaries.map((item) => item.markup).join("");
      const secondaryWarning = secondaries.map((item) => item.warning).find(Boolean) || "";
      const bodyRows = rows.filter(Boolean).join("");
      const controlsMarkup = `${mainSelect.markup}${secondaryMarkup}`;
      if (!controlsMarkup && !bodyRows) {
        return "";
      }
      return `
        <article class="oq-settings-source-card" data-oq-settings-field="${escapeHtml(key || select.key)}">
          <div class="oq-settings-source-card-head">
            <h4>${escapeHtml(title)}</h4>
          </div>
          ${controlsMarkup ? `
            <div class="oq-settings-source-controls">
              ${controlsMarkup}
            </div>
          ` : ""}
          ${mainSelect.warning || secondaryWarning ? `
            <p class="oq-settings-source-warning">${escapeHtml(mainSelect.warning || secondaryWarning)}</p>
          ` : ""}
          ${bodyRows ? `<div class="oq-settings-source-rows">${bodyRows}</div>` : ""}
        </article>
      `;
    };
    const currentWaterSupplySource = String(getEntityValue("waterSupplySource") || "");
    const currentFlowSource = String(getEntityValue("flowSource") || "");
    const currentQFlowSource = String(getEntityValue("qFlowSource") || "");
    const sourceCards = [
      renderSourceCard({
        key: "room-temperature",
        title: "Kamertemperatuur",
        select: { key: "roomTempSource", label: "Kamertemperatuur bron", haKeys: ["roomTempHa", "roomTempHaValid"] },
        rows: [
          renderSourceRow({ label: "Actieve waarde", key: "roomTemp" }),
          renderSourceRow({ label: "Gebruikte bron", value: formattedTextSourceValue("roomTempEffectiveSource") }),
          cicAvailable ? renderSourceRow({ label: "CIC", key: "cicRoomTemp" }) : "",
          otAvailable ? renderSourceRow({ label: "OpenTherm", key: "otRoomTemp" }) : "",
          ...renderHaSourceRows({ valueKey: "roomTempHa", validKey: "roomTempHaValid" }),
        ],
      }),
      renderSourceCard({
        key: "room-setpoint",
        title: "Kamer setpoint",
        select: { key: "roomSetpointSource", label: "Setpoint bron", haKeys: ["roomSetpointHa", "roomSetpointHaValid"] },
        rows: [
          renderSourceRow({ label: "Actieve waarde", key: "roomSetpoint" }),
          renderSourceRow({ label: "Gebruikte bron", value: formattedTextSourceValue("roomSetpointEffectiveSource") }),
          cicAvailable ? renderSourceRow({ label: "CIC", key: "cicRoomSetpoint" }) : "",
          otAvailable ? renderSourceRow({ label: "OpenTherm", key: "otRoomSetpoint" }) : "",
          ...renderHaSourceRows({ valueKey: "roomSetpointHa", validKey: "roomSetpointHaValid" }),
        ],
      }),
      renderSourceCard({
        key: "water-supply",
        title: "Aanvoertemperatuur",
        select: { key: "waterSupplySource", label: "Aanvoer bron", haKeys: ["waterSupplyTempHa", "waterSupplyTempHaValid"] },
        secondarySelect: {
          key: "localWaterSupplyTempSource",
          label: "Lokale sensor",
          when: currentWaterSupplySource === "Local" && hasEntity("localWaterSupplyTempSource"),
        },
        rows: [
          renderSourceRow({ label: "Actieve waarde", key: "supplyTemp" }),
          renderSourceRow({ label: "Gebruikte bron", value: getWaterSupplyUsedSource() }),
          renderSourceRow({ label: "Lokale selectie", key: "waterSupplyTempEsp" }),
          renderSourceRow({ label: "PT1000", key: "waterSupplyTempPt1000" }),
          renderSourceRow({ label: "DS18B20", key: "waterSupplyTempDs18b20" }),
          cicAvailable ? renderSourceRow({ label: "CIC", key: "cicWaterSupplyTemp" }) : "",
          ...renderHaSourceRows({ valueKey: "waterSupplyTempHa", validKey: "waterSupplyTempHaValid" }),
        ],
      }),
      renderSourceCard({
        key: "flow-source",
        title: "Flow",
        select: { key: "flowSource", label: "Flow bron", optionLabels: { "Outdoor unit": "Quatt-flow" }, when: cicAvailable || currentFlowSource === "CIC" },
        secondarySelects: [
          {
            key: "qFlowSource",
            label: "Quatt-flow bron",
            infoId: "qFlowSource-info",
            infoCopy: "Auto behoudt het bestaande gedrag: V1 gebruikt de lokale controller-flowmeter, V1.5 gebruikt de flow uit de buitenunit via Modbus. Kies Lokaal of Buitenunit om dit expliciet vast te zetten.",
            when: currentFlowSource === "Outdoor unit" && hasEntity("qFlowSource"),
          },
          {
            key: "outdoorUnitFlowMode",
            label: "Flowmeterkeuze",
            infoId: "outdoorUnitFlowMode-info",
            infoCopy: "Kies welke buitenunit-flowmeting wordt gebruikt. Flowmeter HP1 en HP2 gebruiken direct die meter. Gecombineerde flow HP1/HP2 gebruikt normaal het gemiddelde, met een guard die bij sterk afwijkende meters de meest aannemelijke waarde kiest.",
            when: currentFlowSource === "Outdoor unit" && hasEntity("outdoorUnitFlowMode") && (!hasEntity("qFlowSource") || currentQFlowSource !== "Local"),
          },
        ],
        rows: [
          renderSourceRow({ label: "Actieve waarde", key: "flowSelected" }),
          renderSourceRow({ label: "Gebruikte bron", value: getFlowUsedSource() }),
          renderSourceRow({ label: "Lokaal", key: "controllerFlow" }),
          renderSourceRow({ label: "Gecombineerd", key: "flowLocal" }),
          renderSourceRow({ label: "HP1", key: "hp1Flow" }),
          renderSourceRow({ label: "HP2", key: "hp2Flow" }),
          cicAvailable ? renderSourceRow({ label: "CIC", key: "cicFlowrate" }) : "",
        ],
      }),
      renderSourceCard({
        key: "outside-temperature",
        title: "Buitentemperatuur",
        select: {
          key: "outsideTempSource",
          label: "Buiten bron",
          haKeys: ["outsideTempHa", "outsideTempHaValid"],
          infoId: "outsideTempSource-auto-info",
          infoCopy: hasValidHaSource("outsideTempHa", "outsideTempHaValid")
            ? "Auto gebruikt de laagste geldige buitentemperatuurbron. Zijn zowel buitenunit als HA-invoer geldig, dan kiest OpenQuatt de laagste waarde. Is er maar een van beide geldig, dan wordt die gebruikt."
            : "Auto gebruikt de geldige buitentemperatuur van de buitenunit.",
        },
        rows: [
          renderSourceRow({ label: "Actieve waarde", key: "outsideTempSelected" }),
          renderSourceRow({ label: "Gebruikte bron", value: getOutsideTempUsedSource() }),
          renderSourceRow({ label: "Buitenunit", key: "outsideTempLocalAggregated" }),
          ...renderHaSourceRows({ valueKey: "outsideTempHa", validKey: "outsideTempHaValid" }),
        ],
      }),
      renderSourceCard({
        key: "heating-enable",
        title: "Warmtetoestemming",
        select: {
          key: "heatingEnableSource",
          label: "Warmtetoestemming bron",
          optionLabels: { Disabled: "Niet gebruiken" },
          haKeys: ["heatingEnableHa", "heatingEnableHaValid"],
          keepUnavailableCurrent: true,
        },
        rows: [
          renderSourceRow({ label: "Verwarming toegestaan", value: sourceStateText("heatingEnableSelected", "Ja", "Nee") }),
          renderSourceRow({ label: "Gebruikte externe bron", value: formattedTextSourceValue("heatingEnableEffectiveSource") }),
          renderSourceRow({ label: "Bronselectie", value: sourceStateText("heatingEnableValid", "Geldig", "Ongeldig") }),
          otAvailable ? renderSourceRow({ label: "OpenTherm", value: sourceStateText("otThermostatChEnable", "Toestemming", "Geen toestemming") }) : "",
          cicAvailable ? renderSourceRow({ label: "CIC", value: sourceStateText("cicChEnabled", "Toestemming", "Geen toestemming") }) : "",
          ...renderHaSourceRows({
            valueKey: "heatingEnableHa",
            validKey: "heatingEnableHaValid",
            value: sourceStateText("heatingEnableHa", "Toestemming", "Geen toestemming"),
          }),
        ],
      }),
      renderSourceCard({
        key: "cooling-enable",
        title: "Koeltoestemming",
        select: {
          key: "coolingEnableSource",
          label: "Koeltoestemming bron",
          haKeys: ["coolingEnableHa", "coolingEnableHaValid"],
        },
        rows: [
          renderSourceRow({ label: "Actieve waarde", value: sourceStateText("coolingEnableSelected", "Actief", "Niet actief") }),
          renderSourceRow({ label: "Gebruikte bron", value: formattedTextSourceValue("coolingEnableEffectiveSource") }),
          renderSourceRow({ label: "Handmatig", value: sourceStateText("manualCoolingEnable", "Aan", "Uit") }),
          cicAvailable ? renderSourceRow({ label: "CIC", value: sourceStateText("cicCoolingEnabled", "Actief", "Normaal") }) : "",
          ...renderHaSourceRows({
            valueKey: "coolingEnableHa",
            validKey: "coolingEnableHaValid",
            value: sourceStateText("coolingEnableHa", "Actief", "Normaal"),
          }),
        ],
      }),
    ].filter(Boolean);

    if (!sourceCards.length) {
      return "";
    }

    return renderSettingsSection(
      "Bronnen",
      "Sensorselectie",
      "Kies welke bron OpenQuatt gebruikt voor metingen en vraag-signalen. Uitgeschakelde integraties verdwijnen uit de keuzes.",
      `<div class="oq-settings-source-grid">${sourceCards.join("")}</div>`,
    );
  }

  function renderSettingsLoginSection() {
    return renderSettingsSection(
      "Toegang",
      "Login",
      "Open hier de login-instellingen als je de toegangsgegevens wilt aanpassen.",
      `
        <div class="oq-settings-quickstart-status">
          <div class="oq-settings-quickstart-status-row">
            <div>
              <p class="oq-settings-quickstart-status-label">Huidige status</p>
              <strong class="oq-settings-quickstart-status-value">${escapeHtml(getWebAuthStatusLabel())}</strong>
            </div>
            <button
              class="oq-helper-button oq-helper-button--ghost"
              type="button"
              data-oq-action="open-login-modal"
            >
              Aanpassen
            </button>
          </div>
          <p class="oq-settings-quickstart-status-copy">${escapeHtml(getWebAuthStatusDetail())}</p>
        </div>
      `,
    );
  }

  function renderSettingsAccessSecuritySection() {
    return renderSettingsSection(
      "Toegang",
      "Toegang & Beveiliging",
      "Pas hier de web-login of de ESPHome API-sleutel aan. Deze wijziging wordt actief na herstart.",
      `
        <div class="oq-settings-access-security-shell">
          <div class="oq-settings-quickstart-status" data-oq-access-security-item="login">
            <div class="oq-settings-quickstart-status-row">
              <div>
                <p class="oq-settings-quickstart-status-label">Login</p>
                <strong class="oq-settings-quickstart-status-value">${escapeHtml(getWebAuthStatusLabel())}</strong>
                <p class="oq-settings-quickstart-status-copy">${escapeHtml(getWebAuthStatusDetail())}</p>
              </div>
              <button
                class="oq-helper-button oq-helper-button--ghost"
                type="button"
                data-oq-action="open-login-modal"
              >
                Aanpassen
              </button>
            </div>
          </div>
          <div class="oq-settings-quickstart-status" data-oq-access-security-item="api">
            <div class="oq-settings-quickstart-status-row">
              <div>
                <p class="oq-settings-quickstart-status-label">ESPHome API encryption</p>
                <strong class="oq-settings-quickstart-status-value">${escapeHtml(getApiSecurityStatusLabel())}</strong>
                <p class="oq-settings-quickstart-status-copy">${escapeHtml(getApiSecurityStatusDetail())}</p>
              </div>
              <button
                class="oq-helper-button oq-helper-button--ghost"
                type="button"
                data-oq-action="open-api-security-modal"
              >
                Aanpassen
              </button>
            </div>
          </div>
        </div>
      `,
    );
  }

  function renderSettingsMqttSection() {
    return renderSettingsSection(
      "Integratie",
      "MQTT",
      "Stel hier de broker in voor de experimentele, compacte publish-only telemetry-export van OpenQuatt.",
      `
        <div class="oq-settings-quickstart-status" data-oq-mqtt-item="mqtt">
          <div class="oq-settings-quickstart-status-row">
            <div>
              <p class="oq-settings-quickstart-status-label">MQTT-status</p>
              <strong class="oq-settings-quickstart-status-value">${escapeHtml(getMqttStatusLabel())}</strong>
              <p class="oq-settings-quickstart-status-copy">${escapeHtml(getMqttStatusDetail())}</p>
            </div>
            <button
              class="oq-helper-button oq-helper-button--ghost"
              type="button"
              data-oq-action="open-mqtt-modal"
            >
              Aanpassen
            </button>
          </div>
        </div>
      `,
      `<span class="oq-settings-section-badge oq-settings-section-badge--experimental">Experimenteel</span>`,
    );
  }

  function getApiSecurityStatusLabel() {
    const status = state.apiSecurityStatus;
    if (!status) {
      return "Laden...";
    }
    if (status.pending_restart) {
      return "Herstart nodig";
    }
    if (status.transport_active === true) {
      return "Aan";
    }
    if (status.transport_active === false) {
      return "Uit";
    }
    return status.enabled ? "Aan" : "Uit";
  }

  function getApiSecurityStatusDetail() {
    const status = state.apiSecurityStatus;
    if (!status) {
      return "API-encryptie wordt geladen.";
    }
    if (status.pending_restart) {
      return status.key
        ? "Deze wijziging wordt actief na herstart. De sleutel blijft opgeslagen voor later gebruik."
        : "Deze wijziging wordt actief na herstart.";
    }
    if (status.transport_active === true) {
      return "API-encryptie staat aan. Gebruik dezelfde sleutel in Home Assistant.";
    }
    if (status.key) {
      return "De sleutel blijft opgeslagen, maar de native API staat nu open op je lokale netwerk.";
    }
    return "Er is nog geen API-sleutel opgeslagen.";
  }

  function getApiSecurityActionLabel() {
    const status = state.apiSecurityStatus;
    if (!status) {
      return "Laden...";
    }
    if (status.enabled) {
      return "Uitschakelen";
    }
    return "Inschakelen";
  }

  function renderSettingsBackupSection() {
    const busy = state.settingsBackupBusy;
    const totalFields = SETTINGS_BACKUP_KEYS.length;
    const sectionCount = SETTINGS_BACKUP_SECTIONS.length;

    return renderSettingsSection(
      "Beheer",
      "Backup en restore",
      "Sla een JSON-backup op van de instellingen die OpenQuatt in deze web-app beheert, en zet die later weer terug na een factory-bin update.",
      `
        <div class="oq-settings-backup-shell">
          <div class="oq-settings-backup-summary">
            <div class="oq-settings-backup-stat">
              <span class="oq-settings-backup-stat-label">Instellingen</span>
              <strong class="oq-settings-backup-stat-value">${escapeHtml(String(totalFields))}</strong>
            </div>
            <div class="oq-settings-backup-stat">
              <span class="oq-settings-backup-stat-label">Secties</span>
              <strong class="oq-settings-backup-stat-value">${escapeHtml(String(sectionCount))}</strong>
            </div>
          </div>
          <div class="oq-settings-backup-actions">
            <button
              class="oq-helper-button oq-helper-button--primary"
              type="button"
              data-oq-action="download-settings-backup"
              ${busy ? "disabled" : ""}
            >
              ${busy ? "Bezig..." : "Backup downloaden"}
            </button>
            <button
              class="oq-helper-button oq-helper-button--ghost"
              type="button"
              data-oq-action="open-settings-backup-import"
              ${busy ? "disabled" : ""}
            >
              Backup herstellen
            </button>
          </div>
          <p class="oq-settings-action-note">Ontbrekende velden houden hun firmware-default. Onbekende velden uit een backup worden overgeslagen.</p>
          ${state.settingsBackupError ? `<p class="oq-settings-backup-error">${escapeHtml(state.settingsBackupError)}</p>` : ""}
        </div>
      `,
    );
  }

  function renderSettingsBackupImportModal() {
    const busy = state.settingsBackupBusy;
    return `
      <div class="oq-helper-modal-backdrop${state.overviewTheme === "dark" ? " oq-helper-modal-backdrop--dark" : ""}" data-oq-modal="system">
        <section class="oq-helper-modal oq-helper-modal--wide" role="dialog" aria-modal="true" aria-labelledby="oq-backup-import-modal-title">
          <div class="oq-helper-modal-head">
            <div>
              <p class="oq-helper-modal-kicker">Beheer</p>
              <h2 class="oq-helper-modal-title" id="oq-backup-import-modal-title">Backup herstellen</h2>
            </div>
            <button class="oq-helper-modal-close" type="button" data-oq-action="close-system-modal" aria-label="Sluit backup import popup">×</button>
          </div>
          <p class="oq-helper-modal-copy">Kies een JSON-backup om de instellingen te vergelijken en daarna gericht terug te zetten.</p>
          <div class="oq-helper-modal-row">
            <span class="oq-helper-modal-label">Backupbestand</span>
            <input
              class="oq-settings-backup-input oq-settings-backup-import-input"
              type="file"
              accept=".json,application/json"
              data-oq-backup-file-input="true"
              ${busy ? "disabled" : ""}
            >
            <span class="oq-helper-modal-subvalue">Na selectie openen we automatisch het vergelijkingsoverzicht.</span>
          </div>
          ${state.settingsBackupError ? `<p class="oq-settings-backup-error">${escapeHtml(state.settingsBackupError)}</p>` : ""}
          <div class="oq-helper-modal-actions">
            <button class="oq-helper-button oq-helper-button--ghost" type="button" data-oq-action="close-system-modal" ${busy ? "disabled" : ""}>Annuleren</button>
          </div>
        </section>
      </div>
    `;
  }

  function renderSettingsBackupRestoreModal() {
    const draft = state.settingsBackupDraft;
    if (!draft) {
      return "";
    }

    const summary = draft.summary || getSettingsBackupSelectionSummary(draft);
    const sourceInstallation = String(draft.source?.installation || draft.source?.device || "Onbekend");
    const currentInstallation = getInstallationLabel();
    const sourceVersion = String(draft.source?.firmware_version || "Onbekend");
    const sourceChannel = String(draft.source?.firmware_channel || "").trim() || "Onbekend";
    const sourceTopology = String(draft.source?.topology || "").trim() || "Onbekend";
    const currentVersion = getFirmwareCurrentVersion();
    const currentTopology = typeof getInstallationTopology === "function"
      ? getInstallationTopology()
      : "";
    const topologyMismatch = sourceTopology !== "Onbekend" && currentTopology && sourceTopology !== currentTopology;
    const installationMismatch = sourceInstallation !== "Onbekend" && sourceInstallation !== currentInstallation;
    const warningText = topologyMismatch || installationMismatch
      ? "De backup lijkt van een andere installatie te komen. Je kunt nog steeds doorzetten, maar controleer de secties even goed."
      : summary.requiredMissing
        ? "Ontbrekende velden houden hun firmware-default."
        : "Velden zonder waarde worden overgeslagen.";

    return `
      <div class="oq-helper-modal-backdrop${state.overviewTheme === "dark" ? " oq-helper-modal-backdrop--dark" : ""}" data-oq-modal="system">
        <section class="oq-helper-modal oq-helper-modal--wide oq-helper-modal--scrollable" role="dialog" aria-modal="true" aria-labelledby="oq-backup-modal-title">
          <div class="oq-helper-modal-head">
            <div>
              <p class="oq-helper-modal-kicker">Beheer</p>
              <h2 class="oq-helper-modal-title" id="oq-backup-modal-title">Backup herstellen</h2>
            </div>
            <button class="oq-helper-modal-close" type="button" data-oq-action="close-system-modal" aria-label="Sluit backup-popup">×</button>
          </div>
          <p class="oq-helper-modal-copy">Deze backup zet alleen de instellingen terug die OpenQuatt in de web-app beheert. Klap een sectie open om backup- en huidige waarden naast elkaar te vergelijken.</p>
          <div class="oq-helper-modal-grid oq-settings-backup-modal-grid">
            <div class="oq-helper-modal-row">
              <span class="oq-helper-modal-label">Backup van</span>
              <strong class="oq-helper-modal-value">${escapeHtml(sourceInstallation)}</strong>
              <span class="oq-helper-modal-subvalue">Topo: ${escapeHtml(sourceTopology)} · Firmware: ${escapeHtml(sourceVersion)}</span>
            </div>
            <div class="oq-helper-modal-row">
              <span class="oq-helper-modal-label">Huidige installatie</span>
              <strong class="oq-helper-modal-value">${escapeHtml(currentInstallation)}</strong>
              <span class="oq-helper-modal-subvalue">Topo: ${escapeHtml(currentTopology)} · Firmware: ${escapeHtml(currentVersion || "Onbekend")}</span>
            </div>
            <div class="oq-helper-modal-row">
              <span class="oq-helper-modal-label">Backupkanaal</span>
              <strong class="oq-helper-modal-value">${escapeHtml(sourceChannel)}</strong>
              <span class="oq-helper-modal-subvalue">Schema v${escapeHtml(String(draft.schema_version || 1))}</span>
            </div>
            <div class="oq-helper-modal-row">
              <span class="oq-helper-modal-label">Backupinstellingen</span>
              <strong class="oq-helper-modal-value">${escapeHtml(`${summary.total} instellingen`)}</strong>
              <span class="oq-helper-modal-subvalue">${escapeHtml(summary.differenceCount ? `${summary.differenceCount} ${summary.differenceCount === 1 ? "verschil" : "verschillen"} · ${summary.currentPresent} op huidige installatie · ${summary.unknown} onbekend` : `Alles komt overeen · ${summary.currentPresent} op huidige installatie · ${summary.unknown} onbekend`)}</span>
            </div>
          </div>
          <div class="oq-settings-backup-modal-sections">
            ${summary.sectionSummaries.map((section) => `
              <details class="oq-settings-backup-modal-section">
                <summary class="oq-settings-backup-modal-section-head">
                  <span class="oq-settings-backup-modal-section-head-copy">
                    <strong>${escapeHtml(section.label)}</strong>
                    <em>${escapeHtml(`${section.total} ${section.total === 1 ? "instelling" : "instellingen"} · ${section.differenceCount ? `${section.differenceCount} ${section.differenceCount === 1 ? "verschil" : "verschillen"}` : "Alles gelijk"}`)}</em>
                  </span>
                </summary>
                <div class="oq-settings-backup-modal-section-body">
                  <p>${escapeHtml(section.differenceCount ? `${section.differenceCount} instelling${section.differenceCount === 1 ? "" : "en"} wijkt af of ontbreekt.` : "Alle instellingen komen overeen.")}</p>
                  <div class="oq-settings-backup-compare-list">
                    ${section.rows.map((row) => `
                      <div class="oq-settings-backup-compare oq-settings-backup-compare--${escapeHtml(row.status)}">
                        <div class="oq-settings-backup-compare-head">
                          <strong>${escapeHtml(row.label)}</strong>
                          <span>${escapeHtml(row.statusLabel)}</span>
                        </div>
                        <div class="oq-settings-backup-compare-values">
                          <div class="oq-settings-backup-compare-value" data-change="${escapeHtml(row.status)}">
                            <span>Backup</span>
                            <strong>${escapeHtml(row.backupDisplay)}</strong>
                          </div>
                          <div class="oq-settings-backup-compare-value" data-change="${escapeHtml(row.status)}">
                            <span>Nu</span>
                            <strong>${escapeHtml(row.currentDisplay)}</strong>
                          </div>
                        </div>
                      </div>
                    `).join("")}
                  </div>
                </div>
              </details>
            `).join("")}
          </div>
          <p class="oq-settings-action-note${summary.unknown || summary.requiredMissing || installationMismatch ? " oq-settings-action-note--warning" : ""}">${escapeHtml(warningText)}</p>
          ${state.settingsBackupError ? `<p class="oq-settings-backup-error">${escapeHtml(state.settingsBackupError)}</p>` : ""}
          <div class="oq-helper-modal-actions">
            <button class="oq-helper-button oq-helper-button--ghost" type="button" data-oq-action="close-system-modal" ${state.settingsBackupBusy ? "disabled" : ""}>Annuleren</button>
            <button class="oq-helper-button oq-helper-button--primary" type="button" data-oq-action="confirm-settings-backup-restore" ${state.settingsBackupBusy ? "disabled" : ""}>${state.settingsBackupBusy ? "Herstellen..." : "Herstellen"}</button>
          </div>
        </section>
      </div>
    `;
  }

  function renderSettingsDiagnosticsSection() {
    const updateStatus = getUpdateStatus();
    const dateTime = formatDiagnosticsDateTime();
    const busyRestart = state.busyAction === "restartAction";

    return renderSettingsSection(
      "Diagnostiek",
      "Systeemstatus",
      "Snelle statusinformatie voor support, controle en onderhoud.",
      `
        <div class="oq-settings-system-summary">
          <div class="oq-settings-system-row" data-oq-diagnostics-row="uptime">
            <span class="oq-settings-system-row-label">Uptime</span>
            <strong class="oq-settings-system-row-value">${escapeHtml(formatUptimeFromMeta())}</strong>
          </div>
          <div class="oq-settings-system-row" data-oq-diagnostics-row="ip">
            <span class="oq-settings-system-row-label">IP-adres</span>
            <strong class="oq-settings-system-row-value">${escapeHtml(getDeviceIpAddress())}</strong>
          </div>
          <div class="oq-settings-system-row oq-settings-system-row--with-action" data-oq-diagnostics-row="updates">
            <div class="oq-settings-system-row-copy">
              <p class="oq-settings-system-row-label">Updates</p>
              <strong class="oq-settings-system-row-value">${escapeHtml(updateStatus)}</strong>
            </div>
            <button
              class="oq-helper-button oq-helper-button--ghost"
              type="button"
              data-oq-action="open-update-modal"
            >
              Openen
            </button>
          </div>
          <div class="oq-settings-system-row oq-settings-system-row--with-action" data-oq-diagnostics-row="webserverLog">
            <div class="oq-settings-system-row-copy">
              <p class="oq-settings-system-row-label">Logboek</p>
              <strong class="oq-settings-system-row-value">${escapeHtml(getWebServerLogStatusLabel())}</strong>
            </div>
            <button
              class="oq-helper-button oq-helper-button--ghost"
              type="button"
              data-oq-action="open-webserver-log-modal"
            >
              Openen
            </button>
          </div>
          <div class="oq-settings-system-row oq-settings-system-row--with-action" data-oq-diagnostics-row="debugRecording">
            <div class="oq-settings-system-row-copy">
              <p class="oq-settings-system-row-label">Debugopname</p>
              <strong class="oq-settings-system-row-value">${escapeHtml(getDebugRecordingStatusLabel())}</strong>
              <p class="oq-settings-system-row-note">${escapeHtml(getDebugRecordingStatusCopy())}</p>
            </div>
            <button
              class="oq-helper-button oq-helper-button--ghost"
              type="button"
              data-oq-action="open-debug-recording-modal"
            >
              Openen
            </button>
          </div>
          <div class="oq-settings-system-row" data-oq-diagnostics-row="datetime">
            <span class="oq-settings-system-row-label">Datum/tijd</span>
            <strong class="oq-settings-system-row-value">${escapeHtml(dateTime)}</strong>
          </div>
          <div class="oq-settings-system-row" data-oq-diagnostics-row="espTemp">
            <span class="oq-settings-system-row-label">ESP-temp</span>
            <strong class="oq-settings-system-row-value">${escapeHtml(getEspTemperatureLabel())}</strong>
          </div>
          <div class="oq-settings-system-row oq-settings-system-row--with-action" data-oq-diagnostics-row="restart">
            <div class="oq-settings-system-row-copy">
              <p class="oq-settings-system-row-label">Herstart OpenQuatt</p>
              <strong class="oq-settings-system-row-value">Opnieuw opstarten</strong>
              <p class="oq-settings-system-row-note">Dit onderbreekt de webinterface kort.</p>
            </div>
            <button
              class="oq-helper-button oq-helper-button--warning"
              type="button"
              data-oq-action="open-restart-confirm"
              ${busyRestart ? "disabled" : ""}
            >
              ${busyRestart ? "Herstarten..." : "Herstarten"}
            </button>
          </div>
        </div>
      `,
    );
  }

  function renderSettingsCompressorSection() {
    const hpGroups = [
      renderSettingsHeatPumpLimiterCard("Warmtepomp 1", "hp1ExcludedA", "hp1ExcludedB"),
      renderSettingsHeatPumpLimiterCard("Warmtepomp 2", "hp2ExcludedA", "hp2ExcludedB"),
    ].filter(Boolean).join("");

    return renderSettingsSection(
      "Installatie",
      "Compressorinstellingen",
      "Stel hier de minimale draaitijd in en bepaal per warmtepomp welke compressorstanden je wilt overslaan.",
      `
        <div class="oq-settings-subpanel">
          <div class="oq-settings-subpanel-head">
            <p class="oq-helper-label">Draaitijd</p>
            <h4>Minimale draaitijd</h4>
            <p>Voorkomt dat de warmtepomp te kort achter elkaar start en stopt.</p>
          </div>
          <div class="oq-settings-grid">
            ${renderSettingsNumberField("minRuntime", "Minimale draaitijd", "Hoe lang een compressor minimaal moet blijven lopen voordat hij weer mag stoppen.")}
          </div>
        </div>
        <div class="oq-settings-subpanel oq-settings-subpanel--nested">
          <div class="oq-settings-subpanel-head">
            <p class="oq-helper-label">Uitsluitingen</p>
            <h4>Compressorstanden uitsluiten</h4>
            <p>Kies per warmtepomp welke compressorstanden OpenQuatt moet overslaan.</p>
          </div>
          <div class="oq-settings-hp-columns${hasEntity("hp2ExcludedA") ? "" : " oq-settings-hp-columns--single"}">
            ${hpGroups}
          </div>
        </div>
      `,
    );
  }

  function renderSettingsSilentSection() {
    return renderSettingsSection(
      "Comfort",
      "Stille uren",
      "Kies wanneer het systeem stiller moet werken, en hoe ver het dan nog mag opschalen.",
      renderSilentSettingsGrid(),
    );
  }

  function renderSilentSettingsFields() {
    return renderSilentSettingsGrid("oq-settings-grid oq-settings-grid--modal");
  }

  function renderSettingsCoolingSection() {
    const tuningFields = [
      renderSettingsNumberField("coolingMinimumSupplyTemp", "Minimale koel-aanvoer", "Ondergrens voor het koeldoel. OpenQuatt gebruikt de hoogste waarde van deze instelling en de dauwpuntveilige grens."),
      renderSettingsSliderField("coolingDemandMax", "Maximale koelsterkte", "Bepaalt hoe krachtig OpenQuatt mag koelen. Lager geeft langere, rustigere runs; hoger geeft meer koelvermogen bij warm weer.", "", {
        minLabel: "Rustig",
        maxLabel: "Krachtig",
        valueLabel: `${formatValue("coolingDemandMax")} max`,
      }),
      renderSettingsNumberField("coolingRestartDelta", "Herstartmarge watertemperatuur", "Na het bereiken van het koel-aanvoerdoel start de watercyclus pas opnieuw zodra de aanvoer deze marge boven het doel ligt."),
      renderSettingsNumberField("coolingRequestOnDelta", "Koelvraag start boven setpoint", "Koelvraag wordt actief zodra de kamer warmer is dan setpoint plus deze marge."),
      renderSettingsNumberField("coolingRequestOffDelta", "Koelvraag stopt boven setpoint", "Koelvraag valt weer af zodra de kamer koeler is dan setpoint plus deze marge."),
      renderSettingsNumberField("coolingSafetyMargin", "Dauwpunt veiligheidsmarge", "Extra marge boven het geselecteerde dauwpunt voor de minimale veilige watertemperatuur."),
    ].filter(Boolean);
    const hasFallbackSettings = hasEntity("coolingWithoutDewPointMode");
    const fallbackStatusFields = [
      hasEntity("coolingGuardMode") ? renderSettingsStaticField("coolingGuardMode", "Actieve beveiligingsroute", "Laat zien of koeling nu via dauwpuntmeting, dauwpuntsbenadering of expliciet toestaan wordt begrensd.", getEntityStateText("coolingGuardMode", "Onbekend")) : "",
      hasEntity("coolingFallbackNightMinOutdoorTemp") ? renderSettingsStaticField("coolingFallbackNightMinOutdoorTemp", "Nachtminimum buitentemperatuur", "Minimum buitentemperatuur van de afgelopen nacht. Warme nachten maken de dauwpuntsbenadering conservatiever.", getEntityStateText("coolingFallbackNightMinOutdoorTemp", "—")) : "",
      hasEntity("coolingFallbackMinSupplyTemp") ? renderSettingsStaticField("coolingFallbackMinSupplyTemp", "Berekende minimum watertemperatuur", "De conservatieve ondergrens die OpenQuatt gebruikt bij de dauwpuntsbenadering. Als die grens door warm weer hoger wordt dan zinvol is, houdt OpenQuatt rekening met de kamertemperatuur.", getEntityStateText("coolingFallbackMinSupplyTemp", "—")) : "",
      hasEntity("coolingEffectiveMinSupplyTemp") ? renderSettingsStaticField("coolingEffectiveMinSupplyTemp", "Actieve minimum ondergrens", "De ondergrens die de koeling nu daadwerkelijk gebruikt: dauwpunt plus marge, dauwpuntsbenadering, of de ingestelde minimumgrens bij expliciet toestaan.", getEntityStateText("coolingEffectiveMinSupplyTemp", "—")) : "",
    ].filter(Boolean);

    if (!tuningFields.length && !hasFallbackSettings && !fallbackStatusFields.length) {
      return "";
    }

    const fallbackModeCopy = {
      "Dew point required": "Koel alleen als er een betrouwbare dauwpuntmeting beschikbaar is. Zonder dauwpuntmeting blijft koeling geblokkeerd.",
      "Allow without dew point": "Gebruik een echte dauwpuntmeting als die beschikbaar is. Ontbreekt die, koel dan alleen via een conservatieve dauwpuntsbenadering.",
      "Allow without dew point, use fallback": "Gebruik een echte dauwpuntmeting als die beschikbaar is. Ontbreekt die, koel dan alleen via een conservatieve dauwpuntsbenadering.",
      "Allow without dew point, use dew point approximation": "Gebruik een echte dauwpuntmeting als die beschikbaar is. Ontbreekt die, koel dan alleen via een conservatieve dauwpuntsbenadering.",
      "Allow without dew point, user responsibility": "Sta koeling expliciet toe zonder dauwpuntgrens. Ook een beschikbare dauwpuntmeting wordt dan genegeerd; alleen de ingestelde minimale koel-aanvoer geldt.",
    };

    return renderSettingsSection(
      "Koeling",
      "Koelingsinstellingen",
      "Stel hier in wanneer koelvraag ontstaat, hoe koud het water mag worden en hoeveel het water mag opwarmen voor herstart.",
      `
        ${tuningFields.length ? `
          <div class="oq-settings-grid">
            ${tuningFields.join("")}
          </div>
        ` : ""}
        ${(hasFallbackSettings || fallbackStatusFields.length) ? `
          <div class="oq-settings-grid">
            ${hasFallbackSettings ? renderSettingsOptionCardsField("coolingWithoutDewPointMode", "Keuze koelbeveiliging", "Kies welke veiligheidsgrens OpenQuatt gebruikt: dauwpuntmeting, dauwpuntsbenadering bij ontbrekende meting, of expliciet toestaan zonder dauwpuntgrens.", fallbackModeCopy, "oq-settings-field--span-2") : ""}
            ${hasFallbackSettings ? `
              <details class="oq-settings-callout oq-settings-callout--cooling oq-settings-callout--inline">
              <summary>Dauwpuntsbenadering bekijken</summary>
              <div class="oq-settings-callout-body">
                <p>Zonder dauwpuntmeting weet OpenQuatt niet zeker hoe koud het water mag worden zonder condensrisico. De dauwpuntsbenadering gebruikt daarom een voorzichtige minimum watertemperatuur.</p>
                <p>Onder de 20°C buiten blijft koeling via deze benadering uit. Daarboven loopt de ondergrens geleidelijk op van 19°C bij 20°C buiten naar 22°C bij 32°C buiten. Warme nachten verhogen die grens nog iets.</p>
                <p>Wordt die grens hoger dan zinvol is voor de kamer, dan verlaagt OpenQuatt hem beperkt: ongeveer 1°C onder de kamertemperatuur, maar nooit lager dan 20°C. Voorbeeld: bij 22°C kamer en een berekende grens van 23,5°C wordt de grens ongeveer 21°C. Zo kan OpenQuatt nog voorzichtig koelen. Een echte dauwpuntmeting blijft veiliger.</p>
                <p>Kies je expliciet toestaan, dan gebruikt OpenQuatt geen dauwpuntgrens: ook een beschikbare dauwpuntmeting wordt genegeerd. Koeling mag dan doorgaan op basis van de ingestelde minimale koel-aanvoer. Dat kan nuttig zijn bij een installatie die je zelf goed bewaakt, maar het condensrisico ligt dan volledig bij jou.</p>
                <div class="oq-settings-rule-groups">
                  <section class="oq-settings-rule-group">
                    <h4>Buitentemperatuur</h4>
                    <div class="oq-settings-rule-table">
                      <div class="oq-settings-rule-row">
                        <span class="oq-settings-rule-key">Onder 20°C</span>
                        <span class="oq-settings-rule-value">Uit</span>
                      </div>
                      <div class="oq-settings-rule-row">
                        <span class="oq-settings-rule-key">20-32°C</span>
                        <span class="oq-settings-rule-value">19°C → 22°C</span>
                      </div>
                      <div class="oq-settings-rule-row">
                        <span class="oq-settings-rule-key">Vanaf 32°C</span>
                        <span class="oq-settings-rule-value">Min. water 22°C</span>
                      </div>
                    </div>
                  </section>
                  <section class="oq-settings-rule-group">
                    <h4>Nachtcorrectie</h4>
                    <div class="oq-settings-rule-table">
                      <div class="oq-settings-rule-row">
                        <span class="oq-settings-rule-key">Onder 18°C</span>
                        <span class="oq-settings-rule-value">+0°C</span>
                      </div>
                      <div class="oq-settings-rule-row">
                        <span class="oq-settings-rule-key">18-19°C</span>
                        <span class="oq-settings-rule-value">+0,5°C</span>
                      </div>
                      <div class="oq-settings-rule-row">
                        <span class="oq-settings-rule-key">19-20°C</span>
                        <span class="oq-settings-rule-value">+1,0°C</span>
                      </div>
                      <div class="oq-settings-rule-row">
                        <span class="oq-settings-rule-key">Vanaf 20°C</span>
                        <span class="oq-settings-rule-value">+1,5°C</span>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </details>
            ` : ""}
            ${fallbackStatusFields.join("")}
          </div>
        ` : ""}
      `,
    );
  }

  function renderCurveGraph() {
    const width = 560;
    const height = 240;
    const margin = { top: 22, right: 18, bottom: 38, left: 34 };
    const plotWidth = width - margin.left - margin.right;
    const plotHeight = height - margin.top - margin.bottom;
    const xMin = CURVE_POINTS[0].outdoor;
    const xMax = CURVE_POINTS[CURVE_POINTS.length - 1].outdoor;

    const toX = (temp) => margin.left + ((temp - xMin) / (xMax - xMin)) * plotWidth;
    const toY = (value) => margin.top + ((70 - value) / 50) * plotHeight;

    const gridLines = [20, 30, 40, 50, 60, 70]
      .map((value) => {
        const y = toY(value);
        return `
          <line x1="${margin.left}" y1="${y}" x2="${width - margin.right}" y2="${y}" class="oq-helper-curve-grid" />
          <text x="8" y="${y + 4}" class="oq-helper-curve-axis-label">${value}°</text>
        `;
      })
      .join("");

    const xLabels = CURVE_POINTS
      .map((point) => `
        <text x="${toX(point.outdoor)}" y="${height - 12}" text-anchor="middle" class="oq-helper-curve-axis-label">${escapeHtml(point.label)}</text>
      `)
      .join("");

    const linePoints = CURVE_POINTS
      .map((point) => `${toX(point.outdoor)},${toY(normalizeNumber(point.key, getEntityValue(point.key)))}`)
      .join(" ");

    const circles = CURVE_POINTS
      .map((point) => {
        const value = normalizeNumber(point.key, getEntityValue(point.key));
        return `
          <g>
            <circle
              cx="${toX(point.outdoor)}"
              cy="${toY(value)}"
              r="7"
              class="oq-helper-curve-point ${state.draggingCurveKey === point.key ? "is-dragging" : ""}"
              data-curve-key="${escapeHtml(point.key)}"
            />
            <text x="${toX(point.outdoor)}" y="${toY(value) - 14}" text-anchor="middle" class="oq-helper-curve-point-label">${value.toFixed(1)}°</text>
          </g>
        `;
      })
      .join("");

    return `
      <div class="oq-helper-curve-shell">
        <div class="oq-helper-curve-copy">
          <h3>Stooklijn-editor</h3>
          <p>Stel de verwarmingscurve in door de punten te verslepen en zo de zes vereiste aanvoertemperaturen te bepalen.</p>
        </div>
        <svg class="oq-helper-curve-svg" viewBox="0 0 ${width} ${height}" role="img" aria-label="Stooklijn-editor">
          ${gridLines}
          <polyline points="${linePoints}" class="oq-helper-curve-line" />
          ${circles}
          ${xLabels}
        </svg>
      </div>
    `;
  }

  function renderCurveInputs() {
    return `
      <div class="oq-helper-curve-grid">
        ${CURVE_POINTS.map((point) => renderNumberInputField(point.key, `Aanvoertemp. bij ${point.label}`, `Doelaanvoertemperatuur bij ${point.label} buitentemperatuur.`)).join("")}
        ${renderNumberInputField("curveFallbackSupply", "Fallback-aanvoertemperatuur zonder buitentemperatuur", "Aanvoertemperatuur die gebruikt wordt als de buitentemperatuursensor niet beschikbaar is.", { footerMarkup: renderCurveFallbackSuggestionMarkup(true) })}
      </div>
    `;
  }
