import { createContext } from "react";
import { useState } from "react";
const CartContext = createContext();

const CartProvider = ({children}) => {
    const [cartItems, setCartItems] = useState([]);

    const addCartItem = (itemId, quantity) => {
        setCartItems(...cartItems, {id: itemId, quantity: quantity});
    };

    const deleteCartItem = (itemId) => {
        const cartItemsArray = cartItems;
        const newCartItemArray = cartItems.filter((item) => item.id != itemId);
        setCartItems(newCartItemArray);
    };

    const cartItemsQuantity = () => {
        let counter = 0;
        cartItems.forEach(item => {
            counter = counter + item.quantity;
       });
       return quantity;

    }

    return (
        <CartContext.Provider>
            {children}
        </CartContext.Provider>
    );
};

export {CartProvider, CartContext, addCartItem, deleteCartItem, cartItemsQuantity};

