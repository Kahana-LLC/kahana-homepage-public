import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import whiteKahanaLogo from '../assets/kahana_logo_wide_light.svg';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-white border-b border-gray-300">
      <div className="container mx-auto">
        <div className="flex justify-between items-center py-4">
          <Link href="/">
            <a>
              <Image
                className="h-10"
                src={whiteKahanaLogo}
                alt="navbar-logo"
              />
            </a>
          </Link>

          {/* Hamburger menu for mobile */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="text-gray-600 hover:text-gray-900 focus:outline-none"
            >
              <svg
                className="h-6 w-6 fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3 6H21V5H3v1zM3 11h18v-1H3v1zM3 16h18v-1H3v1z"
                />
              </svg>
            </button>
          </div>

          {/* Main navigation links */}
          <div className={`md:flex md:space-x-4 ${isOpen ? 'block' : 'hidden'} mt-4 md:mt-0`}>
            <Link href="/about">
              <a className="nav-link">About</a>
            </Link>
            <Link href="/explore">
              <a className="nav-link">Examples</a>
            </Link>
            <div className="dropdown">
              <span className="nav-link cursor-pointer">Solutions</span>
              <ul className="dropdown-menu">
                <li><Link href="/enterprise"><a onClick={closeMenu}>For Enterprise</a></Link></li>
                <li><Link href="/coaches"><a onClick={closeMenu}>For Coaches</a></Link></li>
                <li><Link href="/consultants"><a onClick={closeMenu}>For Consultants</a></Link></li>
                <li><Link href="/experts"><a onClick={closeMenu}>For Experts</a></Link></li>
                <li><Link href="/affiliates"><a onClick={closeMenu}>Become an affiliate</a></Link></li>
              </ul>
            </div>
            <div className="dropdown">
              <span className="nav-link cursor-pointer">Resources</span>
              <ul className="dropdown-menu">
                <li><a href="https://blog.kahana.co/" onClick={closeMenu}>Blog</a></li>
                <li><Link href="/resources"><a onClick={closeMenu}>Monetizing Notion</a></Link></li>
                <li><Link href="/resources"><a onClick={closeMenu}>Monetizing Google Drive</a></Link></li>
                <li><Link href="/resources"><a onClick={closeMenu}>Selling Digital Products</a></Link></li>
                <li><a href="https://kahana.tawk.help/" onClick={closeMenu}>Help Center</a></li>
                <li><Link href="/faq"><a onClick={closeMenu}>FAQ</a></Link></li>
                <li><a href="https://nas.io/creators-and-experts" onClick={closeMenu}>Community</a></li>
              </ul>
            </div>
            <Link href="/pricing">
              <a className="nav-link">Pricing</a>
            </Link>
            <a
              href="https://app.kahana.co/login"
              className="nav-link bg-[038270] hover:bg-[024324] text-white px-4 py-2 rounded-md"
            >
              Log in
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
