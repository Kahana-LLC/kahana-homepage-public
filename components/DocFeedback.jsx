import React, { useState } from 'react';

/**
 * DocFeedback Component
 * 
 * A feedback component for documentation pages that allows users to rate
 * whether the documentation was helpful.
 * 
 * @param {Object} props - Component props
 * @param {string} [props.title="Was this documentation helpful?"] - The feedback question
 * @param {string} [props.positiveText="Yes, it helped"] - Text for positive feedback
 * @param {string} [props.negativeText="No, I need more help"] - Text for negative feedback
 * @param {Function} [props.onFeedback] - Callback function when feedback is submitted
 * @param {string} [props.className=""] - Additional CSS classes
 */
const DocFeedback = ({ 
  title = "Was this documentation helpful?",
  positiveText = "Yes, it helped",
  negativeText = "No, I need more help",
  onFeedback,
  className = ""
}) => {
  const [feedback, setFeedback] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const handleFeedback = (isPositive) => {
    setFeedback(isPositive);
    setSubmitted(true);
    
    if (onFeedback) {
      onFeedback(isPositive);
    }
    
    // You could send this to analytics or a feedback service
    console.log('Documentation feedback:', isPositive ? 'positive' : 'negative');
  };

  if (submitted) {
    return (
      <div className={`mt-8 p-6 bg-green-50 border border-green-200 rounded-lg text-center ${className}`}>
        <p className="text-green-800 font-medium">
          Thank you for your feedback! 
          {feedback ? ' We\'re glad this helped.' : ' We\'ll work to improve this documentation.'}
        </p>
      </div>
    );
  }

  return (
    <div className={`mt-8 p-6 bg-gray-50 border border-gray-200 rounded-lg ${className}`}>
      <h3 className="text-lg font-semibold text-gray-900 mb-4 text-center">
        {title}
      </h3>
      <div className="flex justify-center space-x-4">
        <button
          onClick={() => handleFeedback(true)}
          className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
        >
          {positiveText}
        </button>
        <button
          onClick={() => handleFeedback(false)}
          className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
        >
          {negativeText}
        </button>
      </div>
    </div>
  );
};

export default DocFeedback;
