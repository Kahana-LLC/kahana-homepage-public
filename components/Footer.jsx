import React, { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Footer() {
  const [openSection, setOpenSection] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  
  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Set initial value
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://b.sf-syn.com/badge_js?sf_id=3652674&variant_id=sf';
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <footer className="bg-kahana-ui-sunlight text-kahana-primary-dark font-style" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Footer</h2>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
          {/* Product Column */}
          <div>
            <button 
              onClick={() => toggleSection('product')} 
              className="flex justify-between items-center w-full md:hidden mb-3"
            >
              <h3 className="text-kahana-accent-terra font-semibold text-lg">Product</h3>
              <svg 
                className={`w-5 h-5 transition-transform ${openSection === 'product' ? 'rotate-180' : ''}`}
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <h3 className="text-kahana-accent-terra font-semibold mb-6 text-lg hidden md:block">Product</h3>
            <ul className={`space-y-4 ${openSection === 'product' || !isMobile ? 'block' : 'hidden'}`}>
              <li><Link href="/products/enterprise-browser" className="text-kahana-primary hover:text-kahana-accent-terra transition-colors duration-200">The Enterprise Browser</Link></li>
              <li><Link href="/products/web-application" className="text-kahana-primary hover:text-kahana-accent-terra transition-colors duration-200">Web Application</Link></li>
            </ul>
          </div>

          {/* Use Cases Column */}
          <div>
            <button 
              onClick={() => toggleSection('useCases')} 
              className="flex justify-between items-center w-full md:hidden mb-3"
            >
              <h3 className="text-kahana-accent-terra font-semibold text-lg">Use Cases</h3>
              <svg 
                className={`w-5 h-5 transition-transform ${openSection === 'useCases' ? 'rotate-180' : ''}`}
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <h3 className="text-kahana-accent-terra font-semibold mb-6 text-lg hidden md:block">Use Cases</h3>
            <ul className={`space-y-4 ${openSection === 'useCases' || !isMobile ? 'block' : 'hidden'}`}>
              <li><Link href="/solutions/saas-and-web-apps" className="text-kahana-primary hover:text-kahana-accent-terra transition-colors duration-200">SaaS and Web Apps</Link></li>
              <li><Link href="/solutions/byod" className="text-kahana-primary hover:text-kahana-accent-terra transition-colors duration-200">BYOD Workforce</Link></li>
              <li><Link href="/solutions/ma" className="text-kahana-primary hover:text-kahana-accent-terra transition-colors duration-200">M&A Onboarding</Link></li>
              <li><Link href="/solutions/contractors" className="text-kahana-primary hover:text-kahana-accent-terra transition-colors duration-200">3rd Party Contractors</Link></li>
              <li><Link href="/solutions/vdi" className="text-kahana-primary hover:text-kahana-accent-terra transition-colors duration-200">VDI Reduction</Link></li>
              <li><Link href="/solutions/zero-trust" className="text-kahana-primary hover:text-kahana-accent-terra transition-colors duration-200">Zero Trust</Link></li>
              <li><Link href="/solutions/pam" className="text-kahana-primary hover:text-kahana-accent-terra transition-colors duration-200">Privileged Access Management</Link></li>
              <li><Link href="/solutions/safe-browsing" className="text-kahana-primary hover:text-kahana-accent-terra transition-colors duration-200">Safe Browsing</Link></li>
              <li><Link href="/solutions/say-yes-at-work" className="text-kahana-primary hover:text-kahana-accent-terra transition-colors duration-200">Say Yes at work</Link></li>
              <li><Link href="/solutions/healthcare" className="text-kahana-primary hover:text-kahana-accent-terra transition-colors duration-200">Healthcare</Link></li>
              <li><Link href="/solutions/government" className="text-kahana-primary hover:text-kahana-accent-terra transition-colors duration-200">Government</Link></li>
            </ul>
          </div>

          {/* Learn Column */}
          <div>
            <button 
              onClick={() => toggleSection('learn')} 
              className="flex justify-between items-center w-full md:hidden mb-3"
            >
              <h3 className="text-kahana-accent-terra font-semibold text-lg">Learn</h3>
              <svg 
                className={`w-5 h-5 transition-transform ${openSection === 'learn' ? 'rotate-180' : ''}`}
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <h3 className="text-kahana-accent-terra font-semibold mb-6 text-lg hidden md:block">Learn</h3>
            <ul className={`space-y-4 ${openSection === 'learn' || !isMobile ? 'block' : 'hidden'}`}>
              <li><Link href="/customers" className="text-kahana-primary hover:text-kahana-accent-terra transition-colors duration-200">Customers</Link></li>
              <li><Link href="https://blog.kahana.co" className="text-kahana-primary hover:text-kahana-accent-terra transition-colors duration-200">Blog</Link></li>
              <li><Link href="/resources" className="text-kahana-primary hover:text-kahana-accent-terra transition-colors duration-200">Resources</Link></li>
            </ul>
          </div>

          {/* Partners Column */}
          <div>
            <button 
              onClick={() => toggleSection('partners')} 
              className="flex justify-between items-center w-full md:hidden mb-3"
            >
              <h3 className="text-kahana-accent-terra font-semibold text-lg">Partners</h3>
              <svg 
                className={`w-5 h-5 transition-transform ${openSection === 'partners' ? 'rotate-180' : ''}`}
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <h3 className="text-kahana-accent-terra font-semibold mb-6 text-lg hidden md:block">Partners</h3>
            <ul className={`space-y-4 ${openSection === 'partners' || !isMobile ? 'block' : 'hidden'}`}>
              <li><Link href="/partner-program" className="text-kahana-primary hover:text-kahana-accent-terra transition-colors duration-200">Partner Program</Link></li>
            </ul>
          </div>

          {/* About Column */}
          <div>
            <button 
              onClick={() => toggleSection('about')} 
              className="flex justify-between items-center w-full md:hidden mb-3"
            >
              <h3 className="text-kahana-accent-terra font-semibold text-lg">About</h3>
              <svg 
                className={`w-5 h-5 transition-transform ${openSection === 'about' ? 'rotate-180' : ''}`}
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <h3 className="text-kahana-accent-terra font-semibold mb-6 text-lg hidden md:block">About</h3>
            <ul className={`space-y-4 ${openSection === 'about' || !isMobile ? 'block' : 'hidden'}`}>
              <li><Link href="/about" className="text-kahana-primary hover:text-kahana-accent-terra transition-colors duration-200">About Kahana</Link></li>
              <li><Link href="/support" className="text-kahana-primary hover:text-kahana-accent-terra transition-colors duration-200">Support</Link></li>
              <li><Link href="/press" className="text-kahana-primary hover:text-kahana-accent-terra transition-colors duration-200">Press</Link></li>
              <li><Link href="/careers" className="text-kahana-primary hover:text-kahana-accent-terra transition-colors duration-200">Careers</Link></li>
              <li><Link href="/events" className="text-kahana-primary hover:text-kahana-accent-terra transition-colors duration-200">Events</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-kahana-secondary-light/30">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-8">
              <span className="text-kahana-primary-light/80 text-sm">&copy; Kahana Group Inc., 2025. All rights reserved</span>
              <div className="hidden md:flex items-center space-x-8">
                <Link href="/faq" className="text-kahana-primary hover:text-kahana-accent-terra transition-colors duration-200 text-sm">FAQ</Link>
                <Link href="/privacy-policy" className="text-kahana-primary hover:text-kahana-accent-terra transition-colors duration-200 text-sm">Privacy</Link>
                <Link href="/terms-and-conditions" className="text-kahana-primary hover:text-kahana-accent-terra transition-colors duration-200 text-sm">Terms</Link>
                <Link href="/right-to-work" className="text-kahana-primary hover:text-kahana-accent-terra transition-colors duration-200 text-sm">Right to Work</Link>
                <Link href="/sales" className="text-kahana-primary hover:text-kahana-accent-terra transition-colors duration-200 text-sm">Contact Sales</Link>
              </div>
            </div>
            <div className="flex items-center space-x-6 mt-6 md:mt-0">
              <Link href="https://linkedin.com" className="text-kahana-primary hover:text-kahana-accent-terra transition-colors duration-200">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </Link>
              <Link href="https://twitter.com" className="text-kahana-primary hover:text-kahana-accent-terra transition-colors duration-200">
                <span className="sr-only">Twitter</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </Link>
            </div>
          </div>
          {/* Mobile Footer Links */}
          <div className="md:hidden mt-6 flex flex-wrap justify-center gap-6">
            <Link href="/faq" className="text-kahana-primary hover:text-kahana-accent-terra transition-colors duration-200 text-sm">FAQ</Link>
            <Link href="/privacy-policy" className="text-kahana-primary hover:text-kahana-accent-terra transition-colors duration-200 text-sm">Privacy</Link>
            <Link href="/terms-and-conditions" className="text-kahana-primary hover:text-kahana-accent-terra transition-colors duration-200 text-sm">Terms</Link>
            <Link href="/right-to-work" className="text-kahana-primary hover:text-kahana-accent-terra transition-colors duration-200 text-sm">Right to Work</Link>
            <Link href="/sales" className="text-kahana-primary hover:text-kahana-accent-terra transition-colors duration-200 text-sm">Contact Sales</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
