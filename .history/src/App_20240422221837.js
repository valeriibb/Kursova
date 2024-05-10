import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Home';


const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        
      </Switch>
    </Router>
  );
};

export default App;
