import React from 'react';
import PropTypes from 'prop-types';

const Experience = ({ experienceData, getMonthToString }) => {
  if (!experienceData) {
    return <div></div>;
  }
  return (
    <div>
      <div className="shadow-md py-4 px-8 bg-white rounded-md bg-opacity-30">
        <div className="text-gray-600">
          <h2 className="text-gray-700 text-2xl font-semibold">Experience</h2>
          <p className="font-bold mt-2 text-lg underline ">Internship</p>
          <div className=" lg:grid lg:grid-cols-2 lg:divide-x 2lg:grid-cols-1 2lg:divide-y">
            {experienceData.map((data, i) => {
              return (
                <div
                  key={i}
                  className={`${i === 0 ? '2lg:pb-2' : 'lg:pl-6 2lg:pt-2'}`}
                >
                  <p className="font-bold">{data.position}</p>
                  <p>
                    {getMonthToString(data.start.month)} {data.start.year} -{' '}
                    {getMonthToString(data.end.month)} {data.end.year}
                  </p>
                  <p>{data.company}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

Experience.protoType = {
  experienceData: PropTypes.object.isRequired,
};

export default Experience;
