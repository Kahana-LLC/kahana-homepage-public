import React from 'react';
import Link from 'next/link';

const ResourcesCallToAction = () => {
  return (
    <section className="bg-gray-100 py-10">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-2xl font-semibold mb-2">
          Want to start monetizing your knowledge?
        </h2>
        <p className="text-gray-600 my-4 px-4">
          Start charging for access to your best assets in minutes with Kahana.
        </p>
        <div className="mt-4">
          <Link href="/schedule-a-demo">
            <button className="inline-block px-6 py-3 bg-kahana-primary text-white rounded-md hover:bg-kahana-primary-dark transition-colors">
              Schedule a Demo
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ResourcesCallToAction;
