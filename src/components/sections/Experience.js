import React from 'react';

import { SectionTitle, ExpCard } from '../layouts';

export default function Experience() {
  return (
    <section className="section-offset" id="experience">
      <div>
        <SectionTitle>Experience</SectionTitle>
        <div className="timeline-line">
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
