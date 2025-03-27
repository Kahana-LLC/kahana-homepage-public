import React from 'react';
import Head from 'next/head';
import Footer from '../components/Footer';

export default function CareersPage() {
  return (
    <>
      <Head>
        <title>Careers - Kahana</title>
        <meta
          name="description"
          content="Join the Kahana team and help us revolutionize enterprise browsing. Explore our open positions and career opportunities."
        />
      </Head>
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-[#0B3B2D] text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold mb-4">Join Our Team</h1>
              <p className="text-xl max-w-2xl mx-auto">
                Help us build the future of enterprise browsing. We're looking for talented individuals who are passionate about innovation and security.
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Values Section */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-center">Our Values</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center p-6 bg-gray-50 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4">Innovation</h3>
                  <p className="text-gray-600">We push boundaries and challenge the status quo to create breakthrough solutions.</p>
                </div>
                <div className="text-center p-6 bg-gray-50 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4">Collaboration</h3>
                  <p className="text-gray-600">We believe great ideas come from working together and sharing diverse perspectives.</p>
                </div>
                <div className="text-center p-6 bg-gray-50 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4">Impact</h3>
                  <p className="text-gray-600">We're committed to making a real difference in enterprise security and productivity.</p>
                </div>
              </div>
            </div>

            {/* Placeholder for Job Listings */}
            <div>
              <h2 className="text-3xl font-bold mb-8 text-center">Open Positions</h2>
              <div className="space-y-6">
                <div className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-semibold mb-2">Senior Software Engineer</h3>
                  <p className="text-gray-600 mb-4">Help build and scale our enterprise browser platform.</p>
                  <span className="inline-block bg-[#0B3B2D] text-white px-4 py-2 rounded">Coming Soon</span>
                </div>
                <div className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-semibold mb-2">Product Designer</h3>
                  <p className="text-gray-600 mb-4">Shape the future of enterprise browsing experiences.</p>
                  <span className="inline-block bg-[#0B3B2D] text-white px-4 py-2 rounded">Coming Soon</span>
                </div>
                <div className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-semibold mb-2">Security Engineer</h3>
                  <p className="text-gray-600 mb-4">Build and maintain robust security features for our platform.</p>
                  <span className="inline-block bg-[#0B3B2D] text-white px-4 py-2 rounded">Coming Soon</span>
                </div>
              </div>
            </div>

            {/* Contact Section */}
            <div className="mt-16 text-center">
              <h2 className="text-3xl font-bold mb-4">Don't see the right role?</h2>
              <p className="text-gray-600 mb-6">
                We're always looking for talented individuals to join our team. Send your resume to{' '}
                <a href="mailto:careers@kahana.co" className="text-[#0B3B2D] hover:underline">
                  careers@kahana.co
                </a>
              </p>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
} 