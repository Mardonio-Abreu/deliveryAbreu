import logo from "../assets/logo.png"
import CartWidget from "./CartWidget";
import Nav from "react-bootstrap/Nav";
const NavBar = () => {

    return (

<Nav variant="pills">
  <Nav.Item>
    <Nav.Link to = "/">
      <img src={logo} alt="company logo" />  
    </Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link to = "/category/comida">
      Comida
    </Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link to = "/category/tienda">
      Tienda
    </Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link to = "/category/farmacia">
      Farmacia
    </Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link to = "/category">
      <CartWidget numberOfProducts={5} /> 
    </Nav.Link>
  </Nav.Item>
</Nav>
);
};

export default NavBar;