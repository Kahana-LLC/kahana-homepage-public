# Fix Build Error - Operation Not Permitted

This error is a macOS file permission issue with Next.js, not related to our consent implementation.

## Quick Fixes (Try in order):

### Fix 1: Clear Cache and Restart
```bash
# Stop the dev server (Ctrl+C)
rm -rf .next
npm run dev
```

### Fix 2: Fix Node Modules Permissions
```bash
# Fix permissions on node_modules
sudo chmod -R u+rw node_modules

# Or if that doesn't work, reinstall:
rm -rf node_modules package-lock.json
npm install
```

### Fix 3: Check macOS Security Settings
1. Open **System Settings** → **Privacy & Security**
2. Check if Terminal/your IDE has Full Disk Access
3. If not, add it and restart

### Fix 4: Reinstall Next.js
```bash
npm uninstall next
npm install next@latest
```

### Fix 5: Use Different Node Version
```bash
# If using nvm:
nvm use 18  # or 20
rm -rf node_modules .next
npm install
npm run dev
```

## If Still Not Working:

Try running with sudo (not recommended but sometimes needed):
```bash
sudo npm run dev
```

Or check if the file actually exists and is readable:
```bash
ls -la node_modules/next/dist/client/components/router-reducer/router-reducer-types.js
cat node_modules/next/dist/client/components/router-reducer/router-reducer-types.js | head -5
```

## Alternative: Skip Dev Mode

If dev mode keeps failing, you can build and run production:
```bash
npm run build
npm start
```

This will run on port 3000 (or PORT env var).

