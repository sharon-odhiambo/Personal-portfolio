import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './App.css';

const Navigation = () => (
  <>
    {['md'].map((expand) => (
      <Navbar key={expand} expand="lg">
        <Container>
          <Navbar.Brand href="#"><div className="logo p-0" /></Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${expand}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                <div className="logo p-0" />
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body className="d-flex justify-content-center align-items-center text-light">
              <Nav className="d-flex justify-content-center align-items-center flex-grow-1 pe-5 navtext">
                <Nav.Link href="#homepage" className="text-light">Home</Nav.Link>
                <Nav.Link href="#projects" className="text-light">Works</Nav.Link>
                <Nav.Link href="#skills" className="text-light">Skills</Nav.Link>
                <Nav.Link href="#about-me" className="text-light">About</Nav.Link>
                <Nav.Link href="#contact-me" className="text-light">Contacts</Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    ))}
  </>
);

export default Navigation;
