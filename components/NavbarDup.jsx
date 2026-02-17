import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import whiteKahanaLogo from '../assets/kahana_logo_transparent.svg';
import { getCloudinaryImageUrl } from '../utils/cloudinary-mapper';

function NavBar() {
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

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

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      const target = event.target;
      if (target && !target.closest('.dropdown')) {
        setOpenDropdown(null);
      }
    };

    if (openDropdown) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [openDropdown]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleDropdown = (dropdownId, event) => {
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }
    setOpenDropdown(openDropdown === dropdownId ? null : dropdownId);
  };

  return (
    <div className="relative">
      {/* Spacer div that matches navbar height */}
      <div className="h-16 w-full"></div>
      
      {/* Fixed navbar */}
      <nav className={`fixed top-0 left-0 w-full h-16 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#FFFFFF]/95 backdrop-blur-md shadow-md' : 'bg-[#FFFFFF]'
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
            width: 100%;
            max-width: 1280px;
            margin: 0 auto;
            padding-left: var(--container-padding-mobile);
            padding-right: var(--container-padding-mobile);
          }

          @media (min-width: 640px) {
            .nav-content {
              padding-left: var(--container-padding-tablet);
              padding-right: var(--container-padding-tablet);
            }
          }

          @media (min-width: 1024px) {
            .nav-content {
              padding-left: var(--container-padding-desktop);
              padding-right: var(--container-padding-desktop);
            }
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

          .nav-content > a:first-child {
            margin-left: 1.45rem !important;
            padding-left: 0 !important;
            margin-right: 0;
            padding-right: 0;
            display: flex;
            align-items: center;
            line-height: 0;
            flex-shrink: 0;
          }

          @media (min-width: 640px) {
            .nav-content > a:first-child {
              margin-left: 1.45rem !important;
            }
          }

          @media (min-width: 1024px) {
            .nav-content > a:first-child {
              margin-left: 1.75rem !important;
            }
          }

          .nav-content > a:first-child > span,
          .nav-content > a:first-child > div {
            margin-left: 0 !important;
            padding-left: 0 !important;
            margin-right: 0;
            padding-right: 0;
            line-height: 0;
            display: flex;
            align-items: center;
            overflow: hidden;
            position: relative;
            width: 200px !important;
          }

          @media (max-width: 768px) {
            .nav-content > a:first-child > span,
            .nav-content > a:first-child > div {
              width: 160px !important;
            }
          }

          .nav-content > a:first-child > span::before,
          .nav-content > a:first-child > div::before {
            content: '';
            position: absolute;
            left: 0;
            top: 0;
            bottom: 0;
            width: 0;
            z-index: -1;
          }

          .nav-content > a:first-child img,
          .nav-content > a:first-child > span img,
          .nav-content > a:first-child > div > img,
          .nav-content > a:first-child > div > span > img {
            margin: 0 !important;
            padding: 0 !important;
            display: block;
            object-fit: contain;
            object-position: left center;
          }

          .nav-links {
            display: flex;
            align-items: center;
            gap: 1.5rem;
            height: 100%;
            list-style: none;
            margin: 0;
            padding: 0;
          }

          a.nav-link,
          .nav-link {
            position: relative;
            display: inline-flex;
            align-items: center;
            gap:2rem;
            color: #617500 !important;
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


          .nav-link-icon {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            position: relative;
            top: 0.06rem;
          }

          .nav-link-icon svg {
            width: 2rem;
            height: 1rem;
            display: block;
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
            width: 280px;
            box-shadow: 0 2px 15px rgba(0, 0, 0, 0.06);
            border-radius: 12px;
            padding: 24px 20px;
            transition: all 0.15s ease;
            display: grid;
            gap: 40px;
            pointer-events: none;
          }

          .dropdown:hover .dropdown-content,
          .dropdown.active .dropdown-content {
            visibility: visible;
            opacity: 1;
            transform: translateX(-50%) translateY(0);
            pointer-events: auto;
          }

          .dropdown:hover .dropdown-overlay,
          .dropdown.active .dropdown-overlay {
            display: block;
          }

          .dropdown-icon-button {
            background: none !important;
            border: none !important;
            padding: 0 !important;
            margin: 0 0 0 0.5rem !important;
            cursor: pointer;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            color: #617500 !important;
            transition: transform 0.2s ease, color 0.2s ease;
            outline: none;
            pointer-events: auto;
          }

          .nav-link:hover .dropdown-icon-button,
          .dropdown-icon-button:hover {
            color: #4A5F00 !important;
            transform: scale(1.1);
          }

          .dropdown-icon-button:focus {
            outline: none;
          }

          .dropdown.active .dropdown-icon-button svg {
            transform: rotate(180deg);
          }

          .dropdown-icon-button svg {
            transition: transform 0.2s ease;
            width: 12px;
            height: 12px;
            pointer-events: none;
            color: inherit;
          }

          .dropdown-section {
            padding: 0;
          }

          .dropdown-section h3 {
            font-size: 0.6875rem;
            font-weight: 700;
            
            color: #026400;
            margin-bottom: 16px;
            text-transform: uppercase;
            letter-spacing: 0.05em;
          }

          .dropdown-link {
            display: block;
            color: #617500 !important;
            text-decoration: none !important;
            font-weight: 600 !important;
            font-size: 0.9375rem;
            line-height: 1.5;
            letter-spacing: 0.01em;
            padding: 8px 12px;
            margin: 0 -12px;
            border-radius: 8px;
            font-family: "Roboto", sans-serif;
            -webkit-tap-highlight-color: transparent;
            tap-highlight-color: transparent;
            background-color: rgba(248, 250, 252, 0.4);
            transition: none;
            outline: none;
          }

          .dropdown-link:hover,
          .dropdown-link:active,
          .dropdown-link:visited,
          .dropdown-link:focus {
            color: #617500 !important;
            background-color: rgba(248, 250, 252, 0.9);
            text-decoration: none !important;
            font-weight: 600 !important;
            outline: none;
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
            display: none;
            align-items: center;
            gap: 0.75rem;
          }

          @media (min-width: 1024px) {
            .nav-buttons {
              display: flex;
            }
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

          .menu-links a:not(.btn-primary):not(.btn-secondary) {
            text-decoration: none !important;
            color: inherit !important;
          }

          /* Ensure btn-primary buttons in mobile menu have correct styling - HIGH SPECIFICITY */
          .mobile-menu .menu-links a.btn-primary {
            background-color: #4A6200 !important;
            border: 1px solid #7F9E36 !important;
            color: #FFFFFF !important;
            border-radius: 27.5px !important;
            font-weight: bold !important;
            transition: all 0.3s ease !important;
            text-decoration: none !important;
          }

          .mobile-menu .menu-links a.btn-primary,
          .mobile-menu .menu-links a.btn-primary *,
          .mobile-menu .menu-links a.btn-primary span,
          .mobile-menu .menu-links a.btn-primary::before,
          .mobile-menu .menu-links a.btn-primary::after {
            color: #FFFFFF !important;
          }

          .mobile-menu .menu-links a.btn-primary:hover {
            background-color: #3E5300 !important;
            border-color: #6A8E2A !important;
            color: #FFFFFF !important;
          }

          .mobile-menu .menu-links a.btn-primary:hover,
          .mobile-menu .menu-links a.btn-primary:hover *,
          .mobile-menu .menu-links a.btn-primary:hover span {
            color: #FFFFFF !important;
          }

          .menu-links button span {
            color: #ffffff !important;
          }

          .mobile-link {
            color: #617500 !important;
            transition: all 0.3s ease;
            padding: 1rem 1.25rem;
            border-radius: 0.75rem;
            width: 100%;
            text-align: left;
            background-color: #f8f9fa;
            font-size: 1.125rem;
            font-weight: 600 !important;
            display: flex;
            align-items: center;
            border: 1px solid #edf0f2;
            text-decoration: none !important;
          }

          .mobile-link:hover {
            background-color: #D0EDE6;
            color: #617500 !important;
            transform: translateX(4px);
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
            text-decoration: none !important;
            font-weight: 600 !important;
          }

          .mobile-link:active {
            transform: translateX(2px);
            background-color: #bfe5dd;
            text-decoration: none !important;
            color: #617500 !important;
            font-weight: 600 !important;
          }

          .mobile-link:visited {
            text-decoration: none !important;
            color: #617500 !important;
            font-weight: 600 !important;
          }

          .mobile-link:focus {
            color: #617500 !important;
            font-weight: 600 !important;
            text-decoration: none !important;
          }

          /* Ensure mobile links with navbar color don't have underlines */
          .mobile-link[style*="color: #617500"],
          .mobile-link[style*="color:#617500"] {
            text-decoration: none !important;
          }

          .mobile-link[style*="color: #617500"]:hover,
          .mobile-link[style*="color:#617500"]:hover,
          .mobile-link[style*="color: #617500"]:active,
          .mobile-link[style*="color:#617500"]:active,
          .mobile-link[style*="color: #617500"]:visited,
          .mobile-link[style*="color:#617500"]:visited {
            text-decoration: none !important;
            color: #617500 !important;
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
          <Link href="/" className="flex items-center" passHref legacyBehavior>
            <a className="flex items-center" style={{ lineHeight: 0 }}>
              <span className="relative block h-[56px] w-[200px] flex-shrink-0" style={{ marginLeft: 0, paddingLeft: 0, overflow: 'hidden' }}>
                <Image
                  src={whiteKahanaLogo}
                  alt="Kahana Logo"
                  fill
                  style={{ objectFit: 'contain', objectPosition: 'left center', margin: 0, padding: 0, width: '100%', height: '100%' }}
                  priority
                />
              </span>
            </a>
          </Link>

          {/* Navigation Links */}
          <ul className="nav-links hidden md:flex items-center gap-1" role="list">
            <li className={`dropdown ${openDropdown === 'products' ? 'active' : ''}`}>
              <Link href="/products" className="nav-link">
                <span className="nav-link-text">Products</span>
                <button
                  type="button"
                  className="dropdown-icon-button"
                  onClick={(e) => toggleDropdown('products', e)}
                  aria-label="Toggle Products dropdown"
                  aria-expanded={openDropdown === 'products'}
                >
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.09 16.1361C11.9917 16.1373 11.8942 16.1179 11.8038 16.0792C11.7134 16.0404 11.6321 15.9832 11.5652 15.9112L4.81674 9.16274C4.51681 8.86281 4.51681 8.39792 4.81674 8.09799C5.11667 7.79806 5.58156 7.79806 5.88149 8.09799L12.105 14.3215L18.3136 8.11299C18.6135 7.81306 19.0784 7.81306 19.3783 8.11299C19.6783 8.41292 19.6783 8.87781 19.3783 9.17774L12.6299 15.9262C12.4799 16.0761 12.285 16.1511 12.105 16.1511L12.09 16.1361Z" fill="currentColor" stroke="currentColor" strokeWidth="2" />
                  </svg>
                </button>
              </Link>
              <div className="dropdown-overlay"></div>
              <div className="dropdown-content" style={{ gridTemplateColumns: '1fr' }}>
                <div className="dropdown-section">
                  <h3 className="font-semibold text-gray-600 mb-4 uppercase tracking-wider">Our Products</h3>
                  <div className="flex flex-col space-y-4">
                    <Link href="/products/free-agentic-browser" className="dropdown-link" onClick={() => setOpenDropdown(null)}>
                      Oasis Agentic Browser
                    </Link>
                    <Link href="/products/enterprise-browser" className="dropdown-link" onClick={() => setOpenDropdown(null)}>
                      Oasis Enterprise Browser
                    </Link>
                    <Link href="/products/web-application" className="dropdown-link" onClick={() => setOpenDropdown(null)}>
                      Web Application
                    </Link>
                  </div>
                </div>
              </div>
            </li>

            <li className={`dropdown ${openDropdown === 'pricing' ? 'active' : ''}`}>
              <Link href="/oasis-pricing" className="nav-link">
                <span className="nav-link-text">Pricing</span>
                <button
                  type="button"
                  className="dropdown-icon-button"
                  onClick={(e) => toggleDropdown('pricing', e)}
                  aria-label="Toggle Pricing dropdown"
                  aria-expanded={openDropdown === 'pricing'}
                >
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.09 16.1361C11.9917 16.1373 11.8942 16.1179 11.8038 16.0792C11.7134 16.0404 11.6321 15.9832 11.5652 15.9112L4.81674 9.16274C4.51681 8.86281 4.51681 8.39792 4.81674 8.09799C5.11667 7.79806 5.58156 7.79806 5.88149 8.09799L12.105 14.3215L18.3136 8.11299C18.6135 7.81306 19.0784 7.81306 19.3783 8.11299C19.6783 8.41292 19.6783 8.87781 19.3783 9.17774L12.6299 15.9262C12.4799 16.0761 12.285 16.1511 12.105 16.1511L12.09 16.1361Z" fill="currentColor" stroke="currentColor" strokeWidth="2" />
                  </svg>
                </button>
              </Link>
              <div className="dropdown-overlay"></div>
              <div className="dropdown-content" style={{ gridTemplateColumns: '1fr' }}>
                <div className="dropdown-section">
                  <h3 className="font-semibold mb-4 uppercase tracking-wider" style={{ color: '#000' }}>Product Pricing</h3>
                  <div className="flex flex-col space-y-4">
                    <Link href="/oasis-pricing" className="dropdown-link" onClick={() => setOpenDropdown(null)}>
                      Oasis Pricing
                    </Link>
                    <Link href="/pricing" className="dropdown-link" onClick={() => setOpenDropdown(null)}>
                      Hubs Pricing
                    </Link>
                  </div>
                </div>
              </div>
            </li>

            <li className={`dropdown ${openDropdown === 'learn' ? 'active' : ''}`}>
              <Link href="/docs" className="nav-link">
                <span className="nav-link-text">Learn</span>
                <button
                  type="button"
                  className="dropdown-icon-button"
                  onClick={(e) => toggleDropdown('learn', e)}
                  aria-label="Toggle Learn dropdown"
                  aria-expanded={openDropdown === 'learn'}
                >
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.09 16.1361C11.9917 16.1373 11.8942 16.1179 11.8038 16.0792C11.7134 16.0404 11.6321 15.9832 11.5652 15.9112L4.81674 9.16274C4.51681 8.86281 4.51681 8.39792 4.81674 8.09799C5.11667 7.79806 5.58156 7.79806 5.88149 8.09799L12.105 14.3215L18.3136 8.11299C18.6135 7.81306 19.0784 7.81306 19.3783 8.11299C19.6783 8.41292 19.6783 8.87781 19.3783 9.17774L12.6299 15.9262C12.4799 16.0761 12.285 16.1511 12.105 16.1511L12.09 16.1361Z" fill="currentColor" stroke="currentColor" strokeWidth="2" />
                  </svg>
                </button>
              </Link>
              <div className="dropdown-overlay"></div>
              <div className="dropdown-content" style={{ width: '480px', gridTemplateColumns: '1fr 1fr' }}>
                <div className="dropdown-section">
                  <h3 className="font-semibold text-gray-600 mb-4 uppercase tracking-wider">Learn</h3>
                  <div className="flex flex-col space-y-4">
                    <Link href="/blog" className="dropdown-link" onClick={() => setOpenDropdown(null)}>
                      Blog
                    </Link>
                    <Link href="/docs" className="dropdown-link" onClick={() => setOpenDropdown(null)}>
                      Docs
                    </Link>
                    <Link href="/white-paper-future-of-ergonomic-work" className="dropdown-link" onClick={() => setOpenDropdown(null)}>
                      White Paper
                    </Link>
                    <Link href="/subscribe-to-insights" className="dropdown-link" onClick={() => setOpenDropdown(null)}>
                      Newsletter
                    </Link>
                    <Link href="/community" className="dropdown-link" onClick={() => setOpenDropdown(null)}>
                      Join Discord
                    </Link>
                  </div>
                </div>
                <div className="dropdown-section">
                  <Link href="/enterprise-buyer-guide" className="block p-4 bg-gradient-to-r from-[#66C2BE]/5 to-[#8CB7D0]/5 rounded-lg border border-[#66C2BE]/20 hover:from-[#66C2BE]/10 hover:to-[#8CB7D0]/10 hover:border-[#66C2BE]/30 transition-all duration-200 no-underline" onClick={() => setOpenDropdown(null)}>
                    <div className="w-full h-32 rounded-lg overflow-hidden mb-3">
                      <img 
                        src={getCloudinaryImageUrl("/assets/pexels-kamo11235-667838.jpg", { width: 280, height: 160, quality: 'auto:good' })} 
                        alt="Enterprise Browser Buyer Guide"
                        className="w-full h-full object-cover"
                        width={280}
                        height={160}
                        loading="lazy"
                        decoding="async"
                        fetchPriority="low"
                      />
                    </div>
                    <div className="font-semibold text-gray-900 text-sm leading-tight no-underline">Enterprise Browser Buyer Guide</div>
                  </Link>
                </div>
              </div>
            </li>

            <li className={`dropdown ${openDropdown === 'about' ? 'active' : ''}`}>
              <Link href="/about" className="nav-link">
                <span className="nav-link-text">About</span>
                <button
                  type="button"
                  className="dropdown-icon-button"
                  onClick={(e) => toggleDropdown('about', e)}
                  aria-label="Toggle About dropdown"
                  aria-expanded={openDropdown === 'about'}
                >
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.09 16.1361C11.9917 16.1373 11.8942 16.1179 11.8038 16.0792C11.7134 16.0404 11.6321 15.9832 11.5652 15.9112L4.81674 9.16274C4.51681 8.86281 4.51681 8.39792 4.81674 8.09799C5.11667 7.79806 5.58156 7.79806 5.88149 8.09799L12.105 14.3215L18.3136 8.11299C18.6135 7.81306 19.0784 7.81306 19.3783 8.11299C19.6783 8.41292 19.6783 8.87781 19.3783 9.17774L12.6299 15.9262C12.4799 16.0761 12.285 16.1511 12.105 16.1511L12.09 16.1361Z" fill="currentColor" stroke="currentColor" strokeWidth="2" />
                  </svg>
                </button>
              </Link>
              <div className="dropdown-overlay"></div>
              <div className="dropdown-content">
                <div className="dropdown-section">
                  <h3 className="font-semibold text-gray-600 mb-4 uppercase tracking-wider">About Kahana</h3>
                  <div className="flex flex-col space-y-4">
                    <Link href="/about" className="dropdown-link" onClick={() => setOpenDropdown(null)}>
                      About
                    </Link>
                  </div>
                </div>
                <div className="dropdown-section">
                  <h3 className="font-semibold text-gray-600 mb-4 uppercase tracking-wider">Get Started</h3>
                  <div className="flex flex-col space-y-4">
                    <Link href="/contact" className="dropdown-link" onClick={() => setOpenDropdown(null)}>
                      Contact Us
                    </Link>
                    <Link href="/support" className="dropdown-link" onClick={() => setOpenDropdown(null)}>
                      Support
                    </Link>
                  </div>
                </div>
              </div>
            </li>
          </ul>

          {/* Buttons and Hamburger Menu */}
          <div className="flex items-center gap-4">
            <div className="nav-buttons hidden lg:flex gap-2">
              <Link href="/schedule-demo" className="btn-primary inline-flex items-center justify-center px-4 py-2.5 text-xs md:px-6 md:py-3 md:text-sm no-underline hover:no-underline focus:no-underline">
                  <span className="md:hidden">Schedule Demo</span>
                  <span className="hidden md:inline">Schedule Demo</span>
              </Link>
              <Link href="/oasis-pricing" className="btn-secondary inline-flex items-center justify-center px-4 py-2.5 text-xs md:px-6 md:py-3 md:text-sm no-underline hover:no-underline focus:no-underline">
                  <span className="md:hidden">Get Access</span>
                  <span className="hidden md:inline">Get Access</span>
              </Link>
            </div>

            {/* Hamburger Menu */}
            <button
              onClick={toggleMobileMenu}
              className="btn-secondary lg:hidden inline-flex items-center justify-center px-3 py-2"
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
              <Link href="/schedule-demo" className="btn-primary w-full text-center py-2.5 px-6 no-underline hover:no-underline focus:no-underline" style={{ color: '#FFFFFF' }}>
                  <span style={{ color: '#FFFFFF' }}>Schedule Demo</span>
              </Link>
              <Link href="/oasis-pricing" className="btn-secondary w-full text-center py-2.5 px-6 no-underline hover:no-underline focus:no-underline">
                  Get Access
              </Link>
            </div>
            
            {/* Product Section */}
            <Link href="/products/free-agentic-browser" className="mobile-link no-underline">Free Agentic Browser</Link>
            <Link href="/products/enterprise-browser" className="mobile-link no-underline">Enterprise Browser</Link>
            <Link href="/products/web-application" className="mobile-link no-underline">Web Application</Link>
            
            {/* Pricing */}
            <Link href="/oasis-pricing" className="mobile-link no-underline">Oasis Pricing</Link>
            <Link href="/pricing" className="mobile-link no-underline">Hubs Pricing</Link>
            
            {/* Learn Section */}
            <Link href="/blog" className="mobile-link no-underline">Blog</Link>
            <Link href="/docs" className="mobile-link no-underline">Docs</Link>
            <Link href="/white-paper-future-of-ergonomic-work" className="mobile-link no-underline">White Paper</Link>
            <Link href="/subscribe-to-insights" className="mobile-link no-underline">Newsletter</Link>
            <Link href="/community" className="mobile-link no-underline">Join Discord</Link>
            <Link href="/enterprise-buyer-guide" className="mobile-link flex items-center space-x-3 p-3 bg-gradient-to-r from-[#66C2BE]/5 to-[#8CB7D0]/5 rounded-lg border border-[#66C2BE]/20 hover:from-[#66C2BE]/10 hover:to-[#8CB7D0]/10 hover:border-[#66C2BE]/30 transition-all duration-200 no-underline">
              <div className="flex-shrink-0 w-12 h-12 rounded-lg overflow-hidden">
                <img 
                  src={getCloudinaryImageUrl("/assets/pexels-kamo11235-667838.jpg", { width: 48, height: 48, quality: 'auto:good' })} 
                  alt="Enterprise Browser Buyer Guide"
                  className="w-full h-full object-cover"
                  width={48}
                  height={48}
                  loading="lazy"
                  decoding="async"
                  fetchPriority="low"
                />
              </div>
              <div className="flex-1">
                <div className="font-medium text-gray-900 no-underline">Enterprise Browser Buyer Guide</div>
                <div className="text-xs text-[#4A5745] mt-1">Comprehensive guide for enterprise decision makers</div>
              </div>
            </Link>
            
            {/* About Section */}
            <Link href="/about" className="mobile-link no-underline">About Kahana</Link>
            <Link href="/support" className="mobile-link no-underline">Support</Link>
            <Link href="/careers" className="mobile-link no-underline">Careers</Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;

