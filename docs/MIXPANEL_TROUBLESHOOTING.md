# Mixpanel Troubleshooting: Works on Localhost, Not on Live Site

Use this guide when Mixpanel tracks on localhost but not on your production domain (e.g. kahana.co).

---

## Quick debug in the browser

On your **live site**, open DevTools → Console and run:

```js
debugMixpanel()
```

This logs token, consent, script load status, **Token Match**, `api_host`, and suggested fixes.

---

## 1. Token match

**Issue:** The token in your code doesn’t match the Project you’re checking in Mixpanel (e.g. Test vs Production).

**Check:**

- In Mixpanel: **Project Settings** → **Project Token**. Copy the token.
- In browser console: `mixpanel.config.token` (or `mixpanel.get_config().token`). Compare with the env token.
- Or run `debugMixpanel()` and check **Token Match: YES/NO**.

**Fix:**

- Ensure `NEXT_PUBLIC_MIXPANEL_TOKEN` (in Heroku/Vercel env or `.env.local`) **exactly** matches the **Production** project token.
- If it’s `undefined` in the browser, env vars aren’t available in production. Add `NEXT_PUBLIC_MIXPANEL_TOKEN` in your platform’s config, then **redeploy** (Next.js bakes `NEXT_PUBLIC_*` at build time).

---

## 2. Ad blockers / tracking blocked on live domains

**Issue:** Many blockers allow localhost but block `cdn.mixpanel.com` and `api.mixpanel.com` on real domains.

**Check:**

- Open your **live site** in **Incognito/Private** with **all extensions disabled**.
- If Mixpanel works there, it’s likely an ad-blocker or privacy extension.

**Fix (option A – quick test):**

- Test in Incognito with extensions off to confirm.

**Fix (option B – production):**

- Use a **Tracking Proxy**: send events to your own domain (e.g. `https://kahana.co/api/mixpanel`), then forward to Mixpanel. This avoids most blocker rules that target `api.mixpanel.com`.  
- Configure the Mixpanel SDK to use your proxy URL as `api_host` (or equivalent).

---

## 3. Content Security Policy (CSP)

**Issue:** CSP headers block connections to Mixpanel’s CDN or API.

**Check:**

- On the **live site**, open DevTools → Console.
- Look for errors like:  
  `Refused to connect to 'https://api.mixpanel.com' because it violates the following Content Security Policy directive...`  
  or similar for `cdn.mixpanel.com` / `cdn.mxpnl.com`.

**Fix:**

If you use CSP (e.g. in `next.config.js` headers, middleware, or your host), whitelist Mixpanel:

```http
connect-src ... https://api.mixpanel.com https://api-js.mixpanel.com https://api-eu.mixpanel.com;
script-src ... https://cdn.mixpanel.com https://cdn.mxpnl.com;
```

- **US projects:** `api.mixpanel.com`, `api-js.mixpanel.com`.
- **EU projects:** also add `https://api-eu.mixpanel.com`.
- **Script:** `cdn.mixpanel.com` and/or `cdn.mxpnl.com`.

Add these to your existing `connect-src` and `script-src` directives; don’t remove other domains.

---

## 4. Missing or wrong API token in production

**Issue:** Token only in `.env.local` (or wrong env), so production build has no token or wrong one.

**Check:**

- Browser console: `mixpanel.config.token` or `debugMixpanel()`.
- If `undefined`, `NEXT_PUBLIC_MIXPANEL_TOKEN` isn’t set or isn’t available in the **production** build.

**Fix:**

- Set `NEXT_PUBLIC_MIXPANEL_TOKEN` in **production** (Heroku Config Vars, Vercel Environment Variables, etc.).
- Use the **Production** project token from Mixpanel Project Settings.
- **Redeploy** after changing env vars.

---

## 5. Data residency (EU vs US)

**Issue:** Project uses **EU Data Residency**, but the app uses the default US `api_host`. EU projects must use EU endpoints.

**Check:**

- In Mixpanel: **Project Settings** → **Data Residency**. If it’s EU, you must use the EU API host.

**Fix:**

Set one of:

- `NEXT_PUBLIC_MIXPANEL_EU=true`  
  → app uses `https://api-eu.mixpanel.com`
- Or `NEXT_PUBLIC_MIXPANEL_API_HOST=https://api-eu.mixpanel.com`  
  → overrides default.

Then redeploy. Our init uses `api_host` from these env vars.

---

## 6. Enable debug logs

**Check:**

- Set `NEXT_PUBLIC_MIXPANEL_DEBUG=true` in your environment and redeploy.
- Or run locally (`NODE_ENV=development`); debug is on by default there.

**Result:**

- Mixpanel SDK debug logs appear in the console.
- Our loader logs (token, consent, script load, init) appear as well.

---

## Environment variables summary

| Variable | Purpose |
|----------|---------|
| `NEXT_PUBLIC_MIXPANEL_TOKEN` | **Required.** Project token from Mixpanel Project Settings. |
| `NEXT_PUBLIC_MIXPANEL_DEBUG` | `true` → enable Mixpanel debug + loader logs. |
| `NEXT_PUBLIC_MIXPANEL_EU` | `true` → use `https://api-eu.mixpanel.com`. |
| `NEXT_PUBLIC_MIXPANEL_API_HOST` | Override `api_host` (e.g. proxy or custom endpoint). |

---

## Step-by-step checklist (live site)

1. **Token**
   - [ ] `NEXT_PUBLIC_MIXPANEL_TOKEN` set in **production** env.
   - [ ] Value matches **Production** project in Mixpanel.
   - [ ] Redeploy after changing.
   - [ ] `debugMixpanel()` → **Token Match: YES**.

2. **Consent**
   - [ ] Accept **analytics** cookies (e.g. “Accept all”) on the live domain.
   - [ ] `debugMixpanel()` → **Analytics consent: true**.

3. **Ad blockers / CSP**
   - [ ] Test in **Incognito**, extensions off.
   - [ ] Console: no CSP errors for `api.mixpanel.com` / `cdn.mixpanel.com`.
   - [ ] If you use CSP, add the Mixpanel domains (see §3).

4. **EU residency**
   - [ ] If project is EU: set `NEXT_PUBLIC_MIXPANEL_EU=true` (or `NEXT_PUBLIC_MIXPANEL_API_HOST`) and redeploy.

5. **Debug**
   - [ ] `NEXT_PUBLIC_MIXPANEL_DEBUG=true` (optional) → check console for init and events.

---

## Reference: CSP snippet for Mixpanel

If you add or edit CSP headers (e.g. in `next.config.js` or middleware), include:

```text
connect-src ... https://api.mixpanel.com https://api-js.mixpanel.com https://api-eu.mixpanel.com;
script-src ... https://cdn.mixpanel.com https://cdn.mxpnl.com;
```

Replace `...` with your existing directives.
