import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

const Project = ({ projectData }) => {
  return (
    <div>
      <div className="grid md:grid-cols-3 gap-4 pb-10">
        {projectData.map((data) => {
          return (
            <div key={data.id}>
              <Link to={data.path}>
                <article className="bg-white bg-opacity-30 overflow-hidden rounded-lg shadow-lg">
                  <img
                    alt="Placeholder"
                    className="block h-60 w-full object-cover"
                    src={data.projectImg}
                  />

                  <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                    <h1 className="text-lg">{data.projectName}</h1>
                  </header>

                  <footer className="flex items-center justify-between leading-none p-2 md:p-4">
                    <p className="text-sm">{data.detail}</p>

                    <span className="hidden">Like</span>
                    <i className="fa fa-heart"></i>
                  </footer>
                </article>
              </Link>

              {/* <div className="shadow-md py-4 px-8 bg-white rounded-md bg-opacity-30 mb-5">
                <div className="text-gray-600">
                  <h2 className="text-gray-700 text-2xl font-semibold">
                    {data.projectName}
                  </h2>
                  <div className="mt-2 lg:grid lg:grid-cols-2 lg:divide-x 2lg:grid-cols-1 2lg:divide-y">
                    <div className="2lg:pb-2">
                      <p className="font-bold">{data.detail}</p>
                      <p>{data.type}</p>
                      {data.link === null ? (
                        ''
                      ) : (
                        <a href={data.link} className="skill">
                          {data.link}
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
          );
        })}
        {/* <h2 className="text-gray-700 text-2xl font-semibold">Dashboard</h2>
          <div className="mt-2 lg:grid lg:grid-cols-2 lg:divide-x 2lg:grid-cols-1 2lg:divide-y">
            <div className="2lg:pb-2">
              <p className="font-bold">Dashboard Artisan by Vue.js</p>
              <p>Web Application</p>
              <a href="https://dashboard-artisan.web.app/">Link</a>
            </div>
          </div> */}
      </div>
    </div>
  );
};

Project.propTypes = {};

export default Project;
