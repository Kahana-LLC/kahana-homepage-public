# Archived components

Components in this folder are **not used** on the live site but are kept for later use.

## InteractiveSloth.jsx

Interactive sloth mascot (sleep → wake → walk across screen, draggable, click for tips, minimizable). Archived so it does not appear on the homepage. To re-enable:

1. In `pages/index.js`, add:
   - `import InteractiveSloth from "../components/archive/InteractiveSloth";`
   - `<InteractiveSloth />` where you want it (e.g. after the main content).
2. Or move this file back to `components/InteractiveSloth.jsx` and update the import path to `../utils/cloudinary-mapper`, then use `import InteractiveSloth from "../components/InteractiveSloth";` in the page.

See `INTERACTIVE_SLOTH_IMPLEMENTATION_PLAN.md` in the project root for the full implementation plan.
