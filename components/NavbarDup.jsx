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
            background-color: rgba(0, 0, 0, 0.3);
            backdrop-filter: blur(2px);
            z-index: 40;
            pointer-events: none;
          }

          .dropdown:hover .dropdown-overlay {
            display: block;
          }

          .dropdown-content {
            display: none;
            position: absolute;
            top: calc(100% + 0.5rem);
            left: -100px;
            background-color: var(--kahana-ui-surface);
            min-width: 600px;
            box-shadow: 0 2px 15px rgba(0,0,0,0.08);
            border-radius: 12px;
            padding: 24px;
            z-index: 50;
            grid-template-columns: repeat(2, 1fr) 300px;
            gap: 24px;
            opacity: 0;
            transform: translateY(-8px);
            transition: opacity 0.2s, transform 0.2s;
          }

          .dropdown:hover .dropdown-content,
          .dropdown-content:hover {
            display: grid;
            opacity: 1;
            transform: translateY(0);
          }

          /* Add a small invisible area to prevent menu from closing when moving cursor from About to menu */
          .dropdown:hover::after {
            content: '';
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            height: 0.5rem;
          }

          .dropdown-section {
            padding: 0;
          }

          .dropdown-section h3 {
            font-size: 0.75rem;
            font-weight: 500;
            color: var(--kahana-primary);
            margin-bottom: 0.75rem;
            text-transform: uppercase;
            letter-spacing: 0.05em;
          }

          .dropdown-link {
            display: block;
            color: var(--kahana-primary-light);
            text-decoration: none;
            transition: color 0.2s ease;
            font-size: 0.875rem;
            line-height: 1.75;
          }

          .dropdown-link:hover {
            color: var(--kahana-primary);
          }

          .featured-blog {
            background: linear-gradient(to right, var(--kahana-ui-background), var(--kahana-secondary-light));
            border-radius: 8px;
            overflow: hidden;
          }

          .featured-blog img {
            width: 100%;
            height: 160px;
            object-fit: cover;
          }

          .featured-blog-content {
            padding: 16px;
          }

          .featured-blog-label {
            font-size: 0.75rem;
            color: #666;
            text-transform: uppercase;
            letter-spacing: 0.05em;
            margin-bottom: 8px;
          }

          .featured-blog-title {
            font-size: 0.9375rem;
            font-weight: 500;
            color: #111;
            line-height: 1.4;
            margin-bottom: 8px;
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
          }

          .nav-button.get-in-touch:hover {
            background-color: var(--kahana-primary-dark);
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
                  <h3>About</h3>
                  <div className="flex flex-col">
                    <Link href="/about/company" className="dropdown-link">The Company</Link>
                    <Link href="/about/careers" className="dropdown-link">Careers</Link>
                    <Link href="/about/press" className="dropdown-link">Press</Link>
                    <Link href="/about/media-coverage" className="dropdown-link">Media Coverage</Link>
                    <Link href="/about/events" className="dropdown-link">Events</Link>
                  </div>
                </div>
                <div className="dropdown-section">
                  <h3>Contact</h3>
                  <div className="flex flex-col">
                    <Link href="/contact" className="dropdown-link">Get in Touch</Link>
                    <Link href="/schedule-demo" className="dropdown-link">Schedule a Demo</Link>
                    <Link href="/quote" className="dropdown-link">Request a Quote</Link>
                    <Link href="/support" className="dropdown-link">Product Support</Link>
                  </div>
                </div>
                <div className="featured-blog">
                  <img 
                    src="/featured-blog-image.jpg" 
                    alt="Featured blog post" 
                  />
                  <div className="featured-blog-content">
                    <div className="featured-blog-label">Featured Blog</div>
                    <Link href="/blog/technical-debt" className="featured-blog-title">
                      Tackling Technical Debt and Redefining Application Access
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
              <Link href="/about/company" className="mobile-link">The Company</Link>
              <Link href="/about/careers" className="mobile-link">Careers</Link>
              <Link href="/about/press" className="mobile-link">Press</Link>
              <Link href="/about/media" className="mobile-link">Media Coverage</Link>
              <Link href="/about/events" className="mobile-link">Events</Link>
            </div>
            <div className="mobile-section">
              <Link href="/contact" className="mobile-link">Get in Touch</Link>
              <Link href="/schedule-a-demo" className="mobile-link">Schedule a Demo</Link>
              <Link href="/quote" className="mobile-link">Request a Quote</Link>
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

