@echo off
cd /d "C:\Users\schembri\Documents\site-doc"
del /f /q ".git\index.lock" 2>nul
git config user.email "yantlgnepc@gmail.com"
git config user.name "Yan Schembri"
git add .
git commit -m "sync site updates"
git push
echo.
echo === DONE ===
pause
