import React from 'react';

import socketioPic from '../../images/socketio-picture.png';
import { SectionTitle, ArticleCard } from '../layouts';

export default function Blog() {
  return (
    <section className="section-offset bg-gray-100" id="blog">
      <div className="mx-auto max-w-6xl py-8 md:py-16">
        <SectionTitle>Blog</SectionTitle>
        <div className="flex flex-wrap justify-center mx-10">
          {[
            {
              link: 'https://jcho42.medium.com/using-web-sockets-with-socket-io-b1bdbf490703',
              thumbnail: socketioPic,
              title: 'Using Web Sockets with Socket.io',
              date: 'Oct 27, 2020',
              description: 'Web sockets have paved the way for an open two way "socket" communication that is able to send data back and forth between a client and a server.',
            },
          ].map(card => <ArticleCard key={card.title} link={card.link} title={card.title} thumbnail={card.thumbnail} date={card.date} description={card.description} /> )}
        </div>
      </div>
    </section>
  );
}
