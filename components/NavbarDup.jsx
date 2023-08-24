import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import whiteKahanaLogo from '../assets/kahana_logo_wide_light.svg';

const NavBarDup = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/">
            <a>
              <Image
                className="h-10"
                src={whiteKahanaLogo}
                alt="navbar-logo"
              />
            </a>
          </Link>
          <div className="hidden md:flex space-x-6">
            <Link href="/about">
              <a className="text-gray-700 hover:text-gray-900">About</a>
            </Link>
            <Link href="/explore">
              <a className="text-gray-700 hover:text-gray-900">Examples</a>
            </Link>
            <div className="relative group">
              <span className="text-gray-700 cursor-pointer group-hover:text-gray-900">Solutions</span>
              <ul className={`absolute top-full left-0 hidden mt-2 space-y-2 bg-white border border-gray-200 group-hover:block ${menuOpen ? 'block' : 'hidden'} md:block`}>
                <li><Link href="/enterprise"><a className="block px-4 py-2 text-gray-700 hover:text-gray-900">For Enterprise</a></Link></li>
                <li><Link href="/coaches"><a className="block px-4 py-2 text-gray-700 hover:text-gray-900">For Coaches</a></Link></li>
                <li><Link href="/consultants"><a className="block px-4 py-2 text-gray-700 hover:text-gray-900">For Consultants</a></Link></li>
                <li><Link href="/experts"><a className="block px-4 py-2 text-gray-700 hover:text-gray-900">For Experts</a></Link></li>
                <li><Link href="/affiliates"><a className="block px-4 py-2 text-gray-700 hover:text-gray-900">Become an affiliate</a></Link></li>
              </ul>
            </div>
            <div className="relative group">
              <span className="text-gray-700 cursor-pointer group-hover:text-gray-900">Resources</span>
              <ul className={`absolute top-full left-0 hidden mt-2 space-y-2 bg-white border border-gray-200 group-hover:block ${menuOpen ? 'block' : 'hidden'} md:block`}>
                <li><a href="https://blog.kahana.co/" className="block px-4 py-2 text-gray-700 hover:text-gray-900">Blog</a></li>
                <li><Link href="/resources"><a className="block px-4 py-2 text-gray-700 hover:text-gray-900">Monetizing Notion</a></Link></li>
                <li><Link href="/resources"><a className="block px-4 py-2 text-gray-700 hover:text-gray-900">Monetizing Google Drive</a></Link></li>
                <li><Link href="/resources"><a className="block px-4 py-2 text-gray-700 hover:text-gray-900">Selling Digital Products</a></Link></li>
                <li><a href="https://kahana.tawk.help/" className="block px-4 py-2 text-gray-700 hover:text-gray-900">Help Center</a></li>
                <li><Link href="/faq"><a className="block px-4 py-2 text-gray-700 hover:text-gray-900">FAQ</a></Link></li>
                <li><a href="https://nas.io/creators-and-experts" className="block px-4 py-2 text-gray-700 hover:text-gray-900">Community</a></li>
              </ul>
            </div>
            <Link href="/pricing">
              <a className="text-gray-700 hover:text-gray-900">Pricing</a>
            </Link>
          </div>
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-700 hover:text-gray-900">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBarDup;


