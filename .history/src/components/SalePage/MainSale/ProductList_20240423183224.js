import React from 'react';
import Product from './Product'; // Импортируем компонент Product
import './ProductList.css';

const ProductList = ({ products }) => {
  return (
    <div className="product-list">
      <h1>Наші Товари</h1>
      <h2>Великий вибір якісних товарів</h2>
      <div className="products">
        {products.map((product, index) => (
          <Product
            key={index}
            name={product.name}
            image={product.image}
            price={product.price}
            old_price={product.old_price}
            rooms={product.rooms}
            
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
