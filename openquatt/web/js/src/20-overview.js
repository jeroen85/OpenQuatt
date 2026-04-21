  function renderOverviewStatCardMarkup({ label, value, tone, note, status = false }) {
    return `
      <article class="oq-overview-stat oq-overview-stat--${escapeHtml(tone)}${status ? " oq-overview-stat--status" : ""}">
        <p>${escapeHtml(label)}</p>
        <strong>${escapeHtml(value)}</strong>
        <span>${escapeHtml(note)}</span>
      </article>
    `;
  }

  function renderOverviewStatCards(cards, status = false) {
    return cards.map((card) => renderOverviewStatCardMarkup({
      ...card,
      value: Object.prototype.hasOwnProperty.call(card, "key") ? formatOverviewStatValue(card.key) : card.value,
      status,
    })).join("");
  }

  function renderOverviewSectionHead(title) {
    return `
      <div class="oq-overview-sectionhead">
        <h3>${escapeHtml(title)}</h3>
      </div>
    `;
  }

  function renderOverviewShell({ className, title, copy, body, signature = "" }) {
    const signatureAttr = signature ? ` data-render-signature="${escapeHtml(signature)}"` : "";
    return `
      <section class="${escapeHtml(className)}"${signatureAttr}>
        ${title ? `<div class="oq-overview-system-copy"><h3>${escapeHtml(title)}</h3><p>${escapeHtml(copy)}</p></div>` : ""}
        ${body}
      </section>
    `;
  }

  function getHeatPumpPanelStatusLabel(mode, running) {
    if (running) {
      return "Actief";
    }
    if (mode === "Stand-by") {
      return "Stand-by";
    }
    if (mode === "Onbekend") {
      return "Onbekend";
    }
    return "Niet actief";
  }

  function renderHpPanelStatusChip(mode, running) {
    const tone = running ? "active" : "neutral";
    const label = getHeatPumpPanelStatusLabel(mode, running);
    return `<span class="oq-overview-chip oq-overview-chip--${escapeHtml(tone)}" data-oq-bind="panel-status">${escapeHtml(label)}</span>`;
  }

  function renderHpPanelWarningChip(failureText) {
    return `
      <span
        class="oq-overview-chip oq-overview-chip--warning"
        data-oq-bind="panel-warning"
        tabindex="0"
        aria-label="${escapeHtml(`Waarschuwing: ${failureText}`)}"
      >
        <svg class="oq-overview-chip-warning-icon" viewBox="0 0 20 18" aria-hidden="true">
          <path d="M10 1.6 L18.2 16.4 H1.8 Z" />
          <rect x="9.1" y="5.4" width="1.8" height="5.8" rx="0.9" />
          <circle cx="10" cy="13.6" r="1.1" />
        </svg>
        <span>Waarschuwing</span>
        <span class="oq-overview-chip-warning-tooltip" role="tooltip">${escapeHtml(failureText)}</span>
      </span>
    `;
  }

  function renderHpPanelStatusRow(mode, running, warningActive, failureText) {
    return `${warningActive ? renderHpPanelWarningChip(failureText) : ""}${renderHpPanelStatusChip(mode, running)}`;
  }

  function patchHpPanelStatusRow(headStatus, mode, running, warningActive, failureText) {
    if (!headStatus) {
      return;
    }
    const signature = getRenderSignature({ mode, running, warningActive, failureText });
    if (headStatus.dataset.renderSignature !== signature) {
      setInnerHtmlIfChanged(headStatus, renderHpPanelStatusRow(mode, running, warningActive, failureText));
      headStatus.dataset.renderSignature = signature;
    }
  }

  function renderTempRow(label, key, explicitValue = "") {
    return `
      <div class="oq-overview-row">
        <span>${escapeHtml(label)}</span>
        <strong>${escapeHtml(explicitValue || getEntityStateText(key))}</strong>
      </div>
    `;
  }

  function renderOverviewMetricCard(label, value, tone = "blue", note = "") {
    return `
      <article class="oq-overview-metric oq-overview-metric--${escapeHtml(tone)}">
        <span>${escapeHtml(label)}</span>
        <strong>${escapeHtml(value)}</strong>
        ${note ? `<p>${escapeHtml(note)}</p>` : ""}
      </article>
    `;
  }

  function formatSignedTemperature(value) {
    if (Number.isNaN(value)) {
      return "—";
    }
    return `${value > 0 ? "+" : ""}${value.toFixed(1)} °C`;
  }

  function formatNumericState(value, decimals, unit = "") {
    const numeric = Number(value);
    if (Number.isNaN(numeric)) {
      return "—";
    }
    return `${numeric.toFixed(decimals)}${unit ? ` ${unit}` : ""}`;
  }

  function formatSignedPower(value) {
    const numeric = Number(value);
    if (Number.isNaN(numeric)) {
      return "—";
    }
    const prefix = numeric > 0 ? "+" : numeric < 0 ? "-" : "";
    return `${prefix}${Math.abs(numeric).toFixed(0)} W`;
  }

  function getOverviewOutsideTempKey() {
    return ["outsideTempSelected", "hp1OutsideTemp", "hp2OutsideTemp"].find((key) => hasEntity(key)) || "";
  }

  function getOverviewReturnTempKey() {
    return ["hp1WaterIn", "hp2WaterIn"].find((key) => hasEntity(key)) || "";
  }

  function isCoolingControlMode(modeLabel = getEntityStateText("controlModeLabel", "")) {
    const normalized = String(modeLabel || "").toLowerCase();
    return normalized.includes("cm5") || normalized.includes("cooling") || normalized.includes("koeling");
  }

  function isCoolingOverviewActive() {
    return isCoolingControlMode();
  }

  function getOverviewStrategyLabel() {
    return isCoolingOverviewActive() ? "Koeling" : isCurveMode() ? "Stooklijn" : "Power House";
  }

  function getPowerHouseRequestedPower() {
    const keys = ["phouseReq", "strategyRequestedPower"];
    for (const key of keys) {
      const numeric = getEntityNumericValue(key);
      if (!Number.isNaN(numeric)) {
        return numeric;
      }
    }
    return Number.NaN;
  }

  function getPowerHouseOverviewModel() {
    const requested = getPowerHouseRequestedPower();
    const house = getEntityNumericValue("phouseHouse");
    const delivered = getEntityNumericValue("totalHeat");
    const capacity = getEntityNumericValue("hpCapacity");
    const roomCorrection = Number.isNaN(requested) || Number.isNaN(house) ? Number.NaN : requested - house;

    let statusTitle = "Nog aan het opbouwen";
    let statusCopy = "Zodra alle vermogens beschikbaar zijn, zie je hier hoe de warmtevraag is opgebouwd.";

    if (!Number.isNaN(requested) && !Number.isNaN(capacity) && requested > capacity + 150) {
      statusTitle = "Capaciteit begrenst";
      statusCopy = "De gevraagde warmtevraag ligt boven wat de warmtepomp nu ongeveer kan leveren.";
    } else if (!Number.isNaN(requested) && !Number.isNaN(delivered) && delivered < requested - 250) {
      statusTitle = "Levert minder dan gevraagd";
      statusCopy = "De actuele warmteafgifte blijft nog onder de gevraagde warmtevraag.";
    } else if (!Number.isNaN(requested) && !Number.isNaN(delivered) && delivered > requested + 250) {
      statusTitle = "Levert meer dan gevraagd";
      statusCopy = "De actuele warmteafgifte ligt nu boven de gevraagde warmtevraag.";
    } else if (!Number.isNaN(requested) && !Number.isNaN(delivered)) {
      statusTitle = "In balans";
      statusCopy = "Gevraagde warmtevraag en actuele levering liggen nu dicht bij elkaar.";
    }

    return {
      requestedText: formatNumericState(requested, 0, "W"),
      houseText: formatNumericState(house, 0, "W"),
      correctionText: formatSignedPower(roomCorrection),
      capacityText: formatOverviewStatValue("hpCapacity"),
      statusTitle,
      statusCopy,
    };
  }

  function getCurveOverviewModel() {
    const target = getEntityNumericValue("curveSupplyTarget");
    const supply = getEntityNumericValue("supplyTemp");
    const outsideKey = getOverviewOutsideTempKey();
    const outside = outsideKey ? getEntityNumericValue(outsideKey) : Number.NaN;
    const targetDelta = Number.isNaN(target) || Number.isNaN(supply) ? Number.NaN : supply - target;
    const fallbackActive = Boolean(outsideKey) && Number.isNaN(outside);

    let statusTitle = "Stuurt op buitentemperatuur";
    let statusCopy = "De doelaanvoer volgt de huidige buitentemperatuur en vergelijkt die met de actuele aanvoer.";

    if (fallbackActive) {
      statusTitle = "Fallback actief";
      statusCopy = "De buitentemperatuur ontbreekt, dus de regeling valt terug op de ingestelde fallback-aanvoer.";
    } else if (!Number.isNaN(targetDelta) && targetDelta < -1.0) {
      statusTitle = "Nog onder doel";
      statusCopy = "De actuele aanvoertemperatuur ligt nog onder de doelaanvoer.";
    } else if (!Number.isNaN(targetDelta) && targetDelta > 1.0) {
      statusTitle = "Boven doel";
      statusCopy = "De actuele aanvoertemperatuur ligt nu boven de doelaanvoer.";
    } else if (!Number.isNaN(targetDelta)) {
      statusTitle = "Dicht bij doel";
      statusCopy = "De actuele aanvoertemperatuur sluit nu goed aan op de doelaanvoer.";
    }

    return {
      targetText: formatOverviewStatValue("curveSupplyTarget"),
      supplyText: formatOverviewStatValue("supplyTemp"),
      deltaText: formatSignedTemperature(targetDelta),
      capacityText: formatOverviewStatValue("hpCapacity"),
      statusTitle,
      statusCopy,
    };
  }

  function getCoolingOverviewModel() {
    const supply = getEntityNumericValue("supplyTemp");
    const guardMode = getEntityStateText("coolingGuardMode", "");
    const fallbackNightMin = getEntityStateText("coolingFallbackNightMinOutdoorTemp", "—");
    const supplyError = getEntityNumericValue("coolingSupplyError");
    const rawDemand = getEntityNumericValue("coolingDemandRaw");
    const permitted = isEntityActive("coolingPermitted");
    const requestActive = isEntityActive("coolingRequestActive");
    const blockReason = formatCoolingBlockReason(getEntityStateText("coolingBlockReason", "Onbekend"));

    let statusTitle = "Wacht op koelvraag";
    let statusCopy = "Zodra er koelvraag is, zie je hier hoe de regeling de aanvoer richting het koeldoel stuurt.";

    if (!permitted) {
      statusTitle = "Koeling geblokkeerd";
      statusCopy = `Blokkade: ${blockReason}.`;
    } else if (!requestActive) {
      statusTitle = "Koeling gereed";
      statusCopy = "Koeling is toegestaan, maar wacht nog op actieve koelvraag vanuit de kamerregeling.";
    } else if (!Number.isNaN(rawDemand) && rawDemand <= 0.0) {
      statusTitle = "Houdt doel vast";
      statusCopy = "De koelvraag loopt nog, maar de compressor hoeft nu niet harder te werken.";
    } else if (!Number.isNaN(supplyError) && supplyError > 1.0) {
      statusTitle = "Trekt aanvoer omlaag";
      statusCopy = "De actuele aanvoertemperatuur ligt nog ruim boven het koeldoel.";
    } else if (!Number.isNaN(supplyError) && supplyError > 0.2) {
      statusTitle = "Benadert koeldoel";
      statusCopy = "De regeling koelt nog door, maar zit al dicht bij de gewenste aanvoertemperatuur.";
    } else if (!Number.isNaN(supplyError)) {
      statusTitle = "Koelt rustig door";
      statusCopy = "De aanvoertemperatuur zit dicht bij het koeldoel en de regeling werkt nu op laag pitje.";
    }

    return {
      targetText: formatOverviewStatValue("coolingSupplyTarget"),
      supplyText: formatOverviewStatValue("supplyTemp"),
      safeFloorText: formatOverviewStatValue("coolingEffectiveMinSupplyTemp"),
      guardMode,
      fallbackNightMin,
      demandText: formatOverviewStatValue("coolingDemandRaw"),
      statusTitle,
      statusCopy,
      permitted,
      requestActive,
      blockReason,
    };
  }

  function getOverviewStrategySectionModel() {
    if (isCoolingOverviewActive()) {
      const model = getCoolingOverviewModel();
      const guardMode = model.guardMode.toLowerCase();
      return {
        title: "Koelregeling",
        copy: "Koeling laat zien op welke aanvoertemperatuur de regeling nu mikt en hoe dicht die bij de veilige grens zit.",
        focusLabel: "Koeldoel",
        focusValue: model.targetText,
        focusCopy: model.statusCopy,
        metrics: [
          { label: "Actuele aanvoertemperatuur", value: model.supplyText, tone: "orange", note: "Wat nu door het systeem loopt." },
          { label: guardMode.includes("fallback") ? "Fallback ondergrens" : "Veilige aanvoergrens", value: model.safeFloorText, tone: "blue", note: guardMode.includes("fallback") ? `Conservatieve ondergrens zonder dauwpuntmeting. Nachtminimum: ${model.fallbackNightMin}.` : "Dauwpunt plus veiligheidsmarge." },
          { label: "Koelvraag", value: model.demandText, tone: "sky", note: "De huidige koelvraag van de regelaar." },
        ],
      };
    }

    if (isCurveMode()) {
      const model = getCurveOverviewModel();
      return {
        title: "Stooklijnregeling",
        copy: "De stooklijn laat zien op welke aanvoertemperatuur de regeling nu mikt en hoe dicht die al benaderd wordt.",
        focusLabel: "Doelaanvoer",
        focusValue: model.targetText,
        focusCopy: "De aanvoertemperatuur waar de regeling nu naartoe werkt.",
        metrics: [
          { label: "Actuele aanvoertemperatuur", value: model.supplyText, tone: "orange", note: "Wat nu wordt geleverd." },
          { label: "Afwijking doelaanvoer", value: model.deltaText, tone: "blue", note: "Verschil met het doel." },
          { label: "Beschikbare warmtecapaciteit", value: model.capacityText, tone: "sky", note: "Bij huidige buitentemperatuur." },
        ],
      };
    }

    const model = getPowerHouseOverviewModel();
    return {
      title: "Vermogensbalans",
      copy: "Power House laat zien waar de warmtevraag nu vandaan komt en of de warmtepomp dat kan volgen.",
      focusLabel: "Gevraagd vermogen",
      focusValue: model.requestedText,
      focusCopy: "De warmtevraag waar Power House nu naartoe stuurt.",
      metrics: [
        { label: "Berekende huisvraag", value: model.houseText, tone: "blue", note: "Op basis van woning en buitentemperatuur." },
        { label: "Kamercorrectie", value: model.correctionText, tone: "orange", note: "Extra bijsturing rond setpoint." },
        { label: "Beschikbare warmtecapaciteit", value: model.capacityText, tone: "sky", note: "Bij huidige buitentemperatuur." },
      ],
    };
  }

  function renderOverviewNarrativePanel(model) {
    return renderOverviewShell({
      className: "oq-overview-system",
      title: model.title,
      copy: model.copy,
      signature: getRenderSignature(model),
      body: `
        <div class="oq-overview-hero">
          <div class="oq-overview-hero-main">
            <span class="oq-overview-focus-label">${escapeHtml(model.focusLabel)}</span>
            <strong>${escapeHtml(model.focusValue)}</strong>
            <p>${escapeHtml(model.focusCopy)}</p>
          </div>
        </div>
        <div class="oq-overview-metrics oq-overview-metrics--three-column">
          ${model.metrics.map((metric) => renderOverviewMetricCard(metric.label, metric.value, metric.tone, metric.note)).join("")}
        </div>
      `,
    });
  }

  function getOverviewPrimarySignal() {
    if (!isEntityActive("openquattEnabled")) {
      return {
        label: "Regeling nu",
        value: "Regeling tijdelijk uit",
        tone: "orange",
      };
    }
    if (isCoolingOverviewActive()) {
      const model = getCoolingOverviewModel();
      const tone = !model.permitted
        ? "orange"
        : model.statusTitle === "Koelt rustig door" || model.statusTitle === "Houdt temperatuur vast"
          ? "green"
          : model.statusTitle === "Koeling gereed"
            ? "neutral"
            : "sky";
      return {
        label: "Regeling nu",
        value: model.statusTitle,
        tone,
      };
    }
    if (isSystemInStandby()) {
      return {
        label: "Regeling nu",
        value: "Stand-by",
        tone: "neutral",
      };
    }
    const model = isCurveMode() ? getCurveOverviewModel() : getPowerHouseOverviewModel();
    const title = model.statusTitle;
    const tone = title === "In balans" || title === "Dicht bij doel"
      ? "green"
      : title === "Nog aan het opbouwen" || title === "Stuurt op buitentemperatuur"
        ? "neutral"
        : "orange";
    return {
      label: "Regeling nu",
      value: title,
      tone,
    };
  }

  function getOverviewSystemSignal() {
    if (!isEntityActive("openquattEnabled")) {
      return {
        label: "Systeem",
        value: "Vorstbeveiliging blijft actief",
        tone: "neutral",
      };
    }
    if (isCoolingOverviewActive()) {
      if (!isEntityActive("coolingPermitted")) {
        return {
          label: "Systeem",
          value: getEntityStateText("coolingBlockReason", "Koeling geblokkeerd"),
          tone: "orange",
        };
      }
      if (isEntityActive("silentActive")) {
        return {
          label: "Systeem",
          value: "Stille uren actief",
          tone: "neutral",
        };
      }
      return {
        label: "Systeem",
        value: "Normaal",
        tone: "neutral",
      };
    }
    if (isEntityActive("silentActive")) {
      return {
        label: "Systeem",
        value: "Stille uren actief",
        tone: "neutral",
      };
    }
    if (isEntityActive("stickyActive")) {
      return {
        label: "Systeem",
        value: "Pompbescherming actief",
        tone: "neutral",
      };
    }
    return {
      label: "Systeem",
      value: "Normaal",
      tone: "neutral",
    };
  }

  function getOverviewStatusCards(strategyLabel, controlModeLabel) {
    const primary = getOverviewPrimarySignal();
    const system = getOverviewSystemSignal();
    return [
      { label: "Strategie", value: strategyLabel, tone: "orange", note: "regelstrategie" },
      { label: "Controlmode", value: controlModeLabel, tone: "orange", note: "actieve modus" },
      { label: "Regeling", value: primary.value, tone: "orange", note: "wat OpenQuatt nu doet" },
      { label: "Systeem", value: system.value, tone: "orange", note: "actieve randvoorwaarde" },
    ];
  }

  function renderOverviewStatusPanel(strategyLabel, controlModeLabel) {
    const cards = getOverviewStatusCards(strategyLabel, controlModeLabel);
    return `
      <section class="oq-overview-statuspanel" aria-label="Systeemstatus" data-render-signature="${escapeHtml(getRenderSignature(cards))}">
        ${renderOverviewSectionHead("Systeemstatus")}
        <div class="oq-overview-statusgrid">
          ${renderOverviewStatCards(cards, true)}
        </div>
      </section>
    `;
  }

  function getOverviewTopCards() {
    const coolingActive = isCoolingOverviewActive();
    return [
      { key: "totalPower", label: "Stroomverbruik", tone: "blue", note: "hele systeem" },
      { key: coolingActive ? "totalCoolingPower" : "totalHeat", label: coolingActive ? "Koelafgifte" : "Warmteafgifte", tone: "orange", note: "thermisch vermogen" },
      { key: coolingActive ? "totalEer" : "totalCop", label: coolingActive ? "COP (EER)" : "COP", tone: "green", note: "rendement" },
      { key: "flowSelected", label: "Flow", tone: "sky", note: "watercircuit" },
    ];
  }

  function getOverviewControlCards() {
    const openquattEnabled = isEntityActive("openquattEnabled");
    const openquattResumeAt = getEntityValue("openquattResumeAt");
    const openquattResumeScheduled = hasOpenQuattResumeSchedule(openquattResumeAt);
    const manualCoolingEnabled = isEntityActive("manualCoolingEnable");
    const silentModeOverride = String(getEntityValue("silentModeOverride") || "Schedule");
    const coolingBlocked = !isEntityActive("coolingPermitted");
    const coolingRequestActive = isEntityActive("coolingRequestActive");
    const coolingModeActive = isCoolingControlMode();

    let coolingStatus = "Uit";
    let coolingCopy = "Koeling staat uit.";
    if (manualCoolingEnabled && coolingModeActive) {
      coolingStatus = "Actief";
      coolingCopy = "Koeling draait nu.";
    } else if (manualCoolingEnabled && coolingBlocked) {
      coolingStatus = "Geblokkeerd";
      coolingCopy = formatCoolingBlockReason(getEntityStateText("coolingBlockReason", "Koeling wacht nog op veilige condities."));
    } else if (manualCoolingEnabled && coolingRequestActive) {
      coolingStatus = "Start bijna";
      coolingCopy = "Er is koelvraag. Koeling start zodra dat kan.";
    } else if (manualCoolingEnabled) {
      coolingStatus = "Aan";
      coolingCopy = "Koeling staat aan en wacht op koelvraag.";
    }

    let silentStatus = "Uit";
    let silentCopy = "Stille modus staat uit.";
    let silentTone = "neutral";
    if (silentModeOverride === "On") {
      silentStatus = "Aan";
      silentCopy = "Stille modus staat geforceerd aan, ook buiten het tijdvenster.";
      silentTone = "orange";
    } else if (silentModeOverride === "Schedule") {
      silentStatus = "Schema";
      if (isEntityActive("silentActive")) {
        silentCopy = "Stille modus staat nu aan via het tijdvenster.";
        silentTone = "violet";
      } else {
        silentCopy = "Stille modus volgt het tijdvenster.";
      }
    }

    return [
      { key: "openquattEnabled", label: "Openquatt regeling", status: openquattEnabled ? "Actief" : "Tijdelijk uit", copy: openquattEnabled ? "Verwarmen en koelen worden automatisch geregeld." : openquattResumeScheduled ? "Verwarming en koeling zijn tijdelijk uitgeschakeld. Beveiligingen blijven actief." : "Verwarming en koeling zijn uitgeschakeld. Beveiligingen blijven actief.", tone: openquattEnabled ? "green" : "orange", kind: "openquatt-control", meta: openquattEnabled ? [] : [{ label: openquattResumeScheduled ? "Hervat automatisch" : "Hervatten", value: openquattResumeScheduled ? formatOpenQuattResumeDateTime(openquattResumeAt, true) : "Handmatig", tone: openquattResumeScheduled ? "orange" : "neutral" }] },
      { key: "manualCoolingEnable", label: "Koeling", status: coolingStatus, copy: coolingCopy, buttonLabel: manualCoolingEnabled ? "Zet uit" : "Zet aan", nextState: manualCoolingEnabled ? "off" : "on", tone: manualCoolingEnabled ? (coolingModeActive ? "blue" : "sky") : "neutral" },
      { key: "silentModeOverride", label: "Stille modus", status: silentStatus, copy: silentCopy, tone: silentTone, kind: "select", selectedOption: silentModeOverride, settingsAction: true, options: [{ value: "Off", label: "Uit" }, { value: "On", label: "Aan" }, { value: "Schedule", label: "Schema" }] },
    ].filter((card) => hasEntity(card.key));
  }

  function renderOverviewControlMeta(meta = []) {
    return !meta.length ? "" : `
      <div class="oq-overview-controlpanel-meta">
        ${meta.map((item) => `
          <div class="oq-overview-controlpanel-meta-item oq-overview-controlpanel-meta-item--${escapeHtml(item.tone || "neutral")}">
            <span>${escapeHtml(item.label)}</span>
            <strong>${escapeHtml(item.value)}</strong>
          </div>
        `).join("")}
      </div>
    `;
  }

  function renderOverviewControlButton({ className, action, label, busy = false, attrs = "" }) {
    return `
      <button
        class="${className}${busy ? " is-busy" : ""}"
        type="button"
        data-oq-action="${escapeHtml(action)}"
        ${attrs}
        ${state.busyAction ? "disabled" : ""}
      >${escapeHtml(busy ? "Bezig..." : label)}</button>
    `;
  }

  function renderOverviewControlActions(card) {
    if (card.kind === "openquatt-control") {
      const busy = state.busyAction === "openquatt-regulation";
      return isEntityActive("openquattEnabled")
        ? `<div class="oq-overview-controlpanel-actions">${renderOverviewControlButton({ className: "oq-overview-controlpanel-toggle", action: "open-openquatt-pause-modal", label: "Tijdelijk uitschakelen", busy })}</div>`
        : `
          <div class="oq-overview-controlpanel-actions oq-overview-controlpanel-actions--split">
            ${renderOverviewControlButton({ className: "oq-overview-controlpanel-toggle", action: "enable-openquatt-now", label: "Nu inschakelen", busy })}
            ${renderOverviewControlButton({ className: "oq-overview-controlpanel-segment", action: "open-openquatt-pause-modal", label: hasOpenQuattResumeSchedule() ? "Moment wijzigen" : "Automatisch hervatten" })}
          </div>
        `;
    }

    if (card.kind === "select") {
      const busy = state.busyAction === `save-${card.key}`;
      return `
        <div class="oq-overview-controlpanel-actions oq-overview-controlpanel-actions--split">
          <div class="oq-overview-controlpanel-segmented">
            ${card.options.map((option) => renderOverviewControlButton({
              className: `oq-overview-controlpanel-segment${card.selectedOption === option.value ? " is-selected" : ""}`,
              action: "select-overview-control-option",
              label: option.label,
              busy,
              attrs: `data-control-key="${escapeHtml(card.key)}" data-control-option="${escapeHtml(option.value)}"`,
            })).join("")}
          </div>
          ${card.settingsAction
            ? `<button class="oq-overview-controlpanel-icon" type="button" data-oq-action="open-silent-settings-modal" aria-label="Open instellingen voor stille uren" title="Stille uren instellen">⚙</button>`
            : ""}
        </div>
      `;
    }

    return `
      <div class="oq-overview-controlpanel-actions">
        ${renderOverviewControlButton({
          className: "oq-overview-controlpanel-toggle",
          action: "toggle-overview-control",
          label: card.buttonLabel,
          busy: state.busyAction === `switch-${card.key}`,
          attrs: `data-control-key="${escapeHtml(card.key)}" data-control-state="${escapeHtml(card.nextState)}"`,
        })}
      </div>
    `;
  }

  function renderOverviewControlPanels() {
    const cards = getOverviewControlCards();
    if (!cards.length) {
      return "";
    }

    return `
      <section class="oq-overview-controlpanel-stack" aria-label="Bediening">
        ${renderOverviewSectionHead("Bediening")}
        ${cards.map((card) => `
          <article class="oq-overview-controlpanel oq-overview-controlpanel--${escapeHtml(card.tone)}">
            <div class="oq-overview-controlpanel-head">
              <span>${escapeHtml(card.label)}</span>
              <strong class="oq-overview-controlpanel-state oq-overview-controlpanel-state--${escapeHtml(card.tone)}">${escapeHtml(card.status)}</strong>
            </div>
            <p>${escapeHtml(card.copy)}</p>
            ${renderOverviewControlMeta(card.meta)}
            ${renderOverviewControlActions(card)}
          </article>
        `).join("")}
      </section>
    `;
  }

  function renderOverviewSummaryShell(strategyLabel) {
    const controlModeLabel = getEntityStateText("controlModeLabel");
    return `
      <section class="oq-overview-summary-shell">
        <div class="oq-overview-head">
          <div>
            <p class="oq-helper-label">Overzicht</p>
            <h2 class="oq-helper-section-title">Live regeling</h2>
            <p class="oq-helper-section-copy">Hier zie je in één oogopslag hoe OpenQuatt nu werkt.</p>
          </div>
        </div>
        <div class="oq-overview-summary-layout">
          <div class="oq-overview-summary-main">
            <section class="oq-overview-kpis" aria-label="Kerncijfers">
              ${renderOverviewSectionHead("Kerncijfers")}
              <div class="oq-overview-top">
                ${renderOverviewStatCards(getOverviewTopCards())}
              </div>
            </section>
            ${renderOverviewStatusPanel(strategyLabel, controlModeLabel)}
          </div>
          <aside class="oq-overview-summary-side" data-render-signature="${escapeHtml(getOverviewControlsRenderSignature())}">
            ${renderOverviewControlPanels()}
          </aside>
        </div>
      </section>
    `;
  }

  function getOverviewTempsModel() {
    const outsideTempKey = getOverviewOutsideTempKey();
    const returnTempKey = getOverviewReturnTempKey();
    if (isCoolingOverviewActive()) {
      return {
        title: "Koeltemperaturen",
        copy: "De belangrijkste temperaturen voor koeldoel, dauwpuntveiligheid en comfort.",
        rows: [
          { label: "Kamertemperatuur", key: "roomTemp" },
          { label: "Kamer setpoint", key: "roomSetpoint" },
          { label: "Aanvoertemperatuur", key: "supplyTemp" },
          { label: "Koeldoel", key: "coolingSupplyTarget" },
          { label: "Veilige aanvoergrens", key: "coolingMinimumSafeSupplyTemp" },
          { label: "Dauwpunt", key: "coolingDewPointSelected" },
        ],
      };
    }
    return {
      title: "Temperaturen",
      copy: "De belangrijkste temperaturen voor comfort en regeling.",
      rows: [
        { label: "Kamertemperatuur", key: "roomTemp" },
        { label: "Kamer setpoint", key: "roomSetpoint" },
        { label: "Aanvoertemperatuur", key: "supplyTemp" },
        ...(returnTempKey ? [{ label: "Retourtemperatuur", key: returnTempKey }] : []),
        outsideTempKey
          ? { label: "Buitentemperatuur", key: outsideTempKey }
          : { label: "Buitentemperatuur", key: "", value: "—" },
      ],
    };
  }

  function renderOverviewTempsPanel() {
    const model = getOverviewTempsModel();
    return renderOverviewShell({
      className: "oq-overview-temps",
      title: model.title,
      copy: model.copy,
      signature: getRenderSignature(model),
      body: `
        <div class="oq-overview-temps-list">
          ${model.rows.map((row) => renderTempRow(row.label, row.key, row.value || "")).join("")}
        </div>
      `,
    });
  }

  function getHeatPumpRuntimeModel(title, keys, accent) {
    const mode = formatWorkingMode(getEntityStateText(keys.mode, "Unknown"));
    const defrostActive = isEntityActive(keys.defrost);
    const failures = formatFailures(getEntityStateText(keys.failures, "None"));
    const running = mode === "Verwarmen" || mode === "Koelen" || defrostActive;
    return {
      mode,
      defrostActive,
      failures,
      running,
      thermalKey: mode === "Koelen" ? keys.cooling : keys.heat,
      schematic: buildHeatPumpSchematicModel(title, keys, accent, mode, defrostActive, failures, running),
    };
  }

  function renderHeatPumpPanelTitle(title, layoutAction = null) {
    return `<h3>${escapeHtml(title)}</h3>${layoutAction ? `<button class="oq-overview-hp-card-action" type="button" data-oq-action="select-hp-layout" data-hp-layout="${escapeHtml(layoutAction.layout)}">${renderMagnifyActionIcon(layoutAction.layout === "equal" ? "minus" : "plus")}<span>${escapeHtml(layoutAction.label)}</span></button>` : ""}`;
  }

  function renderHeatPumpPanelStatus(mode, running, warningActive, failureText) {
    return `<div class="oq-overview-hp-status">${renderHpPanelStatusRow(mode, running, warningActive, failureText)}</div>`;
  }

  function isSystemInStandby() {
    return getEntityStateText("controlModeLabel", "").toLowerCase().includes("standby");
  }

  function formatHeatPumpSummaryMode(mode, defrostActive) {
    if (defrostActive) {
      return "ontdooit";
    }
    if (mode === "Verwarmen") {
      return "verwarmt";
    }
    if (mode === "Koelen") {
      return "koelt";
    }
    if (mode === "Stand-by") {
      return "stand-by";
    }
    return "onbekend";
  }

  function renderHeatPumpSummary(heatPumpPanels) {
    if (!Array.isArray(heatPumpPanels) || heatPumpPanels.length === 0) {
      return "";
    }
    return `<p class="oq-overview-hp-summary">${escapeHtml(heatPumpPanels.map((panel) => `${panel.title} ${formatHeatPumpSummaryMode(formatWorkingMode(getEntityStateText(panel.keys.mode, "Unknown")), isEntityActive(panel.keys.defrost))}`).join(", "))}</p>`;
  }

  function renderOverviewEnergyRow([label, key]) {
    if (!hasEntity(key)) {
      return "";
    }
    return `
      <div class="oq-overview-energy-row">
        <span>${escapeHtml(label)}</span>
        <strong>${escapeHtml(getEntityStateText(key))}</strong>
      </div>
    `;
  }

  function renderOverviewEnergyGroup(group) {
    const filledRows = group.rows.map(renderOverviewEnergyRow).filter(Boolean).join("");
    if (!filledRows) {
      return "";
    }
    return `
      <section class="oq-overview-energy-group">
        <h5>${escapeHtml(group.title)}</h5>
        <div class="oq-overview-energy-rows">
          ${filledRows}
        </div>
      </section>
    `;
  }

  function renderOverviewEnergyCategory(category) {
    const filledGroups = category.groups.map(renderOverviewEnergyGroup).filter(Boolean).join("");
    if (!filledGroups) {
      return "";
    }
    return `
      <section class="oq-overview-energy-category oq-overview-energy-category--${escapeHtml(category.tone)}">
        <div class="oq-overview-energy-category-head">
          <span>${escapeHtml(category.title)}</span>
        </div>
        <div class="oq-overview-energy-category-groups">
          ${filledGroups}
        </div>
      </section>
    `;
  }

  function renderOverviewEnergyColumn(column) {
    const filledGroups = column.categories.map(renderOverviewEnergyCategory).filter(Boolean).join("");
    if (!filledGroups) {
      return "";
    }
    return `
      <article class="oq-overview-energy-column oq-overview-energy-column--${escapeHtml(column.tone)}">
        <div class="oq-overview-energy-column-copy">
          <h4>${escapeHtml(column.label)}</h4>
        </div>
        <div class="oq-overview-energy-groups">
          ${filledGroups}
        </div>
      </article>
    `;
  }

