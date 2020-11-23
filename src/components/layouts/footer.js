import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { IconContext } from 'react-icons';
import { FaBeer } from 'react-icons/fa';
import { CgChevronDoubleUp } from 'react-icons/cg';

import SocialIcon from './socialIcon';

const Footer = () => {
  return (
    <footer className="py-10 bg-gray-500 relative">
      <AnchorLink href="#home">
        <div className="flex justify-center">
          <div className="bg-blueGray-700 p-2 cursor-pointer -top-6 absolute">
            <IconContext.Provider value={{ color: 'white', size: '3em' }}>
              <CgChevronDoubleUp />
            </IconContext.Provider>
          </div>
        </div>
      </AnchorLink>
      <nav className="max-w-md p-4 mx-auto text-sm md:p-6">
        <div className="flex justify-center">
          <SocialIcon link="https://github.com/jcho42/portfolio">
            <FaBeer />
          </SocialIcon>
          <SocialIcon link="https://github.com/jcho42/portfolio">
            <FaBeer />
          </SocialIcon>
          <SocialIcon link="https://github.com/jcho42/portfolio">
            <FaBeer />
          </SocialIcon>
          <SocialIcon link="https://github.com/jcho42/portfolio">
            <FaBeer />
          </SocialIcon>
        </div>
        <p className="text-white text-center mt-8">Jason Cho &#169;2020</p>
      </nav>
    </footer>
  );
};

export default Footer;
