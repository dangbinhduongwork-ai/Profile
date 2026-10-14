Write-Host "==============================================" -ForegroundColor Cyan
Write-Host "Dang day source code len GitHub..." -ForegroundColor Cyan
Write-Host "Repository: https://github.com/dangbinhduongwork-ai/Profile" -ForegroundColor Cyan
Write-Host "==============================================" -ForegroundColor Cyan

if (-not (Test-Path -Path ".git")) {
    git init -b main
}

git add .
git commit -m "update: switch entire portfolio to English and remove language toggle"
git remote remove origin 2>$null
git remote add origin https://github.com/dangbinhduongwork-ai/Profile.git
git branch -M main
git push -u origin main

Write-Host "==============================================" -ForegroundColor Green
Write-Host "Hoan tat! Kiem tra tai: https://github.com/dangbinhduongwork-ai/Profile" -ForegroundColor Green
Write-Host "==============================================" -ForegroundColor Green
