const faqs = [
  {
    question: 'What does Kahana do?',
    answer:
      'Kahana is an online platform that provides infrastructure for content creation, collaboration, knowledge sharing, and subscription revenue. It allows users to curate content into hubs that they can share and monetize.',
  },
  {
    question: 'How much does Kahana cost?',
    answer:
      'There is no out-of-pocket cost for signing up for Kahana. In addition, no credit card or payment information is required for the free plan. Kahana also offers paid plans for premium features. While there is no upfront cost to monetize, Kahana takes a small percentage of earnings as users earn money through monetized hubs.',
  },
  {
    question: 'Can I use Kahana for free?',
    answer:
      "Kahana is totally free to use forever. In fact, if you remain on Kahana's free plan and never get a subscriber on a hub, you'll never pay a dime.",
  },
  {
    question: 'How do I get paid from Kahana?',
    answer:
      'To get paid from Kahana, connect your Stripe account. Once the connection is confirmed, you can manage your payouts to occur automatically or manually through Stripe. In a nutshell, you earn money when people subscribe to your monetized hubs.',
  },

  // More questions...
];

export default function Faq() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:py-20 lg:px-8">
        <div className="lg:grid lg:grid-cols-3 lg:gap-8">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">
              Frequently asked questions
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Can’t find the answer you’re looking for? Email to our customer
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
