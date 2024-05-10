import React from 'react';

const Product = (props) => {
  const { old_price,rooms,area,bathrooms, name, image, price, shortDescription, description } = props;

  return (
    <div className="product">
    <img src={image} alt={name} style={{ width: '250px', height: '250px' }} />
      <div className="details">
        <h3>{price}$</h3>
        <p style={{ textDecoration: 'line-through' }}>{old_price}$</p>
        
        <p>{rooms} кімнат</p>
        <p>|</p>
        <p>{bathrooms} санвузлів</p>
        <p>|</p>
        <p>{area} кв. м</p>
      </div>
    </div>
  );
};

export default Product;


