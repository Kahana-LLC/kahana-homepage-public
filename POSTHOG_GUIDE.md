# PostHog Implementation Guide
Complete guide for PostHog setup, testing, and usage

---

## ✅ What's Implemented

1. **PostHog Package** - Installed `posthog-js`
2. **PostHog Utilities** - Created `utils/posthog.js` with consent-gated initialization
3. **ICP Survey Component** - Created `components/ICPSurvey.jsx` (micro-popup)
4. **Event Tracking** - Created `utils/posthogEvents.js` for ICP events
5. **Integration** - Added PostHog to `_app.js` with consent system
6. **Dual Tracking** - Conversion events now track in both GA and PostHog

---

## 🚀 Quick Setup

### PostHog Already Configured!

Your PostHog API key is already set up:
- **API Key**: `phc_AO2jVB9Uuo448EoalpPTIkdZoqZnyjlEh4BUuRngoby`
- **API Host**: `https://us.i.posthog.com`

### Optional: Environment Variable (Recommended for Production)

**Local Development:**
```bash
# Create/edit .env.local (optional - already works without it)
NEXT_PUBLIC_POSTHOG_KEY=phc_AO2jVB9Uuo448EoalpPTIkdZoqZnyjlEh4BUuRngoby
NEXT_PUBLIC_POSTHOG_HOST=https://us.i.posthog.com
```

**Production (Heroku/Vercel):**
- Add `NEXT_PUBLIC_POSTHOG_KEY` in your hosting platform's environment variables (for security)

---

## 🧪 Testing & Verification

### Step 1: Start Development Server

```bash
npm run dev
```

### Step 2: Open Your Website

1. Go to `http://localhost:3000`
2. Open **Developer Tools** (F12) → **Console** tab
3. Accept analytics consent (click "Accept All" or enable Analytics)
4. Check console - should see: `PostHog initialized successfully`

### Step 3: Test ICP Survey

**Option A: Time Trigger**
- Wait **20 seconds** on homepage
- Survey popup appears in bottom-right corner

**Option B: Scroll Trigger**
- Scroll to **50% of the page**
- Survey popup appears

**Test the Survey:**
1. Click a role: **Founder**, **Developer**, **Marketer**, **Student**, or **Other**
2. If "Other" → Type your role → Click Submit
3. Popup disappears
4. Check console - no errors

**To test again:**
```javascript
// In browser console:
localStorage.removeItem('icp_survey_responded')
// Then refresh page
```

### Step 4: Check PostHog Dashboard

1. Go to [https://us.i.posthog.com](https://us.i.posthog.com)
2. Log in → Select your project
3. Check **Activity** tab → Should see events:
   - `$pageview` - Page views
   - `role_selected` - When you selected a role
   - `icp_survey_dismissed` - If dismissed

**Verify User Properties:**
1. Go to **Persons** → Find your user
2. Check **Properties** tab → Should see:
   - `user_role` - Role selected
   - `icp_segment` - Same as user_role
   - `role_selected_at` - Timestamp
   - `custom_role` - If "Other" was selected

---

## 📊 Events Being Tracked

### Automatic Events:
- `$pageview` - Page views (automatic on navigation)

### ICP Survey Events:
- `role_selected` - When user picks role from survey
  - Properties: `role`, `source: 'icp_survey'`, `custom_role` (if Other)
- `icp_survey_dismissed` - When user closes survey

### Conversion Events:
- `demo_requested` - When user requests demo
- `quote_requested` - When user requests quote
- `enterprise_inquiry` - When user submits enterprise inquiry
- `contact_submission` - When user submits contact form

### User Journey Events:
- `comparison_page_viewed` - When user views comparison pages
- `category_selected` - When user selects a category

### User Properties Set:
- `user_role` - Role selected (Founder/Developer/etc. or "Other: [custom]")
- `icp_segment` - Same as user_role
- `role_selected_at` - Timestamp
- `custom_role` - Custom role text (if "Other" selected)

---

## 🎯 Create Your First Funnel

### Basic Funnel:

1. PostHog Dashboard → **Insights** → **New insight** → **Funnel**
2. Add steps:
   - Step 1: `role_selected`
   - Step 2: `comparison_page_viewed` (optional)
   - Step 3: `category_selected` (optional)
   - Step 4: `demo_requested`
3. Click **Save**
4. See conversion rates for each step

### Filter by ICP Segment:

1. In your funnel, click **Add filter**
2. Select **Person properties** → `user_role`
3. Choose a role (e.g., "Founder")
4. See conversion rates for that specific segment!

**Example Insights:**
- Which roles convert best?
- Do Founders request more demos than Developers?
- What's the drop-off rate by segment?

---

## 🔧 Customization

### Change Survey Timing:

Edit `components/ICPSurvey.jsx`:
```javascript
// Change from 20 seconds to your preference
}, 20000); // 20 seconds

// Change scroll trigger from 50% to your preference
if (maxScroll >= 50 && !showSurvey) {
```

**Recommended timings:**
- 15 seconds: More aggressive, higher response rate
- 20 seconds: Current (optimal balance)
- 30 seconds: More conservative, less intrusive

### Change Survey Options:

Edit `components/ICPSurvey.jsx`:
```javascript
const roles = [
  { value: 'Founder', label: 'Founder' },
  { value: 'Developer', label: 'Developer' },
  // Add or remove roles here
];
```

### Disable Survey:

Remove `<ICPSurvey />` from `pages/_app.js`

---

## ❓ Troubleshooting

### No Events Appearing?

**Check Console:**
- Open browser console (F12)
- Look for: `PostHog initialized successfully`
- Check for red error messages

**Check Network:**
- Developer Tools → **Network** tab
- Filter by "posthog"
- Should see requests to `us.i.posthog.com`
- Check if status is 200 (success)

**Check PostHog Dashboard:**
- Go to **Activity** tab
- Events may take 1-2 minutes to appear
- Check **Events** tab for all events

**Common Issues:**
- API key incorrect → Check environment variable
- Consent not granted → Accept analytics consent
- Network errors → Check internet connection

### Survey Not Showing?

**Already Responded:**
```javascript
// In browser console:
localStorage.removeItem('icp_survey_responded')
// Refresh page
```

**Consent:**
- Make sure analytics consent is granted
- Check console for consent messages

**Timing:**
- Wait at least 20 seconds OR scroll to 50% of page
- Survey only shows once per user

### Events Not Tracking?

**PostHog Not Initialized:**
- Check console for initialization message
- Verify API key is correct
- Check analytics consent is granted

**Wrong Event Names:**
- Use: `role_selected` (not `roleSelected`)
- Use: `demo_requested` (not `demoRequested`)

**PostHog Dashboard:**
- Events may take 1-2 minutes to appear
- Check **Activity** tab for real-time events

---

## 📝 Files Created/Modified

**New Files:**
- `utils/posthog.js` - PostHog initialization
- `utils/posthogEvents.js` - Event tracking utilities
- `components/ICPSurvey.jsx` - ICP survey popup

**Modified Files:**
- `pages/_app.js` - Added PostHog initialization
- `utils/conversionTracking.js` - Added PostHog tracking
- `package.json` - Added posthog-js dependency

---

## 🎯 Quick Test Checklist

- [ ] Server running (`npm run dev`)
- [ ] Website loads without errors
- [ ] Analytics consent accepted
- [ ] Console shows: "PostHog initialized successfully"
- [ ] ICP survey appears (after 20s or 50% scroll)
- [ ] Selected a role from survey
- [ ] PostHog dashboard shows `role_selected` event
- [ ] PostHog dashboard shows `$pageview` events
- [ ] User properties show `user_role` in PostHog

---

## 💡 Next Steps

1. ✅ **Verify events are tracking** - Check PostHog dashboard
2. ✅ **Create funnels** - See conversion rates by ICP segment
3. ✅ **Set up dashboards** - Monitor key metrics
4. ✅ **Configure alerts** - Get notified of important events
5. ✅ **Integrate with Warmly** - Send ICP data via webhook (optional)

### Optional: Warmly Integration

To send ICP data to Warmly:

1. Go to PostHog → **Settings** → **Webhooks**
2. Create new webhook
3. URL: Your Warmly webhook endpoint (contact Warmly support)
4. Trigger: When `role_selected` event fires
5. Payload: Send `user_role` property

---

## 📚 Resources

- **PostHog Docs**: https://posthog.com/docs
- **PostHog Community**: https://posthog.com/questions
- **Free Tier Limits**: 1M events/month, 1,500 surveys/month

---

**That's it!** You're ready to collect ICP signals and analyze conversion funnels. 🎉

