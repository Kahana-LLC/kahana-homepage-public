import React from 'react';

const MySitemap = () => (
  <div dangerouslySetInnerHTML={{ __html: `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        * {
          box-sizing: border-box;
        }
        body {
          font-family: Arial, sans-serif;
          margin: 0;
          padding: 20px;
          background-color: #f8f8f8;
        }
        .container {
          max-width: 800px;
          margin: 0 auto;
          background-color: #fff;
          box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
          padding: 20px;
        }
        h1 {
          margin-top: 0;
        }
        ul {
          list-style-type: none;
          padding: 0;
          margin: 0;
        }
        li {
          margin-bottom: 10px;
        }
        a {
          color: #337ab7;
          text-decoration: none;
        }
        a:hover {
          text-decoration: underline;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>Sitemap</h1>
        <ul>
          <li><a href="https://kahana.co/">https://kahana.co/</a></li><li><a href="https://app.kahana.co/login">https://app.kahana.co/login</a></li><li><a href="https://kahana.co/about">https://kahana.co/about</a></li><li><a href="https://kahana.co/solutions">https://kahana.co/solutions</a></li><li><a href="https://app.kahana.co/hub/nHxv8vCZBv6i0bVPunyp">https://app.kahana.co/hub/nHxv8vCZBv6i0bVPunyp</a></li><li><a href="https://kahana.co/privacy-policy">https://kahana.co/privacy-policy</a></li><li><a href="https://blog.kahana.co/">https://blog.kahana.co/</a></li><li><a href="https://kahana.co/explore">https://kahana.co/explore</a></li><li><a href="https://kahana.co/pricing">https://kahana.co/pricing</a></li><li><a href="https://kahana.co/terms-and-conditions">https://kahana.co/terms-and-conditions</a></li><li><a href="https://kahana.co/?utm_source=blog">https://kahana.co/?utm_source=blog</a></li><li><a href="https://app.kahana.co/hub/2tXld437NBOOjOrwpjQm">https://app.kahana.co/hub/2tXld437NBOOjOrwpjQm</a></li><li><a href="https://app.kahana.co/hub/tHwAYvYPzqVwGPGzh10k">https://app.kahana.co/hub/tHwAYvYPzqVwGPGzh10k</a></li><li><a href="https://blog.kahana.co/hub-inspiration/">https://blog.kahana.co/hub-inspiration/</a></li><li><a href="https://blog.kahana.co/creator-platforms/">https://blog.kahana.co/creator-platforms/</a></li><li><a href="https://blog.kahana.co/tag/recurring-revenue/">https://blog.kahana.co/tag/recurring-revenue/</a></li><li><a href="https://app.kahana.co/hub/2svUpfVnrxHFJHMn6UIG">https://app.kahana.co/hub/2svUpfVnrxHFJHMn6UIG</a></li><li><a href="https://blog.kahana.co/signin/">https://blog.kahana.co/signin/</a></li><li><a href="https://app.kahana.co/hub/2bXcGh2ROEvMAEdmUhOX">https://app.kahana.co/hub/2bXcGh2ROEvMAEdmUhOX</a></li><li><a href="https://blog.kahana.co/signup/">https://blog.kahana.co/signup/</a></li><li><a href="https://blog.kahana.co/connect-stripe/">https://blog.kahana.co/connect-stripe/</a></li><li><a href="https://blog.kahana.co/hub-pricing/">https://blog.kahana.co/hub-pricing/</a></li><li><a href="https://app.kahana.co/hub/VarpGpuDHdukrW4IG4Ki">https://app.kahana.co/hub/VarpGpuDHdukrW4IG4Ki</a></li><li><a href="https://blog.kahana.co/add-hub-content/">https://blog.kahana.co/add-hub-content/</a></li><li><a href="https://app.kahana.co/hub/0xoAwd6Uq7KdKO0pdQ4j">https://app.kahana.co/hub/0xoAwd6Uq7KdKO0pdQ4j</a></li><li><a href="https://blog.kahana.co/author/kahanateam/">https://blog.kahana.co/author/kahanateam/</a></li><li><a href="https://app.kahana.co/signup/?utm_source=blog">https://app.kahana.co/signup/?utm_source=blog</a></li><li><a href="https://app.kahana.co/hub/PY1KHuxIWoJ7fB7930ZF">https://app.kahana.co/hub/PY1KHuxIWoJ7fB7930ZF</a></li><li><a href="https://app.kahana.co/hub/CWisLtwTnlvZh82pYrE8">https://app.kahana.co/hub/CWisLtwTnlvZh82pYrE8</a></li><li><a href="https://app.kahana.co/hub/dhJXTqv1Jj0GWIr65vuJ">https://app.kahana.co/hub/dhJXTqv1Jj0GWIr65vuJ</a></li><li><a href="https://app.kahana.co/hub/u1ln3CfdaZTUGyb8pSK2">https://app.kahana.co/hub/u1ln3CfdaZTUGyb8pSK2</a></li><li><a href="https://blog.kahana.co/eden-gold/">https://blog.kahana.co/eden-gold/</a></li><li><a href="https://app.kahana.co/hub/gGhFFLYlY5VppWIiCccX">https://app.kahana.co/hub/gGhFFLYlY5VppWIiCccX</a></li><li><a href="https://app.kahana.co/login/?utm_source=blog">https://app.kahana.co/login/?utm_source=blog</a></li><li><a href="https://blog.kahana.co/monetization-platforms/">https://blog.kahana.co/monetization-platforms/</a></li><li><a href="https://blog.kahana.co/tag/software/">https://blog.kahana.co/tag/software/</a></li><li><a href="https://blog.kahana.co/tag/kahana-tutorials/">https://blog.kahana.co/tag/kahana-tutorials/</a></li><li><a href="https://app.kahana.co/hub/ohTF2nOQTEWCW7PIsSYX">https://app.kahana.co/hub/ohTF2nOQTEWCW7PIsSYX</a></li><li><a href="https://blog.kahana.co/update-hub-info/">https://blog.kahana.co/update-hub-info/</a></li><li><a href="https://blog.kahana.co/tag/podcast/">https://blog.kahana.co/tag/podcast/</a></li><li><a href="https://app.kahana.co/hub/nHxv8vCZBv6i0bVPunyp?ref=blog.kahana.co">https://app.kahana.co/hub/nHxv8vCZBv6i0bVPunyp?ref=blog.kahana.co</a></li><li><a href="https://blog.kahana.co/tag/sales-and-marketing/">https://blog.kahana.co/tag/sales-and-marketing/</a></li><li><a href="https://app.kahana.co/login?ref=blog.kahana.co">https://app.kahana.co/login?ref=blog.kahana.co</a></li><li><a href="https://blog.kahana.co/kahana-vs-gumroad/">https://blog.kahana.co/kahana-vs-gumroad/</a></li><li><a href="https://blog.kahana.co/tag/experts/">https://blog.kahana.co/tag/experts/</a></li><li><a href="https://blog.kahana.co/kahana-vs-stan/">https://blog.kahana.co/kahana-vs-stan/</a></li><li><a href="https://blog.kahana.co/creating-templates-with-kahana/">https://blog.kahana.co/creating-templates-with-kahana/</a></li><li><a href="https://blog.kahana.co/supercharge-marketing/">https://blog.kahana.co/supercharge-marketing/</a></li><li><a href="https://app.kahana.co/signup?ref=blog.kahana.co">https://app.kahana.co/signup?ref=blog.kahana.co</a></li><li><a href="https://blog.kahana.co/tag/creators/">https://blog.kahana.co/tag/creators/</a></li><li><a href="https://blog.kahana.co/tag/inspiration/">https://blog.kahana.co/tag/inspiration/</a></li><li><a href="https://blog.kahana.co/update-profile/">https://blog.kahana.co/update-profile/</a></li><li><a href="https://blog.kahana.co/kelsey-vetter-pinterest-success-session/">https://blog.kahana.co/kelsey-vetter-pinterest-success-session/</a></li><li><a href="https://app.kahana.co/hub/PY1KHuxIWoJ7fB7930ZF?ref=blog.kahana.co">https://app.kahana.co/hub/PY1KHuxIWoJ7fB7930ZF?ref=blog.kahana.co</a></li><li><a href="https://blog.kahana.co/email-templates-for-creators/">https://blog.kahana.co/email-templates-for-creators/</a></li><li><a href="https://kahana.co/explore?ref=blog.kahana.co">https://kahana.co/explore?ref=blog.kahana.co</a></li><li><a href="https://app.kahana.co/hub/2svUpfVnrxHFJHMn6UIG?ref=blog.kahana.co">https://app.kahana.co/hub/2svUpfVnrxHFJHMn6UIG?ref=blog.kahana.co</a></li><li><a href="https://blog.kahana.co/tag/creator-economy/">https://blog.kahana.co/tag/creator-economy/</a></li><li><a href="https://blog.kahana.co/track-sales/">https://blog.kahana.co/track-sales/</a></li><li><a href="https://app.kahana.co/hub/tHwAYvYPzqVwGPGzh10k?ref=blog.kahana.co">https://app.kahana.co/hub/tHwAYvYPzqVwGPGzh10k?ref=blog.kahana.co</a></li><li><a href="https://blog.kahana.co/tag/solopreneur/">https://blog.kahana.co/tag/solopreneur/</a></li><li><a href="https://blog.kahana.co/carl-nordgren/">https://blog.kahana.co/carl-nordgren/</a></li><li><a href="https://blog.kahana.co/organize-research/">https://blog.kahana.co/organize-research/</a></li><li><a href="https://blog.kahana.co/joanna-rajendran-best-life-ever-self-guided-course/">https://blog.kahana.co/joanna-rajendran-best-life-ever-self-guided-course/</a></li><li><a href="https://blog.kahana.co/join-the-creator-economy/">https://blog.kahana.co/join-the-creator-economy/</a></li><li><a href="https://blog.kahana.co/kahana-vs-discord/">https://blog.kahana.co/kahana-vs-discord/</a></li><li><a href="https://blog.kahana.co/kahana-vs-thinkific/">https://blog.kahana.co/kahana-vs-thinkific/</a></li><li><a href="https://blog.kahana.co/kahana-supported-devices/">https://blog.kahana.co/kahana-supported-devices/</a></li><li><a href="https://blog.kahana.co/side-hustles/">https://blog.kahana.co/side-hustles/</a></li><li><a href="https://kahana.co/?ref=blog.kahana.co">https://kahana.co/?ref=blog.kahana.co</a></li><li><a href="https://blog.kahana.co/kahana-vs-onlyfans/">https://blog.kahana.co/kahana-vs-onlyfans/</a></li><li><a href="https://blog.kahana.co/kate-instates-tiktok-trends/">https://blog.kahana.co/kate-instates-tiktok-trends/</a></li><li><a href="https://blog.kahana.co/tag/knowledge-economy/">https://blog.kahana.co/tag/knowledge-economy/</a></li><li><a href="https://blog.kahana.co/tag/templates/">https://blog.kahana.co/tag/templates/</a></li><li><a href="https://blog.kahana.co/how-to-monetize-a-hub/">https://blog.kahana.co/how-to-monetize-a-hub/</a></li><li><a href="https://blog.kahana.co/tag/technical/">https://blog.kahana.co/tag/technical/</a></li><li><a href="https://blog.kahana.co/kahana-vs-patreon/">https://blog.kahana.co/kahana-vs-patreon/</a></li><li><a href="https://blog.kahana.co/kahana-vs-kartra/">https://blog.kahana.co/kahana-vs-kartra/</a></li><li><a href="https://blog.kahana.co/tag/storytelling/">https://blog.kahana.co/tag/storytelling/</a></li><li><a href="https://blog.kahana.co/storytelling-in-business/">https://blog.kahana.co/storytelling-in-business/</a></li><li><a href="https://blog.kahana.co/kahana-vs-coursera/">https://blog.kahana.co/kahana-vs-coursera/</a></li><li><a href="https://blog.kahana.co/kahana-vs-kajabi/">https://blog.kahana.co/kahana-vs-kajabi/</a></li><li><a href="https://blog.kahana.co/tag/knowledge-management/">https://blog.kahana.co/tag/knowledge-management/</a></li><li><a href="https://blog.kahana.co/content-research/">https://blog.kahana.co/content-research/</a></li><li><a href="https://blog.kahana.co/tag/market-research/">https://blog.kahana.co/tag/market-research/</a></li><li><a href="https://blog.kahana.co/tag/company/">https://blog.kahana.co/tag/company/</a></li><li><a href="https://blog.kahana.co/charging-for-hubs/">https://blog.kahana.co/charging-for-hubs/</a></li><li><a href="https://blog.kahana.co/kahana-vs-teachable/">https://blog.kahana.co/kahana-vs-teachable/</a></li><li><a href="https://blog.kahana.co/author/jonathan/">https://blog.kahana.co/author/jonathan/</a></li><li><a href="https://blog.kahana.co/thoughts-on-the-state-of-the-consulting-industry/">https://blog.kahana.co/thoughts-on-the-state-of-the-consulting-industry/</a></li>
        </ul>
      </div>
    </body>
    </html>` }} />
);

export default MySitemap;
