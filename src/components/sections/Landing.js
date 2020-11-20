import React from 'react';

import Button from '../modules/Button';
import catAndHumanIllustration from '../../images/cat-and-human-illustration.svg';

export default function Landing() {
  return (
    <section className="pt-20 px-4 md:px-8 md:pt-40 h-screen" id="home">
      <div className="container mx-auto px-8 lg:flex">
        <div className="text-center lg:text-left lg:w-1/2">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-none">
            {"Hi, I'm Jason"}
          </h1>
          <p className="text-xl lg:text-2xl mt-6 font-light">
            Full-stack web developer
          </p>
          <p className="text-xl lg:text-2xl font-light">
            Video game enthusiast
          </p>
          <p className="text-xl lg:text-2xl font-light">
            Amateur astronomer
          </p>
          <p className="mt-8 md:mt-12">
            <Button size="lg">Get Started</Button>
          </p>
        </div>
        <div className="lg:w-1/2">
          <img
            alt="Cat and human sitting on a couch"
            // className="block w-1/2 mx-auto mb-8"
            src={catAndHumanIllustration}
          />
        </div>
      </div>
    </section>
  );
}
