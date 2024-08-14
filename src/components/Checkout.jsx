import { useContext } from "react";
import { CartContext } from "../context/CartContext";
const Checkout = ( ) => {
    const {cartItems} = useContext(CartContext);

    const totalAmount = ( ) => {
        let sum = 0;
        cartItems.map((item) => {
            sum += item.quantity * item.precio;
        });
        return sum;

    
    return(
        <h1>I am the checkout!</h1>
    )
}

export default Checkout; 