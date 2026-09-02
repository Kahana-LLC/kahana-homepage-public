import React from "react";
import Link from "next/link";
import WallOfLove from "../testimonials/WallOfLove";
import { trackButtonClick } from "../../utils/analytics";

export default function HomeTestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="relative overflow-hidden py-24 sm:py-32"
    >
      <div className="pointer-events-none absolute inset-0 hidden lg:block">
        <div className="absolute top-[-15%] left-[-10%] h-[520px] w-[720px] rounded-full bg-[#FCDD9F]/22 blur-[220px] md:blur-[360px] opacity-70" />
        <div className="absolute bottom-[-20%] right-[-12%] h-[480px] w-[680px] rounded-full bg-[#8BA500]/14 blur-[200px] md:blur-[340px] opacity-65" />
      </div>
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-[#8A6622]">
            Testimonials
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-[#3B2F1A] sm:text-4xl">
            Built for people who take privacy seriously
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-[#3B2F1A]/75">
            Real stories from Oasis users on productivity, transparency, and a browser
            experience that finally feels right.
          </p>
        </div>
        <div className="mt-12">
          <WallOfLove variant="preview" />
        </div>
        <div className="mt-10 text-center">
          <Link
            href="/testimonials"
            onClick={() =>
              trackButtonClick("testimonials_read_more", "home_testimonials")
            }
            className="btn-primary inline-flex items-center justify-center px-6 py-3 text-base font-bold no-underline hover:no-underline focus:no-underline rounded-[27.5px]"
          >
            Read all testimonials
          </Link>
        </div>
      </div>
    </section>
  );
}
