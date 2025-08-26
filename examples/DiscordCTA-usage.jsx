import React from 'react';
import DiscordCTA from '../components/DiscordCTA';

/**
 * Example usage of the DiscordCTA component
 * This file demonstrates different ways to use the DiscordCTA component throughout the website
 */

// Example 1: Basic usage (default props)
export const BasicDiscordCTA = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Example: Basic Discord CTA</h1>
      <DiscordCTA />
    </div>
  );
};

// Example 2: Custom content for support pages
export const SupportDiscordCTA = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Example: Support Discord CTA</h1>
      <DiscordCTA 
        title="Need Help? Join Our Discord"
        description="Get real-time support from our team and connect with other users. We're here to help you succeed with Kahana."
        buttonText="Get Support"
        className="my-12"
      />
    </div>
  );
};

// Example 3: Custom content for documentation pages
export const DocsDiscordCTA = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Example: Documentation Discord CTA</h1>
      <DiscordCTA 
        title="Questions About This Guide?"
        description="If you have questions about this documentation or need clarification, join our Discord community for help."
        buttonText="Ask Questions"
        className="mt-8 mb-4"
      />
    </div>
  );
};

// Example 4: Custom content for blog posts
export const BlogDiscordCTA = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Example: Blog Discord CTA</h1>
      <DiscordCTA 
        title="Join the Conversation"
        description="Have thoughts on this article? Join our Discord to discuss with the team and other community members."
        buttonText="Join Discussion"
        className="mt-16"
      />
    </div>
  );
};

// Example 5: Custom content for product pages
export const ProductDiscordCTA = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Example: Product Discord CTA</h1>
      <DiscordCTA 
        title="Get Early Access & Updates"
        description="Be the first to know about new features, get early access to beta releases, and provide feedback directly to our team."
        buttonText="Get Early Access"
        className="my-8"
      />
    </div>
  );
};

// Example 6: Minimal version for footer or sidebar
export const MinimalDiscordCTA = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Example: Minimal Discord CTA</h1>
      <DiscordCTA 
        title="Join Our Community"
        description="Connect with the Kahana team and other users on Discord."
        buttonText="Join Discord"
        className="mt-4"
      />
    </div>
  );
};

export default BasicDiscordCTA;
