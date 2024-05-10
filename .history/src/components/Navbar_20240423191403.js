// Navbar.js

import React, { useState, useEffect } from 'react';
import logo from '../img/HO•AG.svg';
import './Navbar.css';

const Navbar = () => {
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`navigationbar ${isFixed ? 'fixed' : ''}`}>
      <nav>
        <Link to="/sale-page">Купити</Link>
        <a href='#'>Продати</a>
        <a href='#'>Допомога</a>
      </nav>
      <img src={logo} alt="Логотип" />
      <a href='#'>Зареєструватися</a>
    </div>
  );
};

export default Navbar;
