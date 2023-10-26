import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import wAmy from '../assets/images/wAmySlider.png';
import Kelsey from '../assets/images/kelseySlider.png';
import Juice from '../assets/images/juiceSlider.png';
import Olivia from '../assets/images/oliviaSlider.png';

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

  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [wAmy, Kelsey, Juice, Olivia];

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // Change the interval duration (in milliseconds) as needed
    return () => clearInterval(interval);
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  return (
    <div className=" bg-white">
      <div className="pt-1 pb-16 sm:pb-24">
        <main className="mt-10 sm:mt-24">
          <div className="mx-auto max-w-7xl">
            <div className="lg:grid lg:grid-cols-12 lg:gap-8 lg:items-center">
              <div className="lg:col-span-7 px-4 sm:px-6 sm:text-center md:mx-auto md:max-w-2xl lg:flex lg:items-center lg:text-left">
                <div>

                  {/* animated background left blob*/}

                  <div className="invisible md:visible absolute top-15 -left-7 w-40 h-40 bg-[#038270] rounded-full filter blur-3xl opacity-50 animate-blob"></div>
                  <div>

                    <h1 className="py-4  bg-clip-text text-transparent bg-gradient-to-r from-[#024324] to-teal-300 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl text-center sm:text-left">
                      Add subscription revenue to your portfolio for free
                    </h1>

                    <p className="mt-3 text-base text-slate-900 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl text-center sm:text-left">
                      Make a living doing what you love. Share your best insights with your audience so they can thrive.
                    </p>

                    <div className="mt-8 flex flex-col items-center space-y-4 md:flex-row md:space-x-4 md:space-y-0">
                      <a
                        href="https://app.kahana.co/signup"
                        className="rounded-md border border-transparent bg-gradient-to-l from-green-200 via-[#038270] to-[#338161] py-3 px-8 text-lg font-medium text-white shadow-sm hover:bg-[#024324] focus:outline-none focus:ring-2 focus:ring-[#024324] focus:ring-offset-2 text-center"
                      >
                        Start earning 
                      </a>
                      <a
                        href="https://www.youtube.com/channel/UCwsf3DOnt3uQdrqf-NRZ2_w"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-md border border-transparent bg-[#FF0000] py-3 px-8 text-lg font-medium text-white shadow-sm hover:bg-[#024324] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#024324] focus:ring-offset-2 text-center"
                        onClick={openVideo}
                      >
                        <span class="ant-btn-icon">
                          <svg
                            stroke="currentColor"
                            fill="white"
                            stroke-width="0"
                            viewBox="0 0 448 512"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                            style="margin-right: 12px;"
                          >
                            <path d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"></path>
                          </svg>
                        </span>
                        Watch demo
                      </a>
                    </div>
                    
                    {/* <div className="grid grid-cols-2 gap-4 mt-6 tracking-tight hidden md:block">
                      {' '}
                      <ul role="list" className=" space-y-3">
                        {[
                          'No credit card required',
                          'Share your unique knowledge',
                          'Start monetizing within 1 hour',
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
                    </div> */}
                    
                  </div>
                  {/* right animated blob */}
                </div>
              </div>
              
              {/* Slider IN CASE */}
              <div className="lg:col-span-5 hidden lg:block flex flex-col justify-center items-center"> {/* Hide on medium and below screens */}
                <Image
                  src={images[currentIndex]}
                  alt={`Slider Image ${currentIndex}`}
                  width={400} // Adjust the width and height as needed
                  height={450}
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
