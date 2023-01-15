import React from 'react';
import {
  salama, world, space, lead, list, jet, budg,
} from './images/images ';

const Works = () => (
  <section id="projects" className="pt-5 ps-5 pe-5 mb-5 proj">
    <h2 className="h1 p-2 text-light d-flex justify-content-center head">
      My Recent Works
    </h2>
    <div className="other-projects container pt-5">
      <div className="card1 m-1 mb-5">
        <div
          style={{ backgroundImage: `url(${jet}` }}
          className="card-img"
        />
        <div className="desc">
          <h2 className="h4 card-title">
            Jet Log
          </h2>
          <p>
            Jet Log is a full stack application built through peer collaboration
            and it&apos;s an aeroplane renting app that allows the user to view available planes,
            login to make a reservation or see their reservations.
            Additional authorization allows the admin to add
            or delete a plane from the database. The app is fully responsive
          </p>
          <ul className="skill">
            <li>React</li>
            <li>Rails</li>
            <li>PostgreSQL</li>
          </ul>
          <span className="d-flex links">
            <a href="https://github.com/sharon-odhiambo/jet-log-frontend" target="_blank" rel="noreferrer" className="link-button">Source</a>
            <a href="https://the-awesome-berkay-akbas-site.netlify.app/" target="_blank" rel="noreferrer" className="link-button"><strong>Live</strong></a>
          </span>
        </div>
      </div>
      <div className="card1 m-1 mb-5">
        <div
          style={{ backgroundImage: `url(${budg}` }}
          className="card-img"
        />
        <div className="desc">
          <h2 className="h4 card-title">
            Rails Budget App
          </h2>
          <p>
            Budget-App is a rails mobile app that enables the user to manage their budget
            by seeing their expenditures and the specific items they spent on.
            The app authenticates the user
            and once logged in they can access their individual data.
          </p>
          <ul className="skill">
            <li>React</li>
            <li>Rails</li>
            <li>PostgreSQL</li>
          </ul>
          <span className="d-flex links">
            <a href="https://github.com/sharon-odhiambo/Rails-Budget-App" target="_blank" rel="noreferrer" className="link-button">Source</a>
            <a href="https://glacial-mesa-01327.herokuapp.com/" target="_blank" rel="noreferrer" className="link-button"><strong>Live Soon</strong></a>
          </span>
        </div>
      </div>
      <div className="card m-1 mb-5">
        <div
          style={{ backgroundImage: `url(${world}` }}
          className="card-img"
        />
        <div className="desc">
          <h2 className="h4 card-title">
            World Countries Tour
          </h2>
          <p>
            This is a mobile app that displays list of world countries
            fetched from the restcountries API.
            The user can scroll through to find their country
            or use the search button to locate their country and find more details.
          </p>
          <ul className="skill">
            <li>React</li>
            <li>Bootstrap</li>
          </ul>
          <span className="d-flex links">
            <a href="https://github.com/sharon-odhiambo/World-Countries-Tour" target="_blank" rel="noreferrer" className="link-button">Source</a>
            <a href="https://my-world-tour.netlify.app/" target="_blank" rel="noreferrer" className="link-button"><strong>Live</strong></a>
          </span>
        </div>
      </div>
      <div className="card m-1 mb-5">
        <div
          style={{ backgroundImage: `url(${space}` }}
          className="card-img"
        />
        <div className="desc">
          <h2 className="h4 card-title">
            Space Travellers
          </h2>
          <p>
            Space Traveler&apos;s is built with real data from the SpaceX API.
            The application provides commercial and scientific space travel services
            to book rockets, dragons and join selected space missions.
          </p>
          <ul className="skill">
            <li>React</li>
            <li>Bootstrap</li>
          </ul>
          <span className="d-flex links">
            <a href="https://github.com/sharon-odhiambo/SpaceX-Data" target="_blank" rel="noreferrer" className="link-button">Source</a>
            <a href="https://spacetraveleryun.netlify.app/" target="_blank" rel="noreferrer" className="link-button"><strong>Live</strong></a>
          </span>

        </div>
      </div>
      <div className="card m-1 mb-5">
        <div
          style={{ backgroundImage: `url(${salama}` }}
          className="card-img"
        />
        <div className="desc">
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
          <ul className="skill">
            <li>Html</li>
            <li>React</li>
            <li>Bootstrap</li>
            <li>css</li>
          </ul>
          <span className="d-flex links">
            <a href="https://github.com/sharon-odhiambo/Salama-Conference" target="_blank" rel="noreferrer" className="link-button">Source</a>
            <a href="https://aesthetic-salama-conference.netlify.app/" target="_blank" rel="noreferrer" className="link-button"><strong>Live</strong></a>
          </span>
        </div>
      </div>
      <div className="card m-1 mb-5">
        <div
          style={{ backgroundImage: `url(${lead}` }}
          className="card-img"
        />
        <div className="desc">
          <h2 className="h4 card-title">
            Leaderboard App
          </h2>
          <p>
            This app is a leaderboard built using Webpack
            and an API that allows the user to add their scores
            and refresh to update them on the list.
            Implements CRUD to allow the user to add a score
            to the leaderboard and update on refresh.
          </p>
          <ul className="skill">
            <li>html</li>
            <li>css</li>
            <li>javascript</li>
          </ul>
          <span className="d-flex links">
            <a href="https://github.com/sharon-odhiambo/Leaderboard-Project" target="_blank" rel="noreferrer" className="link-button">Source</a>
            <a href="https://sharon-odhiambo.github.io/Leaderboard-Project/" target="_blank" rel="noreferrer" className="link-button"><strong>Live</strong></a>
          </span>
        </div>
      </div>
      <div className="card m-1 mb-5">
        <div
          style={{ backgroundImage: `url(${list}` }}
          className="card-img"
        />
        <div className="desc">
          <h2 className="h4 card-title">
            To-do List
          </h2>
          <p>
            To-Do-List built using Webpack and JavaScript.
            Uses CRUD methods to allow the user to add,
            remove tasks from the display list and update the same in the local storage.
            It also allows the user to check using a checkbox icon and clear the checked items.
          </p>
          <ul className="skill">
            <li>html</li>
            <li>css</li>
            <li>javascript</li>
          </ul>
          <span className="d-flex links">
            <a href="https://github.com/sharon-odhiambo/TO-DO-LIST" target="_blank" rel="noreferrer" className="link-button">Source</a>
            <a href="https://sharon-odhiambo.github.io/TO-DO-LIST/" target="_blank" rel="noreferrer" className="link-button"><strong>Live</strong></a>
          </span>

        </div>
      </div>
    </div>
  </section>
);

export default Works;
