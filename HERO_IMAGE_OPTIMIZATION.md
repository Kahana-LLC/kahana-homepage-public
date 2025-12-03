# Hero Image Optimization - CRITICAL

## Problem
The hero image `/images/Welcome to Oasis.svg` is **3.8 MB**, which is causing the 33.7s LCP (Largest Contentful Paint).

## Impact
- **Current LCP**: 33.7 seconds (should be < 2.5s)
- **Target LCP**: < 2.5 seconds
- **This single file is blocking 90%+ of the performance improvement**

## Solutions

### Option 1: Optimize SVG (Recommended)
1. Use SVGO to optimize: https://jakearchibald.github.io/svgomg/
2. Upload the SVG file
3. Enable optimizations (remove metadata, optimize paths, etc.)
4. Expected reduction: 80-95% (3.8MB → ~200-700KB)

### Option 2: Convert to WebP
1. Use Squoosh.app: https://squoosh.app
2. Upload the SVG
3. Convert to WebP format
4. Quality: 90-95
5. Expected size: ~300-600KB (85-90% reduction)

### Option 3: Use Raster Image
If the SVG is complex (has many paths/gradients):
1. Export as PNG at 2x resolution
2. Convert to WebP
3. Use responsive srcset for different screen sizes

## After Optimization
1. Replace the file in `/public/images/Welcome to Oasis.svg`
2. Update preload link if format changes
3. Test LCP improvement (should drop from 33.7s to ~2-3s)

## Priority
🔴 **CRITICAL** - This is the #1 performance blocker

