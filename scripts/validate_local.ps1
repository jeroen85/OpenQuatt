[CmdletBinding()]
param(
    [string[]]$Configs = @(
        "openquatt_duo_waveshare.yaml",
        "openquatt_duo_heatpump_listener.yaml",
        "openquatt_single_waveshare.yaml",
        "openquatt_single_heatpump_listener.yaml"
    ),
    [switch]$ConfigOnly,
    [string]$VenvDir = ".venv"
)

$ErrorActionPreference = "Stop"

$RootDir = Split-Path -Parent $PSScriptRoot
$ResolvedVenvDir = if ([System.IO.Path]::IsPathRooted($VenvDir)) {
    $VenvDir
} else {
    Join-Path $RootDir $VenvDir
}

$PythonExe = Join-Path $ResolvedVenvDir "Scripts\python.exe"
$EspHomeExe = Join-Path $ResolvedVenvDir "Scripts\esphome.exe"
$LogDir = Join-Path $RootDir ".tmp\validate_local_logs"
$CommandRoot = $RootDir
$PioCoreDir = Join-Path $RootDir ".cache\platformio"

if (-not (Test-Path $PythonExe -PathType Leaf) -or -not (Test-Path $EspHomeExe -PathType Leaf)) {
    throw "Local ESPHome venv not found. Run .\scripts\bootstrap_esphome_local.ps1 first."
}

function Quote-Argument {
    param([string]$Value)

    if ($Value -match '[\s"]') {
        return '"' + $Value.Replace('"', '\"') + '"'
    }

    return $Value
}

function Invoke-LoggedCommand {
    param(
        [Parameter(Mandatory = $true)]
        [string]$Exe,
        [Parameter(Mandatory = $true)]
        [string[]]$Arguments,
        [Parameter(Mandatory = $true)]
        [string]$LogFile,
        [Parameter(Mandatory = $true)]
        [string]$Label,
        [Parameter(Mandatory = $true)]
        [string]$WorkingDirectory,
        [Parameter(Mandatory = $true)]
        [string]$PlatformIoCoreDir
    )

    $oldPioCoreDir = $env:PLATFORMIO_CORE_DIR
    $env:PLATFORMIO_CORE_DIR = $PlatformIoCoreDir
    try {
        $stdoutLog = "$LogFile.stdout"
        $stderrLog = "$LogFile.stderr"

        foreach ($path in @($LogFile, $stdoutLog, $stderrLog)) {
            if (Test-Path $path) {
                Remove-Item $path -Force
            }
        }

        $argumentString = (($Arguments | ForEach-Object { Quote-Argument $_ }) -join ' ')

        $process = Start-Process `
            -FilePath $Exe `
            -ArgumentList $argumentString `
            -WorkingDirectory $WorkingDirectory `
            -RedirectStandardOutput $stdoutLog `
            -RedirectStandardError $stderrLog `
            -Wait `
            -NoNewWindow `
            -PassThru

        foreach ($path in @($stdoutLog, $stderrLog)) {
            if (Test-Path $path) {
                Get-Content $path | Add-Content $LogFile
            }
        }

        if ($process.ExitCode -ne 0) {
            Write-Host "[FAIL] $Label" -ForegroundColor Red
            Get-Content $LogFile -Tail 80
            throw "$Label failed. Full log: $LogFile"
        }

        Write-Host "[ok] $Label" -ForegroundColor Green
    } finally {
        $env:PLATFORMIO_CORE_DIR = $oldPioCoreDir
    }
}

function Sync-StagedWorkspace {
    param(
        [Parameter(Mandatory = $true)]
        [string]$SourceDir,
        [Parameter(Mandatory = $true)]
        [string]$StageDir,
        [Parameter(Mandatory = $true)]
        [string]$LogFile
    )

    New-Item -ItemType Directory -Path $StageDir -Force | Out-Null
    if (Test-Path $LogFile) {
        Remove-Item $LogFile -Force
    }

    $arguments = @(
        $SourceDir,
        $StageDir,
        '/MIR',
        '/R:1',
        '/W:1',
        '/XD', '.git', '.venv', '.cache', '.tmp', 'build', '.esphome', '__pycache__',
        '/XF', '*.pyc', '*.pyo',
        "/LOG:$LogFile"
    )
    $argumentString = (($arguments | ForEach-Object { Quote-Argument $_ }) -join ' ')

    $process = Start-Process `
        -FilePath 'robocopy.exe' `
        -ArgumentList $argumentString `
        -WorkingDirectory $SourceDir `
        -Wait `
        -NoNewWindow `
        -PassThru

    if ($process.ExitCode -gt 7) {
        Write-Host "[FAIL] workspace sync" -ForegroundColor Red
        Get-Content $LogFile -Tail 80
        throw "workspace sync failed. Full log: $LogFile"
    }

    Write-Host "[ok] workspace sync" -ForegroundColor Green
}

New-Item -ItemType Directory -Path $LogDir -Force | Out-Null

if ($RootDir -match '\s') {
    $StageBaseDir = Join-Path $env:LOCALAPPDATA 'OpenQuattBuild'
    $CommandRoot = Join-Path $StageBaseDir 'workspace'
    $PioCoreDir = Join-Path $StageBaseDir 'platformio'

    Write-Host "Workspace path contains spaces; mirroring into $CommandRoot" -ForegroundColor Yellow
    Sync-StagedWorkspace `
        -SourceDir $RootDir `
        -StageDir $CommandRoot `
        -LogFile (Join-Path $LogDir 'workspace-sync.log')
}

$CommandScriptsDir = Join-Path $CommandRoot 'scripts'
New-Item -ItemType Directory -Path $PioCoreDir -Force | Out-Null

Write-Host "Workspace root: $RootDir"
if ($CommandRoot -ne $RootDir) {
    Write-Host "Command root: $CommandRoot"
}
Write-Host "PlatformIO core dir: $PioCoreDir"
Write-Host "Log dir: $LogDir"

$DocsLog = Join-Path $LogDir 'docs-consistency.log'
Invoke-LoggedCommand `
    -Exe $PythonExe `
    -Arguments @((Join-Path $CommandScriptsDir 'check_docs_consistency.py')) `
    -LogFile $DocsLog `
    -Label 'docs consistency' `
    -WorkingDirectory $CommandRoot `
    -PlatformIoCoreDir $PioCoreDir

foreach ($config in $Configs) {
    $stem = [System.IO.Path]::GetFileNameWithoutExtension($config)
    Invoke-LoggedCommand `
        -Exe $EspHomeExe `
        -Arguments @('config', $config) `
        -LogFile (Join-Path $LogDir "$stem.config.log") `
        -Label "config $config" `
        -WorkingDirectory $CommandRoot `
        -PlatformIoCoreDir $PioCoreDir
}

if (-not $ConfigOnly) {
    foreach ($config in $Configs) {
        $stem = [System.IO.Path]::GetFileNameWithoutExtension($config)
        Invoke-LoggedCommand `
            -Exe $EspHomeExe `
            -Arguments @('compile', $config) `
            -LogFile (Join-Path $LogDir "$stem.compile.log") `
            -Label "compile $config" `
            -WorkingDirectory $CommandRoot `
            -PlatformIoCoreDir $PioCoreDir
    }
}

Write-Host ""
Write-Host "Validation complete."