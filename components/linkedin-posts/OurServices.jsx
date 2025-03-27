import React, { useRef, useCallback } from 'react';
import Image from 'next/image';
import sinchanaImage from '../../assets/Sinchana.jpg';
import kahanaLogo from '../../assets/kahana_logo_wide_gray.svg';
import * as htmlToImage from 'html-to-image';

const OurServices = React.memo(function OurServices() {
  const postRef = useRef(null);

  const downloadAsJPG = useCallback(async () => {
    if (postRef.current) {
      try {
        const dataUrl = await htmlToImage.toJpeg(postRef.current, {
          quality: 0.95,
          pixelRatio: 2
        });
        
        // Create a link element and trigger download
        const link = document.createElement('a');
        link.download = 'kahana-linkedin-post.jpg';
        link.href = dataUrl;
        link.click();
      } catch (error) {
        console.error('Error generating image:', error);
      }
    }
  }, []);

  return (
    <div className="flex flex-col items-center space-y-4">
      <div 
        ref={postRef}
        className="w-[1080px] h-[1080px] bg-[#FFB800] rounded-lg relative overflow-hidden mx-auto"
      >
        {/* Enhanced Background Elements */}
        <div className="absolute inset-0">
          {/* Base gradient - rich gold */}
          <div 
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(145deg, #FFB800 0%, #FFA500 100%)'
            }}
          ></div>

          {/* Radial gradient overlay - increased contrast */}
          <div 
            className="absolute inset-0"
            style={{
              background: 'radial-gradient(circle at 70% 20%, rgba(255,255,255,0.1) 0%, rgba(0,0,0,0.2) 100%)'
            }}
          ></div>

          {/* Abstract shapes - adjusted for better contrast */}
          <div className="absolute -left-40 -top-40 w-[600px] h-[600px] rounded-full"
            style={{
              background: 'linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(0,0,0,0.1) 60%)',
              transform: 'rotate(-15deg)'
            }}
          ></div>
          
          <div className="absolute -right-20 -bottom-20 w-[500px] h-[500px]"
            style={{
              background: 'radial-gradient(circle, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0) 70%)'
            }}
          ></div>

          {/* Additional depth elements - enhanced shadows */}
          <div className="absolute left-1/4 top-1/4 w-[300px] h-[300px] rounded-full"
            style={{
              background: 'linear-gradient(45deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0) 100%)',
              filter: 'blur(40px)'
            }}
          ></div>

          <div className="absolute right-1/3 bottom-1/3 w-[400px] h-[400px]"
            style={{
              background: 'radial-gradient(circle, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0) 60%)',
              filter: 'blur(30px)'
            }}
          ></div>

          {/* Subtle texture overlay - darker pattern */}
          <div 
            className="absolute inset-0 opacity-40"
            style={{
              backgroundImage: 'linear-gradient(45deg, rgba(0,0,0,0.05) 25%, transparent 25%), linear-gradient(-45deg, rgba(0,0,0,0.05) 25%, transparent 25%)',
              backgroundSize: '60px 60px'
            }}
          ></div>
        </div>

        {/* Content */}
        <div className="relative h-full flex flex-col p-16 z-10">
          {/* Logo in top right - adjusted background for gray logo */}
          <div className="absolute top-8 right-8">
            <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg">
              <Image
                src={kahanaLogo}
                alt="Kahana Logo"
                width={120}
                height={30}
                className="w-auto h-[24px]"
              />
            </div>
          </div>

          {/* Top Content */}
          <div>
            {/* Solution indicator - more vibrant */}
            <div className="inline-block px-5 py-2 bg-black/20 backdrop-blur-sm rounded-full mb-8">
              <span className="text-white text-base font-medium tracking-wide">COMING SOON</span>
            </div>
            
            <div className="flex items-start gap-12">
              <div className="flex-1">
                <h1 className="text-7xl font-bold text-white mb-14 tracking-tight max-w-[600px] leading-[1.1] drop-shadow-lg">
                  We're Cooking
                  <br />
                  Up Something
                  <br />
                  Special
                </h1>
                
                <ul className="space-y-8 mb-12 list-none">
                  <li className="flex items-center space-x-6">
                    <div className="w-12 h-12 rounded-lg border-2 border-white/70 flex items-center justify-center backdrop-blur-sm bg-black/20">
                      <svg className="w-6 h-6 text-white/80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 6V4M12 6C10.8954 6 10 6.89543 10 8C10 9.10457 10.8954 10 12 10M12 6C13.1046 6 14 6.89543 14 8C14 9.10457 13.1046 10 12 10M6 18C6 16.8954 6.89543 16 8 16C9.10457 16 10 16.8954 10 18M6 18C6 19.1046 6.89543 20 8 20C9.10457 20 10 19.1046 10 18M6 18V16M10 18V16M18 18C18 16.8954 17.1046 16 16 16C14.8954 16 14 16.8954 14 18M18 18C18 19.1046 17.1046 20 16 20C14.8954 20 14 19.1046 14 18M18 18V16M14 18V16M12 10V12M12 20V12" 
                          stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                    </div>
                    <span className="text-2xl text-white font-medium drop-shadow">Stay Focused on Your Ideas</span>
                  </li>
                  <li className="flex items-center space-x-6">
                    <div className="w-12 h-12 rounded-lg border-2 border-white/70 flex items-center justify-center backdrop-blur-sm bg-black/20">
                      <svg className="w-6 h-6 text-white/80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17 8C17 10.7614 14.7614 13 12 13C9.23858 13 7 10.7614 7 8C7 5.23858 9.23858 3 12 3C14.7614 3 17 5.23858 17 8Z" 
                          stroke="currentColor" strokeWidth="2"/>
                        <path d="M3 21C3.95728 17.9237 6.41998 17 12 17C17.58 17 20.0427 17.9237 21 21" 
                          stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                    </div>
                    <span className="text-2xl text-white font-medium drop-shadow">Boost Your Productivity</span>
                  </li>
                  <li className="flex items-center space-x-6">
                    <div className="w-12 h-12 rounded-lg border-2 border-white/70 flex items-center justify-center backdrop-blur-sm bg-black/20">
                      <svg className="w-6 h-6 text-white/80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 4V20M4 18H20M4 14L12 6L16 10L20 6" 
                          stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <span className="text-2xl text-white font-medium drop-shadow">AI-Powered Assistance</span>
                  </li>
                </ul>
              </div>

              {/* Image Area - adjusted background with filter overlay */}
              <div className="relative w-[400px] h-[500px] rounded-2xl overflow-hidden bg-black/30 backdrop-blur-sm">
                {/* Image */}
                <Image 
                  src={sinchanaImage}
                  alt="Kahana Team Member"
                  className="w-full h-full object-cover object-top"
                  priority
                  quality={100}
                  fill
                />
                {/* Golden filter overlay */}
                <div 
                  className="absolute inset-0 mix-blend-overlay"
                  style={{
                    background: 'linear-gradient(180deg, rgba(255, 184, 0, 0.2) 0%, rgba(255, 165, 0, 0.3) 100%)'
                  }}
                ></div>
                {/* Subtle vignette effect */}
                <div 
                  className="absolute inset-0"
                  style={{
                    background: 'radial-gradient(circle at center, transparent 0%, rgba(0, 0, 0, 0.2) 100%)'
                  }}
                ></div>
              </div>
            </div>
          </div>

          {/* Bottom Section - Redesigned CTA */}
          <div className="mt-auto">
            <div className="flex flex-col relative">
              <div className="absolute -left-8 -right-8 -top-12 -bottom-8 bg-black/20 backdrop-blur-sm rounded-2xl">
                <div className="absolute inset-0" style={{
                  background: 'radial-gradient(circle at 30% 50%, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0) 70%)'
                }}></div>
              </div>
              
              {/* CTA content */}
              <div className="relative px-8 py-8">
                <div className="flex flex-col items-center justify-center space-y-4">
                  <h2 className="text-4xl font-bold text-white text-center tracking-tight drop-shadow-lg">
                    Be First to Experience It
                  </h2>
                  <a 
                    href="https://www.linkedin.com/groups/your-group-id" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full transition-all duration-200 group"
                  >
                    <span className="text-xl font-medium text-white drop-shadow-lg">Join Our LinkedIn Group</span>
                    <svg 
                      className="w-5 h-5 ml-2 text-white transform group-hover:translate-x-1 transition-transform duration-200" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Download Button - updated to match new color scheme */}
      <button
        onClick={downloadAsJPG}
        className="mt-4 px-6 py-3 bg-[#FFB800] text-white rounded-lg hover:bg-[#FFA500] transition-colors duration-200 flex items-center space-x-2"
      >
        <svg 
          className="w-5 h-5" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
          />
        </svg>
        <span>Download as JPG</span>
      </button>
    </div>
  );
});

export default OurServices; 