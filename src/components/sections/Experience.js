import React from 'react';

import { SectionTitle, ExpCard } from '../layouts';

export default function Experience() {
  return (
    <section className="section-offset" id="experience">
      <div className="mx-auto max-w-6xl py-8 md:py-16">
        <SectionTitle>Experience</SectionTitle>
        <div className="timeline-line py-1 mx-10">
          {[
            {
              logo: 'logo',
              title: 'Title',
              company: 'Company',
              time: 'Time'
            },
            {
              logo: 'logo',
              title: 'Title',
              company: 'Company',
              time: 'Time'
            },
            {
              logo: 'logo',
              title: 'Title',
              company: 'Company',
              time: 'Time'
            },
          ].map(card => <ExpCard key={card.company} logo={card.logo} title={card.title} company={card.company} time={card.time} />)}
        </div>
      </div>
    </section>
  );
}
