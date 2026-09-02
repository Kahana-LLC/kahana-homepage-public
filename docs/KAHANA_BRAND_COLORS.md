# Kahana brand colors

Handoff from the marketing site for **kahana-web** (the product app).

Direction: bronze, sand, beige, and dusty olive. Not gold, not yellow, not the old lime/olive Kahana green.

Source of truth on marketing: `tailwind.config.js` (primary scale still named `oasis-green` for existing utilities). Wordmark and favicon ink is `#3B2F1A`.

---

## Do / don’t

**Use**

- Page canvas: beige `#F7F3EA`
- Surfaces / chips: Mission beige `#EDE6D2`
- Actions, links, nav: bronze `#8A6622` (hover `#6F5428`)
- Headings, wordmark, dark bands: `#3B2F1A`
- Body text: `#5C4520`
- Borders: sand `#E4D9C4`
- Olive as a supporting surface. Use **light dusty olive** `#D9DACB` under dark type or icons. Use mid `#B8B9A6` only as a wash. Use ink `#4F5140` for type on light olive, or as a dark bar with cream text. Not a CTA.

**Do not use for Kahana chrome**

- Gold / yellow: `#C4A35A`, `#FDEABB`, `#FBDC8E`, `#FCE3A5`, `#fcdd9f`, `#f0b429`
- Old Kahana greens: `#617500`, `#7A9200`, `#313A00`, `#30400D`, `#495800`, `#4A6200`, `#3E5300`, `#7F9E36`
- Sage chips: `#EEF3D8`, `#F8FAF2`, `#F3F8E4`, `#E0E8D4`

White cards on beige are fine. Keep Oasis product mocks on their own palette if any remain.

Primary buttons: white text on `#8A6622` meets WCAG AA.

---

## Semantic tokens (use these first)

| Role | Hex | Notes |
|---|---|---|
| Page background | `#F7F3EA` | App canvas, nav, footer |
| Surface / chip | `#EDE6D2` | Cards-on-beige, tags, FAQ chips, highlight wash |
| Sand (Vision) | `#E8DCC4` | Secondary surface, slightly warmer than Mission beige |
| Border | `#E4D9C4` | Hairlines, card edges, inputs |
| Light dusty olive | `#D9DACB` | Innovation card, chips, icon wells. Dark type goes on this. |
| Light olive hover | `#C5C6B5` | Hover on chips and pills sitting on light olive |
| Mid dusty olive | `#B8B9A6` | Quiet section washes only (~15–20% on beige) |
| Olive ink | `#4F5140` | Type on light olive; FAQ bars (cream text on this) |
| Bronze (Philomaths) | `#A67C2A` | Display / label accent, not buttons |
| Action / link | `#8A6622` | Primary button, outlined button, nav, inline links |
| Action hover | `#6F5428` | Button and link hover |
| Body | `#5C4520` | Paragraphs, metadata |
| Heading / wordmark | `#3B2F1A` | Titles, logo, dark bands |
| On-dark text | `#F7F3EA` | Text on `#3B2F1A` bands |
| On-action text | `#FFFFFF` | Text on bronze buttons |

Muted copy can stay `#666666`. Shadows: `rgba(59, 47, 26, 0.08)` (warm ink, not olive).

---

## Mission & Philosophy cards

These three surfaces are the brand. Match them if the app has equivalent bands.

| Card | Fill | Label / word | Body |
|---|---|---|---|
| Mission / Philomaths | `#EDE6D2` | `#A67C2A` | `#3B2F1A` |
| Vision / Dialectic | `#E8DCC4` | `#8A6622` | `#3B2F1A` |
| Innovation / Mouseion | `#D9DACB` | `#4F5140` | `#3B2F1A` |

Gloss lines under the italic words use `#3B2F1A` at 70% opacity.

---

## Primary scale

Drop this in for the app’s main brand scale (marketing still calls it `oasis-green`).

```js
export const kahana = {
  50: '#F7F3EA', // page
  100: '#F1EBE0',
  200: '#EDE6D2', // Mission beige / chips
  300: '#E0D4BA',
  400: '#D9DACB', // light dusty olive (dark type on this)
  500: '#A67C2A', // Philomaths bronze
  600: '#8A6622', // buttons, links, nav
  700: '#6F5428', // hover
  800: '#5C4520', // body
  900: '#3B2F1A', // headings / wordmark
};

export const kahanaUi = {
  page: kahana[50],
  surface: kahana[200],
  sand: '#E8DCC4',
  oliveLight: kahana[400],
  olive: '#B8B9A6',
  oliveInk: '#4F5140',
  border: '#E4D9C4',
  action: kahana[600],
  actionHover: kahana[700],
  text: kahana[800],
  heading: kahana[900],
  onDark: kahana[50],
  onAction: '#FFFFFF',
};
```

CSS variables:

```css
:root {
  --kahana-page: #f7f3ea;
  --kahana-surface: #ede6d2;
  --kahana-sand: #e8dcc4;
  --kahana-olive-light: #d9dacb;
  --kahana-olive: #b8b9a6;
  --kahana-olive-ink: #4f5140;
  --kahana-border: #e4d9c4;
  --kahana-bronze: #a67c2a;
  --kahana-action: #8a6622;
  --kahana-action-hover: #6f5428;
  --kahana-text: #5c4520;
  --kahana-heading: #3b2f1a;

  --btn-primary-bg: #8a6622;
  --btn-primary-hover-bg: #6f5428;
  --btn-outlined-border: #8a6622;
  --btn-outlined-text: #8a6622;
  --nav-link-color: #8a6622;
}
```

---

## Suggested remaps in the app

Replace leftover Oasis / old Kahana greens with these.

| Old | New |
|---|---|
| `#313A00`, `#30400D` | `#3B2F1A` |
| `#495800` | `#5C4520` |
| `#617500`, `#4A6200`, `#7A9200` | `#8A6622` |
| `#3E5300` | `#6F5428` |
| `#C4A35A` (gold) | `#D9DACB` (olive under text) or `#8A6622` (if it was a CTA) |
| `#F8FAF2`, `#FAFCF7` | `#F7F3EA` |
| `#EEF3D8`, `#F2F4E5`, `#F3F8E4`, `#E7EED0`, `#F4F7E6` | `#EDE6D2` |
| `#E0E8D4`, `#c5d4b8` | `#E4D9C4` |
| `rgba(48, 64, 13, …)` | `rgba(59, 47, 26, …)` |
| `rgba(97, 117, 0, …)` | `rgba(138, 102, 34, …)` |

---

## UI mapping

| Element | Color |
|---|---|
| App / page background | `#F7F3EA` |
| Top nav | `#F7F3EA`, bottom border `#E4D9C4` |
| Logo / wordmark | `#3B2F1A` |
| Nav links | `#8A6622`, hover `#5C4520` |
| Primary button (Create) | fill `#8A6622`, text white, hover `#6F5428` |
| Secondary button (Explore) | white fill, bronze border and text `#8A6622` |
| Headings | `#3B2F1A` |
| Body | `#5C4520` |
| Author / meta accent | `#8A6622` |
| Category pills | fill `#D9DACB`, text `#4F5140` |
| Icon wells | fill `#D9DACB`, icon `#4F5140` |
| Quiet section wash | `#B8B9A6` at ~20% on beige |
| FAQ accordion (closed) | fill `#4F5140`, text `#F7F3EA` |
| Active filter chip | fill `#8A6622`, text white |
| Input | white fill, border `#E4D9C4`, focus ring `#8A6622` |
| Cards | white or `#EDE6D2` on the beige page, border `#E4D9C4` |
| Dark footer / CTA band | fill `#3B2F1A`, text `#F7F3EA` |
| Focus ring | `#8A6622` |

Aura can keep a rare green accent if it already does. Do not use that green for buttons, nav, or page chrome.

---

## Optional cool accent

Oasis blue is still in the marketing Tailwind file for leftover product UI. Kahana marketing chrome does not use it. Prefer bronze / beige / olive. If the app still needs a cool accent:

- `#489CB5` / `#3A7C91`

Do not introduce desert-yellow into Kahana UI.
