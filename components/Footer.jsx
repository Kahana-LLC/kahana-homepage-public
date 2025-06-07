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
    let scriptElement = null;
    
    try {
      // Check if script is already loaded
      if (!document.querySelector('script[src*="sf-syn.com"]')) {
        scriptElement = document.createElement('script');
        scriptElement.async = true;
        scriptElement.src = 'https://b.sf-syn.com/badge_js?sf_id=3652674&variant_id=sf';
        
        // Add error handling
        scriptElement.onerror = (error) => {
          console.warn('Non-critical script failed to load:', error);
        };
        
        document.body.appendChild(scriptElement);
      }
    } catch (error) {
      console.warn('Non-critical script error:', error);
    }

    return () => {
      if (scriptElement && document.body.contains(scriptElement)) {
        document.body.removeChild(scriptElement);
      }
    };
  }, []);

  return (
    <footer className="relative bg-gradient-to-b from-indigo-50 to-indigo-100 text-kahana-primary font-style before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_top,theme(colors.kahana.accent.coral/0.1),transparent_70%)] before:pointer-events-none" aria-labelledby="footer-heading">
      <div className="relative">
        <h2 id="footer-heading" className="sr-only">Footer</h2>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 md:grid-cols-6 gap-12">
            {/* Product Column */}
            <div>
              <button 
                onClick={() => toggleSection('product')} 
                className="flex justify-between items-center w-full md:hidden mb-3"
              >
                <h3 className="text-kahana-accent-purple font-semibold text-lg">Product</h3>
                <svg 
                  className={`w-5 h-5 transition-transform ${openSection === 'product' ? 'rotate-180' : ''}`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <h3 className="text-kahana-accent-purple font-semibold mb-6 text-lg hidden md:block">Product</h3>
              <ul className={`space-y-4 ${openSection === 'product' || !isMobile ? 'block' : 'hidden'}`}>
                <li><Link href="/products/enterprise-browser" className="text-kahana-primary hover:text-kahana-accent-coral transition-colors duration-200">Oasis Enterprise Browser</Link></li>
                <li><Link href="/products/web-application" className="text-kahana-primary hover:text-kahana-accent-coral transition-colors duration-200">Web Application</Link></li>
              </ul>
            </div>

            {/* Use Cases Column */}
            <div>
              <button 
                onClick={() => toggleSection('useCases')} 
                className="flex justify-between items-center w-full md:hidden mb-3"
              >
                <h3 className="text-kahana-accent-purple font-semibold text-lg">Use Cases</h3>
                <svg 
                  className={`w-5 h-5 transition-transform ${openSection === 'useCases' ? 'rotate-180' : ''}`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <h3 className="text-kahana-accent-purple font-semibold mb-6 text-lg hidden md:block">Use Cases</h3>
              <ul className={`space-y-4 ${openSection === 'useCases' || !isMobile ? 'block' : 'hidden'}`}>
                <li><Link href="/solutions/saas-and-web-apps" className="text-kahana-primary hover:text-kahana-accent-lavender transition-colors duration-200">SaaS & Web Apps</Link></li>
                <li><Link href="/solutions/remote-workforce" className="text-kahana-primary hover:text-kahana-accent-lavender transition-colors duration-200">Remote Workforce Security</Link></li>
                <li><Link href="/solutions/merger-integration" className="text-kahana-primary hover:text-kahana-accent-lavender transition-colors duration-200">Merger Integration</Link></li>
                <li><Link href="/solutions/external-workforce" className="text-kahana-primary hover:text-kahana-accent-lavender transition-colors duration-200">External Workforce Access</Link></li>
                <li><Link href="/solutions/vdi-reduction" className="text-kahana-primary hover:text-kahana-accent-lavender transition-colors duration-200">VDI Reduction</Link></li>
                <li><Link href="/solutions/zero-trust-security" className="text-kahana-primary hover:text-kahana-accent-lavender transition-colors duration-200">Zero Trust Security</Link></li>
                <li><Link href="/solutions/privileged-user-management" className="text-kahana-primary hover:text-kahana-accent-lavender transition-colors duration-200">Privileged User Management</Link></li>
                <li><Link href="/solutions/secure-browsing" className="text-kahana-primary hover:text-kahana-accent-lavender transition-colors duration-200">Secure Web Browsing</Link></li>
                <li><Link href="/solutions/workplace-enablement" className="text-kahana-primary hover:text-kahana-accent-lavender transition-colors duration-200">Workplace Enablement</Link></li>
              </ul>
            </div>

            {/* Learn Column */}
            <div>
              <button 
                onClick={() => toggleSection('learn')} 
                className="flex justify-between items-center w-full md:hidden mb-3"
              >
                <h3 className="text-kahana-accent-purple font-semibold text-lg">Learn</h3>
                <svg 
                  className={`w-5 h-5 transition-transform ${openSection === 'learn' ? 'rotate-180' : ''}`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <h3 className="text-kahana-accent-purple font-semibold mb-6 text-lg hidden md:block">Learn</h3>
              <ul className={`space-y-4 ${openSection === 'learn' || !isMobile ? 'block' : 'hidden'}`}>
                <li><Link href="/blog" className="text-kahana-primary hover:text-kahana-accent-lavender transition-colors duration-200">Blog</Link></li>
                <li><Link href="/docs" className="text-kahana-primary hover:text-kahana-accent-lavender transition-colors duration-200">Docs</Link></li>
                <li><Link href="/subscribe-to-insights" className="text-kahana-primary hover:text-kahana-accent-lavender transition-colors duration-200">Newsletter</Link></li>
                <li><Link href="/community" className="text-kahana-primary hover:text-kahana-accent-lavender transition-colors duration-200">Community</Link></li>
              </ul>
            </div>

            {/* Markets Column */}
            <div>
              <button 
                onClick={() => toggleSection('markets')} 
                className="flex justify-between items-center w-full md:hidden mb-3"
              >
                <h3 className="text-kahana-accent-purple font-semibold text-lg">Markets</h3>
                <svg 
                  className={`w-5 h-5 transition-transform ${openSection === 'markets' ? 'rotate-180' : ''}`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <h3 className="text-kahana-accent-purple font-semibold mb-6 text-lg hidden md:block">Markets</h3>
              <ul className={`space-y-4 ${openSection === 'markets' || !isMobile ? 'block' : 'hidden'}`}>
                <li><Link href="/markets/manufacturing" className="text-kahana-primary hover:text-kahana-accent-coral transition-colors duration-200">Manufacturing</Link></li>
                <li><Link href="/markets/professional" className="text-kahana-primary hover:text-kahana-accent-coral transition-colors duration-200">Professional Services</Link></li>
                <li><Link href="/markets/healthcare" className="text-kahana-primary hover:text-kahana-accent-coral transition-colors duration-200">Healthcare</Link></li>
                <li><Link href="/markets/finance" className="text-kahana-primary hover:text-kahana-accent-coral transition-colors duration-200">Finance</Link></li>
                <li><Link href="/markets/energy-utilities" className="text-kahana-primary hover:text-kahana-accent-coral transition-colors duration-200">Energy & Utilities</Link></li>
                <li><Link href="/markets/retail" className="text-kahana-primary hover:text-kahana-accent-coral transition-colors duration-200">Retail & E-commerce</Link></li>
                <li><Link href="/markets/government" className="text-kahana-primary hover:text-kahana-accent-coral transition-colors duration-200">Government & Public Sector</Link></li>
                <li><Link href="/markets/technology" className="text-kahana-primary hover:text-kahana-accent-coral transition-colors duration-200">Technology</Link></li>
                <li><Link href="/markets/education" className="text-kahana-primary hover:text-kahana-accent-coral transition-colors duration-200">Education</Link></li>
                <li><Link href="/markets/hospitality" className="text-kahana-primary hover:text-kahana-accent-coral transition-colors duration-200">Hospitality</Link></li>
              </ul>
            </div>

            {/* Partners Column */}
            <div>
              <button 
                onClick={() => toggleSection('partners')} 
                className="flex justify-between items-center w-full md:hidden mb-3"
              >
                <h3 className="text-kahana-accent-purple font-semibold text-lg">Partners</h3>
                <svg 
                  className={`w-5 h-5 transition-transform ${openSection === 'partners' ? 'rotate-180' : ''}`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <h3 className="text-kahana-accent-purple font-semibold mb-6 text-lg hidden md:block">Partners</h3>
              <ul className={`space-y-4 ${openSection === 'partners' || !isMobile ? 'block' : 'hidden'}`}>
                <li><Link href="/partners" className="text-kahana-primary hover:text-kahana-accent-lavender transition-colors duration-200">Partner Program</Link></li>
              </ul>
            </div>

            {/* About Column */}
            <div>
              <button 
                onClick={() => toggleSection('about')} 
                className="flex justify-between items-center w-full md:hidden mb-3"
              >
                <h3 className="text-kahana-accent-purple font-semibold text-lg">About</h3>
                <svg 
                  className={`w-5 h-5 transition-transform ${openSection === 'about' ? 'rotate-180' : ''}`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <h3 className="text-kahana-accent-purple font-semibold mb-6 text-lg hidden md:block">About</h3>
              <ul className={`space-y-4 ${openSection === 'about' || !isMobile ? 'block' : 'hidden'}`}>
                <li><Link href="/about" className="text-kahana-primary hover:text-kahana-accent-lavender transition-colors duration-200">About Kahana</Link></li>
                <li><Link href="/support" className="text-kahana-primary hover:text-kahana-accent-lavender transition-colors duration-200">Support</Link></li>
                <li><Link href="/careers" className="text-kahana-primary hover:text-kahana-accent-lavender transition-colors duration-200">Careers</Link></li>
              </ul>
            </div>
          </div>

          <div className="mt-16 pt-8 border-t border-kahana-secondary-light/20">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="flex items-center space-x-8">
                <span className="text-kahana-primary text-sm">&copy; Kahana Group Inc., 2025. All rights reserved</span>
                <div className="hidden md:flex items-center space-x-8">
                  <Link href="/faq" className="text-kahana-primary hover:text-kahana-accent-lavender transition-colors duration-200 text-sm">FAQ</Link>
                  <Link href="/privacy-policy" className="text-kahana-primary hover:text-kahana-accent-lavender transition-colors duration-200 text-sm">Privacy</Link>
                  <Link href="/terms-and-conditions" className="text-kahana-primary hover:text-kahana-accent-lavender transition-colors duration-200 text-sm">Terms</Link>
                  <Link href="/right-to-work" className="text-kahana-primary hover:text-kahana-accent-lavender transition-colors duration-200 text-sm">Right to Work</Link>
                  <Link href="/sales" className="text-kahana-primary hover:text-kahana-accent-lavender transition-colors duration-200 text-sm">Contact Sales</Link>
                </div>
              </div>
              <div className="flex items-center space-x-6 mt-6 md:mt-0">
                <Link 
                  href="https://www.linkedin.com/company/kahana-co" 
                  target="_blank" 
                  rel="noopener noreferrer nofollow" 
                  className="text-[#C17F11] hover:text-[#A66F0E] transition-colors duration-200"
                  aria-label="Visit Kahana on LinkedIn"
                >
                  <span className="sr-only">LinkedIn</span>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </Link>
              </div>
            </div>
            {/* Mobile Footer Links */}
            <div className="md:hidden mt-6 flex flex-wrap justify-center gap-6">
              <Link href="/faq" className="text-kahana-primary hover:text-kahana-accent-lavender transition-colors duration-200 text-sm">FAQ</Link>
              <Link href="/privacy-policy" className="text-kahana-primary hover:text-kahana-accent-lavender transition-colors duration-200 text-sm">Privacy</Link>
              <Link href="/terms-and-conditions" className="text-kahana-primary hover:text-kahana-accent-lavender transition-colors duration-200 text-sm">Terms</Link>
              <Link href="/right-to-work" className="text-kahana-primary hover:text-kahana-accent-lavender transition-colors duration-200 text-sm">Right to Work</Link>
              <Link href="/sales" className="text-kahana-primary hover:text-kahana-accent-lavender transition-colors duration-200 text-sm">Contact Sales</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
