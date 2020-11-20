import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-blue-300">
      <nav className="flex justify-between max-w-4xl p-4 mx-auto text-sm md:p-8">
        <p className="text-white">
          Created by{` `}
          <a
            className="font-bold no-underline"
            href="https://bryant.io"
            target="_blank"
            rel="noopener noreferrer"
          >
            Jason Cho
          </a>
        </p>

        <p>
          <a
            className="font-bold text-white no-underline"
            href="https://github.com/taylorbryant/gatsby-starter-tailwind"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </p>
      </nav>
    </footer>
  );
};

export default Footer;
