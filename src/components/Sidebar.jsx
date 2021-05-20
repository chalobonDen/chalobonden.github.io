import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import Social from '../components/Social';

const Sidebar = () => {
  return (
    <section className="sidebar shadow-md text-center m-5 items-center rounded-md border-2 border-white border-opacity-0 bg-white bg-opacity-30">
      <div className="block mb-30 mt-10 mb-10 text-gray-600 font-semibold">
        <StaticImage
          src="../images/profile1.jpg"
          alt="A profile"
          placeholder="blurred"
          className="block mx-auto w-60 h-60 rounded-full mb-10 "
        />
        <span className="block">Chalobon Denninnart </span>
        <span className="block">Front-End Developer</span>
        <Social />
      </div>
    </section>
  );
};

export default Sidebar;
