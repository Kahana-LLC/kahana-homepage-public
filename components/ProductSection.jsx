import React from 'react';
import Link from 'next/link';

const products = [
  {
    name: 'Oasis Enterprise Browser',
    description: 'Transform your browsing experience with a cutting-edge web browser that combines enterprise-grade security with innovative collaboration features. Built for the modern web user who values both privacy and productivity.',
    features: [
      'Enterprise-grade security with enhanced CSP and SSL/TLS',
      'Smart organization with customizable hubs and collections',
      'Built-in multi-view for efficient multitasking',
      'AI-powered assistant for natural language commands',
      'Modern, minimalist interface with seamless updates'
    ],
    link: '/enterprise-browser',
    image: '/products/enterprise-browser.png'
  },
  {
    name: 'Kahana Web Application',
    description: 'The complete web platform for creating, managing, and sharing your knowledge hubs with your team and clients.',
    features: [
      'Beautiful, intuitive interface',
      'Collaborative features',
      'Advanced analytics',
      'API access'
    ],
    link: '/web-application',
    image: '/products/web-app.png'
  }
];

export default function ProductSection() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-600">Our Products</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Choose the right solution for your needs
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Whether you need a secure enterprise browser or a full web application, we have the perfect solution for your workflow.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mt-20 lg:max-w-none lg:grid-cols-2">
          {products.map((product) => (
            <div key={product.name} className="flex flex-col">
              <div className="relative">
                {product.name === 'Oasis Enterprise Browser' ? (
                  <div className="aspect-[16/9] w-full overflow-hidden rounded-2xl bg-gradient-to-br from-blue-900 to-indigo-900 shadow-2xl">
                    {/* Browser Window */}
                    <div className="relative h-full w-full">
                      {/* Browser Header */}
                      <div className="flex h-12 items-center justify-between bg-blue-950 px-4">
                        <div className="flex items-center space-x-2">
                          <div className="h-3 w-3 rounded-full bg-red-400"></div>
                          <div className="h-3 w-3 rounded-full bg-yellow-400"></div>
                          <div className="h-3 w-3 rounded-full bg-green-400"></div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="h-4 w-4 rounded-full bg-blue-400 opacity-50"></div>
                          <div className="h-4 w-4 rounded-full bg-blue-400 opacity-50"></div>
                          <div className="h-4 w-4 rounded-full bg-blue-400 opacity-50"></div>
                        </div>
                      </div>
                      
                      {/* Browser Content */}
                      <div className="h-[calc(100%-3rem)] bg-gradient-to-br from-blue-50 to-indigo-50">
                        {/* URL Bar */}
                        <div className="flex h-12 items-center border-b border-blue-100 px-4">
                          <div className="flex h-8 w-full items-center rounded-lg bg-white px-3 shadow-sm">
                            <svg className="h-4 w-4 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                            <span className="ml-2 text-sm text-blue-600">kahana.com</span>
                          </div>
                        </div>
                        
                        {/* Browser Content Area */}
                        <div className="relative h-[calc(100%-3rem)] overflow-hidden">
                          {/* AI Assistant Chat */}
                          <div className="absolute bottom-4 right-4 w-64 rounded-lg bg-white p-4 shadow-lg">
                            <div className="flex items-center space-x-2">
                              <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center">
                                <svg className="h-4 w-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                </svg>
                              </div>
                              <div className="flex-1">
                                <div className="h-2 w-3/4 rounded bg-blue-100 animate-pulse"></div>
                                <div className="mt-1 h-2 w-1/2 rounded bg-blue-100 animate-pulse delay-75"></div>
                                <div className="mt-1 h-2 w-2/3 rounded bg-blue-100 animate-pulse delay-150"></div>
                              </div>
                            </div>
                          </div>
                          
                          {/* Content Grid */}
                          <div className="relative grid h-full grid-cols-2 gap-4 p-4">
                            {[1, 2, 3, 4].map((i) => (
                              <div
                                key={i}
                                className="group relative overflow-hidden rounded-lg bg-white p-4 shadow-sm transition-all duration-300 hover:shadow-md"
                              >
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                                <div className="relative">
                                  <div className="h-4 w-3/4 rounded bg-blue-100"></div>
                                  <div className="mt-2 h-3 w-1/2 rounded bg-blue-100"></div>
                                </div>
                              </div>
                            ))}
                          </div>
                          
                          {/* Floating Elements */}
                          <div className="absolute inset-0">
                            <div className="absolute top-1/4 left-1/4 animate-float">
                              <div className="h-8 w-8 rounded-full bg-blue-200 opacity-20"></div>
                            </div>
                            <div className="absolute bottom-1/4 right-1/4 animate-float-delayed">
                              <div className="h-8 w-8 rounded-full bg-indigo-200 opacity-20"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="aspect-[16/9] w-full overflow-hidden rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-4xl">🚀</span>
                    </div>
                  </div>
                )}
              </div>
              <div className="mt-6 flex items-center gap-x-4">
                <h3 className="text-lg font-semibold leading-8 tracking-tight text-gray-900">
                  {product.name}
                </h3>
              </div>
              <p className="mt-2 text-base leading-7 text-gray-600">
                {product.description}
              </p>
              <ul role="list" className="mt-4 space-y-2">
                {product.features.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <svg className="h-6 w-5 flex-none text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm leading-6 text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <Link
                  href={product.link}
                  className="inline-flex items-center rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                >
                  Learn more
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 