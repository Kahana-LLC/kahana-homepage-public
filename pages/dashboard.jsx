import { useEffect, useState } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { createClient } from '@/utils/supabase'
import CancelSubscriptionModal from '@/components/CancelSubscriptionModal'
import SEO from '@/components/SEO'

export default function Subscription() {
  const router = useRouter()
  const [subscription, setSubscription] = useState(null)
  const [billing, setBilling] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [showCancelModal, setShowCancelModal] = useState(false)
  const [canceling, setCanceling] = useState(false)
  const [message, setMessage] = useState(null)

  useEffect(() => {
    checkAuthAndLoadSubscription()
  }, [])

  const checkAuthAndLoadSubscription = async () => {
    try {
      const supabase = createClient()
      const { data: { user }, error: authError } = await supabase.auth.getUser()

      if (authError || !user) {
        router.push('/oasis-auth')
        return
      }

      await loadSubscription()
    } catch (err) {
      console.error('Auth check error:', err)
      router.push('/oasis-auth')
    }
  }

  const loadSubscription = async () => {
    setLoading(true)
    setError(null)
    setMessage(null)

    try {
      // Get session token from Supabase
      const supabase = createClient()
      const { data: { session } } = await supabase.auth.getSession()
      
      if (!session) {
        router.push('/oasis-auth')
        return
      }

      const response = await fetch('/api/subscription/current', {
        headers: {
          'Authorization': `Bearer ${session.access_token}`,
        },
      })
      
      let data
      try {
        data = await response.json()
      } catch (jsonError) {
        console.error('Failed to parse JSON response:', jsonError)
        setError('Invalid response from server. Please try again.')
        setLoading(false)
        return
      }

      if (!response.ok) {
        console.error('API error:', response.status, data)
        if (response.status === 404) {
          setError('No active subscription found')
        } else if (response.status === 401) {
          router.push('/oasis-auth')
          return
        } else {
          setError(data.error || data.message || 'Failed to load subscription')
        }
        setLoading(false)
        return
      }

      setSubscription(data.subscription)
      setBilling(data.billing)
    } catch (err) {
      console.error('Error loading subscription:', err)
      setError(`Failed to load subscription: ${err.message || 'Please try again.'}`)
    } finally {
      setLoading(false)
    }
  }

  const handleCancel = async (cancelImmediately) => {
    setCanceling(true)
    setError(null)
    setMessage(null)

    try {
      const supabase = createClient()
      const { data: { session } } = await supabase.auth.getSession()
      
      if (!session) {
        setError('Session expired. Please sign in again.')
        router.push('/oasis-auth')
        return
      }

      const response = await fetch('/api/subscription/cancel', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${session.access_token}`,
        },
        body: JSON.stringify({ cancel_immediately: cancelImmediately }),
      })

      const data = await response.json()

      if (!response.ok) {
        setError(data.error || 'Failed to cancel subscription')
        setCanceling(false)
        return
      }

      setMessage(data.message)
      setShowCancelModal(false)
      
      // Reload subscription to get updated status
      await loadSubscription()
    } catch (err) {
      console.error('Error canceling subscription:', err)
      setError('Failed to cancel subscription. Please try again.')
    } finally {
      setCanceling(false)
    }
  }

  const handleReactivate = async () => {
    setLoading(true)
    setError(null)
    setMessage(null)

    try {
      const supabase = createClient()
      const { data: { session } } = await supabase.auth.getSession()
      
      if (!session) {
        setError('Session expired. Please sign in again.')
        router.push('/oasis-auth')
        return
      }

      const response = await fetch('/api/subscription/reactivate', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${session.access_token}`,
        },
      })

      const data = await response.json()

      if (!response.ok) {
        setError(data.error || 'Failed to reactivate subscription')
        setLoading(false)
        return
      }

      setMessage(data.message)
      
      // Reload subscription to get updated status
      await loadSubscription()
    } catch (err) {
      console.error('Error reactivating subscription:', err)
      setError('Failed to reactivate subscription. Please try again.')
      setLoading(false)
    }
  }

  const formatDate = (dateString) => {
    if (!dateString) return 'N/A'
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  }

  const formatCurrency = (amount, currency = 'usd') => {
    if (amount === null || amount === undefined) return 'N/A'
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currency.toUpperCase(),
    }).format(amount)
  }

  return (
    <>
      <SEO
        title="Manage Subscription | Kahana"
        description="Manage your Oasis subscription, view billing information, and cancel if needed."
        url="https://kahana.co/subscription"
      />
      <Head>
        <title>Manage Subscription | Kahana</title>
      </Head>

      <main className="min-h-screen bg-white px-4 py-12 sm:py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-extrabold text-[#313A00] mb-8">
            Subscription Management
          </h1>

          {loading && !subscription && (
            <div className="text-center py-12">
              <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-[#4A6200]"></div>
              <p className="mt-4 text-gray-600">Loading subscription...</p>
            </div>
          )}

          {error && (
            <div className="mb-6 rounded-md border border-red-200 bg-red-50 px-4 py-3">
              <p className="text-sm text-red-700">{error}</p>
            </div>
          )}

          {message && (
            <div className="mb-6 rounded-md border border-green-200 bg-green-50 px-4 py-3">
              <p className="text-sm text-green-700">{message}</p>
            </div>
          )}

          {subscription && (
            <div className="space-y-6">
              {/* Subscription Status Card */}
              <div className="bg-white border-2 border-gray-200 rounded-2xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-2xl font-bold text-gray-900">
                    Current Subscription
                  </h2>
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      subscription.status === 'active' && !subscription.cancel_at_period_end
                        ? 'bg-green-100 text-green-800'
                        : subscription.cancel_at_period_end
                        ? 'bg-yellow-100 text-yellow-800'
                        : 'bg-gray-100 text-gray-800'
                    }`}
                  >
                    {subscription.cancel_at_period_end
                      ? 'Scheduled to Cancel'
                      : subscription.status === 'active'
                      ? 'Active'
                      : subscription.status}
                  </span>
                </div>

                <div className="space-y-3">
                  <div>
                    <p className="text-sm text-gray-600">Plan</p>
                    <p className="text-lg font-semibold text-gray-900">
                      {subscription.plan_name} Plan
                    </p>
                  </div>

                  <div>
                    <p className="text-sm text-gray-600">Payment Status</p>
                    <p className="text-lg font-semibold text-gray-900 capitalize">
                      {subscription.payment_status}
                    </p>
                  </div>

                  {subscription.cancel_at_period_end && (
                    <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded">
                      <p className="text-sm text-yellow-800">
                        Your subscription is scheduled to cancel on{' '}
                        <strong>{formatDate(subscription.current_period_end)}</strong>.
                        You will continue to have access until then.
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* Billing Schedule Card */}
              {billing && (
                <div className="bg-white border-2 border-gray-200 rounded-2xl p-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    Billing Schedule
                  </h2>

                  <div className="space-y-3">
                    <div>
                      <p className="text-sm text-gray-600">Next Billing Date</p>
                      <p className="text-lg font-semibold text-gray-900">
                        {formatDate(billing.next_billing_date)}
                      </p>
                    </div>

                    <div>
                      <p className="text-sm text-gray-600">Billing Amount</p>
                      <p className="text-lg font-semibold text-gray-900">
                        {formatCurrency(billing.amount, billing.currency)} / {billing.interval}
                      </p>
                    </div>

                    <div>
                      <p className="text-sm text-gray-600">Current Period</p>
                      <p className="text-sm text-gray-900">
                        {formatDate(subscription.current_period_start)} -{' '}
                        {formatDate(subscription.current_period_end)}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Actions */}
              <div className="flex gap-4">
                {subscription.cancel_at_period_end ? (
                  <button
                    onClick={handleReactivate}
                    disabled={loading}
                    className="btn-primary px-6 py-3 text-base font-semibold rounded-full"
                  >
                    {loading ? 'Processing...' : 'Reactivate Subscription'}
                  </button>
                ) : (
                  <button
                    onClick={() => setShowCancelModal(true)}
                    disabled={loading}
                    className="btn-secondary px-6 py-3 text-base font-semibold rounded-full border-red-300 text-red-700 hover:bg-red-50"
                  >
                    Cancel Subscription
                  </button>
                )}
              </div>
            </div>
          )}

          {!loading && !subscription && !error && (
            <div className="text-center py-12">
              <p className="text-gray-600 mb-4">No active subscription found.</p>
              <a
                href="/oasis-pricing"
                className="btn-primary inline-block px-6 py-3 text-base font-semibold rounded-full"
              >
                View Plans
              </a>
            </div>
          )}
        </div>
      </main>

      <CancelSubscriptionModal
        isOpen={showCancelModal}
        onClose={() => setShowCancelModal(false)}
        onConfirm={handleCancel}
        loading={canceling}
        planName={subscription?.plan_name}
        nextBillingDate={subscription?.current_period_end}
      />
    </>
  )
}
