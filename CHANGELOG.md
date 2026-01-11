# AI Assistant Changelog

## New Features

### 1. Subscription & Rate Limiting System
Implemented a comprehensive usage tracking and rate limiting system integrated with Supabase.

*   **Tiers**:
    *   **Free**: 50 units/month
    *   **Basic** ($20/mo): 1,500 units/month
    *   **Pro** ($40/mo): 3,000 units/month
*   **Unit Costs**:
    *   **Text Commands**: 1 unit
    *   **Voice Commands**: 10 units
*   **Functionality**:
    *   Authentication check enables/disables the assistant.
    *   Before execution, the system checks the user's remaining balance.
    *   On successful execution, usage is logged to the `llm_usage` database table.
    *   New Command: `show_subscription` (trigger: "Show subscription") displays current month usage and limits.

### 2. Smart "Open Tab" Resolution
Enhanced the `OpenTabCommand` to intelligently handle non-URL inputs.

*   **Behavior**:
    *   **Direct URL**: Opens as normal (e.g., `open google.com`).
    *   **Search Term**: If the input is not a URL (e.g., `open youtube music`), it automatically performs a **Smart Search** using DuckDuckGo's "I'm Feeling Ducky" feature. This redirects directly to the first result (e.g., `music.youtube.com`) without landing on a search results page.
    *   **Cleaner Output**: Success messages now display the original search term (e.g., "Opened youtube music") instead of the internal redirect URL.

### 3. Hub Management Improvements
*   **De-duplication**: When opening a Hub, the assistant now checks if the URLs are already open in the target group to prevent duplicate tabs.
*   **Tab Removal**: Added support for removing specific tabs from Hubs.

## Fixes & Improvements

*   **Multi-Step Execution**: Fixed an issue where the assistant would stop after the first step of a multi-sentence command. The Supervisor now correctly breaks down and executes all parts of a complex request (e.g., "Open Google and then open YouTube").
*   **Tool Output Formatting**: Added newline separation between multiple tool outputs for better readability.
*   **Recursion & Stability**: Resolved recursion limit errors by optimizing the state graph and preventing immediate tool re-execution.

## Technical Details

*   **Services**: Added `SubscriptionService` (`src/services/subscription.ts`).
*   **Database**: Utilizes `public.llm_usage` for tracking.
*   **Build**: Updated `assistant.ts` and `commands.ts` logic.
