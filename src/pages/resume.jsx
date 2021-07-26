import React from 'react';
import Layout from '../components/Layout';

const Resume = () => {
  return (
    <Layout>
      <div className="flex justify-center items-center self-center">
        <div
          className="m-5 lg:m-40"
          style={{
            position: 'relative',
            width: '100%',
            height: '0',
            paddingTop: '141.4286%',
            paddingBottom: '48px',
            marginTop: '1.6em',
            marginBottom: '0.9em',
            overflow: 'hidden',
            borderRadius: '8px',
            willChange: 'transform',
          }}
        >
          <iframe
            loading="lazy"
            style={{
              position: 'absolute',
              width: '100%',
              height: '80%',
              top: '0',
              left: '0',
              border: 'none',
              padding: '0',
              margin: '0',
            }}
            src="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAElR5mLrGU&#x2F;view?embed"
          ></iframe>
        </div>
      </div>
    </Layout>
  );
};

export default Resume;
