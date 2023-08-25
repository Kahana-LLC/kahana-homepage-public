import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

function NavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" aria-label="Home">
              <span className="sr-only">Company</span>
              <Image
                className="h-10"
                src={whiteKahanaLogo}
                alt="navbar-logo"
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-4">
            <Link href="/about" className="nav-link">
              About
            </Link>
            <Link href="/explore" className="nav-link">
              Examples
            </Link>
            <div className="dropdown">
              <button className="nav-link">Solutions</button>
              <ul className="absolute hidden mt-2 space-y-2 bg-white border border-gray-200 w-48">
                <li>
                  <Link href="/enterprise" className="dropdown-link">
                    For Enterprise
                  </Link>
                </li>
                <li>
                  <Link href="/coaches" className="dropdown-link">
                    For Coaches
                  </Link>
                </li>
                <li>
                  <Link href="/consultants" className="dropdown-link">
                    For Consultants
                  </Link>
                </li>
                <li>
                  <Link href="/experts" className="dropdown-link">
                    For Experts
                  </Link>
                </li>
                <li>
                  <Link href="/affiliates" className="dropdown-link">
                    Become an affiliate
                  </Link>
                </li>
              </ul>
            </div>
            <div className="dropdown">
              <button className="nav-link">Resources</button>
              <ul className="absolute hidden mt-2 space-y-2 bg-white border border-gray-200 w-48">
                <li>
                  <a
                    href="https://blog.kahana.co/"
                    className="dropdown-link"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <Link href="/resources" className="dropdown-link">
                    Monetizing Notion
                  </Link>
                </li>
                <li>
                  <Link href="/resources" className="dropdown-link">
                    Monetizing Google Drive
                  </Link>
                </li>
                <li>
                  <Link href="/resources" className="dropdown-link">
                    Selling Digital Products
                  </Link>
                </li>
                <li>
                  <a
                    href="https://kahana.tawk.help/"
                    className="dropdown-link"
                  >
                    Help Center
                  </a>
                </li>
                <li>
                  <Link href="/faq" className="dropdown-link">
                    FAQ
                  </Link>
                </li>
                <li>
                  <a
                    href="https://nas.io/creators-and-experts"
                    className="dropdown-link"
                  >
                    Community
                  </a>
                </li>
              </ul>
            </div>
            <Link href="/pricing" className="nav-link">
              Pricing
            </Link>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMobileMenu}
              className="hamburger-button"
              aria-label="Mobile Menu"
            >
              {isMobileMenuOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  ></path>
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Content */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white py-4">
          <div className="flex flex-col items-center space-y-4">
            <Link href="/about" className="mobile-link">
              About
            </Link>
            <Link href="/explore" className="mobile-link">
              Examples
            </Link>
            <div className="dropdown">
              <button className="mobile-link">Solutions</button>
              <ul className="absolute hidden space-y-2 bg-white border border-gray-200 w-48">
                <li>
                  <Link href="/enterprise" className="dropdown-link">
                    For Enterprise
                  </Link>
                </li>
                <li>
                  <Link href="/coaches" className="dropdown-link">
                    For Coaches
                  </Link>
                </li>
                <li>
                  <Link href="/consultants" className="dropdown-link">
                    For Consultants
                  </Link>
                </li>
                <li>
                  <Link href="/experts" className="dropdown-link">
                    For Experts
                  </Link>
                </li>
                <li>
                  <Link href="/affiliates" className="dropdown-link">
                    Become an affiliate
                  </Link>
                </li>
              </ul>
            </div>
            <div className="dropdown">
              <button className="mobile-link">Resources</button>
              <ul className="absolute hidden space-y-2 bg-white border border-gray-200 w-48">
                <li>
                  <a
                    href="https://blog.kahana.co/"
                    className="dropdown-link"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <Link href="/resources" className="dropdown-link">
                    Monetizing Notion
                  </Link>
                </li>
                <li>
                  <Link href="/resources" className="dropdown-link">
                    Monetizing Google Drive
                  </Link>
                </li>
                <li>
                  <Link href="/resources" className="dropdown-link">
                    Selling Digital Products
                  </Link>
                </li>
                <li>
                  <a
                    href="https://kahana.tawk.help/"
                    className="dropdown-link"
                  >
                    Help Center
                  </a>
                </li>
                <li>
                  <Link href="/faq" className="dropdown-link">
                    FAQ
                  </Link>
                </li>
                <li>
                  <a
                    href="https://nas.io/creators-and-experts"
                    className="dropdown-link"
                  >
                    Community
                  </a>
                </li>
              </ul>
            </div>
            <Link href="/pricing" className="mobile-link">
              Pricing
            </Link>
            <a
              href="https://app.kahana.co/login"
              className="mobile-link bg-green-500 rounded-md py-2 px-4"
            >
              Log in
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

export default NavBar;
