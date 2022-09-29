import './App.css';
import {
  salama, world, space, lead, list, vet,
  twit, angel, git, link, node, html, css, jav, ts,
  react, red, rb, res,
} from './images/images ';

function App() {
  return (
    <div className="App">
      <header>
        <nav className="container-fluid navbar bg-info fixed-top px-5">
          <div>Sharon Odhiambo</div>
          <ul className="nav col-4 text-light ps-5">
            <li className="p-3 nav-item">
              <a href="#projects" className="text-decoration-none text-light">Portfolio</a>
            </li>
            <li className="p-3 nav-item">
              <a href="#about-me" className="text-decoration-none text-light">About</a>
            </li>
            <li className="p-3 nav-item">
              <a href="#contact-me" className="text-decoration-none text-light">Contact</a>
            </li>
          </ul>
        </nav>
      </header>
      <section id="homepage" className="container-fluid d-flex align-items-center min-vh-100 bg m-0">
        <div className="container ps-1 border-3 d-flex">
          <div className="col-11">
            <h1 className="display-2 main-header">
              Hello
              <br />
              I’m Sharon
            </h1>
            <p className="h3 text-info">
              Glad to See You!
              I’m a Software Developer and am here to help!
            </p>
          </div>
          <ul className="list-unstyled col-1 position-fixed bottom-50 end-0">
            <li id="github" className="pt-5">
              <a
                href="https://github.com/sharon-odhiambo"
                target="_blank"
                rel="noreferrer"
              >
                <img src={git} width="40" height="40" alt="github profile" />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/sharonn-odhiambo/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={link} width="40" height="40" alt="linkedin profile" />
              </a>
            </li>
            <li>
              <a
                href="https://angel.co/u/sharon-odhiambo-1"
                target="_blank"
                rel="noreferrer"
              >
                <img src={angel} width="40" height="40" alt="linkedin profile" />
              </a>
            </li>
            <li>
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
      </section>
      <hr className="border border-1 border-primary" />
      <section id="projects" className="container pt-5 ps-5 pe-5 mb-5">
        <h2 className="h1 pt-5 ps-4 pb-5">
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
              <a href="https://github.com/sharon-odhiambo/World-Countries-Tour" target="_blank" rel="noreferrer" className="bg-info">See on Github</a>
              <a href="https://my-world-tour.netlify.app/" target="_blank" rel="noreferrer" className="bg-info"><strong>Live Demo Link</strong></a>
            </span>
            <div className="btn me-3 pb-1">
              <button type="button" className="btn btn-sm border-secondary rounded-2 btn-outline-warning text-primary">HTML</button>
              <button type="button" className="btn btn-sm border-secondary rounded-2 btn-outline-warning text-primary">React</button>
              <button type="button" className="btn btn-sm border-secondary rounded-2 btn-outline-warning text-primary">Redux</button>
              <button type="button" className="btn btn-sm border-secondary rounded-2 btn-outline-warning text-primary">React Bootstrap</button>
            </div>
          </div>
          <div className="card m-1 mb-5">
            <img className="card-img" src={space} alt="highlight-project" />
            <h2 className="h4 card-title">
              Space Travellers
            </h2>
            <p>
              Space Traveler&apos;s website was built with real live data from the SpaceX API.
              The application provides commercial and scientific space travel services
              that allow users to book rockets and join selected space missions.
            </p>
            <span className="d-flex links">
              <a href="https://github.com/sharon-odhiambo/SpaceX-Data" target="_blank" rel="noreferrer" className="bg-info">See on Github</a>
              <a href="https://spacetraveleryun.netlify.app/" target="_blank" rel="noreferrer" className="bg-info"><strong>Live Demo Link</strong></a>
            </span>
            <div className="btn me-3 pb-1">
              <button type="button" className="btn btn-sm border-secondary rounded-2 btn-outline-warning text-primary">HTML</button>
              <button type="button" className="btn btn-sm border-secondary rounded-2 btn-outline-warning text-primary">React</button>
              <button type="button" className="btn btn-sm border-secondary rounded-2 btn-outline-warning text-primary">Redux</button>
              <button type="button" className="btn btn-sm border-secondary rounded-2 btn-outline-warning text-primary">React Bootstrap</button>
            </div>
          </div>
          <div className="card m-1 mb-5">
            <img className="card-img" src={vet} alt="highlight-project" />
            <h2 className="h4 card-title">
              Vet Clinic Database
            </h2>
            <p>
              This is a relational database that creates the data structure for a vet clinic.
              It contains data about the animals, their owners,
              the clinic employees and animal visits to different vets.
            </p>
            <span className="d-flex links">
              <a href="https://github.com/sharon-odhiambo/Vet-clinic-database" target="_blank" rel="noreferrer" className="bg-info">See on Github</a>
            </span>
            <div className="btn me-3 pb-1">
              <button type="button" className="btn btn-sm border-secondary rounded-2 btn-outline-warning text-primary">Ruby</button>
              <button type="button" className="btn btn-sm border-secondary rounded-2 btn-outline-warning text-primary">SQL</button>
            </div>
          </div>
          <div className="card m-1 mb-5">
            <img className="card-img" src={salama} alt="highlight-project" />
            <h2 className="h4 card-title">
              Salama Conference
            </h2>
            <p>
              A fictionous conference page that shows conference details, key speakers,
              schedule and how to contact the organizers.
              The page is fully responsive and follows best HTML, CSS and JS practices.
            </p>
            <span className="d-flex links">
              <a href="https://github.com/sharon-odhiambo/Salama-Conference" target="_blank" rel="noreferrer" className="bg-info">See on Github</a>
              <a href="https://aesthetic-salama-conference.netlify.app/" target="_blank" rel="noreferrer" className="bg-info"><strong>Live Demo Link</strong></a>
            </span>
            <div className="btn me-3 pb-1">
              <button type="button" className="btn btn-sm border-secondary rounded-2 btn-outline-warning text-primary">HTML</button>
              <button type="button" className="btn btn-sm border-secondary rounded-2 btn-outline-warning text-primary">CSS</button>
              <button type="button" className="btn btn-sm border-secondary rounded-2 btn-outline-warning text-primary">JavaScript</button>
              <button type="button" className="btn btn-sm border-secondary rounded-2 btn-outline-warning text-primary">Bootstrap</button>
            </div>
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
            </p>
            <span className="d-flex links">
              <a href="https://github.com/sharon-odhiambo/Leaderboard-Project" target="_blank" rel="noreferrer" className="bg-info">See on Github</a>
              <a href="https://sharon-odhiambo.github.io/Leaderboard-Project/" target="_blank" rel="noreferrer" className="bg-info"><strong>Live Demo Link</strong></a>
            </span>
            <div className="btn me-3 pb-1">
              <button type="button" className="btn btn-sm border-secondary rounded-2 btn-outline-warning text-primary">HTML</button>
              <button type="button" className="btn btn-sm border-secondary rounded-2 btn-outline-warning text-primary">CSS</button>
              <button type="button" className="btn btn-sm border-secondary rounded-2 btn-outline-warning text-primary">JavaScript</button>
              <button type="button" className="btn btn-sm border-secondary rounded-2 btn-outline-warning text-primary">Webpack</button>
            </div>
          </div>
          <div className="card m-1 mb-5">
            <img className="card-img" src={list} alt="highlight-project" />
            <h2 className="h4 card-title">
              To-do List
            </h2>
            <p>
              To-Do-List built using Webpack and JavaScript modules.
              Uses CRUD methods to allow the user to add
              or remove tasks from the display list and update the same in the local storage.
              It also allows the user to check using a checkbox icon and clear the checked items.
            </p>
            <span className="d-flex links">
              <a href="https://github.com/sharon-odhiambo/TO-DO-LIST" target="_blank" rel="noreferrer" className="bg-info">See on Github</a>
              <a href="https://sharon-odhiambo.github.io/TO-DO-LIST/" target="_blank" rel="noreferrer" className="bg-info"><strong>Live Demo Link</strong></a>
            </span>
            <div className="btn me-3 pb-1">
              <button type="button" className="btn btn-sm border-secondary rounded-2 btn-outline-warning text-primary">HTML</button>
              <button type="button" className="btn btn-sm border-secondary rounded-2 btn-outline-warning text-primary">Bootstrap</button>
              <button type="button" className="btn btn-sm border-secondary rounded-2 btn-outline-warning text-primary">JavaScript</button>
              <button type="button" className="btn btn-sm border-secondary rounded-2 btn-outline-warning text-primary">Webpack</button>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container d-flex">
          <div className="container">
            <h3 className="h4 text-dark pt-5 mt-5">My Technical Skills</h3>
            <ul className="skills">
              <li><img className="skill-img" width="150" height="150" src={jav} alt="skill" /></li>
              <li><img className="skill-img" width="150" height="150" src={react} alt="skill" /></li>
              <li><img className="skill-img" width="150" height="150" src={red} alt="skill" /></li>
              <li><img className="skill-img" width="150" height="150" src={css} alt="skill" /></li>
              <li><img className="skill-img" width="150" height="150" src={html} alt="skill" /></li>
              <li><img className="skill-img" width="150" height="150" src={rb} alt="skill" /></li>
              <li><img className="skill-img" width="150" height="150" src={ts} alt="skill" /></li>
              <li><img className="skill-img" width="150" height="150" src={node} alt="skill" /></li>
            </ul>
          </div>
        </div>
      </section>
      <section id="about-me" className="container-fluid bg-dark d-flex pt-0 ps-5 pe-5 pt-5 mb-5 pb-5  min-vh-100">
        <div className="container border">
          <h2 className="display-1 pt-5 ps-5 about-header text-light">
            About Me
          </h2>
          <p className="text-light col-5 pe-0 me-0 ps-5 pb-3">
            Hello I’m a software developer!
          </p>
          <button type="button" className="text-dark border-0 rounded-3 col-3 ms-5 p-2 mb-5 resume-btn">
            <a href={res} target="_blank" rel="noreferrer">Get My Resume</a>
          </button>
        </div>
        <form className="container d-flex flex-column justify-content-between mx-4 pt-5 mt-5" action="https://formspree.io/f/xlezvgbv" method="post">
          <input type="text" className="mb-3 p-2 border-0 border-bottom valid" name="Name" placeholder="Full name" aria-label="Name" maxLength="30" required />
          <input type="email" className="mb-5 p-2 border-0 border-bottom" name="Email" placeholder="Email address" aria-label="email" required />
          <textarea name="message" className="mb-3 p-3 " rows="5" placeholder="write your message here" maxLength="500" required />
          <button type="submit" className="col-3 text-dark border-0 p-2 mb-5 git-btn" id="submit">Get in Touch</button>
        </form>
      </section>
    </div>
  );
}

export default App;
