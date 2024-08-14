import Head from 'next/head';
// import Image from 'next/image';

import Footer from '../components/Footer';
import NavbarDup from '../components/NavbarDup';

//components
const posts = [
  {
    title: 'Boost Program',
    description:
      'Don\'t have the time or energy to market your hubs? We have you covered. Our team will create a tailored email campaign on your behalf and put your hub in front of thousands of potential customers per month that match your ideal customer profile. We take care of the entire process so that you generate recurring revenue on autopilot.',
    imageUrl:
      'https://kahana-website-images.s3.us-east-2.amazonaws.com/BoostProgram.webp',
    buttonQuote:
      'Apply now',
    buttonLink:
      'https://7hkdcfzbmr0.typeform.com/to/c9lwNpNb?utm_source=solutions_page',
  },
  {
    title: 'On-Demand Hub Creation',
    description:
      'Quick and easy. It’s like ordering Domino’s for recurring revenue. Choose the number of hubs you want, add specific requests, and submit existing content you’d like to include. Our team will handle all the graphic design, formatting, and content creation you don’t want to touch. Track the progress of your hubs in real-time as they’re built right before your eyes. Finished hubs are delivered in as little as 5 business days.',
    imageUrl:
      'https://kahana-website-images.s3.us-east-2.amazonaws.com/On-Demand+Hub+Creation.webp',
    buttonQuote:
      'Request a quote',
    buttonLink:
      'https://7hkdcfzbmr0.typeform.com/to/K9srs4OE?utm_source=solutions_page',
  },
  {
    title: 'Custom Development',
    description:
      'Want to create something special? We’ll collaborate with you closely to develop tailor-made features, add-ons, and integrations that are specific to the needs of your organization.',
    imageUrl:
      'https://kahana-website-images.s3.us-east-2.amazonaws.com/Custom+Development.webp',
    buttonQuote:
      'Let\'s chat',
    buttonLink:
      'https://7hkdcfzbmr0.typeform.com/to/ya2MITnT?utm_source=solutions_page',
  },
  {
    title: 'Recurring Revenue Implementation',
    description:
      'Our recurring revenue implementation program combines on-demand hub creation, custom development, and tailored training to help organizations create profitable hubs from existing assets, templates, and methodologies.',
    imageUrl:
      'https://kahana-website-images.s3.us-east-2.amazonaws.com/Recurring+Revenue+Implementation.webp',
    buttonQuote:
      'Let\'s chat',
    buttonLink:
      'https://7hkdcfzbmr0.typeform.com/to/NvNSzKPE?utm_source=solutions_page',
  },
];
//
export default function Solutions() {
  return (
    <>
      <Head>
        <title>Kahana Solutions</title>
        <meta
          name="Kahana"
          content="Kahana is the easiest way to monetize your content and research. Transform knowledge and expertise into subscription revenue. Sign up for free today! "
        />
      </Head>
      <div>
        <div style={{ zIndex: '1' }} className="sticky top-0">
          <NavbarDup />
        </div>
        <main>
          <div className=" bg-gray-50 px-4 pt-6 pb-20 sm:px-6 lg:px-8 lg:pt-20 lg:pb-28">
            <div className=" inset-0">
              <div className="h-1/3 bg-white sm:h-2/3" />
            </div>
            <div className=" mx-auto max-w-7xl">
              <div className="text-center">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Ready to start getting recurring revenue?
                </h2>
                <p className="mx-auto mt-3 max-w-2xl text-xl text-gray-500 sm:mt-4">
                  Here are all the different ways we can help you make it happen
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
                        {/* <p className="text-sm font-medium text-indigo-600">
                          <a
                            href={post.category.href}
                            className="hover:underline"
                          >
                            {post.category.name}
                          </a>
                        </p> */}
                        {/* <a href={post.href} className="mt-2 block"> */}
                          <p className="text-xl font-semibold text-gray-900">
                            {post.title}
                          </p>
                          <p className="mt-3 text-base text-gray-500">
                            {post.description}
                          </p>
                        {/*</a> */}
                      </div>
                      {/* <div className="mt-6 flex items-center">
                      <div className="flex-shrink-0">
                        <a href={post.author.href}>
                          <span className="sr-only">{post.author.name}</span>
                          <img
                            className="h-10 w-10 rounded-full"
                            src={post.author.imageUrl}
                            alt=""
                          />
                        </a>
                      </div>
                      <div className="ml-3">
                        <p className="text-sm font-medium text-gray-900">
                          <a
                            href={post.author.href}
                            className="hover:underline"
                          >
                            {post.author.name}
                          </a>
                        </p>
                        <div className="flex space-x-1 text-sm text-gray-500">
                          <time dateTime={post.datetime}>{post.date}</time>
                          <span aria-hidden="true">&middot;</span>
                          <span>{post.readingTime} read</span>
                        </div>
                      </div> 
                    </div>*/}
                    </div>
                    <div class="flex justify-center py-4 px-4">
                      <a
                        href={post.buttonLink}
                        className="flex w-1/2 justify-center rounded-md border border-transparent bg-[#038270] py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-[#024324]"
                      >
                          {post.buttonQuote}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
