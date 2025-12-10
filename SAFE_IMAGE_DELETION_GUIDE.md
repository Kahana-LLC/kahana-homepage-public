# Safe Image Deletion Guide - Cloudinary Migration

## ⚠️ **IMPORTANT: Read Before Deleting**

**Current Status:** Some images still have direct local path references. **DO NOT DELETE ALL FILES YET.**

---

## 📊 Current Situation

### ✅ **Safe to Delete (Already Using Cloudinary):**
These images are fully migrated and can be safely deleted from local folders:

- All images in `public/images/` that are in `cloudinary-mapping.json`
- All images in `public/assets/` that are in `cloudinary-mapping.json`
- All images in `assets/images/` that are in `cloudinary-mapping.json`

### ⚠️ **Keep for Now (Still Referenced Locally):**
These files still have direct local path references in code:

1. **`pages/use-cases/job-search.jsx`** - Uses `/images/Welcome to Oasis.webp` directly
2. **Other files** - Check the list below

---

## 🔍 How to Check What's Safe to Delete

### Step 1: Verify Image is in Cloudinary
```bash
# Check if image is in cloudinary-mapping.json
grep "Welcome to Oasis.webp" cloudinary-mapping.json
```

### Step 2: Check if Code Uses Cloudinary
```bash
# Search for direct local path references
grep -r 'src="/images/Welcome to Oasis.webp"' pages/ components/
```

### Step 3: If Both Conditions Met → Safe to Delete
- ✅ Image exists in `cloudinary-mapping.json`
- ✅ Code uses `getCloudinaryImageUrl()` or Cloudinary URL
- ✅ No direct local path references

---

## 🗑️ Recommended Deletion Strategy

### **Option 1: Gradual Deletion (SAFEST)**
1. **Week 1:** Delete images that are 100% confirmed in Cloudinary AND using Cloudinary URLs
2. **Week 2:** Update remaining code to use Cloudinary, then delete those images
3. **Week 3:** Final cleanup of any remaining files

### **Option 2: Keep Local Files as Backup (RECOMMENDED)**
- **Keep local files** for now as a safety net
- **Benefits:**
  - Fallback if Cloudinary has issues
  - Easier development (no internet needed)
  - Can delete later once fully confident

### **Option 3: Delete Everything (RISKY - Not Recommended Yet)**
- Only do this after:
  - ✅ All code uses Cloudinary URLs
  - ✅ Tested in production for 1-2 weeks
  - ✅ No broken images reported
  - ✅ Have backup of all images

---

## 📋 Files Still Using Local Paths

Based on current codebase scan:

### **Pages:**
- `pages/use-cases/job-search.jsx` - `/images/Welcome to Oasis.webp`
- `pages/white-paper-future-of-ergonomic-work.jsx` - Multiple local paths
- `pages/enterprise-buyer-guide.jsx` - Some local paths
- `pages/manifesto.jsx` - Some local paths

### **Components:**
- `components/ProductSection.jsx` - Some local paths
- `components/CustomerSuccessSection.jsx` - Some local paths
- `components/WhitePaperCard.jsx` - Some local paths
- `components/NavbarDup.jsx` - Some local paths

---

## ✅ Safe Deletion Checklist

Before deleting ANY image file, verify:

- [ ] Image is listed in `cloudinary-mapping.json`
- [ ] All code references use `getCloudinaryImageUrl()` or Cloudinary URL
- [ ] No direct `/images/` or `/assets/` path references
- [ ] Image loads correctly from Cloudinary in production
- [ ] Tested on multiple devices/browsers
- [ ] Have backup of original file (just in case)

---

## 🛠️ Script to Find Safe-to-Delete Files

```bash
# Find all images in Cloudinary mapping
cat cloudinary-mapping.json | grep -o '"localPath": "[^"]*"' | sed 's/"localPath": "//' | sed 's/"$//' > cloudinary_images.txt

# Find all local image files
find public/images public/assets assets/images -type f \( -name "*.png" -o -name "*.jpg" -o -name "*.jpeg" -o -name "*.webp" -o -name "*.svg" \) > local_images.txt

# Compare (files in Cloudinary that exist locally)
comm -12 <(sort cloudinary_images.txt) <(sort local_images.txt) > safe_to_delete.txt
```

---

## 💡 My Recommendation

### **KEEP LOCAL FILES FOR NOW** because:

1. **Safety First:** Some code still uses local paths (like `job-search.jsx`)
2. **Development:** Local files help with offline development
3. **Fallback:** If Cloudinary has issues, local files provide backup
4. **No Urgency:** Files are already in Cloudinary, so they're not slowing down production

### **When to Delete:**
- ✅ After updating ALL code to use Cloudinary URLs
- ✅ After testing in production for 2-4 weeks
- ✅ After confirming no broken images
- ✅ When you're 100% confident everything works

### **What to Delete First (Safest):**
1. Large files that are definitely in Cloudinary (check mapping)
2. Files you've verified are loading from Cloudinary in production
3. Files that have no local path references in code

---

## 🚨 What NOT to Delete

- ❌ **Favicon files** (`favicon.ico`, `favicon.svg`) - Keep these
- ❌ **Images used in build process** - Check `next.config.js`
- ❌ **Images referenced in CSS** - Check `styles/` folder
- ❌ **Any file you're not 100% sure about**

---

## 📝 Action Plan

### **Immediate (This Week):**
1. ✅ Update `pages/use-cases/job-search.jsx` to use Cloudinary
2. ✅ Check all other files with local path references
3. ✅ Update them to use Cloudinary URLs

### **Next Week:**
1. ✅ Test all pages in production
2. ✅ Verify all images load from Cloudinary
3. ✅ Monitor for any broken images

### **After 2-4 Weeks:**
1. ✅ If everything works perfectly, consider deleting large files first
2. ✅ Keep small/important files as backup
3. ✅ Document which files were deleted

---

## 🎯 Bottom Line

**Recommendation: KEEP LOCAL FILES FOR NOW**

- They're already in Cloudinary (working)
- Some code still references them locally
- No harm in keeping them (they're not in production build)
- Can delete later once everything is confirmed working

**If you want to save space:** Delete the largest files first that you're 100% sure are in Cloudinary and working.

