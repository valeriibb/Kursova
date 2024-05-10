import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Home'; // Import your Home component

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/products" component={Products} />
        <Route path="/contact" component={Contact} />
        <Route component={NotFound} /> {/* This is a catch-all route */}
      </Switch>
    </Router>
  );
};

export default App;
