import React, { useEffect, useState } from 'react';

function SitemapViewer() {
  const [xmlContent, setXmlContent] = useState('');

  useEffect(() => {
    const fetchXml = async () => {
      try {
        const response = await fetch('https://kahana-sitemap-xml.s3.us-east-2.amazonaws.com/sitemap.xml');
        const xml = await response.text();
        setXmlContent(xml);
      } catch (error) {
        console.log('Error fetching XML:', error);
      }
    };

    fetchXml();
  }, []);

  return (
    <div style={{ whiteSpace: 'pre-wrap' }}>
      {xmlContent}
    </div>
  );
}

export default SitemapViewer;

