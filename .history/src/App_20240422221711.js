import './App.css';
import { Router, Route } from "react-router-dom";

import Home from './components/Home';

const App = () => <div className="App">
  <Router>
    <div>
      <Route exact path="/" component={Home} />
     
    </div>
  </Router>
</div>;


export default App;
