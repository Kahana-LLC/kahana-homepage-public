import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import SharedCTA from '../components/SharedCTA';
import HeroSection from '../components/HeroSection';

export default function About() {
  return (
    <>
      <Head>
        <title>About Us | Kahana</title>
        <meta
          name="description"
          content="Kahana creates tools that help you get closer to your ideas and bring them to life. We believe the world is better off when your best ideas become reality."
        />
      </Head>

      <HeroSection />

      {/* Mission & Vision Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 md:grid-cols-2">
            <div className="bg-gradient-to-br from-gray-50 to-indigo-50/30 rounded-2xl p-8 border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900">Our Mission</h3>
              </div>
              <p className="text-gray-600 text-lg">
                To empower people to bring their ideas to life by creating tools that make the creative process faster, easier, and more tranquil. We believe in removing the barriers between you and your best ideas.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-purple-50/30 rounded-2xl p-8 border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900">Our Vision</h3>
              </div>
              <p className="text-gray-600 text-lg">
                A world where nothing stands between you and your creative potential—where ideas flow naturally from mind to reality, and where the process of creation is as beautiful as the result.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Innovation Section */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Approach</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine innovative technology with thoughtful design to create spaces where your ideas can flourish.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl overflow-hidden border border-indigo-100">
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-400 to-purple-400 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900">Thoughtful Technology</h3>
                </div>
                <div className="space-y-4">
                  <p className="text-gray-600">
                    Our patented technology creates a workspace that adapts to your creative process, making it easier to organize and develop your ideas. We focus on removing friction and creating flow, so you can focus on what matters most—bringing your ideas to life.
                  </p>
                  <div className="mt-4">
                    <div className="space-y-2">
                      <a 
                        href="https://patents.google.com/patent/US11693676B2/en?oq=11%2c693%2c676" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-indigo-600 hover:text-indigo-800 transition-colors"
                      >
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                        View Patent #1: US11693676B2
                      </a>
                      <a 
                        href="https://patents.google.com/patent/US11397844B2/en?oq=11%2c397%2c844" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-indigo-600 hover:text-indigo-800 transition-colors"
                      >
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                        View Patent #2: US11397844B2
                      </a>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6 mt-6">
                    <div className="bg-white rounded-xl p-6 shadow-sm">
                      <h4 className="font-semibold text-gray-900 mb-2">Intelligent Workspace</h4>
                      <p className="text-gray-600">Adapts to your creative process</p>
                    </div>
                    <div className="bg-white rounded-xl p-6 shadow-sm">
                      <h4 className="font-semibold text-gray-900 mb-2">Seamless Integration</h4>
                      <p className="text-gray-600">Ideas and resources flow naturally</p>
                    </div>
                    <div className="bg-white rounded-xl p-6 shadow-sm">
                      <h4 className="font-semibold text-gray-900 mb-2">Focused Environment</h4>
                      <p className="text-gray-600">Perfect for deep creative work</p>
                    </div>
                    <div className="bg-white rounded-xl p-6 shadow-sm">
                      <h4 className="font-semibold text-gray-900 mb-2">Flow Enhancement</h4>
                      <p className="text-gray-600">Tools that support your creativity</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl overflow-hidden border border-indigo-100">
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-400 to-purple-400 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900">AI-Enhanced Creativity</h3>
                </div>
                <div className="space-y-4">
                  <p className="text-gray-600">
                    We're developing AI that understands and enhances your creative process, helping you work more effectively while maintaining the human touch that makes your ideas unique. Our AI tools are designed to support, not replace, your creative vision.
                  </p>
                  <div className="grid md:grid-cols-2 gap-6 mt-6">
                    <div className="bg-white rounded-xl p-6 shadow-sm">
                      <h4 className="font-semibold text-gray-900 mb-2">Contextual Understanding</h4>
                      <p className="text-gray-600">AI that gets your creative context</p>
                    </div>
                    <div className="bg-white rounded-xl p-6 shadow-sm">
                      <h4 className="font-semibold text-gray-900 mb-2">Potential Amplification</h4>
                      <p className="text-gray-600">Tools that enhance your creativity</p>
                    </div>
                    <div className="bg-white rounded-xl p-6 shadow-sm">
                      <h4 className="font-semibold text-gray-900 mb-2">Background Support</h4>
                      <p className="text-gray-600">Intelligent assistance that stays subtle</p>
                    </div>
                    <div className="bg-white rounded-xl p-6 shadow-sm">
                      <h4 className="font-semibold text-gray-900 mb-2">Workflow Integration</h4>
                      <p className="text-gray-600">Seamless creative process support</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              At our core, we aim to improve all the time and we value:
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="bg-gradient-to-br from-gray-50 to-indigo-50/30 rounded-2xl p-8 border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Eagerness to Learn</h3>
              </div>
              <p className="text-gray-600">
                Embracing continuous learning and growth, staying curious, and always seeking to expand our knowledge and capabilities.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-purple-50/30 rounded-2xl p-8 border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Accountability</h3>
              </div>
              <p className="text-gray-600">
                Taking ownership of our actions and commitments, ensuring reliability and trust in everything we do.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-indigo-50/30 rounded-2xl p-8 border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Problem-solving Skills</h3>
              </div>
              <p className="text-gray-600">
                Approaching challenges with creativity and determination, finding innovative solutions to complex problems.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-purple-50/30 rounded-2xl p-8 border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Strong Work Ethic</h3>
              </div>
              <p className="text-gray-600">
                Demonstrating dedication, perseverance, and commitment to excellence in everything we do.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              These four principles are foundational to Kahana's philosophy.
            </p>
          </div>
        </div>
      </div>

      {/* Manifesto CTA Section */}
      <div className="bg-gradient-to-r from-indigo-50 to-purple-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl overflow-hidden border border-indigo-100">
            <div className="p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-400 to-purple-400 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900">Read Our Manifesto</h3>
              </div>
              <p className="text-gray-600 text-lg mb-6">
                Dive deeper into our mission and vision. Learn about our beliefs, our purpose, and how we're working to help people bring their ideas to life.
              </p>
              <Link href="/manifesto">
                <button className="bg-white text-indigo-600 px-6 py-2 rounded-md font-semibold hover:bg-gray-50 transition-colors border border-indigo-100">
                  Read the Manifesto
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <SharedCTA
        title="Let's Talk"
        description="We'd love to hear about your ideas and how we can help bring them to life."
        buttonText="Get in Touch"
        buttonLink="/contact"
      />
    </>
  );
}
