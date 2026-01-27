# PostHog: Tracking Production (kahana.co), Not Just Localhost

**Your site:** https://kahana.co/

If PostHog is **not tracking https://kahana.co correctly** (e.g. you only see localhost, or no events from production), work through the steps below.

---

## Quick checklist: “Why isn’t kahana.co tracking?”

1. **PostHog only runs after analytics consent**  
   Events are sent only when the user has accepted analytics (or “Accept all”). Many visitors on kahana.co may dismiss or reject the banner, so you’ll see fewer events than on localhost where you usually accept. That’s expected.

2. **Verify in a clean session**  
   - Open https://kahana.co in an **incognito/private** window.  
   - Click **“Accept all”** (or accept analytics) in the cookie banner.  
   - Visit 2–3 pages (e.g. /, /pricing, /blog).  
   - In PostHog: **Activity** or **Events** → filter by property `$host` = `kahana.co`.  
   You should see `$pageview` and other events for that session.

3. **Check the browser**  
   - Open DevTools → **Network**.  
   - Filter by `posthog` or `i.posthog.com`.  
   - After accepting analytics and loading a page, you should see requests to `us.i.posthog.com` (e.g. `/capture/`, `/e/`).  
   - If those requests are **blocked** or **red**, something is preventing the script from loading (CSP, ad blocker, corporate proxy).

4. **PostHog “Authorized domains” — Session Replay only**  
   **“Authorized domains”** in PostHog applies to **Session Replay**, not to **event ingestion** ($pageview, etc.). So adding kahana.co there does **not** by itself fix missing pageviews.  
   - **Events (e.g. $pageview):** PostHog Cloud normally accepts events from any domain. There is no separate “authorized domains for events” that would drop kahana.co.  
   - **Session Replay:** If you use it, add the **exact** URL(s) your site uses. Per [PostHog’s docs](https://posthog.com/docs/session-replay/troubleshooting):  
     - Use full URLs, e.g. **`https://kahana.co`**.  
     - If you add `https://www.kahana.co`, that does **not** allow `https://kahana.co` (no www). Add **both** if you serve both.  
     - Replay settings: [Environment & Replay → Replay authorized domains](https://us.posthog.com/settings/environment-replay#replay-authorized-domains).  
     - This setting is deprecated; PostHog recommends **URL trigger conditions** instead of authorized domains for controlling where replays are captured.

5. **PostHog project settings (events)**  
   In [PostHog](https://us.posthog.com) → your project → **Project settings** (or **Settings**):  
   - Look for **Data pipeline → Transformations** and any **Drop events** rules.  
   - If a rule drops by domain/URL, ensure **kahana.co** (and **www.kahana.co** if used) are **not** excluded.

6. **Code behavior**  
   - The app sends **`$current_url`** and **`$host`** with every pageview.  
   - There is **no** domain check in code that would block kahana.co.  
   - The initial pageview is retried several times (1.5s, 3s, 4.5s, 6s) so slow script load on production is less likely to skip the first pageview.

---

If you only see events from **localhost** in PostHog and not from **kahana.co** (or other production domains), also check the following.

## 1. PostHog project settings

In PostHog Cloud:

1. Go to **Project settings** (or **Settings** → your project).
2. Look for **Authorized domains**, **Allowed domains**, **Ingestion**, or **Data management**.
3. If there is an allow list, add:
   - `kahana.co`
   - `www.kahana.co`
   - Any staging/production domains you use.
4. If there is a **Drop events** rule in **Data Pipeline → Transformations** that filters by domain, ensure it does **not** drop events from `kahana.co`.

## 2. What we send from the site

The app sends:

- **`$current_url`** – full page URL (so production URLs like `https://kahana.co/pricing` are included).
- **`$host`** – `window.location.hostname` (e.g. `kahana.co` or `localhost`).

In PostHog you can filter or group by `$host` to confirm production vs localhost.

## 3. Consent and loading

PostHog loads only when the user has **analytics** consent. On production, many users may not accept, so you’ll see fewer events than on localhost where you typically accept. That’s expected. To validate that production **can** send events:

1. Open **https://kahana.co** in an incognito window.
2. Accept analytics (or “Accept all”) in the cookie banner.
3. Browse a couple of pages.
4. In PostHog, filter events by `$host` equals `kahana.co` (or check **Activity** for recent events from that host).

## 4. Ad blockers and privacy tools

Browser extensions or corporate filters can block `us.i.posthog.com` (or `/ph` if you use the reverse proxy). Those requests never reach PostHog, so you won’t see those users. That’s client-side; no code change will fix it. You can still confirm that **non-blocked** production traffic is tracked using the steps above.
