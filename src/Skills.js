/* eslint-disable react/jsx-props-no-spreading */
import React, { PureComponent } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {
  node, html, css, jav, ts,
  react, red, rb,
} from './images/images ';

class Skills extends PureComponent {
  render() {
    const settings = {
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: false,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
      ],
    };
    return (
      <section id="skills">
        {' '}
        <div>
          <h2 className="text-light pt-5 pb-5 mb-5 d-flex justify-content-center head">My Technical Skills</h2>
          <Slider {...settings}>
            <div><img className="skill-img" src={jav} alt="skill" /></div>
            <div><img className="skill-img" src={react} alt="skill" /></div>
            <div><img className="skill-img" src={red} alt="skill" /></div>
            <div><img className="skill-img" src={css} alt="skill" /></div>
            <div><img className="skill-img" src={html} alt="skill" /></div>
            <div><img className="skill-img" src={rb} alt="skill" /></div>
            <div><img className="skill-img" src={ts} alt="skill" /></div>
            <div><img className="skill-img" src={node} alt="skill" /></div>

          </Slider>
        </div>

      </section>

    );
  }
}

export default Skills;
