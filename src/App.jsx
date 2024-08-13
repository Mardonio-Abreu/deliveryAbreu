import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import NavBar from './components/NavBar'
import ItemDetail from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import '/src/App.css'
import { CartProvider } from './context/CartContext';
import Cart from './components/Cart'
import Checkout from './components/Checkout'

const App = () => {
 
  return (
    <CartProvider> 
      <Router>
      <NavBar/> 
        <Routes>
          <Route path = "/" element = {<ItemListContainer />}/>
          <Route path = "/category/:categoryId" element = {<ItemListContainer />} />
          <Route path = "/item/:itemId" element = {<ItemDetail />} />
          <Route path = "/cart" element = {<Cart />}/> 
          <Route path = "/checkout" element = {<Checkout />}/>         
        </Routes>
      </Router>
    </CartProvider>
  );
};

export default App;
