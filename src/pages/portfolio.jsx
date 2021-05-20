import React from 'react';
import Layout from '../components/Layout';
import Project from '../components/portfolio/Project';
import PropTypes from 'prop-types';

const portfolio = (props) => {
  return (
    <Layout>
      <div className="withoutsidebar space-y-5">
        <h1 className="text-gray-700 text-3xl font-semibold text-center">
          Portfolio
        </h1>
        <Project />
      </div>
    </Layout>
  );
};

portfolio.propTypes = {};

export default portfolio;
