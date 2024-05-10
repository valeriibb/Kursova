import Navbar from './src/components/Navbar'
import Main from '.src/components/Main/Main'
import ProductList from './components/Sales/ProductList'
import Footer from './components/Footer/Footer';

const Home = () => {
  return (
    <div className="Home">
      <Navbar />
      <Main />
      <ProductList/>
      <Footer />
    </div>
  );
};


export default Home;
