import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import whiteKahanaLogo from '../assets/kahana_logo_wide_gray.svg';

function NavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="relative">
      {/* Spacer div that matches navbar height */}
      <div className="h-16 w-full"></div>
      
      {/* Fixed navbar */}
      <nav className={`fixed top-0 left-0 w-full h-16 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/70 backdrop-blur-md shadow-md' : 'bg-white'
      }`}>
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
            transition: color 0.2s ease;
            position: relative;
          }

          .nav-link:hover {
            color: var(--kahana-primary);
          }

          .dropdown {
            position: relative;
            display: inline-block;
          }

          .dropdown-overlay {
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: rgba(0, 0, 0, 0.05);
            z-index: 40;
          }

          .dropdown:hover .dropdown-overlay {
            display: block;
          }

          .dropdown-content {
            display: none;
            position: absolute;
            top: calc(100% + 0.75rem);
            left: -180px;
            background-color: white;
            width: 520px;
            box-shadow: 0 2px 15px rgba(0, 0, 0, 0.06);
            border-radius: 12px;
            padding: 28px;
            z-index: 50;
            grid-template-columns: repeat(2, 1fr);
            gap: 40px;
          }

          .dropdown:hover .dropdown-content,
          .dropdown-content:hover {
            display: grid;
          }

          .dropdown-section {
            padding: 0;
          }

          .dropdown-section h3 {
            font-size: 0.75rem;
            font-weight: 600;
            color: #666;
            margin-bottom: 16px;
            text-transform: uppercase;
            letter-spacing: 0.05em;
          }

          .dropdown-link {
            display: block;
            color: #2c2c2c;
            text-decoration: none;
            font-size: 0.9375rem;
            line-height: 1.5;
            padding: 8px 16px;
            margin: 0 -16px;
            border-radius: 8px;
            transition: all 0.15s ease;
            font-family: "Roboto", sans-serif;
          }

          .dropdown-link:hover {
            color: var(--kahana-primary);
            background-color: #f8fafc;
          }

          .dropdown-link + .dropdown-link {
            margin-top: 1rem;
          }

          .dropdown-section:first-child {
            position: relative;
          }

          .dropdown-section:first-child::after {
            content: '';
            position: absolute;
            top: 0;
            right: -20px;
            width: 1px;
            height: 100%;
            background: #f0f0f0;
          }

          .featured-blog {
            background: #f5f7f9;
            border-radius: 8px;
            overflow: hidden;
          }

          .featured-blog img {
            width: 100%;
            height: 160px;
            object-fit: cover;
          }

          .featured-blog-content {
            padding: 20px;
          }

          .featured-blog-label {
            font-size: 0.75rem;
            font-weight: 600;
            color: #666;
            text-transform: uppercase;
            letter-spacing: 0.05em;
            margin-bottom: 0.75rem;
          }

          .featured-blog-title {
            font-size: 1rem;
            font-weight: 500;
            color: #111;
            line-height: 1.5;
            text-decoration: none;
            display: block;
          }

          .featured-blog-title:hover {
            color: var(--kahana-primary);
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
            color: var(--kahana-primary);
            background-color: transparent;
          }

          .nav-button.download:hover {
            color: var(--kahana-primary-dark);
          }

          .nav-button.get-in-touch {
            background-color: var(--kahana-primary);
            color: white;
            position: relative;
            z-index: 1;
            border: none;
            transition: all 0.3s ease;
          }

          .nav-button.get-in-touch:hover {
            background-color: var(--kahana-primary-dark);
            transform: translateY(-1px);
            box-shadow: 0 4px 12px rgba(42, 64, 55, 0.15);
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
            <div className="dropdown">
              <Link href="/about" className="nav-link">About</Link>
              <div className="dropdown-overlay"></div>
              <div className="dropdown-content">
                <div className="dropdown-section">
                  <h3 className="text-[0.75rem] font-semibold text-gray-600 mb-4 uppercase tracking-wider">About Kahana</h3>
                  <div className="flex flex-col space-y-4">
                    <Link href="/about" className="dropdown-link">
                      About
                    </Link>
                    <Link href="/press" className="dropdown-link">
                      Press
                    </Link>
                    <Link href="/events" className="dropdown-link">
                      Events & Webinars
                    </Link>
                  </div>
                </div>
                <div className="dropdown-section">
                  <h3 className="text-[0.75rem] font-semibold text-gray-600 mb-4 uppercase tracking-wider">Get Started</h3>
                  <div className="flex flex-col space-y-4">
                    <Link href="/sales" className="dropdown-link">
                      Contact Sales
                    </Link>
                    <Link href="/schedule-a-demo" className="dropdown-link">
                      Schedule a Demo
                    </Link>
                    <Link href="/get-a-quote" className="dropdown-link">
                      Get Quote
                    </Link>
                    <Link href="/support" className="dropdown-link">
                      Support Center
                    </Link>
                  </div>
                </div>
              </div>
            </div>
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
            <div className="mobile-section">
              <Link href="/about" className="mobile-link">About</Link>
              <Link href="/press" className="mobile-link">Press</Link>
              <Link href="/events" className="mobile-link">Events</Link>
            </div>
            <div className="mobile-section">
              <Link href="/sales" className="mobile-link">Get in Touch</Link>
              <Link href="/schedule-a-demo" className="mobile-link">Schedule a Demo</Link>
              <Link href="/get-a-quote" className="mobile-link">Request a Quote</Link>
              <Link href="/support" className="mobile-link">Product Support</Link>
            </div>
            <Link href="/download" className="mobile-link">Download</Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;

