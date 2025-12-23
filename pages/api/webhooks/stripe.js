import Stripe from 'stripe'
import { createServiceClient, getOrCreateUser, createPayment, upsertUserPlan, logSubscriptionHistory } from '@/utils/supabase'

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
        let subscription
        try {
          subscription = await stripe.subscriptions.retrieve(subscriptionId)
        } catch (stripeError) {
          console.error('❌ Error retrieving subscription from Stripe:', stripeError)
          throw new Error(`Failed to retrieve subscription: ${stripeError.message}`)
        }
        const priceId = subscription.items.data[0]?.price?.id
        const planName = subscription.items.data[0]?.price?.nickname || 'Pro'
        const amount = subscription.items.data[0]?.price?.unit_amount || 0 // Amount in cents
        const amountInDollars = amount / 100

        // Calculate payment_status - use simple "Paid" for all active subscriptions
        let paymentStatus = 'free'
        if (amountInDollars > 0) {
          paymentStatus = 'Paid' // Simple "Paid" status for all active subscriptions
        }

        // Get or create user by email (auto-create if doesn't exist)
        let userId = null
        if (customerEmail) {
          try {
            const user = await getOrCreateUser(customerEmail, {
              stripe_customer_id: customerId,
            })
            userId = user.user_id
            console.log(`✅ User found/created: ${user.user_id} for email: ${customerEmail}`)
          } catch (error) {
            console.error(`❌ Error getting/creating user: ${error.message}`)
            // Try to find by Stripe customer ID as fallback
            const { data: user } = await supabase
              .from('users')
              .select('user_id')
              .eq('stripe_customer_id', customerId)
              .single()

            if (user) {
              userId = user.user_id
            }
          }
        }

        // If still no user found, try to find by Stripe customer ID
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

        // If we still don't have a user, we can't proceed
        if (!userId) {
          console.error('❌ Cannot process payment - no user found for:', {
            email: customerEmail,
            customerId: customerId,
          })
          return res.status(400).json({ error: 'User not found and could not be created' })
        }

        // Update user with Stripe customer ID and payment status (sync with payment record)
        await supabase
          .from('users')
          .update({ 
            stripe_customer_id: customerId,
            payment_status: 'Paid', // Sync with payment's customer_subscription_status
            updated_at: new Date().toISOString()
          })
          .eq('user_id', userId)

        // Create payment record in payments table
        let paymentRecord
        try {
          paymentRecord = await createPayment({
            user_id: userId,
            amount: amountInDollars,
            currency: subscription.currency || 'usd',
            status: 'success', // Payment succeeded since checkout completed
            provider: 'stripe',
            timestamp: new Date().toISOString(),
            customer_subscription_status: 'Paid', // Set to "Paid" on successful payment
          })
          console.log(`✅ Payment record created: ${paymentRecord.payment_id}`)
        } catch (paymentError) {
          console.error('❌ Error creating payment record:', paymentError)
          throw new Error(`Failed to create payment record: ${paymentError.message}`)
        }

        // Create or update user_plan in user_plans table
        const userPlanData = {
          user_id: userId,
          plan_id: null, // Not mapping to plans table yet
          stripe_customer_id: customerId,
          stripe_subscription_id: subscriptionId,
          status: subscription.status,
          current_period_start: new Date(subscription.current_period_start * 1000).toISOString(),
          current_period_end: new Date(subscription.current_period_end * 1000).toISOString(),
          cancel_at_period_end: subscription.cancel_at_period_end || false,
          payment_id: paymentRecord.payment_id,
        }

        let userPlanRecord
        try {
          userPlanRecord = await upsertUserPlan(userPlanData)
          console.log(`✅ User plan record created/updated: ${userPlanRecord.user_plan_id}`)
        } catch (planError) {
          console.error('❌ Error creating/updating user plan:', planError)
          throw new Error(`Failed to create/update user plan: ${planError.message}`)
        }

        // Log to subscription history (if table exists)
        await logSubscriptionHistory(
          userPlanRecord.user_plan_id,
          'created',
          event.id,
          { checkout_session_id: session.id, amount: amountInDollars, payment_status: paymentStatus }
        )

        break
      }

      case 'customer.subscription.updated': {
        const subscription = event.data.object
        const customerId = subscription.customer
        const subscriptionId = subscription.id
        const amount = subscription.items.data[0]?.price?.unit_amount || 0
        const amountInDollars = amount / 100

        // Find user by stripe_customer_id
        const { data: user } = await supabase
          .from('users')
          .select('user_id')
          .eq('stripe_customer_id', customerId)
          .single()

        if (user) {
          // Update user_plan
          const userPlanData = {
            user_id: user.user_id,
            plan_id: null, // Not mapping to plans table yet
            stripe_customer_id: customerId,
            stripe_subscription_id: subscriptionId,
            status: subscription.status,
            current_period_start: new Date(subscription.current_period_start * 1000).toISOString(),
            current_period_end: new Date(subscription.current_period_end * 1000).toISOString(),
            cancel_at_period_end: subscription.cancel_at_period_end || false,
          }

          const userPlanRecord = await upsertUserPlan(userPlanData)
          console.log(`✅ User plan updated: ${userPlanRecord.user_plan_id}, status: ${subscription.status}`)

          // Option 2: Only set to 'free' when subscription is actually canceled/ended
          // If cancel_at_period_end is true, user still has access until period ends - keep status as 'Paid'
          // Only update to 'free' when subscription status is actually 'canceled', 'unpaid', or 'past_due'
          const isActuallyCanceled = subscription.status === 'canceled' || 
                                     subscription.status === 'unpaid' || 
                                     subscription.status === 'past_due'

          if (isActuallyCanceled) {
            // Subscription has actually ended - update to 'free'
            // Update all payment records for this user that are NOT 'free' to "free"
            // This catches all variations: 'Paid', 'paid', '$20/month', '$250/month', etc.
            // NULL values won't match neq() so they won't be updated (which is correct)
            const { data: updatedPayments, error: updateError } = await supabase
              .from('payments')
              .update({ customer_subscription_status: 'free' })
              .eq('user_id', user.user_id)
              .neq('customer_subscription_status', 'free')
              .select()

            if (updateError) {
              console.error(`❌ Error updating payment records: ${updateError.message}`)
            } else {
              console.log(`✅ Updated ${updatedPayments?.length || 0} payment record(s) from 'paid' to 'free' status`)
            }

            // Update user payment_status to "free"
            await supabase
              .from('users')
              .update({
                payment_status: 'free',
                updated_at: new Date().toISOString()
              })
              .eq('user_id', user.user_id)

            console.log(`✅ User payment_status set to 'free' after subscription ended`)
          } else if (subscription.cancel_at_period_end === true) {
            // User has canceled but subscription is still active until period ends
            // Keep payment_status as 'Paid' (they still have access)
            // Just log that cancellation is scheduled
            console.log(`ℹ️  Subscription scheduled to cancel at period end (${new Date(subscription.current_period_end * 1000).toLocaleString()}) - keeping status as 'Paid' until then`)
          }

          // Log to history
          await logSubscriptionHistory(
            userPlanRecord.user_plan_id,
            'updated',
            event.id,
            { status: subscription.status }
          )
        } else {
          console.warn(`⚠️  User not found for customer: ${customerId}`)
        }

        break
      }

      case 'customer.subscription.deleted': {
        const subscription = event.data.object
        const subscriptionId = subscription.id
        const customerId = subscription.customer

        // Find user by stripe_customer_id
        const { data: user } = await supabase
          .from('users')
          .select('user_id')
          .eq('stripe_customer_id', customerId)
          .single()

        if (user) {
          // Update user_plan to set is_active = false
          const userPlanData = {
            user_id: user.user_id,
            plan_id: null,
            stripe_customer_id: customerId,
            stripe_subscription_id: subscriptionId,
            status: 'canceled',
            current_period_start: new Date(subscription.current_period_start * 1000).toISOString(),
            current_period_end: new Date(subscription.current_period_end * 1000).toISOString(),
            cancel_at_period_end: false,
          }

          const userPlanRecord = await upsertUserPlan(userPlanData)
          console.log(`✅ User plan canceled: ${userPlanRecord.user_plan_id}, is_active set to false`)

          // Update all existing payment records for this user from "paid" to "free"
          // This catches all variations: 'Paid', 'paid', '$20/month', '$250/month', etc.
          // NULL values won't match neq() so they won't be updated (which is correct)
          const { data: updatedPayments, error: updateError } = await supabase
            .from('payments')
            .update({ customer_subscription_status: 'free' })
            .eq('user_id', user.user_id)
            .neq('customer_subscription_status', 'free')
            .select()

          if (updateError) {
            console.error(`❌ Error updating payment records: ${updateError.message}`)
          } else {
            console.log(`✅ Updated ${updatedPayments?.length || 0} payment record(s) from 'paid' to 'free' status`)
          }

          // Create a payment record with customer_subscription_status = 'free' for cancellation (historical record)
          const cancelPaymentRecord = await createPayment({
            user_id: user.user_id,
            amount: 0,
            currency: 'usd',
            status: 'success', // Historical record
            provider: 'stripe',
            timestamp: new Date().toISOString(),
            customer_subscription_status: 'free', // Set to "free" on cancellation
          })
          console.log(`✅ Cancellation payment record created: ${cancelPaymentRecord.payment_id}`)

          // Update user payment_status to "free" (sync with payment record)
          await supabase
            .from('users')
            .update({
              payment_status: 'free', // Sync with payment's customer_subscription_status
              updated_at: new Date().toISOString()
            })
            .eq('user_id', user.user_id)

          console.log(`✅ User payment_status set to 'free' after cancellation`)

          // Log to history
          await logSubscriptionHistory(
            userPlanRecord.user_plan_id,
            'canceled',
            event.id,
            {}
          )
        } else {
          console.warn(`⚠️  User not found for customer: ${customerId}`)
        }

        break
      }

      case 'invoice.payment_succeeded': {
        const invoice = event.data.object
        const subscriptionId = invoice.subscription
        const customerId = invoice.customer
        const amount = invoice.amount_paid || 0
        const amountInDollars = amount / 100

        if (subscriptionId) {
          // Find user by stripe_customer_id
          const { data: user } = await supabase
            .from('users')
            .select('user_id')
            .eq('stripe_customer_id', customerId)
            .single()

          if (user) {
            // Create payment record for successful invoice payment
            const paymentRecord = await createPayment({
              user_id: user.user_id,
              amount: amountInDollars,
              currency: invoice.currency || 'usd',
              status: 'success',
              provider: 'stripe',
              timestamp: new Date().toISOString(),
              customer_subscription_status: 'Paid', // Set to "Paid" on successful payment
            })
            console.log(`✅ Payment record created for invoice: ${paymentRecord.payment_id}`)

            // Get updated subscription from Stripe and update user_plan
            const subscription = await stripe.subscriptions.retrieve(subscriptionId)
            
            const userPlanData = {
              user_id: user.user_id,
              plan_id: null,
              stripe_customer_id: customerId,
              stripe_subscription_id: subscriptionId,
              status: subscription.status,
              current_period_start: new Date(subscription.current_period_start * 1000).toISOString(),
              current_period_end: new Date(subscription.current_period_end * 1000).toISOString(),
              cancel_at_period_end: subscription.cancel_at_period_end || false,
              payment_id: paymentRecord.payment_id,
            }

            const userPlanRecord = await upsertUserPlan(userPlanData)

            // Log to history
            await logSubscriptionHistory(
              userPlanRecord.user_plan_id,
              'payment_succeeded',
              event.id,
              { invoice_id: invoice.id, amount: amountInDollars }
            )
          }
        }

        break
      }

      case 'invoice.payment_failed': {
        const invoice = event.data.object
        const subscriptionId = invoice.subscription
        const customerId = invoice.customer
        const amount = invoice.amount_due || 0
        const amountInDollars = amount / 100

        if (subscriptionId) {
          // Find user by stripe_customer_id
          const { data: user } = await supabase
            .from('users')
            .select('user_id')
            .eq('stripe_customer_id', customerId)
            .single()

          if (user) {
            // Create payment record with failed status
            const paymentRecord = await createPayment({
              user_id: user.user_id,
              amount: amountInDollars,
              currency: invoice.currency || 'usd',
              status: 'failed',
              provider: 'stripe',
              timestamp: new Date().toISOString(),
              customer_subscription_status: 'free', // Set to "free" on payment failure
            })
            console.log(`⚠️  Failed payment record created: ${paymentRecord.payment_id}`)

            // Get subscription from Stripe and update user_plan
            const subscription = await stripe.subscriptions.retrieve(subscriptionId)
            
            const userPlanData = {
              user_id: user.user_id,
              plan_id: null,
              stripe_customer_id: customerId,
              stripe_subscription_id: subscriptionId,
              status: subscription.status, // Will be 'past_due' or 'unpaid'
              current_period_start: new Date(subscription.current_period_start * 1000).toISOString(),
              current_period_end: new Date(subscription.current_period_end * 1000).toISOString(),
              cancel_at_period_end: subscription.cancel_at_period_end || false,
              payment_id: paymentRecord.payment_id,
            }

            const userPlanRecord = await upsertUserPlan(userPlanData)

            // Log to history
            await logSubscriptionHistory(
              userPlanRecord.user_plan_id,
              'payment_failed',
              event.id,
              { invoice_id: invoice.id, amount: amountInDollars }
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
    console.error('Error stack:', error.stack)
    console.error('Error details:', {
      message: error.message,
      type: error.type,
      code: error.code,
      eventType: event?.type,
    })
    return res.status(500).json({ 
      error: 'Webhook handler failed',
      message: error.message,
      eventType: event?.type,
    })
  }
}

