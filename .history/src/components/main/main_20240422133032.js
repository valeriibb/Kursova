import React from 'react';
import './Main.css';

const Main = () => {
  return (
    <div className="main-container">
      <div className="background-image"></div>
      <div className="content">
        <h1>Квартири Будинки Офіси</h1>
        <input type="text"  placeholder="Введіть адресу, район, місто" />
      </div>
    </div>
  );
};

export default Main;


