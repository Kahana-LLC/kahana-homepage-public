import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

import whiteKahanaLogo from '../assets/kahana_logo_wide_light.svg';
import HeaderBanner from './HeaderBanner';

const desktopNavigation = [
  { name: 'About', href: '/about' },
  { name: 'Examples', href: '/explore' },
  { name: 'Solutions', dropdown: true },
  { name: 'Resources', dropdown: true },
  { name: 'Pricing', href: '/pricing' },
];

const mobileNavigation = [
  ...desktopNavigation,
  { name: 'Log in', href: 'https://app.kahana.co/login', className: 'login-button' },
];

const solutionsDropdownItems = [
  { name: 'For Enterprise', href: '/enterprise' },
  { name: 'For Coaches', href: '/coaches' },
  { name: 'For Consultants', href: '/consultants' },
  { name: 'For Experts', href: '/experts' },
  { name: 'Become an affiliate', href: '/affiliates' },
];

const resourcesDropdownItems = [
  { name: 'Blog', href: 'https://blog.kahana.co/' },
  { name: 'Monetizing Notion', href: '/resources' },
  { name: 'Monetizing Google Drive', href: '/resources' },
  { name: 'Selling Digital Products', href: '/resources' },
  { name: 'Help Center', href: 'https://kahana.tawk.help/' },
  { name: 'FAQ', href: '/faq' },
  { name: 'Community', href: 'https://nas.io/creators-and-experts' },
];

export default function NavbarDup() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const [solutionsDropdownTimeout, setSolutionsDropdownTimeout] = useState(null);
  const [resourcesDropdownTimeout, setResourcesDropdownTimeout] = useState(null);

  const toggleNavOpen = () => {
    setIsNavOpen((prevState) => !prevState);
  };

  // Function to handle hovering over Solutions with a delay
  const handleSolutionsHover = () => {
    clearTimeout(solutionsDropdownTimeout);
    setSolutionsDropdownTimeout(
      setTimeout(() => {
        setIsSolutionsOpen(true);
      }, 300) // Adjust the delay as needed (in milliseconds)
    );
  };

  // Function to handle leaving Solutions with a delay
  const handleSolutionsLeave = () => {
    clearTimeout(solutionsDropdownTimeout);
    setSolutionsDropdownTimeout(
      setTimeout(() => {
        setIsSolutionsOpen(false);
      }, 300) // Adjust the delay as needed (in milliseconds)
    );
  };

  // ... Rest of the code ...

  return (
    <>
      <HeaderBanner />
      <header className="backdrop-blur-sm bg-white/90 bg-white mx-auto px-2">
        <nav>
          <div className="flex items-center justify-between border-b py-2 px-10">
            <Link href="/" aria-label="Home">
              <span className="sr-only">Company</span>
              <Image className="h-10" src={whiteKahanaLogo} alt="navbar-logo" />
            </Link>

            <section className="MOBILE-MENU relative flex lg:hidden">
              <div
                className="MOBILE-MENU-OVERLAY fixed top-0 left-0 w-full h-screen bg-white z-10"
                style={{ display: isNavOpen ? 'flex' : 'none' }}
              >
                <div className="CROSS-ICON absolute top-4 right-4 px-2 py-2" onClick={toggleNavOpen}>
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
                  <ul className="MENU-LINK-MOBILE-OPEN space-y-4 text-lg">
                    {mobileNavigation.map((link) => (
                      <li key={link.name}>
                        {link.dropdown ? (
                          <div className="relative">
                            <span
                              className="text-gray-600 hover:text-gray-800 cursor-pointer"
                              onClick={() => link.name === 'Solutions' ? toggleSolutions() : toggleResources()}
                            >
                              {link.name}
                            </span>
                            {link.name === 'Solutions' && isSolutionsOpen && (
                              <div className="SOLUTIONS-DROPDOWN">{renderDropdown(solutionsDropdownItems)}</div>
                            )}
                            {link.name === 'Resources' && isResourcesOpen && (
                              <div className="RESOURCES-DROPDOWN">{renderDropdown(resourcesDropdownItems)}</div>
                            )}
                          </div>
                        ) : (
                          <Link href={link.href} className="text-gray-600 hover:text-gray-800">
                            {link.name}
                          </Link>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="HAMBURGER-ICON space-y-2" onClick={toggleNavOpen} style={{ display: isNavOpen ? 'none' : 'block' }}>
                <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
                <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
                <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
              </div>
            </section>

            <ul className="DESKTOP-MENU hidden space-x-8 lg:flex">
              {desktopNavigation.map((link) => (
                <li key={link.name}>
                  {link.dropdown ? (
                    <div className="relative">
                      <span
                        className="text-base font-small text-gray-600 hover:text-gray-800 cursor-pointer"
                        onMouseEnter={handleSolutionsHover}
                        onMouseLeave={handleSolutionsLeave}
                      >
                        {link.name}
                      </span>
                      {link.name === 'Solutions' && isSolutionsOpen && (
                        <div className="SOLUTIONS-DROPDOWN">{renderDropdown(solutionsDropdownItems)}</div>
                      )}
                      {link.name === 'Resources' && isResourcesOpen && (
                        <div className="RESOURCES-DROPDOWN">{renderDropdown(resourcesDropdownItems)}</div>
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
        }
        .login-button {
          background-color: #038270;
          color: white;
          padding: 8px 16px;
          border: none;
          border-radius: 5px;
          text-decoration: none;
        }

        .login-button:hover {
          background-color: #024324;
        }

        /* Add styles for dropdown menus */
        .DROPDOWN-MENU {
          position: absolute;
          top: 100%;
          left: 0;
          display: none;
          flex-direction: column;
          background-color: white;
          box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
          border-radius: 0.25rem;
        }

        .SOLUTIONS-DROPDOWN,
        .RESOURCES-DROPDOWN {
          position: absolute;
          top: 100%;
          left: 0;
          display: none;
        }

        .MENU-LINK-MOBILE-OPEN:hover .DROPDOWN-MENU,
        .MENU-LINK-MOBILE-OPEN:focus-within .DROPDOWN-MENU,
        .SOLUTIONS-DROPDOWN:hover,
        .RESOURCES-DROPDOWN:hover {
          display: flex;
        }

        .DROPDOWN-MENU ul {
          padding: 0;
          margin: 0;
          list-style: none;
        }

        .DROPDOWN-MENU li {
          padding: 10px 20px;
        }

        .DROPDOWN-MENU li:hover {
          background-color: #f7f7f7;
        }
      `}</style>
    </>
  );
}
