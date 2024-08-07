import cartLogo from "./../assets/cartWidget.png"
import { CartContext } from "../context/CartContext";
import { cartItemsQuantity } from "../context/CartContext";
const CartWidget = ({numberOfProducts}) => {
    return (
        <> 
            <p><img src={cartLogo} alt="cart logo" />{numberOfProducts}</p>
        </>
    )
}

export default CartWidget;