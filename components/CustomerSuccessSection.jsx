import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import KelseySuccess from '../assets/images/kelseySuccess.png';

//icons
import { CheckIcon } from './CheckIcon';

const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
];

if (typeof window !== 'undefined') {
  window.addEventListener('load', function () {
    const form = document.getElementById('myform');
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      const data = new FormData(form);
      const action = e.target.action;
      fetch(action, {
        method: 'POST',
        body: data,
      }).then(() => {
        '';
      });
    });
  });
}

// function handleSubmit(e) {
//   e.preventDefault();
//   console.log('You clicked submit.');
// }
export default function HeroSection() {
  const [showVideo, setShowVideo] = useState(false);

  const openVideo = () => {
    setShowVideo(true);
  };

  const closeVideo = () => {
    setShowVideo(false);
  };

  return (
    <div className=" bg-white">
      <div className="pt-1 pb-16 sm:pb-20">
        <main className="mt-10 sm:mt-24">
          <div className="mx-auto max-w-7xl">
            <div className="lg:grid lg:grid-cols-12 lg:gap-8 lg:items-center">
              {/* Image */}
              <div className="lg:col-span-5 py-4 flex flex-col justify-center items-center"> {/* Hide on medium and below screens */}
                <Image
                  src={KelseySuccess}
                  alt={`Kelsey's Success Metrics`}
                  width={400}
                  height={450}
                  layout="responsive"
                  objectFit="cover"
                  quality={100}
                />
              </div>
              
              <div className="lg:col-span-7 px-4 sm:px-6 sm:text-center md:mx-auto md:max-w-2xl lg:flex lg:items-center lg:text-left">
                <div>
                  
                  <div>

                    <h1 className="py-4  bg-clip-text text-transparent bg-black text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl text-center sm:text-right">
                      How Kelsey turned her Pinterest knowledge into a 4-figure income stream 
                    </h1>

                    <div className="gap-4 mt-6 tracking-tight">
                    {/* <div className="grid grid-cols-2 gap-4 mt-6 tracking-tight hidden md:block"> */}
                      {' '}
                      <ul role="list" className=" space-y-3">
                        {[
                          'One of Kelsey\'s services is a 1:1 strategy session where she coaches clients on setting up their business profiles',
                          'Kelsey recorded herself sharing the same advice, best practices, and templates she shares with clients in these sessions, gathered the resources she provides them, and uploaded them into a Kahana hub',
                          'She connected her account to Stripe to accept payments, set her price point, incorporated it onto her website, and started getting sales!',
                        ].map((feature) => (
                          <>
                            {' '}
                            <li key={feature} className="flex items-center">
                              <CheckIcon className="h-8 w-8 flex-none fill-green-700" />
                              <span className="ml-4">{feature}</span>
                            </li>
                          </>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="mt-12 flex flex-col items-center space-y-4 md:flex-row md:space-x-4 md:space-y-0 justify-end">
                      <a
                        href="https://www.kelseyvetter.com/resources"
                        className="text-black text-lg font-medium hover:underline"
                      >
                        See how Kelsey did it ->
                      </a>
                    </div>              
                  </div>
                </div>
              </div>
            
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
