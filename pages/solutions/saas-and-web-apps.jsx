import React from 'react';
import Head from 'next/head';
import Script from 'next/script';
import Link from 'next/link';

const conceptCards = [
  {
    title: "Your Digital Vault",
    analogy: "Just like a bank vault protects your valuables with multiple security layers",
    description: "Oasis Browser creates a secure environment for your SaaS apps",
    details: [
      {
        title: "Multi-Layer Security",
        explanation: "Like a vault's combination lock, time delay, and reinforced walls",
        technical: "End-to-end encryption, access controls, and threat prevention"
      },
      {
        title: "Controlled Access",
        explanation: "Similar to bank employees needing specific credentials for different areas",
        technical: "Role-based permissions and granular access policies"
      }
    ]
  },
  {
    title: "Your Digital Traffic Control",
    analogy: "Like an air traffic control system monitoring and directing every plane",
    description: "See and control every piece of data moving through your SaaS apps",
    details: [
      {
        title: "Real-Time Monitoring",
        explanation: "Just as controllers track every aircraft's movement",
        technical: "Live data flow monitoring and user activity tracking"
      },
      {
        title: "Instant Intervention",
        explanation: "Similar to redirecting planes away from danger zones",
        technical: "Automatic threat prevention and policy enforcement"
      }
    ]
  },
  {
    title: "Your Digital Bodyguard",
    analogy: "Like having a personal security detail that's always alert but never in the way",
    description: "Protection that works silently without disrupting your workflow",
    details: [
      {
        title: "Invisible Protection",
        explanation: "Like bodyguards blending into the background",
        technical: "Zero-impact security monitoring and threat prevention"
      },
      {
        title: "Smart Decisions",
        explanation: "Similar to security teams assessing threats in real-time",
        technical: "AI-powered threat detection and automated responses"
      }
    ]
  }
];

const practicalBenefits = [
  {
    title: 'Plug & Play Security',
    icon: (
      <svg className="w-8 h-8 text-kahana-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    description: 'Like a smart home system that works right out of the box',
    benefits: [
      'No complex setup needed',
      'Works instantly with your apps',
      'Automatic updates and protection',
      'Zero configuration headaches'
    ]
  },
  {
    title: 'Smart Adaptation',
    icon: (
      <svg className="w-8 h-8 text-kahana-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    description: 'Like a thermostat that learns your preferences over time',
    benefits: [
      'Learns from your usage patterns',
      'Adjusts security automatically',
      'Gets smarter over time',
      'Prevents future threats'
    ]
  },
  {
    title: 'Team Harmony',
    icon: (
      <svg className="w-8 h-8 text-kahana-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    description: 'Like a well-orchestrated symphony where every instrument plays its part',
    benefits: [
      'Everyone works in sync',
      'Natural collaboration flow',
      'Clear roles and permissions',
      'Smooth team coordination'
    ]
  }
];

export default function SaasAndWebApps() {
  return (
    <>
      <Head>
        <title>SaaS & Web Apps Control | Kahana</title>
        <meta
          name="description"
          content="Take control of your SaaS apps without losing their magic. Oasis Browser gives you the perfect balance of freedom and control."
        />
      </Head>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-KQHFL9605P"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-KQHFL9605P');
        `}
      </Script>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-kahana-primary-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              SaaS and Web Apps,<br />Finally Under Your Control
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              SaaS and web apps gave us unprecedented flexibility, but took away control over our own data. The Oasis Browser gives you both.
            </p>
          </div>
        </div>
      </section>

      {/* Evolution Story Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* The Past Card */}
            <div className="bg-gradient-to-br from-gray-50 to-kahana-primary-50/30 rounded-2xl p-8 border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-kahana-primary-100 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-kahana-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900">The Past</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Corporate data lived inside our four walls, under our direct control. Everything was secure, but limited in accessibility.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-600">
                  <span className="text-kahana-primary mr-2">✓</span>
                  <span>Complete data control</span>
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="text-kahana-primary mr-2">✓</span>
                  <span>Direct security oversight</span>
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="text-red-500 mr-2">✗</span>
                  <span>Limited accessibility</span>
                </li>
              </ul>
            </div>

            {/* The SaaS Era Card */}
            <div className="bg-gradient-to-br from-gray-50 to-kahana-secondary-50/30 rounded-2xl p-8 border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-kahana-secondary-100 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-kahana-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900">The SaaS Era</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Data became accessible anywhere, anytime, on any device. But it now lives outside our walls, beyond our control.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-600">
                  <span className="text-kahana-secondary mr-2">✓</span>
                  <span>Universal accessibility</span>
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="text-kahana-secondary mr-2">✓</span>
                  <span>Seamless collaboration</span>
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="text-red-500 mr-2">✗</span>
                  <span>Limited data control</span>
                </li>
              </ul>
            </div>
          </div>

          {/* The Solution Card */}
          <div className="mt-8 bg-gradient-to-r from-kahana-primary-50 to-kahana-secondary-50 rounded-2xl p-8 border border-kahana-primary-100">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-kahana-primary to-kahana-secondary rounded-full flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900">The Oasis Browser Closes the Loop</h3>
            </div>
            <p className="text-gray-600 text-lg mb-6">
              We complete the vision of SaaS by delivering a fast, fluid, dynamic web app experience, while providing the control, security and visibility over corporate data that was missing until now.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h4 className="font-semibold text-gray-900 mb-2">Fast & Fluid</h4>
                <p className="text-gray-600">Modern web experience without compromise</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h4 className="font-semibold text-gray-900 mb-2">Total Control</h4>
                <p className="text-gray-600">Your data under your governance again</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h4 className="font-semibold text-gray-900 mb-2">Full Visibility</h4>
                <p className="text-gray-600">Complete oversight of data movement</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Concept Cards Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Security Made Simple
            </h2>
          <div className="grid grid-cols-1 gap-12">
            {conceptCards.map((card, index) => (
              <div key={index} className="bg-gradient-to-r from-kahana-primary-50 to-kahana-secondary-50 rounded-2xl overflow-hidden border border-kahana-primary-100">
                <div className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-kahana-primary to-kahana-secondary rounded-full flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {card.title === "Your Digital Vault" ? (
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        ) : card.title === "Your Digital Traffic Control" ? (
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                        ) : (
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                        )}
                      </svg>
                    </div>
                    <h3 className="text-2xl font-semibold text-gray-900">{card.title}</h3>
                  </div>
                  <p className="text-gray-600 text-lg mb-8">
                    {card.description}
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    {card.details.map((detail, dIndex) => (
                      <div key={dIndex} className="bg-white rounded-xl p-6 shadow-sm">
                        <h4 className="font-semibold text-gray-900 mb-3">
                          {detail.title}
                        </h4>
                        <p className="text-gray-600 mb-3">
                          {detail.explanation}
                        </p>
                        <div className="flex items-center text-kahana-primary">
                          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span className="text-sm font-medium">{detail.technical}</span>
                        </div>
          </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Practical Benefits Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Real-World Benefits
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {practicalBenefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 transform transition-all duration-300 hover:shadow-md">
                <div className="text-kahana-primary mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm italic">
                  {benefit.description}
                </p>
                <ul className="space-y-3">
                  {benefit.benefits.map((item, iIndex) => (
                    <li key={iIndex} className="flex items-start text-gray-600">
                      <span className="text-kahana-primary mr-2">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-kahana-primary to-kahana-secondary py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6" style={{ color: 'white !important' }}>
            Ready to Take Control?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Schedule a demo to see how Oasis can transform your SaaS and web app security.
          </p>
          <Link href="/schedule-demo">
            <button className="bg-white text-kahana-primary font-bold px-8 py-3 rounded-md hover:bg-gray-50 transition-colors">
              Schedule Demo
            </button>
          </Link>
        </div>
      </section>
    </>
  );
} 