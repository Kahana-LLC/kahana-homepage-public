import React from 'react';
import Link from 'next/link';
import SEO from '../components/SEO';
import PressInquiriesTally from '../components/PressInquiriesTally';
import ExternalReviewerAttribution from '../components/reviews/ExternalReviewerAttribution';
import { YTC_OASIS_REVIEW } from '../data/oasis-external-reviews';

const hubLinks = [
  {
    title: 'Press kit',
    description: 'Official logos, brand colors, leadership photography, and usage notes for accurate coverage.',
    href: '/press-kit',
    cta: 'Open press kit',
  },
  {
    title: 'Press releases',
    description: 'Official Kahana announcements and statements (separate from our blog).',
    href: '/press-releases',
    cta: 'View releases',
  },
  {
    title: 'Contact',
    description: 'General company inquiries and demo requests.',
    href: 'https://kahana.io/contact',
    cta: 'Contact us',
  },
];

export default function PressPage() {
  return (
    <>
      <SEO
        title="Press & Media"
        description="Press kit, official press releases, and media contact information for Kahana."
        url="https://kahana.io/press"
        type="website"
      />

      <div className="min-h-screen bg-[#F7F3EA]">
        <section className="border-b border-oasis-green-100 bg-gradient-to-br from-oasis-green-50 via-white to-oasis-blue-50">
          <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
            <p className="text-sm font-semibold uppercase tracking-wide text-oasis-green-600">Media</p>
            <h1 className="mt-2 text-4xl font-bold tracking-tight text-oasis-green-900 sm:text-5xl">Press &amp; Media</h1>
            <p className="mt-4 max-w-2xl text-lg text-oasis-green-800">
              Resources and contacts for journalists, analysts, and partners covering Kahana.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">

          <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {hubLinks.map((item) => (
              <li key={item.href} className="flex flex-col rounded-xl border border-oasis-green-100 bg-oasis-green-50/40 p-6 shadow-sm">
                <h2 className="text-xl font-semibold text-oasis-green-900">{item.title}</h2>
                <p className="mt-2 flex-1 text-sm text-oasis-green-800">{item.description}</p>
                <Link href={item.href} className="mt-6 inline-flex text-sm font-semibold text-oasis-green-700 hover:text-oasis-green-900">
                  {item.cta}
                  <span aria-hidden className="ml-1">
                    →
                  </span>
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-16 rounded-xl border border-oasis-green-100 bg-oasis-green-50/40 p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-oasis-green-900">Third-party coverage</h2>
            <p className="mt-2 text-oasis-green-800">
              Independent reviews and analysis from publications outside Kahana.
            </p>
            <ul className="mt-8 space-y-6">
              <li className="rounded-xl border border-oasis-green-100 bg-white p-6">
                <ExternalReviewerAttribution variant="full" className="mb-6" />
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-oasis-green-600">
                      {YTC_OASIS_REVIEW.publication}
                    </p>
                    <h3 className="mt-1 text-lg font-semibold text-oasis-green-900">{YTC_OASIS_REVIEW.reviewTitle}</h3>
                    <p className="mt-2 text-sm text-oasis-green-800">
                      {YTC_OASIS_REVIEW.excerpt}
                    </p>
                    <p className="mt-3 text-xs text-oasis-green-700">
                      {YTC_OASIS_REVIEW.scoreSystemName}: {YTC_OASIS_REVIEW.score}/{YTC_OASIS_REVIEW.scoreMax} (
                      {YTC_OASIS_REVIEW.scoreLabel}) · Reviewed {YTC_OASIS_REVIEW.reviewedAt}
                    </p>
                    <p className="mt-2 text-xs text-oasis-green-700/90">{YTC_OASIS_REVIEW.independenceNote}</p>
                  </div>
                  <p className="shrink-0 rounded-lg bg-oasis-green-50 px-4 py-3 text-center text-2xl font-bold text-oasis-green-900">
                    {YTC_OASIS_REVIEW.score}
                    <span className="text-sm font-semibold text-oasis-green-700">/{YTC_OASIS_REVIEW.scoreMax}</span>
                  </p>
                </div>
                <div className="mt-5 flex flex-wrap gap-4 text-sm font-semibold">
                  <a
                    href={YTC_OASIS_REVIEW.reviewUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-oasis-green-700 hover:text-oasis-green-900"
                  >
                    Read full review →
                  </a>
                  <a
                    href={YTC_OASIS_REVIEW.methodologyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-oasis-green-700 hover:text-oasis-green-900"
                  >
                    Review methodology →
                  </a>
                  <Link href="/oasis-pricing" className="text-oasis-green-700 hover:text-oasis-green-900">
                    Pricing &amp; download →
                  </Link>
                  <Link href="/installations" className="text-oasis-green-700 hover:text-oasis-green-900">
                    Installations →
                  </Link>
                  <Link href="/press-kit" className="text-oasis-green-700 hover:text-oasis-green-900">
                    Press kit →
                  </Link>
                </div>
              </li>
            </ul>
          </div>

          <div id="press-inquiries" className="mt-16 rounded-xl border border-oasis-green-100 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-oasis-green-900">Press inquiries</h2>
            <p className="mt-2 text-oasis-green-800">
              For interview requests, fact-checking, and media-specific questions, use the form below.
            </p>
            <div className="mt-6">
              <PressInquiriesTally iframeTitle="Press inquiries" minHeight={640} />
            </div>
            <p className="mt-4 text-sm text-oasis-green-700">We aim to reply within one business day.</p>
          </div>
        </section>
      </div>
    </>
  );
}
