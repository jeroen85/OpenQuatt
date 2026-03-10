[CmdletBinding()]
param(
    [int]$Port = 8000,
    [string]$BindHost = "127.0.0.1",
    [string]$FirmwareDir = "",
    [switch]$Keep,
    [switch]$NoServe
)

$ErrorActionPreference = "Stop"

$RootDir = Split-Path -Parent $PSScriptRoot
$FactoryFiles = @(
    "openquatt-duo-waveshare.firmware.factory.bin",
    "openquatt-duo-heatpump-listener.firmware.factory.bin",
    "openquatt-single-waveshare.firmware.factory.bin",
    "openquatt-single-heatpump-listener.firmware.factory.bin"
)

function Get-PythonCommand {
    $candidates = @(
        @{ Cmd = (Join-Path $env:LOCALAPPDATA "Programs\Python\Python312\python.exe"); Args = @() },
        @{ Cmd = "py"; Args = @("-3") },
        @{ Cmd = "python"; Args = @() }
    )

    foreach ($candidate in $candidates) {
        if ($candidate.Cmd -match "[\\/]" -and -not (Test-Path $candidate.Cmd)) {
            continue
        }

        try {
            & $candidate.Cmd @($candidate.Args + @("--version")) *> $null
            if ($LASTEXITCODE -eq 0) {
                return $candidate
            }
        } catch {
            continue
        }
    }

    throw "Python 3 is niet gevonden. Installeer Python lokaal of zorg dat 'python' in PATH staat."
}

function Invoke-Python {
    param(
        [Parameter(Mandatory = $true)]
        [hashtable]$Python,
        [Parameter(Mandatory = $true)]
        [string[]]$Arguments
    )

    & $Python.Cmd @($Python.Args + $Arguments)
    if ($LASTEXITCODE -ne 0) {
        throw "Python command failed: $($Python.Cmd) $($Arguments -join ' ')"
    }
}

$Python = Get-PythonCommand
$TmpDir = Join-Path ([System.IO.Path]::GetTempPath()) ("openquatt-pages-preview." + [System.Guid]::NewGuid().ToString("N").Substring(0, 6))
$SiteDir = Join-Path $TmpDir "site"
$WorkFirmwareDir = Join-Path $TmpDir "firmware"

try {
    New-Item -ItemType Directory -Path $SiteDir -Force | Out-Null
    New-Item -ItemType Directory -Path $WorkFirmwareDir -Force | Out-Null
    New-Item -ItemType Directory -Path (Join-Path $SiteDir "firmware\main") -Force | Out-Null

    if ($FirmwareDir) {
        if (-not (Test-Path $FirmwareDir -PathType Container)) {
            throw "Firmware directory does not exist: $FirmwareDir"
        }

        foreach ($file in $FactoryFiles) {
            $source = Join-Path $FirmwareDir $file
            if (-not (Test-Path $source -PathType Leaf)) {
                throw "Missing firmware file: $source"
            }
            Copy-Item -Path $source -Destination (Join-Path $WorkFirmwareDir $file) -Force
        }
    } else {
        foreach ($file in $FactoryFiles) {
            New-Item -ItemType File -Path (Join-Path $WorkFirmwareDir $file) -Force | Out-Null
        }
    }

    Copy-Item -Path (Join-Path $RootDir "docs\*") -Destination $SiteDir -Recurse -Force
    Remove-Item -Path (Join-Path $SiteDir "onderhoudsgids.md"), (Join-Path $SiteDir "releaseproces.md") -Force -ErrorAction SilentlyContinue

    Invoke-Python -Python $Python -Arguments @((Join-Path $RootDir "scripts\build_pages_docs.py"), $SiteDir)

    foreach ($file in $FactoryFiles) {
        Copy-Item -Path (Join-Path $WorkFirmwareDir $file) -Destination (Join-Path $SiteDir "firmware\main\$file") -Force
    }

    try {
        $VersionLabel = git -C $RootDir describe --tags --always --dirty 2>$null
        if (-not $VersionLabel) {
            $VersionLabel = "local-preview"
        }
    } catch {
        $VersionLabel = "local-preview"
    }

    [pscustomobject]@{
        version = $VersionLabel
        release_url = "https://github.com/jeroen85/OpenQuatt/releases/latest"
    } | ConvertTo-Json | Set-Content -Path (Join-Path $SiteDir "firmware\main\version.json") -Encoding utf8

    Write-Host "Local Pages preview ready."
    Write-Host "Preview directory: $SiteDir"
    Write-Host "Open:"
    Write-Host "  http://${BindHost}:${Port}/"
    Write-Host "  http://${BindHost}:${Port}/documentatie.html"
    Write-Host "  http://${BindHost}:${Port}/install/index.html"

    if (-not $FirmwareDir) {
        Write-Host ""
        Write-Host "Using placeholder firmware binaries."
        Write-Host "Use -FirmwareDir <dir> if you want to test with real factory images."
    }

    if ($NoServe) {
        Write-Host ""
        Write-Host "Build completed without starting the HTTP server because -NoServe was used."
        return
    }

    Write-Host ""
    Write-Host "Stop with Ctrl+C."

    Invoke-Python -Python $Python -Arguments @("-m", "http.server", "$Port", "--bind", $BindHost, "--directory", $SiteDir)
} finally {
    if (-not $Keep -and (Test-Path $TmpDir)) {
        Remove-Item -Recurse -Force $TmpDir
    } elseif ($Keep -and (Test-Path $TmpDir)) {
        Write-Host "Preview directory kept at: $TmpDir"
    }
}


