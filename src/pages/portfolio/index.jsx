import React from 'react';
import Layout from '../../components/Layout';
import Project from '../../components/portfolio/Project';
import PropTypes from 'prop-types';
import useApiRequest from '../../lib/useApiRequest';

const projectData = [
  {
    id: 1,
    projectName: 'Dashboard for Organization',
    detail: 'Dashboard for Artisan Digital by Vue.js',
    type: 'Web Application',
    link: 'https://dashboard-artisan.web.app/',
    projectImg: 'https://i.imgur.com/c9j4Hnn.jpg',
    path: '/portfolio/dashboard-artisan',
  },
  {
    id: 2,
    projectName: 'Dashboard for Med',
    detail: 'Dashboard for Hopital by Qlik sense, MySQL and, Excel',
    type: 'Dashboard',
    link: null,
    projectImg: 'https://i.imgur.com/S5ZTo6Z.png',
    path: '/portfolio/dashboard-med',
  },
  {
    id: 3,
    projectName: 'Bonita',
    detail: 'Application develop by Thunkable',
    type: '',
    link: null,
    projectImg: 'https://imgur.com/MdBnfGs.jpg',
    path: '/portfolio/bonita',
  },
  {
    id: 4,
    projectName: 'SAP',
    detail: 'project for mm subject',
    type: 'SAP',
    link: null,
    projectImg: 'https://imgur.com/R81wlCn.png',
    path: '/portfolio/sofa',
  },
  {
    id: 5,
    projectName: 'Todo App',
    detail: 'Todo App : Angular, React, Vue',
    type: '',
    link: null,
    projectImg: 'https://imgur.com/O7BRfAb.png',
    path: '/portfolio/todoApp',
  },
];

const Portfolio = () => {
  const { data, error, isLoaded } = useApiRequest(
    'https://gitconnected.com/v1/portfolio/chalobonden'
  );
  console.log('get data from useApiRequest :', data.projects);

  if (error !== null) {
    return <div>Error: {error.message}</div>;
  }
  if (!isLoaded) {
    return <div className="text-center pt-96">Loading...</div>;
  }
  return (
    <Layout>
      <div className="withoutsidebar space-y-5">
        <h1 className="text-gray-700 text-3xl font-semibold text-center">
          Portfolio
        </h1>
        <Project projectData={projectData} />
      </div>
    </Layout>
  );
};

Portfolio.propTypes = {};

export default Portfolio;
