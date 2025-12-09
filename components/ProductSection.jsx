import React from "react";
import Link from "next/link";
import { getCloudinaryImageUrl } from '../utils/cloudinary-mapper';

export default function ProductSection() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32 product-container">
      <div className="relative mx-auto max-w-5xl px-6 lg:px-10 text-center">
        <div className="flex flex-col items-center gap-8">
          <div className="flex flex-col items-center gap-6 max-w-3xl">
            <h2 className="text-xl font-semibold leading-8 text-[#978455] mb-2">
              Fall in Love
            </h2>
            <h1 className="text-4xl font-semibold leading-tight text-[#313A00] sm:text-5xl">
              Meet Oasis, the Most Elegant Browser
            </h1>
            <p className="text-lg text-[#4A5745] max-w-2xl">
              Enjoy a beautiful browsing experience designed for ergonomic work
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/schedule-demo"
                className="btn-primary inline-flex items-center justify-center px-8 py-3 text-base no-underline hover:no-underline focus:no-underline"
              >
                Schedule Demo
              </Link>
              <Link
                href="/oasis-waitlist"
                className="btn-secondary inline-flex items-center justify-center px-8 py-3 text-base no-underline hover:no-underline focus:no-underline"
              >
                Get early access
              </Link>
            </div>
          </div>

          {/* Image container with fixed aspect ratio to prevent CLS */}
          <div className="relative w-full max-w-3xl">
            <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-[34px] bg-gradient-to-br from-white/70 to-transparent blur-[160px]" />
            <div className="relative overflow-hidden rounded-[36px] border border-white/80 bg-white/80 p-4 shadow-[0_35px_120px_rgba(20,32,0,0.18)] backdrop-blur">
              <div className="relative w-full aspect-[16/10] rounded-[28px] overflow-hidden bg-gray-100">
                <img
                  src={getCloudinaryImageUrl("/images/Welcome to Oasis.webp")}
                  alt="Welcome to Oasis"
                  className="w-full h-full object-contain rounded-[28px]"
                  loading="lazy"
                  fetchPriority="high"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}