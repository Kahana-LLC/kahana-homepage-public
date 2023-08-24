import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import whiteKahanaLogo from '../assets/kahana_logo_wide_light.svg';

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="container mx-auto px-4 py-2">
        <div className="flex justify-between items-center">
          <Link href="/">
            <a>
              <Image
                className="h-8"
                src={whiteKahanaLogo}
                alt="navbar-logo"
              />
            </a>
          </Link>
          <div className="hidden md:flex space-x-4">
            <Link href="/about">
              <a className="text-gray-700 hover:text-gray-900">About</a>
            </Link>
            <Link href="/explore">
              <a className="text-gray-700 hover:text-gray-900">Examples</a>
            </Link>
            <div className="relative group">
              <span className="text-gray-700 cursor-pointer hover:text-gray-900">Solutions</span>
              <ul className={`dropdown hidden mt-2 space-y-2 bg-white border border-gray-200 group-hover:block ${menuOpen ? 'md:block' : 'hidden'}`}>
                <li><Link href="/enterprise"><a className="block px-3 py-2 text-gray-700 hover:bg-gray-100">For Enterprise</a></Link></li>
                <li><Link href="/coaches"><a className="block px-3 py-2 text-gray-700 hover:bg-gray-100">For Coaches</a></Link></li>
                <li><Link href="/consultants"><a className="block px-3 py-2 text-gray-700 hover:bg-gray-100">For Consultants</a></Link></li>
                <li><Link href="/experts"><a className="block px-3 py-2 text-gray-700 hover:bg-gray-100">For Experts</a></Link></li>
                <li><Link href="/affiliates"><a className="block px-3 py-2 text-gray-700 hover:bg-gray-100">Become an affiliate</a></Link></li>
              </ul>
            </div>
            <div className="relative group">
              <span className="text-gray-700 cursor-pointer hover:text-gray-900">Resources</span>
              <ul className={`dropdown hidden mt-2 space-y-2 bg-white border border-gray-200 group-hover:block ${menuOpen ? 'md:block' : 'hidden'}`}>
                <li><a href="https://blog.kahana.co/" className="block px-3 py-2 text-gray-700 hover:bg-gray-100">Blog</a></li>
                <li><Link href="/resources"><a className="block px-3 py-2 text-gray-700 hover:bg-gray-100">Monetizing Notion</a></Link></li>
                <li><Link href="/resources"><a className="block px-3 py-2 text-gray-700 hover:bg-gray-100">Monetizing Google Drive</a></Link></li>
                <li><Link href="/resources"><a className="block px-3 py-2 text-gray-700 hover:bg-gray-100">Selling Digital Products</a></Link></li>
                <li><a href="https://kahana.tawk.help/" className="block px-3 py-2 text-gray-700 hover:bg-gray-100">Help Center</a></li>
                <li><Link href="/faq"><a className="block px-3 py-2 text-gray-700 hover:bg-gray-100">FAQ</a></Link></li>
                <li><a href="https://nas.io/creators-and-experts" className="block px-3 py-2 text-gray-700 hover:bg-gray-100">Community</a></li>
              </ul>
            </div>
            <Link href="/pricing">
              <a className="text-gray-700 hover:text-gray-900">Pricing</a>
            </Link>
            <a href="https://app.kahana.co/login" className="text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-full">Log in</a>
          </div>
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-700 hover:text-gray-900">
              {menuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

