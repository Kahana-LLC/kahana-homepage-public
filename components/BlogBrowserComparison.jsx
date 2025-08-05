import React from 'react';
import BrowserComparisonTable from './BrowserComparisonTable';

const BlogBrowserComparison = ({ comparisonType = 'all' }) => {
  return (
    <div className="my-8">
      <BrowserComparisonTable />
    </div>
  );
};

export default BlogBrowserComparison; 