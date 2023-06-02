import React, { useEffect, useState } from 'react';
import { parse } from 'fast-xml-parser';

const SitemapXml = () => {
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

  const parsedXml = parse(xmlContent);

  return (
    <div>
      {parsedXml && (
        <pre>{JSON.stringify(parsedXml, null, 4)}</pre>
      )}
    </div>
  );
};

export default SitemapXml;
