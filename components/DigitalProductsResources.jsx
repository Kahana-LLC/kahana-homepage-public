import React from 'react';
import Link from 'next/link';

const DigitalProductsResources = () => {
  const links = [
    {
      title: 'Best ways to prevent customers from sharing a Notion link',
      link: '/resources/best-ways-to-prevent-customers-from-sharing-a-notion-link'
    },
    {
      title: 'Ultimate Guide to Sell Information Products',
      link: '/resources/ultimate-guide-to-sell-information-products'
    },
    {
      title: 'Best ways to sell knowledge-based products',
      link: '/resources/best-ways-to-sell-knowledge-based-products'
    },
    {
      title: 'Best ways to prevent stealing content & information in digital products',
      link: '/resources/best-ways-to-prevent-stealing-content-information-in-digital-products'
    },
  ];

  return (
    <section className="bg-gray-100 py-10">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-2xl font-semibold mb-2 px-2">Resources to Sell Knowledge-Based Digital Products</h2>
        <p className="text-gray-600 px-2">
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
