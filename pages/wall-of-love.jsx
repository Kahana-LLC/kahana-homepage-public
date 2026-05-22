import React from "react";
import Link from "next/link";
import SEO from "../components/SEO";
import WallOfLove from "../components/testimonials/WallOfLove";
import DownloadOasisLink from "../components/buttons/DownloadOasisLink";

export default function WallOfLovePage() {
  return (
    <>
      <SEO
        title="Wall of Love"
        description="Stories from Oasis users on privacy-first browsing, no ads, integrated AI, and a browser experience built with transparency in mind."
        url="https://kahana.co/wall-of-love"
        type="website"
      />

      <main className="min-h-screen bg-white pt-24 pb-16">
        <section className="border-b border-[#30400D]/10 bg-gradient-to-br from-[#30400D] via-[#3d5210] to-[#617500] text-white">
          <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#FCDD9F]/90">
              Wall of Love
            </p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              What people are saying about Oasis
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-white/85">
              Unfiltered feedback from people who use Oasis every day—for privacy, productivity,
              and a calmer way to browse.
            </p>
          </div>
        </section>

        <section className="relative overflow-hidden py-16 sm:py-24">
          <div className="pointer-events-none absolute inset-0 hidden lg:block">
            <div className="absolute top-[-10%] right-[-15%] h-[400px] w-[600px] rounded-full bg-[#8BA500]/10 blur-[280px]" />
            <div className="absolute bottom-[-15%] left-[-10%] h-[380px] w-[560px] rounded-full bg-[#FCDD9F]/15 blur-[260px]" />
          </div>
          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <WallOfLove variant="page" />
          </div>
        </section>

        <section className="border-t border-[#30400D]/10 bg-[#FAFCF7]/80 py-14">
          <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 px-4 text-center sm:px-6 lg:px-8">
            <p className="text-lg text-[#30400D]/80">
              Ready to see why people are switching?
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <DownloadOasisLink />
              <Link
                href="/products/oasis-browser"
                className="btn-secondary inline-flex items-center justify-center px-6 py-3 text-base font-bold no-underline hover:no-underline focus:no-underline rounded-[27.5px]"
              >
                Product details
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
