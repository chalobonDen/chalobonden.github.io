import React from 'react';
import Layout from '../../components/Layout';
import PropTypes from 'prop-types';
import photo1 from '../../images/project/artisan-dashboard/photo1.jpg';
import photo2 from '../../images/project/artisan-dashboard/photo2.jpg';
import photo3 from '../../images/project/artisan-dashboard/photo3.jpg';
import photo4 from '../../images/project/artisan-dashboard/photo4.jpg';
import photo5 from '../../images/project/artisan-dashboard/photo5.jpg';
import photo6 from '../../images/project/artisan-dashboard/photo6.jpg';
import photo7 from '../../images/project/artisan-dashboard/photo7.jpg';
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
      <div className="withoutsidebar space-y-5 ">
        <h1 className="text-gray-700 text-3xl font-semibold text-center">
          Portfolio
        </h1>
        {/* <div className="flex justify-center items-center">
          <img
            src="https://i.imgur.com/c9j4Hnn.jpg"
            alt=""
            className="w-72 h-auto"
          />
        </div> */}
        <div className="slideImg">
          <Carousel breakPoints={breakPoints}>
            <img src={photo1} className="w-72 h-auto" />
            <img src={photo2} className="w-72 h-auto" />
            <img src={photo3} className="w-72 h-auto" />
            <img src={photo4} className="w-72 h-auto" />
            <img src={photo5} className="w-72 h-auto" />
          </Carousel>
        </div>
      </div>
    </Layout>
  );
};

portfolio.propTypes = {};

export default portfolio;
