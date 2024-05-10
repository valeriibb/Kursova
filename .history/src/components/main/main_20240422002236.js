import React from 'react';
import './Main.css';

const Main = () => {
  return (
    <div className="main-container">
      <div className="background-image"></div>
      <div className="content">
        <h1>Три слова</h1>
        <p>Це дуже цікаво!</p>
        <input type="text" placeholder="Введіть текст..." />
      </div>
    </div>
  );
};

export default Main;


