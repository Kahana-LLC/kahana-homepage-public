import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

const markets = [
  {
    title: "Manufacturing",
    description: "Streamline production processes and optimize supply chain management.",
    href: "/markets/manufacturing",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    )
  },
  {
    title: "Professional Services",
    description: "Enhance client management and project delivery efficiency.",
    href: "/markets/professional",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2V6" />
      </svg>
    )
  },
  {
    title: "Healthcare",
    description: "Improve patient care coordination and clinical workflow management.",
    href: "/markets/healthcare",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    )
  },
  {
    title: "Finance",
    description: "Optimize financial operations and regulatory compliance processes.",
    href: "/markets/finance",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
      </svg>
    )
  },
  {
    title: "Energy & Utilities",
    description: "Enhance grid management and energy distribution efficiency.",
    href: "/markets/energy-utilities",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  },
  {
    title: "Retail & E-commerce",
    description: "Streamline inventory management and customer experience.",
    href: "/markets/retail",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
      </svg>
    )
  },
  {
    title: "Government & Public Sector",
    description: "Improve citizen services and administrative efficiency.",
    href: "/markets/government",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    )
  },
  {
    title: "Technology",
    description: "Accelerate software development and IT operations.",
    href: "/markets/technology",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    )
  },
  {
    title: "Education",
    description: "Enhance learning management and student engagement.",
    href: "/markets/education",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    )
  },
  {
    title: "Hospitality",
    description: "Optimize guest services and operational efficiency.",
    href: "/markets/hospitality",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5a2 2 0 012-2h4a2 2 0 012 2v6H8V5z" />
      </svg>
    )
  }
];

export default function MarketsIndex() {
  return (
    <>
      <Head>
        <title>Markets - Kahana</title>
        <meta name="description" content="Discover how Kahana's AI browser solutions are tailored for different industries and market segments." />
        <meta property="og:title" content="Markets - Kahana" />
        <meta property="og:description" content="Discover how Kahana's AI browser solutions are tailored for different industries and market segments." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://kahana.co/markets" />
        <link rel="canonical" href="https://kahana.co/markets" />
      </Head>

      <div className="bg-white">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-br from-[#728552] via-[#788B59] to-[#E0D48C]">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                Industry Solutions
              </h1>
              <p className="mt-6 text-lg leading-8 text-white/90">
                Discover how Kahana's AI browser is transforming workflows across different industries and market segments.
              </p>
            </div>
          </div>
        </div>

        {/* Markets Grid */}
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-[#4A5745] sm:text-4xl">
              Tailored for Your Industry
            </h2>
            <p className="mt-4 text-lg leading-8 text-[#4A5745]">
              Each market has unique challenges and opportunities. Our solutions are designed to address the specific needs of your industry.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {markets.map((market, index) => (
              <Link
                key={index}
                href={market.href}
                className="group relative bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:border-[#788B59]/30 overflow-hidden"
              >
                <div className="p-8">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#788B59] to-[#728552] rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                      <div className="text-white">
                        {market.icon}
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-[#4A5745] group-hover:text-[#728552] transition-colors duration-300">
                      {market.title}
                    </h3>
                  </div>
                  <p className="text-[#4A5745] text-sm leading-relaxed">
                    {market.description}
                  </p>
                  <div className="mt-6 flex items-center text-[#728552] font-medium text-sm group-hover:translate-x-1 transition-transform duration-300">
                    View {market.title} solutions
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-24 text-center">
            <div className="bg-gradient-to-r from-kahana-accent-sky/10 to-kahana-secondary-300/10 rounded-2xl p-12">
              <h3 className="text-2xl font-bold text-[#4A5745] mb-4">
                Ready to Transform Your Workflow?
              </h3>
              <p className="text-[#4A5745] mb-8 max-w-2xl mx-auto">
                Join thousands of professionals who are already using Kahana to streamline their operations and boost productivity.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="btn-primary inline-flex items-center justify-center px-6 py-3 text-base no-underline hover:no-underline focus:no-underline"
                >
                  Get Started
                </Link>
                <Link
                  href="/docs"
                  className="btn-secondary inline-flex items-center justify-center px-6 py-3 text-base no-underline hover:no-underline focus:no-underline"
                >
                  View Documentation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
