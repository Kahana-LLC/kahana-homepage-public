import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function KeyboardShortcuts() {
  return (
    <>
      <Head>
        <title>Keyboard Shortcuts | Kahana Browser Documentation</title>
        <meta
          name="description"
          content="Learn all keyboard shortcuts for Kahana Browser to improve your productivity."
        />
      </Head>

      <div className="bg-white">
        <div className="max-w-4xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h1>Keyboard Shortcuts</h1>
            <p className="lead">
              Master Kahana Browser's keyboard shortcuts to navigate and work more efficiently.
            </p>

            <h2>Navigation</h2>
            <div className="bg-gray-50 p-6 rounded-lg">
              <pre className="bg-white p-4 rounded-md overflow-x-auto">
                <code>
                  ⌘/Ctrl + N - New window
                  ⌘/Ctrl + T - New tab
                  ⌘/Ctrl + W - Close tab
                  ⌘/Ctrl + R - Refresh page
                  ⌘/Ctrl + L - Focus URL bar
                </code>
              </pre>
            </div>

            <h2>Hub Management</h2>
            <div className="bg-gray-50 p-6 rounded-lg">
              <pre className="bg-white p-4 rounded-md overflow-x-auto">
                <code>
                  ⌘/Ctrl + Shift + N - New Hub
                  ⌘/Ctrl + Shift + H - Show/Hide Hubs sidebar
                  ⌘/Ctrl + Shift + S - Save to Hub
                </code>
              </pre>
            </div>

            <h2>View Management</h2>
            <div className="bg-gray-50 p-6 rounded-lg">
              <pre className="bg-white p-4 rounded-md overflow-x-auto">
                <code>
                  ⌘/Ctrl + Shift + L - Split screen left
                  ⌘/Ctrl + Shift + R - Split screen right
                  ⌘/Ctrl + Shift + T - Triple view
                </code>
              </pre>
            </div>

            <h2>AI Assistant</h2>
            <div className="bg-gray-50 p-6 rounded-lg">
              <pre className="bg-white p-4 rounded-md overflow-x-auto">
                <code>
                  ⌘/Ctrl + Space - Open AI Assistant
                  ⌘/Ctrl + Shift + Space - Quick command
                </code>
              </pre>
            </div>

            <h2>Search and Navigation</h2>
            <div className="bg-gray-50 p-6 rounded-lg">
              <pre className="bg-white p-4 rounded-md overflow-x-auto">
                <code>
                  ⌘/Ctrl + F - Find in page
                  ⌘/Ctrl + Shift + F - Search across all content
                  ⌘/Ctrl + G - Find next
                  ⌘/Ctrl + Shift + G - Find previous
                </code>
              </pre>
            </div>

            <h2>Window Management</h2>
            <div className="bg-gray-50 p-6 rounded-lg">
              <pre className="bg-white p-4 rounded-md overflow-x-auto">
                <code>
                  ⌘/Ctrl + M - Minimize window
                  ⌘/Ctrl + Shift + M - Maximize window
                  ⌘/Ctrl + Shift + D - Organize windows
                </code>
              </pre>
            </div>

            <h2>Tips and Tricks</h2>
            <ul>
              <li>Use the AI Assistant to discover new shortcuts</li>
              <li>Customize shortcuts in Settings</li>
              <li>Combine shortcuts for complex actions</li>
              <li>Use the command palette (⌘/Ctrl + Shift + P) for quick access</li>
            </ul>

            <div className="bg-gray-50 p-6 rounded-lg mt-8">
              <h3 className="text-lg font-semibold mb-2">Related Topics</h3>
              <ul>
                <li><Link href="/docs/ai-assistant">Using AI Assistant</Link></li>
                <li><Link href="/docs/multi-view">Multi-View Features</Link></li>
                <li><Link href="/docs/settings">Customizing Shortcuts</Link></li>
                <li><Link href="/docs/hubs">Hub Management</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 