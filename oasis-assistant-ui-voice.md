# Oasis AI assistant: UI structure, voice UX, and styling

Audience: designers, marketers, and engineers preparing **landing-page crops, feature callouts, and copy** that match the real product. Implementation lives under `browser/base/content/assistant/ui-preact/`.

Companion: high-level product features are summarized in [`docs/oasis-landing-features.md`](oasis-landing-features.md).

---

## Stack and shell

| Layer | Role |
|-------|------|
| **Preact** | UI in `src/App.tsx` and `src/components/*.tsx` |
| **Styles** | `src/App.css` (main design tokens and layout); `assistant.css` at `browser/base/content/assistant/assistant.css` adds minimal markdown defaults for `.ai-message` in some contexts |
| **Chrome bridge** | `window.assistantBridge`, `openWebLinkIn`, overlay resize/drag/close via `postMessage` to parent; the panel is an embedded surface, not a normal web page |

The root node is `#assistant-preact-root` (full height, column flex). The top-level layout class is `.assistant-container`.

---

## Layout hierarchy (chat mode)

Top to bottom inside `.assistant-container`:

1. **`VoiceAgentOverlay`** (optional) — full-screen voice session; see Voice section.
2. **`ConfirmationModal`** (optional) — confirm sensitive commands.
3. **`Header`** — branding, help, account menu, sidebar toggle, close.
4. **`.assistant-main`** — primary column:
   - **`.assistant-scroll`** — scrollable region:
     - **Auth:** `Auth` full-screen form (narrow column).
     - **Chat:** **`.assistant-chat-stack`** — optional signed-in banner + **`ChatTimeline`**.
   - **`AssistantBusyBar`** — when not on auth view; status above composer.
   - **`Composer`** — when not on auth view; input + toolbar.
   - **`OnboardingChecklist`** — docked checklist (collapsible).
5. **Resize handle** — fixed corner grip for overlay resizing.

```text
assistant-container
├── [conditional] VoiceAgentOverlay
├── [conditional] ConfirmationModal
├── Header
├── assistant-main
│   ├── assistant-scroll
│   │   └── auth OR assistant-chat-stack (banner + ChatTimeline)
│   ├── AssistantBusyBar (when not auth)
│   ├── Composer (when not auth)
│   └── OnboardingChecklist
└── [fixed] resize grip
```

---

## Visual language (chat surface)

### Design tokens (`App.css` `:root`)

The chat UI is **light-first**: soft off-white surfaces, **olive / chartreuse green** (`#7a9200`, `--primary-green`) as the brand action color, muted body text (`#666`, `--text-body`), and slightly cooler dark greens for emphasis (`#495800` in chips and header title).

| Token / idea | Typical use |
|--------------|-------------|
| `--surface-default` (`#f8faf2`) | Panel background |
| `--surface-page` (`#ffffff`) | Composer card, AI bubble fill |
| `--primary-green` | Links in markdown, icons, busy accents, send button circle |
| `--primary-50` (`#f2f4e5`) | User bubble gradient top, banners, chip backgrounds |
| **Spacing scale** | `--space-xsmall` through `--space-xxlarge` (4px–32px) |
| **Radii** | Large rounded UI: `--border-radius-xlg` (16px) panel; **18–20px** bubbles and input bar; **pill** chips (`border-radius: 999px`) |

### Typography

- **Body:** `"Geist", system-ui, sans-serif` at **14px** for chat and composer; antialiased.
- **Auth title:** serif (`ui-serif, Georgia`) at **22px** in brand green for a slightly editorial feel.
- **Header title:** “Oasis AI” **20px**, semibold, `#495800`.

### `color-scheme`

`:root` sets `color-scheme: light dark` so native controls respect system preference, but the **main assistant chrome is explicitly styled** for the light palette above. Do not assume the whole panel auto-flips to dark mode from this flag alone.

### Motion

Short **fade/slide** on new messages (`fadeIn` ~0.22s), banner slide-down, voice overlay fade-in. Keep marketing animations **subtle** to match the product.

---

## Header (`Header.tsx`)

**Left:** Sloth mascot SVG (warm brown `#978455` on cream `#F8FAF2`), **“Oasis AI”**, **Beta** pill (`#F2F4E5` background, `#495800` label).

**Right:** Help (question icon, opens docs in a tab), overflow **menu** (signed-in email block, Settings placeholder, Sign out), **sidebar toggle**, **close** (posts `oasisOverlayClose`).

**Interaction:** The header bar is a **drag handle** for moving the overlay (`oasisOverlayDragStart`), except when clicking buttons or the dropdown.

**Landing snippets:** Lead with sloth + wordmark + Beta; green `#7A9200` icons on transparent header.

---

## Chat timeline (`ChatTimeline.tsx`)

### Empty state

- Centered **illustration** (`chrome://browser/content/assistant/images/empty-state-bg.png`).
- Gray tagline: “Welcome to Oasis AI” / “Browse, summarize, or manage your tabs.”
- **Starter prompt chips** (only when signed in, not busy): e.g. “Summarize this page”, “List my open tabs”, “Search the web for today's weather”. Chips use `.starter-prompt-chip` (small type, pill, green border).

### Message list (`.chat-log`)

- **Hidden scrollbars** for a clean panel look; content still scrolls; auto-scroll to bottom on new activity.
- **User messages:** `.message-user` — bubble **right-aligned**, gradient `#f8faf2` → `#f2f4e5`, dark green-gray text `#2f3a20`, **asymmetric radius** (tail toward bottom-right).
- **Assistant messages:** Not a symmetric “bubble”; content sits in **`.ai-response-container`** with **`.markdown-body`** (full width, white/light feel, left-aligned prose). This reads more like **document** than a chat balloon.

### Markdown rendering

When `marked` + `DOMPurify` are available, AI content is sanitized HTML. Styles: headings, lists, `code` / `pre`, blockquotes with **left green bar**, links in **primary green**.

### Per-message actions

- **Read aloud:** `.tts-btn` under each AI message (speaker icon; green when active).
- **Feedback:** `Feedback` component on the **last** AI message when idle (thumbs / structured feedback — drives future Amplifier signal).

### Activity indicator

When busy or a tool is running, **`ActiveToolIndicator`** shows a **small green spinner** and a **human-readable label** (from `toolLabels.ts`, e.g. “Summarizing page”, “Listing tabs”).

**Landing snippets:** Pair a **user bubble** with a **markdown answer** screenshot; crop the **starter chips** for “try these first” sections.

---

## Composer (`Composer.tsx`)

Wrapped in **`.input-bar`** — white card, **20px** radius, soft shadow; when **busy**, **`.input-bar--busy`** adds a **green top border** and a pale green gradient wash.

**Field:** Placeholder **“Ask Oasis…”**; disabled while busy or signed out (sign-in prompt button instead).

**Toolbar (left to right):**

1. **Feedback** (speech-bubble icon).
2. **Spacer** pushing actions right.
3. **Reset session** (circular arrows).
4. **Read-aloud toggle** (speaker; **green** when on, gray with slash when off).
5. **Voice conversation** — round **mic** asset (cream circle `#F8FAF2`, strokes `#94A833`); tooltip “Voice conversation (hands-free)”.
6. **Send** — **solid green circle** with white arrow; becomes **busy square** icon with pulse animation when waiting.

**Landing snippets:** The composer is the **hero** of “ask anything”; show the green send control and mic for parity with the voice story.

---

## Busy bar (`AssistantBusyBar.tsx`)

Sits between the scroll area and composer: bordered card, spinner, **primary line** + optional **tool line** in green + secondary hint text. Use for “assistant is working” screenshots without exposing raw logs.

---

## Confirmation modal (`ConfirmationModal.tsx`)

Semi-transparent **dim backdrop**; **white card**, **12px** radius, centered.

- **Icon:** shield motif in **warm yellow circle** (`#FFF8E1`) with green stroke.
- **Title:** “Confirm Action”.
- **Body:** Plain-language description.
- **Highlight strip:** Pale green (`#E8F5E9`) showing **“Command: …”** for transparency.

**Landing angle:** “You stay in control” — sensitive browser operations ask before they run.

---

## Onboarding (`OnboardingChecklist.tsx`)

Docked **above the bottom** with a top divider. Collapsed state shows a **compact card** (`.onboarding-checklist-compact`): olive title, progress bar fill in **primary green**. Expanded checklist guides sign-in, first prompt, voice, etc.

**Landing snippets:** Progress bar + “get started in three steps” style crops.

---

## Voice UI: two layers

### 1. Entry from chat (composer)

The **mic** button opens the full **`VoiceAgentOverlay`**. There is no separate inline dictation field in the current `Composer`; `App.css` still defines `.composer-dictation-icon` for possible future or alternate builds.

### 2. Voice agent overlay (`VoiceAgentOverlay` in `App.tsx`)

**Full viewport, fixed `z-index`**, **dark cinematic** gradient background (`#1a1f0e` → `#0f1208` → `#161b0d`) — **intentionally different** from the light chat panel so users perceive a **mode switch** (focused voice session).

**Phase styling** (inset glow on the overlay):

| Class | Meaning |
|-------|---------|
| `.voice-agent-overlay-phase-idle` | Subtle green inner glow |
| `.voice-agent-overlay-phase-you` | Stronger green glow while listening |
| `.voice-agent-overlay-phase-assistant` | Warmer glow while transcribing / thinking / speaking |

**Content column (centered):**

1. **`VoiceAuraVisualizer`** — **canvas** wave visualization; colors shift with **mic level**, **TTS level**, and state (green-leaning while user-side; blue-leaning while assistant speaks). Multi-layer gradient stroke, glow, breathing motion while thinking/transcribing.
2. **Recording pill** — “MIC ON” / “PICKING UP SPEECH” (uppercase, letterspaced, green border, pulse).
3. **Live transcript** — user text, muted white.
4. **Echo hint** (dismissible): headphones / speaker volume guidance; stored in `localStorage` when dismissed.
5. **Errors** — red-tinted copy + dismiss.

**Bottom stack:**

- **Capture mode:** **Continuous** vs **Precise** (pill toggles; active state uses same green accent language as chat).
- **Replies:** **Spoken** vs **Chat** (spoken = TTS path; chat = stream into text timeline only).
- **Status block:** Primary line (e.g. “Listening”, “Processing speech”, “Assistant is speaking”) + secondary **hint** line (e.g. pause after speaking, tap orb to cancel).
- **Orb** — **80px** circle, **radial green gradient**, outer glow; states: default mic icon, **square** when busy/cancel, **pause bars** when speaking; **pulse** animation while listening.

**Close:** Top-right circular button, translucent on dark.

**Bridge:** Closing or completing ties back into chat via `oasisWindow.oasisVoiceAssistantTurnBegin`, `oasisVoiceAssistantStreamChunk`, `oasisVoiceSpokenTurnMirror` so voice and text stay one thread.

**Unavailable build:** Same overlay shell with error copy “Voice assistant is not available in this build.”

### Voice status strings (ready-made microcopy)

These are user-visible strings from `App.tsx` (`voicePrimaryStatus` / `voiceStatusHint`) — safe to reuse on a landing page:

| State | Primary | Hint |
|-------|---------|------|
| Idle | Voice ready | Tap the microphone below to start |
| Listening | Listening / Hearing you | Pause briefly after you speak, or tap the orb to send now |
| Transcribing | Processing speech | Tap the orb to cancel if this takes too long |
| Thinking | Assistant is thinking *or* Writing in chat | Depends on spoken vs chat reply mode |
| Speaking | Assistant is speaking | Tap the orb to stop playback |
| Echo guard | Ready in a moment… | Letting the room quiet down so your mic is not picking up the assistant. |

**Landing snippets:** Dark overlay + **aura** + **orb** = hero for “voice-first”; light chat + **mic in composer** = “voice when you need it.”

---

## Accessibility and semantics (for honest marketing)

- **Live regions:** Recording pill and status use `aria-live="polite"` where appropriate.
- **Orb:** `aria-label` and `title` reflect action (start, cancel, stop playback).
- **Voice close:** labeled “Close voice assistant.”
- **Composer:** sign-in prompt has explicit `aria-label`.

Avoid claiming full WCAG audit in marketing unless tested; the above is **what the UI implements today**.

---

## Screenshot and crop guidance

1. **Chat:** Capture **header + one exchange + composer**; include **starter chips** or **tool spinner** depending on story.
2. **Voice:** Use **1080-wide** crop centered on **aura + orb**; dark background needs **enough padding** so glow is not clipped.
3. **Color accuracy:** Greens should read **olive/chartreuse**, not neon; user bubbles are **warm off-white**, not pure white.
4. **Beta:** Keep the **Beta** pill visible if the public build is still beta.

---

## Source map (quick reference)

| UI area | Main files |
|---------|------------|
| App shell & voice overlay | `ui-preact/src/App.tsx` |
| Global styles & tokens | `ui-preact/src/App.css` |
| Header | `ui-preact/src/components/Header.tsx` |
| Timeline | `ui-preact/src/components/ChatTimeline.tsx` |
| Composer | `ui-preact/src/components/Composer.tsx` |
| Tool spinner | `ui-preact/src/components/ActiveToolIndicator.tsx` |
| Busy bar | `ui-preact/src/components/AssistantBusyBar.tsx` |
| Voice aura | `ui-preact/src/components/VoiceAuraVisualizer.tsx` |
| Voice types / bridge | `ui-preact/src/types.ts`, `hooks/useAssistantRuntime.ts` |
| Tool display names | `ui-preact/src/toolLabels.ts` |

---

## Document control

| Item | Detail |
|------|--------|
| Purpose | UI/voice reference for marketing assets and engineering handoff |
| Accuracy | Describes `ui-preact` as of this branch; voice requires `window.voiceAgent` in the embedding build |
