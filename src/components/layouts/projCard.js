/* eslint-disable react/display-name */
import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

import Button from '../modules/Button'

const ProjectCard = forwardRef(({
  picture,
  title,
  description,
  tech,
  github,
  deployed,
  deployedType,
}, ref) => {
  return (
    <div ref={ref} className="relative flex-100 max-w-md md:flex-1/2 lg:flex-1/3">
      <div className="mt-full"></div>
      <div className={`absolute inset-0 ${picture} bg-contain bg-no-repeat hover:bg-none`}>
        <div className="h-full flex flex-col justify-center p-5 opacity-0 hover:opacity-100">
          <h2 className="inline-block p-3 pb-0 text-2xl md:text-3xl font-bold">
            {title}
          </h2>
          <p className="leading-loose text-lg md:text-xl text-orange-600">{tech}</p>
          <p className="leading-loose my-5">{description}</p>
          <div className="flex justify-center">
            <Button link={github}>Github</Button>
            {deployed && <Button link={deployed}>{deployedType}</Button>}
          </div>
        </div>
      </div>
    </div>
  );
})

export default ProjectCard

ProjectCard.propTypes = {
  picture: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  tech: PropTypes.string,
  github: PropTypes.string,
  deployed: PropTypes.string,
  deployedType: PropTypes.string,
};
