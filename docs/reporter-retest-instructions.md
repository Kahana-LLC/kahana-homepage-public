# Reporter retest instructions (kahana.co)

Copy the block below into email or support tickets.

---

We deployed fixes for site performance and navigation (Warmly removed, console spam from our image mapper fixed). Please retest in a **private/incognito window** with **browser extensions turned off** (Apollo, privacy/TCF tools, and ad blockers are common sources of noise).

**Chrome:** open `chrome://extensions` → turn off **Allow in Incognito** for every extension → hard refresh the site (`Cmd+Shift+R` or `Ctrl+Shift+R`).

**Please confirm:**

1. Clicking navigation links updates **both** the address bar **and** the page content (you should not need to refresh manually).
2. The homepage scrolls smoothly without the browser becoming sluggish.

If you still see console messages mentioning `TcfApiCommandDispatcher`, `isolated-world-tcf-api`, or `poetry.js`, those come from **browser extensions**, not from our website. For site issues, please retest with extensions disabled or use Safari Private as a comparison.

Thank you for helping us verify.

---

See also: [debugging-console-noise.md](./debugging-console-noise.md)
