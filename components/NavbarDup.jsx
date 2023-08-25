import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import whiteKahanaLogo from '../assets/kahana_logo_wide_light.svg';

const MobileNavigation = ({ isOpen, toggleMenu }) => {
  return (
    <div className={`mobile-navigation ${isOpen ? 'open' : ''}`}>
      <div className="hamburger" onClick={toggleMenu}>
        <div className={`bar ${isOpen ? 'open' : ''}`}></div>
        <div className={`bar ${isOpen ? 'open' : ''}`}></div>
        <div className={`bar ${isOpen ? 'open' : ''}`}></div>
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
          <li className="dropdown">
            <span className="menu-item">Solutions</span>
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
          <li className="dropdown">
            <span className="menu-item">Resources</span>
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
    </div>
  );
};

const DesktopNavigation = () => {
  return (
    <nav className="desktop-navigation">
      <Link href="/" aria-label="Home">
        <span className="sr-only">Company</span>
        <Image
          className="h-10"
          src={whiteKahanaLogo}
          alt="navbar-logo"
        />
      </Link>

      <div className="menu">
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
          <li className="dropdown">
            <span className="menu-item">Solutions</span>
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
          <li className="dropdown">
            <span className="menu-item">Resources</span>
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
    </nav>
  );
};

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const screenWidth = window.innerWidth;
    if (screenWidth <= 768) {
      setIsOpen(true);
    }
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <MobileNavigation isOpen={isOpen} toggleMenu={toggleMenu} />
      <DesktopNavigation />

      <style jsx>{`
        /* Your styling code here */
        
        /* Common styles for both mobile and desktop */
        
        .menu-item {
          text-decoration: none;
          color: black;
          padding: 0.5rem 1rem;
          transition: background-color 0.3s ease-in-out;
          cursor: pointer;
        }

        .menu-item:hover {
          background-color: #024324;
        }

        .login {
          background-color: #038270;
        }

        .login:hover {
          background-color: #024324;
        }

        /* Mobile-specific styles */

        .mobile-navigation {
          display: none;
        }

        .mobile-navigation.open {
          display: block;
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: white;
          z-index: 10;
        }

        .hamburger {
          display: flex;
          position: absolute;
          top: 0.5rem;
          right: 1rem;
          background-color: black;
          z-index: 11;
        }

        .hamburger.open .bar:nth-child(1) {
          transform: rotate(-45deg) translate(-5px, 6px);
        }

        .hamburger.open .bar:nth-child(2) {
          opacity: 0;
        }

        .hamburger.open .bar:nth-child(3) {
          transform: rotate(45deg) translate(-5px, -6px);
        }

        /* Desktop-specific styles */

        .desktop-navigation {
          background-color: white;
          color: black;
          display: flex;
          justify-content: flex-end;
          align-items: center;
          padding: 0.5rem 2rem;
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          border-bottom: 1px solid lightgray;
          z-index: 9;
        }

        .desktop-navigation .menu {
          display: flex;
          align-items: center;
          margin-left: auto;
        }

        .desktop-navigation .menu ul {
          list-style: none;
          display: flex;
          margin: 0;
          padding: 0;
        }

        .desktop-navigation .menu-item {
          text-decoration: none;
          color: black;
          padding: 0.5rem 1rem;
          transition: background-color 0.3s ease-in-out;
          cursor: pointer;
        }

        .desktop-navigation .menu-item:hover {
          background-color: #024324;
        }
      `}</style>
    </>
  );
};

export default Navigation;
