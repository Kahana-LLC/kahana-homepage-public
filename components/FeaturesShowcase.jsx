import React from 'react';
import Link from 'next/link';

const conceptCards = [
  {
    title: "External Workforce Access",
    description: "Give contractors and partners secure, seamless access without breaking your flow.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    highlight: "Controlled, effortless access",
    link: "/solutions/external-workforce"
  },
  {
    title: "Zero Trust Security",
    description: "Stay protected through continuous verification and calm, invisible security.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    highlight: "Always-on peace of mind",
    link: "/solutions/zero-trust-security"
  },
  {
    title: "Privileged User Management",
    description: "Grant elevated access only when needed, with effortless control and visibility.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
      </svg>
    ),
    highlight: "Access in sync with you",
    link: "/solutions/privileged-user-management"
  },
  {
    title: "Secure Web Browsing",
    description: "Browse freely with built-in protection that feels natural, not intrusive.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    ),
    highlight: "Security that flows with you",
    link: "/solutions/secure-browsing"
  }
];

export default function FeaturesShowcase() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 features-section">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-xl font-semibold leading-8 text-[#978455] mb-4">Enterprise Browser</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-[#4A5745] sm:text-4xl">
            Everything you need to flow effortlessly
          </p>
          <p className="mt-6 text-lg leading-8 text-[#4A5745]">
          Oasis gives you the tools to simplify your workflow, stay focused, and work with calm precision. </p>
        </div>

        <div className="mx-auto mt-16 max-w-7xl flex flex-col items-center">
          <style jsx>{`
            .feature-card {
              background: linear-gradient(90deg, #F8FAF2 0%, #d6e3f4 100%);
              border-radius: 1rem;
              padding: 2rem;
              box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
              display: flex;
              flex-direction: column;
              align-items: center;
              text-align: center;
              height: 100%;
              transition: transform 0.3s ease, box-shadow 0.3s ease;
            }
            .feature-card:hover {
              transform: translateY(-4px);
              box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
            }
            .feature-card h3 {
              color: #495800;
              font-weight: bold;
              font-size: 1.125rem;
              margin-bottom: 1rem;
              line-height: 1.4;
              text-align: center;
              min-height: 3rem;
              display: flex;
              align-items: center;
              justify-content: center;
            }
            .feature-card .description-wrapper {
              height: 5.5rem;
              display: flex;
              align-items: center;
              justify-content: center;
              margin-bottom: 1rem;
              width: 100%;
            }
            .feature-card p {
              color: #495800;
              line-height: 1.6;
              text-align: center;
              margin: 0;
            }
            .feature-card .highlight {
              color: #495800;
              text-align: center;
              margin-bottom: 1rem;
              height: 3rem;
              display: flex;
              align-items: center;
              justify-content: center;
              width: 100%;
            }
            .feature-card .highlight span {
              text-align: center;
              line-height: 1.4;
            }
            .feature-card a {
              color: #495800;
              text-align: center;
              margin-top: auto;
            }
            .feature-icon {
              background-color: #FFFFFF;
              border: 2px solid #7A9200;
              border-radius: 32px;
              width: 3rem;
              height: 3rem;
              display: flex;
              align-items: center;
              justify-content: center;
            }
            .feature-icon svg {
              color: #7A9200;
            }
            .features-section h2 {
              color: #978455 !important;
            }
          `}</style>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 w-full">
            {conceptCards.map((card, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon mb-4">
                  {card.icon}
                </div>
                <h3>{card.title}</h3>
                <div className="description-wrapper">
                  <p className="text-sm">
                    {card.description}
                  </p>
                </div>
                <div className="flex items-center justify-center highlight text-sm mb-4">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="font-medium">{card.highlight}</span>
                </div>
                <Link href={card.link} className="text-sm font-semibold transition-colors hover:text-[#728552]">
                  Learn more about {card.title} <span aria-hidden="true">→</span>
                </Link>
              </div>
            ))}
          </div>
          
          {/* Enterprise Browser CTA */}
          <div className="mt-12 text-center">
            <Link href="/products/enterprise-browser">
              <button className="btn-primary inline-flex items-center justify-center px-8 py-3 text-base no-underline hover:no-underline focus:no-underline">
                Learn more
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 