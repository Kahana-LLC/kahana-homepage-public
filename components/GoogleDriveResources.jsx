import React from 'react';
import Link from 'next/link';

const GoogleDriveResources = () => {
  const links = [
    {
      title: 'How to make money with Google Docs',
      link: '/resources/how-to-make-money-with-google-docs'
    },
    {
      title: 'How to make money with Google Drive',
      link: '/resources/how-to-make-money-with-google-drive'
    },
    {
      title: 'How to sell products hosted on Google Drive',
      link: '/resources/how-to-sell-products-hosted-on-google-drive'
    },
    {
      title: 'How to sell digital products online with Google Drive',
      link: '/resources/how-to-sell-digital-products-online-with-google-drive'
    },
    {
      title: 'How to sell a Google Doc',
      link: '/resources/how-to-sell-a-google-doc'
    },
    {
      title: 'How to make money online with Google Sheets',
      link: '/resources/how-to-make-money-online-with-google-sheets'
    },
    {
      title: 'How to monetize a spreadsheet',
      link: '/resources/how-to-monetize-a-spreadsheet'
    },
    {
      title: 'How to charge for spreadsheets',
      link: '/resources/how-to-charge-for-spreadsheets'
    },
    {
      title: 'How to sell Excel or Google spreadsheets',
      link: '/resources/how-to-sell-excel-or-google-spreadsheets'
    },
    {
      title: 'Where to sell Google Sheets',
      link: '/resources/where-to-sell-google-sheets'
    },
    {
      title: 'Best-selling spreadsheets',
      link: '/resources/best-selling-spreadsheets'
    },
    {
      title: 'Best ways to make money selling Google Sheets',
      link: '/resources/best-ways-to-make-money-selling-google-sheets'
    },
    {
      title: 'How to sell spreadsheets online',
      link: '/resources/how-to-sell-spreadsheets-online'
    },
  ];

  return (
    <section className="bg-gray-100 py-10">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-2xl font-semibold mb-2 px-2">Resources to Monetize Google Drive</h2>
        <p className="text-gray-600 px-2">
          Learn how to securely monetize your best knowledge and assets that live in your Google Drive.
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

export default GoogleDriveResources;
