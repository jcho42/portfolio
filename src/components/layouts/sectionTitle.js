import React from 'react';
import PropTypes from 'prop-types'
import ScrollAnimation from 'react-animate-on-scroll';

export default function SectionTitle({children}) {
  return (
    <div className="flex flex-col items-center">
      <ScrollAnimation animateIn="animate__fadeInLeft" animateOnce="true" className="text-4xl md:text-5xl text-blueGray-700">{children}</ScrollAnimation>
      <ScrollAnimation animateIn="animate__fadeInLeft" animateOnce="true" className="section-underline"></ScrollAnimation>
    </div>
  );
}

SectionTitle.propTypes = {
  children: PropTypes.string
}
