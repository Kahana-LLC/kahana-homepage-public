# CDN Migration Plan: adam-cdn-updates-dec2025

## Objective
Migrate only CDN/image/video related updates from `Konika-December-updates` to `adam-cdn-updates-dec2025` (based on `main`), while preserving all other changes from `main` (especially `pages/enterprise-buyer-guide.jsx`).

## Core CDN Files to Migrate

### 1. Cloudinary Utilities (MUST MIGRATE)
- ✅ `utils/cloudinary.js` - Core Cloudinary URL generation
- ✅ `utils/cloudinary-mapper.js` - Maps local paths to Cloudinary URLs
- ✅ `utils/cloudinary-upload.js` - Server-side upload functionality
- ✅ `cloudinary-mapping.json` - Mapping of all uploaded images

### 2. Upload Scripts (MUST MIGRATE)
- ✅ `scripts/upload-to-cloudinary.js` - Bulk upload script
- ✅ `scripts/upload-missing-images.js` - Upload missing images
- ✅ `scripts/remove-redundant-images.js` - Cleanup script

### 3. Documentation (SHOULD MIGRATE)
- ✅ `CDN_OPTIMIZATION_PLAN.md` - Implementation plan
- ✅ `CDN_VERIFICATION_GUIDE.md` - How to verify CDN is working
- ✅ `IMAGE_OPTIMIZATION_SUMMARY.md` - Image optimization details
- ⚠️ `MISSING_IMAGES_FIX_SUMMARY.md` - May be useful
- ⚠️ `SAFE_IMAGE_DELETION_GUIDE.md` - May be useful

### 4. Components Using Cloudinary (SELECTIVE MIGRATION)

**Components that use `getCloudinaryImageUrl()`:**
- ✅ `components/ProductSection.jsx` - Hero image
- ✅ `components/FeaturesShowcase.jsx` - Carousel images
- ✅ `components/ProductTourCard.jsx` - Video thumbnail
- ✅ `components/CustomerSuccessSection.jsx` - Logo
- ✅ `components/NavbarDup.jsx` - Background images
- ✅ `components/SEO.jsx` - Schema logo URL
- ⚠️ `components/BlogCard.jsx` - Check if CDN-related
- ⚠️ `components/Footer.jsx` - Check if CDN-related

**Pages that use Cloudinary:**
- ✅ `pages/index.js` - Homepage images
- ✅ `pages/products/enterprise-browser.jsx` - Background images
- ✅ `pages/products/free-agentic-browser.jsx` - Background images
- ✅ `pages/use-cases/job-search.jsx` - Images
- ✅ `pages/security-guide.jsx` - Logo
- ⚠️ `pages/oasis-pricing.jsx` - Check if CDN-related changes
- ⚠️ `pages/manifesto.jsx` - Check if CDN-related
- ⚠️ `pages/white-paper-future-of-ergonomic-work.jsx` - Check if CDN-related

### 5. Other Files (REVIEW CAREFULLY)
- ⚠️ `next.config.js` - Check for CDN-related config
- ⚠️ `package.json` - Check for Cloudinary dependencies
- ⚠️ `utils/pexels.js` - May have CDN integration
- ⚠️ `utils/schemaUtils.js` - May have Cloudinary URLs
- ⚠️ `pages/_document.js` - May have CDN-related changes
- ⚠️ `pages/test-cloudinary.jsx` - Test page (may not need in production)

### 6. Files to EXCLUDE (DO NOT MIGRATE)
- ❌ `pages/enterprise-buyer-guide.jsx` - Keep from main
- ❌ Any non-CDN related component changes
- ❌ Test files (unless needed)
- ❌ OAuth test files

## Migration Strategy

### Phase 1: Core Infrastructure
1. Copy Cloudinary utility files
2. Copy cloudinary-mapping.json
3. Copy upload scripts
4. Update package.json if Cloudinary dependency is needed

### Phase 2: Component Updates
1. For each component, check the diff to see if changes are CDN-related
2. If yes, cherry-pick only the CDN-related changes
3. If no, skip that component

### Phase 3: Page Updates
1. Review each page diff carefully
2. Only migrate image/video URL changes
3. Preserve all other functionality from main

### Phase 4: Configuration
1. Check next.config.js for CDN-related changes
2. Add environment variable documentation
3. Update .env.local with Cloudinary credentials

## Commands to Execute

### Step 1: Copy Core Files
```bash
# Core utilities
git show Konika-December-updates:utils/cloudinary.js > utils/cloudinary.js
git show Konika-December-updates:utils/cloudinary-mapper.js > utils/cloudinary-mapper.js
git show Konika-December-updates:utils/cloudinary-upload.js > utils/cloudinary-upload.js
git show Konika-December-updates:cloudinary-mapping.json > cloudinary-mapping.json

# Scripts
git show Konika-December-updates:scripts/upload-to-cloudinary.js > scripts/upload-to-cloudinary.js
git show Konika-December-updates:scripts/upload-missing-images.js > scripts/upload-missing-images.js
git show Konika-December-updates:scripts/remove-redundant-images.js > scripts/remove-redundant-images.js
```

### Step 2: Review and Copy Component Changes
For each component, review the diff and selectively apply:
```bash
# Example for ProductSection.jsx
git diff main...Konika-December-updates -- components/ProductSection.jsx
# Manually apply only CDN-related changes
```

### Step 3: Review Package Dependencies
```bash
git diff main...Konika-December-updates -- package.json
# Check if cloudinary package needs to be added
```

## Verification Checklist

- [ ] All Cloudinary utilities are in place
- [ ] cloudinary-mapping.json exists and is valid
- [ ] Components use getCloudinaryImageUrl() correctly
- [ ] Images load from Cloudinary CDN
- [ ] enterprise-buyer-guide.jsx is unchanged from main
- [ ] No non-CDN changes were accidentally migrated
- [ ] Environment variables are documented
- [ ] .env.local has NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME

## Notes

- The enterprise-buyer-guide.jsx in main should remain untouched
- Only image/video URL changes should be migrated
- Test thoroughly after migration
- Keep a backup of main branch state
