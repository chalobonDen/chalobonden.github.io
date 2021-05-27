import React from 'react';
import Layout from '../../components/Layout';
import PropTypes from 'prop-types';
import photo1 from '../../images/project/bonita/photo1.jpg';
import photo2 from '../../images/project/bonita/photo2.jpg';
import photo3 from '../../images/project/bonita/photo3.jpg';
import photo4 from '../../images/project/bonita/photo4.jpg';
import photo5 from '../../images/project/bonita/photo5.jpg';
import photo6 from '../../images/project/bonita/photo6.jpg';
import photo7 from '../../images/project/bonita/photo7.jpg';
import photo8 from '../../images/project/bonita/photo8.jpg';
import photo9 from '../../images/project/bonita/photo9.jpg';
import photo10 from '../../images/project/bonita/photo10.jpg';
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
        <div className="slideImg">
          <Carousel breakPoints={breakPoints}>
            <img src={photo1} className="w-72 h-auto" />
            <img src={photo2} className="w-72 h-auto" />
            <img src={photo3} className="w-72 h-auto" />
            <img src={photo4} className="w-72 h-auto" />
            <img src={photo5} className="w-72 h-auto" />
            <img src={photo6} className="w-72 h-auto" />
            <img src={photo7} className="w-72 h-auto" />
            <img src={photo8} className="w-72 h-auto" />
            <img src={photo9} className="w-72 h-auto" />
            <img src={photo10} className="w-72 h-auto" />
          </Carousel>
        </div>
        <div className="pb-10">
          <p>This is project for repid application subject</p>
          <p>Created by Thunkable</p>
        </div>
      </div>
    </Layout>
  );
};

portfolio.propTypes = {};

export default portfolio;
