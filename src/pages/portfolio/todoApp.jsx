import React from 'react';
import Layout from '../../components/Layout';
import PropTypes from 'prop-types';
import Carousel from 'react-elastic-carousel';
import photo1 from '../../images/project/todoApp/photo1.png';
import photo2 from '../../images/project/todoApp/photo2.png';
import photo3 from '../../images/project/todoApp/photo3.png';

const portfolio = (props) => {
  return (
    <Layout>
      <div className="withoutsidebar space-y-5 text-center">
        <h1 className="text-gray-700 text-3xl font-semibold text-center">
          Todo App
        </h1>
        <div className="slideImg">
          <Carousel>
            <img src={photo1} className="w-auto h-72" />
            <img src={photo2} className="w-auto h-72" />
            <img src={photo3} className="w-auto h-72" />
          </Carousel>
        </div>
        <div className="pb-10">
          <p>
            Angular :
            <a
              className="hover:text-blue-400 hover:underline"
              href="https://github.com/chalobonDen/todo-angular-ts"
            >
              Github Link
            </a>
          </p>
          <p>
            Vue :
            <a
              className="hover:text-blue-400 hover:underline"
              href="https://github.com/chalobonDen/todo-vue-ts"
            >
              Github Link
            </a>
          </p>
          <p>
            React :
            <a
              className="hover:text-blue-400 hover:underline"
              href="https://github.com/chalobonDen/todo-react-ts"
            >
              Github Link
            </a>
          </p>
        </div>
      </div>
    </Layout>
  );
};

portfolio.propTypes = {};

export default portfolio;
