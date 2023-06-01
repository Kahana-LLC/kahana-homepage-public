import React, { useEffect } from 'react';

const SitemapRedirect = () => {
  useEffect(() => {
    window.location.href = 'https://kahana-sitemap-xml.s3.us-east-2.amazonaws.com/sitemap.xml';
  }, []);

  return null;
};

export default SitemapRedirect;
