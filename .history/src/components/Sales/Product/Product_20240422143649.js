import React from 'react';

const Product = (props) => {
  const { old_price, name, image, price, shortDescription, description } = props;

  return (
    <div className="product">
    <img src={image} alt={name} style={{ width: '250px', height: '250px' }} />
      <div className="details">
        <h3>{price}$</h3>
        <p style={{ textDecoration: 'line-through' }}>{old_price}$</p>
        <h3>{name}</h3>
        <p>{rooms}</p>
        <p>{bath}</p>
        <p>{}</p>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Product;


