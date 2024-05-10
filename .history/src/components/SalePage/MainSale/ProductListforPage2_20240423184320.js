import React from 'react';
import Product from '../../Sales/Product/Product';
import './ProductListforPage2.css';

const ProductListforPage2 = ({ products }) => {
  return (
    <div className="product-list">
      <h1>Наші Товари</h1>
      <h2>Великий вибір якісних товарів</h2>
      <div className="products">
      
          <Product
            key={1}
            name={'kjkj'}
            image={''}
            price={33}
            old_price={product.old_price}
            rooms={product.rooms}
            
          />
        
      </div>
    </div>
  );
};

export default ProductListforPage2;
