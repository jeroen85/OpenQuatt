[CmdletBinding()]
param(
    [string]$PythonExe = "",
    [string]$VenvDir = ".venv"
)

$ErrorActionPreference = "Stop"

$RootDir = Split-Path -Parent $PSScriptRoot
$RequirementsFile = Join-Path $RootDir ".github\requirements-esphome.txt"

if (-not $PythonExe) {
    $PythonExe = Join-Path $env:LOCALAPPDATA "Programs\Python\Python312\python.exe"
}

if (-not (Test-Path $PythonExe -PathType Leaf)) {
    throw "Python executable not found: $PythonExe"
}

$ResolvedVenvDir = if ([System.IO.Path]::IsPathRooted($VenvDir)) {
    $VenvDir
} else {
    Join-Path $RootDir $VenvDir
}

Write-Host "Using Python: $PythonExe"
Write-Host "Virtual environment: $ResolvedVenvDir"

& $PythonExe -m venv $ResolvedVenvDir
if ($LASTEXITCODE -ne 0) {
    throw "Failed to create virtual environment."
}

$VenvPython = Join-Path $ResolvedVenvDir "Scripts\python.exe"
$VenvEspHome = Join-Path $ResolvedVenvDir "Scripts\esphome.exe"

& $VenvPython -m pip install --upgrade pip
if ($LASTEXITCODE -ne 0) {
    throw "Failed to upgrade pip."
}

& $VenvPython -m pip install -r $RequirementsFile
if ($LASTEXITCODE -ne 0) {
    throw "Failed to install ESPHome requirements."
}

& $VenvEspHome version
if ($LASTEXITCODE -ne 0) {
    throw "ESPHome installation did not validate correctly."
}

Write-Host ""
Write-Host "Local ESPHome environment is ready."
Write-Host "Bootstrap again: powershell -ExecutionPolicy Bypass -File .\scripts\bootstrap_esphome_local.ps1"
Write-Host "Validate/compile: powershell -ExecutionPolicy Bypass -File .\scripts\validate_local.ps1"