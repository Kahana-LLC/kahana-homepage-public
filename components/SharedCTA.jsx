import React from 'react';
import Link from 'next/link';

const SharedCTA = ({ 
  title, 
  description, 
  buttonText = "Schedule a Demo", 
  buttonLink = "/schedule-demo",
  buttonVariant = "primary", // primary or secondary
  className = "" // Additional classes for the section
}) => {
  const buttonStyles = {
    primary: "bg-white text-kahana-primary hover:bg-gray-100",
    secondary: "bg-kahana-primary text-white hover:bg-kahana-primary-dark"
  };

  return (
    <section className={`bg-kahana-primary py-16 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-white mb-6">
          {title}
        </h2>
        <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
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