# Core Web Vitals — Technical Fix Guide

## Core Problem Summary

Your page fails Core Web Vitals primarily due to:

**LCP too slow (2.7s real, 13.9s lab)**

Caused by:

- Oversized, unoptimized images (Cloudinary)
- ~1MB unused JavaScript (Next.js bundles)
- Heavy third-party scripts (YouTube)
- Slow TTFB (1.1s)

---

## 1. Image Optimization (Highest Impact)

### Problem

- Images served at 800–1200px, displayed at ~250–350px
- ~444KB unnecessary payload
- Likely hurting LCP directly

### Fix

**Use responsive images correctly (Next.js)**

If using `next/image`:

```jsx
import Image from "next/image";

<Image
  src="/hero.png"
  alt="Hero"
  width={350}
  height={220}
  sizes="(max-width: 768px) 100vw, 350px"
  priority
/>
```

**Fix Cloudinary transformations**

Update URLs to dynamically size:

Current:

```
w_800,c_fill
```

Fix:

```
w_auto,c_scale,f_auto,q_auto,dpr_auto
```

Example:

```
https://res.cloudinary.com/.../image/upload/w_auto,c_scale,f_auto,q_auto,dpr_auto/...
```

**Ensure LCP image is optimized**

Must be:

- `<img>` or `<Image priority />`
- Not lazy-loaded
- Preloaded

```html
<link rel="preload" as="image" href="/hero.webp">
```

---

## 2. Remove Unused JavaScript (~1MB Savings)

### Problem

Huge unused bundles:

- `/white-paper...js` (~294KB)
- `/enterprise-buyer-guide...js` (~146KB)

These should NOT load on the homepage.

### Fix

**Use dynamic imports (Next.js)**

```jsx
import dynamic from "next/dynamic";

const HeavyComponent = dynamic(() => import("./HeavyComponent"), {
  ssr: false,
});
```

**Split pages properly**

Check if you're importing page-level components globally:

```jsx
// ❌ Bad
import WhitePaper from "@/pages/white-paper";

// ✅ Good — only import inside that route, never in shared layout
```

**Analyze bundle**

```bash
ANALYZE=true npm run build
```

Install analyzer:

```bash
npm install @next/bundle-analyzer
```

**Remove dead code**

- Delete unused components
- Tree-shake libraries
- Replace large libs (e.g. `moment` → `dayjs`)

---

## 3. YouTube Embed Optimization (~500KB Savings)

### Problem

YouTube loads:

- ~768KB JS
- ~94KB CSS

### Fix

**Replace with lite embed**

```bash
npm install react-lite-youtube-embed
```

```jsx
import LiteYouTubeEmbed from "react-lite-youtube-embed";

<LiteYouTubeEmbed
  id="VIDEO_ID"
  title="Video"
/>
```

Loads iframe only on click.

**Or lazy-load iframe manually**

```jsx
{showVideo && (
  <iframe src="https://www.youtube.com/embed/..." />
)}
```

---

## 4. Reduce Unused CSS (~115KB)

### Fix

**Enable CSS purging (Tailwind or PostCSS)**

If using Tailwind:

```js
// tailwind.config.js
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
};
```

**Remove global CSS bloat**

- Audit large `.css` files
- Split per-page styles

---

## 5. Improve TTFB (1.1s → <0.8s)

### Problem

Server response too slow.

### Fix

**Enable caching (Next.js)**

Static pages:

```js
export async function getStaticProps() {
  return {
    props: {},
    revalidate: 60, // ISR
  };
}
```

**Use edge / CDN caching**

If using Vercel:

```js
export const config = {
  runtime: "edge",
};
```

**Add cache headers**

```js
res.setHeader(
  "Cache-Control",
  "public, max-age=31536000, immutable"
);
```

---

## 6. Cache Fonts Properly

### Problem

Fonts cached for only 4 hours.

### Fix

**Increase cache TTL**

```
Cache-Control: public, max-age=31536000, immutable
```

**Use `next/font`**

```js
import { Geist } from "next/font/google";

const geist = Geist({
  subsets: ["latin"],
  display: "swap",
});
```

---

## 7. Fix LCP Specifically

### Checklist

- [ ] Hero image uses `priority`
- [ ] No lazy-loading on LCP element
- [ ] Font blocking minimized
- [ ] Critical CSS inlined
- [ ] No JS blocking render

---

## 8. Reduce Main Thread Blocking

### Problem

Long tasks detected.

### Fix

**Defer non-critical JS**

```html
<script src="/script.js" defer></script>
```

**Use `requestIdleCallback`**

```js
requestIdleCallback(() => {
  loadNonCriticalStuff();
});
```

---

## 9. Fix Console Error (429)

### Problem

`ipapi.co` → 429 Too Many Requests

### Fix

- Add caching layer
- Debounce requests
- Or remove if not critical

---

## 10. Accessibility (Minor)

### Fix contrast issues

```css
color: #333;        /* instead of light gray */
background: #fff;
```

---

## Expected Improvements

If you implement the above:

| Metric         | Before     | After              |
| -------------- | ---------- | ------------------ |
| LCP            | 2.7s       | ~1.8–2.2s          |
| Performance    | 54         | 80–95              |
| JS size        | ~1MB waste | ~70–80% reduction  |
| Image weight   | -444KB     | Much faster load   |

---

## Copy-Paste Task List (for Cursor)

1. Replace all Cloudinary image URLs with: `w_auto,c_scale,f_auto,q_auto,dpr_auto`
2. Convert all `<img>` to `next/image` with correct `sizes`
3. Add `priority` to hero image (LCP element)
4. Remove unused Next.js page imports from main bundle
5. Add dynamic imports for heavy components
6. Replace YouTube iframe with `react-lite-youtube-embed`
7. Enable bundle analyzer and remove unused JS
8. Enable Tailwind/PurgeCSS to remove unused CSS
9. Add caching headers for fonts (1 year TTL)
10. Convert pages to ISR or static where possible
11. Reduce TTFB using CDN / edge functions
12. Fix ipapi rate limit or remove dependency
