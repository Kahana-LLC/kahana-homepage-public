import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Footer from '../components/Footer';
import Link from 'next/link';
import NavbarDup from '../components/NavbarDup';
import ProductDemoSectionEnterprise from '../components/ProductDemoSectionEnterprise';
import { CheckIcon } from '@heroicons/react/20/solid';
import enterpriseHub from '../assets/images/enterpriseHub.png';

const EnterprisePage = () => {
  return (
    <div>
      <Head>
        <title>Collaboration and Knowledge Management Platform</title>
        <meta
          name="description"
          content="Kahana is the easiest way to monetize your content and research. Transform knowledge and expertise into subscription revenue. Sign up for free today!"
        />
      </Head>

      <div className="sticky top-0 z-50">
        <NavbarDup />
      </div>

      {/* Hero section */}
      <section className="py-24 md:py-24">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h1 className="text-5xl font-bold mb-4 md:px-12 lg:px-24">
            Stop squinting to find files and tabs
          </h1>
          <p className="text-lg mb-8 md:px-12 lg:px-24">
            Start sharing and consuming information like it&apos;s 2024.
          </p>
          <Link href="/sales" className="bg-[#3B675E] text-white py-2 px-6 rounded-md text-center inline-block mx-auto max-w-md">
            Request a demo
          </Link>
          {/* <div className="mt-8">
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <a href="https://app.kahana.co/hub/tHwAYvYPzqVwGPGzh10k" target="_blank" rel="noopener noreferrer">
                <Image
                  src={enterpriseHub}
                  alt="Kahana Hub"
                  width={750}
                  height={750}
                  layout="responsive"
                />
              </a>
            </div>
          </div> 
          <div className="md:px-12 lg:px-24 mt-4 text-gray-500 text-center">
            Create and charge for access to an up-to-date repository of your best data, research, insights, best practices, methodologies, templates, etc., like this hub
          </div> */}
        </div>
      </section>

      <ProductDemoSectionEnterprise />

      {/* What you get section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 md:px-12 lg:px-24 px-4">What you get with Enterprise</h2>
          <div className="flex justify-center">
            <div className="mx-auto max-w-md p-6 bg-gray-100 rounded-lg">
              <ul className="space-y-4">
                <li className="flex items-center space-x-3">
                  <CheckIcon className="h-5 w-5 text-green-500" aria-hidden="true" />
                  <span className="text-sm text-gray-500">Unlimited hubs</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckIcon className="h-5 w-5 text-green-500" aria-hidden="true" />
                  <span className="text-sm text-gray-500">Direct upgrade & feature requests</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckIcon className="h-5 w-5 text-green-500" aria-hidden="true" />
                  <span className="text-sm text-gray-500">Dedicated account management</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckIcon className="h-5 w-5 text-green-500" aria-hidden="true" />
                  <span className="text-sm text-gray-500">Advanced permissions & controls</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckIcon className="h-5 w-5 text-green-500" aria-hidden="true" />
                  <span className="text-sm text-gray-500">White glove support</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckIcon className="h-5 w-5 text-green-500" aria-hidden="true" />
                  <span className="text-sm text-gray-500">Custom & advanced reporting</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckIcon className="h-5 w-5 text-green-500" aria-hidden="true" />
                  <span className="text-sm text-gray-500">Hands-on document & data migration</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckIcon className="h-5 w-5 text-green-500" aria-hidden="true" />
                  <span className="text-sm text-gray-500">Custom integrations</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckIcon className="h-5 w-5 text-green-500" aria-hidden="true" />
                  <span className="text-sm text-gray-500">Inrceased usage & data ceilings</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial section */}
      
      {/* <section className="py-16 md:py-18">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">What our clients say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 md:px-0">

            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-lg italic mb-4">
                &quot;You took my brain and turned it into a phenomenal asset. I could not do this at all without Kahana - I wouldn&apos;t even know where to start.&quot;
              </p>
              <p className="font-semibold">Tay L., CEO at TheCorporateCreator LLC</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-lg italic mb-4">
                &quot;I love how easy it is to set-up, make changes, add value & connect with your audience. The platform has allowed me to monetize my knowledge, and added a passive revenue stream to my small business.&quot;
              </p>
              <p className="font-semibold">Kelsey V., CEO at Kelsey Vetter Co LLC</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-lg italic mb-4">
                &quot;It&apos;s finally out of my head! I&apos;ve been wanting to build digital products for months and couldn&apos;t make any progress; Kahana streamlined it and made it so much easier.&quot;
              </p>
              <p className="font-semibold">Gregory G., CEO at Gray Solutions, LLC</p>
            </div>

          </div>
        </div>
      </section> */}

      {/* Contact section */}
      <section className="py-16 md:py-18">
        <div className="container mx-auto text-center flex flex-col items-center">
          <h2 className="text-3xl font-bold mb-8 md:px-12 lg:px-24 px-4 mx-auto">Stop asking &ldquo;Where&apos;s that file?&rdquo; 47 times a week.</h2>
          <p className="mb-4 px-4 mx-auto">Learn how Kahana can make life easier for you and your team.</p>
          <div className="mx-auto">
          <Link href="/sales" className="bg-[#3B675E] text-white py-2 px-6 rounded-md text-center inline-block mx-auto max-w-md">
            Request a demo
          </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default EnterprisePage;
