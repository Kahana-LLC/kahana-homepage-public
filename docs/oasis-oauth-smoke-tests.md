# Oasis OAuth Smoke Tests

- Google login on `/oasis-auth?mode=signup&plan=free` completes OAuth and returns to `/oasis-auth` with success state.
- Microsoft login from `/installations` redirects through `/oasis-auth?mode=login&plan=free&redirect=/installations` and returns to `/installations`.
- Apple login on `/oasis-auth?plan=zen` completes OAuth and then redirects to the stored Stripe checkout URL.
- Provider returns no email claim and `/oauth-callback` shows an error while writing `localStorage.oasis_auth_error`.
