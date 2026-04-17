# Oasis: key features for the landing page

Audience: people deciding whether to install Oasis. Tone: clear benefits first, light technical detail where it helps trust.

Companion detail for **Amplifier** (architecture and roadmap): [`supabase/AMPLIFIER.md`](../supabase/AMPLIFIER.md) and GTM framing: [`supabase/AMPLIFIER_VENTURES_BRIEF.md`](../supabase/AMPLIFIER_VENTURES_BRIEF.md).

---

## One-line pitch

Oasis is a browser with a **built-in AI assistant** that can act on your tabs, history, and pages—not just chat beside them—plus **voice input** and a **straightforward path to switch** from another browser.

---

## AI assistant (browser-native, not a sidebar-only chat)

The assistant is wired into the browser: it can **plan**, **search**, and **execute** actions with your permission, using real context (open tabs, bookmarks, groups, the page you are on) instead of guessing in a vacuum.

### Types of things you can ask it to do

Use these buckets on the landing page; each maps to real assistant capabilities in this branch.

| Category | What it does for users | Example prompts (illustrative) |
|----------|------------------------|--------------------------------|
| **Tab and window management** | List, open, close, move, and organize tabs and windows without hunting through menus. | “What tabs do I have open?”, “Close the tab about …”, “Open this URL in a new tab”, “Move this tab to a new window” |
| **Tab groups** | Create, rename, add/remove tabs, and list groups so a messy session becomes scannable. | “List my tab groups”, “Add this tab to the research group”, “Rename my group to …” |
| **Bookmarks and folders** | Treat bookmark folders as first-class: list, create, rename, add tabs, open sets of saved pages. | “Show my bookmark folders”, “Save this tab to …”, “Open everything in my reading folder” |
| **Semantic search and history** | Find pages by **meaning**, not only exact keywords—plus structured history-style queries when you half-remember a visit. | “Find that article about …”, “What did I read about … last week?”, “Search my history for …” |
| **Summarization and page understanding** | Turn long articles and dense pages into short, usable answers grounded in what you are viewing. | “Summarize this page”, “What are the main points?” |
| **Memory-style lookup** | Search across what the assistant can access (including folder-scoped “have I seen this before?” style workflows). | “Have I visited …?”, “Find … in my saved stuff” |
| **Web search (when enabled)** | Augment on-device context with the open web when the task needs fresh or broader sources. | “Look up …”, “What’s the latest on …?” |

### Why this matters for the landing page

- **Actions, not only answers:** Users can complete tasks (organize, reopen, summarize) in fewer steps.
- **Grounded in the real browser:** Less “generic AI,” more “this tab, these bookmarks, this history.”
- **Confirmations where it counts:** Sensitive operations can go through explicit confirmation so automation stays under user control.

---

## Voice to text

Speak instead of typing when you want speed, accessibility, or hands-busy moments.

- **Dictation into the assistant:** Your speech is transcribed and fed into the same assistant pipeline as typed messages, so voice and text are one experience.
- **Flexible listening modes:** The product supports different listening styles (for example, one-shot vs. continuous-style capture) so people can choose what fits their environment.
- **Optional spoken replies:** Where enabled, the assistant can mirror responses in speech for a full voice loop (device and settings permitting).

Implementation note for internal teams: transcription is backed by a secured service path (see `browser/base/content/assistant/lambda/voice-runtime` and `docs/voice/`). Marketing copy should stay capability-focused unless you publish a specific provider or region story.

---

## Import from other browsers (smooth switching)

Oasis uses the **migration wizard** you expect from a serious desktop browser so switching does not mean starting from zero.

Typical import paths include:

- **Bookmarks** (or favorites, depending on source browser)
- **Passwords**
- **History**
- **Form autofill** data
- **Payment methods** (where supported)
- **Extensions** (where the platform can transfer them)

**Landing-page angle:** One guided flow, clear choices, and permission prompts when the OS requires them—so “I’ll switch later” becomes “I’m done in a few minutes.”

---

## Coming soon: Amplifier (train the assistant with your feedback)

Amplifier is a **planned layer** on top of today’s assistant. It is described in detail in [`supabase/AMPLIFIER.md`](../supabase/AMPLIFIER.md). It is **not** a separate chatbot; it is an extra step between an internal draft answer and what you see, informed by **how people actually rated similar situations before**.

### Plain-language story for the landing page

- **Today:** You use the assistant and can give **structured feedback** (for example, thumbs and categories). That signal is stored responsibly and tied to your account where the product allows.
- **With Amplifier:** The product can consult **aggregated history** of those outcomes—similar prompts, tools, and site contexts—to steer away from repeated mistakes and toward patterns users liked: tighter summaries when long ones were rated poorly, extra verification when a tool chain often failed, or a shorter path when speed mattered.
- **Privacy posture:** Per-user data stays scoped under the same kind of controls as today; any cross-user learning is designed around **minimization, aggregation, and consent**, not raw data grabs. See the Amplifier docs for the full policy and engineering picture.

### The “day 1 vs. day 30” narrative (intent, not a benchmark claim)

**Product intent:** If you use the assistant regularly and give feedback when it misses or excels, the **closed loop**—usage produces signal, signal improves routing and answers—is designed so the experience **feels faster and more accurate over time** compared to your first session. Someone who has trained the product with consistent feedback for weeks should see a more **personalized, reliable** assistant than on day one.

**Marketing guardrail:** Do not promise specific percentage lifts or fixed timelines until shipped behavior is measured (the internal brief explicitly avoids promising metrics before shadow-mode evaluation). Prefer honest language: *designed to improve with your feedback*, *gets better the more you use it and rate results*, *learns what works for you*.

### Headline and subhead ideas (draft)

- **Headline:** “The assistant that learns what actually worked—not just what sounded smart.”
- **Subhead:** “Amplifier uses your feedback to steer answers before you see them, so the browser can improve with real use.”
- **Short:** “Train with thumbs and categories; unlock smarter, faster paths over time.”

---

## Suggested landing-page section order

1. **Hero:** Built-in AI that acts on your browser + voice + easy import.
2. **AI assistant:** Short video or screenshot of tab/list/summarize flows; three example prompts.
3. **Voice:** One screenshot; one sentence on dictation + optional replies.
4. **Switching:** “Import in minutes” with the list of data types.
5. **Amplifier (coming soon):** Flywheel diagram or three bullets; link to privacy/consent if you have a public page.
6. **Trust:** Open/Mozilla-aligned values, data minimization, user control—tuned with legal and policy.

---

## Document control

| Item | Detail |
|------|--------|
| Purpose | Source copy for marketing and `mozilla.org`-style landing pages |
| Status | Feature descriptions reflect this branch; Amplifier is **planned** per `supabase/AMPLIFIER.md` |
| Review | Product, legal, and privacy should sign off before external claims |
