import React from 'react';
import "animate.css/animate.min.css";

import Layout from '../components/layouts/layout';
import Seo from '../components/layouts/seo';
import { Landing, About, Projects, Experience, Blog, Contact } from '../components/sections';

function Portfolio() {
  return (
    <div>
      <Seo
        keywords={[`Jason`, `Cho`, `React`, `Gatsby`, `Tailwind`]}
        title="Jason Cho"
      />
      <Landing />
      <Layout>
        <About />
        <Projects />
        <Experience />
        <Blog />
        <Contact />
      </Layout>
    </div>
  );
}

export default Portfolio;
