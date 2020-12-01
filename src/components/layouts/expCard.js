import React from 'react';
import PropTypes from 'prop-types'

export default function ExpCard({logo, title, company, time}) {
  return (
    <div className="md:w-2/3 lg:w-1/2 left-5 sm:left-1/10 md:left-1/5 lg:left-1/3 relative mx-12 mr-5 sm:mx-17 my-10">
      <div className="timeline-icon bg-teal-600 flex items-center md:pl-20">
        <img
          alt="Exp card logo"
          className="block w-16 mx-4 my-4"
          src={logo}
        />
        <h5 className="text-white">{title}</h5>
      </div>
      <div className="border-l-2 border-r-2 border-b-2 border-l-teal-600 border-r-teal-600 border-b-teal-600">
        <h6>{company}</h6>
        <p>{time}</p>
      </div>
    </div>
  );
}

ExpCard.propTypes = {
  logo: PropTypes.string,
  title: PropTypes.string,
  company: PropTypes.string,
  time: PropTypes.string,
}
