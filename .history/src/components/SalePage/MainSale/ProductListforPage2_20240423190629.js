import React from 'react';
import Product from '../../Sales/Product/Product';
import './ProductListforPage2.css';
import image1 from '/Users/valera/my-react-app/src/components/Sales/test-house/Rectangle 7.jpg';

const ProductListforPage2 = ({ products }) => {
  return (
    <div className='container'>
       <div className="product-list">
      
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
    </div>
   
  );
};

export default ProductListforPage2;
