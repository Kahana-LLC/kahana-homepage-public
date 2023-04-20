import Link from 'next/link';
import React, { useState } from 'react';

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
  const [showModal, setShowModal] = useState(false);
  return (
    <div className=" bg-[#f8fafc]">
      <div className="pt-1 pb-16 sm:pb-24">
        <main className="mt-10 sm:mt-24">
          <div className="mx-auto max-w-7xl">
            <div className="lg:grid lg:grid-cols-12 lg:gap-8">
              <div className=" px-4 sm:px-6 sm:text-center md:mx-auto md:max-w-2xl lg:col-span-6 lg:flex lg:items-center lg:text-left">
                <div>
                  {/* <a
                    href="#"
                    className="inline-flex items-center rounded-full bg-gray-900 p-1 pr-2 text-white hover:text-gray-200 sm:text-base lg:text-sm xl:text-base"
                  >
                    <span className="rounded-full bg-indigo-500 px-3 py-0.5 text-sm font-semibold leading-5 text-white">
                      We are hiring
                    </span>
                    <span className="ml-4 text-sm">Visit our careers page</span>
                    <ChevronRightIcon
                      className="ml-2 h-5 w-5 text-gray-500"
                      aria-hidden="true"
                    />
                  </a> */}

                  {/* animated background left blob*/}

                  <div className="invisible md:visible absolute top-15 -left-7 w-40 h-40 bg-[#038270] rounded-full filter blur-3xl opacity-50 animate-blob"></div>
                  <div>
                    <a
                      href=""
                      className="cursor-default shadow-2xl inline-flex items-center rounded-full bg-white p-1 pr-2 text-white hover:text-gray-200 sm:text-base lg:text-sm xl:text-base border-solid border-2 border-slate-200 "
                    >
                      <span className=" rounded-full bg-[#038270] px-3 py-0.5 text-sm font-semibold leading-5 text-white ">
                        Coming soon
                      </span>
                      <span className="ml-4 text-sm text-slate-900 drop-shadow-2xll">
                        Reserve now
                      </span>
                      <ChevronRightIcon
                        className="ml-2 h-5 w-5 text-gray-500"
                        aria-hidden="true"
                      />
                    </a>

                    <h1 className="py-4  bg-clip-text text-transparent bg-gradient-to-r from-[#024324] to-teal-300 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
                      Turn your knowledge into recurring revenue
                    </h1>

                    <p className="mt-3 text-base text-slate-900 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                      You have years of valuable information and resources sitting
                      in your brain or collecting dust in a Drive/Teams folder.
                      Kahana helps you turn it into hubs you can charge for access
                      to within minutes. 
                    </p>

                    <div className="grid grid-cols-2 gap-4 mt-6 tracking-tight">
                      {' '}
                      <ul role="list" className=" space-y-3">
                        {[
                          'No credit card required',
                          'Start monetizing in less than 1 hour',
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
                  </div>
                  {/* right animated blob */}

                  {/* <div className="absolute -right-1 w-40 h-20 bg-cyan-300 rounded-full filter blur-3xl animate-blob"></div> */}
                </div>
              </div>

              {/* Sign up form starts here */}
              <div className="mt-16 sm:mt-24 lg:col-span-6 lg:mt-0 ">
                <div className=" bg-white sm:mx-auto sm:w-full sm:max-w-md sm:overflow-hidden sm:rounded-lg shadow-2xl">
                  <div className="px-4 py-8 sm:px-10 ">
                    <div>
                      {/* <div className="mt-1 ">
                        <div>
                          <a
                            href="#"
                            className="inline-flex items-center w-full justify-center rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-500 shadow-sm hover:bg-gray-50"
                          >
                            <Image
                              className="mr-2"
                              src={googleLogo}
                              // width={10}
                              // height={20}
                              alt="navbar-logo"
                            />
                            Sign in with Google
                          </a>
                        </div> */}

                      {/* <div>
                          <a
                            href="#"
                            className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-500 shadow-sm hover:bg-gray-50"
                          >
                            <span className="sr-only">
                              Sign in with Twitter
                            </span>
                            <svg
                              className="h-5 w-5"
                              aria-hidden="true"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                            </svg>
                          </a>
                        </div>
                        <div>
                          <a
                            href="#"
                            className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-500 shadow-sm hover:bg-gray-50"
                          >
                            <span className="sr-only">Sign in with GitHub</span>
                            <svg
                              className="h-5 w-5"
                              aria-hidden="true"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </a> */}
                      {/* </div> */}
                    </div>

                    <div className="relative mt-6 ">
                      <div
                        className="absolute inset-0 flex items-center"
                        aria-hidden="true"
                      >
                        {/* <div className="w-full border-t border-gray-300" /> */}
                      </div>
                      {/* <div className="relative flex justify-center text-sm">
                        <span className="bg-white px-2 text-gray-500">Or</span>
                      </div> */}
                    </div>

                    <div className="mt-6">
                      {/* form starts  here */}
                      <form
                        action="https://script.google.com/macros/s/AKfycbwl44LRVat8eGmhqXP3HQm1xktp5WQEDuIXsyZ5Sz0huUnVRTDGeNt5V61YIOfaUsf-/exec"
                        method="POST"
                        className="space-y-6"
                        id="myform"
                      >
                        {/* <div>
                          <label htmlFor="name" className="sr-only">
                            Full name
                          </label>
                          <input
                            type="text"
                            name="name"
                            id="name"
                            autoComplete="name"
                            placeholder="Full name"
                            required
                            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          />
                        </div> */}

                        <div>
                          <label htmlFor="first-name" className="sr-only">
                            First name
                          </label>
                          <input
                            type="text"
                            name="Name"
                            id="name"
                            autoComplete="name"
                            placeholder="First name"
                            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-[#038270] focus:ring-[#038270] sm:text-sm"
                          />
                        </div>

                        <div>
                          <label htmlFor="password" className="sr-only">
                            Email
                          </label>
                          <input
                            id="email"
                            name="Email"
                            type="email"
                            autoComplete="email"
                            placeholder="Email"
                            required
                            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-[#038270] focus:ring-[#038270] sm:text-sm"
                          />
                        </div>

                        <div>
                          <button
                            type="submit"
                            className="flex w-full justify-center rounded-md border border-transparent bg-[#038270] py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-[#024324] focus:outline-none focus:ring-2 focus:ring-[#024324] focus:ring-offset-2 mb-3"
                            onClick={() => setShowModal(true)}
                          >
                            Join the waitlist
                          </button>
                          {showModal ? <ConfirmationModal /> : <></>}
                        </div>
                      </form>
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
