import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import SharedCTA from '../components/SharedCTA';

export default function About() {
  return (
    <>
      <Head>
        <title>About Us | Kahana</title>
        <meta
          name="description"
          content="Learn about Kahana's mission to revolutionize productivity and creative flow through AI-powered workspace solutions."
        />
      </Head>

      {/* Hero Section */}
      <div className="bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">Revolutionizing How We Work</h1>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              We're building the future of productivity, where AI and innovative workspace solutions help you get closer to your ideas and bring them to life.
            </p>
          </div>
        </div>
      </div>

      {/* Mission & Vision Section */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 md:grid-cols-2">
            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-sm">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600 text-lg">
                To empower people to think better, create more, and achieve their full potential through AI-enhanced productivity tools that break free from traditional desktop constraints.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-white p-8 rounded-2xl shadow-sm">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600 text-lg">
                A future where productivity transcends the traditional workspace, enabling seamless creation and collaboration in three-dimensional space, powered by AI that understands and enhances human creativity.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Innovation Section */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Innovation</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're combining cutting-edge AI with revolutionary workspace technology to create the future of productivity.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Patented Technology</h3>
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-gray-900">
                  Computer based unitary workspace leveraging multiple filetype toggling for dynamic content creation
                </h4>
                <p className="text-gray-600">
                  Our patented technology enables a revolutionary approach to content creation through an intelligent split-screen workspace interface. This innovation allows users to seamlessly integrate multiple file types and content sources while maintaining a unified, efficient workflow.
                </p>
                <div className="mt-4">
                  <a 
                    href="https://patents.google.com/patent/WO2021072333A1/en" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    View Patent Details
                  </a>
                </div>
                <ul className="text-gray-600 space-y-2 mt-6">
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    Split-screen workspace with dedicated viewing areas for different content types
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    Seamless file integration and management
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    Keyboard-driven navigation and content manipulation
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    Dynamic content creation and editing capabilities
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">AI-Powered Future</h3>
              <div className="space-y-4">
                <p className="text-gray-600">
                  We're developing next-generation AI solutions that understand and enhance your creative process, helping you work more efficiently and effectively.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-2">•</span>
                    Intelligent workspace that adapts to your workflow
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-2">•</span>
                    AI-assisted content creation and editing
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-2">•</span>
                    Three-dimensional workspace navigation
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-2">•</span>
                    Seamless integration with your existing tools
                  </li>
                </ul>
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
              The principles that guide us in building the future of productivity
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Innovation</h3>
              <p className="text-gray-600">
                Pushing the boundaries of what's possible with technology to create better ways of working.
              </p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-white p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Human-Centric</h3>
              <p className="text-gray-600">
                Building tools that enhance human creativity and productivity, not replace it.
              </p>
            </div>
            <div className="bg-gradient-to-br from-indigo-50 to-white p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Freedom</h3>
              <p className="text-gray-600">
                Enabling people to work how they want, where they want, and when they want.
              </p>
            </div>
          </div>
        </div>
      </div>

      <SharedCTA
        title="Ready to Transform Your Workflow?"
        description="Join us in building the future of productivity and creative flow."
        buttonText="Get Started"
        buttonLink="/contact"
      />
    </>
  );
}
