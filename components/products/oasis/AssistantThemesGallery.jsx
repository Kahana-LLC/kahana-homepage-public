import React, { useMemo, useRef } from 'react';
import { getCloudinaryImageProps, getCloudinaryImageUrl } from '../../../utils/cloudinary-mapper';
import { usePrefersReducedMotion } from '../../solutions/visuals/motion';

const THEME_CARD_WIDTHS = [320, 400, 480, 560, 640, 720];
const THEME_CARD_SIZES =
  '(max-width: 640px) min(calc(100vw - 4rem), 280px), (max-width: 768px) min(70vw, 360px), 480px';

function ThemeScreenshot({ src, alt }) {
  const props = useMemo(
    () =>
      getCloudinaryImageProps(src, {
        widths: THEME_CARD_WIDTHS,
        quality: 'auto:good',
      }),
    [src]
  );

  const fallbackSrc = useMemo(
    () => getCloudinaryImageUrl(src, { width: 640, quality: 'auto:good' }),
    [src]
  );

  if (props.srcSet && props.src) {
    return (
      <img
        src={props.src}
        srcSet={props.srcSet}
        sizes={THEME_CARD_SIZES}
        alt={alt}
        className="block h-full w-full object-contain"
        loading="lazy"
        decoding="async"
      />
    );
  }

  return (
    <img
      src={fallbackSrc}
      alt={alt}
      className="block h-full w-full object-contain"
      loading="lazy"
      decoding="async"
    />
  );
}

export default function AssistantThemesGallery({
  items = [],
  className = '',
  id = 'assistant-themes-gallery',
  edgeFadeFrom = 'from-white',
  edgeFadeVia = 'via-white/70',
}) {
  const carouselRef = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  if (!items.length) return null;

  const handleScroll = (direction) => {
    if (!carouselRef.current) return;
    const scrollAmount = carouselRef.current.offsetWidth * 0.75;
    carouselRef.current.scrollBy({
      left: direction === 'next' ? scrollAmount : -scrollAmount,
      behavior: prefersReducedMotion ? 'auto' : 'smooth',
    });
  };

  return (
    <div className={`relative w-full overflow-x-hidden ${className}`} id={id}>
      <div className="md:hidden absolute -top-6 right-0 z-10 flex items-center gap-1 text-xs text-oasis-green-800/60">
          <span>Swipe</span>
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>

      <div
        ref={carouselRef}
        className="assistant-themes-carousel flex gap-4 overflow-x-auto scroll-smooth pb-4 snap-x snap-mandatory md:snap-none md:overflow-x-hidden px-1"
        style={{
          WebkitOverflowScrolling: 'touch',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
        }}
        role="list"
        aria-label="Assistant theme screenshots"
      >
        <style jsx global>{`
          .assistant-themes-carousel {
            overflow-y: hidden !important;
          }
          @media (max-width: 767px) {
            .assistant-themes-carousel {
              overflow-x: auto !important;
              touch-action: pan-x !important;
            }
          }
          @media (min-width: 768px) {
            .assistant-themes-carousel {
              overflow-x: hidden !important;
              touch-action: none !important;
            }
          }
          .assistant-themes-carousel::-webkit-scrollbar {
            display: none !important;
          }
        `}</style>

        {items.map((item) => (
          <div
            key={item.id}
            role="listitem"
            className="flex-shrink-0 snap-center md:snap-start w-[min(calc(100vw-4rem),280px)] sm:w-[min(70vw,360px)] md:w-[480px]"
          >
            <div className="overflow-hidden rounded-xl border border-oasis-green-800/12 bg-oasis-green-50/50 shadow-md">
              <div className="aspect-[16/10] w-full">
                <ThemeScreenshot src={item.src} alt={item.alt} />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className={`pointer-events-none absolute inset-y-0 left-0 hidden w-10 bg-gradient-to-r ${edgeFadeFrom} ${edgeFadeVia} to-transparent md:block`} />
      <div className={`pointer-events-none absolute inset-y-0 right-0 hidden w-10 bg-gradient-to-l ${edgeFadeFrom} ${edgeFadeVia} to-transparent md:block`} />
      <div className="pointer-events-none absolute inset-x-0 top-1/2 flex -translate-y-1/2 justify-between px-1">
        <button
          type="button"
          onClick={() => handleScroll('prev')}
          className="pointer-events-auto hidden h-10 w-10 items-center justify-center rounded-full border border-[#7F9E36] bg-[#4A6200] text-white shadow-lg transition hover:bg-[#3E5300] md:flex"
          aria-label="Scroll to previous theme screenshot"
        >
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          type="button"
          onClick={() => handleScroll('next')}
          className="pointer-events-auto hidden h-10 w-10 items-center justify-center rounded-full border border-[#7F9E36] bg-[#4A6200] text-white shadow-lg transition hover:bg-[#3E5300] md:flex ml-auto"
          aria-label="Scroll to next theme screenshot"
        >
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}
