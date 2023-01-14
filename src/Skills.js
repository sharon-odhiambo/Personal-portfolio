/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import {
  node, html, css, jav,
  react, red, rb, res,
} from './images/images ';

const Skills = () => (
  <div className="works-skills">
    <div className="about-me-skills">
      <div className="about-me w-100" id="about-me">
        <div>
          <h3>About Myself</h3>
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
              <img src="./images/twitter-icon.svg" alt="Twitter" />
            </a>
          </li>
          <li>
            {' '}
            <a href="https://www.linkedin.com/in/sharon-odhiambo-4333a0163/" target="_blank" rel="noopener noreferrer">
              <img src="./images/linkedi-icon.svg" alt="LinkedIn" />
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
        <div className="button-resume"><a href={res} target="_blank" rel="noreferrer"><span>Get my Resume</span></a></div>
      </div>
      <div className="skill-section-items">
        <ul>
          <li>
            <div className="languages-dropdown-bar">
              <p className="d-flex justify-content-center align-items-center">
                Langauges
              </p>
              <div className="skill-items">
                <ul>
                  <li>
                    <span>
                      <img src={jav} alt="js-icon" />
                      Javascript
                    </span>
                  </li>
                  <li>
                    <span>
                      <img src={rb} alt="js-icon" />
                      Ruby
                    </span>
                  </li>
                  <li>
                    <span>
                      <img src={html} alt="html-icon" />
                      HTML
                    </span>

                  </li>
                  <li>
                    <span>
                      <img src={css} alt="css-icon" />
                      CSS
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li>
            <div className="languages-dropdown-bar">
              <p className="d-flex justify-content-center align-items-center">
                Technologies
              </p>
              <div className="skill-items">
                <ul>
                  <li>
                    <span>
                      <img src={react} alt="js-icon" />
                      React
                    </span>

                  </li>
                  <li>
                    <span>
                      <img src={red} alt="html-icon" />
                      Redux
                    </span>

                  </li>
                  <li>
                    <span>
                      <img src={node} alt="css-icon" />
                      Nodejs
                    </span>

                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li>
            <div className="languages-dropdown-bar">
              <p className="d-flex justify-content-center align-items-center">
                Skills
              </p>
              <div className="skill-items">
                <ul>
                  <li>
                    <span>
                      Time Management
                    </span>

                  </li>
                  <li>
                    <span>
                      Remote Pair-Programming
                    </span>

                  </li>
                  <li>
                    <span>
                      Problem-solving
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
);

export default Skills;
