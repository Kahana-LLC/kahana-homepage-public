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
    <section className={`