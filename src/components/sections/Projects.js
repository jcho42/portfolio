import React, { useState } from 'react';

import { SectionTitle, ProjectCard } from '../layouts';
import constructionPic from '../../images/construction-icon.png'

export default function Projects() {
  const [projects, setProjects] = useState(projectArray);

  const selectProject = (type) => {
    let projects = projectArray;
    if (type === 'Web dev') {
      projects = projectArray.filter((project) => project.type === type);
    } else if (type === 'Game dev')
      [(projects = projectArray.filter((project) => project.type === type))];
    setProjects(projects);
  };

  return (
    <section className="section-offset relative bg-gray-100" id="projects">
      <div className="mx-auto max-w-6xl py-8 md:py-16">
        <SectionTitle>Projects</SectionTitle>
        <div>
          <div className="text-h4 flex justify-around w-96 md:w-120 mx-auto">
            <h4 className="cursor-pointer" onClick={() => selectProject('all')}>
              All
            </h4>
            <h4
              className="cursor-pointer"
              onClick={() => selectProject('Web dev')}
            >
              Web dev
            </h4>
            <h4
              className="cursor-pointer"
              onClick={() => selectProject('Game dev')}
            >
              Game dev
            </h4>
          </div>
          {projects.length ? (
            <div className="pt-10 flex flex-wrap justify-center">
              {projects.map((project) => (
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
                />
              ))}
            </div>
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
    type: 'Web dev',
    github: 'https://github.com/800080/Day_Tripper',
    deployed: 'https://www.youtube.com/watch?v=Z5ZOcTYYH1A',
    deployedType: 'Demo',
  },
  {
    picture: 'bg-pooped',
    title: 'Pooped',
    description:
      'A simple mobile application that helps to keep track of your bowel movements.',
    tech: 'React Native/FireStore',
    type: 'Web dev',
    github: 'https://github.com/jcho42/pooped',
    deployed: null,
    deplyedType: null,
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
  },
];
