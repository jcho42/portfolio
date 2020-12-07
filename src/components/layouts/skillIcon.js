import React from 'react';
import PropTypes from 'prop-types';
import { IconContext } from 'react-icons';
import ScrollAnimation from 'react-animate-on-scroll';

export default function SkillIcon({ children }) {
  return (
    <ScrollAnimation animateIn="animate__flipInY" animateOnce={true} delay={500} className="bg-teal-700 p-4 mx-4">
      <IconContext.Provider value={{ color: 'white', size: '5em' }}>
        {children}
      </IconContext.Provider>
    </ScrollAnimation>
  );
}

SkillIcon.propTypes = {
  children: PropTypes.node,
};
