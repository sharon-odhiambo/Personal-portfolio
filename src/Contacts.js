import React from 'react';
import { res } from './images/images ';

const Contacts = () => (
  <section id="about-me" className="container-fluid bg-dark d-flex pt-0 ps-5 pe-5 pt-5 mb-5 pb-5  min-vh-100">
    <div className="container border">
      <h2 className="display-1 pt-5 ps-5 about-header text-light">
        About Me
      </h2>
      <p className="text-light col-5 pe-0 me-0 ps-5 pb-3">
        Hello I’m a software developer!
      </p>
      <button type="button" className="text-dark border-0 rounded-3 col-3 ms-5 p-2 mb-5 resume-btn">
        <a href={res} target="_blank" rel="noreferrer">Get My Resume</a>
      </button>
    </div>
    <form className="container d-flex flex-column justify-content-between mx-4 pt-5 mt-5" action="https://formspree.io/f/xlezvgbv" method="post">
      <input type="text" className="mb-3 p-2 border-0 border-bottom valid" name="Name" placeholder="Full name" aria-label="Name" maxLength="30" required />
      <input type="email" className="mb-5 p-2 border-0 border-bottom" name="Email" placeholder="Email address" aria-label="email" required />
      <textarea name="message" className="mb-3 p-3 " rows="5" placeholder="write your message here" maxLength="500" required />
      <button type="submit" className="col-3 text-dark border-0 p-2 mb-5 git-btn" id="submit">Get in Touch</button>
    </form>
  </section>
);

export default Contacts;
