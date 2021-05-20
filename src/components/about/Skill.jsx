import React from 'react';
import PropTypes from 'prop-types';

const Skill = ({ skillData }) => {
  return (
    <div>
      <div className="shadow-md py-4 px-8 bg-white bg-opacity-30 rounded-md">
        <div>
          <h2 className="text-gray-700 text-2xl font-semibold">Skill</h2>
          <div className="mt-2 lg:grid lg:grid-cols-8 lg:divide-x lg:divide-gray-300">
            {skillData.map((data) => {
              return (
                <p
                  key={data.id}
                  className={`${
                    data.id === 1
                      ? 'skill font-semibold'
                      : 'skill font-semibold lg:pl-6'
                  }`}
                >
                  {data.name}
                </p>
              );
            })}
            {/* <p>MySQL</p>
            <p className="lg:pl-6 ">PHP</p>
            <p className="lg:pl-6 ">JavaScript</p>
            <p className="lg:pl-6 ">C</p>
            <p className="lg:pl-6 ">CSS</p>
            <p className="lg:pl-6 ">HTML</p> */}
          </div>
        </div>
      </div>
    </div>
  );
};

Skill.protoType = {
  skillData: PropTypes.object.isRequired,
};

export default Skill;
