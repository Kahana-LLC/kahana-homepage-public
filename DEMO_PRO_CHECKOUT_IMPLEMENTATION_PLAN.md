# Demo Pro Subscription Checkout Implementation Plan

## Overview
This plan outlines the implementation of a **demo** Pro subscription checkout flow for Oasis, similar to strawberrybrowser.com's checkout. This will be implemented as a separate demo page to avoid interfering with the main website.

**Tech Stack:**
- **Framework:** Next.js 14.1.3 (already in use)
- **Database:** Supabase (PostgreSQL)
- **Payment Processor:** Stripe
- **Authentication:** Supabase Auth (if needed for demo)

---

## 📋 Implementation Sections

1. [Stripe Setup Steps](#1-stripe-setup-steps)
2. [Supabase Setup Steps](#2-supabase-setup-steps)
3. [Frontend Steps](#3-frontend-steps-the-checkout-page)
4. [Sync/Webhook Steps](#4-syncwebhook-steps)

---

## 1. Stripe Setup Steps

### Step 1.1: Create Stripe Account & Get API Keys
- [ ] Sign up for Stripe account (if not already done) at https://stripe.com
- [ ] Navigate to Developers → API keys
- [ ] Copy **Publishable key** (starts with `pk_test_...` for test mode)
- [ ] Copy **Secret key** (starts with `sk_test_...` for test mode)
- [ ] Store these securely (we'll use environment variables)

### Step 1.2: Install Stripe SDK
- [ ] Install Stripe Node.js SDK: `npm install stripe`
- [ ] Install Stripe React components (optional, for payment elements): `npm install @stripe/stripe-js @stripe/react-stripe-js`

### Step 1.3: Create Product and Price in Stripe Dashboard
- [ ] Log into Stripe Dashboard → Products
- [ ] Click "Add product"
- [ ] Create "Oasis Pro" product:
  - **Name:** "Oasis Pro"
  - **Description:** "Pro subscription plan for Oasis AI-powered workspace"
  - **Pricing model:** Recurring
  - **Price:** $20.00 USD per month
  - **Billing period:** Monthly
  - **Currency:** USD
- [ ] Save the **Price ID** (starts with `price_...`) - you'll need this in your code

### Step 1.4: Set Up Stripe Webhook Endpoints (for local development)
- [ ] Install Stripe CLI: https://stripe.com/docs/stripe-cli
- [ ] Login to Stripe CLI: `stripe login`
- [ ] Forward webhooks to local server: `stripe listen --forward-to localhost:3000/api/webhooks/stripe`
- [ ] Copy the **webhook signing secret** (starts with `whsec_...`) - save this for environment variables
- [ ] In Stripe Dashboard → Developers → Webhooks, add endpoint:
  - **URL:** `https://your-production-domain.com/api/webhooks/stripe` (for production)
  - **Events to listen:** Select all subscription-related events:
    - `checkout.session.completed`
    - `customer.subscription.created`
    - `customer.subscription.updated`
    - `customer.subscription.deleted`
    - `invoice.payment_succeeded`
    - `invoice.payment_failed`
    - `customer.subscription.trial_will_end`

### Step 1.5: Configure Environment Variables (Local)
- [ ] Create `.env.local` file in project root (if not exists)
- [ ] Add Stripe keys:
  ```
  STRIPE_SECRET_KEY=sk_test_...
  NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
  STRIPE_WEBHOOK_SECRET=whsec_...
  STRIPE_PRICE_ID_PRO=price_... (the Price ID from Step 1.3)
  ```

### Step 1.6: Test Mode Setup
- [ ] Ensure you're in **Test Mode** in Stripe Dashboard (toggle in top right)
- [ ] Use test card numbers for testing:
  - Success: `4242 4242 4242 4242`
  - Decline: `4000 0000 0000 0002`
  - Use any future expiry date, any 3-digit CVC, any ZIP

---

## 2. Supabase Setup Steps

### Step 2.1: Create Supabase Project
- [x] ✅ **Already have Supabase project** (db.wvclepquxxczgrukfqyr.supabase.co)
- [ ] Install Supabase JS client: `npm install @supabase/supabase-js`
- [ ] Note your project URL and anon/service role keys from Supabase Dashboard → Settings → API

### Step 2.2: Run Database Migration

**📋 Important:** Your existing schema has been analyzed. We'll use your existing `user_plans` table and add Stripe fields to it.

- [ ] Open Supabase Dashboard → SQL Editor
- [ ] Copy and paste the entire contents of `SUPABASE_MIGRATION.sql` file
- [ ] Run the migration script
- [ ] Verify the migration completed successfully

**What the migration does:**
1. ✅ Creates `profiles` table (extends `auth.users` with Stripe customer ID)
2. ✅ Creates **NEW `subscriptions` table** (separate from `user_plans` - your existing table remains unchanged):
   - `stripe_subscription_id` (UNIQUE, NOT NULL)
   - `stripe_customer_id` (NOT NULL)
   - `stripe_price_id` (NOT NULL)
   - `status` ('active', 'canceled', 'past_due', etc.)
   - `plan_name` (defaults to 'Pro')
   - `current_period_start` and `current_period_end`
   - `cancel_at_period_end`
   - `created_at` and `updated_at`
3. ✅ Creates `subscription_history` table (optional audit trail)
4. ✅ Sets up Row Level Security (RLS) policies
5. ✅ Creates triggers for `updated_at` timestamps

**Important:** 
- Your existing `user_plans` table is **NOT modified** - it remains unchanged
- When someone pays through Stripe → A record is created in the **NEW `subscriptions` table**
- `subscriptions` table is specifically for Stripe subscriptions

**Schema Structure:**
- `subscriptions` table → **NEW** table for Stripe subscriptions
- `user_plans` table → **UNCHANGED** (your existing subscription system)
- `plans` table → Already exists, contains plan definitions
- `payments` table → Already exists, can track payment history
- `profiles` table → New table for user profile + Stripe customer ID

**See `SUPABASE_SETUP_STEPS.md` for step-by-step setup instructions.**

### Step 2.5: Set Up Supabase Service Role Key (for webhooks)
- [ ] Go to Supabase Dashboard → Settings → API
- [ ] Copy **service_role** key (secret, server-side only)
- [ ] Add to `.env.local`:
  ```
  SUPABASE_URL=https://your-project.supabase.co
  SUPABASE_ANON_KEY=your-anon-key
  SUPABASE_SERVICE_ROLE_KEY=your-service-role-key (for webhooks)
  ```

---

## 3. Frontend Steps (The Checkout Page)

### Step 3.1: Create Demo Checkout Page
- [ ] Create new page: `pages/oasis-pricing-demo-checkout.jsx`
- [ ] This will be the demo version separate from main `oasis-pricing.jsx`
- [ ] Add route: `/oasis-pricing-demo-checkout`

### Step 3.2: Create Checkout Session API Route
- [ ] Create API route: `pages/api/demo-checkout/create-session.js`
- [ ] This route will:
  - Accept POST request with user email (or user ID if authenticated)
  - Create Stripe Checkout Session
  - Include metadata (user_id, plan_name, etc.)
  - Set success_url: `/oasis-pricing-demo-checkout/success?session_id={CHECKOUT_SESSION_ID}`
  - Set cancel_url: `/oasis-pricing-demo-checkout/cancel`
  - Return session ID and checkout URL

### Step 3.3: Implement "Subscribe" Button Handler
- [ ] In `oasis-pricing-demo-checkout.jsx`:
  - Add "Subscribe" button for Pro plan
  - Create handler function `handleSubscribe()`
  - Call `/api/demo-checkout/create-session` API
  - On success, redirect to Stripe Checkout: `window.location.href = checkoutUrl`
  - Handle errors (show error message to user)

### Step 3.4: Create Success Page
- [ ] Create: `pages/oasis-pricing-demo-checkout/success.jsx`
- [ ] This page will:
  - Retrieve `session_id` from URL query params
  - Optionally verify session with Stripe (API route)
  - Display success message
  - Show subscription details
  - Link back to main pricing or dashboard

### Step 3.5: Create Cancel Page
- [ ] Create: `pages/oasis-pricing-demo-checkout/cancel.jsx`
- [ ] This page will:
  - Display cancellation message
  - Provide option to try again
  - Link back to pricing page

### Step 3.6: Add Loading States
- [ ] Implement loading spinner while creating checkout session
- [ ] Disable button during API call to prevent duplicate requests

### Step 3.7: Error Handling
- [ ] Add try-catch blocks around API calls
- [ ] Display user-friendly error messages
- [ ] Log errors to console (or error tracking service)

---

## 4. Sync/Webhook Steps

### Step 4.1: Create Webhook Endpoint
- [ ] Create API route: `pages/api/webhooks/stripe.js`
- [ ] This route will:
  - Verify webhook signature using `STRIPE_WEBHOOK_SECRET`
  - Handle different event types (switch statement)
  - Update Supabase based on event type
  - Return 200 status to Stripe

### Step 4.2: Handle `checkout.session.completed` Event
- [ ] When checkout is completed:
  - Extract `customer`, `subscription`, `metadata` from event
  - Get or create user profile in Supabase `profiles` table
  - Create/update Stripe customer ID in `profiles.stripe_customer_id`
  - Create subscription record in **`subscriptions` table** (NEW table) with:
    - `stripe_subscription_id`
    - `stripe_customer_id`
    - `stripe_price_id`
    - `status: 'active'`
    - `current_period_start` and `current_period_end`
    - `plan_name: 'Pro'` (or from metadata)
    - `user_id` (from metadata or profile lookup)

### Step 4.3: Handle `customer.subscription.created` Event
- [ ] Similar to checkout completed, but may fire separately
- [ ] Create subscription record if doesn't exist
- [ ] Update user profile if needed

### Step 4.4: Handle `customer.subscription.updated` Event
- [ ] Update existing subscription record in **`subscriptions` table**:
  - Update `status` (active, past_due, etc.)
  - Update `current_period_start` and `current_period_end`
  - Update `cancel_at_period_end` flag
  - Update `plan_name` if changed (lookup from `stripe_price_id`)

### Step 4.5: Handle `customer.subscription.deleted` Event
- [ ] Update subscription in **`subscriptions` table**:
  - Set `status` to 'canceled'
  - Set `cancel_at_period_end` to false
  - Update `current_period_end` if needed
- [ ] Optionally log to `subscription_history` table

### Step 4.6: Handle `invoice.payment_succeeded` Event
- [ ] Verify subscription in **`subscriptions` table** is still active
- [ ] Update subscription `current_period_end` if needed
- [ ] Log to `subscription_history` table

### Step 4.7: Handle `invoice.payment_failed` Event
- [ ] Update subscription in **`subscriptions` table**:
  - Set `status` to 'past_due' or 'unpaid'
- [ ] Log failure to `subscription_history` table
- [ ] Optionally send notification (future enhancement)

### Step 4.8: Test Webhook Locally
- [ ] Use Stripe CLI: `stripe listen --forward-to localhost:3000/api/webhooks/stripe`
- [ ] Trigger test events: `stripe trigger checkout.session.completed`
- [ ] Verify Supabase records are created/updated correctly:
  - Check `profiles` table for Stripe customer ID
  - Check **`subscriptions` table** for subscription record (NEW table)
  - Check `subscription_history` table for audit log (if created)
- [ ] Check logs for any errors

### Step 4.9: Secure Webhook Endpoint
- [ ] Always verify webhook signature before processing
- [ ] Use idempotency keys to prevent duplicate processing
- [ ] Handle race conditions (multiple webhooks for same event)
- [ ] Return appropriate status codes (200 for success, 400 for invalid)

---

## 📦 Required NPM Packages

Install the following packages:
```bash
npm install stripe @supabase/supabase-js
```

Optional (for Stripe Elements UI):
```bash
npm install @stripe/stripe-js @stripe/react-stripe-js
```

---

## 🔐 Environment Variables Summary

Add these to `.env.local`:

```bash
# Stripe
STRIPE_SECRET_KEY=sk_test_...
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...
STRIPE_PRICE_ID_PRO=price_...

# Supabase
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
```

---

## 🧪 Testing Checklist

### Local Testing:
- [ ] Test checkout flow with test card
- [ ] Verify webhook receives events (use Stripe CLI)
- [ ] Check Supabase tables are updated correctly
- [ ] Test success redirect page
- [ ] Test cancel redirect page
- [ ] Test error handling (invalid cards, network errors)

### Webhook Testing:
- [ ] Test `checkout.session.completed`
- [ ] Test `customer.subscription.updated`
- [ ] Test `customer.subscription.deleted`
- [ ] Test `invoice.payment_succeeded`
- [ ] Test `invoice.payment_failed`

---

## 📁 File Structure (New Files to Create)

```
pages/
  ├── oasis-pricing-demo-checkout.jsx          # Demo checkout page
  ├── oasis-pricing-demo-checkout/
  │   ├── success.jsx                          # Success redirect page
  │   └── cancel.jsx                           # Cancel redirect page
  └── api/
      ├── demo-checkout/
      │   └── create-session.js                # Create Stripe checkout session
      └── webhooks/
          └── stripe.js                        # Handle Stripe webhooks

lib/ (optional, for utilities)
  ├── stripe.js                                # Stripe client initialization
  └── supabase.js                              # Supabase client initialization
```

---

## 🚀 Deployment Considerations (Future)

For production deployment:
- [ ] Update Stripe webhook URL in Stripe Dashboard to production URL
- [ ] Use production Stripe keys (not test keys)
- [ ] Set production environment variables on hosting platform
- [ ] Test webhook delivery in production
- [ ] Set up monitoring/alerting for failed webhooks

---

## 📝 Notes

- This is a **DEMO** implementation - keep it separate from main `oasis-pricing.jsx`
- The demo page route will be: `/oasis-pricing-demo-checkout`
- All API routes are prefixed with `/api/demo-checkout/` or `/api/webhooks/`
- Supabase tables use RLS for security
- Webhook secret must be kept secure (never commit to git)
- Test thoroughly in Stripe test mode before going to production

---

**Ready to implement?** Start with Section 1 (Stripe Setup), then proceed sequentially through each section.


