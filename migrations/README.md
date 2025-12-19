# Database Migrations

## Add Stripe IDs to user_plans table

### Migration: `add_stripe_ids_to_user_plans.sql`

This migration adds support for linking Stripe customer IDs and subscription IDs to the `user_plans` table.

### What it does:

1. Adds `stripe_customer_id` column to `user_plans` table
2. Adds `stripe_subscription_id` column to `user_plans` table (if not already exists)
3. Creates indexes on both columns for faster lookups
4. Adds documentation comments to the columns

### How to run:

1. Open your Supabase dashboard
2. Go to SQL Editor
3. Copy and paste the contents of `add_stripe_ids_to_user_plans.sql`
4. Execute the SQL

### What changed in code:

- **`utils/supabase.js`**: 
  - Updated `upsertUserPlan()` to accept and store `stripe_customer_id` and `stripe_subscription_id`
  - Improved lookup logic to find existing plans by subscription ID first, then customer ID, then user ID
  - Added helper functions: `findUserPlanByStripeSubscriptionId()` and `findUserPlanByStripeCustomerId()`

- **`pages/api/webhooks/stripe.js`**: 
  - All webhook handlers now pass `stripe_customer_id` when creating/updating user plans
  - This ensures every user plan is linked to both the Stripe customer and subscription

### Benefits:

- Direct lookup of user plans by Stripe customer ID
- Direct lookup of user plans by Stripe subscription ID
- Better tracking and reconciliation with Stripe data
- Improved webhook handling performance

