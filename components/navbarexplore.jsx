import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import whiteKahanaLogo from '../assets/kahana_icon.svg';

function NavBarExplore() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div>
      <nav className="fixed top-0 left-0 w-full h-12 bg-white bg-opacity-90 shadow-md z-50">
        <style jsx>{`
          .font-style {
            font-family: 'YourFontFamily', sans-serif;
          }

          .mobile-link {
            color: black;
            transition: background-color 0.3s ease;
            padding: 0.75rem;
            border-radius: 0.5rem;
            width: 100%;
            text-align: right;
            background-color: #f7f7f7;
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
            padding: 0 10px;
          }

          .logo {
            width: 24px;
            height: 24px;
          }

          .hamburger-button {
            width: 24px;
            height: 24px;
            display: flex;
            align-items: center;
            justify-content: center;
          }
        `}</style>
        <div className="nav-content">
          {/* Logo */}
          <Link href="/" aria-label="Kahana">
            <span className="sr-only">Home</span>
            <Image
              src={whiteKahanaLogo}
              alt="Kahana Logo"
              width={24}
              height={24}
              className="logo"
            />
          </Link>

          {/* Hamburger Menu */}
          <button
            onClick={toggleMobileMenu}
            className="hamburger-button"
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

        {/* Mobile Menu Content */}
        {isMobileMenuOpen && (
          <div className="fixed top-12 left-0 w-full h-screen bg-white py-4 z-40 font-style">
            <div className="flex flex-col items-end pr-4 space-y-6">
              <Link href="https://app.kahana.co" className="mobile-link">Dashboard</Link>
              <Link href="https://app.kahana.co/billing" className="mobile-link">Billing</Link>
              <Link href="https://blog.kahana.co" className="mobile-link">Blog</Link>
              <Link href="/pricing" className="mobile-link">Pricing</Link>
              <Link href="/terms-and-conditions" className="mobile-link">Terms & Conditions</Link>
              <Link href="/privacy-policy" className="mobile-link">Privacy Policy</Link>
              <Link href="/sales" className="mobile-link">Contact</Link>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}

export default NavBarExplore;