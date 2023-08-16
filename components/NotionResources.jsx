import React from 'react';
import Link from 'next/link';

const NotionResources = () => {
  const links = [
    {
      title: 'How to limit access to a Notion workspace link',
      link: '/resources/how-to-limit-access-to-a-notion-workspace-link'
    },
    {
      title: 'Best ways to prevent customers from sharing a Notion link',
      link: '/resources/best-ways-to-prevent-customers-from-sharing-a-notion-link'
    },
    {
      title: 'How to monetize Notion workspaces',
      link: '/resources/how-to-monetize-notion-workspaces'
    },
    {
      title: 'How to make money off Notion',
      link: '/resources/how-to-make-money-off-notion'
    },
    {
      title: 'How to sell Notion templates profitably',
      link: '/resources/how-to-sell-notion-templates-profitably'
    },
    {
      title: 'Where to sell Notion templates',
      link: '/resources/where-to-sell-notion-templates'
    },
    {
      title: 'Market Overview for Notion Templates',
      link: '/resources/market-overview-for-notion-templates'
    },
      {
      title: 'How to sell Notion templates',
      link: '/resources/how-to-sell-notion-templates'
    },
    {
      title: 'Profit calculator for selling Notion templates',
      link: '/resources/profit-calculator-for-selling-notion-templates'
    },
    {
      title: 'Guide to making money on Notion',
      link: '/resources/guide-to-making-money-on-notion'
    },
    {
      title: 'Best tips for selling Notion templates',
      link: '/resources/best-tips-for-selling-notion-templates'
    },
      {
      title: 'How to create Notion templates',
      link: '/resources/how-to-create-notion-templates'
    },
    {
      title: 'Best-selling Notion templates',
      link: '/resources/best-selling-notion-templates'
    },
    {
      title: 'Best Notion side hustles',
      link: '/resources/best-notion-side-hustles'
    },
    {
      title: 'Best ways to make money with Notion',
      link: '/resources/best-ways-to-make-money-with-notion'
    },
      {
      title: 'Best ways to create and sell Notion templates',
      link: '/resources/best-ways-to-create-and-sell-notion-templates'
    },
    {
      title: 'How to make and sell Notion templates for passive income',
      link: '/resources/how-to-make-and-sell-notion-templates-for-passive-income'
    },
    {
      title: 'Best ways to prevent stealing Notion templates',
      link: '/resources/best-ways-to-prevent-stealing-notion-templates'
    },
    {
      title: 'How to sell Notion templates safely',
      link: '/resources/how-to-sell-notion-templates-safely'
    },
      {
      title: 'How to make selling Notion templates worth it',
      link: '/resources/how-to-make-selling-notion-templates-worth-it'
    },
    {
      title: 'How people buy Notion templates',
      link: '/resources/how-people-buy-notion-templates'
    },
    {
      title: 'Best ways to turn Notion workspace into money',
      link: '/resources/best-ways-to-turn-notion-workspace-into-money'
    },
    {
      title: 'Best ways to sell a Notion page',
      link: '/resources/best-ways-to-sell-a-notion-page'
    },
      {
      title: 'How NOT to sell Notion templates on Gumroad',
      link: '/resources/how-not-to-sell-notion-templates-on-gumroad'
    },
    {
      title: 'How to create Notion templates to sell',
      link: '/resources/how-to-create-notion-templates-to-sell'
    },
    {
      title: 'Selling Notion templates best practices',
      link: '/resources/selling-notion-templates-best-practices'
    },
    {
      title: 'Notion templates best practices',
      link: '/resources/notion-templates-best-practices'
    },
  ];

  return (
    <section className="bg-gray-100 py-10">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-2xl font-semibold mb-2 px-2">Resources to Monetize Notion</h2>
        <p className="text-gray-600 px-2">
          Learn how to securely monetize your best knowledge, information, and templates that live in Notion.
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

export default NotionResources;
