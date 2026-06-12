import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import SEO from '../components/SEO';

export default function EarlyBirdDiscountRefundPolicy() {
  return (
    <>
      <SEO
        title="Early Access Deposit Refund Policy - Oasis | Kahana"
        description="Complete refund policy for Oasis early access deposits. Learn about refund eligibility, timelines, and how to request a refund."
        url="https://kahana.io/early-bird-discount-refund-policy"
        type="website"
      />
      <Head>
        <title>Early Access Deposit Refund Policy - Oasis | Kahana</title>
        <meta
          name="description"
          content="Complete refund policy for Oasis early access deposits. Learn about refund eligibility, timelines, and how to request a refund."
        />
      </Head>

      <div className="relative bg-white">
        <main className="min-h-screen pt-24 pb-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <div className="text-center mb-12">
            <Link 
              href="/oasis-beta-program"
              className="inline-flex items-center text-sm mb-6 no-underline hover:no-underline"
              style={{ color: '#7A9200' }}
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Beta Program
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#495800' }}>
              Oasis Early Access Deposit & Refund Policy
            </h1>
            <p className="text-xl max-w-2xl mx-auto" style={{ color: '#495800' }}>
              Complete transparency about your deposit, refund eligibility, and what happens if you request a refund.
            </p>
          </div>

          {/* Purpose of Deposit Section */}
          <div className="bg-white rounded-xl p-8 shadow-lg mb-8" style={{ border: '2px solid #7A9200' }}>
            <h2 className="text-2xl font-bold mb-4" style={{ color: '#495800' }}>Purpose of Deposit</h2>
            <p style={{ color: '#495800' }}>
              Your $80 deposit secures your reserved spot for early access to Oasis, an AI-powered browser, and guarantees a lifetime discount of $80/year (20% off the standard $100/year pricing) if you continue your subscription after your 30-day trial period.
            </p>
          </div>

          {/* FAQ Section */}
          <div className="bg-white rounded-xl p-8 shadow-lg mb-8" style={{ border: '2px solid #7A9200' }}>
            <h2 className="text-2xl font-bold mb-6" style={{ color: '#495800' }}>Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-2" style={{ color: '#495800' }}>Lifetime discount? How does this work?</h3>
                <p className="mb-2" style={{ color: '#495800' }}>
                  Oasis will be a freemium platform. There will be a free tier with limitations (for example, 1,000 tokens per month). There will be a paid tier with more tokens available per month. This paid tier will be $10/month or $100/year.
                </p>
                <p style={{ color: '#495800' }}>
                  If you pay the $80 deposit and continue to use it after 30 days of trying, then you will gain special tiered pricing: you only pay $80/year forever (or $8/month). You can downgrade to free anytime with the same account, but if you ever upgrade again, it won't be for $10/month or $100/year, it would be for $80/year (or $8/month).
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2" style={{ color: '#495800' }}>Is Oasis being released immediately to people on the waitlist?</h3>
                <p style={{ color: '#495800' }}>
                  No. Oasis is currently in pre-release and is scheduled for launch by May 17, 2026 (could be ready sooner). Early access will be made available to deposit holders by this date.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2" style={{ color: '#495800' }}>When will people receive early-bird access?</h3>
                <p style={{ color: '#495800' }}>
                  Early access will be available by May 17, 2026 (could be ready sooner). We will notify all deposit holders as soon as early access is ready.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2" style={{ color: '#495800' }}>Is there a specific number of people who will get the discount?</h3>
                <p style={{ color: '#495800' }}>
                  Not right now. We're accepting early bird deposits without a specific limit at this time.
                </p>
              </div>
            </div>
          </div>

          {/* Refund Eligibility Section */}
          <div className="bg-white rounded-xl p-8 shadow-lg mb-8" style={{ border: '2px solid #7A9200' }}>
            <h2 className="text-2xl font-bold mb-6" style={{ color: '#495800' }}>Refund Eligibility</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-3" style={{ color: '#495800' }}>Pre-Launch Refunds</h3>
                <p className="mb-2" style={{ color: '#495800' }}>
                  The product is currently in pre-release and is scheduled for launch by May 17, 2026 (could be ready sooner).
                </p>
                <p className="mb-2" style={{ color: '#495800' }}>
                  <strong>You may request a full refund of your deposit at any time before early access is made available.</strong>
                </p>
                <p style={{ color: '#495800' }}>
                  If you request a refund before early access begins, you will forfeit your reserved spot and any associated benefits, including early access and the guaranteed lifetime discount.
                </p>
              </div>
              <div className="pt-4" style={{ borderTop: '1px solid #7A9200' }}>
                <h3 className="text-lg font-semibold mb-3" style={{ color: '#495800' }}>Post-Launch Refunds</h3>
                <p className="mb-2" style={{ color: '#495800' }}>
                  Once early access is available, you will have an additional <strong>30-day window</strong> to request a refund and cancel your reservation after experiencing the product.
                </p>
                <p style={{ color: '#495800' }}>
                  After this 30-day period, deposits are non-refundable.
                </p>
              </div>
            </div>
          </div>

          {/* Requesting a Refund Section */}
          <div className="bg-white rounded-xl p-8 shadow-lg mb-8" style={{ border: '2px solid #7A9200' }}>
            <h2 className="text-2xl font-bold mb-6" style={{ color: '#495800' }}>Requesting a Refund</h2>
            <div className="space-y-4" style={{ color: '#495800' }}>
              <p>
                To request a refund, you must fill out a brief form and select from a list of options for why you are requesting a refund. <Link href="/contact" className="underline font-semibold" style={{ color: '#7A9200' }}>Contact us through our contact form</Link> to receive the refund request form.
              </p>
              <p>
                The refund request form will require the following information:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-2">
                <li>Your full name</li>
                <li>Email address used for the deposit</li>
                <li>Deposit confirmation (receipt or transaction ID)</li>
                <li>Reason for refund request (selected from provided options)</li>
              </ul>
              <p>
                Refunds will be processed back to your original payment method within <strong>5-7 business days</strong> of approval.
              </p>
            </div>
          </div>

          {/* Additional Notes Section */}
          <div className="bg-white rounded-xl p-8 shadow-lg mb-8" style={{ border: '2px solid #7A9200' }}>
            <h2 className="text-2xl font-bold mb-6" style={{ color: '#495800' }}>Additional Notes</h2>
            <div className="space-y-4" style={{ color: '#495800' }}>
              <p>
                By paying the deposit, you agree to these terms.
              </p>
              <p>
                If there are delays in the expected release timeline, we will notify all deposit holders and extend refund eligibility as necessary.
              </p>
              <p className="text-sm italic">
                This policy provides transparency, protects both user and company interests, and aligns with industry best practices for SaaS pre-release promotions.
              </p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-white rounded-xl p-8 shadow-lg text-center" style={{ border: '2px solid #7A9200' }}>
            <h2 className="text-2xl font-bold mb-4" style={{ color: '#495800' }}>Ready to Join the Beta Program?</h2>
            <p className="mb-6" style={{ color: '#495800' }}>
              Get early access to Oasis and help us build the future of browsing.
            </p>
            <Link
              href="/oasis-beta-program"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              style={{
                backgroundColor: '#FFFFFF',
                border: '2px solid #7A9200',
                color: '#7A9200'
              }}
            >
              Join the Beta Program
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: '#7A9200' }}>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </main>
      </div>
    </>
  );
}

