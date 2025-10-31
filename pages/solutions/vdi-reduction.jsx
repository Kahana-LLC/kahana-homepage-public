import React from 'react';
import Head from 'next/head';
import Script from 'next/script';
import Link from 'next/link';

const conceptCards = [
  {
    title: "Cost Optimization",
    description: "Eliminate expensive VDI infrastructure and maintenance costs",
    details: [
      {
        title: "Infrastructure Savings",
        explanation: "Remove costly VDI servers and licenses",
        technical: "Up to 70% reduction in infrastructure costs"
      },
      {
        title: "Maintenance Reduction",
        explanation: "Eliminate VDI maintenance overhead",
        technical: "Zero VDI infrastructure to maintain"
      }
    ]
  },
  {
    title: "Performance & Access",
    description: "Superior performance without VDI bottlenecks",
    details: [
      {
        title: "Direct Access",
        explanation: "Connect directly to resources",
        technical: "Zero VDI latency or connection overhead"
      },
      {
        title: "Resource Optimization",
        explanation: "Better resource utilization",
        technical: "Dynamic resource allocation and scaling"
      }
    ]
  },
  {
    title: "Security Controls",
    description: "Enterprise-grade security without VDI complexity",
    details: [
      {
        title: "Zero Trust Security",
        explanation: "Modern security approach",
        technical: "Identity-based access control and monitoring"
      },
      {
        title: "Policy Enforcement",
        explanation: "Automated security controls",
        technical: "Real-time policy verification and enforcement"
      }
    ]
  }
];

export default function VDI() {
  return (
    <>
      <Head>
        <title>VDI Reduction Solutions | Kahana</title>
        <meta
          name="description"
          content="Reduce VDI costs and complexity with Oasis Browser. Eliminate VDI infrastructure while maintaining secure access to corporate resources."
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
              Beyond VDI:<br />Modern Access Without Complexity
            </h1>
            <p className="text-xl text-[#4A5745] max-w-3xl mx-auto">
              Replace expensive VDI infrastructure with Oasis Browser for secure, efficient access to corporate resources.
            </p>
          </div>
        </div>
      </section>

      {/* Evolution Story Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Traditional VDI Card */}
            <div className="bg-gradient-to-br from-[#F3F8E4] to-[#E0D48C] rounded-2xl p-8 border border-[#728552]">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#788B59] to-[#728552] rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-[#728552]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-[#4A5745]">Traditional VDI</h3>
              </div>
              <p className="text-[#4A5745] mb-4">
                Traditional VDI solutions are complex, expensive, and difficult to maintain.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-[#4A5745]">
                  <span className="text-red-500 mr-2">✗</span>
                  <span>High infrastructure costs</span>
                </li>
                <li className="flex items-center text-[#4A5745]">
                  <span className="text-red-500 mr-2">✗</span>
                  <span>Complex management</span>
                </li>
                <li className="flex items-center text-[#4A5745]">
                  <span className="text-red-500 mr-2">✗</span>
                  <span>Performance bottlenecks</span>
                </li>
              </ul>
            </div>

            {/* Modern Needs Card */}
            <div className="bg-gradient-to-br from-[#F3F8E4] to-[#E0D48C] rounded-2xl p-8 border border-[#728552]">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#788B59] to-[#728552] rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-[#728552]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-[#4A5745]">Modern Access Needs</h3>
              </div>
              <p className="text-[#4A5745] mb-4">
                Today's workforce needs efficient, secure access without the overhead of traditional VDI.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-[#4A5745]">
                  <span className="text-[#728552] mr-2">✓</span>
                  <span>Cost efficiency</span>
                </li>
                <li className="flex items-center text-[#4A5745]">
                  <span className="text-[#728552] mr-2">✓</span>
                  <span>Simple management</span>
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
              <h3 className="text-2xl font-semibold text-[#4A5745]">Oasis Browser: The Modern Alternative</h3>
            </div>
            <p className="text-[#4A5745] text-lg mb-6">
              Replace VDI with a modern solution that delivers better performance, security, and cost efficiency.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h4 className="font-semibold text-[#4A5745] mb-2">Zero Infrastructure</h4>
                <p className="text-[#4A5745]">No VDI servers needed</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h4 className="font-semibold text-[#4A5745] mb-2">Better Performance</h4>
                <p className="text-[#4A5745]">Direct resource access</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h4 className="font-semibold text-[#4A5745] mb-2">Simple Management</h4>
                <p className="text-[#4A5745]">Automated controls</p>
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
                        {card.title === "Cost Optimization" ? (
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        ) : card.title === "Performance & Access" ? (
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        ) : (
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
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
            Ready to Move Beyond VDI?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Schedule a demo to see how Oasis can transform your enterprise.
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