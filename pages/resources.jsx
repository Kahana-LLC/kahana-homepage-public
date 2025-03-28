import React from 'react';
import Head from 'next/head';
import Script from 'next/script';
import Image from 'next/image';
import Link from 'next/link';
import ResourcesCalltoAction from '../components/ResourcesCalltoAction';
import DigitalProductsResources from '../components/DigitalProductsResources';
import GoogleDriveResources from '../components/GoogleDriveResources';
import NotionResources from '../components/NotionResources';

const Page = () => {
  return (
    <div className="bg-gray-100">
      <Head>
        <title>Kahana Resources</title>
        <meta
          name="Kahana"
          content="Kahana is the easiest way to monetize your content and research. Transform knowledge and expertise into subscription revenue. Sign up for free today!"
        />
      </Head>
      
      <main>
        <div className="max-w-7xl mx-auto p-8">
          <section
            className="bg-gradient-to-b from-[#3B4041] to-[#3B675E] text-white p-8 rounded-lg mb-8"
            style={{
              paddingTop: '20px',
              paddingBottom: '20px',
              paddingLeft: '20px',
              paddingRight: '20px',
            }}
          >
            <h1 className="text-3xl font-semibold mb-4">
              Resources
            </h1>
          </section>
          
          <p className="text-gray-600 mb-6">
            Explore our comprehensive collection of resources designed to help you succeed in monetizing your digital content.
          </p>
          
          <ResourcesCalltoAction />
          <DigitalProductsResources />
          <GoogleDriveResources />
          <NotionResources />
        </div>
      </main>

      {/* CTA Section */}
      <section className="bg-kahana-primary py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Learn More?
          </h2>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            Schedule a demo to see how Kahana can help you secure your resources and improve productivity.
          </p>
          <Link href="/contact">
            <button className="bg-white text-kahana-primary px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors">
              Schedule Demo
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Page;
