# How to Upload .dmg File to Cloudinary
## Step-by-Step Guide

---

## Method 1: Upload via Cloudinary Dashboard (Easiest) ⭐

### Step 1: Get Your Cloudinary Credentials

1. Go to https://cloudinary.com/console
2. Log in to your account
3. You should see your **Cloud Name** at the top (e.g., `dlhpqrucv`)
4. For API access, you'll need:
   - **Cloud Name** (already visible)
   - **API Key** (visible in dashboard)
   - **API Secret** (click "Reveal" to see it)

### Step 2: Upload the DMG File

1. In Cloudinary Dashboard, click **"Media Library"** in the left sidebar
2. Click the **"Upload"** button (top right)
3. Select **"Raw"** from the upload options (important for .dmg files!)
4. Click **"Browse"** or drag and drop your `.dmg` file
5. Wait for upload to complete

### Step 3: Get the Download URL

1. Once uploaded, click on the file in Media Library
2. You'll see the file details
3. Copy the **"Secure URL"** (starts with `https://res.cloudinary.com/...`)
4. This is the URL you'll use in your code!

### Example URL Format:
```
https://res.cloudinary.com/dlhpqrucv/raw/upload/v1234567890/kahana-homepage/downloads/oasis-browser-mac-silicon.dmg
```

---

## Method 2: Upload via Script (Automated) ⚡

### Step 1: Set Up Environment Variables

You need to set these environment variables. Check if you already have them:

```bash
# Check if you have Cloudinary credentials
echo $CLOUDINARY_CLOUD_NAME
echo $CLOUDINARY_API_KEY
echo $CLOUDINARY_API_SECRET
```

If they're not set, add them to your `.env.local` file (or export them):

```bash
# .env.local
CLOUDINARY_CLOUD_NAME=dlhpqrucv
CLOUDINARY_API_KEY=your_api_key_here
CLOUDINARY_API_SECRET=your_api_secret_here
```

**To get your credentials:**
1. Go to https://cloudinary.com/console
2. Your **Cloud Name** is at the top
3. Click on your account → **Settings** → **Security** tab
4. Copy **API Key** and **API Secret**

### Step 2: Run the Upload Script

I've created a script for you at `scripts/upload-dmg-to-cloudinary.js`

```bash
# Make sure you're in the project root
cd /Users/adamkershner/Documents/kahana-homepage-public-1/kahana-homepage-public

# Run the script with your DMG file path
node scripts/upload-dmg-to-cloudinary.js /path/to/your/oasis-browser-mac-silicon.dmg
```

**Example:**
```bash
node scripts/upload-dmg-to-cloudinary.js ~/Downloads/oasis-browser-mac-silicon.dmg
```

### Step 3: Copy the URL

The script will output the Secure URL. Copy it and use it in your code!

---

## Quick Reference

### What You Need:
- ✅ Cloudinary account (you already have one)
- ✅ Your `.dmg` file
- ✅ Cloud Name: `dlhpqrucv` (from your existing setup)

### Where to Get Credentials:
1. **Dashboard:** https://cloudinary.com/console
2. **Cloud Name:** Visible at top of dashboard
3. **API Key & Secret:** Settings → Security tab

### Important Notes:
- ⚠️ Use **"Raw"** resource type (not "Image" or "Video")
- ⚠️ File will be stored in folder: `kahana-homepage/downloads/`
- ⚠️ Free tier limit: 10 MB per file (paid plans: up to 100 MB)
- ⚠️ If your DMG is > 10 MB, you may need a paid Cloudinary plan or use AWS S3

---

## Troubleshooting

### Error: "File size too large"
- **Solution:** Cloudinary free tier has 10 MB limit per file
- **Options:**
  1. Upgrade Cloudinary plan
  2. Use AWS S3 + CloudFront instead
  3. Compress the DMG file (if possible)

### Error: "Invalid API credentials"
- **Solution:** Check your environment variables
- Make sure you're using the correct Cloud Name, API Key, and API Secret

### Error: "File not found"
- **Solution:** Check the file path
- Use absolute path: `/Users/yourname/Downloads/file.dmg`
- Or relative path from project root

### Upload is slow
- **Normal:** Large files take time to upload
- **Tip:** Check your internet connection
- **Tip:** Use the dashboard for visual progress

---

## After Upload

Once you have the URL, you'll use it in `pages/installations.jsx`:

```javascript
const downloadButtons = [
  {
    platform: 'Mac',
    downloadUrl: 'https://res.cloudinary.com/dlhpqrucv/raw/upload/v1/kahana-homepage/downloads/oasis-browser-mac-silicon.dmg',
    // ... rest of config
  }
];
```

---

## Next Steps

1. ✅ Upload your `.dmg` file (choose Method 1 or 2 above)
2. ✅ Copy the Secure URL
3. ✅ Update `pages/installations.jsx` with the URL
4. ✅ Test the download button
5. ✅ Deploy!

---

**Questions?** Check the `DMG_DOWNLOAD_IMPLEMENTATION_PLAN.md` for more details.

