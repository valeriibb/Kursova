import React from 'react';

const Product = (props) => {
  const { old_price,rooms,area,bathrooms, name, image, price, shortDescription, description } = props;

  return (
    <div className="product">
    <img src={image} alt={name} style={{ width: '250px', height: '250px' }} />
      <div className="details">
        <h3>{price}$</h3>
        <p style={{ textDecoration: 'line-through' }}>{old_price}$</p>
        <p>{rooms}</p>
        <p>|</p>
        <p>{bathrooms}</p>
        <p>|</p>
        <p>{area}</p>
        <p></p>
      </div>
    </div>
  );
};

export default Product;


