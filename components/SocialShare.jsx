import React, { useState } from 'react';
import { FaLinkedin, FaLink } from 'react-icons/fa';

const SocialShare = ({ title, url, excerpt }) => {
  const [copied, setCopied] = useState(false);

  // Prepare LinkedIn sharing content - keep it concise and professional
  const handleLinkedInShare = () => {
    // LinkedIn's feed post sharing URL
    // Note: LinkedIn's API prefers simpler sharing without pre-populated text
    const linkedInUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
    window.open(linkedInUrl, '_blank', 'width=600,height=600');
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <div className="flex items-center justify-start space-x-4 my-8 border-t border-b border-gray-100 py-6">
      <span className="text-sm text-oasis-green-800 font-medium">Share:</span>
      <div className="flex items-center space-x-3">
        <button
          onClick={handleLinkedInShare}
          className="inline-flex items-center text-gray-600 hover:text-[#C17F11] transition-colors"
          aria-label="Share on LinkedIn"
        >
          <FaLinkedin className="w-5 h-5" />
        </button>
        <button
          onClick={copyToClipboard}
          className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors relative"
          aria-label="Copy link"
        >
          <FaLink className="w-5 h-5" />
          {copied && (
            <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
              Copied!
            </span>
          )}
        </button>
      </div>
    </div>
  );
};

export default SocialShare; 