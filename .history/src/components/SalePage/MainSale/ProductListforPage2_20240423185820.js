import React from 'react';
import Product from '../../Sales/Product/Product';
import './ProductListforPage2.css';
import image1 from '.././test-house/Rectangle 7.jpg';

const ProductListforPage2 = ({ products }) => {
  return (
    <div className="product-list">
      <h1>Наші Товари</h1>
      <h2>Великий вибір якісних товарів</h2>
      <div className="products">
      
          <Product
           name="Товар 1"
           image={image1}
           old_price={2000000}
           price={1800000}
           rooms={5}
           bathrooms={9}
           area={200}
            
          />
        
      </div>
    </div>
  );
};

export default ProductListforPage2;
