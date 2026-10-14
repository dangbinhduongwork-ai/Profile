@echo off
echo ==============================================
echo Dang day source code len GitHub...
echo Repository: https://github.com/dangbinhduongwork-ai/Profile
echo ==============================================

if not exist .git (
    git init -b main
)

git add .
git commit -m "update: add live demo for Duck Pond project"
git remote remove origin 2>nul
git remote add origin https://github.com/dangbinhduongwork-ai/Profile.git
git branch -M main
git push -u origin main

echo ==============================================
echo Hoan tat! Kiem tra tai: https://github.com/dangbinhduongwork-ai/Profile
echo ==============================================
