import React, { useEffect, useMemo, useRef, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import KeyPointsCard from '../components/KeyPointsCard';
import ErrorBoundary from '../components/ErrorBoundary';
import BrowserComparisonTable from '../components/BrowserComparisonTable';

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

function StickyHeader({ anchors }) {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
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
  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 30, background: COLORS.bgCard, borderBottom: '1px solid #e5e7eb', transform: hidden ? 'translateY(-100%)' : 'translateY(0)', transition: 'transform 220ms ease' }}>
      <div style={{ maxWidth: MAX_WIDTH, margin: '0 auto', padding: '12px 16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Link href="/" legacyBehavior>
          <a style={{ display: 'inline-flex', alignItems: 'center', textDecoration: 'none' }}>
            <span style={{ width: 28, height: 28, borderRadius: 6, background: COLORS.brand700, display: 'inline-block', marginRight: 10 }} />
            <span style={{ color: COLORS.primary, fontWeight: 700 }}>Kahana</span>
          </a>
        </Link>
        <nav className="hide-on-mobile" role="navigation" aria-label="Primary" style={{ display: 'none' }}>
          {/* populated by CSS at larger widths */}
        </nav>
        <button onClick={() => setOpen(v => !v)} aria-label="Toggle Menu" className="mobile-menu-btn" style={{ appearance: 'none', background: 'transparent', border: 'none', cursor: 'pointer' }}>
          <span style={{ width: 24, height: 2, background: COLORS.primary, display: 'block', marginBottom: 5 }} />
          <span style={{ width: 24, height: 2, background: COLORS.primary, display: 'block', marginBottom: 5 }} />
          <span style={{ width: 24, height: 2, background: COLORS.primary, display: 'block' }} />
        </button>
      </div>
      {open && (
        <div className="mobile-menu" style={{ borderTop: '1px solid #e5e7eb', background: COLORS.bgCard }}>
          <div style={{ maxWidth: MAX_WIDTH, margin: '0 auto', padding: '8px 16px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
            {anchors.map(a => (
              <a key={a.href} href={a.href} onClick={() => setOpen(false)} style={{ color: '#617500', textDecoration: 'none', padding: '8px 6px', borderRadius: 6, display: 'block' }}>
                {a.label}
              </a>
            ))}
          </div>
        </div>
      )}
      <style jsx>{`
        @media (min-width: 1024px) {
          .hide-on-mobile { display: block; }
          .mobile-menu-btn { display: none; }
        }
      `}</style>
      <style jsx>{`
        @media (min-width: 1024px) {
          header nav { display: block; }
          header nav a { color: #617500 !important; text-decoration: none !important; margin-left: 16px; font-size: 14px; }
          header nav a:hover, header nav a:focus { color: #4A5F00 !important; text-decoration: none !important; outline: 2px solid transparent; outline-offset: 2px; }
        }
      `}</style>
      <div className="desktop-nav" style={{ display: 'none' }} role="navigation" aria-label="Section anchors">
        <div style={{ maxWidth: MAX_WIDTH, margin: '0 auto', padding: '0 16px 12px 16px', display: 'flex', justifyContent: 'flex-end', gap: 16 }}>
          {anchors.map(a => (
            <a key={a.href} href={a.href} style={{ color: '#617500', textDecoration: 'none', fontSize: 14 }}>
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
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);
  const [activeFeatureTab, setActiveFeatureTab] = useState('security');
  const [showTocButton, setShowTocButton] = useState(false);
  const [isTocOpen, setIsTocOpen] = useState(false);
  
  // Media carousel items for User Experience section
  const mediaItems = [
    {
      type: 'image',
      src: '/images/in-action.png',
      alt: 'Oasis Interface - Designed Like an Oasis',
      title: 'Designed Like an Oasis',
      description: 'A soothing environment that fosters deep work, flow state, and concentration'
    },
    {
      type: 'image',
      src: '/images/ai.png',
      alt: 'Voice-Controlled AI Workflows',
      title: 'Voice-Controlled AI Workflows',
      description: 'Natural language commands for complex browser operations'
    },
    {
      type: 'image',
      src: '/images/spatial.png',
      alt: 'Spatial Organization',
      title: 'Spatial Ease',
      description: 'Intuitive organization that matches your natural cognitive processes'
    },
    {
      type: 'image',
      src: '/images/WIP.png',
      alt: 'Oasis Demo',
      title: 'See Oasis in Action',
      description: 'Experience the seamless integration of AI and enterprise security'
    }
  ];
  
  const nextMedia = () => {
    setCurrentMediaIndex((prev) => (prev + 1) % mediaItems.length);
  };
  
  const prevMedia = () => {
    setCurrentMediaIndex((prev) => (prev - 1 + mediaItems.length) % mediaItems.length);
  };
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMediaIndex((prev) => (prev + 1) % mediaItems.length);
    }, 5000); // Auto-advance every 5 seconds
    return () => clearInterval(interval);
  }, [mediaItems.length]);
  
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
    { id: 'what-is-oasis', label: 'What is Oasis?' },
    { id: 'benefits-of-oasis', label: 'Benefits of Oasis' },
    { id: 'similar-browser-vendors', label: 'Similar browser vendors' },
    { id: 'deployment-experience', label: 'Deployment experience' },
    { id: 'user-experience', label: 'User Experience' },
    { id: 'faqs', label: 'FAQs' },
  ];

  const anchors = useMemo(() => structure.flatMap(s => [
    { href: `#${s.id}`, label: s.label },
    ...(s.children ? s.children.map(c => ({ href: `#${c.id}`, label: `— ${c.label}` })) : []),
  ]), [structure]);

  const sectionIds = useMemo(() => structure.flatMap(s => [s.id, ...(s.children ? s.children.map(c => c.id) : [])]), [structure]);
  const activeId = useScrollSpy(sectionIds);

  const comparisonRows = [
    { Feature: 'SSO (SAML/OIDC)', Oasis: 'Built-in, policy-driven', Legacy: 'Add-on, inconsistent' },
    { Feature: 'DLP Controls', Oasis: 'Browser-native', Legacy: 'Endpoint/network only' },
    { Feature: 'Audit Logging', Oasis: 'Granular, exportable', Legacy: 'Limited scope' },
  ];

  return (
    <ErrorBoundary>
      <Head>
        <title>Enterprise Buyer Guide | Kahana</title>
        <meta name="description" content="Complete enterprise buyer guide for choosing and implementing the right enterprise browser solution for your organization." />
        <meta name="keywords" content="enterprise browser buyer guide, enterprise browser selection, Oasis Enterprise Browser, enterprise browser comparison" />
        <meta property="og:title" content="Enterprise Buyer Guide | Kahana" />
        <meta property="og:description" content="Complete enterprise buyer guide for choosing and implementing the right enterprise browser solution for your organization." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Enterprise Buyer Guide | Kahana" />
        <meta name="twitter:description" content="Complete enterprise buyer guide for choosing and implementing the right enterprise browser solution for your organization." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div style={{ background: '#FFFFFF', color: COLORS.primary, minHeight: '100vh' }}>
        <div className="min-h-screen" style={{ background: '#FFFFFF' }}>
          <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Hero Introduction Section - Perplexity/Gemini Hybrid Style */}
            <section 
              id="introduction" 
              className="relative w-full py-32 md:py-48 lg:py-56 overflow-hidden"
              style={{
                backgroundImage: 'url(/images/desert-background-5.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}
            >
              {/* Darker gradient overlay for Perplexity-style contrast */}
              <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/80 to-white"></div>
              
              <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
                <div className="tracking-wider mb-4 font-semibold text-base lg:text-lg capitalize" style={{ color: '#978455' }}>
                  Welcome to Oasis
                </div>
                <h1 
                  className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold mb-8 leading-[1.1] tracking-tight text-black"
                >
                  The Future of <br className="hidden md:block" />
                    Enterprise Browsing
                </h1>
                <p className="text-xl md:text-2xl lg:text-3xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-medium mb-10">
                  Combine enterprise-grade security with AI-powered intelligence in one seamless, spatial experience.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
                  <Link href="#what-is-oasis" className="btn-primary inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-full shadow-lg shadow-[#4A6200]/20 transition-transform hover:scale-105 no-underline hover:no-underline focus:no-underline">
                    Explore Features
                  </Link>
                </div>
                
                {/* Oasis Browser Preview Card */}
                <div className="mt-16 rounded-2xl overflow-hidden shadow-2xl border border-gray-200 max-w-5xl mx-auto transform transition-all hover:shadow-3xl duration-500">
                   <img 
                     src="/images/21a37c6a0cca7d51dd3260b4f0996bdebb758608.png" 
                     alt="Oasis Browser Interface - Welcome to Oasis" 
                     className="w-full h-auto object-contain"
                     loading="eager"
                   />
                </div>
              </div>
            </section>
            
            {/* Introduction Content Section */}
            <section 
              id="introduction-content" 
              className="py-4 md:py-6 px-4 lg:px-10 scroll-mt-28"
            >
              <div className="max-w-5xl mx-auto">
              <p className="text-lg md:text-xl leading-relaxed mb-4 text-center">
                The definition of a "browser" has fundamentally changed in recent years. What was once 
                simply a tool for viewing web pages has evolved into something far more powerful and 
                intelligent. This transformation has been driven by two major innovations: enterprise 
                browsers like Island's security-focused platform, and AI browsers such as Perplexity's 
                Comet, OpenAI's Atlas, GenSpark, and Dia that integrate artificial intelligence directly 
                into the browsing experience.
              </p>
              <p className="text-lg md:text-xl leading-relaxed mb-4 text-center">
                Oasis represents the convergence of these two revolutionary approaches. It is both an 
                enterprise browser and an AI browser, combining the security and control that modern 
                organizations demand with the intelligence and automation that users expect from next-generation 
                software. Available in both Firefox and Chromium versions, Oasis offers different suites 
                of benefits tailored to your organization's specific needs and preferences. This dual nature 
                makes Oasis uniquely positioned to address the complex challenges of today's digital workplace.
              </p>
              <p className="text-lg md:text-xl leading-relaxed text-center">
                In this guide, we'll break down what makes Oasis so special. We'll explore how it 
                redefines enterprise security, how its AI capabilities transform productivity, and why 
                it represents the future of how we interact with the web. Whether you're evaluating 
                enterprise browser solutions or looking to understand the next evolution of web technology, 
                this guide will provide the insights you need to make informed decisions.
              </p>
              </div>
            </section>
            {/* Tools for any role */}
            <Section
              id="personas"
              title="Tools for any role"
              kicker="Core Oasis commands that adapt to your workflow"
              centered={true}
            >
              <p className="text-lg text-[#4A5745] mb-8 max-w-3xl mx-auto text-center">
                Oasis core commands like "open new tab", "organize windows", and "group tabs" can be customized 
                and adapted to serve any role. The same powerful tools work for everyone—just configured differently.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 max-w-6xl mx-auto">
                {/* Core Commands */}
                <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 flex flex-col hover:shadow-xl transition-all">
                  <div className="flex justify-start mb-4">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-indigo-200 to-indigo-300 flex items-center justify-center">
                      <Icon.Settings className="w-10 h-10" style={{ color: '#4A6200' }} />
                    </div>
                  </div>
                  <h4 className="text-xl font-bold text-left mb-4" style={{ color: '#313A00' }}>Core Commands</h4>
                  <div className="space-y-2 mb-6 flex-grow">
                    <div className="text-sm text-gray-700 text-left">
                      "Open new tab"
                    </div>
                    <div className="text-sm text-gray-700 text-left">
                      "Organize windows"
                    </div>
                    <div className="text-sm text-gray-700 text-left">
                      "Open tab 1 and tab 2 splitview"
                    </div>
                    <div className="text-sm text-gray-700 text-left">
                      "Group all my tabs"
                    </div>
                    <div className="text-sm text-gray-700 text-left">
                      "Find XYZ tab from my groups and show it"
                    </div>
                  </div>
                </div>

                {/* Sales */}
                <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 flex flex-col hover:shadow-xl transition-all">
                  <div className="flex justify-start mb-4">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-pink-200 to-pink-300 flex items-center justify-center">
                      <Icon.DollarSign className="w-10 h-10" style={{ color: '#4A6200' }} />
                    </div>
                  </div>
                  <h4 className="text-xl font-bold text-left mb-4" style={{ color: '#313A00' }}>Sales</h4>
                  <div className="text-sm text-gray-700 mb-4 text-left">
                    Pull up Google Sheet with prospects and Perplexity to write outreach sequences
                  </div>
                  <div className="space-y-2 mb-6 flex-grow">
                    <div className="text-sm text-gray-700 text-left">
                      Open prospect list and AI assistant side by side
                    </div>
                    <div className="text-sm text-gray-700 text-left">
                      Group all outreach tools in one workspace
                    </div>
                    <div className="text-sm text-gray-700 text-left">
                      Quickly find and switch between prospect tabs
                    </div>
                  </div>
                </div>

                {/* Marketing */}
                <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 flex flex-col hover:shadow-xl transition-all">
                  <div className="flex justify-start mb-4">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-200 to-blue-300 flex items-center justify-center">
                      <Icon.Rocket className="w-10 h-10" style={{ color: '#4A6200' }} />
                    </div>
                  </div>
                  <h4 className="text-xl font-bold text-left mb-4" style={{ color: '#313A00' }}>Marketing</h4>
                  <div className="text-sm text-gray-700 mb-4 text-left">
                    Pull up Google Ads campaign and Meta Ads campaign side by side
                  </div>
                  <div className="space-y-2 mb-6 flex-grow">
                    <div className="text-sm text-gray-700 text-left">
                      Compare campaign performance in split view
                    </div>
                    <div className="text-sm text-gray-700 text-left">
                      Group all ad platform tabs together
                    </div>
                    <div className="text-sm text-gray-700 text-left">
                      Organize analytics and creative tools
                    </div>
                  </div>
                </div>

                {/* Research & Analysis */}
                <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 flex flex-col hover:shadow-xl transition-all">
                  <div className="flex justify-start mb-4">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-200 to-purple-300 flex items-center justify-center">
                      <Icon.FileText className="w-10 h-10" style={{ color: '#4A6200' }} />
                    </div>
                  </div>
                  <h4 className="text-xl font-bold text-left mb-4" style={{ color: '#313A00' }}>Research & Analysis</h4>
                  <div className="text-sm text-gray-700 mb-4 text-left">
                    Open research sources, data sheets, and analysis tools in organized groups
                  </div>
                  <div className="space-y-2 mb-6 flex-grow">
                    <div className="text-sm text-gray-700 text-left">
                      Split view for comparing multiple sources
                    </div>
                    <div className="text-sm text-gray-700 text-left">
                      Group related research tabs by topic
                    </div>
                    <div className="text-sm text-gray-700 text-left">
                      Quickly find specific research documents
                    </div>
                  </div>
                </div>

                {/* Development */}
                <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 flex flex-col hover:shadow-xl transition-all">
                  <div className="flex justify-start mb-4">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-green-200 to-green-300 flex items-center justify-center">
                      <Icon.Layers className="w-10 h-10" style={{ color: '#4A6200' }} />
                    </div>
                  </div>
                  <h4 className="text-xl font-bold text-left mb-4" style={{ color: '#313A00' }}>Development</h4>
                  <div className="text-sm text-gray-700 mb-4 text-left">
                    Organize documentation, code repos, and testing tools in dedicated workspaces
                  </div>
                  <div className="space-y-2 mb-6 flex-grow">
                    <div className="text-sm text-gray-700 text-left">
                      Split view for code and documentation
                    </div>
                    <div className="text-sm text-gray-700 text-left">
                      Group tabs by project or feature
                    </div>
                    <div className="text-sm text-gray-700 text-left">
                      Quickly switch between development tools
                    </div>
                  </div>
                </div>

                {/* Custom Workflow */}
                <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 flex flex-col hover:shadow-xl transition-all">
                  <div className="flex justify-start mb-4">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-amber-200 to-amber-300 flex items-center justify-center">
                      <Icon.Sliders className="w-10 h-10" style={{ color: '#4A6200' }} />
                    </div>
                  </div>
                  <h4 className="text-xl font-bold text-left mb-4" style={{ color: '#313A00' }}>Your Workflow</h4>
                  <div className="text-sm text-gray-700 mb-6 flex-grow text-left">
                    Adapt these core commands to match your unique workflow. Configure Oasis to work exactly how you need it—whether you're in sales, marketing, research, development, or any other role.
                  </div>
                </div>
              </div>
            </Section>
            <Section 
              id="what-is-oasis" 
              title="What is Oasis?" 
              eyebrow="Product Overview"
              kicker="Understanding Oasis as both enterprise and AI browser"
              centered={true}
            >
              <p className="text-lg mb-12 max-w-3xl mx-auto text-[#4A5745]">
                Oasis represents the convergence of enterprise browser security and AI-powered intelligence. 
                It combines the security and control that modern organizations demand with the intelligence 
                and automation that users expect from next-generation software.
              </p>
              
              {/* Redesigned Product Cards with Images */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-16">
                {/* Free Agentic Browser Card */}
                <Link href="/products/free-agentic-browser" className="group block">
                  <div className="relative overflow-hidden rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 h-full">
                    {/* Image Section */}
                    <div className="relative h-64 overflow-hidden bg-gradient-to-br from-[#F8FAF2] to-[#F2F6E8]">
                      <img 
                        src="/images/welcom.jpeg" 
                        alt="Free Agentic Browser Interface" 
                        className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#F8FAF2]/80 to-transparent"></div>
                  </div>
                    {/* Content Section */}
                    <div className="p-8 bg-[#F8FAF2]">
                      <h3 className="text-2xl font-bold text-center mb-4" style={{ color: '#4A6200' }}>
                      Free Agentic Browser
                    </h3>
                      <p className="text-center text-[#4A5745] mb-4">
                      Designed for personal productivity with AI-powered assistance and smart organization tools.
                    </p>
                </div>
                  </div>
                </Link>
                
                {/* Enterprise Browser Card */}
                <Link href="/products/enterprise-browser" className="group block">
                  <div className="relative overflow-hidden rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 h-full">
                    {/* Image Section */}
                    <div className="relative h-64 overflow-hidden bg-gradient-to-br from-[#F8FAF2] to-[#F2F6E8]">
                      <img 
                        src="/images/enterprise.jpeg" 
                        alt="Enterprise Browser Interface" 
                        className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#F8FAF2]/80 to-transparent"></div>
                  </div>
                    {/* Content Section */}
                    <div className="p-8 bg-[#F8FAF2]">
                      <h3 className="text-2xl font-bold text-center mb-4" style={{ color: '#4A6200' }}>
                      Enterprise Browser
                    </h3>
                      <p className="text-center text-[#4A5745] mb-4">
                      Built for enterprise environments with enhanced security, compliance, and collaboration features.
                    </p>
                </div>
              </div>
                </Link>
                    </div>

              {/* Interactive Feature Cards with Hover Reveal */}
              <div className="grid grid-cols-1 gap-6 max-w-6xl mx-auto mt-16">
                {/* Feature Card 1: Designed for How Your Mind Works */}
                <div className="group relative overflow-hidden rounded-2xl bg-white border-2 border-gray-200 hover:border-[#4A6200] transition-all duration-500 cursor-pointer">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#4A6200]/0 via-[#4A6200]/0 to-[#4A6200]/0 group-hover:from-[#4A6200]/5 group-hover:via-[#4A6200]/3 group-hover:to-[#4A6200]/5 transition-all duration-500"></div>
                  <div className="relative p-8 md:p-10">
                    <div className="flex flex-col lg:flex-row gap-8 items-start">
                      <div className="w-full lg:w-1/2 lg:pr-8">
                        <h3 className="text-2xl md:text-3xl font-bold mb-6 text-left group-hover:text-[#4A6200] transition-colors duration-300" style={{ color: '#313A00' }}>
                          Designed for How Your Mind Works
                        </h3>
                        <div className="space-y-4 text-left">
                          <p className="text-lg text-[#4A5745] leading-relaxed">
                    Unlike other AI browsers that create more complexity with multiple agents and tabs, Oasis 
                    is designed to fit the way your mind naturally works. We pay attention to the "little things" 
                    that matter in your spatial workspace.
                  </p>
                          <p className="text-lg text-[#4A5745] leading-relaxed opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-96 transition-all duration-500 overflow-hidden">
                    While other solutions create multiple agents that require constant clicking between different 
                    interfaces, Oasis lets you view all agents in one unified page, eliminating the tab chaos 
                    that plagues traditional AI browsers.
                  </p>
                    </div>
                  </div>
                      <div className="w-full lg:w-1/2 relative">
                        <div className="relative rounded-xl overflow-hidden shadow-lg group-hover:shadow-2xl transition-all duration-500">
                          <div className="aspect-video bg-gray-100 overflow-hidden">
                            <img 
                              src="/images/customs.png" 
                              alt="Designed for How Your Mind Works" 
                              className="w-full h-full object-cover transform scale-100 group-hover:scale-110 transition-transform duration-700"
                            />
                    </div>
                          <div className="absolute inset-0 bg-gradient-to-t from-black/0 group-hover:from-black/20 to-transparent transition-all duration-500"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Feature Card 2: Deep AI Integration */}
                <div className="group relative overflow-hidden rounded-2xl bg-white border-2 border-gray-200 hover:border-[#4A6200] transition-all duration-500 cursor-pointer">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#4A6200]/0 via-[#4A6200]/0 to-[#4A6200]/0 group-hover:from-[#4A6200]/5 group-hover:via-[#4A6200]/3 group-hover:to-[#4A6200]/5 transition-all duration-500"></div>
                  <div className="relative p-8 md:p-10">
                    <div className="flex flex-col lg:flex-row-reverse gap-8 items-start">
                      <div className="w-full lg:w-1/2 lg:pl-8">
                        <h3 className="text-2xl md:text-3xl font-bold mb-6 text-left group-hover:text-[#4A6200] transition-colors duration-300" style={{ color: '#313A00' }}>
                          Deep AI Integration
                        </h3>
                        <div className="space-y-4 text-left">
                          <p className="text-lg text-[#4A5745] leading-relaxed">
                    AI commands are deeply rooted into the core of the browser, not bolted on as an afterthought. 
                    You can control everything from opening new windows to saving all tabs into organized hubs, 
                    extracting insights from research collections, all through natural language prompts or voice commands.
                  </p>
                          <p className="text-lg text-[#4A5745] leading-relaxed opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-96 transition-all duration-500 overflow-hidden">
                    This seamless integration reduces friction and makes AI truly useful rather than just a novelty. 
                    The AI understands context, learns from your usage patterns, and adapts to your workflow.
                  </p>
                </div>
                </div>
                      <div className="w-full lg:w-1/2 relative">
                        <div className="relative rounded-xl overflow-hidden shadow-lg group-hover:shadow-2xl transition-all duration-500">
                          <div className="aspect-video bg-gray-100 overflow-hidden">
                            <img 
                              src="/images/ai-2.png" 
                              alt="Deep AI Integration" 
                              className="w-full h-full object-cover transform scale-100 group-hover:scale-110 transition-transform duration-700"
                            />
                          </div>
                          <div className="absolute inset-0 bg-gradient-to-t from-black/0 group-hover:from-black/20 to-transparent transition-all duration-500"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Feature Card 3: Trainable AI Companion & Security-First Design */}
                <div className="group relative overflow-hidden rounded-2xl bg-white border-2 border-gray-200 hover:border-[#4A6200] transition-all duration-500 cursor-pointer">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#4A6200]/0 via-[#4A6200]/0 to-[#4A6200]/0 group-hover:from-[#4A6200]/5 group-hover:via-[#4A6200]/3 group-hover:to-[#4A6200]/5 transition-all duration-500"></div>
                  <div className="relative p-8 md:p-10">
                    <div className="flex flex-col lg:flex-row gap-8 items-start">
                      <div className="w-full lg:w-1/2 lg:pr-8">
                        <h3 className="text-2xl md:text-3xl font-bold mb-6 text-left group-hover:text-[#4A6200] transition-colors duration-300" style={{ color: '#313A00' }}>
                          Trainable AI Companion & Security-First Design
                        </h3>
                        <div className="space-y-4 text-left">
                          <p className="text-lg text-[#4A5745] leading-relaxed">
                    One of the biggest issues with AI browsers like Perplexity's Comet is that they're slow, 
                    you can't monitor agents simultaneously, and commands often don't work as expected. Oasis 
                    includes training and gamification elements that let you fine-tune your own AI assistant, 
                    making it faster and more accurate for your specific needs.
                  </p>
                          <p className="text-lg text-[#4A5745] leading-relaxed opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-96 transition-all duration-500 overflow-hidden">
                    You maintain control over your AI's learning and behavior. Additionally, maintaining security 
                    within an AI browser presents unique challenges that we specialize in solving. 
                            <Link href="/security-guide" className="text-[#4A6200] hover:text-[#3E5300] ml-1 font-semibold underline" style={{ textDecoration: 'none' }}>Learn more about our security approach</Link>.
                          </p>
                        </div>
                      </div>
                      <div className="w-full lg:w-1/2 relative">
                        <div className="relative rounded-xl overflow-hidden shadow-lg group-hover:shadow-2xl transition-all duration-500">
                          <div className="aspect-video bg-gray-100 overflow-hidden">
                            <img 
                              src="/images/trainable.png" 
                              alt="Trainable AI Companion & Security-First Design" 
                              className="w-full h-full object-cover transform scale-100 group-hover:scale-110 transition-transform duration-700"
                            />
                          </div>
                          <div className="absolute inset-0 bg-gradient-to-t from-black/0 group-hover:from-black/20 to-transparent transition-all duration-500"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
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
                        <span className="text-base text-[#4A6200]">Works with Okta, Azure AD, Ping</span>
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
                Enterprise browsers provide stronger security, more control, and better visibility than consumer browsers, 
                while also improving user productivity and reducing IT complexity.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                <div className="relative bg-white/90 border border-white/80 rounded-xl px-5 py-4 shadow-[0_25px_70px_rgba(32,47,0,0.14)] backdrop-blur-lg">
                  <div className="text-xs font-semibold text-[#4A6200] mb-2 uppercase tracking-wide">Security</div>
                  <p className="text-base text-[#4E5534] leading-relaxed text-left">
                    Enhanced data protection and DLP (controls on copy/paste, download, printing, screenshots, watermarking).
                  </p>
                </div>
                <div className="relative bg-white/90 border border-white/80 rounded-xl px-5 py-4 shadow-[0_25px_70px_rgba(32,47,0,0.14)] backdrop-blur-lg">
                  <div className="text-xs font-semibold text-[#4A6200] mb-2 uppercase tracking-wide">Security</div>
                  <p className="text-base text-[#4E5534] leading-relaxed text-left">
                    Built‑in threat detection and prevention for phishing, malware, risky sites, and malicious downloads.
                  </p>
                </div>
                <div className="relative bg-white/90 border border-white/80 rounded-xl px-5 py-4 shadow-[0_25px_70px_rgba(32,47,0,0.14)] backdrop-blur-lg">
                  <div className="text-xs font-semibold text-[#4A6200] mb-2 uppercase tracking-wide">Security</div>
                  <p className="text-base text-[#4E5534] leading-relaxed text-left">
                    Zero trust access to SaaS and internal web apps directly from the browser, often replacing or reducing VPN and VDI.
                  </p>
                </div>
                <div className="relative bg-white/90 border border-white/80 rounded-xl px-5 py-4 shadow-[0_25px_70px_rgba(32,47,0,0.14)] backdrop-blur-lg">
                  <div className="text-xs font-semibold text-[#4A6200] mb-2 uppercase tracking-wide">Productivity</div>
                  <p className="text-base text-[#4E5534] leading-relaxed text-left">
                    Improved user experience with familiar browser workflows but stronger built‑in security, avoiding latency from isolation or heavy VDI.
                  </p>
                </div>
                <div className="relative bg-white/90 border border-white/80 rounded-xl px-5 py-4 shadow-[0_25px_70px_rgba(32,47,0,0.14)] backdrop-blur-lg">
                  <div className="text-xs font-semibold text-[#4A6200] mb-2 uppercase tracking-wide">Productivity</div>
                  <p className="text-base text-[#4E5534] leading-relaxed text-left">
                    Simplified IT operations by consolidating multiple security agents and web security products into the browser layer.
                  </p>
                </div>
                <div className="relative bg-white/90 border border-white/80 rounded-xl px-5 py-4 shadow-[0_25px_70px_rgba(32,47,0,0.14)] backdrop-blur-lg">
                  <div className="text-xs font-semibold text-[#4A6200] mb-2 uppercase tracking-wide">Productivity</div>
                  <p className="text-base text-[#4E5534] leading-relaxed text-left">
                    Lower infrastructure and licensing costs by reducing reliance on legacy VPN, VDI, and separate web gateways.
                  </p>
                </div>
              </div>
              
              {/* Streamlined Tabbed Feature Interface */}
              <div className="mt-12 max-w-5xl mx-auto">
                {/* Tab Navigation */}
                <div className="flex flex-wrap justify-center gap-3 mb-8 border-b border-gray-200 pb-4">
                  <button
                    onClick={() => setActiveFeatureTab('security')}
                    className={`px-6 py-3 text-base font-semibold rounded-full transition-all duration-300 ${
                      activeFeatureTab === 'security' 
                        ? 'btn-primary' 
                        : 'btn-secondary'
                    }`}
                  >
                    Security & Protection
                  </button>
                  <button
                    onClick={() => setActiveFeatureTab('productivity')}
                    className={`px-6 py-3 text-base font-semibold rounded-full transition-all duration-300 ${
                      activeFeatureTab === 'productivity' 
                        ? 'btn-primary' 
                        : 'btn-secondary'
                    }`}
                  >
                    Productivity & Performance
                  </button>
                  <button
                    onClick={() => setActiveFeatureTab('management')}
                    className={`px-6 py-3 text-base font-semibold rounded-full transition-all duration-300 ${
                      activeFeatureTab === 'management' 
                        ? 'btn-primary' 
                        : 'btn-secondary'
                    }`}
                  >
                    Management & Analytics
                  </button>
                </div>

                {/* Tab Content */}
                <div className="min-h-[400px]">
                  {activeFeatureTab === 'security' && (
                    <div className="space-y-6 animate-fadeIn">
                      <div className="bg-gradient-to-br from-white to-[#F8FAF2] rounded-2xl overflow-hidden border border-gray-200 shadow-lg">
                        <div className="flex flex-col lg:flex-row">
                          <div className="lg:w-1/2 p-8">
                            <h3 className="text-2xl font-bold mb-4" style={{ color: '#313A00' }}>Zero Trust Security</h3>
                            <p className="text-lg text-[#4A5745] leading-relaxed text-left">
                              An enterprise browser can be used to implement a zero trust security framework across a 
                              wide range of deployment scenarios. User identity is verified with IdP integration and 
                              multi-factor authentication. Device posture is checked to verify the device meets security 
                              standards. Network and geolocation are examined to see where the request is coming from.
                            </p>
                          </div>
                          <div className="lg:w-1/2 relative min-h-[200px] lg:min-h-0 overflow-hidden">
                            <img 
                              src="/images/securtiy.png" 
                              alt="Zero Trust Security" 
                              className="w-full h-full object-cover scale-100"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="bg-gradient-to-br from-white to-[#F8FAF2] rounded-2xl overflow-hidden border border-gray-200 shadow-lg">
                        <div className="flex flex-col lg:flex-row-reverse">
                          <div className="lg:w-1/2 p-8">
                            <h3 className="text-2xl font-bold mb-4" style={{ color: '#313A00' }}>Safe Browsing & Threat Protection</h3>
                            <p className="text-lg text-[#4A5745] leading-relaxed text-left">
                              An enterprise browser comes embedded with powerful security tools that protect all browser 
                              activity from the myriad of web-born threats, regardless of device or network. Malware is 
                              detected and blocked before ever reaching the endpoint. Phishing attacks are stopped before 
                              credentials are compromised. Unsafe or inappropriate sites are blocked from access.
                            </p>
                          </div>
                          <div className="lg:w-1/2 relative min-h-[200px] lg:min-h-0 overflow-hidden">
                            <img 
                              src="/images/data-protection .png" 
                              alt="Safe Browsing & Threat Protection" 
                              className="w-full h-full object-cover scale-100"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="bg-gradient-to-br from-white to-[#F8FAF2] rounded-2xl overflow-hidden border border-gray-200 shadow-lg">
                        <div className="flex flex-col lg:flex-row">
                          <div className="lg:w-1/2 p-8">
                            <h3 className="text-2xl font-bold mb-4" style={{ color: '#313A00' }}>Data Protection & DLP</h3>
                            <p className="text-lg text-[#4A5745] leading-relaxed text-left">
                              An enterprise browser builds dynamic data protections into the browser itself, A
                    enabling you to build policies that prevent data leakage without disrupting organizational 
                    workflows. Its data loss prevention (DLP) controls protect sensitive data from being improperly downloaded or 
                    uploaded before it leaves or enters the browser.
                  </p>
                          </div>
                          <div className="lg:w-1/2 relative min-h-[200px] lg:min-h-0 overflow-hidden">
                            <img 
                              src="/images/data-protection-2.png" 
                              alt="Data Protection & DLP" 
                              className="w-full h-full object-cover scale-100"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="bg-gradient-to-br from-white to-[#F8FAF2] rounded-2xl overflow-hidden border border-gray-200 shadow-lg">
                        <div className="flex flex-col lg:flex-row">
                          <div className="lg:w-1/2 p-8 flex flex-col">
                            <h3 className="text-2xl font-bold mb-4" style={{ color: '#313A00' }}>Visibility & Monitoring</h3>
                            <p className="text-lg text-[#4A5745] mb-6 leading-relaxed text-left">
                    An enterprise browser offers unprecedented visibility into all browser activity in a way 
                    that simply wasn't possible before. Most legacy security tools offer visibility via network 
                    traffic inspection by decrypting SSL traffic. An enterprise browser offers visibility into 
                    browser behavior without any unnatural network traffic manipulation.
                  </p>
                          </div>
                          <div className="lg:w-1/2 relative min-h-[200px] lg:min-h-0 overflow-hidden">
                            <img 
                              src="/images/visibility.png" 
                              alt="Visibility & Monitoring" 
                              className="w-full h-full object-cover scale-100"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeFeatureTab === 'productivity' && (
                    <div className="space-y-6 animate-fadeIn">
                      <div className="bg-gradient-to-br from-white to-[#F8FAF2] rounded-2xl overflow-hidden border border-gray-200 shadow-lg">
                        <div className="flex flex-col lg:flex-row">
                          <div className="lg:w-1/2 p-8 flex flex-col">
                            <h3 className="text-2xl font-bold mb-4" style={{ color: '#313A00' }}>Productivity & Performance</h3>
                            <p className="text-lg text-[#4A5745] mb-6 leading-relaxed text-left">
                    Consumer browsers are optimized for personal convenience, advertising, consumer workflows 
                    like online shopping and social media. By contrast, an enterprise browser is designed to 
                    optimize for the workplace. It is tied to your enterprise identity (rather than a personal 
                    account), with built-in ad blocking to remove distractions and speed up browsing, and 
                    integrated tools to speed up common workflows.
                  </p>
                            <div className="mt-auto">
                              <div className="inline-flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-[#4A6200] to-[#5A7200] rounded-xl shadow-md">
                                <div>
                                  <div className="text-white font-bold text-lg leading-tight">80% Faster Launch</div>
                                  <div className="text-white/90 text-xs mt-1">Point-of-sale system launch by a national retailer</div>
                    </div>
                    </div>
                              <p className="text-[#4A5745] text-sm mt-3 ml-2">
                                Saving 40 seconds on each launch
                    </p>
                  </div>
                          </div>
                          <div className="lg:w-1/2 relative min-h-[200px] lg:min-h-0 overflow-hidden">
                            <img 
                              src="/images/productivity.png" 
                              alt="Productivity & Performance" 
                              className="w-full h-full object-cover scale-100"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="bg-gradient-to-br from-white to-[#F8FAF2] rounded-2xl overflow-hidden border border-gray-200 shadow-lg">
                        <div className="flex flex-col lg:flex-row-reverse">
                          <div className="lg:w-1/2 p-8">
                            <h3 className="text-2xl font-bold mb-4" style={{ color: '#313A00' }}>Application Provisioning</h3>
                            <p className="text-lg text-[#4A5745] leading-relaxed text-left">
                              With an enterprise browser, users access all the applications they're entitled to–SaaS, 
                              web applications, and even non-web apps via <abbr title="Secure Shell">SSH</abbr> or <abbr title="Remote Desktop Protocol">RDP</abbr>. It's the ideal access point for 
                              application virtualization platforms to connect users to traditional "thick" applications 
                              without requiring a desktop installation. This way, new apps can be introduced simply, 
                              and new users can onboard by just logging in and getting to work.
                            </p>
                          </div>
                          <div className="lg:w-1/2 relative min-h-[200px] lg:min-h-0 overflow-hidden">
                            <img 
                              src="/images/applicaiton .png" 
                              alt="Application Provisioning" 
                              className="w-full h-full object-cover scale-100"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="bg-gradient-to-br from-white to-[#F8FAF2] rounded-2xl overflow-hidden border border-gray-200 shadow-lg">
                        <div className="flex flex-col lg:flex-row">
                          <div className="lg:w-1/2 p-8">
                            <h3 className="text-2xl font-bold mb-4" style={{ color: '#313A00' }}>Remote Access & BYOD</h3>
                            <p className="text-lg text-[#4A5745] leading-relaxed text-left">
                              An enterprise browser can enable remote access for a hybrid workforce with employees 
                              outside the corporate office. Many organizations use an enterprise browser to reduce 
                              the need for traditional VPN or virtual desktop infrastructure (<abbr title="Virtual Desktop Infrastructure">VDI</abbr>) while empowering 
                              employees to access their applications from anywhere. An enterprise browser can be easily 
                              deployed to personal devices to enable bring your own device (BYOD) initiatives as well.
                            </p>
                          </div>
                          <div className="lg:w-1/2 relative min-h-[200px] lg:min-h-0 overflow-hidden">
                            <img 
                              src="/images/BYOD.png" 
                              alt="Remote Access & BYOD" 
                              className="w-full h-full object-cover scale-100"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeFeatureTab === 'management' && (
                    <div className="space-y-6 animate-fadeIn">
                      <div className="bg-gradient-to-br from-white to-[#F8FAF2] rounded-2xl overflow-hidden border border-gray-200 shadow-lg">
                        <div className="flex flex-col lg:flex-row">
                          <div className="lg:w-1/2 p-8">
                            <h3 className="text-2xl font-bold mb-4" style={{ color: '#313A00' }}>Efficiency and Cost Savings</h3>
                            <p className="text-lg text-[#4A5745] leading-relaxed text-left">
                              An enterprise browser dramatically simplifies your IT infrastructure and security stack. 
                              Many of the security tools, endpoint agents, and IT solutions needed to secure and enable 
                              the enterprise are now embedded in the browser or are no longer needed in many cases. 
                              This means the cost and effort involved in licensing, deploying, maintaining, and 
                              supporting all the infrastructure is brought to an absolute minimum.
                            </p>
                          </div>
                          <div className="lg:w-1/2 relative min-h-[300px] lg:min-h-[400px] overflow-hidden">
                            <img 
                              src="/images/cost.png" 
                              alt="Efficiency and Cost Savings" 
                              className="w-full h-full object-contain scale-110"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="bg-gradient-to-br from-white to-[#F8FAF2] rounded-2xl overflow-hidden border border-gray-200 shadow-lg">
                        <div className="flex flex-col lg:flex-row-reverse">
                          <div className="lg:w-1/2 p-8">
                            <h3 className="text-2xl font-bold mb-4" style={{ color: '#313A00' }}>Digital Experience & Analytics</h3>
                            <p className="text-lg text-[#4A5745] leading-relaxed text-left">
                              An enterprise browser provides analytics on application usage, performance, and workflow 
                              insights. This data can be used to optimize application spend, identify and remediate 
                              performance issues, and inform IT strategy to maximize business value. Unlike alternative 
                              solutions that require application-side integrations or additional agents on the endpoint, 
                              an enterprise browser naturally collects these analytics across every application interaction.
                            </p>
                          </div>
                          <div className="lg:w-1/2 relative min-h-[300px] lg:min-h-[400px] overflow-hidden">
                            <img 
                              src="/images/analytics.png" 
                              alt="Digital Experience & Analytics" 
                              className="w-full h-full object-contain scale-110"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </Section>
            <Section 
              id="similar-browser-vendors" 
              title="Similar browser vendors" 
              eyebrow="Competitive Landscape"
              centered={true}
              kicker="How Oasis compares to other enterprise browser solutions"
              right={
                <div className="relative bg-white/90 border border-white/80 rounded-[26px] px-6 py-8 shadow-[0_25px_70px_rgba(32,47,0,0.14)] backdrop-blur-lg">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-5">
                      <svg className="w-10 h-10 text-[#4A6200]" fill="currentColor" viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="3"/>
                        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 7.82 4 1.65 1.65 0 0 0 9 2.49V2a2 2 0 1 1 4 0v.09c0 .66.38 1.26 1 1.51.56.24 1.22.14 1.68-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06c-.47.47-.57 1.12-.33 1.68.25.62.85 1 1.51 1H21a2 2 0 1 1 0 4h-.09c-.66 0-1.26.38-1.51 1z"/>
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-[#1F2D00] mb-3">Centralized Control</h3>
                    <p className="text-base text-[#4E5534]">
                      Unified management console for enterprise-wide deployment
                    </p>
                  </div>
                </div>
              }
            >
              <div className="text-left">
              <p>
                When evaluating enterprise browser solutions, it's important to understand how Oasis 
                compares to other options in the market. The browser landscape has evolved significantly 
                with the emergence of enterprise-focused solutions and AI-powered browsers.
              </p>
              <p>
                Below is a comprehensive comparison of browser solutions, including enterprise browsers 
                like Island and Talon, traditional enterprise browsers like Chrome Enterprise and Edge, 
                and emerging AI browsers. This comparison will help you understand where Oasis fits in 
                the competitive landscape and what makes it unique.
              </p>
              </div>
              
              <div className="mt-8">
                <BrowserComparisonTable />
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
                Oasis deployment follows a practical, incremental approach that prioritizes immediate 
                functionality over complex initial configuration. The browser works out-of-the-box, 
                allowing you to get users productive quickly while building security policies and 
                configurations over time. This approach delivers tangible value within days rather 
                than requiring months of setup and planning.
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
              
              {/* Why This Approach Works - Elegant Design */}
              <div className="mt-20 max-w-4xl mx-auto pt-12 border-t border-[#4A6200]/20">
                <h3 className="text-2xl md:text-3xl font-bold text-[#313A00] mb-8 text-center">
                  Why This Approach Works
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-2 h-2 bg-[#4A6200] rounded-full mt-6"></div>
                    <p className="text-lg text-[#4A5745] leading-relaxed">
                      Ready-to-use browser eliminates lengthy setup processes
                    </p>
                    </div>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-2 h-2 bg-[#4A6200] rounded-full mt-6"></div>
                    <p className="text-lg text-[#4A5745] leading-relaxed">
                      Users can be productive while policies are being developed
                    </p>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-2 h-2 bg-[#4A6200] rounded-full mt-6"></div>
                    <p className="text-lg text-[#4A5745] leading-relaxed">
                      Rapid time-to-value with measurable results in days
                    </p>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-2 h-2 bg-[#4A6200] rounded-full mt-6"></div>
                    <p className="text-lg text-[#4A5745] leading-relaxed">
                      Phased rollout reduces risk and allows for learning and adjustment
                    </p>
                  </div>
                </div>
                </div>
            </Section>
            {/* Full-Width Media Carousel Section */}
            <section 
              id="user-experience" 
              className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] py-16 md:py-24 bg-white"
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                  <div className="tracking-wider mb-3 font-semibold text-base lg:text-lg capitalize" style={{ color: '#978455' }}>
                    Interface & Usability
                    </div>
                  <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ color: COLORS.primary }}>
                    User Experience
                  </h2>
                  <p className="text-xl text-gray-700 max-w-2xl mx-auto">
                    Experience how Oasis feels to use day-to-day
                    </p>
                  </div>
                
                {/* Media Carousel */}
                <div className="relative w-full max-w-6xl mx-auto">
                  <div className="relative overflow-hidden rounded-2xl bg-gray-100 shadow-2xl" style={{ aspectRatio: '16/9' }}>
                    {mediaItems.map((item, index) => (
                      <div
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                          index === currentMediaIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
                        }`}
                      >
                        {item.type === 'video' ? (
                          <video
                            className="w-full h-full object-cover"
                            autoPlay
                            muted
                            loop
                            playsInline
                            key={index}
                          >
                            <source src={item.src} type="video/mp4" />
                          </video>
                        ) : item.type === 'gif' ? (
                          <img
                            src={item.src}
                            alt={item.alt}
                            className="w-full h-full object-cover"
                            loading="lazy"
                          />
                        ) : (
                          <img
                            src={item.src}
                            alt={item.alt}
                            className="w-full h-full object-cover"
                            loading="lazy"
                          />
                        )}
                    </div>
                    ))}
                  </div>

                  {/* Navigation Arrows */}
                  <button
                    onClick={prevMedia}
                    className="btn-primary absolute left-4 top-1/2 -translate-y-1/2 z-20 rounded-full p-3 shadow-lg transition-all duration-200 hover:scale-110"
                    aria-label="Previous media"
                  >
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button
                    onClick={nextMedia}
                    className="btn-primary absolute right-4 top-1/2 -translate-y-1/2 z-20 rounded-full p-3 shadow-lg transition-all duration-200 hover:scale-110"
                    aria-label="Next media"
                  >
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                  
                  {/* Text Content Below Image */}
                  <div className="mt-6 text-center">
                    <div className="transition-opacity duration-700 ease-in-out">
                      <h3 className="text-2xl md:text-3xl font-bold mb-3" style={{ color: '#313A00' }}>
                        {mediaItems[currentMediaIndex].title}
                      </h3>
                      <p className="text-lg md:text-xl text-[#4A5745] max-w-3xl mx-auto">
                        {mediaItems[currentMediaIndex].description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Dots Indicator */}
                  <div className="flex justify-center gap-2 mt-6">
                    {mediaItems.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentMediaIndex(index)}
                        className={`h-2 rounded-full transition-all duration-300 ${
                          index === currentMediaIndex
                            ? 'w-8 bg-[#4A6200]'
                            : 'w-2 bg-gray-300 hover:bg-gray-400'
                        }`}
                        aria-label={`Go to slide ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>
                </div>

              {/* Brief Content Summary Below Carousel */}
              <div className="max-w-4xl mx-auto mt-16 text-center">
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
                  Oasis represents the first AI browser designed to meld with the way your mind works naturally. 
                  Built for ergonomic work, focus, and spatial ease, Oasis creates a soothing environment that is 
                  conducive to fostering deep work, flow state, concentration, and focus.
                </p>
                </div>
            </section>
            
            <Section 
              id="faqs" 
              title="FAQs" 
              eyebrow="Frequent Questions About Enterprise Browsers"
              kicker="Comprehensive answers to technical and business questions"
              centered={true}
              right={
                <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                  <div className="text-center">
                      <div className="w-16 h-16 bg-[#F8FAF2] rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8 text-[#788B59]" fill="currentColor" viewBox="0 0 24 24">
                        <rect x="3" y="3" width="7" height="7"/>
                        <rect x="14" y="3" width="7" height="7"/>
                        <rect x="14" y="14" width="7" height="7"/>
                        <rect x="3" y="14" width="7" height="7"/>
                      </svg>
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">Multi-View</h3>
                    <p className="text-sm text-gray-600">
                      Work with multiple applications simultaneously
                    </p>
                  </div>
                </div>
              }
            >
              <div className="space-y-4 text-left">
                <Accordion title="Will my existing web applications work with an enterprise browser?">
                  <p>
                    Enterprise browsers like Oasis are built on the same Chromium foundation as popular browsers 
                    including Chrome, Edge, and Brave. This ensures complete compatibility with any web application 
                    that functions properly in standard browsers, providing identical rendering and functionality.
                  </p>
                </Accordion>

                <Accordion title="How do enterprise browsers handle legacy Internet Explorer applications?">
                  <p>
                    Many enterprise browser solutions provide Internet Explorer compatibility modes that automatically 
                    switch to the legacy IE engine when needed. This allows organizations to maintain access to older 
                    applications while benefiting from modern browser security and management features.
                  </p>
                </Accordion>

                <Accordion title="Will an enterprise browser slow down my applications?">
                  <p>
                    Enterprise browsers maintain the same speed and responsiveness as standard browsers for all web 
                    applications. In fact, many users experience improved performance due to built-in ad blocking, 
                    tracker prevention, and optimized resource management that reduces unnecessary network requests.
                  </p>
                </Accordion>

                <Accordion title="What's the difference between enterprise browsers and virtual desktop solutions?">
                  <p>
                    While virtual desktop infrastructure (VDI) and Desktop-as-a-Service (DaaS) serve similar purposes, 
                    enterprise browsers offer significant advantages. VDI requires extensive infrastructure investments 
                    in servers, networking, and virtualization platforms, resulting in high operational costs. VDI also 
                    introduces user experience challenges including session latency, visual artifacts, and performance 
                    degradation. Migrating web and SaaS workloads from VDI to an enterprise browser typically delivers 
                    substantial cost reductions and superior user experience.
                  </p>
                </Accordion>

                <Accordion title="Do enterprise browsers work with existing security service edge (SSE) solutions?">
                  <p>
                    Enterprise browsers integrate seamlessly with existing Security Service Edge (SSE) architectures, 
                    or can serve as a comprehensive alternative. By shifting security enforcement from the network 
                    perimeter to the browser itself, organizations gain enhanced deployment flexibility. Enterprise browsers 
                    function on both managed and unmanaged devices without requiring complex network routing or traffic 
                    inspection. This approach eliminates the need for application-specific API integrations while 
                    providing comprehensive security coverage.
                  </p>
                </Accordion>

                <Accordion title="Is a VPN required when using an enterprise browser?">
                  <p>
                    Enterprise browsers adapt to any available network connection on the device, including VPN, 
                    Zero Trust Network Access (ZTNA), or proxy configurations from other vendors. Some solutions 
                    include integrated ZTNA capabilities directly within the browser, simplifying access to internal 
                    applications and private resources without additional network infrastructure requirements.
                  </p>
              </Accordion>

                <Accordion title="Can enterprise browsers be deployed on personal or unmanaged devices?">
                  <p>
                    Absolutely. Enterprise browsers are designed to function on any device, whether corporate-managed 
                    or personal (BYOD). All security and management policies are enforced directly through the browser 
                    application, independent of device management status. This enables flexible deployment scenarios 
                    where different organizations manage the browser and device separately, such as business process 
                    outsourcing arrangements.
                  </p>
              </Accordion>

                <Accordion title="Are enterprise browsers available for mobile devices?">
                  <p>
                    Many enterprise browser solutions provide mobile versions that extend the same security and 
                    management capabilities to smartphones and tablets. These mobile enterprise browsers maintain 
                    consistent policies across desktop and mobile environments, ensuring comprehensive coverage 
                    for modern hybrid workforces.
                  </p>
                </Accordion>

                <Accordion title="How do enterprise browsers balance activity monitoring with user privacy?">
                  <p>
                    Enterprise browsers provide sophisticated activity monitoring capabilities that balance organizational 
                    security needs with user privacy expectations. These solutions offer granular logging controls that 
                    focus on business-critical workflows while respecting personal browsing activities. Many enterprise 
                    browsers include user-facing privacy indicators that clearly show when monitoring is active, 
                    fostering transparency and trust between employees and organizations.
                  </p>
              </Accordion>
                    </div>
            </Section>
            
            
            
            
            
            {/* Full-Width CTA Banner */}
            <section 
              id="getting-started-with-oasis" 
              className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] py-20 md:py-28 mb-0"
              style={{
                backgroundImage: 'url(/images/desert-background-5.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}
            >
              {/* Overlay for text readability */}
              <div className="absolute inset-0 bg-white/60"></div>
              <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-6">
                  Ready to Transform Your Enterprise Browsing Experience?
                </h2>
                <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto leading-relaxed font-bold" style={{ color: '#313A00' }}>
                  See Oasis in action and discover how it can revolutionize your organization's productivity and security.
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
        
        {/* Floating Table of Contents Button */}
        {showTocButton && (
          <div className="fixed right-6 bottom-24 z-50">
            <button
              onClick={() => setIsTocOpen(!isTocOpen)}
              className="btn-primary rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-200"
              aria-label="Table of Contents"
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            
            {isTocOpen && (
              <div className="absolute right-0 bottom-full mb-4 w-64 bg-white rounded-lg shadow-2xl border border-gray-200 p-4 max-h-[60vh] overflow-y-auto">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold" style={{ color: '#313A00' }}>Table of Contents</h3>
                  <button
                    onClick={() => setIsTocOpen(false)}
                    className="text-gray-500 hover:text-gray-700"
                    aria-label="Close"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                <nav className="space-y-2">
                  {structure.map((item) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      onClick={() => setIsTocOpen(false)}
                      className="block py-2 px-3 rounded-md hover:bg-[#F8FAF2] transition-colors duration-200 text-sm font-medium"
                      style={{ color: '#4A5745' }}
                    >
                      {item.label}
                    </a>
                  ))}
                </nav>
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
        
        /* Override global link styles for enterprise buyer guide */
        a:not(.nav-button):not(.contact-sales-btn):not(.pricing-button):not(.btn-primary):not(.btn-secondary) {
          color: ${COLORS.primary} !important;
          text-decoration: none !important;
          transition: color 0.3s ease;
        }
        a:not(.nav-button):not(.contact-sales-btn):not(.pricing-button):not(.btn-primary):not(.btn-secondary):hover {
          color: ${COLORS.accent} !important;
          text-decoration: none !important;
        }
        
        a:focus, button:focus, select:focus { 
          outline: 2px solid ${COLORS.accent}; 
          outline-offset: 2px; 
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
