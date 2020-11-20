import React, { useState } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

function Header() {
  const [isExpanded, toggleExpansion] = useState(false);

  return (
    <header className="bg-teal-700 sticky top-0">
      <div className="flex flex-wrap items-center justify-between max-w-4xl p-4 mx-auto md:p-8">
        <AnchorLink href="#home">
          <h1 className="flex items-center text-white no-underline">
            <svg
              className="w-8 h-8 mr-2 fill-current"
              height="54"
              viewBox="0 0 54 54"
              width="54"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
            </svg>
          </h1>
        </AnchorLink>

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
              route: `#home`,
              title: `Home`,
            },
            {
              route: `#about`,
              title: `About`,
            },
            {
              route: `#projects`,
              title: `Projects`,
            },
            {
              route: `#experience`,
              title: `Experience`,
            },
            {
              route: `#blog`,
              title: `Blog`,
            },
            {
              route: `#contact`,
              title: `Contact`,
            },
          ].map((link) => (
            <AnchorLink
              className="block mt-4 text-white no-underline md:inline-block md:mt-0 md:ml-6"
              key={link.title}
              href={link.route}
              // offset="100"
              onClick={() => toggleExpansion(false)}
            >
              {link.title}
            </AnchorLink>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Header;
