import Head from 'next/head';
// import Image from 'next/image';

import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

//components
const posts = [
  {
    title: 'On-Demand Hub Creation',
    href: 'https://7hkdcfzbmr0.typeform.com/to/ZYLHazEf?utm_source=xxxxx&utm_medium=xxxxx&utm_campaign=xxxxx&utm_term=xxxxx&utm_content=xxxxx',
    //category: { name: 'Olivia Mancuso', href: 'https://www.tiktok.com/@oliviamancuso__' },
    description:
      'Quick and easy. It’s like ordering Domino’s for recurring revenue. Choose the number of hubs you want, add specific requests, and submit existing content you’d like to include. Our team will handle all the graphic design, formatting, and content creation you don’t want to touch. Track the progress of your hubs in real-time as they’re built right before your eyes. Finished hubs are delivered in as little as 5 business days.',
    //date: 'Mar 16, 2020',
    //datetime: '2020-03-16',
    imageUrl:
      'https://kahana-website-images.s3.us-east-2.amazonaws.com/On-Demand+Hub+Creation.webp',
    //readingTime: '6 min',
    //author: {
      //name: 'Roel Aufderehar',
      //href: '#',
      //imageUrl:
        //'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    //},
  },
  {
    title: 'Custom Development',
    href: 'https://7hkdcfzbmr0.typeform.com/to/ZYLHazEf?utm_source=xxxxx&utm_medium=xxxxx&utm_campaign=xxxxx&utm_term=xxxxx&utm_content=xxxxx',
    //category: { name: 'Gabrielle Judge', href: 'https://www.tiktok.com/@gabrielle_judge' },
    description:
      'Want to create something special? We’ll collaborate with you closely to develop tailor-made features, add-ons, and integrations that are specific to the needs of your organization.',
    //date: 'Mar 10, 2020',
   //datetime: '2020-03-10',
    imageUrl:
      'https://kahana-website-images.s3.us-east-2.amazonaws.com/Custom+Development.webp',
    //readingTime: '4 min',
    //author: {
      //name: 'Brenna Goyette',
      //href: '#',
      //imageUrl:
        //'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    //},
  },
  {
    title: 'Recurring Revenue Implementation',
    href: 'https://7hkdcfzbmr0.typeform.com/to/ZYLHazEf?utm_source=xxxxx&utm_medium=xxxxx&utm_campaign=xxxxx&utm_term=xxxxx&utm_content=xxxxx',
    //category: { name: 'Josh Slavin', href: 'https://www.tiktok.com/@slavinjoshua' },
    description:
      'Our recurring revenue implementation program combines on-demand hub creation, custom development, and tailored training to help organizations create profitable hubs from existing assets, templates, and methodologies.',
    //date: 'Feb 12, 2020',
    //datetime: '2020-02-12',
    imageUrl:
      'https://kahana-website-images.s3.us-east-2.amazonaws.com/Recurring+Revenue+Implementation.webp',
    //readingTime: '11 min',
    //author: {
      //name: 'Daniela Metz',
      //href: '#',
      //imageUrl:
        //'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    //},
  },
];
//
export default function Explore() {
  return (
    <>
      <Head>
        <title>Kahana - Helping Creators Monetize</title>
        <meta
          name="Kahana"
          content="Kahana is the easiest way to monetize your content and research. Transform knowledge and expertise into subscription revenue. Sign up for free today! "
        />
      </Head>
      <div>
        <div style={{ zIndex: '1' }} className="sticky top-0">
          <Navbar />
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
                        className="h-96 w-full object-cover"
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
                        <a href={post.href} className="mt-2 block">
                          <p className="text-xl font-semibold text-gray-900">
                            {post.title}
                          </p>
                          <p className="mt-3 text-base text-gray-500">
                            {post.description}
                          </p>
                        </a>
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
