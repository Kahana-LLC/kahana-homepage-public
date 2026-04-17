import React, { useEffect, useMemo, useRef, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import KeyPointsCard from '../components/KeyPointsCard';
import ErrorBoundary from '../components/ErrorBoundary';
import DeviceVsBrowserBand from '../components/products/DeviceVsBrowserBand';
import SolutionFeatureWithVisual from '../components/solutions/visuals/SolutionFeatureWithVisual';
import MainIncidentDashboardPreview from '../components/solutions/visuals/MainIncidentDashboardPreview';
import RelatedEnterpriseFeatureLinks from '../components/features/RelatedEnterpriseFeatureLinks';
import OasisBrowserFeatureVisuals from '../components/products/oasis/OasisBrowserFeatureVisuals';
import { oasisCapabilities } from '../data/oasisEnterpriseCapabilities';
import {
  deviceVsBrowserBandProps,
  enterpriseCapabilitiesSectionIntro,
  enterpriseBrowserMetrics,
  valuePillars,
} from '../data/oasisEnterpriseProductContent';
import { getCloudinaryImageUrl } from '../utils/cloudinary-mapper';

// Brand tokens (matching homepage colors)
const COLORS = {
  // Core brand greens matching homepage
  brand900: '#313A00', // Dark green (headings)
  brand700: '#4A6200', // Primary button color
  brand600: '#7A9200', // Hover/accent
  brand200: '#978455', // Eyebrow text
  brand050: '#F8FAF2', // Light background

  // Role-based functional colors (matching homepage)
  ctaPrimary: '#4A6200', // Primary button background
  ctaHover: '#3E5300', // Primary button hover
  info: '#4A6200', // Info states
  success: '#4A6200', // Success states
  warning: '#978455', // Warning states
  error: '#313A00', // Error states

  // Text and surfaces (matching homepage)
  primary: '#313A00', // Primary text color
  accent: '#4A6200', // Accent color
  bgPage: '#FFFFFF', // White background (matching homepage)
  bgCard: '#FFFFFF', // White cards
  muted: '#4A5745', // Muted text
};

const MAX_WIDTH = 1100;

// Inline icons (Lucide-inspired)
const Icon = {
  Shield: (props) => (
    <svg {...props} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" /></svg>
  ),
  Rocket: (props) => (
    <svg {...props} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 13a9 9 0 0 0 6 6"/><path d="M12 2a9 9 0 0 0-9 9v3l6-1 7-7-1-4Z"/><path d="M9 15l-1 6 3-3"/></svg>
  ),
  Key: (props) => (
    <svg {...props} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="7.5" cy="15.5" r="5.5"/><path d="M21 2l-8.5 8.5"/><path d="M16 2h5v5"/></svg>
  ),
  Sliders: (props) => (
    <svg {...props} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><line x1="4" y1="21" x2="4" y2="14"/><line x1="4" y1="10" x2="4" y2="3"/><line x1="12" y1="21" x2="12" y2="12"/><line x1="12" y1="8" x2="12" y2="3"/><line x1="20" y1="21" x2="20" y2="16"/><line x1="20" y1="12" x2="20" y2="3"/><line x1="1" y1="14" x2="7" y2="14"/><line x1="9" y1="8" x2="15" y2="8"/><line x1="17" y1="16" x2="23" y2="16"/></svg>
  ),
  FileText: (props) => (
    <svg {...props} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><line x1="10" y1="9" x2="8" y2="9"/></svg>
  ),
  Settings: (props) => (
    <svg {...props} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 7.82 4 1.65 1.65 0 0 0 9 2.49V2a2 2 0 1 1 4 0v.09c0 .66.38 1.26 1 1.51.56.24 1.22.14 1.68-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06c-.47.47-.57 1.12-.33 1.68.25.62.85 1 1.51 1H21a2 2 0 1 1 0 4h-.09c-.66 0-1.26.38-1.51 1z"/></svg>
  ),
  Layers: (props) => (
    <svg {...props} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>
  ),
  DollarSign: (props) => (
    <svg {...props} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
  ),
  Clock: (props) => (
    <svg {...props} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
  ),
  Ticket: (props) => (
    <svg {...props} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2z"/><path d="M13 5v2"/><path d="M13 17v2"/><path d="M13 11v2"/></svg>
  ),
  Lock: (props) => (
    <svg {...props} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
  ),
  Database: (props) => (
    <svg {...props} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>
  ),
  RefreshCw: (props) => (
    <svg {...props} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/></svg>
  ),
  Zap: (props) => (
    <svg {...props} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
  ),
  Layout: (props) => (
    <svg {...props} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>
  ),
  Calendar: (props) => (
    <svg {...props} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
  ),
};

function useScrollSpy(sectionIds) {
  const [activeId, setActiveId] = useState(sectionIds[0] || 'overview');
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '0px 0px -70% 0px', threshold: 0.1 }
    );
    sectionIds.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [sectionIds]);
  return activeId;
}

// Same dropdown links as NavbarDup (products/oasis-browser and main site)
const STICKY_NAV_PRODUCTS = [
  { label: 'Oasis Browser', href: '/products/oasis-browser' },
  { label: 'Oasis Enterprise Browser', href: '/products/oasis-enterprise-browser' },
  { label: 'Web Application', href: '/products/web-application' },
];
const STICKY_NAV_PRICING = [
  { label: 'Oasis Pricing', href: '/oasis-pricing' },
  { label: 'Hubs Pricing', href: '/pricing' },
];
const STICKY_NAV_LEARN = [
  { label: 'Blog', href: '/blog' },
  { label: 'Docs', href: '/docs' },
  { label: 'Community', href: '/community' },
  { label: 'Enterprise Browser Buyer Guide', href: '/enterprise-buyer-guide' },
];
const STICKY_NAV_ABOUT = [
  { label: 'About', href: '/about' },
  { label: 'Contact Us', href: '/contact' },
  { label: 'Support', href: '/support' },
];

function StickyHeader({ anchors }) {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const lastY = useRef(0);
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY || 0;
      const delta = y - lastY.current;
      const threshold = 8;
      if (y <= 0) {
        setHidden(false);
      } else if (delta > threshold) {
        setHidden(true);
      } else if (delta < -threshold) {
        setHidden(false);
      }
      lastY.current = y;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (e.target && !e.target.closest('.sticky-nav-dropdown')) setOpenDropdown(null);
    };
    if (openDropdown) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [openDropdown]);

  /* Section headers like "OUR PRODUCTS" - dark gray, bold, small, uppercase, letter-spacing */
  const sectionHeaderStyle = {
    color: '#374151',
    fontWeight: 700,
    fontSize: '0.6875rem',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
  };
  /* Dropdown/list links - olive #617500 (match nav image on all pages), 1rem, 500, -0.01em */
  const navColor = '#617500';
  const linkStyle = {
    color: navColor,
    textDecoration: 'none',
    fontWeight: 500,
    fontSize: '1rem',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    letterSpacing: '-0.01em',
  };
  const dropdownSection = (id, buttonLabel, headerLabel, items) => (
    <div key={id} className="sticky-nav-dropdown" style={{ position: 'relative', display: 'inline-block', marginLeft: 16 }}>
      <button
        type="button"
        onClick={() => setOpenDropdown(openDropdown === id ? null : id)}
        style={{ ...linkStyle, background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
        aria-expanded={openDropdown === id}
      >
        {buttonLabel}
      </button>
      {openDropdown === id && (
        <div style={{ position: 'absolute', top: '100%', left: 0, marginTop: 4, minWidth: 220, background: '#f3f4f6', border: '1px solid #e5e7eb', borderRadius: 8, boxShadow: '0 4px 12px rgba(0,0,0,0.1)', padding: '20px 20px 16px', zIndex: 50 }}>
          <div style={{ ...sectionHeaderStyle, marginBottom: 16 }}>{headerLabel}</div>
          {items.map((item) => (
            <Link key={item.href} href={item.href}>
              <a className="dropdown-link" onClick={() => setOpenDropdown(null)} style={{ ...linkStyle, display: 'block', padding: '8px 0' }}>{item.label}</a>
            </Link>
          ))}
        </div>
      )}
    </div>
  );

  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 30, background: COLORS.bgCard, borderBottom: '1px solid #e5e7eb', transform: hidden ? 'translateY(-100%)' : 'translateY(0)', transition: 'transform 220ms ease' }}>
      <div style={{ maxWidth: MAX_WIDTH, margin: '0 auto', padding: '12px 16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Link href="/" legacyBehavior>
          <a style={{ display: 'inline-flex', alignItems: 'center', textDecoration: 'none' }}>
            <span style={{ width: 28, height: 28, borderRadius: 6, background: COLORS.brand700, display: 'inline-block', marginRight: 10 }} />
            <span style={{ color: COLORS.primary, fontWeight: 700 }}>Kahana</span>
          </a>
        </Link>
        <nav className="hide-on-mobile sticky-nav-desktop" role="navigation" aria-label="Primary" style={{ display: 'none' }}>
          {dropdownSection('products', 'Products', 'OUR PRODUCTS', STICKY_NAV_PRODUCTS)}
          {dropdownSection('pricing', 'Pricing', 'PRODUCT PRICING', STICKY_NAV_PRICING)}
          {dropdownSection('learn', 'Learn', 'LEARN', STICKY_NAV_LEARN)}
          {dropdownSection('about', 'About', 'ABOUT', STICKY_NAV_ABOUT)}
        </nav>
        <button onClick={() => setOpen(v => !v)} aria-label="Toggle Menu" className="mobile-menu-btn" style={{ appearance: 'none', background: 'transparent', border: 'none', cursor: 'pointer' }}>
          <span style={{ width: 24, height: 2, background: COLORS.primary, display: 'block', marginBottom: 5 }} />
          <span style={{ width: 24, height: 2, background: COLORS.primary, display: 'block', marginBottom: 5 }} />
          <span style={{ width: 24, height: 2, background: COLORS.primary, display: 'block' }} />
        </button>
      </div>
      {open && (
        <div className="mobile-menu" style={{ borderTop: '1px solid #e5e7eb', background: '#f9fafb' }}>
          <div style={{ maxWidth: MAX_WIDTH, margin: '0 auto', padding: '16px 16px' }}>
            <div style={{ ...sectionHeaderStyle, marginBottom: 12 }}>OUR PRODUCTS</div>
            {STICKY_NAV_PRODUCTS.map((item) => (
              <Link key={item.href} href={item.href}><a className="dropdown-link" onClick={() => setOpen(false)} style={{ ...linkStyle, display: 'block', padding: '8px 0' }}>{item.label}</a></Link>
            ))}
            <div style={{ ...sectionHeaderStyle, marginTop: 16, marginBottom: 12 }}>PRODUCT PRICING</div>
            {STICKY_NAV_PRICING.map((item) => (
              <Link key={item.href} href={item.href}><a className="dropdown-link" onClick={() => setOpen(false)} style={{ ...linkStyle, display: 'block', padding: '8px 0' }}>{item.label}</a></Link>
            ))}
            <div style={{ ...sectionHeaderStyle, marginTop: 16, marginBottom: 12 }}>LEARN</div>
            {STICKY_NAV_LEARN.map((item) => (
              <Link key={item.href} href={item.href}><a className="dropdown-link" onClick={() => setOpen(false)} style={{ ...linkStyle, display: 'block', padding: '8px 0' }}>{item.label}</a></Link>
            ))}
            <div style={{ ...sectionHeaderStyle, marginTop: 16, marginBottom: 12 }}>ABOUT</div>
            {STICKY_NAV_ABOUT.map((item) => (
              <Link key={item.href} href={item.href}><a className="dropdown-link" onClick={() => setOpen(false)} style={{ ...linkStyle, display: 'block', padding: '8px 0' }}>{item.label}</a></Link>
            ))}
            <div style={{ marginTop: 20, paddingTop: 16, borderTop: '1px solid #e5e7eb' }}>
              <div style={{ ...sectionHeaderStyle, marginBottom: 8 }}>PAGE SECTIONS</div>
              {anchors.map(a => (
                <a key={a.href} href={a.href} onClick={() => setOpen(false)} className="dropdown-link" style={{ ...linkStyle, display: 'block', padding: '8px 0' }}>{a.label}</a>
              ))}
            </div>
          </div>
        </div>
      )}
      <style jsx>{`
        @media (min-width: 1024px) {
          .hide-on-mobile { display: flex !important; align-items: center; }
          .mobile-menu-btn { display: none; }
          .sticky-nav-desktop { display: flex !important; }
        }
      `}</style>
      <style jsx>{`
        @media (min-width: 1024px) {
          header nav.sticky-nav-desktop a,
          header nav.sticky-nav-desktop button,
          header nav.sticky-nav-desktop a:hover,
          header nav.sticky-nav-desktop button:hover { color: #617500 !important; font-weight: 500 !important; }
        }
      `}</style>
      <style jsx global>{`
        /* StickyHeader dropdown links - olive #617500, no white blink on hover/click */
        header .dropdown-link,
        header a.dropdown-link,
        header .dropdown-link:hover,
        header a.dropdown-link:hover,
        header .dropdown-link:visited,
        header .dropdown-link:focus,
        header .dropdown-link:active {
          color: #617500 !important;
          -webkit-tap-highlight-color: transparent !important;
        }
        header .dropdown-link:hover,
        header .dropdown-link:active,
        header .dropdown-link:focus {
          background-color: rgba(97, 117, 0, 0.06) !important;
        }
      `}</style>
      <div className="desktop-nav" style={{ display: 'none' }} role="navigation" aria-label="Section anchors">
        <div style={{ maxWidth: MAX_WIDTH, margin: '0 auto', padding: '0 16px 12px 16px', display: 'flex', justifyContent: 'flex-end', gap: 16 }}>
          {anchors.map(a => (
            <a key={a.href} href={a.href} style={{ ...linkStyle }}>
              {a.label}
            </a>
          ))}
        </div>
      </div>
      <style jsx>{`
        @media (min-width: 1024px) { .desktop-nav { display: block; } }
      `}</style>
    </header>
  );
}



function Accordion({ title, children }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="accordion-container" style={{ 
      border: '1px solid #d1d5db', 
      borderRadius: '8px', 
      marginBottom: '12px',
      backgroundColor: '#FFFFFF',
      boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)'
    }}>
      <button 
        className="accordion-button"
        onClick={() => setOpen(v => !v)} 
        style={{ 
          width: '100%', 
          textAlign: 'left', 
          padding: '16px 20px', 
          background: 'transparent', 
          border: 'none', 
          color: COLORS.primary, 
          fontWeight: 600, 
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderRadius: '6px',
          transition: 'background-color 0.2s ease'
        }}
        aria-expanded={open}
        aria-controls={`accordion-${title.replace(/\s+/g, '-').toLowerCase()}`}
      >
        <span>{title}</span>
        <svg 
          className={`w-5 h-5 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
          style={{ flexShrink: 0, marginLeft: '12px' }}
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && (
        <div 
          id={`accordion-${title.replace(/\s+/g, '-').toLowerCase()}`}
          style={{ 
            padding: '0 20px 20px 20px', 
            color: COLORS.muted, 
            lineHeight: 1.7,
            borderTop: '1px solid #e5e7eb',
            marginTop: '8px',
            textAlign: 'left'
          }}
        >
          {children}
        </div>
      )}
    </div>
  );
}

function ComparisonTable({ rows }) {
  return (
    <div style={{ overflowX: 'auto' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            {Object.keys(rows[0] || {}).map(key => (
              <th key={key} style={{ textAlign: 'left', padding: '12px 10px', background: '#eef3f8', color: COLORS.primary, fontWeight: 700 }}>{key}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, idx) => (
            <tr key={idx} style={{ background: idx % 2 === 0 ? '#ffffff' : '#f7fafc' }}>
              {Object.values(row).map((val, i) => (
                <td key={i} style={{ padding: '12px 10px', color: COLORS.muted, lineHeight: 1.6 }}>{val}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Quote({ text, name, role, org }) {
  const initials = useMemo(() => name.split(' ').map(p => p[0]).slice(0,2).join('').toUpperCase(), [name]);
  return (
    <blockquote style={{ borderLeft: `4px solid ${COLORS.accent}`, paddingLeft: 16, margin: 0 }}>
      <p style={{ color: COLORS.primary, fontSize: 18, lineHeight: 1.6, margin: 0 }}>{text}</p>
      <div style={{ display: 'flex', alignItems: 'center', marginTop: 10, gap: 10 }}>
        <div style={{ width: 36, height: 36, borderRadius: 999, background: '#4A6200', color: '#FFFFFF', fontWeight: 800, display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>{initials}</div>
        <span style={{ color: COLORS.muted }}>{name} • {role} @ {org}</span>
      </div>
    </blockquote>
  );
}

function BackToTop() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  if (!visible) return null;
  return (
    <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Back to top" className="btn-primary" style={{ position: 'fixed', right: 20, bottom: 20, borderRadius: 999, padding: '10px 14px', cursor: 'pointer', boxShadow: '0 6px 20px rgba(0,0,0,0.15)' }}>
      ↑ Top
    </button>
  );
}

function Section({ id, title, kicker, eyebrow, children, right, centered = false }) {
  return (
    <section 
      id={id} 
      aria-labelledby={`${id}-title`} 
      className="py-20 md:py-28 px-4 lg:px-10 scroll-mt-28 border-b border-gray-100 last:border-b-0 transition-all duration-300"
    >
      <div className="max-w-5xl mx-auto">
        {/* Centered Header */}
        <div className="text-center mb-12">
          {eyebrow && (
            <div className="tracking-wider mb-4 font-semibold text-base lg:text-lg capitalize" style={{ color: '#978455' }}>
              {eyebrow}
            </div>
          )}
          {title && (
            <h2 
              id={`${id}-title`} 
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight"
              style={{ color: COLORS.primary }}
            >
              {title}
            </h2>
          )}
          {kicker && (
            <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed font-medium">
              {kicker}
            </p>
          )}
        </div>
        
        {/* Centered Content */}
        <div className={`${centered ? 'text-center' : ''} max-w-4xl mx-auto`}>
          <div className="prose prose-lg max-w-none leading-relaxed space-y-6 kb-typography" style={{ color: COLORS.primary }}>
            {children}
          </div>
        </div>
        
        {/* Right sidebar if provided */}
        {right && (
          <div className="mt-12 max-w-2xl mx-auto">
            {right}
          </div>
        )}
      </div>
    </section>
  );
}

export default function EnterpriseBuyerGuidePage() {
  const [showTocButton, setShowTocButton] = useState(false);
  const [isTocOpen, setIsTocOpen] = useState(false);

  // Show TOC button on scroll
  useEffect(() => {
    const handleScroll = () => {
      setShowTocButton(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Exact headings/order with subsections
  const structure = [
    { id: 'introduction', label: 'Introduction' },
    { id: 'oasis-enterprise-in-practice', label: 'Oasis Enterprise in practice' },
    { id: 'personas', label: 'Who should read this guide' },
    { id: 'value-pillars', label: 'Value pillars' },
    { id: 'benefits-of-oasis', label: 'Benefits of Oasis' },
    { id: 'deployment-experience', label: 'Deployment experience' },
    { id: 'user-experience', label: 'User Experience' },
    { id: 'faqs', label: 'FAQs' },
  ];

  const anchors = useMemo(() => structure.flatMap(s => [
    { href: `#${s.id}`, label: s.label },
    ...(s.children ? s.children.map(c => ({ href: `#${c.id}`, label: `· ${c.label}` })) : []),
  ]), [structure]);

  const sectionIds = useMemo(() => structure.flatMap(s => [s.id, ...(s.children ? s.children.map(c => c.id) : [])]), [structure]);
  const activeId = useScrollSpy(sectionIds);

  return (
    <ErrorBoundary>
      <Head>
        <title>Enterprise browser buyer guide: managed SaaS access | Kahana</title>
        <meta
          name="description"
          content="How to evaluate a managed enterprise browser for secure SaaS access: session governance, IdP and DLP integration, contractor and third-party devices, and how Oasis Enterprise fits your stack."
        />
        <meta name="keywords" content="enterprise browser buyer guide, managed enterprise browser, secure SaaS access, Oasis Enterprise Browser, browser governance, contractor access" />
        <meta property="og:title" content="Enterprise browser buyer guide: managed SaaS access | Kahana" />
        <meta
          property="og:description"
          content="Evaluate session-level governance, identity and DLP integration, and operational paths for web-first work without defaulting to laptops or VDI for every role."
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Enterprise browser buyer guide: managed SaaS access | Kahana" />
        <meta
          name="twitter:description"
          content="Session governance, stack integration, and honest tradeoffs for enterprise browser programs."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div style={{ background: '#FFFFFF', color: COLORS.primary, minHeight: '100vh' }}>
        <div className="min-h-screen" style={{ background: '#FFFFFF' }}>
          <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24">
            {/* Hero Introduction Section - Perplexity/Gemini Hybrid Style */}
            <section 
              id="introduction" 
              className="relative w-full py-32 md:py-48 lg:py-56 overflow-hidden"
              style={{
                backgroundImage: `url(${getCloudinaryImageUrl('/images/desert-background-5.webp')})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}
            >
              {/* Darker gradient overlay for Perplexity-style contrast */}
              <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/80 to-white"></div>
              
              <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
                <div className="tracking-wider mb-4 font-semibold text-base lg:text-lg capitalize" style={{ color: '#978455' }}>
                  Kahana · Oasis Enterprise
                </div>
                <h1 
                  className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold mb-8 leading-[1.1] tracking-tight text-black"
                >
                  Enterprise browser <br className="hidden md:block" />
                  buyer guide
                </h1>
                <p className="text-xl md:text-2xl lg:text-3xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-medium mb-10">
                  Managed SaaS access, governance in the session, and how to evaluate Oasis next to your IdP and DLP programs
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
                  <Link href="/schedule-demo" className="btn-primary inline-flex items-center justify-center px-10 py-4 text-lg font-bold no-underline hover:no-underline focus:no-underline">
                    Schedule a demo
                  </Link>
                  <Link href="/products/oasis-enterprise-browser" className="btn-secondary inline-flex items-center justify-center px-10 py-4 text-lg font-bold no-underline hover:no-underline focus:no-underline">
                    Oasis Enterprise overview
                  </Link>
                </div>
              </div>
            </section>
            
            {/* Introduction Content Section */}
            <section 
              id="introduction-content" 
              className="py-4 md:py-6 px-4 lg:px-10 scroll-mt-28"
            >
              <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-left" style={{ color: '#4A6200' }}>
                Why this guide exists
              </h2>
              <p className="text-lg md:text-xl leading-relaxed mb-4 text-left">
                Most enterprise work now runs in the browser: SaaS, internal web apps, and increasingly AI-assisted
                workflows. Yet many security models still assume corporate laptops, VPNs, and network perimeters as the
                primary control points. When contractors and partners work from devices you do not own, that mismatch
                shows up as slow onboarding, policy gaps, or an expensive default to shipping hardware and standing up
                hosted desktops for roles that mostly live in a handful of web apps.
              </p>
              <p className="text-lg md:text-xl leading-relaxed mb-4 text-left">
                A managed enterprise browser is one answer to the gap: place governance where work actually happens,
                inside the browser session, and connect it to the identity and data-protection investments you already
                have. Oasis is built for that pattern: unified browser policy, IdP-backed sessions, and enterprise DLP
                alignment where your stack supports browser-level enforcement.
              </p>
              <p className="text-lg md:text-xl leading-relaxed text-left">
                Below you will see the same session-governance visuals and capability blocks we use on the{' '}
                <Link href="/products/oasis-enterprise-browser" className="text-[#66C2BE] font-semibold no-underline hover:underline">
                  Oasis Enterprise Browser
                </Link>{' '}
                product page, plus evaluation topics for your team: benefits, deployment, UX, and FAQs framed with honest
                limits (what belongs in a browser vs what still needs other delivery models). For the personal AI browser
                experience, see{' '}
                <Link href="/products/oasis-browser" className="text-[#66C2BE] font-semibold no-underline hover:underline">
                  Oasis Browser
                </Link>
                .
              </p>
              </div>
            </section>

            <section
              id="oasis-enterprise-in-practice"
              aria-labelledby="oasis-enterprise-in-practice-title"
              className="scroll-mt-28 border-b border-gray-100"
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
                <h2
                  id="oasis-enterprise-in-practice-title"
                  className="text-3xl md:text-4xl font-bold text-center mb-4"
                  style={{ color: COLORS.primary }}
                >
                  Oasis Enterprise in practice
                </h2>
                <p className="text-lg text-center text-gray-700 max-w-3xl mx-auto leading-relaxed">
                  Illustrative controls and capability layouts match the live product story: session-level visibility,
                  device vs browser tradeoffs, and four enterprise outcomes with links to deeper feature pages.
                </p>
              </div>
              <MainIncidentDashboardPreview pageKey="oasis-enterprise-browser" />
              <RelatedEnterpriseFeatureLinks pageKey="oasis-enterprise-browser" />
              <DeviceVsBrowserBand {...deviceVsBrowserBandProps} />
              <div className="bg-[#f8faf9] py-16 md:py-20 border-y border-[#4A5745]/8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <h3 className="text-3xl font-bold text-[#4A5745] text-center mb-12 tracking-tight">
                    {enterpriseCapabilitiesSectionIntro.title}
                  </h3>
                  <p className="text-[#4A5745]/95 text-center mb-10 max-w-3xl mx-auto leading-relaxed">
                    {enterpriseCapabilitiesSectionIntro.body}
                  </p>
                  <div className="grid grid-cols-1 gap-6 lg:gap-8">
                    {oasisCapabilities.map((feature, index) => (
                      <div key={feature.slug} className="space-y-3">
                        <SolutionFeatureWithVisual
                          pageKey="oasis-enterprise-browser"
                          feature={feature}
                          index={index}
                        />
                        <p className="text-center">
                          <Link
                            href={`/features/${feature.slug}`}
                            className="text-sm font-semibold text-[#66C2BE] no-underline hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#66C2BE]"
                          >
                            Learn more: {feature.title} →
                          </Link>
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            <Section
              id="personas"
              title="Who should read this guide"
              kicker="Buying-committee lenses for managed browser programs"
              centered={true}
            >
              <p className="text-lg text-[#4A5745] mb-8 max-w-3xl mx-auto text-center">
                This page is written for teams evaluating{' '}
                <strong>secure SaaS access</strong> on corporate and third-party devices. End-user productivity
                features for the personal browser live on{' '}
                <Link href="/products/oasis-browser" className="text-[#66C2BE] font-semibold no-underline hover:underline">
                  Oasis Browser
                </Link>
                ; the sections below map common questions by stakeholder.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 max-w-6xl mx-auto">
                <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 flex flex-col hover:shadow-xl transition-all text-left">
                  <div className="flex justify-start mb-4">
                    <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #d6e3f4 0%, #e5efd8 100%)' }}>
                      <Icon.Shield className="w-8 h-8" style={{ color: '#4A6200' }} />
                    </div>
                  </div>
                  <h4 className="text-xl font-bold mb-3" style={{ color: '#313A00' }}>
                    Security leadership
                  </h4>
                  <p className="text-sm text-gray-700 leading-relaxed flex-grow">
                    Session governance, data handling, and AI usage in the browser; how policies follow external and
                    contractor sessions; how Oasis complements IdP and DLP rather than replacing your stack.
                  </p>
                </div>
                <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 flex flex-col hover:shadow-xl transition-all text-left">
                  <div className="flex justify-start mb-4">
                    <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #e5efd8 0%, #d6e3f4 100%)' }}>
                      <Icon.Layers className="w-8 h-8" style={{ color: '#4A6200' }} />
                    </div>
                  </div>
                  <h4 className="text-xl font-bold mb-3" style={{ color: '#313A00' }}>
                    IT and enterprise architecture
                  </h4>
                  <p className="text-sm text-gray-700 leading-relaxed flex-grow">
                    Delivery models, identity integration, logging, and where a managed browser reduces reliance on
                    hardware logistics or hosted desktops for web-first roles (without promising every workload moves
                    to a tab).
                  </p>
                </div>
                <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 flex flex-col hover:shadow-xl transition-all text-left">
                  <div className="flex justify-start mb-4">
                    <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #d6e3f4 0%, #e5efd8 100%)' }}>
                      <Icon.Rocket className="w-8 h-8" style={{ color: '#4A6200' }} />
                    </div>
                  </div>
                  <h4 className="text-xl font-bold mb-3" style={{ color: '#313A00' }}>
                    Program and business owners
                  </h4>
                  <p className="text-sm text-gray-700 leading-relaxed flex-grow">
                    Contractor onboarding speed, project kickoff friction, and operational cost of default laptop or VDI
                    patterns when the real work is SaaS in the browser.
                  </p>
                </div>
              </div>
            </Section>
            <Section
              id="value-pillars"
              title="Value pillars"
              eyebrow="Enterprise"
              kicker="Themes that show up in security, IT, and program reviews"
              centered={true}
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {valuePillars.map((pillar, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl border border-[#4A5745]/10 p-6 shadow-sm text-left"
                  >
                    <div className="flex gap-3 mb-3">
                      <div
                        className="flex-shrink-0 w-11 h-11 rounded-lg flex items-center justify-center ring-1 ring-black/5"
                        style={{ backgroundColor: '#4A6200' }}
                        aria-hidden
                      >
                        {pillar.icon}
                      </div>
                      <h4 className="text-base font-semibold text-[#4A5745] leading-snug pt-1.5">{pillar.title}</h4>
                    </div>
                    <p className="text-sm text-[#4A5745]/90 leading-relaxed border-l-2 border-[#4A6200]/25 pl-3">
                      {pillar.description}
                    </p>
                  </div>
                ))}
              </div>
            </Section>
            
            <Section 
              id="benefits-of-oasis" 
              title="Benefits of Oasis" 
              eyebrow="Value Proposition"
              kicker="Key advantages of choosing Oasis for your organization"
              centered={true}
              right={
                <div className="space-y-6">
                  <div className="relative bg-white/90 border border-white/80 rounded-[26px] px-6 py-8 shadow-[0_25px_70px_rgba(32,47,0,0.14)] backdrop-blur-lg">
                    <div className="text-center">
                      <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-5">
                        <svg className="w-10 h-10 text-[#4A6200]" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
                        </svg>
                      </div>
                      <h3 className="text-xl font-semibold text-[#1F2D00] mb-3">Single Sign-On</h3>
                      <p className="text-base text-[#4E5534]">
                        Seamless authentication with your existing identity providers
                      </p>
                    </div>
                  </div>
                  <div className="relative bg-white border-2 border-[#4A6200] rounded-[26px] px-6 py-6 shadow-[0_25px_70px_rgba(32,47,0,0.14)]">
                    <div className="flex items-start gap-3 mb-5">
                      <div className="w-1 h-6 bg-[#4A6200] rounded-full flex-shrink-0 mt-1" />
                      <h3 className="text-xl font-semibold text-[#4A6200]">
                        Key Points
                      </h3>
                    </div>
                    <ul className="space-y-3 text-left">
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-[#4A6200] rounded-full mt-2 flex-shrink-0" />
                        <span className="text-base text-[#4A6200]">
                          Integrates with common enterprise IdPs (for example Okta, Microsoft Entra ID, Ping)
                        </span>
                    </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-[#4A6200] rounded-full mt-2 flex-shrink-0" />
                        <span className="text-base text-[#4A6200]">Built-in MFA support</span>
                    </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-[#4A6200] rounded-full mt-2 flex-shrink-0" />
                        <span className="text-base text-[#4A6200]">Seamless user experience</span>
                    </li>
                  </ul>
                  </div>
                </div>
              }
            >
                           <p className="mb-8">
                A managed enterprise browser is one layer in a modern program: it can unify browser expectations for SaaS
                and web work, extend identity and DLP into sessions on third-party devices, and reduce how often hardware
                logistics or hosted desktops are the default answer for roles that are already web-first. It does not
                replace every legacy app or air-gapped workflow.
              </p>
              
              <div className="space-y-8 max-w-6xl mx-auto">
                {/* Security Container */}
                <div>
                  <div className="text-sm font-semibold text-[#4A6200] mb-4 uppercase tracking-wide text-left">Security</div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="relative bg-white/90 border border-white/80 rounded-xl px-5 py-4 shadow-[0_25px_70px_rgba(32,47,0,0.14)] backdrop-blur-lg">
                      <div className="absolute top-4 left-4">
                        <div className="w-8 h-8 rounded-lg bg-[#F8FAF2] flex items-center justify-center" style={{ color: '#4A6200' }}>
                          <Icon.Lock className="w-5 h-5" />
                </div>
                      </div>
                      <p className="text-base text-[#4E5534] leading-relaxed text-left pt-2 pl-10">
                        Enhanced data protection and DLP (controls on copy/paste, download, printing, screenshots, watermarking).
                      </p>
                    </div>
                    <div className="relative bg-white/90 border border-white/80 rounded-xl px-5 py-4 shadow-[0_25px_70px_rgba(32,47,0,0.14)] backdrop-blur-lg">
                      <div className="absolute top-4 left-4">
                        <div className="w-8 h-8 rounded-lg bg-[#F8FAF2] flex items-center justify-center" style={{ color: '#4A6200' }}>
                          <Icon.Shield className="w-5 h-5" />
                        </div>
                      </div>
                      <p className="text-base text-[#4E5534] leading-relaxed text-left pt-2 pl-10">
                        Built‑in threat detection and prevention for phishing, malware, risky sites, and malicious downloads.
                      </p>
                    </div>
                    <div className="relative bg-white/90 border border-white/80 rounded-xl px-5 py-4 shadow-[0_25px_70px_rgba(32,47,0,0.14)] backdrop-blur-lg">
                      <div className="absolute top-4 left-4">
                        <div className="w-8 h-8 rounded-lg bg-[#F8FAF2] flex items-center justify-center" style={{ color: '#4A6200' }}>
                          <Icon.Key className="w-5 h-5" />
                        </div>
                      </div>
                      <p className="text-base text-[#4E5534] leading-relaxed text-left pt-2 pl-10">
                        Identity-aware access to SaaS and internal web apps from the browser, which can reduce reliance on
                        VPN and VDI for browser-centric roles when your architecture supports it.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Productivity Container */}
                <div>
                  <div className="text-sm font-semibold text-[#4A6200] mb-4 uppercase tracking-wide text-left">Productivity</div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="relative bg-white/90 border border-white/80 rounded-xl px-5 py-4 shadow-[0_25px_70px_rgba(32,47,0,0.14)] backdrop-blur-lg">
                      <div className="absolute top-4 left-4">
                        <div className="w-8 h-8 rounded-lg bg-[#F8FAF2] flex items-center justify-center" style={{ color: '#4A6200' }}>
                          <Icon.Layout className="w-5 h-5" />
                        </div>
                      </div>
                      <p className="text-base text-[#4E5534] leading-relaxed text-left pt-2 pl-10">
                        New ergonomic workflows that adapt to how you work, with spatial organization and intuitive controls that reduce cognitive load and improve focus.
                      </p>
                    </div>
                    <div className="relative bg-white/90 border border-white/80 rounded-xl px-5 py-4 shadow-[0_25px_70px_rgba(32,47,0,0.14)] backdrop-blur-lg">
                      <div className="absolute top-4 left-4">
                        <div className="w-8 h-8 rounded-lg bg-[#F8FAF2] flex items-center justify-center" style={{ color: '#4A6200' }}>
                          <Icon.Settings className="w-5 h-5" />
                        </div>
                      </div>
                      <p className="text-base text-[#4E5534] leading-relaxed text-left pt-2 pl-10">
                        Simplified IT operations by consolidating multiple security agents and web security products into the browser layer.
                      </p>
                    </div>
                    <div className="relative bg-white/90 border border-white/80 rounded-xl px-5 py-4 shadow-[0_25px_70px_rgba(32,47,0,0.14)] backdrop-blur-lg">
                      <div className="absolute top-4 left-4">
                        <div className="w-8 h-8 rounded-lg bg-[#F8FAF2] flex items-center justify-center" style={{ color: '#4A6200' }}>
                          <Icon.DollarSign className="w-5 h-5" />
                        </div>
                      </div>
                      <p className="text-base text-[#4E5534] leading-relaxed text-left pt-2 pl-10">
                        Potential to lower infrastructure and licensing pressure where browser-governed access replaces
                        some VPN, VDI, or parallel web-gateway patterns. Scope depends on workloads and procurement.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-16 max-w-5xl mx-auto">
                <h3 className="text-2xl font-bold text-center mb-4" style={{ color: COLORS.primary }}>
                  Why the browser belongs in the security conversation
                </h3>
                <p className="text-center text-[#4A5745] mb-8 max-w-2xl mx-auto leading-relaxed">
                  Third-party reporting continues to tie incidents to browser factors, phishing, and supply-chain paths.
                  Use these as directional context in your own risk reviews, not as vendor-specific promises.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {enterpriseBrowserMetrics.map((metric, idx) => {
                    const isLastOdd =
                      enterpriseBrowserMetrics.length % 2 === 1 &&
                      idx === enterpriseBrowserMetrics.length - 1;
                    return (
                      <div
                        key={idx}
                        className={[
                          'bg-white rounded-xl border border-[#4A5745]/10 shadow-sm p-6 flex flex-col',
                          isLastOdd ? 'md:col-span-2 md:max-w-md md:mx-auto' : '',
                        ]
                          .filter(Boolean)
                          .join(' ')}
                      >
                        <div className="text-3xl font-bold tracking-tight text-[#4A5745] mb-2 tabular-nums">
                          {metric.value}
                        </div>
                        <div className="text-sm font-semibold uppercase tracking-wide text-[#4A5745]/85 mb-1">
                          {metric.label}
                        </div>
                        <p className="text-sm text-[#4A5745]/90 leading-relaxed mb-3">{metric.insight}</p>
                        {metric.source && (
                          <a
                            href={metric.source.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-auto text-xs text-[#4A5745]/65 no-underline underline-offset-2 hover:text-[#66C2BE] hover:underline"
                          >
                            Source: {metric.source.label}
                          </a>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </Section>
            <Section 
              id="deployment-experience" 
              title="Deployment experience" 
              eyebrow="Implementation"
              kicker="What to expect when deploying Oasis in your organization"
              centered={false}
            >
              <p className="text-left mb-16 max-w-4xl mx-auto">
                Most teams pilot with a bounded user group, align IdP and DLP assumptions early, and expand policy
                coverage as confidence grows. Timelines depend on change management, app inventory, and regulatory context;
                plan proof points with your program office rather than assuming a fixed go-live window.
              </p>
              
              {/* Elegant Timeline Design */}
              <div className="mt-16 max-w-4xl mx-auto">
                <div className="space-y-16 relative">
                  {/* Vertical line connector */}
                  <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#4A6200]/20 via-[#4A6200]/30 to-transparent hidden md:block"></div>
                  
                  {/* Step 1 */}
                  <div className="relative flex items-start gap-8">
                    <div className="flex-shrink-0 relative z-10">
                      <div className="w-16 h-16 rounded-full border-2 border-[#4A6200] bg-white flex items-center justify-center">
                        <span className="text-[#4A6200] font-bold text-xl">1</span>
                  </div>
                    </div>
                    <div className="flex-1 pt-2">
                      <h3 className="text-2xl md:text-3xl font-bold text-[#313A00] mb-4 leading-tight">
                        Integrate with your existing identity infrastructure
                      </h3>
                      <p className="text-lg text-[#4A5745] leading-relaxed">
                      Oasis seamlessly connects with your current identity provider using industry-standard 
                        protocols including <abbr title="Security Assertion Markup Language" className="underline decoration-dotted cursor-help">SAML</abbr>, OAuth, and <abbr title="System for Cross-domain Identity Management" className="underline decoration-dotted cursor-help">SCIM</abbr> for user provisioning and authentication.
                    </p>
                  </div>
              </div>
              
                  {/* Step 2 */}
                  <div className="relative flex items-start gap-8">
                    <div className="flex-shrink-0 relative z-10">
                      <div className="w-16 h-16 rounded-full border-2 border-[#4A6200] bg-white flex items-center justify-center">
                        <span className="text-[#4A6200] font-bold text-xl">2</span>
                      </div>
                    </div>
                    <div className="flex-1 pt-2">
                      <h3 className="text-2xl md:text-3xl font-bold text-[#313A00] mb-4 leading-tight">
                        Distribute Oasis to your team
                      </h3>
                      <p className="text-lg text-[#4A5745] leading-relaxed">
                      Deploy through your existing device management platform (VMware Workspace ONE, Citrix Endpoint Management, 
                      etc.) or provide a secure download link for self-service installation. The process 
                      is straightforward: download, install, and start using.
                    </p>
                    </div>
                    </div>

                  {/* Step 3 */}
                  <div className="relative flex items-start gap-8">
                    <div className="flex-shrink-0 relative z-10">
                      <div className="w-16 h-16 rounded-full border-2 border-[#4A6200] bg-white flex items-center justify-center">
                        <span className="text-[#4A6200] font-bold text-xl">3</span>
                    </div>
                    </div>
                    <div className="flex-1 pt-2">
                      <h3 className="text-2xl md:text-3xl font-bold text-[#313A00] mb-4 leading-tight">
                        Users get up and running immediately
                      </h3>
                      <p className="text-lg text-[#4A5745] leading-relaxed">
                      Team members authenticate through your existing identity system and can instantly 
                      import their bookmarks, saved passwords, and browser preferences for a familiar experience.
                      </p>
                    </div>
                  </div>

                  {/* Step 4 */}
                  <div className="relative flex items-start gap-8">
                    <div className="flex-shrink-0 relative z-10">
                      <div className="w-16 h-16 rounded-full border-2 border-[#4A6200] bg-white flex items-center justify-center">
                        <span className="text-[#4A6200] font-bold text-xl">4</span>
                    </div>
                    </div>
                    <div className="flex-1 pt-2">
                      <h3 className="text-2xl md:text-3xl font-bold text-[#313A00] mb-4 leading-tight">
                        Gradually implement security policies
                      </h3>
                      <p className="text-lg text-[#4A5745] leading-relaxed">
                      Begin with a pilot group and specific applications to develop policies that match 
                      your workflows. As you gain experience, expand to additional teams and use cases 
                      to build comprehensive security coverage.
                    </p>
                    </div>
                    </div>
                    </div>
                    </div>
            </Section>
            <React.Fragment>
              <section
                id="user-experience"
                className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] scroll-mt-28 bg-white border-y border-[#4A5745]/10 py-12 md:py-16"
              >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                  <p className="tracking-wider mb-3 font-semibold text-base lg:text-lg capitalize" style={{ color: '#978455' }}>
                    AI, voice, and calm UX
                  </p>
                  <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ color: COLORS.primary }}>
                    User experience
                  </h2>
                  <p className="text-lg text-[#4A5745] max-w-3xl mx-auto leading-relaxed">
                    The same client experience as{' '}
                    <Link href="/products/oasis-browser" className="text-[#66C2BE] font-semibold no-underline hover:underline">
                      Oasis Browser
                    </Link>
                    —voice, assistant, confirmations, onboarding, import, and planned Amplifier feedback—ships in{' '}
                    <strong>Oasis Enterprise Browser</strong>. What follows are the live product mocks from the consumer
                    page; enterprise wraps them with policy, identity, and data controls.
                  </p>
                </div>
              </section>
              <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
                <OasisBrowserFeatureVisuals />
              </div>
            </React.Fragment>
            
            <Section 
              id="faqs" 
              title="FAQs" 
              eyebrow="Frequent Questions About Oasis"
              kicker="Comprehensive answers to technical and business questions"
              centered={true}
              right={
                <div className="relative bg-white/90 border border-white/80 rounded-[26px] px-6 py-8 shadow-[0_25px_70px_rgba(32,47,0,0.14)] backdrop-blur-lg">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-5">
                      <svg className="w-10 h-10 text-[#4A6200]" fill="currentColor" viewBox="0 0 24 24">
                        <rect x="3" y="3" width="7" height="7"/>
                        <rect x="14" y="3" width="7" height="7"/>
                        <rect x="14" y="14" width="7" height="7"/>
                        <rect x="3" y="14" width="7" height="7"/>
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-[#1F2D00] mb-3">Multi-View</h3>
                    <p className="text-base text-[#4E5534]">
                      Work with multiple applications simultaneously
                    </p>
                  </div>
                </div>
              }
            >
              <div className="space-y-4 text-left">
                <Accordion title="Will my existing web applications work with Oasis?">
                  <p>
                    Modern web apps that run in Chromium-class browsers are the primary fit. Always pilot critical apps
                    and extensions; behavior can differ from consumer Chrome based on policy and build.
                  </p>
                </Accordion>

                <Accordion title="How does Oasis handle legacy Internet Explorer–dependent applications?">
                  <p>
                    IE-era apps usually need a dedicated remediation path (virtualization, refactors, or vendor-supported
                    compatibility layers). Treat enterprise browser rollout as separate from legacy IE retirement planning.
                  </p>
                </Accordion>

                <Accordion title="Will Oasis slow down my applications?">
                  <p>
                    Expect broadly similar performance characteristics to other Chromium-based clients for the same
                    workload. Policy, inspection, and logging can add overhead; measure with your real apps during a pilot.
                  </p>
                </Accordion>

                <Accordion title="What is the relationship between Oasis and VDI or DaaS?">
                  <p>
                    VDI and DaaS still make sense for thick clients, full desktop control, or regulated workflows. For
                    roles that mostly live in SaaS, a governed browser session can reduce how often you default to hosted
                    desktops. Many programs use both: shrink the VDI footprint where the browser is sufficient, keep VDI
                    where it is not.
                  </p>
                </Accordion>

                <Accordion title="Does Oasis work with existing SSE or SASE architectures?">
                  <p>
                    Many customers run Oasis alongside SSE investments. The exact split (what enforces in the browser vs
                    the edge) is an architecture decision: validate routing, inspection, and logging with your network and
                    security teams rather than assuming one pattern replaces the other wholesale.
                  </p>
                </Accordion>

                <Accordion title="Is a VPN required when using Oasis?">
                  <p>
                    Oasis can coexist with VPN, ZTNA, or proxy setups from other vendors. Whether you still require VPN
                    for specific resources depends on your zero-trust design and application placement, not the browser
                    alone.
                  </p>
              </Accordion>

                <Accordion title="Can Oasis be deployed on personal or unmanaged devices?">
                  <p>
                    Managed enterprise browser sessions are often used so contractors and partners can reach sanctioned
                    SaaS from devices you do not own. Policies apply through the browser; combine with contracts and
                    identity lifecycle the way you would for any external access program.
                  </p>
              </Accordion>

                <Accordion title="How should we think about monitoring and user privacy?">
                  <p>
                    Logging and monitoring should follow your governance standards: minimize data collection, be explicit
                    about enterprise vs personal use where BYOD is in scope, and document retention. Product capabilities
                    vary by configuration; legal and HR should review employee communications.
                  </p>
              </Accordion>
                    </div>
            </Section>
            
            
            
            
            
            {/* Full-Width CTA Banner */}
            <section 
              id="getting-started-with-oasis" 
              className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] py-20 md:py-28 mb-0"
              style={{
                backgroundImage: `url(${getCloudinaryImageUrl('/images/desert-background-5.webp')})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}
            >
              {/* Overlay for text readability */}
              <div className="absolute inset-0 bg-white/90"></div>
              <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-6">
                  Next step: see Oasis with your stack
                </h2>
                <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto leading-relaxed font-bold" style={{ color: '#313A00' }}>
                  Walk through managed browser sessions, policy design, and how Oasis sits next to your IdP and DLP programs.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Link href="/schedule-demo" className="btn-primary inline-flex items-center justify-center px-10 py-4 text-lg font-bold no-underline hover:no-underline focus:no-underline">
                    Schedule a Demo
                  </Link>
                  <Link href="/contact" className="btn-secondary inline-flex items-center justify-center px-10 py-4 text-lg font-bold no-underline hover:no-underline focus:no-underline">
                    Get in Touch
                </Link>
              </div>
              </div>
            </section>
          </main>
        </div>


        <BackToTop />
        
        {/* Floating Table of Contents - Mobile menu style (matches nav dropdown) */}
        {showTocButton && (
          <div className="fixed right-6 bottom-24 z-50">
            <button
              onClick={() => setIsTocOpen(!isTocOpen)}
              type="button"
              className="btn-primary btn-icon-circle shadow-lg hover:shadow-xl transition-all duration-200"
              aria-label="Table of Contents"
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>

            {isTocOpen && (
              <div className="absolute right-0 bottom-full mb-4 w-72 sm:w-80 bg-white rounded-xl shadow-2xl border border-gray-200 p-5 max-h-[70vh] overflow-y-auto">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold" style={{ color: '#313A00' }}>Contents</h3>
                  <button
                    onClick={() => setIsTocOpen(false)}
                    className="rounded-full p-2 hover:bg-gray-100 transition-colors"
                    style={{ color: '#617500' }}
                    aria-label="Close"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                {/* CTA buttons - match mobile menu */}
                <div className="flex flex-col gap-2 mb-4">
                  <Link href="/schedule-demo" className="btn-primary w-full text-center py-2.5 px-6 no-underline hover:no-underline focus:no-underline rounded-[27.5px]" style={{ color: '#FFFFFF' }} onClick={() => setIsTocOpen(false)}>
                    Schedule Demo
                  </Link>
                  <Link href="/oasis-pricing" className="btn-secondary w-full text-center py-2.5 px-6 no-underline hover:no-underline focus:no-underline rounded-[27.5px]" onClick={() => setIsTocOpen(false)}>
                    Download
                  </Link>
                </div>

                {/* Product links */}
                <Link href="/products/oasis-browser" className="block py-2.5 text-[#617500] font-medium no-underline hover:no-underline" style={{ fontSize: '1rem' }} onClick={() => setIsTocOpen(false)}>Oasis Browser</Link>
                <Link href="/products/oasis-enterprise-browser" className="block py-2.5 text-[#617500] font-medium no-underline hover:no-underline" style={{ fontSize: '1rem' }} onClick={() => setIsTocOpen(false)}>Enterprise Browser</Link>
                <Link href="/products/web-application" className="block py-2.5 text-[#617500] font-medium no-underline hover:no-underline" style={{ fontSize: '1rem' }} onClick={() => setIsTocOpen(false)}>Web Application</Link>

                {/* Pricing */}
                <Link href="/oasis-pricing" className="block py-2.5 text-[#617500] font-medium no-underline hover:no-underline" style={{ fontSize: '1rem' }} onClick={() => setIsTocOpen(false)}>Oasis Pricing</Link>
                <Link href="/pricing" className="block py-2.5 text-[#617500] font-medium no-underline hover:no-underline" style={{ fontSize: '1rem' }} onClick={() => setIsTocOpen(false)}>Hubs Pricing</Link>

                {/* Learn */}
                <Link href="/blog" className="block py-2.5 text-[#617500] font-medium no-underline hover:no-underline" style={{ fontSize: '1rem' }} onClick={() => setIsTocOpen(false)}>Blog</Link>
                <Link href="/docs" className="block py-2.5 text-[#617500] font-medium no-underline hover:no-underline" style={{ fontSize: '1rem' }} onClick={() => setIsTocOpen(false)}>Docs</Link>
                <Link href="/community" className="block py-2.5 text-[#617500] font-medium no-underline hover:no-underline" style={{ fontSize: '1rem' }} onClick={() => setIsTocOpen(false)}>Community</Link>

                {/* Enterprise Browser Buyer Guide - highlighted card */}
                <Link href="/enterprise-buyer-guide" className="flex items-start gap-3 p-3 mt-2 mb-2 rounded-lg border border-[#66C2BE]/20 bg-gradient-to-r from-[#66C2BE]/5 to-[#8CB7D0]/5 hover:from-[#66C2BE]/10 hover:to-[#8CB7D0]/10 hover:border-[#66C2BE]/30 transition-all no-underline" onClick={() => setIsTocOpen(false)}>
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg overflow-hidden">
                    <img
                      src={getCloudinaryImageUrl("/assets/pexels-kamo11235-667838.jpg", { width: 48, height: 48, quality: 'auto:good' })}
                      alt="Enterprise Browser Buyer Guide"
                      className="w-full h-full object-cover"
                      width={48}
                      height={48}
                      loading="lazy"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-medium text-gray-900 no-underline">Enterprise Browser Buyer Guide</div>
                    <div className="text-xs mt-1" style={{ color: '#4A5745' }}>Comprehensive guide for enterprise decision makers</div>
                  </div>
                </Link>

                {/* On this page - section links */}
                <div className="pt-2 mt-2 border-t border-gray-200">
                  <div className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: '#374151' }}>On this page</div>
                  {structure.map((item) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      onClick={() => setIsTocOpen(false)}
                      className="block py-1.5 text-[#617500] font-medium no-underline hover:no-underline text-sm"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>

                {/* About */}
                <div className="pt-2 mt-2 border-t border-gray-200">
                  <Link href="/about" className="block py-2.5 text-[#617500] font-medium no-underline hover:no-underline" style={{ fontSize: '1rem' }} onClick={() => setIsTocOpen(false)}>About Kahana</Link>
                  <Link href="/support" className="block py-2.5 text-[#617500] font-medium no-underline hover:no-underline" style={{ fontSize: '1rem' }} onClick={() => setIsTocOpen(false)}>Support</Link>
                  <Link href="/careers" className="block py-2.5 text-[#617500] font-medium no-underline hover:no-underline" style={{ fontSize: '1rem' }} onClick={() => setIsTocOpen(false)}>Careers</Link>
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      <style jsx global>{`
        :root { color-scheme: light dark; }
        @media (prefers-color-scheme: dark) {
          body { background: #0b1526; color: #e5e7eb; }
          header, .toc nav { background: #fff ; border-color: #1f2a44 ; }
          a { color: #7dd3d3; }
          header h1 { color: #ffffff; }
        }
        
        /* Smooth scrolling */
        html { scroll-behavior: smooth; }
        
        /* Smooth fade-in animations for sections */
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        section {
          animation: fadeInUp 0.6s ease-out;
        }
        
        /* High contrast typography - Google Gemini/Perplexity style */
        .kb-typography {
          color: ${COLORS.primary} !important;
        }
        
        .kb-typography h2 { 
          font-size: 28px; 
          line-height: 1.3; 
          font-weight: 800; 
          margin-top: 0.25rem; 
          margin-bottom: 0.75rem;
          color: ${COLORS.primary} !important;
        }
        @media (min-width: 1024px) { 
          .kb-typography h2 { 
            font-size: 32px; 
          } 
        }
        .kb-typography h3 { 
          font-size: 22px; 
          line-height: 1.4; 
          font-weight: 700; 
          margin-top: 1.5rem; 
          margin-bottom: 0.75rem;
          color: ${COLORS.primary} !important;
        }
        .kb-typography h4 { 
          font-size: 20px; 
          line-height: 1.35; 
          font-weight: 600; 
          margin-top: 1rem; 
          margin-bottom: 0.5rem;
          color: ${COLORS.primary} !important;
        }
        .kb-typography p { 
          font-size: 18px; 
          line-height: 1.75; 
          margin-top: 0.5rem; 
          margin-bottom: 1rem;
          color: ${COLORS.primary} !important;
        }
        .kb-typography ul, .kb-typography ol { 
          margin-top: 0.5rem; 
          margin-bottom: 1rem; 
        }
        .kb-typography li { 
          margin: 0.5rem 0;
          font-size: 18px;
          line-height: 1.75;
          color: ${COLORS.primary} !important;
        }
        
        /* Override global link styles for enterprise buyer guide - exclude nav dropdown/mobile links and banner-discord-link (keep #617500) */
        a:not(.nav-button):not(.contact-sales-btn):not(.pricing-button):not(.btn-primary):not(.btn-secondary):not(.dropdown-link):not(.mobile-link):not(.banner-discord-link) {
          color: ${COLORS.primary} !important;
          text-decoration: none !important;
          transition: color 0.3s ease;
        }
        a:not(.nav-button):not(.contact-sales-btn):not(.pricing-button):not(.btn-primary):not(.btn-secondary):not(.dropdown-link):not(.mobile-link):not(.banner-discord-link):hover {
          color: ${COLORS.accent} !important;
          text-decoration: none !important;
        }
        
        a:focus, button:focus, select:focus { 
          outline: 2px solid ${COLORS.accent}; 
          outline-offset: 2px; 
        }
        
        /* Remove border/outline from links on hover and focus */
        [data-page="buyer-guide"] a:hover,
        [data-page="buyer-guide"] a:focus {
          outline: none !important;
          box-shadow: none !important;
          border: none !important;
        }
        
        /* Remove border/outline on nav logo hover and focus */
        .buyer-guide-layout .nav-content > a:first-child:hover,
        .buyer-guide-layout .nav-content > a:first-child:focus {
          outline: none !important;
          box-shadow: none !important;
          border: none !important;
        }
        
        /* Accordion styling - Google Gemini style */
        .accordion-container .accordion-button {
          background-color: #FFFFFF !important;
          color: #313A00 !important;
          font-weight: 600 !important;
          font-size: 18px !important;
          border: 1px solid #e5e7eb !important;
          border-radius: 8px !important;
          padding: 20px 24px !important;
          cursor: pointer !important;
          transition: all 0.3s ease !important;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05) !important;
        }
        
        .accordion-container .accordion-button:hover {
          background-color: #F8FAF2 !important;
          border-color: #4A6200 !important;
          box-shadow: 0 4px 12px rgba(74, 98, 0, 0.1) !important;
          transform: translateY(-1px);
        }
        
        .accordion-container .accordion-content {
          transition: all 0.3s ease !important;
        }
        
        /* Modern link styling */
        .prose a {
          color: ${COLORS.primary};
          text-decoration: none;
          transition: color 0.3s ease;
          font-weight: 500;
        }
        .prose a:hover {
          color: ${COLORS.accent};
          text-decoration: none;
        }
        
        /* Persona selector - centered and styled */
        div[role="tablist"] {
          display: flex;
          justify-content: center;
          gap: 0.5rem;
          margin-bottom: 2rem;
        }
        
        div[role="tablist"] button[role="tab"],
        button[role="tab"] {
          background-color: #FFFFFF !important;
          border: 1px solid #d1d5db !important;
          color: #4A6200 !important;
          font-weight: 500 !important;
          border-radius: 0.5rem !important;
          padding: 0.75rem 1.5rem !important;
          transition: all 0.3s ease !important;
        }
        button[role="tab"][aria-selected="true"],
        div[role="tablist"] button[role="tab"][aria-selected="true"] {
          background-color: #4A6200 !important;
          border-color: #4A6200 !important;
          color: #FFFFFF !important;
          font-weight: 600 !important;
          box-shadow: 0 2px 8px rgba(74, 98, 0, 0.2);
        }
        div[role="tablist"] button[role="tab"]:hover {
          background-color: #F8FAF2 !important;
          border-color: #4A6200 !important;
          transform: translateY(-1px);
        }
        
        /* Style details/summary elements in persona cards */
        details summary {
          color: #4A6200 !important;
          cursor: pointer;
          font-weight: 500;
          transition: color 0.3s ease;
        }
        details summary:hover {
          color: #3E5300 !important;
        }
        
        .callout-info { 
          background: #F8FAF2; 
          border-left: 4px solid #4A6200; 
          padding: 1rem 1.5rem;
          border-radius: 8px;
          margin: 1.5rem 0;
        }
        .callout-success { 
          background: #F8FAF2; 
          border-left: 4px solid #4A6200; 
          padding: 1rem 1.5rem;
          border-radius: 8px;
          margin: 1.5rem 0;
        }
        .callout-warning { 
          background: #F8FAF2; 
          border-left: 4px solid #978455; 
          padding: 1rem 1.5rem;
          border-radius: 8px;
          margin: 1.5rem 0;
        }
        .callout-error { 
          background: #F8FAF2; 
          border-left: 4px solid #313A00; 
          padding: 1rem 1.5rem;
          border-radius: 8px;
          margin: 1.5rem 0;
        }
        
        /* Smooth transitions for all interactive elements */
        button, a, .accordion-button {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
        }
        
        /* Table responsive styling */
        @media (max-width: 640px) {
          table { display: block; }
          thead { display: none; }
          tbody, tr, td { display: block; width: 100%; }
          tr { 
            margin-bottom: 12px; 
            border: 1px solid #e5e7eb; 
            border-radius: 8px; 
            overflow: hidden; 
            background: ${COLORS.bgCard}; 
          }
          td { border-bottom: 1px solid #eef2f7; }
          td:last-child { border-bottom: none; }
        }
      `}</style>
    </ErrorBoundary>
  );
}
