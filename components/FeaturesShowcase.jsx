import React, { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const conceptCards = [
  {
    title: "Ease with Tab Grouping",
    link: "/solutions/external-workforce",
    image: "/figma-imports/Tab%20Groups.svg",
    description: "Organize your chaos into dedicated workspaces, keeping your current task in focus and the rest out of sight."
  },
  {
    title: "Zero Trust Security",
    link: "/solutions/zero-trust-security",
    image: "/figma-imports/Security 1.webp",
    description: "Stay protected through continuous verification and calm, invisible security."
  },
  {
    title: "Homepage Personalization",
    link: "/solutions/privileged-user-management",
    image: "/figma-imports/New%20Tab%20Page.svg",
    description: "Start every session in a space designed by you, free from distractions and tuned to your mood."
  },
  {
    title: "Secure Web Browsing",
    link: "/solutions/secure-browsing",
    image: "/figma-imports/Security 2.webp",
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
    <div className="bg-white py-10 sm:py-16 md:py-24 lg:py-32 overflow-x-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 features-section">
        <div className="mx-auto max-w-2xl text-center w-full">
          <h2 className="text-xl font-semibold leading-8 text-[#978455] mb-2">Enterprise Browser</h2>
          <h1 className="text-3xl font-semibold tracking-tight text-[#313A00] sm:text-4xl break-words">
            Everything You Need to Flow Effortlessly
          </h1>
          <p className="mt-4 text-lg text-[#4A5745] break-words">
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

        <div className="mx-auto mt-8 sm:mt-12 md:mt-16 max-w-6xl w-full">
          <div className="relative">
            {/* Mobile scroll hint */}
            <div className="md:hidden absolute -top-6 right-4 text-xs text-gray-500 flex items-center gap-1">
              <span>Swipe</span>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
            <div
              ref={carouselRef}
              className="flex gap-3 sm:gap-4 md:gap-5 overflow-x-auto scroll-smooth pb-6 snap-x snap-mandatory px-2 sm:px-4 md:px-6 hide-scrollbar"
              style={{ 
                WebkitOverflowScrolling: 'touch',
                scrollbarWidth: 'none',
                msOverflowStyle: 'none'
              }}
            >
              <style jsx global>{`
                .hide-scrollbar::-webkit-scrollbar {
                  display: none;
                }
              `}</style>
            {conceptCards.map((card, index) => (
              <Link
                key={index}
                href={card.link}
                className="group relative flex w-[calc(100vw-5rem)] sm:w-[45vw] md:w-full max-w-sm flex-shrink-0 snap-center md:snap-start flex-col overflow-hidden rounded-[18px] sm:rounded-[22px] md:rounded-[26px] border border-white/80 bg-white/90 px-3.5 py-3.5 sm:px-5 sm:py-4 md:px-6 md:py-5 lg:max-w-md lg:px-7 lg:py-6 shadow-[0_25px_70px_rgba(32,47,0,0.14)] backdrop-blur transition-transform duration-300 active:scale-[0.98] md:hover:-translate-y-1 no-underline touch-manipulation"
                style={{ touchAction: 'pan-y' }}
              >
                <div className="flex flex-col gap-1.5 sm:gap-2 md:gap-3 text-left min-h-[100px] sm:min-h-[130px] md:min-h-[150px]">
                  <p className="text-[0.5rem] sm:text-[0.55rem] md:text-[0.6rem] font-semibold uppercase tracking-[0.2em] sm:tracking-[0.25em] md:tracking-[0.3em] text-[#978455]">
                    Feature highlight
                  </p>
                  <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-[#1F2D00] leading-tight">
                    {card.title}
                  </h3>
                  {card.description && (
                    <p className="text-xs sm:text-sm md:text-base leading-5 sm:leading-6 md:leading-7 text-[#373F29]">
                      {card.description}
                    </p>
                  )}
                </div>
                <div className="relative mt-2.5 sm:mt-3 md:mt-4 h-[160px] sm:h-[190px] md:h-[220px] overflow-hidden rounded-[14px] sm:rounded-[18px] md:rounded-[20px] bg-white/50">
                  <Image
                    src={card.image || `https://via.placeholder.com/600x400/E4E9CC/728552?text=${encodeURIComponent(card.title)}`}
                    alt={card.title}
                    fill
                    sizes="(max-width: 640px) 85vw, (max-width: 768px) 45vw, 400px"
                    className="object-contain"
                    loading="lazy"
                    quality={85}
                  />
                </div>
              </Link>
            ))}
          </div>
            <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-8 sm:w-12 bg-gradient-to-r from-white via-white/60 to-transparent md:block" />
            <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-8 sm:w-12 bg-gradient-to-l from-white via-white/60 to-transparent md:block" />
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
        </div>
      </div>
    </div>
  );
}
