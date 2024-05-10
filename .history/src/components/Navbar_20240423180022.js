// Navbar.js

import React, { useState, useEffect } from 'react';
import logo from '../img/HO•AG.svg';
import './Navbar.css';

const Navbar = () => {
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Проверяем положение прокрутки страницы
      if (window.scrollY > 0) {
        setIsFixed(true); // Фиксируем навбар при прокрутке вниз
      } else {
        setIsFixed(false); // Отменяем фиксацию навбара при прокрутке вверх
      }
    };

    // Добавляем обработчик события прокрутки страницы
    window.addEventListener('scroll', handleScroll);

    // Убираем обработчик при размонтировании компонента
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Запускаем useEffect только при монтировании компонента

  return (
    <div className={`navigationbar ${isFixed ? 'fixed' : ''}`}>
      <nav>
        <a href='#'>Купити</a>
        <a href='#'>Продати</a>
        <a href='#'>Допомога</a>
      </nav>
      <img src={logo} alt="Логотип" />
      <a href='#'>Зареєструватися</a>
    </div>
  );
};

export default Navbar;
