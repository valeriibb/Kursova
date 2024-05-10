import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

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
