import React from 'react';
import Head from 'next/head';
import Footer from '../components/Footer';
import Image from 'next/image';
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
      <Footer />
    </div>
  );
}

export default Page;
