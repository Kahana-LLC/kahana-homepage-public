import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Footer from '../components/Footer';
import NavbarDup from '../components/NavbarDup';
import ProductDemoSectionExperts from '../components/ProductDemoSectionExperts';
import Image from 'next/image';
import { CheckIcon } from '@heroicons/react/20/solid';
import expertsHub from '../assets/images/expertsHub.png';

const ExpertsPage = () => {
  return (
    <div>
      <Head>
        <title>Kahana for experts</title>
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
            Turn the knowledge you&apos;ve gained into recurring revenue 
          </h1>
          <p className="text-lg mb-8 md:px-12 lg:px-24 px-4">
            Your brain is filled with valuable information. Now you can charge for access to it and earn passive income. 
          </p>
          <a
            href="https://app.kahana.co/signup"
            className="bg-[#3B675E] text-white py-2 px-6 rounded-md text-center inline-block mx-auto max-w-md"
          >
            Use Kahana free
          </a>
          <div className="mt-8">
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <a href="https://app.kahana.co/hub/TEdBTfY10Dd9H7QIBgQc" target="_blank" rel="noopener noreferrer">
                <Image
                  src={expertsHub}
                  alt="Kahana Hub"
                  width={750}
                  height={750}
                  layout="responsive"
                />
              </a>
            </div>
          </div>
          <div className="md:px-12 lg:px-24 mt-4 text-gray-500 text-center">
            Create and charge for access to an up-to-date repository of your best insights, frameworks, methodologies, etc.
          </div>
        </div>
      </section>

      <ProductDemoSectionExperts />
      
      {/* What you get section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 md:px-12 lg:px-24 px-4">Build knowledge banks with your:</h2>
          <div className="flex justify-center">
            <div className="mx-auto max-w-md p-6 bg-gray-100 rounded-lg">
              <ul className="space-y-4">
                <li className="flex items-center space-x-3">
                  <CheckIcon className="h-5 w-5 text-green-500" aria-hidden="true" />
                  <span className="text-sm text-gray-500">Insights</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckIcon className="h-5 w-5 text-green-500" aria-hidden="true" />
                  <span className="text-sm text-gray-500">Frameworks</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckIcon className="h-5 w-5 text-green-500" aria-hidden="true" />
                  <span className="text-sm text-gray-500">Templates</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckIcon className="h-5 w-5 text-green-500" aria-hidden="true" />
                  <span className="text-sm text-gray-500">Methodologies</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckIcon className="h-5 w-5 text-green-500" aria-hidden="true" />
                  <span className="text-sm text-gray-500">Best Practices</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckIcon className="h-5 w-5 text-green-500" aria-hidden="true" />
                  <span className="text-sm text-gray-500">Google Docs</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckIcon className="h-5 w-5 text-green-500" aria-hidden="true" />
                  <span className="text-sm text-gray-500">Google Sheets</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckIcon className="h-5 w-5 text-green-500" aria-hidden="true" />
                  <span className="text-sm text-gray-500">Google Drive Assets</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckIcon className="h-5 w-5 text-green-500" aria-hidden="true" />
                  <span className="text-sm text-gray-500">Notion Pages</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckIcon className="h-5 w-5 text-green-500" aria-hidden="true" />
                  <span className="text-sm text-gray-500">And more!</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial section */}
      <section className="py-16 md:py-18">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">What our clients say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 md:px-0">
            {/* Add "px-4 md:px-0" to the grid container */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-lg italic mb-4">
                &quot;You took my brain and turned it into a phenomenal asset. I could not do this at all without Kahana - I wouldn&apos;t even know where to start.&quot;
              </p>
              <p className="font-semibold">Tay L., Brand Deal Expert</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-lg italic mb-4">
                &quot;I love how easy it is to set-up, make changes, add value & connect with your audience. The platform has allowed me to monetize my knowledge, and added a passive revenue stream to my small business.&quot;
              </p>
              <p className="font-semibold">Kelsey V., Pinterest Expert</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-lg italic mb-4">
                &quot;It&apos;s finally out of my head! I&apos;ve been wanting to build digital products for months and couldn&apos;t make any progress; Kahana streamlined it and made it so much easier.&quot;
              </p>
              <p className="font-semibold">Gregory G., Business Process Expert</p>
            </div>
            {/* Repeat similar blocks for other testimonials */}
          </div>
        </div>
      </section>

      {/* Contact section */}
      <section className="py-16 md:py-18">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 md:px-12 lg:px-24 px-4">Want your own hub but have too much on your plate?</h2>
          <p className="mb-4 px-4">We&apos;ll build one for you. Set up your interview, and we&apos;ll take care of the rest.</p>
          <Link href="/solutions">
            <a className="bg-[#3B675E] text-white py-2 px-6 rounded-md text-center inline-block mx-auto max-w-md">
              Order my hub
            </a>
          </Link>
        </div>
      </section>

      <section className={`py-16 px-4 sm:px-6 lg:px-8 bg-white`}>
        <div className="max-w-7xl mx-auto text-center">
          <h2 className={`text-3xl font-bold text-gray-900`}>
            Become an affiliate
          </h2>
          <p className="mt-4 text-gray-700">
            Refer people to Kahana and earn up to a 30% commission.
          </p>
          <Link href="/affiliates">
            <a className="block mt-8">
              <button className="px-6 py-2 bg-[#038270] text-white rounded-md shadow-md hover:bg-[#046856]">
                Learn more
              </button>
            </a>
          </Link>
        </div>
      </section> 
      
      <Footer />
    </div>
  );
};

export default ExpertsPage;
