import React from 'react';

const Sitemap = () => {
  return (
    <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>
      <iframe
        src="https://kahana-sitemap-xml.s3.us-east-2.amazonaws.com/sitemap.xml"
        title="Sitemap"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          border: 'none'
        }}
      ></iframe>
    </div>
  );
};

export default Sitemap;
