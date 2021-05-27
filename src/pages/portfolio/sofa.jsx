import React from 'react';
import Layout from '../../components/Layout';
import PropTypes from 'prop-types';
import photo1 from '../../images/project/sofa/photo1.png';
import photo2 from '../../images/project/sofa/photo2.png';
import photo3 from '../../images/project/sofa/photo3.png';
import photo4 from '../../images/project/sofa/photo4.png';
import photo5 from '../../images/project/sofa/photo5.png';
import photo6 from '../../images/project/sofa/photo6.png';
import photo7 from '../../images/project/sofa/photo7.png';
import Carousel from 'react-elastic-carousel';

const portfolio = (props) => {
  return (
    <Layout>
      <div className="withoutsidebar space-y-5 text-center">
        <h1 className="text-gray-700 text-3xl font-semibold text-center">
          Portfolio
        </h1>
        <div className="slideImg">
          <Carousel>
            <img src={photo1} className="w-auto h-72" />
            <img src={photo2} className="w-auto h-72" />
            <img src={photo3} className="w-auto h-72" />
            <img src={photo4} className="w-auto h-72" />
            <img src={photo5} className="w-auto h-72" />
            <img src={photo6} className="w-auto h-72" />
            <img src={photo7} className="w-auto h-72" />
          </Carousel>
        </div>
        <div className="pb-10">
          <p>Created by PHP, MySQL, CSS</p>
          <a href="https://github.com/chalobonDen/sofa1">Link : github repo</a>
        </div>
      </div>
    </Layout>
  );
};

portfolio.propTypes = {};

export default portfolio;
