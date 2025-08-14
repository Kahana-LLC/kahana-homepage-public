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
      <section className="bg-gradient-to-b from-kahana-primary-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Privileged Access Management,<br />Made Simple
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
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
            <div className="bg-gradient-to-br from-gray-50 to-kahana-primary-50/30 rounded-2xl p-8 border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-kahana-primary-100 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-kahana-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900">Traditional PAM</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Legacy PAM solutions rely on complex infrastructure and manual processes.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-600">
                  <span className="text-red-500 mr-2">✗</span>
                  <span>Complex infrastructure</span>
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="text-red-500 mr-2">✗</span>
                  <span>Manual access management</span>
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="text-red-500 mr-2">✗</span>
                  <span>Limited visibility</span>
                </li>
              </ul>
            </div>

            {/* Modern PAM Card */}
            <div className="bg-gradient-to-br from-gray-50 to-kahana-secondary-50/30 rounded-2xl p-8 border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-kahana-secondary-100 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-kahana-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900">Modern PAM Needs</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Today's privileged access requires automated controls and complete visibility.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-600">
                  <span className="text-kahana-secondary mr-2">✓</span>
                  <span>Automated access control</span>
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="text-kahana-secondary mr-2">✓</span>
                  <span>Just-in-time access</span>
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="text-red-500 mr-2">✗</span>
                  <span>Legacy solutions</span>
                </li>
              </ul>
            </div>
          </div>

          {/* The Solution Card */}
          <div className="mt-8 bg-gradient-to-r from-kahana-primary-50 to-kahana-secondary-50 rounded-2xl p-8 border border-kahana-primary-100">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-kahana-primary to-kahana-secondary rounded-full flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900">Oasis Browser: Modern PAM</h3>
            </div>
            <p className="text-gray-600 text-lg mb-6">
              Implement comprehensive privileged access management with a modern solution that delivers security and efficiency.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h4 className="font-semibold text-gray-900 mb-2">Just-in-Time Access</h4>
                <p className="text-gray-600">Temporary, controlled access</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h4 className="font-semibold text-gray-900 mb-2">Session Control</h4>
                <p className="text-gray-600">Real-time monitoring</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h4 className="font-semibold text-gray-900 mb-2">Complete Audit</h4>
                <p className="text-gray-600">Comprehensive logging</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Concept Cards Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Enterprise Features
          </h2>
          <div className="grid grid-cols-1 gap-12">
            {conceptCards.map((card, index) => (
              <div key={index} className="bg-gradient-to-r from-kahana-primary-50 to-kahana-secondary-50 rounded-2xl overflow-hidden border border-kahana-primary-100">
                <div className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-kahana-primary to-kahana-secondary rounded-full flex items-center justify-center mr-4">
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

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-kahana-primary to-kahana-secondary py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6" >
            Ready to Secure Your Privileged Access?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Schedule a demo to see how Oasis can transform your privileged user management.
          </p>
          <Link href="/schedule-demo">
            <button className="bg-white text-kahana-primary px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors">
              Schedule Demo
            </button>
          </Link>
        </div>
      </section>
    </>
  );
} 