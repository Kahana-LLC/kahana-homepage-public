import React from 'react';
import Link from 'next/link';

const DigitalProductsResources = () => {
  const links = [
    {
      title: 'Best ways to prevent customers from sharing a Notion link',
      link: '/resources/best-ways-to-prevent-customers-from-sharing-a-notion-link'
    },
    {
      title: 'Helpful Link 2',
      link: '/resources/helpful-link-2'
    },
    {
      title: 'Informative Link 3',
      link: '/resources/informative-link-3'
    },
    // Add more links as needed
  ];

  return (
    <section className="bg-gray-100 py-10">
      <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
        <h2 className="text-2xl font-semibold mb-2">Resources to Sell Knowledge-Based Digital Products</h2>
        <p className="text-gray-600 mb-4 md:w-3/4 mx-auto">
          Learn best practices for monetizing your knowledge with digital products.
        </p>
        <div className="flex flex-wrap justify-center mt-6">
          {links.map((link, index) => (
            <div key={index} className="w-full sm:w-1/2 md:w-1/4 p-4">
              <Link href={link.link}>
                <a className="block bg-white p-6 rounded-lg shadow-md text-center">
                  {link.title}
                </a>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DigitalProductsResources;
