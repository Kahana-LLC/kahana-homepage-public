import React from 'react';

const faqs = [
  {
    question: 'What is Kahana?',
    answer: (
      <span>
        You can think of Kahana as Patreon meets Google Drive - it&apos;s a collaborative platform you can use to quickly build and protect digital products through &apos;hubs&apos; of content.
      </span>
    ),
  },
  {
    question: 'What is a hub?',
    answer: (
      <span>
        Hubs are the core functional units of Kahana - you earn revenue through Kahana by selling access to your hub(s). In any given hub, you upload the content you want to sell on any given topic (e.g., e-books, courses, frameworks, links, etc.), set a price point and payment type (one-time or subscription), add a title, description, and cover image (optional), and share the link to start earning. A hub is flexible and can ultimately have as many or as few files as you want. For example, you can sell a single e-book or video through one hub or a bundle of PDFs and videos through one hub. 
      </span>
    ),
  },
  {
    question: 'What does a hub look like?',
    answer: (
      <span>
        You can check out our{' '}
        <a href="https://kahana.co/explore" className="text-[#038270] font-medium">
          Featured Hubs
        </a>{' '}
        page for examples of what a hub looks like.
      </span>
    ),
  },
  {
    question: 'How does Kahana protect my digital products?',
    answer: (
      <span>
        Other monetization platforms typically send customers to a page where they can directly download your digital products after payment, which makes it incredibly easy for customers to resell or distribute them to others for free. Within Kahana hubs, downloading is disabled and people who have not paid are blocked from accessing its contents, preventing unauthorized/unpaid access to your digital products. 
      </span>
    ),
  },
  {
    question: 'I don\'t have any digital products. How do I get started with Kahana?',
    answer: (
      <span>
        Kahana is designed to make the process of creating digital products much faster. Instead of having to build something completely from scratch, like a course or an e-book, you can use a hub to create a collection of helpful information from existing assets (e.g., Google Docs, Google Sheets, templates, frameworks, articles, YouTube videos). Said differently, you can curate and charge for access to existing resources that teach people about a specific topic or help them achieve a certain goal.
        If you need more help, we put together a{' '}
        <a href="https://blog.kahana.co/how-to-create-your-first-digital-product/" className="text-[#038270] font-medium">
          step-by-step guide
        </a>{' '}
        to show you how you can quickly identify something you know a lot about and are passionate about and turn it into a hub. 
      </span>
    ),
  },
  {
    question: 'Is Kahana free to use?',
    answer: 'Yes! You can use Kahana for free, forever.',
  },
  {
    question: 'How do I get paid from Kahana?',
    answer: (
      <span>
        In a nutshell, you earn money when people pay to access your monetized hubs. In order to charge for access to your hubs, you can connect to Stripe, which you can do by following{' '}
        <a href="https://blog.kahana.co/connect-stripe/" className="text-[#038270] font-medium">
          these steps
        </a>
        .
      </span>
    ),
  },
  // More questions...
];

/* const faqs = [
  {
    question: 'What is Kahana?',
    answer:
      'You can think of Kahana as Patreon meets Google Drive - it\'s a collaborative platform that lets you create hubs of knowledge with other creators & experts and monetize <i>together</i>. You can upload your best knowledge (information you\'ve learned, notes, methodologies, best practices, and templates you\'ve curated and created, etc.) and charge for access to it without having to build something from scratch.',
  },
  {
    question: 'Is Kahana free to use?',
    answer:
      'Yes! You can use Kahana for free, forever.',
  },
  {
    question: 'What does a hub look like?',
    answer:
      'You can check out our <a href="https://kahana.co/explore" class="text-[#038270] font-medium">Featured Hubs</a> page for examples of what a hub looks like.',
  },
  {
    question: 'How do I think about starting a hub?',
    answer:
      'The first step is to recognize that you have unique knowledge! Everyone has a topic, field, or skill that they could teach someone who was in their shoes two years ago, a year ago, or even six months ago. If you need help finding yours, we put together a <a href="https://blog.kahana.co/how-to-create-your-first-digital-product/" class="text-[#038270] font-medium">step-by-step guide</a> to show you how you can quickly identify something you know a lot about and are passionate about, and turn it into a hub.',
  },
  {
    question: 'How do I get paid from Kahana?',
    answer:
      'In a nutshell, you earn money when people subscribe to your monetized hubs. In order to charge for access to your hubs, you can connect to Stripe, which you can do by following <a href="https://blog.kahana.co/connect-stripe/" class="text-[#038270] font-medium">these steps</a>.',
  },

  // More questions...
]; */

export default function Faq() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:py-20 lg:px-8">
        <div className="lg:grid lg:grid-cols-3 lg:gap-8">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 text-center sm:text-left">
              Frequently asked questions
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Can’t find the answer you’re looking for? Email our customer
              support{' '}
              <a
                href="mailto:info@kahana.co"
                className="font-medium text-[#038270]"
              >
                info@kahana.co
              </a>{' '}
            </p>
          </div>
          <div className="mt-12 lg:col-span-2 lg:mt-0">
            <dl className="space-y-12">
              {faqs.map((faq) => (
                <div key={faq.question}>
                  <dt className="text-lg font-medium leading-6 text-gray-900">
                    {faq.question}
                  </dt>
                  <dd className="mt-2 text-base text-gray-500">{faq.answer}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}
