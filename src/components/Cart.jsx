import { CartContext } from "../context/CartContext"
import { useContext } from "react"

const Cart = () => {

    const {cartItems} = useContext(CartContext);

    console.log(cartItems);
    
    return( 
    <h1>I'm a cart!</h1>

    );

}

export default Cart;