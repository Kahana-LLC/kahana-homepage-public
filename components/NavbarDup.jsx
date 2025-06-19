import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import whiteKahanaLogo from '../assets/kahana_logo_wide_gray.svg?v=2';

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

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) { // 1024px is the lg breakpoint in Tailwind
        setIsMobileMenuOpen(false);
      }
    };

    // Add event listener
    window.addEventListener('resize', handleResize);
    
    // Call handler right away to check initial size
    handleResize();

    // Clean up
    return () => window.removeEventListener('resize', handleResize);
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

          @media (max-width: 768px) {
            .logo {
              height: 32px;
              width: auto;
            }
          }

          .nav-links {
            display: flex;
            align-items: center;
            gap: 1.5rem;
            height: 100%;
          }

          .nav-link {
            position: relative;
            color: #333;
            font-size: 1rem;
            font-weight: 500;
            text-decoration: none;
            transition: color 0.2s ease;
            padding: 0.75rem 1rem;
            white-space: nowrap;
            z-index: 2;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
            letter-spacing: -0.01em;
          }

          .nav-link:hover {
            color: var(--kahana-primary);
          }

          .dropdown {
            position: relative;
            display: inline-flex;
            align-items: center;
            height: 100%;
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
            pointer-events: none;
          }

          .dropdown-content {
            visibility: hidden;
            opacity: 0;
            position: absolute;
            top: calc(100% - 0.5rem);
            left: 50%;
            transform: translateX(-50%) translateY(-10px);
            background-color: white;
            min-width: 280px;
            box-shadow: 0 2px 15px rgba(0, 0, 0, 0.06);
            border-radius: 12px;
            padding: 28px;
            transition: all 0.15s ease;
            display: grid;
            gap: 40px;
            pointer-events: none;
          }

          .dropdown:hover .dropdown-content {
            visibility: visible;
            opacity: 1;
            transform: translateX(-50%) translateY(0);
            pointer-events: auto;
          }

          .dropdown:hover .dropdown-overlay {
            display: block;
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
            gap: 0.75rem;
          }

          @media (max-width: 768px) {
            .nav-buttons {
              gap: 0.5rem;
            }
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

          @media (max-width: 768px) {
            .nav-button {
              padding: 0.375rem 0.75rem;
              font-size: 0.75rem;
            }
          }

          .nav-button.download {
            color: #66C2BE;
            background-color: transparent;
          }

          .nav-button.download:hover {
            color: #55B3AF;
          }

          .nav-button.get-in-touch {
            background-color: #66C2BE;
            color: white;
            position: relative;
            z-index: 1;
            border: none;
            transition: all 0.3s ease;
          }

          .nav-button.get-in-touch:hover {
            background-color: #55B3AF;
            transform: translateY(-1px);
            box-shadow: 0 4px 12px rgba(102, 194, 190, 0.25);
          }

          .mobile-menu {
            position: fixed;
            top: 64px;
            right: 0;
            width: 300px;
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
            padding: 1.5rem;
            display: flex;
            flex-direction: column;
            gap: 0.75rem;
          }

          .mobile-link {
            color: #333;
            transition: all 0.3s ease;
            padding: 1rem 1.25rem;
            border-radius: 0.75rem;
            width: 100%;
            text-align: left;
            background-color: #f8f9fa;
            font-size: 1.125rem;
            font-weight: 500;
            display: flex;
            align-items: center;
            border: 1px solid #edf0f2;
          }

          .mobile-link:hover {
            background-color: #D0EDE6;
            color: #2c2c2c;
            transform: translateX(4px);
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
          }

          .mobile-link:active {
            transform: translateX(2px);
            background-color: #bfe5dd;
          }

          @media (max-width: 1024px) {
            .nav-links {
              display: none;
            }
          }

          /* Ensure proper z-indexing */
          .dropdown {
            z-index: 1;
          }
          .dropdown:hover {
            z-index: 100;
          }

          /* Add hover trigger area */
          .dropdown::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            z-index: 1;
          }
        `}</style>
        <div className="nav-content">
          <Link href="/" className="flex items-center">
            <div className="relative h-[42px] w-[160px]">
              <Image
                src={whiteKahanaLogo}
                alt="Kahana Logo"
                fill
                style={{ objectFit: 'contain' }}
                priority
              />
            </div>
          </Link>

          {/* Navigation Links */}
          <div className="nav-links">
            <div className="dropdown">
              <Link href="/products" className="nav-link">Products</Link>
              <div className="dropdown-overlay"></div>
              <div className="dropdown-content" style={{ width: '280px', gridTemplateColumns: '1fr' }}>
                <div className="dropdown-section">
                  <h3 className="text-[0.75rem] font-semibold text-gray-600 mb-4 uppercase tracking-wider">Our Products</h3>
                  <div className="flex flex-col space-y-4">
                    <Link href="/products/free-agentic-browser" className="dropdown-link">
                      Oasis Agentic Browser
                    </Link>
                    <Link href="/products/enterprise-browser" className="dropdown-link">
                      Oasis Enterprise Browser
                    </Link>
                    <Link href="/products/web-application" className="dropdown-link">
                      Web Application
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="dropdown">
              <Link href="/markets" className="nav-link">Markets</Link>
              <div className="dropdown-overlay"></div>
              <div className="dropdown-content">
                <div className="dropdown-section">
                  <h3 className="text-[0.75rem] font-semibold text-gray-600 mb-4 uppercase tracking-wider">Industry Markets</h3>
                  <div className="flex flex-col space-y-4">
                    <Link href="/markets/manufacturing" className="dropdown-link">Manufacturing</Link>
                    <Link href="/markets/professional" className="dropdown-link">Professional Services</Link>
                    <Link href="/markets/healthcare" className="dropdown-link">Healthcare</Link>
                    <Link href="/markets/finance" className="dropdown-link">Finance</Link>
                    <Link href="/markets/energy-utilities" className="dropdown-link">Energy & Utilities</Link>
                    <Link href="/markets/retail" className="dropdown-link">Retail & E-commerce</Link>
                    <Link href="/markets/government" className="dropdown-link">Government & Public Sector</Link>
                    <Link href="/markets/technology" className="dropdown-link">Technology</Link>
                    <Link href="/markets/education" className="dropdown-link">Education</Link>
                    <Link href="/markets/hospitality" className="dropdown-link">Hospitality</Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="dropdown">
              <Link href="/solutions" className="nav-link">Solutions</Link>
              <div className="dropdown-overlay"></div>
              <div className="dropdown-content">
                <div className="dropdown-section">
                  <h3 className="text-[0.75rem] font-semibold text-gray-600 mb-4 uppercase tracking-wider">Use Cases</h3>
                  <div className="flex flex-col space-y-4">
                    <Link href="/solutions/saas-and-web-apps" className="dropdown-link">
                      SaaS & Web Apps
                    </Link>
                    <Link href="/solutions/remote-workforce" className="dropdown-link">
                      Remote Workforce Security
                    </Link>
                    <Link href="/solutions/merger-integration" className="dropdown-link">
                      Merger Integration
                    </Link>
                    <Link href="/solutions/external-workforce" className="dropdown-link">
                      External Workforce Access
                    </Link>
                    <Link href="/solutions/vdi-reduction" className="dropdown-link">
                      VDI Reduction
                    </Link>
                    <Link href="/solutions/zero-trust-security" className="dropdown-link">
                      Zero Trust Security
                    </Link>
                    <Link href="/solutions/privileged-user-management" className="dropdown-link">
                      Privileged User Management
                    </Link>
                    <Link href="/solutions/secure-browsing" className="dropdown-link">
                      Secure Web Browsing
                    </Link>
                    <Link href="/solutions/workplace-enablement" className="dropdown-link">
                      Workplace Enablement
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <Link href="/partners" className="nav-link">Partners</Link>

            <div className="dropdown">
              <Link href="/docs" className="nav-link">Learn</Link>
              <div className="dropdown-overlay"></div>
              <div className="dropdown-content" style={{ width: '280px', gridTemplateColumns: '1fr' }}>
                <div className="dropdown-section">
                  <h3 className="text-[0.75rem] font-semibold text-gray-600 mb-4 uppercase tracking-wider">Resources</h3>
                  <div className="flex flex-col space-y-4">
                    <Link href="/blog" className="dropdown-link">
                      Blog
                    </Link>
                    <Link href="/docs" className="dropdown-link">
                      Docs
                    </Link>
                    <Link href="/faq" className="dropdown-link">
                      FAQ
                    </Link>
                  </div>
                </div>
              </div>
            </div>

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
                  </div>
                </div>
                <div className="dropdown-section">
                  <h3 className="text-[0.75rem] font-semibold text-gray-600 mb-4 uppercase tracking-wider">Get Started</h3>
                  <div className="flex flex-col space-y-4">
                  <Link href="/schedule-demo" className="dropdown-link">
                      Schedule a Demo
                    </Link>
                    <Link href="/contact" className="dropdown-link">
                      Contact Us
                    </Link>
                    <Link href="/support" className="dropdown-link">
                      Support 
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Buttons and Hamburger Menu */}
          <div className="flex items-center gap-4">
            <div className="nav-buttons flex">
              <Link href="/schedule-demo">
                <button className="nav-button download inline-flex items-center rounded-md bg-[#21706c] text-white font-bold shadow-sm hover:bg-[#15514f] px-2 py-1.5 text-xs md:px-4 md:py-2 md:text-sm">
                  <span className="md:hidden">Demo</span>
                  <span className="hidden md:inline">Schedule Demo</span>
                </button>
              </Link>
              <Link href="/contact">
                <button className="nav-button get-in-touch bg-white text-[#21706c] font-bold hover:bg-gray-100">
                  <span className="md:hidden">Contact</span>
                  <span className="hidden md:inline">Contact</span>
                </button>
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
            {/* Contact Buttons at Top */}
            <div className="flex flex-col gap-2 mb-4">
              <Link href="/schedule-demo" className="text-center">
                <button className="w-full py-2 px-4 bg-[#21706c] text-white font-bold rounded-md hover:bg-[#15514f] transition-colors">
                  Schedule Demo
                </button>
              </Link>
              <Link href="/contact" className="text-center">
                <button className="w-full py-2 px-4 bg-white text-[#21706c] font-bold rounded-md hover:bg-gray-100 transition-colors">
                  Contact
                </button>
              </Link>
            </div>
            
            {/* Product Section */}
            <Link href="/products/free-agentic-browser" className="mobile-link">Free Agentic Browser</Link>
            <Link href="/products/enterprise-browser" className="mobile-link">Enterprise Browser</Link>
            <Link href="/products/web-application" className="mobile-link">Web Application</Link>
            
            {/* Learn Section */}
            <Link href="/blog" className="mobile-link">Blog</Link>
            <Link href="/docs" className="mobile-link">Docs</Link>
            
            {/* Partners Section */}
            <Link href="/partners" className="mobile-link">Partner Program</Link>
            
            {/* About Section */}
            <Link href="/about" className="mobile-link">About Kahana</Link>
            <Link href="/support" className="mobile-link">Support</Link>
            <Link href="/careers" className="mobile-link">Careers</Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;

