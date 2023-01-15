/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import {
  FaGithub, FaTwitter, FaLinkedinIn, FaAngellist, FaMediumM,
} from 'react-icons/fa';
import {
  node, html, jav,
  react, red, rb, res,
} from './images/images ';

const Skills = () => (
  <div className="works-skills">
    <div className="about-me-skills">
      <div className="about-me" id="about-me">
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
        <div className="button-resume"><a href={res} target="_blank" rel="noreferrer"><span>Get my Resume</span></a></div>
      </div>
      <div className="skill-section-items">
        <h3 className="d-flex">Technical Skills</h3>
        <ul>
          <li>
            <div className="languages-dropdown-bar">
              <p>
                Langauges
              </p>
              <div className="skill-items">
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
              </div>
            </div>
          </li>
          <li>
            <div className="languages-dropdown-bar">
              <p>
                Technologies
              </p>
              <div className="skill-items">
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
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
);

export default Skills;
