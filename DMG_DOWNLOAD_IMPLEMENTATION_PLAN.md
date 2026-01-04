# DMG Download Implementation Plan
## Mac Silicon (Apple Silicon) Oasis Browser Download

**Date:** January 2026  
**Branch:** `installations-page-jan2026`  
**File Type:** `.dmg` (Disk Image for macOS)

---

## Overview

This plan outlines how to host a `.dmg` file for the Oasis Browser (Mac Silicon version) and enable downloads from the installations page.

---

## Part 1: Hosting Options

### Option A: Cloudinary (Recommended for Quick Start) ⭐

**Pros:**
- ✅ Already integrated in your codebase
- ✅ Free tier: 25 GB storage, 25 GB bandwidth/month
- ✅ CDN with global edge locations
- ✅ Supports raw files (not just images)
- ✅ Easy to upload via existing scripts

**Cons:**
- ⚠️ Not optimized for large binary files (but works)
- ⚠️ Free tier may be limiting for high download volumes

**Implementation:**
1. Upload `.dmg` to Cloudinary as a "raw" resource type
2. Get the secure URL
3. Use the URL in the download button

**Cost:** Free (within limits) or ~$0.10/GB for bandwidth over free tier

---

### Option B: AWS S3 + CloudFront (Recommended for Production) ⭐⭐⭐

**Pros:**
- ✅ Industry standard for file hosting
- ✅ Highly scalable and reliable
- ✅ CloudFront CDN for fast global delivery
- ✅ Cost-effective for large files and high traffic
- ✅ Can set up versioning and lifecycle policies

**Cons:**
- ⚠️ Requires AWS account setup
- ⚠️ More complex initial setup

**Implementation:**
1. Create S3 bucket (e.g., `kahana-downloads`)
2. Upload `.dmg` file
3. Configure CloudFront distribution
4. Set up CORS if needed
5. Use CloudFront URL in download button

**Cost:** ~$0.023/GB storage + $0.085/GB transfer (first 10TB)

---

### Option C: GitHub Releases (Good for Open Source)

**Pros:**
- ✅ Free and reliable
- ✅ Automatic versioning
- ✅ Good for public releases
- ✅ No bandwidth limits

**Cons:**
- ⚠️ Requires public repository (or GitHub Pro for private)
- ⚠️ Less control over CDN/performance
- ⚠️ URLs are tied to releases

**Implementation:**
1. Create a GitHub release
2. Attach `.dmg` as release asset
3. Use GitHub's release asset URL

**Cost:** Free

---

### Option D: Direct Server Hosting

**Pros:**
- ✅ Full control
- ✅ No third-party dependencies

**Cons:**
- ⚠️ Uses your server bandwidth
- ⚠️ May slow down your main site
- ⚠️ Not ideal for large files

**Implementation:**
1. Place `.dmg` in `public/downloads/` folder
2. Serve via Next.js static files
3. Use `/downloads/oasis-browser-mac-silicon.dmg` URL

**Cost:** Included in hosting costs

---

## Recommendation

**For Quick Launch:** Use **Cloudinary** (Option A) - you're already set up  
**For Production Scale:** Use **AWS S3 + CloudFront** (Option B) - better for large files and high traffic

---

## Part 2: File Preparation

### Before Uploading:

1. **File Naming Convention:**
   - Recommended: `oasis-browser-mac-silicon-v1.0.0.dmg`
   - Or: `oasis-browser-mac-silicon.dmg` (if you update in place)

2. **File Size:**
   - Check file size (typical DMG: 50-200 MB)
   - Consider compression if > 200 MB

3. **Code Signing (Important for macOS):**
   - Ensure the app is properly code-signed
   - Users may see security warnings if not signed
   - Consider notarization for macOS Gatekeeper

4. **Version Information:**
   - Include version number in filename or metadata
   - Track versions for future updates

---

## Part 3: Upload Process

### If Using Cloudinary:

#### Step 1: Upload via Cloudinary Dashboard
1. Go to https://cloudinary.com/console
2. Navigate to Media Library
3. Click "Upload" → "Raw"
4. Upload your `.dmg` file
5. Copy the "Secure URL"

#### Step 2: Upload via Script (Automated)
Create `scripts/upload-dmg-to-cloudinary.js`:

```javascript
const cloudinary = require('cloudinary').v2;
const fs = require('fs');
const path = require('path');

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

async function uploadDMG() {
  const dmgPath = path.join(__dirname, '../path/to/your/oasis-browser-mac-silicon.dmg');
  
  try {
    const result = await cloudinary.uploader.upload(dmgPath, {
      resource_type: 'raw',
      folder: 'kahana-homepage/downloads',
      public_id: 'oasis-browser-mac-silicon',
      overwrite: true
    });
    
    console.log('✅ Upload successful!');
    console.log('Secure URL:', result.secure_url);
    console.log('Public ID:', result.public_id);
    
    return result.secure_url;
  } catch (error) {
    console.error('❌ Upload failed:', error);
    throw error;
  }
}

uploadDMG();
```

Run: `node scripts/upload-dmg-to-cloudinary.js`

---

### If Using AWS S3:

#### Step 1: Setup AWS S3 Bucket
```bash
# Install AWS CLI if not already installed
aws s3 mb s3://kahana-downloads --region us-east-1

# Upload file
aws s3 cp oasis-browser-mac-silicon.dmg s3://kahana-downloads/ \
  --acl public-read \
  --content-type application/x-apple-diskimage
```

#### Step 2: Setup CloudFront Distribution
1. Create CloudFront distribution
2. Point to S3 bucket
3. Get CloudFront URL (e.g., `https://d1234567890.cloudfront.net/oasis-browser-mac-silicon.dmg`)

---

## Part 4: Code Updates

### Update `pages/installations.jsx`

#### Step 1: Add Download URL Configuration

Add environment variable or constant for download URL:

```javascript
// At the top of the component or in a config file
const DOWNLOAD_URLS = {
  mac: {
    silicon: process.env.NEXT_PUBLIC_DMG_DOWNLOAD_URL || 'https://res.cloudinary.com/dlhpqrucv/raw/upload/v1/kahana-homepage/downloads/oasis-browser-mac-silicon.dmg',
    intel: null // For future Intel Mac support
  },
  windows: null,
  linux: null
};
```

#### Step 2: Update downloadButtons Array

```javascript
const downloadButtons = [
  {
    platform: 'Mac',
    icon: FaApple,
    description: 'macOS 10.15 or later (Apple Silicon)',
    status: 'available', // Changed from 'coming-soon'
    size: '~150 MB', // Update with actual file size
    downloadUrl: DOWNLOAD_URLS.mac.silicon,
    color: 'bg-[#4A6200] hover:bg-[#3E5300] border-[#4A6200]',
    textColor: 'text-white',
    architecture: 'Apple Silicon (M1/M2/M3)'
  },
  // ... rest of platforms
];
```

#### Step 3: Update handleDownload Function

```javascript
const handleDownload = (button) => {
  if (button.status === 'coming-soon') {
    alert(`${button.platform} version coming soon! We're working hard to bring you the best browsing experience.`);
    return;
  }
  
  if (button.downloadUrl) {
    // Track download (optional analytics)
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'download', {
        'platform': button.platform,
        'architecture': button.architecture || 'unknown',
        'file_type': 'dmg'
      });
    }
    
    // Create download link
    const link = document.createElement('a');
    link.href = button.downloadUrl;
    link.download = button.downloadUrl.split('/').pop(); // Extract filename
    link.target = '_blank'; // Open in new tab as fallback
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Optional: Show success message
    console.log(`Downloading ${button.platform} version...`);
  } else {
    console.error('Download URL not configured');
    alert('Download URL not configured. Please contact support.');
  }
};
```

#### Step 4: Update Button Rendering

```javascript
<button
  onClick={() => handleDownload(button)}
  className={`w-full p-8 rounded-2xl border-2 transition-all duration-200 ${button.color} ${button.textColor} group ${
    button.status === 'available' 
      ? 'cursor-pointer hover:shadow-lg transform hover:scale-[1.02]' 
      : 'cursor-not-allowed opacity-75'
  }`}
  disabled={button.status === 'coming-soon'}
>
  {/* ... existing content ... */}
  {button.architecture && (
    <p className="text-xs mt-2 opacity-90">{button.architecture}</p>
  )}
</button>
```

#### Step 5: Update Header Banner

```javascript
<div className="inline-flex items-center px-4 py-2 rounded-full bg-green-100 text-green-800 text-sm font-medium">
  <FaDownload className="w-4 h-4 mr-2" />
  Mac (Apple Silicon) now available for download!
</div>
```

---

## Part 5: Environment Variables

Add to `.env.local` (for local development):

```bash
NEXT_PUBLIC_DMG_DOWNLOAD_URL=https://res.cloudinary.com/dlhpqrucv/raw/upload/v1/kahana-homepage/downloads/oasis-browser-mac-silicon.dmg
```

Add to Heroku config vars (for production):

```bash
heroku config:set NEXT_PUBLIC_DMG_DOWNLOAD_URL="https://your-actual-url.com/oasis-browser-mac-silicon.dmg"
```

---

## Part 6: Testing Checklist

- [ ] Upload `.dmg` file to chosen hosting service
- [ ] Verify file is accessible via direct URL
- [ ] Test download on Mac (Apple Silicon)
- [ ] Verify file downloads correctly
- [ ] Check file size matches expected size
- [ ] Test on different browsers (Safari, Chrome, Firefox)
- [ ] Verify analytics tracking (if implemented)
- [ ] Test error handling (broken URL, network issues)
- [ ] Check mobile responsiveness of download button
- [ ] Verify file can be opened/installed after download

---

## Part 7: Security Considerations

1. **File Integrity:**
   - Consider providing SHA-256 checksum for verification
   - Display checksum on download page

2. **HTTPS:**
   - Always use HTTPS for downloads
   - Ensure CDN uses SSL

3. **Access Control (if needed):**
   - For private/beta releases, consider signed URLs
   - Or require authentication before download

4. **Rate Limiting:**
   - Monitor download rates
   - Set up alerts for unusual activity

---

## Part 8: Future Enhancements

1. **Version Management:**
   - Track download versions
   - Show "Latest Version" badge
   - Display release notes

2. **Download Analytics:**
   - Track download counts
   - Monitor download success rates
   - Geographic distribution

3. **Auto-Updates:**
   - Implement update checking mechanism
   - Notify users of new versions

4. **Multiple Architectures:**
   - Add Intel Mac support
   - Show architecture selector

5. **Checksum Verification:**
   - Display SHA-256 hash
   - Provide verification instructions

---

## Part 9: Quick Start (Cloudinary)

**Fastest path to get downloads working:**

1. **Upload DMG:**
   ```bash
   # Via Cloudinary Dashboard or use the upload script
   ```

2. **Get URL:**
   - Copy secure URL from Cloudinary
   - Example: `https://res.cloudinary.com/dlhpqrucv/raw/upload/v1/kahana-homepage/downloads/oasis-browser-mac-silicon.dmg`

3. **Update Code:**
   - Update `downloadButtons` array with URL
   - Change Mac status to `'available'`
   - Update `handleDownload` function

4. **Test:**
   - Visit `/installations` page
   - Click Mac download button
   - Verify download works

5. **Deploy:**
   - Commit changes
   - Push to branch
   - Deploy to production

---

## Estimated Timeline

- **Setup & Upload:** 15-30 minutes
- **Code Updates:** 30-45 minutes
- **Testing:** 15-30 minutes
- **Total:** 1-2 hours

---

## Support & Troubleshooting

### Common Issues:

1. **Download doesn't start:**
   - Check CORS settings on CDN
   - Verify URL is accessible
   - Check browser console for errors

2. **File is corrupted:**
   - Re-upload file
   - Verify file wasn't modified during upload
   - Check file size matches original

3. **macOS security warnings:**
   - Ensure app is code-signed
   - Consider notarization
   - Provide installation instructions

---

## Next Steps

1. Choose hosting option (recommend Cloudinary for quick start)
2. Upload `.dmg` file
3. Get download URL
4. Update `pages/installations.jsx` with code changes
5. Test download functionality
6. Deploy to production

---

**Questions or Issues?** Refer to this document or contact the development team.

