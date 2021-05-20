import React from 'react';
import { FaGithubAlt } from '@react-icons/all-files/fa/FaGithubAlt';
import { FaFacebook } from '@react-icons/all-files/fa/FaFacebook';
import { FaLinkedin } from '@react-icons/all-files/fa/FaLinkedin';

const Social = () => {
  return (
    <div className="social space-x-4 mt-10 text-xl text-gray-600">
      <a href="https://github.com/chalobonDen">
        <FaGithubAlt className="inline" />
      </a>
      <a href="https://www.linkedin.com/in/chalobon-denninnart-a077b7206">
        <FaLinkedin className="inline" />
      </a>
      <a href="https://www.facebook.com/sujunemo">
        <FaFacebook className="inline" />
      </a>
    </div>
  );
};

Social.propTypes = {};

export default Social;
