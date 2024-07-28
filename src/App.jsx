import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar'
import ItemList from './components/ItemListContainer';
import ItemDetail from './components/ItemDetail';
import ItemCategoryList from './components/ItemCategoryList';
import ItemListContainer from './components/ItemListContainer';

const App = () => {
  
  return (
    <>
      
      <NavBar />
      <Router>
        <Routes>
          <Route path = "/" element = {<ItemListContainer />}/>
          <Route path = "/category/:categoryId" element = {<ItemCategoryList />} />
          <Route path = "/item/:id" element = {<ItemDetail />} />         
        </Routes>
      </Router>
    </>
  );
};

export default App;
