import React from "react";
import Image from "next/image";
import Link from "next/link";
import { trackButtonClick } from '../utils/analytics';

/** Sloth mascot (minimalist illustration) shown beside the homepage hero. */
export const OASIS_HERO_MASCOT_PATH = "/images/oasis-hero-mascot.webp";

/** Legacy hero image path — kept for any external references; hero no longer renders this asset. */
export const OASIS_HERO_IMAGE_PATH = '/images/Welcome to Oasis.webp';
export const OASIS_HERO_WIDTHS = [320, 384, 480, 640, 828, 1080, 1920];
export const OASIS_HERO_PRELOAD_WIDTH = 640;
export const OASIS_HERO_SIZES =
  '(max-width: 640px) 360px, (max-width: 768px) 680px, (max-width: 1024px) 720px, min(90vw, 1152px)';

export default function ProductSection() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32 product-container">
      <div className="relative mx-auto max-w-6xl px-6 lg:px-10">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between md:gap-8">
          <div className="flex min-w-0 max-w-xl flex-1 flex-col items-start gap-6 text-left lg:max-w-2xl">
            <h1 className="text-4xl font-semibold leading-tight text-[#313A00] sm:text-5xl mb-0 text-balance">
              Relax, you found{' '}
              <span className="underline decoration-[#313A00]/55 underline-offset-[0.18em]">
                the
              </span>{' '}
              Oasis
            </h1>
            <p className="text-lg sm:text-xl text-oasis-green-800 max-w-2xl mb-0 text-pretty leading-relaxed">
              Welcome to the most ergonomic browser user experience on Earth.{' '}
              <br className="hidden sm:block" aria-hidden />
              Use your voice. Use natural language. Let Oasis do the work for you.
            </p>
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
            <p className="text-sm text-oasis-green-800 max-w-xl mt-1 flex flex-wrap items-center justify-start gap-x-2 gap-y-1">
              <Link
                href="/products/oasis-browser"
                onClick={() => trackButtonClick('hero_link_product_details', 'hero_section')}
                className="font-medium text-[#617500] underline decoration-[#617500]/40 underline-offset-2 hover:text-oasis-green-800 hover:decoration-[#495800] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#617500]"
              >
                Product details
              </Link>
              <span className="text-oasis-green-800/50" aria-hidden>
                ·
              </span>
              <Link
                href="/products/oasis-enterprise-browser"
                onClick={() => trackButtonClick('hero_link_enterprise', 'hero_section')}
                className="font-medium text-[#617500] underline decoration-[#617500]/40 underline-offset-2 hover:text-oasis-green-800 hover:decoration-[#495800] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#617500]"
              >
                For IT &amp; teams
              </Link>
            </p>
          </div>
          <div className="flex w-full shrink-0 justify-end pointer-events-none select-none md:w-auto">
            <Image
              src={OASIS_HERO_MASCOT_PATH}
              alt="Oasis sloth mascot sleeping in a hammock between palm trees over calm water, minimalist illustration on a dark background"
              width={280}
              height={280}
              sizes="(max-width: 768px) 220px, (max-width: 1024px) 240px, 280px"
              className="h-auto w-[220px] max-w-[min(90vw,280px)] flex-none object-contain md:w-[280px] md:max-w-none"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
