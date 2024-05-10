import Navbar from './components/Navbar'
import Main from './components/Main/Main'
import ProductList from './components/Sales/ProductList'
import Footer from './components/Footer/Footer';

const Page1 = () => {
  return (
    <div className="Page1">
      <Navbar />
      <Main />
      <ProductList/>
      <Footer />
    </div>
  );
};


export default Page1;
