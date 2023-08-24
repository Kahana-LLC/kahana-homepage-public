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
    <nav
      style={{
        backgroundColor: 'white',
        color: 'black',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        padding: '0.5rem 2rem',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        borderBottom: '1px solid lightgray',
        zIndex: 1000,
      }}
      className={`navigation ${isOpen ? 'open' : ''}`}
    >
      <div
        style={{
          cursor: 'pointer',
          flex: 1,
        }}
        className="logo"
      >
        <Link href="/">
          <a>
            <Image
              className="h-10"
              src={whiteKahanaLogo}
              alt="navbar-logo"
            />
          </a>
        </Link>
      </div>

      <div
        style={{
          display: 'none',
          flexDirection: 'column',
          cursor: 'pointer',
        }}
        className={`hamburger ${isOpen ? 'open' : ''}`}
        onClick={toggleMenu}
      >
        <div className={`bar ${isOpen ? 'open' : ''}`}></div>
        <div className={`bar ${isOpen ? 'open' : ''}`}></div>
        <div className={`bar ${isOpen ? 'open' : ''}`}></div>
      </div>

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          marginLeft: 'auto',
        }}
        className={`menu ${isOpen ? 'open' : ''}`}
      >
        <ul>
          <li>
            <Link href="/about">
              <a
                style={{
                  textDecoration: 'none',
                  color: 'black',
                  padding: '0.5rem 1rem',
                  transition: 'background-color 0.3s ease-in-out',
                  cursor: 'pointer',
                }}
                className="menu-item"
              >
                About
              </a>
            </Link>
          </li>
          <li>
            <Link href="/explore">
              <a
                style={{
                  textDecoration: 'none',
                  color: 'black',
                  padding: '0.5rem 1rem',
                  transition: 'background-color 0.3s ease-in-out',
                  cursor: 'pointer',
                }}
                className="menu-item"
              >
                Examples
              </a>
            </Link>
          </li>
          <li
            style={{
              position: 'relative',
            }}
            className="dropdown"
          >
            <span
              style={{
                textDecoration: 'none',
                color: 'black',
                padding: '0.5rem 1rem',
                transition: 'background-color 0.3s ease-in-out',
                cursor: 'pointer',
              }}
              className="menu-item"
            >
              Solutions
            </span>
            <div
              style={{
                display: 'none',
                position: 'absolute',
                backgroundColor: '#038270',
                minWidth: '160px',
                zIndex: 1,
                cursor: 'default',
              }}
              className="dropdown-content"
            >
              <Link href="/enterprise">
                <a
                  style={{
                    color: 'white',
                    padding: '12px 16px',
                    textDecoration: 'none',
                    display: 'block',
                  }}
                >
                  For Enterprise
                </a>
              </Link>
              <Link href="/coaches">
                <a
                  style={{
                    color: 'white',
                    padding: '12px 16px',
                    textDecoration: 'none',
                    display: 'block',
                  }}
                >
                  For Coaches
                </a>
              </Link>
              <Link href="/consultants">
                <a
                  style={{
                    color: 'white',
                    padding: '12px 16px',
                    textDecoration: 'none',
                    display: 'block',
                  }}
                >
                  For Consultants
                </a>
              </Link>
              <Link href="/experts">
                <a
                  style={{
                    color: 'white',
                    padding: '12px 16px',
                    textDecoration: 'none',
                    display: 'block',
                  }}
                >
                  For Experts
                </a>
              </Link>
              <Link href="/affiliates">
                <a
                  style={{
                    color: 'white',
                    padding: '12px 16px',
                    textDecoration: 'none',
                    display: 'block',
                  }}
                >
                  Become an affiliate
                </a>
              </Link>
            </div>
          </li>
          <li
            style={{
              position: 'relative',
            }}
            className="dropdown"
          >
            <span
              style={{
                textDecoration: 'none',
                color: 'black',
                padding: '0.5rem 1rem',
                transition: 'background-color 0.3s ease-in-out',
                cursor: 'pointer',
              }}
              className="menu-item"
            >
              Resources
            </span>
            <div
              style={{
                display: 'none',
                position: 'absolute',
                backgroundColor: '#038270',
                minWidth: '160px',
                zIndex: 1,
                cursor: 'default',
              }}
              className="dropdown-content"
            >
              <a
                href="https://blog.kahana.co/"
                style={{
                  color: 'white',
                  padding: '12px 16px',
                  textDecoration: 'none',
                  display: 'block',
                }}
              >
                Blog
              </a>
              <Link href="/resources">
                <a
                  style={{
                    color: 'white',
                    padding: '12px 16px',
                    textDecoration: 'none',
                    display: 'block',
                  }}
                >
                  Monetizing Notion
                </a>
              </Link>
              <Link href="/resources">
                <a
                  style={{
                    color: 'white',
                    padding: '12px 16px',
                    textDecoration: 'none',
                    display: 'block',
                  }}
                >
                  Monetizing Google Drive
                </a>
              </Link>
              <Link href="/resources">
                <a
                  style={{
                    color: 'white',
                    padding: '12px 16px',
                    textDecoration: 'none',
                    display: 'block',
                  }}
                >
                  Selling Digital Products
                </a>
              </Link>
              <a
                href="https://kahana.tawk.help/"
                style={{
                  color: 'white',
                  padding: '12px 16px',
                  textDecoration: 'none',
                  display: 'block',
                }}
              >
                Help Center
              </a>
              <Link href="/faq">
                <a
                  style={{
                    color: 'white',
                    padding: '12px 16px',
                    textDecoration: 'none',
                    display: 'block',
                  }}
                >
                  FAQ
                </a>
              </Link>
              <a
                href="https://nas.io/creators-and-experts"
                style={{
                  color: 'white',
                  padding: '12px 16px',
                  textDecoration: 'none',
                  display: 'block',
                }}
              >
                Community
              </a>
            </div>
          </li>
          <li>
            <Link href="/pricing">
              <a
                style={{
                  textDecoration: 'none',
                  color: 'black',
                  padding: '0.5rem 1rem',
                  transition: 'background-color 0.3s ease-in-out',
                  cursor: 'pointer',
                }}
                className="menu-item"
              >
                Pricing
              </a>
            </Link>
          </li>
          <li>
            <a
              href="https://app.kahana.co/login"
              style={{
                backgroundColor: '#038270',
                textDecoration: 'none',
                color: 'white',
                padding: '0.5rem 1rem',
                transition: 'background-color 0.3s ease-in-out',
                cursor: 'pointer',
              }}
              className="menu-item login"
            >
              Log in
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
