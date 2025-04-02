import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function Hubs() {
  return (
    <>
      <Head>
        <title>Hubs System | Kahana Browser Documentation</title>
        <meta
          name="description"
          content="Learn about Kahana Browser's Hubs system for organizing and collaborating on web content."
        />
      </Head>

      <div className="bg-white">
        <div className="max-w-4xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h1>Hubs System</h1>
            <p className="lead">
              Hubs are the heart of Kahana Browser's organization system, allowing you to group and manage related web content efficiently.
            </p>

            <h2>Creating a Hub</h2>
            <p>Follow these steps to create your first Hub:</p>
            <ol>
              <li>Click the "+New Hub" button in the sidebar</li>
              <li>Name your Hub</li>
              <li>Add websites by dragging and dropping or using the URL bar</li>
              <li>Organize content with tags and categories</li>
            </ol>

            <h2>Managing Hubs</h2>
            <p>Once created, you can manage your Hubs in several ways:</p>
            <ul>
              <li><strong>Rename Hubs:</strong> Click the Hub name to edit</li>
              <li><strong>Delete Hubs:</strong> Use the menu options to remove unwanted Hubs</li>
              <li><strong>Share Hubs:</strong> Invite others to view or collaborate</li>
              <li><strong>Set Permissions:</strong> Control who can view or edit Hub content</li>
              <li><strong>Archive Hubs:</strong> Store inactive Hubs for future reference</li>
            </ul>

            <h2>Hub Collaboration</h2>
            <p>Hubs make it easy to work together with your team:</p>
            <ul>
              <li><strong>Invite Team Members:</strong> Share Hubs with specific users or groups</li>
              <li><strong>Access Permissions:</strong> Set different levels of access for team members</li>
              <li><strong>Track Changes:</strong> See who modified what and when</li>
              <li><strong>Real-time Updates:</strong> Changes sync instantly across all users</li>
              <li><strong>Discussion:</strong> Comment and discuss content within Hubs</li>
            </ul>

            <h2>Best Practices</h2>
            <p>To get the most out of Hubs:</p>
            <ul>
              <li>Use clear, descriptive names for your Hubs</li>
              <li>Organize content with consistent tagging</li>
              <li>Regularly review and archive unused Hubs</li>
              <li>Set appropriate permissions for team access</li>
              <li>Use categories to group related Hubs</li>
            </ul>

            <div className="bg-gray-50 p-6 rounded-lg mt-8">
              <h3 className="text-lg font-semibold mb-2">Related Topics</h3>
              <ul>
                <li><Link href="/docs/multi-view">Working with Multiple Views</Link></li>
                <li><Link href="/docs/ai-assistant">Using AI Assistant with Hubs</Link></li>
                <li><Link href="/docs/settings">Hub-specific Settings</Link></li>
                <li><Link href="/docs/getting-started#troubleshooting">Troubleshooting Hub Issues</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 