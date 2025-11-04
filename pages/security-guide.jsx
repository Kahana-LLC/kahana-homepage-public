import React, { useEffect, useMemo, useRef, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import TableOfContents from '../components/TableOfContents';
import KeyPointsCard from '../components/KeyPointsCard';
import ErrorBoundary from '../components/ErrorBoundary';

// Brand tokens
const COLORS = {
  primary: '#0A2240',
  accent: '#009999',
  bgPage: '#F5F7FA',
  bgCard: '#FFFFFF',
  muted: '#5C6B7A',
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
            <span style={{ width: 28, height: 28, borderRadius: 6, background: COLORS.primary, display: 'inline-block', marginRight: 10 }} />
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
      backgroundColor: '#ffffff',
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
        onMouseEnter={(e) => e.target.style.backgroundColor = '#f9fafb'}
        onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
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
        <div style={{ width: 36, height: 36, borderRadius: 999, background: COLORS.accent, color: '#083b3b', fontWeight: 800, display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>{initials}</div>
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
      className="py-20 px-4 lg:px-8 scroll-mt-24 border-b border-gray-100 last:border-b-0"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            {eyebrow && (
              <div className="text-sm font-semibold text-[#009999] uppercase tracking-wider mb-4">
                {eyebrow}
              </div>
            )}
            <h2 
              id={`${id}-title`} 
              className="text-3xl lg:text-4xl font-bold text-[#0A2240] mb-6 leading-tight"
            >
              {title}
            </h2>
            {kicker && (
              <p className="text-xl text-gray-600 mb-8 leading-relaxed font-medium">
                {kicker}
              </p>
            )}
            <div className="prose prose-lg max-w-none text-[#0A2240] leading-relaxed space-y-6">
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

export default function SecurityRoadmapPage() {
  // Exact headings/order with subsections
  const structure = [
    { id: 'overview', label: 'Overview' },
    { id: 'chromium-foundation-deep-dive', label: 'Chromium Foundation (Deep Dive)' },
    { id: 'seamless-sso-integration', label: 'Seamless SSO Integration' },
    { id: 'granular-policy-control', label: 'Granular Policy Control' },
    { id: 'detailed-audit-logging', label: 'Detailed Audit Logging' },
    { id: 'centralized-management', label: 'Centralized Management' },
    { id: 'security-focused-architecture', label: 'Security-Focused Architecture: Zero Trust by Design', children: [
      { id: 'enhanced-csp', label: 'Enhanced CSP' },
      { id: 'advanced-certificate-management', label: 'Advanced Certificate Management' },
      { id: 'granular-permission-management', label: 'Granular Permission Management' },
      { id: 'strict-mixed-content-protection', label: 'Strict Mixed Content Protection' },
      { id: 'enhanced-csp-details', label: 'Enhanced CSP (Details + Examples)' },
      { id: 'advanced-certificate-management-details', label: 'Advanced Certificate Management (Details)' },
    ] },
    { id: 'modern-browsing-productivity', label: 'Modern Browsing & Productivity' },
    { id: 'hub-based-organization', label: 'Hub-Based Organization' },
    { id: 'multi-view-capabilities', label: 'Multi-View Capabilities' },
    { id: 'smart-navigation', label: 'Smart Navigation' },
    { id: 'ai-powered-assistant', label: 'AI-Powered Assistant' },
    { id: 'technical-foundation', label: 'Technical Foundation' },
    { id: 'key-enterprise-use-cases', label: 'Key Enterprise Use Cases' },
    { id: 'implementation-deployment', label: 'Implementation & Deployment' },
    { id: 'roi-business-value', label: 'ROI & Business Value' },
    { id: 'oasis-vs-competition', label: 'Oasis vs. The Competition' },
    { id: 'security-compliance-certifications', label: 'Security Compliance & Certifications' },
    { id: 'future-roadmap-innovation', label: 'Future Roadmap & Innovation' },
    { id: 'key-questions-for-buyers', label: 'Key Questions for Buyers' },
    { id: 'pricing-licensing', label: 'Pricing & Licensing' },
    { id: 'getting-started-with-oasis', label: 'Getting Started with Oasis' },
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
        <title>Security Road Map — Oasis</title>
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
        />

        <div className="min-h-screen bg-[#F5F7FA]">
          <main className="lg:ml-80">
            <Section 
              id="overview" 
              title="Overview" 
              eyebrow="Introduction"
              kicker="Enterprise browser built on Chromium with integrated security & IT controls"
              right={
                <div className="space-y-6">
                  <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                    <img 
                      src="/kahana_logo_transparent.svg" 
                      alt="Oasis Enterprise Browser" 
                      className="w-full h-auto mb-4"
                    />
                    <p className="text-sm text-gray-600 text-center">
                      Modern enterprise browser with integrated security
                    </p>
                  </div>
                <KeyPointsCard>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-[#009999] rounded-full mt-2 flex-shrink-0" />
                      <span>Enterprise browser built on Chromium</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-[#009999] rounded-full mt-2 flex-shrink-0" />
                      <span>Integrated security & IT controls</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-[#009999] rounded-full mt-2 flex-shrink-0" />
                      <span>Secure, compatible, and fast</span>
                    </li>
                  </ul>
                </KeyPointsCard>
                </div>
              }
            >
              <p>
                Oasis is a modern enterprise browser designed to provide organizations with the security, 
                control, and productivity they need in today's distributed workforce. Built on the robust 
                Chromium foundation, Oasis delivers seamless compatibility with existing web applications 
                while adding enterprise-grade security features and IT management capabilities.
              </p>
              <p>
                Unlike traditional browsers that require additional security layers, Oasis integrates 
                security controls directly into the browser, providing a unified experience that's both 
                secure and user-friendly. This approach eliminates the need for complex endpoint management 
                solutions while ensuring consistent policy enforcement across all web-based activities.
              </p>
              <p>
                The Oasis Enterprise Browser is specifically engineered to meet the unique security and 
                productivity needs of modern enterprises. By integrating advanced security features with 
                user-friendly functionalities, it offers a robust solution for organizations aiming to 
                enhance their web security posture while maintaining operational efficiency.
              </p>
            </Section>
            <Section 
              id="chromium-foundation-deep-dive" 
              title="Chromium Foundation" 
              eyebrow="Technical Foundation"
              kicker="Standards, security, compatibility, performance, and future-proofing"
              right={
                <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                      </svg>
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">Chromium Engine</h3>
                    <p className="text-sm text-gray-600">
                      Built on the same foundation as Chrome and Edge, ensuring compatibility and performance
                    </p>
                  </div>
                </div>
              }
            >
              <p>
                Oasis is built on the Chromium open-source project, the same foundation that powers 
                Google Chrome and Microsoft Edge. This choice provides several critical advantages 
                for enterprise environments.
              </p>
              <p>
                <strong>Standards Compliance:</strong> Chromium implements the latest web standards, 
                ensuring compatibility with modern web applications and APIs. This means your existing 
                web-based tools and applications will work seamlessly without modification.
              </p>
              <p>
                <strong>Security Updates:</strong> Chromium receives regular security updates from 
                Google's security team, providing rapid response to emerging threats. Oasis inherits 
                these security improvements while adding enterprise-specific enhancements.
              </p>
              <p>
                <strong>Performance:</strong> The V8 JavaScript engine and Blink rendering engine 
                provide industry-leading performance, ensuring fast page loads and smooth user 
                experiences even with complex enterprise applications.
              </p>
              <p>
                Built upon the open-source Chromium project, the Oasis Enterprise Browser benefits from 
                a secure and stable foundation. Chromium's architecture emphasizes security through 
                sandboxing techniques, which isolate web pages and plugins, reducing the risk of 
                malicious code affecting the entire system. This multi-process design enhances both 
                security and performance, providing a reliable browsing experience.
              </p>
            </Section>
            
            <Section 
              id="seamless-sso-integration" 
              title="Seamless SSO Integration" 
              eyebrow="Authentication"
              kicker="SAML, OAuth2, OIDC support with built-in MFA"
              right={
                <div className="space-y-6">
                  <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 24 24">
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
                      <div className="w-1.5 h-1.5 bg-[#009999] rounded-full mt-2 flex-shrink-0" />
                      <span>Works with Okta, Azure AD, Ping</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-[#009999] rounded-full mt-2 flex-shrink-0" />
                      <span>Built-in MFA support</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-[#009999] rounded-full mt-2 flex-shrink-0" />
                      <span>Seamless user experience</span>
                    </li>
                  </ul>
                </KeyPointsCard>
                </div>
              }
            >
              <p>
                Oasis integrates seamlessly with your existing identity infrastructure, supporting 
                industry-standard protocols including SAML 2.0, OAuth 2.0, and OpenID Connect. 
                This ensures compatibility with major identity providers like Okta, Microsoft Azure AD, 
                and Ping Identity.
              </p>
              <p>
                The browser handles authentication transparently, automatically signing users into 
                web applications without requiring additional login steps. Multi-factor authentication 
                is supported natively, providing an additional layer of security without compromising 
                user experience.
              </p>
              <p>
                Single Sign-On (SSO) integration streamlines user authentication by allowing access to 
                multiple applications with a single set of credentials. By supporting protocols such as 
                SAML, OAuth2, and OIDC, the Oasis Enterprise Browser ensures secure and efficient user 
                authentication, reducing password fatigue and enhancing overall security.
              </p>
            </Section>
            <Section 
              id="granular-policy-control" 
              title="Granular Policy Control" 
              eyebrow="Security Management"
              kicker="DLP, access controls, app restrictions"
              right={
                <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
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
                Implementing robust policy controls is crucial for enforcing security measures across an 
                organization. The Oasis Enterprise Browser offers comprehensive policy management features, 
                including Data Loss Prevention (DLP) and access controls, enabling administrators to define 
                and enforce security policies effectively.
              </p>
              <p>
                With comprehensive policy control features, Oasis allows administrators to enforce Data Loss 
                Prevention (DLP) measures and access controls. This ensures that sensitive information is 
                protected and that users adhere to organizational security policies.
              </p>
              <p>
                Effective policy control mechanisms enable administrators to enforce security protocols across 
                the organization. This includes setting permissions for data access, defining acceptable use 
                policies, and implementing Data Loss Prevention (DLP) strategies. By controlling how data is 
                accessed and shared, organizations can mitigate risks associated with data breaches and ensure 
                compliance with regulatory requirements.
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 16 }}>
                <Icon.Sliders /> 
                <span>Enforcement, monitoring, and compliance reporting.</span>
              </div>
              
              <div className="mt-4">
                <Accordion title="Read more">
                  <div className="space-y-4">
                    <h4 className="font-semibold text-gray-900">Advanced Policy Management Features:</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li><strong>Policy Staging:</strong> Test policies in a controlled environment before deployment to ensure they work as expected without disrupting user workflows.</li>
                      <li><strong>Version Control:</strong> Track all policy changes with complete audit trails, allowing rollback to previous versions if issues arise.</li>
                      <li><strong>Approval Workflows:</strong> Multi-level approval processes for sensitive policy changes, ensuring proper governance and oversight.</li>
                      <li><strong>Drift Detection:</strong> Automated monitoring to detect when actual user behavior deviates from configured policies, alerting administrators to potential issues.</li>
                      <li><strong>Real-time Enforcement:</strong> Policies are applied instantly across all user sessions without requiring browser restarts or user intervention.</li>
                      <li><strong>Granular Controls:</strong> Fine-grained permissions for specific websites, applications, file types, and user groups.</li>
                      <li><strong>Compliance Reporting:</strong> Automated generation of compliance reports for regulatory requirements and internal audits.</li>
                    </ul>
                    <div className="bg-blue-50 p-3 rounded-lg">
                      <p className="text-sm text-blue-800">
                        <strong>Example:</strong> A financial institution can create policies that automatically block access to personal email services during work hours, prevent copying of sensitive data to external storage, and require additional authentication for high-risk websites.
                      </p>
                    </div>
                  </div>
                </Accordion>
              </div>
            </Section>
            <Section 
              id="detailed-audit-logging" 
              title="Detailed Audit Logging" 
              eyebrow="Compliance & Monitoring"
              kicker="Access, security events, policy violations"
              right={
                <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-orange-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                        <polyline points="14 2 14 8 20 8"/>
                        <line x1="16" y1="13" x2="8" y2="13"/>
                        <line x1="16" y1="17" x2="8" y2="17"/>
                        <line x1="10" y1="9" x2="8" y2="9"/>
                      </svg>
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">Audit Logging</h3>
                    <p className="text-sm text-gray-600">
                      Comprehensive tracking of all user activities and security events
                    </p>
                  </div>
                </div>
              }
            >
              <p>
                Audit logging provides a detailed record of user activities, which is essential for monitoring, 
                compliance, and forensic analysis. The Oasis Enterprise Browser includes extensive audit logging 
                capabilities, capturing events such as login attempts, data access, and configuration changes, 
                thereby supporting organizations in maintaining security and regulatory compliance.
              </p>
              <p>
                Oasis provides detailed audit logging capabilities, tracking security events and user activities. 
                This feature is crucial for compliance, forensic analysis, and identifying potential security incidents.
              </p>
              <p>
                Comprehensive audit logging is essential for monitoring user activities and system events. By 
                maintaining detailed logs, organizations can detect unauthorized access, investigate security 
                incidents, and demonstrate compliance with industry standards. Audit logs serve as a critical 
                tool for forensic analysis and continuous improvement of security measures.
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 16 }}>
                <Icon.FileText /> 
                <span>Retention, SIEM export, forensics, reporting, and timelines.</span>
              </div>
              
              <div className="mt-6 space-y-4">
                <Accordion title="Data Retention">
                  <div className="space-y-3">
                    <p className="text-sm text-gray-700">
                      Configurable retention policies ensure audit logs are maintained for the appropriate duration based on regulatory requirements and organizational needs. Support for both hot storage (immediate access) and cold storage (archived) with automated lifecycle management.
                    </p>
                    <ul className="text-sm text-gray-600 space-y-1 ml-4">
                      <li>Flexible retention periods (30 days to 7+ years)</li>
                      <li>Automated archival and deletion policies</li>
                      <li>Compliance with GDPR, SOX, HIPAA requirements</li>
                      <li>Cost-optimized storage tiering</li>
                    </ul>
                  </div>
                </Accordion>

                <Accordion title="SIEM Integration & Export">
                  <div className="space-y-3">
                    <p className="text-sm text-gray-700">
                      Seamless integration with leading SIEM platforms including Splunk, QRadar, ArcSight, and Sentinel. Real-time log streaming and batch export capabilities ensure security teams have immediate access to audit data.
                    </p>
                    <ul className="text-sm text-gray-600 space-y-1 ml-4">
                      <li>Real-time log streaming via syslog, API, or message queues</li>
                      <li>Standard formats: CEF, LEEF, JSON, CSV</li>
                      <li>Custom field mapping and data transformation</li>
                      <li>High-availability and failover support</li>
                    </ul>
                  </div>
                </Accordion>

                <Accordion title="Forensic Analysis">
                  <div className="space-y-3">
                    <p className="text-sm text-gray-700">
                      Comprehensive forensic capabilities enable detailed investigation of security incidents with complete user session reconstruction, timeline analysis, and evidence preservation for legal proceedings.
                    </p>
                    <ul className="text-sm text-gray-600 space-y-1 ml-4">
                      <li>Complete user session reconstruction</li>
                      <li>Timeline analysis with millisecond precision</li>
                      <li>Immutable log storage with cryptographic integrity</li>
                      <li>Chain of custody documentation</li>
                    </ul>
                  </div>
                </Accordion>

                <Accordion title="Compliance Reporting">
                  <div className="space-y-3">
                    <p className="text-sm text-gray-700">
                      Automated generation of compliance reports for various regulatory frameworks with customizable templates and scheduled delivery to stakeholders and auditors.
                    </p>
                    <ul className="text-sm text-gray-600 space-y-1 ml-4">
                      <li>Pre-built templates for SOX, GDPR, HIPAA, PCI DSS</li>
                      <li>Custom report builder with drag-and-drop interface</li>
                      <li>Scheduled and on-demand report generation</li>
                      <li>Digital signatures and audit trails for reports</li>
                    </ul>
                  </div>
                </Accordion>

                <Accordion title="Timeline Analysis">
                  <div className="space-y-3">
                    <p className="text-sm text-gray-700">
                      Advanced timeline visualization tools help security teams understand the sequence of events during incidents, identify attack patterns, and correlate activities across multiple users and systems.
                    </p>
                    <ul className="text-sm text-gray-600 space-y-1 ml-4">
                      <li>Interactive timeline visualization</li>
                      <li>Event correlation and pattern detection</li>
                      <li>Multi-user session analysis</li>
                      <li>Export capabilities for external analysis tools</li>
                    </ul>
                  </div>
                </Accordion>
              </div>
            </Section>
            <Section 
              id="centralized-management" 
              title="Centralized Management" 
              eyebrow="Administration"
              kicker="Unified console, provisioning, policy distribution"
              right={
                <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-indigo-600" fill="currentColor" viewBox="0 0 24 24">
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
                Centralized management provides administrators with a unified console for provisioning, 
                policy distribution, and remote management across large enterprise fleets. This approach 
                ensures consistent security posture and simplifies IT operations.
              </p>
              <p>
                The Oasis Enterprise Browser offers scalable management capabilities that grow with your 
                organization, supporting everything from small teams to large enterprises with thousands 
                of users. Remote management features enable IT teams to maintain security standards 
                regardless of user location.
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 16 }}>
                <Icon.Settings /> 
                <span>Remote management and scalability for large fleets.</span>
              </div>
            </Section>
            <Section 
              id="security-focused-architecture" 
              title="Security-Focused Architecture: Zero Trust by Design" 
              eyebrow="Security Model"
              kicker="Defense-in-depth"
              right={
                <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-red-600" fill="currentColor" viewBox="0 0 24 24">
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
                Adopting a Zero Trust security model, the Oasis Enterprise Browser ensures that no entity, 
                whether inside or outside the network, is trusted by default. This approach requires 
                continuous verification of user identities and device health, minimizing the risk of 
                unauthorized access and data breaches.
              </p>
              <p>
                Embracing a Zero Trust security model ensures that every access request is thoroughly 
                verified, regardless of its origin. This architecture minimizes the risk of unauthorized 
                access and enhances overall security posture.
              </p>
              <p>
                Adopting a Zero Trust security model ensures that no entity, whether inside or outside 
                the network, is trusted by default. This approach requires continuous verification of 
                user identities, device health, and application behaviors. Implementing Zero Trust 
                principles helps protect against advanced threats and minimizes the potential impact 
                of security breaches.
              </p>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 16 }}>
                <Icon.Shield /> 
                <span>Zero Trust by design with layered protections.</span>
              </div>
              
              <h3 id="enhanced-csp" style={{ marginTop: 24, color: COLORS.primary, fontSize: '1.25rem', fontWeight: 600 }}>Enhanced CSP</h3>
              <p>Strong CSP defaults to mitigate XSS/injection attacks and provide comprehensive content security policy enforcement.</p>
              
              <h3 id="advanced-certificate-management" style={{ marginTop: 20, color: COLORS.primary, fontSize: '1.25rem', fontWeight: 600 }}>Advanced Certificate Management</h3>
              <p>Validation, pinning, custom CAs, and Certificate Transparency monitoring for enhanced SSL/TLS security.</p>
              
              <h3 id="granular-permission-management" style={{ marginTop: 20, color: COLORS.primary, fontSize: '1.25rem', fontWeight: 600 }}>Granular Permission Management</h3>
              <p>Policies for camera, mic, clipboard, notifications, and other sensitive browser permissions.</p>
              
              <h3 id="strict-mixed-content-protection" style={{ marginTop: 20, color: COLORS.primary, fontSize: '1.25rem', fontWeight: 600 }}>Strict Mixed Content Protection</h3>
              <p>Upgrade/block insecure requests to maintain secure sessions and prevent mixed content vulnerabilities.</p>
              
              <h3 id="enhanced-csp-details" style={{ marginTop: 20, color: COLORS.primary, fontSize: '1.25rem', fontWeight: 600 }}>Enhanced CSP (Details + Examples)</h3>
              <Accordion title="Read more">
                <div className="space-y-4">
                  <h4 className="font-semibold text-gray-900">Content Security Policy (CSP) Implementation:</h4>
                  <div className="space-y-3">
                    <div>
                      <h5 className="font-medium text-gray-800">Default CSP Directives:</h5>
                      <div className="bg-gray-100 p-3 rounded text-sm font-mono">
                        <div>default-src 'self';</div>
                        <div>script-src 'self' 'unsafe-inline' https://trusted-cdn.com;</div>
                        <div>style-src 'self' 'unsafe-inline';</div>
                        <div>img-src 'self' data: https:;</div>
                        <div>connect-src 'self' https://api.company.com;</div>
                      </div>
                    </div>
                    <div>
                      <h5 className="font-medium text-gray-800">Per-Application Overlays:</h5>
                      <p className="text-sm text-gray-700">Different CSP rules for different applications - banking apps get stricter policies than general web browsing.</p>
                    </div>
                    <div>
                      <h5 className="font-medium text-gray-800">Report-Only Mode:</h5>
                      <p className="text-sm text-gray-700">Test CSP policies without blocking content, collecting violation reports to fine-tune rules before enforcement.</p>
                    </div>
                    <div className="bg-yellow-50 p-3 rounded-lg">
                      <p className="text-sm text-yellow-800">
                        <strong>Security Benefit:</strong> Prevents XSS attacks by controlling which scripts can execute and from where resources can be loaded.
                      </p>
                    </div>
                  </div>
                </div>
              </Accordion>
              
              <h3 id="advanced-certificate-management-details" style={{ marginTop: 20, color: COLORS.primary, fontSize: '1.25rem', fontWeight: 600 }}>Advanced Certificate Management (Details)</h3>
              <Accordion title="Read more">
                <div className="space-y-4">
                  <h4 className="font-semibold text-gray-900">Certificate Security Features:</h4>
                  <div className="space-y-3">
                    <div>
                      <h5 className="font-medium text-gray-800">Chain Validation:</h5>
                      <p className="text-sm text-gray-700">Complete certificate chain validation from end-entity certificate to trusted root CA, ensuring no intermediate certificates are compromised.</p>
                    </div>
                    <div>
                      <h5 className="font-medium text-gray-800">Certificate Pinning Strategies:</h5>
                      <ul className="text-sm text-gray-700 space-y-1 ml-4">
                        <li>Public key pinning for critical domains</li>
                        <li>SPKI pinning for enhanced security</li>
                        <li>Dynamic pinning updates via policy</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-medium text-gray-800">Root Certificate Injection:</h5>
                      <p className="text-sm text-gray-700">Deploy custom root certificates for internal PKI infrastructure, ensuring seamless access to internal applications.</p>
                    </div>
                    <div>
                      <h5 className="font-medium text-gray-800">Certificate Transparency (CT) Monitoring:</h5>
                      <p className="text-sm text-gray-700">Monitor CT logs for unauthorized certificate issuance, detecting potential certificate-based attacks or misconfigurations.</p>
                    </div>
                    <div className="bg-green-50 p-3 rounded-lg">
                      <p className="text-sm text-green-800">
                        <strong>Enterprise Benefit:</strong> Prevents man-in-the-middle attacks and ensures all encrypted connections are properly authenticated and trusted.
                      </p>
                    </div>
                  </div>
                </div>
              </Accordion>
            </Section>
            <Section 
              id="modern-browsing-productivity" 
              title="Modern Browsing & Productivity" 
              eyebrow="User Experience"
              kicker="Speed with safety"
              right={
                <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-teal-600" fill="currentColor" viewBox="0 0 24 24">
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
                Beyond security, the Oasis Enterprise Browser incorporates features designed to enhance user 
                productivity. These include support for modern web applications, efficient tab management, 
                and customizable user interfaces, all contributing to a seamless and efficient browsing experience.
              </p>
              <p>
                The Oasis Enterprise Browser incorporates productivity-enhancing features such as tab management, 
                bookmark synchronization, and customizable user interfaces. These tools are designed to improve 
                user efficiency while maintaining a secure browsing environment. By balancing functionality with 
                security, the browser supports the diverse needs of enterprise users.
              </p>
              <p>
                Optimized UX, keyboard-first flows, offline-ready notes, and seamless sharing with guardrails 
                ensure that security doesn't compromise productivity. The browser is designed to work the way 
                modern teams work, with intelligent features that adapt to user behavior and organizational needs.
              </p>
            </Section>
            <Section 
              id="hub-based-organization" 
              title="Hub-Based Organization" 
              eyebrow="Workspace Management"
              kicker="Focused workspaces"
              right={
                <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-cyan-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">Hub Organization</h3>
                    <p className="text-sm text-gray-600">
                      Organized workspaces for different teams and projects
                    </p>
                  </div>
                </div>
              }
            >
              <p>
                Hub-based organization creates focused digital workspaces tailored to specific team use cases 
                and workflows. This approach allows organizations to segment their digital environment based 
                on departments, projects, or security requirements, ensuring that users have access to the 
                right tools and information for their specific roles.
              </p>
              <p>
                Each hub can be configured with its own security policies, application access controls, and 
                collaboration features, providing a customized experience that enhances both security and 
                productivity. This organizational model supports complex enterprise structures while 
                maintaining clear boundaries and access controls.
              </p>
            </Section>
            
            <Section 
              id="multi-view-capabilities" 
              title="Multi-View Capabilities" 
              eyebrow="Productivity Features"
              kicker="Work in parallel"
              right={
                <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-emerald-600" fill="currentColor" viewBox="0 0 24 24">
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
              <p>
                Multi-view capabilities enable users to work with multiple applications and documents 
                simultaneously through side-by-side views and multi-window orchestration. This feature 
                is particularly valuable for knowledge workers who need to reference multiple sources 
                or work across different applications simultaneously.
              </p>
              <p>
                The browser intelligently manages window placement, sizing, and focus to optimize the 
                user experience while maintaining security boundaries. Users can create custom layouts 
                that persist across sessions, improving workflow efficiency and reducing context switching.
              </p>
            </Section>
            
            <Section 
              id="smart-navigation" 
              title="Smart Navigation" 
              eyebrow="User Experience"
              kicker="Less friction"
              right={
                <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-yellow-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">Smart Navigation</h3>
                    <p className="text-sm text-gray-600">
                      Intelligent shortcuts and context-aware features
                    </p>
                  </div>
                </div>
              }
            >
              <p>
                Smart navigation features reduce friction in daily workflows through context-aware navigation, 
                quick actions, and history intelligence. The browser learns from user behavior to provide 
                relevant suggestions and shortcuts, making common tasks faster and more intuitive.
              </p>
              <p>
                Context-aware navigation understands the user's current task and provides relevant shortcuts 
                and suggestions. History intelligence helps users quickly return to frequently accessed 
                resources, while quick actions provide one-click access to common operations, all while 
                maintaining security and compliance requirements.
              </p>
            </Section>
            
            <Section 
              id="ai-powered-assistant" 
              title="AI-Powered Assistant" 
              eyebrow="Intelligence"
              kicker="Built-in intelligence"
              right={
                <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-pink-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                      </svg>
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">AI Assistant</h3>
                    <p className="text-sm text-gray-600">
                      Privacy-aware intelligent assistance for productivity
                    </p>
                  </div>
                </div>
              }
            >
              <p>
                The AI-powered assistant provides intelligent support while maintaining privacy and policy 
                compliance. This private, policy-aware assistant can help users with common tasks, provide 
                contextual information, and suggest productivity improvements without compromising security.
              </p>
              <p>
                All AI interactions are processed locally or through secure, compliant channels, ensuring 
                that sensitive information never leaves the organization's control. The assistant respects 
                all security policies and access controls, providing helpful suggestions while maintaining 
                the highest standards of data protection.
              </p>
            </Section>
            <Section 
              id="technical-foundation" 
              title="Technical Foundation" 
              eyebrow="Architecture"
              kicker="Under the hood"
              right={
                <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-slate-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">Technical Foundation</h3>
                    <p className="text-sm text-gray-600">
                      Robust architecture built for enterprise scale
                    </p>
                  </div>
                </div>
              }
            >
              <p>
                The Oasis Enterprise Browser is built on a robust technical foundation that ensures 
                scalability, performance, and security. The architecture leverages modern web technologies 
                and security frameworks to deliver enterprise-grade capabilities while maintaining 
                compatibility with existing infrastructure.
              </p>
              <p>
                Our development methodology emphasizes security-first design, continuous integration, 
                and rigorous testing to ensure reliability and performance. The platform supports 
                various deployment models, from cloud-based SaaS to on-premises installations, 
                providing flexibility to meet diverse organizational requirements.
              </p>
              <p>
                Integration capabilities allow seamless connection with existing enterprise systems, 
                including identity providers, SIEM platforms, and management consoles. The modular 
                architecture enables organizations to customize and extend functionality based on 
                their specific needs while maintaining security and compliance standards.
              </p>
            </Section>
            <Section 
              id="key-enterprise-use-cases" 
              title="Key Enterprise Use Cases" 
              eyebrow="Real-World Applications"
              kicker="Real scenarios" 
              right={
                <div className="space-y-6">
                  <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-violet-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8 text-violet-600" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                        </svg>
                      </div>
                      <h3 className="font-semibold text-gray-900 mb-2">Enterprise Use Cases</h3>
                      <p className="text-sm text-gray-600">
                        Real-world applications across industries
                      </p>
                    </div>
                  </div>
                  <KeyPointsCard>Zero Trust enforcement, third-party controls, hybrid workforce protection.</KeyPointsCard>
                </div>
              }
            >
              <p>
                The Oasis Enterprise Browser addresses various enterprise scenarios, such as secure remote work, 
                compliance with industry regulations, and protection against web-based threats. Its features are 
                tailored to meet the diverse needs of organizations across different sectors, ensuring both 
                security and operational effectiveness.
              </p>
              <p>
                From secure SaaS application access to hybrid workforce protection, Oasis provides comprehensive 
                solutions for modern enterprise challenges. The browser's flexibility makes it suitable for 
                diverse organizational needs, from small teams to large enterprises with complex security 
                requirements.
              </p>
              <Accordion title="SaaS/Web Access">
                <div className="space-y-4">
                  <h4 className="font-semibold text-gray-900">Secure SaaS Application Access:</h4>
                  <div className="space-y-3">
                    <p className="text-sm text-gray-700">
                      <strong>Implementation:</strong> Deploy Oasis across your organization to provide secure access to cloud applications like Salesforce, Office 365, and custom web apps.
                    </p>
                    <div className="bg-green-50 p-3 rounded-lg">
                      <p className="text-sm text-green-800">
                        <strong>ROI:</strong> 40% reduction in security tool costs, 60% faster incident response, and 25% improvement in compliance audit scores.
                      </p>
                    </div>
                  </div>
                </div>
              </Accordion>
              <Accordion title="Remote/Hybrid Protection">
                <div className="space-y-4">
                  <h4 className="font-semibold text-gray-900">Browser-Native Security for Distributed Workforce:</h4>
                  <div className="space-y-3">
                    <p className="text-sm text-gray-700">
                      Replace heavy endpoint agents and VDI solutions with browser-native security controls that work regardless of device or location.
                    </p>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>No VPN required for secure web access</li>
                      <li>Consistent security policies across all devices</li>
                      <li>Reduced IT overhead and support tickets</li>
                      <li>Better user experience than traditional VDI</li>
                    </ul>
                    <div className="bg-purple-50 p-3 rounded-lg">
                      <p className="text-sm text-purple-800">
                        <strong>Cost Savings:</strong> 70% reduction in endpoint management costs compared to traditional VDI solutions.
                      </p>
                    </div>
                  </div>
                </div>
              </Accordion>
              <Accordion title="M&A and Third-Party Access">
                <div className="space-y-4">
                  <h4 className="font-semibold text-gray-900">Rapid, Secure Access for Mergers and Third Parties:</h4>
                  <div className="space-y-3">
                    <p className="text-sm text-gray-700">
                      Quickly provision secure access for acquired companies, contractors, and partners without complex network changes or trust relationships.
                    </p>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>Instant provisioning of secure browser access</li>
                      <li>Granular permissions based on role and need</li>
                      <li>No network infrastructure changes required</li>
                      <li>Complete audit trail of all access activities</li>
                    </ul>
                  </div>
                </div>
              </Accordion>
            </Section>
            <Section 
              id="implementation-deployment" 
              title="Implementation & Deployment" 
              eyebrow="Deployment Strategy"
              kicker="From plan to rollout"
              right={
                <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-amber-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">Implementation</h3>
                    <p className="text-sm text-gray-600">
                      Structured deployment from planning to rollout
                    </p>
                  </div>
                </div>
              }
            >
              <p>
                Deploying the Oasis Enterprise Browser involves a structured approach, including planning, 
                configuration, and user training. The implementation guide provides detailed steps to ensure 
                a smooth transition, maximizing the browser's benefits and achieving a strong return on investment.
              </p>
              <p>
                Our implementation methodology includes comprehensive strategies for rollout, change management, 
                and user training. We provide detailed timelines, best practices, and support resources to ensure 
                successful deployment across your organization, regardless of size or complexity.
              </p>
              <p>
                The deployment process is designed to minimize disruption while maximizing security and productivity 
                gains. From initial planning through full rollout, our team provides guidance and support to ensure 
                a successful implementation that meets your organization's specific needs and requirements.
              </p>
            </Section>
            
            <Section 
              id="roi-business-value" 
              title="ROI & Business Value" 
              eyebrow="Business Impact"
              kicker="Outcomes"
              right={
                <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                      </svg>
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">ROI & Value</h3>
                    <p className="text-sm text-gray-600">
                      Measurable business impact and return on investment
                    </p>
                  </div>
                </div>
              }
            >
              <p>
                The Oasis Enterprise Browser delivers measurable business value through cost reduction, 
                productivity improvements, risk mitigation, and enhanced compliance capabilities. Organizations 
                typically see significant ROI within the first year of deployment through reduced security 
                incidents, improved user productivity, and streamlined IT operations.
              </p>
              <p>
                Cost savings come from reduced endpoint management complexity, fewer security incidents, 
                and improved operational efficiency. Productivity gains result from seamless user experience, 
                reduced friction in daily workflows, and intelligent features that adapt to user needs.
              </p>
              <p>
                Risk reduction is achieved through comprehensive security controls, detailed audit logging, 
                and proactive threat protection. Compliance benefits include automated policy enforcement, 
                comprehensive reporting, and support for industry standards and regulations.
              </p>
            </Section>
            <Section 
              id="oasis-vs-competition" 
              title="Oasis vs. The Competition" 
              eyebrow="Competitive Advantage"
              kicker="Why we win" 
              right={
                <div className="space-y-6">
                  <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                        </svg>
                      </div>
                      <h3 className="font-semibold text-gray-900 mb-2">Competitive Edge</h3>
                      <p className="text-sm text-gray-600">
                        Superior features and capabilities vs. competitors
                      </p>
                    </div>
                  </div>
                  <KeyPointsCard>Security model, policy enforcement, UX, scalability, cost.</KeyPointsCard>
                </div>
              }
            >
              <p>
                In comparison to other enterprise browsers, the Oasis Enterprise Browser stands out due to its 
                integration of advanced security features, user-centric design, and commitment to continuous 
                improvement. Its foundation on the Chromium project ensures compatibility and performance, 
                while its unique features cater specifically to enterprise requirements.
              </p>
              <p>
                A thorough competitive analysis highlights the unique advantages of the Oasis Enterprise Browser 
                over other solutions. Key differentiators include superior security features, enhanced user 
                experience, and better integration capabilities. Understanding these distinctions helps 
                organizations make informed decisions when selecting a browser that aligns with their security 
                and productivity goals.
              </p>
              <ComparisonTable rows={comparisonRows} />
            </Section>
            <Section 
              id="security-compliance-certifications" 
              title="Security Compliance & Certifications" 
              eyebrow="Trust & Compliance"
              kicker="Trust by design"
              right={
                <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-emerald-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
                      </svg>
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">Compliance</h3>
                    <p className="text-sm text-gray-600">
                      Industry certifications and regulatory compliance
                    </p>
                  </div>
                </div>
              }
            >
              <p>
                Oasis is designed with trust and compliance at its core, supporting industry-standard 
                certifications including SOC 2, ISO 27001, and compliance with regulations such as 
                GDPR, HIPAA, and PCI DSS. Our security-first approach ensures that organizations can 
                meet their regulatory requirements while maintaining operational efficiency.
              </p>
              <p>
                Regular audits, data residency controls, and comprehensive compliance reporting provide 
                organizations with the assurance they need to operate in regulated environments. Our 
                commitment to security excellence is demonstrated through ongoing certifications and 
                third-party assessments that validate our security controls and processes.
              </p>
              <p>
                Data residency and sovereignty features ensure that sensitive information remains within 
                specified geographic boundaries, supporting organizations with strict data governance 
                requirements. Comprehensive audit trails and reporting capabilities facilitate compliance 
                with industry regulations and internal governance frameworks.
              </p>
            </Section>
            
            <Section 
              id="future-roadmap-innovation" 
              title="Future Roadmap & Innovation" 
              eyebrow="Innovation"
              kicker="What's next"
              right={
                <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-indigo-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">Future Innovation</h3>
                    <p className="text-sm text-gray-600">
                      Continuous innovation and strategic R&D roadmap
                    </p>
                  </div>
                </div>
              }
            >
              <p>
                Our future roadmap focuses on adaptive security, AI/ML integration, quantum-resistant 
                cryptography, and edge computing capabilities. We're committed to continuous innovation 
                that addresses emerging threats and evolving enterprise needs while maintaining our 
                core principles of security, usability, and performance.
              </p>
              <p>
                Strategic R&D investments ensure that Oasis remains at the forefront of enterprise 
                browser technology. We're exploring advanced AI/ML capabilities for threat detection, 
                adaptive security policies that respond to changing risk profiles, and quantum-resistant 
                encryption to future-proof our security architecture.
              </p>
              <p>
                Edge computing integration will enable distributed security processing, reducing latency 
                while maintaining comprehensive protection. Our innovation roadmap is driven by customer 
                feedback, industry trends, and emerging security challenges, ensuring that Oasis continues 
                to provide cutting-edge solutions for enterprise security needs.
              </p>
            </Section>
            <Section 
              id="key-questions-for-buyers" 
              title="Key Questions for Buyers" 
              eyebrow="Evaluation Guide"
              kicker="Evaluation guidance"
              right={
                <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-rose-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
                      </svg>
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">Buyer's Guide</h3>
                    <p className="text-sm text-gray-600">
                      Key questions to ask when evaluating solutions
                    </p>
                  </div>
                </div>
              }
            >
              <p>
                When evaluating enterprise browser solutions, it's important to ask the right questions 
                to ensure you select a platform that meets your organization's specific needs. Our 
                comprehensive evaluation guide provides 7+ key questions with detailed criteria and 
                "look for" guidance to help you make an informed decision.
              </p>
              <p>
                Key evaluation areas include security capabilities, integration requirements, scalability, 
                user experience, compliance support, and total cost of ownership. Each question is 
                designed to uncover critical requirements and help you compare solutions objectively.
              </p>
              <p>
                Our evaluation framework considers both technical requirements and business objectives, 
                ensuring that your chosen solution delivers both immediate value and long-term strategic 
                benefits. We provide detailed guidance on what to look for in each area, helping you 
                avoid common pitfalls and make the best choice for your organization.
              </p>
            </Section>
            
            <Section 
              id="pricing-licensing" 
              title="Pricing & Licensing" 
              eyebrow="Business Model"
              kicker="Simple, scalable"
              right={
                <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-lime-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-lime-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                      </svg>
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">Pricing</h3>
                    <p className="text-sm text-gray-600">
                      Flexible pricing models that scale with your needs
                    </p>
                  </div>
                </div>
              }
            >
              <p>
                Oasis offers flexible pricing and licensing models designed to scale with your organization's 
                needs. Our tiered approach provides options for organizations of all sizes, from small teams 
                to large enterprises, with volume discounts and custom licensing arrangements available.
              </p>
              <p>
                Pricing includes transparent tiers, flexible licensing models, and volume discounts for 
                larger deployments. Implementation and integration costs are clearly defined, with 
                comprehensive support and SLA options to ensure successful deployment and ongoing operation.
              </p>
              <p>
                Total cost of ownership (TCO) analysis shows significant savings compared to traditional 
                endpoint security solutions, with reduced management overhead, fewer security incidents, 
                and improved productivity. Our pricing model is designed to provide predictable costs 
                while delivering maximum value and return on investment.
              </p>
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
                      <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8 text-sky-600" fill="currentColor" viewBox="0 0 24 24">
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
                  <button className="nav-button get-in-touch bg-[#21706c] text-white font-bold hover:bg-[#15514f] px-4 py-2 text-sm rounded-md">
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
        a:focus, button:focus, select:focus { outline: 2px solid ${COLORS.accent}; outline-offset: 2px; }
        
        /* Override global button styles for accordions only */
        .accordion-container .accordion-button {
          background-color: transparent !important;
          color: #0A2240 !important;
          font-weight: 600 !important;
          border: none !important;
          border-radius: 6px !important;
          padding: 16px 20px !important;
          cursor: pointer !important;
          transition: background-color 0.2s ease !important;
        }
        
        .accordion-container .accordion-button:hover {
          background-color: #f9fafb !important;
          color: #0A2240 !important;
        }
        
        /* Modern link styling */
        .prose a {
          color: #0A2240;
          text-decoration: underline;
          text-underline-offset: 3px;
          transition: color 0.2s ease;
        }
        .prose a:hover {
          color: #009999;
        }
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


