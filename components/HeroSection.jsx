import Link from 'next/link';
import React, { useState } from 'react';
import Image from 'next/image';
import flowerIcon from '../assets/images/flowerIcon.webp';

//icons
import { ChevronRightIcon } from '@heroicons/react/20/solid';
//images
// import googleLogo from '../assets/googleLogo.svg';
import { CheckIcon } from './CheckIcon';
import ConfirmationModal from './ConfirmationModal';

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
    <div className=" bg-[#f8fafc]">
      <div className="pt-1 pb-16 sm:pb-24">
        <main className="mt-10 sm:mt-24">
          <div className="mx-auto max-w-7xl">
            <div className="lg:grid lg:grid-cols-12 lg:gap-8 lg:items-center">
              <div className=" px-4 sm:px-6 sm:text-center md:mx-auto md:max-w-2xl lg:col-span-6 lg:flex lg:items-center lg:text-left">
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
                        className="rounded-md border border-transparent bg-[#3B675E] py-3 px-6 text-lg font-medium text-white shadow-sm hover:bg-[#024324] focus:outline-none focus:ring-2 focus:ring-[#024324] focus:ring-offset-2 text-center"
                        style={{ maxWidth: "60%" }}
                      >
                        Start earning 
                      </a>
                      <a
                        href="#"
                        id="open-video"
                        className="rounded-md border border-black bg-transparent py-3 px-6 text-lg font-medium text-black shadow-sm hover:bg-[#024324] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#024324] focus:ring-offset-2 text-center"
                        style={{ maxWidth: "60%" }}
                        onClick={openVideo}
                      >
                        Watch demo
                      </a>
                    </div>

                    {showVideo && (
                      <div id="video-container" className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-70 z-50">
                        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                          <button id="close-video" className="text-2xl text-white absolute top-0 right-0 p-2 cursor-pointer" onClick={closeVideo}>✕</button>
                          <div className="video-wrapper" style={{ maxWidth: "90%", maxHeight: "80vh" }}>
                            <iframe
                              id="demo-video"
                              width="560"
                              height="315"
                              src="https://www.youtube.com/embed/TBNzzUQsB-4"
                              title="Demo Video"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              frameBorder="0"
                              allowFullScreen
                              style={{ width: '100%' }}
                            />
                          </div>
                        </div>
                      </div>
                    )}
                    
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

              {/* Sign up form starts here */}
              <div className="mt-8 sm:mt-16 lg:col-span-6 lg:mt-0 ">
                <div className=" bg-white sm:mx-auto sm:w-full sm:max-w-md sm:overflow-hidden sm:rounded-lg shadow-2xl">
                  <div className="px-4 py-8 sm:px-10 ">

                    <div className="mt-2 items-center">
                        <div className="flex-shrink-0 justify-content: center mb-6">
                          <Image
                            className="h-24 w-full justify-content: center object-scale-down"
                            src={flowerIcon}
                            alt=""
                          />
                        </div>

                        <div className="flex flex-col items-center space-y-4">
                          <a
                            href="https://app.kahana.co/signup"
                            className="rounded-md border border-transparent bg-[#3B675E] py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-[#024324] focus:outline-none focus:ring-2 focus:ring-[#024324] focus:ring-offset-2 text-center"
                            style={{ maxWidth: "40%" }}
                          >
                            Sign up for free
                          </a>
                          <span className="text-sm font-medium text-gray-700">
                            <a
                              href="https://7hkdcfzbmr0.typeform.com/to/ZYLHazEf?utm_content=landing_page_CTA"
                              className="hover:underline"
                            >
                              Request a demo
                            </a>
                          </span>
                        </div>
                    </div>
                  </div>
                  <div className="border-t-2 border-gray-200 bg-gray-50 px-4 py-6 sm:px-10">
                    <p className="text-xs leading-5 text-gray-500">
                      By signing up, you agree to our{' '}
                      <Link
                        href="/terms-and-conditions"
                        className="font-medium text-gray-900 hover:underline"
                      >
                        Terms of Use
                      </Link>
                      , and{' '}
                      <Link
                        href="/privacy-policy"
                        className="font-medium text-gray-900 hover:underline"
                      >
                        Privacy Policy
                      </Link>
                      .
                    </p>
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
