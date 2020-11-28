import React from 'react';

import { Link } from 'react-scroll';
import { FaArrowRight } from 'react-icons/fa';

export default function Landing() {
  return (
    <section
      className="bg-black-hole bg-black bg-center bg-contain bg-no-repeat h-screen flex flex-col justify-center"
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
        <p className="mt-8 md:mt-12 flex justify-center">
          <Link
            to="about"
            spy={true}
            smooth={true}
            duration={500}
            className="cursor-pointer border-white border-2 p-5 hover:bg-teal-700 flex items-center"
          >
            <div className="px-5">View Portfolio</div>
            <FaArrowRight />
          </Link>
        </p>
      </div>
    </section>
  );
}
