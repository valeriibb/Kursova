import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar'
import Filter from './components/SalePage/Filter/Filter';
import ProductListforPage2 from './components/SalePage/MainSale/ProductList';
const Page2 = () => {
  return (
    <div className="Page2">
      <Filter />
      <ProductListforPage2 />

      <Footer />

      
    </div>
  );
};


export default Page2;
