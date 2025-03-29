import React from 'react';
import Link from 'next/link';

const browserFeatures = {
    name: 'Oasis Enterprise Browser',
    description: 'Transform your browsing experience with a cutting-edge web browser that combines enterprise-grade security with innovative collaboration features. Built for the modern web user who values both privacy and productivity.',
  keyFeatures: [
    {
      title: 'Enterprise Security',
      description: 'Advanced security controls with enhanced CSP and SSL/TLS',
      icon: (
        <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: 'Smart Organization',
      description: 'Customizable hubs and collections for efficient workflow',
      icon: (
        <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      )
    },
    {
      title: 'AI Assistant',
      description: 'Built-in AI assistant for natural language commands',
      icon: (
        <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    },
    {
      title: 'Modern Interface',
      description: 'Clean, minimalist design with seamless updates',
      icon: (
        <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
        </svg>
      )
    }
  ],
  link: '/enterprise-browser'
};

export default function ProductSection() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-[#66C2BE]">Oasis Browser</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            The secure enterprise browser for modern teams
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Experience the next generation of secure browsing with Oasis Browser. Built for enterprises who demand both security and productivity.
          </p>
        </div>

        <div className="mx-auto mt-16">
          {/* Browser Preview */}
          <div className="aspect-[16/9] w-full overflow-hidden rounded-2xl bg-gradient-to-br from-[#E3DFF1]/20 via-[#8CB7D0]/10 to-[#E3DFF1]/30 shadow-2xl mb-16">
                    <div className="relative h-full w-full">
                      {/* Browser Header */}
              <div className="flex h-12 items-center justify-between bg-gradient-to-b from-[#E3DFF1]/20 via-[#8CB7D0]/10 to-[#E3DFF1]/30 px-4">
                        <div className="flex items-center space-x-2">
                  <div className="h-3 w-3 rounded-full bg-[#66C2BE]"></div>
                  <div className="h-3 w-3 rounded-full bg-[#66C2BE]"></div>
                  <div className="h-3 w-3 rounded-full bg-[#66C2BE]"></div>
                        </div>
                      </div>
                      
                      {/* Browser Content */}
              <div className="h-[calc(100%-3rem)] bg-gradient-to-br from-[#E3DFF1]/20 via-[#8CB7D0]/10 to-[#E3DFF1]/30">
                        {/* URL Bar */}
                <div className="flex h-12 items-center px-4">
                  <div className="flex h-8 w-full items-center rounded-lg bg-white/80 px-3 shadow-sm">
                    <svg className="h-4 w-4 text-[#66C2BE]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                    <span className="ml-2 text-sm text-gray-400">Search the Internet or type a URL</span>
                  </div>
                  <div className="ml-3 flex items-center space-x-3">
                    <div className="relative">
                      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none">
                        <path d="M12 2.944a11.955 11.955 0 00-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016A11.955 11.955 0 0012 2.944z" fill="#66C2BE" fillOpacity="0.2"/>
                        <path d="M12 2.944a11.955 11.955 0 00-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016A11.955 11.955 0 0012 2.944z" stroke="#66C2BE" strokeWidth="1.5"/>
                        <path d="M9 12l2 2 4-4" stroke="#66C2BE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <div className="absolute -top-1 -right-1 h-2 w-2 rounded-full bg-[#C2E1D9]"></div>
                    </div>
                    <div className="relative">
                      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none">
                        <rect x="3" y="3" width="18" height="18" rx="2" fill="#66C2BE" fillOpacity="0.2" stroke="#66C2BE" strokeWidth="1.5"/>
                        <path d="M7 14.5L10 11.5L13 13.5L17 9.5" stroke="#66C2BE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <circle cx="17" cy="9.5" r="1.5" fill="#66C2BE"/>
                        <circle cx="13" cy="13.5" r="1.5" fill="#66C2BE"/>
                        <circle cx="10" cy="11.5" r="1.5" fill="#66C2BE"/>
                        <circle cx="7" cy="14.5" r="1.5" fill="#66C2BE"/>
                      </svg>
                      <div className="absolute -top-1 -right-1 h-2 w-2 rounded-full bg-[#C2E1D9]"></div>
                    </div>
                    <div className="relative">
                      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="8" r="4" fill="#66C2BE" fillOpacity="0.2" stroke="#66C2BE" strokeWidth="1.5"/>
                        <path d="M5.25 20.5C5.25 17 8.25 14.5 12 14.5C15.75 14.5 18.75 17 18.75 20.5" stroke="#66C2BE" strokeWidth="1.5" strokeLinecap="round"/>
                      </svg>
                      <div className="absolute -top-1 -right-1 h-2 w-2 rounded-full bg-[#C2E1D9]"></div>
                    </div>
                          </div>
                        </div>
                        
                        {/* Browser Content Area */}
                <div className="relative h-[calc(100%-3rem)] overflow-hidden bg-[#f8f9fa] p-8">
                  {/* Company Logo */}
                  <div className="flex flex-col items-center justify-center mb-8">
                    <div className="flex items-center mb-1">
                      <svg className="h-6 w-6" viewBox="0 0 32 32" fill="none">
                        {/* Main Star */}
                        <path d="M16 4L18.5 13.5L28 16L18.5 18.5L16 28L13.5 18.5L4 16L13.5 13.5L16 4Z" fill="#66C2BE" fillOpacity="0.8" />
                        {/* Inner Star */}
                        <path d="M16 10L17.5 15.5L22 16L17.5 16.5L16 22L14.5 16.5L10 16L14.5 15.5L16 10Z" fill="#8CB7D0" fillOpacity="0.6" />
                        {/* Sparkles */}
                        <path d="M24 8L25 9M26 6L26.5 7.5M23 6L24 7" stroke="#E3DFF1" strokeWidth="1" strokeLinecap="round" strokeOpacity="0.6"/>
                        <path d="M6 22L7 23M8 20L8.5 21.5M5 20L6 21" stroke="#8CB7D0" strokeWidth="1" strokeLinecap="round" strokeOpacity="0.6"/>
                        <path d="M28 20L29 21M27 18L28 19" stroke="#66C2BE" strokeWidth="1" strokeLinecap="round" strokeOpacity="0.6"/>
                                </svg>
                      <span className="text-lg font-bold bg-gradient-to-r from-[#66C2BE] via-[#8CB7D0] to-[#E3DFF1] text-transparent bg-clip-text ml-2">Unicorn Inc.</span>
                            </div>
                          </div>
                          
                  {/* Shortcuts Grid */}
                  <div className="grid grid-cols-5 gap-4 max-w-lg mx-auto mb-8">
                    {[
                      { 
                        icon: <svg className="w-6 h-6 text-[#66C2BE]" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 4-8 4z"/></svg>,
                        label: "YouTube"
                      },
                      {
                        icon: <svg className="w-6 h-6 text-[#66C2BE]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>,
                        label: "Kahana"
                      },
                      {
                        icon: <svg className="w-6 h-6 text-[#66C2BE]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>,
                        label: "Inbox (11)"
                      },
                      {
                        icon: <svg className="w-6 h-6 text-[#66C2BE]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>,
                        label: "Dashboard"
                      },
                      {
                        icon: <svg className="w-6 h-6 text-[#66C2BE]" fill="currentColor" viewBox="0 0 24 24"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/></svg>,
                        label: "LinkedIn"
                      },
                      {
                        icon: <svg className="w-6 h-6 text-[#66C2BE]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>,
                        label: "Kahana"
                      },
                      {
                        icon: <svg className="w-6 h-6 text-[#66C2BE]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>,
                        label: "Home"
                      },
                      {
                        icon: <svg className="w-6 h-6 text-[#66C2BE]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>,
                        label: "Home"
                      },
                      {
                        icon: <svg className="w-6 h-6 text-[#66C2BE]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>,
                        label: "ChatGPT"
                      },
                      {
                        icon: <svg className="w-6 h-6 text-[#66C2BE]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>,
                        label: "Add shortcut"
                      }
                    ].map((shortcut, index) => (
                      <div key={index} className="flex flex-col items-center group cursor-pointer">
                        <div className="w-14 h-14 rounded-xl bg-white flex items-center justify-center shadow-sm group-hover:bg-gray-100">
                          {shortcut.icon}
                                </div>
                        <span className="mt-2 text-xs text-gray-600 w-full text-center truncate px-1">{shortcut.label}</span>
                              </div>
                            ))}
                          </div>
                          
                  {/* Widgets */}
                  <div className="grid grid-cols-2 gap-4 max-w-3xl mx-auto">
                    <div className="bg-white rounded-xl p-4 shadow-sm">
                      <div className="flex justify-between items-center mb-4">
                        <h3 className="text-sm font-medium">Google Calendar</h3>
                        <button className="text-gray-400">⋮</button>
                            </div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>7:00pm</span>
                          <span>Dinner</span>
                          <span className="text-gray-400">In 6 hr</span>
                            </div>
                        <div className="flex justify-between text-sm">
                          <span>7:30pm</span>
                          <span>Take dog out</span>
                          </div>
                        <div className="flex justify-between text-sm">
                          <span>8:00pm</span>
                          <span>Resting</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white rounded-xl p-4 shadow-sm">
                      <div className="flex justify-between items-center mb-4">
                        <h3 className="text-sm font-medium">Google Drive</h3>
                        <button className="text-gray-400">⋮</button>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center text-sm">
                          <span className="text-green-600 mr-2">📄</span>
                          <span>Rekog Card Submission</span>
                        </div>
                        <div className="flex items-center text-sm">
                          <span className="text-blue-600 mr-2">📄</span>
                          <span>Pre-Launch Enterprise Browser Promotion</span>
                        </div>
                        <div className="flex items-center text-sm">
                          <span className="text-blue-600 mr-2">📄</span>
                          <span>Sales & Marketing Sprint</span>
                    </div>
                  </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
              </div>

          {/* CTA Section */}
          <div className="text-center">
                <Link
              href="/products/enterprise-browser"
              className="inline-flex items-center rounded-md bg-[#66C2BE] px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-[#55B3AF] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#66C2BE]"
                >
              Learn more
              <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
                </Link>
              </div>
        </div>
      </div>
    </div>
  );
} 