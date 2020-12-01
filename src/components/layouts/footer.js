import React from 'react';
import { Link } from 'react-scroll';
import { IconContext } from 'react-icons';
import { FaGithub, FaLinkedin, FaMediumM } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi'
import { CgChevronDoubleUp } from 'react-icons/cg';

import SocialIcon from './socialIcon';

const Footer = () => {
  return (
    <footer className="py-10 bg-gray-800 relative">
      <Link to="home" spy={true} smooth={true} duration={500}>
        <div className="flex justify-center">
          <div className="bg-orange-600 p-2 cursor-pointer -top-9 absolute">
            <IconContext.Provider value={{ color: 'white', size: '3em' }}>
              <CgChevronDoubleUp />
            </IconContext.Provider>
          </div>
        </div>
      </Link>
      <nav className="max-w-md p-4 mx-auto text-sm md:p-6">
        <div className="flex justify-center">
          <SocialIcon link="https://github.com/jcho42/portfolio">
            <FaGithub />
          </SocialIcon>
          <SocialIcon link="https://www.linkedin.com/in/jcho42/">
            <FaLinkedin />
          </SocialIcon>
          <SocialIcon link="https://jcho42.medium.com/">
            <FaMediumM />
          </SocialIcon>
          <SocialIcon link="mailto:jason.cho.301230@gmail.com?subject=Hello!">
            <HiOutlineMail />
          </SocialIcon>
        </div>
        <p className="text-white opacity-60 text-center mt-8">
          Jason Cho <span className="text-orange-600">&#169;2020</span>
        </p>
      </nav>
    </footer>
  );
};

export default Footer;
