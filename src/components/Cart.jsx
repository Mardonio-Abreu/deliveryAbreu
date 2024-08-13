import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const Cart = () => {
    const { cartItems } = useContext(CartContext);

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
                        <div key={item.id}>
                            <p>{item.title}</p>
                            <img src={`/src/img/${item.thumbnail}`} alt="Alkaseltzer image" />
                            <p>{item.precio}</p>
                            <p>{item.quantity}</p>
                        </div>
                    ))}
                    <Link to={"/checkout"}>
                        <Button variant="primary">Checkout</Button>
                    </Link>
                </div>
            );
        }    
} 

export default Cart;
