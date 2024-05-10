import './App.css';
import Navbar from './components/Navbar'
import Main from './components/Main/Main'
import ProductList from './components/Sales/ProductList'
import Footer from './components/Footer/Footer';
<Router>
    <div>
      <Route exact path="/" component={Home} />
      <Route exact path="/users" component={Users} />
      <Route exact path="/login" component={Login} />
    </div>
  </Router>
  
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
