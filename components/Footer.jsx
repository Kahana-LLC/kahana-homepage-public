import React, { useEffect } from 'react';
import Link from 'next/link';

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
    <footer className="bg-white font-style" aria-labelledby="footer-heading">
      <hr className="my-8 h-px bg-slate-300 border-0 mx-8" />
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="mt-12 border-t border-gray-200 pt-8">
          <p className="text-base text-gray-400 xl:text-center">
            &copy; 2024 Kahana Group Inc. All rights reserved.
            <span className="space-x-1 hidden sm:inline">
            <span className="mx-2">|</span>
              <Link href="/explore" className="text-gray-500 hover:text-gray-900">Explore</Link> 
              <span className="mx-2">·</span>
              <Link href="/faq" className="text-gray-500 hover:text-gray-900">FAQ</Link>
              <span className="mx-2">·</span>
              <Link href="/pricing" className="text-gray-500 hover:text-gray-900">Pricing</Link>
              <span className="mx-2">·</span>
              <Link href="/privacy-policy" className="text-gray-500 hover:text-gray-900">Privacy</Link>
              <span className="mx-2">·</span>
              <Link href="/terms-and-conditions" className="text-gray-500 hover:text-gray-900">Terms</Link> 
              <span className="mx-2">·</span>
              <Link href="/about" className="text-gray-500 hover:text-gray-900">About</Link> 
              <span className="mx-2">·</span>
              <Link href="/sitemap" className="text-gray-500 hover:text-gray-900">Sitemap</Link> 
              <span className="mx-2">·</span>
              <Link href="/sales" className="text-gray-500 hover:text-gray-900">Contact</Link> 
            </span>
            <span className="space-y-2 sm:hidden flex flex-col items-start mt-6">
              <Link href="/explore" className="text-gray-500 hover:text-gray-900">Explore</Link>
              <Link href="/faq" className="text-gray-500 hover:text-gray-900">FAQ</Link>
              <Link href="/pricing" className="text-gray-500 hover:text-gray-900">Pricing</Link>
              <Link href="/privacy-policy" className="text-gray-500 hover:text-gray-900">Privacy</Link>
              <Link href="/terms-and-conditions" className="text-gray-500 hover:text-gray-900">Terms</Link>
              <Link href="/about" className="text-gray-500 hover:text-gray-900">About</Link>
              <Link href="/sitemap" className="text-gray-500 hover:text-gray-900">Sitemap</Link>
              <Link href="/sales" className="text-gray-500 hover:text-gray-900">Contact</Link>
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
