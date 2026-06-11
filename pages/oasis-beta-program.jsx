import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import SEO from '../components/SEO';
import Script from 'next/script';

export default function EarlyBirdDiscount() {
  const [isFormLoaded, setIsFormLoaded] = useState(false);
  const [loadError, setLoadError] = useState(false);
  const [billingPeriod, setBillingPeriod] = useState('yearly'); // 'monthly' or 'yearly'
  const [showDiscount, setShowDiscount] = useState(true); // true = with 20% discount (default), false = standard pricing
  const [timeRemaining, setTimeRemaining] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [openFAQ, setOpenFAQ] = useState({}); // Track which FAQ items are open
  const [stickyTop, setStickyTop] = useState(0); // Top offset for sticky countdown

  // Target date: May 17, 2026 (6 months from November 17, 2025)
  const targetDate = new Date('2026-05-17T23:59:59').getTime();

  useEffect(() => {
    const calculateTimeRemaining = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeRemaining({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      } else {
        setTimeRemaining({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeRemaining();
    const interval = setInterval(calculateTimeRemaining, 1000);

    return () => clearInterval(interval);
  }, []);

  const initializeTally = () => {
    if (window.Tally) {
      window.Tally.loadEmbeds();
      setIsFormLoaded(true);
      setLoadError(false);
    }
  };

  const handleTallyLoad = () => {
    // Wait a brief moment to ensure Tally is fully loaded
    setTimeout(() => {
      initializeTally();
    }, 100);
  };

  const handleTallyError = (error) => {
    console.error('Tally form loading error:', error);
    setLoadError(true);
  };

  useEffect(() => {
    // Reset states when component mounts
    setIsFormLoaded(false);
    setLoadError(false);

    // If Tally is already loaded, initialize immediately
    if (window.Tally) {
      initializeTally();
    }

    // Cleanup function
    return () => {
      const tallyElements = document.querySelectorAll('[data-tally-loaded]');
      tallyElements.forEach(element => element.remove());
    };
  }, []);

  // Calculate sticky top position based on navbar and banner height
  useEffect(() => {
    const calculateStickyTop = () => {
      const navbar = document.querySelector('nav');
      const globalBanner = document.querySelector('.GlobalBanner');
      
      let topOffset = 0;
      if (navbar) {
        topOffset += navbar.offsetHeight;
      }
      if (globalBanner && globalBanner.offsetParent !== null) {
        topOffset += globalBanner.offsetHeight;
      }
      
      setStickyTop(topOffset);
    };

    // Calculate on mount and resize
    calculateStickyTop();
    window.addEventListener('resize', calculateStickyTop);
    
    // Also recalculate after a short delay to ensure DOM is fully rendered
    const timeoutId = setTimeout(calculateStickyTop, 100);

    return () => {
      window.removeEventListener('resize', calculateStickyTop);
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <>
      <SEO
        title="Early Access Deposit - Oasis AI Browser | Kahana"
        description="Reserve your spot for early access to Oasis with a $80 deposit. Get lifetime discount of $80/year and full refund option. Early access available within 6 months."
        url="https://kahana.io/oasis-beta-program"
        type="website"
      />
      <Head>
        <title>Early Access Deposit - Oasis AI Browser | Kahana</title>
        <meta
          name="description"
          content="Reserve your spot for early access to Oasis with a $80 deposit. Get lifetime discount of $80/year and full refund option. Early access available within 6 months."
        />
      </Head>

      <div className="relative bg-white">
      {/* Sticky Countdown Timer */}
      <div 
          className="sticky z-40 w-full bg-white"
        style={{ 
            top: `${stickyTop}px`
        }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="bg-white rounded-lg p-4 shadow-lg" style={{ border: '2px solid #7A9200' }}>
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              {/* Launch Date with Calendar Icon */}
              <div className="flex items-center justify-center gap-2">
                <svg className="w-5 h-5 md:w-6 md:h-6 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: '#7A9200' }}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <div>
                  <p className="text-lg md:text-2xl font-bold" style={{ color: '#7A9200' }}>
                      publicly available starting May 2026
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

        <main className="min-h-screen pt-24 pb-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#495800' }}>
              Get Early Access to Oasis
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-6 leading-relaxed" style={{ color: '#495800' }}>
              The most elegant browser experience.
            </p>
            <p className="text-lg max-w-2xl mx-auto mb-8 leading-relaxed" style={{ color: '#495800' }}>
              An elegant browser designed for researching, job seeking, and learning. Built for how your mind works naturally.
            </p>
          </div>

          {/* Payment Section */}
          <div id="deposit-form" className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 mb-12" style={{ border: '2px solid #7A9200' }}>
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: '#495800' }}>
                Join the Beta Program
              </h2>
              <p className="mb-6" style={{ color: '#495800' }}>
                Join the Beta Program with a $80 deposit and get <span className="relative inline-block group">
                  <a href="#pricing-tiers" className="underline font-semibold" style={{ color: '#7A9200' }}>20% off forever</a>
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-72 p-3 bg-white rounded-lg shadow-lg border-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50" style={{ borderColor: '#7A9200' }}>
                    <p className="text-sm mb-2" style={{ color: '#495800' }}>
                      If you don't request a refund after 30 days, and you let us keep the $80, then you'll get a 20% lifetime discount.
                    </p>
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 -mt-1">
                      <div className="w-3 h-3 bg-white border-r-2 border-b-2 transform rotate-45" style={{ borderColor: '#7A9200' }}></div>
                    </div>
                  </div>
                </span>. Your deposit is <span className="relative inline-block group">
                  <Link href="/early-bird-discount-refund-policy" className="underline font-semibold" style={{ color: '#7A9200' }}>100% refundable</Link>
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-64 p-3 bg-white rounded-lg shadow-lg border-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50" style={{ borderColor: '#7A9200' }}>
                    <p className="text-sm mb-2" style={{ color: '#495800' }}>
                      You can get a full refund within 30 days of using Oasis. <Link href="/early-bird-discount-refund-policy" className="underline font-semibold" style={{ color: '#7A9200' }}>View full refund policy</Link>.
                    </p>
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 -mt-1">
                      <div className="w-3 h-3 bg-white border-r-2 border-b-2 transform rotate-45" style={{ borderColor: '#7A9200' }}></div>
                    </div>
                  </div>
                </span> within 30 days of using Oasis.
              </p>
              <div className="bg-gray-50 rounded-lg p-4 max-w-xl mx-auto mb-6" style={{ border: '1px solid #7A9200' }}>
                <ol className="text-sm text-left space-y-1 ml-4" style={{ color: '#495800', listStyleType: 'decimal' }}>
                  <li>Submit your name and email below</li>
                  <li>Receive secure payment link via email</li>
                  <li>Complete your $80 deposit</li>
                  <li>Get early access before May 2026</li>
                  <li>Email us for a refund any time</li>
                </ol>
              </div>
            </div>

            {/* Tally Form */}
            <div className="relative min-h-[400px]">
              {!isFormLoaded && !loadError && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2" style={{ borderColor: '#7A9200' }}></div>
                </div>
              )}

              {loadError && (
                <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
                  <p className="mb-4" style={{ color: '#495800' }}>We're having trouble loading the form. Please try refreshing the page.</p>
                  <button
                    onClick={() => window.location.reload()}
                    className="px-4 py-2.5 text-sm font-bold rounded-full transition-colors"
                    style={{
                      backgroundColor: '#FFFFFF',
                      border: '2px solid #7A9200',
                      color: '#7A9200'
                    }}
                  >
                    Refresh Page
                  </button>
                </div>
              )}

              <iframe
                src="https://tally.so/embed/1APDkL?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
                width="100%"
                height="400"
                frameBorder="0"
                marginHeight="0"
                marginWidth="0"
                title="Early Bird Discount Form"
                style={{
                  minWidth: '100%',
                  opacity: isFormLoaded ? 1 : 0,
                  transition: 'opacity 0.3s ease-in-out'
                }}
              />
            </div>
          </div>

          {/* Pricing Tiers Section */}
          <div id="pricing-tiers" className="bg-white rounded-xl p-8 shadow-lg mb-12" style={{ border: '2px solid #7A9200' }}>
            <h2 className="text-2xl font-bold mb-4 text-center" style={{ color: '#495800' }}>Oasis Pricing Tiers</h2>
            <p className="text-center mb-6" style={{ color: '#495800' }}>
              20% off forever when you <a href="#deposit-form" className="underline font-semibold" style={{ color: '#7A9200' }}>join our paid Beta Program</a>.
            </p>
            
            {/* Discount Toggle - Above both columns */}
            <div className="flex justify-center items-center gap-4 mb-8">
              <span className="text-sm font-medium" style={{ color: '#495800' }}>With 20% Discount</span>
              <button
                onClick={() => setShowDiscount(!showDiscount)}
                className="relative inline-flex h-7 w-12 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2"
                style={{
                  backgroundColor: showDiscount ? '#7A9200' : '#cbd5e1',
                  focusRingColor: '#7A9200'
                }}
                role="switch"
                aria-checked={showDiscount}
                aria-label="Toggle discount pricing"
              >
                <span
                  className={`inline-block h-6 w-6 transform rounded-full bg-white shadow-lg transition-transform ${
                    showDiscount ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
              <span className="text-sm font-medium" style={{ color: '#495800' }}>Standard Pricing</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Free Tier */}
              <div className="bg-white rounded-xl p-6" style={{ border: '2px solid #7A9200' }}>
                <h3 className="text-xl font-bold mb-2" style={{ color: '#495800' }}>Free</h3>
                <p className="text-3xl font-bold mb-4" style={{ color: '#495800' }}>$0</p>
                <ul className="space-y-2 mb-6" style={{ color: '#495800' }}>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: '#7A9200' }}>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>2,000 credits per month</span>
                  </li>
                </ul>
              </div>

              {/* Premium Tier */}
              <div className="bg-white rounded-xl p-6 relative" style={{ border: showDiscount ? '3px solid #7A9200' : '2px solid #7A9200' }}>
                <h3 className="text-xl font-bold mb-2" style={{ color: '#495800' }}>Premium</h3>
                
                {/* Monthly/Yearly Toggle - Only on Premium */}
                <div className="flex justify-start items-center gap-3 mb-4">
                  <span className="text-sm font-medium" style={{ color: '#495800' }}>Monthly</span>
                  <button
                    onClick={() => setBillingPeriod(billingPeriod === 'monthly' ? 'yearly' : 'monthly')}
                    className="relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2"
                    style={{
                      backgroundColor: billingPeriod === 'yearly' ? '#7A9200' : '#cbd5e1',
                      focusRingColor: '#7A9200'
                    }}
                    role="switch"
                    aria-checked={billingPeriod === 'yearly'}
                    aria-label="Toggle billing period"
                  >
                    <span
                      className={`inline-block h-5 w-5 transform rounded-full bg-white shadow-md transition-transform ${
                        billingPeriod === 'yearly' ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                  </button>
                  <span className="text-sm font-medium" style={{ color: '#495800' }}>Yearly</span>
                </div>

                {/* Pricing Display */}
                <div className="mb-4">
                  {showDiscount ? (
                    <>
                      <div className="mb-2">
                        <span className="text-2xl line-through text-gray-400 mr-2">
                          {billingPeriod === 'monthly' ? '$10' : '$100'}
                        </span>
                        <span className="text-3xl font-bold" style={{ color: '#7A9200' }}>
                          {billingPeriod === 'monthly' ? '$8' : '$80'}
                        </span>
                        <span className="text-lg" style={{ color: '#495800' }}>
                          /{billingPeriod === 'monthly' ? 'month' : 'year'}
                        </span>
                      </div>
                      <div className="mb-4">
                        <span className="inline-block bg-green-100 text-green-800 text-xs font-semibold px-2 py-1 rounded" style={{ backgroundColor: '#d4edda', color: '#155724' }}>
                          20% OFF - Lifetime Discount
                        </span>
                      </div>
                    </>
                  ) : (
                    <div className="mb-2">
                      <span className="text-3xl font-bold" style={{ color: '#495800' }}>
                        {billingPeriod === 'monthly' ? '$10' : '$100'}
                      </span>
                      <span className="text-lg" style={{ color: '#495800' }}>
                        /{billingPeriod === 'monthly' ? 'month' : 'year'}
                      </span>
                    </div>
                  )}
                </div>

                <ul className="space-y-2 mb-6" style={{ color: '#495800' }}>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: '#7A9200' }}>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>5,000 credits per month</span>
                  </li>
                </ul>
              </div>
            </div>

          </div>

          {/* FAQ Section */}
          <div className="mt-12 bg-white rounded-xl p-8 shadow-lg" style={{ border: '2px solid #7A9200' }}>
            <h2 className="text-2xl font-bold mb-6 text-center" style={{ color: '#495800' }}>Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                {
                  id: 'deposit-secure',
                  question: 'What does the $80 deposit secure?',
                  answer: 'Your $80 deposit secures your reserved spot for Beta access to Oasis, an AI-powered browser, and guarantees a lifetime discount of $80/year if you continue your subscription after trying it for 30 days.'
                },
                    {
                      id: 'early-access-timing',
                      question: 'When will I receive Beta access?',
                      answer: 'Beta access will be available by May 17, 2026 (could be ready sooner). We\'ll notify all deposit holders as soon as Beta access is ready.'
                    },
                {
                  id: 'immediate-release',
                  question: 'Is Oasis being released immediately to people on the waitlist?',
                  answer: 'No, Oasis is currently in pre-release. Beta access will be available by May 17, 2026 (could be ready sooner). We\'ll keep all deposit holders updated on the release timeline.'
                },
                {
                  id: 'lifetime-discount',
                  question: 'Lifetime discount? How does this work?',
                  answer: 'Oasis will be a freemium platform with a free tier (2,000 credits per month) and a paid tier. Regular browsing doesn\'t use any credits. Credits are used when you use the AI assistant, or when your AI assistants are browsing. Credits fill up on a monthly basis. The standard paid tier will be $10/month or $100/year. If you pay the $80 deposit and continue using Oasis after 30 days, you\'ll get special tiered pricing: you\'ll only pay $80/year forever. You can downgrade to free anytime, but if you ever upgrade again, it will be for $80/year (not the standard $10/month or $100/year).'
                },
                {
                  id: 'discount-limit',
                  question: 'Is there a specific number of people who will get the discount?',
                  answer: 'Not right now. We\'re accepting early bird deposits without a specific limit at this time.'
                },
                {
                  id: 'refund',
                  question: 'Can I get a refund?',
                  answer: 'Yes! You may request a full refund of your deposit at any time before Beta access is made available. Once Beta access begins, you\'ll have an additional 30-day window to request a refund after experiencing the product. After this 30-day period, deposits are non-refundable. To request a refund, contact us at <a href="mailto:info@kahana.co" class="underline" style="color: #7A9200">info@kahana.co</a> with your name, email, and deposit confirmation.'
                },
                {
                  id: 'refund-consequences',
                  question: 'What happens if I request a refund?',
                  answer: 'If you request a refund before Beta access begins, you will forfeit your reserved spot and any associated benefits, including Beta access and the guaranteed discount. Refunds will be processed back to your original payment method within 5-7 business days of approval.'
                },
                    {
                      id: 'payment-security',
                      question: 'Is my payment secure?',
                      answer: 'Yes, all payments are invoiced securely through our banking system, powered by Mercury. Mercury\'s invoicing is powered by Stripe, a payment processing company, which allows users to accept payments via credit card, digital wallets, and other methods directly through their Mercury account. The system is integrated into Mercury\'s banking and financial workflow platform, enabling users to generate and send invoices. Your payment information is encrypted and never stored on our servers.'
                    },
                {
                  id: 'platforms',
                  question: 'What platforms is Oasis available on?',
                  answer: 'Oasis is available for MacOS and Windows.'
                },
                {
                  id: 'search-engine',
                  question: 'What search engine does Oasis use?',
                  answer: 'Oasis lets you choose among the best search engines in the world. The default search engine is Google Search.'
                },
                {
                  id: 'data-handling',
                  question: 'How is my data handled?',
                  answer: 'Passwords, chats, history and cookies are all stored locally on your device. Chats are not saved on our servers. Your passwords are never exposed to us or LLM-providers. See our <a href="/privacy" class="underline" style="color: #7A9200">Privacy Policy</a> for more information.'
                }
              ].map((faq) => {
                const isOpen = openFAQ[faq.id];
                return (
                  <div 
                    key={faq.id} 
                    className="accordion-container"
                    style={{ 
                      border: '1px solid #d1d5db',
                      borderRadius: '8px',
                      marginBottom: '12px',
                      backgroundColor: '#F3F8E4',
                      boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)'
                    }}
                  >
                    <button
                      type="button"
                      className="accordion-button"
                      onClick={() => setOpenFAQ(prev => ({ ...prev, [faq.id]: !prev[faq.id] }))}
                      style={{ 
                        width: '100%',
                        textAlign: 'left',
                        padding: '16px 20px',
                        background: 'transparent',
                        border: 'none',
                        color: '#495800',
                        fontWeight: 600,
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        borderRadius: '6px',
                        transition: 'background-color 0.2s ease'
                      }}
                      aria-expanded={isOpen}
                      aria-controls={`faq-answer-${faq.id}`}
                    >
                      <span className="text-lg font-semibold pr-4 flex-1">{faq.question}</span>
                      <svg
                        className={`w-5 h-5 flex-shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        style={{ flexShrink: 0, marginLeft: '12px' }}
                        aria-hidden="true"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {isOpen && (
                      <div
                        id={`faq-answer-${faq.id}`}
                        style={{ 
                          padding: '0 20px 20px 20px',
                          color: '#495800',
                          lineHeight: 1.7,
                          borderTop: '1px solid #e5e7eb',
                          marginTop: '8px'
                        }}
                      >
                        <p dangerouslySetInnerHTML={{ __html: faq.answer }} />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </main>
      </div>

      <Script 
        src="https://tally.so/widgets/embed.js"
        strategy="afterInteractive"
        onLoad={handleTallyLoad}
        onError={handleTallyError}
      />

      <style jsx global>{`
        /* Accordion styling to match enterprise-buyer-guide */
        .accordion-container .accordion-button {
          background-color: transparent !important;
          color: #495800 !important;
          font-weight: 600 !important;
          border: none !important;
          border-radius: 6px !important;
          padding: 16px 20px !important;
          cursor: pointer !important;
          transition: background-color 0.2s ease !important;
        }
        
        .accordion-container .accordion-button:hover {
          background-color: #FDEABB !important;
          color: #495800 !important;
        }
      `}</style>
    </>
  );
}

