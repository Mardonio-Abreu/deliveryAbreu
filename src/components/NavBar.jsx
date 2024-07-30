import logo from "../assets/logo.png"
import CartWidget from "./CartWidget";
import Nav from "react-bootstrap/Nav";
const NavBar = () => {

return (

          <Nav variant="pills">
            
            <Nav.Link href = "/">
              <Nav.Item>
                <img src={logo} alt="company logo" />  
              </Nav.Item>
            </Nav.Link>
           
           
            <Nav.Link href= "/category/Tienda">     
              <Nav.Item>
                Tienda
              </Nav.Item>
            </Nav.Link>
          
            
            <Nav.Link href="/category/Farmacia">
              <Nav.Item>
                Farmacia
              </Nav.Item>
            </Nav.Link>
          
            <Nav.Link href="/category/Comida">
              <Nav.Item>
                Comida
              </Nav.Item>
            </Nav.Link>
            
            <Nav.Link href = "/">
              <Nav.Item>
                 <CartWidget numberOfProducts={5} /> 
              </Nav.Item>
            </Nav.Link>
          
          </Nav>
        );
      };

export default NavBar;