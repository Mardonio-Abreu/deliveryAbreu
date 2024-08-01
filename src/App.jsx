import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar'
import ItemDetail from './components/ItemDetail';
import {ItemListContainer} from './components/ItemListContainer';
import '/src/App.css'
const App = () => {
  
  return (
    <>
      
      <NavBar />
      <Router>
        <Routes>
          <Route path = "/" element = {<ItemListContainer />}/>
          <Route path = "/category/:categoryId" element = {<ItemListContainer />} />
          <Route path = "/item/:iitemId" element = {<ItemDetail />} />         
        </Routes>
      </Router>
    </>
  );
};

export default App;
