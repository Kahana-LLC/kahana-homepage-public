import React, { useEffect, useMemo, useRef, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import TableOfContents from '../components/TableOfContents';
import KeyPointsCard from '../components/KeyPointsCard';
import ErrorBoundary from '../components/ErrorBoundary';
import BrowserComparisonTable from '../components/BrowserComparisonTable';

// Brand tokens (updated green-forward accessible palette)
const COLORS = {
  // Core brand greens from provided palette
  brand900: '#4A5745', // Deep evergreen (text on light backgrounds)
  brand700: '#788B59', // Accent olive
  brand600: '#728552', // Mid olive
  brand200: '#E0D48C', // Sand
  brand050: '#F3F8E4', // Cream

  // Role-based functional colors (derived from palette)
  ctaPrimary: '#788B59', // Accent olive (primary actions)
  ctaHover: '#728552', // Mid olive (hover states)
  info: '#728552', // Mid olive (info states)
  success: '#788B59', // Accent olive (success states)
  warning: '#E0D48C', // Sand (warning states)
  error: '#4A5745', // Deep evergreen (error states)

  // Text and surfaces
  primary: '#4A5745', // Deep evergreen text
  accent: '#728552', // Mid olive accent
  bgPage: '#F3F8E4', // Cream background
  bgCard: '#FFFFFF', // White cards
  muted: '#788B59', // Accent olive muted
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
              <a key={a.href} href={a.href} onClick={() => setOpen(false)} style={{ color: COLORS.primary, textDecoration: 'none', padding: '8px 6px', borderRadius: 6, display: 'block' }}>
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
          header nav a { color: ${COLORS.primary}; text-decoration: none; margin-left: 16px; font-size: 14px; }
          header nav a:hover, header nav a:focus { color: ${COLORS.accent}; text-decoration: underline; text-underline-offset: 3px; outline: 2px solid transparent; outline-offset: 2px; }
        }
      `}</style>
      <div className="desktop-nav" style={{ display: 'none' }} role="navigation" aria-label="Section anchors">
        <div style={{ maxWidth: MAX_WIDTH, margin: '0 auto', padding: '0 16px 12px 16px', display: 'flex', justifyContent: 'flex-end', gap: 16 }}>
          {anchors.map(a => (
            <a key={a.href} href={a.href} style={{ color: COLORS.primary, textDecoration: 'none', fontSize: 14 }}>
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
      backgroundColor: '#F3F8E4',
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
            marginTop: '8px'
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
        <div style={{ width: 36, height: 36, borderRadius: 999, background: COLORS.accent, color: '#F3F8E4', fontWeight: 800, display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>{initials}</div>
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
    <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Back to top" style={{ position: 'fixed', right: 20, bottom: 20, background: COLORS.primary, color: '#fff', border: 'none', borderRadius: 999, padding: '10px 14px', cursor: 'pointer', boxShadow: '0 6px 20px rgba(0,0,0,0.15)' }}>
      ↑ Top
    </button>
  );
}

function Section({ id, title, kicker, eyebrow, children, right }) {
  return (
    <section 
      id={id} 
      aria-labelledby={`${id}-title`} 
      className="py-28 px-4 lg:px-10 scroll-mt-28 border-b border-gray-100 last:border-b-0"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-14">
          <div className="lg:col-span-2">
            {eyebrow && (
              <div className="uppercase tracking-wider mb-3 font-semibold text-base lg:text-lg" style={{ color: COLORS.accent }}>
                {eyebrow}
              </div>
            )}
            <h2 
              id={`${id}-title`} 
              className="text-3xl lg:text-4xl font-bold mb-4 leading-tight"
              style={{ color: COLORS.primary }}
            >
              {title}
            </h2>
            {kicker && (
              <p className="text-xl text-gray-700 mb-10 leading-relaxed font-medium">
                {kicker}
              </p>
            )}
            <div className="prose prose-lg max-w-none leading-relaxed space-y-6 kb-typography" style={{ color: COLORS.primary }}>
              {children}
            </div>
          </div>
          {right && (
            <div className="lg:col-span-1 lg:sticky lg:top-24 lg:self-start">
              <div className="lg:ml-8">
              {right}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default function EnterpriseBuyerGuidePage() {
  const [isTocCollapsed, setIsTocCollapsed] = useState(false);
  const [persona, setPersona] = useState('business'); // 'business' | 'technical'
  const [isPlaying, setIsPlaying] = useState(false);
  
  // Exact headings/order with subsections
  const structure = [
    { id: 'introduction', label: 'Introduction' },
    { id: 'what-is-oasis', label: 'What is Oasis?' },
    // Hidden: { id: 'benefits-of-oasis', label: 'Benefits of Oasis' },
    // Hidden: { id: 'common-use-cases', label: 'Common use cases' },
    // Hidden: { id: 'similar-browser-vendors', label: 'Similar browser vendors' },
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
      <div style={{ background: COLORS.bgPage, color: COLORS.primary, minHeight: '100vh' }}>
        {/* Sticky Navigation */}
        <TableOfContents 
          items={structure.map(s => ({
            id: s.id,
            label: s.label,
            children: s.children?.map(c => ({
              id: c.id,
              label: c.label
            }))
          }))}
          onCollapseChange={setIsTocCollapsed}
        />

        <div className="min-h-screen" style={{ background: COLORS.bgPage }}>
          <main className={`transition-all duration-300 ease-in-out ${isTocCollapsed ? 'lg:ml-16' : 'lg:ml-80'}`}>
            {/* Hidden: Info banner with glossary text and Accessible Palette badge
            <div className="mx-auto mb-8 px-4" style={{ maxWidth: 960 }}>
              <div className="rounded-lg border border-gray-200 bg-[#F3F8E4] p-4 flex items-center justify-between">
                <p className="text-sm text-gray-700">
                  Not sure about an acronym? Visit our{' '}
                  <Link href="/docs/glossary" legacyBehavior><a className="underline" style={{ color: COLORS.accent }}>Glossary</a></Link>
                  . Hover on underlined terms to see a quick definition.
                </p>
                <span className="inline-flex items-center rounded-md px-2 py-1 text-xs font-medium" style={{ background: COLORS.brand050, color: COLORS.brand700, border: '1px solid #728552' }}>Accessible Palette</span>
              </div>
            </div>
            */}
            <Section 
              id="introduction" 
              title="Introduction" 
              eyebrow="The Evolution of Browsers"
              kicker="How Oasis redefines what a browser can be in the enterprise"
              right={
                <div className="space-y-6">
                  {/* Hidden: Video container with 3-minute guided tour
                  <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                    <div className="relative rounded-md overflow-hidden border border-gray-200">
                      {!isPlaying ? (
                        <button
                          onClick={() => setIsPlaying(true)}
                          className="group w-full h-40 flex items-center justify-center bg-gray-100"
                          aria-label="Play mini demo"
                        >
                          <span className="inline-flex items-center justify-center w-12 h-12 rounded-full text-white" style={{ background: COLORS.ctaPrimary }}>
                            ▶
                          </span>
                          <span className="sr-only">Play</span>
                        </button>
                      ) : (
                        <video className="w-full h-40 object-cover" autoPlay muted loop playsInline>
                          <source src="/videos/oasis-micro-demo.mp4" type="video/mp4" />
                        </video>
                      )}
                    </div>
                    <p className="text-xs text-gray-600 mt-2 text-center">3‑minute guided tour (no audio)</p>
                  </div>
                  */}
                <KeyPointsCard>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ background: COLORS.accent }} />
                      <span>Enterprise browser + AI browser</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ background: COLORS.accent }} />
                      <span>Firefox & Chromium versions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ background: COLORS.accent }} />
                      <span>Tailored to your needs</span>
                    </li>
                  </ul>
                </KeyPointsCard>
                </div>
              }
            >
              <p>
                The definition of a "browser" has fundamentally changed in recent years. What was once 
                simply a tool for viewing web pages has evolved into something far more powerful and 
                intelligent. This transformation has been driven by two major innovations: enterprise 
                browsers like Island's security-focused platform, and AI browsers such as Perplexity's 
                Comet, OpenAI's Atlas, GenSpark, and Dia that integrate artificial intelligence directly 
                into the browsing experience.
              </p>
              <p>
                Oasis represents the convergence of these two revolutionary approaches. It is both an 
                enterprise browser and an AI browser, combining the security and control that modern 
                organizations demand with the intelligence and automation that users expect from next-generation 
                software. Available in both Firefox and Chromium versions, Oasis offers different suites 
                of benefits tailored to your organization's specific needs and preferences. This dual nature 
                makes Oasis uniquely positioned to address the complex challenges of today's digital workplace.
              </p>
              <p>
                In this guide, we'll break down what makes Oasis so special. We'll explore how it 
                redefines enterprise security, how its AI capabilities transform productivity, and why 
                it represents the future of how we interact with the web. Whether you're evaluating 
                enterprise browser solutions or looking to understand the next evolution of web technology, 
                this guide will provide the insights you need to make informed decisions.
              </p>
            </Section>
            {/* Hidden: Persona toggle and targeted benefits - Guide by role section
            <Section
              id="personas"
              title="Guide by role"
              kicker="Choose your perspective—concise benefits with optional detail"
            >
              <div className="mb-4 inline-flex items-center gap-3" role="tablist" aria-label="Persona selector">
                <button
                  role="tab"
                  aria-selected={persona === 'business'}
                  onClick={() => setPersona('business')}
                  className={`px-4 py-2 text-sm rounded-md border ${persona === 'business' ? 'bg-white font-semibold border-gray-300' : 'bg-gray-50 text-gray-700 border-gray-200'} focus:outline-none`}
                  style={{ color: persona === 'business' ? COLORS.primary : undefined }}
                >
                  Business
                </button>
                <button
                  role="tab"
                  aria-selected={persona === 'technical'}
                  onClick={() => setPersona('technical')}
                  className={`px-4 py-2 text-sm rounded-md border ${persona === 'technical' ? 'bg-white font-semibold border-gray-300' : 'bg-gray-50 text-gray-700 border-gray-200'} focus:outline-none`}
                  style={{ color: persona === 'technical' ? COLORS.primary : undefined }}
                >
                  Technical
                </button>
              </div>

              {persona === 'business' ? (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="rounded-lg not-prose p-4 bg-gradient-to-br from-kahana-accent-sky/20 to-kahana-secondary-300/10">
                    <h4 className="font-semibold mb-1" style={{ color: '#4A5745' }}>Reduce spend</h4>
                    <p className="text-sm text-gray-700 mb-2">Consolidate 3–5 tools into the browser; cut costs by 15–30%.</p>
                    <details className="text-sm text-gray-700"><summary className="cursor-pointer">Show details</summary>Lower agent overhead, fewer vendors, simpler support.</details>
                  </div>
                  <div className="rounded-lg not-prose p-4 bg-gradient-to-br from-kahana-accent-sky/20 to-kahana-secondary-300/10">
                    <h4 className="font-semibold mb-1" style={{ color: '#4A5745' }}>Faster onboarding</h4>
                    <p className="text-sm text-gray-700 mb-2">Policy-based access + SSO enables day‑1 productivity.</p>
                    <details className="text-sm text-gray-700"><summary className="cursor-pointer">Show details</summary>Import bookmarks/passwords instantly; least‑privilege defaults.</details>
                  </div>
                  <div className="rounded-lg not-prose p-4 bg-gradient-to-br from-kahana-accent-sky/20 to-kahana-secondary-300/10">
                    <h4 className="font-semibold mb-1" style={{ color: '#4A5745' }}>Higher throughput</h4>
                    <p className="text-sm text-gray-700 mb-2">Hubs + ad/tracker reduction and AI assist reduce switching.</p>
                    <details className="text-sm text-gray-700"><summary className="cursor-pointer">Show details</summary>Multi‑view layouts; keyboard/voice commands for common flows.</details>
                  </div>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="rounded-lg not-prose p-4 bg-gradient-to-br from-kahana-accent-sky/20 to-kahana-secondary-300/10">
                    <h4 className="font-semibold mb-1" style={{ color: '#4A5745' }}>Controls at the edge</h4>
                    <p className="text-sm text-gray-700 mb-2">URL/app‑scoped DLP, clipboard/download policies, audit logs.</p>
                    <details className="text-sm text-gray-700"><summary className="cursor-pointer">Show details</summary>Export to CSV/JSON; SIEM ingestion; exception workflows.</details>
                  </div>
                  <div className="rounded-lg not-prose p-4 bg-gradient-to-br from-kahana-accent-sky/20 to-kahana-secondary-300/10">
                    <h4 className="font-semibold mb-1" style={{ color: '#4A5745' }}>Easy deployment</h4>
                    <p className="text-sm text-gray-700 mb-2">MDM distribution, config templates, staged channels, rollback.</p>
                    <details className="text-sm text-gray-700"><summary className="cursor-pointer">Show details</summary>Works with Workspace ONE, Intune, Jamf; JSON policy files.</details>
                  </div>
                  <div className="rounded-lg not-prose p-4 bg-gradient-to-br from-kahana-accent-sky/20 to-kahana-secondary-300/10">
                    <h4 className="font-semibold mb-1" style={{ color: '#4A5745' }}>Identity native</h4>
                    <p className="text-sm text-gray-700 mb-2">SAML/OIDC SSO and SCIM provisioning; MFA enforced.</p>
                    <details className="text-sm text-gray-700"><summary className="cursor-pointer">Show details</summary>Conditional access; device posture checks; risk‑based prompts.</details>
                  </div>
                </div>
              )}
            </Section>
            */}
            <Section 
              id="what-is-oasis" 
              title="What is Oasis?" 
              eyebrow="Product Overview"
              kicker="Understanding Oasis as both enterprise and AI browser"
              right={
                <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-[#F3F8E4] rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-[#788B59]" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                      </svg>
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">Two Versions</h3>
                    <p className="text-sm text-gray-600">
                      Free Agentic Browser for personal use, Enterprise Browser for organizations
                    </p>
                  </div>
                </div>
              }
            >
              <p>
                Oasis comes in two distinct versions, each tailored to different needs and use cases:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-4">
                <div className="not-prose bg-gradient-to-br from-kahana-accent-sky/20 to-kahana-secondary-300/10 rounded-lg">
                  <h3 className="text-lg font-semibold mb-2" style={{ color: '#4A5745' }}>
                    <Link href="/products/free-agentic-browser" className="text-[#4A5745] hover:text-[#728552]">
                      Oasis Free Agentic Browser
                    </Link>
                  </h3>
                  <p className="text-sm mb-2" style={{ color: '#4A5745' }}>
                    Designed for personal productivity with AI-powered assistance and smart organization tools.
                  </p>
                  <ul className="text-sm space-y-1.5 list-disc list-inside" style={{ color: '#4A5745' }}>
                    <li>AI-powered productivity assistant</li>
                    <li>Smart workspace organization</li>
                    <li>Advanced tab management</li>
                    <li>Personal hub creation</li>
                  </ul>
                </div>
                
                <div className="not-prose bg-gradient-to-br from-kahana-accent-sky/20 to-kahana-secondary-300/10 rounded-lg">
                  <h3 className="text-lg font-semibold mb-2" style={{ color: '#4A5745' }}>
                    <Link href="/products/enterprise-browser" className="text-[#4A5745] hover:text-[#728552]">
                      Oasis Enterprise Browser
                    </Link>
                  </h3>
                  <p className="text-sm mb-2" style={{ color: '#4A5745' }}>
                    Built for enterprise environments with enhanced security, compliance, and collaboration features.
                  </p>
                  <ul className="text-sm space-y-1.5 list-disc list-inside" style={{ color: '#4A5745' }}>
                    <li>Enterprise-grade security controls</li>
                    <li>Centralized management</li>
                    <li>Compliance and audit logging</li>
                    <li>Team collaboration features</li>
                  </ul>
                </div>
              </div>

              <h4 className="text-lg font-semibold text-gray-900 mb-4 mt-8">What Makes Oasis Different</h4>
              
              <p>
                <strong>Designed for How Your Mind Works:</strong> Unlike other AI browsers that create more 
                complexity with multiple agents and tabs, Oasis is designed to fit the way your mind 
                naturally works. We pay attention to the "little things" that matter in your spatial 
                workspace. While other solutions create multiple agents that require constant clicking 
                between different interfaces, Oasis lets you view all agents in one unified page, 
                eliminating the tab chaos that plagues traditional AI browsers.
              </p>
              
              <p>
                <strong>Deep AI Integration:</strong> AI commands are deeply rooted into the core of the 
                browser, not bolted on as an afterthought. You can control everything from opening new 
                windows to saving all tabs into organized hubs, extracting insights from research collections, 
                all through natural language prompts or voice commands. This seamless integration reduces 
                friction and makes AI truly useful rather than just a novelty.
              </p>
              
              <p>
                <strong>Trainable AI Companion:</strong> One of the biggest issues with AI browsers like 
                Perplexity's Comet is that they're slow, you can't monitor agents simultaneously, and 
                commands often don't work as expected. Oasis includes training and gamification elements 
                that let you fine-tune your own AI assistant, making it faster and more accurate for your 
                specific needs. You maintain control over your AI's learning and behavior.
              </p>
              
              <p>
                <strong>Security-First AI:</strong> Maintaining security within an AI browser presents 
                unique challenges that we specialize in solving. <Link href="/security-guide" className="text-[#788B59] hover:text-[#728552] underline">Learn more about our security approach</Link>.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="rounded-lg not-prose bg-gradient-to-br from-kahana-accent-sky/20 to-kahana-secondary-300/10 p-6">
                  <h5 className="font-semibold mb-2" style={{ color: '#4A5745' }}>For Business Leaders</h5>
                  <ul className="list-disc list-inside space-y-1" style={{ color: '#4A5745' }}>
                    <li>Cut software and support costs by consolidating tools into the browser.</li>
                    <li>Improve team focus with organized workspaces and distraction reduction.</li>
                    <li>Shorten onboarding time with policy-based access and single sign-on.</li>
                  </ul>
                </div>
                <div className="rounded-lg not-prose bg-gradient-to-br from-kahana-accent-sky/20 to-kahana-secondary-300/10 p-6">
                  <h5 className="font-semibold mb-2" style={{ color: '#4A5745' }}>For Technical Admins</h5>
                  <ul className="list-disc list-inside space-y-1" style={{ color: '#4A5745' }}>
                    <li>Centralize policies, audit logs, and data controls at the browser layer.</li>
                    <li>Deploy via MDM with support for policy templates and version control.</li>
                    <li>Integrate identity using <abbr title="Security Assertion Markup Language">SAML</abbr>/<abbr title="OpenID Connect">OIDC</abbr> and automate provisioning via SCIM.</li>
                  </ul>
                </div>
              </div>
            </Section>
            
            {/* Hidden: Benefits of Oasis section
            <Section 
              id="benefits-of-oasis" 
              title="Benefits of Oasis" 
              eyebrow="Value Proposition"
              kicker="Key advantages of choosing Oasis for your organization"
              right={
                <div className="space-y-6">
                  <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-[#F3F8E4] rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8 text-[#788B59]" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
                        </svg>
                      </div>
                      <h3 className="font-semibold text-gray-900 mb-2">Single Sign-On</h3>
                      <p className="text-sm text-gray-600">
                        Seamless authentication with your existing identity providers
                      </p>
                    </div>
                  </div>
                <KeyPointsCard>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-[#728552] rounded-full mt-2 flex-shrink-0" />
                      <span>Works with Okta, Azure AD, Ping</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-[#728552] rounded-full mt-2 flex-shrink-0" />
                      <span>Built-in MFA support</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-[#728552] rounded-full mt-2 flex-shrink-0" />
                      <span>Seamless user experience</span>
                    </li>
                  </ul>
                </KeyPointsCard>
                </div>
              }
            >
              <p>
                Oasis delivers comprehensive benefits across efficiency, security, and user experience. 
                These advantages are organized into key areas that address the most critical enterprise 
                browser challenges and opportunities.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div className="rounded-lg p-5 not-prose bg-gradient-to-br from-kahana-accent-sky/20 to-kahana-secondary-300/10">
                  <h5 className="font-semibold mb-2" style={{ color: COLORS.brand900 }}>Business outcomes</h5>
                  <ul className="list-disc list-inside space-y-1" style={{ color: '#4A5745' }}>
                    <li>Reduce security stack spend by 15–30% via consolidation.</li>
                    <li>Speed new-hire productivity by enabling same-day access.</li>
                    <li>Decrease support tickets with built-in guardrails and guidance.</li>
                  </ul>
                </div>
                <div className="rounded-lg p-5 not-prose bg-gradient-to-br from-kahana-accent-sky/20 to-kahana-secondary-300/10">
                  <h5 className="font-semibold mb-2" style={{ color: COLORS.brand900 }}>Technical capabilities</h5>
                  <ul className="list-disc list-inside space-y-1" style={{ color: '#4A5745' }}>
                    <li>Granular DLP, clipboard, and download policies at URL/app scope.</li>
                    <li>Exportable audit logs; SIEM-friendly formats; API access.</li>
                    <li>Configurable update channels and rollback options.</li>
                  </ul>
                </div>
              </div>
              
              <div className="space-y-4 mt-8">
                <Accordion title="Efficiency and Cost Savings" defaultOpen={true}>
                  <p>
                    An enterprise browser dramatically simplifies your IT infrastructure and security stack. 
                    Many of the security tools, endpoint agents, and IT solutions needed to secure and enable 
                    the enterprise are now embedded in the browser or are no longer needed in many cases. 
                    This means the cost and effort involved in licensing, deploying, maintaining, and 
                    supporting all the infrastructure is brought to an absolute minimum.
                  </p>
                </Accordion>

                <Accordion title="Application Provisioning">
                  <p>
                    With an enterprise browser, users access all the applications they're entitled to–SaaS, 
                    web applications, and even non-web apps via <abbr title="Secure Shell">SSH</abbr> or <abbr title="Remote Desktop Protocol">RDP</abbr>. It's the ideal access point for 
                    application virtualization platforms to connect users to traditional "thick" applications 
                    without requiring a desktop installation. This way, new apps can be introduced simply, 
                    and new users can onboard by just logging in and getting to work.
                  </p>
                </Accordion>

                <Accordion title="Digital Experience & Analytics">
                  <p>
                    An enterprise browser provides analytics on application usage, performance, and workflow 
                    insights. This data can be used to optimize application spend, identify and remediate 
                    performance issues, and inform IT strategy to maximize business value. Unlike alternative 
                    solutions that require application-side integrations or additional agents on the endpoint, 
                    an enterprise browser naturally collects these analytics across every application interaction.
                  </p>
                </Accordion>

                <Accordion title="Remote Access & BYOD">
                  <p>
                    An enterprise browser can enable remote access for a hybrid workforce with employees 
                    outside the corporate office. Many organizations use an enterprise browser to reduce 
                    the need for traditional VPN or virtual desktop infrastructure (<abbr title="Virtual Desktop Infrastructure">VDI</abbr>) while empowering 
                    employees to access their applications from anywhere. An enterprise browser can be easily 
                    deployed to personal devices to enable <abbr title="Bring Your Own Device">BYOD</abbr> initiatives as well.
                  </p>
                </Accordion>

                <Accordion title="Data Protection & DLP">
                  <p>
                    Work's widespread shift to SaaS and internal web apps inside a consumer browser has made 
                    data protection more challenging than ever. With no control over browser activity itself, 
                    legacy approaches have taken a "blunt instrument" approach, securing data while disrupting 
                    work and driving up cost and complexity in the process.
              </p>
              <p>
                    An enterprise browser, however, builds dynamic data protections into the browser itself, 
                    enabling you to build policies that prevent data leakage without disrupting organizational 
                    workflows. Its <abbr title="Data Loss Prevention">DLP</abbr> controls protect sensitive data from being improperly downloaded or 
                    uploaded before it leaves or enters the browser.
                  </p>
                </Accordion>

                <Accordion title="Visibility & Monitoring">
                  <p>
                    An enterprise browser offers unprecedented visibility into all browser activity in a way 
                    that simply wasn't possible before. Most legacy security tools offer visibility via network 
                    traffic inspection by decrypting SSL traffic. An enterprise browser offers visibility into 
                    browser behavior without any unnatural network traffic manipulation.
                  </p>
                  <div className="bg-[#F3F8E4] rounded-lg p-4 mt-4">
                    <div className="flex items-center mb-2">
                      <div className="w-8 h-8 bg-[#E0D48C] rounded-full flex items-center justify-center mr-3">
                        <span className="text-[#4A5745] font-bold text-sm">3</span>
              </div>
                      <span className="font-semibold text-[#4A5745]">Minutes</span>
                    </div>
                    <p className="text-[#4A5745] text-sm">
                      to open and close a phishing attempt investigation by The Bank of Marion. Previously took several hours.
                    </p>
                  </div>
                </Accordion>

                <Accordion title="Zero Trust Security">
                  <p>
                    An enterprise browser can be used to implement a zero trust security framework across a 
                    wide range of deployment scenarios:
                  </p>
                  <ul className="list-disc list-inside mt-4 space-y-2">
                    <li>User identity is verified with IdP integration and multi-factor authentication</li>
                    <li>Device posture is checked to verify the device meets security standards</li>
                    <li>Network and geolocation are examined to see where the request is coming from</li>
                    </ul>
                  <p className="mt-4">
                    All of these elements are continuously evaluated with every access request, making it easy 
                    to implement and enforce robust zero trust security policies across all browser activity.
                  </p>
                </Accordion>

                <Accordion title="Safe Browsing & Threat Protection">
                  <p>
                    An enterprise browser comes embedded with powerful security tools that protect all browser 
                    activity from the myriad of web-born threats, regardless of device or network. Malware is 
                    detected and blocked before ever reaching the endpoint. Phishing attacks are stopped before 
                    credentials are compromised. Unsafe or inappropriate sites are blocked from access.
                  </p>
                </Accordion>

                <Accordion title="Productivity & Performance">
                  <p>
                    Consumer browsers are optimized for personal convenience, advertising, consumer workflows 
                    like online shopping and social media. By contrast, an enterprise browser is designed to 
                    optimize for the workplace. It is tied to your enterprise identity (rather than a personal 
                    account), with built-in ad blocking to remove distractions and speed up browsing, and 
                    integrated tools to speed up common workflows.
                  </p>
                  <div className="bg-[#F3F8E4] rounded-lg p-4 mt-4">
                    <div className="flex items-center mb-2">
                      <div className="w-8 h-8 bg-[#E0D48C] rounded-full flex items-center justify-center mr-3">
                        <span className="text-[#4A5745] font-bold text-sm">80%</span>
                    </div>
                      <span className="font-semibold text-[#4A5745]">Faster Launch</span>
                    </div>
                    <p className="text-[#4A5745] text-sm">
                      Faster point-of-sale system launch by a national retailer, saving 40 seconds on each launch.
                    </p>
                  </div>
                </Accordion>
              </div>
            </Section>
            */}
            {/* Hidden: Common use cases section
            <Section 
              id="common-use-cases" 
              title="Common use cases" 
              eyebrow="Real-World Applications"
              kicker="How organizations use Oasis to solve business challenges"
              right={
                <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                  <div className="text-center">
                      <div className="w-16 h-16 bg-[#F3F8E4] rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8 text-[#728552]" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                      </svg>
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">Policy Management</h3>
                    <p className="text-sm text-gray-600">
                      Granular controls for data loss prevention and access management
                    </p>
                  </div>
                </div>
              }
            >
              <p>
                Enterprise research teams require secure, efficient, and comprehensive tools to gather, 
                analyze, and share information across various domains. Oasis provides the ideal platform 
                for research-intensive workflows, offering both security and productivity features that 
                enable teams to conduct thorough research while maintaining data protection and compliance.
              </p>
              
              <div className="space-y-4 mt-8">
                <Accordion title="Sales Prospecting & Lead Research" defaultOpen={true}>
                  <p>
                    Sales teams use Oasis to conduct comprehensive prospect research while maintaining 
                    data security and compliance. The browser enables secure access to CRM systems, 
                    LinkedIn Sales Navigator, industry databases, and competitive intelligence platforms.
                  </p>
                  <ul className="list-disc list-inside mt-4 space-y-2">
                    <li>Secure access to LinkedIn Sales Navigator and other prospecting tools</li>
                    <li>Automated data collection and lead scoring workflows</li>
                    <li>Integration with <abbr title="Customer Relationship Management">CRM</abbr> systems for seamless data transfer</li>
                    <li>Competitive intelligence gathering and analysis</li>
                    <li>Social media monitoring and engagement tracking</li>
                  </ul>
                </Accordion>

                <Accordion title="Market Research & Competitive Analysis">
                  <p>
                    Market research teams leverage Oasis for comprehensive industry analysis, competitor 
                    monitoring, and trend identification. The browser's AI capabilities enhance data 
                    collection and analysis while maintaining security protocols.
                  </p>
                  <ul className="list-disc list-inside mt-4 space-y-2">
                    <li>Industry report analysis and trend identification</li>
                    <li>Competitor website monitoring and content analysis</li>
                    <li>Social media sentiment analysis and brand monitoring</li>
                    <li>Financial data collection and analysis</li>
                    <li>Regulatory and compliance research</li>
                  </ul>
                </Accordion>

                <Accordion title="Due Diligence & M&A Research">
                  <p>
                    Investment and M&A teams use Oasis for thorough due diligence research, ensuring 
                    secure access to sensitive financial data, legal documents, and market intelligence 
                    while maintaining strict confidentiality requirements.
                  </p>
                  <ul className="list-disc list-inside mt-4 space-y-2">
                    <li>Financial statement analysis and verification</li>
                    <li>Legal document review and compliance checking</li>
                    <li>Management team background research</li>
                    <li>Market position and competitive landscape analysis</li>
                    <li>Risk assessment and mitigation planning</li>
                    </ul>
                </Accordion>

                <Accordion title="Academic & Scientific Research">
                  <p>
                    Research institutions and corporate R&D teams use Oasis for secure access to academic 
                    databases, scientific journals, and collaborative research platforms while protecting 
                    intellectual property and sensitive research data.
                  </p>
                  <ul className="list-disc list-inside mt-4 space-y-2">
                    <li>Academic database access (PubMed, IEEE, ACM, etc.)</li>
                    <li>Scientific literature review and citation management</li>
                    <li>Collaborative research platform integration</li>
                    <li>Patent and intellectual property research</li>
                    <li>Grant application and funding research</li>
                    </ul>
                </Accordion>

                <Accordion title="Legal Research & Compliance">
                  <p>
                    Legal teams and compliance officers use Oasis for comprehensive legal research, 
                    regulatory monitoring, and case law analysis while ensuring attorney-client privilege 
                    and data protection requirements.
                  </p>
                  <ul className="list-disc list-inside mt-4 space-y-2">
                    <li>Case law research and precedent analysis</li>
                    <li>Regulatory change monitoring and impact assessment</li>
                    <li>Contract analysis and risk identification</li>
                    <li>Intellectual property research and protection</li>
                    <li>Compliance audit preparation and documentation</li>
                    </ul>
                </Accordion>

                <Accordion title="Financial Research & Analysis">
                  <p>
                    Financial analysts and investment teams use Oasis for secure access to financial 
                    databases, market data, and trading platforms while maintaining strict security 
                    protocols and audit trails.
                  </p>
                  <ul className="list-disc list-inside mt-4 space-y-2">
                    <li>Financial database access (Bloomberg, Reuters, etc.)</li>
                    <li>Real-time market data analysis and reporting</li>
                    <li>Investment research and portfolio analysis</li>
                    <li>Risk assessment and modeling</li>
                    <li>Regulatory reporting and compliance monitoring</li>
                    </ul>
                </Accordion>

                <Accordion title="Customer Research & User Insights">
                  <p>
                    Product and marketing teams use Oasis for customer research, user behavior analysis, 
                    and market validation while protecting customer data and maintaining privacy compliance.
                  </p>
                  <ul className="list-disc list-inside mt-4 space-y-2">
                    <li>Customer survey and feedback collection</li>
                    <li>User behavior analysis and journey mapping</li>
                    <li>Market validation and product testing</li>
                    <li>Customer support research and improvement</li>
                    <li>Brand perception and reputation monitoring</li>
                    </ul>
                </Accordion>
              </div>
            </Section>
            */}
            {/* Hidden: Similar browser vendors / Competitive Landscape section
            <Section 
              id="similar-browser-vendors" 
              title="Similar browser vendors" 
              eyebrow="Competitive Landscape"
              kicker="How Oasis compares to other enterprise browser solutions"
              right={
                <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                  <div className="text-center">
                      <div className="w-16 h-16 bg-[#F3F8E4] rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8 text-[#788B59]" fill="currentColor" viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="3"/>
                        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 7.82 4 1.65 1.65 0 0 0 9 2.49V2a2 2 0 1 1 4 0v.09c0 .66.38 1.26 1 1.51.56.24 1.22.14 1.68-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06c-.47.47-.57 1.12-.33 1.68.25.62.85 1 1.51 1H21a2 2 0 1 1 0 4h-.09c-.66 0-1.26.38-1.51 1z"/>
                      </svg>
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">Centralized Control</h3>
                    <p className="text-sm text-gray-600">
                      Unified management console for enterprise-wide deployment
                    </p>
                  </div>
                </div>
              }
            >
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
              
              <div className="mt-8">
                <BrowserComparisonTable />
              </div>
            </Section>
            */}
            <Section 
              id="deployment-experience" 
              title="Deployment experience" 
              eyebrow="Implementation"
              kicker="What to expect when deploying Oasis in your organization"
              right={
                <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                  <div className="text-center">
                      <div className="w-16 h-16 bg-[#F3F8E4] rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8 text-[#788B59]" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/>
                      </svg>
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">Zero Trust Security</h3>
                    <p className="text-sm text-gray-600">
                      Never trust, always verify - comprehensive security architecture
                    </p>
                  </div>
                </div>
              }
            >
              <p>
                Oasis deployment follows a practical, incremental approach that prioritizes immediate 
                functionality over complex initial configuration. The browser works out-of-the-box, 
                allowing you to get users productive quickly while building security policies and 
                configurations over time. This approach delivers tangible value within days rather 
                than requiring months of setup and planning.
              </p>
              
              <div className="mt-8 space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-[#E0D48C] rounded-full flex items-center justify-center">
                    <span className="text-[#4A5745] font-bold text-sm">1</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Integrate with your existing identity infrastructure</h3>
                    <p className="text-gray-700">
                      Oasis seamlessly connects with your current identity provider using industry-standard 
                      protocols including <abbr title="Security Assertion Markup Language">SAML</abbr>, OAuth, and <abbr title="System for Cross-domain Identity Management">SCIM</abbr> for user provisioning and authentication.
                    </p>
                  </div>
              </div>
              
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-[#E0D48C] rounded-full flex items-center justify-center">
                    <span className="text-[#4A5745] font-bold text-sm">2</span>
                      </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Distribute Oasis to your team</h3>
                    <p className="text-gray-700">
                      Deploy through your existing device management platform (VMware Workspace ONE, Citrix Endpoint Management, 
                      etc.) or provide a secure download link for self-service installation. The process 
                      is straightforward: download, install, and start using.
                    </p>
                    </div>
                    </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-[#E0D48C] rounded-full flex items-center justify-center">
                    <span className="text-[#4A5745] font-bold text-sm">3</span>
                    </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Users get up and running immediately</h3>
                    <p className="text-gray-700">
                      Team members authenticate through your existing identity system and can instantly 
                      import their bookmarks, saved passwords, and browser preferences for a familiar experience.
                      </p>
                    </div>
                  </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-[#E0D48C] rounded-full flex items-center justify-center">
                    <span className="text-[#4A5745] font-bold text-sm">4</span>
                    </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Gradually implement security policies</h3>
                    <p className="text-gray-700">
                      Begin with a pilot group and specific applications to develop policies that match 
                      your workflows. As you gain experience, expand to additional teams and use cases 
                      to build comprehensive security coverage.
                    </p>
                    </div>
                    </div>
                    </div>
              
              <div className="mt-8 bg-[#F3F8E4] rounded-lg p-6">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 bg-[#E0D48C] rounded-full flex items-center justify-center mr-3">
                    <svg className="w-5 h-5 text-[#788B59]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                    </div>
                  <h3 className="text-lg font-semibold text-[#4A5745]">Why This Approach Works</h3>
                  </div>
                <ul className="text-[#4A5745] space-y-2">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-[#728552] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Ready-to-use browser eliminates lengthy setup processes</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-[#728552] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Users can be productive while policies are being developed</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-[#728552] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Rapid time-to-value with measurable results in days</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-[#728552] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Phased rollout reduces risk and allows for learning and adjustment</span>
                  </li>
                </ul>
                </div>
            </Section>
            <Section 
              id="user-experience" 
              title="User Experience" 
              eyebrow="Interface & Usability"
              kicker="How Oasis feels to use day-to-day"
              right={
                <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                  <div className="text-center">
                      <div className="w-16 h-16 bg-[#F3F8E4] rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8 text-[#728552]" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
                      </svg>
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">Productivity Focused</h3>
                    <p className="text-sm text-gray-600">
                      Enhanced user experience without compromising security
                    </p>
                  </div>
                </div>
              }
            >
              <p>
                Oasis represents the first AI browser designed to meld with the way your mind works naturally. 
                Built for ergonomic work, focus, and spatial ease, Oasis creates a soothing environment that is 
                conducive to fostering deep work, flow state, concentration, and focus.
              </p>
              
              <div className="mt-8 space-y-6">
                <div className="not-prose bg-gradient-to-br from-kahana-accent-sky/20 to-kahana-secondary-300/10 rounded-lg">
                  <h3 className="text-lg font-semibold text-[#4A5745] mb-3">Designed Like an Oasis</h3>
                  <p className="text-gray-700 mb-4">
                    We are building a soothing environment that is conducive to fostering deep work, flow state, 
                    concentration, and focus.
                  </p>
                  <ul className="text-gray-700 space-y-2">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-[#728552] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Calming visual design that reduces cognitive load</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-[#728552] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Spatial organization that mirrors natural thought patterns</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-[#728552] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Ergonomic interface designed for extended focus sessions</span>
                    </li>
                  </ul>
                </div>

                <div className="not-prose bg-gradient-to-br from-kahana-accent-sky/20 to-kahana-secondary-300/10 rounded-lg">
                  <h3 className="text-lg font-semibold text-[#4A5745] mb-3">Voice-Controlled AI Workflows</h3>
                  <p className="text-gray-700 mb-4">
                    Fast voice-controlled commands let you talk to the Oasis browser and orchestrate agentic 
                    workflows. This natural interaction model reduces friction and enables seamless multitasking.
                  </p>
                  <ul className="text-gray-700 space-y-2">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-[#728552] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Natural language commands for complex browser operations</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-[#728552] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Orchestrate multiple tasks through conversational AI</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-[#728552] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Hands-free operation for accessibility and efficiency</span>
                    </li>
                  </ul>
                    </div>

                <div className="not-prose bg-gradient-to-br from-kahana-accent-sky/20 to-kahana-secondary-300/10 rounded-lg">
                  <h3 className="text-lg font-semibold text-[#4A5745] mb-3">Spatial Ease</h3>
                  <p className="text-gray-700 mb-4">
                    Every aspect of Oasis is designed to work with your natural cognitive processes, 
                    reducing mental overhead and enabling you to focus on what matters most.
                  </p>
                  <ul className="text-gray-700 space-y-2">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-[#728552] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Intuitive spatial organization that matches mental models</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-[#728552] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Context-aware interfaces that adapt to your workflow</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-[#728552] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Reduced cognitive switching between tasks and applications</span>
                    </li>
                  </ul>
                  </div>

                <div className="not-prose bg-gradient-to-br from-kahana-accent-sky/20 to-kahana-secondary-300/10 rounded-lg">
                  <h3 className="text-lg font-semibold text-[#4A5745] mb-3">Training and Gamification Elements</h3>
                  <p className="text-gray-700 mb-4">
                    Fine-tune your own AI assistant (companion) so that it becomes faster and more accurate for you. 
                    One of the biggest issues with other AI browsers is that they're slow, you can't monitor agents 
                    simultaneously, and many commands don't work the way you expect. We let you as the user take 
                    control of training your own AI.
                  </p>
                  <ul className="text-gray-700 space-y-2">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-[#728552] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Personalized AI training that adapts to your specific workflow patterns</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-[#728552] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Gamification elements that make AI training engaging and rewarding</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-[#728552] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Simultaneous agent monitoring for better control and oversight</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-[#728552] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>User-controlled training that improves speed and accuracy over time</span>
                    </li>
                  </ul>
                </div>

                <div className="not-prose bg-gradient-to-br from-kahana-accent-sky/20 to-kahana-secondary-300/10 rounded-lg">
                  <h3 className="text-lg font-semibold text-[#4A5745] mb-3">Hubs</h3>
                  <p className="text-gray-700 mb-4">
                    Hubs are like tab groups but amplified by 10x. Hubs let you visualize different layouts of browser 
                    tabs, for example you can see two, three, four tabs open side by side, 3-way, or quad box. 
                    It's like having multiple monitors in your browser window.
                  </p>
                  <ul className="text-gray-700 space-y-2">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-[#728552] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Advanced tab visualization with side-by-side, 3-way, and quad layouts</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-[#728552] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Multiple monitor experience within a single browser window</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-[#728552] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Enhanced productivity through simultaneous content viewing</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-[#728552] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Organized workspace management for complex workflows</span>
                    </li>
                  </ul>
                </div>

                <div className="not-prose bg-gradient-to-br from-kahana-accent-sky/20 to-kahana-secondary-300/10 rounded-lg">
                  <h3 className="text-lg font-semibold text-[#4A5745] mb-3">Enterprise Branding and Messaging</h3>
                  <p className="text-gray-700 mb-4">
                    Oasis enables organizations to apply company branding and tailored messaging throughout the browser 
                    experience, ensuring users always see their organization's identity. When security events occur, 
                    users receive notifications with company-specific branding and clear messaging that explains what 
                    happened, why, and what to do next.
                  </p>
                  <ul className="text-gray-700 space-y-2">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-[#728552] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Custom company branding throughout the browser interface</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-[#728552] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Tailored messaging for security events and policy violations</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-[#728552] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Clear explanations of what happened and next steps</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-[#728552] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Consistent organizational identity across all user interactions</span>
                    </li>
                  </ul>
                </div>
              </div>
            </Section>
            
            <Section 
              id="faqs" 
              title="FAQs" 
              eyebrow="Frequent Questions About Enterprise Browsers"
              kicker="Comprehensive answers to technical and business questions"
              right={
                <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                  <div className="text-center">
                      <div className="w-16 h-16 bg-[#F3F8E4] rounded-full flex items-center justify-center mx-auto mb-4">
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
              <div className="space-y-4">
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
            
            
            
            
            
            <Section 
              id="getting-started-with-oasis" 
              title="Getting Started with Oasis" 
              eyebrow="Getting Started"
              kicker="Ready to Begin?" 
              right={
                <div className="space-y-6">
                  <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-[#F3F8E4] rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8 text-[#788B59]" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                        </svg>
                      </div>
                      <h3 className="font-semibold text-gray-900 mb-2">Take Action</h3>
                      <p className="text-sm text-gray-600">
                        Schedule a demo or get in touch to begin
                      </p>
                    </div>
                  </div>
                  <KeyPointsCard>Ready to transform your enterprise browsing experience.</KeyPointsCard>
                </div>
              }
            >
              <div className="space-y-6">
                <p>
                  Ready to get started with Oasis? We've made it easy for you to take the next step. 
                  Whether you want to see Oasis in action or have questions about implementation, 
                  we're here to help guide you through the process.
                </p>
                <p>
                  Our team is ready to work with you to understand your organization's specific needs 
                  and show you how Oasis can transform your enterprise browsing experience. From 
                  initial consultation through deployment and ongoing support, we're committed to 
                  your success.
                </p>
              </div>
              
              <div className="mt-12">
                <Link href="/contact">
                  <button className="nav-button get-in-touch text-white font-bold px-4 py-2 text-sm rounded-md" style={{ background: COLORS.ctaPrimary }} onMouseOver={(e) => e.currentTarget.style.background = COLORS.ctaHover} onMouseOut={(e) => e.currentTarget.style.background = COLORS.ctaPrimary}>
                    Get in Touch
                  </button>
                </Link>
              </div>
            </Section>
          </main>
        </div>


        <BackToTop />
      </div>

      <style jsx global>{`
        :root { color-scheme: light dark; }
        @media (prefers-color-scheme: dark) {
          body { background: #0b1526; color: #e5e7eb; }
          header, .toc nav { background: #fff ; border-color: #1f2a44 ; }
          a { color: #7dd3d3; }
          header h1 { color: #ffffff; }
        }
        /* Remove old layout styles */
        html { scroll-behavior: smooth; }
        
        /* Override global link styles for enterprise buyer guide */
        a:not(.nav-button):not(.contact-sales-btn):not(.pricing-button) {
          color: ${COLORS.primary} !important;
          text-decoration: underline !important;
        }
        a:not(.nav-button):not(.contact-sales-btn):not(.pricing-button):hover {
          color: ${COLORS.accent} !important;
        }
        
        a:focus, button:focus, select:focus { outline: 2px solid ${COLORS.accent}; outline-offset: 2px; }
        
        /* Override global button styles for accordions only */
        .accordion-container .accordion-button {
          background-color: transparent !important;
          color: #4A5745 !important;
          font-weight: 600 !important;
          border: none !important;
          border-radius: 6px !important;
          padding: 16px 20px !important;
          cursor: pointer !important;
          transition: background-color 0.2s ease !important;
        }
        
        .accordion-container .accordion-button:hover {
          background-color: #E0D48C !important;
          color: #4A5745 !important;
        }
        
        /* Modern link styling */
        .prose a {
          color: ${COLORS.primary};
          text-decoration: underline;
          text-underline-offset: 3px;
          transition: color 0.2s ease;
        }
        .prose a:hover {
          color: ${COLORS.accent};
        }
        
        /* Override global button styles for persona selector */
        div[role="tablist"] button[role="tab"],
        button[role="tab"] {
          background-color: #F3F8E4 !important;
          border: 1px solid #d1d5db !important;
          color: #788B59 !important;
          font-weight: normal !important;
          border-radius: 0.375rem !important;
          padding: 0.5rem 1rem !important;
        }
        button[role="tab"][aria-selected="true"],
        div[role="tablist"] button[role="tab"][aria-selected="true"] {
          background-color: #F3F8E4 !important;
          border-color: #728552 !important;
          border-width: 2px !important;
          color: #4A5745 !important;
          font-weight: 600 !important;
        }
        div[role="tablist"] button[role="tab"]:hover {
          background-color: #E0D48C !important;
          border-color: #728552 !important;
        }
        
        /* Style details/summary elements in persona cards */
        details summary {
          color: #788B59 !important;
          cursor: pointer;
          font-weight: 500;
        }
        details summary:hover {
          color: #728552 !important;
        }
        .callout-info { background: #F3F8E4; border-left: 4px solid ${COLORS.info}; }
        .callout-success { background: #E0D48C; border-left: 4px solid ${COLORS.success}; }
        .callout-warning { background: #F3F8E4; border-left: 4px solid ${COLORS.warning}; }
        .callout-error { background: #F3F8E4; border-left: 4px solid ${COLORS.error}; }
        
        /* Consistent page typography */
        .kb-typography h2 { font-size: 28px; line-height: 1.3; font-weight: 800; margin-top: 0.25rem; margin-bottom: 0.75rem; }
        @media (min-width: 1024px) { .kb-typography h2 { font-size: 32px; } }
        .kb-typography h3 { font-size: 20px; line-height: 1.35; font-weight: 700; margin-top: 1rem; margin-bottom: 0.5rem; }
        .kb-typography h4 { font-size: 18px; line-height: 1.35; font-weight: 600; margin-top: 0.75rem; margin-bottom: 0.5rem; }
        .kb-typography p { font-size: 16px; line-height: 1.7; margin-top: 0.25rem; margin-bottom: 0.75rem; }
        .kb-typography ul { margin-top: 0.25rem; margin-bottom: 0.5rem; }
        .kb-typography li { margin: 0.125rem 0; }
        @media (max-width: 640px) {
          table { display: block; }
          thead { display: none; }
          tbody, tr, td { display: block; width: 100%; }
          tr { margin-bottom: 12px; border: 1px solid #e5e7eb; border-radius: 8px; overflow: hidden; background: ${COLORS.bgCard}; }
          td { border-bottom: 1px solid #eef2f7; }
          td:last-child { border-bottom: none; }
        }
      `}</style>
    </ErrorBoundary>
  );
}


