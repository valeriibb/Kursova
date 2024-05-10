import React from 'react';
import './.css'; // Підключення CSS стилів для компонента

const ProductList = () => {
  return (
    <div className="product-list">
      <h1>Наші Товари</h1>
      <h2>Великий вибір якісних товарів</h2>

      {/* Перший товар */}
      <div className="product">
        <img src="" alt="Товар 1" />
        <div className="details">
          <h3>Товар 1</h3>
          <p>Ціна: $50</p>
          <p>Короткий опис: Чудовий товар для вашого дому.</p>
          <p>
            Детальний опис: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            vehicula maximus purus nec ultricies.
          </p>
        </div>
      </div>

      {/* Другий товар */}
      <div className="product">
        <img src="" alt="Товар 2" />
        <div className="details">
          <h3>Товар 2</h3>
          <p>Ціна: $70</p>
          <p>Короткий опис: Ідеальний подарунок для вашого друга.</p>
          <p>
            Детальний опис: Vivamus et interdum dolor, at consequat est. Integer vestibulum
            convallis augue non dapibus.
          </p>
        </div>
      </div>

      {/* Третій товар */}
      <div className="product">
        <img src="" alt="Товар 3" />
        <div className="details">
          <h3>Товар 3</h3>
          <p>Ціна: $100</p>
          <p>Короткий опис: Найкращий вибір для професійного використання.</p>
          <p>
            Детальний опис: Fusce tincidunt arcu ut nisi congue, vel efficitur metus interdum.
            Nulla facilisi.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
