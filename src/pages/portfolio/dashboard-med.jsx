import React from 'react';
import Layout from '../../components/Layout';
import PropTypes from 'prop-types';
import project2 from '../../images/project/med-dashboard/project2.png';
import Carousel from 'react-elastic-carousel';

const portfolio = (props) => {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];
  return (
    <Layout>
      <div className="withoutsidebar space-y-5 text-center">
        <h1 className="text-gray-700 text-3xl font-semibold text-center">
          Portfolio
        </h1>
        <div className="flex justify-center items-center">
          <img src={project2} alt="" className="w-auto h-72" />
        </div>
        <div className="pb-10">
          <p>This is project for internship</p>
          <p>Created by Qlik Sense</p>
          Link :{' '}
          <a href="https://help.qlik.com/en-US/qlikview/April2020/Content/QV_HelpSites/what-is.htm">
            What is QlikView?
          </a>
        </div>
      </div>
    </Layout>
  );
};

portfolio.propTypes = {};

export default portfolio;
