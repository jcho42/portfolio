import React from 'react';

import portrait from '../../images/IMG_2457 (1).jpg';
import { FaReact, FaNodeJs, FaCoffee } from 'react-icons/fa';
import { SiSocketDotIo } from 'react-icons/si'
import { SectionTitle, SkillCard } from '../layouts'

export default function About() {
  return (
    <section className="section-offset" id="about">
      <div className="mx-auto max-w-6xl py-8 md:py-16">
        <SectionTitle>About</SectionTitle>
        <div className="flex flex-col lg:flex-row lg:items-center">
          <div className="flex-1 px-16 mb-12 lg:mb-0">
            <img
              alt="Selfie"
              className="block w-80 mx-auto"
              src={portrait}
            />
            <h3 className="text-xl md:text-2xl  text-blueGray-700 my-5 font-bold">Who am I?</h3>
            <p className="leading-loose">
              {`I'm a full-stack web developer in Chicago, IL. I have a passion for amazing UI and problem solving to create a great user experience. On my free time, I like to play video games, watch sci-fi movies, and observe the vast universe with my telescope.`}
            </p>
          </div>

          <div className="flex-2 md:px-16">
            <h3 className="text-3xl pb-12 md:text-4xl text-blueGray-700">Skills</h3>
            <div className=" flex flex-wrap">
              {[
                {
                  icon: <FaReact />,
                  skill: "Front End",
                  description: "JavaScript, React, Redux, React Native, HTML, CSS"
                },
                {
                  icon: <FaNodeJs />,
                  skill: "Back End",
                  description: "Node, Express, Sequelize, PostgreSQL, Firebase/FireStore"
                },
                {
                  icon: <FaCoffee />,
                  skill: "Testing",
                  description: "Jasmine, Mocha, Chai"
                },
                {
                  icon: <SiSocketDotIo />,
                  skill: "Others",
                  description: "Git, Socket.io, SQL, Python, Java"
                },
              ].map(card => (
                <SkillCard key={card.skill} icon={card.icon} skill={card.skill} description={card.description} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
