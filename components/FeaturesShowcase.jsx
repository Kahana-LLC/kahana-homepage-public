import React from 'react';
import Link from 'next/link';

const conceptCards = [
  {
    title: "External Workforce Access",
    link: "/solutions/external-workforce",
    image: "/figma-imports/Custom Security.png"
  },
  {
    title: "Zero Trust Security",
    link: "/solutions/zero-trust-security",
    image: "/figma-imports/Security 1.png"
  },
  {
    title: "Privileged User Management",
    link: "/solutions/privileged-user-management"
  },
  {
    title: "Secure Web Browsing",
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

        <div className="mx-auto mt-16 max-w-7xl">
          <div className="flex flex-col gap-8 md:gap-12">
            {conceptCards.map((card, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={index}
                  className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-6 md:gap-10`}
                >
                  {/* Card with image */}
                  <div className="w-full md:w-1/2">
                    <Link href={card.link} className="block w-full h-full">
                      <div className="bg-[#F8FAF2] rounded-2xl p-4 md:p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <div className="relative w-full aspect-video rounded-lg overflow-hidden bg-gray-200 hover:opacity-90 transition-opacity">
                          <img
                            src={card.image || `https://via.placeholder.com/600x400/F8FAF2/728552?text=${encodeURIComponent(card.title)}`}
                            alt={card.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                    </Link>
                  </div>

                  {/* Header Text */}
                  <div className="w-full md:w-1/2 flex items-center justify-center md:justify-start">
                    <h3 className="text-2xl md:text-3xl font-bold text-[#4A5745] text-center md:text-left">
                      {card.title}
                    </h3>
                  </div>
                </div>
              );
            })}
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