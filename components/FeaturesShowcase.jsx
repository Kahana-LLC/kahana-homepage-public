import React from 'react';
import Link from 'next/link';

const conceptCards = [
  {
    title: "Group tabs with ease",
    link: "/solutions/external-workforce",
    image: "/figma-imports/Tab%20Groups.svg",
    description: "Organize your chaos into dedicated workspaces, keeping your current task in focus and the rest out of sight."
  },
  {
    title: "Browse without being followed",
    link: "/solutions/secure-browsing",
    image: "/figma-imports/Security 1.png",
    description: "Stay protected through continuous verification and calm, invisible security."
  },
  {
    title: "Personalize your homepage",
    link: "/solutions/privileged-user-management",
    image: "/figma-imports/New%20Tab%20Page.svg",
    description: "Start every session in a space designed by you, free from distractions and tuned to your mood."
  },
  {
    title: "Stay secure while browsing",
    link: "/solutions/secure-browsing",
    image: "/figma-imports/Security 2.png",
    description: "Browse freely with built-in protection that feels natural, not intrusive."
  }
];

export default function FeaturesShowcase() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 features-section">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-xl font-semibold leading-8 text-[#978455] mb-2">Enterprise Browser</h2>
          <h1 className="text-3xl font-bold tracking-tight text-[#313A00] sm:text-4xl">
            Everything you need to flow effortlessly
          </h1>
          <p className="mt-6 text-lg leading-8 text-[#333333]">
            Oasis gives you the tools to simplify your workflow, stay focused, and work with calm precision.
          </p>
          <div className="mt-8">
            <Link href="/products/enterprise-browser">
              <button className="btn-primary inline-flex items-center justify-center px-8 py-3 text-base no-underline hover:no-underline focus:no-underline">
                Learn more
              </button>
            </Link>
          </div>
        </div>

        <div className="mx-auto mt-16 max-w-7xl">
          <div className="grid gap-8 lg:gap-10">
            {conceptCards.map((card, index) => (
              <div
                key={index}
                className="group relative mx-auto max-w-3xl overflow-hidden rounded-[28px] border border-white/70 bg-gradient-to-br from-white via-[#F8FAF2] to-[#F2F6E8] p-5 sm:p-6 shadow-[0_30px_100px_rgba(32,47,0,0.1)] transition-transform duration-500 hover:-translate-y-1 cursor-default"
              >
                <div className="mb-6 flex flex-col gap-3 text-left">
                  <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#978455]">
                    Feature highlight
                  </p>
                  <h3 className="text-2xl sm:text-3xl font-semibold text-[#1F2D00]">
                    {card.title}
                  </h3>
                  {card.description && (
                    <p className="text-lg leading-8 text-[#373F29]">
                      {card.description}
                    </p>
                  )}
                </div>
                <div className="relative overflow-hidden rounded-[24px] border border-white/80 bg-white/80 shadow-[0_20px_60px_rgba(26,35,0,0.15)]">
                  <img
                    src={card.image || `https://via.placeholder.com/600x400/E4E9CC/728552?text=${encodeURIComponent(card.title)}`}
                    alt={card.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#091003]/35 via-transparent to-transparent opacity-60" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 