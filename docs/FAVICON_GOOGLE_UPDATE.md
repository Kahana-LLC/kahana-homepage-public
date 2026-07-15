# Updating the Favicon in Google Search Results

Google shows your site favicon next to "Kahana" in search results. If you see an old logo, use these steps to fix it.

## 1. Replace the favicon files (if you have a new logo)

Put your **current** logo in these places:

| File | Location | Notes |
|------|----------|--------|
| **favicon.svg** | `public/favicon.svg` | Prefer SVG; square, simple mark (no text) works best at small sizes. |
| **favicon.ico** | `public/favicon.ico` | Include at least 48×48 and 32×32. |
| **apple-touch-icon.png** | `public/apple-touch-icon.png` | 180×180 PNG for Safari / iMessage (Apple prefers PNG over SVG). |

- **Google:** Favicon should be at least **48×48 px** and square (1:1).
- **Design:** Use only the icon/symbol (e.g. circular mark), not the full “Kahana” wordmark, so it’s clear at 16×16–48×48.

If you only have a PNG of the new logo:

1. Resize it to 48×48 (and optionally 32×32, 16×16).
2. Convert to `.ico` (e.g. [favicon.io](https://favicon.io) or similar).
3. Replace `public/favicon.ico`.
4. Export a 180×180 PNG as `public/apple-touch-icon.png`.
5. Optionally export a square SVG of the mark and replace `public/favicon.svg`.

## 2. Cache-bust version

In `pages/_document.js`, favicon URLs currently use `?v=4`. When you change the logo:

1. Replace `favicon.svg`, `favicon.ico`, and/or `apple-touch-icon.png` in `public/` as above.
2. Bump the version (e.g. `?v=5`) in `_document.js` so browsers, Apple, and Google refetch.

## 3. Deploy

Deploy the updated site so that:

- `https://about.kahana.io/favicon.ico`
- `https://about.kahana.io/favicon.svg`
- `https://about.kahana.io/apple-touch-icon.png`

serve the **new** files (apex `kahana.io` may redirect to this host).

## 4. Ask Google to update (Search Console)

Google caches favicons and can take days or weeks to update. To speed it up:

1. Open [Google Search Console](https://search.google.com/search-console).
2. Select the property for **about.kahana.io** (or `kahana.io` if that is the verified property).
3. Use **URL Inspection**.
4. Enter: `https://about.kahana.io`
5. Click **Request indexing**.

Re-indexing the homepage can help Google pick up the new favicon within about 24–48 hours (sometimes longer).

## 5. iMessage / Safari still show old title or icon

Apple Link Presentation and Safari suggestions cache aggressively.

1. Confirm live HTML has the new `og:title` and favicon `?v=` query.
2. Scrape with [opengraph.xyz](https://www.opengraph.xyz) or the [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/).
3. On your phone: clear Safari website data for `about.kahana.io`, or share a one-time URL like `https://about.kahana.io/?s=1`, then try the clean URL again.

## 6. Optional: 48×48 PNG for Google

Google supports SVG; if you want to be explicit about size, you can add a 48×48 PNG:

1. Export your logo mark as **48×48 PNG**.
2. Save as `public/favicon-48.png`.
3. In `pages/_document.js`, add:
   ```html
   <link rel="icon" type="image/png" href="/favicon-48.png?v=4" sizes="48x48" />
   ```

## Summary

- **Old logo in Google** → Replace `public/favicon.svg`, `public/favicon.ico`, and `public/apple-touch-icon.png` with the new logo, deploy, then request indexing for `https://about.kahana.io` in Search Console.
- **Cache-bust** → Currently `?v=4`; bump higher when you change the logo again.
- **Sizes** → Favicon is square; 48×48 px minimum for Google; 180×180 PNG for Apple touch.
