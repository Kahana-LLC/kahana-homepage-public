# Enterprise Buyer Guide - Image Optimization Priority

## 🔴 CRITICAL Priority (Very Large Files - Optimize Immediately!)

### Media Carousel Images (Used in User Experience Section)

1. **`/images/spatial.png`** - **6.5 MB** ⚠️⚠️⚠️
   - **Location**: Line 378 in `mediaItems` array
   - **Used in**: User Experience carousel section
   - **Action**: Convert to WebP
   - **Expected size**: ~600-900KB (85-90% reduction)

2. **`/images/WIP.png`** - **5.7 MB** ⚠️⚠️⚠️
   - **Location**: Line 385 in `mediaItems` array
   - **Used in**: User Experience carousel section
   - **Action**: Convert to WebP
   - **Expected size**: ~500-800KB (85-90% reduction)

3. **`/images/in-action.png`** - **4.9 MB** ⚠️⚠️
   - **Location**: Line 364 in `mediaItems` array
   - **Used in**: User Experience carousel section
   - **Action**: Convert to WebP
   - **Expected size**: ~450-750KB (85-90% reduction)

4. **`/images/ai.png`** - **4.4 MB** ⚠️⚠️
   - **Location**: Line 371 in `mediaItems` array
   - **Used in**: User Experience carousel section
   - **Action**: Convert to WebP
   - **Expected size**: ~400-700KB (85-90% reduction)

### Feature Section Images

5. **`/images/ai-2.png`** - **4.7 MB** ⚠️⚠️
   - **Location**: Line 842 (Deep AI Integration feature card)
   - **Action**: Convert to WebP
   - **Expected size**: ~450-750KB (85-90% reduction)

6. **`/images/data-protection .png`** - **4.5 MB** ⚠️⚠️
   - **Location**: Line 1094 (Safe Browsing & Threat Protection)
   - **Note**: Has a space in filename
   - **Action**: Convert to WebP
   - **Expected size**: ~400-700KB (85-90% reduction)

7. **`/images/visibility.png`** - **4.3 MB** ⚠️⚠️
   - **Location**: Line 1134 (Visibility & Monitoring)
   - **Action**: Convert to WebP
   - **Expected size**: ~400-700KB (85-90% reduction)

8. **`/images/applicaiton .png`** - **4.1 MB** ⚠️⚠️
   - **Location**: Line 1192 (Application Provisioning)
   - **Note**: Has a space in filename, also typo "applicaiton"
   - **Action**: Convert to WebP
   - **Expected size**: ~400-700KB (85-90% reduction)

9. **`/images/securtiy.png`** - **3.9 MB** ⚠️⚠️
   - **Location**: Line 1074 (Zero Trust Security)
   - **Note**: Typo in filename "securtiy" instead of "security"
   - **Action**: Convert to WebP
   - **Expected size**: ~350-650KB (85-90% reduction)

10. **`/images/desert-background-5.jpg`** - **3.4 MB** ⚠️
    - **Location**: Lines 463 and 1671 (background images)
    - **Used in**: Hero section and CTA section backgrounds
    - **Action**: Convert to WebP
    - **Expected size**: ~300-500KB (85-90% reduction)

11. **`/images/analytics.png`** - **3.4 MB** ⚠️
    - **Location**: Line 1260 (Digital Experience & Analytics)
    - **Action**: Convert to WebP
    - **Expected size**: ~300-500KB (85-90% reduction)

12. **`/images/cost.png`** - **3.6 MB** ⚠️
    - **Location**: Line 1239 (Efficiency and Cost Savings)
    - **Action**: Convert to WebP
    - **Expected size**: ~300-550KB (85-90% reduction)

13. **`/images/data-protection-2.png`** - **3.1 MB** ⚠️
    - **Location**: Line 1114 (Data Protection & DLP)
    - **Action**: Convert to WebP
    - **Expected size**: ~300-500KB (85-90% reduction)

14. **`/images/21a37c6a0cca7d51dd3260b4f0996bdebb758608.png`** - **2.9 MB** ⚠️
    - **Location**: Line 494 (Hero section browser preview)
    - **Action**: Convert to WebP
    - **Expected size**: ~250-450KB (85-90% reduction)

15. **`/images/productivity.png`** - **2.6 MB** ⚠️
    - **Location**: Line 1171 (Productivity & Performance)
    - **Action**: Convert to WebP
    - **Expected size**: ~250-450KB (85-90% reduction)

## 🟡 Medium Priority

16. **`/images/customs.png`** - **1.9 MB**
    - **Location**: Line 805 (Designed for How Your Mind Works)
    - **Action**: Convert to WebP
    - **Expected size**: ~200-350KB (80-85% reduction)

17. **`/images/BYOD.png`** - **766 KB**
    - **Location**: Line 1213 (Remote Access & BYOD)
    - **Action**: Convert to WebP
    - **Expected size**: ~100-150KB (80-85% reduction)

18. **`/images/trainable.png`** - **444 KB**
    - **Location**: Line 880 (Trainable AI Companion)
    - **Action**: Convert to WebP
    - **Expected size**: ~60-100KB (75-80% reduction)

## 🟢 Lower Priority (Smaller Files)

19. **`/images/welcom.jpeg`** - **118 KB**
    - **Location**: Line 734 (Free Agentic Browser card)
    - **Action**: Convert to WebP (optional, but easy win)
    - **Expected size**: ~80-100KB (20-30% reduction)

20. **`/images/enterprise.jpeg`** - **120 KB**
    - **Location**: Line 758 (Enterprise Browser card)
    - **Action**: Convert to WebP (optional, but easy win)
    - **Expected size**: ~80-100KB (20-30% reduction)

## 📊 Total Potential Savings

**Current total**: ~55+ MB of images
**After optimization**: ~5-7 MB (estimated)
**Savings**: ~48-50 MB (90%+ reduction!)

## 🎯 Recommended Order

1. **Start with carousel images** (spatial.png, WIP.png, in-action.png, ai.png) - These are the largest and used in a prominent section
2. **Then feature section images** (ai-2.png, data-protection .png, visibility.png, etc.)
3. **Background images** (desert-background-5.jpg)
4. **Smaller images** (BYOD.png, trainable.png, etc.)

## 📝 Notes

- Some filenames have spaces (e.g., `data-protection .png`, `applicaiton .png`) - be careful when updating code
- Some filenames have typos (e.g., `securtiy.png`, `applicaiton`) - consider fixing these when optimizing
- Background images (`desert-background-5.jpg`) are used twice - optimize once, use everywhere

