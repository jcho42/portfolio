import React from 'react';

import catAndHumanIllustration from '../../images/cat-and-human-illustration.svg';
import { SectionTitle, SkillCard } from '../layouts'

export default function About() {
  return (
    <section className="section-offset" id="about">
      <div className="px-4 py-8 md:px-8 md:py-16">
        <SectionTitle>About</SectionTitle>
        <div className="md:flex">
          <div className="flex-1 px-16">
            <img
              alt="Cat and human sitting on a couch"
              className="block mx-auto mb-8"
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

          <div className="flex-2">
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
