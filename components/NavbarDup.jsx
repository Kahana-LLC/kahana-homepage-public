import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import whiteKahanaLogo from '../assets/kahana_logo_wide_light.svg';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`navigation ${isOpen ? 'open' : ''}`}>
      <div className={`hamburger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      <div className="logo">
        <Link href="/">
          <a>
            <Image
              className="h-10"
              src={whiteKahanaLogo}
              alt="navbar-logo"
              width={200}
              height={40}
            />
          </a>
        </Link>
      </div>

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

      <style jsx>{`
        @media (max-width: 768px) {
          .navigation {
            padding: 0.5rem 2rem;
          }

          .logo {
            text-align: left;
            padding-right: 1rem;
          }

          .menu {
            display: none;
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

          .menu-item {
            padding: 1rem 2rem;
            color: black;
          }

          .hamburger {
            display: flex;
            flex-direction: column;
            cursor: pointer;
            position: absolute;
            top: 0.5rem;
            right: 1rem;
            z-index: 3;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navigation;
