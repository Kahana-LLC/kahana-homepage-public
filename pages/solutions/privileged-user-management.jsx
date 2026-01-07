import React from 'react';
import Head from 'next/head';
import Script from 'next/script';
import Link from 'next/link';

const conceptCards = [
  {
    title: "Access Control",
    description: "Granular control over privileged access with just-in-time permissions",
    details: [
      {
        title: "Just-in-Time Access",
        explanation: "Temporary access for specific tasks",
        technical: "Time-bound access with automatic revocation"
      },
      {
        title: "Role-Based Permissions",
        explanation: "Access based on user roles and responsibilities",
        technical: "Dynamic permission assignment and enforcement"
      }
    ]
  },
  {
    title: "Session Management",
    description: "Comprehensive monitoring and control of privileged sessions",
    details: [
      {
        title: "Session Recording",
        explanation: "Complete visibility into privileged activities",
        technical: "Real-time session monitoring and recording"
      },
      {
        title: "Activity Monitoring",
        explanation: "Continuous tracking of privileged actions",
        technical: "Behavioral analytics and anomaly detection"
      }
    ]
  },
  {
    title: "Compliance & Audit",
    description: "Complete audit trail and compliance management",
    details: [
      {
        title: "Access Logs",
        explanation: "Detailed logging of all privileged activities",
        technical: "Comprehensive audit trail and reporting"
      },
      {
        title: "Compliance Controls",
        explanation: "Automated compliance enforcement",
        technical: "Policy-based access controls and reporting"
      }
    ]
  }
];

export default function PAM() {
  return (
    <>
      <Head>
        <title>Privileged Access Management | Kahana</title>
        <meta
          name="description"
          content="Secure privileged access management with Oasis Browser. Enable just-in-time access, session monitoring, and comprehensive audit trails."
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
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-[#4A5745] mb-6">
              Privileged Access Management,<br />Made Simple
            </h1>
            <p className="text-xl text-[#4A5745] max-w-3xl mx-auto">
              Secure privileged access with Oasis Browser for just-in-time permissions and comprehensive monitoring.
            </p>
          </div>
        </div>
      </section>

      {/* Evolution Story Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Traditional PAM Card */}
            <div className="bg-gradient-to-br from-kahana-accent-sky/20 to-kahana-secondary-300/10 rounded-2xl">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#788B59] to-[#728552] rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-[#728552]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-[#4A5745]">Traditional PAM</h3>
              </div>
              <p className="text-[#4A5745] mb-4">
                Legacy PAM solutions rely on complex infrastructure and manual processes.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-[#4A5745]">
                  <span className="text-red-500 mr-2">✗</span>
                  <span>Complex infrastructure</span>
                </li>
                <li className="flex items-center text-[#4A5745]">
                  <span className="text-red-500 mr-2">✗</span>
                  <span>Manual access management</span>
                </li>
                <li className="flex items-center text-[#4A5745]">
                  <span className="text-red-500 mr-2">✗</span>
                  <span>Limited visibility</span>
                </li>
              </ul>
            </div>

            {/* Modern PAM Card */}
            <div className="bg-gradient-to-br from-kahana-accent-sky/20 to-kahana-secondary-300/10 rounded-2xl">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#788B59] to-[#728552] rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-[#728552]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-[#4A5745]">Modern PAM Needs</h3>
              </div>
              <p className="text-[#4A5745] mb-4">
                Today's privileged access requires automated controls and complete visibility.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-[#4A5745]">
                  <span className="text-[#728552] mr-2">✓</span>
                  <span>Automated access control</span>
                </li>
                <li className="flex items-center text-[#4A5745]">
                  <span className="text-[#728552] mr-2">✓</span>
                  <span>Just-in-time access</span>
                </li>
                <li className="flex items-center text-[#4A5745]">
                  <span className="text-red-500 mr-2">✗</span>
                  <span>Legacy solutions</span>
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
              <h3 className="text-2xl font-semibold text-[#4A5745]">Oasis Browser: Modern PAM</h3>
            </div>
            <p className="text-[#4A5745] text-lg mb-6">
              Implement comprehensive privileged access management with a modern solution that delivers security and efficiency.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h4 className="font-semibold text-[#4A5745] mb-2">Just-in-Time Access</h4>
                <p className="text-[#4A5745]">Temporary, controlled access</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h4 className="font-semibold text-[#4A5745] mb-2">Session Control</h4>
                <p className="text-[#4A5745]">Real-time monitoring</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h4 className="font-semibold text-[#4A5745] mb-2">Complete Audit</h4>
                <p className="text-[#4A5745]">Comprehensive logging</p>
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
              <div key={index} className="bg-gradient-to-br from-kahana-accent-sky/20 to-kahana-secondary-300/10 rounded-2xl">
                <div className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#788B59] to-[#728552] rounded-full flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {card.title === "Access Control" ? (
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                        ) : card.title === "Session Management" ? (
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
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
      <section 
        className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] py-12 sm:py-16 md:py-20 lg:py-28 mb-0 bg-[#F8FAF2]"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4 sm:mb-6">
            Ready to Secure Your Privileged Access?
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 lg:mb-10 max-w-3xl mx-auto leading-relaxed font-bold" style={{ color: '#313A00' }}>
            Schedule a demo to see how Oasis can transform your privileged user management.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
            <Link href="/schedule-demo" className="btn-primary inline-flex items-center justify-center px-6 sm:px-8 lg:px-10 py-3 sm:py-4 text-sm sm:text-base lg:text-lg font-bold no-underline hover:no-underline focus:no-underline w-full sm:w-auto">
              Schedule a Demo
            </Link>
            <Link href="/contact" className="btn-secondary inline-flex items-center justify-center px-6 sm:px-8 lg:px-10 py-3 sm:py-4 text-sm sm:text-base lg:text-lg font-bold no-underline hover:no-underline focus:no-underline w-full sm:w-auto">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </>
  );
} 