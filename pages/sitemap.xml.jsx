import React, { useEffect, useState } from 'react';

const SitemapPage = () => {
  const [xmlContent, setXmlContent] = useState('');

  useEffect(() => {
    const fetchXmlContent = async () => {
      try {
        const response = await fetch('https://kahana-sitemap-xml.s3.us-east-2.amazonaws.com/sitemap.xml');
        const xml = await response.text();
        setXmlContent(xml);
      } catch (error) {
        console.error('Error fetching XML content:', error);
      }
    };

    fetchXmlContent();
  }, []);

  return (
    <div>
      <pre>{xmlContent}</pre>
    </div>
  );
};

export default SitemapPage;

