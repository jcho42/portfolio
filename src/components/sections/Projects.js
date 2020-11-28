import React, { useState } from 'react';

import { SectionTitle, ProjectCard } from '../layouts'

export default function Projects() {
  const [projects, setProjects] = useState(projectArray)

  const selectProject = (type) => {
    let projects = projectArray
    if (type === 'Web dev') {
      projects = projectArray.filter(project => project.type === type)
    } else if (type === 'Game dev') [
      projects = projectArray.filter(project => project.type === type)
    ]
    setProjects(projects)
  }

  return (
    <section className="section-offset relative bg-gray-100" id="projects">
      <div className="mx-auto max-w-6xl py-8 md:py-16">
        <SectionTitle>Projects</SectionTitle>
        <div>
          <div className="text-h4 flex justify-around w-120 mx-auto">
            <h4 onClick={() => selectProject('all')}>All</h4>
            <h4 onClick={() => selectProject('Web dev')}>Web dev</h4>
            <h4 onClick={() => selectProject('Game dev')}>Game dev</h4>
          </div>
          <div className="pt-10 flex flex-wrap justify-center">
            {projects.map(project => (
              <ProjectCard key={project.title} picture={project.picture} title={project.title} description={project.description} tech={project.tech} type={project.type} github={project.github} deployed={project.deployed} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

let projectArray = [
  {
    picture: 'project1',
    title: 'Title',
    description: 'Description',
    tech: 'Tech/Tech/Tech',
    github: 'https://github.com/jcho42/portfolio',
    deployed: 'https://github.com/jcho42/portfolio',
  },
  {
    picture: 'project1',
    title: 'Title',
    Description: 'Description',
    tech: 'Tech/Tech/Tech',
    github: 'https://github.com/jcho42/portfolio',
    deployed: 'https://github.com/jcho42/portfolio',
  },
  {
    picture: 'project1',
    title: 'Title',
    Description: 'Description',
    tech: 'Tech/Tech/Tech',
    github: 'https://github.com/jcho42/portfolio',
    deployed: 'https://github.com/jcho42/portfolio',
  },
]
