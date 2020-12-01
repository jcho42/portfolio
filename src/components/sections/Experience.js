import React from 'react';

import { SectionTitle, ExpCard } from '../layouts';
import FSALogo from '../../images/FSA logo.jpg'
import QuestLogo from '../../images/QD-logo.jpeg'
import UICLogo from '../../images/UIC-logo.png'

export default function Experience() {
  return (
    <section className="section-offset" id="experience">
      <div className="mx-auto max-w-6xl py-8 md:py-16">
        <SectionTitle>Experience</SectionTitle>
        <div className="timeline-line py-1 sm:mx-10">
          {[
            {
              logo: FSALogo,
              title: 'Student',
              company: 'Fullstack Academy',
              time: 'Aug 2020 - Oct 2020'
            },
            {
              logo: QuestLogo,
              title: 'Medical Technologist II',
              company: 'Quest Diagnostics',
              time: 'Aug 2015 - Jul 2020'
            },
            {
              logo: UICLogo,
              title: 'Student',
              company: 'University of Illinois at Chicago',
              time: 'Aug 2010 - May 2014'
            },
          ].map(card => <ExpCard key={card.company} logo={card.logo} title={card.title} company={card.company} time={card.time} />)}
        </div>
      </div>
    </section>
  );
}
