# OAuth Callback Flows

This document describes how OAuth is handled in the website today for:

- normal website sign-in
- Oasis Assistant sign-in
- Oasis onboarding sign-in

All three flows share the same callback route:

- `/oauth-callback`

The website remains the source of truth for OAuth completion. The difference between flows is only what happens after the callback has restored auth state and validated the user.

## Source of truth

The website callback is responsible for:

- parsing the provider callback
- restoring or setting the Supabase session
- validating the authenticated user
- handling missing-email and callback error cases
- creating or updating the app profile through `/api/create-profile`

That shared logic lives in:

- `pages/oauth-callback.jsx`

The callback does not duplicate logic for assistant or onboarding. It branches only after the shared auth work completes.

## Flow selection

The callback decides whether a request is a normal website OAuth flow or a Firefox-owned flow from query params.

### Normal website flow

Any callback without an assistant marker is treated as a standard website OAuth flow.

Examples:

- `/oauth-callback?code=...`
- `/oauth-callback#access_token=...`

### Firefox-owned flow

A callback is treated as Firefox-owned when it includes:

- `flow=assistant`

For Firefox-owned flows, the callback also reads:

- `handoff_target=assistant`
- `handoff_target=onboarding`

Recommended callback shapes:

- `/oauth-callback?flow=assistant&handoff_target=assistant`
- `/oauth-callback?flow=assistant&handoff_target=onboarding`

`flow=assistant` means the callback belongs to Firefox UX, not normal website UX.

`handoff_target` tells Firefox which surface should resume after auth completes.

## Regular website OAuth

### Entry point

Regular website OAuth starts from:

- `pages/oasis-auth.jsx`

Before redirecting to Supabase OAuth, the auth page stores browser-side redirect context in `sessionStorage`:

- `postAuthRedirect`
- `pendingStripeCheckout`

### Callback behavior

When the provider returns to `/oauth-callback`, the website:

1. restores the Supabase session
2. verifies the user
3. creates or updates the profile
4. applies normal redirect priority

### Redirect priority

For non-assistant flows, the redirect order is:

1. `postAuthRedirect`
2. `pendingStripeCheckout`
3. `/installations`

This preserves:

- `/installations` protected login
- paid-plan auth-to-Stripe continuation
- standard website OAuth login

### Important recent behavior

The default website fallback is now `/installations`, not `/oasis-auth`.

That change prevents a successful OAuth login from bouncing the user back onto the login form and appearing to loop.

Also, `pages/oasis-auth.jsx` now checks for an existing Supabase session on load and redirects authenticated users away from the auth page instead of leaving them on the login UI.

## Oasis Assistant sign-in

### Entry contract

Assistant sign-in should return to the website callback with:

- `flow=assistant`
- `handoff_target=assistant`

### Callback behavior

The website callback still performs the same shared auth work:

1. parse callback params or hash
2. restore or set Supabase session
3. confirm authenticated user identity
4. create or update the profile

After that, it does not run normal website redirect logic.

### Current handoff implementation

The current implementation does not redirect to `chrome://...`.

Instead, it prepares a Firefox-readable handoff payload and stores it in a short-lived cookie:

- cookie name: `oasis_assistant_handoff`
- lifetime: 180 seconds
- attributes: `Path=/`, `SameSite=Lax`, `Secure` on HTTPS

The cookie payload includes:

- `timestamp`
- `target`
- `url`
- `code` when present
- `access_token` when present
- `refresh_token` when present
- `state` when present

The cookie is not the final auth step by itself. The actual handoff contract is:

1. the website writes the `oasis_assistant_handoff` cookie
2. privileged Firefox assistant/onboarding code reads that cookie
3. Firefox completes its own callback handling with the stored OAuth data
4. Firefox clears the cookie after successful consumption or after a handled failure

On success, the callback page shows a completion state telling the user Oasis should finish sign-in automatically once Firefox consumes the handoff cookie.

## Oasis onboarding sign-in

### Entry contract

Onboarding sign-in should return to the website callback with:

- `flow=assistant`
- `handoff_target=onboarding`

### Behavior

The onboarding path is the same as assistant sign-in except for the handoff target.

The website still:

1. restores the Supabase session
2. validates the authenticated user
3. creates or updates the profile
4. stores the short-lived Firefox handoff cookie

The difference is:

- `target` is set to `onboarding` instead of `assistant`

Firefox can then resume the onboarding surface rather than the assistant surface.

## Error handling

### Normal website flow

If normal website OAuth fails, the callback stays on `/oauth-callback` and shows an error state. It does not silently redirect into another website route.

### Firefox-owned flow

If assistant or onboarding OAuth fails, the callback still avoids normal website redirect logic.

The website writes the failure into the short-lived handoff cookie so Firefox can resume in-context with the error.

Handled error cases include:

- provider OAuth error
- missing email from the provider
- callback/session restoration failure
- missing OAuth payload on the callback

The cookie payload may include:

- `error`
- `description`

The callback page also shows a Firefox-oriented message telling the user to return to Firefox, where privileged Firefox code can consume the handoff cookie and surface the result in-context.

## Security behavior

For Firefox-owned flows, the callback scrubs sensitive OAuth params from the visible website URL after capture while preserving the assistant routing markers.

This reduces exposure of tokens in the address bar while preserving the original callback payload for handoff storage.

Existing safety checks remain in place:

- authenticated user verification
- email verification against the auth user
- redirect sanitization for website flows
- profile creation through the existing API
- missing-email enforcement

## Local and dev testing

For local testing, Firefox may use a development callback base URL instead of production.

The important website-side requirement is that the callback still lands on:

- `http://localhost:3000/oauth-callback`

For local OAuth testing to work:

- Supabase must allow the local callback URL
- the Supabase redirect allowlist must include `http://localhost:3000/oauth-callback`
- Firefox dev/test configuration must point OAuth return flow at the local website callback when testing locally

## Related files

- `pages/oauth-callback.jsx`
- `pages/oasis-auth.jsx`
- `pages/index.js`
- `utils/auth.js`
- `pages/installations.jsx`
- `pages/api/create-profile.js`

## Operational summary

If you need the shortest mental model:

- website OAuth: callback finishes auth and redirects into website UX
- assistant OAuth: callback finishes auth and stores assistant handoff state for Firefox
- onboarding OAuth: callback finishes auth and stores onboarding handoff state for Firefox

All of that happens through one callback route and one shared auth completion path.
