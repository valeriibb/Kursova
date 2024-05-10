import React from 'react';
import './Product.css'
const Product = (props) => {

  let bathroom = '';


  const { old_price,rooms,area,bathrooms, name, image, price, shortDescription, description } = props;

  if (bathrooms == 1){
    bathroom = "санвузол"
  } 
  else if (bathrooms < 5) {
    bathroom = "санвузли"
  }

  else {
    bathroom = "санвузлів"
  }



  return (
    <div className="product">
    <img src={image} alt={name} style={{ width: '250px', height: '250px' }} />
      <div className="details">
        <h3>{price}$</h3>
        <p style={{ textDecoration: 'line-through' }}>{old_price}$</p>
        <div className='description'>
            <p>{rooms} кімнат</p>
            <p>|</p>
            <p>{bathrooms} {} </p>
            <p>|</p>
            <p>{area} кв. м</p> 
        </div>
       
      </div>
    </div>
  );
};

export default Product;


