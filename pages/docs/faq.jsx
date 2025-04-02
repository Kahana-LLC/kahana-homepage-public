import React from 'react';
import Link from 'next/link';

export default function FAQ() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">Frequently Asked Questions</h1>
        <div className="prose max-w-none">
          <p className="text-lg mb-6">
            Find answers to commonly asked questions about Kahana Browser.
          </p>
          {/* Add content here */}
        </div>
      </div>
    </div>
  );
} 