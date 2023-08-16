import React from 'react';
import Head from 'next/head';
import Footer from '../../components/Footer';
import NavbarDup from '../../components/NavbarDup';
import Image from 'next/image';

const Page = () => {
  return (
    <div className="bg-white">
      <Head>
        <title>Best Practices & Tips for a Great LinkedIn Profile</title>
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
      
      {/* <div className="bg-cover bg-center h-64" style={{ backgroundImage: 'url(/cover-image.jpg)' }} /> */}
      <div className="sticky top-0 z-50">
        <NavbarDup />
      </div>
      
      <div className="max-w-7xl mx-auto p-8">
        <h1 className="text-3xl font-semibold mb-4">
          Best Practices & Tips for a Great LinkedIn Profile
        </h1>
        
        <p className="text-gray-600 mb-6">
          Enhance your LinkedIn presence with these valuable tips and best practices.
        </p>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Optimize Your Profile Picture</h2>
          <p className="text-gray-600">
            Your profile picture is the first impression you make on LinkedIn. Make sure it&apos;s clear and professional.
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Craft a Compelling Headline</h2>
          <p className="text-gray-600">
            Your headline should showcase your expertise and catch the reader&apos;s attention.
          </p>
        </section>
        
        {/* Add more sections as needed */}
        
      </div>
      <Footer />
    </div>
  );
};

export default Page;
