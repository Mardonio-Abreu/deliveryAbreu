import { useContext } from "react";
import { CartContext } from "../context/CartContext";
const Cart = () => {

    const {cartItems} = useContext(CartContext);
    console.log(cartItems);
    
    return(
        <div> 
            {
                
                    <div key={cartItems[0].id}>
                        <h1>I am a cart!</h1>
                        
                    </div>
                
            }
        </div>
    );

}

export default Cart;