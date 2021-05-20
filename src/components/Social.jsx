import React from 'react';
import { FaGithubAlt } from '@react-icons/all-files/fa/FaGithubAlt';
import { FaFacebook } from '@react-icons/all-files/fa/FaFacebook';
import { FaInstagram } from '@react-icons/all-files/fa/FaInstagram';

const Social = () => {
  return (
    <div className="social space-x-4 mt-10 text-xl text-gray-600">
      <a href="https://github.com/chalobonDen">
        <FaGithubAlt className="inline" />
      </a>
      <a href="https://www.instagram.com/jayjay_clb/">
        <FaInstagram className="inline" />
      </a>
      <a href="https://www.facebook.com/sujunemo">
        <FaFacebook className="inline" />
      </a>
    </div>
  );
};

Social.propTypes = {};

export default Social;
