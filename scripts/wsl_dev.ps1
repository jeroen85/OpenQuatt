[CmdletBinding()]
param(
    [Parameter(Mandatory = $true, Position = 0)]
    [ValidateSet("bootstrap", "validate", "preview-pages", "status", "fetch", "pull", "push", "branch", "git", "python", "esphome")]
    [string]$Command,
    [string]$Distro = "Ubuntu",
    [string]$RepoDir = "~/src/OpenQuatt",
    [string]$VenvDir = ".venv",
    [Parameter(ValueFromRemainingArguments = $true)]
    [string[]]$Arguments
)

$ErrorActionPreference = "Stop"
. (Join-Path $PSScriptRoot "wsl_common.ps1")

Assert-WslReady -DistroName $Distro

$resolvedRepoDir = Resolve-WslPath -DistroName $Distro -Path $RepoDir
$resolvedVenvDir = Resolve-WslPath -DistroName $Distro -Path $VenvDir
$repoDirEsc = Escape-BashDoubleQuotedString -Value $resolvedRepoDir
$venvDirEsc = Escape-BashDoubleQuotedString -Value $resolvedVenvDir
$commandArguments = @($Arguments | Where-Object { $null -ne $_ -and $_ -ne "" })

switch ($Command) {
    "bootstrap" {
        $commandParts = @("python3", "scripts/dev.py", "bootstrap") + $commandArguments
    }
    "validate" {
        $commandParts = @("python3", "scripts/dev.py", "validate") + $commandArguments
    }
    "preview-pages" {
        $commandParts = @("python3", "scripts/dev.py", "preview-pages") + $commandArguments
    }
    "status" {
        $commandParts = @("git", "status", "--short", "--branch")
    }
    "fetch" {
        $commandParts = @("git", "fetch", "--prune") + $commandArguments
    }
    "pull" {
        $commandParts = @("git", "pull", "--ff-only") + $commandArguments
    }
    "push" {
        $commandParts = @("git", "push") + $commandArguments
    }
    "branch" {
        $commandParts = @("git", "branch", "-vv") + $commandArguments
    }
    "git" {
        if (-not $commandArguments -or $commandArguments.Count -eq 0) {
            throw "Geef een git-subcommand mee, bijvoorbeeld: git status."
        }

        $commandParts = @("git") + $commandArguments
    }
    "python" {
        if (-not $commandArguments -or $commandArguments.Count -eq 0) {
            throw "Geef Python-argumenten mee, bijvoorbeeld: python scripts/dev.py validate --jobs 2."
        }

        $commandParts = @("python3") + $commandArguments
    }
    "esphome" {
        if (-not $commandArguments -or $commandArguments.Count -eq 0) {
            throw "Geef ESPHome-argumenten mee, bijvoorbeeld: esphome upload firmware/openquatt-duo-waveshare.yaml."
        }

        $commandParts = @("$resolvedVenvDir/bin/esphome") + $commandArguments
    }
}

$commandLine = Join-BashArguments -Arguments $commandParts

$script = @"
set -euo pipefail
repo_dir="$repoDirEsc"
venv_dir="$venvDirEsc"

if [ ! -d "`$repo_dir/.git" ]; then
  echo "WSL-repo niet gevonden of geen git-repo: `$repo_dir" >&2
  echo "Run eerst .\\scripts\\setup_wsl_openquatt.ps1 -CloneRepo" >&2
  exit 1
fi

if [ "$Command" = "esphome" ] && [ ! -x "`$venv_dir/bin/esphome" ]; then
  echo "ESPHome executable niet gevonden in venv: `$venv_dir/bin/esphome" >&2
  echo "Run eerst .\\scripts\\wsl_dev.ps1 bootstrap -RepoDir $RepoDir -VenvDir $VenvDir" >&2
  exit 1
fi

cd "`$repo_dir"
exec $commandLine
"@

Invoke-WslBash -DistroName $Distro -Script $script
