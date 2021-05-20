import React from 'react';
import PropTypes from 'prop-types';

const Project = (props) => {
  return (
    <div>
      <div className="shadow-md max-w-md py-4 px-8 bg-white rounded-md bg-opacity-30">
        <div className="text-gray-600">
          <h2 className="text-gray-700 text-2xl font-semibold">Dashboard</h2>
          <div className="mt-2 lg:grid lg:grid-cols-2 lg:divide-x 2lg:grid-cols-1 2lg:divide-y">
            <div className="2lg:pb-2">
              <p className="font-bold">Dashboard Artisan by Vue.js</p>
              <p>Web Application</p>
              <a href="https://dashboard-artisan.web.app/">Link</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Project.propTypes = {};

export default Project;
