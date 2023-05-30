      import Head from 'next/head';

      import Footer from '../components/Footer';
      import NavbarDup from '../components/NavbarDup';

      import React from 'react';

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
              padding-left: 30px;
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
        <title>Kahana - Get paid for your best stuff</title>
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
    
