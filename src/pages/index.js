import * as React from 'react';
import Layout from '../components/Layout';
import ReactTypingEffect from 'react-typing-effect';
// import { StaticImage } from 'gatsby-plugin-image';
import Social from '../components/Social';
import profile1 from '../images/profile1.jpg';
import { useState, useEffect } from 'react';

const IndexPage = () => {
  const [data, setData] = useState(null);
  console.log(data);
  useEffect(() => {
    fetch('https://gitconnected.com/v1/portfolio/chalobonden')
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  if (!data) {
    return <div></div>;
  }

  return (
    <Layout>
      <section className="text-center m-5 flex justify-center items-center">
        <title>Home Page</title>
        <div className="block mb-30">
          {/* <StaticImage
            src="../images/profile1.jpg"
            alt="A profile"
            placeholder="blurred"
            className="block mx-auto w-60 h-60 rounded-full mb-10 mt-10"
            style={{ borderRadius: '100%' }}
          /> */}
          <img
            src={profile1}
            alt="profile"
            className="block object-cover mx-auto w-60 h-60 rounded-full mb-10 mt-10"
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
