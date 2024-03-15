import React from 'react';

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
          <a
            href="https://app.kahana.co/signup"
            className="inline-block px-6 py-3 bg-[#3B675E] text-white rounded-md"
          >
            Use Kahana for free
          </a>
        </div>
      </div>
    </section>
  );
};

export default ResourcesCallToAction;
