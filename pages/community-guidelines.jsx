import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

const guidelines = [
  {
    title: 'Respectful Communication',
    description: 'Maintain professional and respectful communication at all times. We value diverse perspectives and expect members to engage in constructive dialogue.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
      </svg>
    ),
  },
  {
    title: 'Knowledge Sharing',
    description: 'Share your expertise and insights generously. Help others learn and grow while being open to learning from the community.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
  {
    title: 'Confidentiality',
    description: 'Respect the confidentiality of information shared within the community. Do not share sensitive information outside the community without explicit permission.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
  },
  {
    title: 'No Spam or Self-Promotion',
    description: 'Avoid excessive self-promotion or spam. Share relevant content and opportunities that add value to the community.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

const enforcement = [
  {
    title: 'Warning System',
    description: 'First-time violations will result in a warning. Repeated violations may lead to temporary or permanent removal from the community.',
  },
  {
    title: 'Reporting',
    description: 'Report any violations to the community moderators. We take all reports seriously and will investigate them promptly.',
  },
  {
    title: 'Appeals',
    description: 'Members can appeal moderation decisions by contacting the community team. We review all appeals carefully and fairly.',
  },
];

export default function CommunityGuidelines() {
  return (
    <>
      <Head>
        <title>Community Guidelines | Kahana</title>
        <meta name="description" content="Learn about our community standards and best practices for the Kahana community" />
      </Head>

      <main className="min-h-screen bg-white pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-[#011910] sm:text-5xl mb-6">
              Community Guidelines
            </h1>
            <p className="text-xl text-[#4A5745]">
              Our community is built on trust, respect, and shared knowledge. These guidelines help us maintain a positive and productive environment for everyone.
            </p>
          </div>

          {/* Core Guidelines */}
          <div className="mb-16">
            <h2 className="text-2xl font-semibold text-[#011910] mb-8">Core Guidelines</h2>
            <div className="grid gap-6">
              {guidelines.map((guideline, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-lg border border-[#A5DAD8]/30 p-6 hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-[#66C2BE] via-[#8CB7D0] to-[#E3DFF1] shadow-md shadow-[#E3DFF1]/20">
                        <div className="text-white">
                          {guideline.icon}
                        </div>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-[#011910]">
                        {guideline.title}
                      </h3>
                      <p className="mt-2 text-[#4A5745]">
                        {guideline.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Enforcement */}
          <div className="mb-16">
            <h2 className="text-2xl font-semibold text-[#011910] mb-8">Enforcement</h2>
            <div className="bg-white rounded-xl shadow-lg border border-[#A5DAD8]/30 p-8">
              <div className="grid gap-6">
                {enforcement.map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#66C2BE]/10">
                        <span className="text-[#66C2BE] font-semibold">{index + 1}</span>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-[#011910]">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-[#4A5745]">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="bg-[#E3DFF1]/10 rounded-xl p-8 border border-[#A5DAD8]/30">
            <h2 className="text-2xl font-semibold text-[#011910] mb-4">Need Help?</h2>
            <p className="text-[#4A5745] mb-6">
              If you have any questions about these guidelines or need to report a violation, please contact our community team.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#66C2BE] hover:bg-[#4A9E9A] transition-colors"
            >
              Contact Community Team
            </Link>
          </div>
        </div>
      </main>
    </>
  );
} 
