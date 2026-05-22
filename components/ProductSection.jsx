import React from "react";
import Image from "next/image";
import Link from "next/link";
import { trackButtonClick } from '../utils/analytics';

/** Sloth mascot (minimalist illustration) shown beside the homepage hero. */
export const OASIS_HERO_MASCOT_PATH = "/images/oasis-hero-mascot.webp";
/** Smaller asset for narrow viewports — faster LCP on mobile / Slow 4G. */
export const OASIS_HERO_MASCOT_PATH_SM = "/images/oasis-hero-mascot-sm.webp";

/** Legacy hero image path — kept for any external references; hero no longer renders this asset. */
export const OASIS_HERO_IMAGE_PATH = '/images/Welcome to Oasis.webp';
export const OASIS_HERO_WIDTHS = [320, 384, 480, 640, 828, 1080, 1920];
export const OASIS_HERO_PRELOAD_WIDTH = 640;
export const OASIS_HERO_SIZES =
  '(max-width: 640px) 360px, (max-width: 768px) 680px, (max-width: 1024px) 720px, min(90vw, 1152px)';

function RefugeHutIcon({ className }) {
  return (
    <svg
      aria-hidden
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 20h16" />
      <path d="M12 3.5 20 12H4l8-8.5z" />
      <path d="M10 20v-5h4v5" />
    </svg>
  );
}

export default function ProductSection() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32 product-container">
      <div className="relative mx-auto max-w-6xl px-6 lg:px-10">
        {/* items-start + reserved mascot column prevents CLS when the image paints */}
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between md:gap-8">
          <div className="flex min-w-0 max-w-xl flex-1 flex-col items-start gap-6 text-left lg:max-w-2xl">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[#617500]/25 bg-[#F2F4E5] px-3 py-1 text-xs font-semibold tracking-wide text-[#617500] sm:text-sm">
              <RefugeHutIcon className="h-3.5 w-3.5 shrink-0 sm:h-4 sm:w-4" />
              Your online refuge
            </span>
            <h1 className="text-4xl font-semibold leading-tight text-[#313A00] sm:text-5xl mb-0 text-balance">
              Relaaax, you found{' '}
              <span className="underline decoration-[#313A00]/55 underline-offset-[0.18em]">
                the
              </span>{' '}
              Oasis
            </h1>
            <p className="text-lg sm:text-xl text-oasis-green-800 max-w-2xl mb-0 text-pretty leading-relaxed">
              Fall in love with the privacy-first ai browser that you can train. Your personal data is sacred. By default,
              all interaction data is anonymized. 
            </p>
            <Link
              href="/#data-transparency"
              onClick={() => trackButtonClick("hero_data_transparency", "hero_section")}
              className="block text-sm font-semibold text-brand-link underline decoration-brand-link/40 underline-offset-2 hover:text-oasis-green-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#617500]"
            >
              See exactly what we collect
            </Link>
            <div className="hero-cta-buttons flex flex-row flex-wrap items-center justify-start gap-4">
              <Link
                href="/oasis-pricing"
                onClick={() => trackButtonClick('oasis_download', 'hero_section')}
                className="btn-primary inline-flex items-center justify-center whitespace-nowrap no-underline hover:no-underline focus:no-underline shrink-0"
              >
                Download
              </Link>
              <Link
                href="/schedule-demo"
                onClick={() => trackButtonClick('hero_schedule_demo', 'hero_section')}
                className="btn-secondary inline-flex items-center justify-center whitespace-nowrap no-underline hover:no-underline focus:no-underline shrink-0"
              >
                Schedule a demo
              </Link>
            </div>
          </div>
          <div className="flex w-full shrink-0 justify-end pointer-events-none select-none md:w-auto">
            <div
              className="flex w-[180px] max-w-[min(88vw,260px)] flex-none items-center justify-center md:w-[220px] lg:w-[260px] md:max-w-none aspect-square"
              aria-hidden
            >
              {/* Mobile: small file for LCP. md+: full-resolution asset. */}
              <div className="relative h-full w-full md:hidden">
                <Image
                  src={OASIS_HERO_MASCOT_PATH_SM}
                  alt="Oasis sloth mascot sleeping in a hammock between palm trees over calm water, minimalist illustration on a dark background"
                  width={220}
                  height={220}
                  sizes="180px"
                  className="h-full w-full object-contain"
                  quality={68}
                  priority
                  fetchPriority="high"
                />
              </div>
              <div className="relative hidden h-full w-full md:block">
                <Image
                  src={OASIS_HERO_MASCOT_PATH}
                  alt="Oasis sloth mascot sleeping in a hammock between palm trees over calm water, minimalist illustration on a dark background"
                  width={260}
                  height={260}
                  sizes="(max-width: 1024px) 220px, 260px"
                  className="h-full w-full object-contain"
                  quality={60}
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
