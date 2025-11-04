import React from 'react';
import Head from 'next/head';
import Script from 'next/script';
import Link from 'next/link';

const conceptCards = [
  {
    title: "Workplace Enablement",
    description: "Empower employees with seamless access to resources and tools",
    details: [
      {
        title: "Resource Access",
        explanation: "Instant access to all work resources",
        technical: "Single sign-on and unified access"
      },
      {
        title: "Workflow Integration",
        explanation: "Streamlined work processes",
        technical: "Automated task management"
      }
    ]
  },
  {
    title: "Collaboration Tools",
    description: "Enable seamless collaboration across teams",
    details: [
      {
        title: "Team Collaboration",
        explanation: "Real-time collaboration features",
        technical: "Integrated communication tools"
      },
      {
        title: "Resource Sharing",
        explanation: "Secure resource sharing and access",
        technical: "Granular sharing controls"
      }
    ]
  },
  {
    title: "User Experience",
    description: "Deliver a modern, intuitive work environment",
    details: [
      {
        title: "Personalization",
        explanation: "Customized work environment",
        technical: "User-specific settings and preferences"
      },
      {
        title: "Productivity Tools",
        explanation: "Built-in productivity features",
        technical: "Task management and automation"
      }
    ]
  }
];

export default function WorkplaceEnablement() {
  return (
    <>
      <Head>
        <title>Workplace Enablement | Kahana</title>
        <meta
          name="description"
          content="Enable your workforce with Oasis Browser. Enhance productivity, collaboration, and user experience while maintaining security."
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
              Workplace Enablement,<br />Made Simple
            </h1>
            <p className="text-xl text-[#4A5745] max-w-3xl mx-auto">
              Empower your workforce with Oasis Browser for seamless access to resources and enhanced productivity.
            </p>
          </div>
        </div>
      </section>

      {/* Evolution Story Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Traditional Workplace Card */}
            <div className="bg-gradient-to-br from-kahana-accent-sky/20 to-kahana-secondary-300/10 rounded-2xl">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#788B59] to-[#728552] rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-[#728552]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-[#4A5745]">Traditional Workplace</h3>
              </div>
              <p className="text-[#4A5745] mb-4">
                Legacy workplace solutions create friction and reduce productivity.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-[#4A5745]">
                  <span className="text-red-500 mr-2">✗</span>
                  <span>Complex access management</span>
                </li>
                <li className="flex items-center text-[#4A5745]">
                  <span className="text-red-500 mr-2">✗</span>
                  <span>Limited collaboration</span>
                </li>
                <li className="flex items-center text-[#4A5745]">
                  <span className="text-red-500 mr-2">✗</span>
                  <span>Poor user experience</span>
                </li>
              </ul>
            </div>

            {/* Modern Workplace Card */}
            <div className="bg-gradient-to-br from-kahana-accent-sky/20 to-kahana-secondary-300/10 rounded-2xl">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#788B59] to-[#728552] rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-[#728552]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-[#4A5745]">Modern Workplace Needs</h3>
              </div>
              <p className="text-[#4A5745] mb-4">
                Today's workforce requires seamless access and collaboration tools.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-[#4A5745]">
                  <span className="text-[#728552] mr-2">✓</span>
                  <span>Instant resource access</span>
                </li>
                <li className="flex items-center text-[#4A5745]">
                  <span className="text-[#728552] mr-2">✓</span>
                  <span>Enhanced collaboration</span>
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
              <h3 className="text-2xl font-semibold text-[#4A5745]">Oasis Browser: Modern Workplace</h3>
            </div>
            <p className="text-[#4A5745] text-lg mb-6">
              Transform your workplace with a modern solution that delivers productivity and collaboration.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h4 className="font-semibold text-[#4A5745] mb-2">Resource Access</h4>
                <p className="text-[#4A5745]">Unified access</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h4 className="font-semibold text-[#4A5745] mb-2">Collaboration</h4>
                <p className="text-[#4A5745]">Team tools</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h4 className="font-semibold text-[#4A5745] mb-2">Productivity</h4>
                <p className="text-[#4A5745]">Work optimization</p>
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
                        {card.title === "Workplace Enablement" ? (
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        ) : card.title === "Collaboration Tools" ? (
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        ) : (
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
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
            Ready to Transform Your Workplace?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Schedule a demo to see how Oasis can transform your workplace enablement.
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