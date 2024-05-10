import React from 'react';
import { BrowserRouter as Router, Route,Routes, Switch } from 'react-router-dom';
import Home from './Page1';


const App = () => {
  return (
    <Router>
        <Routes>
          <Route exact path="/" element={<Home/>}/>          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/sale_page" element={<Home/>}/>          <Route exact path="/" element={<Home/>}/>


        </Routes>
    </Router>
  );
}

export default App;
