import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FaApple, FaWindows, FaLinux, FaDownload, FaClock } from 'react-icons/fa';
import { Container } from '../components/Container';
import Breadcrumbs from '../components/Breadcrumbs';
import { createClient } from '@/utils/supabase';

export default function Installations() {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    checkAuthentication();
  }, []);

  const checkAuthentication = async () => {
    try {
      const supabase = createClient();
      const { data: { session }, error } = await supabase.auth.getSession();
      
      if (error) {
        console.error('Error checking authentication:', error);
        // Redirect to auth page on error - use free plan to avoid Stripe redirect
        router.push('/oasis-auth?mode=login&plan=free&redirect=/installations');
        return;
      }
      
      if (!session) {
        // Not authenticated - redirect to auth page - use free plan to avoid Stripe redirect
        router.push('/oasis-auth?mode=login&plan=free&redirect=/installations');
        return;
      }
      
      setIsAuthenticated(true);
    } catch (err) {
      console.error('Failed to check authentication:', err);
      // Redirect to auth page on error - use free plan to avoid Stripe redirect
      router.push('/oasis-auth?mode=login&plan=free&redirect=/installations');
    } finally {
      setIsLoading(false);
    }
  };
  const downloadButtons = [
    {
      platform: 'Mac',
      icon: FaApple,
      description: 'macOS 10.15 or later (Apple Silicon)',
      status: 'available',
      size: 'Install the latest version',
      downloadUrl: 'https://app.box.com/s/4x605cd3ehhxbzyaqunquw5pp40vau9r',
      color: 'bg-[#4A6200] hover:bg-[#3E5300] border-[#4A6200]',
      textColor: 'text-white'
    },
    {
      platform: 'Mac Intel',
      icon: FaApple,
      description: 'macOS 10.15 or later (Intel)',
      status: 'available',
      size: 'Install the latest version',
      downloadUrl: 'https://app.box.com/s/wumbootmyp4qkxlkdqg7vqwwbdk70kqx',
      color: 'bg-[#4A6200] hover:bg-[#3E5300] border-[#4A6200]',
      textColor: 'text-white'
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

  const handleDownload = (button) => {
    if (button.status === 'coming-soon') {
      alert(`${button.platform} version coming soon! We're working hard to bring you the best browsing experience.`);
      return;
    }
    
    if (button.downloadUrl) {
      // Open download URL in new tab (Box.com will handle the download)
      window.open(button.downloadUrl, '_blank');
    } else {
      console.error('Download URL not configured');
      alert('Download URL not configured. Please contact support.');
    }
  };

  // Show loading state while checking authentication or redirecting
  if (isLoading || !isAuthenticated) {
    return (
      <>
        <Head>
          <title>Download Kahana Browser | Installations</title>
        </Head>
        <main className="min-h-screen bg-gradient-to-br from-gray-50 to-white flex items-center justify-center">
          <Container>
            <div className="text-center">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-[#4A6200] mb-4"></div>
              <p className="text-gray-600">Redirecting to authentication...</p>
            </div>
          </Container>
        </main>
      </>
    );
  }

  // Show normal content if authenticated
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
              Install Kahana Browser
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Get ready for a revolutionary browsing experience. Our next-generation browser 
              is designed to transform how you work and explore the web.
            </p>
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-4">
              <FaDownload className="w-4 h-4 mr-2" />
              Beta Version - Mac (Apple Silicon & Intel) now available for download!
            </div>
            <div className="max-w-2xl mx-auto px-4 py-3 bg-yellow-50 border-2 border-yellow-200 rounded-lg">
              <p className="text-sm text-yellow-900 font-semibold mb-2">
                ⚠️ Beta Software Notice
              </p>
              <p className="text-sm text-yellow-800">
                All downloads are currently in <strong>beta</strong>. By downloading and installing Kahana Browser, you acknowledge that you have read and agree to our{' '}
                <Link href="/terms-and-conditions" className="text-[#4A6200] no-underline hover:no-underline font-semibold">Terms and Conditions</Link>
                {', '}
                <Link href="/privacy-policy" className="text-[#4A6200] no-underline hover:no-underline font-semibold">Privacy Policy</Link>
                {', and '}
                <Link href="/security" className="text-[#4A6200] no-underline hover:no-underline font-semibold">Security</Link>.
              </p>
            </div>
          </div>

          {/* Download Buttons Grid */}
          <div className="max-w-5xl mx-auto pb-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {downloadButtons.map((button, index) => {
                const IconComponent = button.icon;
                return (
                  <div
                    key={button.platform}
                    className="relative"
                  >
                    <button
                      onClick={() => handleDownload(button)}
                      className={`w-full p-8 rounded-2xl border-2 transition-all duration-200 ${button.color} ${button.textColor} group ${
                        button.status === 'available' 
                          ? 'cursor-pointer hover:shadow-lg transform hover:scale-[1.02]' 
                          : 'cursor-not-allowed opacity-75'
                      }`}
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
                    
                    {/* Beta Badge - Show on all available downloads */}
                    {button.status === 'available' && (
                      <div className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                        Beta
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
            
            {/* Legal Notice Section */}
            <div className="mt-12 max-w-3xl mx-auto px-6 py-6 bg-gray-50 border-2 border-gray-200 rounded-lg">
              <p className="text-sm text-gray-700 text-center mb-4">
                <strong>By downloading Kahana Browser, you agree to our:</strong>
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link 
                  href="/terms-and-conditions" 
                  className="text-[#4A6200] hover:text-[#728552] font-semibold underline transition-colors duration-200"
                >
                  Terms and Conditions
                </Link>
                <span className="text-gray-400 hidden sm:inline">•</span>
                <Link 
                  href="/privacy-policy" 
                  className="text-[#4A6200] hover:text-[#728552] font-semibold underline transition-colors duration-200"
                >
                  Privacy Policy
                </Link>
                <span className="text-gray-400 hidden sm:inline">•</span>
                <Link 
                  href="/security" 
                  className="text-[#4A6200] hover:text-[#728552] font-semibold underline transition-colors duration-200"
                >
                  Security
                </Link>
              </div>
              <p className="text-xs text-gray-600 text-center mt-4">
                Please review these documents before installing. All versions are currently in beta and may contain bugs or incomplete features.
              </p>
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
