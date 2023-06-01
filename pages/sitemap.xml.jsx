import React, { useEffect } from 'react';

const Sitemap = () => {
  useEffect(() => {
    window.location.href = 'https://kahana-sitemap-xml.s3.us-east-2.amazonaws.com/sitemap.xml';
  }, []);

  return (
    <div>
      <p>Please wait while you're being redirected...</p>
    </div>
  );
};

export default Sitemap;
