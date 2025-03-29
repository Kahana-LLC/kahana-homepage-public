import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function GettingStarted() {
  return (
    <>
      <Head>
        <title>Getting Started with Kahana Browser | Documentation</title>
        <meta
          name="description"
          content="Learn how to install and set up Kahana Browser for the first time."
        />
      </Head>

      <div className="bg-white">
        <div className="max-w-4xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h1>Getting Started with Kahana Browser</h1>
            <p className="lead">
              Welcome to Kahana Browser! This guide will help you get up and running with our enterprise browsing solution.
            </p>

            <h2>Installation</h2>
            <ol>
              <li>Download Kahana Browser from our official website</li>
              <li>Run the installer for your operating system</li>
              <li>Follow the installation wizard</li>
              <li>Launch Kahana Browser</li>
            </ol>

            <h2>First-Time Setup</h2>
            <p>After installation, you'll want to complete these essential setup steps:</p>
            <ul>
              <li>Import your existing bookmarks and browsing data</li>
              <li>Create your first Hub</li>
              <li>Configure your preferred settings</li>
              <li>Get acquainted with the AI Assistant</li>
            </ul>

            <h2>Next Steps</h2>
            <p>Once you've completed the initial setup, you can explore:</p>
            <ul>
              <li><Link href="/docs/hubs">Creating and Managing Hubs</Link></li>
              <li><Link href="/docs/ai-assistant">Using the AI Assistant</Link></li>
              <li><Link href="/docs/multi-view">Working with Multiple Views</Link></li>
              <li><Link href="/docs/settings">Configuring Browser Settings</Link></li>
            </ul>

            <div className="bg-gray-50 p-6 rounded-lg mt-8">
              <h3 className="text-lg font-semibold mb-2">Need Help?</h3>
              <p className="mb-4">If you encounter any issues during installation or setup:</p>
              <ul>
                <li>Check our <Link href="/docs/troubleshooting">Troubleshooting Guide</Link></li>
                <li>Review the <Link href="/docs/faq">Frequently Asked Questions</Link></li>
                <li>Contact our support team</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 