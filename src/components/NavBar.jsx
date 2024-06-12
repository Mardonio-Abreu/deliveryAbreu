import logo from "../assets/logo.png"
import CartWidget from "./CartWidget";
import Nav from "react-bootstrap/Nav";
const NavBar = () => {

    return (

<Nav variant="pills" defaultActiveKey="/home">
  <Nav.Item>
    <Nav.Link>
      <img src={logo} alt="company logo" />  
    </Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="link-1 ">Comida</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link href="/">Tienda</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="link-1">Farmacia</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link><CartWidget numberOfProducts={5} /></Nav.Link>
  </Nav.Item>
</Nav>
);

};

export default NavBar;