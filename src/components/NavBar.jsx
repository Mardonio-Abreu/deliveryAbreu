import logo from "../assets/logo.png"
import CartWidget from "./CartWidget";
import Nav from "react-bootstrap/Nav";
import { useContext, useState, useEffect } from "react";
import { CartContext } from "../context/CartContext";
const NavBar = () => {

  const {cartItemsQuantity} = useContext(CartContext);
  const [itemsQuantity, setItemsQuantity] = useState(0);

  useEffect(( ) => {

    const newQuantity = () => {
      setItemsQuantity(cartItemsQuantity());
    }

    newQuantity();
  }, [])

  

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
            
            <Nav.Link href = "/cart">
              <Nav.Item>
                 <CartWidget numberOfProducts={itemsQuantity} /> 
              </Nav.Item>
            </Nav.Link>
          
          </Nav>
        );

};

export default NavBar;