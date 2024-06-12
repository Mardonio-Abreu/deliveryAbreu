import cartLogo from "./../assets/cartWidget.png"
const CartWidget = ({numberOfProducts}) => {
    return (
        <> 
            <p><img src={cartLogo} alt="cart logo" />   {numberOfProducts}</p>
        </>
    )
}

export default CartWidget;