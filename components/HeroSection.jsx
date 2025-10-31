import React from 'react';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <div className="relative bg-white">
      <div className="pt-1 pb-16 sm:pb-24">
        <main className="mt-10 sm:mt-24">
          <div className="mx-auto max-w-7xl">
            <div className="lg:grid lg:grid-cols-12 lg:gap-8 lg:items-center">
              <div className="lg:col-span-7 px-4 sm:px-6 sm:text-center md:mx-auto md:max-w-2xl lg:flex lg:items-center lg:text-left relative">
                <div className="invisible md:visible absolute top-15 -left-7 w-40 h-40 bg-yellow-300/50 rounded-full filter blur-3xl opacity-50 animate-blob"></div>
                <div>
                  <h1 className="py-4 bg-clip-text text-transparent bg-gradient-to-r from-[#728552] to-[#788B59] text-4xl font-bold tracking-tight sm:text-5xl md:text-5xl text-center sm:text-left">
                    Bringing Ideas to Life
                  </h1>
                  <p className="mt-3 text-base text-[#4A5745] sm:mt-5 sm:text-xl lg:text-lg xl:text-xl text-center sm:text-left">
                    We believe the world is better off when your best ideas become reality. We create tools that help you get closer to your ideas and bring them into the world.
                  </p>
                  <div className="mt-8 flex justify-center sm:justify-start">
                    <Link
                      href="/contact"  
                      className="nav-button download inline-flex items-center justify-center rounded-md text-white font-bold shadow-sm px-6 py-3 text-base no-underline hover:no-underline focus:no-underline"
                      style={{ textDecoration: 'none', backgroundColor: '#788B59' }}
                    >
                      <span>
                        Get in Touch
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-5 hidden lg:block">
                <div className="relative w-[450px] h-[450px] rounded-full overflow-hidden bg-gradient-to-b from-[#F3F8E4] to-[#E0D48C] mx-auto">
                  {/* Oasis Animation */}
                  <div className="absolute inset-0">
                    {/* Sand Dunes - adjusted for circular container */}
                    <div className="absolute bottom-0 left-0 right-0 h-64">
                      <svg viewBox="0 0 450 200" className="w-full h-full preserve-3d" preserveAspectRatio="none">
                        <path
                          d="M0 100 Q112.5 30 225 100 T450 100 L450 200 L0 200 Z"
                          className="fill-[#788B59]/30 animate-wave-slow"
                        />
                        <path
                          d="M0 120 Q112.5 50 225 120 T450 120 L450 200 L0 200 Z"
                          className="fill-[#728552]/40 animate-wave-medium"
                        />
                        <path
                          d="M0 140 Q112.5 70 225 140 T450 140 L450 200 L0 200 Z"
                          className="fill-[#E0D48C]/50 animate-wave-fast"
                        />
                      </svg>
                    </div>
                    
                    {/* Sun - adjusted to yellow */}
                    <div className="absolute top-12 left-1/2 transform -translate-x-1/2">
                      <div className="w-20 h-20 rounded-full bg-yellow-300/80 animate-pulse">
                        <div className="absolute inset-0 rounded-full bg-yellow-200/30 animate-ripple"></div>
                        <div className="absolute inset-0 rounded-full bg-yellow-100/20 animate-ripple-delayed"></div>
                      </div>
                    </div>

                    {/* Innovation Symbols */}
                    {/* Rockets */}
                    <div className="absolute bottom-[45%] left-1/4 animate-rise">
                      <svg width="24" height="24" viewBox="0 0 24 24" className="fill-[#788B59]/70">
                        <path d="M12,2.5c-0.5,0-1,0.2-1.4,0.6L8,6v2l4-3l4,3V6l-2.6-2.9C13,2.7,12.5,2.5,12,2.5z"/>
                        <path d="M8,8v6c0,1.1,0.9,2,2,2h4c1.1,0,2-0.9,2-2V8H8z"/>
                        <path className="animate-flame" fill="#FFA500" d="M10,16l2,3l2-3H10z"/>
                        <path className="animate-flame-inner" fill="#FF4500" d="M11,16l1,2l1-2H11z"/>
                      </svg>
                    </div>

                    <div className="absolute bottom-[45%] left-1/2 animate-rise-delayed">
                      <svg width="24" height="24" viewBox="0 0 24 24" className="fill-[#788B59]/70">
                        <path d="M12,2.5c-0.5,0-1,0.2-1.4,0.6L8,6v2l4-3l4,3V6l-2.6-2.9C13,2.7,12.5,2.5,12,2.5z"/>
                        <path d="M8,8v6c0,1.1,0.9,2,2,2h4c1.1,0,2-0.9,2-2V8H8z"/>
                        <path className="animate-flame" fill="#fbbf24" d="M10,16l2,3l2-3H10z"/>
                        <path className="animate-flame-inner" fill="#ea580c" d="M11,16l1,2l1-2H11z"/>
                      </svg>
                    </div>

                    <div className="absolute bottom-[45%] left-3/4 animate-rise-delayed-2">
                      <svg width="24" height="24" viewBox="0 0 24 24" className="fill-[#788B59]/70">
                        <path d="M12,2.5c-0.5,0-1,0.2-1.4,0.6L8,6v2l4-3l4,3V6l-2.6-2.9C13,2.7,12.5,2.5,12,2.5z"/>
                        <path d="M8,8v6c0,1.1,0.9,2,2,2h4c1.1,0,2-0.9,2-2V8H8z"/>
                        <path className="animate-flame" fill="#fbbf24" d="M10,16l2,3l2-3H10z"/>
                        <path className="animate-flame-inner" fill="#ea580c" d="M11,16l1,2l1-2H11z"/>
                      </svg>
                    </div>

                    <div className="absolute bottom-[35%] left-[40%] animate-rise-fast">
                      <svg width="24" height="24" viewBox="0 0 24 24" className="fill-[#788B59]/70">
                        <path d="M12,2.5c-0.5,0-1,0.2-1.4,0.6L8,6v2l4-3l4,3V6l-2.6-2.9C13,2.7,12.5,2.5,12,2.5z"/>
                        <path d="M8,8v6c0,1.1,0.9,2,2,2h4c1.1,0,2-0.9,2-2V8H8z"/>
                        <path className="animate-flame" fill="#fbbf24" d="M10,16l2,3l2-3H10z"/>
                        <path className="animate-flame-inner" fill="#ea580c" d="M11,16l1,2l1-2H11z"/>
                      </svg>
                    </div>

                    <div className="absolute bottom-[55%] left-[60%] animate-rise-fast-delayed">
                      <svg width="24" height="24" viewBox="0 0 24 24" className="fill-[#788B59]/70">
                        <path d="M12,2.5c-0.5,0-1,0.2-1.4,0.6L8,6v2l4-3l4,3V6l-2.6-2.9C13,2.7,12.5,2.5,12,2.5z"/>
                        <path d="M8,8v6c0,1.1,0.9,2,2,2h4c1.1,0,2-0.9,2-2V8H8z"/>
                        <path className="animate-flame" fill="#fbbf24" d="M10,16l2,3l2-3H10z"/>
                        <path className="animate-flame-inner" fill="#ea580c" d="M11,16l1,2l1-2H11z"/>
                      </svg>
                    </div>

                    {/* Lightbulbs */}
                    <div className="absolute bottom-[45%] left-1/3 animate-rise-more-delayed">
                      <svg width="24" height="24" viewBox="0 0 24 24" className="fill-[#728552]/70">
                        <path d="M12 2A7 7 0 0 0 5 9C5 11.38 6.19 13.47 8 14.74V17A1 1 0 0 0 9 18H15A1 1 0 0 0 16 17V14.74C17.81 13.47 19 11.38 19 9A7 7 0 0 0 12 2M9 21V20H15V21A1 1 0 0 1 14 22H10A1 1 0 0 1 9 21Z"/>
                      </svg>
                    </div>

                    <div className="absolute bottom-[45%] left-2/3 animate-rise-more-delayed-2">
                      <svg width="24" height="24" viewBox="0 0 24 24" className="fill-[#728552]/70">
                        <path d="M12 2A7 7 0 0 0 5 9C5 11.38 6.19 13.47 8 14.74V17A1 1 0 0 0 9 18H15A1 1 0 0 0 16 17V14.74C17.81 13.47 19 11.38 19 9A7 7 0 0 0 12 2M9 21V20H15V21A1 1 0 0 1 14 22H10A1 1 0 0 1 9 21Z"/>
                      </svg>
                    </div>

                    <div className="absolute bottom-[35%] left-[45%] animate-rise-fast">
                      <svg width="24" height="24" viewBox="0 0 24 24" className="fill-[#728552]/70">
                        <path d="M12 2A7 7 0 0 0 5 9C5 11.38 6.19 13.47 8 14.74V17A1 1 0 0 0 9 18H15A1 1 0 0 0 16 17V14.74C17.81 13.47 19 11.38 19 9A7 7 0 0 0 12 2M9 21V20H15V21A1 1 0 0 1 14 22H10A1 1 0 0 1 9 21Z"/>
                      </svg>
                    </div>

                    <div className="absolute bottom-[55%] left-[55%] animate-rise-fast-delayed">
                      <svg width="24" height="24" viewBox="0 0 24 24" className="fill-[#728552]/70">
                        <path d="M12 2A7 7 0 0 0 5 9C5 11.38 6.19 13.47 8 14.74V17A1 1 0 0 0 9 18H15A1 1 0 0 0 16 17V14.74C17.81 13.47 19 11.38 19 9A7 7 0 0 0 12 2M9 21V20H15V21A1 1 0 0 1 14 22H10A1 1 0 0 1 9 21Z"/>
                      </svg>
                    </div>

                    {/* Birds - adjusted for circular container */}
                    <div className="absolute top-24 left-20 animate-fly">
                      <svg width="30" height="15" viewBox="0 0 40 20">
                        <path
                          d="M0 10 Q10 0 20 10 Q30 20 40 10"
                          className="stroke-[#728552]/40 fill-none"
                        />
                      </svg>
                    </div>
                    <div className="absolute top-32 right-24 animate-fly-delayed">
                      <svg width="20" height="10" viewBox="0 0 40 20">
                        <path
                          d="M0 10 Q10 0 20 10 Q30 20 40 10"
                          className="stroke-[#728552]/30 fill-none"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Update animation keyframes */}
      <style jsx>{`
        @keyframes wave-slow {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(-5%); }
        }
        @keyframes wave-medium {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(5%); }
        }
        @keyframes wave-fast {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(-3%); }
        }
        @keyframes sway-slow {
          0%, 100% { transform: rotate(0deg); }
          50% { transform: rotate(5deg); }
        }
        @keyframes sway-slow-reverse {
          0%, 100% { transform: rotate(0deg); }
          50% { transform: rotate(-5deg); }
        }
        @keyframes fly {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(20px, -10px); }
        }
        @keyframes fly-delayed {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(-15px, -8px); }
        }
        @keyframes ripple {
          0% { transform: scale(1); opacity: 0.8; }
          100% { transform: scale(1.5); opacity: 0; }
        }
        @keyframes ripple-delayed {
          0% { transform: scale(1); opacity: 0.6; }
          100% { transform: scale(2); opacity: 0; }
        }
        @keyframes rise {
          0% { transform: translateY(0) scale(0.8); opacity: 0; }
          10% { transform: translateY(-20%) scale(0.9); opacity: 0.3; }
          30% { transform: translateY(-40%) scale(1); opacity: 0.7; }
          70% { transform: translateY(-80%) scale(1.1); opacity: 0.7; }
          90% { transform: translateY(-90%) scale(1.2); opacity: 0.3; }
          100% { transform: translateY(-100%) scale(1.2); opacity: 0; }
        }
        @keyframes rise-delayed {
          0% { transform: translateY(0) scale(0.8); opacity: 0; }
          10% { transform: translateY(-20%) scale(0.9); opacity: 0.3; }
          30% { transform: translateY(-40%) scale(1); opacity: 0.7; }
          70% { transform: translateY(-80%) scale(1.1); opacity: 0.7; }
          90% { transform: translateY(-90%) scale(1.2); opacity: 0.3; }
          100% { transform: translateY(-100%) scale(1.2); opacity: 0; }
        }
        @keyframes rise-delayed-2 {
          0% { transform: translateY(0) scale(0.8); opacity: 0; }
          10% { transform: translateY(-20%) scale(0.9); opacity: 0.3; }
          30% { transform: translateY(-40%) scale(1); opacity: 0.7; }
          70% { transform: translateY(-80%) scale(1.1); opacity: 0.7; }
          90% { transform: translateY(-90%) scale(1.2); opacity: 0.3; }
          100% { transform: translateY(-100%) scale(1.2); opacity: 0; }
        }
        @keyframes rise-more-delayed {
          0% { transform: translateY(0) scale(0.8); opacity: 0; }
          10% { transform: translateY(-20%) scale(0.9); opacity: 0.3; }
          30% { transform: translateY(-40%) scale(1); opacity: 0.7; }
          70% { transform: translateY(-80%) scale(1.1); opacity: 0.7; }
          90% { transform: translateY(-90%) scale(1.2); opacity: 0.3; }
          100% { transform: translateY(-100%) scale(1.2); opacity: 0; }
        }
        @keyframes rise-more-delayed-2 {
          0% { transform: translateY(0) scale(0.8); opacity: 0; }
          10% { transform: translateY(-20%) scale(0.9); opacity: 0.3; }
          30% { transform: translateY(-40%) scale(1); opacity: 0.7; }
          70% { transform: translateY(-80%) scale(1.1); opacity: 0.7; }
          90% { transform: translateY(-90%) scale(1.2); opacity: 0.3; }
          100% { transform: translateY(-100%) scale(1.2); opacity: 0; }
        }
        @keyframes flame {
          0%, 100% { transform: scaleY(1); opacity: 0.8; }
          50% { transform: scaleY(1.2); opacity: 1; }
        }
        @keyframes flame-inner {
          0%, 100% { transform: scaleY(1); opacity: 0.6; }
          50% { transform: scaleY(1.3); opacity: 0.8; }
        }
        @keyframes rise-fast {
          0% { transform: translateY(0) scale(0.8); opacity: 0; }
          10% { transform: translateY(-20%) scale(0.9); opacity: 0.5; }
          30% { transform: translateY(-40%) scale(1); opacity: 0.8; }
          70% { transform: translateY(-80%) scale(1.1); opacity: 0.8; }
          90% { transform: translateY(-90%) scale(1.2); opacity: 0.3; }
          100% { transform: translateY(-100%) scale(1.2); opacity: 0; }
        }
        @keyframes rise-fast-delayed {
          0% { transform: translateY(0) scale(0.8); opacity: 0; }
          10% { transform: translateY(-20%) scale(0.9); opacity: 0.5; }
          30% { transform: translateY(-40%) scale(1); opacity: 0.8; }
          70% { transform: translateY(-80%) scale(1.1); opacity: 0.8; }
          90% { transform: translateY(-90%) scale(1.2); opacity: 0.3; }
          100% { transform: translateY(-100%) scale(1.2); opacity: 0; }
        }
        @keyframes rise-fast-delayed-2 {
          0% { transform: translateY(0) scale(0.8); opacity: 0; }
          10% { transform: translateY(-20%) scale(0.9); opacity: 0.5; }
          30% { transform: translateY(-40%) scale(1); opacity: 0.8; }
          70% { transform: translateY(-80%) scale(1.1); opacity: 0.8; }
          90% { transform: translateY(-90%) scale(1.2); opacity: 0.3; }
          100% { transform: translateY(-100%) scale(1.2); opacity: 0; }
        }
        .animate-wave-slow {
          animation: wave-slow 8s ease-in-out infinite;
        }
        .animate-wave-medium {
          animation: wave-medium 6s ease-in-out infinite;
        }
        .animate-wave-fast {
          animation: wave-fast 4s ease-in-out infinite;
        }
        .animate-sway-slow {
          animation: sway-slow 4s ease-in-out infinite;
        }
        .animate-sway-slow-reverse {
          animation: sway-slow-reverse 4s ease-in-out infinite;
        }
        .animate-fly {
          animation: fly 6s ease-in-out infinite;
        }
        .animate-fly-delayed {
          animation: fly-delayed 8s ease-in-out infinite;
        }
        .animate-ripple {
          animation: ripple 3s ease-out infinite;
        }
        .animate-ripple-delayed {
          animation: ripple-delayed 3s ease-out infinite 1.5s;
        }
        .animate-rise {
          animation: rise 12s ease-in-out infinite;
        }
        .animate-rise-delayed {
          animation: rise-delayed 12s ease-in-out infinite 2.4s;
        }
        .animate-rise-delayed-2 {
          animation: rise-delayed-2 12s ease-in-out infinite 4.8s;
        }
        .animate-rise-more-delayed {
          animation: rise-more-delayed 12s ease-in-out infinite 1.2s;
        }
        .animate-rise-more-delayed-2 {
          animation: rise-more-delayed-2 12s ease-in-out infinite 3.6s;
        }
        .animate-flame {
          transform-origin: center bottom;
          animation: flame 0.8s ease-in-out infinite;
        }
        .animate-flame-inner {
          transform-origin: center bottom;
          animation: flame-inner 0.6s ease-in-out infinite;
        }
        .preserve-3d {
          transform-style: preserve-3d;
        }
        .animate-rise-fast {
          animation: rise-fast 8s ease-in-out infinite;
        }
        .animate-rise-fast-delayed {
          animation: rise-fast-delayed 8s ease-in-out infinite 1.5s;
        }
        .animate-rise-fast-delayed-2 {
          animation: rise-fast-delayed-2 8s ease-in-out infinite 3s;
        }
      `}</style>
    </div>
  );
}
