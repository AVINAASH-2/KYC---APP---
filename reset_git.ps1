Remove-Item -Path .git -Recurse -Force -ErrorAction SilentlyContinue
git init
git add .
git commit -m "Fresh Start: Upgrade with Premium UI"
git remote add origin https://github.com/AVINAASH-2/KYC-APP.git
git push -f origin main
