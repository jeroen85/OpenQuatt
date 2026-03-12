[CmdletBinding()]
param()

function Get-WslOutput {
    param(
        [Parameter(Mandatory = $true)]
        [string[]]$Arguments
    )

    $output = & wsl.exe @Arguments 2>&1 | Out-String
    $normalized = $output.Replace("`0", "")
    return $normalized.Trim()
}

function Test-WslInstalled {
    try {
        $null = Get-WslOutput -Arguments @("--status")
        return $true
    }
    catch {
        return $false
    }
}

function Test-WslDistroAvailable {
    param(
        [Parameter(Mandatory = $true)]
        [string]$DistroName
    )

    if (-not (Test-WslInstalled)) {
        return $false
    }

    $distros = Get-WslOutput -Arguments @("-l", "-q")
    $matches = $distros -split "\r?\n" |
        ForEach-Object { $_.Trim() } |
        Where-Object { $_ -and $_ -eq $DistroName }

    return [bool]$matches
}

function Assert-WslReady {
    param(
        [Parameter(Mandatory = $true)]
        [string]$DistroName
    )

    if (-not (Test-WslInstalled)) {
        throw "WSL is nog niet geinstalleerd. Run eerst .\scripts\setup_wsl_openquatt.ps1."
    }

    if (-not (Test-WslDistroAvailable -DistroName $DistroName)) {
        throw "Distro '$DistroName' is niet beschikbaar. Run eerst .\scripts\setup_wsl_openquatt.ps1."
    }
}

function Resolve-WslPath {
    param(
        [Parameter(Mandatory = $true)]
        [string]$DistroName,
        [Parameter(Mandatory = $true)]
        [string]$Path
    )

    if ($Path -eq "~" -or $Path.StartsWith("~/")) {
        $homeDir = Get-WslOutput -Arguments @("-d", $DistroName, "--", "sh", "-lc", 'printf %s "$HOME"')
        if (-not $homeDir) {
            throw "Kon home-directory in WSL niet bepalen."
        }

        if ($Path -eq "~") {
            return $homeDir
        }

        return "$homeDir/$($Path.Substring(2))"
    }

    return $Path
}

function Escape-BashDoubleQuotedString {
    param(
        [Parameter(Mandatory = $true)]
        [string]$Value
    )

    return $Value.Replace('\', '\\').Replace('"', '\"')
}

function ConvertTo-BashSingleQuotedString {
    param(
        [Parameter(Mandatory = $true)]
        [AllowEmptyString()]
        [string]$Value
    )

    $replacement = "'" + '"' + "'" + '"' + "'"
    return "'" + $Value.Replace("'", $replacement) + "'"
}

function Join-BashArguments {
    param(
        [string[]]$Arguments
    )

    if (-not $Arguments -or $Arguments.Count -eq 0) {
        return ""
    }

    return (($Arguments | ForEach-Object { ConvertTo-BashSingleQuotedString -Value $_ }) -join " ")
}

function Convert-WindowsPathToWslPath {
    param(
        [Parameter(Mandatory = $true)]
        [string]$WindowsPath
    )

    $fullPath = [System.IO.Path]::GetFullPath($WindowsPath)
    $drive = $fullPath.Substring(0, 1).ToLower()
    $rest = $fullPath.Substring(2) -replace '\\', '/'
    return "/mnt/$drive$rest"
}

function Invoke-WslBash {
    param(
        [Parameter(Mandatory = $true)]
        [string]$DistroName,
        [Parameter(Mandatory = $true)]
        [string]$Script
    )

    $tempFile = Join-Path $env:TEMP ("openquatt_wsl_" + [System.Guid]::NewGuid().ToString() + ".sh")

    try {
        $linuxScript = $Script -replace "`r`n", "`n"
        [System.IO.File]::WriteAllText($tempFile, $linuxScript, (New-Object System.Text.UTF8Encoding($false)))
        $wslTempFile = Convert-WindowsPathToWslPath -WindowsPath $tempFile

        & wsl.exe -d $DistroName -- bash $wslTempFile
        if ($LASTEXITCODE -ne 0) {
            throw "WSL command failed."
        }
    }
    finally {
        if (Test-Path $tempFile) {
            Remove-Item $tempFile -Force -ErrorAction SilentlyContinue
        }
    }
}
