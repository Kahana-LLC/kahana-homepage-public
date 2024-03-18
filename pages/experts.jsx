import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Footer from '../components/Footer';
import NavbarDup from '../components/NavbarDup';
import ProductDemoSectionExperts from '../components/ProductDemoSectionExperts';
import Image from 'next/image';
import { CheckIcon } from '@heroicons/react/20/solid';
import expertsHub from '../assets/images/expertsHub.png';

const posts = [
  {
    title: 'On-Demand Hub Creation',
    description:
      'Don\'t have the time or energy to build hubs? We\'ll build them for you. Choose the number of hubs you want, add specific requests, and submit existing content you’d like to include. Our team will handle all the graphic design, formatting, and content creation you don’t want to touch. Track the progress of your hubs in real-time as they’re built right before your eyes. Finished hubs are delivered in as little as 5 business days - it’s like ordering Domino’s for recurring revenue.',
    imageUrl:
      'https://kahana-website-images.s3.us-east-2.amazonaws.com/On-Demand+Hub+Creation.webp',
    buttonQuote:
      'Order my hubs',
    buttonLink:
      '/order-hubs-on-demand',
  },
  {
    title: 'Custom Development',
    description:
      'Want to create something special? We’ll collaborate with you closely to develop tailor-made features, add-ons, and integrations that are specific to your needs.',
    imageUrl:
      'https://kahana-website-images.s3.us-east-2.amazonaws.com/Custom+Development.webp',
    buttonQuote:
      'Let\'s chat',
    buttonLink:
      'https://7hkdcfzbmr0.typeform.com/to/ya2MITnT?utm_source=solutions_page',
  },
  {
    title: 'Boost Program',
    description:
      'Want to get your hubs in front of more potential customers? We have you covered. Our team will create a tailored email campaign on your behalf and put your hub in front of thousands of potential customers per month that match your ideal customer profile. We take care of the entire process so that you generate recurring revenue on autopilot.',
    imageUrl:
      'https://kahana-website-images.s3.us-east-2.amazonaws.com/BoostProgram.webp',
    buttonQuote:
      'Apply now',
    buttonLink:
      'https://7hkdcfzbmr0.typeform.com/to/c9lwNpNb?utm_source=solutions_page',
  },
];

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

      {/* Add ons section */}
      <section className="px-4 pt-6 pb-20 sm:px-6 lg:px-8 lg:pt-20 lg:pb-28">
        <div className=" inset-0">
          <div className="h-1/3 bg-white sm:h-2/3" />
        </div>
        <div className=" mx-auto max-w-7xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Custom add-ons
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-xl text-gray-500 sm:mt-4">
              Looking for more? Explore these add-ons that you can use to tailor your experience and start making recurring revenue even faster  
            </p>
          </div>
          <div className="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
            {posts.map((post) => (
              <div
                key={post.title}
                className="flex flex-col overflow-hidden rounded-lg shadow-2xl hover:shadow-none border-2 border-slate-100"
              >
                <div className="flex-shrink-0">
                  <img
                    className="h-48 w-full object-cover"
                    src={post.imageUrl}
                    alt=""
                  /> 
                </div>
                <div className="flex flex-1 flex-col justify-between bg-white p-6">
                  <div className="flex-1">
                      <p className="text-xl font-semibold text-gray-900">
                        {post.title}
                      </p>
                      <p className="mt-3 text-base text-gray-500">
                        {post.description}
                      </p>
                  </div>
                </div>
                <div class="flex justify-center py-4 px-4">
                  <a
                    href={post.buttonLink}
                    className="flex w-1/2 justify-center rounded-md border border-transparent bg-[#3B675E] py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-[#024324]"
                  >
                      {post.buttonQuote}
                  </a>
                </div>
              </div>
            ))}
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

      <section className="py-16 md:py-18">
        <div className="container mx-auto text-center flex flex-col items-center">
          <h2 className="text-3xl font-bold mb-8 md:px-12 lg:px-24 px-4 mx-auto">Want your own hub but have too much on your plate?</h2>
          <p className="mb-4 px-4 mx-auto">We will build one for you. Set up your interview, and we will take care of the rest.</p>
          <div>
  <Link
    href="/order-hubs-on-demand"
    className="bg-[#3B675E] text-white py-2 px-6 rounded-md text-center inline-block mx-auto max-w-md"
  >
    Order my hub
  </Link>
</div>

        </div>
      </section>

      {/* Affiliate section */}
      <section className={`py-16 px-4 sm:px-6 lg:px-8 bg-white`}>
        <div className="max-w-7xl mx-auto text-center">
          <h2 className={`text-3xl font-bold text-gray-900`}>
            Become an affiliate
          </h2>
          <p className="mt-4 text-gray-700">
            Refer people to Kahana and earn up to a 30% commission.
          </p>
          <div>
  <Link href="/affiliates" className="block mt-8" legacyBehavior>
    <button className="px-6 py-2 bg-[#3B675E] text-white rounded-md shadow-md">
      Learn more
    </button>
  </Link>
</div>

        </div>
      </section> 
      
      <Footer />
    </div>
  );
};

export default ExpertsPage;