[CmdletBinding()]
param(
    [Parameter(Mandatory = $true, Position = 0)]
    [ValidateSet(
        "status",
        "validate-config",
        "compile-waveshare-duo",
        "ota-local-waveshare-duo",
        "ota-ci-duo-waveshare",
        "push-dev"
    )]
    [string]$Command,
    [string]$Distro = "Ubuntu",
    [string]$RepoDir = "",
    [string]$VenvDir = "",
    [string]$Device = "",
    [string]$RunId = "",
    [string]$ArtifactName = "openquatt-waveshare-duo-wifi-dev-release"
)

$ErrorActionPreference = "Stop"

$wslDev = Join-Path $PSScriptRoot "wsl_dev.ps1"
$duoWaveshareConfig = "configs/waveshare/duo_wifi.yaml"
$ciDownloadDir = Join-Path (Split-Path $PSScriptRoot -Parent) ".tmp\ci-ota"
$ciFirmwareRelativePath = "firmware.ota.bin"
$localFirmwareBin = ".esphome/build/waveshare_duo_wifi/.pioenvs/openquatt/firmware.ota.bin"
$repoRoot = (Resolve-Path (Join-Path $PSScriptRoot "..")).Path
if (-not $RepoDir) {
    $RepoDir = $repoRoot
}
if (-not $VenvDir) {
    $VenvDir = Join-Path $repoRoot ".venv"
}

function Invoke-WslDev {
    param(
        [Parameter(Mandatory = $true)]
        [string]$SubCommand,
        [string[]]$ExtraArguments = @()
    )

    & powershell -ExecutionPolicy Bypass -File $wslDev $SubCommand -Distro $Distro -RepoDir $RepoDir @ExtraArguments
    if ($LASTEXITCODE -ne 0) {
        throw "wsl_dev.ps1 $SubCommand failed."
    }
}

function Invoke-EspHomeOtaBin {
    param(
        [Parameter(Mandatory = $true)]
        [string]$FirmwareBin
    )

    if (-not $Device) {
        throw "Geef -Device mee, bijvoorbeeld -Device 192.168.2.107."
    }

    $uploadArgs = @(
        "upload",
        $duoWaveshareConfig,
        "--device",
        $Device,
        "--file",
        $FirmwareBin
    )
    & powershell -ExecutionPolicy Bypass -File $wslDev esphome -Distro $Distro -RepoDir $RepoDir -VenvDir $VenvDir @uploadArgs
    if ($LASTEXITCODE -ne 0) {
        throw "ESPHome OTA upload failed."
    }
}

switch ($Command) {
    "status" {
        git status --short --branch
        if ($LASTEXITCODE -ne 0) { throw "git status failed." }
    }
    "validate-config" {
        Invoke-WslDev -SubCommand "validate" -ExtraArguments @(
            "--config-only",
            "--jobs",
            "2",
            "--venv-dir",
            $VenvDir
        )
    }
    "compile-waveshare-duo" {
        Invoke-WslDev -SubCommand "validate" -ExtraArguments @(
            "--config",
            $duoWaveshareConfig,
            "--jobs",
            "1",
            "--venv-dir",
            $VenvDir
        )
    }
    "ota-local-waveshare-duo" {
        Invoke-EspHomeOtaBin -FirmwareBin $localFirmwareBin
    }
    "ota-ci-duo-waveshare" {
        if (-not $RunId) {
            throw "Geef -RunId mee, bijvoorbeeld -RunId 25385576882."
        }

        if (Test-Path $ciDownloadDir) {
            Remove-Item -LiteralPath $ciDownloadDir -Recurse -Force
        }
        New-Item -ItemType Directory -Force -Path $ciDownloadDir | Out-Null

        gh run download $RunId --name $ArtifactName --dir $ciDownloadDir
        if ($LASTEXITCODE -ne 0) { throw "gh run download failed." }

        $firmwareBin = Join-Path $ciDownloadDir $ciFirmwareRelativePath
        if (-not (Test-Path $firmwareBin)) {
            throw "Firmware bin niet gevonden in CI-artifact: $firmwareBin"
        }

        $wslFirmwareBin = & wsl.exe -d $Distro -- wslpath -a $firmwareBin
        if ($LASTEXITCODE -ne 0 -or -not $wslFirmwareBin) {
            throw "Kon firmwarepad niet naar WSL vertalen."
        }

        Invoke-EspHomeOtaBin -FirmwareBin $wslFirmwareBin.Trim()
    }
    "push-dev" {
        git push origin dev
        if ($LASTEXITCODE -ne 0) { throw "git push origin dev failed." }
    }
}
