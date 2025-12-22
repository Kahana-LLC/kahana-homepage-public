# 🚨 URGENT: Webhook Endpoint Issue

## Problem
Your Stripe webhook is pointing to **Slack** instead of your API endpoint. That's why payments aren't syncing!

**Current endpoint:** `https://hooks.slack.com/services/...` ❌

**Should be:** `https://your-domain.com/api/webhooks/stripe` ✅

## Fix Steps

### 1. Go to Stripe Dashboard
- Visit: https://dashboard.stripe.com/test/webhooks (or /webhooks for live mode)
- Find the webhook endpoint pointing to Slack
- Either **delete it** or **disable it**

### 2. Add New Webhook Endpoint
- Click **"Add endpoint"**
- Set **Endpoint URL** to: `https://YOUR-DOMAIN.com/api/webhooks/stripe`
  - Replace `YOUR-DOMAIN` with your actual domain (e.g., `kahana.co` or your Vercel/Heroku URL)
- Select these events:
  - ✅ `checkout.session.completed`
  - ✅ `customer.subscription.created`
  - ✅ `customer.subscription.updated`
  - ✅ `customer.subscription.deleted`
  - ✅ `invoice.payment_succeeded`
  - ✅ `invoice.payment_failed`

### 3. Copy the Signing Secret
- After creating the endpoint, click on it
- Copy the **"Signing secret"** (starts with `whsec_...`)
- Add it to your `.env.local`:
  ```
  STRIPE_WEBHOOK_SECRET=whsec_...
  ```

### 4. Test It
- Make a test payment
- Check if it syncs to Supabase
- Check Stripe Dashboard → Webhooks → Recent attempts to see if it's working

## For Local Development
If testing locally, use Stripe CLI:
```bash
stripe listen --forward-to localhost:3000/api/webhooks/stripe
```
This will give you a webhook secret for local testing.

## Quick Check
Run this to see your current endpoints:
```bash
node scripts/check-webhook-events.js
```



