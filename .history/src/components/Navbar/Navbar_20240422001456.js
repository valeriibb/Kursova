import React from 'react';
import logo from '.../img/HO•AG.svg';
import './navbar.css';

const Navbar = () => {
  return (
    <div className='container'>
      <div className='navigationbar'>
        
        <nav>
          <a href='#'>Купити</a>
          <a href='#'>Продати</a>
          <a href='#'>Допомога</a>
        </nav>
        <img src={logo}></img>
        <a href='#'>Зареєструватися</a>
       </div>
    </div>
      
   
  );
};

export default Navbar;
