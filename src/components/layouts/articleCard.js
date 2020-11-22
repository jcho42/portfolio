import React from 'react';
import PropTypes from 'prop-types';

export default function ArticleCard({link, thumbnail, title, date, description}) {
  return (
    <div className="w-96">
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div>
          <img
            alt="Cat and human sitting on a couch"
            className="block w-full"
            src={thumbnail}
          />
          <h5>{title}</h5>
          <p className="date">{date}</p>
          <div className="bar"></div>
          <div>{description}</div>
        </div>
      </a>
    </div>
  );
}

ArticleCard.propTypes = {
  link: PropTypes.string,
  thumbnail: PropTypes.node,
  title: PropTypes.string,
  date: PropTypes.string,
  description: PropTypes.string,
}
