import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import KelseySuccess from '../assets/images/KelseySuccess.webp';

//icons
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
      window.addEventListener('load', function () {
        const form = document.getElementById('myform');
        if (form) {
          form.addEventListener('submit', function (e) {
            e.preventDefault();
            const data = new FormData(form);
            const action = e.target.action;
            fetch(action, {
              method: 'POST',
              body: data,
            }).then(() => {
              // Handle response if needed
            });
          });
        }
      });
    }
  }, []);

  return (
    <div className="bg-white">
      <div className="pt-1 pb-16">
        <main className="mt-10 sm:mt-24">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col lg:flex-row lg:gap-8 lg:items-center">
              {/* Text Section */}
              <div className="lg:w-1/2 px-4 sm:px-6 sm:text-center md:mx-auto md:max-w-2xl lg:text-left lg:order-1">
                <h1 className="py-4 bg-clip-text bg-black text-3xl font-bold tracking-tight text-black sm:text-4xl md:text-5xl text-center sm:text-left">
                  How Kelsey turned her Pinterest knowledge into a 4-figure income stream
                </h1>

                <div className="gap-4 mt-6 tracking-tight">
                  <ul role="list" className="space-y-3">
                    {[
                      'One of Kelsey\'s services is a 1:1 strategy session where she coaches clients on setting up their business profiles',
                      'Kelsey recorded herself sharing the same advice, best practices, and templates she shares with clients in these sessions, gathered the resources she provides them, and uploaded them into a Kahana hub',
                      'She connected her account to Stripe to accept payments, set her price point, incorporated it onto her website, and started getting sales!',
                    ].map((feature) => (
                      <li key={feature} className="flex items-center">
                        <CheckIcon className="h-8 w-8 flex-none fill-green-700" />
                        <span className="ml-4">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mt-12 flex flex-col items-center space-y-4 md:flex-row md:space-x-4 md:space-y-0 justify-end">
                  <a
                    href="https://www.kelseyvetter.com/resources"
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
                  alt={`Kelsey's Success Metrics`}
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
