import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import NavBar from './components/NavBar'
import ItemDetail from './components/ItemDetail';
import {ItemListContainer} from './components/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import '/src/App.css'
const App = () => {
  
  return (
    <>
      
      <NavBar />
      <Router>
        <Routes>
          <Route path = "/" element = {<ItemListContainer />}/>
          <Route path = "/category/:categoryId" element = {<ItemListContainer />} />
          <Route path = "/item/:itemId" element = {<ItemDetail />} />         
        </Routes>
      </Router>
    </>
  );
};

export default App;
