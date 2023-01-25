import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

import { SectionTitle, ExpCard } from '../layouts';
import FSALogo from '../../images/FSA logo.jpg'
import QuestLogo from '../../images/QD-logo.jpeg'
import UICLogo from '../../images/UIC-logo.png'
import GoogleLogo from '../../images/Google Logo.png'

export default function Experience() {
  return (
    <section className="section-offset" id="experience">
      <div className="mx-auto max-w-6xl py-8 md:py-16">
        <SectionTitle>Experience</SectionTitle>
        <ScrollAnimation animateIn="animate__fadeIn" animateOnce={true} className="timeline-line py-1 sm:mx-10">
          {[
            {
              logo: GoogleLogo,
              link: 'https://www.fullstackacademy.com/',
              title: '',
              info: 'Software Engineer L3',
              company: 'Google',
              time: 'Jan 2022 - Jan 2023'
            },
            {
              logo: FSALogo,
              link: 'https://www.fullstackacademy.com/',
              title: '',
              info: 'Full-stack Web Development',
              company: 'Fullstack Academy',
              time: 'Aug 2020 - Oct 2020'
            },
            {
              logo: QuestLogo,
              link: 'https://www.questdiagnostics.com/home/',
              title: 'Medical Technologist II',
              info: 'LC-MS/MS',
              company: 'Quest Diagnostics',
              time: 'Aug 2015 - Jul 2020'
            },
            {
              logo: UICLogo,
              link: 'https://www.uic.edu/',
              title: '',
              info: 'Biochemistry',
              company: 'University of Illinois at Chicago',
              time: 'Aug 2010 - May 2014'
            },
          ].map(card => <ExpCard key={card.company} logo={card.logo} link={card.link} title={card.title} info={card.info} company={card.company} time={card.time} />)}
        </ScrollAnimation>
      </div>
    </section>
  );
}
