import Head from 'next/head';

      import Footer from '../components/Footer';
      import NavbarDup from '../components/NavbarDup';

      import React from 'react';
      import './sitemap.module.css';

      const Sitemap = () => {
       return (
         <div>
          <style jsx>{`
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
              list-style-type: disc;
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
            <li><a href="https://app.kahana.co/hub/nHxv8vCZBv6i0bVPunyp">Hub of vision board and manifestation guides, templates, and PDFs</a></li>
<li><a href="https://app.kahana.co/hub/2tXld437NBOOjOrwpjQm">Hub of advice, videos, and best practices for solopreneurs</a></li>
<li><a href="https://app.kahana.co/hub/tHwAYvYPzqVwGPGzh10k">Pinterest course: how to master Pinterest marketing in less than 1 hour</a></li>
<li><a href="https://app.kahana.co/hub/2svUpfVnrxHFJHMn6UIG">Hub of guides, templates, and PDFs to build a great TikTok brand for your business</a></li>
<li><a href="https://app.kahana.co/hub/2bXcGh2ROEvMAEdmUhOX">Hub of checklists, PDFs, and templates to plan a great retreat</a></li>
<li><a href="https://app.kahana.co/hub/VarpGpuDHdukrW4IG4Ki">Hub of vision story guides, templates, and PDFs</a></li>
<li><a href="https://app.kahana.co/hub/0xoAwd6Uq7KdKO0pdQ4j">Hub of ChatGPT prompts to help you land a job</a></li>
<li><a href="https://app.kahana.co/hub/PY1KHuxIWoJ7fB7930ZF">Hub of adulting guides, PDFs, and best practices</a></li>
<li><a href="https://app.kahana.co/hub/CWisLtwTnlvZh82pYrE8">Manifestation course: how to live your best life ever</a></li>
<li><a href="https://app.kahana.co/hub/dhJXTqv1Jj0GWIr65vuJ">Hub of videos and practical to make money on TikTok as a student</a></li>
<li><a href="https://app.kahana.co/hub/u1ln3CfdaZTUGyb8pSK2">Hub of email templates for content creators</a></li>
<li><a href="https://app.kahana.co/hub/gGhFFLYlY5VppWIiCccX">Hub of advice to become an SWE without breaking the bank and a resume template</a></li>
<li><a href="https://app.kahana.co/hub/ohTF2nOQTEWCW7PIsSYX">Hub of up-to-date TikTok Trends</a></li>
          </ul>

          <h2>Blog</h2>
          <ul>
            <li><a href="https://blog.kahana.co/">Blog Homepage</a></li>
<li><a href="https://blog.kahana.co/hub-inspiration/">Hub Inspiration</a></li>
<li><a href="https://blog.kahana.co/creator-platforms/">Creator Platforms</a></li>
<li><a href="https://blog.kahana.co/tag/recurring-revenue/">Category: Recurring Revenue</a></li>
<li><a href="https://blog.kahana.co/signin/">Signin</a></li>
<li><a href="https://blog.kahana.co/signup/">Signup</a></li>
<li><a href="https://blog.kahana.co/connect-stripe/">Connect Stripe</a></li>
<li><a href="https://blog.kahana.co/hub-pricing/">Hub Pricing</a></li>
<li><a href="https://blog.kahana.co/add-hub-content/">Add Hub Content</a></li>
<li><a href="https://blog.kahana.co/author/kahanateam/">Author - Kahanateam</a></li>
<li><a href="https://blog.kahana.co/eden-gold/">Eden Gold</a></li>
<li><a href="https://blog.kahana.co/monetization-platforms/">Monetization Platforms</a></li>
<li><a href="https://blog.kahana.co/tag/software/">Category: Software</a></li>
<li><a href="https://blog.kahana.co/tag/kahana-tutorials/">Category: Kahana Tutorials</a></li>
<li><a href="https://blog.kahana.co/update-hub-info/">Update Hub Info</a></li>
<li><a href="https://blog.kahana.co/tag/podcast/">Category: Podcast</a></li>
<li><a href="https://blog.kahana.co/tag/sales-and-marketing/">Category: Sales And Marketing</a></li>
<li><a href="https://blog.kahana.co/kahana-vs-gumroad/">Kahana Vs Gumroad</a></li>
<li><a href="https://blog.kahana.co/tag/experts/">Category: Experts</a></li>
<li><a href="https://blog.kahana.co/kahana-vs-stan/">Kahana Vs Stan</a></li>
<li><a href="https://blog.kahana.co/creating-templates-with-kahana/">Creating Templates With Kahana</a></li>
<li><a href="https://blog.kahana.co/supercharge-marketing/">Supercharge Marketing</a></li>
<li><a href="https://blog.kahana.co/tag/creators/">Category: Creators</a></li>
<li><a href="https://blog.kahana.co/tag/inspiration/">Category: Inspiration</a></li>
<li><a href="https://blog.kahana.co/update-profile/">Update Profile</a></li>
<li><a href="https://blog.kahana.co/kelsey-vetter-pinterest-success-session/">Kelsey Vetter Pinterest Success Session</a></li>
<li><a href="https://blog.kahana.co/email-templates-for-creators/">Email Templates For Creators</a></li>
<li><a href="https://blog.kahana.co/tag/creator-economy/">Category: Creator Economy</a></li>
<li><a href="https://blog.kahana.co/track-sales/">Track Sales</a></li>
<li><a href="https://blog.kahana.co/tag/solopreneur/">Category: Solopreneur</a></li>
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
<li><a href="https://blog.kahana.co/tag/knowledge-economy/">Category: Knowledge Economy</a></li>
<li><a href="https://blog.kahana.co/tag/templates/">Category: Templates</a></li>
<li><a href="https://blog.kahana.co/how-to-monetize-a-hub/">How To Monetize A Hub</a></li>
<li><a href="https://blog.kahana.co/tag/technical/">Category: Technical</a></li>
<li><a href="https://blog.kahana.co/kahana-vs-patreon/">Kahana Vs Patreon</a></li>
<li><a href="https://blog.kahana.co/kahana-vs-kartra/">Kahana Vs Kartra</a></li>
<li><a href="https://blog.kahana.co/tag/storytelling/">Category: Storytelling</a></li>
<li><a href="https://blog.kahana.co/storytelling-in-business/">Storytelling In Business</a></li>
<li><a href="https://blog.kahana.co/kahana-vs-coursera/">Kahana Vs Coursera</a></li>
<li><a href="https://blog.kahana.co/kahana-vs-kajabi/">Kahana Vs Kajabi</a></li>
<li><a href="https://blog.kahana.co/tag/knowledge-management/">Category: Knowledge Management</a></li>
<li><a href="https://blog.kahana.co/content-research/">Content Research</a></li>
<li><a href="https://blog.kahana.co/tag/market-research/">Category: Market Research</a></li>
<li><a href="https://blog.kahana.co/tag/company/">Category: Company</a></li>
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
         <NavbarDup />
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
