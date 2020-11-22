import React from 'react';

import catAndHumanIllustration from '../../images/cat-and-human-illustration.svg';
import SectionTitle from '../layouts/sectionTitle';

export default function Experience() {
  return (
    <section className="section-offset" id="experience">
      <div>
        <SectionTitle>Experience</SectionTitle>
        <div className="timeline-line">
          <div className="w-120 left-1/3 absolute border-2 m-16">
            <div className="timeline-icon bg-teal-500 flex items-center">
              <img
                alt="Cat and human sitting on a couch"
                className="block w-1/4 mx-8 my-4"
                src={catAndHumanIllustration}
              />
              <h5>Title</h5>
            </div>
            <div>
              <h6>Company</h6>
              <p>Time</p>
            </div>
          </div>

          <img
            alt="Cat and human sitting on a couch"
            className="block w-1/2 mx-auto mb-8"
            src={catAndHumanIllustration}
          />

          <h2 className="inline-block p-3 mb-4 text-2xl font-bold bg-yellow-400">
            Hey there! Welcome to your first Gatsby site.
          </h2>

          <p className="leading-loose">
            This is a barebones starter for Gatsby styled using{` `}
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
      </div>
    </section>
  );
}
