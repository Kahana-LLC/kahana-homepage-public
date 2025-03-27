import React from 'react';
import Image from 'next/image';

export default function WhatIsKahana() {
  return (
    <div className="w-[1080px] h-[1080px] bg-[#4F8173] rounded-lg relative overflow-hidden mx-auto">
      {/* Decorative Elements */}
      <div className="absolute inset-0">
        {/* Large circle in top left */}
        <div className="absolute -left-40 -top-40 w-[500px] h-[500px] rounded-full bg-white/10"></div>
        {/* Smaller circle in bottom right */}
        <div className="absolute -right-20 -bottom-20 w-[300px] h-[300px] rounded-full bg-black/10"></div>
        
        {/* Collaboration Visual Elements */}
        <div className="absolute right-32 top-32 flex items-center">
          {/* Connected circles representing people */}
          <div className="relative">
            <div className="w-16 h-16 rounded-full border-2 border-white/30 flex items-center justify-center">
              <div className="w-8 h-8 rounded-full bg-white/30"></div>
            </div>
            <div className="absolute -right-12 top-1/2 w-12 h-0.5 bg-white/30 transform -translate-y-1/2"></div>
          </div>
          <div className="relative">
            <div className="w-16 h-16 rounded-full border-2 border-white/30 flex items-center justify-center ml-12">
              <div className="w-8 h-8 rounded-full bg-white/30"></div>
            </div>
            <div className="absolute -right-12 top-1/2 w-12 h-0.5 bg-white/30 transform -translate-y-1/2"></div>
          </div>
          <div className="w-16 h-16 rounded-full border-2 border-white/30 flex items-center justify-center ml-12">
            <div className="w-8 h-8 rounded-full bg-white/30"></div>
          </div>
        </div>

        {/* Connection Lines Pattern */}
        <div className="absolute left-24 bottom-48">
          <div className="relative w-48 h-48">
            <div className="absolute top-0 left-0 w-4 h-4 rounded-full bg-white/20"></div>
            <div className="absolute top-1/2 left-1/2 w-6 h-6 rounded-full bg-white/30 transform -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-4 h-4 rounded-full bg-white/20"></div>
            <div className="absolute top-0 left-0 w-48 h-48 border-2 border-white/10 rounded-lg transform rotate-6"></div>
            <div className="absolute top-2 left-2 w-44 h-44 border border-white/20 rounded-lg transform -rotate-3"></div>
          </div>
        </div>

        {/* Abstract lines */}
        <div className="absolute top-1/4 right-0 w-32 h-1 bg-white/20 transform rotate-45"></div>
        <div className="absolute top-1/3 right-20 w-32 h-1 bg-white/20 transform rotate-45"></div>
        <div className="absolute bottom-1/4 left-0 w-32 h-1 bg-white/20 transform -rotate-45"></div>
        <div className="absolute bottom-1/3 left-20 w-32 h-1 bg-white/20 transform -rotate-45"></div>
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
      <div className="relative h-full flex flex-col justify-center px-16">
        <div className="relative">
          {/* Connected dots above title */}
          <div className="flex items-center space-x-2 mb-8">
            <div className="w-3 h-3 rounded-full bg-white"></div>
            <div className="w-12 h-0.5 bg-white"></div>
            <div className="w-3 h-3 rounded-full bg-white"></div>
            <div className="w-12 h-0.5 bg-white"></div>
            <div className="w-3 h-3 rounded-full bg-white"></div>
          </div>
          
          <h1 className="text-7xl font-bold text-white mb-8 tracking-tight relative">
            WHAT IS 
            <br />
            KAHANA?
            {/* Network dots */}
            <div className="absolute -right-12 -top-12 flex space-x-1">
              <div className="w-3 h-3 rounded-full bg-white/40"></div>
              <div className="w-3 h-3 rounded-full bg-white/60"></div>
              <div className="w-3 h-3 rounded-full bg-white/40"></div>
            </div>
          </h1>
          
          <div className="relative">
            <p className="text-3xl text-white leading-relaxed max-w-[700px] relative z-10">
              A collaborative SAAS platform that streamlines the way people share and consume information
            </p>
            {/* Connected underline */}
            <div className="absolute -bottom-4 left-0 flex items-center">
              <div className="w-24 h-1 bg-white/40 rounded-full"></div>
              <div className="w-3 h-3 rounded-full bg-white/40 ml-2"></div>
              <div className="w-12 h-1 bg-white/20 rounded-full ml-2"></div>
            </div>
          </div>
        </div>

        {/* Bottom network elements */}
        <div className="absolute bottom-16 left-16 flex items-center space-x-3">
          <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
            <div className="w-2 h-2 rounded-full bg-white/60"></div>
          </div>
          <div className="w-12 h-0.5 bg-white/20"></div>
          <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
            <div className="w-2 h-2 rounded-full bg-white/60"></div>
          </div>
          <div className="w-12 h-0.5 bg-white/20"></div>
          <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
            <div className="w-2 h-2 rounded-full bg-white/60"></div>
          </div>
        </div>
      </div>

      {/* Floating connection elements */}
      <div className="absolute top-1/4 right-1/4 w-20 h-20 rounded-lg border-2 border-white/10 transform rotate-45 flex items-center justify-center">
        <div className="w-10 h-10 rounded-lg border border-white/30 transform -rotate-45"></div>
      </div>
      <div className="absolute bottom-1/3 right-1/3 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
        <div className="w-4 h-4 rounded-full border border-white/30"></div>
      </div>
      <div className="absolute top-1/3 left-1/4 w-16 h-16 rounded-full border-2 border-white/10 flex items-center justify-center">
        <div className="w-8 h-8 rounded-full border border-white/30"></div>
      </div>
    </div>
  );
} 