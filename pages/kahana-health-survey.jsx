import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import NavBar from '../components/NavbarDup';

export default function KahanaHealthSurvey() {
  const renderSurveyForm = () => (
    <div className="w-full">
      <iframe
        src="https://tally.so/r/wgELDl"
        width="100%"
        height="900"
        frameBorder="0"
        marginHeight="0"
        marginWidth="0"
        title="Kahana Health Survey"
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
        <title>Kahana Health Survey | Share Your Health Insights | Kahana</title>
        <meta name="description" content="Participate in our health survey to help us understand workplace health challenges and develop better ergonomic solutions." />
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        <NavBar />
        
        <main className="pt-16 pb-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header Section - Full Width */}
            <div className="text-center mb-12">
              <h2 className="text-base font-semibold leading-7 text-[#66C2BE] mb-3">Health Research</h2>
              <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl mb-6">
                Your Health Insights Matter
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Help us understand workplace health challenges and develop better ergonomic solutions. Your anonymous responses will contribute to research that benefits everyone.
              </p>
            </div>

            {/* Mobile Layout - Stacked */}
            <div className="lg:hidden space-y-8">
              {/* Why Your Participation Matters Section - Mobile */}
              <div className="bg-white rounded-xl shadow-xl border border-[#A5DAD8]/30 p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">Why Your Participation Matters</h3>
                <div className="space-y-6">
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-gray-900">Research Impact</h4>
                    <ul className="space-y-3 text-gray-600">
                      <li className="flex items-start">
                        <svg className="h-5 w-5 text-[#66C2BE] mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>Contribute to workplace health research</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="h-5 w-5 text-[#66C2BE] mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>Help identify common health challenges</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="h-5 w-5 text-[#66C2BE] mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>Shape the future of ergonomic work</span>
                      </li>
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-gray-900">Privacy & Anonymity</h4>
                    <ul className="space-y-3 text-gray-600">
                      <li className="flex items-start">
                        <svg className="h-5 w-5 text-[#66C2BE] mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>Completely anonymous responses</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="h-5 w-5 text-[#66C2BE] mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>No personally identifying information collected</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="h-5 w-5 text-[#66C2BE] mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>Data used only for research purposes</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Survey Form - Mobile */}
              <div className="bg-white rounded-xl shadow-xl border border-[#A5DAD8]/30 p-4">
                {renderSurveyForm()}
              </div>
            </div>

            {/* Desktop Layout - Two Column */}
            <div className="hidden lg:grid lg:grid-cols-12 lg:gap-12">
              {/* Left Column - Content */}
              <div className="lg:col-span-5">
                <div className="bg-white rounded-xl shadow-xl border border-[#A5DAD8]/30 p-8 sticky top-24">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-6">Why Your Participation Matters</h3>
                  <div className="space-y-8">
                    <div className="space-y-4">
                      <h4 className="text-xl font-semibold text-gray-900">Research Impact</h4>
                      <ul className="space-y-3 text-gray-600">
                        <li className="flex items-start">
                          <svg className="h-6 w-6 text-[#66C2BE] mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span>Contribute to workplace health research</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="h-6 w-6 text-[#66C2BE] mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span>Help identify common health challenges</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="h-6 w-6 text-[#66C2BE] mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span>Shape the future of ergonomic work</span>
                        </li>
                      </ul>
                    </div>
                    <div className="space-y-4">
                      <h4 className="text-xl font-semibold text-gray-900">Privacy & Anonymity</h4>
                      <ul className="space-y-3 text-gray-600">
                        <li className="flex items-start">
                          <svg className="h-6 w-6 text-[#66C2BE] mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span>Completely anonymous responses</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="h-6 w-6 text-[#66C2BE] mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span>No personally identifying information collected</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="h-6 w-6 text-[#66C2BE] mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span>Data used only for research purposes</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Form (Larger) */}
              <div className="lg:col-span-7">
                <div className="bg-white rounded-xl shadow-xl border border-[#A5DAD8]/30 p-6">
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
