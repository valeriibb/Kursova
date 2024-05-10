import './App.css';
import Navbar from './components/Navbar'
import Main from './components/Main/Main'
import ProductList from './components/Sales/ProductList'

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Main />
      <ProductList/>
    </div>
  );
};


export default App;
