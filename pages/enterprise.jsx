import React from 'react';
import Head from 'next/head';
import Footer from '../components/Footer';
import NavbarDup from '../components/NavbarDup';
import Image from 'next/image';
import { CheckIcon } from '@heroicons/react/20/solid';

const EnterprisePage = () => {
  return (
    <div>
      <Head>
        <title>Kahana - How enterprises generate recurring revenue</title>
        <meta
          name="Kahana"
          content="Kahana is the easiest way to monetize your content and research. Transform knowledge and expertise into subscription revenue. Sign up for free today!"
        />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-KQHFL9605P"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-KQHFL9605P');
            `,
          }}
        />
      </Head>

      <div className="sticky top-0 z-50">
        <NavbarDup />
      </div>

      {/* Hero section */}
      <section className="py-16 md:py-18">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h1 className="text-5xl font-bold mb-4 md:px-12 lg:px-24">
            Turn your company&apos;s best assets into recurring revenue
          </h1>
          <p className="text-lg mb-8 md:px-12 lg:px-24">
            Monetize the value you deliver and the knowledge you gain from projects on an ongoing basis.
          </p>
          <a
            href="https://7hkdcfzbmr0.typeform.com/to/ZYLHazEf?utm_content=enterprise_page"
            className="bg-[#3B675E] text-white py-2 px-6 rounded-md text-center inline-block mx-auto max-w-md"
          >
            Request a demo
          </a>
          <div className="mt-8">
            <iframe
              src="https://app.kahana.co/hub/tHwAYvYPzqVwGPGzh10k"
              width="100%"
              height="750"
              frameBorder="0"
              title="Kahana Hub"
              allowFullScreen
            ></iframe>
          </div>
          <div className="md:px-12 lg:px-24 mt-4 text-gray-500 text-center">
            Create and charge for access to an up-to-date repository of your best research, insights, best practices, methodologies, templates, etc.
          </div>
        </div>
      </section>

      {/* Feature section */}
      <section className="py-16 md:py-18">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 md:px-12 lg:px-24">
            Manage your recurring revenue streams, collaborate with your team, and gather customer feedback, all in one place.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 md:px-0">
            {/* Add "px-4 md:px-0" to the grid container */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Image
                src="/feature-1.png"
                alt="Feature 1"
                width={64}
                height={64}
              />
              <h3 className="text-xl font-semibold mt-4">Recurring Revenue</h3>
              <p className="mt-2">
                Build dynamic hubs of all your best data, templates, insights, research, methodologies, and best practices. It&apos;s like charging for access to your firm&apos;s brain. 
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Image
                src="/feature-1.png"
                alt="Feature 1"
                width={64}
                height={64}
              />
              <h3 className="text-xl font-semibold mt-4">Collaboration Tools</h3>
              <p className="mt-2">
                Enable colleagues and experts across your organization to contribute and build hubs together.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Image
                src="/feature-1.png"
                alt="Feature 1"
                width={64}
                height={64}
              />
              <h3 className="text-xl font-semibold mt-4">Community Engagement</h3>
              <p className="mt-2">
                Collaborate with customers to gather feedback and create an engaging environment where customers can connect with one another.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* What you get section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">What you get with Enterprise</h2>
          <div className="mx-auto max-w-4xl">
            <ul className="space-y-4 mx-auto max-w-md">
              <li className="flex items-center space-x-3">
                <CheckIcon className="h-5 w-5 text-green-500" aria-hidden="true" />
                <span className="text-sm text-gray-500">Real-time collaboration</span>
              </li>
              <li className="flex items-center space-x-3">
                <CheckIcon className="h-5 w-5 text-green-500" aria-hidden="true" />
                <span className="text-sm text-gray-500">Sync across devices</span>
              </li>
              <li className="flex items-center space-x-3">
                <CheckIcon className="h-5 w-5 text-green-500" aria-hidden="true" />
                <span className="text-sm text-gray-500">Unlimited hubs</span>
              </li>
              <li className="flex items-center space-x-3">
                <CheckIcon className="h-5 w-5 text-green-500" aria-hidden="true" />
                <span className="text-sm text-gray-500">Unlimited revenue streams</span>
              </li>
              <li className="flex items-center space-x-3">
                <CheckIcon className="h-5 w-5 text-green-500" aria-hidden="true" />
                <span className="text-sm text-gray-500">5 GB storage</span>
              </li>
              <li className="flex items-center space-x-3">
                <CheckIcon className="h-5 w-5 text-green-500" aria-hidden="true" />
                <span className="text-sm text-gray-500">100 GB storage</span>
              </li>
              <li className="flex items-center space-x-3">
                <CheckIcon className="h-5 w-5 text-green-500" aria-hidden="true" />
                <span className="text-sm text-gray-500">Advanced permissions & controls</span>
              </li>
              <li className="flex items-center space-x-3">
                <CheckIcon className="h-5 w-5 text-green-500" aria-hidden="true" />
                <span className="text-sm text-gray-500">SAML, Single-Sign On (SSO)</span>
              </li>
              <li className="flex items-center space-x-3">
                <CheckIcon className="h-5 w-5 text-green-500" aria-hidden="true" />
                <span className="text-sm text-gray-500">White glove 24/7 support</span>
              </li>
              <li className="flex items-center space-x-3">
                <CheckIcon className="h-5 w-5 text-green-500" aria-hidden="true" />
                <span className="text-sm text-gray-500">Custom & advanced reporting</span>
              </li>
              <li className="flex items-center space-x-3">
                <CheckIcon className="h-5 w-5 text-green-500" aria-hidden="true" />
                <span className="text-sm text-gray-500">Time & usage reporting</span>
              </li>
              <li className="flex items-center space-x-3">
                <CheckIcon className="h-5 w-5 text-green-500" aria-hidden="true" />
                <span className="text-sm text-gray-500">Custom integrations</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Testimonial section */}
      <section className="py-16 md:py-18">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 md:px-0">
            {/* Add "px-4 md:px-0" to the grid container */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-lg italic mb-4">
                &quot;Kahana has revolutionized the way we do business. Our subscription revenue has skyrocketed!&quot;
              </p>
              <p className="font-semibold">John Doe, CEO at TechCorp</p>
            </div>
            {/* Repeat similar blocks for other testimonials */}
          </div>
        </div>
      </section>

      {/* Contact section */}
      <section className="py-16 md:py-18">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Get a demo</h2>
          <p className="mb-4">Talk to a human to understand how Kahana can help your org.</p>
          <a
            href="https://7hkdcfzbmr0.typeform.com/to/ZYLHazEf?utm_content=enterprise_page"
            className="bg-[#3B675E] text-white py-2 px-6 rounded-md text-center inline-block mx-auto max-w-md"
          >
            Request a demo
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default EnterprisePage;
