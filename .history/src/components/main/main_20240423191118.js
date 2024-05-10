import React from 'react';
import './Main.css';

const Main = () => {
  return (
    <div className="main-container">
      <div className="background-image"></div>
      <div className="content">
      <div class="wrapper">
        <div class="text">Квартири Будинки Офіси в Ужі</div>
        </div>
        <input type="text"  placeholder="Введіть адресу, район, місто" />
      </div>
    </div>
  );
};

export default Main;


