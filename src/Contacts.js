import React from 'react';
import { res } from './images/images ';

const Contacts = () => (
  <section id="about-me" className="container-fluid d-flex pt-0 ps-5 pe-5 pt-5 bt">
    <div className="container border">
      <div>
        {' '}
        <h2 className="display-1 pt-5 ps-5 about-header text-light">
          Want to Hire Me?
        </h2>
        <button type="button" className="d-flex align-self-center text-dark border-0 rounded-3 col-2 ms-5 p-2 mb-5 resume-btn">
          <a href={res} target="_blank" rel="noreferrer">Get My Resume</a>
        </button>

      </div>
      <div>
        {' '}
        <span className="display-1 pt-5 ps-5 about-header">
          Project Needs
        </span>
        <a href="#contact-me" className="tal border-0 mt-5 pt-5 d-flex gap-3" rel="noreferrer">
          <span>
            Let&apos;s Chat
            {' '}
          </span>
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-box-arrow-up-right align-self-center mb-2" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z" />
              <path fillRule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z" />
            </svg>
          </span>
        </a>

      </div>
    </div>
    <form className="container d-flex flex-column justify-content-between mx-4 pt-5 mt-5" action="https://formspree.io/f/xlezvgbv" id="contact-me" method="post">
      <input type="text" className="mb-3 p-2 border-0 border-bottom valid" name="Name" placeholder="Full name" aria-label="Name" maxLength="30" required />
      <input type="email" className="mb-5 p-2 border-0 border-bottom" name="Email" placeholder="Email address" aria-label="email" required />
      <textarea name="message" className="mb-3 p-3 " rows="5" placeholder="write your message here" maxLength="500" required />
      <button type="submit" className="col-3 text-dark border-0 p-2 mb-5 git-btn" id="submit">Get in Touch</button>
    </form>
  </section>
);

export default Contacts;
