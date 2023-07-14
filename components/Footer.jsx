import React, { useEffect } from 'react';
import Link from 'next/link'
import Image from 'next/image';
import grayKahanaLogo from '../assets/kahana_logo_wide_gray.svg';

const navigation = {
  important: [
    { name: 'Explore', href: '/explore' },

    { name: 'Blog', href: 'https://blog.kahana.co' },
    { name: 'About', href: '/about' },
    { name: 'FAQ', href: '/faq' },
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
            {/* Badge code */}
            <div className="sf-root" data-id="3652674" data-badge="heart-badge-white" data-variant-id="sf" style={{ width: '75px' }}></div>
            <a href="https://www.capterra.com/reviews/342047/Kahana?utm_source=vendor&utm_medium=badge&utm_campaign=capterra_reviews_badge">
              <div style={{ maxWidth: '150px', maxHeight: '150px' }}>
                <Image
                  src="https://assets.capterra.com/badge/14c0b2030cba21f2961e6c6aed65228b.svg?v=2289101&p=342047"
                  alt="Capterra Badge"
                  layout="responsive"
                />
              </div>
            </a>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-base font-medium text-gray-900">
                  Important links
                </h3>
                <ul role="list" className="mt-4 space-y-4">
                  {navigation.important.map((item) => (
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
                  {navigation.support.map((item) => (
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
                  {navigation.social.map((item) => (
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
                  {navigation.legal.map((item) => (
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
}
