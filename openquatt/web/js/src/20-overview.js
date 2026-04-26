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

  function formatOverviewTrendDurationLabel(totalMinutes) {
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

  function parseOverviewClockMinutes(rawValue) {
    const value = String(rawValue || "").trim();
    const match = value.match(/^(\d{1,2}):(\d{2})$/);
    if (!match) {
      return Number.NaN;
    }
    const hours = Number(match[1]);
    const minutes = Number(match[2]);
    if (Number.isNaN(hours) || Number.isNaN(minutes) || hours < 0 || hours > 23 || minutes < 0 || minutes > 59) {
      return Number.NaN;
    }
    return (hours * 60) + minutes;
  }

  function formatOverviewTrendClockLabel(totalMinutes) {
    const clockMinutes = parseOverviewClockMinutes(getEntityStateText("timeNowHhmm", ""));
    if (!Number.isFinite(clockMinutes)) {
      return "";
    }
    const offsetMinutes = Math.round(totalMinutes);
    const sampleMinutes = ((clockMinutes - offsetMinutes) % 1440 + 1440) % 1440;
    const hours = Math.floor(sampleMinutes / 60);
    const minutes = sampleMinutes % 60;
    return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}`;
  }

  function formatOverviewTrendPointTime(sampleTimestamp, endTime) {
    const ageMinutes = Math.max(0, (Number(endTime) - Number(sampleTimestamp)) / 60000);
    const ageLabel = formatOverviewTrendDurationLabel(ageMinutes);
    const clockLabel = hasEntity("timeValid") && isEntityActive("timeValid") ? formatOverviewTrendClockLabel(ageMinutes) : "";
    if (clockLabel) {
      return {
        value: clockLabel,
        note: `${ageLabel} geleden`,
      };
    }
    return {
      value: `${ageLabel} geleden`,
      note: "Geen tijdsync",
    };
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
      { key: "totalPower", label: "Elektrisch vermogen", tone: "blue", note: "hele systeem" },
      { key: coolingActive ? "totalCoolingPower" : "totalHeat", label: coolingActive ? "Koelvermogen" : "Verwarmingsvermogen", tone: "orange", note: "thermisch vermogen" },
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

  const OVERVIEW_TREND_MAX_POINTS = 360;

  function getOverviewTrendWindowHours() {
    const hours = Number(state.trendWindowHours || 24);
    return TREND_WINDOW_HOURS_OPTIONS.includes(hours) ? hours : DEFAULT_TREND_WINDOW_HOURS;
  }

  function getOverviewTrendWindowMs(windowHours = getOverviewTrendWindowHours()) {
    return Math.max(1, Number(windowHours) || 24) * 60 * 60 * 1000;
  }

  function formatOverviewTrendWindowLabel(windowHours = getOverviewTrendWindowHours()) {
    const hours = Number(windowHours) || 24;
    if (hours >= 72 && hours % 24 === 0) {
      return `${hours / 24}d`;
    }
    return `${hours}u`;
  }

  function formatOverviewTrendWindowText(windowHours = getOverviewTrendWindowHours()) {
    const hours = Number(windowHours) || 24;
    if (hours >= 72 && hours % 24 === 0) {
      const days = hours / 24;
      return `${days} ${days === 1 ? "dag" : "dagen"}`;
    }
    return `${hours} uur`;
  }

  function formatOverviewTrendAxisLabel(totalMinutes) {
    if (!Number.isFinite(totalMinutes) || totalMinutes < 0) {
      return "—";
    }
    const roundedMinutes = Math.round(totalMinutes);
    if (roundedMinutes % 60 === 0) {
      return `${roundedMinutes / 60}u`;
    }
    return formatOverviewTrendDurationLabel(roundedMinutes);
  }

  function getOverviewUptimeMillis() {
    const entity = state.entities.uptime;
    if (!entity) {
      return Number.NaN;
    }

    const numeric = getEntityNumericValue("uptime");
    if (!Number.isFinite(numeric)) {
      return Number.NaN;
    }

    const unit = String(entity.uom ?? entity.unit_of_measurement ?? "").trim().toLowerCase();
    if (unit === "d") {
      return numeric * 24 * 60 * 60 * 1000;
    }
    if (unit === "h") {
      return numeric * 60 * 60 * 1000;
    }
    if (unit === "m" || unit === "min") {
      return numeric * 60 * 1000;
    }
    return numeric * 1000;
  }

  function parseOverviewTrendRow(row) {
    const parts = String(row || "").trim().split("|");
    if (parts.length < 5) {
      return null;
    }

    const timestamp = Number(parts[0]);
    if (!Number.isFinite(timestamp)) {
      return null;
    }

    const parseValue = (value) => {
      const numeric = Number(value);
      return Number.isFinite(numeric) ? numeric : null;
    };

    return {
      t: timestamp,
      outside: parseValue(parts[1]),
      supply: parseValue(parts[2]),
      room: parts.length >= 8 ? parseValue(parts[3]) : null,
      roomSetpoint: parts.length >= 8 ? parseValue(parts[4]) : null,
      flow: parts.length >= 8 ? parseValue(parts[5]) : null,
      input: parts.length >= 8 ? parseValue(parts[6]) : parseValue(parts[3]),
      output: parts.length >= 8 ? parseValue(parts[7]) : parseValue(parts[4]),
    };
  }

  function isDevPreviewEnvironment() {
    return Boolean(
      (typeof window !== "undefined" && window.__OQ_DEV_CONTROLS__)
      || (typeof window !== "undefined" && window.__OQ_DEV_META)
    );
  }

  function getOverviewTrendDevMockSamples(windowHours = getOverviewTrendWindowHours()) {
    if (typeof window === "undefined" || !window.__OQ_DEV_TREND_MOCKS__ || typeof window.__OQ_DEV_TREND_MOCKS__.buildTrendPreviewSamples !== "function") {
      return [];
    }
    return window.__OQ_DEV_TREND_MOCKS__.buildTrendPreviewSamples(windowHours);
  }

  function getOverviewTrendSamples() {
    const windowMs = getOverviewTrendWindowMs();
    const raw = String(state.trendHistoryRaw || "").trim();
    if (!raw) {
      return isDevPreviewEnvironment() ? getOverviewTrendDevMockSamples() : [];
    }

    const rows = raw
      .split(/\r?\n/)
      .map(parseOverviewTrendRow)
      .filter(Boolean);

    const latestTimestamp = rows.length ? rows[rows.length - 1].t : Number.NaN;
    const endTime = Number.isFinite(state.trendHistoryNowMs)
      ? state.trendHistoryNowMs
      : (Number.isFinite(latestTimestamp) ? latestTimestamp : Number.NaN);

    if (!Number.isFinite(endTime)) {
      return rows.length ? rows.slice(-OVERVIEW_TREND_MAX_POINTS) : getOverviewTrendDevMockSamples();
    }

    const cutoff = Math.max(0, endTime - windowMs);
    const filtered = rows.filter((sample) => sample.t >= cutoff).slice(-OVERVIEW_TREND_MAX_POINTS);
    if (filtered.length) {
      return filtered;
    }
    return isDevPreviewEnvironment() ? getOverviewTrendDevMockSamples(windowHours) : [];
  }

  function getOverviewTrendCardsModel() {
    const windowHours = getOverviewTrendWindowHours();
    const windowText = formatOverviewTrendWindowText(windowHours);
    const samples = getOverviewTrendSamples();
    const isMockData = isDevPreviewEnvironment() && samples.length === 0;
    return [
      {
        id: "temperatures",
        title: "Temperaturen",
        copy: `Buiten- en aanvoertemperatuur van de laatste ${windowText}.`,
        tone: "orange",
        samples,
        mock: isMockData,
        windowHours,
        series: [
          { id: "outside", sampleKey: "outside", label: "Buiten", tone: "orange", decimals: 1, unit: " °C" },
          { id: "supply", sampleKey: "supply", label: "Aanvoer", tone: "blue", decimals: 1, unit: " °C" },
        ],
      },
      {
        id: "power",
        title: "Vermogen",
        copy: `Elektrisch vermogen en verwarmingsvermogen van de laatste ${windowText}.`,
        tone: "green",
        samples,
        mock: isMockData,
        windowHours,
        series: [
          { id: "input", sampleKey: "input", label: "Elektrisch vermogen", tone: "green", decimals: 0, unit: " W" },
          { id: "output", sampleKey: "output", label: "Verwarmingsvermogen", tone: "sky", decimals: 0, unit: " W" },
        ],
      },
      {
        id: "rendement",
        title: "Rendement",
        copy: `COP van de laatste ${windowText}.`,
        tone: "slate",
        samples,
        mock: isMockData,
        windowHours,
        series: [
          {
            id: "cop",
            label: "COP",
            tone: "slate",
            decimals: 1,
            unit: "",
            derive: (sample) => {
              const input = Number(sample?.input);
              const output = Number(sample?.output);
              if (!Number.isFinite(input) || !Number.isFinite(output) || input <= 0) {
                return Number.NaN;
              }
              return output / input;
            },
          },
        ],
      },
      {
        id: "comfort",
        title: "Comfort",
        copy: `Kamertemperatuur en setpoint van de laatste ${windowText}.`,
        tone: "blue",
        samples,
        mock: isMockData,
        windowHours,
        series: [
          { id: "roomTemp", sampleKey: "room", label: "Kamertemperatuur", tone: "blue", decimals: 1, unit: " °C" },
          { id: "roomSetpoint", sampleKey: "roomSetpoint", label: "Kamer setpoint", tone: "orange", decimals: 1, unit: " °C" },
        ],
      },
      {
        id: "flow",
        title: "Flow",
        copy: `Flow van de laatste ${windowText}.`,
        tone: "sky",
        samples,
        mock: isMockData,
        windowHours,
        series: [
          { id: "flow", sampleKey: "flow", label: "Flow", tone: "sky", decimals: 0, unit: " L/h" },
        ],
      },
    ];
  }

  function getOverviewTrendCardSignature(card) {
    const latest = card.samples[card.samples.length - 1] || null;
    return getRenderSignature({
      id: card.id,
      windowHours: card.windowHours,
      sampleCount: card.samples.length,
      firstTimestamp: card.samples[0]?.t || 0,
      lastTimestamp: latest?.t || 0,
      trendSignature: state.trendHistorySignature || "",
      latestValues: latest ? [
        latest.outside,
        latest.supply,
        latest.room,
        latest.roomSetpoint,
        latest.flow,
        latest.input,
        latest.output,
      ] : [],
    });
  }

  function getOverviewTrendSeriesValue(series, sample) {
    if (!series || !sample) {
      return Number.NaN;
    }
    const raw = typeof series.derive === "function"
      ? series.derive(sample)
      : sample?.[series.sampleKey];
    const numeric = Number(raw);
    return Number.isFinite(numeric) ? numeric : Number.NaN;
  }

  function getOverviewTrendRange(samples, series) {
    const values = [];
    samples.forEach((sample) => {
      series.forEach((item) => {
        const numeric = getOverviewTrendSeriesValue(item, sample);
        if (Number.isFinite(numeric)) {
          values.push(numeric);
        }
      });
    });

    if (!values.length) {
      return { min: 0, max: 1 };
    }

    let min = Math.min(...values);
    let max = Math.max(...values);
    if (min === max) {
      const offset = Math.max(Math.abs(min) * 0.1, 1);
      min -= offset;
      max += offset;
    } else {
      const pad = Math.max((max - min) * 0.12, 1);
      min -= pad;
      max += pad;
    }
    return { min, max };
  }

  function getOverviewTrendChartModel(samples, series, options = {}) {
    const rawWindowHours = Number(options.windowHours);
    const windowHours = Number.isFinite(rawWindowHours) ? rawWindowHours : getOverviewTrendWindowHours();
    const windowMs = getOverviewTrendWindowMs(windowHours);
    const width = 640;
    const height = 220;
    const left = 22;
    const right = 18;
    const top = 18;
    const bottom = 34;
    const plotWidth = width - left - right;
    const plotHeight = height - top - bottom;
    const latest = samples[samples.length - 1];
    const mockData = Boolean(options.mockData);
    const endTime = mockData
      ? windowMs
      : (Number.isFinite(state.trendHistoryNowMs) ? state.trendHistoryNowMs : (latest ? latest.t : 0));
    const startTime = mockData ? 0 : (endTime - windowMs);
    const span = Math.max(endTime - startTime, 1);
    const uptimeMs = span;
    const range = getOverviewTrendRange(samples, series);

    const xOf = (timestamp) => left + (((timestamp - startTime) / span) * plotWidth);
    const yOf = (value) => {
      if (!Number.isFinite(value)) {
        return Number.NaN;
      }
      const ratio = (value - range.min) / Math.max(range.max - range.min, 1);
      return top + ((1 - Math.min(1, Math.max(0, ratio))) * plotHeight);
    };

    const gridXs = [0, 0.5, 1].map((fraction) => left + (plotWidth * fraction));
    const gridYs = [0.25, 0.5, 0.75].map((fraction) => top + (plotHeight * fraction));

    const points = samples.map((sample) => {
      const x = xOf(sample.t);
      const values = series.map((item) => {
        const numeric = getOverviewTrendSeriesValue(item, sample);
        if (!Number.isFinite(numeric)) {
          return null;
        }
        return {
          seriesId: item.id || item.sampleKey || item.label,
          tone: item.tone,
          label: item.label,
          decimals: item.decimals,
          unit: item.unit,
          value: numeric,
          x,
          y: yOf(numeric),
        };
      });
      return {
        sample,
        x,
        values,
      };
    });

    const tracks = series.flatMap((item) => {
      const segments = [];
      let current = [];
      samples.forEach((sample) => {
        const numeric = getOverviewTrendSeriesValue(item, sample);
        if (!Number.isFinite(numeric)) {
          if (current.length) {
            segments.push(current);
            current = [];
          }
          return;
        }

        current.push({
          x: xOf(sample.t),
          y: yOf(numeric),
        });
      });
      if (current.length) {
        segments.push(current);
      }

      return segments.map((segment) => {
        if (segment.length < 2) {
          return {
            tone: item.tone,
            points: segment,
            path: "",
          };
        }

        return {
          tone: item.tone,
          points: segment,
          path: segment.map((point, pointIndex) => `${pointIndex === 0 ? "M" : "L"} ${point.x.toFixed(1)} ${point.y.toFixed(1)}`).join(" "),
        };
      });
    });

    return {
      width,
      height,
      left,
      right,
      top,
      bottom,
      plotWidth,
      plotHeight,
      latest,
      uptimeMs,
      endTime,
      startTime,
      span,
      windowHours,
      range,
      gridXs,
      gridYs,
      points,
      tracks,
      series,
    };
  }

  function getOverviewTrendRenderSignature() {
    return getRenderSignature({
      windowHours: getOverviewTrendWindowHours(),
      trendSignature: state.trendHistorySignature || "",
      trendNowMs: Number.isFinite(state.trendHistoryNowMs) ? state.trendHistoryNowMs : 0,
    });
  }

  function getOverviewTrendCardById(cardId) {
    return getOverviewTrendCardsModel().find((card) => card.id === cardId) || null;
  }

  function getNearestOverviewTrendPointIndex(model, x) {
    if (!model || !Array.isArray(model.points) || model.points.length === 0) {
      return -1;
    }

    let nearestIndex = 0;
    let nearestDistance = Math.abs(model.points[0].x - x);
    model.points.forEach((point, index) => {
      const distance = Math.abs(point.x - x);
      if (distance < nearestDistance) {
        nearestIndex = index;
        nearestDistance = distance;
      }
    });
    return nearestIndex;
  }

  function renderOverviewTrendLatestPill(series, sample) {
    const value = getOverviewTrendSeriesValue(series, sample);
    return `
      <div class="oq-overview-trend-pill oq-overview-trend-pill--${escapeHtml(series.tone)}">
        <span>${escapeHtml(series.label)}</span>
        <strong>${escapeHtml(formatNumericState(value, series.decimals, series.unit))}</strong>
      </div>
    `;
  }

  function renderOverviewTrendChart(samples, series, mockData = false, windowHours = getOverviewTrendWindowHours()) {
    const model = getOverviewTrendChartModel(samples, series, { mockData, windowHours });
    const windowLabel = formatOverviewTrendWindowLabel(windowHours);
    const windowText = formatOverviewTrendWindowText(windowHours);
    const midpointLabel = formatOverviewTrendAxisLabel((windowHours * 60) / 2);
    const seriesPaths = model.tracks.flatMap((track) => {
      if (track.points.length < 2) {
        const point = track.points[0];
        if (!point) {
          return [];
        }
        return `
          <circle
            cx="${point.x.toFixed(1)}"
            cy="${point.y.toFixed(1)}"
            r="3.8"
            class="oq-overview-trend-dot oq-overview-trend-dot--${escapeHtml(track.tone)}"
          ></circle>
        `;
      }

      return `
        <path d="${track.path}" class="oq-overview-trend-line oq-overview-trend-line--${escapeHtml(track.tone)}"></path>
        <circle
          cx="${track.points[track.points.length - 1].x.toFixed(1)}"
          cy="${track.points[track.points.length - 1].y.toFixed(1)}"
          r="3.8"
          class="oq-overview-trend-dot oq-overview-trend-dot--${escapeHtml(track.tone)}"
        ></circle>
      `;
    }).join("");

    return `
      <svg class="oq-overview-trend-chart" viewBox="0 0 ${model.width} ${model.height}" role="img" aria-label="Trendgrafiek van de laatste ${windowText}">
        <rect x="0" y="0" width="${model.width}" height="${model.height}" rx="20" class="oq-overview-trend-chart-bg"></rect>
        ${model.gridXs.map((x) => `<line x1="${x.toFixed(1)}" y1="${model.top}" x2="${x.toFixed(1)}" y2="${model.height - model.bottom}" class="oq-overview-trend-grid oq-overview-trend-grid--vertical"></line>`).join("")}
        ${model.gridYs.map((y) => `<line x1="${model.left}" y1="${y.toFixed(1)}" x2="${model.width - model.right}" y2="${y.toFixed(1)}" class="oq-overview-trend-grid oq-overview-trend-grid--horizontal"></line>`).join("")}
        ${seriesPaths}
        <g class="oq-overview-trend-hover-layer" data-oq-trend-hover-layer hidden>
          <line x1="${model.left}" y1="${model.top}" x2="${model.left}" y2="${model.height - model.bottom}" class="oq-overview-trend-hover-line"></line>
          ${series.map((item) => `
            <circle
              r="4.5"
              class="oq-overview-trend-hover-dot oq-overview-trend-hover-dot--${escapeHtml(item.tone)}"
              data-oq-trend-hover-dot="${escapeHtml(item.id || item.sampleKey || item.label)}"
            ></circle>
          `).join("")}
        </g>
        <line x1="${model.left}" y1="${model.height - model.bottom}" x2="${model.width - model.right}" y2="${model.height - model.bottom}" class="oq-overview-trend-axis"></line>
        <text x="${model.left}" y="${model.height - 12}" class="oq-overview-trend-axis-label" text-anchor="start">${escapeHtml(windowLabel)}</text>
        <text x="${model.left + (model.plotWidth / 2)}" y="${model.height - 12}" class="oq-overview-trend-axis-label" text-anchor="middle">${escapeHtml(midpointLabel)}</text>
        <text x="${model.width - model.right}" y="${model.height - 12}" class="oq-overview-trend-axis-label" text-anchor="end">nu</text>
      </svg>
    `;
  }

  function renderOverviewTrendCard(card) {
    const latest = card.samples[card.samples.length - 1] || null;
    const windowText = formatOverviewTrendWindowText(card.windowHours);
    return `
      <article class="oq-overview-trendcard oq-overview-trendcard--${escapeHtml(card.tone)}" data-oq-trend-card="${escapeHtml(card.id)}" data-render-signature="${escapeHtml(getOverviewTrendCardSignature(card))}">
        <div class="oq-overview-trendcard-head">
          <div class="oq-overview-trendcard-copy">
            <p class="oq-overview-trendcard-kicker">${escapeHtml(windowText)}</p>
            <h4>${escapeHtml(card.title)}</h4>
            <p>${escapeHtml(card.copy)}</p>
          </div>
          <div class="oq-overview-trendcard-meta">
            <div class="oq-overview-trendcard-latest">
              ${card.series.map((series) => renderOverviewTrendLatestPill(series, latest)).join("")}
            </div>
          </div>
        </div>
        ${renderOverviewTrendChart(card.samples, card.series, card.mock, card.windowHours)}
        <div class="oq-overview-trend-hover" data-oq-trend-hover hidden>
          <div class="oq-overview-trend-hover-head">
            <span class="oq-overview-trend-hover-kicker">Meting</span>
            <strong data-oq-trend-hover-time>—</strong>
            <span class="oq-overview-trend-hover-note" data-oq-trend-hover-note></span>
          </div>
          <div class="oq-overview-trend-hover-values" data-oq-trend-hover-values></div>
        </div>
      </article>
    `;
  }

  function renderOverviewTrendsPanel() {
    const cards = getOverviewTrendCardsModel();
    return `
      <section class="oq-overview-trends" aria-label="Trends" data-render-signature="${escapeHtml(getOverviewTrendRenderSignature())}">
        <div class="oq-overview-trends-grid">
          ${cards.map(renderOverviewTrendCard).join("")}
        </div>
      </section>
    `;
  }

  function renderOverviewTrendsDisabledNotice() {
    return `
      <div class="oq-overview-trends-disabled">
        <p>Trendhistorie</p>
        <strong>Er is nog geen trendhistorie beschikbaar.</strong>
        <span>Schakel trendopslag in onder Instellingen &rsaquo; Systeem of wacht tot de controller gegevens heeft opgebouwd.</span>
        <button class="oq-helper-button oq-helper-button--ghost" type="button" data-oq-action="select-view" data-view-id="settings">
          Naar instellingen
        </button>
      </div>
    `;
  }

  function renderTrendWindowSwitcher() {
    const windowHours = getOverviewTrendWindowHours();
    return `
      <div class="oq-overview-trends-windowbar" role="group" aria-label="Kies trendvenster">
        ${TREND_WINDOW_HOURS_OPTIONS.map((hours) => `
          <button
            class="oq-overview-controlpanel-segment${windowHours === hours ? " is-selected" : ""}"
            type="button"
            data-oq-action="select-trend-window"
            data-trend-hours="${hours}"
            aria-pressed="${windowHours === hours ? "true" : "false"}"
          >${escapeHtml(formatOverviewTrendWindowLabel(hours))}</button>
        `).join("")}
      </div>
    `;
  }

  function renderTrendsInfoToggle() {
    const infoId = "overview-trends-history";
    const open = state.settingsInfoOpen === infoId;
    const copy = "Standaard bewaren we trenddata 7 dagen in het werkgeheugen. Met flashopslag blijft historie ook na herstart of OTA beschikbaar, tot 30 dagen terug.";
    return `
      <div class="oq-settings-info oq-overview-trends-info${open ? " is-open" : ""}" data-oq-settings-info="${escapeHtml(infoId)}">
        <button
          class="oq-settings-info-button"
          type="button"
          data-oq-action="toggle-settings-info"
          data-info-id="${escapeHtml(infoId)}"
          aria-label="${escapeHtml("Uitleg bij Trendoverzicht")}"
          aria-expanded="${open ? "true" : "false"}"
        >i</button>
        <div class="oq-settings-info-popover" ${open ? "" : "hidden"}>
          <p>${escapeHtml(copy)}</p>
        </div>
      </div>
    `;
  }

  function renderTrendsView() {
    const trendHistoryEnabled = isTrendHistoryEnabled();
    const trendSamples = getOverviewTrendSamples();
    const hasTrendSamples = trendSamples.length > 0;
    return `
      <section class="oq-helper-panel oq-helper-panel--flush">
        <div class="oq-overview-board oq-overview-board--${escapeHtml(state.overviewTheme)}">
          <div class="oq-overview-trends-info-wrap">
            ${renderTrendsInfoToggle()}
          </div>
          <div class="oq-overview-head oq-overview-trends-head">
            <div>
              <p class="oq-helper-label">Trends</p>
              <h2 class="oq-helper-section-title">Trendoverzicht</h2>
              <p class="oq-helper-section-copy">Bekijk temperatuur, vermogen, rendement, comfort en flow tot 30 dagen terug.</p>
            </div>
            <div class="oq-overview-trends-meta">
              ${trendHistoryEnabled ? `
                <div class="oq-overview-trends-window">
                  <span>Venster</span>
                  ${renderTrendWindowSwitcher()}
                </div>
              ` : ""}
            </div>
          </div>
          ${trendHistoryEnabled && hasTrendSamples ? renderOverviewTrendsPanel() : renderOverviewTrendsDisabledNotice()}
        </div>
      </section>
    `;
  }

  function patchTrendsDom() {
    if (!state.root || state.appView !== "trends") {
      return false;
    }

    const board = state.root.querySelector(".oq-overview-board");
    if (!board) {
      return false;
    }

    const trends = board.querySelector(".oq-overview-trends");
    if (!trends) {
      return false;
    }

    replaceOuterHtmlIfSignatureChanged(
      trends,
      getOverviewTrendRenderSignature(),
      renderOverviewTrendsPanel(),
    );
    syncOverviewTrendInteractions(board);
    return true;
  }

  function updateOverviewTrendHoverCard(card, model, pointIndex) {
    if (!card || !model || !Array.isArray(model.points) || model.points.length === 0) {
      return;
    }

    const index = Math.max(0, Math.min(model.points.length - 1, pointIndex));
    const point = model.points[index];
    if (!point) {
      return;
    }

    const chart = card.querySelector(".oq-overview-trend-chart");
    const hoverLayer = card.querySelector("[data-oq-trend-hover-layer]");
    const hoverPanel = card.querySelector("[data-oq-trend-hover]");
    const hoverTime = card.querySelector("[data-oq-trend-hover-time]");
    const hoverNote = card.querySelector("[data-oq-trend-hover-note]");
    const hoverValues = card.querySelector("[data-oq-trend-hover-values]");

    if (!chart || !hoverLayer || !hoverPanel || !hoverTime || !hoverNote || !hoverValues) {
      return;
    }

    const timeLabel = formatOverviewTrendPointTime(point.sample.t, model.endTime);
    hoverPanel.hidden = false;
    hoverLayer.removeAttribute("hidden");
    hoverTime.textContent = timeLabel.value;
    hoverNote.textContent = timeLabel.note;

    const hoverLine = hoverLayer.querySelector(".oq-overview-trend-hover-line");
    if (hoverLine) {
      hoverLine.setAttribute("x1", point.x.toFixed(1));
      hoverLine.setAttribute("x2", point.x.toFixed(1));
    }

    const rows = [];
    model.series.forEach((series) => {
      const value = getOverviewTrendSeriesValue(series, point.sample);
      const seriesId = series.id || series.sampleKey || series.label;
      const dot = hoverLayer.querySelector(`[data-oq-trend-hover-dot="${seriesId}"]`);
      if (!Number.isFinite(value)) {
        if (dot) {
          dot.setAttribute("display", "none");
        }
        return;
      }
      const trackValue = point.values.find((item) => item.seriesId === seriesId);
      if (dot && trackValue) {
        dot.removeAttribute("display");
        dot.setAttribute("cx", trackValue.x.toFixed(1));
        dot.setAttribute("cy", trackValue.y.toFixed(1));
      }
      rows.push(`
        <div class="oq-overview-trend-hover-row oq-overview-trend-hover-row--${escapeHtml(series.tone)}">
          <span>${escapeHtml(series.label)}</span>
          <strong>${escapeHtml(formatNumericState(value, series.decimals, series.unit))}</strong>
        </div>
      `);
    });

    hoverValues.innerHTML = rows.join("");
    card.dataset.oqTrendHoverIndex = String(index);
  }

  function clearOverviewTrendHoverCard(card) {
    if (!card) {
      return;
    }
    const hoverPanel = card.querySelector("[data-oq-trend-hover]");
    const hoverLayer = card.querySelector("[data-oq-trend-hover-layer]");
    if (hoverPanel) {
      hoverPanel.hidden = true;
    }
    if (hoverLayer) {
      hoverLayer.setAttribute("hidden", "");
    }
    delete card.dataset.oqTrendHoverIndex;
  }

  function syncOverviewTrendInteractions(root = state.root) {
    if (!root) {
      return;
    }

    const cards = root.querySelectorAll("[data-oq-trend-card]");
    cards.forEach((card) => {
      const signature = card.dataset.renderSignature || "";
      if (card.__oqTrendBoundSignature === signature) {
        return;
      }
      card.__oqTrendBoundSignature = signature;

      const chart = card.querySelector(".oq-overview-trend-chart");
      if (!chart) {
        return;
      }

      const cardModel = getOverviewTrendCardById(card.dataset.oqTrendCard);
      if (!cardModel) {
        return;
      }
      const model = getOverviewTrendChartModel(cardModel.samples, cardModel.series, { mockData: cardModel.mock });

      card.__oqTrendModel = model;

      const handleMove = (event) => {
        const rect = chart.getBoundingClientRect();
        if (!rect.width || !rect.height) {
          return;
        }
        const clientX = Number(event.clientX);
        if (!Number.isFinite(clientX)) {
          updateOverviewTrendHoverCard(card, model, model.points.length - 1);
          return;
        }
        const localX = Math.min(rect.width, Math.max(0, clientX - rect.left));
        const svgX = (localX / rect.width) * model.width;
        const pointIndex = getNearestOverviewTrendPointIndex(model, svgX);
        updateOverviewTrendHoverCard(card, model, pointIndex);
      };

      const handleLeave = () => clearOverviewTrendHoverCard(card);

      chart.addEventListener("pointermove", handleMove);
      chart.addEventListener("pointerenter", handleMove);
      chart.addEventListener("pointerleave", handleLeave);
      chart.addEventListener("focus", handleMove);
      chart.addEventListener("blur", handleLeave);
      chart.addEventListener("touchstart", handleMove, { passive: true });
    });
  }
