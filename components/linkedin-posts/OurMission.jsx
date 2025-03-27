import React from 'react';
import Image from 'next/image';

export default function OurMission() {
  return (
    <div className="w-[1080px] h-[1080px] bg-[#4F8173] rounded-lg relative overflow-hidden mx-auto">
      {/* Decorative Elements */}
      <div className="absolute inset-0">
        {/* Large circular gradient */}
        <div className="absolute left-1/2 top-1/2 w-[800px] h-[800px] -translate-x-1/2 -translate-y-1/2">
          <div className="absolute inset-0 rounded-full bg-white/10 transform scale-90"></div>
          <div className="absolute inset-0 rounded-full bg-white/5 transform scale-75"></div>
          <div className="absolute inset-0 rounded-full bg-white/5 transform scale-50"></div>
        </div>

        {/* Mission-related icons */}
        <div className="absolute inset-0">
          {/* Top right compass-like element */}
          <div className="absolute top-32 right-32">
            <div className="relative w-24 h-24">
              <div className="absolute inset-0 border-2 border-white/20 rounded-full"></div>
              <div className="absolute inset-2 border border-white/30 rounded-full"></div>
              <div className="absolute top-1/2 left-1/2 w-1 h-8 bg-white/40 -translate-x-1/2 -translate-y-1/2 transform -rotate-45"></div>
              <div className="absolute top-1/2 left-1/2 w-1 h-8 bg-white/40 -translate-x-1/2 -translate-y-1/2 transform rotate-45"></div>
            </div>
          </div>

          {/* Bottom left connection element */}
          <div className="absolute bottom-32 left-32">
            <div className="relative w-32 h-32">
              <div className="absolute inset-0 border-2 border-white/20 rounded-lg transform rotate-45"></div>
              <div className="absolute inset-4 border border-white/30 rounded-lg transform -rotate-12"></div>
              <div className="absolute inset-8 bg-white/10 rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Logo */}
      <div className="absolute top-8 right-8">
        <div className="bg-[#E8E8E8] px-4 py-2 rounded-lg">
          <Image
            src="/assets/kahana_logo_wide_gray.svg"
            alt="Kahana Logo"
            width={120}
            height={30}
            className="w-auto h-[24px]"
          />
        </div>
      </div>

      {/* Background Gradient Overlay */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, rgba(79,129,115,0.9) 0%, rgba(79,129,115,1) 100%)'
        }}
      ></div>

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center px-16 text-center">
        <div className="relative max-w-3xl">
          {/* Mission indicator */}
          <div className="flex justify-center mb-8">
            <div className="px-4 py-1 bg-white/20 rounded-full">
              <span className="text-white text-sm font-medium">OUR MISSION</span>
            </div>
          </div>
          
          <h1 className="text-5xl font-bold text-white mb-8 tracking-tight leading-tight">
            Empowering Teams to Share Knowledge and Build Better Together
          </h1>
          
          <div className="w-20 h-1 bg-white/40 mx-auto mb-8 rounded-full"></div>
          
          <p className="text-2xl text-white/90 leading-relaxed">
            We're on a mission to transform how teams collaborate, making knowledge sharing seamless and intuitive. By breaking down information silos, we help organizations unlock their full potential.
          </p>

          {/* Mission highlights */}
          <div className="grid grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="w-12 h-12 rounded-full border-2 border-white/30 flex items-center justify-center mx-auto mb-4">
                <div className="w-6 h-6 rounded-full bg-white/20"></div>
              </div>
              <p className="text-white/90 font-medium">Seamless Collaboration</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full border-2 border-white/30 flex items-center justify-center mx-auto mb-4">
                <div className="w-6 h-6 rounded-lg bg-white/20 transform rotate-45"></div>
              </div>
              <p className="text-white/90 font-medium">Knowledge Sharing</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full border-2 border-white/30 flex items-center justify-center mx-auto mb-4">
                <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-white/30"></div>
                </div>
              </div>
              <p className="text-white/90 font-medium">Team Growth</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 