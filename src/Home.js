import React from 'react';
import {
  twit, git, link,
} from './images/images ';

const Home = () => (
  <div className="pt-5 homepage">
    <div className="back">
      <h1 className="h1 ps-3 text-light hd1">
        Sharon
        {' '}
        <br />
        {' '}
        <span className="pb-3">O</span>
        dhiambo
      </h1>
    </div>
    <div className="d-flex flex-column hm">
      <h1 className="h1 mt-5 text-light hd">
        Full Stack Developer
      </h1>
      <p className="int mt-5 pt-5 line-height-5 w-50">
        Hi there. Glad to See You!
        {' '}
        <br />
        I&apos;m here to bring beautiful and creative solutions.
        I turn your development needs into the most sustainable and creative ideas.
      </p>
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
    <ul className="list-unstyled col-1 position-fixed bottom-50 end-0">
      <li id="github" className="pb-2">
        <a
          href="https://github.com/sharon-odhiambo"
          target="_blank"
          rel="noreferrer"
        >
          <img src={git} width="40" height="40" alt="github profile" />
        </a>
      </li>
      <li className="pb-2">
        <a
          href="https://www.linkedin.com/in/sharonn-odhiambo/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={link} width="40" height="40" alt="linkedin profile" />
        </a>
      </li>
      <li className="pb-2">
        <a
          href="https://twitter.com/SharonVictor16"
          target="_blank"
          rel="noreferrer"
        >
          <img src={twit} width="40" height="40" alt="linkedin profile" />
        </a>
      </li>
    </ul>
  </div>
);

export default Home;
