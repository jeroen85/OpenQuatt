[CmdletBinding()]
param(
    [string]$Distro = "Ubuntu",
    [switch]$InstallPackages,
    [switch]$CloneRepo,
    [string]$RepoUrl = "https://github.com/jeroen85/OpenQuatt.git",
    [string]$RepoDir = "~/src/OpenQuatt"
)

$ErrorActionPreference = "Stop"
. (Join-Path $PSScriptRoot "wsl_common.ps1")

function Test-IsAdministrator {
    $currentUser = [Security.Principal.WindowsIdentity]::GetCurrent()
    $principal = New-Object Security.Principal.WindowsPrincipal($currentUser)
    return $principal.IsInRole([Security.Principal.WindowsBuiltinRole]::Administrator)
}

$adminRequired = -not (Test-WslInstalled)
if ($adminRequired -and -not (Test-IsAdministrator)) {
    throw "Open een Administrator PowerShell en voer dit script opnieuw uit."
}

$statusText = ""
if (Test-WslInstalled) {
    $statusText = Get-WslOutput -Arguments @("--status")
}

$wslMissing = -not $statusText -or ($statusText -match "not installed")

if ($wslMissing) {
    Write-Host "WSL is nog niet geinstalleerd. Start WSL2 + $Distro..." -ForegroundColor Yellow
    & wsl.exe --install -d $Distro
    if ($LASTEXITCODE -ne 0) {
        throw "WSL installatie kon niet worden gestart."
    }

    Write-Host ""
    Write-Host "WSL installatie is gestart." -ForegroundColor Green
    Write-Host "Herstart Windows als daarom wordt gevraagd." -ForegroundColor Yellow
    Write-Host "Open daarna eenmaal de $Distro app om je Linux-gebruiker aan te maken." -ForegroundColor Yellow
    Write-Host "Voer dit script daarna opnieuw uit met -InstallPackages." -ForegroundColor Yellow
    return
}

$hasDistro = Test-WslDistroAvailable -DistroName $Distro

if (-not $hasDistro) {
    if (-not (Test-IsAdministrator)) {
        throw "WSL is aanwezig, maar voor het installeren van distro '$Distro' moet je dit script als Administrator starten."
    }

    Write-Host "WSL is aanwezig, maar distro '$Distro' nog niet. Installatie wordt gestart..." -ForegroundColor Yellow
    & wsl.exe --install -d $Distro
    if ($LASTEXITCODE -ne 0) {
        throw "Distro installatie kon niet worden gestart."
    }

    Write-Host ""
    Write-Host "Open daarna eenmaal de $Distro app om je Linux-gebruiker aan te maken." -ForegroundColor Yellow
    Write-Host "Voer dit script daarna opnieuw uit met -InstallPackages." -ForegroundColor Yellow
    return
}

Write-Host "WSL en distro '$Distro' zijn beschikbaar." -ForegroundColor Green

if ($InstallPackages) {
    $packageScript = @"
set -euo pipefail
sudo apt update
sudo apt install -y git python3 python3-venv python3-pip
mkdir -p ~/src
"@

    Invoke-WslBash -DistroName $Distro -Script $packageScript
    Write-Host "Basispackages in WSL zijn geinstalleerd." -ForegroundColor Green
}

if ($CloneRepo) {
    $repoUrlEsc = Escape-BashDoubleQuotedString -Value $RepoUrl
    $resolvedRepoDir = Resolve-WslPath -DistroName $Distro -Path $RepoDir
    $repoDirEsc = Escape-BashDoubleQuotedString -Value $resolvedRepoDir

    $cloneScript = @'
set -euo pipefail
repo_dir="__REPO_DIR__"

mkdir -p "$(dirname "$repo_dir")"
if [ -d "$repo_dir/.git" ]; then
  echo "Repo bestaat al in $repo_dir"
elif [ -e "$repo_dir" ]; then
  echo "Doelmap bestaat al maar is geen git-repo: $repo_dir" >&2
  exit 1
else
  git clone "__REPO_URL__" "$repo_dir"
fi
'@

    $cloneScript = $cloneScript.Replace("__REPO_URL__", $repoUrlEsc).Replace("__REPO_DIR__", $repoDirEsc)

    Invoke-WslBash -DistroName $Distro -Script $cloneScript
    Write-Host "Repo is in WSL gekloond naar $RepoDir." -ForegroundColor Green
}

Write-Host ""
Write-Host "Aanbevolen vervolgstappen:" -ForegroundColor Cyan
Write-Host "1. Start $Distro." -ForegroundColor Cyan
Write-Host "2. Ga naar je repo in WSL, bijvoorbeeld: cd ~/src/OpenQuatt" -ForegroundColor Cyan
Write-Host "3. Run: python3 scripts/dev.py bootstrap" -ForegroundColor Cyan
Write-Host "4. Run: python3 scripts/dev.py validate --jobs 2" -ForegroundColor Cyan
Write-Host ""
Write-Host "Let op: als je de huidige lokale branch met niet-gecommitte wijzigingen wilt meenemen, commit of push die eerst vanaf Windows voordat je in WSL clone't." -ForegroundColor Yellow
