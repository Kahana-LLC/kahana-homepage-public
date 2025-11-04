import React from 'react';
import Head from 'next/head';
import Script from 'next/script';
import Link from 'next/link';

const conceptCards = [
  {
    title: "Identity & Access",
    description: "Streamlined identity and access management for acquired employees",
    details: [
      {
        title: "Quick Provisioning",
        explanation: "Instant secure access for new employees",
        technical: "Automated user provisioning and role assignment"
      },
      {
        title: "Role Management",
        explanation: "Precise control over resource access",
        technical: "Role-based access control with granular permissions"
      }
    ]
  },
  {
    title: "Security Controls",
    description: "Enterprise-grade security during the transition period",
    details: [
      {
        title: "Access Monitoring",
        explanation: "Real-time visibility into resource usage",
        technical: "Comprehensive activity logging and monitoring"
      },
      {
        title: "Data Protection",
        explanation: "Keep sensitive data secure during integration",
        technical: "End-to-end encryption and data loss prevention"
      }
    ]
  },
  {
    title: "Compliance & Reporting",
    description: "Maintain compliance throughout the M&A process",
    details: [
      {
        title: "Audit Trails",
        explanation: "Complete visibility into all activities",
        technical: "Detailed audit logs and compliance reporting"
      },
      {
        title: "Policy Enforcement",
        explanation: "Automated compliance controls",
        technical: "Real-time policy enforcement and verification"
      }
    ]
  }
];

export default function MA() {
  return (
    <>
      <Head>
        <title>M&A Integration Solutions | Kahana</title>
        <meta
          name="description"
          content="Streamline M&A integration with Kahana's Oasis Browser. Enable rapid, secure integration of acquired employees while maintaining enterprise security and compliance."
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
              M&A Integration,<br />Made Simple & Secure
            </h1>
            <p className="text-xl text-[#4A5745] max-w-3xl mx-auto">
              Accelerate M&A integration while maintaining enterprise-grade security and compliance with Oasis Browser.
            </p>
          </div>
        </div>
      </section>

      {/* Evolution Story Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Traditional M&A Card */}
            <div className="bg-gradient-to-br from-kahana-accent-sky/20 to-kahana-secondary-300/10 rounded-2xl">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#788B59] to-[#728552] rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-[#728552]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-[#4A5745]">Traditional M&A</h3>
              </div>
              <p className="text-[#4A5745] mb-4">
                Traditional M&A integration involved lengthy IT migrations, hardware deployments, and security risks.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-[#4A5745]">
                  <span className="text-red-500 mr-2">✗</span>
                  <span>Slow integration process</span>
                </li>
                <li className="flex items-center text-[#4A5745]">
                  <span className="text-red-500 mr-2">✗</span>
                  <span>High IT overhead</span>
                </li>
                <li className="flex items-center text-[#4A5745]">
                  <span className="text-red-500 mr-2">✗</span>
                  <span>Security compromises</span>
                </li>
              </ul>
            </div>

            {/* Modern M&A Card */}
            <div className="bg-gradient-to-br from-kahana-accent-sky/20 to-kahana-secondary-300/10 rounded-2xl">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#788B59] to-[#728552] rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-[#728552]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-[#4A5745]">Modern M&A Needs</h3>
              </div>
              <p className="text-[#4A5745] mb-4">
                Today's M&A landscape demands rapid integration while maintaining security and enabling productivity.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-[#4A5745]">
                  <span className="text-[#728552] mr-2">✓</span>
                  <span>Fast integration</span>
                </li>
                <li className="flex items-center text-[#4A5745]">
                  <span className="text-[#728552] mr-2">✓</span>
                  <span>Immediate access</span>
                </li>
                <li className="flex items-center text-[#4A5745]">
                  <span className="text-red-500 mr-2">✗</span>
                  <span>Complex implementation</span>
                </li>
              </ul>
            </div>
          </div>

          {/* The Solution Card */}
          <div className="mt-8 bg-gradient-to-br from-kahana-accent-sky/20 to-kahana-secondary-300/10 rounded-2xl">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-[#788B59] to-[#728552] rounded-full flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-[#4A5745]">Oasis Browser Accelerates Integration</h3>
            </div>
            <p className="text-[#4A5745] text-lg mb-6">
              Enable day-one access to corporate resources while maintaining enterprise security and compliance requirements.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h4 className="font-semibold text-[#4A5745] mb-2">Instant Access</h4>
                <p className="text-[#4A5745]">Day-one productivity</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h4 className="font-semibold text-[#4A5745] mb-2">Zero Trust</h4>
                <p className="text-[#4A5745]">Complete security control</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h4 className="font-semibold text-[#4A5745] mb-2">Full Compliance</h4>
                <p className="text-[#4A5745]">Audit-ready integration</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Concept Cards Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#4A5745] mb-12 text-center">
            Enterprise Integration Features
          </h2>
          <div className="grid grid-cols-1 gap-12">
            {conceptCards.map((card, index) => (
              <div key={index} className="bg-gradient-to-br from-kahana-accent-sky/20 to-kahana-secondary-300/10 rounded-2xl">
                <div className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#788B59] to-[#728552] rounded-full flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {card.title === "Identity & Access" ? (
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        ) : card.title === "Security Controls" ? (
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        ) : (
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
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
            Ready to Accelerate Your M&A Integration?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Schedule a demo to see how Oasis can transform your organization's merger integration.
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