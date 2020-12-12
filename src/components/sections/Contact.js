import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';


export default function Contact() {
  return (
    <section
      className="text-center pt-40 pb-20 bg-blueGray-700 relative"
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
      <div className="flex flex-col mx-auto max-w-6xl py-8 md:py-16 text-gray-100">
        <ScrollAnimation animateIn="animate__fadeInLeft" animateOnce={true} className="mx-auto text-4xl md:text-5xl">Contact</ScrollAnimation>
        <ScrollAnimation animateIn="animate__fadeInLeft" animateOnce={true} className="border-t-4 border-gray-100 w-16 mx-auto mt-4 mb-10"></ScrollAnimation>
        <ScrollAnimation animateIn="animate__fadeInLeft" animateOnce={true} className="mb-10 mx-auto">Feel free to reach out!</ScrollAnimation>
        <ScrollAnimation animateIn="animate__bounceIn" animateOnce={true} className="flex justify-center">
          <form
            name="portfolio-contact"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            className="flex flex-col w-120 mx-10 text-gray-200"
          >
            <input type="hidden" name="bot-field" />
            <input type="hidden" name="form-name" value="portfolio-contact" />
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
            <div className="flex justify-end">
              <button type="submit" className="px-9 py-2 w-32 border-2 border-gray-400 hover:border-teal-600 hover:bg-teal-600 transition duration-500 ease-in-out">
                Submit
              </button>
            </div>
          </form>
        </ScrollAnimation>
      </div>
    </section>
  );
}
