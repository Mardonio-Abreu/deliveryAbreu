import logo from "../assets/logo.png"
import CartWidget from "./CartWidget";
import Nav from "react-bootstrap/Nav";
const NavBar = () => {

    return (

<Nav variant="pills">
  <Nav.Item>
    <Nav.Link to = "/category">
      <img src={logo} alt="company logo" />  
    </Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link to = "/category">
      Comida
    </Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link to = "/category">
      Tienda
    </Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link to = "/category">
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