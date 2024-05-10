import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Home'; // Import your Home component

const App = () => {
  return (
    <Router>
        <Route path="/" component={Home} />
    </Router>
  );
};

export default App;
