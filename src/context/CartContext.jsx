import { createContext } from "react";
import { useState } from "react";


const CartContext = createContext();
const CartProvider = ({children}) => {
    const [cartItems, setCartItems] = useState([]);

    const addCartItem = (itemId, quantity) => {
        setCartItems((prevCartItems) => {
            const itemIndex = prevCartItems.findIndex(item => item.id === itemId);
            if (itemIndex > -1) {
                const updatedCartItems = [...prevCartItems];
                updatedCartItems[itemIndex].quantity += quantity;
                return updatedCartItems;
            }
            return [...prevCartItems, {id: itemId, quantity: quantity}];
        });
    };
      
    const deleteCartItem = (itemId) => {
        const newCartItemArray = cartItems.filter((item) => item.id !== itemId);
        setCartItems(newCartItemArray);
    };

    const cartItemsQuantity = (() => {
        let counter = 0;
        cartItems.forEach((item) => {
            counter += item.quantity;
        });

        return counter;

    });

    return (
        <CartContext.Provider value={{cartItems, addCartItem, deleteCartItem, cartItemsQuantity}}>
            {children}
        </CartContext.Provider>
    );
};

export {CartProvider, CartContext};



