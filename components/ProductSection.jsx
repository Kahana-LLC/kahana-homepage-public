import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { getCloudinaryImageProps } from '../utils/cloudinary-mapper';
import { trackButtonClick } from '../utils/analytics';

const HERO_SIZES = '(max-width: 640px) 100vw, (max-width: 768px) 90vw, (max-width: 1024px) 80vw, 1200px';
const HERO_WIDTHS = [640, 828, 1080, 1200, 1920];

function HeroImage() {
  const heroProps = getCloudinaryImageProps('/images/Welcome to Oasis.webp', {
    widths: HERO_WIDTHS,
    width: 1200,
    quality: 'auto:good',
  });
  if (heroProps.srcSet && heroProps.src) {
    return (
      <img
        src={heroProps.src}
        srcSet={heroProps.srcSet}
        sizes={HERO_SIZES}
        alt="Welcome to Oasis"
        className="object-contain w-full h-full"
        fetchPriority="high"
        decoding="async"
      />
    );
  }
  return (
    <Image
      src={heroProps.src || '/images/Welcome to Oasis.webp'}
      alt="Welcome to Oasis"
      fill
      priority
      sizes={HERO_SIZES}
      className="object-contain"
      quality={90}
    />
  );
}

export default function ProductSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger fade-in after component mounts
    setIsVisible(true);
  }, []);

  return (
    <section className="relative overflow-hidden py-24 sm:py-32 product-container">
      <div className="relative mx-auto max-w-5xl px-6 lg:px-10 text-center">
        <div className="flex flex-col items-center gap-8">
          <div className="flex flex-col items-center gap-6 max-w-3xl">
            <h1 className="text-4xl font-semibold leading-tight text-[#313A00] sm:text-5xl mb-2">
              Meet Oasis, the Most Elegant Browser
            </h1>
            <h2 className="text-xl font-semibold leading-8 text-[#978455]">
              Fall in Love
            </h2>
            <p className="text-lg text-[#4A5745] max-w-2xl">
              Enjoy a beautiful browsing experience designed for ergonomic work
            </p>
            <div className="hero-cta-buttons flex flex-row flex-nowrap items-center justify-center gap-4 sm:gap-[3.5rem]">
              <Link
                href="/oasis-pricing"
                onClick={() => trackButtonClick('get_instant_access', 'hero_section')}
                className="btn-primary inline-flex items-center justify-center px-4 sm:px-8 py-2 sm:py-3 text-xs sm:text-base whitespace-nowrap no-underline hover:no-underline focus:no-underline rounded-[27.5px] font-bold scale-100 sm:scale-125 shrink-0"
              >
                Get Instant Access
              </Link>
              <button
                type="button"
                onClick={() => {
                  const el = document.querySelector('.get-started-section');
                  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
                className="btn-secondary inline-flex items-center justify-center px-4 sm:px-8 py-2 sm:py-3 text-xs sm:text-base whitespace-nowrap no-underline hover:no-underline focus:no-underline rounded-[27.5px] font-bold scale-100 sm:scale-125 shrink-0"
              >
                Watch 4‑min overview
              </button>
            </div>
          </div>

          <div className={`relative w-full max-w-3xl transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-[34px] bg-gradient-to-br from-white/70 to-transparent blur-[160px]" />
            <div className="relative overflow-hidden rounded-[36px] border border-white/80 bg-white/80 p-4 shadow-[0_35px_120px_rgba(20,32,0,0.18)] backdrop-blur">
              <div className="relative w-full aspect-[16/10] rounded-[28px] overflow-hidden">
                <HeroImage />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}