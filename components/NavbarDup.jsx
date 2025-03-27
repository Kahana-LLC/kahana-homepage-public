import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import whiteKahanaLogo from '../assets/kahana_logo_wide.svg';

function NavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="relative">
      {/* Spacer div that matches navbar height */}
      <div className="h-16 w-full"></div>
      
      {/* Fixed navbar */}
      <nav className="fixed top-0 left-0 w-full h-16 bg-white shadow-md z-50">
        <style jsx>{`
          .font-style {
            font-family: sans-serif;
          }

          .mobile-link {
            color: #333;
            transition: background-color 0.3s ease, color 0.3s ease;
            padding: 1.25rem 1.5rem;
            border-radius: 0.5rem;
            width: 100%;
            text-align: left;
            background-color: #f7f7f7;
            font-size: 1.2rem;
            font-weight: 500;
            margin-bottom: 0.5rem;
          }

          .mobile-link:nth-child(even) {
            background-color: #e1e1e1;
          }

          .mobile-link:hover {
            background-color: #D0EDE6;
          }

          .nav-content {
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 100%;
            padding: 0 24px;
            max-width: 1280px;
            margin: 0 auto;
          }

          .logo {
            height: 42px;
            width: auto;
          }

          .nav-links {
            display: flex;
            align-items: center;
            gap: 2rem;
          }

          .nav-link {
            color: #333;
            font-size: 1rem;
            font-weight: 500;
            text-decoration: none;
            transition: color 0.3s ease;
          }

          .nav-link:hover {
            color: #3B675E;
          }

          .nav-buttons {
            display: flex;
            align-items: center;
            gap: 1rem;
          }

          .nav-button {
            display: inline-flex;
            justify-content: center;
            align-items: center;
            padding: 0.5rem 1rem;
            border-radius: 0.375rem;
            transition: all 0.3s ease;
            font-size: 0.875rem;
            font-weight: 500;
          }

          .nav-button.download {
            color: #333;
            background-color: transparent;
          }

          .nav-button.download:hover {
            color: #3B675E;
          }

          .nav-button.get-in-touch {
            background-color: #3B675E;
            color: white;
          }

          .nav-button.get-in-touch:hover {
            background-color: #2A4A3F;
          }

          .mobile-menu {
            position: fixed;
            top: 64px;
            right: 0;
            width: 260px;
            height: calc(100vh - 64px);
            background-color: white;
            box-shadow: -2px 0 5px rgba(0, 0, 0, 0.1);
            transform: translateX(100%);
            transition: transform 0.3s ease-in-out;
            z-index: 40;
            overflow-y: auto;
          }

          .mobile-menu.open {
            transform: translateX(0);
          }

          .menu-links {
            padding: 1rem;
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
          }

          @media (max-width: 1024px) {
            .nav-links {
              display: none;
            }
          }
        `}</style>
        <div className="nav-content">
          {/* Logo */}
          <Link href="/" aria-label="Home">
            <span className="sr-only">Home</span>
            <Image
              src={whiteKahanaLogo}
              alt="navbar-logo"
              className="logo"
              height={42}
              width={150}
            />
          </Link>

          {/* Navigation Links */}
          <div className="nav-links">
            <Link href="/products" className="nav-link">Product</Link>
            <Link href="/solutions" className="nav-link">Solutions</Link>
            <Link href="/partners" className="nav-link">Partners</Link>
            <Link href="/learn" className="nav-link">Learn</Link>
            <Link href="/about" className="nav-link">About</Link>
          </div>

          {/* Buttons and Hamburger Menu */}
          <div className="flex items-center gap-4">
            <div className="nav-buttons hidden md:flex">
              <Link href="/download">
                <button className="nav-button download">Download</button>
              </Link>
              <Link href="/contact">
                <button className="nav-button get-in-touch">Get in touch</button>
              </Link>
            </div>

            {/* Hamburger Menu */}
            <button
              onClick={toggleMobileMenu}
              className="lg:hidden"
              aria-label="Mobile Menu"
            >
              {isMobileMenuOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="black"
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
                  stroke="black"
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

        {/* Mobile Menu Content */}
        <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
          <div className="menu-links">
            <Link href="/products" className="mobile-link">Product</Link>
            <Link href="/solutions" className="mobile-link">Solutions</Link>
            <Link href="/partners" className="mobile-link">Partners</Link>
            <Link href="/learn" className="mobile-link">Learn</Link>
            <Link href="/about" className="mobile-link">About</Link>
            <Link href="/download" className="mobile-link">Download</Link>
            <Link href="/contact" className="mobile-link">Get in touch</Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;

