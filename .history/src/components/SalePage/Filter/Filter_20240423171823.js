import React, { useState } from 'react';
import './Filter.css'; // Подключаем стили для компонента

const Filter = ({ onFilterChange }) => {
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [category, setCategory] = useState('All'); // Начальное значение категории
  const [adress, setAdress] = useState('All'); // Начальное значение категории

  const handleMinPriceChange = (e) => {
    setMinPrice(e.target.value);
  };

  const handleMaxPriceChange = (e) => {
    setMaxPrice(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleAdresChange = (e) => {
    setCategory(e.target.value);
  };

  const handleApplyFilter = () => {
    const filterParams = {
      minPrice: minPrice.trim(),
      maxPrice: maxPrice.trim(),
      category: category === 'All' ? '' : category, // Если выбрана категория "All", то передаем пустую строку
    };

    // Вызываем колбэк-функцию для передачи параметров фильтрации родительскому компоненту
    onFilterChange(filterParams);
  };

  return (
    <div className="filter-container">
        <input
        type="text"
        placeholder="Введіть адресу"
        value={adress}
        onChange={handleMinPriceChange}
      />
      <input
        type="text"
        placeholder="Минимальная цена"
        value={minPrice}
        onChange={handleMinPriceChange}
      />
      <input
        type="text"
        placeholder="Максимальная цена"
        value={maxPrice}
        onChange={handleMaxPriceChange}
      />
      <select value={category} onChange={handleCategoryChange}>
        <option value="All">Все категории</option>
        <option value="Electronics">Электроника</option>
        <option value="Clothing">Одежда</option>
        <option value="Books">Книги</option>
      </select>
      <button onClick={handleApplyFilter}>Применить фильтр</button>
    </div>
  );
};

export default Filter;
