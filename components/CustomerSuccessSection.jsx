import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import KelseySuccess from '../assets/images/KelseySuccess.webp';

// icons
import { CheckIcon } from './CheckIcon';

const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
];

export default function HeroSection() {
  const [showVideo, setShowVideo] = useState(false);

  const openVideo = () => {
    setShowVideo(true);
  };

  const closeVideo = () => {
    setShowVideo(false);
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleFormSubmit = (e) => {
        e.preventDefault();
        const form = document.getElementById('myform');
        if (form) {
          const data = new FormData(form);
          const action = e.target.action;
          fetch(action, {
            method: 'POST',
            body: data,
          }).then(() => {
            // Handle response if needed
          });
        }
      };

      window.addEventListener('load', () => {
        const form = document.getElementById('myform');
        if (form) {
          form.addEventListener('submit', handleFormSubmit);
        }
      });

      // Cleanup event listener on component unmount
      return () => {
        window.removeEventListener('load', handleFormSubmit);
      };
    }
  }, []); // Dependencies here should be handled based on context. Adjust if needed.

  return (
    <div className="bg-white">
      <div className="pt-1 pb-16">
        <main className="mt-10 sm:mt-24">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col lg:flex-row lg:gap-8 lg:items-center">
              {/* Text Section */}
              <div className="lg:w-1/2 px-4 sm:px-6 sm:text-center md:mx-auto md:max-w-2xl lg:text-left lg:order-1">
                <h1 className="py-4 bg-clip-text bg-black text-3xl font-bold tracking-tight text-black sm:text-4xl md:text-5xl text-center sm:text-left">
                  How Kelsey Vetter&apos;s $97 Package Earned Her Over $1,800
                </h1>

                <div className="gap-4 mt-6 tracking-tight">
                  <ul role="list" className="space-y-3">
                    <li className="flex items-center">
                      <CheckIcon className="h-8 w-8 flex-none fill-green-700" />
                      <span className="ml-4 text-base text-slate-900 sm:text-xl lg:text-lg xl:text-xl">
                        Recorded expert advice, best practices, and templates from sessions
                      </span>
                    </li>
                    <li className="flex items-center">
                      <CheckIcon className="h-8 w-8 flex-none fill-green-700" />
                      <span className="ml-4 text-base text-slate-900 sm:text-xl lg:text-lg xl:text-xl">
                        Uploaded resources into a Kahana hub
                      </span>
                    </li>
                    <li className="flex items-center">
                      <CheckIcon className="h-8 w-8 flex-none fill-green-700" />
                      <span className="ml-4 text-base text-slate-900 sm:text-xl lg:text-lg xl:text-xl">
                        Connected Stripe, set a price, and integrated into her website
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="mt-12 flex flex-col items-center space-y-4 md:flex-row md:space-x-4 md:space-y-0 justify-end">
                  <a
                    href="https://app.kahana.co/hub/tHwAYvYPzqVwGPGzh10k"
                    className="text-black text-lg font-medium hover:underline"
                  >
                    See Kelsey&apos;s hub in action -&gt;
                  </a>
                </div>
              </div>

              {/* Image */}
              <div className="lg:w-1/2 py-4 flex justify-center lg:order-2">
                <Image
                  src={KelseySuccess}
                  alt={`Kelsey&apos;s Success Metrics`}
                  width={467}
                  height={525}
                  layout="responsive"
                  objectFit="cover"
                  quality={100}
                />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
