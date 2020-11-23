import React from 'react';

import catAndHumanIllustration from '../../images/cat-and-human-illustration.svg';
import { SectionTitle, SkillCard } from '../layouts'

export default function About() {
  return (
    <section className="section-offset" id="about">
      <div className="mx-auto max-w-6xl py-8 md:py-16">
        <SectionTitle>About</SectionTitle>
        <div className="lg:flex">
          <div className="flex-1 px-16 mb-12 lg:mb-0">
            <img
              alt="Cat and human sitting on a couch"
              className="block w-80 mx-auto mb-10"
              src={catAndHumanIllustration}
            />
            <p className="leading-loose">
              Cool description of myself. I used {` `}
              <a
                className="font-bold text-gray-900 no-underline"
                href="https://tailwindcss.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Tailwind CSS
              </a>
              , a utility-first CSS framework.
            </p>
          </div>

          <div className="flex-2 px-16">
            <h3 className="text-3xl md:text-4xl text-blueGray-700">Skills</h3>
            <div className=" flex flex-wrap">
              {[
                {
                  icon: "Icon",
                  skill: "JavaScript",
                  description: "React, Redux, Node"
                },
                {
                  icon: "Icon",
                  skill: "JavaScript",
                  description: "React, Redux, Node"
                },
                {
                  icon: "Icon",
                  skill: "JavaScript",
                  description: "React, Redux, Node"
                },
                {
                  icon: "Icon",
                  skill: "JavaScript",
                  description: "React, Redux, Node"
                },
                {
                  icon: "Icon",
                  skill: "JavaScript",
                  description: "React, Redux, Node"
                },
                {
                  icon: "Icon",
                  skill: "JavaScript",
                  description: "React, Redux, Node"
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
