import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import SEO from '../components/SEO';
import SharedCTA from '../components/SharedCTA';
import TeamGallery from '../components/TeamGallery';
import { getCloudinaryImageUrl } from '../utils/cloudinary-mapper';

const ADAM_HEADSHOT_URL = getCloudinaryImageUrl('/assets/headshots/adam_kershner.jpg', {
  width: 800,
  height: 800,
  quality: 'auto:good',
});

export default function Team() {
  return (
    <>
      <SEO
        title="Team | Aura Library"
        description="Meet the people building Oasis: a managed enterprise browser that puts governance where work happens in the browser."
        url="https://kahana.io/team"
        type="website"
      />

      <div className="relative bg-white">
        <div className="mx-auto max-w-7xl px-4 pb-16 pt-10 sm:px-6 sm:pb-24 lg:px-8 lg:pt-16">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wide text-oasis-green-600">Aura Library</p>
            <h1 className="mt-2 bg-gradient-to-r from-oasis-green-600 to-oasis-green-500 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl">
              Team
            </h1>
            <p className="mt-4 text-lg text-oasis-green-800 sm:text-xl">
              We are building Oasis so enterprises can govern SaaS and browser sessions with less friction. Here is who is
              leading the company today.
            </p>
            <p className="mt-6 text-base text-oasis-green-800">
              <Link
                href="/about"
                className="font-semibold text-brand-link underline decoration-brand-link/40 underline-offset-2 hover:text-oasis-green-800"
              >
                About Oasis
              </Link>
              <span className="text-oasis-green-800/50" aria-hidden>
                {' '}
                ·{' '}
              </span>
              <Link
                href="/careers"
                className="font-semibold text-brand-link underline decoration-brand-link/40 underline-offset-2 hover:text-oasis-green-800"
              >
                Careers
              </Link>
            </p>
          </div>
        </div>
      </div>

      <section className="border-b border-oasis-green-600/10 bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-oasis-green-800 sm:text-4xl">Founder Story</h2>
          <div className="mt-10 grid gap-10 md:grid-cols-[minmax(0,320px)_1fr] md:items-start md:gap-12">
            <div className="flex justify-center md:justify-start">
              <Image
                src={ADAM_HEADSHOT_URL}
                alt="Adam Kershner, CEO and Founder of Oasis"
                width={1024}
                height={1024}
                className="h-auto w-full max-w-[280px] rounded-2xl border border-oasis-green-600/20 object-cover shadow-sm md:max-w-[320px]"
                sizes="(max-width: 768px) 280px, 320px"
              />
            </div>
            <div>
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-2">
                <p className="text-lg font-semibold text-oasis-green-800">Adam Kershner</p>
                <a
                  href="https://www.linkedin.com/in/adam-kershner/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-oasis-green-700/70 no-underline transition-colors hover:text-oasis-green-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#617500]"
                  aria-label="Adam Kershner on LinkedIn (opens in a new tab)"
                >
                  <svg className="h-4 w-4 shrink-0 opacity-80" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                  <span className="border-b border-oasis-green-700/25 pb-px hover:border-oasis-green-800/40">LinkedIn</span>
                </a>
              </div>
              <p className="mt-1 text-sm font-medium text-oasis-green-600">CEO &amp; Founder</p>
              <p className="mt-6 text-base text-oasis-green-800 leading-relaxed">
                Adam built his career inside IT teams at a billion-dollar CPG company, where he first witnessed how
                quickly security gaps compound when the tools people rely on aren&apos;t built with security in mind.
              </p>
              <blockquote className="mt-6 border-l-4 border-oasis-green-600/35 bg-oasis-green-50/60 py-5 pl-5 pr-4 rounded-r-lg text-oasis-green-800 antialiased">
                <div className="space-y-3.5 text-[0.9375rem] sm:text-[0.96875rem] leading-[1.65] italic font-normal">
                  <p>
                    I&apos;ll never forget the first time I saw a company get hacked and held hostage from the inside.
                    Training and leadership commitment help, but they are not enough.
                  </p>
                  <p>
                    Hackers are unpredictable, and exploitation keeps getting more advanced, especially in the age of
                    AI. We are all human, and human error is still a common root cause of breaches. I have a healthy
                    respect and fear of what capable attackers can do. We are in a long fight against a sophisticated
                    adversary. Security has to stay proactive, and we cannot afford complacency.
                  </p>
                  <p>
                    That mindset led me to build products that help creators monetize with stronger protection against
                    piracy and unauthorized redistribution of premium content.
                  </p>
                  <p>
                    Today I am focused on Oasis: a managed enterprise browser for how modern organizations access
                    software. Instead of treating device ownership as the only control layer, Oasis puts governance in
                    the browser, where work actually happens.
                  </p>
                </div>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-oasis-green-600/10 bg-oasis-green-50/30 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <TeamGallery />
        </div>
      </section>

      <section className="border-b border-oasis-green-600/10 bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        </div>
      </section>

      <SharedCTA
        title="Join us"
        description="We are building Oasis with people who care about security, browsers, and great product craft. See how you can contribute on our careers page."
        buttonText="View careers"
        buttonLink="/careers"
        className="!bg-oasis-green-50 border-t border-oasis-green-800/8"
      />
    </>
  );
}
