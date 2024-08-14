import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const Cart = () => {
    const { cartItems, cartTotalPayment } = useContext(CartContext);

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
                            <p>{`Precio: ${item.precio} `}</p>
                            <p>{`Cantidad: ${item.quantity} `}</p>
                        </div>
                    ))}
                    <p>{`Total: ${cartTotalPayment()}`}</p>
                    <Link to={"/checkout"}>
                        <Button variant="primary">Checkout</Button>
                    </Link>
                </div>
            );
        }    
} 

export default Cart;
