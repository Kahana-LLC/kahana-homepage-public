import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function AIAssistant() {
  return (
    <>
      <Head>
        <title>AI Assistant | Kahana Browser Documentation</title>
        <meta
          name="description"
          content="Learn how to use Kahana Browser's AI Assistant to enhance your browsing experience."
        />
      </Head>

      <div className="bg-white">
        <div className="max-w-4xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h1>AI Assistant</h1>
            <p className="lead">
              Kahana Browser's AI Assistant helps you navigate, organize, and manage your browsing experience using natural language commands.
            </p>

            <h2>Basic Commands</h2>
            <p>Here are the most commonly used AI Assistant commands:</p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <pre className="bg-white p-4 rounded-md overflow-x-auto">
                <code>
                  SEARCH [query] - Search across all content
                  FIND [term] - Find specific information
                  LIST HUBS - View all your Hubs
                  SHOW [hub name] - Open a specific Hub
                  NEW WINDOW - Open a new window
                  TIDY UP - Organize your windows
                </code>
              </pre>
            </div>

            <h2>Advanced Features</h2>
            <p>The AI Assistant offers several powerful features to enhance your browsing experience:</p>
            <ul>
              <li><strong>Natural Language Processing:</strong> Understand and respond to conversational commands</li>
              <li><strong>Context-aware Suggestions:</strong> Get relevant recommendations based on your current activity</li>
              <li><strong>Smart Content Organization:</strong> Automatically categorize and tag content</li>
              <li><strong>Automated Window Management:</strong> Intelligently arrange and organize your browser windows</li>
              <li><strong>Real-time Assistance:</strong> Get immediate help and guidance as you browse</li>
            </ul>

            <h2>Using the AI Assistant</h2>
            <p>To interact with the AI Assistant:</p>
            <ol>
              <li>Click the AI Assistant icon in the toolbar or use the keyboard shortcut (⌘/Ctrl + Space)</li>
              <li>Type your command or question in natural language</li>
              <li>Review the suggested actions or responses</li>
              <li>Select the desired action or ask for clarification</li>
            </ol>

            <h2>Tips and Tricks</h2>
            <ul>
              <li>Use natural language - the AI understands conversational commands</li>
              <li>Be specific in your requests for better results</li>
              <li>Use the "TIDY UP" command to organize your workspace</li>
              <li>Combine commands for complex actions</li>
              <li>Ask for help when you're stuck</li>
            </ul>

            <div className="bg-gray-50 p-6 rounded-lg mt-8">
              <h3 className="text-lg font-semibold mb-2">Related Topics</h3>
              <ul>
                <li><Link href="/docs/keyboard-shortcuts">Keyboard Shortcuts</Link></li>
                <li><Link href="/docs/hubs">Working with Hubs</Link></li>
                <li><Link href="/docs/multi-view">Managing Multiple Views</Link></li>
                <li><Link href="/docs/settings">AI Assistant Settings</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 