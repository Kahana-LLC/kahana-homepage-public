import Head from 'next/head';
// import Image from 'next/image';

import Footer from '../components/Footer';
import NavbarDup from '../components/NavbarDup';

//components
const posts = [
  {
    title: 'Pinterest Success Session',
    href: 'https://app.kahana.co/hub/tHwAYvYPzqVwGPGzh10k',
    category: { name: 'Kelsey Vetter', href: 'https://www.tiktok.com/@kelseyvetterco' },
    description:
      'Are you missing out on the massive potential of the traffic-driving powerhouse, Pinterest? This comprehensive Pinterest Success Session will teach you how to master Pinterest Marketing in less than 1 hour so you can start driving traffic to your website, growing your audience and increasing your sales.',
    //date: 'Feb 12, 2020',
    //datetime: '2020-02-12',
    imageUrl:
      'https://kahana-website-images.s3.us-east-2.amazonaws.com/kelseyVetter.png',
    //readingTime: '11 min',
    //author: {
      //name: 'Daniela Metz',
      //href: '#',
      //imageUrl:
        //'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    //},
  },
  {
    title: 'What it\'s like being an NFL player',
    href: 'https://app.kahana.co/hub/smGioNXlSDH9Kh9cjg0A',
    category: { name: 'Benjamin St-Juste', href: 'https://www.tiktok.com/@benj_juice?lang=en' },
    description:
      'What you see on Sundays is only 1% of the story: our performance is the result of months of training, prehab, and mental prep that we put in year-round. Join me and explore what goes on behind the scenes of the grind.',
    //date: 'Mar 16, 2020',
    //datetime: '2020-03-16',
    imageUrl:
      'https://kahana-website-images.s3.us-east-2.amazonaws.com/benjaminStJuste.png',
    //readingTime: '6 min',
    //author: {
      //name: 'Roel Aufderehar',
      //href: '#',
      //imageUrl:
        //'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    //},
  },
  {
    title: 'The Ultimate Guide to Getting Internships/Research Opportunities',
    href: 'https://app.kahana.co/hub/UMKtgp76MN1MvZuD6p7W',
    category: { name: 'wAmy', href: 'https://www.youtube.com/@wamyy5' },
    description:
      'A hub of knowledge, resources, tips, and tricks I\'ve gathered over my career so far, from securing internships (and full-time jobs) to getting a research opportunity in a Nobel Prize Laureate\'s lab!  The internet is scattered with so much information that is overwhelming to navigate, so I synthesized all the best advice for you! I also collected tips I learned from my friends from Caltech, MIT, Microsoft, PhD programs, and more. There are a lot of things I wish I had known, so I hope to save you the time and energy I went through with this curated knowledge hub :)',
    //date: 'Mar 16, 2020',
    //datetime: '2020-03-16',
    imageUrl:
      'https://kahana-website-images.s3.us-east-2.amazonaws.com/wAmy.png',
    //readingTime: '6 min',
    //author: {
      //name: 'Roel Aufderehar',
      //href: '#',
      //imageUrl:
        //'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    //},
  },
  {
    title: 'Your Guide to Manifesting Anything',
    href: 'https://app.kahana.co/hub/nHxv8vCZBv6i0bVPunyp',
    category: { name: 'Olivia Mancuso', href: 'https://www.tiktok.com/@oliviamancuso__' },
    description:
      'This hub is for those who are dipping their toes into manifesting but don\'t want to spend thousands of dollars on a program or retreat to start their journey. Since implementing the manifesting and vision boarding strategies I share in this hub, I went from making $40K a year to consistent 5-figure months, lost 20 lbs in less than 4 months, and more.',
    //date: 'Mar 16, 2020',
    //datetime: '2020-03-16',
    imageUrl:
      'https://kahana-website-images.s3.us-east-2.amazonaws.com/oliviaMancuso.png',
    //readingTime: '6 min',
    //author: {
      //name: 'Roel Aufderehar',
      //href: '#',
      //imageUrl:
        //'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    //},
  },
  {
    title: 'How to Work with Influencers 101',
    href: 'https://app.kahana.co/hub/TEdBTfY10Dd9H7QIBgQc',
    category: { name: 'Tay Ladd: The Corporate Creator', href: 'https://tiktok.com/@thecorporatedogmom' },
    description:
      'An ongoing hub of all of the knowledge you need to help your business attract influencers, close brand deals, and avoid serious legal mistakes along the way, created by a corporate lawyer and TikTok creator. Get access to a customizable brand deal contract that protects you, outreach best practices, a checklist of legal do\'s and don\'ts, coaching on what creators look for, and more. DISCLAIMER: Even though I am a lawyer, I am not your lawyer and this does not constitute legal advice.',
    //date: 'Feb 12, 2020',
    //datetime: '2020-02-12',
    imageUrl:
      'https://kahana-website-images.s3.us-east-2.amazonaws.com/tayLadd.png',
    //readingTime: '11 min',
    //author: {
      //name: 'Daniela Metz',
      //href: '#',
      //imageUrl:
        //'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    //},
  },
  {
    title: 'TikTok for Business',
    href: 'https://app.kahana.co/hub/2svUpfVnrxHFJHMn6UIG',
    category: { name: 'Josh Slavin', href: 'https://www.tiktok.com/@slavinjoshua' },
    description:
      'In this hub, I plan to take you through the key decisions I made when building my platform of almost 800K followers, why I made them, and the factors you must take into consideration when doing the same. It’s time. Short form content is the future of social media, and I look forward to helping you capitalize on this unprecedented opportunity!',
    //date: 'Feb 12, 2020',
    //datetime: '2020-02-12',
    imageUrl:
      'https://kahana-website-images.s3.us-east-2.amazonaws.com/joshSlavin.png',
    //readingTime: '11 min',
    //author: {
      //name: 'Daniela Metz',
      //href: '#',
      //imageUrl:
        //'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    //},
  },
  {
    title: 'Adulting 102: How to Thrive in Adulthood - For Life',
    href: 'https://app.kahana.co/hub/PY1KHuxIWoJ7fB7930ZF',
    category: { name: 'Eden Gold', href: 'https://www.tiktok.com/@edengold_' },
    description:
      'Did you know that the average American alone wastes about $18,000 per year? What could YOU do with an extra $18,000? Let\'s talk about it. Welcome to the Adulting 102 Community Hub for Gen Z\'s & Millennials who want to thrive. In this community hub, we believe in setting you up for success in your personal life, professional life, and financial life.',
    //date: 'Feb 12, 2020',
    //datetime: '2020-02-12',
    imageUrl:
      'https://kahana-website-images.s3.us-east-2.amazonaws.com/edenGold.png',
    //readingTime: '11 min',
    //author: {
      //name: 'Daniela Metz',
      //href: '#',
      //imageUrl:
        //'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    //},
  },
  {
    title: 'TikTok Trends',
    href: 'https://app.kahana.co/hub/ohTF2nOQTEWCW7PIsSYX',
    category: { name: 'Kate Herman', href: 'https://www.tiktok.com/@kate.instates' },
    description:
      'Struggling to come up with content ideas and can\'t grow your TikTok account? Welcome to the TikTok Content Hub! Here you\'ll find weekly TikTok trending sounds, content ideas, and a content strategy guide.',
    //date: 'Feb 12, 2020',
    //datetime: '2020-02-12',
    imageUrl:
      'https://kahana-website-images.s3.us-east-2.amazonaws.com/kateHerman.png',
    //readingTime: '11 min',
    //author: {
      //name: 'Daniela Metz',
      //href: '#',
      //imageUrl:
        //'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    //},
  },
  {
    title: 'Vision Story',
    href: 'https://app.kahana.co/hub/VarpGpuDHdukrW4IG4Ki',
    category: { name: 'Gregory Gray', href: 'https://www.linkedin.com/in/gregorygray00/' },
    description:
      'The Vision Story hub will give you clarity on your life and business. It is a powerful process that will enliven you to fulfill your purpose and build the lifestyle you desire. Come join us in the process of building the life you deserve.',
    //date: 'Feb 12, 2020',
    //datetime: '2020-02-12',
    imageUrl:
      'https://kahana-website-images.s3.us-east-2.amazonaws.com/gregoryGray.png',
    //readingTime: '11 min',
    //author: {
      //name: 'Daniela Metz',
      //href: '#',
      //imageUrl:
        //'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    //},
  },
  {
    title: 'How I work extra with TikTok as a full time medical student 🩺',
    href: 'https://app.kahana.co/hub/dhJXTqv1Jj0GWIr65vuJ',
    category: { name: 'Medical Elina', href: 'https://www.tiktok.com/@medical.elina' },
    description:
      'I didn\'t have time to work extra in the beginning of my education, even though I needed the money. Since I\'ve always loved being creative, cinematography, photography, I started a TikTok to document my medical school journey. Soon I realized people loved the content, I loved making it - and I could make money off of it too!',
    //date: 'Feb 12, 2020',
    //datetime: '2020-02-12',
    imageUrl:
      'https://kahana-website-images.s3.us-east-2.amazonaws.com/medicalElina.png',
    //readingTime: '11 min',
    //author: {
      //name: 'Daniela Metz',
      //href: '#',
      //imageUrl:
        //'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    //},
  },
  {
    title: 'Event Planning Hub | All you need to know to plan and go!',
    href: 'https://app.kahana.co/hub/2bXcGh2ROEvMAEdmUhOX',
    category: { name: 'Alexandria Tomayko', href: 'https://www.pinterest.com/NomadPlanner/' },
    description:
      'So you want to plan a retreat & don\'t know where to start? I have over 17 years of experience in the field and have gathered tips, tricks, workbooks, and templates to help you every step of the way!',
    //date: 'Feb 12, 2020',
    //datetime: '2020-02-12',
    imageUrl:
      'https://kahana-website-images.s3.us-east-2.amazonaws.com/alexandriaTomayko.png',
    //readingTime: '11 min',
    //author: {
      //name: 'Daniela Metz',
      //href: '#',
      //imageUrl:
        //'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    //},
  },
  {
    title: 'Solo Entrepreneurs: You\'re not alone',
    href: 'https://app.kahana.co/hub/2tXld437NBOOjOrwpjQm',
    category: { name: 'Carl Nordgren', href: 'https://www.linkedin.com/in/carl-nordgren-0bb3b621/' },
    description:
      '40 years an entrepreneur; taught at Duke for 14; determined to serve Creators and Solo Entrepreneurs with proven content',
    //date: 'Feb 12, 2020',
    //datetime: '2020-02-12',
    imageUrl:
      'https://kahana-website-images.s3.us-east-2.amazonaws.com/carlNordgren.png',
    //readingTime: '11 min',
    //author: {
      //name: 'Daniela Metz',
      //href: '#',
      //imageUrl:
        //'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    //},
  },
  {
    title: 'BEST.LIFE.EVER. the self-guided version',
    href: 'https://app.kahana.co/hub/CWisLtwTnlvZh82pYrE8',
    category: { name: 'Joanna Rajendran', href: 'https://www.joannarajendran.com/' },
    description:
      'How would it feel to stop REACTING to life & begin CREATING it with purpose, power & passion?  If you are ready to live the version of your life you have dreamed about- you’re in the right spot.  In BEST.LIFE.EVER you will play with new habits of happiness & success and experience transformative results at your own pace.',
    //date: 'Feb 12, 2020',
    //datetime: '2020-02-12',
    imageUrl:
      'https://kahana-website-images.s3.us-east-2.amazonaws.com/joannaRajendranHeadshot.png',
    //readingTime: '11 min',
    //author: {
      //name: 'Daniela Metz',
      //href: '#',
      //imageUrl:
        //'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    //},
  },
  {
    title: 'A More Affordable Way To Become A SWE',
    href: 'https://app.kahana.co/hub/gGhFFLYlY5VppWIiCccX',
    category: { name: 'Imaad Uddin', href: 'https://solo.to/imaaduddin' },
    description:
      'Ever since I was little, I always had an interest in tech. As I get older, my interest broadened into software engineering. I taught myself a lot these past few years and learned over time that my biggest passion is the ability to help others. With my Hubs, you\'ll find amazing tech, software engineering, and entrepreneurship information. I\'ll share everything I\'ve learned and my mistakes (even more important) to help you succeed in your field of interest.',
    //date: 'Feb 12, 2020',
    //datetime: '2020-02-12',
    imageUrl:
      'https://kahana-website-images.s3.us-east-2.amazonaws.com/imaadUddinHeadshot.jpg',
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
        <title>Explore Kahana Hubs</title>
        <meta
          name="Kahana"
          content="Kahana is the easiest way to monetize your content and research. Transform knowledge and expertise into subscription revenue. Sign up for free today! "
        />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-KQHFL9605P"></script>
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
                  Featured Hubs 🔥
                </h2>
                <p className="mx-auto mt-3 max-w-2xl text-xl text-gray-500 sm:mt-4">
                  Learn from and build with creators in the Kahana Ohana!
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
                        <p className="text-sm font-medium text-indigo-600">
                          <a
                            href={post.category.href}
                            className="hover:underline"
                          >
                            {post.category.name}
                          </a>
                        </p>
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
