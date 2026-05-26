import React, { useCallback, useEffect, useRef, useState } from "react";
import TestimonialCard from "./TestimonialCard";
import { usePrefersReducedMotion } from "../solutions/visuals/motion";

function getSlidesPerView(variant, isLargeScreen) {
  if (variant === "preview" && isLargeScreen) return 3;
  return 1;
}

export default function WallOfLoveCarousel({
  testimonials,
  variant = "preview",
  id = "wall-of-love-carousel",
}) {
  const carouselRef = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();
  const cardVariant = variant === "preview" ? "preview" : "full";
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  const [activePage, setActivePage] = useState(0);

  const slidesPerView = getSlidesPerView(variant, isLargeScreen);
  const pageCount = Math.max(
    1,
    Math.ceil(testimonials.length / slidesPerView)
  );

  useEffect(() => {
    const media = window.matchMedia("(min-width: 1024px)");
    const update = () => setIsLargeScreen(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  const scrollToPage = useCallback(
    (pageIndex) => {
      const track = carouselRef.current;
      if (!track) return;
      const clamped = Math.max(0, Math.min(pageIndex, pageCount - 1));
      track.scrollTo({
        left: clamped * track.offsetWidth,
        behavior: prefersReducedMotion ? "auto" : "smooth",
      });
      setActivePage(clamped);
    },
    [pageCount, prefersReducedMotion]
  );

  const handleScroll = (direction) => {
    const next =
      direction === "next"
        ? Math.min(activePage + 1, pageCount - 1)
        : Math.max(activePage - 1, 0);
    scrollToPage(next);
  };

  useEffect(() => {
    const track = carouselRef.current;
    if (!track) return;

    const onScroll = () => {
      const width = track.offsetWidth;
      if (!width) return;
      const page = Math.round(track.scrollLeft / width);
      setActivePage(Math.max(0, Math.min(page, pageCount - 1)));
    };

    track.addEventListener("scroll", onScroll, { passive: true });
    return () => track.removeEventListener("scroll", onScroll);
  }, [pageCount]);

  useEffect(() => {
    setActivePage((prev) => Math.min(prev, pageCount - 1));
  }, [pageCount]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const hash = window.location.hash.replace(/^#/, "");
    if (!hash) return;

    const index = testimonials.findIndex((t) => t.id === hash);
    if (index < 0) return;

    const page = Math.floor(index / slidesPerView);
    const track = carouselRef.current;
    if (!track) return;

    requestAnimationFrame(() => {
      track.scrollTo({ left: page * track.offsetWidth, behavior: "auto" });
      setActivePage(page);
      const el = document.getElementById(hash);
      if (el) {
        el.scrollIntoView({ behavior: prefersReducedMotion ? "auto" : "smooth", block: "nearest" });
      }
    });
  }, [testimonials, slidesPerView, prefersReducedMotion]);

  if (!testimonials.length) return null;

  const isSingleSlide = slidesPerView === 1;
  const slideClass = isSingleSlide
    ? "min-w-full w-full flex-shrink-0 snap-center"
    : "min-w-full w-full flex-shrink-0 snap-center lg:min-w-[calc((100%-3rem)/3)] lg:w-[calc((100%-3rem)/3)]";

  return (
    <div className="relative w-full overflow-x-hidden" id={id}>
      {isSingleSlide && (
        <div className="absolute -top-6 right-0 z-10 flex items-center gap-1 text-xs text-[#30400D]/60 md:hidden">
          <span>Swipe</span>
          <svg
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      )}

      <div
        ref={carouselRef}
        className="wall-of-love-carousel flex gap-6 overflow-x-auto scroll-smooth pb-2 snap-x snap-mandatory lg:snap-none lg:overflow-x-hidden"
        style={{
          WebkitOverflowScrolling: "touch",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
        role="region"
        aria-label="Oasis user testimonials"
        tabIndex={0}
      >
        <style jsx global>{`
          .wall-of-love-carousel {
            overflow-y: hidden !important;
          }
          @media (max-width: 1023px) {
            .wall-of-love-carousel {
              overflow-x: auto !important;
              touch-action: pan-x !important;
            }
          }
          @media (min-width: 1024px) {
            .wall-of-love-carousel {
              overflow-x: hidden !important;
              touch-action: none !important;
            }
          }
          .wall-of-love-carousel::-webkit-scrollbar {
            display: none !important;
          }
        `}</style>

        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className={slideClass}>
            <TestimonialCard
              testimonial={testimonial}
              variant={cardVariant}
              anchorId={cardVariant === "full" ? testimonial.id : undefined}
            />
          </div>
        ))}
      </div>

      <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-10 bg-gradient-to-r from-white via-white/70 to-transparent lg:block" />
      <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-10 bg-gradient-to-l from-white via-white/70 to-transparent lg:block" />

      <div className="pointer-events-none absolute inset-x-0 top-1/2 flex -translate-y-1/2 justify-between px-1">
        <button
          type="button"
          onClick={() => handleScroll("prev")}
          disabled={activePage === 0}
          className="pointer-events-auto hidden h-10 w-10 items-center justify-center rounded-full border border-[#7F9E36] bg-[#4A6200] text-white shadow-lg transition hover:bg-[#3E5300] disabled:cursor-not-allowed disabled:opacity-40 lg:flex"
          aria-label="Previous testimonials"
        >
          <svg
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button
          type="button"
          onClick={() => handleScroll("next")}
          disabled={activePage >= pageCount - 1}
          className="pointer-events-auto ml-auto hidden h-10 w-10 items-center justify-center rounded-full border border-[#7F9E36] bg-[#4A6200] text-white shadow-lg transition hover:bg-[#3E5300] disabled:cursor-not-allowed disabled:opacity-40 lg:flex"
          aria-label="Next testimonials"
        >
          <svg
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>

      {pageCount > 1 && (
        <div
          className="mt-8 flex justify-center gap-2"
          role="tablist"
          aria-label="Testimonial pages"
        >
          {Array.from({ length: pageCount }, (_, i) => (
            <button
              key={i}
              type="button"
              role="tab"
              aria-selected={activePage === i}
              aria-current={activePage === i ? "true" : undefined}
              aria-label={`Go to testimonial page ${i + 1} of ${pageCount}`}
              onClick={() => scrollToPage(i)}
              className={`h-2.5 rounded-full transition-all ${
                activePage === i
                  ? "w-8 bg-[#617500]"
                  : "w-2.5 bg-[#30400D]/25 hover:bg-[#30400D]/40"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
