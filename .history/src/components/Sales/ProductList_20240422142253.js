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
        price={50}
        shortDescription="Чудовий товар для вашого дому."
        description="Детальний опис: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vehicula maximus purus nec ultricies."
      />

      {/* Другий товар */}
      <Product
        name="Товар 2"
        image={image1}
        price={70}
        shortDescription="Ідеальний подарунок для вашого друга."
        description="Детальний опис: Vivamus et interdum dolor, at consequat est. Integer vestibulum convallis augue non dapibus."
      />

      {/* Третій товар */}
      <Product
        name="Товар 3"
        image="src/product-image/test-house/Rectangle 7.jpg"
        price={100}
        shortDescription="Найкращий вибір для професійного використання."
        description="Детальний опис: Fusce tincidunt arcu ut nisi congue, vel efficitur metus interdum. Nulla facilisi."
      />
      </div>
    </div>
  );
};

export default ProductList;
