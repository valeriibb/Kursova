import React from 'react';
import './ProductList.css'; // Підключення CSS стилів для компонента
import Product from './Product/Product'; // Імпорт компонента Product

const ProductList = () => {
  return (
    <div className="product-list">
      <h1>Наші Товари</h1>
      <h2>Великий вибір якісних товарів</h2>

      {/* Перший товар */}
      <Product
        name="Товар 1"
        image="/path/to/product1.jpg"
        price={50}
        shortDescription="Чудовий товар для вашого дому."
        description="Детальний опис: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vehicula maximus purus nec ultricies."
      />

      {/* Другий товар */}
      <Product
        name="Товар 2"
        image="/path/to/product2.jpg"
        price={70}
        shortDescription="Ідеальний подарунок для вашого друга."
        description="Детальний опис: Vivamus et interdum dolor, at consequat est. Integer vestibulum convallis augue non dapibus."
      />

      {/* Третій товар */}
      <Product
        name="Товар 3"
        image="/path/to/product3.jpg"
        price={100}
        shortDescription="Найкращий вибір для професійного використання."
        description="Детальний опис: Fusce tincidunt arcu ut nisi congue, vel efficitur metus interdum. Nulla facilisi."
      />
    </div>
  );
};

export default ProductList;
