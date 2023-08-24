import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from "react";

import whiteKahanaLogo from '../assets/kahana_logo_wide_light.svg';
import HeaderBanner from './HeaderBanner';

const navigation = [
  { name: 'About', href: '/about' },
  { name: 'Examples', href: '/explore' },
  { name: 'Solutions', dropdown: true, items: [
    { name: 'For Enterprise', href: '/enterprise' },
    { name: 'For Coaches', href: '/coaches' },
    { name: 'For Consultants', href: '/consultants' },
    { name: 'For Experts', href: '/experts' },
    { name: 'Become an affiliate', href: '/affiliates' },
  ] },
  { name: 'Resources', dropdown: true, items: [
    { name: 'Blog', href: 'https://blog.kahana.co/' },
    { name: 'Monetizing Notion', href: '/resources' },
    { name: 'Monetizing Google Drive', href: '/resources' },
    { name: 'Selling Digital Products', href: '/resources' },
    { name: 'Help Center', href: 'https://kahana.tawk.help/' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Community', href: 'https://nas.io/creators-and-experts' },
  ] },
  { name: 'Pricing', href: '/pricing' },
];

export default function NavbarDup() {
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleSolutionsOpen = () => {
    setIsSolutionsOpen(!isSolutionsOpen);
  };

  const toggleResourcesOpen = () => {
    setIsResourcesOpen(!isResourcesOpen);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeDropdowns = () => {
    setIsSolutionsOpen(false);
    setIsResourcesOpen(false);
  };

  useEffect(() => {
    const bodyScrollLock = () => {
      if (isSolutionsOpen || isResourcesOpen || isMobileMenuOpen) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'auto';
      }
    };

    bodyScrollLock();

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isSolutionsOpen, isResourcesOpen, isMobileMenuOpen]);

  return (
    <>
      <HeaderBanner />
      <header className="backdrop-blur-sm bg-white/90 bg-white mx-auto px-2">
        <nav>
          <div className="flex items-center justify-between border-b py-2 px-10">
            <Link href="/" aria-label="Home">
              <span className="sr-only">Company</span>
              <Image
                className="h-10"
                src={whiteKahanaLogo}
                alt="navbar-logo"
              />
            </Link>

            <section className="MOBILE-MENU relative flex lg:hidden">
              <div className="MOBILE-MENU-OVERLAY fixed top-0 left-0 w-full h-screen bg-white z-10" style={{ display: isMobileMenuOpen ? 'flex' : 'none' }}>
                <div className="CROSS-ICON absolute top-4 right-4 px-2 py-2" onClick={toggleMobileMenu}>
                  <svg
                    className="h-8 w-8 text-gray-600"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </div>
                <div className="MOBILE-MENU-CONTENT flex flex-col items-start justify-start h-full p-8">
                  {navigation.map((link) => (
                    <div key={link.name}>
                      {link.dropdown ? (
                        <div className="relative">
                          <button
                            className="text-gray-600 hover:text-gray-800"
                            onClick={link.name === 'Solutions' ? toggleSolutionsOpen : (link.name === 'Resources' ? toggleResourcesOpen : null)}
                          >
                            {link.name}
                          </button>
                          {link.name === 'Solutions' && isSolutionsOpen && (
                            <div className="absolute left-0 mt-2 bg-white border border-gray-200 shadow-lg rounded-lg" onMouseLeave={closeDropdowns}>
                              <ul className="MENU-LINK-MOBILE-OPEN space-y-2">
                                {link.items.map((item) => (
                                  <li key={item.name}>
                                    <Link href={item.href} className="text-gray-600 hover:text-gray-800">
                                      {item.name}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                          {link.name === 'Resources' && isResourcesOpen && (
                            <div className="absolute left-0 mt-2 bg-white border border-gray-200 shadow-lg rounded-lg" onMouseLeave={closeDropdowns}>
                              <ul className="MENU-LINK-MOBILE-OPEN space-y-2">
                                {link.items.map((item) => (
                                  <li key={item.name}>
                                    <Link href={item.href} className="text-gray-600 hover:text-gray-800">
                                      {item.name}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>
                      ) : (
                        <Link href={link.href} className="text-gray-600 hover:text-gray-800">
                          {link.name}
                        </Link>
                      )}
                    </div>
                  ))}
                  <div>
                    <a href="https://app.kahana.co/login" className="login-button">
                      Log in
                    </a>
                  </div>
                </div>
              </div>

              <div className="HAMBURGER-ICON space-y-2" onClick={toggleMobileMenu} style={{ display: isMobileMenuOpen ? 'none' : 'block' }}>
                <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
                <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
                <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
              </div>
            </section>

            <ul className="DESKTOP-MENU hidden space-x-8 lg:flex">
              {navigation.map((link) => (
                <li key={link.name}>
                  {link.dropdown ? (
                    <div className="relative group">
                      <button
                        className="text-base font-small text-gray-600 hover:text-gray-800"
                        onMouseEnter={link.name === 'Solutions' ? toggleSolutionsOpen : (link.name === 'Resources' ? toggleResourcesOpen : null)}
                      >
                        {link.name}
                      </button>
                      {link.name === 'Solutions' && isSolutionsOpen && (
                        <div className="absolute left-0 mt-2 bg-white border border-gray-200 shadow-lg rounded-lg" onMouseLeave={closeDropdowns}>
                          <ul className="MENU-LINK-MOBILE-OPEN space-y-2">
                            {link.items.map((item) => (
                              <li key={item.name}>
                                <Link href={item.href} className="text-gray-600 hover:text-gray-800">
                                  {item.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                      {link.name === 'Resources' && isResourcesOpen && (
                        <div className="absolute left-0 mt-2 bg-white border border-gray-200 shadow-lg rounded-lg" onMouseLeave={closeDropdowns}>
                          <ul className="MENU-LINK-MOBILE-OPEN space-y-2">
                            {link.items.map((item) => (
                              <li key={item.name}>
                                <Link href={item.href} className="text-gray-600 hover:text-gray-800">
                                  {item.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link href={link.href} className="text-base font-small text-gray-600 hover:text-gray-800">
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
              <li>
                <a href="https://app.kahana.co/login" className="login-button">
                  Log in
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      <style jsx>{`
        .hideMenuNav {
          display: none;
        }
        .showMenuNav {
          display: block;
          position: absolute;
          width: 100%;
          height: 100vh;
          top: 0;
          left: 0;
          background: white;
          z-index: 10;
          display: flex;
          flex-direction: column;
          justify-content: space-evenly;
          align-items: center;
        }

        .MOBILE-MENU-OVERLAY {
          top: 0;
          left: 0;
          width: 100%;
          height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: flex-start;
          padding-top: 2rem;
        }

        .CROSS-ICON {
          cursor: pointer;
        }

        .MOBILE-MENU-CONTENT {
          width: 100%;
        }

        .MENU-LINK-MOBILE-OPEN {
          list-style: none;
          padding: 0;
          margin: 0;
          min-width: 200px; /* Adjust as needed */
        }
        .login-button {
          background-color: #038270; /* Green color */
          color: white; /* Text color */
          padding: 8px 16px; /* Add padding to make it look like a button */
          border: none; /* Remove the default button border */
          border-radius: 5px; /* Add some rounded corners */
          text-decoration: none; /* Remove underline */
        }
      
        .login-button:hover {
          background-color: #024324; /* Change color on hover */
        }
      `}</style>
    </>
  );
}
