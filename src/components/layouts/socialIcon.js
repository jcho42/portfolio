import React from 'react';
import PropTypes from 'prop-types';
import { IconContext } from 'react-icons';

export default function SocialIcon({link, children}) {
  return (
    <a href={link} target="_blank"
    rel="noopener noreferrer">
      <div className="bg-gray-700 p-3 mx-3">
        <IconContext.Provider value={{ color: 'white', size: '2em' }}>
          {children}
        </IconContext.Provider>
      </div>
    </a>
  );
}

SocialIcon.propTypes = {
  link: PropTypes.string,
  children: PropTypes.node,
}
