import React from 'react';
import './Main.css';

const Main = () => {
  return (
    <div className="main-container">
      <div className="background-image"></div>
      <div className="content">
      <div class="wrapper">
        <div class="text">Квартири Будинки Офіси</div>
        <br/>
        </div>
        <input type="text"  placeholder="Введіть адресу, район м. Ужгорода" />
      </div>
    </div>
  );
};

export default Main;


