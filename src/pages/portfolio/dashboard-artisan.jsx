import React from 'react';
import Layout from '../../components/Layout';
import PropTypes from 'prop-types';

const portfolio = (props) => {
  return (
    <Layout>
      <div className="withoutsidebar space-y-5">
        <h1 className="text-gray-700 text-3xl font-semibold text-center">
          Dashboard for Organization
        </h1>
      </div>
    </Layout>
  );
};

portfolio.propTypes = {};

export default portfolio;
