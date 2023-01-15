import React from 'react';
import {
  FaGithub, FaTwitter, FaLinkedinIn, FaAngellist, FaMediumM,
} from 'react-icons/fa';

const Home = () => (
  <div className="header-background" id="headline">
    <div className="headline-content">
      <div className="intro">
        <h1>
          I&apos;m Sharon
          {' '}
          <br />
          {' '}
          Glad to see you!
        </h1>
        <p>
          I&apos;m a software developer! I can help you build a product , feature or website
          {' '}
          <br />
          Look through some of my work and experience.
          {' '}
          <br />
          {' '}
          If you like what you see and have a project you need coded,
          don’t hestiate to contact me!
        </p>
      </div>
      <div className="lets-connect">LET&apos;S CONNECT</div>
      <ul className="social-media-links">
        <li>
          {' '}
          <a href="https://twitter.com/SharonVictor16_" target="_blank" rel="noopener noreferrer" className="social-media-link">
            <FaTwitter />
          </a>
        </li>
        <li>
          {' '}
          <a href="https://www.linkedin.com/in/sharonn-odhiambo/" target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn />
          </a>
        </li>
        <li>
          {' '}
          <a href="https://github.com/sharon-odhiambo" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
        </li>
        <li>
          {' '}
          <a href="https://angel.co/u/sharon-odhiambo-1" target="_blank" rel="noopener noreferrer">
            <FaAngellist />
          </a>
        </li>
        <li>
          {' '}
          <a href="https://github.com/sharon-odhiambo" target="_blank" rel="noopener noreferrer" className="social-media-link">
            <FaMediumM />
          </a>
        </li>
      </ul>
    </div>
  </div>
);

export default Home;
