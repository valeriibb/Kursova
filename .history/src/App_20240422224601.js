import React from 'react';
import Home from './Home'; // Import your Home component

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/Рщьу" component={Home} />
        
      </Switch>
    </Router>
  );
};

export default App;
