# Marketing site language (phased)

## Phase 1

- Language menu in nav + footer (`components/brand/LanguageMenu.jsx`)
- Same option list as the product app (`lib/contentLanguage.js`)
- Preference stored in `localStorage` + cookie `kahana.contentLanguage` on `.kahana.io`
- Log in / Explore / Create / Contribute links append `?lang=` so `app.kahana.io` applies the preference on load

## Phase 2 (shipped for shell + homepage)

1. Catalogs under `lib/i18n/messages/` (`en`, `es`, `fr`, `de`, `pt`, `ar`, `he`, `ru`, `zh`, `ja`, `ko`, `hi`, `th`)
2. `MarketingI18nProvider` in `_app` drives `t()` + `document.documentElement.lang` / `dir` (RTL for `ar` / `he`)
3. Nav, footer, and homepage (`PlatformHome`) translate when the picker changes
4. Same preference key keeps app + marketing in sync; Auto follows the browser language when a catalog exists

### Local notes

- On `localhost`, the cookie is host-only (no `.kahana.io` domain); `?lang=` still bridges to the app
- Inner pages (Help articles, legal, FAQ body, etc.) still fall back to English until their catalogs are added
