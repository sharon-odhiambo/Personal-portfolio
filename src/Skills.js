import React from 'react';
import {
  node, html, css, jav, ts,
  react, red, rb,
} from './images/images ';

const Skills = () => (
  <section>
    <div className="container d-flex">
      <div className="container">
        <h2 className="text-light pt-5 pb-5 d-flex justify-content-center">My Technical Skills</h2>
        <ul className="skills">
          <li><img className="skill-img" src={jav} alt="skill" /></li>
          <li><img className="skill-img" width="120" height="120" src={react} alt="skill" /></li>
          <li><img className="skill-img" width="120" height="120" src={red} alt="skill" /></li>
          <li><img className="skill-img" width="120" height="120" src={css} alt="skill" /></li>
          <li><img className="skill-img" width="120" height="120" src={html} alt="skill" /></li>
          <li><img className="skill-img" width="120" height="120" src={rb} alt="skill" /></li>
          <li><img className="skill-img" width="120" height="120" src={ts} alt="skill" /></li>
          <li><img className="skill-img" width="120" height="150" src={node} alt="skill" /></li>
        </ul>
      </div>
    </div>
  </section>
);

export default Skills;
