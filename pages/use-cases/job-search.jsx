import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import NavBar from '../../components/NavbarDup';
import VideoSection from '../../components/VideoSection';
import DiscordCTA from '../../components/DiscordCTA';
import Script from 'next/script';

const steps = [
  {
    id: 1,
    name: 'Join the job search revolution',
    description: 'Be among the first to experience how Oasis transforms your job search with AI-powered organization and tracking.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2V6" />
      </svg>
    ),
  },
  {
    id: 2,
    name: "Get notified when it's ready",
    description: "We'll only contact you when Oasis is ready to revolutionize your job search workflow.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5v-5zM4 19h6v-2H4v2zM4 15h6v-2H4v2zM4 11h6V9H4v2zM4 7h6V5H4v2z" />
      </svg>
    ),
  },
  {
    id: 3,
    name: 'Early access to job search features',
    description: 'Get priority access to Oasis job search tools and exclusive early-bird pricing for career-focused features.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
      </svg>
    ),
  },
];

const jobApplicationProcessSteps = [
  {
    id: 1,
    name: 'Discover & Identify Opportunities',
    description: 'Effortlessly identify target companies on platforms like Wellfound, LinkedIn, and various job boards. Oasis helps you discover roles that align with your career goals.',
    icon: (
      <svg className="w-6 h-6 text-[#66C2BE]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
  },
  {
    id: 2,
    name: 'Filter & Prioritize Job Posts',
    description: 'Find job posts that precisely match your criteria (role, visa requirements, location, etc.). Prioritize applications based on deadlines or the recency of the posting.',
    icon: (
      <svg className="w-6 h-6 text-[#66C2BE]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
      </svg>
    ),
  },
  {
    id: 3,
    name: 'Tailor Your Resume & Cover Letter',
    description: 'Ensure your application stands out. Oasis helps you tailor your resume and cover letter to specific job posts, ensuring your language is perfectly on point for each opportunity.',
    icon: (
      <svg className="w-6 h-6 text-[#66C2BE]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    id: 4,
    name: 'Network & Reach Out',
    description: 'Find emails and contact information of key employees at target companies. Reach out in advance to learn more about the role and assess if it\'s the right fit before applying.',
    icon: (
      <svg className="w-6 h-6 text-[#66C2BE]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    id: 5,
    name: 'Streamline Applications & Interviews',
    description: 'Efficiently fill out application forms and manage your interview schedules. Oasis helps you stay organized and prepared for every stage of the hiring process.',
    icon: (
      <svg className="w-6 h-6 text-[#66C2BE]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    ),
  },
  {
    id: 6,
    name: 'Ace Your Interviews & Get Hired',
    description: 'Prepare confidently for interviews and increase your chances of success. With Oasis, you\'re equipped to crush interviews and land your dream job.',
    icon: (
      <svg className="w-6 h-6 text-[#66C2BE]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
      </svg>
    ),
  },
];

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
  const [hoveredStep, setHoveredStep] = useState(0);

  const renderForm = () => (
    <div className="w-full">
      <iframe
        src="https://tally.so/r/w8V8GA"
        width="100%"
        height="400"
        frameBorder="0"
        marginHeight="0"
        marginWidth="0"
        title="Oasis Waitlist"
        style={{ border: 0,
          borderRadius: 0,
          backgroundColor: 'transparent',
          display: 'block' }}
      />
      
      {/* Disclaimer Section */}
      <div className="mt-4 pt-4 border-t border-gray-200 bg-white relative -mt-8 pt-8">
        <div className="text-center">
          <p className="text-sm text-gray-600 mb-3">
            <strong>Contact us</strong> - for an immediate response, contact us directly at{' '}
            <Link href="/contact" className="text-[#66C2BE] hover:text-[#4A9E9A] underline">
              contact us
            </Link>
          </p>
          <p className="text-xs text-gray-500">
            By submitting this form you consent to be contacted by Kahana, and acknowledge our{' '}
            <Link href="/privacy-policy" className="text-[#66C2BE] hover:text-[#4A9E9A] underline">
              Privacy Policy
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );

  // Feature showcase component
  const featureShowcase = (
    <div className="w-full mt-8">
      <div className="bg-gradient-to-r from-[#8FBC8F] to-[#7BA05B] rounded-2xl p-8 shadow-lg">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Column - Text Content */}
          <div className="text-white">
            <h3 className="text-4xl font-bold mb-4">
              Oasis makes your job search faster and more organized
            </h3>
            <p className="text-xl mb-6 opacity-90">
              Leverage AI to perform job search actions and achieve 2x efficiency while browsing opportunities.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center">
                <svg className="w-6 h-6 mr-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-lg">De-duplicate across LinkedIn, Indeed & ATS</span>
              </li>
              <li className="flex items-center">
                <svg className="w-6 h-6 mr-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-lg">Auto-sync application status from email/ATS</span>
              </li>
              <li className="flex items-center">
                <svg className="w-6 h-6 mr-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-lg">Salary & visa sponsorship detection</span>
              </li>
            </ul>
          </div>
          
          {/* Right Column - Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="bg-white rounded-2xl p-4 shadow-2xl max-w-md w-full">
              <img
                src="/Browser Product Asset.png"
                alt="Oasis Browser Interface - AI-powered job search organization"
                className="w-full h-auto rounded-xl"
              />
            </div>
          </div>
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
      <div className="oasis-waitlist">
        <NavBar />
        <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-24 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              {/* Hero Section */}
              <div className="text-center mb-12">
                <h2 className="text-base font-semibold leading-7 text-[#66C2BE] mb-3">Amplify your existing job hunt workflow</h2>
                <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
                  The AI browser that makes job hunting less of a hellscape
                </h1>
                <p className="mt-6 text-xl text-gray-600">
                  Using Jobright, LinkedIn, Apollo, Indeed and more job hunting tools? Great! Now you can amplify your workflow and process with Oasis, the top AI browser for job hunters. Our commands and agentic workflows amplify the platforms and tools you already use to make landing your dream job less of a hellscape.
                </p>
              </div>

              {/* Feature Showcase Component */}
              <div className="mb-12">
                {featureShowcase}
              </div>

              {/* Centered Form Section */}
              <div className="max-w-md mx-auto mb-12">
                <div className="bg-white rounded-xl shadow-xl border border-[#A5DAD8]/30 p-8">
                  {renderForm()}
                </div>
              </div>

              {/* Steps Section */}
              <div className="mb-12 lg:mb-0">
                <div className="mx-auto">
                    {/* Progress Bar */}
                    <div className="relative h-1 bg-gray-100 rounded-full mb-12">
                      <div 
                        className="absolute h-full bg-gradient-to-r from-[#E3DFF1] via-[#8CB7D0] to-[#66C2BE] rounded-full transition-all duration-300 ease-in-out"
                        style={{ width: `${(hoveredStep / (steps.length - 1)) * 100}%` }}
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 gap-6">
                      {steps.map((step, index) => (
                        <div 
                          key={step.id} 
                          className="bg-gradient-to-r from-[#E3DFF1]/20 via-[#8CB7D0]/10 to-[#E3DFF1]/30 rounded-xl overflow-hidden border border-[#A5DAD8]/30 p-6 shadow-lg shadow-[#E3DFF1]/20 hover:shadow-xl hover:shadow-[#E3DFF1]/30 transition-all duration-300"
                          onMouseEnter={() => setHoveredStep(index)}
                          onMouseLeave={() => setHoveredStep(0)}
                        >
                          <div className="flex items-start">
                            <div className="flex-shrink-0">
                              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-[#66C2BE] via-[#8CB7D0] to-[#E3DFF1] shadow-md shadow-[#E3DFF1]/20">
                                <div className="text-white">
                                  {step.icon}
                                </div>
                              </div>
                            </div>
                            <div className="ml-4">
                              <div className="text-lg font-semibold leading-7 text-gray-900">
                                {step.name}
                              </div>
                              <div className="mt-2 text-base leading-7 text-gray-600">
                                {step.description}
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Job Search Features Section */}
                    <div className="mt-16 bg-white rounded-xl shadow-xl border border-[#A5DAD8]/30 p-8">
                      <h3 className="text-2xl font-semibold text-gray-900 mb-6">Oasis Job Search "Skill Pack"</h3>
                      <p className="text-lg text-gray-600 mb-8">
                        Our AI-powered job search system crawls LinkedIn, Indeed, and company ATS platforms to deliver top 25 deduped results in under 25 seconds with 95% accuracy.
                      </p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                        <div className="space-y-4">
                          <h4 className="text-xl font-semibold text-gray-900">Smart Data Extraction</h4>
                          <ul className="space-y-3 text-gray-600">
                            <li className="flex items-start">
                              <svg className="h-6 w-6 text-[#66C2BE] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                              <span>De-duplicate postings across LinkedIn, Indeed & ATS</span>
                            </li>
                            <li className="flex items-start">
                              <svg className="h-6 w-6 text-[#66C2BE] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                              <span>Extract key fields: title, company, location, requirements</span>
                            </li>
                            <li className="flex items-start">
                              <svg className="h-6 w-6 text-[#66C2BE] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                              <span>Auto-sync application status from email/ATS portals</span>
                            </li>
                          </ul>
                        </div>
                        <div className="space-y-4">
                          <h4 className="text-xl font-semibold text-gray-900">Intelligent Analysis</h4>
                          <ul className="space-y-3 text-gray-600">
                            <li className="flex items-start">
                              <svg className="h-6 w-6 text-[#66C2BE] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                              <span>Salary & total comp estimation (geo-aware)</span>
                            </li>
                            <li className="flex items-start">
                              <svg className="h-6 w-6 text-[#66C2BE] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                              <span>Remote policy & visa sponsorship detection</span>
                            </li>
                            <li className="flex items-start">
                              <svg className="h-6 w-6 text-[#66C2BE] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                              <span>Referral finder & LinkedIn outreach drafts</span>
                            </li>
                          </ul>
                        </div>
                      </div>


                      {/* Safety Note */}
                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                        <div className="flex items-start">
                          <svg className="h-5 w-5 text-blue-600 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <div>
                            <h5 className="font-semibold text-blue-900">Safe Mode Only</h5>
                            <p className="text-sm text-blue-800 mt-1">
                              We prefill ATS forms but never auto-submit. We respect LinkedIn's Terms of Service and don't perform deep automation or CAPTCHA solving.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Most Popular AI Commands Section */}
                    <div className="mt-16 bg-white rounded-xl shadow-xl border border-[#A5DAD8]/30 p-8">
                      <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">Most Popular AI Commands for Job Hunting</h3>
                      <p className="text-lg text-gray-600 mb-8 text-center">
                        Powerful AI commands that understand job-hunt workflows and deliver results in under 25 seconds with 95% accuracy.
                      </p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Command 1 */}
                        <div className="bg-gradient-to-br from-[#E3DFF1]/10 via-[#8CB7D0]/5 to-[#E3DFF1]/20 rounded-xl border border-[#A5DAD8]/20 p-6 hover:shadow-lg transition-all duration-300">
                          <div className="flex items-start space-x-4">
                            <div className="flex-shrink-0">
                              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-[#66C2BE]/10 via-[#8CB7D0]/10 to-[#E3DFF1]/10">
                                <svg className="w-6 h-6 text-[#66C2BE]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                              </div>
                            </div>
                            <div className="flex-1">
                              <h4 className="text-lg font-semibold text-gray-900 mb-2">De-duplicate Postings</h4>
                              <p className="text-sm text-gray-600 mb-3">
                                Detects and merges identical roles from LinkedIn/Indeed/ATS into one canonical entry.
                              </p>
                              <div className="bg-gray-50 rounded-lg p-3 text-xs text-gray-700 font-mono">
                                "De-dupe these 40 results across all sources"
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Command 2 */}
                        <div className="bg-gradient-to-br from-[#E3DFF1]/10 via-[#8CB7D0]/5 to-[#E3DFF1]/20 rounded-xl border border-[#A5DAD8]/20 p-6 hover:shadow-lg transition-all duration-300">
                          <div className="flex items-start space-x-4">
                            <div className="flex-shrink-0">
                              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-[#66C2BE]/10 via-[#8CB7D0]/10 to-[#E3DFF1]/10">
                                <svg className="w-6 h-6 text-[#66C2BE]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                                </svg>
                              </div>
                            </div>
                            <div className="flex-1">
                              <h4 className="text-lg font-semibold text-gray-900 mb-2">Application Status Sync</h4>
                              <p className="text-sm text-gray-600 mb-3">
                                Watches inbox and ATS portals to auto-update job tracker status.
                              </p>
                              <div className="bg-gray-50 rounded-lg p-3 text-xs text-gray-700 font-mono">
                                "Sync statuses for my last 20 applications"
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Command 3 */}
                        <div className="bg-gradient-to-br from-[#E3DFF1]/10 via-[#8CB7D0]/5 to-[#E3DFF1]/20 rounded-xl border border-[#A5DAD8]/20 p-6 hover:shadow-lg transition-all duration-300">
                          <div className="flex items-start space-x-4">
                            <div className="flex-shrink-0">
                              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-[#66C2BE]/10 via-[#8CB7D0]/10 to-[#E3DFF1]/10">
                                <svg className="w-6 h-6 text-[#66C2BE]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                                </svg>
                              </div>
                            </div>
                            <div className="flex-1">
                              <h4 className="text-lg font-semibold text-gray-900 mb-2">Salary & Comp Estimator</h4>
                              <p className="text-sm text-gray-600 mb-3">
                                Infers likely base/bonus/equity from job descriptions and market data.
                              </p>
                              <div className="bg-gray-50 rounded-lg p-3 text-xs text-gray-700 font-mono">
                                "Estimate total comp for Data Analyst, Boston"
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Command 4 */}
                        <div className="bg-gradient-to-br from-[#E3DFF1]/10 via-[#8CB7D0]/5 to-[#E3DFF1]/20 rounded-xl border border-[#A5DAD8]/20 p-6 hover:shadow-lg transition-all duration-300">
                          <div className="flex items-start space-x-4">
                            <div className="flex-shrink-0">
                              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-[#66C2BE]/10 via-[#8CB7D0]/10 to-[#E3DFF1]/10">
                                <svg className="w-6 h-6 text-[#66C2BE]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                              </div>
                            </div>
                            <div className="flex-1">
                              <h4 className="text-lg font-semibold text-gray-900 mb-2">Remote Policy Extractor</h4>
                              <p className="text-sm text-gray-600 mb-3">
                                Pulls remote/hybrid policy and time-zone requirements from job descriptions.
                              </p>
                              <div className="bg-gray-50 rounded-lg p-3 text-xs text-gray-700 font-mono">
                                "Show remote policy for results 1-15"
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Command 5 */}
                        <div className="bg-gradient-to-br from-[#E3DFF1]/10 via-[#8CB7D0]/5 to-[#E3DFF1]/20 rounded-xl border border-[#A5DAD8]/20 p-6 hover:shadow-lg transition-all duration-300">
                          <div className="flex items-start space-x-4">
                            <div className="flex-shrink-0">
                              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-[#66C2BE]/10 via-[#8CB7D0]/10 to-[#E3DFF1]/10">
                                <svg className="w-6 h-6 text-[#66C2BE]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                              </div>
                            </div>
                            <div className="flex-1">
                              <h4 className="text-lg font-semibold text-gray-900 mb-2">Visa Sponsorship Detector</h4>
                              <p className="text-sm text-gray-600 mb-3">
                                Flags H-1B/OPT/CPT sponsorship statements and eligibility constraints.
                              </p>
                              <div className="bg-gray-50 rounded-lg p-3 text-xs text-gray-700 font-mono">
                                "Filter to roles with visa sponsorship"
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Command 6 */}
                        <div className="bg-gradient-to-br from-[#E3DFF1]/10 via-[#8CB7D0]/5 to-[#E3DFF1]/20 rounded-xl border border-[#A5DAD8]/20 p-6 hover:shadow-lg transition-all duration-300">
                          <div className="flex items-start space-x-4">
                            <div className="flex-shrink-0">
                              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-[#66C2BE]/10 via-[#8CB7D0]/10 to-[#E3DFF1]/10">
                                <svg className="w-6 h-6 text-[#66C2BE]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                              </div>
                            </div>
                            <div className="flex-1">
                              <h4 className="text-lg font-semibold text-gray-900 mb-2">Referral Finder & Outreach</h4>
                              <p className="text-sm text-gray-600 mb-3">
                                Finds connections at target companies and drafts tailored LinkedIn messages.
                              </p>
                              <div className="bg-gray-50 rounded-lg p-3 text-xs text-gray-700 font-mono">
                                "Find warm connections for jobs 1-5"
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>

              {/* Job Application Process Section */}
              <div className="mt-16 bg-white rounded-xl shadow-xl border border-[#A5DAD8]/30 p-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">Your Complete Job Search Journey</h3>
                <p className="text-lg text-gray-600 mb-8 text-center">
                  From discovering opportunities to landing your dream job, Oasis guides you through every step of the application process.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {jobApplicationProcessSteps.map((step, index) => (
                    <div 
                      key={step.id} 
                      className="bg-gradient-to-br from-[#E3DFF1]/10 via-[#8CB7D0]/5 to-[#E3DFF1]/20 rounded-xl border border-[#A5DAD8]/20 p-6 hover:shadow-lg transition-all duration-300"
                    >
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0">
                          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-[#66C2BE]/10 via-[#8CB7D0]/10 to-[#E3DFF1]/10">
                            {step.icon}
                          </div>
                        </div>
                        <div className="flex-1">
                          <h4 className="text-lg font-semibold text-gray-900 mb-2">
                            {step.name}
                          </h4>
                          <p className="text-sm text-gray-600 leading-relaxed">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Process Flow Indicator */}
                <div className="mt-8 flex justify-center">
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <span>Start</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    <span>Discover</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    <span>Apply</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    <span>Interview</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    <span>Hired!</span>
                  </div>
                </div>
              </div>

              {/* FAQ Section */}
              <div className="mt-16 bg-white rounded-xl shadow-xl border border-[#A5DAD8]/30 p-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">Frequently Asked Questions</h3>
                
                <div className="space-y-6">
                  {/* FAQ 1 */}
                  <div className="border-b border-gray-200 pb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">How does Oasis help with job search for people that want sponsorship?</h4>
                    <p className="text-gray-600">
                      Oasis includes a specialized Visa Sponsorship Detector that automatically flags H-1B/OPT/CPT sponsorship statements and eligibility constraints in job postings. You can use commands like "Filter to roles with visa sponsorship" to quickly identify opportunities that explicitly offer work authorization support. This saves you hours of manually reading through job descriptions to find sponsorship-friendly employers.
                    </p>
                  </div>

                  {/* FAQ 2 */}
                  <div className="border-b border-gray-200 pb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">How much does it cost?</h4>
                    <p className="text-gray-600">
                      Oasis is completely free to use and install, just like any browser! The AI assistant within Oasis allows you to run commands, but there is a limit to the number of tokens you can use while on a free plan. If you want more tokens for additional AI commands, you can upgrade to a paid plan. You can downgrade at any time - no long-term commitments required.
                    </p>
                  </div>

                  {/* FAQ 3 */}
                  <div className="pb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">How do I suggest new features?</h4>
                    <p className="text-gray-600">
                      We love hearing from our users! You can join our <Link href="/community" className="text-[#66C2BE] hover:text-[#4A9E9A] underline">Discord community</Link> to discuss ideas with other users and our team, or fill out our detailed <Link href="/oasis-feedback-survey" className="text-[#66C2BE] hover:text-[#4A9E9A] underline">feedback survey</Link>. Your suggestions directly influence our product roadmap and help us build features that matter most to job seekers like you.
                    </p>
                  </div>
                </div>
              </div>

              {/* Discord CTA Section */}
              <DiscordCTA 
                title="Join Our Job Search Community"
                description="Connect with other job seekers, get tips from our team, and stay updated on the latest Oasis job search features and announcements."
                buttonText="Join Discord"
                directDiscordLink={true}
                className="mt-16"
              />
            </div>
        </main>
      </div>
    </>
  );
}
