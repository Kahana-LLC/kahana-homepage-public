import Head from 'next/head';
import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

//images
import whiteKahanaLogo from '../assets/kahana_logo_wide_light.svg';
import grayKahanaLogo from '../assets/kahana_logo_wide_gray.svg';
import HeaderBanner from './HeaderBanner';
import { useState } from "react"; // import state

//navigation items
const navigation = [
  { name: 'Featured Hubs', href: 'explore' },
  { name: 'About', href: 'about' },
  { name: 'Pricing', href: 'pricing' },
  { name: 'Blog', href: ' https://blog.kahana.co' },
  { name: 'Solutions', href: 'solutions' },
];

const navigation1 = [
  { name: 'Request a demo', href: 'https://7hkdcfzbmr0.typeform.com/to/ZYLHazEf?utm_content=landing_page_header' },
  { name: 'Log in', href: 'https://app.kahana.co/login' },
];

const navigationAll = [
  { name: 'Featured Hubs', href: 'explore' },
  { name: 'About', href: 'about' },
  { name: 'Pricing', href: 'pricing' },
  { name: 'Blog', href: ' https://blog.kahana.co' },
  { name: 'Solutions', href: 'solutions' },
  { name: 'Request a demo', href: 'https://7hkdcfzbmr0.typeform.com/to/ZYLHazEf?utm_content=landing_page_header' },
  { name: 'Log in', href: 'https://app.kahana.co/login' },
];

const navigationFooter = {
  important: [
    { name: 'Explore', href: '/explore' },

    { name: 'Blog', href: 'https://blog.kahana.co' },
    { name: 'About', href: '/about' },
    { name: 'Home', href: '/' },
    { name: 'Careers', href: 'https://7hkdcfzbmr0.typeform.com/to/RQ99b3Bp' },
    { name: 'Invest in seed round', href: 'https://7hkdcfzbmr0.typeform.com/to/wYCUMm54' },
    // { name: 'Log in', href: '#' },
    // { name: 'Sign up', href: '#' },
  ],
  support: [
    { name: 'Help center', href: 'https://kahana.tawk.help/' },
    { name: 'Vote for features', href: 'https://productific.com/@Kahana' },
    { name: 'Live chat', href: 'https://kahana.tawk.help/' },
    { name: 'Join the community', href: 'https://nas.io/creators-and-experts' },
  ],
  social: [
    { name: 'LinkedIn', href: 'https://www.linkedin.com/company/kahana-co/' },
    {
      name: 'YouTube',
      href: 'https://www.youtube.com/channel/UCwsf3DOnt3uQdrqf-NRZ2_w?sub_confirmation=1',
    },
    {
      name: 'Instagram',
      href: 'https://instagram.com/kahanahq',
    },
    {
      name: 'TikTok',
      href: 'https://www.tiktok.com/@kahanahub',
    },
    { name: 'Twitter', href: 'https://twitter.com/KahanaHQ' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy-policy' },
    { name: 'Terms & Conditions', href: '/terms-and-conditions' },
  ],
};

cost Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false); // initiate isNavOpen state with false
  return (
    <>
      <HeaderBanner />
      <header className="backdrop-blur-sm bg-white/90 bg-white  mx-auto px-2">
      <nav>
      <div className="flex items-center justify-between border-b py-2 px-10">
      {/* <a href="/">
        <img src="https://designbygio.it/images/logo.png" alt="logo" />
      </a> */}
      <Link href="/" aria-label="Home">
         <span className="sr-only"> Company</span>
         <Image
            className="h-10 "
            src={whiteKahanaLogo}
            w
            // width={10}
            // height={20} 
            alt="navbar-logo"
         />
      </Link>
      <nav>
        <section className="MOBILE-MENU flex lg:hidden">
          <div
            className="HAMBURGER-ICON space-y-2"
            onClick={() => setIsNavOpen((prev) => !prev)} // toggle isNavOpen state on click
          >
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
          </div>

          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}> {/* toggle class based on isNavOpen state */}
            <div
              className="CROSS-ICON absolute top-0 right-0 px-8 py-8"
              onClick={() => setIsNavOpen(false)} // change isNavOpen state to false to close the menu
            >
              <svg
                className="h-8 w-8 text-gray-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <ul className="MENU-LINK-MOBILE-OPEN flex flex-col items-center justify-between min-h-[250px]">
              {navigationAll.map((link) => (
                <Link
                  href={link.href}
                  key={link.name}
                  className="text-base font-small text-gray-600  hover:text-gray-800"
                >
                  {link.name}
                </Link>
              ))}
            </ul>
          </div>
        </section>

        <ul className="DESKTOP-MENU hidden space-x-8 lg:flex">
          {navigationAll.map((link) => (
             <Link
                href={link.href}
                key={link.name}
                className="text-base font-small text-gray-600  hover:text-gray-800"
              >
                {link.name}
              </Link>
           ))}
        </ul>
      </nav>
      <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: white;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
    </div>
    </nav>
    </header>
    </>
  );
};

const Footer = () => {
  return (
    <footer className="bg-white" aria-labelledby="footer-heading">
      <hr className="my-8 h-px bg-slate-300 border-0 mx-8" />
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <Image
              className="h-10 "
              src={grayKahanaLogo}
              w
              // width={10}
              // height={20}
              alt="navbar-logo"
            />
            <p className="text-base text-gray-500">
              Reserve your account and join 2000+ others learning to monetize
              their expertise. Reservers also get early-bird access to tips,
              tricks, templates, plus more.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-base font-medium text-gray-900">
                  Important links
                </h3>
                <ul role="list" className="mt-4 space-y-4">
                  {navigationFooter.important.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-base text-gray-500 hover:text-gray-900"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-base font-medium text-gray-900">Support</h3>
                <ul role="list" className="mt-4 space-y-4">
                  {navigationFooter.support.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-base text-gray-500 hover:text-gray-900"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-base font-medium text-gray-900">Social</h3>
                <ul role="list" className="mt-4 space-y-4">
                  {navigationFooter.social.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-base text-gray-500 hover:text-gray-900"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-base font-medium text-gray-900">Legal</h3>
                <ul role="list" className="mt-4 space-y-4">
                  {navigationFooter.legal.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-base text-gray-500 hover:text-gray-900"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-200 pt-8">
          <p className="text-base text-gray-400 xl:text-center">
            &copy; 2023 Kahana Group Inc. All rights reserved. <Link href="/sitemap">Sitemap</Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

      const Sitemap = () => {
       return (
        <div>
          <style>{`
            h1 {
              font-size: 24px;
              font-weight: bold;
              margin: 20px 20px;
              padding: 10px;
            }
          
            h2 {
              font-size: 18px;
              font-weight: bold;
              margin: 10px 20px;
              padding: 10px;
            }
          
            ul {
              /* list-style-type: disc; */
              padding-left: 10px;
              margin: 10px 20px;
            }
          
            li {
              margin-bottom: 5px;
            }
          
            a {
              color: #0366d6;
              text-decoration: none;
            }
          
            a:hover {
              text-decoration: underline;
            }

            .blog-links {
              margin-bottom: 30px;
            }
          `}</style>

          <h1>Sitemap</h1>

          <h2>Create Kahana Account</h2>
          <ul>
            <li><a href="https://app.kahana.co/signup">Create a Free Account</a></li>
          </ul>

          <h2>Kahana Login</h2>
          <ul>
            <li><a href="https://app.kahana.co/login">Log in</a></li>
          </ul>

          <h2>About Kahana</h2>
          <ul>
            <li><a href="https://kahana.co/">Homepage</a></li>
<li><a href="https://kahana.co/about">About</a></li>
<li><a href="https://kahana.co/solutions">Solutions</a></li>
<li><a href="https://kahana.co/privacy-policy">Privacy Policy</a></li>
<li><a href="https://kahana.co/explore">Explore</a></li>
<li><a href="https://kahana.co/pricing">Pricing</a></li>
<li><a href="https://kahana.co/terms-and-conditions">Terms And Conditions</a></li>
          </ul>

          <h2>Hubs</h2>
          <ul>
            <li><a href="https://app.kahana.co/hub/nHxv8vCZBv6i0bVPunyp">Enter Text</a></li>
<li><a href="https://app.kahana.co/hub/2tXld437NBOOjOrwpjQm">Enter Text</a></li>
<li><a href="https://app.kahana.co/hub/tHwAYvYPzqVwGPGzh10k">Enter Text</a></li>
<li><a href="https://app.kahana.co/hub/2svUpfVnrxHFJHMn6UIG">Enter Text</a></li>
<li><a href="https://app.kahana.co/hub/2bXcGh2ROEvMAEdmUhOX">Enter Text</a></li>
<li><a href="https://app.kahana.co/hub/VarpGpuDHdukrW4IG4Ki">Enter Text</a></li>
<li><a href="https://app.kahana.co/hub/0xoAwd6Uq7KdKO0pdQ4j">Enter Text</a></li>
<li><a href="https://app.kahana.co/hub/PY1KHuxIWoJ7fB7930ZF">Enter Text</a></li>
<li><a href="https://app.kahana.co/hub/CWisLtwTnlvZh82pYrE8">Enter Text</a></li>
<li><a href="https://app.kahana.co/hub/dhJXTqv1Jj0GWIr65vuJ">Enter Text</a></li>
<li><a href="https://app.kahana.co/hub/u1ln3CfdaZTUGyb8pSK2">Enter Text</a></li>
<li><a href="https://app.kahana.co/hub/gGhFFLYlY5VppWIiCccX">Enter Text</a></li>
<li><a href="https://app.kahana.co/hub/ohTF2nOQTEWCW7PIsSYX">Enter Text</a></li>
          </ul>

          <h2>Blog</h2>
          <ul class="blog-links">
            <li><a href="https://blog.kahana.co/">Blog Homepage</a></li>
<li><a href="https://blog.kahana.co/hub-inspiration/">Hub Inspiration</a></li>
<li><a href="https://blog.kahana.co/creator-platforms/">Creator Platforms</a></li>
<li><a href="https://blog.kahana.co/tag/recurring-revenue/">Recurring Revenue</a></li>
<li><a href="https://blog.kahana.co/signin/">Signin</a></li>
<li><a href="https://blog.kahana.co/signup/">Signup</a></li>
<li><a href="https://blog.kahana.co/connect-stripe/">Connect Stripe</a></li>
<li><a href="https://blog.kahana.co/hub-pricing/">Hub Pricing</a></li>
<li><a href="https://blog.kahana.co/add-hub-content/">Add Hub Content</a></li>
<li><a href="https://blog.kahana.co/author/kahanateam/">Author - Kahanateam</a></li>
<li><a href="https://blog.kahana.co/eden-gold/">Eden Gold</a></li>
<li><a href="https://blog.kahana.co/monetization-platforms/">Monetization Platforms</a></li>
<li><a href="https://blog.kahana.co/tag/software/">Software</a></li>
<li><a href="https://blog.kahana.co/tag/kahana-tutorials/">Kahana Tutorials</a></li>
<li><a href="https://blog.kahana.co/update-hub-info/">Update Hub Info</a></li>
<li><a href="https://blog.kahana.co/tag/podcast/">Podcast</a></li>
<li><a href="https://blog.kahana.co/tag/sales-and-marketing/">Sales And Marketing</a></li>
<li><a href="https://blog.kahana.co/kahana-vs-gumroad/">Kahana Vs Gumroad</a></li>
<li><a href="https://blog.kahana.co/tag/experts/">Experts</a></li>
<li><a href="https://blog.kahana.co/kahana-vs-stan/">Kahana Vs Stan</a></li>
<li><a href="https://blog.kahana.co/creating-templates-with-kahana/">Creating Templates With Kahana</a></li>
<li><a href="https://blog.kahana.co/supercharge-marketing/">Supercharge Marketing</a></li>
<li><a href="https://blog.kahana.co/tag/creators/">Creators</a></li>
<li><a href="https://blog.kahana.co/tag/inspiration/">Inspiration</a></li>
<li><a href="https://blog.kahana.co/update-profile/">Update Profile</a></li>
<li><a href="https://blog.kahana.co/kelsey-vetter-pinterest-success-session/">Kelsey Vetter Pinterest Success Session</a></li>
<li><a href="https://blog.kahana.co/email-templates-for-creators/">Email Templates For Creators</a></li>
<li><a href="https://blog.kahana.co/tag/creator-economy/">Creator Economy</a></li>
<li><a href="https://blog.kahana.co/track-sales/">Track Sales</a></li>
<li><a href="https://blog.kahana.co/tag/solopreneur/">Solopreneur</a></li>
<li><a href="https://blog.kahana.co/carl-nordgren/">Carl Nordgren</a></li>
<li><a href="https://blog.kahana.co/organize-research/">Organize Research</a></li>
<li><a href="https://blog.kahana.co/joanna-rajendran-best-life-ever-self-guided-course/">Joanna Rajendran Best Life Ever Self Guided Course</a></li>
<li><a href="https://blog.kahana.co/join-the-creator-economy/">Join The Creator Economy</a></li>
<li><a href="https://blog.kahana.co/kahana-vs-discord/">Kahana Vs Discord</a></li>
<li><a href="https://blog.kahana.co/kahana-vs-thinkific/">Kahana Vs Thinkific</a></li>
<li><a href="https://blog.kahana.co/kahana-supported-devices/">Kahana Supported Devices</a></li>
<li><a href="https://blog.kahana.co/side-hustles/">Side Hustles</a></li>
<li><a href="https://blog.kahana.co/kahana-vs-onlyfans/">Kahana Vs Onlyfans</a></li>
<li><a href="https://blog.kahana.co/kate-instates-tiktok-trends/">Kate Instates Tiktok Trends</a></li>
<li><a href="https://blog.kahana.co/tag/knowledge-economy/">Knowledge Economy</a></li>
<li><a href="https://blog.kahana.co/tag/templates/">Templates</a></li>
<li><a href="https://blog.kahana.co/how-to-monetize-a-hub/">How To Monetize A Hub</a></li>
<li><a href="https://blog.kahana.co/tag/technical/">Technical</a></li>
<li><a href="https://blog.kahana.co/kahana-vs-patreon/">Kahana Vs Patreon</a></li>
<li><a href="https://blog.kahana.co/kahana-vs-kartra/">Kahana Vs Kartra</a></li>
<li><a href="https://blog.kahana.co/tag/storytelling/">Storytelling</a></li>
<li><a href="https://blog.kahana.co/storytelling-in-business/">Storytelling In Business</a></li>
<li><a href="https://blog.kahana.co/kahana-vs-coursera/">Kahana Vs Coursera</a></li>
<li><a href="https://blog.kahana.co/kahana-vs-kajabi/">Kahana Vs Kajabi</a></li>
<li><a href="https://blog.kahana.co/tag/knowledge-management/">Knowledge Management</a></li>
<li><a href="https://blog.kahana.co/content-research/">Content Research</a></li>
<li><a href="https://blog.kahana.co/tag/market-research/">Market Research</a></li>
<li><a href="https://blog.kahana.co/tag/company/">Company</a></li>
<li><a href="https://blog.kahana.co/charging-for-hubs/">Charging For Hubs</a></li>
<li><a href="https://blog.kahana.co/kahana-vs-teachable/">Kahana Vs Teachable</a></li>
<li><a href="https://blog.kahana.co/author/jonathan/">Author - Jonathan</a></li>
<li><a href="https://blog.kahana.co/thoughts-on-the-state-of-the-consulting-industry/">Thoughts On The State Of The Consulting Industry</a></li>
          </ul>
        </div>
       );
     };

    export default function MySitemap() {
     return (
      <>
       <Head>
        <title>Kahana Sitemap</title>
        <meta
          name="Kahana"
          content="Kahana is the easiest way to monetize your content and research. Transform knowledge and expertise into subscription revenue. Sign up for free today! "
        />
       </Head>
       <div>
         <Header />
       </div>
       <div>
         <Sitemap />
       </div>    
       <div>
        <Footer />
       </div>
      </>
     );
}
    
