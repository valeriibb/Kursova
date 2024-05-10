import React, { useEffect } from 'react';

const GoogleMap = () => {
  useEffect(() => {
    // Функція ініціалізації карти
    const initializeMap = () => {
      const mapProp = {
        center: new window.google.maps.LatLng(23.0300, 72.5800),
        zoom: 5,
        mapTypeId: window.google.maps.MapTypeId.ROADMAP
      };

      // Створення нової карти з використанням властивостей mapProp
      const map = new window.google.maps.Map(document.getElementById("googleMap"), mapProp);
    };

    // Виклик функції initializeMap після завантаження сторінки
    window.google.maps.event.addDomListener(window, 'load', initializeMap);

    // Повернути функцію очищення після зміни компонента
    return () => {
      // Очистити карту після видалення компонента
      const mapElement = document.getElementById("googleMap");
      if (mapElement) {
        mapElement.innerHTML = ''; // Очистка елементу, щоб уникнути проблем з пам'яттю
      }
    };
  }, []); // Виклик useEffect тільки після першого рендеру

  return (
    <div id="googleMap" style={{ width: '500px', height: '380px' }}></div>
  );
};

export default GoogleMap;
