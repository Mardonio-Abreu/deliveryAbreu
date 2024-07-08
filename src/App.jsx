import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer';

const App = () => {
  
  return (
    <>
      
      <NavBar />
      <Router>
        <Routes>
          <Route path = "/category" element = {<ItemListContainer />}/>          
        </Routes>
      </Router>
      
    </>
  );
};

export default App;
