import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function OasisFeedbackSurvey() {
  const renderSurveyForm = () => (
    <div className="w-full">
      <iframe
        src="https://tally.so/r/3E2XdN"
        width="100%"
        height="800"
        frameBorder="0"
        marginHeight="0"
        marginWidth="0"
        title="Oasis Feedback Survey"
        style={{ 
          border: 0,
          borderRadius: '12px',
          backgroundColor: 'transparent',
          display: 'block',
          boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)'
        }}
      />
    </div>
  );

  return (
    <>
      <Head>
        <title>Oasis Feedback Survey | Help Us Improve | Kahana</title>
        <meta name="description" content="Share your feedback about Oasis to help us improve the product. Your insights are valuable to us." />
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      
      <div className="min-h-screen bg-white">
        <main className="pt-24 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-12 lg:gap-16">
              {/* Left Column - Content */}
              <div className="lg:col-span-7">
                <div className="text-center lg:text-left mb-12">
                  <h2 className="text-base font-semibold leading-7 text-brand-link mb-3">Help Us Improve</h2>
                  <h1 className="text-4xl font-bold text-oasis-green-900 sm:text-5xl">
                    Your Feedback Matters
                  </h1>
                  <p className="mt-6 text-xl text-oasis-green-800">
                    Your feedback is invaluable to us. Share your thoughts about Oasis to help us create an even better experience for you and other users.
                  </p>
                </div>

                {/* Why Your Feedback Matters Section */}
                <div className="mb-12 lg:mb-0">
                  <div className="mx-auto">
                    <div className="bg-white rounded-xl shadow-xl border border-oasis-blue-200/30 p-8">
                      <h3 className="text-2xl font-semibold text-oasis-green-900 mb-6">Why Your Feedback Matters</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                        <div className="space-y-4">
                          <h4 className="text-xl font-semibold text-oasis-green-900">Product Development</h4>
                          <ul className="space-y-3 text-oasis-green-800">
                            <li className="flex items-start">
                              <svg className="h-6 w-6 text-brand-link mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                              <span>Your insights directly influence our roadmap</span>
                            </li>
                            <li className="flex items-start">
                              <svg className="h-6 w-6 text-brand-link mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                              <span>Help us build features that matter most</span>
                            </li>
                            <li className="flex items-start">
                              <svg className="h-6 w-6 text-brand-link mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                              <span>Shape the future of Oasis</span>
                            </li>
                          </ul>
                        </div>
                        <div className="space-y-4">
                          <h4 className="text-xl font-semibold text-oasis-green-900">User Experience</h4>
                          <ul className="space-y-3 text-oasis-green-800">
                            <li className="flex items-start">
                              <svg className="h-6 w-6 text-brand-link mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                              <span>Identify pain points and improvements</span>
                            </li>
                            <li className="flex items-start">
                              <svg className="h-6 w-6 text-brand-link mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                              <span>Create a more intuitive experience</span>
                            </li>
                            <li className="flex items-start">
                              <svg className="h-6 w-6 text-brand-link mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                              <span>Prioritize improvements that matter</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Form */}
              <div className="lg:col-span-5 lg:sticky lg:top-24">
                <div className="bg-white rounded-xl shadow-xl border border-oasis-blue-200/30 p-8">
                  {renderSurveyForm()}
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
