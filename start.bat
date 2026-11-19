@echo off
title BusBuddy Kolkata - Live Bus Tracking & Transit Planner
echo ========================================================
echo   BusBuddy Kolkata - বাসবাডি কলকাতা
echo   Live Bus Tracking & Journey Planning System
echo ========================================================
echo.
set "PATH=%~dp0..\.tools\node;%PATH%"
cd /d "%~dp0"

echo [1/2] Verifying Node runtime...
node -v
npm -v
echo.
echo [2/2] Launching BusBuddy Vite Server on http://localhost:5173 ...
start http://localhost:5173
npm run dev -- --host
pause
