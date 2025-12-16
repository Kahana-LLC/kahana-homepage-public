import { useEffect, useMemo, useState } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { signupAndCreateProfile, signInWithEmail, signInWithGoogle } from '@/utils/auth'

const modes = {
  signup: 'Create Account',
  login: 'Sign in',
}

const plans = [
  { 
    id: 'free', 
    name: 'Free plan', 
    price: '$0', 
    cadence: 'per month',
    stripeCheckoutUrl: null // Free plan doesn't need checkout
  },
  { 
    id: 'zen', 
    name: 'Zen plan', 
    price: '$20', 
    cadence: 'per month',
    stripeCheckoutUrl: 'https://buy.stripe.com/cNi8wP0GN4aQgdX901gMw06' // Replace with your actual Zen plan URL
  },
  { 
    id: 'nirvana', 
    name: 'Nirvana plan', 
    price: '$250', 
    cadence: 'per month',
    stripeCheckoutUrl: 'https://buy.stripe.com/eVqcN53SZePu8LvdghgMw07'
  },
]

export default function OasisAuth() {
  const router = useRouter()
  const [mode, setMode] = useState('signup')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [fullName, setFullName] = useState('')
  const [status, setStatus] = useState({ loading: false, error: '', success: '' })
  const [selectedPlan, setSelectedPlan] = useState('zen')

  useEffect(() => {
    if (router?.query?.plan && typeof router.query.plan === 'string') {
      const maybe = router.query.plan.toLowerCase()
      if (plans.some((p) => p.id === maybe)) setSelectedPlan(maybe)
    }
  }, [router?.query?.plan])

  const plan = useMemo(() => plans.find((p) => p.id === selectedPlan) || plans[1], [selectedPlan])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus({ loading: true, error: '', success: '' })
    try {
      if (mode === 'signup') {
        if (password !== confirmPassword) {
          setStatus({ loading: false, error: 'Passwords do not match', success: '' })
          return
        }
        const { user } = await signupAndCreateProfile(email, password, fullName)
        
        // Ensure profile is created with email before redirecting
        // The profile should already be created by signupAndCreateProfile, but we wait a moment
        // to ensure the API call completes
        await new Promise(resolve => setTimeout(resolve, 500))
        
        // Redirect to Stripe checkout if plan requires payment
        if (plan.stripeCheckoutUrl) {
          window.location.href = plan.stripeCheckoutUrl
          return
        }
        
        // Free plan - show success message
        setStatus({
          loading: false,
          error: '',
          success: `Account created for ${plan.name}. You can now access your account.`,
        })
      } else {
        await signInWithEmail(email, password)
        
        // Redirect to Stripe checkout if plan requires payment
        if (plan.stripeCheckoutUrl) {
          window.location.href = plan.stripeCheckoutUrl
          return
        }
        
        // Free plan - show success message
        setStatus({ loading: false, error: '', success: `Signed in successfully. Welcome back!` })
      }
    } catch (err) {
      setStatus({ loading: false, error: err.message || 'Something went wrong', success: '' })
    }
  }

  const handleGoogle = async () => {
    setStatus({ loading: true, error: '', success: '' })
    try {
      // Store the selected plan in sessionStorage so we can redirect after Google OAuth
      if (plan.stripeCheckoutUrl) {
        sessionStorage.setItem('pendingStripeCheckout', plan.stripeCheckoutUrl)
      }
      await signInWithGoogle()
      // Note: Google OAuth will redirect, so we handle checkout redirect in the OAuth callback
      setStatus({ loading: false, error: '', success: 'Redirecting to Google…' })
    } catch (err) {
      setStatus({ loading: false, error: err.message || 'Google sign-in failed', success: '' })
    }
  }

  return (
    <>
      <Head>
        <title>Oasis Plans · Auth</title>
      </Head>
      <main className="min-h-screen bg-white px-4 py-12 sm:py-16">
        <div className="mx-auto flex w-full max-w-5xl flex-col gap-8 lg:flex-row lg:items-center">
          {/* Left column: hero and plan summary */}
          <div className="w-full lg:w-5/12 space-y-6">
            <div className="space-y-3 text-left">
              <h1 className="text-4xl sm:text-5xl font-extrabold text-[#313A00] leading-tight">
                Get {plan.name}
              </h1>
              <p className="text-lg text-gray-700">
                Skip the waitlist by creating an account and subscribing to the {plan.name.toLowerCase()}.{' '}
                <strong>Download will be available after checkout.</strong>
              </p>
            </div>
          </div>

          {/* Right column: auth form */}
          <div className="w-full lg:w-7/12">
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-center">
                <button
                  type="button"
                  onClick={handleGoogle}
                  className="btn-secondary w-full py-3.5 text-base"
                  disabled={status.loading}
                >
                  Continue with Google
                </button>
              </div>
              <div className="flex items-center gap-4 text-neutral-400 text-xs font-medium">
                <span className="flex-1 h-px bg-neutral-200" />
                OR
                <span className="flex-1 h-px bg-neutral-200" />
              </div>
              <div className="flex gap-2">
                {Object.entries(modes).map(([key, label]) => (
                  <button
                    key={key}
                    onClick={() => setMode(key)}
                    className={`btn-primary flex-1 py-3 text-base ${
                      mode === key ? '' : 'bg-white text-neutral-700 border-neutral-200 hover:border-neutral-300'
                    }`}
                    type="button"
                    disabled={status.loading}
                  >
                    {label}
                  </button>
                ))}
              </div>
              <form className="space-y-3" onSubmit={handleSubmit}>
                {mode === 'signup' && (
                  <div>
                    <label className="block text-sm font-medium text-neutral-800 mb-1">Full name</label>
                    <input
                      type="text"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="Ada Lovelace"
                      className="w-full rounded-lg border border-neutral-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#4A6200]"
                    />
                  </div>
                )}
                <div>
                  <label className="block text-sm font-medium text-neutral-800 mb-1">Email</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="you@example.com"
                    className="w-full rounded-lg border border-neutral-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#4A6200]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-800 mb-1">Password</label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    placeholder="••••••••"
                    className="w-full rounded-lg border border-neutral-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#4A6200]"
                  />
                </div>
                {mode === 'signup' && (
                  <div>
                    <label className="block text-sm font-medium text-neutral-800 mb-1">Confirm Password</label>
                    <input
                      type="password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      required
                      placeholder="••••••••"
                      className="w-full rounded-lg border border-neutral-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#4A6200]"
                    />
                  </div>
                )}
                <button
                  type="submit"
                  disabled={status.loading}
                  className="btn-primary w-full py-3.5 text-base"
                >
                  {status.loading ? 'Working…' : `${modes[mode]} • ${plan.name}`}
                </button>
              </form>
              {status.error && (
                <div className="rounded-md border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700">
                  {status.error}
                </div>
              )}
              {status.success && (
                <div className="rounded-md border border-green-200 bg-green-50 px-3 py-2 text-sm text-green-700">
                  {status.success}
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

