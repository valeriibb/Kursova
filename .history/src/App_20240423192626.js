import React from 'react';
import { BrowserRouter as Router, Route,Routes, Switch } from 'react-router-dom';
import Home from './Page1';
import Page2 from './Page2';


const App = () => {
  return (
    <Router>
        <Routes>
          <Route exact path="/" element={<Home/>}/>  
          <Route exact path="/sale-page" element={<Page2/>}/>  


        </Routes>
    </Router>
  );
}

export default App;
