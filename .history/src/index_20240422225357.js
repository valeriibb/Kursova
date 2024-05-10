import React from 'react';
import ReactDOM from 'react-dom';
import { Routes ,Route } from 'react-router-dom';
import Home from './Home'; // Import your Home component

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' element={<Home/>} />
        {/* Add more routes for other paths */}
        {/* Example: */}
        {/* <Route exact path="/about" component={About} /> */}
      </Switch>
    </BrowserRouter>
  );
};

// Render the App component into the root element
ReactDOM.render(<App />, document.getElementById('root'));
