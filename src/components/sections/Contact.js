import React from 'react';

import SectionTitle from '../layouts/sectionTitle';

export default function Contact() {
  return (
    <section className="section-offset" id="contact">
      <div>
        <SectionTitle>Contact</SectionTitle>
        <div>Have any question?</div>
        <form className="flex flex-col w-120 mx-auto text-gray-200">
          <input
            className="px-3 py-2 mb-0.5 bg-gray-800"
            type="text"
            name="name"
            placeholder="Name"
            required
          />
          <input
            className="px-3 py-2 mb-0.5 bg-gray-800"
            type="email"
            name="email"
            placeholder="Enter Email"
            required
          />
          <textarea
            className="px-3 py-2 mb-1 h-32 bg-gray-800"
            type="text"
            name="message"
            placeholder="Your message"
          ></textarea>
          <div className="flex justify-between">
            <div>Success message</div>
            <button className="px-9 py-2 border-2 border-gray-400">
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
