import React from 'react';
import Image from 'next/image';

const IntroductionSection = () => {
  return (
    <div className="space-y-8">
      <div className="space-y-6">
        <p className="text-xl text-gray-600">
          The social media landscape is undergoing a profound transformation. As AI capabilities advance, the way we interact with social platforms is evolving beyond simple scrolling and tapping. Meta, with its vast ecosystem of social platforms, is uniquely positioned to lead this revolution by integrating AI at the core of every user experience.
        </p>
        <p className="text-xl text-gray-600">
          Our solution, the Hermes Project, represents a paradigm shift in how users interact with social content. By leveraging advanced AI capabilities, we're creating a future where social platforms understand context, anticipate needs, and deliver personalized experiences through natural conversation and intuitive gestures.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-black">The Vision</h3>
          <p className="text-gray-600">
            Imagine a social platform that truly understands you—your interests, your connections, and your content. A platform where finding that perfect post or video is as simple as asking for it, where organizing your saved content happens automatically, and where meaningful interactions are enhanced by AI-powered insights.
          </p>
        </div>
        
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-black">The Opportunity</h3>
          <p className="text-gray-600">
            With over 3 billion monthly active users across Meta's platforms, the potential impact is enormous. By integrating our AI technology, Meta can transform how people discover, consume, and interact with social content, creating a more engaging and efficient social experience.
          </p>
        </div>
      </div>

      <div className="mt-12 bg-black text-white p-8 rounded-2xl">
        <h3 className="text-2xl font-semibold mb-4">Key Benefits</h3>
        <div className="space-y-4">
          <div>
            <h4 className="text-xl font-semibold mb-2">Enhanced User Experience</h4>
            <p className="text-gray-300">
              Transform social media from a passive scrolling experience to an active, intelligent interaction where content finds you based on your interests and needs.
            </p>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-2">Increased Engagement</h4>
            <p className="text-gray-300">
              Drive deeper user engagement by making content discovery and interaction more natural and intuitive through AI-powered features.
            </p>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-2">Competitive Advantage</h4>
            <p className="text-gray-300">
              Position Meta as the leader in AI-powered social platforms, setting new standards for how people interact with social content.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroductionSection; 