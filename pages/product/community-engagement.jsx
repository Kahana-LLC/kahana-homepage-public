import React from 'react';
import Head from 'next/head';
import Footer from '../../components/Footer';
import NavbarDup from '../../components/NavbarDup';
import Image from 'next/image';

const WikisPage = () => {
  return (
    <div>
      <Head>
        <title>Build communities through hubs of knowledge</title>
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
            Build communities through hubs of knowledge
          </h1>
          <p className="text-lg mb-8 md:px-12 lg:px-24">
            Collaborate with subscribers to gather feedback and create an engaging environment where subscribers can connect with one another, all in one place.
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
                     src="/wiki-feature-1.png"
                     alt="Feature 1"
                     width={360}
                     height={240}
                  />
               </div>
               <div className="md:col-span-1">
                  <h2 className="text-3xl font-semibold mb-4 md:px-12 lg:px-24">
                     Collaborative Wikis
                  </h2>
                  <p className="text-lg mb-6 md:px-12 lg:px-24">
                     Create and collaborate on wikis with your team. Share knowledge, documentation, and best practices.
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
                     Enhanced Search
                  </h2>
                  <p className="text-lg mb-6 md:px-12 lg:px-24">
                     Quickly find relevant information using our powerful search capabilities.
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
                     Mobile Friendly
                  </h2>
                  <p className="text-lg mb-6 md:px-12 lg:px-24">
                     Access your wikis and knowledge on the go with our mobile-friendly design.
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
