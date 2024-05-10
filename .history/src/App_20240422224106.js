import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home'; // Import your Home component

const App = () => {
  return (
    <Router>
        <Route path="/" exact component={Home} />
    </Router>
  );
};

export default App;
