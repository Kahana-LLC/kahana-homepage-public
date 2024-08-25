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
      <nav className="bg-white bg-opacity-90">
        <style jsx>{`
          .font-style {
            font-family: 'YourFontFamily', sans-serif; /* Replace with the actual font family */
          }

          .mobile-link {
            color: black;
            transition: background-color 0.3s ease;
            padding: 0.75rem;
            border-radius: 0.5rem;
            width: 100%;
            text-align: right; /* Right-align the text */
            background-color: #f7f7f7; /* Alternate background color */
          }

          .mobile-link:nth-child(even) {
            background-color: #e1e1e1; /* Another shade for alternate rows */
          }

          .mobile-link:hover {
            background-color: #D0EDE6;
          }

          .nav-button {
            padding: 0.3rem 1rem;
            border-radius: 0.5rem;
            transition: background-color 0.3s ease, color 0.3s ease;
            margin-left: 0.5rem; /* Standard spacing between buttons */
          }

          .nav-button.explore {
            background-color: #3B675E; /* Green button color */
            color: white;
          }

          .nav-button.explore:hover {
            background-color: #024324; /* Darker green on hover */
          }

          .nav-button.app-dashboard {
            background-color: white; /* White button color */
            color: #3B675E; /* Green text color */
            border: 1px solid #3B675E; /* Border to match the text color */
          }

          .nav-button.app-dashboard:hover {
            background-color: #f0f0f0; /* Light gray on hover */
          }

          .hamburger-button {
            margin-left: 0.5rem; /* Standard spacing between the buttons and the hamburger menu */
          }
        `}</style>
        <div className="container mx-auto px-4">
          <div className="flex items-center py-2">
            {/* Logo */}
            <div className="flex items-center flex-grow-0">
              <Link href="https://app.kahana.co" aria-label="Home">
                <span className="sr-only">Home</span>
                <Image
                  className="h-7"
                  src={whiteKahanaLogo}
                  alt="Kahana Logo"
                />
              </Link>
            </div>

            {/* Buttons and Hamburger Menu */}
            <div className="flex items-center ml-auto">
              <button
                onClick={toggleMobileMenu}
                className="hamburger-button ml-4"
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
        </div>

        {/* Mobile Menu Content */}
        {isMobileMenuOpen && (
          <div className="h-screen bg-white py-4 z-100 font-style">
            <div className="flex flex-col items-end pr-4 space-y-6">
              <Link href="https://app.kahana.co" className="mobile-link">Home</Link>
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
