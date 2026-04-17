
Screen: LIVE SESSIONS
Purpose: Real-time visibility and live control.

Layout:

- Header:
    - Title: “Live sessions”.
    - Right: Toggle “Auto-refresh” on/off, time of last refresh.
- Main layout: Two columns
    - Left: Live sessions table.
    - Right: Selected session details.

Live sessions table:

- Columns:
    - User: avatar + name + email.
    - App(s) in use: chips of current apps (e.g. “Grok”, “ChatGPT”, “Salesforce”).
    - Risk: badge [Normal, Elevated, High].
    - Recent incidents: numeric value + click to view.
    - Location: city, country.
    - Device: “Managed / Unmanaged”.
    - Started: time.
    - Actions: “View session” button.

Selected session panel:

- Header: “Session: Jordan Lee · Managed laptop · San Francisco”.
- Card “Current activity”:
    - List of currently open tabs with icons, titles, URLs.
    - Highlight tabs with AI tools and any live warnings.
- Card “Recent actions (last 5 minutes)”:
    - Event list: visited pages, copy/paste, uploads, downloads, prints.
- Card “Session controls”:
    - Buttons:
        - “Terminate session”.
        - “Block unapproved AI tools for this session”.
        - “Force re‑auth”.
        - “Switch to monitor-only / enforce policies” toggle.

***

Screen: POLICY LIST
Purpose: Overview of all policies.

Layout:

- Header:
    - Title: “Policies”.
    - Right: Button “New policy”.
- Table:
    - Columns:
        - Policy name.
        - Type: [AI usage], [Data loss], [Access control], etc.
        - Condition summary: short text (e.g. “Confidential data + Unapproved AI tool + Paste”).
        - Action: [Block], [Allow with warning], [Allow and log], [Require justification].
        - Status: [Enabled], [Disabled], [Report-only].
        - Last updated: timestamp.
        - Owner: admin name.
    - Example row:
        - Policy name: “Block confidential data to unapproved AI”.
        - Type: “AI usage”.
        - Condition summary: “If data = Confidential AND app NOT IN Approved AI list AND action = paste/upload”.
        - Action: “Block + Critical alert”.
        - Status: “Enabled”.
        - Last updated: “Today, 11:25 AM”.
        - Owner: “Security team”.

***

Screen: POLICY BUILDER (New/Edit Policy)
Purpose: Create or edit a policy.

Layout:

- Header:
    - Title: “New policy”.
    - Right: Buttons “Cancel”, “Save policy”.
- Body: Step-like sections stacked vertically.

Section 1 – Basic info:

- Inputs:
    - Policy name (text).
    - Description (multiline).
    - Policy type dropdown [AI usage, Data loss prevention, Access control, Monitoring].

Section 2 – Conditions:

- Subheading: “When should this policy apply?”
- Condition builder with rows:
    - Row 1:
        - Field dropdown: [User group].
        - Operator dropdown: [is / is not].
        - Value control: multi-select [Engineering, Contractors, All].
    - Row 2:
        - Field: [App category].
        - Operator: [is].
        - Value: [AI Assistant].
    - Row 3:
        - Field: [App status].
        - Operator: [is].
        - Value: [Unapproved or Unknown].
    - Row 4:
        - Field: [Data classification].
        - Operator: [is].
        - Value: [Confidential, Restricted].
    - Row 5:
        - Field: [Action].
        - Operator: [is].
        - Value: [Paste, Upload].
- Controls:
    - “Add condition” button.
    - Toggle “Match all conditions” vs “Match any condition”.

Section 3 – Actions:

- Subheading: “What should happen?”
- Radio group:
    - “Allow and log”.
    - “Allow with warning”.
    - “Block”.
    - “Block and require justification”.
- Additional toggles:
    - Checkbox “Create incident”.
    - Checkbox “Send alert to email”.
    - Checkbox “Send alert to Slack”.
- Severity dropdown: [Critical, High, Medium, Low].

Section 4 – Scope \& mode:

- Scope:
    - Device types: [Managed only, Unmanaged only, Both].
    - Networks: [Corporate, VPN, Public Wi‑Fi].
- Mode:
    - Radio: [Enforce] vs [Report-only (monitor only)].

Section 5 – Preview:

- Text box: “Example: If a user in Engineering copies Confidential data and pastes it into an unapproved AI tool, we will Block the action and send a Critical alert.”

***

Screen: ALERT SETTINGS
Purpose: Configure notification preferences.

Layout:

- Header: “Alerts \& notifications”.
- Sections:
    - “Channels”:
        - Toggles for:
            - Email alerts: [On/Off].
            - Push notifications: [On/Off].
            - Slack / Teams integration: [Connect] button + channel selector.
            - SIEM / Webhook: URL input, “Test connection” button.
    - “Alert rules”:
        - Rows:
            - “Critical incidents · Notify immediately · Email + Slack”.
            - “High incidents · Summary every 15 min · Email”.
            - “Medium \& Low · Daily digest · Email only”.
        - For each row: edit icon opens configuration drawer.

***

Screen: USER DETAILS
Purpose: Risk profile per user.

Layout:

- Header:
    - Title: “User: Jordan Lee”.
    - Right: “Disable browser access” button, “View in IdP” link.
- Cards:
    - “User info”: name, email, department, location, groups.
    - “Risk score”: numeric score + color (e.g. 78/100 · High), small sparkline.
    - “Recent incidents”: mini table of last 5 incidents with severity, app, policy, status.
    - “Apps used (last 30 days)”: list or bar chart showing top apps, highlighting AI tools.
    - “Policies applied”: list of policies that currently affect this user.

***