import React, { useEffect } from 'react';
import Link from 'next/link'
import Image from 'next/image';
import grayKahanaLogo from '../assets/kahana_logo_wide_gray.svg';

const CustomLoader = ({ src, width, quality }) => {
  return `https://assets.capterra.com/badge/14c0b2030cba21f2961e6c6aed65228b.svg?v=2289101&p=342047`;
};

const navigation = {
  product: [
    { name: 'Recurring Revenue', href: '/product/recurring-revenue', category: 'Product' },
    { name: 'Collaboration Tools', href: '/product/collaboration-tools', category: 'Product' },
    { name: 'Community Engagement', href: '/product/community-engagement', category: 'Product' },
  ],
  solutions: [
    { name: 'Enterprise', href: '/enterprise', category: 'Kahana for' },
    { name: 'Coaches & Consultants', href: '/coaches-and-consultants', category: 'Kahana for' },
    { name: 'Experts', href: '/experts', category: 'Kahana for' },
  ],
  social: [
    { name: 'LinkedIn', href: 'https://www.linkedin.com/company/kahana-co/', category: 'Social' },
    { name: 'YouTube', href: 'https://www.youtube.com/channel/UCwsf3DOnt3uQdrqf-NRZ2_w?sub_confirmation=1', category: 'Social' },
    { name: 'Instagram', href: 'https://instagram.com/kahanahq', category: 'Social' },
    { name: 'Twitter', href: 'https://twitter.com/KahanaHQ', category: 'Social' },
  ],
  build: [
    { name: 'Guides & tutorials', href: '/resources', category: 'Build' },
    { name: 'Templates', href: 'https://templates.kahana.co', category: 'Build' },
    { name: 'Invest in seed round', href: 'https://7hkdcfzbmr0.typeform.com/to/wYCUMm54', category: 'Build' },
    { name: 'Become an affiliate', href: '/affiliates', category: 'Build' },
  ],
  learn: [
    { name: 'Help center', href: 'https://kahana.tawk.help/', category: 'Learn' },
    { name: 'Blog', href: 'https://blog.kahana.co', category: 'Learn' },
    { name: 'FAQ', href: '/faq', category: 'Learn' },
    { name: 'Community', href: 'https://nas.io/creators-and-experts', category: 'Learn' },
    { name: 'Explore', href: '/explore', category: 'Learn' },
  ],
  resources: [
    { name: 'Pricing', href: '/pricing', category: 'Resources' },
    { name: 'About us', href: '/about', category: 'Resources' },
    { name: 'Careers', href: 'https://7hkdcfzbmr0.typeform.com/to/RQ99b3Bp', category: 'Resources' },
    { name: 'Email us', href: 'mailto:info@kahana.co', category: 'Resources' },
    { name: 'Privacy Policy', href: '/privacy-policy', category: 'Resources' },
    { name: 'Terms & Conditions', href: '/terms-and-conditions', category: 'Resources' },
  ],
};

export default function Footer() {
  useEffect(() => {
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://b.sf-syn.com/badge_js?sf_id=3652674&variant_id=sf';
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

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
              className="h-10"
              src={grayKahanaLogo}
              w
              alt="navbar-logo"
            />
            <p className="text-base text-gray-500">
              Join a community of 2500+ creators and experts collaborating and monetizing their expertise together.
            </p>
            {/* Badge container */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div className="sf-root" data-id="3652674" data-badge="heart-badge-white" data-variant-id="sf" style={{ width: '75px' }}></div>
              <a href="https://www.capterra.com/reviews/342047/Kahana?utm_source=vendor&utm_medium=badge&utm_campaign=capterra_reviews_badge">
                <Image
                  loader={CustomLoader}
                  src="capterra-badge"
                  alt="Capterra Badge"
                  width={120} // Adjust the width here as per your requirement
                  height={48} // Adjust the height here as per your requirement
                />
              </a>
            </div>
          </div>
          <div className="mt-12 sm:mt-0">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              {['Product', 'Kahana for', 'Social', 'Build', 'Learn', 'Resources'].map((category) => (
                <div key={category}>
                  <h3 className="text-base font-medium text-gray-900 capitalize">{category}</h3>
                  <ul role="list" className="mt-4 space-y-4">
                    {navigation[category.toLowerCase()].map((item) => (
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
              ))}
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
}
