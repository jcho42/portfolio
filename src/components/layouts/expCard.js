import React from 'react';
import PropTypes from 'prop-types'
import catAndHumanIllustration from '../../images/cat-and-human-illustration.svg';

export default function ExpCard({logo, title, company, time}) {
  return (
    <div className="md:w-2/3 lg:w-1/2 left-1/10 md:left-1/5 lg:left-1/3 relative border-2 mx-16 my-10">
      <div className="timeline-icon bg-teal-500 flex items-center">
        <img
          alt="Cat and human sitting on a couch"
          className="block w-1/4 mx-8 my-4"
          src={catAndHumanIllustration}
        />
        <h5>{logo}</h5>
        <h5>{title}</h5>
      </div>
      <div>
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
