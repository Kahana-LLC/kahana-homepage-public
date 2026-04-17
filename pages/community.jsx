import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';

const steps = [
  {
    id: 1,
    name: 'Read and follow along',
    description: 'The blog and docs are the best place to learn how Oasis works and what we ship next.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
  {
    id: 2,
    name: 'Get help when you need it',
    description: 'Support and contact routes go straight to our team for product questions and account help.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
  },
  {
    id: 3,
    name: 'Stay in the loop',
    description: 'Follow releases and guidance on the blog; use docs for step-by-step product detail.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    id: 4,
    name: 'Share feedback',
    description: 'Product feedback helps us prioritize. Reach out via contact or the feedback survey linked in the footer.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
      </svg>
    ),
  },
];

const supportLinks = [
  {
    name: 'Community Guidelines',
    description: 'How we expect people to engage respectfully around Kahana and Oasis.',
    href: '/community-guidelines',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    name: 'FAQ',
    description: 'Common questions about the Kahana community and programs.',
    href: '/community-faq',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    name: 'Contact Us',
    description: 'Get in touch with our team for support.',
    href: '/contact',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
];

function ConnectCard() {
  return (
    <div className="rounded-2xl border border-oasis-green-800/15 bg-gradient-to-br from-oasis-green-50 to-white p-8 shadow-lg">
      <h2 className="text-xl font-bold text-oasis-green-900 mb-2">Connect with Kahana</h2>
      <p className="text-oasis-green-800 text-sm leading-relaxed mb-6">
        Use the channels below for documentation, updates, and direct help from the team.
      </p>
      <ul className="space-y-3">
        <li>
          <Link
            href="/blog"
            className="flex w-full items-center justify-center rounded-xl bg-[#4A6200] px-4 py-3 text-sm font-semibold text-white no-underline hover:opacity-95"
          >
            Visit the blog
          </Link>
        </li>
        <li>
          <Link
            href="/docs"
            className="flex w-full items-center justify-center rounded-xl border-2 border-[#4A6200] px-4 py-3 text-sm font-semibold text-[#4A6200] no-underline hover:bg-oasis-green-50"
          >
            Browse documentation
          </Link>
        </li>
        <li>
          <Link
            href="/support"
            className="flex w-full items-center justify-center rounded-xl border-2 border-[#4A6200] px-4 py-3 text-sm font-semibold text-[#4A6200] no-underline hover:bg-oasis-green-50"
          >
            Support
          </Link>
        </li>
        <li>
          <Link
            href="/contact"
            className="flex w-full items-center justify-center rounded-xl border-2 border-brand-link px-4 py-3 text-sm font-semibold text-[#0d3d3a] no-underline hover:bg-brand-link/10"
          >
            Contact us
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default function Community() {
  const [hoveredStep, setHoveredStep] = useState(0);

  return (
    <>
      <Head>
        <title>Community | Kahana</title>
        <meta
          name="description"
          content="Connect with Kahana through our blog, documentation, support, and contact channels."
        />
      </Head>

      <main className="min-h-screen bg-white pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <div className="text-center lg:text-left mb-12">
                <h2 className="text-base font-semibold leading-7 text-brand-link mb-3">Community</h2>
                <h1 className="text-4xl font-bold text-oasis-green-900 sm:text-5xl">Stay close to the product</h1>
                <p className="mt-6 text-xl text-oasis-green-800">
                  We publish updates and deep dives on the blog, keep how-tos in docs, and route questions through support
                  and contact. Read the guidelines and FAQ if you participate in programs or events we run.
                </p>
              </div>

              <div className="lg:hidden mb-12">
                <ConnectCard />
              </div>

              <div className="mb-12 lg:mb-0">
                <div className="mx-auto">
                  <div className="relative h-1 bg-gray-100 rounded-full mb-12">
                    <div
                      className="absolute h-full bg-gradient-to-r from-oasis-blue-100 via-oasis-blue-300 to-brand-link rounded-full transition-all duration-300 ease-in-out"
                      style={{ width: `${(hoveredStep / (steps.length - 1)) * 100}%` }}
                    />
                  </div>

                  <div className="grid grid-cols-1 gap-6">
                    {steps.map((step, index) => (
                      <div
                        key={step.id}
                        className="bg-gradient-to-br from-desert-yellow-100/20 to-oasis-blue-300/10 rounded-xl overflow-hidden p-6 shadow-lg shadow-oasis-blue-100/20 hover:shadow-xl hover:shadow-oasis-blue-100/30 transition-all duration-300"
                        onMouseEnter={() => setHoveredStep(index)}
                        onMouseLeave={() => setHoveredStep(0)}
                      >
                        <div className="flex items-start">
                          <div className="flex-shrink-0">
                            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-brand-link via-oasis-blue-300 to-oasis-blue-100 shadow-md shadow-oasis-blue-100/20">
                              <div className="text-white">{step.icon}</div>
                            </div>
                          </div>
                          <div className="ml-4">
                            <div className="text-lg font-semibold leading-7 text-oasis-green-900">{step.name}</div>
                            <div className="mt-2 text-base leading-7 text-oasis-green-800">{step.description}</div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-16 bg-white rounded-xl shadow-xl p-8">
                    <h3 className="text-2xl font-semibold text-oasis-green-900 mb-6">What you will find</h3>
                    <p className="text-lg text-oasis-green-800 mb-8">
                      Product news and essays on the blog; operational detail in docs; human help via support and contact.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                      <div className="space-y-4">
                        <h4 className="text-xl font-semibold text-oasis-green-900">Help and clarity</h4>
                        <ul className="space-y-3 text-oasis-green-800">
                          <li className="flex items-start">
                            <svg className="h-6 w-6 text-brand-link mr-2 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span>Support for account and product issues</span>
                          </li>
                          <li className="flex items-start">
                            <svg className="h-6 w-6 text-brand-link mr-2 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span>Documentation for features and security</span>
                          </li>
                          <li className="flex items-start">
                            <svg className="h-6 w-6 text-brand-link mr-2 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span>Contact for partnerships and press</span>
                          </li>
                        </ul>
                      </div>
                      <div className="space-y-4">
                        <h4 className="text-xl font-semibold text-oasis-green-900">Updates</h4>
                        <ul className="space-y-3 text-oasis-green-800">
                          <li className="flex items-start">
                            <svg className="h-6 w-6 text-brand-link mr-2 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span>Release and roadmap context on the blog</span>
                          </li>
                          <li className="flex items-start">
                            <svg className="h-6 w-6 text-brand-link mr-2 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span>Guidelines and FAQ for community programs</span>
                          </li>
                          <li className="flex items-start">
                            <svg className="h-6 w-6 text-brand-link mr-2 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span>Oasis product pages for features and pricing</span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
                      {supportLinks.map((link) => (
                        <Link
                          key={link.name}
                          href={link.href}
                          className="group flex items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
                        >
                          <div className="flex-shrink-0">
                            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-brand-link/10 via-oasis-blue-300/10 to-oasis-blue-100/10 group-hover:from-brand-link/20 group-hover:via-oasis-blue-300/20 group-hover:to-oasis-blue-100/20 transition-all duration-300">
                              <div className="text-brand-link">{link.icon}</div>
                            </div>
                          </div>
                          <div className="ml-4">
                            <p className="text-base font-medium text-oasis-green-900 group-hover:text-brand-link-hover transition-colors duration-300">
                              {link.name}
                            </p>
                            <p className="mt-1 text-sm text-oasis-green-800">{link.description}</p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="hidden lg:block lg:col-span-5 lg:sticky lg:top-24">
              <ConnectCard />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
