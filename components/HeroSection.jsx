import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import wAmy from '../assets/images/wAmySlider.webp';
import Kelsey from '../assets/images/kelseySlider.webp';
import Juice from '../assets/images/juiceSlider.webp';
import Olivia from '../assets/images/oliviaSlider.webp';

//icons
import { CheckIcon } from './CheckIcon';

// Placeholder for blurDataURL
const placeholderImage = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIj48cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZS1zY2FsZT0icm91bmQiIHN0cm9rZS1jb2xvcj0iI2ZlZmYiLz48L3N2Zz4=';

const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
];

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [wAmy, Kelsey, Juice, Olivia];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const form = document.getElementById('myform');
    const handleSubmit = (e) => {
      e.preventDefault();
      const data = new FormData(form);
      fetch(form.action, { method: 'POST', body: data });
    };

    if (form) {
      form.addEventListener('submit', handleSubmit);
    }
    
    return () => {
      if (form) {
        form.removeEventListener('submit', handleSubmit);
      }
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000); // Change interval duration as needed
    return () => clearInterval(interval);
  }, [images.length]); // Depend only on images length

  return (
    <div className="relative bg-white">
      <div className="pt-1 pb-16 sm:pb-24">
        <main className="mt-10 sm:mt-24">
          <div className="mx-auto max-w-7xl">
            <div className="lg:grid lg:grid-cols-12 lg:gap-8 lg:items-center">
              <div className="lg:col-span-7 px-4 sm:px-6 sm:text-center md:mx-auto md:max-w-2xl lg:flex lg:items-center lg:text-left relative">
                <div className="invisible md:visible absolute top-15 -left-7 w-40 h-40 bg-[#038270] rounded-full filter blur-3xl opacity-50 animate-blob"></div>
                <div>
                  <h1 className="py-4 bg-clip-text text-transparent bg-gradient-to-r from-[#024324] to-teal-300 text-4xl font-bold tracking-tight sm:text-5xl md:text-5xl text-center sm:text-left">
                    Monetize knowledge through digital products
                  </h1>
                  <p className="mt-3 text-base text-slate-900 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl text-center sm:text-left">
                    Kahana is a powerful platform to create, bundle, and sell digital products in hubs. Set your prices and earn every time someone pays to access your hubs. Collaborate to speed up the process.
                  </p>
                  <div className="mt-8 flex flex-col items-center space-y-4 md:flex-row md:space-x-4 md:space-y-0">
                    <a
                      href="https://app.kahana.co/signup"
                      className="rounded-md border border-transparent bg-[#3B675E] py-3 px-6 text-lg font-medium text-white shadow-sm hover:bg-[#024324] focus:outline-none focus:ring-2 focus:ring-[#024324] focus:ring-offset-2 text-center"
                    >
                      Start building for free
                    </a>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-5 hidden lg:block flex flex-col justify-center items-center">
                <Image
                  src={images[currentIndex]}
                  alt={`Slider Image ${currentIndex}`}
                  width={400}
                  height={450}
                  layout="responsive"
                  objectFit="cover"
                  quality={100}
                  priority
                  placeholder="blur"
                  blurDataURL={placeholderImage} // Base64 encoded low-quality image
                />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
