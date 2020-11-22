import React from 'react';

import catAndHumanIllustration from '../../images/cat-and-human-illustration.svg';
import { SectionTitle, ArticleCard } from '../layouts';

export default function Blog() {
  return (
    <section className="section-offset" id="blog">
      <div>
        <SectionTitle>Blog</SectionTitle>
        <div className="flex flex-wrap justify-center">
          {[
            {
              link: 'https://github.com/jcho42/portfolio',
              thumbnail: catAndHumanIllustration,
              title: 'Title',
              date: 'Date',
              description: 'Description',
            },
            {
              link: 'https://github.com/jcho42/portfolio',
              thumbnail: catAndHumanIllustration,
              title: 'Title',
              date: 'Date',
              description: 'Description',
            },
            {
              link: 'https://github.com/jcho42/portfolio',
              thumbnail: catAndHumanIllustration,
              title: 'Title',
              date: 'Date',
              description: 'Description',
            },
          ].map(card => <ArticleCard key={card.title} link={card.link} title={card.title} thumbnail={card.thumbnail} date={card.date} description={card.description} /> )}
        </div>
      </div>
    </section>
  );
}
