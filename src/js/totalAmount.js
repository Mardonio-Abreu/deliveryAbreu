const totalAmount = ( ) => {
    let sum = 0;
    cartItems.map((item) => {
        sum += item.quantity * item.price;
    });
    return sum;
    
}

export default totalAmount;