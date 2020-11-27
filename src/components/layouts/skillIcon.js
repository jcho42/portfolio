import React from 'react';
import PropTypes from 'prop-types';
import { IconContext } from 'react-icons';

export default function SkillIcon({ children }) {
  return (
    <div className="bg-teal-700 p-4 mx-4">
      <IconContext.Provider value={{ color: 'white', size: '5em' }}>
        {children}
      </IconContext.Provider>
    </div>
  );
}

SkillIcon.propTypes = {
  children: PropTypes.node,
};
