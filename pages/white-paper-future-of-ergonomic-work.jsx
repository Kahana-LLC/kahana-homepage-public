import React, { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import NavbarDup from '../components/NavbarDup';
import SharedCTA from '../components/SharedCTA';
import WhitePaperSocialShare from '../components/WhitePaperSocialShare';

// Animated Counter Component
function AnimatedCounter({ start, end, duration = 2000, suffix = "", prefix = "" }) {
  const [count, setCount] = useState(start);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;

    let startTime;
    let animationId;
    
    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = Math.floor(start + (end - start) * easeOutQuart);
      
      setCount(currentCount);
      
      if (progress < 1) {
        animationId = requestAnimationFrame(animate);
      }
    };
    
    animationId = requestAnimationFrame(animate);
    
    // Cleanup function to cancel animation if component unmounts
    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [isInView, start, end, duration]);

  return (
    <span ref={ref}>
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  );
}

export default function WhitePaperPDF() {
  return (
    <>
      <Head>
        <title>White Paper PDF | Kahana Browser</title>
        <meta 
          name="description" 
          content="Download our comprehensive white paper on the future of ergonomic work and how modern browsers are reshaping productivity in the workplace." 
        />
        <meta name="keywords" content="white paper, ergonomic work, browser technology, productivity, workplace, PDF download" />
        <meta property="og:title" content="White Paper PDF | Kahana Browser" />
        <meta property="og:description" content="Download our comprehensive white paper on the future of ergonomic work and how modern browsers are reshaping productivity in the workplace." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="White Paper PDF | Kahana Browser" />
        <meta name="twitter:description" content="Download our comprehensive white paper on the future of ergonomic work and how modern browsers are reshaping productivity in the workplace." />
      </Head>

      <NavbarDup />
      
      {/* Scroll Progress Bar */}
      <div className="fixed top-16 left-0 w-full h-2 bg-gray-200 z-40">
        <div 
          id="scroll-progress-bar"
          className="h-full bg-gradient-to-r from-[#66C2BE] to-[#4A9E9A] transition-all duration-150 ease-out"
          style={{ width: '0%' }}
        ></div>
      </div>
      
      {/* Social Share Component - Hidden floating button, we'll add inline sharing instead */}
      {/* <WhitePaperSocialShare 
        title="The Future of Ergonomic Work: A White Paper"
        url={typeof window !== 'undefined' ? window.location.href : 'https://kahana.com/white-paper-future-of-ergonomic-work'}
        excerpt="Discover how AR/VR technology is revolutionizing the future of ergonomic work and productivity."
      /> */}

      <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-24 pb-16 lg:ml-64">
        <div className="max-w-none mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
          {/* Hero Section */}
          <div className="mb-16">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Side - Content */}
              <div className="text-left">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-pink-100 text-pink-600 text-base font-medium mb-6">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Comprehensive White Paper
                </div>
                <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl lg:text-6xl mb-6 leading-tight">
                  The Future of Ergonomic Work
                </h1>
                <p className="text-xl text-gray-900 mb-8 leading-relaxed">
                  A comprehensive analysis of how AR, VR, voice, gesture, and AI technologies are transforming the way we work, moving us away from desk-bound productivity toward healthier, more mobile work environments.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="/references-future-of-ergonomic-work-white-paper"
                    className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md bg-[#66C2BE] hover:bg-[#4A9E9A] transition-colors duration-300 text-white"
                    style={{color: 'white'}}
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="white" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <span style={{color: 'white'}}>View All References</span>
                  </a>
                </div>
              </div>
              
              {/* Right Side - Image */}
              <div className="flex justify-center lg:justify-end">
                <div className="w-96 h-96 rounded-2xl shadow-lg border border-[#A5DAD8]/30 overflow-hidden">
                  <img 
                    src="/sloth-future-of-ergonomic-work.png" 
                    alt="Sloth breaking free from desk-bound work with AR/VR technology, symbolizing the future of ergonomic work"
                    className="w-full h-full object-cover transition-opacity duration-1000 ease-in-out"
                    onLoad={(e) => {
                      e.target.style.opacity = '1';
                    }}
                    onError={(e) => {
                      e.target.style.opacity = '1';
                    }}
                    style={{ opacity: 0 }}
                    ref={(img) => {
                      if (img) {
                        // Fallback: show image after 2 seconds regardless
                        setTimeout(() => {
                          img.style.opacity = '1';
                        }, 2000);
                      }
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Mobile Toggle Button */}
            <button 
              id="sidebar-toggle"
              className="fixed top-1/2 left-0 -translate-y-1/2 z-[9999] lg:hidden bg-white/95 backdrop-blur-sm border border-gray-200 rounded-l-none rounded-r-lg p-3 shadow-lg hover:bg-gray-50 transition-colors duration-300"
              onClick={() => {
                const sidebar = document.getElementById('narrative-sidebar');
                const toggle = document.getElementById('sidebar-toggle');
                if (sidebar.classList.contains('hidden')) {
                  sidebar.classList.remove('hidden');
                  toggle.innerHTML = `
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                  `;
                } else {
                  sidebar.classList.add('hidden');
                  toggle.innerHTML = `
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                  `;
                }
              }}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>

            {/* Narrative Pathway Sidebar */}
            <div id="narrative-sidebar" className="fixed top-40 left-0 w-64 h-[calc(100vh-10rem)] z-[9998] bg-white/95 backdrop-blur-sm border-r border-gray-200 shadow-lg hidden lg:block overflow-y-auto">
              <div className="p-6 space-y-8">
                <a href="#introduction" className="group pathway-step flex items-center scroll-smooth" data-step="1">
                  <div className="w-16 h-16 bg-pink-50 border-3 border-pink-200 rounded-full flex items-center justify-center text-lg font-bold text-pink-400 group-hover:border-pink-300 group-hover:text-pink-500 group-hover:bg-pink-100 transition-all duration-300 shadow-md flex-shrink-0 active-step">
                    1
                  </div>
                  <div className="ml-5">
                    <div className="font-bold text-gray-700 text-lg mb-2 group-hover:text-pink-500 transition-colors">Introduction</div>
                    <div className="text-base text-gray-400 leading-tight">The Vision</div>
                  </div>
                </a>
                
                <a href="#problem" className="group pathway-step flex items-center scroll-smooth" data-step="2">
                  <div className="w-16 h-16 bg-blue-50 border-3 border-blue-200 rounded-full flex items-center justify-center text-lg font-bold text-blue-400 group-hover:border-blue-300 group-hover:text-blue-500 group-hover:bg-blue-100 transition-all duration-300 shadow-md flex-shrink-0 active-step">
                    2
                  </div>
                  <div className="ml-5">
                    <div className="font-bold text-gray-700 text-lg mb-2 group-hover:text-blue-500 transition-colors">The Problem</div>
                    <div className="text-base text-gray-400 leading-tight">Health Crisis</div>
                  </div>
                </a>
                
                <a href="#solution" className="group pathway-step flex items-center scroll-smooth" data-step="3">
                  <div className="w-16 h-16 bg-green-50 border-3 border-green-200 rounded-full flex items-center justify-center text-lg font-bold text-green-400 group-hover:border-green-300 group-hover:text-green-500 group-hover:bg-green-100 transition-all duration-300 shadow-md flex-shrink-0 active-step">
                    3
                  </div>
                  <div className="ml-5">
                    <div className="font-bold text-gray-700 text-lg mb-2 group-hover:text-green-500 transition-colors">The Solution</div>
                    <div className="text-base text-gray-400 leading-tight">AR Technology</div>
                  </div>
                </a>
                
                <a href="#key-players" className="group pathway-step flex items-center scroll-smooth" data-step="4">
                  <div className="w-16 h-16 bg-purple-50 border-3 border-purple-200 rounded-full flex items-center justify-center text-lg font-bold text-purple-400 group-hover:border-purple-300 group-hover:text-purple-500 group-hover:bg-purple-100 transition-all duration-300 shadow-md flex-shrink-0 active-step">
                    4
                  </div>
                  <div className="ml-5">
                    <div className="font-bold text-gray-700 text-lg mb-2 group-hover:text-purple-500 transition-colors">Key Players</div>
                    <div className="text-base text-gray-400 leading-tight">Market Leaders</div>
                  </div>
                </a>
                
                <a href="#next-steps" className="group pathway-step flex items-center scroll-smooth" data-step="5">
                  <div className="w-16 h-16 bg-yellow-50 border-3 border-yellow-200 rounded-full flex items-center justify-center text-lg font-bold text-yellow-400 group-hover:border-yellow-300 group-hover:text-yellow-500 group-hover:bg-yellow-100 transition-all duration-300 shadow-md flex-shrink-0 active-step">
                    5
                  </div>
                  <div className="ml-5">
                    <div className="font-bold text-gray-700 text-lg mb-2 group-hover:text-yellow-500 transition-colors">Next Steps</div>
                    <div className="text-base text-gray-400 leading-tight">Development Paths</div>
                  </div>
                </a>
                
                <a href="#conclusion" className="group pathway-step flex items-center scroll-smooth" data-step="6">
                  <div className="w-16 h-16 bg-teal-50 border-3 border-teal-200 rounded-full flex items-center justify-center text-lg font-bold text-teal-400 group-hover:border-teal-300 group-hover:text-teal-500 group-hover:bg-teal-100 transition-all duration-300 shadow-md flex-shrink-0 active-step">
                    6
                  </div>
                  <div className="ml-5">
                    <div className="font-bold text-gray-700 text-lg mb-2 group-hover:text-teal-500 transition-colors">Conclusion</div>
                    <div className="text-base text-gray-400 leading-tight">The Future</div>
                  </div>
                </a>
              </div>
            </div>

            {/* Active Step Styling */}
            <style jsx>{`
              .active-step {
                transform: scale(1.05);
                transition: transform 0.3s ease;
              }
              .active-step .font-bold {
                color: #1f2937 !important;
                font-weight: 800;
              }
              .active-step .text-base {
                color: #6b7280 !important;
                font-weight: 500;
              }
              /* Special styling for current section (grey highlight) */
              .active-step .bg-gray-300 {
                background-color: #d1d5db !important;
                border-color: #6b7280 !important;
                color: #374151 !important;
                box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(107, 114, 128, 0.2) !important;
              }
              /* Custom scrollbar styling for sidebar */
              #narrative-sidebar::-webkit-scrollbar {
                width: 6px;
              }
              #narrative-sidebar::-webkit-scrollbar-track {
                background: transparent;
              }
              #narrative-sidebar::-webkit-scrollbar-thumb {
                background: rgba(156, 163, 175, 0.3);
                border-radius: 3px;
              }
              #narrative-sidebar::-webkit-scrollbar-thumb:hover {
                background: rgba(156, 163, 175, 0.5);
              }
              /* Ensure proper scrolling on desktop */
              #narrative-sidebar .flex-1 {
                max-height: calc(100vh - 12rem);
                overflow-y: auto;
              }
              /* Force scrollbar to be visible when content overflows */
              #narrative-sidebar .flex-1::-webkit-scrollbar {
                width: 6px;
              }
              #narrative-sidebar .flex-1::-webkit-scrollbar-track {
                background: transparent;
              }
              #narrative-sidebar .flex-1::-webkit-scrollbar-thumb {
                background: rgba(156, 163, 175, 0.3);
                border-radius: 3px;
              }
              #narrative-sidebar .flex-1::-webkit-scrollbar-thumb:hover {
                background: rgba(156, 163, 175, 0.5);
              }
              
              /* Print styles for PDF export */
              @media print {
                /* Hide navigation and UI elements during print */
                nav,
                .fixed,
                #narrative-sidebar,
                #scroll-progress-bar,
                .sticky,
                .backdrop-blur-sm {
                  display: none !important;
                }
                
                /* Ensure content takes full width */
                main {
                  margin-left: 0 !important;
                  padding-left: 0 !important;
                }
                
                /* Optimize text for print */
                body {
                  font-size: 12pt;
                  line-height: 1.4;
                }
                
                /* Ensure images print properly */
                img {
                  max-width: 100% !important;
                  height: auto !important;
                }
                
                /* Page breaks */
                .page-break {
                  page-break-before: always;
                }
                
                /* Avoid breaking inside important elements */
                h1, h2, h3, h4, h5, h6 {
                  page-break-after: avoid;
                }
                
                p, li {
                  page-break-inside: avoid;
                }
              }
            `}</style>

            {/* Scroll Progress Script */}
            <script dangerouslySetInnerHTML={{
              __html: `
                document.addEventListener('DOMContentLoaded', function() {
                  const waveProgress = document.getElementById('wave-progress');
                  const pathwaySteps = document.querySelectorAll('.pathway-step');
                  
                  function updateProgress() {
                    const scrollTop = window.pageYOffset;
                    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
                    const scrollPercent = (scrollTop / docHeight) * 100;
                    
                    // Update scroll progress bar
                    const progressBar = document.getElementById('scroll-progress-bar');
                    if (progressBar) {
                      progressBar.style.width = Math.min(scrollPercent, 100) + '%';
                    }
                    
                    // Update wave progress using stroke-dashoffset (only if element exists)
                    if (waveProgress) {
                      const totalLength = 1000; // Total path length
                      const progress = Math.min(scrollPercent, 100);
                      const offset = totalLength - (totalLength * progress / 100);
                      waveProgress.style.strokeDashoffset = offset;
                    }
                    
                    // Update step states based on scroll position
                    const sections = ['introduction', 'problem', 'solution', 'key-players', 'next-steps', 'conclusion'];
                    sections.forEach((sectionId, index) => {
                      const section = document.getElementById(sectionId);
                      if (section) {
                        const sectionTop = section.offsetTop - window.innerHeight / 2;
                        const stepElement = document.querySelector(\`[data-step="\${index + 1}"]\`);
                        const stepCircle = stepElement?.querySelector('div');
                        
                        if (scrollTop >= sectionTop) {
                          // Mark as active/completed - use grey highlight for current section
                          const stepNumber = index + 1;
                          const isCurrentSection = scrollTop >= sectionTop && (index === sections.length - 1 || scrollTop < (document.getElementById(sections[index + 1])?.offsetTop - window.innerHeight / 2 || Infinity));
                          
                          if (isCurrentSection) {
                            // Current section gets grey highlight
                            stepCircle?.classList.remove('border-gray-300', 'text-gray-400', 'shadow-md', 'bg-pink-50', 'bg-blue-50', 'bg-green-50', 'bg-purple-50', 'bg-yellow-50', 'bg-teal-50', 'border-pink-200', 'border-blue-200', 'border-green-200', 'border-purple-200', 'border-yellow-200', 'border-teal-200', 'text-pink-400', 'text-blue-400', 'text-green-400', 'text-purple-400', 'text-yellow-400', 'text-teal-400');
                            stepCircle?.classList.add('bg-gray-300', 'border-gray-500', 'text-gray-700', 'shadow-lg', 'shadow-gray-300');
                            stepElement?.classList.add('active-step');
                          } else {
                            // Completed sections get their original vibrant colors
                            const colorMap = {
                              1: { bg: 'bg-pink-200', border: 'border-pink-400', text: 'text-pink-600', shadow: 'shadow-lg shadow-pink-200' },
                              2: { bg: 'bg-blue-200', border: 'border-blue-400', text: 'text-blue-600', shadow: 'shadow-lg shadow-blue-200' },
                              3: { bg: 'bg-green-200', border: 'border-green-400', text: 'text-green-600', shadow: 'shadow-lg shadow-green-200' },
                              4: { bg: 'bg-purple-200', border: 'border-purple-400', text: 'text-purple-600', shadow: 'shadow-lg shadow-purple-200' },
                              5: { bg: 'bg-yellow-200', border: 'border-yellow-400', text: 'text-yellow-600', shadow: 'shadow-lg shadow-yellow-200' },
                              6: { bg: 'bg-teal-200', border: 'border-teal-400', text: 'text-teal-600', shadow: 'shadow-lg shadow-teal-200' }
                            };
                            const colors = colorMap[stepNumber];
                            stepCircle?.classList.remove('border-gray-300', 'text-gray-400', 'shadow-md', 'bg-gray-300', 'border-gray-500', 'text-gray-700', 'shadow-gray-300');
                            stepCircle?.classList.add(colors.border, colors.bg, colors.text, ...colors.shadow.split(' '));
                            stepElement?.classList.add('active-step');
                          }
                        } else {
                          // Mark as pending - reset to default pastel colors
                          const stepNumber = index + 1;
                          const colorMap = {
                            1: { bg: 'bg-pink-50', border: 'border-pink-200', text: 'text-pink-400' },
                            2: { bg: 'bg-blue-50', border: 'border-blue-200', text: 'text-blue-400' },
                            3: { bg: 'bg-green-50', border: 'border-green-200', text: 'text-green-400' },
                            4: { bg: 'bg-purple-50', border: 'border-purple-200', text: 'text-purple-400' },
                            5: { bg: 'bg-yellow-50', border: 'border-yellow-200', text: 'text-yellow-400' },
                            6: { bg: 'bg-teal-50', border: 'border-teal-200', text: 'text-teal-400' }
                          };
                          const colors = colorMap[stepNumber];
                            stepCircle?.classList.remove('border-gray-300', 'text-gray-400', 'shadow-lg', 'shadow-pink-200', 'shadow-blue-200', 'shadow-green-200', 'shadow-purple-200', 'shadow-yellow-200', 'shadow-teal-200');
                          stepCircle?.classList.add(colors.border, colors.bg, colors.text, 'shadow-md');
                          stepElement?.classList.remove('active-step');
                        }
                      }
                    });
                  }
                  
                  window.addEventListener('scroll', updateProgress);
                  updateProgress(); // Initial call
                });
              `
            }} />
          </div>


          {/* Introduction Section */}
          <section id="introduction" className="mb-20">
            <div className="bg-white rounded-2xl shadow-xl border border-[#A5DAD8]/30 p-8 mb-8">
              <div className="mb-12">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#66C2BE]/10 text-[#66C2BE] text-base font-medium mb-6">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    Part 1: Introduction
                  </div>
                  <h2 className="text-4xl font-bold text-gray-900 mb-8">The Future of Ergonomic Work & Improving Health</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-8 items-stretch">
                  <div className="bg-gradient-to-r from-[#E3DFF1]/20 via-[#8CB7D0]/10 to-[#E3DFF1]/30 rounded-xl p-8 border border-[#A5DAD8]/30">
                    <blockquote className="text-2xl font-semibold text-gray-900 italic border-l-4 border-[#66C2BE] pl-6 leading-relaxed mb-6">
                      What if you could get work done without being chained to your desk?
                    </blockquote>
                    <p className="text-lg text-gray-900 leading-relaxed mb-6">
                      This ambitious question consumed us as we walked along New York City's East River six years ago, discussing the concept that would turn into Kahana.
                    </p>
                    <p className="text-lg text-gray-900 leading-relaxed mb-6">
                      The negative health impacts of sedentary work are well-documented: cardiovascular deterioration, musculoskeletal issues, metabolic dysfunction, and psychological health decline. The solution requires a fundamental shift in how we approach productivity.
                    </p>
                    <p className="text-lg text-gray-900 leading-relaxed mb-6">
                      The scary truth is that the more time you spend at a desk, whether seated or standing, your cardiovascular, musculoskeletal, metabolic, and psychological health are all deteriorating - and at an alarming pace. Just a year into our corporate jobs, we were already feeling the toll of the more sedentary lifestyle that our jobs imposed.
                    </p>
                    <p className="text-lg text-gray-900 leading-relaxed mb-6">
                      But we also recognized that empowering humans to perform any significant amount of job-related tasks away from a desk would require a herculean effort and major advancements in AR & VR, voice, gesture, and AI technologies. In short, it would require the ability to access and use the necessary materials we need to be productive away from a computer and monitors, just as easily and as quickly.
                    </p>
                    <p className="text-lg text-gray-900 leading-relaxed">
                      While we're not quite there yet, massive strides have been made across each of these areas over the last six years, bringing this vision from a science fiction pipe dream to a tangible goal that is within reach.
                    </p>
                  </div>
                  <div className="flex justify-center items-center">
                    <img 
                      src="/assets/image1.jpg" 
                      alt="Remote work and mobile productivity concept" 
                      className="rounded-xl shadow-lg w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8 items-stretch">
                <div className="bg-gradient-to-r from-[#E3DFF1]/20 via-[#8CB7D0]/10 to-[#E3DFF1]/30 rounded-xl p-8 border border-[#A5DAD8]/30">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">What This White Paper Covers</h3>
                  <p className="text-lg text-gray-900 mb-6">
                    In this comprehensive analysis, we will examine the progress that has been made, the obstacles that still remain, the players that are best positioned to overcome these obstacles, and what the next few years will bring.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="flex-shrink-0">
                        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#66C2BE] text-white text-base font-medium">1</div>
                      </div>
                      <p className="ml-3 text-gray-900">The health crisis caused by sedentary work environments</p>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0">
                        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#66C2BE] text-white text-base font-medium">2</div>
                      </div>
                      <p className="ml-3 text-gray-900">Technological solutions that could free us from desk-bound work</p>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0">
                        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#66C2BE] text-white text-base font-medium">3</div>
                      </div>
                      <p className="ml-3 text-gray-900">Key players leading the AR glasses revolution</p>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0">
                        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#66C2BE] text-white text-base font-medium">4</div>
                      </div>
                      <p className="ml-3 text-gray-900">Three critical development paths to desk-free productivity</p>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0">
                        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#66C2BE] text-white text-base font-medium">5</div>
                      </div>
                      <p className="ml-3 text-gray-900">Implementation roadmap and future outlook</p>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0">
                        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#66C2BE] text-white text-base font-medium">6</div>
                      </div>
                      <p className="ml-3 text-gray-900">Kahana's role in bringing this vision to life</p>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center items-center">
                  <img 
                    src="/assets/image2.jpg" 
                    alt="Research documentation and white paper analysis" 
                    className="rounded-xl shadow-lg w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Problem Section */}
          <section id="problem" className="mb-24">
            <div className="bg-white rounded-2xl shadow-xl border border-[#A5DAD8]/30 p-10 mb-12">
              <div className="text-center mb-12">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-600 text-base font-medium mb-6">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                  Part 2: The Problem
                </div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">How Desk-Bound Work Is Literally Killing Us</h2>
                <blockquote className="text-2xl font-semibold text-gray-900 italic border-l-4 border-blue-500 pl-6 my-8 max-w-4xl mx-auto">
                  Human bodies were designed to be active.
                </blockquote>
              </div>

              <div className="prose prose-lg max-w-none">
                {/* Screenshot Component 1: The Historical Context */}
                <motion.div 
                  className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 mb-8 border border-green-200"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  viewport={{ once: true, margin: "-100px" }}
                >
                  <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">The Historical Context</h3>
                  
                  {/* Then vs Now Comparison */}
                  <div className="grid md:grid-cols-2 gap-8">
                    {/* Then: Active Lifestyle */}
                    <motion.div 
                      className="bg-white/70 rounded-xl p-6 border border-green-200"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                      viewport={{ once: true, margin: "-100px" }}
                    >
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                          <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                          </svg>
                        </div>
                        <h4 className="text-2xl font-semibold text-gray-900">Then: Active Lifestyle</h4>
                      </div>
                      <p className="text-lg text-gray-900 mb-4 leading-relaxed">
                        For nearly all of humanity's existence, from the era of hunter-gatherers through the mid-20th century, humans had a naturally active lifestyle.
                      </p>
                      <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                              <svg className="w-4 h-4 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                    </div>
                            <span className="text-base font-medium text-gray-900">Daily Steps</span>
                          </div>
                          <div className="text-right">
                            <div className="text-2xl font-bold text-gray-900">
                              <AnimatedCounter start={0} end={14000} duration={2500} suffix="-18,000" />
                            </div>
                            <div className="text-sm text-gray-900">steps per day</div>
                          </div>
                        </div>
                      </div>
                    </motion.div>

                    {/* Now: Sedentary Crisis */}
                    <motion.div 
                      className="bg-white/70 rounded-xl p-6 border border-red-200"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                      viewport={{ once: true, margin: "-100px" }}
                    >
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
                          <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                          </svg>
                        </div>
                        <h4 className="text-2xl font-semibold text-gray-900">Now: Sedentary Crisis</h4>
                      </div>
                      <p className="text-lg text-gray-900 mb-4 leading-relaxed">
                        From about 1950 onward, that lifestyle became steadily less active, with technological advancements enabling a more sedentary, indoor lifestyle.
                      </p>
                      <div className="bg-red-50 rounded-lg p-4 border border-red-200">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mr-3">
                              <svg className="w-4 h-4 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                    </div>
                            <span className="text-base font-medium text-gray-900">Daily Steps</span>
                          </div>
                          <div className="text-right">
                            <div className="text-2xl font-bold text-gray-900">
                              <AnimatedCounter start={0} end={4000} duration={2000} suffix="-5,000" />
                            </div>
                            <div className="text-sm text-gray-900">steps per day<sup><a href="/references-future-of-ergonomic-work-white-paper" className="text-gray-900 hover:text-gray-900">1,2</a></sup></div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Dramatic Decline Visualization */}
                  <motion.div 
                    className="mt-8 bg-white/70 rounded-xl p-6 border border-amber-200"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                    viewport={{ once: true, margin: "-100px" }}
                  >
                    <motion.div 
                      className="flex items-center justify-center mb-4"
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
                      viewport={{ once: true, margin: "-100px" }}
                    >
                      <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center mr-3">
                        <svg className="w-5 h-5 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
                        </svg>
                      </div>
                      <h4 className="text-xl font-semibold text-gray-900">The Dramatic Decline</h4>
                    </motion.div>
                    <div className="grid md:grid-cols-3 gap-6 text-center">
                      <motion.div 
                        className="bg-green-50 rounded-lg p-4 border border-green-200"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
                        viewport={{ once: true, margin: "-100px" }}
                      >
                        <div className="text-3xl font-bold text-gray-900 mb-2">
                          <AnimatedCounter start={0} end={70} duration={2000} suffix="%" />
                        </div>
                        <div className="text-base text-gray-900">Reduction in daily activity</div>
                      </motion.div>
                      <motion.div 
                        className="bg-amber-50 rounded-lg p-4 border border-amber-200"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
                        viewport={{ once: true, margin: "-100px" }}
                      >
                        <div className="text-3xl font-bold text-gray-900 mb-2">
                          <AnimatedCounter start={0} end={75} duration={2000} />
                        </div>
                        <div className="text-base text-gray-900">Years of decline (1950-2025)</div>
                      </motion.div>
                      <motion.div 
                        className="bg-red-50 rounded-lg p-4 border border-red-200"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 1.0, ease: "easeOut" }}
                        viewport={{ once: true, margin: "-100px" }}
                      >
                        <div className="text-3xl font-bold text-gray-900 mb-2">
                          <AnimatedCounter start={0} end={3} duration={2000} suffix="x" />
                        </div>
                        <div className="text-base text-gray-900">Less active than our ancestors</div>
                      </motion.div>
                    </div>
                  </motion.div>
                </motion.div>

                {/* Screenshot Component 2: The Life Expectancy Paradox */}
                <motion.div 
                  className="grid md:grid-cols-2 gap-8 items-center mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  viewport={{ once: true, margin: "-100px" }}
                >
                  <motion.div 
                    className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl p-8 border border-emerald-200"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                    viewport={{ once: true, margin: "-100px" }}
                  >
                    <motion.h3 
                      className="text-2xl font-bold text-gray-900 mb-6 text-center"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
                      viewport={{ once: true, margin: "-100px" }}
                    >
                      The Life Expectancy Paradox
                    </motion.h3>
                    <div className="text-center mb-6">
                      <motion.div 
                        className="inline-flex items-center px-6 py-3 bg-white rounded-xl shadow-lg border border-emerald-200"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                        viewport={{ once: true, margin: "-100px" }}
                      >
                        <motion.div 
                          className="text-center"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
                          viewport={{ once: true, margin: "-100px" }}
                        >
                          <div className="text-3xl font-bold text-gray-900 mb-2">
                            <AnimatedCounter start={0} end={79} duration={2000} suffix=" years" />
                          </div>
                          <div className="text-base text-gray-900">2010 Life Expectancy</div>
                        </motion.div>
                        <motion.div 
                          className="mx-4 text-2xl text-gray-400"
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.4, delay: 1.2, ease: "easeOut" }}
                          viewport={{ once: true, margin: "-100px" }}
                        >
                          →
                        </motion.div>
                        <motion.div 
                          className="text-center"
                          initial={{ opacity: 0, x: 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.6, delay: 1.4, ease: "easeOut" }}
                          viewport={{ once: true, margin: "-100px" }}
                        >
                          <div className="text-3xl font-bold text-gray-900 mb-2">
                            <AnimatedCounter start={0} end={78} duration={2000} suffix=" years" />
                          </div>
                          <div className="text-base text-gray-900">2025 Life Expectancy</div>
                        </motion.div>
                      </motion.div>
                    </div>
                    <motion.p 
                      className="text-lg text-gray-900 leading-relaxed"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 1.8, ease: "easeOut" }}
                      viewport={{ once: true, margin: "-100px" }}
                    >
                      Despite exponential medical progress, life expectancy in the United States has hit a plateau and is actually decreasing.<sup><a href="/references-future-of-ergonomic-work-white-paper" className="text-gray-900 hover:text-gray-900">3</a></sup>
                    </motion.p>
                  </motion.div>
                  <motion.div 
                    className="flex justify-center"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                    viewport={{ once: true, margin: "-100px" }}
                  >
                    <motion.img 
                      src="https://images.pexels.com/photos/4386464/pexels-photo-4386464.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" 
                      alt="Healthcare and medical progress concept" 
                      className="rounded-xl shadow-lg max-w-full h-auto"
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
                      viewport={{ once: true, margin: "-100px" }}
                    />
                  </motion.div>
                </motion.div>

                {/* Screenshot Component 3: The Workplace Connection */}
                <motion.div 
                  className="grid md:grid-cols-2 gap-8 items-center mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  viewport={{ once: true, margin: "-100px" }}
                >
                  <motion.div 
                    className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-2xl p-8 border border-teal-200"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                    viewport={{ once: true, margin: "-100px" }}
                  >
                    <motion.h3 
                      className="text-2xl font-bold text-gray-900 mb-6 text-center"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
                      viewport={{ once: true, margin: "-100px" }}
                    >
                      The Workplace Connection
                    </motion.h3>
                    <div className="grid md:grid-cols-3 gap-4 mb-6">
                      <motion.div 
                        className="bg-white rounded-xl p-4 shadow-lg text-center"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
                        viewport={{ once: true, margin: "-100px" }}
                      >
                        <div className="text-2xl font-bold text-gray-900 mb-2">
                          <AnimatedCounter start={0} end={83} duration={2000} suffix="%" />
                        </div>
                        <div className="text-xs text-gray-900">Increase in Sedentary Jobs Since 1950</div>
                      </motion.div>
                      <motion.div 
                        className="bg-white rounded-xl p-4 shadow-lg text-center"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.7, ease: "easeOut" }}
                        viewport={{ once: true, margin: "-100px" }}
                      >
                        <div className="text-2xl font-bold text-gray-900 mb-2">
                          <AnimatedCounter start={0} end={4} duration={2000} suffix="-5 hours" />
                        </div>
                        <div className="text-xs text-gray-900">Average Sitting Time (1950)</div>
                      </motion.div>
                      <motion.div 
                        className="bg-white rounded-xl p-4 shadow-lg text-center"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.9, ease: "easeOut" }}
                        viewport={{ once: true, margin: "-100px" }}
                      >
                        <div className="text-2xl font-bold text-gray-900 mb-2">
                          <AnimatedCounter start={0} end={8} duration={2000} suffix=" hours" />
                        </div>
                        <div className="text-xs text-gray-900">Average Sitting Time (Today)</div>
                      </motion.div>
                    </div>
                    <motion.p 
                      className="text-lg text-gray-900 leading-relaxed"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 1.2, ease: "easeOut" }}
                      viewport={{ once: true, margin: "-100px" }}
                    >
                      The shift to a more sedentary lifestyle, driven in large part by time spent in the workplace, is a primary culprit behind the health crisis.<sup><a href="/references-future-of-ergonomic-work-white-paper" className="text-gray-900 hover:text-gray-900">4,5</a></sup>
                    </motion.p>
                  </motion.div>
                  <motion.div 
                    className="flex justify-center"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                    viewport={{ once: true, margin: "-100px" }}
                  >
                    <motion.img 
                      src="/assets/image3.jpg" 
                      alt="Modern office workspace and collaborative environment" 
                      className="rounded-xl shadow-lg max-w-full h-auto"
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
                      viewport={{ once: true, margin: "-100px" }}
                    />
                  </motion.div>
                </motion.div>

                {/* Health Crisis Data Visualization */}
                <motion.div 
                  className="bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl p-10 mb-12 border border-red-200"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  viewport={{ once: true, margin: "-100px" }}
                >
                  <motion.h3 
                    className="text-2xl font-bold text-gray-900 mb-6 text-center"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
                    viewport={{ once: true, margin: "-100px" }}
                  >
                    The Hidden Tax of Being Chained to a Desk
                  </motion.h3>
                  <div className="grid md:grid-cols-3 gap-6">
                    <motion.div 
                      className="bg-white rounded-xl p-6 shadow-lg"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                      viewport={{ once: true, margin: "-100px" }}
                    >
                      <div className="text-center">
                        <div className="text-4xl font-bold text-gray-900 mb-2">
                          <AnimatedCounter start={0} end={10} duration={2000} suffix="-13%" />
                        </div>
                        <div className="text-base text-gray-900 mb-2">1950 Obesity Rate</div>
                        <div className="text-4xl font-bold text-gray-900 mb-2">
                          <AnimatedCounter start={0} end={40} duration={2000} prefix=">" suffix="%" />
                        </div>
                        <div className="text-base text-gray-900">2025 Obesity Rate<sup><a href="/references-future-of-ergonomic-work-white-paper" className="text-gray-900 hover:text-gray-900">6</a></sup></div>
                        <div className="text-lg font-semibold text-gray-900 mt-4">
                          <AnimatedCounter start={0} end={300} duration={2000} suffix="%+ Increase" />
                        </div>
                      </div>
                    </motion.div>
                    <motion.div 
                      className="bg-white rounded-xl p-6 shadow-lg"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
                      viewport={{ once: true, margin: "-100px" }}
                    >
                      <div className="text-center">
                        <div className="text-4xl font-bold text-gray-900 mb-2">
                          <AnimatedCounter start={0} end={1} duration={2000} prefix="<" suffix="%" />
                        </div>
                        <div className="text-base text-gray-900 mb-2">1950 Diabetes Rate</div>
                        <div className="text-4xl font-bold text-gray-900 mb-2">
                          <AnimatedCounter start={0} end={9} duration={2000} suffix="-10%" />
                        </div>
                        <div className="text-base text-gray-900">2025 Diabetes Rate<sup><a href="/references-future-of-ergonomic-work-white-paper" className="text-gray-900 hover:text-gray-900">7,8</a></sup></div>
                        <div className="text-lg font-semibold text-gray-900 mt-4">
                          <AnimatedCounter start={0} end={1000} duration={2000} suffix="%+ Increase" />
                        </div>
                      </div>
                    </motion.div>
                    <motion.div 
                      className="bg-white rounded-xl p-6 shadow-lg"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
                      viewport={{ once: true, margin: "-100px" }}
                    >
                      <div className="text-center">
                        <div className="text-4xl font-bold text-gray-900 mb-2">
                          <AnimatedCounter start={0} end={20} duration={2000} prefix="<" suffix="%" />
                        </div>
                        <div className="text-base text-gray-900 mb-2">1950 MSK Disorders</div>
                        <div className="text-4xl font-bold text-gray-900 mb-2">
                          <AnimatedCounter start={0} end={50} duration={2000} prefix="~" suffix="%" />
                        </div>
                        <div className="text-base text-gray-900">2025 MSK Disorders<sup><a href="/references-future-of-ergonomic-work-white-paper" className="text-gray-900 hover:text-gray-900">9</a></sup></div>
                        <div className="text-lg font-semibold text-gray-900 mt-4">
                          <AnimatedCounter start={0} end={150} duration={2000} suffix="%+ Increase" />
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>

                <p className="text-lg text-gray-900 mb-6">
                  This significant increase has introduced a new host of health problems that were far less prevalent for most of human history: sedentary behavior is well-documented to increase the risk of premature death, due to the higher likelihood of contracting cardiovascular diseases, metabolic disorders, musculoskeletal disorders, cancer, depression, and even cognitive impairment.
                </p>

                <p className="text-lg text-gray-900 mb-8">
                  And while depression, anxiety, and burnout were not as well-documented in the workplace in the 1950s, sedentary behavior is linked to poorer mood, higher stress, increased fatigue, and increased risk of depression and anxiety.<sup><a href="/references-future-of-ergonomic-work-white-paper" className="text-gray-900 hover:text-gray-900">10,11</a></sup>
                </p>

                {/* Current Solutions Analysis */}
                <motion.div 
                  className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl p-10 mb-12 border border-yellow-200"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  viewport={{ once: true, margin: "-100px" }}
                >
                  <motion.h3 
                    className="text-2xl font-bold text-gray-900 mb-6"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
                    viewport={{ once: true, margin: "-100px" }}
                  >
                    Why Current Solutions Fall Short
                  </motion.h3>
                  <div className="grid md:grid-cols-3 gap-6">
                    <motion.div 
                      className="bg-white rounded-xl p-6 shadow-lg"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                      viewport={{ once: true, margin: "-100px" }}
                    >
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mr-4">
                          <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <h4 className="text-lg font-semibold text-gray-900">Standing Desks</h4>
                      </div>
                      <p className="text-gray-900 text-base mb-3">
                        Barely meets minimum activity threshold (1.5 METs)
                      </p>
                      <ul className="text-base text-gray-900 space-y-1 list-disc list-inside">
                        <li>No significant cardiovascular benefit</li>
                        <li>Introduces new health problems (varicose veins, DVT)</li>
                        <li>Musculoskeletal issues persist (carpal tunnel)</li>
                        <li>Blood pooling in lower extremities</li>
                      </ul>
                    </motion.div>
                    <motion.div 
                      className="bg-white rounded-xl p-6 shadow-lg"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
                      viewport={{ once: true, margin: "-100px" }}
                    >
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mr-4">
                          <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <h4 className="text-lg font-semibold text-gray-900">Desk Treadmills</h4>
                      </div>
                      <p className="text-gray-900 text-base mb-3">
                        Impractical for most work tasks
                      </p>
                      <ul className="text-base text-gray-900 space-y-1 list-disc list-inside">
                        <li>Difficult to type while moving</li>
                        <li>Limited to specific activities (calls)</li>
                        <li>Not comprehensive solution</li>
                        <li>Still requires desk-bound work</li>
                      </ul>
                    </motion.div>
                    <motion.div 
                      className="bg-white rounded-xl p-6 shadow-lg"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
                      viewport={{ once: true, margin: "-100px" }}
                    >
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mr-4">
                          <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <h4 className="text-lg font-semibold text-gray-900">Walking Breaks</h4>
                      </div>
                      <p className="text-gray-900 text-base mb-3">
                        Work culture pressure limits effectiveness
                      </p>
                      <ul className="text-base text-gray-900 space-y-1 list-disc list-inside">
                        <li>Pressure to minimize time away from desk</li>
                        <li>Most work requires desk access</li>
                        <li>Not a fundamental solution</li>
                        <li>Productivity vs. health trade-off</li>
                      </ul>
                    </motion.div>
                  </div>
                </motion.div>

                <p className="text-lg text-gray-900 mb-6">
                  Over the past 10-15 years, the public has become increasingly aware of the dangers that come with being chained to a desk to work. This has sparked the development of new technologies such as standing desks and mini treadmills to accompany desks, as well as workplace movements to encourage taking more breaks to go on walks. Sadly, these efforts are not nearly enough to make a tangible impact.<sup><a href="/references-future-of-ergonomic-work-white-paper" className="text-gray-900 hover:text-gray-900">12,13,14</a></sup>
                </p>

                <div className="bg-gradient-to-r from-blue-100 to-blue-50 rounded-xl p-6 border border-blue-200">
                  <p className="text-lg font-semibold text-gray-900 text-center">
                    Simply put, humans were not meant to be sedentary beings. And the way that we work in the 21st century - tied to our desks - is quite literally killing us, deteriorating our bodies and exposing us to a myriad of health risks.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-6 border border-blue-200 mt-8">
                  <div className="flex items-center mb-4">
                    <svg className="w-6 h-6 text-gray-900 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    <h3 className="text-lg font-semibold text-gray-900">The Solution Awaits</h3>
                  </div>
                  <p className="text-gray-900">
                    The health crisis we've outlined above demands a fundamental shift in how we work. In the next section, we'll explore how AR, VR, voice, gesture, and AI technologies are converging to create the tools that could finally free us from desk-bound productivity. <a href="#solution" className="text-gray-900 hover:text-gray-900 font-medium">Continue to the Solution →</a>
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Visual Section Break */}
          <div className="flex items-center justify-center my-16">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
            <div className="mx-8 px-4 py-2 bg-white rounded-full border border-gray-200 shadow-sm">
              <span className="text-base font-medium text-gray-900">The Solution</span>
            </div>
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
          </div>

          {/* Solution Section */}
          <section id="solution" className="mb-24">
            <div className="bg-white rounded-2xl shadow-xl border border-[#A5DAD8]/30 p-10 mb-12">
              <div className="text-center mb-12">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-100 text-gray-900 text-base font-medium mb-6">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                  Part 3: The Solution
                </div>
                <h2 className="text-4xl font-bold text-gray-900 mb-8">Breaking Free from Desk-Bound Productivity</h2>
                <div className="grid md:grid-cols-2 gap-8 items-stretch">
                  <div className="bg-gradient-to-r from-[#E3DFF1]/20 via-[#8CB7D0]/10 to-[#E3DFF1]/30 rounded-xl p-8 border border-[#A5DAD8]/30 text-left">
                    <blockquote className="text-2xl font-semibold text-gray-900 italic border-l-4 border-[#66C2BE] pl-6 leading-relaxed mb-6 text-left">
                      The future of work isn't about better desks—it's about breaking free from desks altogether.
                    </blockquote>
                    <p className="text-lg text-gray-900 mb-6 leading-relaxed text-left">
                      Sitting at a desk is bad. Standing at a desk is bad. Walking at a desk is not a practical enough solution, and it is not possible to be productive without being at a desk.
                    </p>
                    <p className="text-lg text-gray-900 mb-6 leading-relaxed text-left">
                      In order to reverse the sedentary spiral, humans need to break free from desks altogether - at least for significant chunks of time. Doing so is an immensely complex, multi-faceted endeavor, as humans are tied to their desks due to a lack of suitable technological options beyond a computer hooked up to one or more monitors.
                    </p>
                    <p className="text-lg text-gray-900 mb-6 leading-relaxed text-left">
                      A phone is suitable for certain tasks, such as taking calls or sending light emails, but lack of screen space is a severe limitation - the majority of tasks require workers to have access to their important apps, files, and information, and the screen space that their computer and monitors provide to practically do their jobs.
                    </p>
                    <p className="text-lg text-gray-900 mb-6 leading-relaxed text-left">
                      But a complementary piece of technology is missing from the equation. One that:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-lg text-gray-900 mb-6 leading-relaxed text-left">
                      <li>Provides humans with a suitable way to accomplish a significant subset of tasks on the go</li>
                      <li>Combines the convenience and portability of the smartphone with the screen space to have the ability to easily pull up and view necessary materials</li>
                      <li>Enables awareness of one's surroundings (e.g., not staring down at a phone)</li>
                      <li>Creates an ergonomic, pleasant environment for productivity (e.g., not hunched over a small screen)</li>
                    </ul>
                    <p className="text-lg text-gray-900 leading-relaxed text-left">
                      The solution? Lightweight wearable technology that gracefully blends computing power, practicality, safety, and communication technology to enable people to perform a significant portion of the work they would do at a desk while on the move, enabling them to work while on the previously aforementioned treadmill or on a walk outside.
                    </p>
                  </div>
                  <div className="flex justify-center items-center">
                    <img 
                      src="/assets/image4.jpg" 
                      alt="Standing desk and ergonomic workspace setup" 
                      className="rounded-xl shadow-lg w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              <div className="prose prose-lg max-w-none">

                {/* Screenshot Component 4: Technology Overview */}
                <motion.div 
                  className="grid md:grid-cols-2 gap-8 items-center mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  viewport={{ once: true, margin: "-100px" }}
                >
                  <motion.div 
                    className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-2xl p-8 border border-cyan-200"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                    viewport={{ once: true, margin: "-100px" }}
                  >
                    <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">The Technology Solution</h3>
                    <p className="text-lg text-gray-900 text-center mb-8 leading-relaxed">
                      There is a select set of companies that are best positioned to bring this technology to market. Here is a high-level overview of the technology that will need to be involved:
                    </p>
                    <div className="grid md:grid-cols-3 gap-4">
                      <motion.div 
                        className="bg-white rounded-xl p-4 shadow-lg text-center"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                        viewport={{ once: true, margin: "-100px" }}
                      >
                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                          <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                        </div>
                        <h4 className="text-base font-semibold text-gray-900 mb-1">AR/VR/MR Devices</h4>
                        <p className="text-xs text-gray-900">Lightweight, wearable computing platforms</p>
                      </motion.div>
                      <motion.div 
                        className="bg-white rounded-xl p-4 shadow-lg text-center"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
                        viewport={{ once: true, margin: "-100px" }}
                      >
                        <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-3">
                          <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                          </svg>
                        </div>
                        <h4 className="text-base font-semibold text-gray-900 mb-1">Voice & Gesture</h4>
                        <p className="text-xs text-gray-900">Natural interaction methods</p>
                      </motion.div>
                      <motion.div 
                        className="bg-white rounded-xl p-4 shadow-lg text-center"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
                        viewport={{ once: true, margin: "-100px" }}
                      >
                        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                          <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                          </svg>
                        </div>
                        <h4 className="text-base font-semibold text-gray-900 mb-1">AI Technology</h4>
                        <p className="text-xs text-gray-900">Intelligent task automation</p>
                      </motion.div>
                    </div>
                  </motion.div>
                  <div className="flex justify-center">
                    <img 
                      src="/assets/image2.png" 
                      alt="Futuristic technology and digital innovation" 
                      className="rounded-xl shadow-lg max-w-full h-auto"
                    />
                  </div>
                </motion.div>

                {/* Screenshot Component 5: AR Glasses Advantage */}
                <motion.div 
                  className="bg-gradient-to-r from-purple-50 to-purple-100 rounded-2xl p-10 mb-8 border border-purple-200 shadow-lg"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  viewport={{ once: true, margin: "-100px" }}
                >
                  <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Why AR Glasses Are the Clear Winner</h3>
                  <div className="grid md:grid-cols-2 gap-12">
                    <motion.div 
                      className="bg-white rounded-xl p-8 shadow-md border-l-4 border-red-500"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                      viewport={{ once: true, margin: "-100px" }}
                    >
                      <div className="flex items-center mb-6">
                        <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
                          <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </div>
                        <h4 className="text-2xl font-bold text-gray-900">VR & MR Limitations</h4>
                      </div>
                      <ul className="space-y-4">
                        <li className="flex items-start">
                          <div className="w-3 h-3 bg-red-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                          <span className="text-lg text-gray-900 font-medium">Heavy and clunky design</span>
                        </li>
                        <li className="flex items-start">
                          <div className="w-3 h-3 bg-red-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                          <span className="text-lg text-gray-900 font-medium">Safety concerns for outdoor use</span>
                        </li>
                        <li className="flex items-start">
                          <div className="w-3 h-3 bg-red-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                          <span className="text-lg text-gray-900 font-medium">Confined to indoor spaces</span>
                        </li>
                        <li className="flex items-start">
                          <div className="w-3 h-3 bg-red-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                          <span className="text-lg text-gray-900 font-medium">Still recreates sedentary work</span>
                        </li>
                      </ul>
                    </motion.div>
                    <motion.div 
                      className="bg-white rounded-xl p-8 shadow-md border-l-4 border-green-500"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                      viewport={{ once: true, margin: "-100px" }}
                    >
                      <div className="flex items-center mb-6">
                        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                          <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <h4 className="text-2xl font-bold text-gray-900">AR Glasses Advantages</h4>
                      </div>
                      <ul className="space-y-4">
                        <li className="flex items-start">
                          <div className="w-3 h-3 bg-green-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                          <span className="text-lg text-gray-900 font-medium">2-5x lighter than VR/MR</span>
                        </li>
                        <li className="flex items-start">
                          <div className="w-3 h-3 bg-green-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                          <span className="text-lg text-gray-900 font-medium">Like wearing large sunglasses</span>
                        </li>
                        <li className="flex items-start">
                          <div className="w-3 h-3 bg-green-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                          <span className="text-lg text-gray-900 font-medium">Comfortable for extended wear</span>
                        </li>
                        <li className="flex items-start">
                          <div className="w-3 h-3 bg-green-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                          <span className="text-lg text-gray-900 font-medium">Safe for outdoor use</span>
                        </li>
                      </ul>
                    </motion.div>
                  </div>
                </motion.div>

                {/* Screenshot Component 6: The Computing Challenge */}
                <div className="grid md:grid-cols-2 gap-8 items-stretch mb-8">
                  <div className="bg-gradient-to-br from-indigo-50 via-blue-50 to-cyan-50 rounded-2xl p-8 border border-indigo-200">
                    <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">The Computing Challenge</h3>
                    
                    {/* Visual Challenge Triangle */}
                    <div className="relative mb-8">
                      <div className="flex justify-center items-center mb-6">
                        <div className="relative">
                          {/* Triangle connecting the three challenges */}
                          <svg className="w-64 h-64 text-gray-900" viewBox="0 0 200 200">
                            <polygon points="100,20 180,160 20,160" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="5,5"/>
                            <circle cx="100" cy="30" r="8" fill="#4F46E5" className="animate-pulse"/>
                            <circle cx="170" cy="150" r="8" fill="#4F46E5" className="animate-pulse"/>
                            <circle cx="30" cy="150" r="8" fill="#4F46E5" className="animate-pulse"/>
                          </svg>
                          
                          {/* Challenge labels positioned at triangle points */}
                          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-2">
                            <div className="bg-white rounded-lg px-4 py-3 shadow-lg border border-indigo-200">
                              <div className="text-lg font-bold text-gray-900">Weight & Size</div>
                              <div className="text-base text-gray-500">Lightweight Design</div>
                            </div>
                          </div>
                          <div className="absolute bottom-0 right-0 transform translate-x-8 translate-y-2">
                            <div className="bg-white rounded-lg px-4 py-3 shadow-lg border border-indigo-200">
                              <div className="text-lg font-bold text-gray-900">Computing Power</div>
                              <div className="text-base text-gray-500">High Performance</div>
                            </div>
                          </div>
                          <div className="absolute bottom-0 left-0 transform -translate-x-8 translate-y-2">
                            <div className="bg-white rounded-lg px-4 py-3 shadow-lg border border-indigo-200">
                              <div className="text-lg font-bold text-gray-900">Battery Life</div>
                              <div className="text-base text-gray-500">All-Day Usage</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Challenge Description */}
                    <div className="bg-white/70 rounded-xl p-6 border border-indigo-100">
                      <div className="flex items-start mb-4">
                        <div className="flex-shrink-0 w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mr-3">
                          <svg className="w-5 h-5 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-gray-900 mb-2">The Impossible Triangle</h4>
                          <p className="text-gray-900 leading-relaxed">
                            AR glasses face a fundamental engineering paradox: optimizing any two of these factors inevitably compromises the third. It's the classic "pick two" dilemma of wearable computing.
                          </p>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-3 gap-4 mt-4">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-gray-900 mb-1">Heavy</div>
                          <div className="text-xs text-gray-500">More Power</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-gray-900 mb-1">Hot</div>
                          <div className="text-xs text-gray-500">More Battery</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-gray-900 mb-1">Light</div>
                          <div className="text-xs text-gray-500">Less Power</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center items-center">
                    <img 
                      src="/assets/image5.jpg" 
                      alt="AR glasses and technology concept" 
                      className="rounded-xl shadow-lg w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Voice and Gesture Technology */}
                <motion.div 
                  className="grid md:grid-cols-2 gap-8 items-stretch mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  viewport={{ once: true, margin: "-100px" }}
                >
                  <motion.div 
                    className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 border border-purple-200"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                    viewport={{ once: true, margin: "-100px" }}
                  >
                    <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Voice and Gesture Technology</h3>
                    
                    {/* Simple Visual Concept */}
                    <div className="flex justify-center mb-8">
                      <div className="relative">
                        {/* Central AR Glasses */}
                        <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg">
                          <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                        </div>
                        
                        {/* Simple connecting lines */}
                        <div className="absolute -left-12 top-1/2 transform -translate-y-1/2 w-8 h-0.5 bg-purple-300"></div>
                        <div className="absolute -right-12 top-1/2 transform -translate-y-1/2 w-8 h-0.5 bg-pink-300"></div>
                        
                        {/* Input labels - positioned further out to avoid overlap */}
                        <div className="absolute -left-24 top-1/2 transform -translate-y-1/2 text-base font-medium text-gray-900">Voice</div>
                        <div className="absolute -right-28 top-1/2 transform -translate-y-1/2 text-base font-medium text-gray-900">Gesture</div>
                      </div>
                    </div>

                    {/* Clean Content */}
                    <div className="space-y-6">
                      <motion.div 
                        className="bg-white/70 rounded-xl p-6 border border-purple-100"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                        viewport={{ once: true, margin: "-100px" }}
                      >
                        <h4 className="text-lg font-semibold text-gray-900 mb-3">The Vision</h4>
                        <p className="text-gray-900 leading-relaxed">
                          Voice-first browsers and operating systems that replace keyboard navigation with natural speech commands like "pull up the article I bookmarked last week" or "pull up Microsoft Excel on the left and Chrome on the right."
                        </p>
                      </motion.div>
                      
                      <motion.div 
                        className="bg-white/70 rounded-xl p-6 border border-pink-100"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
                        viewport={{ once: true, margin: "-100px" }}
                      >
                        <h4 className="text-lg font-semibold text-gray-900 mb-3">The Reality</h4>
                        <p className="text-gray-900 leading-relaxed">
                          While existing devices show sophisticated voice and gesture technology, significant improvements are still needed in accuracy, functionality beyond basic navigation, and gesture precision. The technology is promising but not yet ready for full productivity replacement.
                        </p>
                      </motion.div>
                    </div>
                  </motion.div>
                  <div className="flex justify-center items-center">
                    <img 
                      src="/assets/image6.jpg" 
                      alt="Voice control and gesture recognition technology" 
                      className="rounded-xl shadow-lg w-full h-full object-cover"
                    />
                  </div>
                </motion.div>

                {/* AI Technology */}
                <motion.div 
                  className="grid md:grid-cols-2 gap-8 items-stretch mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  viewport={{ once: true, margin: "-100px" }}
                >
                  <motion.div 
                    className="bg-gradient-to-br from-green-50 to-teal-50 rounded-2xl p-8 border border-green-200"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                    viewport={{ once: true, margin: "-100px" }}
                  >
                    <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Personalized, Agentic AI Technology</h3>
                    
                    {/* Simple AI Status */}
                    <div className="flex justify-center mb-8">
                      <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-500 rounded-full flex items-center justify-center shadow-lg">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                        </svg>
                      </div>
                    </div>

                    {/* Clean Content */}
                    <div className="space-y-6">
                      <motion.div 
                        className="bg-white/70 rounded-xl p-6 border border-green-100"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                        viewport={{ once: true, margin: "-100px" }}
                      >
                        <h4 className="text-lg font-semibold text-gray-900 mb-3">The Current State</h4>
                        <p className="text-gray-900 leading-relaxed">
                          AI is already ubiquitous and the most advanced of the three technologies. From ChatGPT and Anthropic to coding agents like Replit and Cursor, AI is heavily leveraged for desk-based work across platforms like Google Drive and Notion.
                        </p>
                      </motion.div>
                      
                      <motion.div 
                        className="bg-white/70 rounded-xl p-6 border border-orange-100"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
                        viewport={{ once: true, margin: "-100px" }}
                      >
                        <h4 className="text-lg font-semibold text-gray-900 mb-3">The AR Challenge</h4>
                        <p className="text-gray-900 leading-relaxed">
                          While integrating AI into AR glasses would be transformative, AI workloads are compute-intensive and require heavy real-time processing. Even with external computing devices, challenges include overheating, reduced battery life, and higher latency—especially with cloud processing.
                        </p>
                      </motion.div>
                    </div>
                  </motion.div>
                  <div className="flex justify-center items-center">
                    <img 
                      src="/assets/image7.jpg" 
                      alt="AI technology and artificial intelligence concept" 
                      className="rounded-xl shadow-lg w-full h-full object-cover"
                    />
                  </div>
                </motion.div>

                {/* Additional Technical Considerations */}
                <motion.div 
                  className="grid md:grid-cols-2 gap-8 items-stretch mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  viewport={{ once: true, margin: "-100px" }}
                >
                  <motion.div 
                    className="bg-gradient-to-br from-gray-50 via-slate-50 to-zinc-50 rounded-2xl p-8 border border-gray-200"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                    viewport={{ once: true, margin: "-100px" }}
                  >
                    <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Additional Technical Considerations</h3>
                    
                    {/* Central Challenge Icon */}
                    <div className="flex justify-center mb-8">
                      <div className="w-16 h-16 bg-gradient-to-br from-gray-500 to-slate-500 rounded-full flex items-center justify-center shadow-lg">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                    </div>

                    {/* Technical Challenges Grid */}
                    <div className="space-y-4">
                      <motion.div 
                        className="bg-white/70 rounded-xl p-4 border border-gray-100"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                        viewport={{ once: true, margin: "-100px" }}
                      >
                        <div className="flex items-center mb-2">
                          <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                            <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
                            </svg>
                          </div>
                          <h4 className="text-xl font-semibold text-gray-900">Connectivity & Battery</h4>
                        </div>
                        <p className="text-xl text-gray-900 leading-relaxed">Must work without WiFi and last all day for mobile productivity</p>
                      </motion.div>
                      
                      <motion.div 
                        className="bg-white/70 rounded-xl p-4 border border-gray-100"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
                        viewport={{ once: true, margin: "-100px" }}
                      >
                        <div className="flex items-center mb-2">
                          <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center mr-3">
                            <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                            </svg>
                          </div>
                          <h4 className="text-xl font-semibold text-gray-900">Light Sensitivity</h4>
                        </div>
                        <p className="text-xl text-gray-900 leading-relaxed">Adapt to indoor/outdoor environments for safety and visibility</p>
                      </motion.div>
                      
                      <motion.div 
                        className="bg-white/70 rounded-xl p-4 border border-gray-100"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
                        viewport={{ once: true, margin: "-100px" }}
                      >
                        <div className="flex items-center mb-2">
                          <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                            <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                            </svg>
                          </div>
                          <h4 className="text-xl font-semibold text-gray-900">Style & Comfort</h4>
                        </div>
                        <p className="text-xl text-gray-900 leading-relaxed">Must look and feel like normal glasses for mainstream adoption</p>
                      </motion.div>
                      
                      <motion.div 
                        className="bg-white/70 rounded-xl p-4 border border-gray-100"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 1.0, ease: "easeOut" }}
                        viewport={{ once: true, margin: "-100px" }}
                      >
                        <div className="flex items-center mb-2">
                          <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-3">
                            <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                          </div>
                          <h4 className="text-xl font-semibold text-gray-900">Market Readiness</h4>
                        </div>
                        <p className="text-xl text-gray-900 leading-relaxed">Need Ray-Ban Meta Glasses level of subtlety for mass adoption</p>
                      </motion.div>
                    </div>
                  </motion.div>
                  <div className="flex justify-center items-center">
                    <img 
                      src="/assets/image8.jpg" 
                      alt="Technical engineering and AR development" 
                      className="rounded-xl shadow-lg w-full h-full object-cover"
                    />
                  </div>
                </motion.div>

              </div>
            </div>
          </section>

          {/* Visual Section Break */}
          <div className="flex items-center justify-center my-16">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
            <div className="mx-8 px-4 py-2 bg-white rounded-full border border-gray-200 shadow-sm">
              <span className="text-base font-medium text-gray-900">Key Players</span>
            </div>
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
          </div>

          {/* Key Players Section */}
          <section id="key-players" className="mb-24">
            <div className="bg-white rounded-2xl shadow-xl border border-[#A5DAD8]/30 p-10 mb-12">
              <div className="text-center mb-12">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-100 text-purple-600 text-base font-medium mb-6">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  Part 4: Key Players
                </div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Who's Leading the AR Glasses Revolution</h2>
                
                {/* Two-column layout with left-aligned content and company logos */}
                <div className="grid md:grid-cols-2 gap-8 items-stretch mb-8">
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-200">
                    <blockquote className="text-xl font-semibold text-gray-900 italic border-l-4 border-blue-500 pl-6 mb-6 text-left">
                      The future of AR glasses isn't just about technology—it's about which companies can bring it to market effectively.
                    </blockquote>
                    
                    <p className="text-lg text-gray-900 leading-relaxed text-left mb-6">
                      Today, several companies have developed AR glasses and technology, ranging from products still in R&D or limited supply to those that are commercially available. The goal of this section is to provide an overview of the most impactful players in the market, highlighting their primary focus in the space and their existing capabilities.
                    </p>

                    {/* Company Logos Grid */}
                    <motion.div 
                      className="bg-white/70 rounded-xl p-6 border border-blue-100"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                      viewport={{ once: true, margin: "-100px" }}
                    >
                      <h4 className="text-xl font-semibold text-gray-900 mb-6 text-center">Key Players in AR Glasses</h4>
                      <div className="grid grid-cols-2 gap-6">
                        {/* Apple Vision Pro */}
                        <motion.div 
                          className="flex items-center justify-center p-4 bg-gray-50 rounded-lg border border-gray-200"
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                          viewport={{ once: true, margin: "-100px" }}
                        >
                          <div className="text-center">
                            <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-3">
                              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                              </svg>
                            </div>
                            <div className="text-lg font-semibold text-gray-900">Apple</div>
                            <div className="text-base text-gray-500">Vision Pro</div>
                          </div>
                        </motion.div>

                        {/* Meta Quest */}
                        <motion.div 
                          className="flex items-center justify-center p-4 bg-gray-50 rounded-lg border border-gray-200"
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                          viewport={{ once: true, margin: "-100px" }}
                        >
                          <div className="text-center">
                            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-3">
                              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                              </svg>
                            </div>
                            <div className="text-lg font-semibold text-gray-900">Meta</div>
                            <div className="text-base text-gray-500">Quest Pro</div>
                          </div>
                        </motion.div>

                        {/* Microsoft HoloLens */}
                        <motion.div 
                          className="flex items-center justify-center p-4 bg-gray-50 rounded-lg border border-gray-200"
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
                          viewport={{ once: true, margin: "-100px" }}
                        >
                          <div className="text-center">
                            <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-3">
                              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M11.4 24H0V12.6h11.4V24zM24 24H12.6V12.6H24V24zM11.4 11.4H0V0h11.4v11.4zM24 11.4H12.6V0H24v11.4z"/>
                              </svg>
                            </div>
                            <div className="text-lg font-semibold text-gray-900">Microsoft</div>
                            <div className="text-base text-gray-500">HoloLens</div>
                          </div>
                        </motion.div>

                        {/* Magic Leap */}
                        <motion.div 
                          className="flex items-center justify-center p-4 bg-gray-50 rounded-lg border border-gray-200"
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
                          viewport={{ once: true, margin: "-100px" }}
                        >
                          <div className="text-center">
                            <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-3">
                              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                              </svg>
                            </div>
                            <div className="text-lg font-semibold text-gray-900">Magic Leap</div>
                            <div className="text-base text-gray-500">One & Two</div>
                          </div>
                        </motion.div>
                      </div>
                    </motion.div>
                  </div>
                  <div className="flex justify-center items-center">
                    <img 
                      src="/assets/image9.jpg" 
                      alt="Innovation and technology development" 
                      className="rounded-xl shadow-lg w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              <div className="prose prose-lg max-w-none">

                {/* Screenshot Component 7: Market Overview */}
                <motion.div 
                  className="grid md:grid-cols-2 gap-8 items-center mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  viewport={{ once: true, margin: "-100px" }}
                >
                  <motion.div 
                    className="bg-gradient-to-r from-sky-50 to-blue-50 rounded-2xl p-8 border border-sky-200"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                    viewport={{ once: true, margin: "-100px" }}
                  >
                    <motion.h3 
                      className="text-3xl font-bold text-gray-900 mb-8 text-center"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
                      viewport={{ once: true, margin: "-100px" }}
                    >
                      AR Glasses Market Overview
                    </motion.h3>
                    <div className="grid md:grid-cols-3 gap-6 mb-8">
                      <motion.div 
                        className="bg-white rounded-xl p-6 shadow-lg text-center"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
                        viewport={{ once: true, margin: "-100px" }}
                      >
                        <div className="text-4xl font-bold text-gray-900 mb-3">
                          <AnimatedCounter start={0} end={2.1} duration={2000} prefix="$" suffix="B" />
                        </div>
                        <div className="text-lg text-gray-900 mb-2">2024 Market Size</div>
                        <div className="text-base text-gray-500">Global AR glasses market</div>
                      </motion.div>
                      <motion.div 
                        className="bg-white rounded-xl p-6 shadow-lg text-center"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.7, ease: "easeOut" }}
                        viewport={{ once: true, margin: "-100px" }}
                      >
                        <div className="text-4xl font-bold text-gray-900 mb-3">
                          <AnimatedCounter start={0} end={15.8} duration={2000} prefix="$" suffix="B" />
                        </div>
                        <div className="text-lg text-gray-900 mb-2">Projected 2030</div>
                        <div className="text-base text-gray-500">CAGR: <AnimatedCounter start={0} end={40.2} duration={2000} suffix="%" /></div>
                      </motion.div>
                      <motion.div 
                        className="bg-white rounded-xl p-6 shadow-lg text-center"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.9, ease: "easeOut" }}
                        viewport={{ once: true, margin: "-100px" }}
                      >
                        <div className="text-4xl font-bold text-gray-900 mb-3">
                          <AnimatedCounter start={0} end={65} duration={2000} suffix="%" />
                        </div>
                        <div className="text-lg text-gray-900 mb-2">Enterprise Share</div>
                        <div className="text-base text-gray-500">vs <AnimatedCounter start={0} end={35} duration={2000} suffix="% consumer" /></div>
                      </motion.div>
                    </div>
                    <motion.div 
                      className="grid md:grid-cols-2 gap-8"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 1.2, ease: "easeOut" }}
                      viewport={{ once: true, margin: "-100px" }}
                    >
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 1.4, ease: "easeOut" }}
                        viewport={{ once: true, margin: "-100px" }}
                      >
                        <h4 className="text-xl font-semibold text-gray-900 mb-4 text-center">Key Market Drivers</h4>
                        <ul className="space-y-3">
                          <li className="flex items-start">
                            <div className="w-3 h-3 bg-blue-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                            <span className="text-lg text-gray-900">Remote work acceleration post-COVID</span>
                          </li>
                          <li className="flex items-start">
                            <div className="w-3 h-3 bg-blue-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                            <span className="text-lg text-gray-900">5G network infrastructure deployment</span>
                          </li>
                          <li className="flex items-start">
                            <div className="w-3 h-3 bg-blue-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                            <span className="text-lg text-gray-900">AI and voice interface maturation</span>
                          </li>
                        </ul>
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 1.6, ease: "easeOut" }}
                        viewport={{ once: true, margin: "-100px" }}
                      >
                        <h4 className="text-xl font-semibold text-gray-900 mb-4 text-center">Growth Factors</h4>
                        <ul className="space-y-3">
                          <li className="flex items-start">
                            <div className="w-3 h-3 bg-green-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                            <span className="text-lg text-gray-900">Healthcare and industrial applications</span>
                          </li>
                          <li className="flex items-start">
                            <div className="w-3 h-3 bg-green-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                            <span className="text-lg text-gray-900">Declining hardware costs</span>
                          </li>
                          <li className="flex items-start">
                            <div className="w-3 h-3 bg-green-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                            <span className="text-lg text-gray-900">Improved performance capabilities</span>
                          </li>
                        </ul>
                      </motion.div>
                    </motion.div>
                  </motion.div>
                  <motion.div 
                    className="flex justify-center"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                    viewport={{ once: true, margin: "-100px" }}
                  >
                    <motion.img 
                      src="/assets/image10.jpg" 
                      alt="Business analytics dashboard and data visualization" 
                      className="rounded-xl shadow-lg max-w-full h-auto"
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
                      viewport={{ once: true, margin: "-100px" }}
                    />
                  </motion.div>
                </motion.div>

                {/* AR Glasses Comparison Table */}
                <div className="bg-gradient-to-r from-purple-50 to-purple-100 rounded-2xl p-8 mb-8 border border-purple-200">
                  <h3 className="text-3xl font-bold text-gray-900 mb-6 text-center">AR Glasses Technical Comparison</h3>
                  <p className="text-center text-lg text-gray-900 mb-8">Detailed specifications and capabilities of major AR glasses products</p>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse bg-white rounded-lg shadow-lg">
                      <thead>
                        <tr className="bg-gray-50">
                          <th className="border border-gray-300 px-6 py-4 text-left font-semibold text-lg text-gray-900">Product</th>
                          <th className="border border-gray-300 px-6 py-4 text-left font-semibold text-lg text-gray-900">Company</th>
                          <th className="border border-gray-300 px-6 py-4 text-left font-semibold text-lg text-gray-900">Available</th>
                          <th className="border border-gray-300 px-6 py-4 text-left font-semibold text-lg text-gray-900">Weight</th>
                          <th className="border border-gray-300 px-6 py-4 text-left font-semibold text-lg text-gray-900">Compute</th>
                          <th className="border border-gray-300 px-6 py-4 text-left font-semibold text-lg text-gray-900">AI Voice</th>
                          <th className="border border-gray-300 px-6 py-4 text-left font-semibold text-lg text-gray-900">Gesture</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="hover:bg-gray-50">
                          <td className="border border-gray-300 px-6 py-4 font-medium text-lg">Meta Orion AR Glasses</td>
                          <td className="border border-gray-300 px-6 py-4 text-lg">Meta</td>
                          <td className="border border-gray-300 px-6 py-4"><span className="px-3 py-2 bg-red-100 text-gray-900 rounded text-lg font-medium">No</span></td>
                          <td className="border border-gray-300 px-6 py-4"><span className="px-3 py-2 bg-blue-100 text-gray-900 rounded text-lg font-medium">98g</span></td>
                          <td className="border border-gray-300 px-6 py-4 text-lg">External</td>
                          <td className="border border-gray-300 px-6 py-4"><span className="px-3 py-2 bg-green-100 text-gray-900 rounded text-lg font-medium">Yes</span></td>
                          <td className="border border-gray-300 px-6 py-4"><span className="px-3 py-2 bg-green-100 text-gray-900 rounded text-lg font-medium">Yes</span></td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="border border-gray-300 px-6 py-4 font-medium text-lg">Apple Vision Pro</td>
                          <td className="border border-gray-300 px-6 py-4 text-lg">Apple</td>
                          <td className="border border-gray-300 px-6 py-4"><span className="px-3 py-2 bg-green-100 text-gray-900 rounded text-lg font-medium">Yes</span></td>
                          <td className="border border-gray-300 px-6 py-4"><span className="px-3 py-2 bg-blue-100 text-gray-900 rounded text-lg font-medium">625g</span></td>
                          <td className="border border-gray-300 px-6 py-4 text-lg">Standalone</td>
                          <td className="border border-gray-300 px-6 py-4"><span className="px-3 py-2 bg-green-100 text-gray-900 rounded text-lg font-medium">Yes</span></td>
                          <td className="border border-gray-300 px-6 py-4"><span className="px-3 py-2 bg-red-100 text-gray-900 rounded text-lg font-medium">No</span></td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="border border-gray-300 px-6 py-4 font-medium text-lg">Xreal One Pro</td>
                          <td className="border border-gray-300 px-6 py-4 text-lg">Xreal</td>
                          <td className="border border-gray-300 px-6 py-4"><span className="px-3 py-2 bg-green-100 text-gray-900 rounded text-lg font-medium">Yes</span></td>
                          <td className="border border-gray-300 px-6 py-4"><span className="px-3 py-2 bg-blue-100 text-gray-900 rounded text-lg font-medium">87g</span></td>
                          <td className="border border-gray-300 px-6 py-4 text-lg">Standalone</td>
                          <td className="border border-gray-300 px-6 py-4"><span className="px-3 py-2 bg-red-100 text-gray-900 rounded text-lg font-medium">No</span></td>
                          <td className="border border-gray-300 px-6 py-4"><span className="px-3 py-2 bg-red-100 text-gray-900 rounded text-lg font-medium">No</span></td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="border border-gray-300 px-6 py-4 font-medium text-lg">Magic Leap 2</td>
                          <td className="border border-gray-300 px-6 py-4 text-lg">Magic Leap</td>
                          <td className="border border-gray-300 px-6 py-4"><span className="px-3 py-2 bg-green-100 text-gray-900 rounded text-lg font-medium">Yes</span></td>
                          <td className="border border-gray-300 px-6 py-4"><span className="px-3 py-2 bg-blue-100 text-gray-900 rounded text-lg font-medium">260g</span></td>
                          <td className="border border-gray-300 px-6 py-4 text-lg">External</td>
                          <td className="border border-gray-300 px-6 py-4"><span className="px-3 py-2 bg-green-100 text-gray-900 rounded text-lg font-medium">Yes</span></td>
                          <td className="border border-gray-300 px-6 py-4"><span className="px-3 py-2 bg-green-100 text-gray-900 rounded text-lg font-medium">Yes</span></td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="border border-gray-300 px-6 py-4 font-medium text-lg">Viture Luma Ultra XR</td>
                          <td className="border border-gray-300 px-6 py-4 text-lg">Viture</td>
                          <td className="border border-gray-300 px-6 py-4"><span className="px-3 py-2 bg-green-100 text-gray-900 rounded text-lg font-medium">Yes</span></td>
                          <td className="border border-gray-300 px-6 py-4"><span className="px-3 py-2 bg-blue-100 text-gray-900 rounded text-lg font-medium">80g</span></td>
                          <td className="border border-gray-300 px-6 py-4 text-lg">Standalone</td>
                          <td className="border border-gray-300 px-6 py-4"><span className="px-3 py-2 bg-green-100 text-gray-900 rounded text-lg font-medium">Yes</span></td>
                          <td className="border border-gray-300 px-6 py-4"><span className="px-3 py-2 bg-green-100 text-gray-900 rounded text-lg font-medium">Yes</span></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Player Categories */}
                <div className="space-y-12">
                  {/* Google - Software-Focused Player */}
                  <div className="grid md:grid-cols-2 gap-8 items-stretch mb-8">
                    <div className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 rounded-2xl p-8 border border-blue-200">
                      <div className="flex items-center mb-6">
                        <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full flex items-center justify-center shadow-lg mr-4">
                          <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                          </svg>
                        </div>
                        <div>
                          <h3 className="text-3xl font-bold text-gray-900">Google</h3>
                          <p className="text-lg text-gray-900">Software-Focused Strategy</p>
                        </div>
                      </div>

                      <div className="space-y-6">
                        <motion.div 
                          className="bg-white/70 rounded-xl p-6 border border-blue-100"
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                          viewport={{ once: true, margin: "-100px" }}
                        >
                          <h4 className="text-xl font-semibold text-gray-900 mb-3">Strategy</h4>
                          <p className="text-lg text-gray-900">Android XR platform with hardware partnerships (Samsung, Qualcomm)</p>
                        </motion.div>
                        
                        <motion.div 
                          className="bg-white/70 rounded-xl p-6 border border-blue-100"
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                          viewport={{ once: true, margin: "-100px" }}
                        >
                          <h4 className="text-xl font-semibold text-gray-900 mb-3">Upcoming Devices</h4>
                          <ul className="text-lg text-gray-900 space-y-2 list-disc list-inside">
                            <li>Smart Glasses (AI assistant)</li>
                            <li>Project Moohan headset</li>
                          </ul>
                        </motion.div>
                        
                        <motion.div 
                          className="bg-white/70 rounded-xl p-6 border border-green-100"
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
                          viewport={{ once: true, margin: "-100px" }}
                        >
                          <h4 className="text-xl font-semibold text-gray-900 mb-3">Status</h4>
                          <p className="text-lg text-gray-900">Active development, launching devices this year</p>
                        </motion.div>
                      </div>
                    </div>
                    <div className="flex justify-center items-center">
                      <img 
                        src="/assets/image11.jpg" 
                        alt="Google Android and mobile AR technology" 
                        className="rounded-xl shadow-lg w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  {/* Microsoft - Software-Focused Player */}
                  <div className="grid md:grid-cols-2 gap-8 items-stretch mb-8">
                    <div className="bg-gradient-to-br from-orange-50 via-red-50 to-pink-50 rounded-2xl p-8 border border-orange-200">
                      <div className="flex items-center mb-6">
                        <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center shadow-lg mr-4">
                          <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M11.4 24H0V12.6h11.4V24zM24 24H12.6V12.6H24V24zM11.4 11.4H0V0h11.4v11.4zM24 11.4H12.6V0H24v11.4z"/>
                          </svg>
                        </div>
                        <div>
                          <h3 className="text-3xl font-bold text-gray-900">Microsoft</h3>
                          <p className="text-lg text-gray-900">Transitioning Strategy</p>
                        </div>
                      </div>

                      <div className="space-y-6">
                        <motion.div 
                          className="bg-white/70 rounded-xl p-6 border border-orange-100"
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                          viewport={{ once: true, margin: "-100px" }}
                        >
                          <h4 className="text-xl font-semibold text-gray-900 mb-3">Legacy</h4>
                          <p className="text-lg text-gray-900">Early pioneer with HoloLens 1 & 2 headsets</p>
                        </motion.div>
                        
                        <motion.div 
                          className="bg-white/70 rounded-xl p-6 border border-orange-100"
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                          viewport={{ once: true, margin: "-100px" }}
                        >
                          <h4 className="text-xl font-semibold text-gray-900 mb-3">Current Status</h4>
                          <p className="text-lg text-gray-900">Discontinued HoloLens 2, focusing on software & cloud</p>
                        </motion.div>
                        
                        <motion.div 
                          className="bg-white/70 rounded-xl p-6 border border-yellow-100"
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
                          viewport={{ once: true, margin: "-100px" }}
                        >
                          <h4 className="text-xl font-semibold text-gray-900 mb-3">Transition</h4>
                          <p className="text-lg text-gray-900">Winding down Mesh Platform, retiring Azure Remote Rendering</p>
                        </motion.div>
                      </div>
                    </div>
                    <div className="flex justify-center items-center">
                      <img 
                        src="/assets/image12.jpg" 
                        alt="Microsoft HoloLens and mixed reality technology" 
                        className="rounded-xl shadow-lg w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  {/* Visual Comparison */}
                  <motion.div 
                    className="bg-gradient-to-r from-gray-50 to-slate-50 rounded-2xl p-8 border border-gray-200 mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: true, margin: "-100px" }}
                  >
                    <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Google vs Microsoft: AR Strategy Comparison</h3>
                    
                    <div className="grid md:grid-cols-2 gap-8">
                      <motion.div 
                        className="bg-white rounded-xl p-8 border border-blue-200"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                        viewport={{ once: true, margin: "-100px" }}
                      >
                        <div className="flex items-center mb-6">
                          <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mr-4">
                            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                            </svg>
                          </div>
                          <h4 className="text-2xl font-semibold text-gray-900">Google</h4>
                        </div>
                        <div className="space-y-4">
                          <div className="flex items-center">
                            <div className="w-4 h-4 bg-green-500 rounded-full mr-4"></div>
                            <span className="text-lg text-gray-900">Active hardware partnerships</span>
                          </div>
                          <div className="flex items-center">
                            <div className="w-4 h-4 bg-green-500 rounded-full mr-4"></div>
                            <span className="text-lg text-gray-900">Launching devices this year</span>
                          </div>
                          <div className="flex items-center">
                            <div className="w-4 h-4 bg-green-500 rounded-full mr-4"></div>
                            <span className="text-lg text-gray-900">Clear Android XR roadmap</span>
                          </div>
                        </div>
                      </motion.div>
                      
                      <motion.div 
                        className="bg-white rounded-xl p-8 border border-orange-200"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                        viewport={{ once: true, margin: "-100px" }}
                      >
                        <div className="flex items-center mb-6">
                          <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mr-4">
                            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M11.4 24H0V12.6h11.4V24zM24 24H12.6V12.6H24V24zM11.4 11.4H0V0h11.4v11.4zM24 11.4H12.6V0H24v11.4z"/>
                            </svg>
                          </div>
                          <h4 className="text-2xl font-semibold text-gray-900">Microsoft</h4>
                        </div>
                        <div className="space-y-4">
                          <div className="flex items-center">
                            <div className="w-4 h-4 bg-red-500 rounded-full mr-4"></div>
                            <span className="text-lg text-gray-900">Discontinued hardware</span>
                          </div>
                          <div className="flex items-center">
                            <div className="w-4 h-4 bg-yellow-500 rounded-full mr-4"></div>
                            <span className="text-lg text-gray-900">Transitioning strategy</span>
                          </div>
                          <div className="flex items-center">
                            <div className="w-4 h-4 bg-yellow-500 rounded-full mr-4"></div>
                            <span className="text-lg text-gray-900">Unclear future direction</span>
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>

                  {/* AR-Focused Hardware Companies */}
                  <div className="bg-gradient-to-r from-green-50 to-teal-50 rounded-2xl p-8 border border-green-200">
                    <div className="text-center mb-8">
                      <h3 className="text-3xl font-bold text-gray-900 mb-6">AR-Focused Hardware Companies</h3>
                      <p className="text-xl text-gray-900 max-w-3xl mx-auto">
                        Specialized companies dedicated entirely to AR glasses development, focusing on lightweight, portable solutions
                      </p>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-8 mb-8">
                      <motion.div 
                        className="bg-white/70 rounded-xl p-8 border border-green-100"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                        viewport={{ once: true, margin: "-100px" }}
                      >
                        <div className="flex items-center mb-6">
                          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mr-4">
                            <svg className="w-8 h-8 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                            </svg>
                          </div>
                          <h4 className="text-2xl font-semibold text-gray-900">Xreal and Viture</h4>
                        </div>
                        <p className="text-xl text-gray-900 mb-6">
                          Two AR glasses companies that have taken similar approaches to the market. Both have:
                        </p>
                        <ul className="space-y-4">
                          <li className="flex items-start">
                            <div className="w-3 h-3 bg-green-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                            <span className="text-lg text-gray-900">Multiple AR glasses available for purchase today (detailed in Appendix)</span>
                          </li>
                          <li className="flex items-start">
                            <div className="w-3 h-3 bg-green-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                            <span className="text-lg text-gray-900">USB-C connected displays for external devices (phones, computers, gaming consoles)</span>
                          </li>
                          <li className="flex items-start">
                            <div className="w-3 h-3 bg-green-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                            <span className="text-lg text-gray-900">External computing devices for computationally-heavy activities</span>
                          </li>
                        </ul>
                      </motion.div>
                      
                      <motion.div 
                        className="bg-white/70 rounded-xl p-8 border border-green-100"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                        viewport={{ once: true, margin: "-100px" }}
                      >
                        <div className="flex items-center mb-6">
                          <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mr-4">
                            <svg className="w-8 h-8 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          </div>
                          <h4 className="text-2xl font-semibold text-gray-900">Market Position</h4>
                        </div>
                        <div className="space-y-6">
                          <motion.div 
                            className="bg-green-50 rounded-lg p-6 border border-green-200"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
                            viewport={{ once: true, margin: "-100px" }}
                          >
                            <h5 className="text-xl font-semibold text-gray-900 mb-3">Strengths</h5>
                            <p className="text-lg text-gray-900">
                              More ergonomic entertainment experience, removing device restrictions like limited screen size and poor posture
                            </p>
                          </motion.div>
                          <motion.div 
                            className="bg-yellow-50 rounded-lg p-6 border border-yellow-200"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
                            viewport={{ once: true, margin: "-100px" }}
                          >
                            <h5 className="text-xl font-semibold text-gray-900 mb-3">Limitations</h5>
                            <p className="text-lg text-gray-900">
                              Lack sophisticated built-in operating systems, limiting their potential for desk-free productivity<sup><a href="/references-future-of-ergonomic-work-white-paper" className="text-gray-900 hover:text-gray-900">22,23,30,31</a></sup>
                            </p>
                          </motion.div>
                        </div>
                      </motion.div>
                    </div>

                    {/* Company Comparison Cards */}
                    <div className="grid md:grid-cols-2 gap-8">
                      <motion.div 
                        className="bg-white rounded-xl p-8 shadow-sm border border-green-200"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                        viewport={{ once: true, margin: "-100px" }}
                      >
                        <div className="flex items-center mb-6">
                          <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center mr-4">
                            <span className="text-white font-bold text-xl">X</span>
                          </div>
                          <h5 className="text-2xl font-semibold text-gray-900">Xreal</h5>
                        </div>
                        <div className="space-y-4 text-lg text-gray-900">
                          <div className="flex justify-between">
                            <span>Weight:</span>
                            <span className="font-medium">87g (One Pro)</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Display:</span>
                            <span className="font-medium">Micro-OLED</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Connectivity:</span>
                            <span className="font-medium">USB-C</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Status:</span>
                            <span className="px-3 py-2 bg-green-100 text-gray-900 rounded text-base font-medium">Available</span>
                          </div>
                        </div>
                      </motion.div>
                      
                      <motion.div 
                        className="bg-white rounded-xl p-8 shadow-sm border border-green-200"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                        viewport={{ once: true, margin: "-100px" }}
                      >
                        <div className="flex items-center mb-6">
                          <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mr-4">
                            <span className="text-white font-bold text-xl">V</span>
                          </div>
                          <h5 className="text-2xl font-semibold text-gray-900">Viture</h5>
                        </div>
                        <div className="space-y-4 text-lg text-gray-900">
                          <div className="flex justify-between">
                            <span>Weight:</span>
                            <span className="font-medium">80g (Luma Ultra XR)</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Display:</span>
                            <span className="font-medium">Micro-OLED</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Connectivity:</span>
                            <span className="font-medium">USB-C</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Status:</span>
                            <span className="px-3 py-2 bg-green-100 text-gray-900 rounded text-base font-medium">Available</span>
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  </div>

                  {/* Component and Platform Providers */}
                  <div className="bg-gradient-to-r from-emerald-50 to-green-50 rounded-2xl p-8 border border-emerald-200">
                    <div className="text-center mb-8">
                      <h3 className="text-3xl font-bold text-gray-900 mb-6">Component and Platform Providers</h3>
                      <p className="text-xl text-gray-900 max-w-3xl mx-auto">
                        Diversified tech giants providing critical components and platforms that enable AR glasses development across the industry
                        </p>
                      </div>
                    
                    <div className="grid md:grid-cols-2 gap-8 mb-8">
                      <motion.div 
                        className="bg-white/70 rounded-xl p-8 border border-emerald-100"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                        viewport={{ once: true, margin: "-100px" }}
                      >
                        <div className="flex items-center mb-6">
                          <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mr-4">
                            <svg className="w-8 h-8 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                            </svg>
                          </div>
                          <h4 className="text-2xl font-semibold text-gray-900">Market Approach</h4>
                        </div>
                        <p className="text-xl text-gray-900 mb-6">
                          Unlike specialized AR companies, these are diversified tech giants with multiple market interests:
                        </p>
                        <ul className="space-y-4">
                          <li className="flex items-start">
                            <div className="w-3 h-3 bg-emerald-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                            <span className="text-lg text-gray-900">Larger companies with broader technology portfolios</span>
                          </li>
                          <li className="flex items-start">
                            <div className="w-3 h-3 bg-emerald-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                            <span className="text-lg text-gray-900">AR is one of many technology verticals they serve</span>
                          </li>
                          <li className="flex items-start">
                            <div className="w-3 h-3 bg-emerald-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                            <span className="text-lg text-gray-900">Provide foundational technologies for other AR companies</span>
                          </li>
                        </ul>
                      </motion.div>
                      
                      <motion.div 
                        className="bg-white/70 rounded-xl p-8 border border-emerald-100"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                        viewport={{ once: true, margin: "-100px" }}
                      >
                        <div className="flex items-center mb-6">
                          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mr-4">
                            <svg className="w-8 h-8 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                          </div>
                          <h4 className="text-2xl font-semibold text-gray-900">Strategic Partnerships</h4>
                        </div>
                        <div className="space-y-6">
                          <motion.div 
                            className="bg-blue-50 rounded-lg p-6 border border-blue-200"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
                            viewport={{ once: true, margin: "-100px" }}
                          >
                            <h5 className="text-xl font-semibold text-gray-900 mb-3">Samsung + Google</h5>
                            <p className="text-lg text-gray-900">
                              Collaborating to bring smart glasses and XR headset to market in 2024
                            </p>
                          </motion.div>
                          <motion.div 
                            className="bg-purple-50 rounded-lg p-6 border border-purple-200"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
                            viewport={{ once: true, margin: "-100px" }}
                          >
                            <h5 className="text-xl font-semibold text-gray-900 mb-3">Component Ecosystem</h5>
                            <p className="text-lg text-gray-900">
                              Sony and Qualcomm provide critical hardware components used across the industry
                            </p>
                          </motion.div>
                        </div>
                    </motion.div>
                  </div>

                    {/* Company Profiles */}
                    <div className="grid md:grid-cols-3 gap-8">
                      <motion.div 
                        className="bg-white rounded-xl p-8 shadow-sm border border-emerald-200"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                        viewport={{ once: true, margin: "-100px" }}
                      >
                        <div className="flex items-center mb-6">
                          <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mr-4">
                            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                            </svg>
                          </div>
                          <h5 className="text-2xl font-semibold text-gray-900">Samsung</h5>
                        </div>
                        <div className="space-y-4">
                          <div className="bg-blue-50 rounded-lg p-4">
                            <h6 className="text-lg font-semibold text-gray-900 mb-2">Role</h6>
                            <p className="text-base text-gray-900">Hardware manufacturer & Google partner</p>
                          </div>
                          <div className="bg-green-50 rounded-lg p-4">
                            <h6 className="text-lg font-semibold text-gray-900 mb-2">2024 Plans</h6>
                            <p className="text-base text-gray-900">Smart glasses & XR headset launch</p>
                          </div>
                          <div className="bg-gray-50 rounded-lg p-4">
                            <h6 className="text-lg font-semibold text-gray-800 mb-2">Market Position</h6>
                            <p className="text-base text-gray-900">Consumer electronics leader</p>
                          </div>
                        </div>
                      </motion.div>
                      
                      <motion.div 
                        className="bg-white rounded-xl p-8 shadow-sm border border-emerald-200"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                        viewport={{ once: true, margin: "-100px" }}
                      >
                        <div className="flex items-center mb-6">
                          <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-pink-500 rounded-lg flex items-center justify-center mr-4">
                            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                            </svg>
                          </div>
                          <h5 className="text-2xl font-semibold text-gray-900">Sony</h5>
                        </div>
                        <div className="space-y-4">
                          <div className="bg-red-50 rounded-lg p-4">
                            <h6 className="text-lg font-semibold text-gray-900 mb-2">Key Component</h6>
                            <p className="text-base text-gray-900">Micro-OLED display panels</p>
                          </div>
                          <div className="bg-orange-50 rounded-lg p-4">
                            <h6 className="text-lg font-semibold text-gray-900 mb-2">Technology</h6>
                            <p className="text-base text-gray-900">High-resolution microdisplays</p>
                          </div>
                          <div className="bg-gray-50 rounded-lg p-4">
                            <h6 className="text-lg font-semibold text-gray-800 mb-2">Market Position</h6>
                            <p className="text-base text-gray-900">Display technology supplier</p>
                          </div>
                        </div>
                      </motion.div>
                      
                      <motion.div 
                        className="bg-white rounded-xl p-8 shadow-sm border border-emerald-200"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
                        viewport={{ once: true, margin: "-100px" }}
                      >
                        <div className="flex items-center mb-6">
                          <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-500 rounded-lg flex items-center justify-center mr-4">
                            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                            </svg>
                          </div>
                          <h5 className="text-2xl font-semibold text-gray-900">Qualcomm</h5>
                        </div>
                        <div className="space-y-4">
                          <div className="bg-green-50 rounded-lg p-4">
                            <h6 className="text-lg font-semibold text-gray-900 mb-2">Key Component</h6>
                            <p className="text-base text-gray-900">Snapdragon processors</p>
                          </div>
                          <div className="bg-teal-50 rounded-lg p-4">
                            <h6 className="text-lg font-semibold text-gray-900 mb-2">Technology</h6>
                            <p className="text-base text-gray-900">XR-optimized chipsets</p>
                          </div>
                          <div className="bg-gray-50 rounded-lg p-4">
                            <h6 className="text-lg font-semibold text-gray-800 mb-2">Market Position</h6>
                            <p className="text-base text-gray-900">Mobile processor leader</p>
                          </div>
                        </div>
                      </motion.div>
                    </div>

                    {/* Industry Impact Summary */}
                    <div className="mt-8 bg-gradient-to-r from-emerald-100 to-green-100 rounded-xl p-8 border border-emerald-200">
                      <div className="flex items-center mb-6">
                        <svg className="w-8 h-8 text-gray-900 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                        <h4 className="text-2xl font-semibold text-gray-900">Industry Impact</h4>
                      </div>
                      <p className="text-lg text-gray-900">
                        These companies form the foundational ecosystem that enables AR glasses development across the industry. Their components and platforms are essential building blocks that specialized AR companies like Xreal and Viture rely on to create their products. Samsung's partnership with Google represents a significant strategic move toward consumer AR adoption, while Sony and Qualcomm continue to drive the underlying technology that makes lightweight, powerful AR glasses possible.
                      </p>
                    </div>
                  </div>

                  {/* Major Tech Giants */}
                  <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl p-8 border border-orange-200">
                    <div className="text-center mb-8">
                      <h3 className="text-3xl font-bold text-gray-900 mb-6">Major Tech Giants</h3>
                      <p className="text-xl text-gray-900 max-w-3xl mx-auto">
                        Established technology leaders with comprehensive ecosystems and significant resources for AR development
                      </p>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-8">
                      <motion.div 
                        className="bg-white/70 rounded-xl p-8 border border-orange-100"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                        viewport={{ once: true, margin: "-100px" }}
                      >
                        <div className="flex items-center mb-6">
                          <div className="w-16 h-16 bg-gradient-to-br from-gray-800 to-gray-600 rounded-lg flex items-center justify-center mr-4">
                            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                            </svg>
                          </div>
                          <h4 className="text-2xl font-semibold text-gray-900">Apple</h4>
                        </div>
                        <p className="text-xl text-gray-900 mb-6">
                          Apple is among the most intriguing players in the AR space with the potential to enable desk-free work. Its Vision Pro headset runs on VisionOS and integrates seamlessly into the existing Apple ecosystem.
                        </p>
                        <div className="space-y-4">
                          <motion.div 
                            className="bg-green-50 rounded-lg p-4 border border-green-200"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                            viewport={{ once: true, margin: "-100px" }}
                          >
                            <h5 className="text-lg font-semibold text-gray-900 mb-2">Strengths</h5>
                            <p className="text-base text-gray-900">Ecosystem integration, iCloud sync, established user base</p>
                          </motion.div>
                          <motion.div 
                            className="bg-yellow-50 rounded-lg p-4 border border-yellow-200"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
                            viewport={{ once: true, margin: "-100px" }}
                          >
                            <h5 className="text-lg font-semibold text-gray-900 mb-2">Challenges</h5>
                            <p className="text-base text-gray-900">Heavy weight, virtual keyboard limitations<sup><a href="/references-future-of-ergonomic-work-white-paper" className="text-gray-900 hover:text-gray-900">76</a></sup></p>
                          </motion.div>
                        </div>
                      </motion.div>
                      
                      <motion.div 
                        className="bg-white/70 rounded-xl p-8 border border-orange-100"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                        viewport={{ once: true, margin: "-100px" }}
                      >
                        <div className="flex items-center mb-6">
                          <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center mr-4">
                            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                            </svg>
                          </div>
                          <h4 className="text-2xl font-semibold text-gray-900">Meta</h4>
                        </div>
                        <p className="text-xl text-gray-900 mb-6">
                          Meta has invested billions into Reality Labs and believes AR glasses are the computing device of the future. Their Orion prototype provides an impressive foundation for commercial AR glasses.
                        </p>
                        <div className="space-y-4">
                          <motion.div 
                            className="bg-blue-50 rounded-lg p-4 border border-blue-200"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
                            viewport={{ once: true, margin: "-100px" }}
                          >
                            <h5 className="text-lg font-semibold text-gray-900 mb-2">Innovation</h5>
                            <p className="text-base text-gray-900">Neural EMG wristband, holographic calls, multi-window displays<sup><a href="/references-future-of-ergonomic-work-white-paper" className="text-gray-900 hover:text-gray-900">15,16,17,18</a></sup></p>
                          </motion.div>
                          <motion.div 
                            className="bg-gray-50 rounded-lg p-4 border border-gray-200"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.7, ease: "easeOut" }}
                            viewport={{ once: true, margin: "-100px" }}
                          >
                            <h5 className="text-lg font-semibold text-gray-800 mb-2">Status</h5>
                            <p className="text-base text-gray-900">Orion prototype announced, working toward commercial release</p>
                          </motion.div>
                        </div>
                      </motion.div>
                    </div>
                  </div>

                  {/* AR-Focused Everything Players */}
                  <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8 border border-purple-200">
                    <div className="text-center mb-8">
                      <h3 className="text-3xl font-bold text-gray-900 mb-6">AR-Focused Everything Players</h3>
                      <p className="text-xl text-gray-900 max-w-3xl mx-auto">
                        Companies that build both hardware and operating systems, with AR as a primary focus area
                      </p>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-8">
                      <motion.div 
                        className="bg-white/70 rounded-xl p-8 border border-purple-100"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                        viewport={{ once: true, margin: "-100px" }}
                      >
                        <div className="flex items-center mb-6">
                          <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center mr-4">
                            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                            </svg>
                          </div>
                          <h4 className="text-2xl font-semibold text-gray-900">Snap</h4>
                        </div>
                        <p className="text-xl text-gray-900 mb-6">
                          Snap has been dedicated to AR for over a decade, with Snapchat filters laying the foundation for their Spectacles series running on proprietary Snap OS.
                        </p>
                        <div className="space-y-4">
                          <motion.div 
                            className="bg-yellow-50 rounded-lg p-4 border border-yellow-200"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                            viewport={{ once: true, margin: "-100px" }}
                          >
                            <h5 className="text-lg font-semibold text-gray-900 mb-2">Focus</h5>
                            <p className="text-base text-gray-900">Social interactions and creativity, sophisticated AR technology<sup><a href="/references-future-of-ergonomic-work-white-paper" className="text-gray-900 hover:text-gray-900">26,27,28,29</a></sup></p>
                          </motion.div>
                          <motion.div 
                            className="bg-blue-50 rounded-lg p-4 border border-blue-200"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
                            viewport={{ once: true, margin: "-100px" }}
                          >
                            <h5 className="text-lg font-semibold text-gray-900 mb-2">Development</h5>
                            <p className="text-base text-gray-900">Considering raising outside funds for further AR glasses development</p>
                          </motion.div>
                        </div>
                      </motion.div>
                      
                      <motion.div 
                        className="bg-white/70 rounded-xl p-8 border border-purple-100"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                        viewport={{ once: true, margin: "-100px" }}
                      >
                        <div className="flex items-center mb-6">
                          <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-lg flex items-center justify-center mr-4">
                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                            </svg>
                          </div>
                          <h4 className="text-2xl font-semibold text-gray-900">Magic Leap</h4>
                        </div>
                        <p className="text-xl text-gray-900 mb-6">
                          Magic Leap has been at the forefront of AR technology with enterprise-focused headsets, but has recently shifted toward licensing its technology.
                        </p>
                        <div className="space-y-4">
                          <motion.div 
                            className="bg-purple-50 rounded-lg p-4 border border-purple-200"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
                            viewport={{ once: true, margin: "-100px" }}
                          >
                            <h5 className="text-lg font-semibold text-gray-900 mb-2">Specialty</h5>
                            <p className="text-base text-gray-900">Enterprise usage, medical training, optics expertise<sup><a href="/references-future-of-ergonomic-work-white-paper" className="text-gray-900 hover:text-gray-900">77,78,79,80</a></sup></p>
                          </motion.div>
                          <motion.div 
                            className="bg-green-50 rounded-lg p-4 border border-green-200"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.7, ease: "easeOut" }}
                            viewport={{ once: true, margin: "-100px" }}
                          >
                            <h5 className="text-lg font-semibold text-gray-900 mb-2">Partnerships</h5>
                            <p className="text-base text-gray-900">Strategic partner with Google, interest from Meta</p>
                          </motion.div>
                        </div>
                      </motion.div>
                    </div>
                  </div>

                  {/* Emerging Everything Players */}
                  <div className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-2xl p-8 border border-teal-200">
                    <div className="text-center mb-8">
                      <h3 className="text-3xl font-bold text-gray-900 mb-6">Emerging Everything Players</h3>
                      <p className="text-xl text-gray-900 max-w-3xl mx-auto">
                        Companies developing both hardware and software solutions, though with less sophisticated operating systems
                      </p>
                    </div>
                    
                    <motion.div 
                      className="bg-white/70 rounded-xl p-8 border border-teal-100"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                      viewport={{ once: true, margin: "-100px" }}
                    >
                      <div className="flex items-center mb-6">
                        <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-lg flex items-center justify-center mr-4">
                          <span className="text-white font-bold text-2xl">R</span>
                        </div>
                        <h4 className="text-2xl font-semibold text-gray-900">RayNeo</h4>
                      </div>
                      <p className="text-xl text-gray-900 mb-6">
                        A subsidiary of TCL Electronics, RayNeo has glasses that function as external displays (similar to Xreal and Viture) but also offers the X2 with its own operating system.
                      </p>
                      <div className="grid md:grid-cols-2 gap-6">
                        <motion.div 
                          className="bg-teal-50 rounded-lg p-4 border border-teal-200"
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                          viewport={{ once: true, margin: "-100px" }}
                        >
                          <h5 className="text-lg font-semibold text-gray-900 mb-2">Product Range</h5>
                          <p className="text-base text-gray-900">External display glasses + X2 with proprietary OS<sup><a href="/references-future-of-ergonomic-work-white-paper" className="text-gray-900 hover:text-gray-900">81</a></sup></p>
                        </motion.div>
                        <motion.div 
                          className="bg-gray-50 rounded-lg p-4 border border-gray-200"
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
                          viewport={{ once: true, margin: "-100px" }}
                        >
                          <h5 className="text-lg font-semibold text-gray-800 mb-2">Position</h5>
                          <p className="text-base text-gray-900">Less sophisticated OS compared to Apple, Snap, and Magic Leap</p>
                        </motion.div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Up and Coming Players */}
                  <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-8 border border-indigo-200">
                    <div className="text-center mb-8">
                      <h3 className="text-3xl font-bold text-gray-900 mb-6">Up and Coming Players</h3>
                      <p className="text-xl text-gray-900 max-w-3xl mx-auto">
                        Emerging companies with significant potential to impact the AR glasses market through innovative approaches and substantial resources
                      </p>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-8">
                      <motion.div 
                        className="bg-white/70 rounded-xl p-8 border border-indigo-100"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                        viewport={{ once: true, margin: "-100px" }}
                      >
                        <div className="flex items-center mb-6">
                          <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-lg flex items-center justify-center mr-4">
                            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                            </svg>
                          </div>
                          <h4 className="text-2xl font-semibold text-gray-900">Amazon</h4>
                        </div>
                        <p className="text-xl text-gray-900 mb-6">
                          Amazon is actively developing AR glasses, though details about their specific approach and timeline remain limited. Given their expertise in cloud computing, AI, and consumer electronics, they could bring significant resources and infrastructure to the AR glasses market.
                        </p>
                        <div className="space-y-4">
                          <motion.div 
                            className="bg-orange-50 rounded-lg p-4 border border-orange-200"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                            viewport={{ once: true, margin: "-100px" }}
                          >
                            <h5 className="text-lg font-semibold text-gray-900 mb-2">Key Strengths</h5>
                            <ul className="text-base text-gray-900 space-y-2">
                              <li>Cloud computing infrastructure (AWS)</li>
                              <li>AI and machine learning capabilities</li>
                              <li>Consumer electronics experience</li>
                              <li>Massive financial resources</li>
                            </ul>
                          </motion.div>
                          <motion.div 
                            className="bg-blue-50 rounded-lg p-4 border border-blue-200"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
                            viewport={{ once: true, margin: "-100px" }}
                          >
                            <h5 className="text-lg font-semibold text-gray-900 mb-2">Market Potential</h5>
                            <p className="text-base text-gray-900">Could leverage existing Alexa ecosystem and AWS infrastructure for AR glasses development</p>
                          </motion.div>
                          <motion.div 
                            className="bg-gray-50 rounded-lg p-4 border border-gray-200"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
                            viewport={{ once: true, margin: "-100px" }}
                          >
                            <h5 className="text-lg font-semibold text-gray-800 mb-2">Status</h5>
                            <p className="text-base text-gray-900">Active development, limited public details available</p>
                          </motion.div>
                        </div>
                      </motion.div>
                      
                      <motion.div 
                        className="bg-white/70 rounded-xl p-8 border border-indigo-100"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                        viewport={{ once: true, margin: "-100px" }}
                      >
                        <div className="flex items-center mb-6">
                          <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-500 rounded-lg flex items-center justify-center mr-4">
                            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                            </svg>
                          </div>
                          <h4 className="text-2xl font-semibold text-gray-900">OpenAI</h4>
                        </div>
                        <p className="text-xl text-gray-900 mb-6">
                          OpenAI has a plan for rolling out unique devices designed to increase the speed and context with which humans can interact with AI. While they're not building AR glasses directly, they have the capacity and funds to impact the space significantly.
                        </p>
                        <div className="space-y-4">
                          <motion.div 
                            className="bg-green-50 rounded-lg p-4 border border-green-200"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
                            viewport={{ once: true, margin: "-100px" }}
                          >
                            <h5 className="text-lg font-semibold text-gray-900 mb-2">AI Leadership</h5>
                            <ul className="text-base text-gray-900 space-y-2">
                              <li>Advanced AI and language models</li>
                              <li>Human-AI interaction expertise</li>
                              <li>Substantial funding and resources</li>
                              <li>Innovation in device interfaces</li>
                            </ul>
                          </motion.div>
                          <motion.div 
                            className="bg-purple-50 rounded-lg p-4 border border-purple-200"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.7, ease: "easeOut" }}
                            viewport={{ once: true, margin: "-100px" }}
                          >
                            <h5 className="text-lg font-semibold text-gray-900 mb-2">Market Impact</h5>
                            <p className="text-base text-gray-900">Could influence AR glasses development through AI integration and human-computer interaction innovations</p>
                          </motion.div>
                          <motion.div 
                            className="bg-gray-50 rounded-lg p-4 border border-gray-200"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.9, ease: "easeOut" }}
                            viewport={{ once: true, margin: "-100px" }}
                          >
                            <h5 className="text-lg font-semibold text-gray-800 mb-2">Approach</h5>
                            <p className="text-base text-gray-900">Different device strategy, but potential to shape AR glasses AI capabilities</p>
                          </motion.div>
                        </div>
                      </motion.div>
                    </div>

                    {/* Market Impact Summary */}
                    <motion.div 
                      className="mt-8 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-xl p-8 border border-indigo-200"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                      viewport={{ once: true, margin: "-100px" }}
                    >
                      <div className="flex items-center mb-6">
                        <svg className="w-8 h-8 text-gray-900 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                        <h4 className="text-2xl font-semibold text-gray-900">Market Impact Potential</h4>
                      </div>
                        <p className="text-lg text-gray-900 mb-6">
                        These emerging players represent significant potential for disruption in the AR glasses market. Amazon's cloud infrastructure and consumer electronics expertise could enable new approaches to AR computing, while OpenAI's AI leadership could fundamentally reshape how humans interact with AR devices through more natural, intelligent interfaces.
                      </p>
                      <div className="grid md:grid-cols-2 gap-6">
                        <motion.div 
                          className="bg-white/70 rounded-lg p-6 border border-indigo-100"
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                          viewport={{ once: true, margin: "-100px" }}
                        >
                          <h5 className="text-lg font-semibold text-gray-900 mb-3">Infrastructure Advantage</h5>
                          <p className="text-base text-gray-900">Amazon's AWS could provide the cloud computing backbone for lightweight AR glasses with powerful remote processing capabilities</p>
                        </motion.div>
                        <motion.div 
                          className="bg-white/70 rounded-lg p-6 border border-purple-100"
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
                          viewport={{ once: true, margin: "-100px" }}
                        >
                          <h5 className="text-lg font-semibold text-gray-900 mb-3">AI Integration</h5>
                          <p className="text-base text-gray-900">OpenAI's innovations in human-AI interaction could set new standards for voice and gesture interfaces in AR glasses</p>
                        </motion.div>
                      </div>
                    </motion.div>
                  </div>
                </div>

                {/* Industry Adoption Metrics */}
                <motion.div 
                  className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl p-8 mb-8 border border-emerald-200"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  viewport={{ once: true, margin: "-100px" }}
                >
                  <motion.div 
                    className="text-center mb-8"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
                    viewport={{ once: true, margin: "-100px" }}
                  >
                    <h3 className="text-3xl font-bold text-gray-900 mb-6">Current Industry Adoption</h3>
                    <p className="text-xl text-gray-900 max-w-3xl mx-auto">
                      AR glasses are gaining traction across key industries, with healthcare leading adoption and manufacturing showing strong enterprise uptake
                    </p>
                  </motion.div>
                  
                  <div className="grid md:grid-cols-3 gap-8 mb-8">
                    <motion.div 
                      className="bg-white rounded-xl p-8 shadow-lg border border-emerald-200"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                      viewport={{ once: true, margin: "-100px" }}
                    >
                      <motion.div 
                        className="flex items-center mb-6"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
                        viewport={{ once: true, margin: "-100px" }}
                      >
                        <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-pink-500 rounded-lg flex items-center justify-center mr-4">
                          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                          </svg>
                        </div>
                        <h4 className="text-2xl font-semibold text-gray-900">Healthcare</h4>
                      </motion.div>
                      
                      <div className="mb-6">
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-lg font-medium text-gray-900">Adoption Rate</span>
                          <span className="text-4xl font-bold text-gray-900">
                            <AnimatedCounter start={0} end={23} duration={2000} suffix="%" />
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-3">
                          <motion.div 
                            className="bg-gradient-to-r from-red-500 to-pink-500 h-3 rounded-full"
                            initial={{ width: 0 }}
                            whileInView={{ width: '23%' }}
                            transition={{ duration: 2, delay: 0.6, ease: "easeOut" }}
                            viewport={{ once: true, margin: "-100px" }}
                          />
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        <div className="bg-red-50 rounded-lg p-4 border border-red-200">
                          <h5 className="text-lg font-semibold text-gray-900 mb-3">Primary Use Cases</h5>
                          <ul className="text-base text-gray-900 space-y-2">
                            <li>Surgical guidance and visualization</li>
                            <li>Medical training and education</li>
                            <li>Diagnostic imaging overlay</li>
                            <li>Patient data visualization</li>
                          </ul>
                      </div>
                        <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                          <h5 className="text-lg font-semibold text-gray-900 mb-2">Leading Devices</h5>
                          <p className="text-base text-gray-900">Magic Leap 2 and HoloLens 2</p>
                        </div>
                      </div>
                    </motion.div>
                    
                    <motion.div 
                      className="bg-white rounded-xl p-8 shadow-lg border border-emerald-200"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
                      viewport={{ once: true, margin: "-100px" }}
                    >
                      <motion.div 
                        className="flex items-center mb-6"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.7, ease: "easeOut" }}
                        viewport={{ once: true, margin: "-100px" }}
                      >
                        <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center mr-4">
                          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                          </svg>
                        </div>
                        <h4 className="text-2xl font-semibold text-gray-900">Manufacturing</h4>
                      </motion.div>
                      
                      <div className="mb-6">
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-lg font-medium text-gray-900">Adoption Rate</span>
                          <span className="text-4xl font-bold text-gray-900">
                            <AnimatedCounter start={0} end={18} duration={2000} suffix="%" />
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-3">
                          <motion.div 
                            className="bg-gradient-to-r from-blue-500 to-indigo-500 h-3 rounded-full"
                            initial={{ width: 0 }}
                            whileInView={{ width: '18%' }}
                            transition={{ duration: 2, delay: 0.8, ease: "easeOut" }}
                            viewport={{ once: true, margin: "-100px" }}
                          />
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                          <h5 className="text-lg font-semibold text-gray-900 mb-3">Primary Use Cases</h5>
                          <ul className="text-base text-gray-900 space-y-2">
                            <li>Assembly line guidance</li>
                            <li>Equipment maintenance</li>
                            <li>Quality control inspection</li>
                            <li>Worker training and safety</li>
                          </ul>
                        </div>
                        <div className="bg-orange-50 rounded-lg p-4 border border-orange-200">
                          <h5 className="text-lg font-semibold text-gray-900 mb-2">Market Leader</h5>
                          <p className="text-base text-gray-900">Microsoft HoloLens 2 dominant</p>
                        </div>
                      </div>
                    </motion.div>
                    
                    <motion.div 
                      className="bg-white rounded-xl p-8 shadow-lg border border-emerald-200"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
                      viewport={{ once: true, margin: "-100px" }}
                    >
                      <motion.div 
                        className="flex items-center mb-6"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.9, ease: "easeOut" }}
                        viewport={{ once: true, margin: "-100px" }}
                      >
                        <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-500 rounded-lg flex items-center justify-center mr-4">
                          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                          </svg>
                        </div>
                        <h4 className="text-2xl font-semibold text-gray-900">Education</h4>
                      </motion.div>
                      
                      <div className="mb-6">
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-lg font-medium text-gray-900">Adoption Rate</span>
                          <span className="text-4xl font-bold text-gray-900">
                            <AnimatedCounter start={0} end={12} duration={2000} suffix="%" />
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-3">
                          <motion.div 
                            className="bg-gradient-to-r from-green-500 to-teal-500 h-3 rounded-full"
                            initial={{ width: 0 }}
                            whileInView={{ width: '12%' }}
                            transition={{ duration: 2, delay: 1.0, ease: "easeOut" }}
                            viewport={{ once: true, margin: "-100px" }}
                          />
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                          <h5 className="text-lg font-semibold text-gray-900 mb-3">Primary Use Cases</h5>
                          <ul className="text-base text-gray-900 space-y-2">
                            <li>Interactive training modules</li>
                            <li>3D visualization and modeling</li>
                            <li>Remote learning experiences</li>
                            <li>Virtual laboratory simulations</li>
                          </ul>
                        </div>
                        <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
                          <h5 className="text-lg font-semibold text-gray-900 mb-2">Device Ecosystem</h5>
                          <p className="text-base text-gray-900">Mixed device ecosystem across vendors</p>
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Adoption Trends Summary */}
                  <motion.div 
                    className="bg-gradient-to-r from-emerald-100 to-teal-100 rounded-xl p-8 border border-emerald-200"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.2, ease: "easeOut" }}
                    viewport={{ once: true, margin: "-100px" }}
                  >
                    <motion.div 
                      className="flex items-center mb-6"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 1.3, ease: "easeOut" }}
                      viewport={{ once: true, margin: "-100px" }}
                    >
                      <svg className="w-8 h-8 text-gray-900 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                      <h4 className="text-2xl font-semibold text-gray-900">Adoption Trends & Insights</h4>
                    </motion.div>
                    <div className="grid md:grid-cols-3 gap-6">
                      <motion.div 
                        className="bg-white/70 rounded-lg p-6 border border-emerald-100"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 1.4, ease: "easeOut" }}
                        viewport={{ once: true, margin: "-100px" }}
                      >
                        <h5 className="text-lg font-semibold text-gray-900 mb-3">Healthcare Leads</h5>
                        <p className="text-base text-gray-900">Highest adoption due to clear ROI in surgical precision and training effectiveness</p>
                      </motion.div>
                      <motion.div 
                        className="bg-white/70 rounded-lg p-6 border border-emerald-100"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 1.6, ease: "easeOut" }}
                        viewport={{ once: true, margin: "-100px" }}
                      >
                        <h5 className="text-lg font-semibold text-gray-900 mb-3">Enterprise Focus</h5>
                        <p className="text-base text-gray-900">Manufacturing shows strong enterprise adoption with Microsoft HoloLens 2 dominance</p>
                      </motion.div>
                      <motion.div 
                        className="bg-white/70 rounded-lg p-6 border border-emerald-100"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 1.8, ease: "easeOut" }}
                        viewport={{ once: true, margin: "-100px" }}
                      >
                        <h5 className="text-lg font-semibold text-gray-900 mb-3">Growth Potential</h5>
                        <p className="text-base text-gray-900">Education sector shows early adoption with mixed device ecosystem indicating market maturity</p>
                      </motion.div>
                    </div>
                  </motion.div>
                </motion.div>

                <div className="mt-8">
                  <div className="bg-gradient-to-r from-gray-100 to-slate-100 rounded-xl p-6 border border-gray-200">
                    <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Summary</h3>
                    <p className="text-lg text-gray-900">
                      Each of these players has helped AR technology achieve remarkable advancements, whether through unique display technologies (micro-LED, micro-OLED, SiC, waveguides), novel heat dissipation (magnesium, titanium, passive or externalized cooling), cutting-edge gesture/voice input, or multimodal AI capabilities. However, the pathway to truly desk-free, mainstream productivity still faces some clear barriers, including high production costs, the need to combine the advanced computational power that headsets can hold into lightweight wearables, and the need to ensure that any accompanying wearable technology (e.g., Orion's EMG wristband for gesture tracking) are comfortable enough to wear outside (e.g., how does it respond to heat and sweat?).
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Visual Section Break */}
          <div className="flex items-center justify-center my-16">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
            <div className="mx-8 px-4 py-2 bg-white rounded-full border border-gray-200 shadow-sm">
              <span className="text-base font-medium text-gray-900">Next Steps</span>
            </div>
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
          </div>

          {/* Next Steps Section */}
          <section id="next-steps" className="mb-24">
            <div className="bg-white rounded-2xl shadow-xl border border-[#A5DAD8]/30 p-10 mb-12">
              <div className="text-center mb-12">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-yellow-100 text-yellow-600 text-base font-medium mb-6">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  Part 5: Next Steps
                </div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Three Critical Paths to Desk-Free Productivity</h2>
                <blockquote className="text-2xl font-semibold text-gray-900 italic border-l-4 border-yellow-500 pl-6 my-8 max-w-4xl mx-auto">
                  The future of AR glasses isn't just about what's possible—it's about what we need to build next.
                </blockquote>
              </div>

              <div className="prose prose-lg max-w-none">
                {/* Screenshot Component 8: The Path Forward Overview */}
                <motion.div 
                  className="bg-gradient-to-r from-yellow-50 to-yellow-100 rounded-2xl p-8 mb-8 border border-yellow-200"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                  viewport={{ once: true, margin: "-100px" }}
                >
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">The Path Forward</h3>
                  <p className="text-lg text-gray-900 text-center mb-8 leading-relaxed">
                    We have identified three potential next steps and opportunities to prioritize, as well as how to potentially accomplish them, in order for AR glasses to be useful enough to enable people to perform tasks away from their desks.
                  </p>
                  <div className="grid md:grid-cols-3 gap-6">
                    <motion.div 
                      className="bg-white rounded-xl p-6 shadow-lg text-center"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                      viewport={{ once: true, margin: "-100px" }}
                    >
                      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl font-bold text-gray-900">1</span>
                      </div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">AR-Native Browsing</h4>
                      <p className="text-base text-gray-900">Spatial web experiences designed for AR</p>
                    </motion.div>
                    <motion.div 
                      className="bg-white rounded-xl p-6 shadow-lg text-center"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
                      viewport={{ once: true, margin: "-100px" }}
                    >
                      <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl font-bold text-gray-900">2</span>
                      </div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">AI-Powered Planning</h4>
                      <p className="text-base text-gray-900">Intelligent task distribution and battery management</p>
                    </motion.div>
                    <motion.div 
                      className="bg-white rounded-xl p-6 shadow-lg text-center"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
                      viewport={{ once: true, margin: "-100px" }}
                    >
                      <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl font-bold text-gray-900">3</span>
                      </div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">AR-to-Computer Communication</h4>
                      <p className="text-base text-gray-900">Seamless remote computing integration</p>
                    </motion.div>
                  </div>
                </motion.div>

                {/* Three Critical Paths */}
                <div className="space-y-12">
                  {/* Path 1A: AR-Native Browsing - The Vision */}
                <motion.div 
                  className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-8 border border-blue-200 mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                  viewport={{ once: true, margin: "-100px" }}
                >
                  <div className="flex items-center mb-8">
                    <div className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center text-xl font-bold mr-4">1A</div>
                    <h3 className="text-2xl font-bold text-gray-900">AR-Native Browsing: The Vision<sup><a href="/references-future-of-ergonomic-work-white-paper" className="text-gray-900 hover:text-gray-900">38-45</a></sup></h3>
                  </div>
                  
                  {/* Inspirational Quote */}
                  <motion.div 
                    className="mb-8 p-6 bg-gradient-to-r from-blue-500/10 via-cyan-500/10 to-indigo-500/10 rounded-xl border border-blue-200"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                    viewport={{ once: true, margin: "-100px" }}
                  >
                    <p className="text-lg text-gray-900 italic text-center font-medium">
                      "Imagine browsing the web in 3D space, with content that understands your environment and responds to your movements."
                      </p>
                    </motion.div>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    {/* Left Column - The Vision */}
                    <motion.div 
                      className="flex flex-col justify-center"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
                      viewport={{ once: true, margin: "-100px" }}
                    >
                      <div className="bg-gradient-to-br from-blue-50 via-cyan-50 to-indigo-50 rounded-xl p-6 border border-blue-200 h-full relative overflow-hidden">
                        {/* Background Pattern */}
                        <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
                          <svg viewBox="0 0 100 100" className="w-full h-full text-gray-900">
                            <circle cx="20" cy="20" r="2" fill="currentColor"/>
                            <circle cx="40" cy="20" r="2" fill="currentColor"/>
                            <circle cx="60" cy="20" r="2" fill="currentColor"/>
                            <circle cx="80" cy="20" r="2" fill="currentColor"/>
                            <circle cx="20" cy="40" r="2" fill="currentColor"/>
                            <circle cx="40" cy="40" r="2" fill="currentColor"/>
                            <circle cx="60" cy="40" r="2" fill="currentColor"/>
                            <circle cx="80" cy="40" r="2" fill="currentColor"/>
                            <circle cx="20" cy="60" r="2" fill="currentColor"/>
                            <circle cx="40" cy="60" r="2" fill="currentColor"/>
                            <circle cx="60" cy="60" r="2" fill="currentColor"/>
                            <circle cx="80" cy="60" r="2" fill="currentColor"/>
                            <circle cx="20" cy="80" r="2" fill="currentColor"/>
                            <circle cx="40" cy="80" r="2" fill="currentColor"/>
                            <circle cx="60" cy="80" r="2" fill="currentColor"/>
                            <circle cx="80" cy="80" r="2" fill="currentColor"/>
                          </svg>
                        </div>
                        
                        <div className="relative z-10">
                          <div className="flex items-center mb-6">
                            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mr-4 shadow-lg">
                              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                              </svg>
                            </div>
                            <h4 className="text-xl font-bold text-gray-900">The Vision</h4>
                          </div>
                          
                          <div className="space-y-4">
                            <div className="bg-white/80 rounded-lg p-4 border border-blue-100 shadow-sm">
                              <div className="flex items-start">
                                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                                  <svg className="w-4 h-4 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                  </svg>
                                </div>
                                <p className="text-gray-900 font-medium">
                                  <span className="text-gray-900 font-semibold">95%</span> of work tasks happen in browsers
                                </p>
                              </div>
                            </div>
                            
                            <div className="bg-white/80 rounded-lg p-4 border border-cyan-100 shadow-sm">
                              <div className="flex items-start">
                                <div className="w-8 h-8 bg-cyan-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                                  <svg className="w-4 h-4 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                                  </svg>
                                </div>
                                <p className="text-gray-900 font-medium">
                                  Current AR devices just <span className="text-gray-900 font-semibold">display 2D content</span>
                                </p>
                              </div>
                            </div>
                            
                            <div className="bg-gradient-to-r from-blue-100 to-cyan-100 rounded-lg p-4 border border-blue-200 shadow-sm">
                              <div className="flex items-start">
                                <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                                  <svg className="w-4 h-4 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                                  </svg>
                                </div>
                                <p className="text-gray-800 font-semibold">
                                  We need <span className="text-gray-900">AR-native browsers</span> built for spatial computing
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                    
                    {/* Right Column - Challenge and Opportunity Stacked */}
                    <motion.div 
                      className="space-y-6"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
                      viewport={{ once: true, margin: "-100px" }}
                    >
                      <motion.div 
                        className="bg-white/70 rounded-xl p-6 border border-red-100"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 1.0, ease: "easeOut" }}
                        viewport={{ once: true, margin: "-100px" }}
                      >
                        <div className="flex items-center mb-4">
                          <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center mr-3">
                            <svg className="w-5 h-5 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                            </svg>
                          </div>
                          <h4 className="text-lg font-semibold text-gray-900">The Challenge</h4>
                        </div>
                        <p className="text-gray-900">
                          Current AR devices simply display content from traditional 2D browsers, missing the opportunity to leverage AR's unique spatial and contextual capabilities for enhanced productivity.
                        </p>
                      </motion.div>
                      
                      <motion.div 
                        className="bg-white/70 rounded-xl p-6 border border-green-100"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 1.2, ease: "easeOut" }}
                        viewport={{ once: true, margin: "-100px" }}
                      >
                        <div className="flex items-center mb-4">
                          <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-3">
                            <svg className="w-5 h-5 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                          </div>
                          <h4 className="text-lg font-semibold text-gray-900">The Opportunity</h4>
                        </div>
                        <p className="text-gray-900">
                        This represents a fundamental shift from traditional web browsing to spatial, contextual, and multimodal interaction paradigms that leverage the unique capabilities of AR technology.
                      </p>
                      </motion.div>
                    </motion.div>
                    </div>
                </motion.div>

                {/* Path 1B: AR-Native Browsing - Hardware Architecture */}
                <motion.div 
                  className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-2xl p-8 border border-indigo-200 mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                  viewport={{ once: true, margin: "-100px" }}
                >
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-indigo-500 text-white rounded-full flex items-center justify-center text-xl font-bold mr-4">1B</div>
                    <h3 className="text-2xl font-bold text-gray-900">Hardware Architecture & Thermal Management<sup><a href="/references-future-of-ergonomic-work-white-paper" className="text-gray-900 hover:text-gray-900">38-45</a></sup></h3>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    <motion.div 
                      className="bg-white/70 rounded-xl p-6 border border-indigo-100"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                      viewport={{ once: true, margin: "-100px" }}
                    >
                      <div className="flex items-center mb-4">
                        <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center mr-3">
                          <svg className="w-5 h-5 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                          </svg>
                        </div>
                        <h4 className="text-lg font-semibold text-gray-900">External Compute Architecture</h4>
                      </div>
                      <p className="text-gray-900 mb-4">
                        The foundation for true AR-native browsing likely requires external compute architecture, which some devices already have.
                      </p>
                      <div className="space-y-3">
                        <div className="bg-indigo-50 rounded-lg p-3 border border-indigo-200">
                          <div className="flex items-center mb-2">
                            <div className="w-6 h-6 bg-indigo-100 rounded-full flex items-center justify-center mr-2">
                              <svg className="w-3 h-3 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                              </svg>
                            </div>
                            <h5 className="font-semibold text-gray-900 text-base">Glasses Power Consumption</h5>
                          </div>
                          <p className="text-base text-gray-900">0.5-1.5W (vs 1-3W standalone) - thermally comfortable for all-day wear</p>
                        </div>
                        <div className="bg-blue-50 rounded-lg p-3 border border-blue-200">
                          <div className="flex items-center mb-2">
                            <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-2">
                              <svg className="w-3 h-3 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                              </svg>
                            </div>
                            <h5 className="font-semibold text-gray-900 text-base">External Device Performance</h5>
                          </div>
                          <p className="text-base text-gray-900">15-50W power budgets, dedicated graphics, 8-16GB RAM, active cooling</p>
                        </div>
                      </div>
                    </motion.div>
                    
                    <motion.div 
                      className="bg-white/70 rounded-xl p-6 border border-blue-100"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
                      viewport={{ once: true, margin: "-100px" }}
                    >
                      <div className="flex items-center mb-4">
                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                          <svg className="w-5 h-5 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                          </svg>
                        </div>
                        <h4 className="text-lg font-semibold text-gray-900">Thermal Management Solution</h4>
                      </div>
                      <p className="text-gray-900 mb-4">
                        This architecture solves the fundamental physics barriers around heat dissipation and computational power that have prevented sophisticated spatial web experiences in lightweight wearable form factors.
                      </p>
                      <div className="space-y-3">
                        <div className="bg-blue-50 rounded-lg p-3 border border-blue-200">
                          <div className="flex items-center mb-2">
                            <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-2">
                              <svg className="w-3 h-3 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                              </svg>
                    </div>
                            <h5 className="font-semibold text-gray-900 text-base">Glasses Focus</h5>
                          </div>
                          <p className="text-base text-gray-900">Display driving, head tracking, wireless data streaming</p>
                        </div>
                        <div className="bg-green-50 rounded-lg p-3 border border-green-200">
                          <div className="flex items-center mb-2">
                            <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-2">
                              <svg className="w-3 h-3 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                            </div>
                            <h5 className="font-semibold text-gray-900 text-base">Result</h5>
                          </div>
                          <p className="text-base text-gray-900">Desktop-class performance with lightweight, comfortable wearables</p>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>

                {/* Path 1C: AR-Native Browsing - Multimodal Input & AI */}
                <motion.div 
                  className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8 border border-purple-200 mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                  viewport={{ once: true, margin: "-100px" }}
                >
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-purple-500 text-white rounded-full flex items-center justify-center text-xl font-bold mr-4">1C</div>
                    <h3 className="text-2xl font-bold text-gray-900">Multimodal Input & AI Integration<sup><a href="/references-future-of-ergonomic-work-white-paper" className="text-gray-900 hover:text-gray-900">38-45</a></sup></h3>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    <motion.div 
                      className="bg-white/70 rounded-xl p-6 border border-purple-100"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                      viewport={{ once: true, margin: "-100px" }}
                    >
                      <div className="flex items-center mb-4">
                        <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                          <svg className="w-5 h-5 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                          </svg>
                        </div>
                        <h4 className="text-lg font-semibold text-gray-900">Voice-First Navigation</h4>
                      </div>
                      <p className="text-gray-900 mb-4">
                        Voice input emerges as a cornerstone technology for AR-native browsing, enabling natural navigation when traditional keyboard/mouse interaction becomes impractical in spatial environments.
                      </p>
                      <div className="space-y-3">
                        <div className="bg-purple-50 rounded-lg p-3 border border-purple-200">
                          <h5 className="text-lg font-semibold text-gray-900 mb-4">Example Commands</h5>
                          <div className="space-y-4">
                            <div className="flex items-center">
                              <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                                <svg className="w-5 h-5 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                                </svg>
                              </div>
                              <p className="text-lg text-gray-900">"Show me the 3D model"</p>
                            </div>
                            <div className="flex items-center">
                              <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                                <svg className="w-5 h-5 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                                </svg>
                              </div>
                              <p className="text-lg text-gray-900">"Pin this article to the wall"</p>
                            </div>
                            <div className="flex items-center">
                              <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                                <svg className="w-5 h-5 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                                </svg>
                              </div>
                              <p className="text-lg text-gray-900">"Translate this page"</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                    
                    <motion.div 
                      className="bg-white/70 rounded-xl p-6 border border-pink-100"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
                      viewport={{ once: true, margin: "-100px" }}
                    >
                      <div className="flex items-center mb-4">
                        <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center mr-3">
                          <svg className="w-5 h-5 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                          </svg>
                        </div>
                        <h4 className="text-lg font-semibold text-gray-900">AI-Powered Intelligence</h4>
                      </div>
                      <p className="text-gray-900 mb-4">
                        The external compute architecture allows for sophisticated on-device language models, real-time voice processing, and context-aware AI assistants that understand both spoken commands and spatial context.
                      </p>
                      <div className="space-y-3">
                        <div className="bg-pink-50 rounded-lg p-3 border border-pink-200">
                          <h5 className="text-lg font-semibold text-gray-900 mb-4">Advanced Capabilities</h5>
                          <div className="space-y-4">
                            <div className="flex items-center">
                              <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                                <svg className="w-5 h-5 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                </svg>
                              </div>
                              <p className="text-lg text-gray-900">Neural EMG interfaces</p>
                            </div>
                            <div className="flex items-center">
                              <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                                <svg className="w-5 h-5 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                </svg>
                              </div>
                              <p className="text-lg text-gray-900">Computer vision for hand/eye tracking</p>
                            </div>
                            <div className="flex items-center">
                              <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                                <svg className="w-5 h-5 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                              </div>
                              <p className="text-lg text-gray-900">Environmental understanding</p>
                            </div>
                            <div className="flex items-center">
                              <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                                <svg className="w-5 h-5 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                              </div>
                              <p className="text-lg text-gray-900">Predictive interfaces</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>

                {/* Path 1: AR-Native Browsing - Section B: Technical Implementation */}
                <div className="bg-gradient-to-r from-cyan-50 to-teal-50 rounded-2xl p-8 border border-cyan-200 mb-8">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-cyan-500 text-white rounded-full flex items-center justify-center text-xl font-bold mr-4">1B</div>
                    <h3 className="text-2xl font-bold text-gray-900">AR-Native Browsing: Technical Implementation<sup><a href="/references-future-of-ergonomic-work-white-paper" className="text-gray-900 hover:text-gray-900">38-45</a></sup></h3>
                  </div>
                  
                  {/* Spatial Web Standards */}
                  <motion.div 
                    className="mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                    viewport={{ once: true, margin: "-100px" }}
                  >
                    <motion.div 
                      className="bg-white/70 rounded-xl p-6 border border-blue-100"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                      viewport={{ once: true, margin: "-100px" }}
                    >
                      <div className="flex items-center mb-4">
                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                          <svg className="w-5 h-5 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                          </svg>
                        </div>
                        <h4 className="text-xl font-semibold text-gray-900">Spatial Web Standards</h4>
                      </div>
                      <p className="text-lg text-gray-900 mb-6">
                        Building AR-native browsing demands entirely new web standards beyond traditional HTML/CSS designed for flat screens.
                      </p>
                      <div className="grid md:grid-cols-3 gap-6">
                        <motion.div 
                          className="bg-blue-50 rounded-lg p-6 border border-blue-200"
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
                          viewport={{ once: true, margin: "-100px" }}
                        >
                          <div className="flex items-center mb-3">
                            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                              <svg className="w-5 h-5 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                              </svg>
                            </div>
                            <h5 className="text-lg font-semibold text-gray-900">WebXR APIs</h5>
                          </div>
                          <p className="text-lg text-gray-900">Enhanced APIs for true spatial content rendering</p>
                        </motion.div>
                        <motion.div 
                          className="bg-blue-50 rounded-lg p-6 border border-blue-200"
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
                          viewport={{ once: true, margin: "-100px" }}
                        >
                          <div className="flex items-center mb-3">
                            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                              <svg className="w-5 h-5 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                              </svg>
                            </div>
                            <h5 className="text-lg font-semibold text-gray-900">3D DOM Extensions</h5>
                          </div>
                          <p className="text-lg text-gray-900">Spatial objects with depth and physics properties</p>
                        </motion.div>
                        <motion.div 
                          className="bg-blue-50 rounded-lg p-6 border border-blue-200"
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: 1.0, ease: "easeOut" }}
                          viewport={{ once: true, margin: "-100px" }}
                        >
                          <div className="flex items-center mb-3">
                            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                              <svg className="w-5 h-5 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                              </svg>
                            </div>
                            <h5 className="text-lg font-semibold text-gray-900">Spatial CSS</h5>
                          </div>
                          <p className="text-lg text-gray-900">Environmental interaction and 3D typography</p>
                        </motion.div>
                      </div>
                    </motion.div>
                    </motion.div>
                    
                  {/* Connectivity Architecture */}
                  <motion.div 
                    className="mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                    viewport={{ once: true, margin: "-100px" }}
                  >
                    <motion.div 
                      className="bg-white/70 rounded-xl p-6 border border-green-100"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                      viewport={{ once: true, margin: "-100px" }}
                    >
                      <div className="flex items-center mb-4">
                        <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-3">
                          <svg className="w-5 h-5 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
                          </svg>
                        </div>
                        <h4 className="text-xl font-semibold text-gray-900">Connectivity Architecture</h4>
                      </div>
                      <p className="text-lg text-gray-900 mb-6">
                        Critical connectivity requirements for seamless AR-native browsing experience.
                      </p>
                      <div className="grid md:grid-cols-2 gap-8">
                        <div className="space-y-4">
                          <motion.div 
                            className="bg-green-50 rounded-lg p-6 border border-green-200"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
                            viewport={{ once: true, margin: "-100px" }}
                          >
                            <div className="flex items-center mb-3">
                              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                                <svg className="w-5 h-5 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                    </div>
                              <h5 className="text-lg font-semibold text-gray-900">Ultra-Low Latency</h5>
                            </div>
                            <p className="text-lg text-gray-900">&lt;5ms for display data, &lt;1ms for sensor data</p>
                          </motion.div>
                          <motion.div 
                            className="bg-green-50 rounded-lg p-6 border border-green-200"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
                            viewport={{ once: true, margin: "-100px" }}
                          >
                            <div className="flex items-center mb-3">
                              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                                <svg className="w-5 h-5 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                </svg>
                              </div>
                              <h5 className="text-lg font-semibold text-gray-900">High-Bandwidth</h5>
                            </div>
                            <p className="text-lg text-gray-900">60GHz, WiFi 7 for complex spatial data streams</p>
                          </motion.div>
                        </div>
                        <div className="space-y-4">
                          <motion.div 
                            className="bg-green-50 rounded-lg p-6 border border-green-200"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 1.0, ease: "easeOut" }}
                            viewport={{ once: true, margin: "-100px" }}
                          >
                            <div className="flex items-center mb-3">
                              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                                <svg className="w-5 h-5 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                </svg>
                              </div>
                              <h5 className="text-lg font-semibold text-gray-900">Foveated Streaming</h5>
                            </div>
                            <p className="text-lg text-gray-900">High-quality data only in user's focal area</p>
                          </motion.div>
                          <motion.div 
                            className="bg-green-50 rounded-lg p-6 border border-green-200"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 1.2, ease: "easeOut" }}
                            viewport={{ once: true, margin: "-100px" }}
                          >
                            <div className="flex items-center mb-3">
                              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                                <svg className="w-5 h-5 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                                </svg>
                              </div>
                              <h5 className="text-lg font-semibold text-gray-900">Edge Computing</h5>
                            </div>
                            <p className="text-lg text-gray-900">Reduces dependency on constant internet connectivity</p>
                          </motion.div>
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>

                  {/* Current State & Challenges */}
                  <motion.div 
                    className="mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                    viewport={{ once: true, margin: "-100px" }}
                  >
                    <motion.div 
                      className="bg-white/70 rounded-xl p-6 border border-orange-100"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                      viewport={{ once: true, margin: "-100px" }}
                    >
                      <div className="flex items-center mb-4">
                        <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center mr-3">
                          <svg className="w-5 h-5 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                          </svg>
                        </div>
                        <h4 className="text-xl font-semibold text-gray-900">Current State & Challenges</h4>
                      </div>
                      <p className="text-lg text-gray-900 mb-6">
                        While some AR devices allow web browsing, the experience is neither deeply spatial, immersive, nor uniquely optimized for AR.
                      </p>
                      <div className="grid md:grid-cols-2 gap-8">
                        <motion.div 
                          className="bg-orange-50 rounded-lg p-6 border border-orange-200"
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
                          viewport={{ once: true, margin: "-100px" }}
                        >
                          <div className="flex items-center mb-4">
                            <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center mr-3">
                              <svg className="w-5 h-5 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                              </svg>
                            </div>
                            <h5 className="text-lg font-semibold text-gray-900">Current Limitations</h5>
                          </div>
                          <ul className="text-lg text-gray-900 space-y-2">
                            <li>More a port of flat desktop/mobile web</li>
                            <li>Typing and navigation feel unnatural</li>
                            <li>UI lacks spatial optimization</li>
                            <li>Not fundamentally AR-native</li>
                          </ul>
                        </motion.div>
                        <motion.div 
                          className="bg-green-50 rounded-lg p-6 border border-green-200"
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
                          viewport={{ once: true, margin: "-100px" }}
                        >
                          <div className="flex items-center mb-4">
                            <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                              <svg className="w-5 h-5 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                            </div>
                            <h5 className="text-lg font-semibold text-gray-900">Future Potential</h5>
                          </div>
                          <ul className="text-lg text-gray-900 space-y-2">
                            <li>Contextual and persistent experiences</li>
                            <li>Multimodal and deeply interactive</li>
                            <li>Engineering optimization barriers</li>
                            <li>Within reach of current technology</li>
                          </ul>
                        </motion.div>
                      </div>
                    </motion.div>
                  </motion.div>
                </div>

                  {/* Path 2: AI-Powered Planning - Section A: Core Intelligence */}
                  <div className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-2xl p-8 border border-teal-200 mb-8">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-teal-500 text-white rounded-full flex items-center justify-center text-xl font-bold mr-4">2A</div>
                      <h3 className="text-2xl font-bold text-gray-900">AI-Powered Planning: Core Intelligence<sup><a href="/references-future-of-ergonomic-work-white-paper" className="text-gray-900 hover:text-gray-900">46-53</a></sup></h3>
                    </div>
                    {/* Vision Statement */}
                    <div className="mb-8 p-6 bg-gradient-to-r from-teal-500/10 via-cyan-500/10 to-blue-500/10 rounded-xl border border-teal-200">
                      <p className="text-lg text-gray-900 italic text-center font-medium">
                        "Imagine AI that knows your calendar, analyzes your tasks, and intelligently distributes work across AR glasses and computers based on battery life, computational needs, and your daily context."
                        </p>
                      </div>

                    {/* Predictive Battery Intelligence */}
                    <motion.div 
                      className="mb-8"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                      viewport={{ once: true, margin: "-100px" }}
                    >
                      <motion.div 
                        className="bg-white/70 rounded-xl p-6 border border-blue-100"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                        viewport={{ once: true, margin: "-100px" }}
                      >
                        <div className="flex items-center mb-4">
                          <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                            <svg className="w-5 h-5 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                          </div>
                          <h4 className="text-xl font-semibold text-gray-900">Predictive Battery Intelligence</h4>
                        </div>
                        <p className="text-lg text-gray-900 mb-6">
                          AI-powered daily planning requires sophisticated predictive battery analysis engines that learn individual usage patterns and deliver 95%+ accuracy in battery life predictions.
                        </p>
                        <div className="grid md:grid-cols-3 gap-6">
                          <motion.div 
                            className="bg-blue-50 rounded-lg p-6 border border-blue-200"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
                            viewport={{ once: true, margin: "-100px" }}
                          >
                            <div className="flex items-center mb-3">
                              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                                <svg className="w-5 h-5 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                </svg>
                              </div>
                              <h5 className="text-lg font-semibold text-gray-900">Usage Pattern Learning</h5>
                            </div>
                            <p className="text-lg text-gray-900">Analyzes power consumption across browsing, AI queries, video calls, and navigation</p>
                          </motion.div>
                          <motion.div 
                            className="bg-blue-50 rounded-lg p-6 border border-blue-200"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
                            viewport={{ once: true, margin: "-100px" }}
                          >
                            <div className="flex items-center mb-3">
                              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                                <svg className="w-5 h-5 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                </svg>
                              </div>
                              <h5 className="text-lg font-semibold text-gray-900">Advanced Modeling</h5>
                            </div>
                            <p className="text-lg text-gray-900">Dynamic Z-Track algorithms accounting for workloads, environment, and connectivity</p>
                          </motion.div>
                          <motion.div 
                            className="bg-blue-50 rounded-lg p-6 border border-blue-200"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 1.0, ease: "easeOut" }}
                            viewport={{ once: true, margin: "-100px" }}
                          >
                            <div className="flex items-center mb-3">
                              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                                <svg className="w-5 h-5 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                              </div>
                              <h5 className="text-lg font-semibold text-gray-900">95%+ Accuracy</h5>
                            </div>
                            <p className="text-lg text-gray-900">High-precision battery life predictions for optimal task planning</p>
                          </motion.div>
                        </div>
                      </motion.div>
                    </motion.div>
                    
                    {/* Intelligent Task Classification */}
                    <motion.div 
                      className="mb-8"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                      viewport={{ once: true, margin: "-100px" }}
                    >
                      <motion.div 
                        className="bg-white/70 rounded-xl p-6 border border-green-100"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                        viewport={{ once: true, margin: "-100px" }}
                      >
                        <div className="flex items-center mb-4">
                          <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-3">
                            <svg className="w-5 h-5 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                            </svg>
                          </div>
                          <h4 className="text-xl font-semibold text-gray-900">Intelligent Task Classification</h4>
                        </div>
                        <p className="text-lg text-gray-900 mb-6">
                          Automatically categorizes daily activities based on computational requirements, user context, and current battery status.
                        </p>
                        <div className="grid md:grid-cols-3 gap-6">
                          <motion.div 
                            className="bg-green-50 rounded-lg p-6 border border-green-200"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
                            viewport={{ once: true, margin: "-100px" }}
                          >
                            <div className="flex items-center mb-3">
                              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                                <svg className="w-5 h-5 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                </svg>
                              </div>
                              <h5 className="text-lg font-semibold text-gray-900">AR-Native</h5>
                            </div>
                            <p className="text-lg text-gray-900">Optimal for glasses - lightweight, spatial tasks</p>
                          </motion.div>
                          <motion.div 
                            className="bg-yellow-50 rounded-lg p-6 border border-yellow-200"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
                            viewport={{ once: true, margin: "-100px" }}
                          >
                            <div className="flex items-center mb-3">
                              <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center mr-3">
                                <svg className="w-5 h-5 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                                </svg>
                              </div>
                              <h5 className="text-lg font-semibold text-gray-900">AR-Assisted</h5>
                            </div>
                            <p className="text-lg text-gray-900">Beneficial but power-intensive - use with caution</p>
                          </motion.div>
                          <motion.div 
                            className="bg-red-50 rounded-lg p-6 border border-red-200"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 1.0, ease: "easeOut" }}
                            viewport={{ once: true, margin: "-100px" }}
                          >
                            <div className="flex items-center mb-3">
                              <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mr-3">
                                <svg className="w-5 h-5 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                              </div>
                              <h5 className="text-lg font-semibold text-gray-900">Traditional Computing</h5>
                            </div>
                            <p className="text-lg text-gray-900">Better suited for external devices - complex tasks</p>
                          </motion.div>
                        </div>
                      </motion.div>
                      </motion.div>
                      
                    {/* Voice-Centric Planning */}
                    <motion.div 
                      className="mb-8"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                      viewport={{ once: true, margin: "-100px" }}
                    >
                      <motion.div 
                        className="bg-white/70 rounded-xl p-6 border border-purple-100"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                        viewport={{ once: true, margin: "-100px" }}
                      >
                        <div className="flex items-center mb-4">
                          <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                            <svg className="w-5 h-5 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                            </svg>
                          </div>
                          <h4 className="text-xl font-semibold text-gray-900">Voice-Centric Planning & Predictive Intervention</h4>
                        </div>
                        <p className="text-gray-900 mb-4">
                          Voice interaction becomes the primary interface, enabling natural queries and providing predictive intervention for optimal task distribution.
                        </p>
                        <div className="grid md:grid-cols-2 gap-6">
                          <div className="space-y-3">
                            <motion.div 
                              className="bg-purple-50 rounded-lg p-4 border border-purple-200"
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
                              viewport={{ once: true, margin: "-100px" }}
                            >
                              <div className="flex items-center mb-2">
                                <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center mr-2">
                                  <svg className="w-3 h-3 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                  </svg>
                      </div>
                                <h5 className="font-semibold text-gray-900 text-base">Natural Queries</h5>
                              </div>
                              <p className="text-base text-gray-900">"How's my battery looking for today?" or "Can I handle another hour of AR browsing?"</p>
                            </motion.div>
                            <motion.div 
                              className="bg-purple-50 rounded-lg p-4 border border-purple-200"
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
                              viewport={{ once: true, margin: "-100px" }}
                            >
                              <div className="flex items-center mb-2">
                                <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center mr-2">
                                  <svg className="w-3 h-3 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                                  </svg>
                                </div>
                                <h5 className="font-semibold text-gray-900 text-base">Productivity Integration</h5>
                              </div>
                              <p className="text-base text-gray-900">Connects with Google Calendar, Microsoft Teams for automatic task routing</p>
                            </motion.div>
                          </div>
                          <div className="space-y-3">
                            <motion.div 
                              className="bg-purple-50 rounded-lg p-4 border border-purple-200"
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.6, delay: 1.0, ease: "easeOut" }}
                              viewport={{ once: true, margin: "-100px" }}
                            >
                              <div className="flex items-center mb-2">
                                <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center mr-2">
                                  <svg className="w-3 h-3 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                  </svg>
                                </div>
                                <h5 className="font-semibold text-gray-900 text-base">Predictive Intervention</h5>
                              </div>
                              <p className="text-base text-gray-900">Identifies when meetings might exceed battery capacity and suggests strategies</p>
                            </motion.div>
                            <motion.div 
                              className="bg-purple-50 rounded-lg p-4 border border-purple-200"
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.6, delay: 1.2, ease: "easeOut" }}
                              viewport={{ once: true, margin: "-100px" }}
                            >
                              <div className="flex items-center mb-2">
                                <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center mr-2">
                                  <svg className="w-3 h-3 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                  </svg>
                                </div>
                                <h5 className="font-semibold text-gray-900 text-base">Power Impact Estimates</h5>
                              </div>
                              <p className="text-base text-gray-900">Meeting invitations include battery impact and optimal device recommendations</p>
                            </motion.div>
                          </div>
                        </div>
                      </motion.div>
                    </motion.div>
                  </div>

                  {/* Path 2: AI-Powered Planning - Section B: Advanced Optimization */}
                  <motion.div 
                    className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-2xl p-8 border border-cyan-200 mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                    viewport={{ once: true, margin: "-100px" }}
                  >
                    <motion.div 
                      className="flex items-center mb-6"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                      viewport={{ once: true, margin: "-100px" }}
                    >
                      <div className="w-12 h-12 bg-cyan-500 text-white rounded-full flex items-center justify-center text-xl font-bold mr-4">2B</div>
                      <h3 className="text-2xl font-bold text-gray-900">AI-Powered Planning: Advanced Optimization<sup><a href="/references-future-of-ergonomic-work-white-paper" className="text-gray-900 hover:text-gray-900">46-53</a></sup></h3>
                    </motion.div>
                    
                    {/* Morning Briefings & Energy Budgets */}
                    <motion.div 
                      className="mb-8"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
                      viewport={{ once: true, margin: "-100px" }}
                    >
                      <motion.div 
                        className="bg-white/70 rounded-xl p-6 border border-blue-100"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
                        viewport={{ once: true, margin: "-100px" }}
                      >
                        <div className="flex items-center mb-4">
                          <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                            <svg className="w-5 h-5 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          </div>
                          <h4 className="text-xl font-semibold text-gray-900">Morning Briefings & Energy Budgets</h4>
                        </div>
                        <p className="text-lg text-gray-900 mb-6">
                          AI provides personalized morning briefings analyzing calendar events, task lists, and usage patterns to create daily energy budgets.
                        </p>
                        <div className="grid md:grid-cols-2 gap-6">
                          <motion.div 
                            className="bg-blue-50 rounded-lg p-6 border border-blue-200"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 1.0, ease: "easeOut" }}
                            viewport={{ once: true, margin: "-100px" }}
                          >
                            <div className="flex items-center mb-3">
                              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                                <svg className="w-5 h-5 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                                </svg>
                              </div>
                              <h5 className="text-lg font-semibold text-gray-900">Calendar Analysis</h5>
                            </div>
                            <p className="text-lg text-gray-900">Reviews upcoming meetings and events to predict power needs</p>
                          </motion.div>
                          <motion.div 
                            className="bg-blue-50 rounded-lg p-6 border border-blue-200"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 1.2, ease: "easeOut" }}
                            viewport={{ once: true, margin: "-100px" }}
                          >
                            <div className="flex items-center mb-3">
                              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                                <svg className="w-5 h-5 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                </svg>
                              </div>
                              <h5 className="text-lg font-semibold text-gray-900">Personalized Budgets</h5>
                            </div>
                            <p className="text-lg text-gray-900">Creates daily energy allocation plans based on individual patterns</p>
                          </motion.div>
                        </div>
                      </motion.div>
                    </motion.div>
                      
                    {/* Real-Time Task Routing */}
                    <motion.div 
                      className="mb-8"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 1.4, ease: "easeOut" }}
                      viewport={{ once: true, margin: "-100px" }}
                    >
                      <motion.div 
                        className="bg-white/70 rounded-xl p-6 border border-green-100"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 1.6, ease: "easeOut" }}
                        viewport={{ once: true, margin: "-100px" }}
                      >
                        <div className="flex items-center mb-4">
                          <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-3">
                            <svg className="w-5 h-5 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                          </div>
                          <h4 className="text-xl font-semibold text-gray-900">Real-Time Task Routing</h4>
                        </div>
                        <p className="text-lg text-gray-900 mb-6">
                          Intelligent routing system that automatically directs tasks to the most appropriate device based on power consumption and efficiency.
                        </p>
                    <div className="grid md:grid-cols-2 gap-8">
                          <div className="space-y-4">
                            <motion.div 
                              className="bg-green-50 rounded-lg p-6 border border-green-200"
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.6, delay: 1.8, ease: "easeOut" }}
                              viewport={{ once: true, margin: "-100px" }}
                            >
                              <div className="flex items-center mb-3">
                                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                                  <svg className="w-5 h-5 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                  </svg>
                                </div>
                                <h5 className="text-lg font-semibold text-gray-900">AR Glasses Tasks</h5>
                              </div>
                              <p className="text-lg text-gray-900">"Email review: 15min, 3% battery" - lightweight, mobile-friendly</p>
                            </motion.div>
                            <motion.div 
                              className="bg-red-50 rounded-lg p-6 border border-red-200"
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.6, delay: 2.0, ease: "easeOut" }}
                              viewport={{ once: true, margin: "-100px" }}
                            >
                              <div className="flex items-center mb-3">
                                <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mr-3">
                                  <svg className="w-5 h-5 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                  </svg>
                                </div>
                                <h5 className="text-lg font-semibold text-gray-900">Computer Tasks</h5>
                              </div>
                              <p className="text-lg text-gray-900">"Excel analysis: 25% battery" - power-intensive, better on external device</p>
                            </motion.div>
                          </div>
                          <div className="space-y-4">
                            <motion.div 
                              className="bg-green-50 rounded-lg p-6 border border-green-200"
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.6, delay: 2.2, ease: "easeOut" }}
                              viewport={{ once: true, margin: "-100px" }}
                            >
                              <div className="flex items-center mb-3">
                                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                                  <svg className="w-5 h-5 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                                  </svg>
                                </div>
                                <h5 className="text-lg font-semibold text-gray-900">Adaptive Distribution</h5>
                              </div>
                              <p className="text-lg text-gray-900">Automatically adjusts based on remaining capacity and scheduled activities</p>
                            </motion.div>
                            <motion.div 
                              className="bg-green-50 rounded-lg p-6 border border-green-200"
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.6, delay: 2.4, ease: "easeOut" }}
                              viewport={{ once: true, margin: "-100px" }}
                            >
                              <div className="flex items-center mb-3">
                                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                                  <svg className="w-5 h-5 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                  </svg>
                                </div>
                                <h5 className="text-lg font-semibold text-gray-900">Environmental Adaptation</h5>
                              </div>
                              <p className="text-lg text-gray-900">Factors in temperature, connectivity, and other environmental conditions</p>
                            </motion.div>
                          </div>
                        </div>
                      </motion.div>
                    </motion.div>

                    {/* Long-Term Battery Health */}
                    <motion.div 
                      className="mb-8"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 2.6, ease: "easeOut" }}
                      viewport={{ once: true, margin: "-100px" }}
                    >
                      <motion.div 
                        className="bg-white/70 rounded-xl p-6 border border-purple-100"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 2.8, ease: "easeOut" }}
                        viewport={{ once: true, margin: "-100px" }}
                      >
                        <div className="flex items-center mb-4">
                          <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                            <svg className="w-5 h-5 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          </div>
                          <h4 className="text-xl font-semibold text-gray-900">Long-Term Battery Health & Optimization</h4>
                        </div>
                        <p className="text-lg text-gray-900 mb-6">
                          Advanced system monitoring that extends beyond daily planning to optimize long-term battery health and lifespan.
                        </p>
                        <div className="grid md:grid-cols-3 gap-6">
                          <motion.div 
                            className="bg-purple-50 rounded-lg p-6 border border-purple-200"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 3.0, ease: "easeOut" }}
                            viewport={{ once: true, margin: "-100px" }}
                          >
                            <div className="flex items-center mb-3">
                              <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                                <svg className="w-5 h-5 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                </svg>
                              </div>
                              <h5 className="text-lg font-semibold text-gray-900">Health Monitoring</h5>
                            </div>
                            <p className="text-lg text-gray-900">Tracks long-term battery health patterns and degradation</p>
                          </motion.div>
                          <motion.div 
                            className="bg-purple-50 rounded-lg p-6 border border-purple-200"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 3.2, ease: "easeOut" }}
                            viewport={{ once: true, margin: "-100px" }}
                          >
                            <div className="flex items-center mb-3">
                              <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                                <svg className="w-5 h-5 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                              </div>
                              <h5 className="text-lg font-semibold text-gray-900">Optimal Charging</h5>
                            </div>
                            <p className="text-lg text-gray-900">Suggests charging routines to extend battery lifespan</p>
                          </motion.div>
                          <motion.div 
                            className="bg-purple-50 rounded-lg p-6 border border-purple-200"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 3.4, ease: "easeOut" }}
                            viewport={{ once: true, margin: "-100px" }}
                          >
                            <div className="flex items-center mb-3">
                              <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                                <svg className="w-5 h-5 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                              </div>
                              <h5 className="text-lg font-semibold text-gray-900">Team Coordination</h5>
                            </div>
                            <p className="text-lg text-gray-900">Collaborative battery management for continuous team coverage</p>
                          </motion.div>
                        </div>
                      </motion.div>
                    </motion.div>
                      
                    {/* Intelligent Daily Companion */}
                    <motion.div 
                      className="mb-8"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 3.6, ease: "easeOut" }}
                      viewport={{ once: true, margin: "-100px" }}
                    >
                      <motion.div 
                        className="bg-white/70 rounded-xl p-6 border border-orange-100"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 3.8, ease: "easeOut" }}
                        viewport={{ once: true, margin: "-100px" }}
                      >
                        <div className="flex items-center mb-4">
                          <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center mr-3">
                            <svg className="w-5 h-5 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                            </svg>
                          </div>
                          <h4 className="text-xl font-semibold text-gray-900">Intelligent Daily Companion</h4>
                        </div>
                        <p className="text-lg text-gray-900 mb-6">
                          The AI evolves from reactive monitoring to proactive workflow optimization, transforming AR glasses into intelligent daily companions.
                        </p>
                        <div className="grid md:grid-cols-2 gap-8">
                          <motion.div 
                            className="bg-orange-50 rounded-lg p-6 border border-orange-200"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 4.0, ease: "easeOut" }}
                            viewport={{ once: true, margin: "-100px" }}
                          >
                            <div className="flex items-center mb-4">
                              <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center mr-3">
                                <svg className="w-5 h-5 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                </svg>
                      </div>
                              <h5 className="text-lg font-semibold text-gray-900">Learning & Prediction</h5>
                            </div>
                            <ul className="text-lg text-gray-900 space-y-2">
                              <li>Learns individual work patterns</li>
                              <li>Predicts power needs with high accuracy</li>
                              <li>Adapts to changing usage habits</li>
                            </ul>
                          </motion.div>
                          <motion.div 
                            className="bg-green-50 rounded-lg p-6 border border-green-200"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 4.2, ease: "easeOut" }}
                            viewport={{ once: true, margin: "-100px" }}
                          >
                            <div className="flex items-center mb-4">
                              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                                <svg className="w-5 h-5 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                              </div>
                              <h5 className="text-lg font-semibold text-gray-900">Seamless Coordination</h5>
                            </div>
                            <ul className="text-lg text-gray-900 space-y-2">
                              <li>Coordinates task distribution between devices</li>
                              <li>Prevents unexpected battery depletion</li>
                              <li>Maximizes AR hardware utility</li>
                            </ul>
                          </motion.div>
                        </div>
                      </motion.div>
                    </motion.div>
                  </motion.div>

                  {/* Path 3: AR-to-Computer Communication - Section A: Foundation & Architecture */}
                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-200 mb-8">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center text-xl font-bold mr-4">3A</div>
                      <h3 className="text-2xl font-bold text-gray-900">AR-to-Computer Communication: Foundation & Architecture<sup><a href="/references-future-of-ergonomic-work-white-paper" className="text-gray-900 hover:text-gray-900">54-61</a></sup></h3>
                    </div>
                    {/* Vision Statement */}
                    <div className="mb-8 p-6 bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-purple-500/10 rounded-xl border border-blue-200">
                      <p className="text-lg text-gray-900 italic text-center font-medium">
                        "Transform AR glasses into intelligent remote interfaces that provide desktop-class computational power while maintaining mobility and hands-free advantages."
                        </p>
                      </div>

                    {/* The Instructional Tool Concept */}
                    <motion.div 
                      className="mb-8"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                      viewport={{ once: true, margin: "-100px" }}
                    >
                      <motion.div 
                        className="bg-white/70 rounded-xl p-6 border border-blue-100"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                        viewport={{ once: true, margin: "-100px" }}
                      >
                        <div className="flex items-center mb-4">
                          <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                            <svg className="w-5 h-5 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                            </svg>
                          </div>
                          <h4 className="text-xl font-semibold text-gray-900">The Instructional Tool Concept</h4>
                        </div>
                        <p className="text-lg text-gray-900 mb-6">
                          While AR glasses aren't designed for heavy computation, they can serve as intelligent instructional tools that leverage more powerful external devices.
                        </p>
                        <div className="grid md:grid-cols-2 gap-6">
                          <motion.div 
                            className="bg-blue-50 rounded-lg p-6 border border-blue-200"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
                            viewport={{ once: true, margin: "-100px" }}
                          >
                            <div className="flex items-center mb-3">
                              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                                <svg className="w-5 h-5 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                </svg>
                      </div>
                              <h5 className="text-lg font-semibold text-gray-900">Send Instructions</h5>
                            </div>
                            <p className="text-lg text-gray-900">Leverage AI coding agents and powerful external devices for complex tasks</p>
                          </motion.div>
                          <motion.div 
                            className="bg-blue-50 rounded-lg p-6 border border-blue-200"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
                            viewport={{ once: true, margin: "-100px" }}
                          >
                            <div className="flex items-center mb-3">
                              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                                <svg className="w-5 h-5 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                </svg>
                              </div>
                              <h5 className="text-lg font-semibold text-gray-900">Review & Iterate</h5>
                            </div>
                            <p className="text-lg text-gray-900">Review results and iterate on tasks away from a computer</p>
                          </motion.div>
                        </div>
                      </motion.div>
                    </motion.div>
                    
                    {/* Ultra-Low Latency Communication */}
                    <motion.div 
                      className="mb-8"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 1.0, ease: "easeOut" }}
                      viewport={{ once: true, margin: "-100px" }}
                    >
                      <motion.div 
                        className="bg-white/70 rounded-xl p-6 border border-green-100"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 1.2, ease: "easeOut" }}
                        viewport={{ once: true, margin: "-100px" }}
                      >
                        <div className="flex items-center mb-4">
                          <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-3">
                            <svg className="w-5 h-5 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                          </div>
                          <h4 className="text-xl font-semibold text-gray-900">Ultra-Low Latency Communication</h4>
                        </div>
                        <p className="text-lg text-gray-900 mb-6">
                          The foundation requires ultra-low latency protocols for real-time task offloading and result streaming.
                        </p>
                        <div className="grid md:grid-cols-3 gap-6">
                          <motion.div 
                            className="bg-green-50 rounded-lg p-6 border border-green-200"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 1.4, ease: "easeOut" }}
                            viewport={{ once: true, margin: "-100px" }}
                          >
                            <div className="flex items-center mb-3">
                              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                                <svg className="w-5 h-5 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                              </div>
                              <h5 className="text-lg font-semibold text-gray-900">&lt;50ms Latency</h5>
                            </div>
                            <p className="text-lg text-gray-900">End-to-end latencies using optimized wireless protocols</p>
                          </motion.div>
                          <motion.div 
                            className="bg-green-50 rounded-lg p-6 border border-green-200"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 1.6, ease: "easeOut" }}
                            viewport={{ once: true, margin: "-100px" }}
                          >
                            <div className="flex items-center mb-3">
                              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                                <svg className="w-5 h-5 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                                </svg>
                              </div>
                              <h5 className="text-lg font-semibold text-gray-900">JPEG Compression</h5>
                            </div>
                            <p className="text-lg text-gray-900">Optimized compression and dedicated network channels</p>
                          </motion.div>
                          <motion.div 
                            className="bg-green-50 rounded-lg p-6 border border-green-200"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 1.8, ease: "easeOut" }}
                            viewport={{ once: true, margin: "-100px" }}
                          >
                            <div className="flex items-center mb-3">
                              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                                <svg className="w-5 h-5 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
                                </svg>
                              </div>
                              <h5 className="text-lg font-semibold text-gray-900">Custom Protocols</h5>
                            </div>
                            <p className="text-lg text-gray-900">Specialized protocols designed for AR workload distribution</p>
                          </motion.div>
                        </div>
                      </motion.div>
                    </motion.div>
                      
                    {/* Advanced Communication Protocols */}
                    <motion.div 
                      className="mb-8"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 2.0, ease: "easeOut" }}
                      viewport={{ once: true, margin: "-100px" }}
                    >
                      <motion.div 
                        className="bg-white/70 rounded-xl p-6 border border-purple-100"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 2.2, ease: "easeOut" }}
                        viewport={{ once: true, margin: "-100px" }}
                      >
                        <div className="flex items-center mb-4">
                          <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                            <svg className="w-5 h-5 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
                            </svg>
                          </div>
                          <h4 className="text-xl font-semibold text-gray-900">Advanced Communication Protocols</h4>
                        </div>
                        <p className="text-lg text-gray-900 mb-6">
                          Multiple communication technologies work together to enable seamless AR-to-computer communication.
                        </p>
                        <div className="grid md:grid-cols-3 gap-6">
                          <motion.div 
                            className="bg-purple-50 rounded-lg p-6 border border-purple-200"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 2.4, ease: "easeOut" }}
                            viewport={{ once: true, margin: "-100px" }}
                          >
                            <div className="flex items-center mb-3">
                              <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                                <svg className="w-5 h-5 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                </svg>
                      </div>
                              <h5 className="text-lg font-semibold text-gray-900">5G/WiFi 6E</h5>
                            </div>
                            <p className="text-lg text-gray-900">High-bandwidth connections for complex data transfer</p>
                          </motion.div>
                          <motion.div 
                            className="bg-purple-50 rounded-lg p-6 border border-purple-200"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 2.6, ease: "easeOut" }}
                            viewport={{ once: true, margin: "-100px" }}
                          >
                            <div className="flex items-center mb-3">
                              <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                                <svg className="w-5 h-5 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                </svg>
                              </div>
                              <h5 className="text-lg font-semibold text-gray-900">WebRTC</h5>
                            </div>
                            <p className="text-lg text-gray-900">Real-time data streaming for immediate results</p>
                          </motion.div>
                          <motion.div 
                            className="bg-purple-50 rounded-lg p-6 border border-purple-200"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 2.8, ease: "easeOut" }}
                            viewport={{ once: true, margin: "-100px" }}
                          >
                            <div className="flex items-center mb-3">
                              <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                                <svg className="w-5 h-5 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                              </div>
                              <h5 className="text-lg font-semibold text-gray-900">Custom AR Protocols</h5>
                            </div>
                            <p className="text-lg text-gray-900">Specialized protocols for AR workload distribution</p>
                          </motion.div>
                        </div>
                      </motion.div>
                    </motion.div>
                      
                    {/* Voice-Driven Workflow Integration */}
                    <motion.div 
                      className="mb-8"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 3.0, ease: "easeOut" }}
                      viewport={{ once: true, margin: "-100px" }}
                    >
                      <motion.div 
                        className="bg-white/70 rounded-xl p-6 border border-orange-100"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 3.2, ease: "easeOut" }}
                        viewport={{ once: true, margin: "-100px" }}
                      >
                        <div className="flex items-center mb-4">
                          <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center mr-3">
                            <svg className="w-5 h-5 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                            </svg>
                          </div>
                          <h4 className="text-xl font-semibold text-gray-900">Voice-Driven Workflow Integration</h4>
                        </div>
                        <p className="text-lg text-gray-900 mb-6">
                          Voice becomes the primary interface for initiating complex tasks and managing sophisticated computational processes.
                        </p>
                        <div className="grid md:grid-cols-2 gap-8">
                          <div className="space-y-4">
                            <motion.div 
                              className="bg-orange-50 rounded-lg p-6 border border-orange-200"
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.6, delay: 3.4, ease: "easeOut" }}
                              viewport={{ once: true, margin: "-100px" }}
                            >
                              <div className="flex items-center mb-3">
                                <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center mr-3">
                                  <svg className="w-5 h-5 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                  </svg>
                      </div>
                                <h5 className="text-lg font-semibold text-gray-900">Example Commands</h5>
                              </div>
                              <ul className="text-lg text-gray-900 space-y-2">
                                <li>"Hey computer, run a Cursor analysis on this code"</li>
                                <li>"Analyze this spreadsheet for trends"</li>
                                <li>"Generate three design variations of this 3D model"</li>
                                <li>"Run security analysis on the current codebase"</li>
                              </ul>
                            </motion.div>
                          </div>
                          <div className="space-y-4">
                            <motion.div 
                              className="bg-orange-50 rounded-lg p-6 border border-orange-200"
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.6, delay: 3.6, ease: "easeOut" }}
                              viewport={{ once: true, margin: "-100px" }}
                            >
                              <div className="flex items-center mb-3">
                                <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center mr-3">
                                  <svg className="w-5 h-5 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                  </svg>
                                </div>
                                <h5 className="text-lg font-semibold text-gray-900">Productivity Integration</h5>
                              </div>
                              <p className="text-lg text-gray-900">Integrates with Cursor, IDEs, data analysis software, and development environments</p>
                            </motion.div>
                            <motion.div 
                              className="bg-orange-50 rounded-lg p-6 border border-orange-200"
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.6, delay: 3.8, ease: "easeOut" }}
                              viewport={{ once: true, margin: "-100px" }}
                            >
                              <div className="flex items-center mb-3">
                                <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center mr-3">
                                  <svg className="w-5 h-5 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                  </svg>
                                </div>
                                <h5 className="text-lg font-semibold text-gray-900">Spatial Results</h5>
                              </div>
                              <p className="text-lg text-gray-900">Results streamed back in spatial formats optimized for user's context and visual field</p>
                            </motion.div>
                          </div>
                        </div>
                      </motion.div>
                    </motion.div>
                  </div>

                  {/* Path 3: AR-to-Computer Communication - Section B: Advanced Optimization */}
                  <div className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-2xl p-8 border border-indigo-200 mb-8">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-indigo-500 text-white rounded-full flex items-center justify-center text-xl font-bold mr-4">3B</div>
                      <h3 className="text-2xl font-bold text-gray-900">AR-to-Computer Communication: Advanced Optimization<sup><a href="/references-future-of-ergonomic-work-white-paper" className="text-gray-900 hover:text-gray-900">54-61</a></sup></h3>
                    </div>
                    
                    {/* Vision Statement */}
                    <div className="mb-8 p-6 bg-gradient-to-r from-indigo-500/10 via-blue-500/10 to-purple-500/10 rounded-xl border border-indigo-200">
                      <p className="text-lg text-gray-900 italic text-center font-medium">
                        "Transform AR glasses into sophisticated remote interfaces that provide desktop-class computing power while maintaining mobility and hands-free advantages."
                        </p>
                      </div>
                      
                    {/* Intelligent Edge Client */}
                    <motion.div 
                      className="mb-8"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                      viewport={{ once: true, margin: "-100px" }}
                    >
                      <motion.div 
                        className="bg-white/70 rounded-xl p-6 border border-blue-100"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                        viewport={{ once: true, margin: "-100px" }}
                      >
                        <div className="flex items-center mb-4">
                          <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                            <svg className="w-5 h-5 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                            </svg>
                          </div>
                          <h4 className="text-xl font-semibold text-gray-900">Intelligent Edge Client</h4>
                        </div>
                        <p className="text-gray-900 mb-4">
                          The AR device functions as an intelligent edge client that dynamically assesses computational requirements and routes tasks appropriately.
                        </p>
                        <div className="grid md:grid-cols-3 gap-4">
                          <motion.div 
                            className="bg-blue-50 rounded-lg p-4 border border-blue-200"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
                            viewport={{ once: true, margin: "-100px" }}
                          >
                            <div className="flex items-center mb-2">
                              <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-2">
                                <svg className="w-3 h-3 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                </svg>
                      </div>
                              <h5 className="font-semibold text-gray-900 text-base">Dynamic Assessment</h5>
                    </div>
                            <p className="text-base text-gray-900">Evaluates computational requirements in real-time</p>
                          </motion.div>
                          <motion.div 
                            className="bg-blue-50 rounded-lg p-4 border border-blue-200"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
                            viewport={{ once: true, margin: "-100px" }}
                          >
                            <div className="flex items-center mb-2">
                              <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-2">
                                <svg className="w-3 h-3 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                              </div>
                              <h5 className="font-semibold text-gray-900 text-base">Smart Routing</h5>
                            </div>
                            <p className="text-base text-gray-900">Routes tasks between local and remote processing</p>
                          </motion.div>
                          <motion.div 
                            className="bg-blue-50 rounded-lg p-4 border border-blue-200"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 1.0, ease: "easeOut" }}
                            viewport={{ once: true, margin: "-100px" }}
                          >
                            <div className="flex items-center mb-2">
                              <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-2">
                                <svg className="w-3 h-3 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                              </div>
                              <h5 className="font-semibold text-gray-900 text-base">Real-Time Performance</h5>
                            </div>
                            <p className="text-base text-gray-900">Maintains performance while offloading demanding algorithms</p>
                          </motion.div>
                        </div>
                      </motion.div>
                    </motion.div>

                    {/* Adaptive Reverse Task Offloading */}
                    <motion.div 
                      className="mb-8"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 1.2, ease: "easeOut" }}
                      viewport={{ once: true, margin: "-100px" }}
                    >
                      <motion.div 
                        className="bg-white/70 rounded-xl p-6 border border-green-100"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 1.4, ease: "easeOut" }}
                        viewport={{ once: true, margin: "-100px" }}
                      >
                        <div className="flex items-center mb-4">
                          <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-3">
                            <svg className="w-5 h-5 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                            </svg>
                          </div>
                          <h4 className="text-xl font-semibold text-gray-900">Adaptive Reverse Task Offloading</h4>
                        </div>
                        <p className="text-gray-900 mb-4">
                          The computer automatically splits complex operations into optimized subtasks and executes them using desktop-class hardware.
                        </p>
                        <div className="grid md:grid-cols-2 gap-6">
                          <div className="space-y-3">
                            <motion.div 
                              className="bg-green-50 rounded-lg p-4 border border-green-200"
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.6, delay: 1.6, ease: "easeOut" }}
                              viewport={{ once: true, margin: "-100px" }}
                            >
                              <div className="flex items-center mb-2">
                                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-2">
                                  <svg className="w-3 h-3 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                  </svg>
                                </div>
                                <h5 className="font-semibold text-gray-900 text-base">Code Analysis</h5>
                              </div>
                              <p className="text-base text-gray-900">Running Cursor for code analysis and optimization</p>
                            </motion.div>
                            <motion.div 
                              className="bg-green-50 rounded-lg p-4 border border-green-200"
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.6, delay: 1.8, ease: "easeOut" }}
                              viewport={{ once: true, margin: "-100px" }}
                            >
                              <div className="flex items-center mb-2">
                                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-2">
                                  <svg className="w-3 h-3 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                  </svg>
                                </div>
                                <h5 className="font-semibold text-gray-900 text-base">Data Processing</h5>
                              </div>
                              <p className="text-base text-gray-900">Processing large datasets and complex calculations</p>
                            </motion.div>
                          </div>
                          <div className="space-y-3">
                            <motion.div 
                              className="bg-green-50 rounded-lg p-4 border border-green-200"
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.6, delay: 2.0, ease: "easeOut" }}
                              viewport={{ once: true, margin: "-100px" }}
                            >
                              <div className="flex items-center mb-2">
                                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-2">
                                  <svg className="w-3 h-3 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                                  </svg>
                                </div>
                                <h5 className="font-semibold text-gray-900 text-base">3D Rendering</h5>
                              </div>
                              <p className="text-base text-gray-900">Rendering complex 3D models and visualizations</p>
                            </motion.div>
                            <motion.div 
                              className="bg-green-50 rounded-lg p-4 border border-green-200"
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.6, delay: 2.2, ease: "easeOut" }}
                              viewport={{ once: true, margin: "-100px" }}
                            >
                              <div className="flex items-center mb-2">
                                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-2">
                                  <svg className="w-3 h-3 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                  </svg>
                                </div>
                                <h5 className="font-semibold text-gray-900 text-base">Spatial Display</h5>
                              </div>
                              <p className="text-base text-gray-900">Results optimized for spatial display in AR</p>
                            </motion.div>
                          </div>
                        </div>
                      </motion.div>
                    </motion.div>

                    {/* Network Optimization Techniques */}
                    <motion.div 
                      className="mb-8"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 2.4, ease: "easeOut" }}
                      viewport={{ once: true, margin: "-100px" }}
                    >
                      <motion.div 
                        className="bg-white/70 rounded-xl p-6 border border-purple-100"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 2.6, ease: "easeOut" }}
                        viewport={{ once: true, margin: "-100px" }}
                      >
                        <div className="flex items-center mb-4">
                          <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                            <svg className="w-5 h-5 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
                            </svg>
                          </div>
                          <h4 className="text-xl font-semibold text-gray-900">Network Optimization Techniques</h4>
                        </div>
                        <p className="text-gray-900 mb-4">
                          Sophisticated network optimization techniques minimize latency while maximizing reliability for mobile users.
                        </p>
                        <div className="grid md:grid-cols-3 gap-4">
                          <motion.div 
                            className="bg-purple-50 rounded-lg p-4 border border-purple-200"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 2.8, ease: "easeOut" }}
                            viewport={{ once: true, margin: "-100px" }}
                          >
                            <div className="flex items-center mb-2">
                              <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center mr-2">
                                <svg className="w-3 h-3 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                              </div>
                              <h5 className="font-semibold text-gray-900 text-base">Smart Routing</h5>
                            </div>
                            <p className="text-base text-gray-900">Intelligent routing protocols for optimal data paths</p>
                          </motion.div>
                          <motion.div 
                            className="bg-purple-50 rounded-lg p-4 border border-purple-200"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 3.0, ease: "easeOut" }}
                            viewport={{ once: true, margin: "-100px" }}
                          >
                            <div className="flex items-center mb-2">
                              <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center mr-2">
                                <svg className="w-3 h-3 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                                </svg>
                              </div>
                              <h5 className="font-semibold text-gray-900 text-base">Adaptive Compression</h5>
                            </div>
                            <p className="text-base text-gray-900">Dynamic compression algorithms based on bandwidth</p>
                          </motion.div>
                          <motion.div 
                            className="bg-purple-50 rounded-lg p-4 border border-purple-200"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 3.2, ease: "easeOut" }}
                            viewport={{ once: true, margin: "-100px" }}
                          >
                            <div className="flex items-center mb-2">
                              <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center mr-2">
                                <svg className="w-3 h-3 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h1.586a1 1 0 01.707.293l1.414 1.414a1 1 0 00.707.293h11.172a1 1 0 01.707.293l1.414 1.414a1 1 0 00.707.293H19a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                                </svg>
                              </div>
                              <h5 className="font-semibold text-gray-900 text-base">Predictive Caching</h5>
                            </div>
                            <p className="text-base text-gray-900">Pre-loading likely results for faster access</p>
                          </motion.div>
                        </div>
                      </motion.div>
                    </motion.div>

                    {/* Advanced Processing Techniques */}
                    <motion.div 
                      className="mb-8"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 3.4, ease: "easeOut" }}
                      viewport={{ once: true, margin: "-100px" }}
                    >
                      <motion.div 
                        className="bg-white/70 rounded-xl p-6 border border-orange-100"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 3.6, ease: "easeOut" }}
                        viewport={{ once: true, margin: "-100px" }}
                      >
                        <div className="flex items-center mb-4">
                          <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center mr-3">
                            <svg className="w-5 h-5 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                            </svg>
                          </div>
                          <h4 className="text-xl font-semibold text-gray-900">Advanced Processing Techniques</h4>
                        </div>
                        <p className="text-lg text-gray-900 mb-6">
                          Edge computing principles process latency-critical functions locally while offloading intensive tasks to remote computers.
                        </p>
                        <div className="grid md:grid-cols-2 gap-8">
                          <div className="space-y-4">
                            <motion.div 
                              className="bg-orange-50 rounded-lg p-6 border border-orange-200"
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.6, delay: 3.8, ease: "easeOut" }}
                              viewport={{ once: true, margin: "-100px" }}
                            >
                              <div className="flex items-center mb-3">
                                <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center mr-3">
                                  <svg className="w-5 h-5 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                  </svg>
                                </div>
                                <h5 className="text-lg font-semibold text-gray-900">Foveated Streaming</h5>
                              </div>
                              <p className="text-lg text-gray-900">High-quality data only where the user is looking</p>
                            </motion.div>
                            <motion.div 
                              className="bg-orange-50 rounded-lg p-6 border border-orange-200"
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.6, delay: 4.0, ease: "easeOut" }}
                              viewport={{ once: true, margin: "-100px" }}
                            >
                              <div className="flex items-center mb-3">
                                <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center mr-3">
                                  <svg className="w-5 h-5 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                  </svg>
                                </div>
                                <h5 className="text-lg font-semibold text-gray-900">Predictive Pre-loading</h5>
                              </div>
                              <p className="text-lg text-gray-900">Pre-loading likely results for faster response times</p>
                            </motion.div>
                          </div>
                          <div className="space-y-4">
                            <motion.div 
                              className="bg-orange-50 rounded-lg p-6 border border-orange-200"
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.6, delay: 4.2, ease: "easeOut" }}
                              viewport={{ once: true, margin: "-100px" }}
                            >
                              <div className="flex items-center mb-3">
                                <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center mr-3">
                                  <svg className="w-5 h-5 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                  </svg>
                                </div>
                                <h5 className="text-lg font-semibold text-gray-900">Failover Strategies</h5>
                              </div>
                              <p className="text-lg text-gray-900">Maintaining productivity during connectivity disruptions</p>
                            </motion.div>
                            <motion.div 
                              className="bg-orange-50 rounded-lg p-6 border border-orange-200"
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.6, delay: 4.4, ease: "easeOut" }}
                              viewport={{ once: true, margin: "-100px" }}
                            >
                              <div className="flex items-center mb-3">
                                <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center mr-3">
                                  <svg className="w-5 h-5 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                  </svg>
                                </div>
                                <h5 className="text-lg font-semibold text-gray-900">Network Intelligence</h5>
                              </div>
                              <p className="text-lg text-gray-900">Automatic optimization of connection protocols and compression</p>
                            </motion.div>
                          </div>
                        </div>
                      </motion.div>
                    </motion.div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-blue-100 to-cyan-100 rounded-xl p-6 border border-blue-200 mt-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">The Path Forward</h3>
                  <p className="text-lg text-gray-900 mb-4">
                    These three development paths represent the most critical opportunities for transforming AR glasses from entertainment devices into powerful productivity tools. Each path addresses fundamental limitations that currently prevent AR glasses from serving as viable replacements for desk-bound work, while building on existing technological foundations and market momentum. The convergence of these three approaches—AR-native browsing, AI-powered planning, and robust computer communication—could finally deliver the desk-free productivity future that has been promised but not yet realized.
                  </p>
                </div>

              </div>
            </div>
          </section>

          {/* Visual Section Break */}
          <div className="flex items-center justify-center my-16">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
            <div className="mx-8 px-4 py-2 bg-white rounded-full border border-gray-200 shadow-sm">
              <span className="text-base font-medium text-gray-900">Conclusion</span>
            </div>
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
          </div>

          {/* Conclusion Section */}
          <section id="conclusion" className="mb-24">
            <div className="bg-white rounded-2xl shadow-xl border border-[#A5DAD8]/30 p-10 mb-12">
              <div className="text-center mb-12">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-teal-100 text-teal-600 text-base font-medium mb-6">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Wrap up
                </div>
              </div>

              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-gray-900 mb-6">
                  We hope this comprehensive analysis has provided you with a clear understanding of the dire need to break free from our desks to get work done and the progress we have made as a society to get there - hopefully sooner rather than later.
                </p>

                <p className="text-lg text-gray-900 mb-8">
                  At Kahana, we are obsessed with solving this problem and bringing this vision to life. We are Biomedical Engineering graduates who left our full-time corporate jobs to dedicate years of our lives to serve this goal. We built Oasis, our voice-first browser, to make information access and organization more ergonomic, and hopefully pave the way for what AR-native browsing can be.
                </p>

                <div className="bg-gradient-to-r from-[#66C2BE]/10 to-[#8CB7D0]/10 rounded-2xl p-8 border border-[#A5DAD8]/30">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Kahana's Commitment</h3>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">Our Mission</h4>
                      <p className="text-gray-900 mb-4">
                        We are hungry to contribute to the ongoing R&D and progress being made in AR technology, and we hope to have the opportunity to be at the forefront of ushering this vision into the world.
                      </p>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">Our Solution</h4>
                      <p className="text-gray-900 mb-4">
                        Oasis, our voice-first browser, represents our first step toward creating more ergonomic, efficient work environments that free people from the constraints of traditional desk-bound productivity.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="text-center mt-12">
                  <p className="text-xl text-gray-900 font-medium mb-8">
                    The future of work is not about better desks—it's about breaking free from desks altogether.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a
                      href="/references-future-of-ergonomic-work-white-paper"
                      className="inline-flex items-center px-8 py-4 bg-[#66C2BE] font-semibold rounded-lg hover:bg-[#4A9E9A] transition-colors duration-300 text-white"
                      style={{color: 'white'}}
                    >
                      <svg className="w-6 h-6 mr-3" fill="none" stroke="white" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      <span style={{color: 'white'}}>View All References</span>
                    </a>
                    <Link
                      href="/contact"
                      className="inline-flex items-center px-8 py-4 border border-[#66C2BE] text-[#66C2BE] font-semibold rounded-lg hover:bg-[#66C2BE] hover:text-white transition-colors duration-300"
                    >
                      <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                      Get in Touch
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Related Resources */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Related Resources</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Link
                href="/blog"
                className="group bg-white rounded-xl border border-[#A5DAD8]/30 p-6 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#66C2BE]/10 to-[#8CB7D0]/10 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-[#66C2BE]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-[#66C2BE] transition-colors">
                    Latest Blog Posts
                  </h3>
                </div>
                <p className="text-gray-900">
                  Read our latest insights on browser technology, productivity, and workplace innovation.
                </p>
              </Link>

              <Link
                href="/docs"
                className="group bg-white rounded-xl border border-[#A5DAD8]/30 p-6 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#66C2BE]/10 to-[#8CB7D0]/10 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-[#66C2BE]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-[#66C2BE] transition-colors">
                    Documentation
                  </h3>
                </div>
                <p className="text-gray-900">
                  Comprehensive guides and technical documentation for Kahana Browser.
                </p>
              </Link>

              <Link
                href="/resources"
                className="group bg-white rounded-xl border border-[#A5DAD8]/30 p-6 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#66C2BE]/10 to-[#8CB7D0]/10 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-[#66C2BE]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-[#66C2BE] transition-colors">
                    All Resources
                  </h3>
                </div>
                <p className="text-gray-900">
                  Explore our complete collection of guides, tools, and resources.
                </p>
              </Link>
            </div>
          </div>

          {/* Health Survey CTA Section */}
          <div className="bg-green-100 rounded-2xl p-8 mb-16">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-black mb-4">
                Help Shape the Future of Workplace Health
              </h3>
              <p className="text-black/80 mb-6 max-w-2xl mx-auto">
                Your insights about workplace health challenges are crucial for our research. 
                Take our anonymous 5-minute survey to help us develop better ergonomic solutions.
              </p>
              <a 
                href="/kahana-health-survey" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center bg-[#21706c] text-white font-bold px-8 py-4 rounded-lg hover:bg-[#15514f] transition-colors duration-300 shadow-lg"
                style={{ color: 'white' }}
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="white" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span style={{ color: 'white' }}>Take Health Survey</span>
                <svg className="w-4 h-4 ml-2" fill="none" stroke="white" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>

        </div>
      </main>

      <SharedCTA
        title="Questions About Our Research?"
        description="Our team is here to help you understand how our findings can benefit your organization."
        buttonText="Contact Us"
        buttonLink="/contact"
      />

      {/* Sticky Bottom Right Social Share Tab */}
      <div className="fixed bottom-4 right-4 z-50 bg-white/95 backdrop-blur-sm border border-gray-200 shadow-lg rounded-t-lg">
        <div className="px-4 py-3">
          <div className="flex items-center gap-3">
            {/* Share Label */}
            <div className="flex items-center gap-2 mr-2">
              <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
              </svg>
              <span className="text-sm text-gray-600 font-medium">Share</span>
            </div>
            {/* LinkedIn */}
            <button
              onClick={() => {
                const url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : 'https://kahana.com/white-paper-future-of-ergonomic-work')}`;
                window.open(url, '_blank', 'width=600,height=600,scrollbars=yes,resizable=yes');
              }}
              className="flex items-center justify-center w-8 h-8 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors duration-200"
              aria-label="Share on LinkedIn"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </button>

            {/* Twitter */}
            <button
              onClick={() => {
                const title = "The Future of Ergonomic Work: A White Paper";
                const url = typeof window !== 'undefined' ? window.location.href : 'https://kahana.com/white-paper-future-of-ergonomic-work';
                const twitterText = encodeURIComponent(`${title} ${url}`);
                const twitterUrl = `https://twitter.com/intent/tweet?text=${twitterText}`;
                window.open(twitterUrl, '_blank', 'width=600,height=400,scrollbars=yes,resizable=yes');
              }}
              className="flex items-center justify-center w-8 h-8 bg-blue-400 hover:bg-blue-500 text-white rounded-md transition-colors duration-200"
              aria-label="Share on Twitter"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
            </button>

            {/* Email */}
            <button
              onClick={() => {
                const title = "The Future of Ergonomic Work: A White Paper";
                const url = typeof window !== 'undefined' ? window.location.href : 'https://kahana.com/white-paper-future-of-ergonomic-work';
                const text = "Discover how AR/VR technology is revolutionizing the future of ergonomic work and productivity.";
                const subject = encodeURIComponent(title);
                const body = encodeURIComponent(`${text}\n\nRead more: ${url}`);
                const emailUrl = `mailto:?subject=${subject}&body=${body}`;
                window.open(emailUrl);
              }}
              className="flex items-center justify-center w-8 h-8 bg-gray-600 hover:bg-gray-700 text-white rounded-md transition-colors duration-200"
              aria-label="Share via Email"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </button>

            {/* SMS */}
            <button
              onClick={() => {
                const title = "The Future of Ergonomic Work: A White Paper";
                const url = typeof window !== 'undefined' ? window.location.href : 'https://kahana.com/white-paper-future-of-ergonomic-work';
                const smsText = encodeURIComponent(`${title} - ${url}`);
                const smsUrl = `sms:?body=${smsText}`;
                window.open(smsUrl);
              }}
              className="flex items-center justify-center w-8 h-8 bg-green-600 hover:bg-green-700 text-white rounded-md transition-colors duration-200"
              aria-label="Share via SMS"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </button>

            {/* Copy Link */}
            <button
              onClick={async (e) => {
                e.preventDefault();
                e.stopPropagation();
                
                const url = typeof window !== 'undefined' ? window.location.href : 'https://kahana.com/white-paper-future-of-ergonomic-work';
                const button = e.currentTarget;
                
                try {
                  // Try modern clipboard API first
                  if (navigator.clipboard && window.isSecureContext) {
                    await navigator.clipboard.writeText(url);
                    console.log('Copied to clipboard via modern API');
                  } else {
                    // Fallback for older browsers or non-secure contexts
                    const textArea = document.createElement('textarea');
                    textArea.value = url;
                    textArea.style.position = 'fixed';
                    textArea.style.left = '-999999px';
                    textArea.style.top = '-999999px';
                    textArea.style.opacity = '0';
                    document.body.appendChild(textArea);
                    textArea.focus();
                    textArea.select();
                    
                    const successful = document.execCommand('copy');
                    document.body.removeChild(textArea);
                    
                    if (!successful) {
                      throw new Error('execCommand copy failed');
                    }
                    console.log('Copied to clipboard via fallback method');
                  }
                  
                  // Show success feedback
                  const originalContent = button.innerHTML;
                  button.innerHTML = '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>';
                  button.classList.add('bg-green-600', 'hover:bg-green-700');
                  button.classList.remove('bg-gray-600', 'hover:bg-gray-700');
                  
                  // Show "Copied!" text indicator
                  const copiedIndicator = document.createElement('div');
                  copiedIndicator.textContent = 'Copied!';
                  copiedIndicator.className = 'absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded shadow-lg whitespace-nowrap z-50';
                  copiedIndicator.style.fontSize = '11px';
                  copiedIndicator.style.fontWeight = '500';
                  
                  // Position relative to button
                  button.style.position = 'relative';
                  button.appendChild(copiedIndicator);
                  
                  // Reset after 2 seconds
                  setTimeout(() => {
                    button.innerHTML = originalContent;
                    button.classList.remove('bg-green-600', 'hover:bg-green-700');
                    button.classList.add('bg-gray-600', 'hover:bg-gray-700');
                    button.style.position = '';
                  }, 2000);
                  
                } catch (err) {
                  console.error('Failed to copy text: ', err);
                  
                  // Show error feedback
                  const originalContent = button.innerHTML;
                  button.innerHTML = '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>';
                  button.classList.add('bg-red-600', 'hover:bg-red-700');
                  button.classList.remove('bg-gray-600', 'hover:bg-gray-700');
                  
                  // Reset after 2 seconds
                  setTimeout(() => {
                    button.innerHTML = originalContent;
                    button.classList.remove('bg-red-600', 'hover:bg-red-700');
                    button.classList.add('bg-gray-600', 'hover:bg-gray-700');
                  }, 2000);
                }
              }}
              className="flex items-center justify-center w-8 h-8 bg-gray-600 hover:bg-gray-700 text-white rounded-md transition-colors duration-200"
              aria-label="Copy Link to Clipboard"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}


