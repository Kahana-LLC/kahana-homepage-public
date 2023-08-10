import React from 'react';
import Head from 'next/head';
import Footer from '../components/Footer';
import NavbarDup from '../components/NavbarDup';

const features = [
  {
    title: 'High Commissions',
    description: 'Earn competitive commissions on every sale.',
    icon: '/your-icon-path1.png', // Replace with your actual image path
  },
  {
    title: 'Advanced Tracking',
    description: 'Track your referrals and earnings with our advanced analytics.',
    icon: '/your-icon-path2.png',
  },
  // Add more features...
];

export default function AffiliateProgramPage() {
  return (
    <>
      <Head>
        <title>Kahana Affiliate Program</title>
        <meta
          name="Kahana"
          content="Kahana is the easiest way to monetize your content and research. Transform knowledge and expertise into subscription revenue. Sign up for free today! "
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
      <div>
        <div className="sticky top-0">
          <NavbarDup />
        </div>
        <header>
          {/* Add your header content */}
        </header>
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-100">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">
              Why Join Our Affiliate Program?
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center space-y-4"
                >
                  <img
                    src={feature.icon}
                    alt={`${feature.title} Icon`}
                    className="w-12 h-12"
                  />
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                  <p className="text-gray-700">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Add other sections */}
        <Footer />
      </div>
    </>
  );
}
