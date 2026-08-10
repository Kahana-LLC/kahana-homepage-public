import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';

export default function LinkedInPosts() {
  const [copiedPost, setCopiedPost] = useState(null);

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopiedPost(text);
    setTimeout(() => setCopiedPost(null), 2000);
  };

  const posts = {
    brandOverview: [
      {
        title: "What is Kahana? (Visual Post)",
        content: `WHAT IS AURA LIBRARY?

Kahana is a collaborative SAAS platform that streamlines the way people share and consume information.

#SaaS #Collaboration #KnowledgeSharing #Innovation #FutureOfWork`,
        category: "Brand Overview",
        visualTemplate: {
          description: "A modern, clean design with the Kahana logo in the top right, featuring:",
          elements: [
            "- Background: Soft green curved shape (#4F8173)",
            "- Text: Large 'WHAT IS AURA LIBRARY?' heading in white",
            "- Subtext: Value proposition in white, clean font",
            "- Bottom: Team collaboration image showing diverse workplace"
          ],
          designNotes: "The visual follows Kahana's brand guidelines with the signature green color and modern, clean aesthetic. The curved shape creates visual interest while maintaining professionalism."
        }
      },
      {
        title: "What is Kahana? (Text Only)",
        content: `WHAT IS AURA LIBRARY?

Kahana is a collaborative SAAS platform that streamlines the way people share and consume information.

#SaaS #Collaboration #KnowledgeSharing #Innovation #FutureOfWork`,
        category: "Brand Overview"
      }
    ],
    productUpdates: [
      {
        title: "New Feature Announcement",
        content: `🎉 Exciting news! We've just launched [Feature Name] in Kahana, making it easier than ever to [benefit].

Key improvements:
• [Benefit 1]
• [Benefit 2]
• [Benefit 3]

Try it out today and let us know what you think! #ProductUpdate #Innovation`,
        category: "Product Updates"
      },
      {
        title: "Platform Enhancement",
        content: `🚀 We're constantly improving Kahana to serve you better!

Just released:
• Enhanced [Feature 1]
• Improved [Feature 2]
• New [Feature 3]

These updates will help you [benefit]. Stay tuned for more! #ProductDevelopment`,
        category: "Product Updates"
      }
    ],
    customerSuccess: [
      {
        title: "Customer Success Story",
        content: `🌟 Success Story Spotlight 🌟

We're thrilled to share how [Company Name] transformed their [process] using Kahana.

Key results:
• [Result 1]
• [Result 2]
• [Result 3]

Read the full story: [Link] #CustomerSuccess #CaseStudy`,
        category: "Customer Success"
      },
      {
        title: "Testimonial Share",
        content: `💡 "The impact Kahana has had on our [process] is incredible. We've seen [metric] improve by [percentage]." - [Customer Name], [Title] at [Company]

Hear more from our customers: [Link] #CustomerTestimonial #SuccessStory`,
        category: "Customer Success"
      }
    ],
    thoughtLeadership: [
      {
        title: "Industry Insight",
        content: `📊 The future of [industry] is evolving rapidly.

Key trends we're seeing:
1. [Trend 1]
2. [Trend 2]
3. [Trend 3]

How is your organization preparing for these changes? Share your thoughts below! #IndustryInsights #ThoughtLeadership`,
        category: "Thought Leadership"
      },
      {
        title: "Best Practices",
        content: `💡 Pro Tip: [Best Practice Title]

Here's how to [action] effectively:
1. [Step 1]
2. [Step 2]
3. [Step 3]

What best practices have you found most valuable? Let's discuss! #BestPractices #ProfessionalTips`,
        category: "Thought Leadership"
      }
    ]
  };

  return (
    <>
      <Head>
        <title>LinkedIn Posts | Kahana Marketing Kit</title>
        <meta name="description" content="Ready-to-use LinkedIn posts for promoting Kahana." />
      </Head>

      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <div className="bg-white shadow">
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between">
              <h1 className="text-3xl font-bold text-gray-900">LinkedIn Posts</h1>
              <Link href="/marketing-kit" className="text-blue-600 hover:text-blue-800">
                ← Back to Marketing Kit
              </Link>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
          {/* Categories */}
          {Object.entries(posts).map(([category, categoryPosts]) => (
            <div key={category} className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                {categoryPosts[0].category}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {categoryPosts.map((post, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-md p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">{post.title}</h3>
                    
                    {/* Visual Template Section */}
                    {post.visualTemplate && (
                      <div className="mb-6">
                        <div className="bg-[#4F8173] aspect-square rounded-lg p-8 text-white relative overflow-hidden">
                          {/* Logo */}
                          <div className="absolute top-8 right-8">
                            <div className="w-28 h-9 bg-white rounded-lg flex items-center justify-center">
                              <span className="text-[#4F8173] font-semibold text-lg">kahana</span>
                            </div>
                          </div>

                          {/* Decorative Elements */}
                          <div className="absolute top-0 left-0 w-32 h-32 bg-white/10 rounded-br-full"></div>
                          <div className="absolute bottom-0 right-0 w-64 h-64 bg-black/10 rounded-tl-full"></div>
                          <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-white/5 rounded-full"></div>

                          {/* Content */}
                          <div className="relative z-10 h-full flex flex-col justify-center">
                            <div className="max-w-[80%]">
                              <h4 className="text-4xl font-bold mb-6 leading-tight">WHAT IS AURA LIBRARY?</h4>
                              <p className="text-xl leading-relaxed">
                                A collaborative SAAS platform that streamlines the way people share and consume information
                              </p>
                            </div>
                          </div>

                          {/* Bottom Tag */}
                          <div className="absolute bottom-8 left-8 text-sm font-medium text-white/80">
                            #FutureOfWork
                          </div>
                        </div>

                        <div className="mt-4 bg-gray-50 rounded p-4">
                          <h4 className="font-semibold mb-2">Design Guidelines:</h4>
                          <p className="text-sm text-gray-600 mb-1">- Dimensions: 1080x1080px square format</p>
                          {post.visualTemplate.elements.map((element, i) => (
                            <p key={i} className="text-sm text-gray-600 mb-1">{element}</p>
                          ))}
                          <p className="text-sm text-gray-600 mt-2">{post.visualTemplate.designNotes}</p>
                        </div>
                      </div>
                    )}

                    {/* Post Content */}
                    <div className="bg-gray-50 rounded p-4 mb-4">
                      <pre className="whitespace-pre-wrap text-sm text-gray-700">{post.content}</pre>
                    </div>
                    
                    <button
                      onClick={() => copyToClipboard(post.content)}
                      className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                      {copiedPost === post.content ? 'Copied!' : 'Copy to Clipboard'}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
} 