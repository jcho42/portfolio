import React from 'react';

import catAndHumanIllustration from '../../images/cat-and-human-illustration.svg';

export default function About() {
  return (
    <section className="text-center pt-80 -mt-80 md:pt-24 md:-mt-24" id="about">
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
    </section>
  );
}
