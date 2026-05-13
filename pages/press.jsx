import React from 'react';
import Link from 'next/link';
import SEO from '../components/SEO';
import PressInquiriesTally from '../components/PressInquiriesTally';

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
    href: '/contact',
    cta: 'Contact us',
  },
];

export default function PressPage() {
  return (
    <>
      <SEO
        title="Press & Media"
        description="Press kit, official press releases, and media contact information for Kahana."
        url="https://kahana.co/press"
        type="website"
      />

      <div className="min-h-screen bg-white">
        <section className="border-b border-oasis-green-100 bg-gradient-to-br from-oasis-green-800 via-oasis-green-900 to-oasis-green-950 text-white">
          <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Press &amp; Media</h1>
            <p className="mt-4 max-w-2xl text-lg text-oasis-green-100">
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
