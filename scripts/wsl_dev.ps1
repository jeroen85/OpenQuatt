[CmdletBinding()]
param(
    [Parameter(Mandatory = $true, Position = 0)]
    [ValidateSet("bootstrap", "validate", "preview-pages", "status", "fetch", "pull", "push", "branch", "git", "python")]
    [string]$Command,
    [string]$Distro = "Ubuntu",
    [string]$RepoDir = "~/src/OpenQuatt",
    [Parameter(ValueFromRemainingArguments = $true)]
    [string[]]$Arguments
)

$ErrorActionPreference = "Stop"
. (Join-Path $PSScriptRoot "wsl_common.ps1")

Assert-WslReady -DistroName $Distro

$resolvedRepoDir = Resolve-WslPath -DistroName $Distro -Path $RepoDir
$repoDirEsc = Escape-BashDoubleQuotedString -Value $resolvedRepoDir

switch ($Command) {
    "bootstrap" {
        $commandParts = @("python3", "scripts/dev.py", "bootstrap") + $Arguments
    }
    "validate" {
        $commandParts = @("python3", "scripts/dev.py", "validate") + $Arguments
    }
    "preview-pages" {
        $commandParts = @("python3", "scripts/dev.py", "preview-pages") + $Arguments
    }
    "status" {
        $commandParts = @("git", "status", "--short", "--branch")
    }
    "fetch" {
        $commandParts = @("git", "fetch", "--prune") + $Arguments
    }
    "pull" {
        $commandParts = @("git", "pull", "--ff-only") + $Arguments
    }
    "push" {
        $commandParts = @("git", "push") + $Arguments
    }
    "branch" {
        $commandParts = @("git", "branch", "-vv") + $Arguments
    }
    "git" {
        if (-not $Arguments -or $Arguments.Count -eq 0) {
            throw "Geef een git-subcommand mee, bijvoorbeeld: git status."
        }

        $commandParts = @("git") + $Arguments
    }
    "python" {
        if (-not $Arguments -or $Arguments.Count -eq 0) {
            throw "Geef Python-argumenten mee, bijvoorbeeld: python scripts/dev.py validate --jobs 2."
        }

        $commandParts = @("python3") + $Arguments
    }
}

$commandLine = Join-BashArguments -Arguments $commandParts

$script = @"
set -euo pipefail
repo_dir="$repoDirEsc"

if [ ! -d "`$repo_dir/.git" ]; then
  echo "WSL-repo niet gevonden of geen git-repo: `$repo_dir" >&2
  echo "Run eerst .\\scripts\\setup_wsl_openquatt.ps1 -CloneRepo" >&2
  exit 1
fi

cd "`$repo_dir"
exec $commandLine
"@

Invoke-WslBash -DistroName $Distro -Script $script
