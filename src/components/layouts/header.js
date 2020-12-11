import React, { useState } from 'react';
import { Link } from 'react-scroll';

import endurance from '../../images/endurance-white.png'

function Header() {
  const [isExpanded, toggleExpansion] = useState(false);

  return (
    <header className="bg-blueGray-700 border-b-4 border-b-teal-500 sticky top-0 z-50 bg-opacity-95">
      <div className="flex flex-wrap items-center justify-between max-w-4xl p-2 mx-auto">
        <Link to="home" spy={true} smooth={true} duration={500}>
          <img src={endurance} className="w-10 cursor-pointer">
          </img>
        </Link>

        <button
          className="items-center block px-3 py-2 text-white border border-white rounded md:hidden"
          onClick={() => toggleExpansion(!isExpanded)}
        >
          <svg
            className="w-3 h-3 fill-current"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>

        <nav
          className={`${
            isExpanded ? `block` : `hidden`
          } md:block md:items-center w-full md:w-auto`}
        >
          {[
            {
              route: `home`,
              title: `Home`,
            },
            {
              route: `about`,
              title: `About`,
            },
            {
              route: `projects`,
              title: `Projects`,
            },
            {
              route: `experience`,
              title: `Experience`,
            },
            {
              route: `blog`,
              title: `Blog`,
            },
            {
              route: `contact`,
              title: `Contact`,
            },
          ].map((link) => (
            <Link
              className="block mt-4 text-white no-underline md:inline-block md:mt-0 md:ml-6 text-xl cursor-pointer"
              key={link.title}
              to={link.route}
              spy={true}
              smooth={true}
              offset={isExpanded ? -250 : null}
              duration={500}
              onClick={() => toggleExpansion(false)}
            >
              {link.title}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Header;
