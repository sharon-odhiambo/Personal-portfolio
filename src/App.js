import './App.css';
import Navigation from './Nav';
import Works from './Works';
import Skills from './Skills';
import {
  twit, angel, git, link,
} from './images/images ';
import Contacts from './Contacts';

function App() {
  return (
    <div className="App">
      <section id="homepage" className="container-fluid align-items-center min-vh-100 p-0 landing">
        <Navigation />
        <div className="container ps-1 d-flex justify-content-end align-items-center">
          <div className="col-11">
            <h1 className="display-2 main-header text-light">
              Hello
              <br />
              I’m Sharon
            </h1>
            <p className="h3 text-info">
              Glad to See You!
              {' '}
              <br />
              I’m a Software Developer and am here to help!
            </p>
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
                href="https://angel.co/u/sharon-odhiambo-1"
                target="_blank"
                rel="noreferrer"
              >
                <img src={angel} width="40" height="40" alt="linkedin profile" />
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
      </section>
      <Works />
      <Skills />
      <Contacts />
    </div>
  );
}

export default App;
