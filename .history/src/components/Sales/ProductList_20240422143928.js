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
        old_price={150}
        price={50}
        rooms={}
        bathrooms={}
        area={}
      
      />

      {/* Другий товар */}
      <Product
        name="Товар 2"
        image={image1}
        old_price={150}
        price={70}
        shortDescription="Ідеальний подарунок для вашого друга."
        description="Детальний опис: Vivamus et interdum dolor, at consequat est. Integer vestibulum convallis augue non dapibus."
      />

      {/* Третій товар */}
      <Product
        name="Товар 3"
        image={image1}
        old_price={150}
        price={100}
        shortDescription="Найкращий вибір для професійного використання."
        description="Детальний опис: Fusce tincidunt arcu ut nisi congue, vel efficitur metus interdum. Nulla facilisi."
      />
      </div>
    </div>
  );
};

export default ProductList;
