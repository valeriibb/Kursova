import React from 'react';
import logo from '../img/HO•AG.svg';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <ul className="navbar-nav">
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

        <ul className="navbar-nav navbar-nav-right">
          <li className="nav-item">
            <a className="nav-link" href="/registration">
              Registration
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
