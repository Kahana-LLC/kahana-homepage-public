import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import whiteKahanaLogo from '../assets/kahana_logo_wide_light.svg';

const NavMenu = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" aria-label="Home">
              <span className="sr-only">Company</span>
              <Image
                className="h-10"
                src={whiteKahanaLogo}
                alt="navbar-logo"
              />
            </Link>
          </div>
          <div className="hidden md:flex space-x-4">
            <NavLink href="/about">About</NavLink>
            <NavLink href="/explore">Examples</NavLink>
            <Dropdown title="Solutions">
              <DropdownItem href="/enterprise">For Enterprise</DropdownItem>
              <DropdownItem href="/coaches">For Coaches</DropdownItem>
              <DropdownItem href="/consultants">For Consultants</DropdownItem>
              <DropdownItem href="/experts">For Experts</DropdownItem>
              <DropdownItem href="/affiliates">Become an affiliate</DropdownItem>
            </Dropdown>
            <Dropdown title="Resources">
              <DropdownItem href="https://blog.kahana.co/">Blog</DropdownItem>
              <DropdownItem href="/resources">Monetizing Notion</DropdownItem>
              <DropdownItem href="/resources">Monetizing Google Drive</DropdownItem>
              <DropdownItem href="/resources">Selling Digital Products</DropdownItem>
              <DropdownItem href="https://kahana.tawk.help/">Help Center</DropdownItem>
              <DropdownItem href="/faq">FAQ</DropdownItem>
              <DropdownItem href="https://nas.io/creators-and-experts">Community</DropdownItem>
            </Dropdown>
            <NavLink href="/pricing">Pricing</NavLink>
            <LoginButton />
          </div>
          {/* Hamburger Menu */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMobileMenu}
              className="text-gray-600 hover:text-gray-900 focus:outline-none"
            >
              <svg
                className={`h-6 w-6 ${mobileMenuOpen ? 'hidden' : 'block'}`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className={`h-6 w-6 ${mobileMenuOpen ? 'block' : 'hidden'}`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {mobileMenuOpen && (
        <div className="md:hidden">
          <MobileMenuItem href="/about">About</MobileMenuItem>
          <MobileMenuItem href="/explore">Examples</MobileMenuItem>
          <Dropdown title="Solutions">
            <DropdownItem href="/enterprise">For Enterprise</DropdownItem>
            <DropdownItem href="/coaches">For Coaches</DropdownItem>
            <DropdownItem href="/consultants">For Consultants</DropdownItem>
            <DropdownItem href="/experts">For Experts</DropdownItem>
            <DropdownItem href="/affiliates">Become an affiliate</DropdownItem>
          </Dropdown>
          <Dropdown title="Resources">
            <DropdownItem href="https://blog.kahana.co/">Blog</DropdownItem>
            <DropdownItem href="/resources">Monetizing Notion</DropdownItem>
            <DropdownItem href="/resources">Monetizing Google Drive</DropdownItem>
            <DropdownItem href="/resources">Selling Digital Products</DropdownItem>
            <DropdownItem href="https://kahana.tawk.help/">Help Center</DropdownItem>
            <DropdownItem href="/faq">FAQ</DropdownItem>
            <DropdownItem href="https://nas.io/creators-and-experts">Community</DropdownItem>
          </Dropdown>
          <MobileMenuItem href="/pricing">Pricing</MobileMenuItem>
          <LoginButton />
        </div>
      )}
    </nav>
  );
};

const NavLink = ({ href, children }) => (
  <Link href={href}>
    <a className="text-gray-600 hover:text-gray-900">{children}</a>
  </Link>
);

const Dropdown = ({ title, children }) => (
  <div className="dropdown">
    <button className="text-gray-600 hover:text-gray-900">{title}</button>
    <div className="hidden absolute z-10 left-0 mt-2 space-y-2 bg-white border border-gray-200 group-hover:block">
      {children}
    </div>
  </div>
);

const DropdownItem = ({ href, children }) => (
  <Link href={href}>
    <a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
      {children}
    </a>
  </Link>
);

const LoginButton = () => (
  <a
    href="https://app.kahana.co/login"
    className="bg-green-600 hover:bg-green-800 text-white px-4 py-2 rounded-full transition-colors duration-300"
  >
    Log in
  </a>
);

const MobileMenuItem = ({ href, children }) => (
  <Link href={href}>
    <a className="block py-2 px-4 text-gray-700 hover:bg-gray-100">{children}</a>
  </Link>
);

export default NavMenu;
