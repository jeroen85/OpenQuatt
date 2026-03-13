[CmdletBinding()]
param(
    [string[]]$Configs = @(
        "openquatt_duo_waveshare.yaml",
        "openquatt_duo_heatpump_listener.yaml",
        "openquatt_single_waveshare.yaml",
        "openquatt_single_heatpump_listener.yaml"
    ),
    [switch]$ConfigOnly,
    [string]$VenvDir = ".venv",
    [int]$Jobs = 2,
    [string]$PythonExe = ""
)

$ErrorActionPreference = "Stop"

if (-not $PythonExe) {
    $Candidates = @(
        @{ Cmd = (Join-Path $env:LOCALAPPDATA "Programs\Python\Python312\python.exe"); Args = @() },
        @{ Cmd = "py"; Args = @("-3") },
        @{ Cmd = "python"; Args = @() }
    )

    foreach ($Candidate in $Candidates) {
        if ($Candidate.Cmd -match "[\\/]" -and -not (Test-Path $Candidate.Cmd)) {
            continue
        }

        try {
            & $Candidate.Cmd @($Candidate.Args + @("--version")) *> $null
            if ($LASTEXITCODE -eq 0) {
                $PythonExe = $Candidate.Cmd
                $PythonArgs = $Candidate.Args
                break
            }
        } catch {
            continue
        }
    }
} else {
    $PythonArgs = @()
}

if (-not $PythonExe) {
    throw "Python 3 is niet gevonden. Installeer Python lokaal of zorg dat 'python' in PATH staat."
}

$RootDir = Split-Path -Parent $PSScriptRoot
$Arguments = @(
    (Join-Path $RootDir "scripts\dev.py"),
    "validate",
    "--venv-dir",
    $VenvDir,
    "--jobs",
    "$Jobs"
)

if ($ConfigOnly) {
    $Arguments += "--config-only"
}

foreach ($Config in $Configs) {
    $Arguments += @("--config", $Config)
}

& $PythonExe @($PythonArgs + $Arguments)
if ($LASTEXITCODE -ne 0) {
    throw "Validate command failed."
}
