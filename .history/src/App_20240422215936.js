import './App.css';
import Navbar from './components/Navbar'
import Main from './components/Main/Main';
import ProductList from './components/Sales/ProductList'
import Footer from './components/Footer/Footer';
import GoogleMap from './components/Map/Map';

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Main />
      <ProductList/>
      <Footer />
    </div>
  );
};


export default App;
