[CmdletBinding()]
param(
    [Parameter(Mandatory = $true, Position = 0)]
    [ValidateSet("bootstrap", "validate", "preview-pages", "status", "fetch", "pull", "push", "branch", "git", "python", "esphome")]
    [string]$Command,
    [string]$Distro = "Ubuntu",
    [string]$RepoDir = "",
    [string]$VenvDir = "",
    [Parameter(ValueFromRemainingArguments = $true)]
    [string[]]$Arguments
)

$ErrorActionPreference = "Stop"
. (Join-Path $PSScriptRoot "wsl_common.ps1")

Assert-WslReady -DistroName $Distro

$defaultRepoDir = (Resolve-Path (Join-Path $PSScriptRoot "..")).Path
if (-not $RepoDir) {
    $RepoDir = $defaultRepoDir
}
if (-not $VenvDir) {
    $VenvDir = Join-Path $defaultRepoDir ".venv"
}

$resolvedRepoDir = Resolve-WslPath -DistroName $Distro -Path $RepoDir
$resolvedVenvDir = Resolve-WslPath -DistroName $Distro -Path $VenvDir
$repoDirEsc = Escape-BashDoubleQuotedString -Value $resolvedRepoDir
$venvDirEsc = Escape-BashDoubleQuotedString -Value $resolvedVenvDir
$commandArguments = @($Arguments | Where-Object { $null -ne $_ -and $_ -ne "" })
$requiresWsl = $Command -in @("bootstrap", "validate", "preview-pages", "python", "esphome")

if ($requiresWsl) {
    Assert-WslReady -DistroName $Distro
}

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
        git -C $RepoDir status --short --branch
        exit $LASTEXITCODE
    }
    "fetch" {
        git -C $RepoDir fetch --prune @commandArguments
        exit $LASTEXITCODE
    }
    "pull" {
        git -C $RepoDir pull --ff-only @commandArguments
        exit $LASTEXITCODE
    }
    "push" {
        git -C $RepoDir push @commandArguments
        exit $LASTEXITCODE
    }
    "branch" {
        git -C $RepoDir branch -vv @commandArguments
        exit $LASTEXITCODE
    }
    "git" {
        if (-not $commandArguments -or $commandArguments.Count -eq 0) {
            throw "Geef een git-subcommand mee, bijvoorbeeld: git status."
        }
        git -C $RepoDir @commandArguments
        exit $LASTEXITCODE
    }
    "python" {
        if (-not $commandArguments -or $commandArguments.Count -eq 0) {
            throw "Geef Python-argumenten mee, bijvoorbeeld: python scripts/dev.py validate --jobs 2."
        }

        $commandParts = @("python3") + $commandArguments
    }
    "esphome" {
        if (-not $commandArguments -or $commandArguments.Count -eq 0) {
            throw "Geef ESPHome-argumenten mee, bijvoorbeeld: esphome upload configs/waveshare/duo_wifi.yaml."
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
