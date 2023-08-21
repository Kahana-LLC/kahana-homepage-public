import React from 'react';
import Head from 'next/head';
import Footer from '../../components/Footer';
import NavbarDup from '../../components/NavbarDup';
import Image from 'next/image';
import bulkUpload from '../../assets/images/bulkUpload.gif'

const WikisPage = () => {
  return (
    <div>
      <Head>
        <title>Turn your knowledge into recurring revenue</title>
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
          <h1 className="text-4xl font-bold mb-4 md:px-12 lg:px-24">
            Turn your knowledge into recurring revenue
          </h1>
          <p className="text-lg mb-8 md:px-12 lg:px-24">
            Build dynamic hubs of all your best data, templates, insights, research, methodologies, and best practices. It&apos;s like charging for access to your brain. 
          </p>
          <a
            href="https://app.kahana.co/signup"
            className="bg-[#3B675E] text-white py-2 px-6 rounded-md text-center inline-block"
          >
            Get Kahana free
          </a>
        </div>
      </section>

      {/* Features section */}
      <section className="py-20">
         <div className="container mx-auto px-4 md:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:px-4 lg:px-0">
               
               {/* First row */}
               <div className="md:col-span-1">
                  <Image
                     src={bulkUpload}
                     alt="Bulk Upload"
                     width={360}
                     height={240}
                  />
               </div>
               <div className="md:col-span-1">
                  <h2 className="text-3xl font-semibold mb-4 md:px-12 lg:px-24">
                     Bulk Upload
                  </h2>
                  <p className="text-lg mb-6 md:px-12 lg:px-24">
                     Add existing materials you&apos;ve already created or curated (e.g., PDFs, Notion pages, Google Docs, web pages, videos, etc.) and create notes with ease to quickly build repositories of knowledge. 
                  </p>
               </div>
               
               {/* Second row */}
               <div className="md:col-span-1">
                  <Image
                     src="/wiki-feature-2.png"
                     alt="Feature 2"
                     width={360}
                     height={240}
                  />
               </div>
               <div className="md:col-span-1">
                  <h2 className="text-3xl font-semibold mb-4 md:px-12 lg:px-24">
                     Connect to Stripe
                  </h2>
                  <p className="text-lg mb-6 md:px-12 lg:px-24">
                     Connect to a new or existing Stripe account so that you can securely and seamlessly accept payments that go straight to your bank account for access to your hubs.
                  </p>
               </div>
               
               {/* Third row */}
               <div className="md:col-span-1">
                  <Image
                     src="/wiki-feature-3.png"
                     alt="Feature 3"
                     width={360}
                     height={240}
                  />
               </div>
               <div className="md:col-span-1">
                  <h2 className="text-3xl font-semibold mb-4 md:px-12 lg:px-24">
                     Choose Your Price Point & Payment Type  
                  </h2>
                  <p className="text-lg mb-6 md:px-12 lg:px-24">
                     For each hub, choose how much you want to charge and whether it&apos;s a one-time payment or a recurring subscription to access.  
                  </p>
               </div>

               {/* Fourth row */}
               <div className="md:col-span-1">
                  <Image
                     src="/wiki-feature-3.png"
                     alt="Feature 3"
                     width={360}
                     height={240}
                  />
               </div>
               <div className="md:col-span-1">
                  <h2 className="text-3xl font-semibold mb-4 md:px-12 lg:px-24">
                     Start Earning!  
                  </h2>
                  <p className="text-lg mb-6 md:px-12 lg:px-24">
                     After you set your payment terms, a paywall will automatically be generated for you that you can begin sharing! Be sure to add a title, cover photo, and description to each hub to improve the experience for potential customers. 
                  </p>
               </div>
            </div>
         </div>
      </section>
      <Footer />
    </div>
  );
};

export default WikisPage;
