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
    <section className={`py-16 text-center ${className}`}>
      <h2 className="text-3xl font-bold mb-4 text-[#4A5745]">{title}</h2>
      <p className="text-xl mb-8 text-[#4A5745]">{description}</p>
      <Link 
        href={buttonLink} 
        className={buttonStyles[buttonVariant]}
        style={buttonInlineStyles[buttonVariant]}
      >
        {buttonText}
      </Link>
    </section>
  );
};

export default SharedCTA;