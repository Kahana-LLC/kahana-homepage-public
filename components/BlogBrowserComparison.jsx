import React from 'react';
import BrowserComparisonTable from './BrowserComparisonTable';

const BlogBrowserComparison = ({ comparisonType = 'all' }) => {
  return (
    <div className="my-8">
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          Browser Comparison Table
        </h3>
        <p className="text-sm text-gray-600">
          Use the filters on the left to compare browsers based on your specific needs.
        </p>
      </div>
      <BrowserComparisonTable />
    </div>
  );
};

export default BlogBrowserComparison; 