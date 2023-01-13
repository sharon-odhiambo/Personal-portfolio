import React from 'react';
import { res } from './images/images ';

const Contacts = () => (
  <section id="about-me" className="container-fluid d-flex pt-0 ps-5 pe-5 pt-5 bt">
    <div className="container border">
      <div className="d-flex flex-column align-items-center">
        {' '}
        <h2 className="display-1 pt-5 ps-5 about-header">
          Want to Hire Me?
        </h2>
        {' '}
        <a href={res} target="_blank" className="tal d-flex gap-3" rel="noreferrer">
          <p>
            Resume
            {' '}
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-down-square ms-2" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm8.5 2.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z" />
            </svg>
          </p>
        </a>
      </div>
      <div className="d-flex flex-column align-items-center">
        {' '}
        <h3 className="display-1 pt-5 ps-5 about-header">
          Project Needs
        </h3>
        <a href="#contact-me" className="tal border-0 d-flex gap-3" rel="noreferrer">
          <span>
            Let&apos;s Chat
            {' '}
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-box-arrow-up-right align-self-center mb-2" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z" />
              <path fillRule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z" />
            </svg>
          </span>
        </a>

      </div>
    </div>
    <form className="container d-flex flex-column justify-content-between mx-4 pt-5 mt-5" action="https://formspree.io/f/xlezvgbv" id="contact-me" method="post">
      <input type="text" className="mb-3 p-2" name="Name" placeholder="Full name" aria-label="Name" maxLength="30" required />
      <input type="email" className="mb-5 p-2" name="Email" placeholder="Email address" aria-label="email" required />
      <textarea name="message" className="mb-3 p-3 " rows="5" placeholder="write your message here" maxLength="500" required />
      <button type="submit" className="p-2 mb-5 git-btn" id="submit">Get in Touch</button>
    </form>
  </section>
);

export default Contacts;
