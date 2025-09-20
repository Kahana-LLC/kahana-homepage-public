import React, { useState, useEffect, useRef } from 'react';
import { 
  FaLinkedin, 
  FaTwitter, 
  FaEnvelope, 
  FaSms, 
  FaReddit,
  FaShare,
  FaTimes,
  FaLink
} from 'react-icons/fa';

const WhitePaperSocialShare = ({ title, url, excerpt }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const modalRef = useRef(null);

  const shareData = {
    title: title || "The Future of Ergonomic Work: A White Paper",
    url: url || (typeof window !== 'undefined' ? window.location.href : 'https://kahana.com/white-paper-future-of-ergonomic-work'),
    text: excerpt || "Discover how AR/VR technology is revolutionizing the future of ergonomic work and productivity."
  };

  // Debug log to check shareData
  console.log('Share data:', shareData);

  // Handle click outside to close modal
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const handleLinkedInShare = (e) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('LinkedIn share clicked');
    const linkedInUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareData.url)}`;
    window.open(linkedInUrl, '_blank', 'width=600,height=600,scrollbars=yes,resizable=yes');
  };

  const handleTwitterShare = (e) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('Twitter share clicked');
    const twitterText = encodeURIComponent(`${shareData.title} ${shareData.url}`);
    const twitterUrl = `https://twitter.com/intent/tweet?text=${twitterText}`;
    window.open(twitterUrl, '_blank', 'width=600,height=400,scrollbars=yes,resizable=yes');
  };

  const handleEmailShare = (e) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('Email share clicked');
    const subject = encodeURIComponent(shareData.title);
    const body = encodeURIComponent(`${shareData.text}\n\nRead more: ${shareData.url}`);
    const emailUrl = `mailto:?subject=${subject}&body=${body}`;
    window.open(emailUrl);
  };

  const handleSMSShare = (e) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('SMS share clicked');
    const smsText = encodeURIComponent(`${shareData.title} - ${shareData.url}`);
    const smsUrl = `sms:?body=${smsText}`;
    window.open(smsUrl);
  };

  const handleRedditShare = (e) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('Reddit share clicked');
    const redditUrl = `https://reddit.com/submit?url=${encodeURIComponent(shareData.url)}&title=${encodeURIComponent(shareData.title)}`;
    window.open(redditUrl, '_blank', 'width=800,height=600,scrollbars=yes,resizable=yes');
  };

  const copyToClipboard = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('Copy link clicked');
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(shareData.url);
      } else {
        // Fallback for older browsers or non-secure contexts
        const textArea = document.createElement('textarea');
        textArea.value = shareData.url;
        textArea.style.position = 'fixed';
        textArea.style.left = '-999999px';
        textArea.style.top = '-999999px';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand('copy');
        textArea.remove();
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
      // Show user feedback even if copy fails
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div ref={modalRef} className="fixed bottom-4 right-4 z-[9999]" style={{ position: 'fixed', bottom: '16px', right: '16px', zIndex: 9999 }}>
      {/* Main Share Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-[#21706c] hover:bg-[#15514f] text-white p-4 rounded-full shadow-xl border-2 border-white transition-all duration-300 hover:scale-105"
        aria-label="Share this white paper"
      >
        {isOpen ? <FaTimes className="w-5 h-5" /> : <FaShare className="w-5 h-5" />}
      </button>

      {/* Social Share Options */}
      {isOpen && (
        <div 
          className="absolute bottom-16 right-0 bg-white rounded-lg shadow-xl border border-gray-200 p-4 min-w-[200px]"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-gray-700 mb-3">Share this white paper</h3>
            
            {/* LinkedIn */}
            <button
              onClick={handleLinkedInShare}
              className="w-full flex items-center space-x-3 p-2 rounded-lg hover:bg-blue-50 transition-colors group"
            >
              <FaLinkedin className="w-5 h-5 text-blue-600 group-hover:text-blue-700" />
              <span className="text-sm text-gray-700 group-hover:text-gray-900">LinkedIn</span>
            </button>

            {/* Twitter */}
            <button
              onClick={handleTwitterShare}
              className="w-full flex items-center space-x-3 p-2 rounded-lg hover:bg-blue-50 transition-colors group"
            >
              <FaTwitter className="w-5 h-5 text-blue-400 group-hover:text-blue-500" />
              <span className="text-sm text-gray-700 group-hover:text-gray-900">Twitter</span>
            </button>

            {/* Email */}
            <button
              onClick={handleEmailShare}
              className="w-full flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50 transition-colors group"
            >
              <FaEnvelope className="w-5 h-5 text-gray-600 group-hover:text-gray-700" />
              <span className="text-sm text-gray-700 group-hover:text-gray-900">Email</span>
            </button>

            {/* SMS */}
            <button
              onClick={handleSMSShare}
              className="w-full flex items-center space-x-3 p-2 rounded-lg hover:bg-green-50 transition-colors group"
            >
              <FaSms className="w-5 h-5 text-green-600 group-hover:text-green-700" />
              <span className="text-sm text-gray-700 group-hover:text-gray-900">SMS</span>
            </button>

            {/* Reddit */}
            <button
              onClick={handleRedditShare}
              className="w-full flex items-center space-x-3 p-2 rounded-lg hover:bg-orange-50 transition-colors group"
            >
              <FaReddit className="w-5 h-5 text-orange-500 group-hover:text-orange-600" />
              <span className="text-sm text-gray-700 group-hover:text-gray-900">Reddit</span>
            </button>

            {/* Copy Link */}
            <div className="border-t border-gray-200 pt-3 mt-3">
              <button
                onClick={copyToClipboard}
                className="w-full flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50 transition-colors group relative"
              >
                <FaLink className="w-5 h-5 text-gray-600 group-hover:text-gray-700" />
                <span className="text-sm text-gray-700 group-hover:text-gray-900">
                  {copied ? 'Copied!' : 'Copy Link'}
                </span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WhitePaperSocialShare;
