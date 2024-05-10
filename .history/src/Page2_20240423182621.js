import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar'
import Filter from './components/SalePage/Filter/Filter';
import ProductList from './components/Sales/ProductList';
const Page2 = () => {
  return (
    <div className="Page2">
      <Filter />
      <ProductList />

      <Footer />

      
    </div>
  );
};


export default Page2;
