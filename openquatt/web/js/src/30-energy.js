  function renderOverviewEnergyRow([label, key]) {
    const derived = getDerivedEfficiencyValue(key);
    if (!hasEntity(key) && Number.isNaN(derived)) {
      return "";
    }
    const value = isEfficiencyKey(key) ? formatOverviewStatValue(key) : getEntityStateText(key);
    return `
      <div class="oq-overview-energy-row">
        <span>${escapeHtml(label)}</span>
        <strong>${escapeHtml(value)}</strong>
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

  function getEnergySectionModel() {
    const renderedColumns = OVERVIEW_ENERGY_COLUMN_CONFIGS.map(renderOverviewEnergyColumn).filter(Boolean);
    const gridClassName = [
      "oq-overview-energy-grid",
      renderedColumns.length === 1 ? "oq-overview-energy-grid--single" : "",
      renderedColumns.length === 2 ? "oq-overview-energy-grid--two" : "",
    ].filter(Boolean).join(" ");

    return { renderedColumns, gridClassName };
  }

  function getEnergySectionRenderSignature(model = getEnergySectionModel()) {
    return getRenderSignature(model);
  }

  function renderEnergySection(model = getEnergySectionModel()) {
    return `
      <section class="oq-overview-energy oq-overview-energy--solo" data-render-signature="${escapeHtml(getEnergySectionRenderSignature(model))}">
        <div class="${escapeHtml(model.gridClassName)}">
          ${model.renderedColumns.join("")}
        </div>
      </section>
    `;
  }

  const ENERGY_HISTORY_VALUE_KEYS = [
    "electricalInputWh",
    "heatingInputWh",
    "coolingInputWh",
    "heatpumpHeatOutputWh",
    "heatpumpCoolingOutputWh",
    "boilerHeatOutputWh",
    "systemHeatOutputWh",
  ];

  const ENERGY_HISTORY_VIEW_OPTIONS = [
    { id: "day", label: "Dag" },
    { id: "week", label: "Week" },
    { id: "month", label: "Maand" },
    { id: "year", label: "Jaar" },
    { id: "all", label: "Alles" },
  ];

  const ENERGY_HISTORY_PERIOD_VIEW_IDS = new Set(["day", "week", "month", "year"]);

  const ENERGY_HISTORY_WEEKDAY_LABELS = ["Zo", "Ma", "Di", "Wo", "Do", "Vr", "Za"];

  function normalizeEnergyHistoryView(view) {
    const value = String(view || "").trim();
    return ENERGY_HISTORY_VIEW_OPTIONS.some((option) => option.id === value) ? value : "day";
  }

  function setEnergyHistoryView(view) {
    const nextView = normalizeEnergyHistoryView(view);
    if (state.energyHistoryView === nextView) {
      return;
    }
    state.energyHistoryView = nextView;
    state.energyHistoryLastFetchAt = 0;
    render();
    requestEnergyHistoryDataRefresh();
  }

  function requestEnergyHistoryDataRefresh() {
    if (typeof refreshEnergyHistoryData !== "function") {
      return;
    }
    void refreshEnergyHistoryData({ force: true }).then((changed) => {
      if (changed) {
        render();
      }
    });
  }

  function isEnergyHistoryPeriodView(view) {
    return ENERGY_HISTORY_PERIOD_VIEW_IDS.has(normalizeEnergyHistoryView(view));
  }

  function getEnergyHistoryTodayKey() {
    const now = new Date();
    return (now.getFullYear() * 10000) + ((now.getMonth() + 1) * 100) + now.getDate();
  }

  function getEnergyHistoryMetadataFromRaw() {
    const raw = String(state.energyHistoryRaw || "");
    const metadata = {
      storedDayCount: 0,
      oldestDateKey: null,
      newestDateKey: null,
      hourStoredDayCount: 0,
      hourOldestDateKey: null,
      hourNewestDateKey: null,
      hourRequestedRetentionDays: 0,
      hourSlotCount: 0,
      hourPartitionAvailable: false,
      hourRecordCount: 0,
      hourWriteCount: 0,
      hourStorageKb: 0,
      hourLastWriteTimestampS: 0,
    };
    raw.split(/\r?\n/).forEach((line) => {
      if (!line.startsWith("@bounds|") && !line.startsWith("@hour_retention|")) {
        return;
      }
      const parts = line.split("|");
      if (line.startsWith("@bounds|")) {
        metadata.storedDayCount = Number(parts[1]) || 0;
        metadata.oldestDateKey = Number(parts[2]) || null;
        metadata.newestDateKey = Number(parts[3]) || null;
        metadata.hourStoredDayCount = Number(parts[4]) || 0;
        metadata.hourOldestDateKey = Number(parts[5]) || null;
        metadata.hourNewestDateKey = Number(parts[6]) || null;
      } else if (line.startsWith("@hour_retention|")) {
        metadata.hourRequestedRetentionDays = Number(parts[1]) || 0;
        metadata.hourSlotCount = Number(parts[2]) || 0;
        metadata.hourPartitionAvailable = Number(parts[3]) === 1;
        metadata.hourRecordCount = Number(parts[4]) || 0;
        metadata.hourWriteCount = Number(parts[5]) || 0;
        metadata.hourStorageKb = Number(parts[6]) || 0;
        metadata.hourLastWriteTimestampS = Number(parts[7]) || 0;
      }
    });
    return metadata;
  }

  function getEnergyHistoryCurrentDateKeyFromRaw() {
    const raw = String(state.energyHistoryRaw || "");
    let currentKey = null;
    raw.split(/\r?\n/).forEach((line) => {
      const record = parseEnergyHistoryCurrentLine(line);
      if (record) {
        currentKey = record.dateKey;
      }
    });
    return currentKey;
  }

  function getEnergyHistoryReferenceDateKey(records = [], includeHours = true) {
    const currentKey = getEnergyHistoryCurrentDateKeyFromRaw();
    const metadata = getEnergyHistoryMetadataFromRaw();
    const dateKeys = (Array.isArray(records) ? records : [])
      .map((record) => Number(record?.dateKey))
      .filter(Number.isFinite);

    if (Number.isFinite(Number(metadata.newestDateKey))) {
      dateKeys.push(Number(metadata.newestDateKey));
    }

    if (Number.isFinite(Number(currentKey))) {
      dateKeys.push(Number(currentKey));
    }

    if (includeHours) {
      getEnergyHistoryHourRecords().forEach((record) => {
        const dateKey = Number(record?.dateKey);
        if (Number.isFinite(dateKey)) {
          dateKeys.push(dateKey);
        }
      });
    }

    return dateKeys.length ? Math.max(...dateKeys) : getEnergyHistoryTodayKey();
  }

  function getEnergyHistoryDateKeyFromDate(date) {
    return (date.getFullYear() * 10000) + ((date.getMonth() + 1) * 100) + date.getDate();
  }

  function getEnergyHistoryDateFromParts(year, month, day) {
    return new Date(year, month - 1, day, 12, 0, 0);
  }

  function getEnergyHistoryDaysInMonth(year, month) {
    return new Date(year, month, 0).getDate();
  }

  function padEnergyHistoryDatePart(value) {
    return String(value).padStart(2, "0");
  }

  function getEnergyHistoryDateInputValue(dateKey) {
    const parsed = parseEnergyHistoryDateKey(dateKey);
    if (!parsed) {
      return "";
    }
    return `${parsed.year}-${padEnergyHistoryDatePart(parsed.month)}-${padEnergyHistoryDatePart(parsed.day)}`;
  }

  function parseEnergyHistoryDateInputValue(value) {
    const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(String(value || "").trim());
    if (!match) {
      return null;
    }
    const year = Number(match[1]);
    const month = Number(match[2]);
    const day = Number(match[3]);
    const date = getEnergyHistoryDateFromParts(year, month, day);
    if (
      date.getFullYear() !== year
      || date.getMonth() + 1 !== month
      || date.getDate() !== day
    ) {
      return null;
    }
    return parseEnergyHistoryDateKey(getEnergyHistoryDateKeyFromDate(date));
  }

  function getEnergyHistoryMonthKey(year, month) {
    return (Number(year) * 100) + Number(month);
  }

  function getEnergyHistoryMonthKeyFromDate(date) {
    return getEnergyHistoryMonthKey(date.getFullYear(), date.getMonth() + 1);
  }

  function parseEnergyHistoryMonthKey(monthKey) {
    const key = Number(monthKey);
    if (!Number.isFinite(key) || key <= 0) {
      return null;
    }
    const year = Math.floor(key / 100);
    const month = key % 100;
    if (year < 2020 || month < 1 || month > 12) {
      return null;
    }
    return { key, year, month, date: new Date(year, month - 1, 1, 12, 0, 0) };
  }

  function parseEnergyHistoryMonthInputValue(value) {
    const raw = String(value || "").trim();
    const match = /^(\d{4})-(\d{2})$/.exec(raw);
    if (match) {
      return parseEnergyHistoryMonthKey(getEnergyHistoryMonthKey(Number(match[1]), Number(match[2])));
    }
    return parseEnergyHistoryMonthKey(raw);
  }

  function addEnergyHistoryMonths(monthKey, offset) {
    const parsed = parseEnergyHistoryMonthKey(monthKey);
    if (!parsed) {
      return "";
    }
    const date = new Date(parsed.year, parsed.month - 1 + Number(offset || 0), 1, 12, 0, 0);
    return String(getEnergyHistoryMonthKeyFromDate(date));
  }

  function getEnergyHistoryWeekStart(date) {
    const start = new Date(date.getTime());
    const weekday = start.getDay();
    const diff = weekday === 0 ? -6 : 1 - weekday;
    start.setDate(start.getDate() + diff);
    start.setHours(12, 0, 0, 0);
    return start;
  }

  function addEnergyHistoryDays(date, days) {
    const next = new Date(date.getTime());
    next.setDate(next.getDate() + days);
    next.setHours(12, 0, 0, 0);
    return next;
  }

  function formatEnergyHistoryDayMonth(date) {
    return date.toLocaleDateString("nl-NL", { day: "numeric", month: "short" }).replace(/\./g, "");
  }

  function getEnergyHistoryIsoWeekInfo(date) {
    const target = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
    const dayNumber = (target.getUTCDay() + 6) % 7;
    target.setUTCDate(target.getUTCDate() - dayNumber + 3);
    const weekYear = target.getUTCFullYear();
    const firstThursday = new Date(Date.UTC(weekYear, 0, 4));
    const firstDayNumber = (firstThursday.getUTCDay() + 6) % 7;
    firstThursday.setUTCDate(firstThursday.getUTCDate() - firstDayNumber + 3);
    const week = 1 + Math.round((target - firstThursday) / (7 * 24 * 60 * 60 * 1000));
    return { week, year: weekYear };
  }

  function getEnergyHistoryWeekStartKeyFromDate(date) {
    return getEnergyHistoryDateKeyFromDate(getEnergyHistoryWeekStart(date));
  }

  function parseEnergyHistoryWeekValue(value) {
    const dateInput = parseEnergyHistoryDateInputValue(value);
    const parsed = dateInput || parseEnergyHistoryDateKey(value);
    if (!parsed) {
      return null;
    }
    const start = getEnergyHistoryWeekStart(parsed.date);
    return parseEnergyHistoryDateKey(getEnergyHistoryDateKeyFromDate(start));
  }

  function formatEnergyHistoryWeekLabel(weekStartKey) {
    const parsed = parseEnergyHistoryDateKey(weekStartKey);
    if (!parsed) {
      return "Week";
    }
    const start = getEnergyHistoryWeekStart(parsed.date);
    const end = addEnergyHistoryDays(start, 6);
    const week = getEnergyHistoryIsoWeekInfo(start).week;
    return `Week ${week} (${formatEnergyHistoryDayMonth(start)} - ${formatEnergyHistoryDayMonth(end)})`;
  }

  function parseEnergyHistoryDateKey(dateKey) {
    const key = Number(dateKey);
    if (!Number.isFinite(key) || key <= 0) {
      return null;
    }
    const year = Math.floor(key / 10000);
    const month = Math.floor(key / 100) % 100;
    const day = key % 100;
    if (year < 2020 || month < 1 || month > 12 || day < 1 || day > 31) {
      return null;
    }
    return { key, year, month, day, date: new Date(year, month - 1, day, 12, 0, 0) };
  }

  function formatEnergyHistoryDateLabel(dateKey, mode = "day") {
    const parsed = parseEnergyHistoryDateKey(dateKey);
    if (!parsed) {
      return "—";
    }
    if (mode === "weekday") {
      return ENERGY_HISTORY_WEEKDAY_LABELS[parsed.date.getDay()] || "";
    }
    if (mode === "month") {
      return parsed.date.toLocaleDateString("nl-NL", { month: "short" });
    }
    if (mode === "year") {
      return String(parsed.year);
    }
    return parsed.date.toLocaleDateString("nl-NL", { day: "2-digit", month: "short" });
  }

  function getEntityKwhAsWh(key) {
    const value = getEntityNumericValue(key);
    if (!Number.isFinite(value) || value < 0) {
      return null;
    }
    return Math.round(value * 1000);
  }

  function normalizeEnergyHistoryWh(rawValue) {
    const value = Number(rawValue);
    return Number.isFinite(value) && value >= 0 ? value : null;
  }

  function getEnergyHistoryRecordValuesFromParts(parts, offset = 0) {
    const values = {};
    ENERGY_HISTORY_VALUE_KEYS.forEach((key, index) => {
      values[key] = normalizeEnergyHistoryWh(parts[offset + index]);
    });
    return values;
  }

  function parseEnergyHistoryLine(line) {
    const value = String(line || "").trim();
    if (!value || value.startsWith("@")) {
      return null;
    }
    const parts = value.split("|");
    if (parts.length < 10) {
      return null;
    }
    const sequence = Number(parts[0]);
    const dateKey = Number(parts[1]);
    const flags = Number(parts[2]);
    const parsed = parseEnergyHistoryDateKey(dateKey);
    if (!Number.isFinite(sequence) || !parsed) {
      return null;
    }
    return {
      sequence,
      dateKey,
      year: parsed.year,
      month: parsed.month,
      day: parsed.day,
      partial: Boolean(flags & 1),
      source: "flash",
      ...getEnergyHistoryRecordValuesFromParts(parts, 3),
    };
  }

  function parseEnergyHistoryCurrentLine(line) {
    const value = String(line || "").trim();
    if (!value.startsWith("@current|")) {
      return null;
    }
    const parts = value.split("|");
    if (parts.length < 9) {
      return null;
    }
    const dateKey = Number(parts[1]);
    const parsed = parseEnergyHistoryDateKey(dateKey);
    if (!parsed) {
      return null;
    }
    return {
      sequence: Number.MAX_SAFE_INTEGER,
      dateKey,
      year: parsed.year,
      month: parsed.month,
      day: parsed.day,
      partial: true,
      source: "current",
      ...getEnergyHistoryRecordValuesFromParts(parts, 2),
    };
  }

  function parseEnergyHistoryHourLine(line) {
    const value = String(line || "").trim();
    if (!value.startsWith("@hour|")) {
      return null;
    }
    const parts = value.split("|");
    if (parts.length < 11) {
      return null;
    }
    const sequence = Number(parts[1]);
    const dateKey = Number(parts[2]);
    const hour = Number(parts[3]);
    const parsed = parseEnergyHistoryDateKey(dateKey);
    if (!Number.isFinite(sequence) || !parsed || !Number.isInteger(hour) || hour < 0 || hour > 23) {
      return null;
    }
    return {
      sequence,
      dateKey,
      year: parsed.year,
      month: parsed.month,
      day: parsed.day,
      hour,
      partial: true,
      source: "hour",
      label: String(hour),
      tooltipLabel: `${String(hour).padStart(2, "0")}:00 - ${String((hour + 1) % 24).padStart(2, "0")}:00`,
      sortKey: (dateKey * 100) + hour,
      ...getEnergyHistoryRecordValuesFromParts(parts, 4),
    };
  }

  function getEnergyHistoryTodayRecord() {
    const dateKey = getEnergyHistoryCurrentDateKeyFromRaw() || getEnergyHistoryTodayKey();
    const parsed = parseEnergyHistoryDateKey(dateKey);
    if (!parsed) {
      return null;
    }
    const record = {
      sequence: Number.MAX_SAFE_INTEGER - 1,
      dateKey,
      year: parsed.year,
      month: parsed.month,
      day: parsed.day,
      partial: true,
      source: "sensors",
      electricalInputWh: getEntityKwhAsWh("electricalEnergyDaily"),
      heatingInputWh: getEntityKwhAsWh("heatingElectricalEnergyDaily"),
      coolingInputWh: getEntityKwhAsWh("coolingElectricalEnergyDaily"),
      heatpumpHeatOutputWh: getEntityKwhAsWh("heatpumpThermalEnergyDaily"),
      heatpumpCoolingOutputWh: getEntityKwhAsWh("heatpumpCoolingEnergyDaily"),
      boilerHeatOutputWh: getEntityKwhAsWh("boilerThermalEnergyDaily"),
      systemHeatOutputWh: getEntityKwhAsWh("systemThermalEnergyDaily"),
    };
    return ENERGY_HISTORY_VALUE_KEYS.some((key) => Number.isFinite(record[key])) ? record : null;
  }

  function getEnergyHistoryRecordWh(record, key) {
    const value = Number(record?.[key]);
    return Number.isFinite(value) && value >= 0 ? value : 0;
  }

  function getEnergyHistoryRecords() {
    const byDate = new Map();
    const raw = String(state.energyHistoryRaw || "");
    raw.split(/\r?\n/).forEach((line) => {
      const record = parseEnergyHistoryLine(line) || parseEnergyHistoryCurrentLine(line);
      if (!record) {
        return;
      }
      const existing = byDate.get(record.dateKey);
      if (!existing || record.sequence >= existing.sequence) {
        byDate.set(record.dateKey, record);
      }
    });

    const todayRecord = getEnergyHistoryTodayRecord();
    if (todayRecord) {
      byDate.set(todayRecord.dateKey, todayRecord);
    }

    const datesWithDayRecords = new Set(byDate.keys());
    const hourSummaries = new Map();
    getEnergyHistoryHourRecords().forEach((record) => {
      if (datesWithDayRecords.has(record.dateKey)) {
        return;
      }
      let bucket = hourSummaries.get(record.dateKey);
      if (!bucket) {
        const parsed = parseEnergyHistoryDateKey(record.dateKey);
        if (!parsed) {
          return;
        }
        bucket = createEnergyHistoryBucket({
          dateKey: parsed.key,
          year: parsed.year,
          month: parsed.month,
          day: parsed.day,
          label: formatEnergyHistoryDateLabel(parsed.key),
          sortKey: parsed.key,
          source: "hour-summary",
        });
        bucket.tooltipLabel = `${formatEnergyHistoryDateLabel(record.dateKey)} · uurdata sinds herstart`;
        hourSummaries.set(record.dateKey, bucket);
      }
      mergeEnergyHistoryRecordIntoBucket(bucket, record);
    });
    hourSummaries.forEach((bucket, dateKey) => {
      byDate.set(dateKey, bucket);
    });

    return [...byDate.values()].sort((a, b) => a.dateKey - b.dateKey);
  }

  function getEnergyHistoryHourRecords() {
    const byHour = new Map();
    const raw = String(state.energyHistoryRaw || "");
    raw.split(/\r?\n/).forEach((line) => {
      const record = parseEnergyHistoryHourLine(line);
      if (!record) {
        return;
      }
      const key = `${record.dateKey}:${record.hour}`;
      const existing = byHour.get(key);
      if (!existing || record.sequence >= existing.sequence) {
        byHour.set(key, record);
      }
    });
    return [...byHour.values()].sort((a, b) => a.sortKey - b.sortKey);
  }

  function getEnergyHistoryHourRecordsForDate(dateKey) {
    return getEnergyHistoryHourRecords().filter((record) => record.dateKey === Number(dateKey));
  }

  function sumEnergyHistoryWh(records, key) {
    return records.reduce((sum, record) => {
      return sum + getEnergyHistoryRecordWh(record, key);
    }, 0);
  }

  function getEnergyHistoryOutputWh(record) {
    return ["heatpumpHeatOutputWh", "heatpumpCoolingOutputWh", "boilerHeatOutputWh"].reduce((sum, key) => {
      return sum + getEnergyHistoryRecordWh(record, key);
    }, 0);
  }

  function getEnergyHistoryStackWh(record) {
    return getEnergyHistoryRecordWh(record, "electricalInputWh") + getEnergyHistoryOutputWh(record);
  }

  function formatEnergyRatio(numeratorWh, denominatorWh) {
    const numerator = Number(numeratorWh);
    const denominator = Number(denominatorWh);
    if (!Number.isFinite(numerator) || !Number.isFinite(denominator) || denominator <= 0) {
      return "—";
    }
    return (numerator / denominator).toFixed(2);
  }

  function formatEnergyAdaptiveWh(wh, decimals = 1) {
    const value = Number(wh);
    if (!Number.isFinite(value)) {
      return "—";
    }
    if (Math.abs(value) >= 999500) {
      return `${(value / 1000000).toFixed(2)} MWh`;
    }
    if (Math.abs(value) < 1000) {
      return `${Math.round(value)} Wh`;
    }
    return `${(value / 1000).toFixed(decimals)} kWh`;
  }

  function createEnergyHistoryBucket({ dateKey, year, month, day, hour = null, label, tooltipLabel = "", sortKey, source = "bucket" }) {
    return {
      sequence: 0,
      dateKey,
      year,
      month,
      day,
      hour,
      label,
      tooltipLabel,
      sortKey: sortKey ?? dateKey,
      partial: false,
      source,
      electricalInputWh: 0,
      heatingInputWh: 0,
      coolingInputWh: 0,
      heatpumpHeatOutputWh: 0,
      heatpumpCoolingOutputWh: 0,
      boilerHeatOutputWh: 0,
      systemHeatOutputWh: 0,
    };
  }

  function mergeEnergyHistoryRecordIntoBucket(bucket, record) {
    ENERGY_HISTORY_VALUE_KEYS.forEach((key) => {
      bucket[key] += getEnergyHistoryRecordWh(record, key);
    });
    bucket.partial = bucket.partial || Boolean(record?.partial);
    bucket.sequence = Math.max(Number(bucket.sequence || 0), Number(record?.sequence || 0));
    return bucket;
  }

  function copyEnergyHistoryRecordToBucket(record, label, sortKey = record?.dateKey) {
    const parsed = parseEnergyHistoryDateKey(record?.dateKey);
    if (!parsed) {
      return null;
    }
    return mergeEnergyHistoryRecordIntoBucket(createEnergyHistoryBucket({
      dateKey: parsed.key,
      year: parsed.year,
      month: parsed.month,
      day: parsed.day,
      label,
      tooltipLabel: record.tooltipLabel || label,
      sortKey,
      source: record.source || "record",
    }), record);
  }

  function getEnergyHistoryRecordsByDate(records) {
    const byDate = new Map();
    records.forEach((record) => {
      byDate.set(record.dateKey, record);
    });
    return byDate;
  }

  function getEnergyHistoryLatestParsed(records) {
    const latest = records[records.length - 1];
    return latest ? parseEnergyHistoryDateKey(latest.dateKey) : null;
  }

  function normalizeEnergyHistoryPeriodValue(view, value) {
    const normalizedView = normalizeEnergyHistoryView(view);
    if (normalizedView === "day") {
      const parsed = parseEnergyHistoryDateInputValue(value) || parseEnergyHistoryDateKey(value);
      return parsed ? String(parsed.key) : "";
    }
    if (normalizedView === "week") {
      const parsed = parseEnergyHistoryWeekValue(value);
      return parsed ? String(parsed.key) : "";
    }
    if (normalizedView === "month") {
      const parsed = parseEnergyHistoryMonthInputValue(value);
      return parsed ? String(parsed.key) : "";
    }
    if (normalizedView === "year") {
      const year = Number(value);
      return Number.isInteger(year) && year >= 2020 && year <= 2200 ? String(year) : "";
    }
    return "";
  }

  function getEnergyHistoryPeriodBounds(records, view) {
    const normalizedView = normalizeEnergyHistoryView(view);
    const reference = parseEnergyHistoryDateKey(getEnergyHistoryReferenceDateKey(records, true));
    const metadata = getEnergyHistoryMetadataFromRaw();
    const hourRecords = getEnergyHistoryHourRecords();
    const dateKeys = [
      ...records.map((record) => record.dateKey),
      ...hourRecords.map((record) => record.dateKey),
    ].filter((key) => Number.isFinite(Number(key)));
    if (Number.isFinite(Number(metadata.oldestDateKey))) {
      dateKeys.push(Number(metadata.oldestDateKey));
    }
    if (Number.isFinite(Number(metadata.newestDateKey))) {
      dateKeys.push(Number(metadata.newestDateKey));
    }
    const oldestKey = dateKeys.length ? Math.min(...dateKeys.map(Number)) : reference?.key;
    const oldest = oldestKey ? parseEnergyHistoryDateKey(oldestKey) : reference;
    const oldestDate = oldest?.date || reference?.date || new Date();
    const referenceDate = reference?.date || new Date();
    let min = reference?.key || getEnergyHistoryTodayKey();
    let max = min;

    if (normalizedView === "week") {
      min = getEnergyHistoryWeekStartKeyFromDate(oldestDate);
      max = getEnergyHistoryWeekStartKeyFromDate(referenceDate);
    } else if (normalizedView === "month") {
      min = getEnergyHistoryMonthKeyFromDate(oldestDate);
      max = getEnergyHistoryMonthKeyFromDate(referenceDate);
    } else if (normalizedView === "year") {
      min = oldestDate.getFullYear();
      max = referenceDate.getFullYear();
    } else {
      min = getEnergyHistoryDateKeyFromDate(oldestDate);
      max = getEnergyHistoryDateKeyFromDate(referenceDate);
    }

    if (Number(min) > Number(max)) {
      min = max;
    }
    return { min: String(min), max: String(max) };
  }

  function clampEnergyHistoryPeriodValue(value, bounds) {
    const numeric = Number(value);
    if (!Number.isFinite(numeric)) {
      return String(bounds.max);
    }
    if (numeric < Number(bounds.min)) {
      return String(bounds.min);
    }
    if (numeric > Number(bounds.max)) {
      return String(bounds.max);
    }
    return String(value);
  }

  function getEnergyHistorySelectedPeriodValue(records, view, bounds = getEnergyHistoryPeriodBounds(records, view)) {
    const normalizedView = normalizeEnergyHistoryView(view);
    const stored = state.energyHistoryPeriodSelection?.[normalizedView];
    const normalizedStored = normalizeEnergyHistoryPeriodValue(normalizedView, stored);
    return clampEnergyHistoryPeriodValue(normalizedStored || bounds.max, bounds);
  }

  function getEnergyHistoryPeriodOptions(view, bounds) {
    const normalizedView = normalizeEnergyHistoryView(view);
    const options = [];
    let guard = 0;

    if (normalizedView === "week") {
      let cursor = String(bounds.max);
      while (Number(cursor) >= Number(bounds.min) && guard < 6000) {
        const parsed = parseEnergyHistoryDateKey(cursor);
        options.push({
          value: cursor,
          label: formatEnergyHistoryWeekLabel(cursor),
          group: parsed ? String(getEnergyHistoryIsoWeekInfo(parsed.date).year) : "",
        });
        cursor = parsed ? String(getEnergyHistoryDateKeyFromDate(addEnergyHistoryDays(parsed.date, -7))) : "";
        guard += 1;
      }
      return options;
    }

    if (normalizedView === "month") {
      let cursor = String(bounds.max);
      while (Number(cursor) >= Number(bounds.min) && guard < 1200) {
        const parsed = parseEnergyHistoryMonthKey(cursor);
        if (!parsed) {
          break;
        }
        options.push({
          value: cursor,
          label: parsed.date.toLocaleDateString("nl-NL", { month: "long", year: "numeric" }),
          group: String(parsed.year),
        });
        cursor = addEnergyHistoryMonths(cursor, -1);
        guard += 1;
      }
      return options;
    }

    if (normalizedView === "year") {
      for (let year = Number(bounds.max); year >= Number(bounds.min); year -= 1) {
        options.push({ value: String(year), label: String(year) });
      }
    }

    return options;
  }

  function getEnergyHistoryPeriodControlModel(records, view) {
    const normalizedView = normalizeEnergyHistoryView(view);
    if (!isEnergyHistoryPeriodView(normalizedView)) {
      return {
        view: normalizedView,
        selectedValue: "",
        minValue: "",
        maxValue: "",
        canPrevious: false,
        canNext: false,
        isNow: true,
        options: [],
      };
    }

    const bounds = getEnergyHistoryPeriodBounds(records, normalizedView);
    const selectedValue = getEnergyHistorySelectedPeriodValue(records, normalizedView, bounds);
    return {
      view: normalizedView,
      selectedValue,
      minValue: bounds.min,
      maxValue: bounds.max,
      canPrevious: Number(selectedValue) > Number(bounds.min),
      canNext: Number(selectedValue) < Number(bounds.max),
      isNow: Number(selectedValue) === Number(bounds.max),
      options: getEnergyHistoryPeriodOptions(normalizedView, bounds),
    };
  }

  function getEnergyHistoryRequestRange(records, view) {
    const normalizedView = normalizeEnergyHistoryView(view);
    if (!isEnergyHistoryPeriodView(normalizedView)) {
      return { from: "", to: "", hours: "0" };
    }

    const period = getEnergyHistoryPeriodControlModel(records, normalizedView);
    if (normalizedView === "day") {
      return { from: period.selectedValue, to: period.selectedValue, hours: "1" };
    }
    if (normalizedView === "week") {
      const selected = parseEnergyHistoryDateKey(period.selectedValue);
      if (!selected) {
        return { from: "", to: "", hours: "0" };
      }
      const start = getEnergyHistoryWeekStart(selected.date);
      const end = addEnergyHistoryDays(start, 6);
      return {
        from: String(getEnergyHistoryDateKeyFromDate(start)),
        to: String(getEnergyHistoryDateKeyFromDate(end)),
        hours: "0",
      };
    }
    if (normalizedView === "month") {
      const selected = parseEnergyHistoryMonthKey(period.selectedValue);
      if (!selected) {
        return { from: "", to: "", hours: "0" };
      }
      return {
        from: String((selected.year * 10000) + (selected.month * 100) + 1),
        to: String((selected.year * 10000) + (selected.month * 100) + getEnergyHistoryDaysInMonth(selected.year, selected.month)),
        hours: "0",
      };
    }
    if (normalizedView === "year") {
      const year = Number(period.selectedValue);
      if (!Number.isInteger(year)) {
        return { from: "", to: "", hours: "0" };
      }
      return { from: `${year}0101`, to: `${year}1231`, hours: "0" };
    }
    return { from: "", to: "", hours: "0" };
  }

  function getEnergyHistoryRequestQuery() {
    if (!String(state.energyHistoryRaw || "").trim()) {
      return "?meta=1";
    }
    const records = getEnergyHistoryRecords();
    const range = getEnergyHistoryRequestRange(records, state.energyHistoryView || "day");
    const params = new URLSearchParams();
    if (range.from) {
      params.set("from", range.from);
    }
    if (range.to) {
      params.set("to", range.to);
    }
    params.set("hours", range.hours);
    const query = params.toString();
    return query ? `?${query}` : "";
  }

  function setEnergyHistoryPeriodValue(view, value) {
    const normalizedView = normalizeEnergyHistoryView(view);
    if (!isEnergyHistoryPeriodView(normalizedView)) {
      return;
    }
    const records = getEnergyHistoryRecords();
    const bounds = getEnergyHistoryPeriodBounds(records, normalizedView);
    const normalized = normalizeEnergyHistoryPeriodValue(normalizedView, value);
    const nextValue = clampEnergyHistoryPeriodValue(normalized || bounds.max, bounds);
    state.energyHistoryPeriodSelection = {
      ...state.energyHistoryPeriodSelection,
      [normalizedView]: nextValue,
    };
    state.energyHistoryLastFetchAt = 0;
    render();
    requestEnergyHistoryDataRefresh();
  }

  function shiftEnergyHistoryPeriod(view, direction) {
    const normalizedView = normalizeEnergyHistoryView(view);
    if (!isEnergyHistoryPeriodView(normalizedView)) {
      return;
    }
    const records = getEnergyHistoryRecords();
    const period = getEnergyHistoryPeriodControlModel(records, normalizedView);
    const step = Number(direction) < 0 ? -1 : 1;
    let nextValue = period.selectedValue;

    if (normalizedView === "day") {
      const parsed = parseEnergyHistoryDateKey(period.selectedValue);
      nextValue = parsed ? String(getEnergyHistoryDateKeyFromDate(addEnergyHistoryDays(parsed.date, step))) : nextValue;
    } else if (normalizedView === "week") {
      const parsed = parseEnergyHistoryDateKey(period.selectedValue);
      nextValue = parsed ? String(getEnergyHistoryDateKeyFromDate(addEnergyHistoryDays(parsed.date, step * 7))) : nextValue;
    } else if (normalizedView === "month") {
      nextValue = addEnergyHistoryMonths(period.selectedValue, step);
    } else if (normalizedView === "year") {
      nextValue = String(Number(period.selectedValue) + step);
    }

    setEnergyHistoryPeriodValue(normalizedView, nextValue);
  }

  function setEnergyHistoryPeriodToNow(view) {
    const normalizedView = normalizeEnergyHistoryView(view);
    if (!isEnergyHistoryPeriodView(normalizedView)) {
      return;
    }
    const records = getEnergyHistoryRecords();
    const bounds = getEnergyHistoryPeriodBounds(records, normalizedView);
    setEnergyHistoryPeriodValue(normalizedView, bounds.max);
  }

  function getEnergyHistoryCalendarBuckets(records, view, periodModel = getEnergyHistoryPeriodControlModel(records, view)) {
    const normalizedView = normalizeEnergyHistoryView(view);
    const byDate = getEnergyHistoryRecordsByDate(records);
    if (!records.length && normalizedView === "all") {
      return { buckets: [], title: "Geen data", detail: "Lifetime energiehistorie" };
    }

    if (normalizedView === "day") {
      const selected = parseEnergyHistoryDateKey(periodModel.selectedValue);
      if (!selected) {
        return { buckets: [], title: "Geen data", detail: "Lifetime energiehistorie" };
      }
      const hourRecords = getEnergyHistoryHourRecordsForDate(selected.key);
      if (hourRecords.length) {
        const byHour = new Map(hourRecords.map((record) => [record.hour, record]));
        const buckets = [];
        for (let hour = 0; hour < 24; hour += 1) {
          const hourLabel = String(hour);
          const tooltipLabel = `${selected.date.toLocaleDateString("nl-NL", { day: "numeric", month: "long" })} · ${String(hour).padStart(2, "0")}:00 - ${String((hour + 1) % 24).padStart(2, "0")}:00`;
          const bucket = createEnergyHistoryBucket({
            dateKey: selected.key,
            year: selected.year,
            month: selected.month,
            day: selected.day,
            hour,
            label: hourLabel,
            tooltipLabel,
            sortKey: hour,
            source: "hour",
          });
          const record = byHour.get(hour);
          if (record) {
            mergeEnergyHistoryRecordIntoBucket(bucket, record);
          }
          buckets.push(bucket);
        }
        return {
          buckets,
          title: "Dag",
          detail: `${selected.date.toLocaleDateString("nl-NL", { weekday: "long", day: "numeric", month: "long", year: "numeric" })} · uurdata sinds herstart`,
        };
      }
      const record = byDate.get(selected.key);
      const currentDateKey = getEnergyHistoryCurrentDateKeyFromRaw() || getEnergyHistoryTodayKey();
      const label = selected.key === currentDateKey ? "Vandaag" : formatEnergyHistoryDateLabel(selected.key);
      const bucket = createEnergyHistoryBucket({
        dateKey: selected.key,
        year: selected.year,
        month: selected.month,
        day: selected.day,
        label,
        sortKey: selected.key,
        source: "day",
      });
      if (record) {
        mergeEnergyHistoryRecordIntoBucket(bucket, record);
      }
      return {
        buckets: [bucket],
        title: "Dag",
        detail: `${selected.date.toLocaleDateString("nl-NL", { weekday: "long", day: "numeric", month: "long", year: "numeric" })} · dagtotaal`,
      };
    }

    if (normalizedView === "week") {
      const selected = parseEnergyHistoryDateKey(periodModel.selectedValue);
      if (!selected) {
        return { buckets: [], title: "Geen data", detail: "Lifetime energiehistorie" };
      }
      const start = getEnergyHistoryWeekStart(selected.date);
      const buckets = [];
      for (let index = 0; index < 7; index += 1) {
        const date = addEnergyHistoryDays(start, index);
        const dateKey = getEnergyHistoryDateKeyFromDate(date);
        const parsed = parseEnergyHistoryDateKey(dateKey);
        const bucket = createEnergyHistoryBucket({
          dateKey,
          year: parsed.year,
          month: parsed.month,
          day: parsed.day,
          label: formatEnergyHistoryDateLabel(dateKey, "weekday"),
          sortKey: dateKey,
        });
        const record = byDate.get(dateKey);
        if (record) {
          mergeEnergyHistoryRecordIntoBucket(bucket, record);
        }
        buckets.push(bucket);
      }
      return {
        buckets,
        title: "Week",
        detail: formatEnergyHistoryWeekLabel(periodModel.selectedValue),
      };
    }

    if (normalizedView === "month") {
      const selected = parseEnergyHistoryMonthKey(periodModel.selectedValue);
      if (!selected) {
        return { buckets: [], title: "Geen data", detail: "Lifetime energiehistorie" };
      }
      const days = getEnergyHistoryDaysInMonth(selected.year, selected.month);
      const buckets = [];
      for (let day = 1; day <= days; day += 1) {
        const date = getEnergyHistoryDateFromParts(selected.year, selected.month, day);
        const dateKey = getEnergyHistoryDateKeyFromDate(date);
        const bucket = createEnergyHistoryBucket({
          dateKey,
          year: selected.year,
          month: selected.month,
          day,
          label: String(day),
          sortKey: dateKey,
        });
        const record = byDate.get(dateKey);
        if (record) {
          mergeEnergyHistoryRecordIntoBucket(bucket, record);
        }
        buckets.push(bucket);
      }
      return {
        buckets,
        title: "Maand",
        detail: selected.date.toLocaleDateString("nl-NL", { month: "long", year: "numeric" }),
      };
    }

    if (normalizedView === "year") {
      const selectedYear = Number(periodModel.selectedValue);
      if (!Number.isInteger(selectedYear)) {
        return { buckets: [], title: "Geen data", detail: "Lifetime energiehistorie" };
      }
      const buckets = [];
      for (let month = 1; month <= 12; month += 1) {
        const dateKey = (selectedYear * 10000) + (month * 100) + 1;
        const bucket = createEnergyHistoryBucket({
          dateKey,
          year: selectedYear,
          month,
          day: 1,
          label: formatEnergyHistoryDateLabel(dateKey, "month"),
          sortKey: month,
          source: "month",
        });
        records
          .filter((record) => record.year === selectedYear && record.month === month)
          .forEach((record) => mergeEnergyHistoryRecordIntoBucket(bucket, record));
        buckets.push(bucket);
      }
      return {
        buckets,
        title: "Jaar",
        detail: String(selectedYear),
      };
    }

    const years = new Map();
    records.forEach((record) => {
      if (!years.has(record.year)) {
        years.set(record.year, createEnergyHistoryBucket({
          dateKey: (record.year * 10000) + 101,
          year: record.year,
          month: 1,
          day: 1,
          label: String(record.year),
          sortKey: record.year,
          source: "year",
        }));
      }
      mergeEnergyHistoryRecordIntoBucket(years.get(record.year), record);
    });
    const buckets = [...years.values()].sort((a, b) => a.sortKey - b.sortKey);
    return {
      buckets,
      title: "Alles",
      detail: buckets.length ? `${buckets[0].label} - ${buckets[buckets.length - 1].label}` : "Geen data",
    };
  }

  function getEnergyHistorySummary(records) {
    const heatOutputWh = sumEnergyHistoryWh(records, "heatpumpHeatOutputWh");
    const coolingOutputWh = sumEnergyHistoryWh(records, "heatpumpCoolingOutputWh");
    const boilerOutputWh = sumEnergyHistoryWh(records, "boilerHeatOutputWh");
    return {
      electricalInputWh: sumEnergyHistoryWh(records, "electricalInputWh"),
      heatingInputWh: sumEnergyHistoryWh(records, "heatingInputWh"),
      coolingInputWh: sumEnergyHistoryWh(records, "coolingInputWh"),
      heatOutputWh,
      coolingOutputWh,
      boilerOutputWh,
      outputWh: heatOutputWh + coolingOutputWh + boilerOutputWh,
    };
  }

  function getEnergyHistoryHeatpumpShare(summary) {
    const heatpumpWh = Number(summary.heatOutputWh || 0) + Number(summary.coolingOutputWh || 0);
    const boilerWh = Number(summary.boilerOutputWh || 0);
    const total = heatpumpWh + boilerWh;
    if (!Number.isFinite(total) || total <= 0) {
      return Number.NaN;
    }
    return (heatpumpWh / total) * 100;
  }

  function renderEnergyHistoryStat(label, value, note = "") {
    return `
      <div class="oq-energy-history-stat">
        <span>${escapeHtml(label)}</span>
        <strong>${escapeHtml(value)}</strong>
        ${note ? `<p>${escapeHtml(note)}</p>` : ""}
      </div>
    `;
  }

  function renderEnergyHistoryPeriodSelect(periodModel, label, options) {
    const groupedOptions = [];
    options.forEach((option) => {
      const groupLabel = String(option.group || "");
      let group = groupedOptions[groupedOptions.length - 1];
      if (!group || group.label !== groupLabel) {
        group = { label: groupLabel, options: [] };
        groupedOptions.push(group);
      }
      group.options.push(option);
    });
    const optionMarkup = groupedOptions.some((group) => group.label)
      ? groupedOptions.map((group) => group.label
        ? `
          <optgroup label="${escapeHtml(group.label)}">
            ${group.options.map((option) => `
              <option value="${escapeHtml(option.value)}" ${String(option.value) === String(periodModel.selectedValue) ? "selected" : ""}>
                ${escapeHtml(option.label)}
              </option>
            `).join("")}
          </optgroup>
        `
        : group.options.map((option) => `
          <option value="${escapeHtml(option.value)}" ${String(option.value) === String(periodModel.selectedValue) ? "selected" : ""}>
            ${escapeHtml(option.label)}
          </option>
        `).join("")).join("")
      : options.map((option) => `
        <option value="${escapeHtml(option.value)}" ${String(option.value) === String(periodModel.selectedValue) ? "selected" : ""}>
          ${escapeHtml(option.label)}
        </option>
      `).join("");
    return `
      <label class="oq-energy-history-period-field">
        <span>${escapeHtml(label)}</span>
        <select
          class="oq-energy-history-period-input"
          data-oq-energy-history-period-input="${escapeHtml(periodModel.view)}"
        >
          ${optionMarkup}
        </select>
      </label>
    `;
  }

  function renderEnergyHistoryPeriodInput(periodModel) {
    if (periodModel.view === "day") {
      return `
        <label class="oq-energy-history-period-field">
          <span>Datum</span>
          <input
            class="oq-energy-history-period-input"
            type="date"
            value="${escapeHtml(getEnergyHistoryDateInputValue(periodModel.selectedValue))}"
            min="${escapeHtml(getEnergyHistoryDateInputValue(periodModel.minValue))}"
            max="${escapeHtml(getEnergyHistoryDateInputValue(periodModel.maxValue))}"
            data-oq-energy-history-period-input="day"
          >
        </label>
      `;
    }
    if (periodModel.view === "week") {
      return renderEnergyHistoryPeriodSelect(periodModel, "Week", periodModel.options);
    }
    if (periodModel.view === "month") {
      return renderEnergyHistoryPeriodSelect(periodModel, "Maand", periodModel.options);
    }
    if (periodModel.view === "year") {
      return renderEnergyHistoryPeriodSelect(periodModel, "Jaar", periodModel.options);
    }
    return `
      <div class="oq-energy-history-period-field oq-energy-history-period-field--static">
        <span>Periode</span>
        <strong>Volledig bereik</strong>
      </div>
    `;
  }

  function renderEnergyHistoryPeriodControl(periodModel) {
    if (!isEnergyHistoryPeriodView(periodModel.view)) {
      return `
        <div class="oq-energy-history-period oq-energy-history-period--${escapeHtml(periodModel.view)}">
          ${renderEnergyHistoryPeriodInput(periodModel)}
        </div>
      `;
    }

    return `
      <div class="oq-energy-history-period oq-energy-history-period--${escapeHtml(periodModel.view)}">
        ${renderEnergyHistoryPeriodInput(periodModel)}
        <div class="oq-energy-history-period-nav" aria-label="Periode navigatie">
          <button
            type="button"
            class="oq-energy-history-period-button"
            data-oq-action="shift-energy-history-period"
            data-energy-history-direction="-1"
            ${periodModel.canPrevious ? "" : "disabled"}
          >&lt; Vorige</button>
          <button
            type="button"
            class="oq-energy-history-period-button oq-energy-history-period-button--now"
            data-oq-action="select-energy-history-now"
            ${periodModel.isNow ? "disabled" : ""}
          >Nu</button>
          <button
            type="button"
            class="oq-energy-history-period-button"
            data-oq-action="shift-energy-history-period"
            data-energy-history-direction="1"
            ${periodModel.canNext ? "" : "disabled"}
          >Volgende &gt;</button>
        </div>
      </div>
    `;
  }

  function isEnergyHistoryPeriodControlFocused() {
    const active = document.activeElement;
    return Boolean(active && active.closest && active.closest(".oq-energy-history-period"));
  }

  function renderEnergyHistoryViewButtons(activeView) {
    return `
      <div class="oq-energy-history-view-tabs" role="tablist" aria-label="Energiehistorie weergave">
        ${ENERGY_HISTORY_VIEW_OPTIONS.map((option) => {
          const active = option.id === activeView;
          return `
            <button
              type="button"
              class="oq-energy-history-view-tab ${active ? "is-active" : ""}"
              data-oq-action="select-energy-history-view"
              data-energy-history-view="${escapeHtml(option.id)}"
              aria-selected="${active ? "true" : "false"}"
            >${escapeHtml(option.label)}</button>
          `;
        }).join("")}
      </div>
    `;
  }

  function renderEnergyHistoryBalance(summary) {
    const inputWh = Number(summary.electricalInputWh || 0);
    const heatWh = Number(summary.heatOutputWh || 0);
    const coolingWh = Number(summary.coolingOutputWh || 0);
    const boilerWh = Number(summary.boilerOutputWh || 0);
    const boilerTone = boilerWh > 0 ? "boiler" : "boiler-zero";
    const visibleTotal = Math.max(1, inputWh + heatWh + coolingWh + boilerWh);
    const widthOf = (value) => `${Math.max(0, (Number(value || 0) / visibleTotal) * 100).toFixed(2)}%`;
    const share = getEnergyHistoryHeatpumpShare(summary);
    return `
      <div class="oq-energy-history-balance">
        <div class="oq-energy-history-balance-bar" aria-label="Energiebalans">
          <span class="oq-energy-history-balance-part oq-energy-history-balance-part--input" style="width: ${widthOf(inputWh)}"></span>
          <span class="oq-energy-history-balance-part oq-energy-history-balance-part--heat" style="width: ${widthOf(heatWh)}"></span>
          <span class="oq-energy-history-balance-part oq-energy-history-balance-part--cooling" style="width: ${widthOf(coolingWh)}"></span>
          <span class="oq-energy-history-balance-part oq-energy-history-balance-part--${escapeHtml(boilerTone)}" style="width: ${widthOf(boilerWh)}"></span>
          <strong>${Number.isFinite(share) ? `${Math.round(share)}%` : "—"}</strong>
        </div>
        <div class="oq-energy-history-balance-list">
          <span><i class="oq-energy-history-legend-dot oq-energy-history-legend-dot--heat"></i>${escapeHtml(formatEnergyAdaptiveWh(heatWh, 1))} warmte door warmtepomp</span>
          <span><i class="oq-energy-history-legend-dot oq-energy-history-legend-dot--input"></i>${escapeHtml(formatEnergyAdaptiveWh(inputWh, 1))} verbruikte elektriciteit</span>
          <span><i class="oq-energy-history-legend-dot oq-energy-history-legend-dot--cooling"></i>${escapeHtml(formatEnergyAdaptiveWh(coolingWh, 1))} koeling</span>
          <span><i class="oq-energy-history-legend-dot oq-energy-history-legend-dot--${escapeHtml(boilerTone)}"></i>${escapeHtml(formatEnergyAdaptiveWh(boilerWh, 1))} cv-ketel</span>
        </div>
      </div>
    `;
  }

  function getEnergyHistoryNiceAxisMax(maxWh) {
    const maxKwh = Math.max(1, Number(maxWh || 0) / 1000);
    const magnitude = Math.pow(10, Math.floor(Math.log10(maxKwh)));
    const normalized = maxKwh / magnitude;
    const nice = normalized <= 1.5 ? 1.5 : normalized <= 3 ? 3 : normalized <= 6 ? 6 : 10;
    return nice * magnitude * 1000;
  }

  function formatEnergyHistoryAxisValue(wh) {
    const value = Number(wh);
    if (!Number.isFinite(value)) {
      return "";
    }
    if (value >= 999500) {
      return `${Number((value / 1000000).toFixed(1))}`;
    }
    return `${Number((value / 1000).toFixed(1))}`;
  }

  function getEnergyHistoryAxisUnit(axisMaxWh) {
    return axisMaxWh >= 999500 ? "MWh" : "kWh";
  }

  function getEnergyHistoryChartModel(records) {
    const width = 1280;
    const height = 260;
    const left = 44;
    const right = 18;
    const top = 26;
    const bottom = 38;
    const plotWidth = width - left - right;
    const plotHeight = height - top - bottom;
    const maxWh = Math.max(1000, ...records.map(getEnergyHistoryStackWh));
    const axisMax = getEnergyHistoryNiceAxisMax(maxWh);
    const barSlot = records.length ? plotWidth / records.length : plotWidth;
    const barWidth = Math.max(6, Math.min(38, barSlot * 0.68));
    const yOf = (wh) => top + ((1 - Math.min(1, Math.max(0, Number(wh || 0) / axisMax))) * plotHeight);

    return { width, height, left, right, top, bottom, plotWidth, plotHeight, axisMax, barSlot, barWidth, yOf };
  }

  function getEnergyHistoryBucketTooltip(record) {
    const heatCop = formatEnergyRatio(record.heatpumpHeatOutputWh, record.heatingInputWh);
    const coolingEer = formatEnergyRatio(record.heatpumpCoolingOutputWh, record.coolingInputWh);
    const overall = formatEnergyRatio(getEnergyHistoryOutputWh(record), record.electricalInputWh);
    return [
      record.tooltipLabel || record.label || formatEnergyHistoryDateLabel(record.dateKey),
      `Elektrisch: ${formatEnergyAdaptiveWh(record.electricalInputWh, 1)}`,
      `Warmtepomp warmte: ${formatEnergyAdaptiveWh(record.heatpumpHeatOutputWh, 1)}`,
      `Warmtepomp koeling: ${formatEnergyAdaptiveWh(record.heatpumpCoolingOutputWh, 1)}`,
      `Cv-ketel: ${formatEnergyAdaptiveWh(record.boilerHeatOutputWh, 1)}`,
      `COP verwarmen: ${heatCop}`,
      `EER koelen: ${coolingEer}`,
      `Output / elektrisch: ${overall}`,
    ].join("\n");
  }

  function renderEnergyHistoryChart(records, activeView = "") {
    if (!records.length) {
      return `
        <div class="oq-energy-history-empty">
          <strong>Geen opgeslagen dagrecords</strong>
          <span>Zet lifetime energiehistorie aan om langere grafieken op te bouwen.</span>
        </div>
      `;
    }

    const model = getEnergyHistoryChartModel(records);
    const axisUnit = getEnergyHistoryAxisUnit(model.axisMax);
    const gridValues = [0, 0.25, 0.5, 0.75, 1].map((fraction) => model.axisMax * fraction);
    const bars = records.map((record, index) => {
      const center = model.left + (model.barSlot * index) + (model.barSlot / 2);
      const stackParts = [
        { key: "electricalInputWh", className: "input", label: "Verbruikte elektriciteit" },
        { key: "heatpumpHeatOutputWh", className: "heat", label: "Warmte door warmtepomp" },
        { key: "heatpumpCoolingOutputWh", className: "cooling", label: "Koeling warmtepomp" },
        { key: "boilerHeatOutputWh", className: "boiler", label: "Cv-ketel" },
      ];
      let stackCursor = model.height - model.bottom;
      const stack = stackParts.map((part) => {
        const wh = getEnergyHistoryRecordWh(record, part.key);
        if (wh <= 0) {
          return "";
        }
        const partHeight = ((wh / model.axisMax) * model.plotHeight);
        stackCursor -= partHeight;
        return `
          <rect
            x="${(center - model.barWidth / 2).toFixed(1)}"
            y="${stackCursor.toFixed(1)}"
            width="${model.barWidth.toFixed(1)}"
            height="${Math.max(1.4, partHeight).toFixed(1)}"
            class="oq-energy-history-bar oq-energy-history-bar--${part.className}"
          >
            <title>${escapeHtml(`${record.label} · ${part.label}: ${formatEnergyAdaptiveWh(wh, 1)}`)}</title>
          </rect>
        `;
      }).join("");
      const showLabel = records.length <= 12 || index === 0 || index === records.length - 1 || index % 3 === 0;
      const label = showLabel
        ? `<text x="${center.toFixed(1)}" y="${model.height - 18}" text-anchor="middle" class="oq-energy-history-axis-label">${escapeHtml(record.label || formatEnergyHistoryDateLabel(record.dateKey))}</text>`
        : "";
      const tooltip = getEnergyHistoryBucketTooltip(record);
      return `
        <g class="oq-energy-history-bar-group" data-oq-energy-history-tip="${escapeHtml(tooltip)}" tabindex="0">
          <title>${escapeHtml(tooltip)}</title>
          <rect
            x="${(center - model.barWidth / 2 - 4).toFixed(1)}"
            y="${model.top.toFixed(1)}"
            width="${(model.barWidth + 8).toFixed(1)}"
            height="${model.plotHeight.toFixed(1)}"
            class="oq-energy-history-hit"
          ></rect>
          ${stack}
        </g>
        ${label}
      `;
    }).join("");

    return `
      <svg class="oq-energy-history-chart oq-energy-history-chart--${escapeHtml(normalizeEnergyHistoryView(activeView))}" viewBox="0 0 ${model.width} ${model.height}" role="img" aria-label="Energiehistorie">
        <rect x="0" y="0" width="${model.width}" height="${model.height}" rx="18" class="oq-energy-history-chart-bg"></rect>
        <text x="${model.left}" y="18" class="oq-energy-history-axis-unit">${escapeHtml(axisUnit)}</text>
        ${gridValues.map((value) => {
          const y = model.yOf(value);
          return `
            <line x1="${model.left}" y1="${y.toFixed(1)}" x2="${model.width - model.right}" y2="${y.toFixed(1)}" class="oq-energy-history-grid-line"></line>
            <text x="${model.left - 10}" y="${y.toFixed(1)}" text-anchor="end" dominant-baseline="middle" class="oq-energy-history-axis-label">${escapeHtml(formatEnergyHistoryAxisValue(value))}</text>
          `;
        }).join("")}
        ${bars}
      </svg>
    `;
  }

  function renderEnergyHistoryLegend(summary = null) {
    const boilerTone = Number(summary?.boilerOutputWh || 0) > 0 ? "boiler" : "boiler-zero";
    const items = [
      ["input", "Elektrisch"],
      ["heat", "Warmte"],
      ["cooling", "Koeling"],
      [boilerTone, "Ketel"],
    ];
    return `
      <div class="oq-energy-history-legend">
        ${items.map(([tone, label]) => `
          <span><i class="oq-energy-history-legend-dot oq-energy-history-legend-dot--${escapeHtml(tone)}"></i>${escapeHtml(label)}</span>
        `).join("")}
      </div>
    `;
  }

  function getEnergyHistoryPanelModel() {
    const records = getEnergyHistoryRecords();
    const activeView = normalizeEnergyHistoryView(state.energyHistoryView);
    const periodControl = getEnergyHistoryPeriodControlModel(records, activeView);
    const viewModel = getEnergyHistoryCalendarBuckets(records, activeView, periodControl);
    const summary = getEnergyHistorySummary(viewModel.buckets);
    return { records, buckets: viewModel.buckets, viewModel, periodControl, summary, activeView };
  }

  function getEnergyHistoryRenderSignature(model = getEnergyHistoryPanelModel()) {
    return getRenderSignature({
      energyHistorySignature: state.energyHistorySignature || "",
      energyHistoryError: state.energyHistoryError || "",
      activeView: model.activeView,
      periodView: model.periodControl.view,
      periodValue: model.periodControl.selectedValue,
      periodMin: model.periodControl.minValue,
      periodMax: model.periodControl.maxValue,
      recordCount: model.records.length,
      bucketCount: model.buckets.length,
      latestDate: model.records[model.records.length - 1]?.dateKey || 0,
      currentValues: ENERGY_HISTORY_VALUE_KEYS.map((key) => model.buckets[model.buckets.length - 1]?.[key] ?? null),
    });
  }

  function renderEnergyHistoryPanel(model = getEnergyHistoryPanelModel()) {
    const summary = model.summary;
    const oldest = model.buckets[0]?.dateKey ? formatEnergyHistoryDateLabel(model.buckets[0].dateKey) : "—";
    const newest = model.buckets[model.buckets.length - 1]?.dateKey ? formatEnergyHistoryDateLabel(model.buckets[model.buckets.length - 1].dateKey) : "—";
    return `
      <section class="oq-energy-history" data-render-signature="${escapeHtml(getEnergyHistoryRenderSignature(model))}">
        <div class="oq-energy-history-head">
          <div>
            <p class="oq-helper-label">Historie</p>
            <h3>Energiehistorie</h3>
            <p>${escapeHtml(model.viewModel.title)} · ${escapeHtml(model.viewModel.detail)}</p>
          </div>
        </div>
        <div class="oq-energy-history-controls">
          ${renderEnergyHistoryViewButtons(model.activeView)}
          ${renderEnergyHistoryPeriodControl(model.periodControl)}
        </div>
        ${state.energyHistoryError ? `<p class="oq-energy-history-error">${escapeHtml(state.energyHistoryError)}</p>` : ""}
        <div class="oq-energy-history-stats">
          ${renderEnergyHistoryStat("Gemiddelde COP", formatEnergyRatio(summary.heatOutputWh, summary.heatingInputWh), `${escapeHtml(oldest)} - ${escapeHtml(newest)}`)}
          ${renderEnergyHistoryStat("Elektrisch", formatEnergyAdaptiveWh(summary.electricalInputWh, 1), "verbruikt")}
          ${renderEnergyHistoryStat("Warmtepomp", formatEnergyAdaptiveWh(summary.heatOutputWh + summary.coolingOutputWh, 1), "warmte en koeling")}
          ${renderEnergyHistoryStat("Cv-ketel", formatEnergyAdaptiveWh(summary.boilerOutputWh, 1), "thermisch")}
        </div>
        ${renderEnergyHistoryBalance(summary)}
        <div class="oq-energy-history-chart-head">
          <h4>${escapeHtml(model.viewModel.title)}</h4>
          <span>${escapeHtml(model.viewModel.detail)}</span>
        </div>
        <div class="oq-energy-history-chart-wrap">
          ${renderEnergyHistoryChart(model.buckets, model.activeView)}
          <div class="oq-energy-history-tooltip" aria-hidden="true"></div>
        </div>
        ${renderEnergyHistoryLegend(summary)}
      </section>
    `;
  }

  function handleEnergyHistoryPointerMove(event) {
    if (state.appView !== "results" || !state.root) {
      return;
    }
    const target = event.target.closest?.("[data-oq-energy-history-tip]");
    const panel = target?.closest?.(".oq-energy-history-chart-wrap") || state.root.querySelector(".oq-energy-history-chart-wrap");
    const tooltip = panel?.querySelector(".oq-energy-history-tooltip");
    if (!target || !panel || !tooltip) {
      if (tooltip) {
        tooltip.classList.remove("is-visible");
      }
      return;
    }

    const lines = String(target.dataset.oqEnergyHistoryTip || "").split(/\n/).filter(Boolean);
    if (!lines.length) {
      tooltip.classList.remove("is-visible");
      return;
    }
    tooltip.innerHTML = `
      <strong>${escapeHtml(lines[0])}</strong>
      ${lines.slice(1).map((line) => `<span>${escapeHtml(line)}</span>`).join("")}
    `;
    const rect = panel.getBoundingClientRect();
    tooltip.classList.add("is-visible");
    const tooltipRect = tooltip.getBoundingClientRect();
    const left = Math.min(Math.max(8, event.clientX - rect.left + 14), Math.max(8, rect.width - tooltipRect.width - 8));
    const top = Math.min(Math.max(8, event.clientY - rect.top - tooltipRect.height - 12), Math.max(8, rect.height - tooltipRect.height - 8));
    tooltip.style.transform = `translate(${left.toFixed(0)}px, ${top.toFixed(0)}px)`;
  }

  function renderEnergyView() {
    return `
      <section class="oq-helper-panel oq-helper-panel--flush">
        <div class="oq-overview-board oq-overview-board--${escapeHtml(state.overviewTheme)}">
          <div class="oq-overview-head">
          <div>
            <p class="oq-helper-label">Energie</p>
            <h2 class="oq-helper-section-title">Actuele energiestromen</h2>
            <p class="oq-helper-section-copy">Bekijk actuele energiestromen, dagtotalen en cumulatieve tellers.</p>
          </div>
          </div>
          ${renderEnergySection()}
        </div>
      </section>
    `;
  }

  function renderResultsView() {
    return `
      <section class="oq-helper-panel oq-helper-panel--flush">
        <div class="oq-overview-board oq-overview-board--${escapeHtml(state.overviewTheme)}">
          <div class="oq-overview-head">
            <div>
              <p class="oq-helper-label">Resultaten</p>
              <h2 class="oq-helper-section-title">Historische resultaten</h2>
              <p class="oq-helper-section-copy">Vergelijk opbrengst, verbruik, rendement en COP/EER per periode.</p>
            </div>
          </div>
          ${renderEnergyHistoryPanel()}
        </div>
      </section>
    `;
  }

  function patchEnergyDom() {
    if (!state.root || state.appView !== "energy") {
      return false;
    }

    const board = state.root.querySelector(".oq-overview-board");
    const energy = board ? board.querySelector(".oq-overview-energy") : null;
    if (!board || !energy) {
      return false;
    }

    const nextBoardClass = `oq-overview-board oq-overview-board--${state.overviewTheme}`;
    if (board.className !== nextBoardClass) {
      board.className = nextBoardClass;
    }

    const model = getEnergySectionModel();
    const energyChanged = replaceOuterHtmlIfSignatureChanged(
      energy,
      getEnergySectionRenderSignature(model),
      renderEnergySection(model),
    );
    return energyChanged;
  }

  function patchResultsDom() {
    if (!state.root || state.appView !== "results") {
      return false;
    }

    const board = state.root.querySelector(".oq-overview-board");
    const history = board ? board.querySelector(".oq-energy-history") : null;
    if (!board || !history) {
      return false;
    }

    const nextBoardClass = `oq-overview-board oq-overview-board--${state.overviewTheme}`;
    if (board.className !== nextBoardClass) {
      board.className = nextBoardClass;
    }

    const historyModel = getEnergyHistoryPanelModel();
    const periodControlFocused = isEnergyHistoryPeriodControlFocused();
    const historyChanged = periodControlFocused
      ? false
      : replaceOuterHtmlIfSignatureChanged(
        history,
        getEnergyHistoryRenderSignature(historyModel),
        renderEnergyHistoryPanel(historyModel),
      );
    return historyChanged || periodControlFocused;
  }
