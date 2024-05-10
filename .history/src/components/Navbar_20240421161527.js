import React from 'react';
import './Navbar.css';
import logo from '../img/HO•AG.svg';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-brand">
          <a href="/" className="logo-link">
            <img src={logo} alt="Logo" className="logo" />
          </a>
        </div>

        <ul className="nav-links">
          <li className="nav-item">
            <a href="/about" className="nav-link">
              About
            </a>
          </li>
          <li className="nav-item">
            <a href="/services" className="nav-link">
              Services
            </a>
          </li>
          <li className="nav-item">
            <a href="/contact" className="nav-link">
              Contact
            </a>
          </li>
          <li className="nav-item">
            <a href="/registration" className="nav-link">
              Registration
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
