# Image Optimization Guide - Manual Resizing Required

## Problem
Since Next.js image optimization is disabled (`unoptimized: true` for Heroku), images are served at full resolution even when displayed much smaller. This wastes ~2,125 KiB of bandwidth.

## Solution
Create manually resized versions of images at the correct display sizes. The `sizes` attributes have been updated, but we need the actual smaller image files.

## Images to Resize

### 1. FeaturesShowcase Carousel Images
**Display size**: 339x220px (mobile), ~400px (desktop)
**Current size**: 3024x1964 or 2617x1964
**Target size**: 400x260px (1.5x for retina = 600x390px)

Files to resize:
- `/figma-imports/New Tab Page.webp` (374.9 KiB → ~60-80 KiB)
- `/figma-imports/er.webp` (348.6 KiB → ~50-70 KiB)
- `/figma-imports/Security 1.webp` (329.9 KiB → ~50-70 KiB)
- `/figma-imports/Tab Groups.webp` (233.8 KiB → ~40-60 KiB)
- `/figma-imports/Security 2.webp` (200.9 KiB → ~35-50 KiB)

### 2. WhyOasisSection Images
**Display size**: 300px height, ~45% width on desktop (~500px)
**Current size**: 2617x1964
**Target size**: 500x400px (1.5x for retina = 750x600px)

Files to resize:
- `/figma-imports/er.webp` (348.6 KiB → ~60-80 KiB)
- `/figma-imports/Frame 1321315005.webp` (139.5 KiB → ~30-40 KiB)
- `/figma-imports/Summarize with AI 3.webp` (176.2 KiB → ~40-50 KiB)

### 3. Main Page WhyOasisCards
**Display size**: max-w-[340px], aspect-[4/3] = 340x255px
**Current size**: 2617x1964
**Target size**: 340x255px (1.5x for retina = 510x383px)

Files to resize (same as WhyOasisSection):
- `/figma-imports/er.webp` (348.6 KiB → ~40-60 KiB)
- `/figma-imports/Frame 1321315005.webp` (139.5 KiB → ~25-35 KiB)
- `/figma-imports/Summarize with AI 3.webp` (176.2 KiB → ~30-40 KiB)

### 4. ProductSection Hero Image
**Display size**: 706x459px (desktop), smaller on mobile
**Current size**: 3024x1964
**Target size**: 800x520px (1.5x for retina = 1200x780px)

File to resize:
- `/images/Welcome to Oasis.webp` (80.4 KiB → ~50-70 KiB)

### 5. ProductTourCard Image
**Display size**: 896x582px (desktop)
**Current size**: 3024x1701
**Target size**: 1000x650px (1.5x for retina = 1500x975px)

File to resize:
- `/figma-imports/Custom Themes.webp` (300.0 KiB → ~80-100 KiB)

## How to Resize

### Option 1: Squoosh.app (Recommended)
1. Go to https://squoosh.app
2. Upload the original image
3. Set output format to WebP
4. Set quality to 85-90
5. Resize to target dimensions (or 1.5x for retina)
6. Download and replace the original file

### Option 2: ImageMagick (Command Line)
```bash
# Resize to target size
magick input.webp -resize 400x260 -quality 85 output.webp

# For retina (1.5x)
magick input.webp -resize 600x390 -quality 85 output.webp
```

### Option 3: Create Multiple Sizes
For best results, create multiple sizes and use responsive images:
- Small: 400x260px (mobile)
- Medium: 600x390px (tablet, retina mobile)
- Large: 800x520px (desktop)
- XLarge: 1200x780px (retina desktop)

Then update components to use `srcSet` or conditional rendering.

## Expected Savings

- **Total savings**: ~2,125 KiB (2.1 MB)
- **Faster page load**: Especially on mobile
- **Better LCP**: Largest Contentful Paint will improve significantly
- **Reduced bandwidth**: Important for mobile users

## After Resizing

1. Replace the original files with resized versions
2. Test on local development
3. Commit and push to GitHub
4. Verify on Heroku deployment
5. Check PageSpeed Insights again

## Notes

- Keep aspect ratios the same when resizing
- Use quality 85-90 for WebP to maintain visual quality
- Consider creating 1.5x versions for retina displays
- Test on actual devices to ensure quality is acceptable
