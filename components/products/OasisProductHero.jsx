import React from 'react';
import Link from 'next/link';

export default function OasisProductHero({
  eyebrow,
  title,
  description,
  primaryHref = '/schedule-demo',
  primaryLabel = 'Schedule a demo',
  secondaryHref = '/contact',
  secondaryLabel = 'Get in touch',
}) {
  return (
    <section className="bg-gradient-to-b from-oasis-blue-100/20 via-oasis-blue-300/10 to-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold leading-7 text-brand-link mb-3">{eyebrow}</h2>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-oasis-green-800 mb-6 break-words">{title}</h1>
          <p className="text-lg sm:text-xl text-oasis-green-800 max-w-3xl mx-auto mb-8 break-words leading-relaxed">
            {description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href={primaryHref}
              className="btn-primary inline-flex items-center justify-center px-6 py-3 text-base no-underline hover:no-underline focus:no-underline"
            >
              {primaryLabel}
            </Link>
            <Link
              href={secondaryHref}
              className="btn-secondary inline-flex items-center justify-center px-6 py-3 text-base no-underline hover:no-underline focus:no-underline"
            >
              {secondaryLabel}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
