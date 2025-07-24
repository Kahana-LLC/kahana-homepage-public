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
    primary: "bg-[#21706c] text-white font-bold px-6 py-3 rounded-md hover:bg-[#15514f] transition-colors",
    secondary: "bg-white text-[#21706c] font-bold px-6 py-3 rounded-md border border-[#21706c] hover:bg-gray-100 transition-colors"
  };

  return (
    <section className={`py-16 text-center ${className}`}>
      <h2 className="text-3xl font-bold mb-4">{title}</h2>
      <p className="text-xl mb-8">{description}</p>
      <Link href={buttonLink}>
        <a className={buttonStyles[buttonVariant]}>
          {buttonText}
        </a>
      </Link>
    </section>
  );
};

export default SharedCTA;