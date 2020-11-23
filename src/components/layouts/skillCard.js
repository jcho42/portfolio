import React from 'react';
import PropTypes from 'prop-types';

export default function SkillCard({ icon, skill, description }) {
  return (
    <div className="flex-1/2 md:flex-1/3">
      <div>
        <h2 className="p-3 mx-3 text-2xl font-bold bg-yellow-400">{icon}</h2>
      </div>
      <div>
        <h4 className="text-h4 font-bold">{skill}</h4>
        <p className="text-sm md:text-base">{description}</p>
      </div>
    </div>
  );
}

SkillCard.propTypes = {
  icon: PropTypes.string,
  skill: PropTypes.string,
  description: PropTypes.string,
};
