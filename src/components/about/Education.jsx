import React from 'react';
import PropTypes from 'prop-types';

const Education = ({ educationData, getMonthToString }) => {
  if (!educationData) {
    return <div></div>;
  }

  return (
    <div>
      <div className="shadow-md py-4 px-8 bg-white rounded-md bg-opacity-30">
        <div className="text-gray-600">
          <h2 className="text-gray-700 text-2xl font-semibold">Education</h2>
          <div className="mt-2 lg:grid lg:grid-cols-2 lg:divide-x 2lg:grid-cols-1 2lg:divide-y">
            {educationData.map((data, i) => {
              return (
                <div
                  className={`${i === 0 ? '2lg:pb-2' : 'lg:pl-6 2lg:pt-2'}`}
                  key={i}
                >
                  <p className="font-bold">{data.institution}</p>
                  <p>
                    {getMonthToString(data.start.month)} {data.start.year} -{' '}
                    {getMonthToString(data.end.month)} {data.end.year}
                  </p>
                  <p>{data.area}</p>
                  <p>GPA : {data.gpa}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

Education.protoType = {
  educationData: PropTypes.object.isRequired,
};

export default Education;
