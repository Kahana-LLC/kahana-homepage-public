import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import NavBar from '../components/NavbarDup';
import DiscordCTA from '../components/DiscordCTA';

const steps = [
  {
    id: 1,
    name: 'Join Our Discord',
    description: 'Connect with the Kahana team and other users in our vibrant Discord community.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    id: 2,
    name: 'Get Direct Support',
    description: 'Get real-time help from our team and connect with other Oasis users.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
      </svg>
    ),
  },
  {
    id: 3,
    name: 'Access Exclusive Resources',
    description: 'Get early access to features, tutorials, and exclusive content.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
  {
    id: 4,
    name: 'Stay Updated',
    description: 'Be the first to know about new features, updates, and announcements.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
];

const supportLinks = [
  {
    name: 'Community Guidelines',
    description: 'Learn about our Discord community standards and best practices.',
    href: '/community-guidelines',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    name: 'FAQ',
    description: 'Find answers to common questions about our Discord community.',
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

export default function Community() {
  const [hoveredStep, setHoveredStep] = useState(0);

  return (
    <>
      <Head>
        <title>Join Kahana Discord Community | Kahana</title>
        <meta name="description" content="Join the Kahana Discord community - connect with our team, get support, and stay updated on the latest features" />
      </Head>

      <NavBar />

      <main className="min-h-screen bg-white pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-16">
            {/* Left Column - Content */}
            <div className="lg:col-span-7">
              <div className="text-center lg:text-left mb-12">
                <h2 className="text-base font-semibold leading-7 text-[#66C2BE] mb-3">Join Our Discord</h2>
                <h1 className="text-4xl font-bold text-[#011910] sm:text-5xl">
                  Connect with the Kahana Community
                </h1>
                <p className="mt-6 text-xl text-[#4A5745]">
                  Join our vibrant Discord community to connect with the Kahana team, get real-time support, access exclusive resources, and stay updated on the latest features and announcements.
                </p>
                <p className="mt-4 text-xl text-[#4A5745]">
                  Whether you're a current user, interested in Oasis, or just want to stay connected with our team, our Discord is the perfect place to engage and grow together.
                </p>
              </div>

              {/* Discord CTA Section - Mobile */}
              <div className="lg:hidden mb-12">
                <DiscordCTA 
                  title="Join Our Discord Community"
                  description="Connect with the Kahana team, get support, access exclusive resources, and stay updated on the latest features and announcements."
                  buttonText="Join Discord"
                  directDiscordLink={true}
                />
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
                        className="bg-gradient-to-br from-kahana-accent-sky/20 to-kahana-secondary-300/10 rounded-xl overflow-hidden p-6 shadow-lg shadow-[#E3DFF1]/20 hover:shadow-xl hover:shadow-[#E3DFF1]/30 transition-all duration-300"
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
                            <div className="text-lg font-semibold leading-7 text-[#011910]">
                              {step.name}
                            </div>
                            <div className="mt-2 text-base leading-7 text-[#4A5745]">
                              {step.description}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Discord Features Section */}
                  <div className="mt-16 bg-white rounded-xl shadow-xl p-8">
                    <h3 className="text-2xl font-semibold text-[#011910] mb-6">What You'll Find in Our Discord</h3>
                    <p className="text-lg text-[#4A5745] mb-8">
                      Our Discord server is organized to help you get the most out of your Oasis experience and connect with like-minded users.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                      <div className="space-y-4">
                        <h4 className="text-xl font-semibold text-[#011910]">Support & Help</h4>
                        <ul className="space-y-3 text-[#4A5745]">
                          <li className="flex items-start">
                            <svg className="h-6 w-6 text-[#66C2BE] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span>Real-time support from our team</span>
                          </li>
                          <li className="flex items-start">
                            <svg className="h-6 w-6 text-[#66C2BE] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span>User-to-user help and tips</span>
                          </li>
                          <li className="flex items-start">
                            <svg className="h-6 w-6 text-[#66C2BE] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span>Feature requests and feedback</span>
                          </li>
                        </ul>
                      </div>
                      <div className="space-y-4">
                        <h4 className="text-xl font-semibold text-[#011910]">Community & Updates</h4>
                        <ul className="space-y-3 text-[#4A5745]">
                          <li className="flex items-start">
                            <svg className="h-6 w-6 text-[#66C2BE] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span>Latest feature announcements</span>
                          </li>
                          <li className="flex items-start">
                            <svg className="h-6 w-6 text-[#66C2BE] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span>Beta testing opportunities</span>
                          </li>
                          <li className="flex items-start">
                            <svg className="h-6 w-6 text-[#66C2BE] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span>Community discussions and networking</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Discord Community Section */}
                  <div className="mt-16 bg-white rounded-xl shadow-xl p-8">
                    <h3 className="text-2xl font-semibold text-[#011910] mb-6">Our Discord Community</h3>
                    <p className="text-lg text-[#4A5745] mb-8">
                      Our Discord server is open to everyone interested in Oasis, whether you're a current user, considering trying it out, or just want to stay connected with our team.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                      {/* Community Benefits */}
                      <div className="space-y-6">
                        <h4 className="text-xl font-semibold text-[#011910]">Community Benefits</h4>
                        <ul className="space-y-4">
                          <li className="flex items-start">
                            <svg className="h-6 w-6 text-[#66C2BE] mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span className="text-[#4A5745]">Direct access to our development team</span>
                          </li>
                          <li className="flex items-start">
                            <svg className="h-6 w-6 text-[#66C2BE] mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span className="text-[#4A5745]">Early access to new features and updates</span>
                          </li>
                          <li className="flex items-start">
                            <svg className="h-6 w-6 text-[#66C2BE] mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span className="text-[#4A5745]">Exclusive tutorials and resources</span>
                          </li>
                        </ul>
                      </div>

                      {/* Who Should Join */}
                      <div className="space-y-6">
                        <h4 className="text-xl font-semibold text-[#011910]">Who Should Join</h4>
                        <ul className="space-y-4">
                          <li className="flex items-start">
                            <svg className="h-6 w-6 text-[#66C2BE] mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span className="text-[#4A5745]">Current Oasis users looking for support</span>
                          </li>
                          <li className="flex items-start">
                            <svg className="h-6 w-6 text-[#66C2BE] mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span className="text-[#4A5745]">People interested in trying Oasis</span>
                          </li>
                          <li className="flex items-start">
                            <svg className="h-6 w-6 text-[#66C2BE] mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span className="text-[#4A5745]">Anyone wanting to stay updated on our progress</span>
                          </li>
                          <li className="flex items-start">
                            <svg className="h-6 w-6 text-[#66C2BE] mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span className="text-[#4A5745]">Community members who want to connect</span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    {/* Discord CTA Section */}
                    <div className="mt-12">
                      <DiscordCTA 
                        title="Ready to Join Our Discord?"
                        description="Connect with our team, get support, and stay updated on all things Oasis. Join our community today!"
                        buttonText="Join Discord Now"
                        className="mb-0"
                        directDiscordLink={true}
                      />
                    </div>

                    {/* Support Links */}
                    <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
                      {supportLinks.map((link) => (
                        <Link
                          key={link.name}
                          href={link.href}
                          className="group flex items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
                        >
                          <div className="flex-shrink-0">
                            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-[#66C2BE]/10 via-[#8CB7D0]/10 to-[#E3DFF1]/10 group-hover:from-[#66C2BE]/20 group-hover:via-[#8CB7D0]/20 group-hover:to-[#E3DFF1]/20 transition-all duration-300">
                              <div className="text-[#66C2BE]">
                                {link.icon}
                              </div>
                            </div>
                          </div>
                          <div className="ml-4">
                            <p className="text-base font-medium text-[#011910] group-hover:text-[#66C2BE] transition-colors duration-300">
                              {link.name}
                            </p>
                            <p className="mt-1 text-sm text-[#4A5745]">
                              {link.description}
                            </p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Discord CTA (Desktop only) */}
            <div className="hidden lg:block lg:col-span-5 lg:sticky lg:top-24">
              <DiscordCTA 
                title="Join Our Discord Community"
                description="Connect with the Kahana team, get support, access exclusive resources, and stay updated on the latest features and announcements."
                buttonText="Join Discord"
                directDiscordLink={true}
              />
            </div>
          </div>
        </div>
      </main>


    </>
  );
} 