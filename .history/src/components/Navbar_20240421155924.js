import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../img/HO•AG.svg'; 

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            
            
                <a className="nav-link" href="/about">
                About
              </a>
            <li className="nav-item">
              <a className="nav-link" href="/services">
                Services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/contact">
                Contact
              </a>
              
              <a href='#'>

              <img src={logo} alt="Logo" />
        
              

              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
