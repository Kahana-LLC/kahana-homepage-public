import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function Settings() {
  return (
    <>
      <Head>
        <title>Browser Settings | Kahana Browser Documentation</title>
        <meta
          name="description"
          content="Learn how to customize and configure Kahana Browser settings for optimal performance."
        />
      </Head>

      <div className="bg-white">
        <div className="max-w-4xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h1>Browser Settings</h1>
            <p className="lead">
              Customize Kahana Browser to match your preferences and optimize your browsing experience.
            </p>

            <h2>General Settings</h2>
            <p>Configure basic browser preferences:</p>
            <ul>
              <li><strong>Homepage:</strong> Set your preferred start page</li>
              <li><strong>Default Search Engine:</strong> Choose your preferred search provider</li>
              <li><strong>Language:</strong> Select your preferred language</li>
              <li><strong>Appearance:</strong> Customize theme and visual settings</li>
              <li><strong>Font Settings:</strong> Adjust text size and font preferences</li>
            </ul>

            <h2>Privacy Settings</h2>
            <p>Manage your privacy preferences:</p>
            <ul>
              <li><strong>Cookie Management:</strong> Control how cookies are handled</li>
              <li><strong>Tracking Protection:</strong> Configure tracking prevention</li>
              <li><strong>History Settings:</strong> Manage browsing history</li>
              <li><strong>Cache Control:</strong> Adjust cache settings</li>
              <li><strong>Data Deletion:</strong> Clear browsing data</li>
            </ul>

            <h2>Performance Settings</h2>
            <p>Optimize browser performance:</p>
            <ul>
              <li><strong>Hardware Acceleration:</strong> Enable/disable GPU acceleration</li>
              <li><strong>Memory Management:</strong> Configure memory usage</li>
              <li><strong>Cache Size:</strong> Adjust cache storage limits</li>
              <li><strong>Background Processes:</strong> Manage background tasks</li>
              <li><strong>Resource Usage:</strong> Monitor and control resource consumption</li>
            </ul>

            <h2>Hub Settings</h2>
            <p>Customize Hub behavior:</p>
            <ul>
              <li><strong>Default View:</strong> Set preferred Hub layout</li>
              <li><strong>Auto-save:</strong> Configure automatic saving</li>
              <li><strong>Sharing Options:</strong> Set default sharing preferences</li>
              <li><strong>Organization:</strong> Customize Hub organization</li>
            </ul>

            <h2>AI Assistant Settings</h2>
            <p>Configure AI Assistant preferences:</p>
            <ul>
              <li><strong>Command Recognition:</strong> Adjust voice command sensitivity</li>
              <li><strong>Suggestions:</strong> Customize suggestion behavior</li>
              <li><strong>Privacy:</strong> Manage AI data collection</li>
              <li><strong>Language:</strong> Set preferred language for AI interactions</li>
            </ul>

            <h2>Accessibility Settings</h2>
            <p>Make Kahana Browser more accessible:</p>
            <ul>
              <li><strong>Screen Reader:</strong> Configure screen reader support</li>
              <li><strong>High Contrast:</strong> Enable high contrast mode</li>
              <li><strong>Text Scaling:</strong> Adjust text size and spacing</li>
              <li><strong>Keyboard Navigation:</strong> Customize keyboard controls</li>
            </ul>

            <div className="bg-gray-50 p-6 rounded-lg mt-8">
              <h3 className="text-lg font-semibold mb-2">Related Topics</h3>
              <ul>
                <li><Link href="/docs/privacy">Privacy Features</Link></li>
                <li><Link href="/docs/accessibility">Accessibility Options</Link></li>
                <li><Link href="/docs/keyboard-shortcuts">Keyboard Shortcuts</Link></li>
                <li><Link href="/docs/troubleshooting">Troubleshooting</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 