import React, { useState } from 'react';
import FlipMove from 'react-flip-move';
import ScrollAnimation from 'react-animate-on-scroll';

import { SectionTitle, ProjectCard } from '../layouts';
import constructionPic from '../../images/construction-icon.png';

export default function Projects() {
  const [projects, setProjects] = useState(projectArray);
  const [allActive, setAllActive] = useState('proj-active');
  const [webActive, setWebActive] = useState('');
  const [mobileActive, setMobileActive] = useState('');
  const [gameActive, setGameActive] = useState('');

  const selectProject = (type) => {
    let projects = projectArray;
    if (type === 'Web dev') {
      projects = projectArray.filter((project) => project.type === type);
      setAllActive('');
      setWebActive('proj-active');
      setMobileActive('');
      setGameActive('');
    } else if (type === 'Game dev') {
      [(projects = projectArray.filter((project) => project.type === type))];
      setAllActive('');
      setWebActive('');
      setMobileActive('');
      setGameActive('proj-active');
    } else if (type === 'Mobile dev') {
      [(projects = projectArray.filter((project) => project.type === type))];
      setAllActive('');
      setWebActive('');
      setMobileActive('proj-active');
      setGameActive('');
    } else {
      setAllActive('proj-active');
      setWebActive('');
      setMobileActive('');
      setGameActive('');
    }
    setProjects(projects);
  };

  return (
    <section className="section-offset relative bg-gray-100" id="projects">
      <div className="mx-auto max-w-6xl py-8 md:py-16">
        <SectionTitle>Projects</SectionTitle>
        <div>
          <ScrollAnimation animateIn="animate__fadeIn" animateOnce={true} className="text-h4 flex justify-around w-screen md:w-120 mx-auto">
            <h4
              className={`flex-1/3 py-1 cursor-pointer transition duration-500 ease-in-out ${allActive}`}
              onClick={() => selectProject('all')}
            >
              All
            </h4>
            <h4
              className={`flex-1/3 py-1 cursor-pointer transition duration-500 ease-in-out ${webActive}`}
              onClick={() => selectProject('Web dev')}
            >
              Web
            </h4>
            <h4
              className={`flex-1/3 py-1 cursor-pointer transition duration-500 ease-in-out ${mobileActive}`}
              onClick={() => selectProject('Mobile dev')}
            >
              Mobile
            </h4>
            <h4
              className={`flex-1/3 py-1 cursor-pointer transition duration-500 ease-in-out ${gameActive}`}
              onClick={() => selectProject('Game dev')}
            >
              Game
            </h4>
          </ScrollAnimation>
          {projects.length ? (
            <FlipMove className="pt-10 flex flex-wrap justify-center">
              {projects.map((project, index) => (
                <ProjectCard
                  key={project.title}
                  picture={project.picture}
                  title={project.title}
                  description={project.description}
                  tech={project.tech}
                  type={project.type}
                  github={project.github}
                  deployed={project.deployed}
                  deployedType={project.deployedType}
                  delay={index}
                />
              ))}
            </FlipMove>
          ) : (
            <div className="text-3xl mt-20 flex justify-center items-center">
              <img src={constructionPic} className="w-40" />
              <div>Coming soon...</div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

let projectArray = [
  {
    picture: 'bg-dayTripper',
    title: 'DayTripper',
    description:
      'A mobile application that allows for easy trip planning with your friends or family.',
    tech: 'React Native/Express/Postgres',
    type: 'Mobile dev',
    github: 'https://github.com/800080/Day_Tripper',
    deployed: 'https://www.youtube.com/watch?v=Z5ZOcTYYH1A',
    deployedType: 'Demo',
    delay: 0,
  },
  {
    picture: 'bg-pooped',
    title: 'Pooped',
    description:
      'A simple mobile application that helps to keep track of your bowel movements.',
    tech: 'React Native/FireStore',
    type: 'Mobile dev',
    github: 'https://github.com/jcho42/pooped',
    deployed: null,
    deplyedType: null,
    delay: 100,
  },
  {
    picture: 'bg-gfs',
    title: "Grace's Fruity Seeds",
    description: 'A basic e-commerce website that sells fruit seeds.',
    tech: 'React/Redux/Express/Postgres',
    type: 'Web dev',
    github: 'https://github.com/fruitByTheForLoops/GraceFlopper',
    deployed: 'http://gfseeds.herokuapp.com/',
    deployedType: 'Web site',
    delay: 200,
  },
];
