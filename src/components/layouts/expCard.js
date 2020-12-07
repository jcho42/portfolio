import React from 'react';
import PropTypes from 'prop-types'
import ScrollAnimation from 'react-animate-on-scroll';

export default function ExpCard({logo, title, info, company, time}) {
  return (
    <ScrollAnimation animateIn="animate__fadeInRight" animateOnce="true" className="md:w-2/3 lg:w-1/2 left-5.5 sm:left-1/10 md:left-1/5 lg:left-1/3 relative mx-12 mr-10 sm:mx-17 my-10">
      <div className="timeline-icon bg-teal-600 flex items-center md:pl-20">
        <img
          alt="Exp card logo"
          className="block w-16 mx-4 my-4"
          src={logo}
        />
        <div className="text-white text-left">
          <h5>{title}</h5>
          <h5>{info}</h5>
        </div>
      </div>
      <div className="border-l-2 border-r-2 border-b-2 border-l-teal-600 border-r-teal-600 border-b-teal-600">
        <h6>{company}</h6>
        <p>{time}</p>
      </div>
    </ScrollAnimation>
  );
}

ExpCard.propTypes = {
  logo: PropTypes.string,
  title: PropTypes.string,
  info: PropTypes.string,
  company: PropTypes.string,
  time: PropTypes.string,
}
