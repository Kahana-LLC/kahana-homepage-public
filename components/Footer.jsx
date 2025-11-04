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
    <footer className="relative bg-gradient-to-b from-[#F3F8E4] to-[#F3F8E4] text-[#4A5745] font-style before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_top,#728552/0.1,transparent_70%)] before:pointer-events-none" aria-labelledby="footer-heading">
      <div className="relative">
        <h2 id="footer-heading" className="sr-only">Footer</h2>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 md:grid-cols-6 gap-12">
            {/* Product Column */}
            <div>
              <button 
                onClick={() => toggleSection('product')} 
                className="footer-mobile-dropdown flex justify-between items-center w-full md:hidden mb-3 border border-[#788B59] text-[#788B59] font-bold py-2 px-4 rounded-md appearance-none shadow-sm"
              >
                <h3 className="text-[#011910] font-semibold text-lg">Product</h3>
                <svg 
                  className={`w-5 h-5 transition-transform ${openSection === 'product' ? 'rotate-180' : ''}`}
                  fill="none" 
                  stroke="#788B59" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <h3 className="text-[#011910] font-semibold mb-6 text-lg hidden md:block">Product</h3>
              <ul className={`space-y-4 ${openSection === 'product' || !isMobile ? 'block' : 'hidden'}`}>
                <li><Link href="/products/free-agentic-browser" className="text-[#4A5745] hover:text-[#728552] transition-colors duration-200">Oasis Agentic Browser</Link></li>
                <li><Link href="/products/enterprise-browser" className="text-[#4A5745] hover:text-[#728552] transition-colors duration-200">Oasis Enterprise Browser</Link></li>
                <li><Link href="/oasis-mobile" className="text-[#4A5745] hover:text-[#728552] transition-colors duration-200">Oasis Mobile</Link></li>
                <li><Link href="/oasis-augmented-reality" className="text-[#4A5745] hover:text-[#728552] transition-colors duration-200">Oasis AR</Link></li>
                <li><Link href="/products/web-application" className="text-[#4A5745] hover:text-[#728552] transition-colors duration-200">Web Application</Link></li>
              </ul>
            </div>

            {/* Use Cases Column */}
            <div>
              <button 
                onClick={() => toggleSection('useCases')} 
                className="footer-mobile-dropdown flex justify-between items-center w-full md:hidden mb-3 border border-[#788B59] text-[#788B59] font-bold py-2 px-4 rounded-md appearance-none shadow-sm"
              >
                <h3 className="text-[#011910] font-semibold text-lg">Use Cases</h3>
                <svg 
                  className={`w-5 h-5 transition-transform ${openSection === 'useCases' ? 'rotate-180' : ''}`}
                  fill="none" 
                  stroke="#788B59" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <h3 className="text-[#011910] font-semibold mb-6 text-lg hidden md:block">Use Cases</h3>
              <ul className={`space-y-4 ${openSection === 'useCases' || !isMobile ? 'block' : 'hidden'}`}>
                <li><Link href="/solutions/saas-and-web-apps" className="text-[#4A5745] hover:text-[#728552] transition-colors duration-200">SaaS & Web Apps</Link></li>
                <li><Link href="/solutions/remote-workforce" className="text-[#4A5745] hover:text-[#728552] transition-colors duration-200">Remote Workforce Security</Link></li>
                <li><Link href="/solutions/merger-integration" className="text-[#4A5745] hover:text-[#728552] transition-colors duration-200">Merger Integration</Link></li>
                <li><Link href="/solutions/external-workforce" className="text-[#4A5745] hover:text-[#728552] transition-colors duration-200">External Workforce Access</Link></li>
                <li><Link href="/solutions/vdi-reduction" className="text-[#4A5745] hover:text-[#728552] transition-colors duration-200">VDI Reduction</Link></li>
                <li><Link href="/solutions/zero-trust-security" className="text-[#4A5745] hover:text-[#728552] transition-colors duration-200">Zero Trust Security</Link></li>
                <li><Link href="/solutions/privileged-user-management" className="text-[#4A5745] hover:text-[#728552] transition-colors duration-200">Privileged User Management</Link></li>
                <li><Link href="/solutions/secure-browsing" className="text-[#4A5745] hover:text-[#728552] transition-colors duration-200">Secure Web Browsing</Link></li>
                <li><Link href="/solutions/workplace-enablement" className="text-[#4A5745] hover:text-[#728552] transition-colors duration-200">Workplace Enablement</Link></li>
              </ul>
            </div>

            {/* Learn Column */}
            <div>
              <button 
                onClick={() => toggleSection('learn')} 
                className="footer-mobile-dropdown flex justify-between items-center w-full md:hidden mb-3 border border-[#788B59] text-[#788B59] font-bold py-2 px-4 rounded-md appearance-none shadow-sm"
              >
                <h3 className="text-[#011910] font-semibold text-lg">Learn</h3>
                <svg 
                  className={`w-5 h-5 transition-transform ${openSection === 'learn' ? 'rotate-180' : ''}`}
                  fill="none" 
                  stroke="#788B59" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <h3 className="text-[#011910] font-semibold mb-6 text-lg hidden md:block">Learn</h3>
              <ul className={`space-y-4 ${openSection === 'learn' || !isMobile ? 'block' : 'hidden'}`}>
                <li><Link href="/blog" className="text-[#4A5745] hover:text-[#728552] transition-colors duration-200">Blog</Link></li>
                <li><Link href="/docs" className="text-[#4A5745] hover:text-[#728552] transition-colors duration-200">Docs</Link></li>
                <li><Link href="/white-paper-future-of-ergonomic-work" className="text-[#4A5745] hover:text-[#728552] transition-colors duration-200">White Paper</Link></li>
                <li><Link href="/buyers-guide" className="text-[#4A5745] hover:text-[#728552] transition-colors duration-200">Buyer Guide</Link></li>
                <li><Link href="/subscribe-to-insights" className="text-[#4A5745] hover:text-[#728552] transition-colors duration-200">Newsletter</Link></li>
                <li><Link href="/community" className="text-[#4A5745] hover:text-[#728552] transition-colors duration-200">Join Discord</Link></li>
              </ul>
            </div>

            {/* Markets Column */}
            <div>
              <button 
                onClick={() => toggleSection('markets')} 
                className="footer-mobile-dropdown flex justify-between items-center w-full md:hidden mb-3 border border-[#788B59] text-[#788B59] font-bold py-2 px-4 rounded-md appearance-none shadow-sm"
              >
                <h3 className="text-[#011910] font-semibold text-lg">Markets</h3>
                <svg 
                  className={`w-5 h-5 transition-transform ${openSection === 'markets' ? 'rotate-180' : ''}`}
                  fill="none" 
                  stroke="#788B59" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <h3 className="text-[#011910] font-semibold mb-6 text-lg hidden md:block">Markets</h3>
              <ul className={`space-y-4 ${openSection === 'markets' || !isMobile ? 'block' : 'hidden'}`}>
                <li><Link href="/markets/manufacturing" className="text-[#4A5745] hover:text-[#728552] transition-colors duration-200">Manufacturing</Link></li>
                <li><Link href="/markets/professional" className="text-[#4A5745] hover:text-[#728552] transition-colors duration-200">Professional Services</Link></li>
                <li><Link href="/markets/healthcare" className="text-[#4A5745] hover:text-[#728552] transition-colors duration-200">Healthcare</Link></li>
                <li><Link href="/markets/finance" className="text-[#4A5745] hover:text-[#728552] transition-colors duration-200">Finance</Link></li>
                <li><Link href="/markets/energy-utilities" className="text-[#4A5745] hover:text-[#728552] transition-colors duration-200">Energy & Utilities</Link></li>
                <li><Link href="/markets/retail" className="text-[#4A5745] hover:text-[#728552] transition-colors duration-200">Retail & E-commerce</Link></li>
                <li><Link href="/markets/government" className="text-[#4A5745] hover:text-[#728552] transition-colors duration-200">Government & Public Sector</Link></li>
                <li><Link href="/markets/technology" className="text-[#4A5745] hover:text-[#728552] transition-colors duration-200">Technology</Link></li>
                <li><Link href="/markets/education" className="text-[#4A5745] hover:text-[#728552] transition-colors duration-200">Education</Link></li>
                <li><Link href="/markets/hospitality" className="text-[#4A5745] hover:text-[#728552] transition-colors duration-200">Hospitality</Link></li>
              </ul>
            </div>

            {/* About Column */}
            <div>
              <button 
                onClick={() => toggleSection('about')} 
                className="footer-mobile-dropdown flex justify-between items-center w-full md:hidden mb-3 border border-[#788B59] text-[#788B59] font-bold py-2 px-4 rounded-md appearance-none shadow-sm"
              >
                <h3 className="text-[#011910] font-semibold text-lg">About</h3>
                <svg 
                  className={`w-5 h-5 transition-transform ${openSection === 'about' ? 'rotate-180' : ''}`}
                  fill="none" 
                  stroke="#788B59" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <h3 className="text-[#011910] font-semibold mb-6 text-lg hidden md:block">About</h3>
              <ul className={`space-y-4 ${openSection === 'about' || !isMobile ? 'block' : 'hidden'}`}>
                <li><Link href="/about" className="text-[#4A5745] hover:text-[#728552] transition-colors duration-200">About Kahana</Link></li>
                <li><Link href="/support" className="text-[#4A5745] hover:text-[#728552] transition-colors duration-200">Support</Link></li>
                <li><Link href="/careers" className="text-[#4A5745] hover:text-[#728552] transition-colors duration-200">Careers</Link></li>
              </ul>
            </div>
          </div>

          <div className="mt-16 pt-8 border-t border-[#728552]/20">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="flex items-center space-x-8">
                <span className="text-[#4A5745] text-sm">&copy; Kahana Group Inc., 2025. All rights reserved</span>
                <div className="hidden md:flex items-center space-x-8">
                  <Link href="/privacy-policy" className="text-[#4A5745] hover:text-[#728552] transition-colors duration-200 text-sm">Privacy</Link>
                  <Link href="/terms-and-conditions" className="text-[#4A5745] hover:text-[#728552] transition-colors duration-200 text-sm">Terms</Link>
                  <Link href="/right-to-work" className="text-[#4A5745] hover:text-[#728552] transition-colors duration-200 text-sm">Right to Work</Link>
                  <Link href="/sales" className="text-[#4A5745] hover:text-[#728552] transition-colors duration-200 text-sm">Contact Sales</Link>
                  <Link href="/oasis-feedback-survey" className="text-[#4A5745] hover:text-[#728552] transition-colors duration-200 text-sm">Feedback Survey</Link>
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
                <Link 
                  href="https://x.com/KahanaHQ" 
                  target="_blank" 
                  rel="noopener noreferrer nofollow" 
                  className="text-[#011910] hover:text-gray-600 transition-colors duration-200"
                  aria-label="Follow Kahana on X (Twitter)"
                >
                  <span className="sr-only">X (Twitter)</span>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </Link>
                <Link 
                  href="https://www.instagram.com/kahanahq" 
                  target="_blank" 
                  rel="noopener noreferrer nofollow" 
                  className="text-[#E4405F] hover:text-[#C13584] transition-colors duration-200"
                  aria-label="Follow Kahana on Instagram"
                >
                  <span className="sr-only">Instagram</span>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </Link>
                <Link 
                  href="https://www.youtube.com/@kahanaHQ" 
                  target="_blank" 
                  rel="noopener noreferrer nofollow" 
                  className="text-[#FF0000] hover:text-[#CC0000] transition-colors duration-200"
                  aria-label="Subscribe to Kahana on YouTube"
                >
                  <span className="sr-only">YouTube</span>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </Link>
                <Link 
                  href="/community" 
                  className="text-[#5865F2] hover:text-[#4752C4] transition-colors duration-200"
                  aria-label="Join Kahana Discord Community"
                >
                  <span className="sr-only">Discord</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419-.019 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1568 2.4189Z"/>
                  </svg>
                </Link>
              </div>
            </div>
            {/* Mobile Footer Links */}
            <div className="md:hidden mt-6 flex flex-wrap justify-center gap-6">
              <Link href="/privacy-policy" className="text-[#4A5745] hover:text-[#728552] transition-colors duration-200 text-sm">Privacy</Link>
              <Link href="/terms-and-conditions" className="text-[#4A5745] hover:text-[#728552] transition-colors duration-200 text-sm">Terms</Link>
              <Link href="/right-to-work" className="text-[#4A5745] hover:text-[#728552] transition-colors duration-200 text-sm">Right to Work</Link>
              <Link href="/sales" className="text-[#4A5745] hover:text-[#728552] transition-colors duration-200 text-sm">Contact Sales</Link>
              <Link href="/oasis-feedback-survey" className="text-[#4A5745] hover:text-[#728552] transition-colors duration-200 text-sm">Feedback Survey</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
