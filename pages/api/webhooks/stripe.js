import Stripe from 'stripe'
import { createServiceClient, getOrCreateUser, upsertSubscription, logSubscriptionHistory } from '@/utils/supabase'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2024-12-18.acacia',
})

export const config = {
  api: {
    bodyParser: false,
  },
}

async function buffer(readable) {
  const chunks = []
  for await (const chunk of readable) {
    chunks.push(typeof chunk === 'string' ? Buffer.from(chunk) : chunk)
  }
  return Buffer.concat(chunks)
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const buf = await buffer(req)
  const sig = req.headers['stripe-signature']

  let event

  try {
    event = stripe.webhooks.constructEvent(buf, sig, process.env.STRIPE_WEBHOOK_SECRET)
  } catch (err) {
    console.error('Webhook signature verification failed:', err.message)
    return res.status(400).json({ error: `Webhook Error: ${err.message}` })
  }

  const supabase = createServiceClient()

  try {
    switch (event.type) {
      case 'checkout.session.completed': {
        const session = event.data.object

        // Get customer and subscription details
        const customerId = session.customer
        const subscriptionId = session.subscription
        const customerEmail = session.customer_email || session.customer_details?.email

        if (!customerId || !subscriptionId) {
          console.error('Missing customer or subscription ID in checkout session')
          return res.status(400).json({ error: 'Missing required data' })
        }

        // Get subscription details from Stripe
        const subscription = await stripe.subscriptions.retrieve(subscriptionId)
        const priceId = subscription.items.data[0]?.price?.id
        const planName = subscription.items.data[0]?.price?.nickname || 'Pro'

        // Find user by email in Supabase (public.users uses user_id, not id)
        let userId = null
        if (customerEmail) {
          const { data: user } = await supabase
            .from('users')
            .select('user_id')
            .eq('email', customerEmail)
            .single()

          if (user) {
            userId = user.user_id
          }
        }

        // If no user found by email, try to find by Stripe customer ID
        if (!userId) {
          const { data: user } = await supabase
            .from('users')
            .select('user_id')
            .eq('stripe_customer_id', customerId)
            .single()

          if (user) {
            userId = user.user_id
          }
        }

        // If still no user, log warning (user should sign up first)
        if (!userId && customerEmail) {
          console.warn('No user found for email:', customerEmail)
        }

        // Update user with Stripe customer ID
        if (userId) {
          await supabase
            .from('users')
            .update({ 
              stripe_customer_id: customerId,
              updated_at: new Date().toISOString()
            })
            .eq('user_id', userId)
        } else if (customerEmail) {
          // User should sign up first, but log for debugging
          console.warn('Cannot update user - user not found for email:', customerEmail)
        }

        // Create or update subscription record
        if (userId) {
          const subscriptionData = {
            user_id: userId,
            stripe_subscription_id: subscriptionId,
            stripe_customer_id: customerId,
            stripe_price_id: priceId,
            status: subscription.status,
            plan_name: planName,
            payment_status: 'paid', // Mark as paid when checkout is completed
            current_period_start: new Date(subscription.current_period_start * 1000).toISOString(),
            current_period_end: new Date(subscription.current_period_end * 1000).toISOString(),
            cancel_at_period_end: subscription.cancel_at_period_end || false,
          }

          const subRecord = await upsertSubscription(subscriptionData)

          // Log to subscription history
          if (subRecord?.id) {
            await logSubscriptionHistory(
              subRecord.id,
              'created',
              event.id,
              { checkout_session_id: session.id }
            )
          }
        }

        break
      }

      case 'customer.subscription.updated': {
        const subscription = event.data.object
        const customerId = subscription.customer
        const subscriptionId = subscription.id
        const priceId = subscription.items.data[0]?.price?.id
        const planName = subscription.items.data[0]?.price?.nickname || 'Pro'

        // Find subscription in database
        const { data: existingSub } = await supabase
          .from('subscriptions')
          .select('*')
          .eq('stripe_subscription_id', subscriptionId)
          .single()

        if (existingSub) {
          const updateData = {
            status: subscription.status,
            plan_name: planName,
            current_period_start: new Date(subscription.current_period_start * 1000).toISOString(),
            current_period_end: new Date(subscription.current_period_end * 1000).toISOString(),
            cancel_at_period_end: subscription.cancel_at_period_end || false,
          }

          await supabase
            .from('subscriptions')
            .update(updateData)
            .eq('stripe_subscription_id', subscriptionId)

          // Log to history
          await logSubscriptionHistory(
            existingSub.id,
            'updated',
            event.id,
            { status: subscription.status }
          )
        }

        break
      }

      case 'customer.subscription.deleted': {
        const subscription = event.data.object
        const subscriptionId = subscription.id

        // Update subscription status to canceled
        const { data: existingSub } = await supabase
          .from('subscriptions')
          .select('id')
          .eq('stripe_subscription_id', subscriptionId)
          .single()

        if (existingSub) {
          await supabase
            .from('subscriptions')
            .update({
              status: 'canceled',
              cancel_at_period_end: false,
            })
            .eq('stripe_subscription_id', subscriptionId)

          // Log to history
          await logSubscriptionHistory(
            existingSub.id,
            'canceled',
            event.id,
            {}
          )
        }

        break
      }

      case 'invoice.payment_succeeded': {
        const invoice = event.data.object
        const subscriptionId = invoice.subscription

        if (subscriptionId) {
          const { data: existingSub } = await supabase
            .from('subscriptions')
            .select('id')
            .eq('stripe_subscription_id', subscriptionId)
            .single()

          if (existingSub) {
            // Get updated subscription from Stripe
            const subscription = await stripe.subscriptions.retrieve(subscriptionId)
            
            await supabase
              .from('subscriptions')
              .update({
                current_period_end: new Date(subscription.current_period_end * 1000).toISOString(),
              })
              .eq('stripe_subscription_id', subscriptionId)

            // Log to history
            await logSubscriptionHistory(
              existingSub.id,
              'payment_succeeded',
              event.id,
              { invoice_id: invoice.id }
            )
          }
        }

        break
      }

      case 'invoice.payment_failed': {
        const invoice = event.data.object
        const subscriptionId = invoice.subscription

        if (subscriptionId) {
          const { data: existingSub } = await supabase
            .from('subscriptions')
            .select('id')
            .eq('stripe_subscription_id', subscriptionId)
            .single()

          if (existingSub) {
            await supabase
              .from('subscriptions')
              .update({
                status: 'past_due',
              })
              .eq('stripe_subscription_id', subscriptionId)

            // Log to history
            await logSubscriptionHistory(
              existingSub.id,
              'payment_failed',
              event.id,
              { invoice_id: invoice.id }
            )
          }
        }

        break
      }

      default:
        console.log(`Unhandled event type: ${event.type}`)
    }

    return res.status(200).json({ received: true })
  } catch (error) {
    console.error('Webhook handler error:', error)
    return res.status(500).json({ error: 'Webhook handler failed' })
  }
}

