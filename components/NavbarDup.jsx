import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import whiteKahanaLogo from '../assets/kahana_logo_wide_light.svg';

function NavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSolutionsDropdownOpen, setIsSolutionsDropdownOpen] = useState(false);
  const [isResourcesDropdownOpen, setIsResourcesDropdownOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleSolutionsDropdown = () => {
    setIsSolutionsDropdownOpen(!isSolutionsDropdownOpen);
  };

  const toggleResourcesDropdown = () => {
    setIsResourcesDropdownOpen(!isResourcesDropdownOpen);
  };

  return (
    <nav className="bg-white border-b border-gray-200">
      <style jsx>{`
        /* Your styles here */
        .nav-link {
          padding: 0.5rem 0.75rem;
          border-radius: 0.5rem; /* Add rounded corners */
          transition: background-color 0.3s ease;
        }

        .nav-link:hover {
          background-color: #f2f2f2;
        }

        .dropdown {
          position: relative;
          display: inline-block;
        }

        .dropdown-text {
          display: none;
          position: absolute;
          background-color: white;
          min-width: 240px;
          z-index: 1;
        }

        .dropdown:hover .dropdown-text {
          display: block;
        }

        .dropdown-link {
          padding: 0.5rem 1rem;
          text-decoration: none;
          display: block;
          color: #000;
        }

        .dropdown-link:hover {
          background-color: #f2f2f2;
        }
        .nav-button {
          padding: 0.5rem 1rem;
          border-radius: 0.5rem; /* Add rounded corners */
          background-color: #038270;
          color: #fff;
          transition: background-color 0.3s ease;
        }
        .nav-button:hover {
          background-color: #024324;
        }
      `}</style>
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
          <div className="hidden md:flex space-x-1 items-center">
            <button className="nav-link">    
              <Link href="/about">
                About
              </Link>
            </button>
            <button className="nav-link"> 
              <Link href="/explore">
                Examples
              </Link>
            </button>
            <div className="dropdown">
              <button className="nav-link">Solutions</button>
              <div className="dropdown-text">
                <ul className="space-y-2" style={{ border: '1px solid transparent', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', backgroundColor: 'transparent', borderRadius: '8px' }}>
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
            </div>
            <div className="dropdown">
              <button className="nav-link">Resources</button>
              <div className="dropdown-text">
                <ul className="space-y-2" style={{ border: '1px solid transparent', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', backgroundColor: 'transparent', borderRadius: '8px' }}>
                  <li>
                    <Link href="https://blog.kahana.co/" className="dropdown-link">
                      Blog
                    </Link>
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
                    <Link href="https://kahana.tawk.help/" className="dropdown-link">
                      Help Center
                    </Link>
                  </li>
                  <li>
                    <Link href="/faq" className="dropdown-link">
                      FAQ
                    </Link>
                  </li>
                  <li>
                    <Link href="https://nas.io/creators-and-experts" className="dropdown-link">
                      Community
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <button className="nav-link">
              <Link href="/pricing">
                Pricing
              </Link>
            </button>
            <button className="nav-button">
              <a href="https://app.kahana.co/login">
                Log in
              </a>
            </button>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden flex items-start">
            <button
              onClick={toggleMobileMenu}
              className="hamburger-button ml-4 mt-2"
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
          <div className="flex flex-col items-start ml-4 space-y-4">
            <Link href="/about" className="mobile-link" style={{ fontWeight: 'bold'}}>
              About
            </Link>
            <Link href="/explore" className="mobile-link" style={{ fontWeight: 'bold'}}>
              Examples
            </Link>
            <div className="dropdown">
              <button
                className="mobile-link"
                onClick={toggleSolutionsDropdown}
                style={{ fontWeight: 'bold'}}
              >
                Solutions{' '}
                {isSolutionsDropdownOpen ? (
                  <svg
                    className="w-4 h-4 inline-block"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ transform: 'rotate(90deg)' }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    ></path>
                  </svg>
                ) : (
                  <svg
                    className="w-4 h-4 inline-block"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ transform: 'rotate(0deg)' }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    ></path>
                  </svg>
                )}
              </button>
              {isSolutionsDropdownOpen && (
                <ul className="space-y-2 bg-white" style={{ border: 'none', paddingTop: '10px' }}>
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
              )}
            </div>
            <div className="dropdown">
              <button
                className="mobile-link"
                onClick={toggleResourcesDropdown}
                style={{ fontWeight: 'bold'}}
              >
                Resources{' '}
                {isResourcesDropdownOpen ? (
                  <svg
                    className="w-4 h-4 inline-block"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ transform: 'rotate(90deg)' }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    ></path>
                  </svg>
                ) : (
                  <svg
                    className="w-4 h-4 inline-block"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ transform: 'rotate(0deg)' }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    ></path>
                  </svg>
                )}
              </button>
              {isResourcesDropdownOpen && (
                <ul className="space-y-2 bg-white" style={{ border: 'none', paddingTop: '10px' }}>
                  <li>
                    <Link href="https://blog.kahana.co/" className="dropdown-link">
                      Blog
                    </Link>
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
                    <Link href="https://kahana.tawk.help/" className="dropdown-link">
                      Help Center
                    </Link>
                  </li>
                  <li>
                    <Link href="/faq" className="dropdown-link">
                      FAQ
                    </Link>
                  </li>
                  <li>
                    <Link href="https://nas.io/creators-and-experts" className="dropdown-link">
                      Community
                    </Link>
                  </li>
                </ul>
              )}
            </div>
            <Link href="/pricing" className="mobile-link" style={{ fontWeight: 'bold'}}>
              Pricing
            </Link>
            <Link href="https://app.kahana.co/login" className="mobile-link bg-[#038270] hover:bg-[#024324] rounded-md py-2 px-4 text-white">
              Log in
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default NavBar;
