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
    return `<article class="oq-settings-field${className ? ` ${className}` : ""}"><div class="oq-settings-field-head"><h3>${escapeHtml(title)}</h3>${renderSettingsInfoToggle(fieldKey, title, copy)}</div><div class="oq-settings-field-control">${controlMarkup}</div>${footerMarkup}</article>`;
  }

  function renderSettingsStaticField(fieldKey, title, copy, value, className = "") {
    return renderSettingsFieldCard(fieldKey, title, copy, `<div class="oq-settings-static-value">${escapeHtml(value)}</div>`, className);
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
      "Dew point required": "Dauwpunt verplicht",
      "Allow without dew point": "Toestaan zonder dauwpunt",
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
      "Flow too low": "Flow te laag",
      "Fallback cooling active": "Fallback-koeling actief",
      "Fallback corrected by warm night": "Fallback gecorrigeerd door warme nacht",
      "Fallback blocked by tropical night": "Fallback geblokkeerd door tropische nacht",
    };

    return labels[value] || value;
  }

  function renderSettingsChoiceOption({ key, option, currentValue, busy, copy = "", meta = "" }) {
    const active = option === currentValue;
    return `<button class="oq-settings-choice-card${active ? " is-active" : ""}" type="button" data-oq-action="select-settings-option" data-select-key="${escapeHtml(key)}" data-select-option="${escapeHtml(option)}" aria-pressed="${active ? "true" : "false"}" ${busy ? "disabled" : ""}><span class="oq-settings-choice-title">${escapeHtml(formatSettingsOptionLabel(option))}</span>${meta ? `<div class="oq-settings-choice-meta"><span class="oq-settings-choice-meta-text">${escapeHtml(meta)}</span></div>` : ""}${copy ? `<span class="oq-settings-choice-copy">${escapeHtml(copy)}</span>` : ""}</button>`;
  }

  function renderSettingsSelectField(key, title, copy, className = "") {
    if (!hasEntity(key)) {
      return "";
    }
    const entity = state.entities[key] || {};
    const value = String(getEntityValue(key) || "");
    const options = Array.isArray(entity.option) ? entity.option : [];
    return renderSettingsFieldCard(key, title, copy, `<label class="oq-settings-control oq-settings-control--select"><select class="oq-helper-select" data-oq-field="${escapeHtml(key)}" ${state.loadingEntities ? "disabled" : ""}>${options.map((option) => `<option value="${escapeHtml(option)}" ${option === value ? "selected" : ""}>${escapeHtml(formatSettingsOptionLabel(option))}</option>`).join("")}</select><span class="oq-settings-select-caret" aria-hidden="true"></span></label>`, className);
  }

  function renderSettingsOptionCardsField(key, title, copy, descriptions, className = "") {
    if (!hasEntity(key)) {
      return "";
    }

    const entity = state.entities[key] || {};
    const currentValue = String(getEntityValue(key) || "");
    const options = Array.isArray(entity.option) ? entity.option : [];
    const busy = state.loadingEntities || state.busyAction === `save-${key}`;
    const controlMarkup = `
      <div class="oq-settings-choice-grid">
        ${options.map((option) => renderSettingsChoiceOption({ key, option, currentValue, busy, copy: descriptions[option] || "" })).join("")}
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

  function renderSettingsSliderField(key, title, copy, className = "") {
    if (!hasEntity(key)) {
      return "";
    }
    const meta = getNumberMeta(key);
    const value = normalizeNumber(key, getEntityValue(key));
    return renderSettingsFieldCard(key, title, copy, `<label class="oq-helper-slider-field"><div class="oq-helper-slider-meta"><span>${escapeHtml(meta.min)}${escapeHtml(meta.uom || "")}</span><strong>${escapeHtml(formatValue(key, value))}</strong><span>${escapeHtml(meta.max)}${escapeHtml(meta.uom || "")}</span></div><input class="oq-helper-range" type="range" data-oq-field="${escapeHtml(key)}" min="${meta.min}" max="${meta.max}" step="${meta.step}" value="${value}" ${state.loadingEntities ? "disabled" : ""}></label>`, className);
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

  function renderSettingsSection(kicker, title, copy, body) {
    return `<section class="oq-settings-section"><div class="oq-settings-section-head"><p class="oq-helper-label">${escapeHtml(kicker)}</p><h3>${escapeHtml(title)}</h3><p>${escapeHtml(copy)}</p></div>${body}</section>`;
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
    return `
      <div class="${escapeHtml(className)}">
        ${renderSettingsSelectField("flowControlMode", "Regelmodus", "Kies tussen automatische flowregeling en een vaste pompstand.")}
        ${isManualFlowMode()
          ? renderSettingsNumberField("manualIpwm", "Vaste pompstand", "Deze pompstand wordt gebruikt zolang de regeling op handmatig staat.")
          : renderSettingsNumberField("flowSetpoint", "Gewenste flow", "De flow die OpenQuatt zoveel mogelijk probeert vast te houden.")}
      </div>
    `;
  }

  function renderPowerHouseBaseFields(className = "oq-settings-grid") {
    return `
      <div class="${escapeHtml(className)}">
        ${renderSettingsNumberField("houseOutdoorMax", "Maximum heating outdoor temperature", "Bij deze buitentemperatuur is verwarmen meestal niet meer nodig.")}
        ${renderSettingsNumberField("housePower", "Rated maximum house power", "Hoeveel warmte je woning ongeveer nodig heeft op een koude dag.")}
        ${renderPowerHouseResponseProfilesField()}
      </div>
    `;
  }

  function renderWaterSettingsFields(className = "oq-settings-grid") {
    return `
      <div class="${escapeHtml(className)}">
        ${renderSettingsNumberField("maxWater", "Maximale watertemperatuur", "Normale bovengrens voor de watertemperatuur tijdens bedrijf. OpenQuatt begint enkele graden eerder al terug te regelen en bewaakt een harde trip op 5°C boven deze grens.")}
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
      renderSettingsSelectField(keyA, "1e compressorstand uitsluiten", "Sla deze compressorstand over als je die liever niet gebruikt."),
      renderSettingsSelectField(keyB, "2e compressorstand uitsluiten", "Nog een compressorstand die je eventueel wilt overslaan."),
    ]
      .filter(Boolean)
      .join("");

    if (!fields) {
      return "";
    }

    return `
      <article class="oq-settings-hp-group">
        <header>
          <h4>${escapeHtml(title)}</h4>
        </header>
        <div class="oq-settings-hp-group-grid">
          ${fields}
        </div>
      </article>
    `;
  }

  function renderSettingsFlowSection() {
    return renderSettingsSection(
      "Flow",
      "Flowregeling",
      "Kies of OpenQuatt de pomp automatisch op flow regelt, of dat je zelf een vaste pompstand instelt.",
      renderFlowSettingsFields(),
    );
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
      "Maximale watertemperatuur",
      "Watertemperatuur",
      "Beschermt het systeem tegen te hoge aanvoertemperaturen. OpenQuatt regelt richting deze grens terug en grijpt 5°C erboven hard in.",
      renderWaterSettingsFields(),
    );
  }

  function renderSettingsCompressorSection() {
    const hpGroups = [
      renderSettingsHeatPumpLimiterCard("HP1", "hp1ExcludedA", "hp1ExcludedB"),
      renderSettingsHeatPumpLimiterCard("HP2", "hp2ExcludedA", "hp2ExcludedB"),
    ].filter(Boolean).join("");

    return renderSettingsSection(
      "Compressor",
      "Compressor",
      "Extra instellingen voor minimale draaitijd en compressorstanden die je liever niet gebruikt.",
      `
        <div class="oq-settings-grid">
          ${renderSettingsNumberField("minRuntime", "Minimale draaitijd", "Zo voorkom je dat de warmtepomp te kort achter elkaar start en stopt.")}
        </div>
        <div class="oq-settings-hp-columns${hasEntity("hp2ExcludedA") ? "" : " oq-settings-hp-columns--single"}">
          ${hpGroups}
        </div>
      `,
    );
  }

  function renderSettingsSilentSection() {
    return renderSettingsSection(
      "Stille uren",
      "Stille uren",
      "Kies wanneer het systeem stiller moet werken, en hoe ver het dan nog mag opschalen.",
      renderSilentSettingsGrid(),
    );
  }

  function renderSilentSettingsFields() {
    return renderSilentSettingsGrid("oq-settings-grid oq-settings-grid--modal");
  }

  function renderSettingsCoolingSection() {
    if (!hasEntity("coolingWithoutDewPointMode")) {
      return "";
    }

    const fallbackModeCopy = {
      "Dew point required": "Blokkeer koeling zodra er geen dauwpuntbron beschikbaar is.",
      "Allow without dew point": "Sta een conservatieve fallback toe op basis van buitentemperatuur en de minimum buitentemperatuur van de afgelopen nacht.",
    };

    const guardMode = getEntityStateText("coolingGuardMode", "Onbekend");
    const fallbackFloor = getEntityStateText("coolingFallbackMinSupplyTemp", "—");
    const nightMin = getEntityStateText("coolingFallbackNightMinOutdoorTemp", "—");
    const effectiveFloor = getEntityStateText("coolingEffectiveMinSupplyTemp", "—");

    return renderSettingsSection(
      "Koeling",
      "Koeling zonder dauwpunt",
      "Standaard blijft koeling zonder dauwpuntbron geblokkeerd. Met deze opt-in mag OpenQuatt een conservatieve fallback gebruiken op basis van buitentemperatuur en de afgelopen nacht.",
      `
        <details class="oq-settings-callout oq-settings-callout--cooling">
          <summary>Fallback-regel bekijken</summary>
          <div class="oq-settings-callout-body">
            <p>Onder de 20°C buiten blijft fallback-cooling uit. Daarboven gebruikt OpenQuatt 19/20/21/22°C als minimum water, met extra correctie voor warme nachten.</p>
            <div class="oq-settings-rule-groups">
              <section class="oq-settings-rule-group">
                <h4>Buitentemperatuur</h4>
                <div class="oq-settings-rule-table">
                  <div class="oq-settings-rule-row">
                    <span class="oq-settings-rule-key">Onder 20°C</span>
                    <span class="oq-settings-rule-value">Uit</span>
                  </div>
                  <div class="oq-settings-rule-row">
                    <span class="oq-settings-rule-key">20-24°C</span>
                    <span class="oq-settings-rule-value">Min. water 19°C</span>
                  </div>
                  <div class="oq-settings-rule-row">
                    <span class="oq-settings-rule-key">24-28°C</span>
                    <span class="oq-settings-rule-value">Min. water 20°C</span>
                  </div>
                  <div class="oq-settings-rule-row">
                    <span class="oq-settings-rule-key">28-32°C</span>
                    <span class="oq-settings-rule-value">Min. water 21°C</span>
                  </div>
                  <div class="oq-settings-rule-row">
                    <span class="oq-settings-rule-key">Boven 32°C</span>
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
                    <span class="oq-settings-rule-value">+1°C</span>
                  </div>
                  <div class="oq-settings-rule-row">
                    <span class="oq-settings-rule-key">19-20°C</span>
                    <span class="oq-settings-rule-value">+2°C</span>
                  </div>
                  <div class="oq-settings-rule-row">
                    <span class="oq-settings-rule-key">Vanaf 20°C</span>
                    <span class="oq-settings-rule-value">Fallback uit</span>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </details>
        <div class="oq-settings-grid">
          ${renderSettingsOptionCardsField("coolingWithoutDewPointMode", "Koeling zonder dauwpuntbeveiliging", "Kies of OpenQuatt zonder dauwpuntbron volledig moet blokkeren, of een conservatieve fallback mag gebruiken.", fallbackModeCopy, "oq-settings-field--span-2")}
          ${renderSettingsStaticField("coolingGuardMode", "Actieve beveiligingsroute", "Laat zien of koeling nu via dauwpunt of via de fallback wordt begrensd.", guardMode)}
          ${renderSettingsStaticField("coolingFallbackNightMinOutdoorTemp", "Nachtminimum buitentemperatuur", "Minimum buitentemperatuur van de afgelopen nacht. Warme nachten maken fallback-cooling conservatiever of blokkeren die helemaal.", nightMin)}
          ${renderSettingsStaticField("coolingFallbackMinSupplyTemp", "Fallback minimum watertemperatuur", "De conservatieve ondergrens die OpenQuatt gebruikt als er geen dauwpuntbron beschikbaar is en fallback is toegestaan.", fallbackFloor)}
          ${renderSettingsStaticField("coolingEffectiveMinSupplyTemp", "Actieve minimum ondergrens", "De ondergrens die de koeling nu daadwerkelijk gebruikt: dauwpunt plus marge, of de fallback-ondergrens.", effectiveFloor)}
        </div>
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

  function renderStrategyWorkspace() {
    return `
      <section class="oq-helper-panel">
        <p class="oq-helper-label">Stap 1</p>
        <h2 class="oq-helper-section-title">Kies de verwarmingsstrategie</h2>
        <p class="oq-helper-section-copy">Kies hier hoe OpenQuatt je verwarming regelt. Daarna lopen we samen de belangrijkste instellingen langs.</p>
        ${renderHeatingStrategyExplainCards()}
        ${renderStrategySelectionFields("oq-settings-grid oq-settings-grid--quickstart")}
        ${renderQuickStartStepNav()}
      </section>
    `;
  }

  function renderFlowWorkspace() {
    return `
      <section class="oq-helper-panel">
        <p class="oq-helper-label">Stap 3</p>
        <h2 class="oq-helper-section-title">Flow en pompregeling</h2>
        <p class="oq-helper-section-copy">Kies hier of OpenQuatt de pomp automatisch regelt, of dat je zelf een vaste pompstand instelt.</p>
        ${renderFlowSettingsFields("oq-settings-grid oq-settings-grid--quickstart")}
        ${renderQuickStartStepNav()}
      </section>
    `;
  }

  function renderHeatingWorkspace() {
    return `
      <section class="oq-helper-panel">
        <p class="oq-helper-label">Stap 2</p>
        <h2 class="oq-helper-section-title">${escapeHtml(isCurveMode() ? "Stooklijn instellen" : "Power House instellen")}</h2>
        <p class="oq-helper-section-copy">
          ${escapeHtml(
            isCurveMode()
              ? "Stel hier je stooklijn en fallback-aanvoertemperatuur in."
              : "Stel hier in hoe Power House het warmteverlies van je woning inschat en hoe snel het reageert.",
          )}
        </p>
        ${isCurveMode()
          ? `
            <div class="oq-settings-grid oq-settings-grid--quickstart">${renderHeatingCurveProfileField()}</div>
            <div class="oq-settings-curve-shell">
              ${renderCurveGraph()}
            </div>
            ${renderSettingsCurveInputs()}
          `
          : `
            ${renderPowerHouseBaseFields("oq-settings-grid oq-settings-grid--quickstart")}
            ${renderPowerHouseAdvancedField()}
          `}
        ${renderQuickStartStepNav()}
      </section>
    `;
  }

  function renderWaterWorkspace() {
    return `
      <section class="oq-helper-panel">
        <p class="oq-helper-label">Stap 4</p>
        <h2 class="oq-helper-section-title">Watertemperatuur beveiligen</h2>
        <p class="oq-helper-section-copy">Hier stel je de veilige bovengrens voor de watertemperatuur in. OpenQuatt regelt richting deze grens terug en grijpt 5°C erboven hard in.</p>
        ${renderWaterSettingsFields("oq-settings-grid oq-settings-grid--quickstart")}
        ${renderQuickStartStepNav()}
      </section>
    `;
  }

  function renderSilentWorkspace() {
    return `
      <section class="oq-helper-panel">
        <p class="oq-helper-label">Stap 5</p>
        <h2 class="oq-helper-section-title">Stille uren en niveaus</h2>
        <p class="oq-helper-section-copy">Kies hier wanneer het systeem stiller moet werken, en hoe ver het dan nog mag opschalen.</p>
        ${renderSilentSettingsGrid("oq-settings-grid oq-settings-grid--quickstart")}
        ${renderQuickStartStepNav()}
      </section>
    `;
  }

  function renderConfirmWorkspace() {
    return `
      <section class="oq-helper-panel">
        <p class="oq-helper-label">Stap 6</p>
        <h2 class="oq-helper-section-title">Bevestigen en afronden</h2>
        <p class="oq-helper-section-copy">Controleer nog één keer je keuzes. Met afronden markeer je Quick Start als voltooid.</p>
        ${renderConfirmReviewCards()}
        ${state.controlNotice ? `<p class="oq-helper-notice">${escapeHtml(state.controlNotice)}</p>` : ""}
        ${state.controlError ? `<p class="oq-helper-error">${escapeHtml(state.controlError)}</p>` : ""}
        <div class="oq-helper-actions oq-helper-actions--step">
          <button class="oq-helper-button oq-helper-button--ghost" type="button" data-oq-action="previous-step" ${state.busyAction ? "disabled" : ""}>
            Vorige
          </button>
        </div>
        <div class="oq-helper-actions">
          <button class="oq-helper-button oq-helper-button--primary" type="button" data-oq-action="apply" ${state.busyAction ? "disabled" : ""}>
            ${state.busyAction === "apply" ? "Afronden..." : "Quick Start afronden"}
          </button>
          <button class="oq-helper-button" type="button" data-oq-action="reset" ${state.busyAction ? "disabled" : ""}>
            ${state.busyAction === "reset" ? "Resetten..." : "Setup-status resetten"}
          </button>
        </div>
      </section>
    `;
  }

  function renderActiveStep() {
    if (state.currentStep === "flow") {
      return renderFlowWorkspace();
    }
    if (state.currentStep === "heating") {
      return renderHeatingWorkspace();
    }
    if (state.currentStep === "water") {
      return renderWaterWorkspace();
    }
    if (state.currentStep === "silent") {
      return renderSilentWorkspace();
    }
    if (state.currentStep === "confirm") {
      return renderConfirmWorkspace();
    }
    return renderStrategyWorkspace();
  }

  function getQuickStepStatus(index) {
    const currentIndex = getCurrentQuickStepIndex();
    const isSelected = index === currentIndex;
    const isDone = state.complete || index < currentIndex;
    return {
      tone: isSelected ? "current" : isDone ? "done" : "upcoming",
      label: isSelected ? "Actief" : isDone ? "Gereed" : "Volgend",
      current: isSelected,
    };
  }

  function renderStepOverview(compact = false) {
    return QUICK_STEPS.map((step, index) => {
      const stepStatus = getQuickStepStatus(index);
      return `
        <button
          class="oq-helper-field oq-helper-field--step${compact ? " oq-helper-field--compact" : ""} is-${stepStatus.tone}"
          type="button"
          data-oq-action="select-step"
          data-step-id="${escapeHtml(step.id)}"
          aria-current="${stepStatus.current ? "step" : "false"}"
        >
          <div class="oq-helper-field-step-head">
            <h3>0${index + 1}. ${escapeHtml(step.title)}</h3>
            <span class="oq-helper-field-step-state">${stepStatus.label}</span>
          </div>
          <p>${escapeHtml(step.copy)}</p>
        </button>
      `;
    }).join("");
  }

  function getCurrentQuickStep() {
    return QUICK_STEPS.find((step) => step.id === state.currentStep) || QUICK_STEPS[0];
  }

  function getCurrentQuickStepIndex() {
    return Math.max(0, QUICK_STEPS.findIndex((step) => step.id === state.currentStep));
  }

  function selectQuickStepByOffset(offset) {
    const nextIndex = Math.min(QUICK_STEPS.length - 1, Math.max(0, getCurrentQuickStepIndex() + offset));
    state.currentStep = QUICK_STEPS[nextIndex]?.id || QUICK_STEPS[0].id;
  }

  function renderQuickStartStepNav() {
    const index = getCurrentQuickStepIndex();
    const previousStep = index > 0 ? QUICK_STEPS[index - 1] : null;
    const nextStep = index < QUICK_STEPS.length - 1 ? QUICK_STEPS[index + 1] : null;

    return `
      <div class="oq-helper-step-nav">
        <div class="oq-helper-step-nav-meta">
          <strong>Stap ${index + 1} van ${QUICK_STEPS.length}</strong>
          <span>${escapeHtml(nextStep ? `Hierna: ${nextStep.title}` : "Je bent bij de laatste stap")}</span>
        </div>
        <div class="oq-helper-actions oq-helper-actions--step">
          <button class="oq-helper-button oq-helper-button--ghost" type="button" data-oq-action="previous-step" ${previousStep ? "" : "disabled"}>
            Vorige
          </button>
          <button class="oq-helper-button oq-helper-button--primary" type="button" data-oq-action="next-step" ${nextStep ? "" : "disabled"}>
            ${nextStep ? "Volgende" : "Laatste stap"}
          </button>
        </div>
      </div>
    `;
  }

  function renderQuickStartSidebar() {
    const stepIndex = getCurrentQuickStepIndex();
    return `
      <section class="oq-helper-panel oq-helper-panel--aside">
        <p class="oq-helper-label">Quick Start</p>
        <h2 class="oq-helper-section-title">Snel van start, stap voor stap</h2>
        <p class="oq-helper-panel-note">Quick Start helpt je op weg met de belangrijkste keuzes. Later kun je alles verder verfijnen onder Instellingen.</p>
        <h3 class="oq-helper-aside-title">Stap ${stepIndex + 1} van ${QUICK_STEPS.length}</h3>
        <div class="oq-helper-fields oq-helper-fields--compact">
          ${renderStepOverview(true)}
        </div>
        ${state.controlNotice ? `<p class="oq-helper-notice">${escapeHtml(state.controlNotice)}</p>` : ""}
        ${state.controlError ? `<p class="oq-helper-error">${escapeHtml(state.controlError)}</p>` : ""}
      </section>
    `;
  }

  function renderConfirmReviewCards() {
    const strategyTitle = isCurveMode() ? "Stooklijn" : "Power House";
    const formatReviewOption = (key) => formatSettingsOptionLabel(getEntityStateText(key));
    const strategyLines = isCurveMode()
      ? [
          ["Regelprofiel", formatReviewOption("curveControlProfile")],
          ["Aanvoer bij -20°C", formatValue("curveM20")],
          ["Aanvoer bij -10°C", formatValue("curveM10")],
          ["Aanvoer bij 0°C", formatValue("curve0")],
          ["Aanvoer bij 5°C", formatValue("curve5")],
          ["Aanvoer bij 10°C", formatValue("curve10")],
          ["Aanvoer bij 15°C", formatValue("curve15")],
          ["Fallback-aanvoer", formatValue("curveFallbackSupply")],
        ]
      : [
          ["Profiel", formatReviewOption("phResponseProfile")],
          ["Rated maximum house power", formatValue("housePower")],
          ["Maximum heating outdoor temperature", formatValue("houseOutdoorMax")],
          ["Temperatuurreactie", formatValue("phKp")],
          ["Comfort onder setpoint", formatValue("phComfortBelow")],
          ["Comfort boven setpoint", formatValue("phComfortAbove")],
        ];

    const flowMode = String(getEntityValue("flowControlMode") || "");
    const flowLines = [
      ["Flowregeling", flowMode === "Manual PWM" ? "Vaste pompstand" : "Gewenste flow"],
      flowMode === "Manual PWM"
        ? ["Vaste pompstand", formatValue("manualIpwm")]
        : ["Gewenste flow", formatValue("flowSetpoint")],
    ];

    const waterLines = [
      ["Maximale watertemperatuur", formatValue("maxWater")],
    ];

    const silentLines = [
      ["Start stille uren", toTimeInputValue(getEntityValue("silentStartTime")) || "—"],
      ["Einde stille uren", toTimeInputValue(getEntityValue("silentEndTime")) || "—"],
      ["Maximaal niveau tijdens stille uren", formatValue("silentMax")],
      ["Maximaal niveau overdag", formatValue("dayMax")],
    ];

    const renderReviewList = (lines) => `
      <div class="oq-helper-review-list">
        ${lines
          .filter((line) => line && line[1])
          .map(
            ([label, value]) => `
              <div class="oq-helper-review-row">
                <span class="oq-helper-review-label">${escapeHtml(label)}</span>
                <strong class="oq-helper-review-value">${escapeHtml(value)}</strong>
              </div>
            `,
          )
          .join("")}
      </div>
    `;
    const renderReviewCard = (title, lines, summary = "") => `
      <article class="oq-helper-field oq-helper-field--review">
        <h3>${escapeHtml(title)}</h3>
        ${summary ? `<p class="oq-helper-review-summary"><strong>${escapeHtml(summary)}</strong></p>` : ""}
        ${renderReviewList(lines)}
      </article>
    `;

    return `
      <div class="oq-helper-fields oq-helper-fields--review">
        <div class="oq-helper-review-column">
          ${renderReviewCard("Verwarmingsstrategie", strategyLines, strategyTitle)}
          ${renderReviewCard("Watertemperatuur", waterLines)}
        </div>
        <div class="oq-helper-review-column">
          ${renderReviewCard("Flowregeling", flowLines)}
          ${renderReviewCard("Stille uren", silentLines)}
        </div>
      </div>
    `;
  }

  function renderAppSummary() {
    const parts = [];
    parts.push(isCurveMode() ? "Stooklijn" : "Power House");
    const profile = String(getEntityValue(isCurveMode() ? "curveControlProfile" : "phResponseProfile") || "").trim();
    if (profile) {
      parts.push(`profiel ${profile}`);
    }
    const flowMode = String(getEntityValue("flowControlMode") || "").trim();
    if (flowMode) {
      parts.push(`flow ${flowMode === "Manual PWM" ? "handmatig" : "setpoint"}`);
    }
    if (flowMode === "Manual PWM" && hasEntity("manualIpwm")) {
      parts.push(`iPWM ${formatValue("manualIpwm")}`);
    } else if (hasEntity("flowSetpoint")) {
      parts.push(`flow ${formatValue("flowSetpoint")}`);
    }

    if (hasEntity("dayMax")) {
      parts.push(`dag ${formatValue("dayMax")}`);
    }
    if (hasEntity("silentMax")) {
      parts.push(`silent ${formatValue("silentMax")}`);
    }
    if (hasEntity("maxWater")) {
      parts.push(`max water ${formatValue("maxWater")}`);
    }

    return parts.filter(Boolean).join(", ") || "Quick Start-instellingen beschikbaar";
  }

  function hasEntity(key) {
    const entity = state.entities[key];
    return Boolean(entity && (entity.state !== undefined || entity.value !== undefined));
  }

  function getEntityStateText(key, fallback = "—") {
    const entity = state.entities[key];
    if (!entity) {
      return fallback;
    }
    if (typeof entity.state === "string" && entity.state.trim() !== "") {
      return entity.state;
    }
    const value = entity.value ?? entity.state;
    if (value === undefined || value === null || value === "") {
      return fallback;
    }
    if (typeof value === "boolean") {
      return value ? "Aan" : "Uit";
    }
    if (typeof value === "number" && !Number.isNaN(value)) {
      return entity.uom ? `${value} ${entity.uom}` : String(value);
    }
    return String(value);
  }

  function getEntityNumericValue(key) {
    const value = Number(getEntityValue(key));
    return Number.isNaN(value) ? NaN : value;
  }

  function formatOverviewStatValue(key) {
    const entity = state.entities[key];
    if (!entity) {
      return "—";
    }
    const numeric = getEntityNumericValue(key);
    if (Number.isNaN(numeric)) {
      return getEntityStateText(key);
    }
    const decimals = key.toLowerCase().includes("cop") ? 1 : 0;
    return formatNumericState(numeric, decimals, entity.uom || "");
  }

  function isEntityActive(key) {
    const entity = state.entities[key];
    if (!entity) {
      return false;
    }
    if (typeof entity.value === "boolean") {
      return entity.value;
    }
    const raw = String(entity.state ?? entity.value ?? "").toLowerCase();
    return raw === "on" || raw === "true" || raw === "1";
  }

  function renderAppNav() {
    return `
      <div class="oq-helper-app-nav">
        ${APP_VIEWS.map((view) => `
          <button
            class="oq-helper-app-tab ${state.appView === view.id ? "is-active" : ""}"
            type="button"
            data-oq-action="select-view"
            data-view-id="${escapeHtml(view.id)}"
          >
            <span>${escapeHtml(view.label)}</span>
            ${view.id === QUICK_START_VIEW && state.complete ? `
              <svg class="oq-helper-app-tab-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                <path d="M9,20.42L2.79,14.21L5.62,11.38L9,14.77L18.88,4.88L21.71,7.71L9,20.42Z" />
              </svg>
            ` : ""}
          </button>
        `).join("")}
      </div>
    `;
  }

  function getAppViewLabel(view = state.appView) {
    return APP_VIEWS.find((item) => item.id === view)?.label || "OpenQuatt";
  }

  function syncDocumentTitle() {
    if (typeof document === "undefined") {
      return;
    }
    if (state.nativeOpen) {
      document.title = "ESPHome fallback • OpenQuatt";
      return;
    }
    const viewLabel = getAppViewLabel();
    document.title = `${viewLabel} • OpenQuatt`;
  }

  function syncDocumentTheme() {
    if (typeof document === "undefined") {
      return;
    }
    const isDark = state.overviewTheme === "dark";
    document.documentElement.classList.toggle("oq-page-dark", isDark);
    document.documentElement.classList.toggle("oq-page-light", !isDark);
    if (document.body) {
      document.body.classList.toggle("oq-page-dark", isDark);
      document.body.classList.toggle("oq-page-light", !isDark);
    }
  }

