import Head from 'next/head';
import WhatIsKahana from '../components/linkedin-posts/WhatIsKahana';
import OurServices from '../components/linkedin-posts/OurServices';
import OurMission from '../components/linkedin-posts/OurMission';
import { useState } from 'react';

export default function Sandbox() {
  const [selectedPost, setSelectedPost] = useState('what-is-kahana');
  
  const posts = [
    { 
      id: 'what-is-kahana', 
      name: 'What is Kahana?', 
      Component: WhatIsKahana,
      category: 'Brand Overview'
    },
    { 
      id: 'our-services', 
      name: 'Our Services', 
      Component: OurServices,
      category: 'Services & Solutions'
    },
    { 
      id: 'our-mission', 
      name: 'Our Mission', 
      Component: OurMission,
      category: 'Company Culture'
    }
  ];

  // Group posts by category
  const postsByCategory = posts.reduce((acc, post) => {
    if (!acc[post.category]) {
      acc[post.category] = [];
    }
    acc[post.category].push(post);
    return acc;
  }, {});

  return (
    <>
      <Head>
        <title>Social Media Sandbox | Kahana</title>
        <meta name="description" content="Create and preview social media posts for Kahana" />
      </Head>

      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <div className="bg-white shadow">
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-gray-900">Social Media Sandbox</h1>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-[1200px] mx-auto py-8 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-lg shadow p-6">
                <h2 className="text-lg font-medium text-gray-900 mb-4">Post Templates</h2>
                <div className="space-y-6">
                  {Object.entries(postsByCategory).map(([category, categoryPosts]) => (
                    <div key={category}>
                      <h3 className="text-sm font-medium text-gray-500 mb-2">{category}</h3>
                      <div className="space-y-2">
                        {categoryPosts.map((post) => (
                          <button
                            key={post.id}
                            onClick={() => setSelectedPost(post.id)}
                            className={`w-full text-left px-4 py-2 rounded-md ${
                              selectedPost === post.id
                                ? 'bg-blue-100 text-blue-700'
                                : 'text-gray-700 hover:bg-gray-50'
                            }`}
                          >
                            {post.name}
                          </button>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 bg-white rounded-lg shadow p-6">
                <h2 className="text-lg font-medium text-gray-900 mb-4">Instructions</h2>
                <div className="text-sm text-gray-600 space-y-2">
                  <p>1. Select a post template from the list above</p>
                  <p>2. Use browser screenshot tools to capture the square post</p>
                  <p>3. Dimensions: 1080x1080px</p>
                  <p>4. Save and share on LinkedIn!</p>
                </div>
              </div>
            </div>

            {/* Preview Area */}
            <div className="lg:col-span-9">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h2 className="text-lg font-medium text-gray-900 mb-6">Preview</h2>
                <div className="overflow-auto">
                  <div className="transform scale-50 origin-top-left">
                    {(() => {
                      const post = posts.find(p => p.id === selectedPost);
                      if (post) {
                        const Component = post.Component;
                        return <Component />;
                      }
                      return null;
                    })()}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 