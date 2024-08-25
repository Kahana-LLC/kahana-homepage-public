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
            height: 24px;
            width: auto;
          }

          .nav-button {
            padding: 0.2rem 1rem;
            border-radius: 0.5rem;
            transition: background-color 0.3s ease, color 0.3s ease;
            margin-left: 0.5rem;
          }

          .nav-button.explore {
          padding: 0.2rem 1rem;
            border-radius: 0.5rem;
            background-color: #3B675E;
            color: white;
          }

          .nav-button.explore:hover {
            background-color: #024324;
          }

          .nav-button.app-dashboard {
            padding: 0.2rem 1rem;
            border-radius: 0.5rem;
            background-color: white;
            margin-left: 0.5rem;
            color: #3B675E;
            border: 0.5px solid #3B675E;
          }

          .nav-button.app-dashboard:hover {
            background-color: #f0f0f0;
          }

          .hamburger-button {
            width: 24px;
            height: 24px;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-left: 1rem;
          }
        `}</style>
        <div className="nav-content">
          {/* Logo */}
          <Link href="/" aria-label="Home">
            <span className="sr-only">Company</span>
            <Image
              src={whiteKahanaLogo}
              alt="navbar-logo"
              className="logo"
              height={24}
              width={100}  // Adjust this based on your logo's aspect ratio
            />
          </Link>

          {/* Buttons and Hamburger Menu */}
          <div className="flex items-center">
            {/* Buttons */}
            <Link href="/explore">
              <button className="nav-button explore">Explore</button>
            </Link>
            <Link href="https://app.kahana.co">
              <button className="nav-button app-dashboard">Build a hub</button>
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
        </div>

        {/* Mobile Menu Content */}
        {isMobileMenuOpen && (
          <div className="fixed top-12 left-0 w-full h-screen bg-white py-4 z-40 font-style">
            <div className="flex flex-col items-end pr-4 space-y-6">
              <Link href="/explore" className="mobile-link">Explore</Link>
              <Link href="https://app.kahana.co" className="mobile-link">App Home</Link>
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

export default NavBar;