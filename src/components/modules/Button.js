import React from 'react';
import PropTypes from 'prop-types'

const sizes = {
  default: `py-3 px-8`,
  lg: `py-4 px-12`,
  xl: `py-5 px-16 text-lg`
};

const Button = ({ children, className = '', size, link }) => {
  return (
    <a
      className={`
        ${sizes[size] || sizes.default}
        ${className}
        btn
        m-3
    `}
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    >
      {children}
    </a>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  size: PropTypes.string,
  link: PropTypes.string,
}

export default Button;
