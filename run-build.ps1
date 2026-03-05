$env:NODE_OPTIONS = "--require c:/Users/maysa/.gemini/antigravity/scratch/uk-visa-calculator/require-hook.js"
Remove-Item -Recurse -Force "c:/Users/maysa/.gemini/antigravity/scratch/uk-visa-calculator/.next" -ErrorAction SilentlyContinue
& "C:\Program Files\nodejs\node.exe" "c:/Users/maysa/.gemini/antigravity/scratch/uk-visa-calculator/node_modules/next/dist/bin/next" build 2>&1 | Out-File "c:/Users/maysa/.gemini/antigravity/scratch/uk-visa-calculator/build-output.txt" -Encoding utf8
Get-Content "c:/Users/maysa/.gemini/antigravity/scratch/uk-visa-calculator/build-output.txt" -Tail 25
