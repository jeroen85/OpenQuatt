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

  function formatComponentPositionLabel(key) {
    const entity = state.entities[key];
    if (!entity) {
      return "Positie: â€”";
    }
    const numeric = getEntityNumericValue(key);
    if (!Number.isNaN(numeric)) {
      return `Positie: ${formatNumericState(numeric, 0, entity.uom || "")}`;
    }
    return `Positie: ${getEntityStateText(key)}`;
  }

  function formatFourWayPositionLabel(key) {
    if (!hasEntity(key)) {
      return "Positie: â€”";
    }
    return `Positie: ${isEntityActive(key) ? "Koelen/Defrost" : "Verwarmen"}`;
  }

  function formatWorkingMode(value) {
    const raw = String(value || "").trim();
    if (!raw || raw === "Unknown") {
      return "Onbekend";
    }
    if (raw === "Standby") {
      return "Stand-by";
    }
    if (raw === "Heating") {
      return "Verwarmen";
    }
    if (raw === "Cooling") {
      return "Koelen";
    }
    return raw;
  }

  function formatFailures(value) {
    const raw = String(value || "").trim();
    if (!raw || raw === "None") {
      return "Geen actieve storingen";
    }
    return raw;
  }

  function renderTechPipeLayer(id, tone, d, animated = true, flowVariant = "default") {
    return `
      <g class="oq-hp-tech-pipe oq-hp-tech-pipe--${escapeHtml(tone)}" data-oq-pipe="${escapeHtml(id)}">
        <path class="oq-hp-tech-pipe-base" d="${escapeHtml(d)}" />
        <path class="oq-hp-tech-pipe-core" d="${escapeHtml(d)}" />
        ${animated ? `<path class="oq-hp-tech-pipe-flow" data-oq-flow-variant="${escapeHtml(flowVariant)}" d="${escapeHtml(d)}" />` : ""}
      </g>
    `;
  }

  function renderTechTooltipIcon(icon, centerX, centerY) {
    if (icon === "temperature") {
      return `
        <svg
          class="oq-hp-tech-tooltip-icon-svg oq-hp-tech-tooltip-icon-svg--temperature"
          x="${centerX - 10}"
          y="${centerY - 10}"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path class="oq-hp-tech-tooltip-icon-mdi" d="M15 13V5A3 3 0 0 0 9 5V13A5 5 0 1 0 15 13M12 4A1 1 0 0 1 13 5V12H11V5A1 1 0 0 1 12 4Z" />
        </svg>
      `;
    }
    if (icon === "pressure") {
      return `
        <svg
          class="oq-hp-tech-tooltip-icon-svg oq-hp-tech-tooltip-icon-svg--component"
          x="${centerX - 10}"
          y="${centerY - 10}"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            class="oq-hp-tech-tooltip-icon-mdi"
            d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12C20,14.4 19,16.5 17.3,18C15.9,16.7 14,16 12,16C10,16 8.2,16.7 6.7,18C5,16.5 4,14.4 4,12A8,8 0 0,1 12,4M14,5.89C13.62,5.9 13.26,6.15 13.1,6.54L11.81,9.77L11.71,10C11,10.13 10.41,10.6 10.14,11.26C9.73,12.29 10.23,13.45 11.26,13.86C12.29,14.27 13.45,13.77 13.86,12.74C14.12,12.08 14,11.32 13.57,10.76L13.67,10.5L14.96,7.29L14.97,7.26C15.17,6.75 14.92,6.17 14.41,5.96C14.28,5.91 14.15,5.89 14,5.89M10,6A1,1 0 0,0 9,7A1,1 0 0,0 10,8A1,1 0 0,0 11,7A1,1 0 0,0 10,6M7,9A1,1 0 0,0 6,10A1,1 0 0,0 7,11A1,1 0 0,0 8,10A1,1 0 0,0 7,9M17,9A1,1 0 0,0 16,10A1,1 0 0,0 17,11A1,1 0 0,0 18,10A1,1 0 0,0 17,9Z"
          />
        </svg>
      `;
    }
    if (icon === "defrost") {
      return `
        <svg
          class="oq-hp-tech-tooltip-icon-svg oq-hp-tech-tooltip-icon-svg--component"
          x="${centerX - 10}"
          y="${centerY - 10}"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            class="oq-hp-tech-tooltip-icon-mdi"
            d="M8 17.85C8 19.04 7.11 20 6 20S4 19.04 4 17.85C4 16.42 6 14 6 14S8 16.42 8 17.85M16.46 12V10.56L18.46 9.43L20.79 10.05L21.31 8.12L19.54 7.65L20 5.88L18.07 5.36L17.45 7.69L15.45 8.82L13 7.38V5.12L14.71 3.41L13.29 2L12 3.29L10.71 2L9.29 3.41L11 5.12V7.38L8.5 8.82L6.5 7.69L5.92 5.36L4 5.88L4.47 7.65L2.7 8.12L3.22 10.05L5.55 9.43L7.55 10.56V12H2V13H22V12H16.46M9.5 12V10.56L12 9.11L14.5 10.56V12H9.5M20 17.85C20 19.04 19.11 20 18 20S16 19.04 16 17.85C16 16.42 18 14 18 14S20 16.42 20 17.85M14 20.85C14 22.04 13.11 23 12 23S10 22.04 10 20.85C10 19.42 12 17 12 17S14 19.42 14 20.85Z"
          />
        </svg>
      `;
    }
    if (icon === "flow") {
      return `
        <svg
          class="oq-hp-tech-tooltip-icon-svg oq-hp-tech-tooltip-icon-svg--component"
          x="${centerX - 10}"
          y="${centerY - 10}"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <path class="oq-hp-tech-tooltip-icon-stroke" d="M3.5 8.2 C5.1 6.8 6.8 6.8 8.4 8.2 C10 9.6 11.7 9.6 13.3 8.2 C14.4 7.2 15.6 7 16.5 7.1" />
          <path class="oq-hp-tech-tooltip-icon-stroke" d="M3.5 12.1 C5.1 10.7 6.8 10.7 8.4 12.1 C10 13.5 11.7 13.5 13.3 12.1 C14.4 11.1 15.6 10.9 16.5 11" />
        </svg>
      `;
    }
    if (icon === "fan") {
      return `
        <svg
          class="oq-hp-tech-tooltip-icon-svg oq-hp-tech-tooltip-icon-svg--component"
          x="${centerX - 10}"
          y="${centerY - 10}"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <circle class="oq-hp-tech-tooltip-icon-fill" cx="10" cy="10" r="1.7" />
          <path class="oq-hp-tech-tooltip-icon-fill" d="M10 3.1 C12.1 5 12.4 6.7 10.9 9.1 C9 8.9 8.1 7.7 8.2 6.1 C8.3 4.7 8.9 3.7 10 3.1 Z" />
          <path class="oq-hp-tech-tooltip-icon-fill" d="M16.9 10 C15 12.1 13.3 12.4 10.9 10.9 C11.1 9 12.3 8.1 13.9 8.2 C15.3 8.3 16.3 8.9 16.9 10 Z" />
          <path class="oq-hp-tech-tooltip-icon-fill" d="M10 16.9 C7.9 15 7.6 13.3 9.1 10.9 C11 11.1 11.9 12.3 11.8 13.9 C11.7 15.3 11.1 16.3 10 16.9 Z" />
          <path class="oq-hp-tech-tooltip-icon-fill" d="M3.1 10 C5 7.9 6.7 7.6 9.1 9.1 C8.9 11 7.7 11.9 6.1 11.8 C4.7 11.7 3.7 11.1 3.1 10 Z" />
        </svg>
      `;
    }
    if (icon === "eev") {
      return `
        <svg
          class="oq-hp-tech-tooltip-icon-svg oq-hp-tech-tooltip-icon-svg--component"
          x="${centerX - 10}"
          y="${centerY - 10}"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <polygon class="oq-hp-tech-tooltip-icon-fill" points="4.5,5.1 10,10 4.5,14.9" />
          <polygon class="oq-hp-tech-tooltip-icon-fill" points="15.5,5.1 10,10 15.5,14.9" />
        </svg>
      `;
    }
    if (icon === "fourway") {
      return `
        <svg
          class="oq-hp-tech-tooltip-icon-svg oq-hp-tech-tooltip-icon-svg--component"
          x="${centerX - 10}"
          y="${centerY - 10}"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <rect class="oq-hp-tech-tooltip-icon-stroke" x="7" y="7" width="6" height="6" rx="1.8" />
          <path class="oq-hp-tech-tooltip-icon-stroke" d="M10 3.5 V7 M10 13 V16.5 M3.5 10 H7 M13 10 H16.5" />
          <circle class="oq-hp-tech-tooltip-icon-fill" cx="10" cy="10" r="1.5" />
        </svg>
      `;
    }
    return `
      <g class="oq-hp-tech-tooltip-icon-wrap" transform="translate(${centerX - 10} ${centerY - 10})">
        <path class="oq-hp-tech-tooltip-icon-wave" d="M2 15 L7 9 L12 15 L17 9" />
      </g>
    `;
  }

  function renderTechTooltip({ bind, modifier, x, y, width, kicker, detail, detailBind = "", icon = "heater", direction = "down" }) {
    const height = 44;
    const badgeCx = x + 26;
    const badgeCy = y + 22;
    const detailBindAttr = detailBind ? ` data-oq-bind="${escapeHtml(detailBind)}"` : "";
    let pointerPath = "";
    if (direction === "up") {
      const pointerMid = x + Math.round(width * 0.52);
      pointerPath = `M${pointerMid - 6} ${y} L${pointerMid} ${y - 8} L${pointerMid + 6} ${y} Z`;
    } else if (direction === "left") {
      const pointerMid = y + Math.round(height * 0.5);
      pointerPath = `M${x} ${pointerMid - 6} L${x - 8} ${pointerMid} L${x} ${pointerMid + 6} Z`;
    } else if (direction === "right") {
      const pointerMid = y + Math.round(height * 0.5);
      pointerPath = `M${x + width} ${pointerMid - 6} L${x + width + 8} ${pointerMid} L${x + width} ${pointerMid + 6} Z`;
    } else {
      const pointerMid = x + Math.round(width * 0.52);
      pointerPath = `M${pointerMid - 6} ${y + height} L${pointerMid} ${y + height + 8} L${pointerMid + 6} ${y + height} Z`;
    }
    return `
      <g
        class="oq-hp-tech-tooltip oq-hp-tech-tooltip--${escapeHtml(modifier)}"
        data-oq-bind="${escapeHtml(bind)}-tooltip"
        aria-hidden="true"
      >
        <rect class="oq-hp-tech-tooltip-panel" x="${x}" y="${y}" width="${width}" height="${height}" rx="12" />
        <circle class="oq-hp-tech-tooltip-accent" cx="${badgeCx}" cy="${badgeCy}" r="11.5" />
        ${renderTechTooltipIcon(icon, badgeCx, badgeCy)}
        <text class="oq-hp-tech-tooltip-kicker" x="${x + 48}" y="${y + 16}">${escapeHtml(kicker)}</text>
        <text class="oq-hp-tech-tooltip-detail" x="${x + 48}" y="${y + 32}"${detailBindAttr}>${escapeHtml(detail)}</text>
        <path class="oq-hp-tech-tooltip-pointer" d="${pointerPath}" />
      </g>
    `;
  }

  function renderTechWaterReading({ bind, x, y, width, value, label, ariaLabel = "", align = "start" }) {
    const resolvedAriaLabel = ariaLabel || `${label} temperatuur ${value}`;
    const isEndAligned = align === "end";
    const isCenterAligned = align === "center";
    const textAnchor = isCenterAligned ? "middle" : isEndAligned ? "end" : "start";
    const textX = isCenterAligned ? x + (width / 2) : isEndAligned ? x + width - 2 : x + 2;
    return `
      <g
        class="oq-hp-tech-water-reading"
        data-oq-bind="${escapeHtml(bind)}-reading"
        data-oq-tooltip-target="${escapeHtml(bind)}"
        tabindex="0"
        aria-label="${escapeHtml(resolvedAriaLabel)}"
      >
        <rect class="oq-hp-tech-water-reading-hit" x="${x}" y="${y}" width="${width}" height="18" rx="9" fill="rgba(255,255,255,0.001)" stroke="none" />
        <text class="oq-hp-tech-water-reading-value" x="${textX}" y="${y + 13}" text-anchor="${textAnchor}" data-oq-bind="${escapeHtml(bind)}-value">${escapeHtml(value)}</text>
      </g>
    `;
  }

  function renderTechReadingWithTooltip({ tooltip, ...reading }) {
    return `${renderTechWaterReading(reading)}${renderTechTooltip({ bind: reading.bind, ...tooltip })}`;
  }

  function renderTechHotspotWithTooltip({ bind, ariaLabel, x, y, width, height, rx, tooltip }) {
    return `
      <g class="oq-hp-tech-hotspot" data-oq-bind="${escapeHtml(bind)}-trigger" data-oq-tooltip-target="${escapeHtml(bind)}" tabindex="0" aria-label="${escapeHtml(ariaLabel)}">
        <rect class="oq-hp-tech-hotspot-hit" x="${x}" y="${y}" width="${width}" height="${height}" rx="${rx}" />
      </g>
      ${renderTechTooltip({ bind, ...tooltip })}
    `;
  }

  function renderTechTooltipTriggerGroup({ bind, className, active, ariaLabel, attrs = "", activeClass = "is-active", content, tooltip }) {
    const resolvedClassName = [className, active && activeClass ? activeClass : ""].filter(Boolean).join(" ");
    return `
      <g class="${resolvedClassName}" data-oq-bind="${escapeHtml(bind)}" data-oq-tooltip-target="${escapeHtml(bind)}" tabindex="${active ? "0" : "-1"}" aria-label="${escapeHtml(ariaLabel)}" ${attrs}>
        ${content}
      </g>
      ${renderTechTooltip({ bind, ...tooltip })}
    `;
  }

  function renderHeatPumpFooterItem({ label, value, bind, ariaLabel = "", valueBind = "", labelBind = "", labelMarkup = "" }) {
    return `
      <div class="oq-hp-tech-footer-item">
        <span${ariaLabel ? ` aria-label="${escapeHtml(ariaLabel)}"` : ""}${labelBind ? ` data-oq-bind="${escapeHtml(labelBind)}"` : ""}>${labelMarkup || escapeHtml(label)}</span>
        <strong${valueBind ? ` data-oq-bind="${escapeHtml(valueBind)}"` : ""}>${escapeHtml(value)}</strong>
      </div>
    `;
  }

  function buildHeatPumpSchematicModel(title, keys, accent, mode, defrostActive, failures, running) {
    const freqValue = getEntityNumericValue(keys.freq);
    const freqText = Number.isNaN(freqValue) ? "—" : String(Math.round(freqValue));
    const powerValue = getEntityNumericValue(keys.power);
    const heatValue = getEntityNumericValue(keys.heat);
    const coolingValue = getEntityNumericValue(keys.cooling);
    const thermalValue = mode === "Koelen" ? coolingValue : heatValue;
    const animated = running || (!Number.isNaN(freqValue) && freqValue > 0) || (!Number.isNaN(powerValue) && powerValue > 80) || (!Number.isNaN(heatValue) && heatValue > 150);
    const statusText = getHeatPumpPanelStatusLabel(mode, animated);
    const failureText = failures === "Geen actieve storingen" ? "Geen storingen" : failures;
    const warningActive = failureText !== "Geen storingen";
    const defrostText = defrostActive ? "Actief" : "Uit";
    const waterOutText = getEntityStateText(keys.waterOut);
    const waterInText = getEntityStateText(keys.waterIn);
    const flowText = getEntityStateText(keys.flow);
    const evaporatorCoilTempText = getEntityStateText(keys.evaporatorCoilTemp);
    const innerCoilTempText = getEntityStateText(keys.innerCoilTemp);
    const outsideTempText = getEntityStateText(keys.outsideTemp);
    const dischargePressureText = getEntityStateText(keys.condenserPressure);
    const dischargeTempText = getEntityStateText(keys.dischargeTemp);
    const suctionPressureText = getEntityStateText(keys.evaporatorPressure);
    const suctionTempText = getEntityStateText(keys.returnTemp);
    const bottomPlateActive = isEntityActive(keys.bottomPlate);
    const crankcaseActive = isEntityActive(keys.crankcase);
    const eevPositionText = formatComponentPositionLabel(keys.eev);
    const fourWayPositionText = formatFourWayPositionLabel(keys.fourWay);
    const powerText = formatNumericState(powerValue, 0, "W");
    const heatText = formatNumericState(thermalValue, 0, "W");
    const efficiencyValue = mode === "Koelen"
      ? ((!Number.isNaN(powerValue) && powerValue >= 5.0 && !Number.isNaN(coolingValue)) ? (coolingValue / powerValue) : Number.NaN)
      : getEntityNumericValue(keys.cop);
    const efficiencyText = formatNumericState(efficiencyValue, 1);
    const efficiencyLabel = mode === "Koelen" ? "COP (EER)" : "COP";
    const heatLabel = mode === "Koelen" ? "Koelafgifte" : "Warmteafgifte";
    const heatDescription = mode === "Koelen" ? "afgegeven koeling" : "afgegeven warmte";
    const fanRpmValue = getEntityNumericValue(keys.fanSpeed);
    const fanRunning = !Number.isNaN(fanRpmValue) && fanRpmValue > 0;
    const fanRpmText = Number.isNaN(fanRpmValue)
      ? "—"
      : `${Math.round(fanRpmValue)} rpm`;
    const reverseCycle = defrostActive || mode === "Koelen";
    const leftExchangerTitle = reverseCycle ? "Verdamper" : "Condensor";
    const rightExchangerTitle = reverseCycle ? "Condensor" : "Verdamper";
    const supplyLineTone = reverseCycle ? "return" : "supply";
    const returnLineTone = reverseCycle ? "supply" : "return";
    const lineJumpLeft = 360;
    const lineJumpRight = 384;
    const lineJumpPeakY = 214;
    const hotgasValveHeat = "M278 220 C278 228 273 234 266 234";
    const hotgasValveCool = "M278 220 C278 228 283 234 290 234";
    const suctionValveHeat = "M290 234 C284 234 279 240 278 248";
    const suctionValveCool = "M266 234 C272 234 277 240 278 248";
    const hotgasExternal = reverseCycle
      ? `M290 234 H${lineJumpLeft} Q372 ${lineJumpPeakY} ${lineJumpRight} 234 H436 V134 H480`
      : "M266 234 H180 V134 H164";
    const suctionExternal = reverseCycle
      ? "M164 134 H180 V234 H266"
      : `M480 134 H436 V234 H${lineJumpRight} Q372 ${lineJumpPeakY} ${lineJumpLeft} 234 H290`;
    const compressorDischarge = "M296 150 H278 V220";
    const compressorSuction = "M278 248 V268 H372 V150 H356";
    const liquidPath = reverseCycle ? "M480 294 H337" : "M164 294 H315";
    const expansionPath = reverseCycle ? "M315 294 H164" : "M337 294 H480";
    const boardClass = [
      "oq-hp-schematic-board",
      `oq-hp-schematic-board--${accent}`,
      animated ? "is-running" : "",
      fanRunning ? "is-fan-running" : "",
      reverseCycle ? "is-reversed" : "",
      defrostActive ? "is-defrost" : "",
    ].filter(Boolean).join(" ");

    return {
      title,
      boardClass,
      statusText,
      failureText,
      warningActive,
      defrostActive,
      defrostText,
      mode,
      reverseCycle,
      compressorFreqText: `${freqText} Hz`,
      leftExchangerTitle,
      rightExchangerTitle,
      supplyLineTone,
      returnLineTone,
      waterOutText,
      waterInText,
      flowText,
      evaporatorCoilTempText,
      innerCoilTempText,
      outsideTempText,
      dischargePressureText,
      dischargeTempText,
      suctionPressureText,
      suctionTempText,
      bottomPlateActive,
      crankcaseActive,
      eevPositionText,
      fourWayPositionText,
      powerText,
      heatText,
      heatLabel,
      heatDescription,
      efficiencyText,
      efficiencyLabel,
      fanRpmText,
      hotgasValveHeat,
      hotgasValveCool,
      suctionValveHeat,
      suctionValveCool,
      leftValveTone: reverseCycle ? "suction" : "hotgas",
      rightValveTone: reverseCycle ? "hotgas" : "suction",
      pipes: {
        supply: { tone: supplyLineTone, d: "M104 134 H18", animated: true, flowVariant: "water" },
        return: { tone: returnLineTone, d: "M18 294 H104", animated: true, flowVariant: "water" },
        compressorDischarge: { tone: "hotgas", d: compressorDischarge, animated: true, flowVariant: "default" },
        hotgasExternal: { tone: "hotgas", d: hotgasExternal, animated: true, flowVariant: "default" },
        liquid: { tone: "liquid", d: liquidPath, animated: true, flowVariant: "default" },
        expansion: { tone: "expansion", d: expansionPath, animated: true, flowVariant: "default" },
        suctionExternal: { tone: "suction", d: suctionExternal, animated: true, flowVariant: "default" },
        suctionCompressor: { tone: "suction", d: compressorSuction, animated: true, flowVariant: "default" },
      },
    };
  }

  function renderHeatPumpSchematic(model) {
    const svgIdBase = String(model.title || "hp").toLowerCase().replace(/[^a-z0-9]+/g, "-");
    const condWaterHeatGradientId = `${svgIdBase}-cond-water-heat`;
    const condWaterCoolGradientId = `${svgIdBase}-cond-water-cool`;
    const condRefGradientId = `${svgIdBase}-cond-ref`;
    const activeCondWaterGradientId = model.reverseCycle ? condWaterCoolGradientId : condWaterHeatGradientId;
    const footerItems = [
      { label: "Werkmodus", value: model.mode, valueBind: "footer-mode" },
      { label: "Stroomverbruik", ariaLabel: "Stroomverbruik", labelMarkup: "Stroom<br>verbruik", value: model.powerText, valueBind: "footer-power" },
      { label: model.heatLabel, ariaLabel: model.heatLabel, labelBind: "footer-heat-label", labelMarkup: model.heatLabel === "Koelafgifte" ? "Koel<br>afgifte" : "Warmte<br>afgifte", value: model.heatText, valueBind: "footer-heat" },
      { label: model.efficiencyLabel, labelBind: "footer-efficiency-label", value: model.efficiencyText, valueBind: "footer-efficiency" },
    ];
    const readings = [
      { bind: "flow", x: 52, y: 308, width: 72, value: model.flowText, label: "Flow", ariaLabel: `Flow ${model.flowText}`, align: "center", tooltip: { modifier: model.returnLineTone, icon: "flow", x: 110, y: 276, width: 126, kicker: "Flow", detail: "CV-circuit", direction: "left" } },
      { bind: "discharge-pressure", x: 218, y: 138, width: 50, value: model.dischargePressureText, label: "Persdruk", ariaLabel: `Persdruk ${model.dischargePressureText}`, align: "end", tooltip: { modifier: "warm", icon: "pressure", x: 82, y: 120, width: 118, kicker: "Druk", detail: "Perszijde", direction: "right" } },
      { bind: "discharge-temp", x: 218, y: 166, width: 50, value: model.dischargeTempText, label: "Perstemperatuur", ariaLabel: `Perstemperatuur ${model.dischargeTempText}`, align: "end", tooltip: { modifier: "warm", icon: "temperature", x: 80, y: 174, width: 142, kicker: "Temperatuur", detail: "Perszijde", direction: "right" } },
      { bind: "suction-pressure", x: 378, y: 138, width: 50, value: model.suctionPressureText, label: "Zuigdruk", ariaLabel: `Zuigdruk ${model.suctionPressureText}`, tooltip: { modifier: "component", icon: "pressure", x: 438, y: 120, width: 118, kicker: "Druk", detail: "Zuigzijde", direction: "left" } },
      { bind: "suction-temp", x: 378, y: 166, width: 50, value: model.suctionTempText, label: "Zuigtemperatuur", ariaLabel: `Zuigtemperatuur ${model.suctionTempText}`, tooltip: { modifier: "component", icon: "temperature", x: 414, y: 174, width: 142, kicker: "Temperatuur", detail: "Zuigzijde", direction: "left" } },
      { bind: "inner-coil-temp", x: 120, y: 166, width: 52, value: model.innerCoilTempText, label: "Inner coil temperatuur", ariaLabel: `Inner coil temperatuur ${model.innerCoilTempText}`, align: "center", tooltip: { modifier: "component", icon: "temperature", x: 174, y: 148, width: 132, kicker: "Temperatuur", detail: "Condensor", direction: "right" } },
      { bind: "evaporator-temp", x: 484, y: 166, width: 52, value: model.evaporatorCoilTempText, label: "Verdampertemperatuur", ariaLabel: `Verdampertemperatuur ${model.evaporatorCoilTempText}`, align: "center", tooltip: { modifier: "component", icon: "temperature", x: 344, y: 148, width: 132, kicker: "Temperatuur", detail: "Verdamper", direction: "right" } },
      { bind: "outside-temp", x: 548, y: 110, width: 48, value: model.outsideTempText, label: "Buitentemperatuur", ariaLabel: `Buitentemperatuur ${model.outsideTempText}`, align: "center", tooltip: { modifier: "component", icon: "temperature", x: 424, y: 92, width: 136, kicker: "Temperatuur", detail: "Buitenlucht", direction: "right" } },
      { bind: "fan-speed", x: 520, y: 258, width: 60, value: model.fanRpmText, label: "Ventilatorsnelheid", ariaLabel: `Ventilatorsnelheid ${model.fanRpmText}`, align: "center", tooltip: { modifier: "component", icon: "fan", x: 410, y: 236, width: 118, kicker: "Ventilator", detail: "Toerental", direction: "right" } },
      { bind: "supply", x: 22, y: 114, width: 58, value: model.waterOutText, label: "Aanvoer", tooltip: { modifier: model.supplyLineTone, icon: "temperature", x: 96, y: 96, width: 124, kicker: "Temperatuur", detail: "Aanvoer", direction: "left" } },
      { bind: "return", x: 22, y: 274, width: 58, value: model.waterInText, label: "Retour", tooltip: { modifier: model.returnLineTone, icon: "temperature", x: 96, y: 252, width: 124, kicker: "Temperatuur", detail: "Retour", direction: "left" } },
    ];
    const hotspots = [
      { bind: "compressor-freq", ariaLabel: `Compressorfrequentie ${model.compressorFreqText}`, x: 300, y: 148, width: 52, height: 26, rx: 12, tooltip: { modifier: "component", icon: "fan", x: 366, y: 130, width: 136, kicker: "Frequentie", detail: "Compressor", direction: "left" } },
      { bind: "fourway", ariaLabel: `4-wegklep, ${model.fourWayPositionText}`, x: 252, y: 208, width: 52, height: 52, rx: 16, tooltip: { modifier: "component", icon: "fourway", x: 308, y: 198, width: 196, kicker: "4-wegklep", detail: model.fourWayPositionText, detailBind: "fourway-detail", direction: "left" } },
      { bind: "eev", ariaLabel: `Expansieventiel, ${model.eevPositionText}`, x: 301, y: 275, width: 50, height: 38, rx: 12, tooltip: { modifier: "component", icon: "eev", x: 340, y: 252, width: 202, kicker: "Expansieventiel", detail: model.eevPositionText, detailBind: "eev-detail", direction: "left" } },
    ];
    return `
      <div class="${escapeHtml(model.boardClass)}" data-oq-hp-board="${escapeHtml(model.title)}">
        <div class="oq-hp-tech-shell">
          <div class="oq-hp-tech-visual">
            <svg class="oq-hp-tech-svg" viewBox="0 0 620 360" role="img" aria-label="${escapeHtml(model.title)} technische schematic">
              <defs>
              <linearGradient id="${escapeHtml(condWaterHeatGradientId)}" x1="0" y1="1" x2="0" y2="0">
                <stop offset="0%" stop-color="#3b82f6" stop-opacity="0.92"></stop>
                <stop offset="18%" stop-color="#60a5fa" stop-opacity="0.82"></stop>
                <stop offset="50%" stop-color="#8b8fdb" stop-opacity="0.38"></stop>
                <stop offset="82%" stop-color="#f87171" stop-opacity="0.82"></stop>
                <stop offset="100%" stop-color="#ef4444" stop-opacity="0.92"></stop>
              </linearGradient>
              <linearGradient id="${escapeHtml(condWaterCoolGradientId)}" x1="0" y1="1" x2="0" y2="0">
                <stop offset="0%" stop-color="#ef4444" stop-opacity="0.92"></stop>
                <stop offset="18%" stop-color="#f87171" stop-opacity="0.82"></stop>
                <stop offset="50%" stop-color="#8b8fdb" stop-opacity="0.38"></stop>
                <stop offset="82%" stop-color="#60a5fa" stop-opacity="0.82"></stop>
                <stop offset="100%" stop-color="#3b82f6" stop-opacity="0.92"></stop>
              </linearGradient>
              <linearGradient id="${escapeHtml(condRefGradientId)}" x1="0" y1="1" x2="0" y2="0">
                <stop offset="0%" stop-color="#16a34a" stop-opacity="0.12"></stop>
                <stop offset="52%" stop-color="#86efac" stop-opacity="0.08"></stop>
                <stop offset="100%" stop-color="#4ade80" stop-opacity="0.22"></stop>
              </linearGradient>
              </defs>
              <rect class="oq-hp-tech-frame" x="18" y="28" width="584" height="314" rx="22" />

            <text class="oq-hp-tech-title" x="134" y="76" data-oq-bind="left-exchanger-title">${escapeHtml(model.leftExchangerTitle)}</text>
            <text class="oq-hp-tech-title" x="326" y="76">Compressor</text>
            <text class="oq-hp-tech-title" x="510" y="76" data-oq-bind="right-exchanger-title">${escapeHtml(model.rightExchangerTitle)}</text>

            <g class="oq-hp-tech-condensor">
              <rect class="oq-hp-tech-condensor-shell" x="104" y="118" width="60" height="192" rx="18" />
              <rect class="oq-hp-tech-condensor-water" x="112" y="124" width="20" height="180" rx="10" fill="url(#${escapeHtml(activeCondWaterGradientId)})" data-oq-bind="cond-water" />
              <rect class="oq-hp-tech-condensor-ref-column" x="136" y="124" width="20" height="180" rx="10" fill="url(#${escapeHtml(condRefGradientId)})" />
              <path class="oq-hp-tech-condensor-divider" d="M134 128 V300" />
            </g>

            <g class="oq-hp-tech-compressor">
              <rect class="oq-hp-tech-compressor-body" x="306" y="118" width="40" height="70" rx="17" />
              <rect class="oq-hp-tech-compressor-port" x="296" y="140" width="10" height="20" rx="5" />
              <rect class="oq-hp-tech-compressor-port" x="346" y="140" width="10" height="20" rx="5" />
              <path class="oq-hp-tech-compressor-lines" d="M316 134 H336 M316 148 H336 M316 162 H336" />
              <text class="oq-hp-tech-compressor-freq" x="326" y="166" data-oq-bind="compressor-freq">${escapeHtml(model.compressorFreqText)}</text>
            </g>

            <g class="oq-hp-tech-4way">
              <rect class="oq-hp-tech-4way-body" x="264" y="220" width="28" height="28" rx="9" />
              <rect class="oq-hp-tech-4way-actuator" x="259" y="229" width="5" height="10" rx="2.5" />
              <circle class="oq-hp-tech-4way-port oq-hp-tech-4way-port--${model.leftValveTone}" cx="266" cy="234" r="3.2" />
              <circle class="oq-hp-tech-4way-port oq-hp-tech-4way-port--hotgas" cx="278" cy="220" r="3.2" />
              <circle class="oq-hp-tech-4way-port oq-hp-tech-4way-port--${model.rightValveTone}" cx="290" cy="234" r="3.2" />
              <circle class="oq-hp-tech-4way-port oq-hp-tech-4way-port--suction" cx="278" cy="248" r="3.2" />
              <path class="oq-hp-tech-4way-route oq-hp-tech-4way-route--heat oq-hp-tech-4way-route--hotgas" d="${escapeHtml(model.hotgasValveHeat)}" />
              <path class="oq-hp-tech-4way-route oq-hp-tech-4way-route--heat oq-hp-tech-4way-route--suction" d="${escapeHtml(model.suctionValveHeat)}" />
              <path class="oq-hp-tech-4way-route oq-hp-tech-4way-route--cool oq-hp-tech-4way-route--hotgas" d="${escapeHtml(model.hotgasValveCool)}" />
              <path class="oq-hp-tech-4way-route oq-hp-tech-4way-route--cool oq-hp-tech-4way-route--suction" d="${escapeHtml(model.suctionValveCool)}" />
            </g>

            <g class="oq-hp-tech-valve">
              <rect class="oq-hp-tech-eev-mask" x="311" y="283" width="30" height="22" rx="4" />
              <polygon class="oq-hp-tech-eev-shape" points="315,284 326,294 315,304" />
              <polygon class="oq-hp-tech-eev-shape" points="337,284 326,294 337,304" />
            </g>

            <g class="oq-hp-tech-evaporator">
              <rect class="oq-hp-tech-evaporator-shell" x="480" y="118" width="60" height="192" rx="18" />
              <path class="oq-hp-tech-evaporator-lines" d="M492 130 H526 M492 142 H526 M492 154 H526 M492 166 H526 M492 178 H526 M492 190 H526 M492 202 H526 M492 214 H526 M492 226 H526 M492 238 H526 M492 250 H526 M492 262 H526 M492 274 H526 M492 286 H526 M492 298 H526" />
            </g>

            <g class="oq-hp-tech-fan">
              <circle class="oq-hp-tech-fan-ring" cx="550" cy="214" r="34" />
              <circle class="oq-hp-tech-fan-core" cx="550" cy="214" r="8" />
              <g class="oq-hp-tech-fan-blades">
                <path d="M550 180 C561 192 562 203 550 214 C538 203 539 192 550 180 Z" />
                <path d="M584 214 C572 225 561 226 550 214 C561 202 572 203 584 214 Z" />
                <path d="M550 248 C539 236 538 225 550 214 C562 225 561 236 550 248 Z" />
                <path d="M516 214 C528 203 539 202 550 214 C539 226 528 225 516 214 Z" />
              </g>
            </g>

            ${Object.entries(model.pipes).map(([id, pipe]) => renderTechPipeLayer(id.replace(/[A-Z]/g, (match) => `-${match.toLowerCase()}`), pipe.tone, pipe.d, pipe.animated, pipe.flowVariant)).join("")}

            <g class="oq-hp-tech-pump oq-hp-tech-pump--${model.returnLineTone}">
              <circle class="oq-hp-tech-pump-ring" cx="88" cy="294" r="16" />
              <circle class="oq-hp-tech-pump-core" cx="88" cy="294" r="3.5" />
              <path class="oq-hp-tech-pump-blade" d="M81 287 L96 294 L81 301 Z" />
            </g>

            ${readings.map(renderTechReadingWithTooltip).join("")}
            ${renderTechTooltipTriggerGroup({
              bind: "bottom-heater",
              className: "oq-hp-tech-bottom-heater",
              active: model.bottomPlateActive,
              ariaLabel: "Bottom plate heater actief",
              content: `
                <path class="oq-hp-tech-bottom-heater-glow" d="M475 320 L485 314 L495 320 L505 314 L515 320 L525 314 L535 320 L545 314" />
                <path class="oq-hp-tech-bottom-heater-core" d="M475 320 L485 314 L495 320 L505 314 L515 320 L525 314 L535 320 L545 314" />
              `,
              tooltip: { modifier: "warm", x: 372, y: 269, width: 210, kicker: "Verwarming", detail: "Bodemplaatverwarming aan" },
            })}
            ${renderTechTooltipTriggerGroup({
              bind: "crankcase-heater",
              className: "oq-hp-tech-crankcase-heater",
              active: model.crankcaseActive,
              ariaLabel: "Crank case heater actief",
              content: `
                <path class="oq-hp-tech-crankcase-heater-glow" d="M302 194 L310 189 L318 194 L326 189 L334 194 L342 189 L350 194" />
                <path class="oq-hp-tech-crankcase-heater-core" d="M302 194 L310 189 L318 194 L326 189 L334 194 L342 189 L350 194" />
              `,
              tooltip: { modifier: "warm", x: 224, y: 142, width: 172, kicker: "Verwarming", detail: "Carterverwarming aan" },
            })}
            ${renderTechTooltipTriggerGroup({
              bind: "defrost-badge",
              className: "oq-hp-tech-defrost-badge",
              active: model.defrostActive,
              activeClass: "",
              ariaLabel: model.defrostActive ? "Defrost actief" : "Defrost uit",
              attrs: 'transform="translate(532 288)"',
              content: `
                <circle class="oq-hp-tech-defrost-hit" cx="0" cy="0" r="12" />
                <g class="oq-hp-tech-defrost-icon">
                  <path class="oq-hp-tech-defrost-glyph" d="M16.46 12V10.56L18.46 9.43L20.79 10.05L21.31 8.12L19.54 7.65L20 5.88L18.07 5.36L17.45 7.69L15.45 8.82L13 7.38V5.12L14.71 3.41L13.29 2L12 3.29L10.71 2L9.29 3.41L11 5.12V7.38L8.5 8.82L6.5 7.69L5.92 5.36L4 5.88L4.47 7.65L2.7 8.12L3.22 10.05L5.55 9.43L7.55 10.56V12H2V13H22V12H16.46M9.5 12V10.56L12 9.11L14.5 10.56V12H9.5" />
                  <g class="oq-hp-tech-defrost-drips">
                    <path class="oq-hp-tech-defrost-drip oq-hp-tech-defrost-drip--left" d="M8 17.85C8 19.04 7.11 20 6 20S4 19.04 4 17.85C4 16.42 6 14 6 14S8 16.42 8 17.85Z" />
                    <path class="oq-hp-tech-defrost-drip oq-hp-tech-defrost-drip--right" d="M20 17.85C20 19.04 19.11 20 18 20S16 19.04 16 17.85C16 16.42 18 14 18 14S20 16.42 20 17.85Z" />
                    <path class="oq-hp-tech-defrost-drip oq-hp-tech-defrost-drip--center" d="M14 20.85C14 22.04 13.11 23 12 23S10 22.04 10 20.85C10 19.42 12 17 12 17S14 19.42 14 20.85Z" />
                  </g>
                  <g class="oq-hp-tech-defrost-mists">
                    <g transform="translate(6 20.45)">
                      <g class="oq-hp-tech-defrost-mist oq-hp-tech-defrost-mist--left">
                        <circle cx="0" cy="0" r="0.92" />
                        <circle cx="-1.18" cy="0.34" r="0.58" />
                        <circle cx="1.16" cy="0.38" r="0.54" />
                      </g>
                    </g>
                    <g transform="translate(12 23.4)">
                      <g class="oq-hp-tech-defrost-mist oq-hp-tech-defrost-mist--center">
                        <circle cx="0" cy="0" r="1.08" />
                        <circle cx="-1.42" cy="0.42" r="0.66" />
                        <circle cx="1.38" cy="0.46" r="0.62" />
                      </g>
                    </g>
                    <g transform="translate(18 20.45)">
                      <g class="oq-hp-tech-defrost-mist oq-hp-tech-defrost-mist--right">
                        <circle cx="0" cy="0" r="0.92" />
                        <circle cx="-1.16" cy="0.38" r="0.54" />
                        <circle cx="1.18" cy="0.34" r="0.58" />
                      </g>
                    </g>
                  </g>
                </g>
              `,
              tooltip: { modifier: "return", icon: "defrost", x: 398, y: 266, width: 118, kicker: "Defrost", detail: "Actief", direction: "left" },
            })}

            ${hotspots.map(renderTechHotspotWithTooltip).join("")}

            </svg>
          </div>
          <div class="oq-hp-tech-footer">
            ${footerItems.map(renderHeatPumpFooterItem).join("")}
          </div>
        </div>
      </div>
    `;
  }

  function renderHeatPumpPanel(title, keys, accent, emphasis = "normal", layoutAction = null) {
    if (!hasEntity(keys.power)) {
      return "";
    }
    const runtime = getHeatPumpRuntimeModel(title, keys, accent);
    const { mode, defrostActive, running, thermalKey } = runtime;
    const schematicModel = runtime.schematic;

    if (state.hpVisualMode === "schematic") {
      return `
        <section class="oq-overview-hp oq-overview-hp--${escapeHtml(accent)} oq-overview-hp--${escapeHtml(emphasis)}" data-oq-hp-panel="${escapeHtml(title)}">
          <div class="oq-overview-hp-head">
            <div class="oq-overview-hp-head-title">
              ${renderHeatPumpPanelTitle(title, layoutAction)}
            </div>
            <div class="oq-overview-hp-head-side">
              ${renderHeatPumpPanelStatus(mode, running, schematicModel.warningActive, schematicModel.failureText)}
            </div>
          </div>
          ${renderHeatPumpSchematic(schematicModel)}
        </section>
      `;
    }

    return `
      <section class="oq-overview-hp oq-overview-hp--${escapeHtml(accent)} oq-overview-hp--${escapeHtml(emphasis)}" data-oq-hp-panel="${escapeHtml(title)}">
        <div class="oq-overview-hp-head">
          <div>
            <h3>${escapeHtml(title)}</h3>
          </div>
          ${renderHeatPumpPanelStatus(mode, running, schematicModel.warningActive, schematicModel.failureText)}
        </div>
        <div class="oq-overview-hp-stats">
          ${renderOverviewStatCards([
            { key: keys.power, label: "Stroomverbruik", tone: "blue", note: "elektrisch verbruik" },
            { key: thermalKey, label: schematicModel.heatLabel, tone: "orange", note: schematicModel.heatDescription },
            { label: schematicModel.efficiencyLabel, value: schematicModel.efficiencyText, tone: "green", note: "actueel" },
          ])}
        </div>
        <div class="oq-overview-hp-meta">
          <div class="oq-overview-hp-meta-chip">
            <span>Werkmodus</span>
            <strong>${escapeHtml(mode)}</strong>
          </div>
          <div class="oq-overview-hp-meta-chip">
            <span>Comp. freq</span>
            <strong>${escapeHtml(getEntityStateText(keys.freq))}</strong>
          </div>
          <div class="oq-overview-hp-meta-chip">
            <span>Defrost</span>
            <strong>${defrostActive ? "Actief" : "Uit"}</strong>
          </div>
        </div>
        <div class="oq-overview-temps-list">
          ${renderTempRow("Water in", keys.waterIn)}
          ${renderTempRow("Water out", keys.waterOut)}
        </div>
      </section>
    `;
  }

  function getHeatPumpPanels() {
    return HP_PANEL_CONFIGS.filter((panel) => hasEntity(panel.keys.power));
  }

  function getEffectiveHpLayoutMode(heatPumpPanels) {
    if (!Array.isArray(heatPumpPanels) || heatPumpPanels.length < 2 || state.hpVisualMode !== "schematic") {
      return "equal";
    }
    return state.hpLayoutMode === "focus-hp1" || state.hpLayoutMode === "focus-hp2" ? state.hpLayoutMode : "equal";
  }

  function getHeatPumpPanelEmphasis(index, heatPumpPanels, layoutMode) {
    if (!Array.isArray(heatPumpPanels) || heatPumpPanels.length < 2) {
      return "normal";
    }
    if (layoutMode === "focus-hp1") {
      return index === 0 ? "focus" : "muted";
    }
    if (layoutMode === "focus-hp2") {
      return index === 1 ? "focus" : "muted";
    }
    return "normal";
  }

  function getHeatPumpPanelLayoutAction(index, heatPumpPanels, layoutMode) {
    if (!Array.isArray(heatPumpPanels) || heatPumpPanels.length < 2 || state.hpVisualMode !== "schematic") {
      return null;
    }

    const emphasis = getHeatPumpPanelEmphasis(index, heatPumpPanels, layoutMode);
    if (emphasis === "focus") {
      return { layout: "equal", label: "Toon beide" };
    }

    return {
      layout: index === 0 ? "focus-hp1" : "focus-hp2",
      label: "Vergroot",
    };
  }

  function renderMagnifyActionIcon(kind = "plus") {
    const path = kind === "minus"
      ? 'M15.5,14H14.71L14.43,13.73C15.41,12.59 16,11.11 16,9.5A6.5,6.5 0 0,0 9.5,3A6.5,6.5 0 0,0 3,9.5A6.5,6.5 0 0,0 9.5,16C11.11,16 12.59,15.41 13.73,14.43L14,14.71V15.5L19,20.5L20.5,19L15.5,14M9.5,14C7,14 5,12 5,9.5C5,7 7,5 9.5,5C12,5 14,7 14,9.5C14,12 12,14 9.5,14M7,9H12V10H7V9Z'
      : 'M15.5,14L20.5,19L19,20.5L14,15.5V14.71L13.73,14.43C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.43,13.73L14.71,14H15.5M9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14M12,10H10V12H9V10H7V9H9V7H10V9H12V10Z';
    return `
      <svg class="oq-overview-hp-card-action-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="${path}" fill="currentColor"></path>
      </svg>
    `;
  }

  function renderHeatPumpControlsInner(heatPumpPanels) {
    if (!Array.isArray(heatPumpPanels) || heatPumpPanels.length === 0) {
      return "";
    }

    return `
      <div class="oq-overview-hp-tools-head">
        <div class="oq-overview-hp-tools-copy">
          <h3>Warmtepompen</h3>
          ${renderHeatPumpSummary(heatPumpPanels)}
        </div>
        <div class="oq-overview-hp-tool-switches">
          <button class="oq-overview-hp-tool-chip${state.hpVisualMode === "schematic" ? " is-active" : ""}" type="button" data-oq-action="select-hp-visual" data-hp-visual="schematic">Schematisch</button>
          <button class="oq-overview-hp-tool-chip${state.hpVisualMode === "compact" ? " is-active" : ""}" type="button" data-oq-action="select-hp-visual" data-hp-visual="compact">Compact</button>
        </div>
      </div>
    `;
  }

  function patchHeatPumpControls(hpTools, heatPumpPanels) {
    if (!hpTools) {
      return false;
    }

    const copy = hpTools.querySelector(".oq-overview-hp-tools-copy");
    const schematicButton = hpTools.querySelector('[data-hp-visual="schematic"]');
    const compactButton = hpTools.querySelector('[data-hp-visual="compact"]');

    if (!copy || !schematicButton || !compactButton) {
      setInnerHtmlIfChanged(hpTools, renderHeatPumpControlsInner(heatPumpPanels));
      return true;
    }

    setInnerHtmlIfChanged(copy, `
      <h3>Warmtepompen</h3>
      ${renderHeatPumpSummary(heatPumpPanels)}
    `);
    schematicButton.classList.toggle("is-active", state.hpVisualMode === "schematic");
    compactButton.classList.toggle("is-active", state.hpVisualMode === "compact");
    return true;
  }

  function renderOverviewView() {
    const strategyLabel = getOverviewStrategyLabel();
    const heatPumpPanels = getHeatPumpPanels();
    const hpLayoutMode = getEffectiveHpLayoutMode(heatPumpPanels);
    const heatPumpControls = renderHeatPumpControlsInner(heatPumpPanels);

    return `
      <section class="oq-helper-panel oq-helper-panel--flush">
        <div class="oq-overview-board oq-overview-board--${escapeHtml(state.overviewTheme)}">
          ${renderOverviewSummaryShell(strategyLabel)}
          <div class="oq-overview-main">
            ${renderOverviewNarrativePanel(getOverviewStrategySectionModel())}
            ${renderOverviewTempsPanel()}
          </div>
          ${heatPumpControls ? `<div class="oq-overview-hp-tools">${heatPumpControls}</div>` : ""}
          <div class="oq-overview-hp-grid ${heatPumpPanels.length === 1 ? "oq-overview-hp-grid--single" : ""} ${heatPumpPanels.length > 1 ? `oq-overview-hp-grid--${hpLayoutMode}` : ""}">
            ${heatPumpPanels.map((panel, index) => renderHeatPumpPanel(panel.title, panel.keys, panel.accent, getHeatPumpPanelEmphasis(index, heatPumpPanels, hpLayoutMode), getHeatPumpPanelLayoutAction(index, heatPumpPanels, hpLayoutMode))).join("")}
          </div>
        </div>
      </section>
    `;
  }

  function setTextContent(root, selector, value) {
    if (!root) {
      return;
    }
    const node = root.querySelector(selector);
    if (node && node.textContent !== value) {
      node.textContent = value;
    }
  }

  function setInnerHtmlIfChanged(node, markup) {
    if (!node) {
      return;
    }
    if (node.innerHTML !== markup) {
      node.innerHTML = markup;
    }
  }

  function replaceOuterHtmlIfSignatureChanged(node, signature, markup) {
    if (!node || node.dataset.renderSignature === signature) {
      return false;
    }
    node.outerHTML = markup;
    return true;
  }

  function syncAttribute(node, name, value) {
    if (node && node.getAttribute(name) !== value) {
      node.setAttribute(name, value);
    }
  }

  function syncBoundText(root, bindings) {
    bindings.forEach(([bind, value]) => {
      setTextContent(root, `[data-oq-bind="${bind}"]`, value);
    });
  }

  function syncBoundAria(root, bindings) {
    bindings.forEach(([bind, label]) => {
      syncAttribute(root.querySelector(`[data-oq-bind="${bind}"]`), "aria-label", label);
    });
  }

  function syncBoundToggle(root, bind, active, tooltipBind = "") {
    const node = root.querySelector(`[data-oq-bind="${bind}"]`);
    if (!node) {
      return;
    }
    node.classList.toggle("is-active", active);
    syncAttribute(node, "tabindex", active ? "0" : "-1");
    if (!active && tooltipBind) {
      hideTechTooltip(root.querySelector(`[data-oq-bind="${tooltipBind}"]`));
    }
  }

  function syncBoundFill(root, bind, value) {
    syncAttribute(root.querySelector(`[data-oq-bind="${bind}"]`), "fill", value);
  }

  function setVariantClass(node, prefix, value, variants) {
    if (!node) {
      return;
    }
    const target = `${prefix}${value}`;
    const current = variants
      .map((variant) => `${prefix}${variant}`)
      .find((variantClass) => node.classList.contains(variantClass));

    if (current === target) {
      return;
    }

    variants.forEach((variant) => node.classList.remove(`${prefix}${variant}`));
    node.classList.add(target);
  }

  function updatePipeGroup(root, id, tone, d) {
    const group = root.querySelector(`[data-oq-pipe="${id}"]`);
    if (!group) {
      return;
    }
    setVariantClass(group, "oq-hp-tech-pipe--", tone, ["supply", "return", "hotgas", "liquid", "expansion", "suction"]);
    group.querySelectorAll("path").forEach((path) => {
      if (path.getAttribute("d") !== d) {
        path.setAttribute("d", d);
      }
    });
  }

  function hideTechTooltip(tooltip) {
    if (!tooltip) {
      return;
    }
    tooltip.classList.remove("is-active");
    tooltip.setAttribute("aria-hidden", "true");
  }

  function showTechTooltip(board, layer, tooltip) {
    if (!board || !layer || !tooltip) {
      return;
    }

    board.querySelectorAll(".oq-hp-tech-tooltip.is-active").forEach((node) => {
      if (node !== tooltip) {
        hideTechTooltip(node);
      }
    });
    layer.appendChild(tooltip);
    tooltip.classList.add("is-active");
    tooltip.setAttribute("aria-hidden", "false");
  }

  function wireTechTooltipTrigger(board, layer, trigger, tooltip) {
    if (!board || !layer || !trigger || !tooltip || trigger.dataset.oqTooltipWired === "true") {
      return;
    }

    trigger.dataset.oqTooltipWired = "true";
    const hideIfIdle = () => {
      if (trigger.matches(":hover") || document.activeElement === trigger) {
        return;
      }
      hideTechTooltip(tooltip);
    };

    trigger.addEventListener("mouseenter", () => showTechTooltip(board, layer, tooltip));
    trigger.addEventListener("mouseleave", hideIfIdle);
    trigger.addEventListener("focus", () => showTechTooltip(board, layer, tooltip));
    trigger.addEventListener("blur", hideIfIdle);
  }

  function ensureTechTooltipLayering(board) {
    if (!board) {
      return;
    }

    const svg = board.querySelector(".oq-hp-tech-svg");
    if (!svg) {
      return;
    }

    let layer = svg.querySelector(".oq-hp-tech-tooltip-layer");
    if (!layer) {
      layer = document.createElementNS("http://www.w3.org/2000/svg", "g");
      layer.setAttribute("class", "oq-hp-tech-tooltip-layer");
      svg.appendChild(layer);
    }

    Array.from(svg.querySelectorAll(".oq-hp-tech-tooltip")).forEach((tooltip) => {
      layer.appendChild(tooltip);
    });

    board.querySelectorAll("[data-oq-tooltip-target]").forEach((trigger) => {
      const target = trigger.getAttribute("data-oq-tooltip-target");
      if (!target) {
        return;
      }
      const tooltip = board.querySelector(`[data-oq-bind="${target}-tooltip"]`);
      wireTechTooltipTrigger(board, layer, trigger, tooltip);
    });
  }

  function syncTechTooltipLayers(root = state.root) {
    if (!root) {
      return;
    }

    root.querySelectorAll("[data-oq-hp-board]").forEach((board) => {
      ensureTechTooltipLayering(board);
    });
  }

  function patchHeatPumpPanel(panel, title, keys, accent, layoutAction = null, runtime = null) {
    if (!panel) {
      return;
    }

    const resolvedRuntime = runtime || getHeatPumpRuntimeModel(title, keys, accent);
    const { mode, running } = resolvedRuntime;
    const model = resolvedRuntime.schematic;
    const headTitle = panel.querySelector(".oq-overview-hp-head-title");
    if (headTitle) {
      setInnerHtmlIfChanged(headTitle, renderHeatPumpPanelTitle(title, layoutAction));
    }
    const headSide = panel.querySelector(".oq-overview-hp-head-side");
    if (headSide) {
      let headStatus = headSide.querySelector(".oq-overview-hp-status");
      if (!headStatus) {
        setInnerHtmlIfChanged(headSide, renderHeatPumpPanelStatus(mode, running, model.warningActive, model.failureText));
        headStatus = headSide.querySelector(".oq-overview-hp-status");
      }
      patchHpPanelStatusRow(headStatus, mode, running, model.warningActive, model.failureText);
    }

    const board = panel.querySelector("[data-oq-hp-board]");
    if (!board) {
      return;
    }

    if (board.className !== model.boardClass) {
      board.className = model.boardClass;
    }
    syncBoundText(board, [
      ["status", model.statusText],
      ["left-exchanger-title", model.leftExchangerTitle],
      ["right-exchanger-title", model.rightExchangerTitle],
      ["compressor-freq", model.compressorFreqText],
      ["flow-value", model.flowText],
      ["inner-coil-temp-value", model.innerCoilTempText],
      ["evaporator-temp-value", model.evaporatorCoilTempText],
      ["outside-temp-value", model.outsideTempText],
      ["discharge-pressure-value", model.dischargePressureText],
      ["discharge-temp-value", model.dischargeTempText],
      ["suction-pressure-value", model.suctionPressureText],
      ["suction-temp-value", model.suctionTempText],
      ["supply-value", model.waterOutText],
      ["return-value", model.waterInText],
      ["footer-mode", model.mode],
      ["footer-power", model.powerText],
      ["footer-heat", model.heatText],
      ["footer-efficiency-label", model.efficiencyLabel],
      ["footer-efficiency", model.efficiencyText],
      ["fan-speed-value", model.fanRpmText],
      ["fourway-detail", model.fourWayPositionText],
      ["eev-detail", model.eevPositionText],
    ]);
    const footerHeatLabel = board.querySelector('[data-oq-bind="footer-heat-label"]');
    if (footerHeatLabel) {
      syncAttribute(footerHeatLabel, "aria-label", model.heatLabel);
      const nextHeatLabelMarkup = model.heatLabel === "Koelafgifte" ? "Koel<br>afgifte" : "Warmte<br>afgifte";
      if (footerHeatLabel.innerHTML !== nextHeatLabelMarkup) {
        footerHeatLabel.innerHTML = nextHeatLabelMarkup;
      }
    }
    [["bottom-heater", model.bottomPlateActive], ["crankcase-heater", model.crankcaseActive]].forEach(([bind, active]) => {
      syncBoundToggle(board, bind, active, `${bind}-tooltip`);
    });
    const defrostBadge = board.querySelector('[data-oq-bind="defrost-badge"]');
    if (defrostBadge) {
      syncAttribute(defrostBadge, "tabindex", model.defrostActive ? "0" : "-1");
      syncAttribute(defrostBadge, "aria-label", model.defrostActive ? "Defrost actief" : "Defrost uit");
      if (!model.defrostActive) {
        hideTechTooltip(board.querySelector('[data-oq-bind="defrost-badge-tooltip"]'));
      }
    }

    [["supply-tooltip", model.supplyLineTone], ["return-tooltip", model.returnLineTone]].forEach(([bind, tone]) => {
      setVariantClass(board.querySelector(`[data-oq-bind="${bind}"]`), "oq-hp-tech-tooltip--", tone, ["warm", "supply", "return"]);
    });
    syncBoundAria(board, [
      ["supply-reading", `Aanvoer temperatuur ${model.waterOutText}`],
      ["flow-reading", `Flow ${model.flowText}`],
      ["inner-coil-temp-reading", `Inner coil temperatuur ${model.innerCoilTempText}`],
      ["evaporator-temp-reading", `Verdampertemperatuur ${model.evaporatorCoilTempText}`],
      ["outside-temp-reading", `Buitentemperatuur ${model.outsideTempText}`],
      ["compressor-freq-trigger", `Compressorfrequentie ${model.compressorFreqText}`],
      ["fan-speed-reading", `Ventilatorsnelheid ${model.fanRpmText}`],
      ["discharge-pressure-reading", `Persdruk ${model.dischargePressureText}`],
      ["discharge-temp-reading", `Perstemperatuur ${model.dischargeTempText}`],
      ["return-reading", `Retour temperatuur ${model.waterInText}`],
      ["suction-pressure-reading", `Zuigdruk ${model.suctionPressureText}`],
      ["suction-temp-reading", `Zuigtemperatuur ${model.suctionTempText}`],
      ["fourway-trigger", `4-wegklep, ${model.fourWayPositionText}`],
      ["eev-trigger", `Expansieventiel, ${model.eevPositionText}`],
    ]);
    setVariantClass(board.querySelector(".oq-hp-tech-pump"), "oq-hp-tech-pump--", model.returnLineTone, ["supply", "return"]);
    const svgIdBase = String(model.title || "hp").toLowerCase().replace(/[^a-z0-9]+/g, "-");
    syncBoundFill(
      board,
      "cond-water",
      `url(#${model.reverseCycle ? `${svgIdBase}-cond-water-cool` : `${svgIdBase}-cond-water-heat`})`,
    );

    Object.entries(model.pipes).forEach(([id, pipe]) => {
      updatePipeGroup(board, id.replace(/[A-Z]/g, (match) => `-${match.toLowerCase()}`), pipe.tone, pipe.d);
    });
    ensureTechTooltipLayering(board);
    refreshMotionTargets();
  }

  function patchOverviewDom() {
    if (!state.root || state.appView !== "overview" || state.hpVisualMode !== "schematic") {
      return false;
    }

    const board = state.root.querySelector(".oq-overview-board");
    if (!board) {
      return false;
    }

    const strategyLabel = getOverviewStrategyLabel();
    const summaryShell = board.querySelector(".oq-overview-summary-shell");
    const system = board.querySelector(".oq-overview-system");
    const temps = board.querySelector(".oq-overview-temps");
    const hpTools = board.querySelector(".oq-overview-hp-tools");
    const hpGrid = board.querySelector(".oq-overview-hp-grid");
    const heatPumpPanels = getHeatPumpPanels();

    if (summaryShell) {
      const top = summaryShell.querySelector(".oq-overview-top");
      if (top) {
        setInnerHtmlIfChanged(top, renderOverviewStatCards(getOverviewTopCards()));
      }

      const statusPanel = summaryShell.querySelector(".oq-overview-statuspanel");
      if (statusPanel) {
        const controlModeLabel = getEntityStateText("controlModeLabel");
        replaceOuterHtmlIfSignatureChanged(
          statusPanel,
          getRenderSignature(getOverviewStatusCards(strategyLabel, controlModeLabel)),
          renderOverviewStatusPanel(strategyLabel, controlModeLabel),
        );
      }

      const summarySide = summaryShell.querySelector(".oq-overview-summary-side");
      if (summarySide) {
        const nextControlsSignature = getOverviewControlsRenderSignature();
        if (summarySide.dataset.renderSignature !== nextControlsSignature) {
          setInnerHtmlIfChanged(summarySide, renderOverviewControlPanels());
          summarySide.dataset.renderSignature = nextControlsSignature;
        }
      }
    }

    if (system) {
      replaceOuterHtmlIfSignatureChanged(
        system,
        getRenderSignature(getOverviewStrategySectionModel()),
        renderOverviewNarrativePanel(getOverviewStrategySectionModel()),
      );
    }

    if (temps) {
      replaceOuterHtmlIfSignatureChanged(
        temps,
        getRenderSignature(getOverviewTempsModel()),
        renderOverviewTempsPanel(),
      );
    }

    if (!hpTools || !hpGrid) {
      return false;
    }

    patchHeatPumpControls(hpTools, heatPumpPanels);

    const renderedPanels = hpGrid.querySelectorAll("[data-oq-hp-panel]");
    if (renderedPanels.length !== heatPumpPanels.length) {
      return false;
    }

    const hpLayoutMode = getEffectiveHpLayoutMode(heatPumpPanels);
    setVariantClass(hpGrid, "oq-overview-hp-grid--", heatPumpPanels.length === 1 ? "single" : hpLayoutMode, ["single", "equal", "focus-hp1", "focus-hp2"]);
    heatPumpPanels.forEach((panel, index) => {
      const panelNode = board.querySelector(`[data-oq-hp-panel="${panel.title}"]`);
      if (panelNode) {
        const runtime = getHeatPumpRuntimeModel(panel.title, panel.keys, panel.accent);
        setVariantClass(panelNode, "oq-overview-hp--", getHeatPumpPanelEmphasis(index, heatPumpPanels, hpLayoutMode), ["normal", "focus", "muted"]);
        patchHeatPumpPanel(panelNode, panel.title, panel.keys, panel.accent, getHeatPumpPanelLayoutAction(index, heatPumpPanels, hpLayoutMode), runtime);
      }
    });

    return true;
  }

