import React from 'react';
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import Offcanvas from 'react-bootstrap/Offcanvas';
import './App.css';

const Navigation = () => (
  <>
    <header>
      <nav className="container-fluid navbar px-5">
        <div className="text-light ms-5 ps-5">Sharon Odhiambo</div>
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
  </>
);

export default Navigation;
