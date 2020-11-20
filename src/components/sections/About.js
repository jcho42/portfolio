import React from 'react';

import catAndHumanIllustration from '../../images/cat-and-human-illustration.svg';
import SectionTitle from '../layouts/sectionTitle'

export default function About() {
  return (
    <section className="section-offset" id="about">
      <div>
        <SectionTitle>About</SectionTitle>
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
    </section>
  );
}
