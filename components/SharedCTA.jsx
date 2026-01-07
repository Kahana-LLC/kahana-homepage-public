import React from 'react';
import Link from 'next/link';

const SharedCTA = ({ 
  title, 
  description, 
  buttonText = "Get in Touch", 
  buttonLink = "/contact",
  buttonVariant = "primary", // primary or secondary
  className = "" // Additional classes for the section
}) => {
  const buttonStyles = {
    primary: "btn-primary inline-flex items-center justify-center px-6 py-3 text-base no-underline hover:no-underline focus:no-underline",
    secondary: "btn-secondary inline-flex items-center justify-center px-6 py-3 text-base no-underline hover:no-underline focus:no-underline"
  };

  const buttonInlineStyles = {
    primary: {},
    secondary: {}
  };

  return (
    <section 
      className={`w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] py-12 sm:py-16 md:py-20 lg:py-28 mb-0 bg-[#F8FAF2] ${className}`}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4 sm:mb-6">
          {title}
        </h2>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 lg:mb-10 max-w-3xl mx-auto leading-relaxed font-bold" style={{ color: '#313A00' }}>
          {description}
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
          <Link href="/schedule-demo" className="btn-primary inline-flex items-center justify-center px-6 sm:px-8 lg:px-10 py-3 sm:py-4 text-sm sm:text-base lg:text-lg font-bold no-underline hover:no-underline focus:no-underline w-full sm:w-auto">
            Schedule a Demo
          </Link>
          <Link href="/contact" className="btn-secondary inline-flex items-center justify-center px-6 sm:px-8 lg:px-10 py-3 sm:py-4 text-sm sm:text-base lg:text-lg font-bold no-underline hover:no-underline focus:no-underline w-full sm:w-auto">
            Get in Touch
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SharedCTA;