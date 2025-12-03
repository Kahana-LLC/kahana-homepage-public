# Image Optimization Guide

## ✅ Completed: Unsplash URLs Updated

All Unsplash image URLs in `utils/pexels.js` have been updated to include `&auto=format`, which automatically serves WebP format when supported by the browser.

## 🎯 Priority Images to Optimize

These images are used on the main landing page and should be optimized for better performance:

### 🔴 CRITICAL PRIORITY (Very Large Files - Optimize Immediately!)

1. **`/figma-imports/Security 1.png`** - **4.5 MB** ⚠️
   - **Current size**: 4.5 MB (FeaturesShowcase carousel)
   - **Action**: Convert PNG → WebP
   - **Expected size after optimization**: ~500-800 KB (80-90% reduction!)
   - **Impact**: This is blocking page load performance

2. **`/figma-imports/Security 2.png`** - **3.9 MB** ⚠️
   - **Current size**: 3.9 MB (FeaturesShowcase carousel)
   - **Action**: Convert PNG → WebP
   - **Expected size after optimization**: ~400-700 KB (80-90% reduction!)
   - **Impact**: This is blocking page load performance

3. **`/figma-imports/Personalization Features.png`** - **5.3 MB** ⚠️
   - **Current size**: 5.3 MB (if used)
   - **Action**: Convert PNG → WebP
   - **Expected size after optimization**: ~600-900 KB (80-90% reduction!)
   - **Impact**: Massive performance impact if loaded

### High Priority (Above the Fold / Hero Section)

4. **`/images/Welcome to Oasis.svg`** ✅
   - Already SVG format (optimal)
   - No optimization needed

5. **`/figma-imports/Custom Themes.png`** - **3.1 MB** ⚠️
   - **Current size**: 3.1 MB (ProductTourCard - above the fold)
   - **Action**: Convert PNG → WebP
   - **Expected size after optimization**: ~300-500 KB (85-90% reduction!)
   - **Impact**: Critical - this is above the fold and affects LCP

### Medium Priority (Main Content)

6. **`/figma-imports/Frame 1321315005.jpg`** - **77 KB**
   - **Current size**: 77 KB (Why Oasis section)
   - **Action**: Convert JPG → WebP
   - **Expected size after optimization**: ~50-60 KB (20-30% reduction)
   - **Impact**: Moderate improvement

7. **`/figma-imports/Summarize with AI 3.jpg`** - **81 KB**
   - **Current size**: 81 KB (Why Oasis section)
   - **Action**: Convert JPG → WebP
   - **Expected size after optimization**: ~55-65 KB (20-30% reduction)
   - **Impact**: Moderate improvement

### Already Optimized (SVG)

- `/figma-imports/er.svg` ✅
- `/figma-imports/Tab Groups.svg` ✅
- `/figma-imports/New Tab Page.svg` ✅

## 🛠️ How to Optimize Images

### Option 1: Squoosh.app (Recommended - Free, Browser-based)

1. Go to https://squoosh.app
2. Drag and drop your image
3. Select **WebP** format
4. Adjust quality slider (recommended: 80-85 for photos, 90-95 for graphics)
5. Click "Download"
6. Replace the original file with the optimized version

### Option 2: ImageOptim (Mac - Free)

1. Download from https://imageoptim.com
2. Drag images into ImageOptim
3. It automatically optimizes and replaces files
4. For WebP conversion, use Squoosh.app instead

### Option 3: TinyPNG (Online - Free tier)

1. Go to https://tinypng.com
2. Upload images (up to 20 at a time on free tier)
3. Download optimized versions
4. Note: TinyPNG compresses but doesn't convert to WebP by default

### Option 4: Command Line (Advanced)

```bash
# Install cwebp (WebP encoder)
# macOS: brew install webp
# Linux: sudo apt-get install webp

# Convert PNG to WebP
cwebp -q 85 input.png -o output.webp

# Convert JPG to WebP
cwebp -q 85 input.jpg -o output.webp
```

## 📝 Optimization Checklist

- [x] Update Unsplash URLs with `&auto=format`
- [ ] Convert `/figma-imports/Custom Themes.png` → WebP
- [ ] Convert `/figma-imports/Frame 1321315005.jpg` → WebP
- [ ] Convert `/figma-imports/Summarize with AI 3.jpg` → WebP
- [ ] Convert `/figma-imports/Security 1.png` → WebP
- [ ] Convert `/figma-imports/Security 2.png` → WebP
- [ ] Update component code to use `.webp` extensions
- [ ] Test images load correctly
- [ ] Verify file size reductions

## 🔄 After Converting to WebP

After converting images to WebP, you'll need to update the file paths in the code:

### Update `components/ProductTourCard.jsx`:
```javascript
src="/figma-imports/Custom Themes.webp"  // Changed from .png
```

### Update `pages/index.js`:
```javascript
image: "/figma-imports/Frame 1321315005.webp",  // Changed from .jpg
image: "/figma-imports/Summarize with AI 3.webp",  // Changed from .jpg
```

### Update `components/FeaturesShowcase.jsx`:
```javascript
image: "/figma-imports/Security 1.webp",  // Changed from .png
image: "/figma-imports/Security 2.webp",  // Changed from .png
```

## 📊 Expected Performance Improvements

After optimization:
- **Hero image**: Already optimal (SVG)
- **Carousel images**: 30-50% smaller file sizes
- **Why Oasis images**: 30-40% smaller file sizes
- **Overall page load**: Faster LCP (Largest Contentful Paint)
- **Bandwidth savings**: Significant reduction for mobile users

## 🚀 Next Steps

1. Use Squoosh.app to convert the 5 images listed above
2. Replace original files with WebP versions
3. Update file paths in code (see above)
4. Test locally to ensure images load correctly
5. Commit and deploy

## 💡 Pro Tips

- **Quality settings**: 
  - Photos: 80-85 quality
  - Graphics/screenshots: 90-95 quality
  - Icons: 100 quality (or keep as SVG)

- **Fallback support**: Next.js Image component automatically handles WebP with fallback to original format if needed

- **File naming**: Keep original names, just change extension (e.g., `image.png` → `image.webp`)

