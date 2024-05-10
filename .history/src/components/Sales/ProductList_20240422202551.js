import React from 'react';
import './ProductList.css'; // Підключення CSS стилів для компонента
import Product from './Product/Product'; // Імпорт компонента Product
import image1 from './test-house/Rectangle 7.jpg';

const ProductList = () => {
  return (
    <div className="product-page">
      
      <h1>Спеціальні пропозиції</h1>
      <p style={{ fontSize: '30px', fontWeight: '100' }}>Оголошення ціни на які було знижено</p>
      <div className="product-list">

      {/* Перший товар */}
      <Product
        name="Товар 1"
        image={image1}
        old_price={2000000}
        price={1800000}
        rooms={5}
        bathrooms={9}
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
