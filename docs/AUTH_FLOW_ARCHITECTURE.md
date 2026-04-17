# Oasis Authentication Flow Architecture

This document explains how the create account and sign-in flows work across the Kahana Oasis application. It is intended to help developers understand the current architecture before adding new sign-in providers (Google, Azure, Apple, etc.).

## Overview

The authentication system is built on **Supabase Auth** and consists of:

- **Email/password** auth (create account, sign in, forgot password)
- **OAuth** (currently Google—UI is hidden; callback infrastructure is ready)
- **Profile creation** via a custom `public.users` table (matched by email, not `auth.users.id`)
- **Plan selection** with optional Stripe checkout for paid plans

---

## Architecture Diagram

```
┌─────────────────────────────────────────────────────────────────────────────────┐
│                           ENTRY POINTS                                            │
├─────────────────────────────────────────────────────────────────────────────────┤
│  oasis-pricing.jsx          installations.jsx                                    │
│  • "Download" (Zen CTA)      • Requires auth → redirects if not logged in          │
│  • Links: /oasis-auth?plan=zen|nirvana                                            │
│  • Free plan → /oasis-waitlist                                                    │
└─────────────────────────────────────────────────────────────────────────────────┘
                                        │
                                        ▼
┌─────────────────────────────────────────────────────────────────────────────────┐
│                         oasis-auth.jsx (Main Auth Hub)                            │
├─────────────────────────────────────────────────────────────────────────────────┤
│  Modes: signup | login                                                           │
│  Query params: ?plan=free|zen|nirvana  ?mode=signup|login  ?redirect=/installations│
│                                                                                   │
│  • Email/password form → signupAndCreateProfile() or signInWithEmail()            │
│  • Google OAuth (hidden) → signInWithGoogle() → redirects to provider             │
│  • Forgot password → requestPasswordReset() → email with link                     │
└─────────────────────────────────────────────────────────────────────────────────┘
         │                    │                              │
         │                    │                              │
         ▼                    ▼                              ▼
┌──────────────────┐  ┌──────────────────┐         ┌──────────────────────────────┐
│ Email signup     │  │ OAuth (Google)   │         │ Forgot password               │
│ • Supabase       │  │ • Redirect to    │         │ • Supabase sends email        │
│   signUp()       │  │   Google         │         │ • Link → /forgot-password      │
│ • /api/create-   │  │ • Callback →     │         │   ?confirmation_url=...       │
│   profile        │  │   /oauth-callback│         └──────────────────────────────┘
│ • redirect to    │  │                  │                      │
│   Stripe or      │  │                  │                      ▼
│   confirm email  │  │                  │         ┌──────────────────────────────┐
└──────────────────┘  └──────────────────┘         │ forgot-password.jsx          │
         │                    │                    │ update-password.jsx (alias)  │
         │                    │                    │ • Gate: user must click      │
         ▼                    ▼                    │   "Continue" (anti-scanner) │
┌──────────────────┐  ┌──────────────────┐         │ • Exchange code/set session  │
│ confirm-success  │  │ oauth-callback   │         │ • Update password form       │
│ (email confirm)  │  │ .jsx             │         │ • Sign out, redirect to      │
└──────────────────┘  └──────────────────┘         │   /password-reset-success    │
                                                   └──────────────────────────────┘
```

---

## Key Files and Responsibilities

### 1. `pages/oasis-auth.jsx` — Main Auth Hub

**Purpose:** Central page for create account, sign in, and plan selection.

**Query parameters:**
| Param      | Values                    | Description                                                                 |
|------------|---------------------------|-----------------------------------------------------------------------------|
| `plan`     | `free`, `zen`, `nirvana`  | Pre-selects plan; Zen/Nirvana have Stripe checkout URLs                    |
| `mode`     | `signup`, `login`         | Switches between Create Account and Sign in                                |
| `redirect` | e.g. `/installations`     | After auth, redirect here instead of Stripe (used for protected pages)     |

**Auth flows:**
- **Create account (signup):** `signupAndCreateProfile(email, password, fullName)` → Supabase `signUp()` + `/api/create-profile` → redirect to Stripe (if paid plan) or show success
- **Sign in:** `signInWithEmail(email, password)` → redirect to Stripe (if paid plan) or show success
- **Google OAuth:** `signInWithGoogle()` — currently **hidden** (`{false && ...}`) but implemented. Stores `pendingStripeCheckout` in sessionStorage before redirect; OAuth callback handles post-login redirect.
- **Forgot password:** `requestPasswordReset(email)` — sends email with link to `/forgot-password`

**Plan logic:**
- `free`: No Stripe; user stays on page with success message
- `zen` / `nirvana`: Has `stripeCheckoutUrl`; after auth, redirects to Stripe Payment Link
- If `redirect` is set (e.g. `/installations`), that takes precedence over Stripe

---

### 2. `pages/oauth-callback.jsx` — OAuth Callback Handler

**Purpose:** Handles the return from OAuth providers (e.g. Google) after sign-in/sign-up.

**Flow:**
1. Parse URL: `error`, `error_description`, `access_token`, `refresh_token`, `code`, `state` from query params or hash
2. **On error:** Show error, store in `localStorage.oasis_auth_error` for assistant
3. **On success:**
   - Create Supabase client
   - If tokens in hash: `supabase.auth.setSession({ access_token, refresh_token })`
   - Else: `supabase.auth.getSession()` or `getUser()` (Supabase may auto-parse hash)
   - Call `/api/create-profile` with `email` and `fullName` from `user.user_metadata`
   - Check `sessionStorage.pendingStripeCheckout`:
     - If set → redirect to Stripe checkout
     - Else → redirect to `/oasis-auth` after 1.5s

**Important notes:**
- `index.js` (homepage) redirects root URL with OAuth hash to `/oauth-callback#{hash}`
- `next.config.js` sets no-cache headers for `/oauth-callback`
- `getServerSideProps` sets cache-control headers

**Adding new OAuth providers:** The same callback handles all providers. Configure Supabase Dashboard → Authentication → Providers (Google, Azure, Apple, etc.) and ensure redirect URL `{origin}/oauth-callback` is allowed.

---

### 3. `pages/oasis-pricing.jsx` — Pricing Entry Point

**Purpose:** Marketing page with plan tiers and CTAs.

**Links to auth:**
- **Zen plan:** `ctaLink: '/oasis-auth?plan=zen'`
- **Nirvana plan:** `ctaLink: '/oasis-auth?plan=nirvana'`
- **Free plan:** `ctaLink: '/oasis-waitlist'` (waitlist, not auth)

Users clicking **Download** (Zen plan) land on `oasis-auth` with the plan pre-selected.

---

### 4. `pages/installations.jsx` — Protected Downloads Page

**Purpose:** Download page for Oasis Browser; requires authentication.

**Flow:**
1. On mount: `supabase.auth.getSession()`
2. If no session → redirect to `/oasis-auth?mode=login&plan=free&redirect=/installations`
3. `plan=free` avoids Stripe; `redirect=/installations` sends user back after sign-in

---

### 5. `pages/forgot-password.jsx` — Password Reset Flow

**Purpose:** Process password reset links from Supabase and let users set a new password.

**Phases:**
- `loading` — Processing
- `gate` — User landed with `?confirmation_url=...`; must click "Continue" (prevents email scanners from consuming OTP)
- `ready` — Session established; show new password form
- `done` — Password updated; redirect to `/password-reset-success`
- `error` / `info` — Show message and link back to sign-in

**Token handling:**
- **Hash flow:** `#access_token=...&refresh_token=...&type=recovery` → `setSession()`
- **Code flow:** `?code=...` → `exchangeCodeForSession(code)`
- After processing, URL is cleaned with `history.replaceState` to avoid leaking tokens

---

### 6. `pages/update-password.jsx` — Alias for Forgot Password

**Purpose:** Re-exports `ForgotPassword`. Supabase and some clients use `/update-password` as the redirect target. Both routes render the same component.

---

## Auth Utilities (`utils/auth.js`)

| Function                 | Purpose                                                                 |
|--------------------------|-------------------------------------------------------------------------|
| `signupAndCreateProfile` | `signUp()` + `/api/create-profile`; `emailRedirectTo` → `/confirm-success` |
| `signInWithEmail`        | `signInWithPassword()`                                                  |
| `signInWithGoogle`       | `signInWithOAuth({ provider: 'google', redirectTo: origin/oauth-callback })` |
| `requestPasswordReset`   | `resetPasswordForEmail()`; `redirectTo` → `/forgot-password`            |
| `updatePassword`         | `updateUser({ password })`                                              |

---

## Supabase Configuration

**Redirect URLs (Supabase Dashboard → Authentication → URL Configuration):**
- `https://kahana.co/oauth-callback` (OAuth)
- `https://kahana.co/forgot-password` (password reset)
- `https://kahana.co/confirm-success` (email confirmation)
- `https://kahana.co/update-password` (alias; same as forgot-password)
- Local: `http://localhost:3000/...` for each

**Site URL:** `https://kahana.co` (production) or `http://localhost:3000` (local)

---

## Profile Creation (`/api/create-profile`)

- **Called from:** `signupAndCreateProfile()`, `oauth-callback.jsx`
- **Input:** `{ email, fullName }` (or `userId` if provided)
- **Logic:** Upserts `public.users` by `email` (table is not linked to `auth.users` by ID)
- **Service role:** Uses `createServiceClient()` for server-side access

---

## Adding New Sign-In Providers (Google, Azure, Apple)

### 1. Supabase Dashboard
- **Authentication → Providers:** Enable Google, Azure, Apple, etc.
- **URL Configuration:** Ensure `{origin}/oauth-callback` is in Redirect URLs (already used for Google)

### 2. `utils/auth.js`
Add provider-specific functions following the Google pattern:

```javascript
export async function signInWithAzure() {
  const supabase = createClient()
  const redirectUrl = typeof window !== 'undefined' 
    ? `${window.location.origin}/oauth-callback` 
    : undefined
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'azure',
    options: { redirectTo: redirectUrl },
  })
  if (error) throw error
  return data
}
```

### 3. `pages/oasis-auth.jsx`
- Unhide or add provider buttons (Google is currently `{false && ...}`)
- Before calling OAuth: store `pendingStripeCheckout` in sessionStorage if plan requires payment (same as Google)
- Optionally set `sessionStorage.setItem('oauthFromExtension', 'true')` when opened from Firefox extension

### 4. `pages/oauth-callback.jsx`
- **No changes needed** — it already handles any OAuth provider return (tokens/code in URL/hash)
- Profile creation uses `user.user_metadata` (e.g. `full_name`, `name`) — ensure providers send these if desired

### 5. Provider-specific metadata
- `user_metadata` varies by provider (e.g. Azure may use different fields)
- Update `/api/create-profile` or `oauth-callback` if you need to map provider-specific fields to `full_name`

---

## Data Flow Summary

| Flow              | Entry → Auth Page → Action → Callback/Result                    |
|-------------------|------------------------------------------------------------------|
| Create account    | pricing/installations → oasis-auth (signup) → signUp + create-profile → Stripe or confirm email |
| Sign in           | pricing/installations → oasis-auth (login) → signInWithPassword → Stripe or success |
| Google OAuth      | oasis-auth → signInWithGoogle → Google → oauth-callback → create-profile → Stripe or oasis-auth |
| Forgot password   | oasis-auth → requestPasswordReset → email → forgot-password (gate → ready) → updatePassword → password-reset-success |
| Protected page    | installations → (no session) → oasis-auth?redirect=/installations → sign in → back to installations |

---

## Related Files

- `utils/supabase.js` — `createClient()`, `createServiceClient()`, `getOrCreateUser()`
- `pages/confirm-success.jsx` — Post-email-confirmation landing
- `pages/password-reset-success.jsx` — Post-password-update landing
- `config/SUPABASE_REDIRECT_URLS.md` — Redirect URL setup notes
- `config/supabase-reset-password-email.html` — Custom password reset email template
