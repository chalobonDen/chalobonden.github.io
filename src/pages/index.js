import * as React from 'react';
import Layout from '../components/Layout';
import ReactTypingEffect from 'react-typing-effect';
import { StaticImage } from 'gatsby-plugin-image';
import Social from '../components/Social';

const IndexPage = () => {
  return (
    <Layout>
      <section className="text-center m-5 flex justify-center items-center">
        <title>Home Page</title>
        <div className="block mb-30">
          <StaticImage
            src="../images/profile1.jpg"
            alt="A profile"
            placeholder="blurred"
            className="block mx-auto w-60 h-60  mb-10 mt-10"
            style={{ borderRadius: '100%' }}
          />
          <ReactTypingEffect
            text={['I am Chalobon', 'I am a Front-End Developer']}
            speed={70}
            eraseDelay={200}
            className="typingeffect text-2xl block text-white"
          />
          <Social />
        </div>
      </section>
    </Layout>
  );
};

export default IndexPage;
