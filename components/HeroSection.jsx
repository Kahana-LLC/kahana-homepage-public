import React from 'react';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <div className="relative bg-kahana-ui-background">
      <div className="pt-1 pb-16 sm:pb-24">
        <main className="mt-10 sm:mt-24">
          <div className="mx-auto max-w-7xl">
            <div className="lg:grid lg:grid-cols-12 lg:gap-8 lg:items-center">
              <div className="lg:col-span-7 px-4 sm:px-6 sm:text-center md:mx-auto md:max-w-2xl lg:flex lg:items-center lg:text-left relative">
                <div className="invisible md:visible absolute top-15 -left-7 w-40 h-40 bg-kahana-primary-light rounded-full filter blur-3xl opacity-50 animate-blob"></div>
                <div>
                  <h1 className="py-4 bg-clip-text text-transparent bg-gradient-to-r from-kahana-primary-dark to-kahana-secondary text-4xl font-bold tracking-tight sm:text-5xl md:text-5xl text-center sm:text-left">
                    A New Oasis for Knowledge
                  </h1>
                  <p className="mt-3 text-base text-kahana-primary sm:mt-5 sm:text-xl lg:text-lg xl:text-xl text-center sm:text-left">
                    With Kahana, anyone can build unique &quot;hubs&quot; of digital products, resources, files, and links and share them directly with hungry knowledge seekers. Collaborate within hubs to go even faster.
                  </p>
                  <div className="mt-8 flex flex-col items-center space-y-4 md:flex-row md:space-x-4 md:space-y-0">
                    <Link
                      href="/explore"  
                      className="rounded-md border border-transparent bg-kahana-primary py-3 px-6 text-lg font-medium text-white shadow-sm hover:bg-kahana-primary-dark focus:outline-none focus:ring-2 focus:ring-kahana-primary focus:ring-offset-2 text-center"
                    >
                      Start exploring
                    </Link>
                    <Link
                      href="https://app.kahana.co/signup"
                      className="rounded-md border border-kahana-primary bg-white py-3 px-6 text-lg font-medium text-kahana-primary shadow-sm hover:bg-kahana-ui-hover focus:outline-none focus:ring-2 focus:ring-kahana-primary focus:ring-offset-2 text-center"
                    >
                      Build your hub
                    </Link>
                    <Link
                      href="/request-a-demo"  
                      className="rounded-md border border-transparent bg-kahana-accent-burgundy py-3 px-6 text-lg font-medium text-white shadow-sm hover:bg-kahana-accent-purple focus:outline-none focus:ring-2 focus:ring-kahana-accent-burgundy focus:ring-offset-2 text-center"
                    >
                      Get a demo
                    </Link>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-5 hidden lg:block">
                <div className="relative w-[450px] h-[450px] rounded-full overflow-hidden bg-gradient-to-b from-kahana-secondary-light/20 to-kahana-primary-light/20 mx-auto border border-kahana-secondary-light/30">
                  {/* Oasis Animation */}
                  <div className="absolute inset-0">
                    {/* Sand Dunes - adjusted for circular container */}
                    <div className="absolute bottom-0 left-0 right-0 h-64">
                      <svg viewBox="0 0 450 200" className="w-full h-full preserve-3d" preserveAspectRatio="none">
                        <path
                          d="M0 100 Q112.5 30 225 100 T450 100 L450 200 L0 200 Z"
                          className="fill-kahana-secondary-light/30 animate-wave-slow"
                        />
                        <path
                          d="M0 120 Q112.5 50 225 120 T450 120 L450 200 L0 200 Z"
                          className="fill-kahana-secondary/40 animate-wave-medium"
                        />
                        <path
                          d="M0 140 Q112.5 70 225 140 T450 140 L450 200 L0 200 Z"
                          className="fill-kahana-secondary-dark/50 animate-wave-fast"
                        />
                      </svg>
                    </div>
                    
                    {/* Palm Tree - adjusted position */}
                    <div className="absolute bottom-0 right-24 transform-gpu">
                      <div className="relative">
                        {/* Trunk */}
                        <div className="w-4 h-28 bg-kahana-accent-burgundy/80 rounded-full transform -skew-x-6 origin-bottom"></div>
                        {/* Leaves */}
                        <div className="absolute -top-8 -left-8 animate-sway-slow">
                          <svg width="80" height="80" viewBox="0 0 100 100" className="transform rotate-45">
                            <path
                              d="M50 0 C70 30 70 70 50 100 C30 70 30 30 50 0"
                              className="fill-kahana-accent-coral/60"
                            />
                            <path
                              d="M0 50 C30 70 70 70 100 50 C70 30 30 30 0 50"
                              className="fill-kahana-accent-coral/60"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>

                    {/* Second Palm Tree */}
                    <div className="absolute bottom-0 left-24 transform-gpu scale-75">
                      <div className="relative">
                        {/* Trunk */}
                        <div className="w-3 h-24 bg-kahana-accent-burgundy/60 rounded-full transform skew-x-6 origin-bottom"></div>
                        {/* Leaves */}
                        <div className="absolute -top-8 -left-8 animate-sway-slow-reverse">
                          <svg width="80" height="80" viewBox="0 0 100 100" className="transform -rotate-15">
                            <path
                              d="M50 0 C70 30 70 70 50 100 C30 70 30 30 50 0"
                              className="fill-kahana-accent-coral/50"
                            />
                            <path
                              d="M0 50 C30 70 70 70 100 50 C70 30 30 30 0 50"
                              className="fill-kahana-accent-coral/50"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>

                    {/* Sun - adjusted size and position */}
                    <div className="absolute top-12 left-1/2 transform -translate-x-1/2">
                      <div className="w-20 h-20 rounded-full bg-kahana-accent-coral/80 animate-pulse">
                        <div className="absolute inset-0 rounded-full bg-kahana-accent-coral/30 animate-ripple"></div>
                        <div className="absolute inset-0 rounded-full bg-kahana-accent-coral/20 animate-ripple-delayed"></div>
                      </div>
                    </div>

                    {/* Birds - adjusted for circular container */}
                    <div className="absolute top-24 left-20 animate-fly">
                      <svg width="30" height="15" viewBox="0 0 40 20">
                        <path
                          d="M0 10 Q10 0 20 10 Q30 20 40 10"
                          className="stroke-kahana-primary-dark/40 fill-none"
                        />
                      </svg>
                    </div>
                    <div className="absolute top-32 right-24 animate-fly-delayed">
                      <svg width="20" height="10" viewBox="0 0 40 20">
                        <path
                          d="M0 10 Q10 0 20 10 Q30 20 40 10"
                          className="stroke-kahana-primary-dark/30 fill-none"
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
        .preserve-3d {
          transform-style: preserve-3d;
        }
      `}</style>
    </div>
  );
}
