"""Export Quatt CIC insights from Home Assistant to OpenQuatt JSON/CSV files."""

from datetime import datetime as dt, timedelta, timezone
from zoneinfo import ZoneInfo


TIME_KEYS = ("timestamp", "time", "date", "datetime", "createdAt")
SUMMARY_KEYS = {
    "totalHpHeat": "total_hp_heat_wh",
    "totalHpElectric": "total_hp_electric_wh",
    "totalBoilerHeat": "total_boiler_heat_wh",
    "totalBoilerGas": "total_boiler_gas_m3",
    "averageCOP": "average_cop",
}
GRAPH_KEYS = {
    "graph": "energy",
    "outsideTemperatureGraph": "outside_temperature",
    "waterTemperatureGraph": "water_temperature",
    "roomTemperatureGraph": "room_temperature",
}
GRAPH_FIELD_NAMES = set(GRAPH_KEYS.keys())
GRAPH_VALUE_KEYS = {
    "energy": {
        "hpElectric": "energy_hp_electric",
        "hpHeat": "energy_hp_heat",
        "boilerHeat": "energy_boiler_heat",
        "boilerGas": "energy_boiler_gas",
        "cop": "cop",
    },
    "outside_temperature": {
        "temperatureOutside": "outside_temperature_c",
        "minTemperatureOutside": "outside_temperature_min_c",
        "maxTemperatureOutside": "outside_temperature_max_c",
    },
    "water_temperature": {
        "waterTemperature": "water_temperature_c",
        "minWaterTemperature": "water_temperature_min_c",
        "maxWaterTemperature": "water_temperature_max_c",
    },
    "room_temperature": {
        "roomTemperature": "room_temperature_c",
        "minRoomTemperature": "room_temperature_min_c",
        "maxRoomTemperature": "room_temperature_max_c",
    },
}
DAILY_IMPORT_KEYS = (
    "energy_hp_electric",
    "energy_hp_heat",
    "energy_boiler_heat",
)


def _now_utc():
    return dt.now(timezone.utc).replace(microsecond=0).isoformat().replace("+00:00", "Z")


def _to_snake(value):
    text = str(value)
    out = []
    previous_lower_or_digit = False

    for char in text:
        if char.isupper() and previous_lower_or_digit:
            out.append("_")
        if char.isalnum():
            out.append(char.lower())
            previous_lower_or_digit = char.islower() or char.isdigit()
        else:
            if out and out[-1] != "_":
                out.append("_")
            previous_lower_or_digit = False

    return "".join(out).strip("_")


def _is_scalar(value):
    return value is None or isinstance(value, (str, int, float, bool))


def _find_timestamp(row):
    for key in TIME_KEYS:
        if key in row and row[key] not in (None, ""):
            return str(row[key])
    return None


def _get_response_data(response):
    if isinstance(response, dict) and isinstance(response.get("service_response"), dict):
        return response["service_response"]
    return response


def _summary_from_data(data):
    data = data if isinstance(data, dict) else {}
    summary = {}

    for source_key, target_key in SUMMARY_KEYS.items():
        if source_key in data:
            summary[target_key] = data[source_key]

    for key, value in data.items():
        if key in TIME_KEYS or key in GRAPH_FIELD_NAMES or key in ("from", "to"):
            continue
        if key in SUMMARY_KEYS:
            continue
        if _is_scalar(value):
            summary[_to_snake(key)] = value

    return summary


def _copy_graph_values(sample, prefix, row):
    for key, value in row.items():
        if key in TIME_KEYS:
            continue
        name = GRAPH_VALUE_KEYS.get(prefix, {}).get(key, f"{prefix}_{_to_snake(key)}")
        sample[name] = value if _is_scalar(value) else str(value)


def _normalise_samples(data):
    samples_by_timestamp = {}

    if not isinstance(data, dict):
        return []

    for graph_key, prefix in GRAPH_KEYS.items():
        rows = data.get(graph_key)
        if not isinstance(rows, list):
            continue

        for row in rows:
            if not isinstance(row, dict):
                continue
            timestamp = _find_timestamp(row)
            if not timestamp:
                continue

            sample = samples_by_timestamp.setdefault(timestamp, {"timestamp": timestamp})
            _copy_graph_values(sample, prefix, row)

    return [samples_by_timestamp[key] for key in sorted(samples_by_timestamp.keys())]


def _normalise_payload(data, generated_at, from_date, timeframe, advanced_insights, include_raw):
    data = data if isinstance(data, dict) else {}

    payload = {
        "schema": "openquatt.quatt_insights.v1",
        "source": {
            "producer": "home-assistant",
            "integration": "home-assistant-quatt",
            "service": "quatt.get_cic_insights",
        },
        "generated_at": generated_at,
        "query": {
            "from_date": from_date,
            "timeframe": timeframe,
            "advanced_insights": advanced_insights,
        },
        "period": {
            "from": data.get("from", from_date),
            "to": data.get("to"),
        },
        "summary": _summary_from_data(data),
        "samples": _normalise_samples(data),
    }

    if include_raw:
        payload["raw"] = data

    return payload


def _normalise_day(data, day_date, include_raw):
    data = data if isinstance(data, dict) else {}

    day = {
        "date": day_date,
        "period": {
            "from": data.get("from", day_date),
            "to": data.get("to"),
        },
        "summary": _summary_from_data(data),
        "samples": _normalise_samples(data),
    }

    if include_raw:
        day["raw"] = data

    return day


def _normalise_daily_payload(
    days,
    generated_at,
    from_date,
    to_date,
    missing_until_date,
    advanced_insights,
    include_raw,
    source_timeframe,
    daily_source,
):
    missing_days = _missing_days(days, _parse_date(from_date), missing_until_date)
    return {
        "schema": "openquatt.quatt_insights_daily.v1",
        "source": {
            "producer": "home-assistant",
            "integration": "home-assistant-quatt",
            "service": "quatt.get_cic_insights",
        },
        "generated_at": generated_at,
        "query": {
            "from_date": from_date,
            "to_date": to_date,
            "timeframe": source_timeframe,
            "daily_source": daily_source,
            "advanced_insights": advanced_insights,
            "include_raw": include_raw,
        },
        "missing_days": missing_days,
        "days": days,
    }

def _parse_date(value):
    return dt.strptime(str(value)[:10], "%Y-%m-%d").date()


def _format_date(value):
    return value.isoformat()


def _date_range(start_date, end_date):
    dates = []
    current = start_date
    while current <= end_date:
        dates.append(current)
        current += timedelta(days=1)
    return dates


def _missing_days(days, start_date, end_date):
    available_days = {day.get("date") for day in days}
    return [
        _format_date(day)
        for day in _date_range(start_date, end_date)
        if _format_date(day) not in available_days
    ]


def _month_range(start_date, end_date):
    months = []
    current = start_date.replace(day=1)
    end_month = end_date.replace(day=1)
    while current <= end_month:
        months.append(current)
        year = current.year + (1 if current.month == 12 else 0)
        month = 1 if current.month == 12 else current.month + 1
        current = current.replace(year=year, month=month, day=1)
    return months


def _local_date_from_timestamp(timestamp, local_timezone):
    text = str(timestamp)
    if text.endswith("Z"):
        text = text[:-1] + "+00:00"
    try:
        return dt.fromisoformat(text).astimezone(ZoneInfo(local_timezone)).date().isoformat()
    except Exception:
        return str(timestamp)[:10]


def _today(local_timezone):
    try:
        return dt.now(ZoneInfo(local_timezone)).date()
    except Exception:
        return dt.now().date()


def _normalise_days_from_month(data, start_date, end_date, include_raw, local_timezone):
    days = []
    samples = _normalise_samples(data)

    for sample in samples:
        timestamp = sample.get("timestamp")
        if not timestamp:
            continue

        day_date = _local_date_from_timestamp(timestamp, local_timezone)
        parsed_day_date = _parse_date(day_date)
        if parsed_day_date < start_date or parsed_day_date > end_date:
            continue

        day = {"date": day_date}
        for key in DAILY_IMPORT_KEYS:
            if key in sample:
                value = sample[key]
                day[key] = value

        if include_raw:
            day["raw_sample"] = sample

        days.append(day)

    return days


def _sample_count(payload):
    if isinstance(payload.get("days"), list):
        return len(payload["days"])
    return len(payload.get("samples", []))


def _public_url(path):
    prefix = "/config/www/"
    if isinstance(path, str) and path.startswith(prefix):
        return "/local/" + path[len(prefix):]
    return None


@pyscript_executor
def _write_export_files(output_dir, base_name, payload):
    import csv
    import json
    import os

    safe_base = "".join(
        char if char.isalnum() or char in ("-", "_") else "_"
        for char in str(base_name or "openquatt-quatt-insights")
    ).strip("_")
    if not safe_base:
        safe_base = "openquatt-quatt-insights"

    os.makedirs(output_dir, exist_ok=True)

    json_path = os.path.join(output_dir, safe_base + ".json")
    csv_path = os.path.join(output_dir, safe_base + ".csv")

    tmp_json_path = json_path + ".tmp"
    with open(tmp_json_path, "w", encoding="utf-8") as handle:
        json.dump(payload, handle, ensure_ascii=False, indent=2)
        handle.write("\n")
    os.replace(tmp_json_path, json_path)

    if isinstance(payload.get("days"), list):
        rows = []
        for day in payload["days"]:
            row = {
                key: value
                for key, value in day.items()
                if key != "raw_sample"
            }
            rows.append(row)
    else:
        rows = payload.get("samples", [])

    fieldnames = []
    for preferred in ("date",):
        if any(preferred in row for row in rows):
            fieldnames.append(preferred)

    for row in rows:
        for key in row.keys():
            if key not in fieldnames:
                fieldnames.append(key)

    tmp_csv_path = csv_path + ".tmp"
    with open(tmp_csv_path, "w", encoding="utf-8", newline="") as handle:
        writer = csv.DictWriter(handle, fieldnames=fieldnames)
        writer.writeheader()
        for row in rows:
            writer.writerow(row)
    os.replace(tmp_csv_path, csv_path)

    return {
        "json_path": json_path,
        "csv_path": csv_path,
    }


@service("pyscript.openquatt_export_quatt_insights", supports_response="optional")
def openquatt_export_quatt_insights(
    from_date="2024-01-01",
    to_date="",
    timeframe="all",
    daily=False,
    daily_source="month",
    advanced_insights=True,
    output_dir="/config/www/openquatt-insights",
    base_name="openquatt-quatt-insights",
    include_raw=False,
    day_delay_ms=750,
    local_timezone="Europe/Amsterdam",
):
    """yaml
name: OpenQuatt export Quatt insights
description: Export Quatt CiC insights from home-assistant-quatt as OpenQuatt import JSON and CSV.
fields:
  from_date:
    description: First date to export.
    example: "2024-01-01"
    selector:
      date:
  to_date:
    description: Last date to export when daily mode is enabled. Defaults to today.
    example: "2024-01-31"
    selector:
      date:
  timeframe:
    description: Quatt insights timeframe. Daily mode always uses day.
    default: all
    selector:
      select:
        options:
          - all
          - day
          - week
          - month
          - year
  daily:
    description: Export every day separately into one JSON file.
    default: false
    selector:
      boolean:
  daily_source:
    description: Source timeframe for daily export. Use month to get daily rows with fewer API calls.
    default: month
    selector:
      select:
        options:
          - month
          - day
  advanced_insights:
    description: Request advanced Quatt insights.
    default: true
    selector:
      boolean:
  output_dir:
    description: Directory on the Home Assistant host where files are written.
    example: /config/www/openquatt-insights
    selector:
      text:
  base_name:
    description: File base name without extension.
    example: openquatt-quatt-insights
    selector:
      text:
  include_raw:
    description: Include the raw Quatt response in the JSON export.
    default: false
    selector:
      boolean:
  day_delay_ms:
    description: Delay between Quatt API calls during daily export.
    default: 750
    selector:
      number:
        min: 0
        max: 5000
        unit_of_measurement: ms
  local_timezone:
    description: Timezone used to map Quatt UTC timestamps to local days.
    default: Europe/Amsterdam
    selector:
      text:
"""
    valid_timeframes = ("all", "day", "week", "month", "year")
    if timeframe not in valid_timeframes:
        raise ValueError(f"timeframe must be one of {valid_timeframes}")
    if daily_source not in ("month", "day"):
        raise ValueError("daily_source must be month or day")

    if not service.has_service("quatt", "get_cic_insights"):
        raise RuntimeError("Home Assistant service quatt.get_cic_insights is not available")

    generated_at = _now_utc()

    if daily:
        start_date = _parse_date(from_date)
        end_date = _parse_date(to_date) if to_date else dt.now().date()
        if end_date < start_date:
            raise ValueError("to_date must be equal to or after from_date")

        if daily_source == "month":
            days_by_date = {}
            month_starts = _month_range(start_date, end_date)

            for index, month_start in enumerate(month_starts):
                month_start_text = _format_date(month_start)
                response = service.call(
                    "quatt",
                    "get_cic_insights",
                    blocking=True,
                    return_response=True,
                    from_date=month_start_text,
                    timeframe="month",
                    advanced_insights=advanced_insights,
                )
                data = _get_response_data(response)
                month_days = _normalise_days_from_month(
                    data,
                    start_date,
                    end_date,
                    include_raw,
                    local_timezone,
                )

                for day in month_days:
                    days_by_date[day["date"]] = day

                if day_delay_ms and index < len(month_starts) - 1:
                    task.sleep(float(day_delay_ms) / 1000.0)

            days = [days_by_date[key] for key in sorted(days_by_date.keys())]
            source_timeframe = "month"
        else:
            days = []
            for day_date in _date_range(start_date, end_date):
                day_date_text = _format_date(day_date)
                response = service.call(
                    "quatt",
                    "get_cic_insights",
                    blocking=True,
                    return_response=True,
                    from_date=day_date_text,
                    timeframe="day",
                    advanced_insights=advanced_insights,
                )
                days.append(_normalise_day(_get_response_data(response), day_date_text, include_raw))
                if day_delay_ms and day_date < end_date:
                    task.sleep(float(day_delay_ms) / 1000.0)
            source_timeframe = "day"

        payload = _normalise_daily_payload(
            days,
            generated_at,
            _format_date(start_date),
            _format_date(end_date),
            min(end_date, _today(local_timezone)),
            advanced_insights,
            include_raw,
            source_timeframe,
            daily_source,
        )
    else:
        response = service.call(
            "quatt",
            "get_cic_insights",
            blocking=True,
            return_response=True,
            from_date=from_date,
            timeframe=timeframe,
            advanced_insights=advanced_insights,
        )

        data = _get_response_data(response)
        payload = _normalise_payload(
            data,
            generated_at,
            from_date,
            timeframe,
            advanced_insights,
            include_raw,
        )

    files = _write_export_files(output_dir, base_name, payload)
    sample_count = _sample_count(payload)

    result = {
        "generated_at": generated_at,
        "json_path": files["json_path"],
        "csv_path": files["csv_path"],
        "json_url": _public_url(files["json_path"]),
        "csv_url": _public_url(files["csv_path"]),
        "day_count": len(payload.get("days", [])),
        "missing_day_count": len(payload.get("missing_days", [])),
        "sample_count": sample_count,
    }
    if "summary" in payload:
        result["summary"] = payload["summary"]

    state.set("pyscript.openquatt_quatt_insights_export", generated_at, result)
    log.info(
        "Exported Quatt insights for OpenQuatt: "
        f"{result['day_count']} days, {result['missing_day_count']} missing days, "
        f"{result['sample_count']} samples, "
        f"json={result['json_path']}, csv={result['csv_path']}"
    )

    return result
