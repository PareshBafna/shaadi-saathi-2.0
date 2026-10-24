$ErrorActionPreference = "Stop"

if (Test-Path "archive") {
    git rm -r --cached archive/
    if (-not (Select-String -Path ".gitignore" -Pattern "^archive/" -Quiet)) {
        Add-Content -Path ".gitignore" -Value "`narchive/"
    }
}

if (-not (Test-Path "global/utils")) {
    New-Item -ItemType Directory -Path "global/utils" | Out-Null
    New-Item -ItemType File -Path "global/utils/.gitkeep" | Out-Null
}

if (Test-Path "pages/login") { git mv "pages/login" "src/auth" }
if (Test-Path "pages/privacy") { git mv "pages/privacy" "src/legal" }

$homeMap = @{
    "budget-planner"      = "budget"
    "event-vendors"       = "vendors"
    "family-hosts"        = "hosts"
    "flight-arrangements" = "flights"
    "guest"               = "guests"
    "sangeeth-lineup"     = "sangeet"
    "shagun-gifts"        = "shagun"
    "stay-accomodation"   = "rooms"
    "tasks-checklist"     = "tasks"
    "train-arrangements"  = "trains"
    "whatsapp-deck"       = "whatsapp"
}

foreach ($old in $homeMap.Keys) {
    $new = $homeMap[$old]
    $oldDir = "src/home/features/$old"
    $newDir = "src/home/features/$new"

    if (Test-Path $oldDir) {
        git mv $oldDir $newDir
        foreach ($ext in @("html", "css", "js")) {
            if (Test-Path "$newDir/$old.$ext") {
                git mv "$newDir/$old.$ext" "$newDir/$new.$ext"
            }
        }
    }
}

$filesToPatch = @("src/home/home.html", "src/home/features/features.js", "index.html")
foreach ($file in $filesToPatch) {
    if (Test-Path $file) {
        $content = Get-Content $file -Raw
        foreach ($old in $homeMap.Keys) {
            $new = $homeMap[$old]
            $content = $content -replace "features/$old/$old", "features/$new/$new"
            $content = $content -replace "features/$old", "features/$new"
        }
        Set-Content -Path $file -Value $content -NoNewline
    }
}

$moduleMap = @{
    "budget-planner"      = "budget"
    "calendar"            = "calendar"
    "dashboard"           = "dashboard"
    "events"              = "events"
    "event-vendors"       = "vendors"
    "flight-arrangements" = "flights"
    "gallery"             = "gallery"
    "guest"               = "guests"
    "guestbook"           = "guestbook"
    "hosts"               = "hosts"
    "sangeeth-lineup"     = "sangeet"
    "shagun-gifts"        = "shagun"
    "stay-accommodation"  = "rooms"
    "tasks-checklist"     = "tasks"
    "team-access"         = "team-access"
    "telemetry"           = "telemetry"
    "train-arrangements"  = "trains"
    "web-invite"          = "web-invite"
    "whatsapp-deck"       = "whatsapp"
}

foreach ($pageFolder in $moduleMap.Keys) {
    $mod = $moduleMap[$pageFolder]
    $srcModJs = "src/weddings/modules/$mod.js"
    $tempModJs = "src/weddings/modules/$mod.real.js"
    $targetDir = "src/weddings/modules/$mod"

    if (Test-Path $srcModJs) {
        git mv $srcModJs $tempModJs
    }

    if (Test-Path "pages/$pageFolder") {
        git mv "pages/$pageFolder" $targetDir

        if (($pageFolder -ne $mod) -and (Test-Path "$targetDir/$pageFolder.html")) {
            git mv "$targetDir/$pageFolder.html" "$targetDir/$mod.html"
        }
        if (($pageFolder -ne $mod) -and (Test-Path "$targetDir/$pageFolder.css")) {
            git mv "$targetDir/$pageFolder.css" "$targetDir/$mod.css"
        }

        if (Test-Path "$targetDir/api") {
            Get-ChildItem "$targetDir/api/*-api.js" | ForEach-Object {
                $newApiName = "$mod-api.js"
                if ($_.Name -ne $newApiName) {
                    git mv $_.FullName "$targetDir/api/$newApiName"
                }
            }
        }

        if (Test-Path "$targetDir/$pageFolder.js") {
            git rm -f "$targetDir/$pageFolder.js"
        }
    } else {
        New-Item -ItemType Directory -Path $targetDir | Out-Null
    }

    if (Test-Path $tempModJs) {
        git mv $tempModJs "$targetDir/$mod.js"
    }
}

if (Test-Path "pages") {
    Remove-Item "pages" -Force -Recurse
}

if (Test-Path "src/weddings/weddings.js") {
    $wContent = Get-Content "src/weddings/weddings.js" -Raw
    foreach ($mod in $moduleMap.Values) {
        $wContent = $wContent -replace "\./modules/$mod\.js", "./modules/$mod/$mod.js"
    }
    Set-Content -Path "src/weddings/weddings.js" -Value $wContent -NoNewline
}

Get-ChildItem "src/weddings/modules/*/*.js" | ForEach-Object {
    $modJsContent = Get-Content $_.FullName -Raw
    if ($modJsContent) {
        $modJsContent = $modJsContent -replace "from '\.\./", "from '../../"
        $modJsContent = $modJsContent -replace 'from "\.\./', 'from "../../'
        Set-Content -Path $_.FullName -Value $modJsContent -NoNewline
    }
}