import React, { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';

const browserFeatures = {
    name: 'Oasis Enterprise Browser',
    description: 'Transform your browsing experience with a cutting-edge web browser that combines enterprise-grade security with innovative collaboration features. Built for the modern web user who values both privacy and productivity.',
  keyFeatures: [
    {
      title: 'Enterprise Security',
      description: 'Advanced security controls with enhanced CSP and SSL/TLS',
      icon: (
        <svg className="h-6 w-6 text-[#4A5745]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: 'Smart Organization',
      description: 'Customizable hubs and collections for efficient workflow',
      icon: (
        <svg className="h-6 w-6 text-[#4A5745]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      )
    },
    {
      title: 'AI Assistant',
      description: 'Built-in AI assistant for natural language commands',
      icon: (
        <svg className="h-6 w-6 text-[#4A5745]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    },
    {
      title: 'Modern Interface',
      description: 'Clean, minimalist design with seamless updates',
      icon: (
        <svg className="h-6 w-6 text-[#4A5745]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
        </svg>
      )
    }
  ],
  link: '/enterprise-browser'
};

export default function ProductSection() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [showDemoMessage, setShowDemoMessage] = useState(false);
  const [placeholderIndex, setPlaceholderIndex] = useState(0);
  const [currentPlaceholder, setCurrentPlaceholder] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  const placeholders = useMemo(() => [
    "Search the Internet or type a URL",
    "Organize your creative flow",
    "Jump back into your workspace",
    "Browse. Build. Breathe.",
    "Explore your next genius idea"
  ], []);

  useEffect(() => {
    const baseTypeSpeed = 133; // ~90 WPM typing speed
    const baseDeleteSpeed = 100; // slightly faster deletion
    const pauseDuration = 3000; // 3 seconds pause between phrases

    // Function to get a random speed variation
    const getRandomSpeed = (baseSpeed) => {
      const variation = Math.random() * 50 - 25; // Random variation between -25ms and +25ms
      return Math.max(baseSpeed + variation, baseSpeed * 0.5); // Ensure minimum speed is half of base speed
    };

    // Function to simulate a typing mistake
    const simulateMistake = async () => {
      if (Math.random() < 0.1) { // 10% chance of mistake
        const mistakeChar = String.fromCharCode(97 + Math.floor(Math.random() * 26)); // Random lowercase letter
        setCurrentPlaceholder(prev => prev + mistakeChar);
        await new Promise(resolve => setTimeout(resolve, getRandomSpeed(baseTypeSpeed)));
        setCurrentPlaceholder(prev => prev.slice(0, -1));
        await new Promise(resolve => setTimeout(resolve, getRandomSpeed(baseDeleteSpeed)));
      }
    };

    // Function to add natural pause between words
    const addWordPause = async () => {
      if (currentPlaceholder.endsWith(' ')) {
        await new Promise(resolve => setTimeout(resolve, 200 + Math.random() * 100)); // 200-300ms pause between words
      }
    };

    const currentText = placeholders[placeholderIndex];
    
    const updatePlaceholder = async () => {
      if (isDeleting) {
        setCurrentPlaceholder(currentText.substring(0, currentPlaceholder.length - 1));
        if (currentPlaceholder === '') {
          setIsDeleting(false);
          setPlaceholderIndex((prev) => (prev + 1) % placeholders.length);
        }
      } else {
        const nextChar = currentText[currentPlaceholder.length];
        if (nextChar === ' ') {
          // Add longer pause before typing a space
          await new Promise(resolve => setTimeout(resolve, 800 + Math.random() * 400));
        }
        
        setCurrentPlaceholder(currentText.substring(0, currentPlaceholder.length + 1));
        
        if (currentPlaceholder === currentText) {
          setTimeout(() => setIsDeleting(true), pauseDuration);
        }
      }

      if (!isDeleting && currentPlaceholder !== currentText) {
        await simulateMistake();
        await addWordPause();
      }
    };

    const timeout = setTimeout(updatePlaceholder, isDeleting ? getRandomSpeed(baseDeleteSpeed) : getRandomSpeed(baseTypeSpeed));

    return () => clearTimeout(timeout);
  }, [currentPlaceholder, isDeleting, placeholderIndex, placeholders]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    setShowDemoMessage(true);
    setMessage('');
  };

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8 lg:items-center">
          {/* Left side - Text content */}
          <div className="lg:col-span-5 px-4 sm:px-6 text-center md:mx-auto md:max-w-2xl lg:text-left relative">
            <div>
                              <h2 className="text-base font-semibold leading-7 text-[#4A5745] text-center lg:text-left">Oasis Agentic Browser</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-[#4A5745] sm:text-4xl text-center lg:text-left">
                The first AI browser designed for ergonomic work, focus, and spatial ease
              </p>
              <p className="mt-6 text-lg leading-8 text-[#4A5745] text-center lg:text-left">
                Oasis is designed to meld with the way your mind works naturally. Experience seamless flow with spatial organization, intelligent shortcuts, and AI that learns from your workflow. Transform how you browse, organize, and create—all while maintaining the focus and productivity you need.
              </p>
              <div className="mt-8 flex gap-4 items-center justify-center lg:justify-start">
                <Link
                  href="/oasis-waitlist"
                  className="nav-button download inline-flex items-center rounded-md text-white font-bold shadow-sm px-6 py-3 text-base no-underline hover:no-underline focus:no-underline"
                  style={{ textDecoration: 'none', backgroundColor: '#788B59' }}
                >
                  <span>Join Waitlist</span>
                </Link>
                <Link
                  href="/schedule-demo"
                  className="nav-button download inline-flex items-center rounded-md text-white font-bold shadow-sm px-6 py-3 text-base no-underline hover:no-underline focus:no-underline"
                  style={{ textDecoration: 'none', backgroundColor: '#788B59' }}
                >
                  <span>Schedule Demo</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Right side - Browser Preview */}
          <div className="lg:col-span-7 mt-16 lg:mt-0">
            <div className="w-[95%] mx-auto lg:w-[120%] lg:-mr-[20%] aspect-[16/9] overflow-hidden rounded-2xl bg-gradient-to-br from-[#F3F8E4] via-[#E0D48C] to-[#F3F8E4] shadow-2xl">
              <div className="relative h-full w-full">
                {/* Browser Header */}
                <div className="flex h-8 sm:h-12 items-center justify-between bg-gradient-to-b from-[#F3F8E4] via-[#E0D48C] to-[#F3F8E4] px-2 sm:px-4">
                  <div className="flex items-center space-x-1.5 sm:space-x-2">
                    <div className="h-1.5 w-1.5 sm:h-3 sm:w-3 rounded-full bg-[#788B59]"></div>
                    <div className="h-1.5 w-1.5 sm:h-3 sm:w-3 rounded-full bg-[#788B59]"></div>
                    <div className="h-1.5 w-1.5 sm:h-3 sm:w-3 rounded-full bg-[#788B59]"></div>
                  </div>
                </div>
                
                {/* Browser Content */}
                <div className="relative h-[calc(100%-2rem)] sm:h-[calc(100%-3rem)] bg-gradient-to-br from-[#F3F8E4] via-[#E0D48C] to-[#F3F8E4]">
                  {/* URL Bar */}
                  <div className="flex h-7 sm:h-12 items-center px-2 sm:px-4">
                    <div className="flex h-5 sm:h-8 w-full items-center rounded-lg bg-white/80 px-2 sm:px-3 shadow-sm">
                      <svg className="h-2.5 w-2.5 sm:h-4 sm:w-4 text-[#4A5745]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                      <div className="ml-1.5 sm:ml-2 text-[10px] sm:text-sm text-[#4A5745] relative inline-flex items-center">
                        <span>{currentPlaceholder}</span>
                        <span className="ml-0.5 h-4 w-[2px] bg-[#788B59] animate-[blink_1s_ease-in-out_infinite]"></span>
                      </div>
                    </div>
                    <div className="ml-1.5 sm:ml-3 flex items-center space-x-1.5 sm:space-x-3">
                      <div className="relative pointer-events-none">
                        <svg className="h-3 w-3 sm:h-6 sm:w-6" viewBox="0 0 24 24" fill="none">
                          <path d="M12 2.944a11.955 11.955 0 00-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016A11.955 11.955 0 0012 2.944z" fill="#788B59" fillOpacity="0.2"/>
                          <path d="M12 2.944a11.955 11.955 0 00-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016A11.955 11.955 0 0012 2.944z" stroke="#788B59" strokeWidth="1.5"/>
                          <path d="M9 12l2 2 4-4" stroke="#788B59" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <div className="relative pointer-events-none">
                        <svg className="h-3 w-3 sm:h-6 sm:w-6" viewBox="0 0 24 24" fill="none">
                          <rect x="3" y="3" width="18" height="18" rx="2" fill="#788B59" fillOpacity="0.2" stroke="#788B59" strokeWidth="1.5"/>
                          <path d="M7 14.5L10 11.5L13 13.5L17 9.5" stroke="#788B59" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <div className="relative pointer-events-none">
                        <svg className="h-3 w-3 sm:h-6 sm:w-6" viewBox="0 0 24 24" fill="none">
                          <circle cx="12" cy="8" r="4" fill="#788B59" fillOpacity="0.2" stroke="#788B59" strokeWidth="1.5"/>
                          <path d="M5.25 20.5C5.25 17 8.25 14.5 12 14.5C15.75 14.5 18.75 17 18.75 20.5" stroke="#788B59" strokeWidth="1.5" strokeLinecap="round"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                  
                  {/* Browser Content Area */}
                  <div className="relative flex-1 p-2 sm:p-4">
                    <div className="text-center mb-4 sm:mb-6 flex items-center justify-center space-x-1.5 sm:space-x-2">
                      <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-[#788B59]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                      <span className="text-[10px] sm:text-xs font-light tracking-wide bg-gradient-to-r from-[#728552] to-[#788B59] bg-clip-text text-transparent">Unicorn Inc.</span>
                    </div>
                    {/* Shortcuts Grid */}
                    <div className="grid grid-cols-3 sm:grid-cols-5 gap-x-8 gap-y-4 sm:gap-4 max-w-[280px] sm:max-w-lg mx-auto px-4 sm:px-0">
                      {[
                        { 
                          icon: <svg className="w-6 h-6 text-[#4A5745]" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 4-8 4z"/></svg>,
                          label: "YouTube",
                          showOnMobile: true
                        },
                        {
                          icon: <svg className="w-6 h-6 text-[#4A5745]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>,
                          label: "Inbox (7)",
                          showOnMobile: true
                        },
                        {
                          icon: <svg className="w-6 h-6 text-[#4A5745]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>,
                          label: "Dashboard",
                          showOnMobile: true
                        },
                        {
                          icon: <svg className="w-6 h-6 text-[#4A5745]" fill="currentColor" viewBox="0 0 24 24"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/></svg>,
                          label: "LinkedIn",
                          showOnMobile: false
                        },
                        {
                          icon: <svg className="w-6 h-6 text-[#4A5745]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>,
                          label: "ChatGPT",
                          showOnMobile: false
                        },
                        {
                          icon: <svg className="w-6 h-6 text-[#4A5745]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>,
                          label: "Docs",
                          showOnMobile: false
                        },
                        {
                          icon: <svg className="w-6 h-6 text-[#4A5745]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>,
                          label: "Calendar",
                          showOnMobile: false
                        },
                        {
                          icon: <svg className="w-6 h-6 text-[#4A5745]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" /></svg>,
                          label: "Drive",
                          showOnMobile: false
                        },
                        {
                          icon: <svg className="w-6 h-6 text-[#4A5745]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>,
                          label: "Add shortcut",
                          showOnMobile: false
                        }
                      ].map((shortcut, index) => (
                        <div 
                          key={index} 
                          className={`flex flex-col items-center pointer-events-none ${!shortcut.showOnMobile ? 'hidden sm:flex' : ''}`}
                        >
                          <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-white flex items-center justify-center shadow-sm">
                            <div className="w-5 h-5 sm:w-6 sm:h-6">
                              {shortcut.icon}
                            </div>
                          </div>
                          <span className="mt-2 text-[10px] sm:text-xs text-[#4A5745] w-full text-center truncate px-1">{shortcut.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Static AI Assist Button */}
                  <div className="absolute bottom-4 right-4 flex items-end">
                    {/* Desktop Chat Interface */}
                    {isChatOpen && (
                      <div className="hidden lg:flex flex-col mr-3 w-80 h-72 bg-white rounded-2xl shadow-lg border border-[#728552] overflow-hidden">
                        <div className="flex items-center justify-between p-4 border-b border-[#728552] bg-gradient-to-r from-[#E0D48C]/5 to-[#F3F8E4]/5">
                          <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#788B59] to-[#728552] flex items-center justify-center">
                              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                              </svg>
                            </div>
                            <span className="font-medium text-[#4A5745]">AI Assistant</span>
                          </div>
                          <button onClick={() => setIsChatOpen(false)} className="text-[#4A5745] hover:text-[#728552]">
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </button>
                        </div>
                        <div className="flex-1 p-4 bg-gradient-to-br from-[#F3F8E4]/5 via-[#E0D48C]/5 to-[#F3F8E4]/5">
                          <div className="flex items-start space-x-3 mb-4">
                            <div className="w-6 h-6 rounded-lg bg-[#788B59]/10 flex-shrink-0 flex items-center justify-center">
                              <svg className="w-4 h-4 text-[#4A5745]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                              </svg>
                            </div>
                            <div className="bg-white rounded-2xl rounded-tl-none p-3 shadow-sm border border-[#728552]">
                              <p className="text-sm text-[#4A5745]">
                                {showDemoMessage && (
                                  <>Unfortunately, this little chat bot on our landing page isn't integrated with AI. To see the real thing, <Link href="/schedule-demo" className="text-[#728552] hover:underline">schedule a demo</Link>! 😉</>
                                )}
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="p-4 bg-white border-t border-[#728552]">
                          <form onSubmit={handleSendMessage} className="flex space-x-2">
                            <input
                              type="text"
                              value={message}
                              onChange={(e) => setMessage(e.target.value)}
                              placeholder="Type your message..."
                              className="flex-1 px-4 py-2 text-sm border border-[#728552] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#788B59]/20 focus:border-[#788B59]"
                            />
                            <button 
                              type="submit"
                              className="p-2 text-white font-bold bg-[#788B59] rounded-xl hover:bg-[#728552] transition-opacity"
                            >
                              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7" />
                              </svg>
                            </button>
                          </form>
                        </div>
                      </div>
                    )}
                    
                    {/* AI Assist Button */}
                    <button
                      onClick={() => setIsChatOpen(!isChatOpen)}
                      className="group flex items-center space-x-2 bg-[#788B59] text-white font-bold px-3 py-2 rounded-xl hover:bg-[#728552] transition-all duration-200 shadow-lg hover:shadow-xl cursor-pointer"
                    >
                      <div className="relative">
                        <div className="absolute -top-1 -right-1 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full"></div>
                        <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                        </svg>
                      </div>
                      <span className="text-xs sm:text-sm font-medium">Oasis</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 