import React from 'react';

const Product = (props) => {
  const { name, image, price, shortDescription, description } = props;

  return (
    <div className="product">
    <img src={image} alt={name} style={{ width: '200px', height: 'auto' }} />
      <div className="details">
        <h3>{name}</h3>
        <p>Ціна: ${price}</p>
        <p>Короткий опис: {shortDescription}</p>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Product;


