-- Add Stripe customer ID and subscription ID columns to user_plans table
-- This allows linking user plans directly to Stripe customers and subscriptions

-- Add stripe_customer_id column
ALTER TABLE public.user_plans 
ADD COLUMN IF NOT EXISTS stripe_customer_id text;

-- Add stripe_subscription_id column (if not already exists)
ALTER TABLE public.user_plans 
ADD COLUMN IF NOT EXISTS stripe_subscription_id text;

-- Create index on stripe_customer_id for faster lookups
CREATE INDEX IF NOT EXISTS idx_user_plans_stripe_customer_id 
ON public.user_plans(stripe_customer_id);

-- Create index on stripe_subscription_id for faster lookups
CREATE INDEX IF NOT EXISTS idx_user_plans_stripe_subscription_id 
ON public.user_plans(stripe_subscription_id);

-- Add comment to columns
COMMENT ON COLUMN public.user_plans.stripe_customer_id IS 'Stripe customer ID (cus_*) linking to the Stripe customer';
COMMENT ON COLUMN public.user_plans.stripe_subscription_id IS 'Stripe subscription ID (sub_*) linking to the Stripe subscription';

