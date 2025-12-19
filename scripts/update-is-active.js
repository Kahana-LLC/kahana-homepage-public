#!/usr/bin/env node
/**
 * Update is_active for a user based on their Stripe subscription status
 */

require('dotenv').config({ path: '.env.local' });
const { createClient } = require('@supabase/supabase-js');
const Stripe = require('stripe');

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
const stripeSecretKey = process.env.STRIPE_SECRET_KEY;

const supabase = createClient(supabaseUrl, supabaseServiceKey);
const stripe = new Stripe(stripeSecretKey, {
  apiVersion: '2024-12-18.acacia',
});

async function updateIsActive(email) {
  const { data: user } = await supabase
    .from('users')
    .select('*')
    .eq('email', email)
    .single();

  if (!user || !user.stripe_customer_id) {
    console.error('User not found or no stripe_customer_id');
    return;
  }

  const subscriptions = await stripe.subscriptions.list({
    customer: user.stripe_customer_id,
    limit: 1,
  });

  if (subscriptions.data.length === 0) {
    console.log('No subscriptions found');
    return;
  }

  const sub = subscriptions.data[0];
  const isActive = sub.status === 'active' || sub.status === 'trialing';

  const { data: userPlans } = await supabase
    .from('user_plans')
    .select('*')
    .eq('user_id', user.user_id);

  if (userPlans && userPlans.length > 0) {
    for (const plan of userPlans) {
      const { error } = await supabase
        .from('user_plans')
        .update({ is_active: isActive })
        .eq('user_plan_id', plan.user_plan_id);

      if (error) {
        console.error(`Error updating plan ${plan.user_plan_id}:`, error.message);
      } else {
        console.log(`✅ Updated plan ${plan.user_plan_id}: is_active = ${isActive}`);
      }
    }
  }
}

updateIsActive(process.argv[2] || 'adamthewrite@gmail.com').catch(console.error);

