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
    primary: "bg-white text-[#A5DAD8] hover:bg-gray-50",
    secondary: "bg-[#A5DAD8] text-white hover:bg-[#8CB7D0]"
  };

  return (
    <section className={`bg-gradient-to-r from-[#A5DAD8] to-[#8CB7D0] py-16 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-white mb-6">
          {title}
        </h2>
        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          {description}
        </p>
        <Link href={buttonLink}>
          <button className={`px-8 py-3 rounded-md font-semibold transition-colors ${buttonStyles[buttonVariant]}`}>
            {buttonText}
          </button>
        </Link>
      </div>
    </section>
  );
};

export default SharedCTA; 