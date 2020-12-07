import React from 'react';
import PropTypes from 'prop-types';
import ScrollAnimation from 'react-animate-on-scroll';

import SkillIcon from './skillIcon';

export default function SkillCard({ icon, skill, description }) {
  return (
    <div className="flex-1/2 pb-5 sm:p-8">
      <div className="flex justify-center">
        <SkillIcon>{icon}</SkillIcon>
      </div>

      <ScrollAnimation animateIn="animate__fadeIn" animateOnce={true} offset={100} delay={500}>
        <h4 className="text-h4 font-bold">{skill}</h4>
        <p className="text-sm md:text-base">{description}</p>
      </ScrollAnimation>
    </div>
  );
}

SkillCard.propTypes = {
  icon: PropTypes.node,
  skill: PropTypes.string,
  description: PropTypes.string,
};
