import React from 'react';
import { BrowserRouter as Router, Routes, Switch } from 'react-router-dom';
import Home from './Home';


const App = () => {
  return (
    <Router>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
         
        </Routes>
    </Router>
  );
}

export default App;
