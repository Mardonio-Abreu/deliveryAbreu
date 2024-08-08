import logo from "../assets/logo.png"
import CartWidget from "./CartWidget";
import Nav from "react-bootstrap/Nav";
import DropdownMenu from "./Dropdown";
const NavBar = () => {

  return (
    <Nav variant="pills">
      <Nav.Item>
        <Nav.Link href="/">
          <img src={logo} alt="company logo" />
        </Nav.Link>
      </Nav.Item>
      <div className="NavBar">
       <DropdownMenu />   
       <Nav.Item>
         <Nav.Link href="/cart">
           <CartWidget />
         </Nav.Link>
       </Nav.Item>
      </div>
    </Nav>
  );
  
 

  

 

};

export default NavBar;