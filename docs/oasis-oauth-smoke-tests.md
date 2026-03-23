# Oasis OAuth Smoke Tests

- Google login on `/oasis-auth?mode=signup&plan=free` completes OAuth and redirects to `/installations`.
- Microsoft login from `/installations` redirects through `/oasis-auth?mode=login&plan=free&redirect=/installations` and returns to `/installations`.
- Apple login on `/oasis-auth?plan=zen` completes OAuth and then redirects to the stored Stripe checkout URL.
- Provider returns no email claim and `/oauth-callback` stays on the callback page, shows an error, and writes `localStorage.oasis_auth_error`.
- Assistant OAuth on `/oauth-callback?flow=assistant&handoff_target=assistant` completes session restore/profile creation, stores the short-lived `oasis_assistant_handoff` cookie, and does not run normal website redirect priority.
- Onboarding OAuth on `/oauth-callback?flow=assistant&handoff_target=onboarding` completes session restore/profile creation, stores the short-lived `oasis_assistant_handoff` cookie with `target=onboarding`, and does not run normal website redirect priority.
- Assistant OAuth failure on `/oauth-callback?flow=assistant` stores error context in the short-lived handoff cookie instead of redirecting into website auth UX.
