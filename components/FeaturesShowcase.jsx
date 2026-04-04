import React, { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { getCloudinaryImageProps, getCloudinaryImageUrl } from '../utils/cloudinary-mapper';

/** Aligned with card column width — next/image unoptimized uses one URL; srcset fixes oversized w_800 on mobile */
const FEATURE_CARD_WIDTHS = [320, 480, 640, 800];
const FEATURE_CARD_SIZES =
  '(max-width: 640px) min(calc(100vw - 8rem), 400px), (max-width: 768px) 45vw, 400px';

const conceptCards = [
  {
    title: "Ease with Tab Grouping",
    link: "/solutions/external-workforce",
    imagePath: "/figma-imports/Tab Groups.webp",
    description: "Organize your chaos into dedicated workspaces, keeping your current task in focus and the rest out of sight."
  },
  {
    title: "Zero Trust Security",
    link: "/solutions/zero-trust-security",
    imagePath: "/figma-imports/Security 1.webp",
    description: "Stay protected through continuous verification and calm, invisible security."
  },
  {
    title: "Homepage Personalization",
    link: "/solutions/privileged-user-management",
    imagePath: "/figma-imports/New Tab Page.webp",
    description: "Start every session in a space designed by you, free from distractions and tuned to your mood."
  },
  {
    title: "Secure Web Browsing",
    link: "/solutions/secure-browsing",
    imagePath: "/figma-imports/Security 2.webp",
    description: "Browse freely with built-in protection that feels natural, not intrusive."
  }
];

function FeatureCardImage({ imagePath, title }) {
  const props = getCloudinaryImageProps(imagePath, {
    widths: FEATURE_CARD_WIDTHS,
    quality: 'auto:good',
  });
  if (props.srcSet && props.src) {
    return (
      <img
        src={props.src}
        srcSet={props.srcSet}
        sizes={FEATURE_CARD_SIZES}
        alt={title}
        className="absolute inset-0 h-full w-full object-contain"
        loading="lazy"
        decoding="async"
      />
    );
  }
  return (
    <Image
      src={getCloudinaryImageUrl(imagePath, { width: 640, quality: 'auto:good' })}
      alt={title}
      fill
      sizes={FEATURE_CARD_SIZES}
      className="object-contain"
      loading="lazy"
      quality={85}
    />
  );
}

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
    <div className="bg-white py-10 sm:py-16 md:py-24 lg:py-32 overflow-x-hidden w-full">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 features-section w-full">
        <div className="mx-auto max-w-2xl text-center w-full px-4 sm:px-0">
          <h2 className="text-lg sm:text-xl font-semibold leading-8 text-[#5C5F2E] mb-2">Enterprise Browser</h2>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-black break-words px-2 sm:px-0">
            Everything You Need to Flow Effortlessly
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#4A5745] break-words px-2 sm:px-0">
            Oasis gives you the tools to simplify your workflow, stay focused, and work with calm precision.
          </p>
          <div className="mt-6 sm:mt-8">
            <Link href="/products/enterprise-browser">
              <button className="btn-primary inline-flex items-center justify-center px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base no-underline hover:no-underline focus:no-underline scale-110 sm:scale-125">
                Learn more about Oasis Enterprise Browser
              </button>
            </Link>
          </div>
        </div>

        <div className="mx-auto mt-8 sm:mt-12 md:mt-16 max-w-6xl w-full overflow-x-hidden">
          <div className="relative w-full" style={{ overflowY: 'visible' }}>
            {/* Mobile scroll hint */}
            <div className="md:hidden absolute -top-6 right-4 text-xs text-gray-500 flex items-center gap-1 z-10">
              <span>Swipe</span>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
            <div
              ref={carouselRef}
              className="flex gap-3 sm:gap-4 md:gap-5 overflow-x-auto md:overflow-x-hidden scroll-smooth pb-6 snap-x snap-mandatory md:snap-none px-4 sm:px-4 md:px-6 hide-scrollbar carousel-horizontal-only"
              style={{ 
                WebkitOverflowScrolling: 'touch',
                scrollbarWidth: 'none',
                msOverflowStyle: 'none',
                overflowY: 'hidden',
                height: 'auto',
                maxHeight: '100%',
                alignItems: 'flex-start'
              }}
            >
              <style jsx global>{`
                .carousel-horizontal-only {
                  overflow-y: hidden !important;
                  max-height: none !important;
                }
                /* Mobile: allow horizontal scrolling */
                @media (max-width: 767px) {
                  .carousel-horizontal-only {
                    overflow-x: auto !important;
                    touch-action: pan-x !important;
                  }
                }
                /* Desktop: disable scrolling, only arrow navigation */
                @media (min-width: 768px) {
                  .carousel-horizontal-only {
                    overflow-x: hidden !important;
                    touch-action: none !important;
                  }
                }
                .carousel-horizontal-only::-webkit-scrollbar {
                  display: none !important;
                  width: 0 !important;
                  height: 0 !important;
                }
                .carousel-horizontal-only::-webkit-scrollbar:vertical {
                  display: none !important;
                  width: 0 !important;
                  height: 0 !important;
                }
                .carousel-horizontal-only::-webkit-scrollbar:horizontal {
                  display: none !important;
                }
                .carousel-horizontal-only::-webkit-scrollbar-track {
                  display: none !important;
                }
                .carousel-horizontal-only::-webkit-scrollbar-thumb {
                  display: none !important;
                }
                .carousel-horizontal-only::-webkit-scrollbar-corner {
                  display: none !important;
                }
              `}</style>
            {conceptCards.map((card, index) => (
              <Link
                key={index}
                href={card.link}
                className="group relative flex w-[calc(100vw-8rem)] sm:w-[45vw] md:w-full max-w-sm flex-shrink-0 snap-center md:snap-start flex-col overflow-hidden rounded-[18px] sm:rounded-[22px] md:rounded-[26px] border border-white/80 bg-white/90 px-3.5 py-3.5 sm:px-5 sm:py-4 md:px-6 md:py-5 lg:max-w-md lg:px-7 lg:py-6 shadow-[0_25px_70px_rgba(32,47,0,0.14)] backdrop-blur transition-transform duration-300 active:scale-[0.98] md:hover:-translate-y-1 no-underline"
              >
                <div className="flex flex-col gap-1.5 sm:gap-2 md:gap-3 text-left min-h-[100px] sm:min-h-[130px] md:min-h-[150px]">
                  <p className="text-[0.5rem] sm:text-[0.55rem] md:text-[0.6rem] font-semibold uppercase tracking-[0.2em] sm:tracking-[0.25em] md:tracking-[0.3em] text-[#5C5F2E]">
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
                  <FeatureCardImage title={card.title} imagePath={card.imagePath} />
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
                className="pointer-events-auto hidden h-11 w-11 items-center justify-center rounded-full border !border-[#7F9E36] !bg-[#4A6200] text-white shadow-lg transition hover:!bg-[#3E5300] md:flex z-20"
                aria-label="Scroll previous feature"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                type="button"
                onClick={() => handleScroll('next')}
                className="pointer-events-auto hidden h-11 w-11 items-center justify-center rounded-full border !border-[#7F9E36] !bg-[#4A6200] text-white shadow-lg transition hover:!bg-[#3E5300] md:flex z-20"
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
