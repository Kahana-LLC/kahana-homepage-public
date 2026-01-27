# PostHog: Tracking Production (kahana.co), Not Just Localhost

If you only see events from **localhost** in PostHog and not from **kahana.co** (or other production domains), check the following.

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
