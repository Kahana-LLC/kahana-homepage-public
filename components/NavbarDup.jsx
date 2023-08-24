import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import whiteKahanaLogo from '../assets/kahana_logo_wide_light.svg';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showSolutionsDropdown, setShowSolutionsDropdown] = useState(false);
  const [showResourcesDropdown, setShowResourcesDropdown] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleSolutionsDropdown = () => {
    setShowSolutionsDropdown(!showSolutionsDropdown);
    setShowResourcesDropdown(false);
  };

  const toggleResourcesDropdown = () => {
    setShowResourcesDropdown(!showResourcesDropdown);
    setShowSolutionsDropdown(false);
  };

  return (
    <nav className={`navigation ${isOpen ? 'open' : ''}`}>
      <div className="mobile-header">
        <Link href="/" aria-label="Home">
          <Image className="h-10" src={whiteKahanaLogo} alt="navbar-logo" />
        </Link>

        <div className={`hamburger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <div className={`bar ${isOpen ? 'open' : ''}`}></div>
          <div className={`bar ${isOpen ? 'open' : ''}`}></div>
          <div className={`bar ${isOpen ? 'open' : ''}`}></div>
        </div>
      </div>

      <div className={`menu ${isOpen ? 'open' : ''}`}>
        <ul>
          <li>
            <Link href="/about">
              <a className="menu-item">About</a>
            </Link>
          </li>
          <li>
            <Link href="/explore">
              <a className="menu-item">Examples</a>
            </Link>
          </li>
          <li className={`dropdown ${showSolutionsDropdown ? 'open' : ''}`}>
            <span className="menu-item" onClick={toggleSolutionsDropdown}>
              Solutions
            </span>
            <div className="dropdown-content">
              <Link href="/enterprise">
                <a>For Enterprise</a>
              </Link>
              <Link href="/coaches">
                <a>For Coaches</a>
              </Link>
              <Link href="/consultants">
                <a>For Consultants</a>
              </Link>
              <Link href="/experts">
                <a>For Experts</a>
              </Link>
              <Link href="/affiliates">
                <a>Become an affiliate</a>
              </Link>
            </div>
          </li>
          <li className={`dropdown ${showResourcesDropdown ? 'open' : ''}`}>
            <span className="menu-item" onClick={toggleResourcesDropdown}>
              Resources
            </span>
            <div className="dropdown-content">
              <a href="https://blog.kahana.co/">Blog</a>
              <Link href="/resources">
                <a>Monetizing Notion</a>
              </Link>
              <Link href="/resources">
                <a>Monetizing Google Drive</a>
              </Link>
              <Link href="/resources">
                <a>Selling Digital Products</a>
              </Link>
              <a href="https://kahana.tawk.help/">Help Center</a>
              <Link href="/faq">
                <a>FAQ</a>
              </Link>
              <a href="https://nas.io/creators-and-experts">Community</a>
            </div>
          </li>
          <li>
            <Link href="/pricing">
              <a className="menu-item">Pricing</a>
            </Link>
          </li>
          <li>
            <a href="https://app.kahana.co/login" className="menu-item login">
              Log in
            </a>
          </li>
        </ul>
      </div>

      <style jsx>{`
        /* Existing styles for desktop version here */

        /* Additional styles for mobile version */
        .mobile-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0.5rem 2rem;
          background-color: white;
          border-bottom: 1px solid lightgray;
        }

        .menu {
          margin-top: 70px; /* Add space below the navigation bar */
        }

        /* Media query for mobile styles */
        @media (max-width: 768px) {
          /* Hide desktop navigation */
          .navigation {
            display: none;
          }

          /* Show mobile navigation */
          .mobile-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0.5rem 2rem;
            background-color: white;
            border-bottom: 1px solid lightgray;
          }

          .menu {
            display: flex;
            flex-direction: column;
            position: absolute;
            top: 60px;
            right: 0;
            width: 100%;
            background-color: white;
          }

          .open .menu {
            display: flex;
          }

          .menu ul {
            flex-direction: column;
          }

          .menu-item {
            padding: 1rem 2rem;
            color: black;
          }

          .hamburger {
            display: flex;
            position: absolute;
            top: 0.5rem;
            right: 1rem;
            background-color: black;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navigation;
