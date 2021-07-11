import React from 'react';
import PropTypes from 'prop-types';

const Skill = ({ skillData }) => {
  if (!skillData) {
    return <div></div>;
  }

  return (
    <div>
      <div className="shadow-md py-4 px-8 bg-white bg-opacity-30 rounded-md">
        <div>
          <h2 className="text-gray-700 text-2xl font-semibold">Skill</h2>
          <div className="mt-2 lg:grid lg:grid-cols-9 lg:divide-x lg:divide-gray-300">
            {skillData.map((data, i) => {
              return (
                <p
                  key={i}
                  className={`${
                    i === 1
                      ? 'skill font-semibold'
                      : 'skill font-semibold lg:pl-6'
                  }`}
                >
                  {data.name}
                </p>
              );
            })}
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
