[CmdletBinding()]
param(
    [int]$Port = 8000,
    [string]$BindHost = "127.0.0.1",
    [string]$FirmwareDir = "",
    [switch]$Keep,
    [switch]$NoServe,
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
    "preview-pages",
    "--port",
    "$Port",
    "--host",
    $BindHost
)

if ($FirmwareDir) {
    $Arguments += @("--firmware-dir", $FirmwareDir)
}

if ($Keep) {
    $Arguments += "--keep"
}

if ($NoServe) {
    $Arguments += "--no-serve"
}

& $PythonExe @($PythonArgs + $Arguments)
if ($LASTEXITCODE -ne 0) {
    throw "Preview command failed."
}


