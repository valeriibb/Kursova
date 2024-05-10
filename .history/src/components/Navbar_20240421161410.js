import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../img/HO•AG.svg';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <div className="navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a className="nav-link" href="/about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/services">
                Services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/contact">
                Contact
              </a>
            </li>
          </ul>

          <a href="/" className="navbar-brand">
            <img src={logo} alt="Logo" className="logo" />
          </a>

          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="/registration">
                Registration
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
