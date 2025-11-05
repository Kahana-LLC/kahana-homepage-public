import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import whiteKahanaLogo from '../assets/kahana_logo_transparent.svg';

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
        isScrolled ? 'bg-[#30400D]/95 backdrop-blur-md shadow-md' : 'bg-[#30400D]'
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
            background-color:rgb(82, 85, 84);
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
            height: 56px;
            width: auto;
          }

          @media (max-width: 768px) {
            .logo {
              height: 40px;
              width: auto;
            }
          }

          .nav-links {
            display: flex;
            align-items: center;
            gap: 1.5rem;
            height: 100%;
          }

          a.nav-link,
          .nav-link {
            position: relative;
            color: #ffffff !important;
            font-size: 1rem;
            font-weight: 500 !important;
            text-decoration: none !important;
            transition: color 0.2s ease;
            padding: 0.75rem 1rem;
            white-space: nowrap;
            z-index: 2;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
            letter-spacing: -0.01em;
          }

          a.nav-link:hover,
          .nav-link:hover {
            color: #E0D48C !important;
            text-decoration: none !important;
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
            border-radius: 27.5px !important;
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
            background-color: #788B59 !important;
            color: white !important;
            border: none !important;
          }

          .nav-button.download:hover {
            background-color: #728552 !important;
            color: white !important;
          }

          .nav-button.get-in-touch {
            background-color: #788B59 !important;
            color: white !important;
            position: relative;
            z-index: 1;
            border: none !important;
            transition: all 0.3s ease;
          }

          .nav-button.get-in-touch:hover {
            background-color: #728552 !important;
            transform: translateY(-1px);
            box-shadow: 0 4px 12px rgba(120, 139, 89, 0.25);
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

          .menu-links button {
            color: #ffffff !important;
          }

          .menu-links a {
            text-decoration: none !important;
            color: inherit !important;
          }

          .menu-links button span {
            color: #ffffff !important;
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
            <div className="relative h-[56px] w-[240px]">
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
              <Link href="/products" className="nav-link text-white">Products</Link>
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
              <Link href="/markets" className="nav-link text-white">Markets</Link>
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
              <Link href="/solutions" className="nav-link text-white">Solutions</Link>
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

            <div className="dropdown">
              <Link href="/docs" className="nav-link text-white">Learn</Link>
              <div className="dropdown-overlay"></div>
              <div className="dropdown-content" style={{ width: '480px', gridTemplateColumns: '1fr 1fr' }}>
                <div className="dropdown-section">
                  <h3 className="text-[0.75rem] font-semibold text-gray-600 mb-4 uppercase tracking-wider">Learn</h3>
                  <div className="flex flex-col space-y-4">
                    <Link href="/blog" className="dropdown-link">
                      Blog
                    </Link>
                    <Link href="/docs" className="dropdown-link">
                      Docs
                    </Link>
                    <Link href="/white-paper-future-of-ergonomic-work" className="dropdown-link">
                      White Paper
                    </Link>
                    <Link href="/subscribe-to-insights" className="dropdown-link">
                      Newsletter
                    </Link>
                    <Link href="/community" className="dropdown-link">
                      Join Discord
                    </Link>
                  </div>
                </div>
                <div className="dropdown-section">
                  <Link href="/buyers-guide" className="block p-4 bg-gradient-to-r from-[#66C2BE]/5 to-[#8CB7D0]/5 rounded-lg border border-[#66C2BE]/20 hover:from-[#66C2BE]/10 hover:to-[#8CB7D0]/10 hover:border-[#66C2BE]/30 transition-all duration-200">
                    <div className="w-full h-32 rounded-lg overflow-hidden mb-3">
                      <img 
                        src="/assets/pexels-kamo11235-667838.jpg" 
                        alt="Enterprise Browser Buyer Guide"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="font-semibold text-gray-900 text-sm leading-tight">Enterprise Browser Buyers Guide</div>
                  </Link>
                </div>
              </div>
            </div>

            <div className="dropdown">
              <Link href="/about" className="nav-link text-white">About</Link>
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
            <div className="nav-buttons flex gap-2">
              <Link href="/schedule-demo">
                <button className="nav-button download inline-flex items-center justify-center rounded-[27.5px] bg-gradient-to-r from-[#4F571F] to-[#8A8D3E] text-white font-bold px-4 py-2.5 text-xs md:px-6 md:py-3 md:text-sm hover:from-[#8A8D3E] hover:to-[#4F571F] transition-all shadow-sm">
                  <span className="md:hidden">Demo</span>
                  <span className="hidden md:inline">Schedule Demo</span>
                </button>
              </Link>
              <Link href="/contact">
                <button className="nav-button get-in-touch inline-flex items-center justify-center rounded-[27.5px] bg-gradient-to-r from-[#4F571F] to-[#8A8D3E] text-white font-bold px-4 py-2.5 text-xs md:px-6 md:py-3 md:text-sm hover:from-[#8A8D3E] hover:to-[#4F571F] transition-all shadow-sm">
                  <span className="md:hidden">Contact</span>
                  <span className="hidden md:inline">Contact</span>
                </button>
              </Link>
            </div>

            {/* Hamburger Menu */}
            <button
              onClick={toggleMobileMenu}
              className="lg:hidden inline-flex items-center justify-center rounded-[27.5px] bg-gradient-to-r from-[#4F571F] to-[#8A8D3E] text-white font-bold px-3 py-2 hover:from-[#8A8D3E] hover:to-[#4F571F] transition-all shadow-sm"
              aria-label="Mobile Menu"
            >
              {isMobileMenuOpen ? (
                <svg
                  className="w-5 h-5"
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
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
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
                <button className="w-full py-2.5 px-6 bg-gradient-to-r from-[#4F571F] to-[#8A8D3E] text-white font-bold rounded-[27.5px] hover:from-[#8A8D3E] hover:to-[#4F571F] transition-all shadow-sm">
                  Schedule Demo
                </button>
              </Link>
              <Link href="/contact" className="text-center">
                <button className="w-full py-2.5 px-6 bg-gradient-to-r from-[#4F571F] to-[#8A8D3E] text-white font-bold rounded-[27.5px] hover:from-[#8A8D3E] hover:to-[#4F571F] transition-all shadow-sm">
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
            <Link href="/white-paper-future-of-ergonomic-work" className="mobile-link">White Paper</Link>
            <Link href="/subscribe-to-insights" className="mobile-link">Newsletter</Link>
            <Link href="/community" className="mobile-link">Join Discord</Link>
            <Link href="/buyers-guide" className="mobile-link flex items-center space-x-3 p-3 bg-gradient-to-r from-[#66C2BE]/5 to-[#8CB7D0]/5 rounded-lg border border-[#66C2BE]/20 hover:from-[#66C2BE]/10 hover:to-[#8CB7D0]/10 hover:border-[#66C2BE]/30 transition-all duration-200">
              <div className="flex-shrink-0 w-12 h-12 rounded-lg overflow-hidden">
                <img 
                  src="/assets/pexels-kamo11235-667838.jpg" 
                  alt="Enterprise Browser Buyer Guide"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1">
                <div className="font-medium text-gray-900">Enterprise Browser Buyer Guide</div>
                <div className="text-xs text-[#4A5745] mt-1">Comprehensive guide for enterprise decision makers</div>
              </div>
            </Link>
            
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

