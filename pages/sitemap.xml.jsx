import React, { useEffect, useState } from 'react';
import fastXmlParser from 'fast-xml-parser';

const SitemapXml = () => {
  const [xmlContent, setXmlContent] = useState('');

  useEffect(() => {
    const fetchXmlContent = async () => {
      try {
        const response = await fetch('https://kahana-sitemap-xml.s3.us-east-2.amazonaws.com/sitemap.xml');
        const xml = await response.text();
        const parsedXml = fastXmlParser.parse(xml, { ignoreAttributes: false, parseAttributeValue: true });
        setXmlContent(parsedXml);
      } catch (error) {
        console.error('Error fetching XML content:', error);
      }
    };

    fetchXmlContent();
  }, []);

  return (
    <div>
      {/* Render the parsed XML content */}
      <pre>{JSON.stringify(xmlContent, null, 2)}</pre>
    </div>
  );
};

export default SitemapXml;


