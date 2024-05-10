import React from 'react';
import ReactDOM from 'react-dom';
import { Routes ,Route,Switch } from 'react-router-dom';
import Home from './Home'; // Import your Home component


const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/login" element={<Login/>}/>
          <Route exact path="/recovery-password" element={<RecoveryPassword/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </Layout>
    </Router>
  );
}
// Render the App component into the root element
ReactDOM.render(<App />, document.getElementById('root'));
