import React from 'react';

const Home = () => (
  <div className="headline" id="headline">
    <div className="headline-content">
      <div>
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
          If you like what you see and have a project you need coded, don’t hestiate to contact me!
        </p>
      </div>
      <div className="lets-connect">LET&apos;S CONNECT</div>
      <ul className="social-media-links">
        <li>
          {' '}
          <a href="https://twitter.com/SharonVictor16_" target="_blank" rel="noopener noreferrer" className="social-media-link">
            <img src="./images/twitter-icon.svg" alt="Twitter" />
          </a>
        </li>
        <li>
          {' '}
          <a href="https://www.linkedin.com/in/sharon-odhiambo-4333a0163/" target="_blank" rel="noopener noreferrer">
            <img src="./images/linkedin-icon.svg" alt="LinkedIn" />
          </a>
        </li>
        <li>
          {' '}
          <a href="https://www.linkedin.com/in/sharon-odhiambo-4333a0163/" target="_blank" rel="noopener noreferrer">
            <img src="./images/github.svg" alt="LinkedIn" />
          </a>
        </li>
        <li>
          {' '}
          <a href="https://www.linkedin.com/in/sharon-odhiambo-4333a0163/" target="_blank" rel="noopener noreferrer">
            <img src="./images/medium.svg" alt="LinkedIn" />
          </a>
        </li>
        <li>
          {' '}
          <a href="https://github.com/sharon-odhiambo" target="_blank" rel="noopener noreferrer" className="social-media-link">
            <img src="./images/angelist.svg" alt="Github" />
          </a>
        </li>
      </ul>
    </div>
  </div>
);

export default Home;
