import React from 'react';
import Head from 'next/head';
import { FaApple, FaWindows, FaLinux, FaDownload, FaClock } from 'react-icons/fa';
import { Container } from '../components/Container';
import Breadcrumbs from '../components/Breadcrumbs';

export default function Installations() {
  const downloadButtons = [
    {
      platform: 'Mac',
      icon: FaApple,
      description: 'macOS 10.15 or later',
      status: 'coming-soon',
      size: 'Coming Soon',
      color: 'bg-gray-100 hover:bg-gray-200 border-gray-300',
      textColor: 'text-gray-600'
    },
    {
      platform: 'Windows',
      icon: FaWindows,
      description: 'Windows 10 or later',
      status: 'coming-soon',
      size: 'Coming Soon',
      color: 'bg-gray-100 hover:bg-gray-200 border-gray-300',
      textColor: 'text-gray-600'
    },
    {
      platform: 'Linux',
      icon: FaLinux,
      description: 'Ubuntu 18.04+ / Debian 10+',
      status: 'coming-soon',
      size: 'Coming Soon',
      color: 'bg-gray-100 hover:bg-gray-200 border-gray-300',
      textColor: 'text-gray-600'
    }
  ];

  const handleDownload = (platform) => {
    // Placeholder for future download functionality
    console.log(`Download ${platform} version`);
    // For now, just show an alert
    alert(`${platform} version coming soon! We're working hard to bring you the best browsing experience.`);
  };

  return (
    <>
      <Head>
        <title>Download Kahana Browser | Installations</title>
        <meta name="description" content="Download Kahana Browser for Mac, Windows, and Linux. Experience the future of web browsing with our innovative browser technology." />
        <meta property="og:title" content="Download Kahana Browser | Installations" />
        <meta property="og:description" content="Download Kahana Browser for Mac, Windows, and Linux. Experience the future of web browsing with our innovative browser technology." />
        <meta property="og:type" content="website" />
      </Head>

      <main className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
        <Container>
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="pt-8 pb-4">
            <Breadcrumbs 
              items={[
                { name: "Home", url: "/" },
                { name: "Installations", url: "/installations" },
              ]} 
            />
          </nav>

          {/* Header Section */}
          <div className="text-center py-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Download Kahana Browser
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Experience the future of web browsing with our innovative browser technology. 
              Choose your platform and start exploring the web like never before.
            </p>
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-yellow-100 text-yellow-800 text-sm font-medium">
              <FaClock className="w-4 h-4 mr-2" />
              Downloads coming soon - Stay tuned!
            </div>
          </div>

          {/* Download Buttons Grid */}
          <div className="max-w-4xl mx-auto pb-20">
            <div className="grid md:grid-cols-3 gap-8">
              {downloadButtons.map((button, index) => {
                const IconComponent = button.icon;
                return (
                  <div
                    key={button.platform}
                    className="relative"
                  >
                    <button
                      onClick={() => handleDownload(button.platform)}
                      className={`w-full p-8 rounded-2xl border-2 transition-all duration-200 ${button.color} ${button.textColor} group`}
                      disabled={button.status === 'coming-soon'}
                    >
                      <div className="text-center">
                        <div className="mb-4">
                          <IconComponent className="w-16 h-16 mx-auto mb-4" />
                        </div>
                        <h3 className="text-2xl font-bold mb-2">
                          {button.platform}
                        </h3>
                        <p className="text-sm mb-4 opacity-75">
                          {button.description}
                        </p>
                        <div className="flex items-center justify-center space-x-2">
                          {button.status === 'coming-soon' ? (
                            <>
                              <FaClock className="w-4 h-4" />
                              <span className="font-medium">{button.size}</span>
                            </>
                          ) : (
                            <>
                              <FaDownload className="w-4 h-4" />
                              <span className="font-medium">{button.size}</span>
                            </>
                          )}
                        </div>
                      </div>
                    </button>
                    
                    {/* Coming Soon Badge */}
                    {button.status === 'coming-soon' && (
                      <div className="absolute -top-2 -right-2 bg-yellow-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                        Coming Soon
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Features Section */}
          <div className="max-w-6xl mx-auto py-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                What to Expect
              </h2>
              <p className="text-lg text-gray-600">
                Kahana Browser is being built with cutting-edge technology to revolutionize your browsing experience.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Lightning Fast</h3>
                <p className="text-gray-600">
                  Built for speed with optimized performance and minimal resource usage.
                </p>
              </div>

              <div className="text-center p-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Privacy First</h3>
                <p className="text-gray-600">
                  Your privacy is our priority with built-in protection and secure browsing.
                </p>
              </div>

              <div className="text-center p-6">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Innovative Features</h3>
                <p className="text-gray-600">
                  Experience next-generation browsing with AI-powered features and smart tools.
                </p>
              </div>
            </div>
          </div>

        </Container>
      </main>
    </>
  );
}
