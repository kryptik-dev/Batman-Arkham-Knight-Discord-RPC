@echo off
powershell -WindowStyle Hidden -Command "Start-Process node -ArgumentList '"%~dp0batman-rpc.js"' -WindowStyle Hidden"
timeout /t 2 >nul
REM Update to your game path
start "" "D:\Games\(01) Batman Arkahm Knight\Binaries\Win64\BatmanAK.exe" 