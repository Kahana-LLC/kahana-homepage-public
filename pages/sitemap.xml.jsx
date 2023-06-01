import React, { useEffect, useState } from 'react';

const Sitemap = () => {
  const [xmlContent, setXmlContent] = useState('');

  useEffect(() => {
    fetch('https://kahana-sitemap-xml.s3.us-east-2.amazonaws.com/sitemap.xml')
      .then(response => response.text())
      .then(data => setXmlContent(data));
  }, []);

  return (
    <div>
      <pre>{xmlContent}</pre>
    </div>
  );
};

export default Sitemap;
