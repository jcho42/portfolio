import React from 'react';

import catAndHumanIllustration from '../../images/cat-and-human-illustration.svg';
import { SectionTitle, ArticleCard } from '../layouts';

export default function Blog() {
  return (
    <section className="section-offset bg-gray-100" id="blog">
      <div className="mx-auto max-w-6xl py-8 md:py-16">
        <SectionTitle>Blog</SectionTitle>
        <div className="flex flex-wrap justify-center mx-10">
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
