import React from 'react';
import './ProductList.css'; // Підключення CSS стилів для компонента
import Product from './Product/Product'; // Імпорт компонента Product
import image1 from './test-house/Rectangle 7.jpg';

const ProductList = () => {
  return (
    <div className="product-page">
      <h1>Наші Товари</h1>
      <h2>Великий вибір якісних товарів</h2>
      <div className="product-list">

      {/* Перший товар */}
      <Product
        name="Товар 1"
        image={image1}
        old_price={2000000}
        price={1800000}
        rooms={5}
        bathrooms={2}
        area={200}
      
      />

      {/* Другий товар */}
      <Product
        name="Товар 2"
        image={image1}
        old_price={100000}
        price={950000}
        rooms={5}
        bathrooms={2}
        area={200}/>

      {/* Третій товар */}
      <Product
        name="Товар 3"
        image={image1}
        old_price={3000000}
        price={280000}
        rooms={5}
        bathrooms={2}
        area={200}/>
      </div>
    </div>
  );
};

export default ProductList;
