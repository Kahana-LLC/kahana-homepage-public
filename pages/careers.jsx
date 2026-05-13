import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import SEO from '../components/SEO';

export default function Careers() {
  return (
    <>
      <SEO
        title="Careers at Kahana"
        description="Join our team at Kahana and help make the future of work more elegant and productive."
        url="https://kahana.co/careers"
        type="website"
      />

      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-oasis-green-800">Join Our Team</h1>
            <p className="mt-4 text-xl text-oasis-green-800">
              Help us make the future of work more elegant and productive.
            </p>
          </div>

          <div className="mt-12">
            {/* Learning Internship Card */}
            <div className="mb-8">
              <Link
                href="/learning-internship"
                className="block no-underline hover:no-underline focus:no-underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-oasis-green-600 bg-gradient-to-br from-desert-yellow-100/20 to-oasis-blue-300/10 p-8 rounded-lg hover:shadow-lg transition-all duration-300 group"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <h2 className="text-2xl font-semibold text-oasis-green-800 group-hover:text-oasis-green-600 transition-colors">
                        Learning Internship Program
                      </h2>
                      <span className="px-3 py-1 text-xs font-semibold text-oasis-green-600 bg-white/50 rounded-full">
                        Educational Opportunity
                      </span>
                    </div>
                    <p className="text-oasis-green-800 mb-4">
                      Join our educational internship program designed for individuals who want to learn and gain hands-on experience in a fast-paced, innovative startup environment.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="px-3 py-1 text-sm text-oasis-green-800 bg-white/50 rounded-full">Flexible Schedule</span>
                      <span className="px-3 py-1 text-sm text-oasis-green-800 bg-white/50 rounded-full">Remote</span>
                      <span className="px-3 py-1 text-sm text-oasis-green-800 bg-white/50 rounded-full">Multiple Functions</span>
                    </div>
                    <span className="text-oasis-green-600 font-semibold group-hover:underline inline-flex items-center">
                      Learn more and apply
                      <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            </div>

            {/* Open Positions Section */}
            <div className="bg-gradient-to-br from-desert-yellow-100/20 to-oasis-blue-300/10 p-8 rounded-lg text-center">
              <h2 className="text-2xl font-semibold text-oasis-green-800 mb-4">Open Positions</h2>
              <p className="text-oasis-green-800 mb-8">
                We currently have no open positions, but we're always looking for talented individuals 
                who are passionate about creating more elegant and productive work environments. 
                If you're excited about transforming how people work and making technology work better for humans, 
                we'd love to hear from you.
              </p>
              <Link href="/contact" className="btn-primary inline-flex items-center justify-center px-6 py-3 text-base font-bold no-underline hover:no-underline focus:no-underline">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 