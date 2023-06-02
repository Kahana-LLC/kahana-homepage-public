import React, { useEffect, useState } from 'react';
import XMLParser from 'react-xml-parser';

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

  const parsedXml = new XMLParser().parseFromString(xmlContent);

  return (
    <div>
      {parsedXml && (
        <pre>{parsedXml.toString({ indent: '    ' })}</pre>
      )}
    </div>
  );
};

export default SitemapXml;
