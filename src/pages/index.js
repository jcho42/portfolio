import React from 'react';

import Layout from '../components/layouts/layout';
import Seo from '../components/layouts/seo';
import { Landing, About, Projects, Experience, Blog, Contact } from '../components/sections';

function Portfolio() {
  return (
    <div>
      <Seo
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
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
