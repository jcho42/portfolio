import React from 'react';
import PropTypes from 'prop-types';
import ScrollAnimation from 'react-animate-on-scroll';

export default function ArticleCard({link, thumbnail, title, date, description}) {
  return (
    <ScrollAnimation animateIn="animate__fadeIn" animateOnce={true} className="w-96">
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
          <h5 className="text-left text-xl md:text-2xl my-3">{title}</h5>
          <p className="text-sm text-left">{date}</p>
          <div className="h-1 w-1/3 my-3 bg-teal-600"></div>
          <div className="text-left text-gray-500">{description}</div>
        </div>
      </a>
    </ScrollAnimation>
  );
}

ArticleCard.propTypes = {
  link: PropTypes.string,
  thumbnail: PropTypes.node,
  title: PropTypes.string,
  date: PropTypes.string,
  description: PropTypes.string,
}
