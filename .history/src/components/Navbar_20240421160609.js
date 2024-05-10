import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../img/HO•AG.svg'; 

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            
            <nav className=''>
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
              


              <a href='#'> <img src={logo} alt="Logo" /> </a>


         </div>
        </div>

    </nav>
  );
};

export default Navbar;
