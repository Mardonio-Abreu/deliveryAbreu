import { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/CartContext";
import cartLogo from "./../assets/cartWidget.png"
const CartWidget = () => {

    const {cartItemsQuantity, cartItems} = useContext(CartContext);
    const [itemsNumber, setItemsNumber] = useState();

    useEffect( () => {
        setItemsNumber(cartItemsQuantity());
    },[cartItems]);



    return (
        <> 
            <p><img src={cartLogo} alt="cart logo" />{itemsNumber}</p>
        </>
    )
}

export default CartWidget;