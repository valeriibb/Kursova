import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../img/HO•AG.svg'; 
import './Navbar.css'
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        

        <div className="navigation" id="">
            
            <nav className="collapse navbar-collapse">
              <a className="nav-link" href="/about">
                About
              </a>
              <a className="nav-link" href="/services">
                Services
              </a>
              <a className="nav-link" href="/contact">
                Contact
              </a>
            </nav>
              


              <a href='#'></a>

              <a className="nav-link" href="/contact">
                Registration
              </a>


         </div>
        </div>

    </nav>
  );
};

export default Navbar;
