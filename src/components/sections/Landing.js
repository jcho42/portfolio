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
          Software Engineer
        </p>
        <p className="text-2xl lg:text-3xl font-light">Video Game Enthusiast</p>
        <p className="text-2xl lg:text-3xl font-light">Amateur Astronomer</p>
        <p className="mt-8 md:mt-12 flex justify-center">
          <Link
            to="about"
            spy={true}
            smooth={true}
            duration={500}
            className="cursor-pointer border-white border-2 p-5 transition duration-500 ease-in-out hover:bg-teal-700 hover:border-teal-700 flex items-center"
          >
            <span className="px-5">View Portfolio</span>
            <FaArrowRight />
          </Link>
        </p>
      </div>
    </section>
  );
}
