import './App.css';

import Home from './Home';

const App = () => <div className="App">
  <Router>
    <div>
      <Route exact path="/" component={Home} />
     
    </div>
  </Router>
</div>;


export default App;
