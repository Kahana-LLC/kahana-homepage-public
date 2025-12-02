import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import VideoSection from '../../components/VideoSection';
import DiscordCTA from '../../components/DiscordCTA';
import Script from 'next/script';

const supportLinks = [
  {
    name: 'Learn More About Oasis',
    description: 'Discover what makes Oasis the future of browsing.',
    href: '/products/free-agentic-browser',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    name: 'Contact Us',
    description: 'Get in touch with our team for support or questions.',
    href: '/contact',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
];

export default function JobSearchWaitlist() {

  const renderCTASection = () => (
    <div className="w-full">
      <div className="bg-white rounded-xl p-8 md:p-12 text-center shadow-xl" style={{ border: '2px solid #7A9200' }}>
        <div className="max-w-2xl mx-auto">
          <h3 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#4A5745' }}>
            Join the Beta Program
          </h3>
          <p className="text-xl mb-8" style={{ color: '#4A5745' }}>
            Get early access to Oasis before everyone else.
          </p>
          <Link
            href="/oasis-beta-program"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            style={{
              backgroundColor: '#FFFFFF',
              border: '2px solid #7A9200',
              color: '#7A9200'
            }}
          >
            <span>Join Beta Program</span>
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: '#7A9200' }}>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
            </Link>
        </div>
      </div>
    </div>
  );


  return (
    <>
      <Head>
        <title>Transform Your Job Search with Oasis | Kahana</title>
        <meta name="description" content="Join the Oasis waitlist for job search revolution - AI-powered job organization, tracking, and matching to find your dream career" />
      </Head>
      <div className="relative bg-white">
        <main className="min-h-screen pt-24 pb-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              {/* Hero Section */}
              <div className="text-center mb-12">
                <h2 className="text-base font-semibold leading-7 mb-3" style={{ color: '#7A9200' }}>Elevate your job search experience</h2>
                <h1 className="text-4xl font-bold sm:text-5xl" style={{ color: '#4A5745' }}>
                  Oasis for Job Seeking
                </h1>
                <p className="mt-6 text-xl" style={{ color: '#4A5745' }}>
                  Experience an elegant and calming environment designed to help you navigate your job search with ease. Oasis creates a beautiful, ergonomic browsing experience that brings focus and clarity to your career journey.
                </p>
              </div>

              {/* Welcome to Oasis Image */}
              <div className="mb-12">
                <div className="w-full max-w-6xl mx-auto px-4 relative">
                  <div className="w-full mx-auto overflow-hidden rounded-2xl shadow-2xl">
                    <img
                      src="/images/Welcome to Oasis.svg"
                      alt="Welcome to Oasis"
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>

              {/* CTA Section */}
              <div className="max-w-4xl mx-auto mb-12">
                {renderCTASection()}
              </div>

              {/* Discord CTA Section */}
              <DiscordCTA 
                title="Join the Community Building Oasis"
                description="Connect with the community building Oasis and stay updated on the latest features and announcements."
                buttonText="Join Discord"
                directDiscordLink={true}
                className="mt-16"
              />
            </div>
            </div>
        </main>
      </div>
    </>
  );
}
