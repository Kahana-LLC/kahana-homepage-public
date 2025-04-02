import React from 'react';
import Link from 'next/link';

export default function Troubleshooting() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">Troubleshooting Guide</h1>
        <div className="prose max-w-none">
          <p className="text-lg mb-6">
            Find solutions to common issues and learn how to troubleshoot Kahana Browser.
          </p>
          {/* Add content here */}
        </div>
      </div>
    </div>
  );
} 