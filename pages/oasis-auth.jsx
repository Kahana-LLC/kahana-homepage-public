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
    // Stripe Payment Link (TEST MODE) - customize brand color (#3E5300) in Stripe Dashboard > Payment Links
    stripeCheckoutUrl: 'https://buy.stripe.com/test_bJedR92OV9vabXHa45gMw01'
  },
  { 
    id: 'nirvana', 
    name: 'Nirvana plan', 
    price: '$250', 
    cadence: 'per month',
    // Stripe Payment Link - customize brand color (#3E5300) in Stripe Dashboard > Payment Links
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
    if (router?.query?.mode && typeof router.query.mode === 'string') {
      const modeParam = router.query.mode.toLowerCase()
      if (modeParam === 'login' || modeParam === 'signup') {
        setMode(modeParam)
      }
    }
  }, [router?.query?.plan, router?.query?.mode])

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
                  className="btn-secondary w-full py-3.5 text-base flex items-center justify-center gap-3"
                  disabled={status.loading}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                  </svg>
                  <span>Continue with Google</span>
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

