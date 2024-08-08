import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import NavBar from './components/NavBar'
import ItemDetail from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import Cart from './components/Cart'
import 'bootstrap/dist/css/bootstrap.min.css';
import '/src/App.css'
import { CartProvider } from './context/CartContext';
const App = () => {
  
  return (
    <>
      <Router>
        <CartProvider>
        <NavBar />
        <Routes>
          <Route path = "/" element = {<ItemListContainer />}/>
          <Route path = "/category/:categoryId" element = {<ItemListContainer />} />
          <Route path = "/item/:itemId" element = {<ItemDetail />} />
          <Route path = "/cart" element = {<Cart />}/>         
        </Routes>
        </CartProvider>
      </Router>
    </>
  );
};

export default App;
