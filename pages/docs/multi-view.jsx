import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function MultiView() {
  return (
    <>
      <Head>
        <title>Multi-View Features | Kahana Browser Documentation</title>
        <meta
          name="description"
          content="Learn how to use Kahana Browser's multi-view features for efficient multitasking."
        />
      </Head>

      <div className="bg-white">
        <div className="max-w-4xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h1>Multi-View Features</h1>
            <p className="lead">
              Kahana Browser's multi-view features allow you to work with multiple websites simultaneously, enhancing your productivity and workflow.
            </p>

            <h2>Split-Screen View</h2>
            <p>Work with two websites side by side:</p>
            <ol>
              <li>Use the command "SHOW [website1] AND [website2] SIDE BY SIDE"</li>
              <li>Or click the split-screen button in the toolbar</li>
              <li>Drag websites between panes</li>
              <li>Resize panes as needed</li>
            </ol>

            <h2>Triple View</h2>
            <p>View three websites simultaneously:</p>
            <ol>
              <li>Use the command "TRIPLE VIEW"</li>
              <li>Or select three websites to view simultaneously</li>
              <li>Customize the layout</li>
              <li>Save your preferred configuration</li>
            </ol>

            <h2>Layout Management</h2>
            <p>Customize your multi-view experience:</p>
            <ul>
              <li><strong>Resize Panes:</strong> Drag the dividers between panes</li>
              <li><strong>Rearrange Content:</strong> Drag and drop websites between panes</li>
              <li><strong>Save Layouts:</strong> Store your preferred configurations</li>
              <li><strong>Quick Switch:</strong> Switch between different layouts</li>
            </ul>

            <h2>Keyboard Shortcuts</h2>
            <div className="bg-gray-50 p-6 rounded-lg">
              <pre className="bg-white p-4 rounded-md overflow-x-auto">
                <code>
                  ⌘/Ctrl + Shift + L - Split screen left
                  ⌘/Ctrl + Shift + R - Split screen right
                  ⌘/Ctrl + Shift + T - Triple view
                </code>
              </pre>
            </div>

            <h2>Tips and Tricks</h2>
            <ul>
              <li>Use the AI Assistant to quickly set up complex layouts</li>
              <li>Save frequently used layouts for quick access</li>
              <li>Use keyboard shortcuts for faster navigation</li>
              <li>Combine with Hubs for organized multi-view workspaces</li>
              <li>Use the "TIDY UP" command to organize your windows</li>
            </ul>

            <div className="bg-gray-50 p-6 rounded-lg mt-8">
              <h3 className="text-lg font-semibold mb-2">Related Topics</h3>
              <ul>
                <li><Link href="/docs/keyboard-shortcuts">Keyboard Shortcuts</Link></li>
                <li><Link href="/docs/ai-assistant">Using AI Assistant with Multi-View</Link></li>
                <li><Link href="/docs/hubs">Working with Hubs in Multi-View</Link></li>
                <li><Link href="/docs/settings">Multi-View Settings</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 