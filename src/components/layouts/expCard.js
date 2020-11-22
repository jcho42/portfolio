import React from 'react';
import PropTypes from 'prop-types'
import catAndHumanIllustration from '../../images/cat-and-human-illustration.svg';

export default function ExpCard({logo, title, company, time}) {
  return (
    <div className="w-120 left-1/3 relative border-2 m-16">
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
