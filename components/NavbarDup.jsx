import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import whiteKahanaLogo from '../assets/kahana_logo_wide_light_v2.svg';

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
    <div>
      <nav className="bg-gradient-to-r from-black to-[#0A4526]">
        <style jsx>{`
          /* Your styles here */
          .nav-link {
            padding: 0.3rem 0.75rem;
            border-radius: 0.5rem; /* Add rounded corners */
            transition: background-color 0.3s ease;
            color: white !important; /* White text color for navbar links */
            text-decoration: none; /* Remove underline */
            background-color: transparent; /* Remove background color */
            border: none; /* Remove border */
          }

          .nav-link:hover {
            background-color: #283B37;
          }

          .dropdown {
            position: relative;
            display: inline-block;
          }

          .dropdown-text {
            display: none;
            position: absolute;
            background-color: #024324; /* Dark green background for dropdown */
            min-width: 220px;
            color: white;
            z-index: 1;
          }

          .dropdown:hover .dropdown-text {
            display: block;
          }

          .dropdown-link {
            padding: 0.5rem 1rem;
            text-decoration: none;
            display: block;
            color: black; /* White text for dropdown links */
            transition: background-color 0.3s ease;
          }

          .dropdown-link:hover {
            background-color: #f2f2f2;
          }

          .dropdown-button {
            padding: 0.2rem 0.6rem;
            background-color: transparent;
            width: 100%;
            text-align: left;
            color: white; /* White text for dropdown button */
            border-radius: 0.5rem;
          }

          .dropdown-button:hover {
            background-color: #3D5A54;
          }

          .nav-button {
            padding: 0.3rem 1rem;
            border-radius: 0.5rem;
            background-color: #3D5A54;
            color: white !important;

            transition: background-color 0.3s ease, color 0.3s ease;
          }

          .nav-button:hover {
            background-color: #283B37;
          }

          .mobile-link {
            // font-weight: bold;
            color: black; /* White text for mobile links */
            transition: background-color 0.3s ease;
          }

          .mobile-link:hover {
            background-color: #D0EDE6;
          }
        `}</style>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-2">
            {/* Logo */}
            <div className="flex items-center" style={{ zIndex: 100 }}>
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
            <div className="hidden lg:flex space-x-1 items-center">
            <button className="nav-link">
                <Link href="/explore">🔎 Explore</Link>
              </button>
              <button className="nav-link">
                <Link href="/about">About</Link>
              </button>
              <button className="nav-link">
                <Link href="https://blog.kahana.co/" target="_blank" rel="noreferrer">
                  Help
                </Link>
              </button>
            
              <div className="dropdown">
                <button className="nav-link" onClick={toggleSolutionsDropdown}>
                  Solutions
                </button>
                <div className="dropdown-text">
                  <ul className="space-y-2">
                    <button className="dropdown-button">
                      <Link href="/enterprise" className="dropdown-link">
                        For Enterprise
                      </Link>
                    </button>
                    <button className="dropdown-button">
                      <Link href="/coaches" className="dropdown-link">
                        For Coaches
                      </Link>
                    </button>
                    <button className="dropdown-button">
                      <Link href="/consultants" className="dropdown-link">
                        For Consultants
                      </Link>
                    </button>
                    <button className="dropdown-button">
                      <Link href="/experts" className="dropdown-link">
                        For Experts
                      </Link>
                    </button>
                    <button className="dropdown-button">
                      <Link href="/order-hubs-on-demand" className="dropdown-link">
                        Order hubs on-demand
                      </Link>
                    </button>
                    <button className="dropdown-button">
                      <Link href="/affiliates" className="dropdown-link">
                        Become an affiliate
                      </Link>
                    </button>
                  </ul>
                </div>
              </div>
              <div className="dropdown">
                <button className="nav-link" onClick={toggleResourcesDropdown}>
                  Resources
                </button>
                <div className="dropdown-text">
                  <ul className="space-y-2">
                    <button className="dropdown-button">
                      <Link href="https://blog.kahana.co/" target="_blank" rel="noreferrer" className="dropdown-link">
                        Blog
                      </Link>
                    </button>
                    <button className="dropdown-button">
                      <Link href="/resources" className="dropdown-link">
                        Monetizing Notion
                      </Link>
                    </button>
                    <button className="dropdown-button">
                      <Link href="/resources" className="dropdown-link">
                        Monetizing Google Drive
                      </Link>
                    </button>
                    <button className="dropdown-button">
                      <Link href="/resources" className="dropdown-link">
                        Selling Digital Products
                      </Link>
                    </button>
                    <button className="dropdown-button">
                      <Link href="/faq" className="dropdown-link">
                        FAQ
                      </Link>
                    </button>
                  </ul>
                </div>
              </div>
              <button className="nav-link">
                <Link href="/pricing">Pricing</Link>
              </button>
              <button className="nav-button">
                <a href="https://app.kahana.co/signup">Sign up</a>
              </button>
              <button className="nav-button">
                <Link href="/sales">Contact sales</Link>
              </button>
            </div>

            {/* Mobile Menu */}
            <div className="lg:hidden flex items-start">
              <button
                onClick={toggleMobileMenu}
                className="hamburger-button ml-4 mt-2"
                aria-label="Mobile Menu"
              >
                {isMobileMenuOpen ? (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="white"
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
                    stroke="white"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    ></path>
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Content */}
        {isMobileMenuOpen && (
          <div className="lg:hidden h-screen bg-white py-4 z-100">
            <div className="flex flex-col items-start ml-4 space-y-6">
              <Link href="/about" className="mobile-link">About</Link>
              <Link href="https://blog.kahana.co/" target="_blank" rel="noreferrer" className="mobile-link">Help</Link>
              <Link href="/explore" className="mobile-link">Explore</Link>
              <div className="dropdown">
                <button className="mobile-link" onClick={toggleSolutionsDropdown}>
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
                  <ul className="space-y-4 bg-white" style={{ border: 'none', paddingTop: '15px' }}>
                    <li><Link href="/enterprise" className="mobile-link">For Enterprise</Link></li>
                    <li><Link href="/coaches" className="mobile-link">For Coaches</Link></li>
                    <li><Link href="/consultants" className="mobile-link">For Consultants</Link></li>
                    <li><Link href="/experts" className="mobile-link">For Experts</Link></li>
                    <li><Link href="/order-hubs-on-demand" className="mobile-link">Order hubs on-demand</Link></li>
                    <li><Link href="/affiliates" className="mobile-link">Become an affiliate</Link></li>
                  </ul>
                )}
              </div>
              <div className="dropdown">
                <button className="mobile-link" onClick={toggleResourcesDropdown}>
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
                  <ul className="space-y-4 bg-white" style={{ border: 'none', paddingTop: '15px' }}>
                    <li><Link href="https://blog.kahana.co/" className="mobile-link" target="_blank" rel="noreferrer">Blog</Link></li>
                    <li><Link href="/resources" className="mobile-link">Monetizing Notion</Link></li>
                    <li><Link href="/resources" className="mobile-link">Monetizing Google Drive</Link></li>
                    <li><Link href="/resources" className="mobile-link">Selling Digital Products</Link></li>
                    <li><Link href="/faq" className="mobile-link">FAQ</Link></li>
                  </ul>
                )}
              </div>
              <Link href="/pricing" className="mobile-link">Pricing</Link>
              <Link href="/sales" className="mobile-link">Contact sales</Link>
              <Link href="https://7hkdcfzbmr0.typeform.com/to/ZYLHazEf?utm_content=hamburger_menu" className="mobile-link">Request a demo</Link>
            </div>
            <hr className="w-full border-gray-200 mt-2 mb-2" />
            <div className="flex flex-col items-center mt-4">
              <Link href="https://app.kahana.co/signup" className="mobile-link bg-[#3B675E] hover:bg-[#024324] rounded-md h-10 w-60 text-white text-center flex justify-center items-center">
                Sign up
              </Link>
              <Link href="https://app.kahana.co/login" className="mobile-link bg-[#FFFFFF] hover:bg-[#f2f2f2] border-gray-300 border rounded-md h-10 w-60 mt-2 text-center flex justify-center items-center">
                Log in
              </Link>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}

export default NavBar;
