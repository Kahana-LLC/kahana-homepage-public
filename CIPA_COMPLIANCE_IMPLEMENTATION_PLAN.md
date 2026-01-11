# CIPA Compliance Implementation Plan for Kahana Homepage

## Executive Summary

This plan outlines the implementation of CIPA (California Invasion of Privacy Act) compliance for the Kahana homepage website. The implementation will add explicit opt-in consent for tracking technologies, update privacy policy language, and ensure California users receive strict opt-in behavior.

**Current State:** No consent management system exists. All tracking scripts load unconditionally.

**Target State:** Full CIPA-compliant consent system with explicit opt-in, granular categories, and California-specific enforcement.

---

## Phase 1: Privacy Policy Updates

### Current State Analysis
- **File:** `pages/privacy-policy.jsx`
- **Current Coverage:** Basic mention of cookies/tracking in Section 1 (line 83), but lacks:
  - Detailed definitions of tracking technologies
  - Explicit opt-in consent language
  - Category-based disclosures
  - California-specific rights section
  - Cookie settings references

### Required Changes

#### 1.1 Expand Section 1: "Cookies and other tracking technologies"
**Location:** Line 83 in `pages/privacy-policy.jsx`

**Add detailed subsection:**
- Define cookies, pixels, tags, beacons, session storage, and similar technologies
- List specific tools: Google Analytics, Google Tag Manager, Hotjar, Google Ads, Warmly
- Explain purposes: strictly necessary, analytics, advertising, marketing/personalization

#### 1.2 Add New Section: "Cookies, Pixels, and Similar Technologies"
**Location:** After Section 1, before Section 2

**Content to include:**
- Comprehensive definition of tracking technologies
- Categories breakdown:
  - **Strictly Necessary:** Required for site functionality (always enabled)
  - **Analytics:** Google Analytics, Hotjar (requires consent)
  - **Advertising:** Google Ads, retargeting pixels (requires consent)
  - **Marketing/Personalization:** Warmly, lead identification tools (requires consent)
- Explicit statement: "Non-essential tracking technologies are only activated after you provide explicit consent via our consent banner"
- Withdrawal instructions: "You can withdraw or modify consent at any time via the 'Cookie Settings' link in our footer"

#### 1.3 Add New Section: "Your Choices About Cookies and Tracking"
**Location:** After Section 6 (Your Privacy Rights and Choices), before Section 7

**Content to include:**
- How to access cookie settings
- How to withdraw consent
- Impact of declining cookies
- Browser-level controls

#### 1.4 Enhance Section 6: Add California-Specific Rights
**Location:** Within Section 6 (Your Privacy Rights and Choices)

**Add subsection:**
- California residents' rights under CCPA/CPRA
- Right to know, delete, correct, opt-out of sale/sharing
- Reference to "Do Not Sell or Share My Personal Information" link (to be added to footer)
- Reference to "Cookie Settings" link (to be added to footer)

---

## Phase 2: Consent Banner Implementation

### Current State Analysis
- **No consent banner exists**
- **No consent management system**
- **All scripts load unconditionally**

### Implementation Requirements

#### 2.1 Create Consent Context Provider
**New File:** `contexts/ConsentContext.jsx` or `hooks/useConsent.js`

**Features:**
- React Context for global consent state
- Categories: `strictlyNecessary`, `analytics`, `advertising`, `marketing`
- localStorage persistence
- Consent change event handlers
- Helper functions: `hasConsent(category)`, `setConsent(category, value)`

#### 2.2 Create Consent Banner Component
**New File:** `components/ConsentBanner.jsx`

**UI Requirements:**
- Banner appears on first visit (if no consent record exists)
- Equal prominence "Accept All" and "Decline All" buttons
- "Manage Preferences" button opens modal
- Styled to match Kahana brand colors (`#4A5745`, `#728552`, `#F3F8E4`)
- Mobile-responsive
- Accessible (ARIA labels, keyboard navigation)

**Behavior:**
- Only shows if no consent record in localStorage
- Hides after user makes choice
- Stores consent with timestamp
- Triggers consent change events

#### 2.3 Create Cookie Preferences Modal
**New File:** `components/CookiePreferencesModal.jsx`

**Features:**
- Toggle switches for each category (except strictly necessary - locked)
- Category descriptions
- List of tools per category
- "Save Preferences" button
- "Accept All" and "Reject All" buttons
- Can be opened from banner or footer link

**Categories:**
1. **Strictly Necessary** (always on, locked)
   - Session management
   - Security features
   
2. **Analytics** (opt-in)
   - Google Analytics
   - Hotjar
   
3. **Advertising** (opt-in)
   - Google Ads
   - Retargeting pixels
   
4. **Marketing/Personalization** (opt-in)
   - Warmly
   - Lead identification tools

#### 2.4 Integrate Banner into App
**File to modify:** `pages/_app.js`

**Changes:**
- Import ConsentContext provider
- Wrap app with ConsentProvider
- Add ConsentBanner component
- Add CookiePreferencesModal component

---

## Phase 3: Script Gating Implementation

### Current State Analysis
**Scripts currently loading unconditionally:**

1. **In `pages/_document.js`:**
   - Google Analytics (gtag.js) - lines 38-54
   - Warmly script - lines 57-61 (just added)
   - Google Tag Manager noscript - lines 60-67

2. **In `pages/_app.js`:**
   - Google Analytics (gtag.js) - lines 56-72
   - Google Tag Manager - lines 73-90
   - Hotjar - lines 91-106
   - Google Ads (adsbygoogle) - lines 107-112

3. **In individual pages:**
   - Multiple duplicate Google Analytics implementations across solution/product pages

### Implementation Requirements

#### 3.1 Create Script Loader Utility
**New File:** `utils/scriptLoader.js`

**Functions:**
- `loadScriptIfConsented(scriptId, src, category, options)`
- `removeScriptIfConsentRevoked(scriptId)`
- `initializeConsentBasedScripts()`

#### 3.2 Update `pages/_document.js`
**Changes:**
- Remove unconditional script loading
- Add consent checks before loading:
  - Google Analytics → requires `analytics` consent
  - Warmly → requires `marketing` consent
- Keep GTM noscript (strictly necessary for basic functionality)

#### 3.3 Update `pages/_app.js`
**Changes:**
- Wrap all non-essential scripts in consent checks:
  - Google Analytics → `analytics` consent
  - Google Tag Manager → `analytics` consent
  - Hotjar → `analytics` consent
  - Google Ads → `advertising` consent
- Add event listeners for consent changes
- Dynamically load scripts when consent is granted
- Dynamically remove scripts when consent is revoked

#### 3.4 Update Analytics Utilities
**Files:** `utils/analytics.js`, `utils/conversionTracking.js`

**Changes:**
- Add consent checks before pushing to dataLayer
- Return early if consent not granted
- Log warning in development mode

#### 3.5 Clean Up Duplicate Scripts
**Files:** Multiple solution/product pages

**Action:**
- Remove duplicate Google Analytics implementations
- Rely on centralized implementation in `_app.js`

---

## Phase 4: California/CIPA-Specific Logic

### Implementation Requirements

#### 4.1 Create Geo-Detection Utility
**New File:** `utils/geoDetection.js`

**Approach Options:**
1. **Client-side IP detection** (using a service like ipapi.co or ip-api.com)
2. **Server-side detection** (using Next.js middleware with Cloudflare/Vercel headers)
3. **Browser timezone + IP** (fallback method)

**Recommended:** Start with client-side detection, add server-side later if needed.

**Function:**
```javascript
export async function detectUserRegion() {
  // Returns 'CA' for California, 'US' for other US states, or null
}
```

#### 4.2 Update Consent Banner Logic
**File:** `components/ConsentBanner.jsx`

**Changes:**
- Check user region on mount
- If California: Always show banner, strict opt-in (no pre-checked boxes)
- If other regions: Same strict behavior (default to strict for safety)
- Store region in consent record

#### 4.3 Update Middleware (Optional)
**File:** `middleware.js` (if exists) or create new

**Purpose:**
- Server-side region detection
- Set headers for client-side use
- Enforce California behavior at edge

---

## Phase 5: Footer Updates

### Current State Analysis
**File:** `components/Footer.jsx`
- Has Privacy and Terms links (lines 208-209)
- Missing: "Cookie Settings" and "Do Not Sell or Share My Personal Information" links

### Implementation Requirements

#### 5.1 Add Cookie Settings Link
**Location:** `components/Footer.jsx`, line 209 (after Terms link)

**Implementation:**
- Link that opens CookiePreferencesModal
- Text: "Cookie Settings"
- Styled consistently with other footer links

#### 5.2 Add "Do Not Sell or Share" Link
**Location:** `components/Footer.jsx`, line 210 (after Cookie Settings)

**Implementation:**
- Link that opens CookiePreferencesModal with advertising/marketing toggles off
- Text: "Do Not Sell or Share My Personal Information"
- Styled consistently with other footer links

---

## Phase 6: Testing & Validation

### Testing Checklist

#### 6.1 Consent Banner
- [ ] Banner appears on first visit
- [ ] Banner doesn't reappear after consent is given
- [ ] "Accept All" enables all categories
- [ ] "Decline All" disables all non-essential categories
- [ ] "Manage Preferences" opens modal
- [ ] Modal allows granular control
- [ ] Changes persist across page reloads

#### 6.2 Script Loading
- [ ] No scripts load before consent
- [ ] Scripts load after "Accept All"
- [ ] Scripts load after granular acceptance
- [ ] Scripts don't load if category declined
- [ ] Scripts are removed when consent revoked
- [ ] Analytics events only fire with consent

#### 6.3 California Behavior
- [ ] California users see banner on first visit
- [ ] California users cannot bypass consent
- [ ] Default state is "all declined" for California users
- [ ] Region detection works correctly

#### 6.4 Privacy Policy
- [ ] All tracking tools are disclosed
- [ ] Categories are clearly explained
- [ ] Opt-in language is explicit
- [ ] California rights section is present
- [ ] Cookie settings instructions are clear

#### 6.5 Footer Links
- [ ] "Cookie Settings" link opens modal
- [ ] "Do Not Sell" link works correctly
- [ ] Links are accessible and styled correctly

---

## Phase 7: Legal Review & Documentation

### Deliverables for Legal Review

1. **Updated Privacy Policy** (`pages/privacy-policy.jsx`)
   - New sections on tracking technologies
   - California rights section
   - Explicit opt-in language

2. **Consent Implementation Summary**
   - How consent is collected
   - How consent is stored
   - How consent can be withdrawn
   - California-specific behavior

3. **Tracking Tools Inventory**
   - List of all tracking tools
   - Category assignments
   - Data collected by each tool
   - Third-party sharing disclosures

4. **Technical Implementation Notes**
   - How region detection works
   - How scripts are gated
   - How consent changes are handled

---

## Implementation Order & Timeline

### Week 1: Foundation
1. Create ConsentContext/useConsent hook
2. Create ConsentBanner component
3. Create CookiePreferencesModal component
4. Integrate into `_app.js`

### Week 2: Script Gating
1. Create scriptLoader utility
2. Update `_document.js` with consent checks
3. Update `_app.js` with consent checks
4. Update analytics utilities
5. Remove duplicate scripts

### Week 3: Policy & Footer
1. Update privacy policy with new sections
2. Add footer links
3. Test all integrations

### Week 4: California Logic & Testing
1. Implement geo-detection
2. Add California-specific behavior
3. Comprehensive testing
4. Legal review preparation

---

## Files to Create

1. `contexts/ConsentContext.jsx` - Consent state management
2. `components/ConsentBanner.jsx` - Main consent banner
3. `components/CookiePreferencesModal.jsx` - Preferences modal
4. `utils/scriptLoader.js` - Script loading utilities
5. `utils/geoDetection.js` - Region detection

## Files to Modify

1. `pages/privacy-policy.jsx` - Add tracking sections
2. `pages/_app.js` - Add consent provider, gate scripts
3. `pages/_document.js` - Gate scripts
4. `components/Footer.jsx` - Add cookie/privacy links
5. `utils/analytics.js` - Add consent checks
6. `utils/conversionTracking.js` - Add consent checks

## Files to Clean Up

1. Multiple solution/product pages - Remove duplicate GA scripts

---

## Key Technical Decisions

### Consent Storage
- **Method:** localStorage (with cookie fallback for SSR compatibility)
- **Key:** `kahana_consent_preferences`
- **Format:** JSON object with categories, timestamp, region

### Script Loading Strategy
- **Initial Load:** No non-essential scripts
- **After Consent:** Dynamic script injection
- **Consent Revocation:** Script removal + cookie clearing

### Region Detection
- **Primary:** Client-side IP detection (ipapi.co free tier)
- **Fallback:** Browser timezone + user agent
- **Future:** Server-side via Next.js middleware

### Category Definitions
- **Strictly Necessary:** Session, security, core functionality
- **Analytics:** Google Analytics, Hotjar
- **Advertising:** Google Ads, retargeting
- **Marketing:** Warmly, lead identification

---

## Success Criteria

✅ All non-essential tracking scripts require explicit opt-in consent
✅ California users receive strict opt-in behavior
✅ Privacy policy accurately describes all tracking technologies
✅ Users can easily withdraw or modify consent
✅ Footer includes required privacy links
✅ No tracking occurs before consent
✅ Legal team approves implementation

---

## Notes & Considerations

1. **Warmly Integration:** Just added in `_document.js` - needs to be gated behind marketing consent
2. **Analytics Duplication:** Multiple pages have duplicate GA implementations - should be centralized
3. **Brand Consistency:** Consent UI should match Kahana's green color scheme
4. **Performance:** Script loading should not block page render
5. **Accessibility:** Banner and modal must be fully accessible
6. **Mobile Experience:** Banner should work well on mobile devices

---

## Next Steps

1. Review this plan with legal team
2. Get approval on category definitions
3. Begin Phase 1 implementation
4. Schedule regular check-ins for each phase
5. Prepare final documentation for legal sign-off

