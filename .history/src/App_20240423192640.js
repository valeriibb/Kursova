import React from 'react';
import { BrowserRouter as Router, Route,Routes, Switch } from 'react-router-dom';
import Home from './Page1';
import Page2 from './Page2';


const App = () => {
  return (
    <Router>
        <Routes>
        <CSSTransition
              key={location.key}
              timeout={300} // Длительность анимации в миллисекундах
              classNames="fade" // Название CSS класса для анимации
            >
          <Route exact path="/" element={<Home/>}/>  
          </CSSTransition>
          <Route exact path="/sale-page" element={<Page2/>}/>  


        </Routes>
    </Router>
  );
}

export default App;
