import { useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { trackDemoRequest } from '../utils/conversionTracking';

export default function ThankYouDemo() {
  useEffect(() => {
    // Track the demo request completion
    trackDemoRequest('tally_form', {
      form_completion: true,
      conversion_page: 'thank_you'
    });
  }, []);

  return (
    <>
      <Head>
        <title>Thank You | Demo Request Received | Kahana</title>
        <meta name="description" content="Thank you for requesting a demo of Oasis. We'll be in touch shortly." />
      </Head>

      <main className="min-h-screen bg-white pt-24 pb-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-xl shadow-xl border border-[#A5DAD8]/30 p-8 md:p-12">
            {/* Success Icon */}
            <div className="mx-auto w-16 h-16 flex items-center justify-center rounded-full bg-[#66C2BE]/10 mb-6">
              <svg className="w-8 h-8 text-[#66C2BE]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Thank You for Your Interest!
            </h1>
            
            <p className="text-xl text-gray-600 mb-8">
              We've received your demo request and will be in touch shortly to schedule a personalized demonstration of Oasis.
            </p>

            <div className="bg-gray-50 rounded-lg p-6 mb-8">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">What happens next?</h2>
              <ul className="text-left space-y-4">
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-[#66C2BE]/10 mr-3 mt-1">
                    <span className="text-[#66C2BE] text-sm font-medium">1</span>
                  </span>
                  <span className="text-gray-600">Our team will review your request within 1 business day</span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-[#66C2BE]/10 mr-3 mt-1">
                    <span className="text-[#66C2BE] text-sm font-medium">2</span>
                  </span>
                  <span className="text-gray-600">You'll receive an email to schedule your demo at a convenient time</span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-[#66C2BE]/10 mr-3 mt-1">
                    <span className="text-[#66C2BE] text-sm font-medium">3</span>
                  </span>
                  <span className="text-gray-600">We'll prepare a customized demo based on your requirements</span>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <Link 
                href="/product/enterprise-browser"
                className="block w-full bg-[#66C2BE] text-white rounded-lg px-6 py-3 text-center font-medium hover:bg-[#66C2BE]/90 transition-colors duration-200"
              >
                Learn More About Oasis
              </Link>
              <Link 
                href="/"
                className="block w-full bg-white text-gray-600 rounded-lg px-6 py-3 text-center font-medium border border-gray-200 hover:bg-gray-50 transition-colors duration-200"
              >
                Return to Homepage
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
} 