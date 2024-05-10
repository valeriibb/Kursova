import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Home'; // Import your Home component
import About from './About'; // Import other components as needed

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        {/* Add more routes for other paths */}
        {/* Example: */}
        {/* <Route exact path="/about" component={About} /> */}
      </Switch>
    </BrowserRouter>
  );
};

// Render the App component into the root element
ReactDOM.render(<App />, document.getElementById('root'));
