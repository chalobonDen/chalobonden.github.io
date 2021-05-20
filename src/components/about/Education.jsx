import React from 'react';
import PropTypes from 'prop-types';

const Education = ({ educationData }) => {
  return (
    <div>
      <div className="shadow-md py-4 px-8 bg-white rounded-md bg-opacity-30">
        <div className="text-gray-600">
          <h2 className="text-gray-700 text-2xl font-semibold">Education</h2>
          <div className="mt-2 lg:grid lg:grid-cols-2 lg:divide-x 2lg:grid-cols-1 2lg:divide-y">
            {/* แบบ mock data */}
            {educationData.map((data) => {
              return (
                <div
                  className={`${
                    data.id === 1 ? '2lg:pb-2' : 'lg:pl-6 2lg:pt-2'
                  }`}
                  key={data.id}
                >
                  <p className="font-bold">{data.schoolName}</p>
                  <p>{data.period}</p>
                  <p>{data.major}</p>
                  <p>GPA : {data.gpa}</p>
                </div>
              );
            })}

            {/* แบบใส่ค่าไปเลย */}
            {/* <div className="2lg:pb-2">
              <p className="font-bold">
                Modern Management and Information Technology
              </p>
              <p>August 7, 2017 - April 5, 2021</p>
              <p>
                College of Art, Media and Technology in Chiang Mai University
              </p>
              <p>GPA : 3.37</p>
            </div>
            <div className="lg:pl-6 2lg:pt-2">
              <p className="font-bold">High School: Horpra School</p>
              <p>2013 - 2016</p>
              <p>Major: Sci-Math</p>
              <p>GPA : 3.65</p>
            </div> */}
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
