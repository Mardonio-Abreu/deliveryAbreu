import { useContext } from "react";
import { CartContext } from "../context/CartContext";
const Cart = () => {

    const {cartItems} = useContext(CartContext);
       
    return(

        <h1>I am an empty cart!</h1>

    );

}

export default Cart;