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
    primary: "bg-kahana-primary text-white font-bold px-6 py-3 rounded-md hover:bg-kahana-primary-dark transition-colors",
    secondary: "bg-white text-kahana-primary font-bold px-6 py-3 rounded-md border border-kahana-primary hover:bg-gray-100 transition-colors"
  };

  return (
    <section className={`py-16 text-center ${className}`}>
      <h2 className="text-3xl font-bold mb-4">{title}</h2>
      <p className="text-xl mb-8">{description}</p>
      <Link 
        href={buttonLink} 
        className={buttonStyles[buttonVariant]}
        style={buttonVariant === "primary" ? {
          backgroundColor: '#0d9488 !important',
          color: 'white !important',
          fontWeight: 'bold'
        } : {
          backgroundColor: 'white !important',
          color: '#0d9488 !important',
          borderColor: '#0d9488 !important',
          fontWeight: 'bold'
        }}
      >
        <span style={{ 
          color: buttonVariant === "primary" ? 'white !important' : '#0d9488 !important',
          fontWeight: 'bold'
        }}>
          {buttonText}
        </span>
      </Link>
    </section>
  );
};

export default SharedCTA;