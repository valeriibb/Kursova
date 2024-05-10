import React from 'react';
import logo from '../img/HO•AG.svg';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className='navigationbar'>
      .
      <nav>
        <a href='#'>Купити</a>
        <a href='#'>Продати</a>
        <a href='#'>Допомога</a>
      </nav>
      <img src={logo}></img>
      <a href='#'>Зареєструватися</a>
    </div>
   
  );
};

export default Navbar;
