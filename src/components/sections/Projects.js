import React from 'react';

import catAndHumanIllustration from '../../images/cat-and-human-illustration.svg';
import SectionTitle from '../layouts/sectionTitle'

export default function Projects() {
  return (
    <section className="section-offset" id="projects">
      <div>
        <SectionTitle>Projects</SectionTitle>
        <div className="mx-10">
          <div className="text-h4 flex justify-around w-120 mx-auto">
            <h4>All</h4>
            <h4>Web dev</h4>
            <h4>Game dev</h4>
          </div>
          <div className="pt-10 flex flex-wrap">
            <div className="flex-1/3">
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
            <div className="flex-1/3">
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
            <div className="flex-1/3">
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
        </div>
      </div>
    </section>
  );
}
