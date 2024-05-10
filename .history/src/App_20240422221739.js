import './App.css';
import { Router, Route } from "react-router-dom";

import Home from './Home';

const App = () => <div className="App">
  <Router>
    <div>
    <Route path="/" exact component={Home} />
     
    </div>
  </Router>
</div>;


export default App;
