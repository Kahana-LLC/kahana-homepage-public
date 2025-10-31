import React from 'react';
import Link from 'next/link';

const conceptCards = [
  {
    title: "External Workforce Access",
    description: "Secure access for contractors and third parties while maintaining enterprise-grade security.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    highlight: "Controlled contractor access",
    link: "/solutions/external-workforce"
  },
  {
    title: "Zero Trust Security",
    description: "Implement Zero Trust principles with continuous verification and least privilege access.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    highlight: "Continuous verification",
    link: "/solutions/zero-trust-security"
  },
  {
    title: "Privileged User Management",
    description: "Secure privileged access with just-in-time permissions and comprehensive monitoring.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
      </svg>
    ),
    highlight: "Just-in-time access",
    link: "/solutions/privileged-user-management"
  },
  {
    title: "Secure Web Browsing",
    description: "Protect users from web threats with comprehensive security controls and content filtering.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    ),
    highlight: "Threat protection",
    link: "/solutions/secure-browsing"
  }
];

export default function FeaturesShowcase() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-[#4A5745]">Powerful Features</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-[#4A5745] sm:text-4xl">
            Everything you need to succeed
          </p>
          <p className="mt-6 text-lg leading-8 text-[#4A5745]">
            Our platform provides all the tools and features you need to streamline your workflow and boost productivity.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {conceptCards.map((card, index) => (
              <div key={index} className="bg-gradient-to-br from-[#F3F8E4] to-[#E0D48C] rounded-xl overflow-hidden border border-[#728552] p-6 shadow-lg transition-all duration-300 hover:shadow-xl">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#788B59] to-[#728552] rounded-full flex items-center justify-center mr-3 shadow-md">
                    <div className="text-white">
                      {card.icon}
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-[#4A5745]">{card.title}</h3>
                </div>
                <p className="text-[#4A5745] text-sm mb-4">
                  {card.description}
                </p>
                <div className="flex items-center text-[#4A5745] text-sm mb-4">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="font-medium">{card.highlight}</span>
                </div>
                <Link href={card.link} className="text-[#4A5745] hover:text-[#728552] text-sm font-semibold transition-colors">
                      Learn more about {card.title} <span aria-hidden="true">→</span>
                </Link>
              </div>
            ))}
          </div>
          
          {/* Enterprise Browser CTA */}
          <div className="mt-12 text-center">
            <Link href="/products/enterprise-browser">
              <button className="nav-button download inline-flex items-center justify-center rounded-md text-white font-bold shadow-sm px-8 py-3 text-base no-underline hover:no-underline focus:no-underline" style={{ textDecoration: 'none', backgroundColor: '#788B59' }}>
                Oasis Enterprise Browser
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 