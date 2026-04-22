import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FaApple, FaClock, FaDownload, FaLinux, FaWindows } from 'react-icons/fa';
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
      const {
        data: { session },
        error,
      } = await supabase.auth.getSession();

      if (error || !session) {
        router.push('/oasis-auth?mode=login&plan=free&redirect=/installations');
        return;
      }

      setIsAuthenticated(true);
    } catch (err) {
      console.error('Failed to check authentication:', err);
      router.push('/oasis-auth?mode=login&plan=free&redirect=/installations');
    } finally {
      setIsLoading(false);
    }
  };

  const downloadButtons = [
    {
      platform: 'Mac (Apple Silicon)',
      icon: FaApple,
      description: 'Latest beta build for Apple Silicon Macs.',
      status: 'available',
      actionLabel: 'Download for Mac',
      downloadUrl: 'https://app.box.com/s/4x605cd3ehhxbzyaqunquw5pp40vau9r',
      cardColor: 'bg-oasis-green-100 hover:bg-oasis-green-200 border-oasis-green-300',
      textColor: 'text-black',
      bgHex: '#F2F4E5',
      hoverBgHex: '#E4E9CC',
      borderHex: '#CAD399',
      textHex: '#000000',
      badgeColor: 'bg-kahana-primary-800 text-white',
      badgeLabel: 'Beta',
    },
    {
      platform: 'Mac Intel',
      icon: FaApple,
      description: 'Stable beta build for Intel-based Macs.',
      status: 'available',
      actionLabel: 'Download for Intel Mac',
      downloadUrl: 'https://app.box.com/s/wumbootmyp4qkxlkdqg7vqwwbdk70kqx',
      cardColor: 'bg-oasis-green-100 hover:bg-oasis-green-200 border-oasis-green-300',
      textColor: 'text-black',
      bgHex: '#F2F4E5',
      hoverBgHex: '#E4E9CC',
      borderHex: '#CAD399',
      textHex: '#000000',
      badgeColor: 'bg-kahana-primary-900 text-white',
      badgeLabel: 'Beta',
    },
    {
      platform: 'Windows',
      icon: FaWindows,
      description: 'Windows support is in active development.',
      status: 'coming-soon',
      actionLabel: 'Coming Soon',
      cardColor: 'bg-gray-200 hover:bg-gray-300 border-gray-300',
      textColor: 'text-gray-700',
      bgHex: '#E5E7EB',
      hoverBgHex: '#D1D5DB',
      borderHex: '#D1D5DB',
      textHex: '#374151',
      badgeColor: 'bg-gray-600 text-white',
      badgeLabel: 'Coming Soon',
    },
    {
      platform: 'Linux',
      icon: FaLinux,
      description: 'Linux beta is planned after Windows release.',
      status: 'coming-soon',
      actionLabel: 'Coming Soon',
      cardColor: 'bg-gray-200 hover:bg-gray-300 border-gray-300',
      textColor: 'text-gray-700',
      bgHex: '#E5E7EB',
      hoverBgHex: '#D1D5DB',
      borderHex: '#D1D5DB',
      textHex: '#374151',
      badgeColor: 'bg-gray-600 text-white',
      badgeLabel: 'Coming Soon',
    },
  ];

  const handleDownload = (button) => {
    if (button.status === 'coming-soon') {
      alert(`${button.platform} is not available yet. Join the waitlist and we will announce it as soon as downloads open.`);
      return;
    }

    if (button.downloadUrl) {
      window.open(button.downloadUrl, '_blank');
      return;
    }

    console.error('Download URL not configured');
    alert('Download URL not configured. Please contact support.');
  };

  if (isLoading || !isAuthenticated) {
    return (
      <>
        <Head>
          <title>Download Oasis Browser | Installations</title>
        </Head>
        <main className="min-h-screen bg-gradient-to-br from-gray-50 to-white flex items-center justify-center">
          <Container>
            <div className="text-center">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-kahana-primary-700 mb-4" />
              <p className="text-gray-600">Redirecting to authentication...</p>
            </div>
          </Container>
        </main>
      </>
    );
  }

  return (
    <>
      <Head>
        <title>Download Oasis Browser for Mac | Installations</title>
        <meta
          name="description"
          content="Choose your Oasis Browser build and download in one click. Mac beta downloads are live, with Windows and Linux coming soon."
        />
        <meta property="og:title" content="Download Oasis Browser for Mac | Installations" />
        <meta
          property="og:description"
          content="Pick your platform and install Oasis Browser quickly. Apple Silicon and Intel Mac builds are available now."
        />
        <meta property="og:type" content="website" />
      </Head>

      <main className="relative min-h-screen bg-gradient-to-br from-gray-50 via-white to-oasis-green-50">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-kahana-primary-700 to-transparent opacity-30" />

        <Container>
          <nav aria-label="Breadcrumb" className="pt-8 pb-4">
            <Breadcrumbs
              items={[
                { name: 'Home', url: '/' },
                { name: 'Installations', url: '/installations' },
              ]}
            />
          </nav>

          <section className="pt-2 pb-6">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Choose your Oasis Browser build</h1>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl">
              Download the version that matches your machine. Mac beta builds are ready now, and we are actively shipping Windows and Linux next.
            </p>
          </section>

          <section className="max-w-6xl mx-auto pb-10">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {downloadButtons.map((button) => {
                const IconComponent = button.icon;

                return (
                  <div key={button.platform} className="relative">
                    <button
                      onClick={() => handleDownload(button)}
                      className={`installations-card-button w-full p-7 rounded-2xl border-2 transition-all duration-200 ${button.cardColor} ${button.textColor} ${
                        button.status === 'available'
                          ? 'cursor-pointer hover:shadow-xl transform hover:-translate-y-1'
                          : 'cursor-not-allowed opacity-95 is-disabled'
                      }`}
                      disabled={button.status === 'coming-soon'}
                      style={{
                        '--card-bg': button.bgHex,
                        '--card-hover-bg': button.hoverBgHex,
                        '--card-border': button.borderHex,
                        '--card-text': button.textHex,
                      }}
                    >
                      <div className="text-left">
                        <IconComponent className="w-10 h-10 mb-4" />
                        <h2 className="text-xl font-bold mb-2">{button.platform}</h2>
                        <p className="text-sm mb-5 opacity-95">{button.description}</p>
                        <div
                          className={`inline-flex items-center gap-2 text-sm font-semibold rounded-md px-3 py-2 ${
                            button.status === 'available' ? 'bg-black text-white' : ''
                          }`}
                        >
                          {button.status === 'available' ? (
                            <FaDownload className="w-4 h-4" />
                          ) : (
                            <FaClock className="w-4 h-4" />
                          )}
                          <span>{button.actionLabel}</span>
                        </div>
                      </div>
                    </button>

                    <div className={`absolute -top-2 -right-2 text-xs font-bold px-3 py-1 rounded-full ${button.badgeColor}`}>
                      {button.badgeLabel}
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          <section className="max-w-4xl mx-auto pb-16">
            <div className="rounded-2xl border border-oasis-green-200 bg-oasis-green-50 px-6 py-5">
              <p className="text-sm text-oasis-green-900 mb-3">
                Mac downloads are beta releases. Use them for evaluation and feedback while we continue improving performance and compatibility.
              </p>
              <p className="text-sm text-oasis-green-800">
                By downloading Oasis Browser, you agree to our{' '}
                <Link href="/terms-and-conditions" className="font-semibold underline hover:text-kahana-primary-700">
                  Terms and Conditions
                </Link>
                {', '}
                <Link href="/privacy-policy" className="font-semibold underline hover:text-kahana-primary-700">
                  Privacy Policy
                </Link>
                {', and '}
                <Link href="/security" className="font-semibold underline hover:text-kahana-primary-700">
                  Security
                </Link>
                .
              </p>
            </div>
          </section>
        </Container>
      </main>
      <style jsx global>{`
        .installations-card-button {
          background-color: var(--card-bg) !important;
          border-color: var(--card-border) !important;
          color: var(--card-text) !important;
        }

        .installations-card-button:hover {
          background-color: var(--card-hover-bg) !important;
        }

        .installations-card-button.is-disabled:hover {
          background-color: var(--card-bg) !important;
        }
      `}</style>
    </>
  );
}
