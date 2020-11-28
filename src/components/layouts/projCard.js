import React from 'react';
import PropTypes from 'prop-types';

import Button from '../modules/Button'

export default function ProjectCard({
  picture,
  title,
  description,
  tech,
  github,
  deployed,
}) {
  return (
    <div className="md:max-w-md md:flex-1/2 lg:flex-1/3">
      <div
        className={`md:h-80 bg-contain bg-no-repeat bg-${picture}`}
      ></div>
      <div className="hidden hover:block">
        <h2 className="inline-block p-3 mb-4 text-2xl font-bold bg-yellow-400">
          {title}
        </h2>
        <p className="leading-loose">{tech}</p>
        <p className="leading-loose">{description}</p>
        <div className="flex justify-center">
          <Button size="lg" link={github}>Github</Button>
          <Button size="lg" link={deployed}>Website</Button>
        </div>
      </div>
    </div>
  );
}

ProjectCard.propTypes = {
  picture: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  tech: PropTypes.string,
  github: PropTypes.string,
  deployed: PropTypes.string,
};
