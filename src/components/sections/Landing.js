import React from 'react';

import Button from '../modules/Button';

export default function Landing() {
  return (
    <section
      className="bg-black-hole bg-center bg-contain h-screen flex flex-col justify-center"
      id="home"
    >
      <div className="text-center text-white">
        <h1 className="text-4xl lg:text-5xl leading-none">
          {"Hi, I'm Jason Cho"}
        </h1>
        <p className="text-2xl lg:text-3xl mt-6 font-light">
          Full-stack web developer
        </p>
        <p className="text-2xl lg:text-3xl font-light">Video game enthusiast</p>
        <p className="text-2xl lg:text-3xl font-light">Amateur astronomer</p>
        <p className="mt-8 md:mt-12">
          <Button size="lg">View Portfolio</Button>
        </p>
      </div>
    </section>
  );
}
