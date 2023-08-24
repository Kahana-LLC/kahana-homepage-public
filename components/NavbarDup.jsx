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
      <Link href="/">
        <a className="logo">
          <Image
            className="h-10"
            src={whiteKahanaLogo}
            alt="navbar-logo"
          />
        </a>
      </Link>

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

      <style jsx>{`
        .navigation {
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
          border-bottom: 1px solid lightgray; /* Add a light gray border */
          z-index: 1000; /* Ensure the navigation is on top */
        }

        .open .navigation {
          background-color: white;
          color: black;
        }

        .logo {
          cursor: pointer;
          flex: 1;
        }

        .menu {
          display: flex;
          align-items: center;
          margin-left: auto;
        }

        .menu ul {
          list-style: none;
          display: flex;
          margin: 0;
          padding: 0;
        }

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

        .dropdown {
          position: relative;
        }

        .dropdown-content {
          display: none;
          position: absolute;
          background-color: #038270;
          min-width: 160px;
          z-index: 1;
          cursor: default;
        }

        .dropdown:hover .dropdown-content {
          display: block;
        }

        .dropdown-content a {
          color: white;
          padding: 12px 16px;
          text-decoration: none;
          display: block;
        }

        .login {
          background-color: #038270;
        }

        .login:hover {
          background-color: #024324;
        }

        .hamburger {
          display: none;
          flex-direction: column;
          cursor: pointer;
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

        @media (max-width: 768px) {
          .navigation {
            padding: 0.5rem 2rem;
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

          .hamburger.open .bar:nth-child(1) {
            transform: rotate(-45deg) translate(-5px, 6px);
          }

          .hamburger.open .bar:nth-child(2) {
            opacity: 0;
          }

          .hamburger.open .bar:nth-child(3) {
            transform: rotate(45deg) translate(-5px, -6px);
          }
        }
      `}</style>
    </nav>
  );
};

export default Navigation;
