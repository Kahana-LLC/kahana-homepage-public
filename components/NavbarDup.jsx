import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import whiteKahanaLogo from '../assets/kahana_logo_wide.svg';

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
      <nav className="bg-white bg-opacity-90">
        <style jsx>{`
          .nav-link {
            padding: 0.3rem 0.75rem;
            border-radius: 0.5rem;
            transition: background-color 0.3s ease;
            color: black !important;
            text-decoration: none;
            background-color: transparent;
            border: none;
          }

          .nav-link:hover {
            background-color: #FFFFFF;
          }

          .dropdown {
            position: relative;
            display: inline-block;
          }

          .dropdown-text {
            display: none;
            position: absolute;
            background-color: #024324;
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
            color: white;
            transition: background-color 0.3s ease;
          }

          .dropdown-link:hover {
            background-color: #FFFFFF;
          }

          .dropdown-button {
            padding: 0.2rem 0.6rem;
            background-color: transparent;
            width: 100%;
            text-align: left;
            color: white;
            border-radius: 0.5rem;
          }

          .dropdown-button:hover {
            background-color: #FFFFFF;
          }

          .nav-button {
            padding: 0.3rem 1rem;
            border-radius: 0.5rem;
            background-color: #3B675E;
            color: white !important;
            transition: background-color 0.3s ease, color 0.3s ease;
          }

          .nav-button:hover {
            background-color: #024324;
          }

          .mobile-link {
            color: black;
            transition: background-color 0.3s ease;
          }

          .mobile-link:hover {
            background-color: #D0EDE6;
          }
        `}</style>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-2">
            {/* Logo */}
            <div className="flex items-center" style={{ zIndex: 100, marginLeft: '-100px' }}>
              <Link href="/" aria-label="Home">
                <span className="sr-only">Company</span>
                <Image
                  className="h-7"
                  src={whiteKahanaLogo}
                  alt="navbar-logo"
                />
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex space-x-1 items-center">
              <button className="nav-link">
                <Link href="/explore">Explore</Link>
              </button>
              <button className="nav-link">
                <Link href="/pricing">Plans</Link>
              </button>
              <button className="nav-link">
                <Link href="/contact">Contact</Link>
              </button>
              <button className="nav-button">
                <a href="https://app.kahana.co/signup">Build a hub</a>
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
                    stroke="black"  // Ensure stroke is black
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
                    stroke="black"  // Ensure stroke is black
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
              <Link href="/explore" className="mobile-link">Explore</Link>
              <Link href="/pricing" className="mobile-link">Pricing</Link>

              <Link href="/contact" className="mobile-link">Contact</Link>

              
              <div className="flex flex-col space-y-2">
                <a href="https://app.kahana.co/signup" className="nav-button">Get started</a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}

export default NavBar;
