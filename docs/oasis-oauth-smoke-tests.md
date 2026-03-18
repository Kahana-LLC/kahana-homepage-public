# Oasis OAuth Smoke Tests

- Google login on `/oasis-auth?mode=signup&plan=free` completes OAuth and redirects to `/oasis-auth?mode=login&plan=free`.
- Microsoft login from `/installations` redirects through `/oasis-auth?mode=login&plan=free&redirect=/installations` and returns to `/installations`.
- Apple login on `/oasis-auth?plan=zen` completes OAuth and then redirects to the stored Stripe checkout URL.
- Provider returns no email claim and `/oauth-callback` stays on the callback page, shows an error, and writes `localStorage.oasis_auth_error`.
- Assistant OAuth on `/oauth-callback?flow=assistant` completes session restore/profile creation, stays on the callback page, and shows a copyable callback URL payload instead of redirecting to `/oasis-auth`.
- Assistant OAuth failure on `/oauth-callback?flow=assistant` stays on the callback page, shows a retry-from-assistant instruction, and does not redirect into website auth UX.
