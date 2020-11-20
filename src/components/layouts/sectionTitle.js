import React from 'react';
import PropTypes from 'prop-types'

export default function SectionTitle({children}) {
  return (
    <div>
      <h2 className="text-4xl md:text-5xl text-blueGray-700">{children}</h2>
      <div className="section-underline"></div>
    </div>
  );
}

SectionTitle.propTypes = {
  children: PropTypes.string
}
