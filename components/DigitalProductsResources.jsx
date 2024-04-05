import React from 'react';
import Link from 'next/link';

const DigitalProductsResources = () => {
  const links = [
    {
      title: (
        <div className="bg-[#D1ECE8] p-4 border-2 border-[#3B675E] rounded-2xl shadow-lg">
          <p className="font-bold">Best ways to make money from selling digital templates</p>
        </div>
      ),
      link: '/resources/best-ways-to-make-money-from-selling-digital-templates',
    },
    {
      title: (
        <div className="bg-[#D1ECE8] p-4 border-2 border-[#3B675E] rounded-2xl shadow-lg">
          <p className="font-bold">Ultimate Guide to Sell Information Products</p>
        </div>
      ),
      link: '/resources/ultimate-guide-to-sell-information-products',
    },
    {
      title: (
        <div className="bg-[#D1ECE8] p-4 border-2 border-[#3B675E] rounded-2xl shadow-lg">
          <p className="font-bold">Best ways to sell knowledge-based products</p>
        </div>
      ),
      link: '/resources/best-ways-to-sell-knowledge-based-products',
    },
    {
      title: (
        <div className="bg-[#D1ECE8] p-4 border-2 border-[#3B675E] rounded-2xl shadow-lg">
          <p className="font-bold">Best ways to prevent stealing content &amp; information in digital products</p>
        </div>
      ),
      link: '/resources/best-ways-to-prevent-stealing-content-and-information-in-digital-products',
    },
  ];

  return (
    <section className="bg-gray-100 py-10">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-2xl font-semibold mb-2 px-2">
          Resources to Sell Knowledge-Based Digital Products
        </h2>
        <p className="text-gray-600 px-2">
          Learn best practices for monetizing your knowledge with digital products.
        </p>
        <div className="flex flex-wrap justify-center mt-6">
          {links.map((link, index) => (
            <div key={index} className="w-full sm:w-1/2 md:w-1/4 p-4">
              <Link href={link.link} className="block bg-white p-6 rounded-lg shadow-md text-center" legacyBehavior>
                {link.title}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DigitalProductsResources;