import React from 'react';
import PropTypes from 'prop-types';

import SkillIcon from './skillIcon';

export default function SkillCard({ icon, skill, description }) {
  return (
    <div className="flex-1/2 pb-5 sm:p-8">
      <div className="flex justify-center">
        <SkillIcon>{icon}</SkillIcon>
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
