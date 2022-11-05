import React from 'react';
import {
  salama, world, space, lead, list, vet,
} from './images/images ';

const Works = () => (
  <section id="projects" className="container pt-5 ps-5 pe-5 mb-5">
    <h2 className="h1 pt-5 ps-4 pb-5 text-light d-flex justify-content-center">
      My recent works
    </h2>
    <div className="other-projects container pt-5">
      <div className="card m-1 mb-5">
        <img className="card-img" src={world} alt="highlight-project" />
        <h2 className="h4 card-title">
          World Countries Tour
        </h2>
        <p>
          This is a mobile app that displays list of world countries
          fetched from the restcountries API.
          The user can scroll through to find their country
          or use the search button to locate their country and find more details.
        </p>
        <span className="d-flex links">
          <a href="https://github.com/sharon-odhiambo/World-Countries-Tour" target="_blank" rel="noreferrer" className="link-button">See on Github</a>
          <a href="https://my-world-tour.netlify.app/" target="_blank" rel="noreferrer" className="link-button"><strong>Live Demo Link</strong></a>
        </span>
      </div>
      <div className="card m-1 mb-5">
        <img className="card-img" src={space} alt="highlight-project" />
        <h2 className="h4 card-title">
          Space Travellers
        </h2>
        <p>
          Space Traveler&apos;s is built with real data from the SpaceX API.
          The application provides commercial and scientific space travel services
          to book rockets, dragons and join selected space missions.
        </p>
        <span className="d-flex links">
          <a href="https://github.com/sharon-odhiambo/SpaceX-Data" target="_blank" rel="noreferrer" className="link-button">See on Github</a>
          <a href="https://spacetraveleryun.netlify.app/" target="_blank" rel="noreferrer" className="link-button"><strong>Live Demo Link</strong></a>
        </span>
      </div>
      <div className="card m-1 mb-5">
        <img className="card-img" src={vet} alt="highlight-project" />
        <h2 className="h4 card-title">
          Vet Clinic Database
        </h2>
        <p>
          This is a Ruby-based relational database that creates the data structure for a vet clinic.
          It uses OOP principles to beautifully organize the animals, owners,
          the clinic employees&apos; data and animal visits to different vets.
        </p>
        <span className="d-flex links">
          <a href="https://github.com/sharon-odhiambo/Vet-clinic-database" target="_blank" rel="noreferrer" className="link-button">See on Github</a>
        </span>
      </div>
      <div className="card m-1 mb-5">
        <img className="card-img" src={salama} alt="highlight-project" />
        <h2 className="h4 card-title">
          Salama Conference
        </h2>
        <p>
          A fictionous conference page that shows conference details, key speakers,
          schedule and how to contact the organizers.
          Uses responsive web design and mobile-first approach
          to allow great performance and accessibility
          on different screen sizes.
        </p>
        <span className="d-flex links">
          <a href="https://github.com/sharon-odhiambo/Salama-Conference" target="_blank" rel="noreferrer" className="link-button">See on Github</a>
          <a href="https://aesthetic-salama-conference.netlify.app/" target="_blank" rel="noreferrer" className="link-button"><strong>Live Demo Link</strong></a>
        </span>
      </div>
      <div className="card m-1 mb-5">
        <img className="card-img" src={lead} alt="highlight-project" />
        <h2 className="h4 card-title">
          Leaderboard App
        </h2>
        <p>
          This app is a leaderboard built using Webpack
          and an API that allows the user to add their scores
          and refresh to update them on the list.
          Implements CRUD to allow the user to add a score to the leaderboard and update on refresh.
        </p>
        <span className="d-flex links">
          <a href="https://github.com/sharon-odhiambo/Leaderboard-Project" target="_blank" rel="noreferrer" className="link-button">See on Github</a>
          <a href="https://sharon-odhiambo.github.io/Leaderboard-Project/" target="_blank" rel="noreferrer" className="link-button"><strong>Live Demo Link</strong></a>
        </span>
      </div>
      <div className="card m-1 mb-5">
        <img className="card-img" src={list} alt="highlight-project" />
        <h2 className="h4 card-title">
          To-do List
        </h2>
        <p>
          To-Do-List built using Webpack and JavaScript.
          Uses CRUD methods to allow the user to add,
          remove tasks from the display list and update the same in the local storage.
          It also allows the user to check using a checkbox icon and clear the checked items.
        </p>
        <span className="d-flex links">
          <a href="https://github.com/sharon-odhiambo/TO-DO-LIST" target="_blank" rel="noreferrer" className="link-button">See on Github</a>
          <a href="https://sharon-odhiambo.github.io/TO-DO-LIST/" target="_blank" rel="noreferrer" className="link-button"><strong>Live Demo Link</strong></a>
        </span>
      </div>
    </div>
  </section>
);

export default Works;
