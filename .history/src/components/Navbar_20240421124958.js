import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <a href="/" className="navbar-item">
          My Website
        </a>
      </div>
      <div className="navbar-menu">
        <div className="navbar-start">
          <a href="/" className="navbar-item">
            Home
          </a>
          <a href="/about" className="navbar-item">
            About
          </a>
          <a href="/services" className="navbar-item">
            Services
          </a>
          <a href="/contact" className="navbar-item">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
