import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const Cart = () => {
    const { cartItems } = useContext(CartContext);

    const totalAmount = ( ) => {
        let sum = 0;
        cartItems.map((item) => {
            sum += item.quantity * item.price;
        });
        return sum;
        
    }

    if (cartItems.length === 0){
        return(
            <>
                <h1>El carrito esta vacio</h1>
                <Link to={"/"}>
                    <Button variant="primary">Continuar comprando</Button>
                </Link>
                
            </>
        );
    } else {

            return (
                <div className="cart">
                    {cartItems.map((item) => (
                        <div className="cartItem" key={item.id}>
                            <p>{item.title}</p>
                            <img src={`/src/img/${item.thumbnail}`} alt="Alkaseltzer image" />
                            <p>{`Unidades: ${item.quantity}`}</p>
                            <p>{`Precio: ${item.price} `}</p>
                            
                        </div>
                    ))}
                    <p>{`Total: ${totalAmount()}`}</p>
                    <Link to={"/checkout"}>
                        <Button variant="primary">Checkout</Button>
                    </Link>
                </div>
            );
        }    
} 

export default Cart;
