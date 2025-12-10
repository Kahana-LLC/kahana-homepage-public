import React, { useRef } from 'react';
import Link from 'next/link';
import { getCloudinaryImageUrl } from '../utils/cloudinary-mapper';

const conceptCards = [
  {
    title: "Ease with Tab Grouping",
    link: "/solutions/external-workforce",
    image: getCloudinaryImageUrl("/figma-imports/Tab Groups.webp"),
    description: "Organize your chaos into dedicated workspaces, keeping your current task in focus and the rest out of sight."
  },
  {
    title: "Zero Trust Security",
    link: "/solutions/zero-trust-security",
    image: getCloudinaryImageUrl("/figma-imports/Security 1.webp"),
    description: "Stay protected through continuous verification and calm, invisible security."
  },
  {
    title: "Homepage Personalization",
    link: "/solutions/privileged-user-management",
    image: getCloudinaryImageUrl("/figma-imports/New Tab Page.webp"),
    description: "Start every session in a space designed by you, free from distractions and tuned to your mood."
  },
  {
    title: "Secure Web Browsing",
    link: "/solutions/secure-browsing",
    image: getCloudinaryImageUrl("/figma-imports/Security 2.webp"),
    description: "Browse freely with built-in protection that feels natural, not intrusive."
  }
];

export default function FeaturesShowcase() {
  const carouselRef = useRef(null);

  const handleScroll = (direction) => {
    if (!carouselRef.current) return;
    const scrollAmount = carouselRef.current.offsetWidth * 0.8;
    carouselRef.current.scrollBy({
      left: direction === 'next' ? scrollAmount : -scrollAmount,
      behavior: 'smooth',
    });
  };

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 features-section">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-xl font-semibold leading-8 text-[#978455] mb-2">Enterprise Browser</h2>
          <h1 className="text-3xl font-bold tracking-tight text-[#313A00] sm:text-4xl">
            Everything You Need to Flow Effortlessly
          </h1>
          <p className="mt-6 text-lg leading-8 text-[#333333]">
            Oasis gives you the tools to simplify your workflow, stay focused, and work with calm precision.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-6xl">
          <div className="relative">
            <div
              ref={carouselRef}
              className="flex gap-5 overflow-x-auto scroll-smooth pb-4 snap-x snap-mandatory px-4 md:px-6"
            >
            {conceptCards.map((card, index) => (
              <Link
                key={index}
                href={card.link}
                className="group relative flex w-full max-w-sm flex-shrink-0 snap-center md:snap-start flex-col overflow-hidden rounded-[26px] border border-white/80 bg-white/90 px-6 py-5 sm:max-w-md sm:px-7 sm:py-6 shadow-[0_25px_70px_rgba(32,47,0,0.14)] backdrop-blur transition-transform duration-500 hover:-translate-y-1 no-underline"
                style={index === 0 ? { marginLeft: '-2px' } : undefined}
              >
                <div className="flex flex-col gap-3 text-left pl-1 pr-2 min-h-[150px]">
                  <p className="text-[0.6rem] font-semibold uppercase tracking-[0.3em] text-[#978455]">
                    Feature highlight
                  </p>
                  <h3 className="text-xl sm:text-2xl font-semibold text-[#1F2D00]">
                    {card.title}
                  </h3>
                  {card.description && (
                    <p className="text-base leading-7 text-[#373F29]">
                      {card.description}
                    </p>
                  )}
                </div>
                <div className="mt-4 h-[220px] overflow-hidden rounded-[20px] flex items-center justify-center">
                  <img
                    src={card.image || `https://via.placeholder.com/600x400/E4E9CC/728552?text=${encodeURIComponent(card.title)}`}
                    alt={card.title}
                    className="max-h-full w-auto object-contain"
                  />
                </div>
              </Link>
            ))}
          </div>
            <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-12 bg-gradient-to-r from-white via-white/60 to-transparent md:block" />
            <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-12 bg-gradient-to-l from-white via-white/60 to-transparent md:block" />
            <div className="pointer-events-none absolute inset-x-0 -bottom-1 flex justify-between px-2 md:px-4">
              <button
                type="button"
                onClick={() => handleScroll('prev')}
                className="pointer-events-auto hidden h-11 w-11 items-center justify-center rounded-full border !border-[#7F9E36] !bg-[#4A6200] text-white shadow-lg transition hover:!bg-[#3E5300] md:flex"
                aria-label="Scroll previous feature"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                type="button"
                onClick={() => handleScroll('next')}
                className="pointer-events-auto hidden h-11 w-11 items-center justify-center rounded-full border !border-[#7F9E36] !bg-[#4A6200] text-white shadow-lg transition hover:!bg-[#3E5300] md:flex"
                aria-label="Scroll next feature"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
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