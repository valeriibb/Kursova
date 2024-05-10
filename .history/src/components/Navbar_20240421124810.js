import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { FormattedMessage } from 'react-intl'; // Assuming you're using react-intl for localization

const Navbar = ({ changeLocale }) => {
  
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">BUSTRANS</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home"><FormattedMessage id='home' /></Nav.Link>
            <Nav.Link href="#about"><FormattedMessage id='about' /></Nav.Link>
            <Nav.Link href="#services"><FormattedMessage id='services' /></Nav.Link>
            <Nav.Link href="#contact"><FormattedMessage id='contact' /></Nav.Link>
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navbar;
