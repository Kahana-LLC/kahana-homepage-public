# Debugging console noise (Kahana marketing site)

Internal guide for distinguishing **site bugs** from **browser extension noise** and **expected third-party tags** after consent.

## Quick verdict

| Console signal | Source | Action |
|----------------|--------|--------|
| `main-world-document-start-active.js`, `isolated-world-tcf-api.js`, `main-world-document-start-consent-manager.js` | Chrome **privacy/consent extension** (IAB TCF API hooking) | Ignore for site fixes; retest without extensions |
| `Started RI consent manager`, `CmpFilters controller`, `TcfApiCommandDispatcher` | Privacy/consent **browser extension** | Same |
| `poetry.js`, `inject.bundle.js`, `apollo_everywhere` | **Apollo.io** Chrome extension | Same |
| `isolated-world-notifications.js` | Another extension | Same |
| `Unchecked runtime.lastError: message port closed` | Extension messaging | Same |
| `[Cloudinary] Mapping not found` (repeating thousands of times) | **Site** (`utils/cloudinary-mapper.js`, fixed) | Fixed in `873fd4b` |
| Warmly / `getwarmly.com` CORS errors on route change | **Site** (Warmly script, fixed) | Fixed in `60f2b84` |
| Stacks only in `gtm.js`, `adsbygoogle.js`, `js?id=G-KQHFL9605P` | **GTM / Google** after consent | Tune GTM, not React |
| Stacks in `_app-*.js`, `framework-*.js`, page chunks | **Site** | File a code issue with path |

Repo search: **no** references to `__tcfapi`, `TcfApi`, or `CmpFilters` under `pages/`, `components/`, or `utils/`.

The site loads Google tags **after cookie consent** from `pages/_app.js` (gtag, GTM `GTM-WBXNXKQ`, AdSense when advertising is accepted). Those scripts may call `__tcfapi` if an extension has stubbed it on the page; the **verbose TCF dispatcher logs** still come from the extension, not from Kahana.

## Related fixes (commits)

| Commit | What changed |
|--------|----------------|
| `60f2b84` | Removed Warmly from app and consent |
| `873fd4b` | Removed Crisp, silenced Cloudinary warn flood, stabilized consent script loading |
| `82d58e2` | Navbar client navigation fixes |

Chat widgets (Tawk, etc.) must stay **out of GTM** container `GTM-WBXNXKQ` — see comment in `pages/_app.js`.

---

## Clean-room verification (~5 minutes)

Use the same URL you care about (`https://kahana.co` or your beta Heroku hostname).

### Chrome Incognito (extensions off)

1. Open `chrome://extensions` → for each extension, turn **Allow in Incognito** **off** (especially Apollo, ad blockers, privacy/consent tools).
2. DevTools → **Console** → enable **Selected context only** (or use filter below).
3. Hard refresh (`Cmd+Shift+R`), accept or decline cookies once.
4. Click 5 internal links (nav + one in-page CTA). Scroll the homepage ~1 minute.

**Console filter** (paste in the filter box):

```
-url:chrome-extension -inject.bundle -poetry.js -isolated-world -main-world-document
```

### Pass criteria

- No repeating `[Cloudinary] Mapping not found` (after `873fd4b` is deployed).
- **Network** tab: no requests to `getwarmly.com`, `crisp.chat`, or `tawk.to` (Warmly/Crisp removed from app; Tawk removed from GTM).
- Address bar **and** main page content update together on internal links (no manual refresh).
- Console **warning count stays stable** while idle (not climbing into thousands).

### Safari Private (control)

Repeat without Chrome extensions. If Safari is clean but Chrome is noisy with extensions on, treat Chrome TCF/Apollo lines as environmental.

### Verification log (2026-05-27)

Automated checks against **production** `https://kahana.co`:

| Check | Result |
|-------|--------|
| HTML contains Warmly / Tawk | **No** |
| HTML contains `client.crisp.chat` dns-prefetch | **Yes** on prod HTML at time of check — **stale deploy**; removed in repo `pages/_document.js` in `873fd4b`. Redeploy to clear. |
| Client nav `/about`, `/pricing` | **Pass** — titles and main headings match routes |
| App source: TCF / CmpFilters | **None** |

---

## Stack audit (if warnings remain after filter)

For each warning, open the stack trace (rightmost column in DevTools):

| Stack starts with | Classification |
|-------------------|----------------|
| `_app-*.js`, `framework-*.js`, numbered page chunks (e.g. testimonials) | **Site** — open an issue with file/chunk |
| `gtm.js`, `googletagmanager.com`, `adsbygoogle.js`, `js?id=G-KQHFL9605P` | **GTM / Google** — expected after consent; adjust tags in GTM |
| `chrome-extension://`, `inject.bundle.js`, `isolated-world`, `main-world-document` | **Extension** — ignore for site |
| No Kahana chunk and no GTM | **Third-party or extension** — confirm in Network tab |

---

## GTM preview checklist

Container: **`GTM-WBXNXKQ`** (referenced in `pages/_app.js`).

In [Google Tag Manager](https://tagmanager.google.com/) → **Preview** → connect to beta or production hostname:

- [ ] **No** tags firing for Tawk, Warmly, Crisp, or duplicate chat widgets (Tawk removed per ops; app no longer loads Warmly/Crisp).
- [ ] Analytics tags fire only when **analytics** consent matches your triggers.
- [ ] Advertising / AdSense-related tags fire only when **advertising** consent matches.
- [ ] No unexpected duplicate pageview or chat loaders on `routeChangeComplete`.

No application code change is required if Preview matches consent; fix misfiring tags in GTM only.

---

## Copy for reporters / support

Send this (adjust URL if needed):

> We deployed fixes for site performance and navigation (Warmly removed, console spam from our image mapper fixed). Please retest in a **private/incognito window** with **browser extensions turned off** (Apollo, privacy/TCF tools, and ad blockers are common sources of noise).
>
> In Chrome: `chrome://extensions` → disable “Allow in Incognito” for all extensions, then hard refresh the site.
>
> Please confirm:
> 1. Clicking nav links updates **both** the address bar **and** the page content (no manual refresh).
> 2. The site feels responsive when scrolling the homepage.
>
> If you still see console messages mentioning `TcfApiCommandDispatcher`, `isolated-world-tcf-api`, or `poetry.js`, those come from **browser extensions**, not from kahana.co. You can ignore them for reporting site bugs, or share a screenshot with extensions disabled for comparison.

---

## Kahana app logging (production)

- Client `console.log` / `console.info` are stripped in production builds (`next.config.js` → `compiler.removeConsole`).
- Use `utils/logger.js`: `debug` / `info` / `warn` only when `NODE_ENV=development` or `NEXT_PUBLIC_DEBUG_LOG=true`.
- Do **not** set `NEXT_PUBLIC_MIXPANEL_DEBUG`, `NEXT_PUBLIC_CLOUDINARY_DEBUG`, or `NEXT_PUBLIC_DEBUG_LOG` on Heroku production.

## What we are not doing in this pass

- **Not** implementing Google Consent Mode v2 or a full IAB TCF CMP (would not remove extension logs).
- **Not** trying to suppress extension console output from site code (not possible or reliable).

## Success definition

- Clean-room: stable console, working client nav, no Warmly/Crisp/Tawk in Network (after latest deploy).
- TCF/Apollo lines only with extensions enabled → documented as environmental.
- Reporters can verify nav without DevTools (extensions + React DevTools amplify noise).
