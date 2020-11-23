import React from 'react';

export default function Contact() {
  return (
    <section
      className="text-center py-40 bg-blueGray-700 relative"
      id="contact"
    >
      <svg
        preserveAspectRatio="none"
        viewBox="0 0 100 102"
        height="75"
        width="100%"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        className="svgcolor-light absolute top-0"
      >
        <path d="M0 0 L50 100 L100 0 Z" fill="#f3f4f6" stroke="white"></path>
      </svg>
      <div className="text-gray-100">
        <h2 className="text-4xl md:text-5xl">Contact</h2>
        <div className="border-t-4 border-gray-100 w-16 mx-auto mt-4 mb-10"></div>
        <div className="mb-10">Have any questions?</div>
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
