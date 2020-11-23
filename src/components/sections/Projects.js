import React from 'react';

import { SectionTitle, ProjectCard } from '../layouts'

export default function Projects() {
  return (
    <section className="section-offset relative bg-gray-100" id="projects">
      <div className="mx-auto max-w-6xl py-8 md:py-16">
        <SectionTitle>Projects</SectionTitle>
        <div>
          <div className="text-h4 flex justify-around w-120 mx-auto">
            <h4>All</h4>
            <h4>Web dev</h4>
            <h4>Game dev</h4>
          </div>
          <div className="pt-10 flex flex-wrap justify-center">
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
          </div>
        </div>
      </div>
    </section>
  );
}
