import React from 'react';
import Head from 'next/head';
import Script from 'next/script';
import Link from 'next/link';

const conceptCards = [
  {
    title: "Web Security",
    description: "Comprehensive protection against web-based threats and attacks",
    details: [
      {
        title: "Malware Protection",
        explanation: "Real-time protection from malicious content",
        technical: "Advanced threat detection and blocking"
      },
      {
        title: "Phishing Prevention",
        explanation: "Block access to phishing sites",
        technical: "URL reputation checking and analysis"
      }
    ]
  },
  {
    title: "Content Control",
    description: "Advanced content filtering and access control capabilities",
    details: [
      {
        title: "Category Filtering",
        explanation: "Control access to web content categories",
        technical: "Real-time content categorization"
      },
      {
        title: "Custom Policies",
        explanation: "Flexible policy enforcement",
        technical: "Granular policy configuration"
      }
    ]
  },
  {
    title: "Threat Intelligence",
    description: "Real-time threat detection and prevention",
    details: [
      {
        title: "Risk Assessment",
        explanation: "Continuous security evaluation",
        technical: "Behavioral analysis and scoring"
      },
      {
        title: "Security Alerts",
        explanation: "Real-time threat notifications",
        technical: "Automated alerting and reporting"
      }
    ]
  }
];

export default function SafeBrowsing() {
  return (
    <>
      <Head>
        <title>Secure Browsing | Kahana</title>
        <meta
          name="description"
          content="Enable secure browsing with Oasis Browser. Protect users from web threats, control content access, and ensure compliance."
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
      <section className="bg-gradient-to-b from-[#F3F8E4] to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-[#4A5745] mb-6">
              Secure Browsing,<br />Made Simple
            </h1>
            <p className="text-xl text-[#4A5745] max-w-3xl mx-auto">
              Protect users from web threats with Oasis Browser for comprehensive security controls and content filtering.
            </p>
          </div>
        </div>
      </section>

      {/* Evolution Story Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Traditional Security Card */}
            <div className="bg-gradient-to-br from-[#F3F8E4] to-[#E0D48C] rounded-2xl p-8 border border-[#728552]">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#788B59] to-[#728552] rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-[#4A5745]">Traditional Security</h3>
              </div>
              <p className="text-[#4A5745] mb-4">
                Legacy security solutions rely on basic filtering and reactive protection.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-[#4A5745]">
                  <span className="text-red-500 mr-2">✗</span>
                  <span>Basic URL filtering</span>
                </li>
                <li className="flex items-center text-[#4A5745]">
                  <span className="text-red-500 mr-2">✗</span>
                  <span>Reactive protection</span>
                </li>
                <li className="flex items-center text-[#4A5745]">
                  <span className="text-red-500 mr-2">✗</span>
                  <span>Limited threat detection</span>
                </li>
              </ul>
            </div>

            {/* Modern Security Card */}
            <div className="bg-gradient-to-br from-[#F3F8E4] to-[#E0D48C] rounded-2xl p-8 border border-[#728552]">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#788B59] to-[#728552] rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-[#4A5745]">Modern Security Needs</h3>
              </div>
              <p className="text-[#4A5745] mb-4">
                Today's web threats require proactive protection and intelligent controls.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-[#4A5745]">
                  <span className="text-[#728552] mr-2">✓</span>
                  <span>Proactive protection</span>
                </li>
                <li className="flex items-center text-[#4A5745]">
                  <span className="text-[#728552] mr-2">✓</span>
                  <span>Intelligent filtering</span>
                </li>
                <li className="flex items-center text-[#4A5745]">
                  <span className="text-red-500 mr-2">✗</span>
                  <span>Legacy solutions</span>
                </li>
              </ul>
            </div>
          </div>

          {/* The Solution Card */}
          <div className="mt-8 bg-gradient-to-r from-[#F3F8E4] to-[#E0D48C] rounded-2xl p-8 border border-[#728552]">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-[#788B59] to-[#728552] rounded-full flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-[#4A5745]">Oasis Browser: Modern Security</h3>
            </div>
            <p className="text-[#4A5745] text-lg mb-6">
              Implement comprehensive web security with a modern solution that delivers protection and control.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h4 className="font-semibold text-[#4A5745] mb-2">Threat Protection</h4>
                <p className="text-[#4A5745]">Real-time security</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h4 className="font-semibold text-[#4A5745] mb-2">Content Control</h4>
                <p className="text-[#4A5745]">Smart filtering</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h4 className="font-semibold text-[#4A5745] mb-2">Risk Management</h4>
                <p className="text-[#4A5745]">Continuous monitoring</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Concept Cards Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#4A5745] mb-12 text-center">
            Enterprise Features
          </h2>
          <div className="grid grid-cols-1 gap-12">
            {conceptCards.map((card, index) => (
              <div key={index} className="bg-gradient-to-r from-[#F3F8E4] to-[#E0D48C] rounded-2xl overflow-hidden border border-[#728552]">
                <div className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#788B59] to-[#728552] rounded-full flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {card.title === "Web Security" ? (
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        ) : card.title === "Content Control" ? (
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                        ) : (
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        )}
                      </svg>
                    </div>
                    <h3 className="text-2xl font-semibold text-[#4A5745]">{card.title}</h3>
                  </div>
                  <p className="text-[#4A5745] text-lg mb-8">
                    {card.description}
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    {card.details.map((detail, dIndex) => (
                      <div key={dIndex} className="bg-white rounded-xl p-6 shadow-sm">
                        <h4 className="font-semibold text-[#4A5745] mb-3">
                          {detail.title}
                        </h4>
                        <p className="text-[#4A5745] mb-3">
                          {detail.explanation}
                        </p>
                        <div className="flex items-center text-[#728552]">
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

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-[#788B59] to-[#728552] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6" >
            Ready to Enable Secure Browsing?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Schedule a demo to see how Oasis can transform your secure browsing experience.
          </p>
          <Link href="/schedule-demo">
            <button className="nav-button download inline-flex items-center justify-center rounded-md text-white font-bold shadow-sm px-6 py-3 text-base no-underline hover:no-underline focus:no-underline" style={{ textDecoration: 'none', backgroundColor: '#788B59' }}>
              Schedule Demo
            </button>
          </Link>
        </div>
      </section>
    </>
  );
} 